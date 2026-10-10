import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HeroCanvasProps {
  interactive?: boolean;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ interactive = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070b, 0.035);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // ROOT HIERARCHY
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. INNER CRYSTALLINE CORE (Octahedron with emissive glow)
    const innerGeo = new THREE.OctahedronGeometry(1.4, 0);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x00f0ff,
      emissive: 0x005588,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.9,
      wireframe: false,
      transparent: true,
      opacity: 0.85,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerCore);

    // 2. INNER WIREFRAME FACET OVERLAY
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const innerWire = new THREE.Mesh(innerGeo, wireMat);
    innerWire.scale.setScalar(1.02);
    coreGroup.add(innerWire);

    // 3. OUTER ICOSAHEDRON CAGE
    const outerGeo = new THREE.IcosahedronGeometry(2.3, 1);
    const outerWireMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const outerCage = new THREE.Mesh(outerGeo, outerWireMat);
    coreGroup.add(outerCage);

    // 4. VERTEX NODES (Tiny glowing spheres at outer cage vertices)
    const positions = outerGeo.attributes.position;
    const vertexPointsGeo = new THREE.BufferGeometry();
    const vertexCount = positions.count;
    const nodePositions = new Float32Array(vertexCount * 3);

    for (let i = 0; i < vertexCount; i++) {
      nodePositions[i * 3] = positions.getX(i);
      nodePositions[i * 3 + 1] = positions.getY(i);
      nodePositions[i * 3 + 2] = positions.getZ(i);
    }
    vertexPointsGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));

    const nodeMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.08,
      transparent: true,
      opacity: 0.9,
    });
    const vertexNodes = new THREE.Points(vertexPointsGeo, nodeMat);
    coreGroup.add(vertexNodes);

    // 5. GYROSCOPIC ORBITAL RINGS
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const ringGeo1 = new THREE.TorusGeometry(3.1, 0.015, 8, 80);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xd946ef,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const ringGeo2 = new THREE.TorusGeometry(3.6, 0.012, 8, 80);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 5;
    coreGroup.add(ring2);

    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const ringGeo3 = new THREE.TorusGeometry(4.1, 0.01, 8, 90);
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.z = Math.PI / 6;
    coreGroup.add(ring3);

    // 6. SWARM PARTICLES
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 350 : 850;
    const particlesGeo = new THREE.BufferGeometry();
    const particleCoords = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color(0x00f0ff);
    const colorBlue = new THREE.Color(0x3b82f6);
    const colorViolet = new THREE.Color(0x8b5cf6);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particleCoords[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particleCoords[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particleCoords[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.6 ? colorCyan : Math.random() > 0.5 ? colorViolet : colorBlue;
      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particleCoords, 3));
    particlesGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleSystem);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0x0a192f, 2.0);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f0ff, 4.0, 15);
    pointLight1.position.set(3, 4, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 3.0, 15);
    pointLight2.position.set(-3, -3, 2);
    scene.add(pointLight2);

    // MOUSE PARALLAX HANDLER
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // RESIZE HANDLER
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // ANIMATION LOOP
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Rotate components with subtle speeds
      innerCore.rotation.x = elapsedTime * 0.35;
      innerCore.rotation.y = elapsedTime * 0.45;

      innerWire.rotation.x = elapsedTime * 0.35;
      innerWire.rotation.y = elapsedTime * 0.45;

      outerCage.rotation.x = -elapsedTime * 0.2;
      outerCage.rotation.y = elapsedTime * 0.25;

      vertexNodes.rotation.x = -elapsedTime * 0.2;
      vertexNodes.rotation.y = elapsedTime * 0.25;

      ring1.rotation.z = elapsedTime * 0.15;
      ring2.rotation.x = -elapsedTime * 0.12;
      ring3.rotation.y = elapsedTime * 0.18;

      particleSystem.rotation.y = elapsedTime * 0.05;
      particleSystem.rotation.x = Math.sin(elapsedTime * 0.05) * 0.1;

      // Mouse reactivity tilt
      coreGroup.rotation.y = mouseRef.current.x * 0.45 + elapsedTime * 0.08;
      coreGroup.rotation.x = -mouseRef.current.y * 0.45;
      coreGroup.position.x = mouseRef.current.x * 0.3;
      coreGroup.position.y = -mouseRef.current.y * 0.3;

      // Dynamic breathing scale
      const pulse = 1 + Math.sin(elapsedTime * 2) * 0.04;
      innerCore.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP DISPOSAL
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Dispose geometries
      innerGeo.dispose();
      outerGeo.dispose();
      vertexPointsGeo.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
      ringGeo3.dispose();
      particlesGeo.dispose();

      // Dispose materials
      innerMat.dispose();
      wireMat.dispose();
      outerWireMat.dispose();
      nodeMat.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      ringMat3.dispose();
      particlesMat.dispose();

      // Dispose renderer
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
};
