import { useEffect, useRef } from 'react';
import type React from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

interface HeroCanvasProps {
  scrollProgress?: number;
  interactive?: boolean;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({
  scrollProgress = 0,
  interactive = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    vx: 0,
    vy: 0,
    lastX: 0,
    lastY: 0,
    isHovered: false,
  });
  const scrollRef = useRef(scrollProgress);

  useEffect(() => {
    scrollRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect capabilities
    const isMobile = window.innerWidth < 768;
    const isLowPower = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── SCENE & CAMERA ────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03050a, 0.025);

    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 9.2);

    // ── WEBGL RENDERER ────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
      stencil: false,
      depth: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // ── POST-PROCESSING: UNREAL BLOOM ─────────────────────────────────────────
    let composer: EffectComposer | null = null;
    if (!isMobile && !isLowPower) {
      const renderScene = new RenderPass(scene, camera);
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(container.clientWidth, container.clientHeight),
        1.3, // Strength
        0.5, // Radius
        0.2  // Threshold
      );
      composer = new EffectComposer(renderer);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);
    }

    // ── ROOT SYSTEM GROUP ─────────────────────────────────────────────────────
    const coreSystemGroup = new THREE.Group();
    scene.add(coreSystemGroup);

    // ── LAYER 5: ATMOSPHERIC VOLUMETRIC GLOW BILLBOARD ────────────────────────
    // Procedural radial gradient canvas texture for cinematic atmospheric halo
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = 256;
    glowCanvas.height = 256;
    const ctx = glowCanvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      gradient.addColorStop(0, 'rgba(0, 212, 255, 0.45)');
      gradient.addColorStop(0.25, 'rgba(0, 180, 255, 0.2)');
      gradient.addColorStop(0.5, 'rgba(124, 58, 237, 0.08)');
      gradient.addColorStop(1, 'rgba(3, 5, 10, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 256, 256);
    }
    const glowTexture = new THREE.CanvasTexture(glowCanvas);
    const glowMaterial = new THREE.SpriteMaterial({
      map: glowTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.85,
      depthWrite: false,
    });
    const glowSprite = new THREE.Sprite(glowMaterial);
    glowSprite.scale.set(7.5, 7.5, 1);
    coreSystemGroup.add(glowSprite);

    // ── LAYER 1: SOLID CRYSTALLINE CORE ───────────────────────────────────────
    const coreGeometry = new THREE.IcosahedronGeometry(1.2, 4);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x020712,
      emissive: 0x00d4ff,
      emissiveIntensity: 1.4,
      roughness: 0.08,
      metalness: 0.92,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.95,
      wireframe: false,
    });
    const innerCore = new THREE.Mesh(coreGeometry, coreMaterial);
    coreSystemGroup.add(innerCore);

    // Inner wireframe overlay for crystalline facet highlights
    const facetWireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const innerFacetWire = new THREE.Mesh(coreGeometry, facetWireMat);
    innerFacetWire.scale.setScalar(1.015);
    coreSystemGroup.add(innerFacetWire);

    // ── LAYER 2: SECONDARY ORBITING GEOMETRY (DUAL SHELLS) ────────────────────
    const shell1Geo = new THREE.OctahedronGeometry(1.95, 0);
    const shell1Mat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const shell1 = new THREE.Mesh(shell1Geo, shell1Mat);
    coreSystemGroup.add(shell1);

    const shell2Geo = new THREE.IcosahedronGeometry(2.7, 1);
    const shell2Mat = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const shell2 = new THREE.Mesh(shell2Geo, shell2Mat);
    coreSystemGroup.add(shell2);

    // ── LAYER 4: CONNECTION NETWORK & DYNAMIC ENERGY PACKETS ──────────────────
    let networkLines: THREE.LineSegments | null = null;
    let networkLineMat: THREE.LineBasicMaterial | null = null;
    let dataPacketsPoints: THREE.Points | null = null;
    let dataPacketsGeo: THREE.BufferGeometry | null = null;

    if (!isMobile) {
      const posAttr = shell2Geo.attributes['position'] as THREE.BufferAttribute;
      const uniqueVerts: THREE.Vector3[] = [];
      const seen = new Set<string>();

      for (let i = 0; i < posAttr.count; i++) {
        const key = `${posAttr.getX(i).toFixed(2)},${posAttr.getY(i).toFixed(2)},${posAttr.getZ(i).toFixed(2)}`;
        if (!seen.has(key)) {
          seen.add(key);
          uniqueVerts.push(new THREE.Vector3(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i)));
        }
      }

      const linePositions: number[] = [];
      const packetCount = Math.min(36, uniqueVerts.length - 1);
      const packetStarts: THREE.Vector3[] = [];
      const packetEnds: THREE.Vector3[] = [];

      for (let i = 0; i < packetCount; i++) {
        const a = uniqueVerts[i]!;
        const b = uniqueVerts[(i + 7) % uniqueVerts.length]!;
        linePositions.push(a.x, a.y, a.z, b.x, b.y, b.z);
        packetStarts.push(a);
        packetEnds.push(b);
      }

      const netGeo = new THREE.BufferGeometry();
      netGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));
      networkLineMat = new THREE.LineBasicMaterial({
        color: 0x00d4ff,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
      });
      networkLines = new THREE.LineSegments(netGeo, networkLineMat);
      coreSystemGroup.add(networkLines);

      // Traveling data packets along the network lines
      const packetCoords = new Float32Array(packetCount * 3);
      dataPacketsGeo = new THREE.BufferGeometry();
      dataPacketsGeo.setAttribute('position', new THREE.BufferAttribute(packetCoords, 3));
      const packetMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.08,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
      });
      dataPacketsPoints = new THREE.Points(dataPacketsGeo, packetMat);
      coreSystemGroup.add(dataPacketsPoints);
    }

    // ── LAYER 3: VELOCITY-REACTIVE PARTICLE SYSTEM ────────────────────────────
    const particleCount = isMobile ? 380 : 1200;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particlePhase = new Float32Array(particleCount);

    const color1 = new THREE.Color(0x00d4ff);
    const color2 = new THREE.Color(0x7c3aed);
    const color3 = new THREE.Color(0x38bdf8);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.8 + Math.random() * 4.6; // 2.8 .. 7.4
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const px = radius * Math.sin(phi) * Math.cos(theta);
      const py = radius * Math.sin(phi) * Math.sin(theta);
      const pz = radius * Math.cos(phi);

      particlePositions[i * 3] = px;
      particlePositions[i * 3 + 1] = py;
      particlePositions[i * 3 + 2] = pz;

      particleVelocities[i * 3] = (Math.random() - 0.5) * 0.005;
      particleVelocities[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      particleVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.005;

      particlePhase[i] = Math.random() * Math.PI * 2;

      // Color variance across palette
      const mix = Math.random();
      const chosenColor = mix > 0.6 ? color1 : mix > 0.3 ? color3 : color2;
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particlesGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: isMobile ? 0.05 : 0.042,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particleCloud = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleCloud);

    // ── GYROSCOPIC ACCELERATOR RINGS ──────────────────────────────────────────
    const ringConfigs = [
      { radius: 3.2, tube: 0.006, color: 0x00d4ff, rx: Math.PI / 3.2, ry: 0, rz: 0, speed: 0.15 },
      { radius: 4.4, tube: 0.006, color: 0x7c3aed, rx: -Math.PI / 4, ry: Math.PI / 5, rz: 0, speed: -0.12 },
      { radius: 5.4, tube: 0.005, color: 0x38bdf8, rx: 0, ry: -Math.PI / 3, rz: Math.PI / 2.6, speed: 0.1 },
    ];

    const rings: Array<{ mesh: THREE.Mesh; speed: number }> = ringConfigs.map((cfg) => {
      const geo = new THREE.TorusGeometry(cfg.radius, cfg.tube, 8, 120);
      const mat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: 0.45,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = cfg.rx;
      mesh.rotation.y = cfg.ry;
      mesh.rotation.z = cfg.rz;
      coreSystemGroup.add(mesh);
      return { mesh, speed: cfg.speed };
    });

    // ── DYNAMIC VOLUMETRIC LIGHT SOURCES ──────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0x060e1e, 2.8);
    scene.add(ambientLight);

    const orbitLightCyan = new THREE.PointLight(0x00d4ff, 9, 22);
    orbitLightCyan.position.set(4, 3, 4);
    scene.add(orbitLightCyan);

    const orbitLightViolet = new THREE.PointLight(0x7c3aed, 6, 20);
    orbitLightViolet.position.set(-4, -3, 3);
    scene.add(orbitLightViolet);

    const keyLight = new THREE.DirectionalLight(0xe0f2fe, 1.4);
    keyLight.position.set(0, 5, 3);
    scene.add(keyLight);

    // ── MOUSE & VELOCITY TRACKING ─────────────────────────────────────────────
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      const targetY = (e.clientY / window.innerHeight - 0.5) * 2;

      const vx = (e.clientX - mouseRef.current.lastX) * 0.025;
      const vy = (e.clientY - mouseRef.current.lastY) * 0.025;

      mouseRef.current.targetX = targetX;
      mouseRef.current.targetY = targetY;
      mouseRef.current.vx = vx;
      mouseRef.current.vy = vy;
      mouseRef.current.lastX = e.clientX;
      mouseRef.current.lastY = e.clientY;
    };

    const handleMouseEnter = () => { mouseRef.current.isHovered = true; };
    const handleMouseLeave = () => {
      mouseRef.current.isHovered = false;
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // ── PASSIVE SCROLL LISTENER (ZERO REACT RE-RENDERS) ────────────────────────
    const handleScroll = () => {
      const h = container.clientHeight || window.innerHeight;
      scrollRef.current = Math.min(1, Math.max(0, window.scrollY / h));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ── RESIZE OBSERVER ───────────────────────────────────────────────────────
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      if (composer) composer.setSize(w, h);
    });
    resizeObserver.observe(container);

    // ── INTERSECTION OBSERVER FOR PERFORMANCE CULLING ─────────────────────────
    let isVisible = true;
    const visibilityObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisible = entry.isIntersecting;
      });
    }, { threshold: 0.05 });
    visibilityObserver.observe(container);

    // ── ANIMATION RENDER LOOP ─────────────────────────────────────────────────
    let animFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);

      // Skip render when hidden or out of viewport (Performance optimization)
      if (document.hidden || !isVisible) return;

      const t = clock.getElapsedTime();
      const sp = scrollRef.current;

      // Mouse physics with smooth inertia
      const m = mouseRef.current;
      m.x += (m.targetX - m.x) * 0.045;
      m.y += (m.targetY - m.y) * 0.045;
      m.vx *= 0.90;
      m.vy *= 0.90;

      // Core harmonic breathing scale
      const breath = 1.0 + Math.sin(t * 1.8) * 0.035 + (m.isHovered ? 0.06 : 0);
      innerCore.scale.set(breath, breath, breath);
      innerFacetWire.scale.set(breath * 1.015, breath * 1.015, breath * 1.015);
      glowSprite.scale.set(7.5 * breath, 7.5 * breath, 1);

      // Crystalline rotation with harmonic oscillation
      innerCore.rotation.x = t * 0.28 + Math.sin(t * 0.4) * 0.1;
      innerCore.rotation.y = t * 0.38;
      innerFacetWire.rotation.x = innerCore.rotation.x;
      innerFacetWire.rotation.y = innerCore.rotation.y;

      // Shells counter-spin with mouse reactivity
      shell1.rotation.x = -t * 0.22 - m.y * 0.6;
      shell1.rotation.y = t * 0.3 + m.x * 0.8;

      shell2.rotation.x = t * 0.16 + m.y * 0.9;
      shell2.rotation.y = -t * 0.2 + m.x * 1.1;

      // Connection network pulse
      if (networkLineMat) {
        networkLineMat.opacity = 0.2 + Math.sin(t * 2.2) * 0.15;
      }

      // Dynamic data packet travel along lines
      if (dataPacketsGeo && !isMobile) {
        const posAttr = dataPacketsGeo.attributes['position'] as THREE.BufferAttribute;
        const count = posAttr.count;
        for (let i = 0; i < count; i++) {
          const progress = (t * 0.4 + i / count) % 1.0;
          const a = (shell2Geo.attributes['position'] as THREE.BufferAttribute);
          const i1 = i * 2;
          const i2 = i1 + 1;
          const x1 = a.getX(i1 % a.count);
          const y1 = a.getY(i1 % a.count);
          const z1 = a.getZ(i1 % a.count);
          const x2 = a.getX(i2 % a.count);
          const y2 = a.getY(i2 % a.count);
          const z2 = a.getZ(i2 % a.count);

          posAttr.setXYZ(
            i,
            x1 + (x2 - x1) * progress,
            y1 + (y2 - y1) * progress,
            z1 + (z2 - z1) * progress
          );
        }
        posAttr.needsUpdate = true;
      }

      // Gyroscopic accelerator rings
      for (const r of rings) {
        r.mesh.rotation.y += r.speed * 0.016;
        r.mesh.rotation.z += (m.vx * 0.1);
      }

      // Orbiting light sources
      const orbitCyan = t * 0.45;
      orbitLightCyan.position.x = 4.0 * Math.cos(orbitCyan);
      orbitLightCyan.position.z = 4.0 * Math.sin(orbitCyan);
      orbitLightCyan.position.y = 2.5 + Math.sin(t * 0.8) * 1.2;

      const orbitViolet = -t * 0.38;
      orbitLightViolet.position.x = 4.2 * Math.cos(orbitViolet);
      orbitLightViolet.position.z = 3.8 * Math.sin(orbitViolet);
      orbitLightViolet.position.y = -2.0 + Math.cos(t * 0.7) * 1.0;

      // Particle cloud with velocity impulse reaction
      particleCloud.rotation.y = t * 0.035 + m.x * 0.35 + m.vx;
      particleCloud.rotation.x = Math.sin(t * 0.1) * 0.08 - m.y * 0.25;

      // Core system group response to mouse (smooth parallax)
      coreSystemGroup.rotation.y = t * 0.06 + m.x * 0.45;
      coreSystemGroup.rotation.x = -m.y * 0.35;
      coreSystemGroup.position.x = m.x * 0.3;
      coreSystemGroup.position.y = -m.y * 0.3;

      // ── SCROLL INTEGRATION: CONTINUOUS CINEMATIC CAMERA JOURNEY ──────────────
      if (sp > 0) {
        // Camera smoothly glides closer through the digital core as user scrolls
        camera.position.z = 9.2 + sp * 5.0;
        camera.position.y = -sp * 2.2;
        coreSystemGroup.position.y = -sp * 3.5;

        // Graceful atmospheric fade out as section completes
        const fade = Math.max(0, 1 - sp * 1.35);
        coreMaterial.opacity = 0.95 * fade;
        shell1Mat.opacity = 0.28 * fade;
        shell2Mat.opacity = 0.22 * fade;
        particlesMat.opacity = 0.8 * fade;
        glowMaterial.opacity = 0.85 * fade;
        if (networkLineMat) networkLineMat.opacity *= fade;
      } else {
        camera.position.z = 9.2;
        camera.position.y = 0;
        coreSystemGroup.position.y = 0;
        coreMaterial.opacity = 0.95;
        shell1Mat.opacity = 0.28;
        shell2Mat.opacity = 0.22;
        particlesMat.opacity = 0.8;
        glowMaterial.opacity = 0.85;
      }

      // Render via Bloom Composer if available, otherwise direct renderer
      if (composer) {
        composer.render();
      } else {
        renderer.render(scene, camera);
      }
    };

    animate();

    // ── CLEANUP & DISPOSAL ────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();

      // Geometries
      coreGeometry.dispose();
      shell1Geo.dispose();
      shell2Geo.dispose();
      particlesGeo.dispose();
      if (networkLines) networkLines.geometry.dispose();
      if (dataPacketsGeo) dataPacketsGeo.dispose();
      for (const r of rings) r.mesh.geometry.dispose();

      // Materials
      coreMaterial.dispose();
      facetWireMat.dispose();
      shell1Mat.dispose();
      shell2Mat.dispose();
      particlesMat.dispose();
      glowMaterial.dispose();
      glowTexture.dispose();
      if (networkLineMat) networkLineMat.dispose();
      if (dataPacketsPoints) (dataPacketsPoints.material as THREE.Material).dispose();
      for (const r of rings) (r.mesh.material as THREE.Material).dispose();

      // Postprocessing & renderer
      if (composer) {
        composer.dispose();
      }
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
      aria-hidden="true"
    />
  );
};
