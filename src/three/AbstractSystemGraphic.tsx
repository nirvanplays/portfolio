import { useEffect, useRef } from 'react';
import type React from 'react';
import * as THREE from 'three';

export const AbstractSystemGraphic: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Disabled on mobile & tablet for instant performance
    if (window.innerWidth < 1024) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── SCENE & CAMERA ──
    const scene = new THREE.Scene();
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 0, 6.2);

    // ── RENDERER ──
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
        stencil: false,
        depth: true,
      });
    } catch {
      return; // Graceful degradation if WebGL is unavailable
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // ── ROOT SYSTEM GROUP ──
    const systemGroup = new THREE.Group();
    scene.add(systemGroup);

    // 1. Low-poly core octahedron wireframe
    const coreGeo = new THREE.OctahedronGeometry(1.25, 0);
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreWireMat);
    systemGroup.add(coreMesh);

    // Inner translucent face fill for matte depth
    const coreFillMat = new THREE.MeshBasicMaterial({
      color: 0x12151c,
      transparent: true,
      opacity: 0.85,
    });
    const coreFillMesh = new THREE.Mesh(coreGeo, coreFillMat);
    systemGroup.add(coreFillMesh);

    // 2. Vertex Nodes at geometric vertices
    const nodeGeo = new THREE.SphereGeometry(0.045, 8, 8);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x60a5fa });
    const nodePositions = [
      [1.25, 0, 0],
      [-1.25, 0, 0],
      [0, 1.25, 0],
      [0, -1.25, 0],
      [0, 0, 1.25],
      [0, 0, -1.25],
    ];

    nodePositions.forEach(([x, y, z]) => {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(x, y, z);
      systemGroup.add(node);
    });

    // 3. Outer restrained bounding ring (subtle slate line)
    const ringGeo = new THREE.TorusGeometry(1.9, 0.008, 6, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x475569,
      transparent: true,
      opacity: 0.4,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3.2;
    ring.rotation.y = Math.PI / 6;
    systemGroup.add(ring);

    // 4. Restrained particles (exactly 24 particles)
    const particleCount = 24;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 1.4 + Math.random() * 1.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x94a3b8,
      size: 0.035,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    systemGroup.add(particles);

    // ── SUBTLE MOUSE PARALLAX (REFS ONLY) ──
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouse.targetX = (e.clientX - cx) / (window.innerWidth / 2);
      mouse.targetY = (e.clientY - cy) / (window.innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // ── VISIBILITY CULLING ──
    let isVisible = true;
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          isVisible = e.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    visibilityObserver.observe(container);

    // ── RENDER LOOP ──
    let animId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      animId = requestAnimationFrame(animate);

      if (document.hidden || !isVisible) return;

      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      if (!prefersReducedMotion) {
        systemGroup.rotation.y += delta * 0.22;
        systemGroup.rotation.x = Math.sin(currentTime * 0.0005) * 0.1 + mouse.y * 0.18;
        systemGroup.rotation.z = mouse.x * 0.18;
        ring.rotation.z -= delta * 0.1;
        particles.rotation.y -= delta * 0.05;
      }

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    // ── CLEANUP ──
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      visibilityObserver.disconnect();

      coreGeo.dispose();
      coreWireMat.dispose();
      coreFillMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[260px] max-h-[300px] flex items-center justify-center pointer-events-none select-none"
      aria-hidden="true"
    />
  );
};
