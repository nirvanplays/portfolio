'use client';

import { useEffect, useRef, useState } from 'react';
import type React from 'react';
import * as THREE from 'three';

interface Realistic3DPhotoCanvasProps {
  imageSrc?: string;
}

export const Realistic3DPhotoCanvas: React.FC<Realistic3DPhotoCanvasProps> = ({
  imageSrc = '/nirvan.jpg',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 380;
    const height = container.clientHeight || 460;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.8);

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Root Group
    const portraitGroup = new THREE.Group();
    scene.add(portraitGroup);

    // Lighting for Realistic 3D Rendering
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    // Dynamic mouse-following PointLight for realistic specular surface shine
    const specularLight = new THREE.PointLight(0x38bdf8, 3.5, 12);
    specularLight.position.set(1.5, 2, 3);
    scene.add(specularLight);

    // Backstage rim light (Violet Space Glow)
    const rimLight = new THREE.PointLight(0x9333ea, 4, 10);
    rimLight.position.set(-2, -2, -1);
    scene.add(rimLight);

    // Load Nirvan's Portrait Texture
    const textureLoader = new THREE.TextureLoader();
    let photoMesh: THREE.Mesh | null = null;
    let frameMesh: THREE.LineSegments | null = null;
    let backingMesh: THREE.Mesh | null = null;

    textureLoader.load(
      imageSrc,
      (texture) => {
        texture.generateMipmaps = true;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.colorSpace = THREE.SRGBColorSpace;

        // 1. Photo Plate Geometry (Slightly beveled 3D depth)
        const photoWidth = 2.4;
        const photoHeight = 3.1;
        const cardDepth = 0.06;

        const photoGeo = new THREE.BoxGeometry(photoWidth, photoHeight, cardDepth, 16, 16, 2);

        // Materials: Face is Nirvan's photo, edges are dark metallic aerospace alloy
        const edgeMaterial = new THREE.MeshStandardMaterial({
          color: 0x0f172a,
          metalness: 0.85,
          roughness: 0.2,
        });

        const frontMaterial = new THREE.MeshStandardMaterial({
          map: texture,
          metalness: 0.12,
          roughness: 0.22,
          transparent: false,
        });

        // BoxGeometry face order: +X, -X, +Y, -Y, +Z (front), -Z (back)
        const materials = [
          edgeMaterial,
          edgeMaterial,
          edgeMaterial,
          edgeMaterial,
          frontMaterial,
          edgeMaterial,
        ];

        photoMesh = new THREE.Mesh(photoGeo, materials);
        portraitGroup.add(photoMesh);

        // 2. High-Tech Luminous Cyber Frame Border
        const frameEdges = new THREE.EdgesGeometry(photoGeo);
        const frameMat = new THREE.LineBasicMaterial({
          color: 0x7042f8,
          transparent: true,
          opacity: 0.85,
          linewidth: 2,
        });
        frameMesh = new THREE.LineSegments(frameEdges, frameMat);
        portraitGroup.add(frameMesh);

        // 3. Subtle Aerospace Depth Backing Plate (cast shadow illusion)
        const backGeo = new THREE.PlaneGeometry(photoWidth + 0.15, photoHeight + 0.15);
        const backMat = new THREE.MeshBasicMaterial({
          color: 0x030014,
          transparent: true,
          opacity: 0.6,
        });
        backingMesh = new THREE.Mesh(backGeo, backMat);
        backingMesh.position.z = -0.05;
        portraitGroup.add(backingMesh);

        setIsLoaded(true);
      },
      undefined,
      (err) => {
        console.warn('Fallback texture loading:', err);
      }
    );

    // 4. Dual 3D Gyroscopic Orbital Rings around the portrait
    const createGyroRing = (radius: number, color: number, tiltX: number, tiltY: number) => {
      const segs = 64;
      const pts = new Float32Array((segs + 1) * 3);
      for (let i = 0; i <= segs; i++) {
        const theta = (i / segs) * Math.PI * 2;
        pts[i * 3] = Math.cos(theta) * radius;
        pts[i * 3 + 1] = Math.sin(theta) * (radius * 0.95);
        pts[i * 3 + 2] = 0;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pts, 3));
      const mat = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity: 0.35,
      });
      const ring = new THREE.Line(geo, mat);
      ring.rotation.x = tiltX;
      ring.rotation.y = tiltY;

      // Add a glowing satellite node on the ring
      const nodeGeo = new THREE.SphereGeometry(0.04, 12, 12);
      const nodeMat = new THREE.MeshBasicMaterial({ color });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(radius, 0, 0);
      ring.add(node);

      return { ring, node, radius, geo, mat, nodeGeo, nodeMat };
    };

    const ring1 = createGyroRing(2.1, 0x00d4ff, Math.PI / 4, Math.PI / 8);
    const ring2 = createGyroRing(2.35, 0x9333ea, -Math.PI / 3.5, Math.PI / 6);
    portraitGroup.add(ring1.ring);
    portraitGroup.add(ring2.ring);

    // 5. Floating Celestial Stardust Particles around Portrait
    const dustCount = 80;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 4.5;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 5.0;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 2.0;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.02,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const dustField = new THREE.Points(dustGeo, dustMat);
    portraitGroup.add(dustField);

    // Mouse Tracking for Interactive 3D Realistic Parallax
    let targetRotX = 0;
    let targetRotY = 0;
    let lightTargetX = 1.5;
    let lightTargetY = 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      // Card pitch and yaw (max ~18 degrees = 0.32 rad)
      targetRotY = x * 0.38;
      targetRotX = -y * 0.38;

      // Position specular light so highlights track cursor realistically
      lightTargetX = x * 4;
      lightTargetY = -y * 4 + 1;
    };

    const handleMouseLeave = () => {
      targetRotX = 0;
      targetRotY = 0;
      lightTargetX = 1.5;
      lightTargetY = 2;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth || 380;
      const h = container.clientHeight || 460;
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

      // Gentle floating levitation
      portraitGroup.position.y = Math.sin(time * 1.6) * 0.06;

      // Smooth 3D tilt lerp
      portraitGroup.rotation.y += (targetRotY - portraitGroup.rotation.y) * 0.06;
      portraitGroup.rotation.x += (targetRotX - portraitGroup.rotation.x) * 0.06;

      // Move specular light realistically
      specularLight.position.x += (lightTargetX - specularLight.position.x) * 0.08;
      specularLight.position.y += (lightTargetY - specularLight.position.y) * 0.08;

      // Rotate Gyroscopic Orbital Rings
      ring1.ring.rotation.z += delta * 0.3;
      ring2.ring.rotation.z -= delta * 0.25;

      // Subtle particle float
      dustField.rotation.y += delta * 0.02;

      renderer?.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);

      if (renderer) {
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
      }

      ring1.geo.dispose();
      ring1.mat.dispose();
      ring1.nodeGeo.dispose();
      ring1.nodeMat.dispose();
      ring2.geo.dispose();
      ring2.mat.dispose();
      ring2.nodeGeo.dispose();
      ring2.nodeMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();
    };
  }, [imageSrc]);

  return (
    <div className="relative w-full h-full max-w-[420px] aspect-[4/5] mx-auto select-none group">
      {/* Three.js 3D Canvas */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-10"
        title="Interactive 3D Realistic Portrait — Move mouse to tilt & inspect lighting"
      />

      {/* Futuristic Space Telemetry HUD Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-4 sm:p-5">
        {/* Top Bar */}
        <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-cyan-400/80 bg-[#030014]/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-cyan-500/20">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>PLACEMENT READY</span>
          </span>
          <span className="text-purple-400 font-semibold">GRIET • CGPA 8.01</span>
        </div>

        {/* Corner Cyber Accents */}
        <div className="flex items-end justify-between text-[10px] font-mono text-slate-400 bg-[#030014]/70 backdrop-blur-sm px-3.5 py-2 rounded-lg border border-purple-500/30">
          <div>
            <div className="font-bold text-white text-xs tracking-wider">
              KOPPELA NIRVAN REDDY
            </div>
            <div className="text-[10px] text-cyan-300">
              B.Tech Computer Science Engineering
            </div>
          </div>
          <div className="text-right">
            <span className="px-2 py-0.5 rounded bg-purple-600/30 border border-purple-500/40 text-[9px] text-purple-200 uppercase font-bold tracking-wider">
              3D INTERACTIVE
            </span>
          </div>
        </div>
      </div>

      {/* Loading Shimmer Fallback */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#070b19]/90 rounded-2xl border border-purple-500/30 z-0">
          <div className="text-center space-y-2">
            <div className="w-10 h-10 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto" />
            <span className="text-xs font-mono text-cyan-300 tracking-widest block uppercase">
              Initializing 3D Telemetry...
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
