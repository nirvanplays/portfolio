import { useEffect, useRef } from 'react';
import type React from 'react';
import * as THREE from 'three';

export const HeroCoreCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect device capabilities
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── SCENE & CAMERA ────────────────────────────────────────────────────────
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      50
    );
    camera.position.set(0, 0, 7.0);

    // ── LIGHTWEIGHT RENDERER ──────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'default',
      stencil: false,
      depth: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    // Strict pixel ratio cap: 1.5 desktop, 1.0 mobile for locked 60 FPS
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.0 : 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // ── ROOT SYSTEM GROUP ─────────────────────────────────────────────────────
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // ── 1. LOW-POLY GEOMETRIC CORE ────────────────────────────────────────────
    // Inner faceted nucleus: dark metallic icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x0c1017,
      emissive: 0x00e5ff,
      emissiveIntensity: 0.65,
      roughness: 0.25,
      metalness: 0.85,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(coreMesh);

    // Outer refined wireframe facet cage
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(coreGeo, wireMat);
    wireMesh.scale.setScalar(1.02);
    rootGroup.add(wireMesh);

    // ── 2. ELEGANT THIN ORBITAL LINES ─────────────────────────────────────────
    const orbit1Geo = new THREE.TorusGeometry(2.1, 0.005, 6, 80);
    const orbit1Mat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.4,
    });
    const orbit1 = new THREE.Mesh(orbit1Geo, orbit1Mat);
    orbit1.rotation.x = Math.PI / 3.2;
    orbit1.rotation.y = Math.PI / 6;
    rootGroup.add(orbit1);

    const orbit2Geo = new THREE.TorusGeometry(2.7, 0.004, 6, 80);
    const orbit2Mat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.3,
    });
    const orbit2 = new THREE.Mesh(orbit2Geo, orbit2Mat);
    orbit2.rotation.x = -Math.PI / 4;
    orbit2.rotation.y = Math.PI / 3;
    rootGroup.add(orbit2);

    // ── 3. RESTRAINED PARTICLE FIELD ──────────────────────────────────────────
    // Highly optimized: 160 on desktop, 60 on mobile
    const particleCount = isMobile ? 60 : 160;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: isMobile ? 0.035 : 0.03,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    // ── 4. SUBTLE LIGHTING ────────────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0x0a101d, 2.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x00e5ff, 2.0);
    keyLight.position.set(3, 4, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x6366f1, 1.2);
    fillLight.position.set(-3, -2, -2);
    scene.add(fillLight);

    // ── 5. SUBTLE MOUSE PARALLAX (REFS ONLY, NO REACT STATE) ──────────────────
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // ── 6. RESIZE OBSERVER ────────────────────────────────────────────────────
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    resizeObserver.observe(container);

    // ── 7. INTERSECTION OBSERVER FOR PERFORMANCE CULLING ──────────────────────
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

    // ── 8. RENDER LOOP ────────────────────────────────────────────────────────
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Early exit if off-screen or tab hidden (ZERO GPU waste)
      if (document.hidden || !isVisible) return;

      const delta = clock.getDelta();
      const t = clock.getElapsedTime();

      // Gentle mouse parallax lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.035;
      mouse.y += (mouse.targetY - mouse.y) * 0.035;

      if (!prefersReducedMotion) {
        // Calm, elegant rotation
        coreMesh.rotation.y += delta * 0.25;
        coreMesh.rotation.x = Math.sin(t * 0.3) * 0.15;
        wireMesh.rotation.y = coreMesh.rotation.y;
        wireMesh.rotation.x = coreMesh.rotation.x;

        orbit1.rotation.z += delta * 0.12;
        orbit2.rotation.z -= delta * 0.09;
        particles.rotation.y += delta * 0.04;

        // Subtle mouse tilt
        rootGroup.rotation.y = mouse.x * 0.25;
        rootGroup.rotation.x = -mouse.y * 0.2;
      }

      renderer.render(scene, camera);
    };

    animate();

    // ── 9. CLEAN DISPOSAL (ZERO MEMORY LEAKS) ──────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();

      coreGeo.dispose();
      orbit1Geo.dispose();
      orbit2Geo.dispose();
      particleGeo.dispose();

      coreMat.dispose();
      wireMat.dispose();
      orbit1Mat.dispose();
      orbit2Mat.dispose();
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
      className="w-full h-full min-h-[320px] max-h-[520px] flex items-center justify-center pointer-events-none select-none"
      aria-hidden="true"
    />
  );
};
