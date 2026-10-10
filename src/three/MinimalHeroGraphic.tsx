import { useEffect, useRef } from 'react';
import type React from 'react';
import * as THREE from 'three';

export const MinimalHeroGraphic: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Disabled on mobile for instant performance & battery efficiency
    if (window.innerWidth < 768) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── SCENE & CAMERA ──
    const scene = new THREE.Scene();
    const width = container.clientWidth || 260;
    const height = container.clientHeight || 260;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 0, 5.2);

    // ── RENDERER ──
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
      });
    } catch {
      // Graceful fallback if WebGL is disabled or unsupported
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);

    // ── MINIMAL GEOMETRIC STRUCTURE ──
    const group = new THREE.Group();
    scene.add(group);

    // Subtle faceted core (light clean slate)
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xf1f5f9,
      wireframe: false,
      transparent: true,
      opacity: 0.6,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Elegant thin wireframe overlay (professional blue)
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const wireMesh = new THREE.Mesh(coreGeo, wireMat);
    wireMesh.scale.setScalar(1.002);
    group.add(wireMesh);

    // Minimal orbit ring (subtle slate-400)
    const ringGeo = new THREE.TorusGeometry(1.85, 0.012, 8, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.5,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    ringMesh.rotation.y = Math.PI / 6;
    group.add(ringMesh);

    // ── MOUSE PARALLAX (REFS ONLY) ──
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouse.targetX = ((e.clientX - cx) / (window.innerWidth / 2));
      mouse.targetY = ((e.clientY - cy) / (window.innerHeight / 2));
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // ── VISIBILITY OBSERVER ──
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

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      if (!prefersReducedMotion) {
        group.rotation.y += delta * 0.28;
        group.rotation.x = Math.sin(currentTime * 0.0006) * 0.12 + mouse.y * 0.2;
        group.rotation.z = mouse.x * 0.2;
        ringMesh.rotation.z -= delta * 0.15;
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
      ringGeo.dispose();
      coreMat.dispose();
      wireMat.dispose();
      ringMat.dispose();

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hidden md:flex w-[260px] h-[260px] lg:w-[280px] lg:h-[280px] items-center justify-center pointer-events-none select-none"
      aria-hidden="true"
    />
  );
};
