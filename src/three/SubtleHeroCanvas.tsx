import { useEffect, useRef } from 'react';
import type React from 'react';
import * as THREE from 'three';

export const SubtleHeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
      });
    } catch {
      // Graceful fallback if WebGL fails
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Parent group for all elements
    const systemGroup = new THREE.Group();
    scene.add(systemGroup);

    // 1. Low-poly core wireframe octahedron
    const coreGeo = new THREE.OctahedronGeometry(1.65, 0);
    const wireframeGeo = new THREE.WireframeGeometry(coreGeo);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.35,
      linewidth: 1,
    });
    const coreLines = new THREE.LineSegments(wireframeGeo, lineMat);
    systemGroup.add(coreLines);

    // 2. Subtle node vertices at the 6 octahedron vertices
    const nodePositions = new Float32Array([
      1.65, 0, 0,
      -1.65, 0, 0,
      0, 1.65, 0,
      0, -1.65, 0,
      0, 0, 1.65,
      0, 0, -1.65,
    ]);
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    const nodeMat = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 0.12,
      transparent: true,
      opacity: 0.85,
    });
    const nodePoints = new THREE.Points(nodeGeo, nodeMat);
    systemGroup.add(nodePoints);

    // 3. Outer secondary low-poly bounding cage (Icosahedron)
    const outerGeo = new THREE.IcosahedronGeometry(2.35, 0);
    const outerWireframe = new THREE.WireframeGeometry(outerGeo);
    const outerLineMat = new THREE.LineBasicMaterial({
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.14,
    });
    const outerCage = new THREE.LineSegments(outerWireframe, outerLineMat);
    systemGroup.add(outerCage);

    // 4. Subtle datum orbital ring
    const ringRadius = 2.9;
    const ringSegments = 64;
    const ringPositions = new Float32Array((ringSegments + 1) * 3);
    for (let i = 0; i <= ringSegments; i++) {
      const theta = (i / ringSegments) * Math.PI * 2;
      ringPositions[i * 3] = Math.cos(theta) * ringRadius;
      ringPositions[i * 3 + 1] = Math.sin(theta) * ringRadius;
      ringPositions[i * 3 + 2] = 0;
    }
    const ringGeo = new THREE.BufferGeometry();
    ringGeo.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3));
    const ringMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.18,
    });
    const orbitalRing = new THREE.Line(ringGeo, ringMat);
    orbitalRing.rotation.x = Math.PI / 3;
    orbitalRing.rotation.y = Math.PI / 6;
    systemGroup.add(orbitalRing);

    // 5. Restrained ambient floating nodes (30 particles)
    const particleCount = 30;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 2.2 + Math.random() * 1.8;
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
      size: 0.05,
      transparent: true,
      opacity: 0.45,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    systemGroup.add(particles);

    // Mouse interaction tracking
    let targetX = 0;
    let targetY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.4;
      targetY = y * 0.4;
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

    // Visibility Observer to stop rendering when scrolled out of view
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

    const renderFrame = () => {
      if (!isVisible || document.hidden) {
        animId = requestAnimationFrame(renderFrame);
        return;
      }

      const delta = clock.getDelta();

      if (!prefersReducedMotion) {
        // Slow subtle rotation
        systemGroup.rotation.y += delta * 0.12;
        systemGroup.rotation.x += delta * 0.05;
        orbitalRing.rotation.z += delta * 0.08;

        // Smooth mouse lerping
        systemGroup.rotation.y += (targetX - systemGroup.rotation.y * 0.1) * 0.05;
        systemGroup.rotation.x += (-targetY - systemGroup.rotation.x * 0.1) * 0.05;
      }

      renderer?.render(scene, camera);
      animId = requestAnimationFrame(renderFrame);
    };

    animId = requestAnimationFrame(renderFrame);

    // Cleanup
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

      coreGeo.dispose();
      wireframeGeo.dispose();
      lineMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      outerGeo.dispose();
      outerWireframe.dispose();
      outerLineMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[300px] sm:min-h-[360px] flex items-center justify-center pointer-events-none select-none"
      aria-hidden="true"
    />
  );
};
