'use client';

import { useEffect, useRef } from 'react';
import type React from 'react';
import * as THREE from 'three';

export const StarBackgroundCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 1.2;

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

    const starsGroup = new THREE.Group();
    scene.add(starsGroup);

    // 1. Deep Field Stars (3,600 particles in spherical shell)
    const starCount = window.innerWidth < 768 ? 1600 : 3600;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    const colorPalette = [
      new THREE.Color('#ffffff'), // Starlight white
      new THREE.Color('#38bdf8'), // Cyan
      new THREE.Color('#00ff99'), // SparkX neon green
      new THREE.Color('#c084fc'), // Violet
      new THREE.Color('#818cf8'), // Indigo
    ];

    for (let i = 0; i < starCount; i++) {
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
      size: 0.008,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starField = new THREE.Points(starGeo, starMat);
    starsGroup.add(starField);

    // 2. Interactive Constellation Network (Floating interconnected nodes)
    const nodeCount = window.innerWidth < 768 ? 40 : 85;
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeVelocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodePositions[i * 3] = (Math.random() - 0.5) * 3.2;
      nodePositions[i * 3 + 1] = (Math.random() - 0.5) * 3.2;
      nodePositions[i * 3 + 2] = (Math.random() - 0.5) * 1.5;

      nodeVelocities.push({
        x: (Math.random() - 0.5) * 0.002,
        y: (Math.random() - 0.5) * 0.002,
        z: (Math.random() - 0.5) * 0.001,
      });
    }

    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    const nodeMat = new THREE.PointsMaterial({
      size: 0.016,
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const nodePoints = new THREE.Points(nodeGeo, nodeMat);
    starsGroup.add(nodePoints);

    // Dynamic Line Segments connecting close nodes
    const maxLineSegments = nodeCount * (nodeCount - 1);
    const linePositions = new Float32Array(maxLineSegments * 3);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x7042f8,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });
    const lineSegments = new THREE.LineSegments(lineGeo, lineMat);
    starsGroup.add(lineSegments);

    // 3. Subtle Cosmic Dust Ring
    const ringGeo = new THREE.BufferGeometry();
    const ringPts = 64;
    const ringPositions = new Float32Array((ringPts + 1) * 3);
    for (let i = 0; i <= ringPts; i++) {
      const angle = (i / ringPts) * Math.PI * 2;
      ringPositions[i * 3] = Math.cos(angle) * 2.5;
      ringPositions[i * 3 + 1] = Math.sin(angle) * 2.2;
      ringPositions[i * 3 + 2] = -0.4;
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

    // Mouse Tracking Parallax
    let targetX = 0;
    let targetY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 0.18;
      const y = (e.clientY / window.innerHeight - 0.5) * 0.18;
      targetX = x;
      targetY = y;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll Integration
    let scrollRotationY = 0;
    const handleScroll = () => {
      scrollRotationY = (window.scrollY / 1000) * 0.35;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize
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
        // Starfield slow rotation
        starField.rotation.y += delta * 0.025;
        starField.rotation.x -= delta * 0.012;

        // Animate constellation nodes
        const posAttr = nodeGeo.attributes.position as THREE.BufferAttribute;
        const lineAttr = lineGeo.attributes.position as THREE.BufferAttribute;
        let lineVertexCount = 0;
        const connectionDist = 0.48;

        for (let i = 0; i < nodeCount; i++) {
          const vx = nodeVelocities[i].x;
          const vy = nodeVelocities[i].y;
          const vz = nodeVelocities[i].z;

          let px = posAttr.getX(i) + vx;
          let py = posAttr.getY(i) + vy;
          let pz = posAttr.getZ(i) + vz;

          // Boundary bounce
          if (px > 1.6 || px < -1.6) nodeVelocities[i].x *= -1;
          if (py > 1.6 || py < -1.6) nodeVelocities[i].y *= -1;
          if (pz > 0.8 || pz < -0.8) nodeVelocities[i].z *= -1;

          posAttr.setXYZ(i, px, py, pz);

          // Connect near neighbors
          for (let j = i + 1; j < nodeCount; j++) {
            const dx = px - posAttr.getX(j);
            const dy = py - posAttr.getY(j);
            const dz = pz - posAttr.getZ(j);
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < connectionDist) {
              lineAttr.setXYZ(lineVertexCount, px, py, pz);
              lineVertexCount++;
              lineAttr.setXYZ(lineVertexCount, posAttr.getX(j), posAttr.getY(j), posAttr.getZ(j));
              lineVertexCount++;
            }
          }
        }

        posAttr.needsUpdate = true;
        lineGeo.setDrawRange(0, lineVertexCount);
        lineAttr.needsUpdate = true;

        // Smooth mouse parallax lerp
        starsGroup.rotation.y += (targetX + scrollRotationY - starsGroup.rotation.y) * 0.04;
        starsGroup.rotation.x += (-targetY - starsGroup.rotation.x) * 0.04;

        // Subtle node twinkle
        nodeMat.size = 0.014 + Math.sin(time * 2.5) * 0.004;
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
      nodeGeo.dispose();
      nodeMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
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
