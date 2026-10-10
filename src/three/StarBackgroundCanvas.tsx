'use client';

import { useEffect, useRef } from 'react';
import type React from 'react';
import * as THREE from 'three';

export const StarBackgroundCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 1;

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x030014, 1);
    container.appendChild(renderer.domElement);

    // Group for all celestial objects
    const starsGroup = new THREE.Group();
    scene.add(starsGroup);

    // 1. Deep Field Stars (3,500 particles in spherical shell)
    const starCount = window.innerWidth < 768 ? 1600 : 3600;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    const colorPalette = [
      new THREE.Color('#ffffff'), // White starlight
      new THREE.Color('#93c5fd'), // Soft blue
      new THREE.Color('#38bdf8'), // Cyan starlight
      new THREE.Color('#c084fc'), // Violet
      new THREE.Color('#818cf8'), // Indigo
    ];

    for (let i = 0; i < starCount; i++) {
      // Sphere distribution with radius between 1.2 and 4.0
      const radius = 1.2 + Math.random() * 2.8;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.007,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starField = new THREE.Points(starGeo, starMat);
    starsGroup.add(starField);

    // 2. Bright Hero Star Clusters (Twinkling foreground sparkles)
    const clusterCount = 180;
    const clusterPos = new Float32Array(clusterCount * 3);
    for (let i = 0; i < clusterCount; i++) {
      clusterPos[i * 3] = (Math.random() - 0.5) * 3;
      clusterPos[i * 3 + 1] = (Math.random() - 0.5) * 3;
      clusterPos[i * 3 + 2] = (Math.random() - 0.5) * 1.5;
    }
    const clusterGeo = new THREE.BufferGeometry();
    clusterGeo.setAttribute('position', new THREE.BufferAttribute(clusterPos, 3));
    const clusterMat = new THREE.PointsMaterial({
      size: 0.015,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const clusterField = new THREE.Points(clusterGeo, clusterMat);
    starsGroup.add(clusterField);

    // 3. Subtle Cosmic Dust / Distant Nebula Rings
    const ringGeo = new THREE.BufferGeometry();
    const ringPts = 64;
    const ringPositions = new Float32Array((ringPts + 1) * 3);
    for (let i = 0; i <= ringPts; i++) {
      const angle = (i / ringPts) * Math.PI * 2;
      ringPositions[i * 3] = Math.cos(angle) * 2.5;
      ringPositions[i * 3 + 1] = Math.sin(angle) * 2.2;
      ringPositions[i * 3 + 2] = -0.5;
    }
    ringGeo.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3));
    const ringMat = new THREE.LineBasicMaterial({
      color: 0x7042f8,
      transparent: true,
      opacity: 0.12,
    });
    const cosmicRing = new THREE.Line(ringGeo, ringMat);
    cosmicRing.rotation.x = Math.PI / 4;
    cosmicRing.rotation.y = Math.PI / 6;
    starsGroup.add(cosmicRing);

    // Mouse Parallax
    let targetX = 0;
    let targetY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 0.12;
      const y = (e.clientY / window.innerHeight - 0.5) * 0.12;
      targetX = x;
      targetY = y;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll Rotation
    let scrollRotationY = 0;
    const handleScroll = () => {
      scrollRotationY = (window.scrollY / 1000) * 0.3;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Window Resize
    const handleResize = () => {
      if (!renderer) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      if (document.hidden) {
        animId = requestAnimationFrame(animate);
        return;
      }

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Slow natural cosmic rotation
        starField.rotation.y += delta * 0.03;
        starField.rotation.x -= delta * 0.015;

        // Subtle cluster twinkle pulsation
        clusterMat.size = 0.014 + Math.sin(time * 2) * 0.004;

        // Mouse Parallax & Scroll Integration
        starsGroup.rotation.y += (targetX + scrollRotationY - starsGroup.rotation.y) * 0.04;
        starsGroup.rotation.x += (-targetY - starsGroup.rotation.x) * 0.04;

        cosmicRing.rotation.z += delta * 0.02;
      }

      renderer?.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (renderer) {
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
      }

      starGeo.dispose();
      starMat.dispose();
      clusterGeo.dispose();
      clusterMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden"
      aria-hidden="true"
    />
  );
};
