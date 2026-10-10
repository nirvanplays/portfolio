import { useEffect, useRef } from 'react';
import type React from 'react';
import * as THREE from 'three';

export const SubtleHeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene & Camera setup
    const scene = new THREE.Scene();
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
      });
    } catch {
      return; // Graceful fallback
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Master group for computational structure
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Central Mathematical Geometric Core (Low-poly Icosahedron Wireframe)
    const coreGeo = new THREE.IcosahedronGeometry(1.45, 0);
    const wireframeGeo = new THREE.WireframeGeometry(coreGeo);
    const coreLineMat = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.28,
    });
    const coreMesh = new THREE.LineSegments(wireframeGeo, coreLineMat);
    masterGroup.add(coreMesh);

    // 2. Internal Core Nodes
    const corePos = coreGeo.attributes.position;
    const internalNodeCount = 12;
    const internalPositions = new Float32Array(internalNodeCount * 3);
    for (let i = 0; i < internalNodeCount; i++) {
      internalPositions[i * 3] = corePos.getX(i);
      internalPositions[i * 3 + 1] = corePos.getY(i);
      internalPositions[i * 3 + 2] = corePos.getZ(i);
    }
    const internalNodeGeo = new THREE.BufferGeometry();
    internalNodeGeo.setAttribute('position', new THREE.BufferAttribute(internalPositions, 3));
    const internalNodeMat = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 0.08,
      transparent: true,
      opacity: 0.75,
    });
    const internalNodes = new THREE.Points(internalNodeGeo, internalNodeMat);
    masterGroup.add(internalNodes);

    // 3. Elegant Elliptical Orbiting Paths (Thin Mathematical Trajectories)
    const createOrbitRing = (radiusX: number, radiusY: number, color: number, opacity: number, rotX: number, rotY: number) => {
      const segments = 64;
      const positions = new Float32Array((segments + 1) * 3);
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        positions[i * 3] = Math.cos(theta) * radiusX;
        positions[i * 3 + 1] = Math.sin(theta) * radiusY;
        positions[i * 3 + 2] = 0;
      }
      const ringGeo = new THREE.BufferGeometry();
      ringGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const ringMat = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity,
      });
      const ringMesh = new THREE.Line(ringGeo, ringMat);
      ringMesh.rotation.x = rotX;
      ringMesh.rotation.y = rotY;
      return { mesh: ringMesh, geo: ringGeo, mat: ringMat };
    };

    const orbit1 = createOrbitRing(2.3, 2.3, 0x3b82f6, 0.18, Math.PI / 3.2, Math.PI / 5);
    const orbit2 = createOrbitRing(2.6, 2.2, 0x94a3b8, 0.12, -Math.PI / 4, Math.PI / 6);
    masterGroup.add(orbit1.mesh);
    masterGroup.add(orbit2.mesh);

    // 4. Few Restrained Floating Computational Nodes along outer boundaries
    const outerNodeCount = 18;
    const outerPositions = new Float32Array(outerNodeCount * 3);
    for (let i = 0; i < outerNodeCount; i++) {
      const theta = (i / outerNodeCount) * Math.PI * 2;
      const r = 2.1 + (i % 3) * 0.25;
      outerPositions[i * 3] = Math.cos(theta) * r;
      outerPositions[i * 3 + 1] = Math.sin(theta) * r;
      outerPositions[i * 3 + 2] = ((i % 5) - 2) * 0.3;
    }
    const outerNodeGeo = new THREE.BufferGeometry();
    outerNodeGeo.setAttribute('position', new THREE.BufferAttribute(outerPositions, 3));
    const outerNodeMat = new THREE.PointsMaterial({
      color: 0x94a3b8,
      size: 0.05,
      transparent: true,
      opacity: 0.45,
    });
    const outerNodes = new THREE.Points(outerNodeGeo, outerNodeMat);
    masterGroup.add(outerNodes);

    // Mouse Interaction (Max 5-8px subtle parallax)
    let targetX = 0;
    let targetY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.12;
      targetY = y * 0.12;
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

    // IntersectionObserver to pause when off-screen
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
        // Very slow, subtle motion
        masterGroup.rotation.y += delta * 0.08;
        masterGroup.rotation.x += delta * 0.03;
        orbit1.mesh.rotation.z += delta * 0.05;
        orbit2.mesh.rotation.z -= delta * 0.04;

        // Subtle mouse parallax response
        masterGroup.rotation.y += (targetX - masterGroup.rotation.y * 0.05) * 0.04;
        masterGroup.rotation.x += (-targetY - masterGroup.rotation.x * 0.05) * 0.04;
      }

      renderer?.render(scene, camera);
      animId = requestAnimationFrame(renderFrame);
    };

    animId = requestAnimationFrame(renderFrame);

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

      coreGeo.dispose();
      wireframeGeo.dispose();
      coreLineMat.dispose();
      internalNodeGeo.dispose();
      internalNodeMat.dispose();
      orbit1.geo.dispose();
      orbit1.mat.dispose();
      orbit2.geo.dispose();
      orbit2.mat.dispose();
      outerNodeGeo.dispose();
      outerNodeMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[340px] sm:min-h-[420px] flex items-center justify-center pointer-events-none select-none"
      aria-hidden="true"
    />
  );
};
