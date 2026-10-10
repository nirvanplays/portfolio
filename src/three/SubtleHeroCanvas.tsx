import { useEffect, useRef } from 'react';
import type React from 'react';
import * as THREE from 'three';

export const SubtleHeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check mobile or reduced motion preference
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // If mobile or reduced motion, render minimal lightweight fallback
    if (isMobile) {
      return;
    }

    // Setup Three.js Scene
    const scene = new THREE.Scene();
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
      });
    } catch {
      return; // WebGL unavailable fallback
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Engineering Architecture System Group
    const systemGroup = new THREE.Group();
    scene.add(systemGroup);

    // 1. Central Core Node
    const centerGeo = new THREE.BufferGeometry();
    centerGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0]), 3));
    const centerMat = new THREE.PointsMaterial({
      color: 0x3b82f6,
      size: 0.18,
      transparent: true,
      opacity: 0.95,
    });
    const centerNode = new THREE.Points(centerGeo, centerMat);
    systemGroup.add(centerNode);

    // 2. 5 Distributed Satellite Architecture Nodes
    const baseNodePositions = [
      new THREE.Vector3(1.7, 0.8, 0.4),
      new THREE.Vector3(-1.6, 0.9, -0.4),
      new THREE.Vector3(-1.2, -1.3, 0.5),
      new THREE.Vector3(1.3, -1.2, -0.5),
      new THREE.Vector3(0.2, 1.8, -0.3),
    ];

    const satelliteGeo = new THREE.BufferGeometry();
    const satellitePosArray = new Float32Array(baseNodePositions.length * 3);
    baseNodePositions.forEach((pos, idx) => {
      satellitePosArray[idx * 3] = pos.x;
      satellitePosArray[idx * 3 + 1] = pos.y;
      satellitePosArray[idx * 3 + 2] = pos.z;
    });
    satelliteGeo.setAttribute('position', new THREE.BufferAttribute(satellitePosArray, 3));
    const satelliteMat = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 0.11,
      transparent: true,
      opacity: 0.85,
    });
    const satelliteNodes = new THREE.Points(satelliteGeo, satelliteMat);
    systemGroup.add(satelliteNodes);

    // 3. Network Architecture Lines (Center to satellites + inter-satellite connections)
    const connectionPoints: number[] = [];

    baseNodePositions.forEach((pos) => {
      // Line from center to satellite
      connectionPoints.push(0, 0, 0);
      connectionPoints.push(pos.x, pos.y, pos.z);
    });

    // Cross-connections between adjacent components
    const crossPairs = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [4, 0],
      [4, 1],
    ];

    crossPairs.forEach(([i, j]) => {
      connectionPoints.push(baseNodePositions[i].x, baseNodePositions[i].y, baseNodePositions[i].z);
      connectionPoints.push(baseNodePositions[j].x, baseNodePositions[j].y, baseNodePositions[j].z);
    });

    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(connectionPoints, 3));
    const linesMat = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.25,
      linewidth: 1,
    });
    const networkLines = new THREE.LineSegments(linesGeo, linesMat);
    systemGroup.add(networkLines);

    // 4. Subtle Concentric Orbit Paths
    const createOrbit = (radiusX: number, radiusY: number, rotX: number, rotY: number, opacity: number) => {
      const segs = 64;
      const pts = new Float32Array((segs + 1) * 3);
      for (let i = 0; i <= segs; i++) {
        const theta = (i / segs) * Math.PI * 2;
        pts[i * 3] = Math.cos(theta) * radiusX;
        pts[i * 3 + 1] = Math.sin(theta) * radiusY;
        pts[i * 3 + 2] = 0;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pts, 3));
      const mat = new THREE.LineBasicMaterial({
        color: 0x94a3b8,
        transparent: true,
        opacity,
      });
      const orbitLine = new THREE.Line(geo, mat);
      orbitLine.rotation.x = rotX;
      orbitLine.rotation.y = rotY;
      return { line: orbitLine, geo, mat };
    };

    const orbit1 = createOrbit(2.2, 2.2, Math.PI / 3.4, Math.PI / 6, 0.14);
    const orbit2 = createOrbit(2.5, 2.1, -Math.PI / 4, Math.PI / 5, 0.09);
    systemGroup.add(orbit1.line);
    systemGroup.add(orbit2.line);

    // Subtle Cursor Parallax (Capped at 5-8px)
    let targetX = 0;
    let targetY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.08;
      targetY = y * 0.08;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container || !renderer) return;
      const newWidth = container.clientWidth || 400;
      const newHeight = container.clientHeight || 400;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Pause when out of view
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const render = () => {
      if (!isVisible || document.hidden) {
        animId = requestAnimationFrame(render);
        return;
      }

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Very slow, calm motion
        systemGroup.rotation.y += delta * 0.06;
        systemGroup.rotation.x += delta * 0.02;
        orbit1.line.rotation.z += delta * 0.03;
        orbit2.line.rotation.z -= delta * 0.02;

        // Subtle node drift
        const posAttr = satelliteGeo.attributes.position;
        baseNodePositions.forEach((pos, idx) => {
          const drift = Math.sin(time * 0.8 + idx) * 0.04;
          posAttr.setY(idx, pos.y + drift);
        });
        posAttr.needsUpdate = true;

        // Smooth mouse parallax lerp
        systemGroup.rotation.y += (targetX - systemGroup.rotation.y * 0.04) * 0.03;
        systemGroup.rotation.x += (-targetY - systemGroup.rotation.x * 0.04) * 0.03;
      }

      renderer?.render(scene, camera);
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    // Cleanup resources
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      if (renderer) {
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
      }

      centerGeo.dispose();
      centerMat.dispose();
      satelliteGeo.dispose();
      satelliteMat.dispose();
      linesGeo.dispose();
      linesMat.dispose();
      orbit1.geo.dispose();
      orbit1.mat.dispose();
      orbit2.geo.dispose();
      orbit2.mat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[320px] sm:min-h-[400px] flex items-center justify-center pointer-events-none select-none"
      aria-hidden="true"
    />
  );
};
