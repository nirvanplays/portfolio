import { useEffect, useRef } from 'react';
import type React from 'react';
import * as THREE from 'three';

export const SubtleHeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Mobile / reduced motion check
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isMobile) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
      });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Root Group
    const systemGroup = new THREE.Group();
    scene.add(systemGroup);

    // ── 1. Central "System Core" Structure ──
    const coreGeo = new THREE.OctahedronGeometry(0.38, 0);
    const coreEdges = new THREE.EdgesGeometry(coreGeo);
    const coreMat = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.LineSegments(coreEdges, coreMat);
    systemGroup.add(coreMesh);

    // Tiny inner kernel
    const kernelGeo = new THREE.BufferGeometry();
    kernelGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0]), 3));
    const kernelMat = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 0.14,
      transparent: true,
      opacity: 0.9,
    });
    const kernel = new THREE.Points(kernelGeo, kernelMat);
    systemGroup.add(kernel);

    // ── 2. 6 Distributed Architecture Nodes (Grouped & Clustered) ──
    // Group A (Services cluster: 0 & 1), Group B (Storage cluster: 2 & 3), Node 4 (Pipeline), Node 5 (Gateway)
    const baseNodePositions = [
      new THREE.Vector3(1.35, 0.75, 0.25),   // Node 0 (Group A)
      new THREE.Vector3(1.65, 0.35, -0.2),   // Node 1 (Group A)
      new THREE.Vector3(-1.25, -0.65, 0.35), // Node 2 (Group B)
      new THREE.Vector3(-0.95, -1.15, -0.1), // Node 3 (Group B)
      new THREE.Vector3(-0.85, 1.15, -0.2),  // Node 4 (Pipeline)
      new THREE.Vector3(0.65, -1.25, 0.3),   // Node 5 (Gateway)
    ];

    const nodeMeshes: THREE.LineSegments[] = [];
    const nodePoints: THREE.Points[] = [];
    const nodeGeo = new THREE.IcosahedronGeometry(0.09, 0);
    const nodeEdges = new THREE.EdgesGeometry(nodeGeo);

    baseNodePositions.forEach((pos) => {
      const nMat = new THREE.LineBasicMaterial({
        color: 0x60a5fa,
        transparent: true,
        opacity: 0.75,
      });
      const nMesh = new THREE.LineSegments(nodeEdges, nMat);
      nMesh.position.copy(pos);
      systemGroup.add(nMesh);
      nodeMeshes.push(nMesh);

      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0]), 3));
      const pMat = new THREE.PointsMaterial({
        color: 0x93c5fd,
        size: 0.08,
        transparent: true,
        opacity: 0.85,
      });
      const pMesh = new THREE.Points(pGeo, pMat);
      pMesh.position.copy(pos);
      systemGroup.add(pMesh);
      nodePoints.push(pMesh);
    });

    // ── 3. Thin Connections (Core to nodes + Intra-cluster) ──
    const staticLines: number[] = [];
    baseNodePositions.forEach((pos) => {
      // Core to Node
      staticLines.push(0, 0, 0);
      staticLines.push(pos.x, pos.y, pos.z);
    });
    // Cluster A connection
    staticLines.push(baseNodePositions[0].x, baseNodePositions[0].y, baseNodePositions[0].z);
    staticLines.push(baseNodePositions[1].x, baseNodePositions[1].y, baseNodePositions[1].z);
    // Cluster B connection
    staticLines.push(baseNodePositions[2].x, baseNodePositions[2].y, baseNodePositions[2].z);
    staticLines.push(baseNodePositions[3].x, baseNodePositions[3].y, baseNodePositions[3].z);

    const staticLinesGeo = new THREE.BufferGeometry();
    staticLinesGeo.setAttribute('position', new THREE.Float32BufferAttribute(staticLines, 3));
    const staticLinesMat = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.22,
    });
    const staticNetwork = new THREE.LineSegments(staticLinesGeo, staticLinesMat);
    systemGroup.add(staticNetwork);

    // Dynamic Connections (Subtly appear / disappear)
    const dynamicLinesGeo = new THREE.BufferGeometry();
    const dynamicPoints = [
      // From Cluster A to Pipeline Node
      baseNodePositions[0].x, baseNodePositions[0].y, baseNodePositions[0].z,
      baseNodePositions[4].x, baseNodePositions[4].y, baseNodePositions[4].z,
      // From Cluster B to Gateway Node
      baseNodePositions[2].x, baseNodePositions[2].y, baseNodePositions[2].z,
      baseNodePositions[5].x, baseNodePositions[5].y, baseNodePositions[5].z,
    ];
    dynamicLinesGeo.setAttribute('position', new THREE.Float32BufferAttribute(dynamicPoints, 3));
    const dynamicLinesMat = new THREE.LineBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.15,
    });
    const dynamicNetwork = new THREE.LineSegments(dynamicLinesGeo, dynamicLinesMat);
    systemGroup.add(dynamicNetwork);

    // ── 4. Subtle Orbiting Line ──
    const orbitSegs = 64;
    const orbitPts = new Float32Array((orbitSegs + 1) * 3);
    for (let i = 0; i <= orbitSegs; i++) {
      const theta = (i / orbitSegs) * Math.PI * 2;
      orbitPts[i * 3] = Math.cos(theta) * 2.2;
      orbitPts[i * 3 + 1] = Math.sin(theta) * 1.85;
      orbitPts[i * 3 + 2] = 0;
    }
    const orbitGeo = new THREE.BufferGeometry();
    orbitGeo.setAttribute('position', new THREE.BufferAttribute(orbitPts, 3));
    const orbitMat = new THREE.LineBasicMaterial({
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.10,
    });
    const orbitLine = new THREE.Line(orbitGeo, orbitMat);
    orbitLine.rotation.x = Math.PI / 3.2;
    orbitLine.rotation.y = Math.PI / 6;
    systemGroup.add(orbitLine);

    // ── 5. Ambient Atmosphere Points ──
    const atmoCount = 18;
    const atmoPts = new Float32Array(atmoCount * 3);
    for (let i = 0; i < atmoCount; i++) {
      const r = 2.2 + (i % 4) * 0.2;
      const angle = (i / atmoCount) * Math.PI * 2;
      atmoPts[i * 3] = Math.cos(angle) * r;
      atmoPts[i * 3 + 1] = Math.sin(angle) * (r * 0.8) + ((i % 3) - 1) * 0.3;
      atmoPts[i * 3 + 2] = ((i % 5) - 2) * 0.35;
    }
    const atmoGeo = new THREE.BufferGeometry();
    atmoGeo.setAttribute('position', new THREE.BufferAttribute(atmoPts, 3));
    const atmoMat = new THREE.PointsMaterial({
      color: 0x64748b,
      size: 0.04,
      transparent: true,
      opacity: 0.2,
    });
    const atmosphere = new THREE.Points(atmoGeo, atmoMat);
    systemGroup.add(atmosphere);

    // ── Interactions ──
    // 1. Mouse Parallax
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

    // 2. Hover Brightness
    let isHovered = false;
    let currentBrightness = 0.75;
    const handlePointerEnter = () => {
      isHovered = true;
    };
    const handlePointerLeave = () => {
      isHovered = false;
    };
    container.addEventListener('pointerenter', handlePointerEnter);
    container.addEventListener('pointerleave', handlePointerLeave);

    // 3. Scroll Rotation (10-15 degrees)
    let scrollAngle = 0;
    const handleScroll = () => {
      const maxScroll = 600;
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      // 12.5 degrees in radians = 0.218 rad
      scrollAngle = progress * (13 * (Math.PI / 180));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 4. Resize
    const handleResize = () => {
      if (!container || !renderer) return;
      const newWidth = container.clientWidth || 400;
      const newHeight = container.clientHeight || 400;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // 5. Visibility Observer
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
    const clock = new THREE.Clock();

    const render = () => {
      if (!isVisible || document.hidden) {
        animId = requestAnimationFrame(render);
        return;
      }

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Idle Motion
        systemGroup.rotation.y += delta * 0.05;
        coreMesh.rotation.y -= delta * 0.08;
        coreMesh.rotation.x += delta * 0.04;
        orbitLine.rotation.z += delta * 0.02;

        // Dynamic Connections Pulse
        const pulse = (Math.sin(time * 1.4) + 1) * 0.5; // 0 to 1
        dynamicLinesMat.opacity = pulse > 0.35 ? (pulse - 0.35) * 0.4 : 0.02;

        // Hover Brightness Smooth Lerp
        const targetBrightness = isHovered ? 1.0 : 0.75;
        currentBrightness += (targetBrightness - currentBrightness) * 0.08;
        nodeMeshes.forEach((mesh) => {
          (mesh.material as THREE.LineBasicMaterial).opacity = currentBrightness;
        });

        // Parallax + Scroll Angle Lerp
        systemGroup.rotation.y += (targetX + scrollAngle - systemGroup.rotation.y * 0.04) * 0.03;
        systemGroup.rotation.x += (-targetY - systemGroup.rotation.x * 0.04) * 0.03;
      }

      renderer?.render(scene, camera);
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointerenter', handlePointerEnter);
      container.removeEventListener('pointerleave', handlePointerLeave);
      observer.disconnect();

      if (renderer) {
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
      }

      coreGeo.dispose();
      coreEdges.dispose();
      coreMat.dispose();
      kernelGeo.dispose();
      kernelMat.dispose();
      nodeGeo.dispose();
      nodeEdges.dispose();
      staticLinesGeo.dispose();
      staticLinesMat.dispose();
      dynamicLinesGeo.dispose();
      dynamicLinesMat.dispose();
      orbitGeo.dispose();
      orbitMat.dispose();
      atmoGeo.dispose();
      atmoMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[350px] max-h-[450px] flex items-center justify-center cursor-pointer select-none"
      aria-hidden="true"
    />
  );
};
