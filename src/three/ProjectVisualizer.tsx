import { useEffect, useRef } from 'react';
import type React from 'react';
import * as THREE from 'three';

interface ProjectVisualizerProps {
  type: 'campus' | 'physiosis' | 'planner' | 'pneumonia';
  interactive?: boolean;
}

export const ProjectVisualizer: React.FC<ProjectVisualizerProps> = ({ type }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;

    // ── SCENE & CAMERA ────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03050a, 0.04);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Dynamic objects to clean up
    const disposables: (THREE.BufferGeometry | THREE.Material | THREE.Texture)[] = [];
    let customUpdate: (time: number) => void = () => {};

    // ═════════════════════════════════════════════════════════════════════════
    // 1. SMART CAMPUS: Connected Nodes, Dashboards, Data Pathways & Campus Grid
    // ═════════════════════════════════════════════════════════════════════════
    if (type === 'campus') {
      // Perspective Campus Ground Grid
      const gridHelper = new THREE.GridHelper(6, 12, 0x00d4ff, 0x1e293b);
      gridHelper.position.y = -1.6;
      gridHelper.rotation.x = 0.2;
      rootGroup.add(gridHelper);
      disposables.push(gridHelper.geometry, gridHelper.material as THREE.Material);

      // Central Institutional Mainframe Hub (Student & Leave Management Core)
      const hubGeo = new THREE.CylinderGeometry(0.5, 0.7, 1.2, 6);
      const hubMat = new THREE.MeshStandardMaterial({
        color: 0x0369a1,
        emissive: 0x00d4ff,
        emissiveIntensity: 0.8,
        wireframe: true,
      });
      const hubMesh = new THREE.Mesh(hubGeo, hubMat);
      hubMesh.position.y = -0.7;
      rootGroup.add(hubMesh);
      disposables.push(hubGeo, hubMat);

      // Inner Core Glow
      const coreGeo = new THREE.OctahedronGeometry(0.35, 0);
      const coreMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: false });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      coreMesh.position.y = -0.7;
      rootGroup.add(coreMesh);
      disposables.push(coreGeo, coreMat);

      // 4 Satellite Departmental Nodes:
      // [0: Student Mgmt, 1: Leave Mgmt, 2: Campus Voting, 3: Analytics Pipeline]
      const nodeCount = 4;
      const satelliteMeshes: THREE.Mesh[] = [];
      const nodeGeo = new THREE.BoxGeometry(0.32, 0.32, 0.32);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: 0x0284c7,
        emissive: 0x00f0ff,
        emissiveIntensity: 1.2,
      });
      disposables.push(nodeGeo, nodeMat);

      for (let i = 0; i < nodeCount; i++) {
        const sat = new THREE.Mesh(nodeGeo, nodeMat);
        rootGroup.add(sat);
        satelliteMeshes.push(sat);
      }

      // Interconnecting Data Pathways Lines
      const pathwayPositions = new Float32Array(nodeCount * 2 * 3);
      const pathwayGeo = new THREE.BufferGeometry();
      pathwayGeo.setAttribute('position', new THREE.BufferAttribute(pathwayPositions, 3));
      const pathwayMat = new THREE.LineBasicMaterial({
        color: 0x00d4ff,
        transparent: true,
        opacity: 0.5,
      });
      const pathwayLines = new THREE.LineSegments(pathwayGeo, pathwayMat);
      rootGroup.add(pathwayLines);
      disposables.push(pathwayGeo, pathwayMat);

      // Traveling Data Packets
      const packetCount = 8;
      const packetGeo = new THREE.BufferGeometry();
      const packetCoords = new Float32Array(packetCount * 3);
      packetGeo.setAttribute('position', new THREE.BufferAttribute(packetCoords, 3));
      const packetMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.09,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
      });
      const packetPoints = new THREE.Points(packetGeo, packetMat);
      rootGroup.add(packetPoints);
      disposables.push(packetGeo, packetMat);

      // Floating Dashboard Telemetry Panel Plane
      const dashGeo = new THREE.PlaneGeometry(1.6, 0.9);
      const dashMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });
      const dashMesh = new THREE.Mesh(dashGeo, dashMat);
      dashMesh.position.set(0, 1.4, 0);
      rootGroup.add(dashMesh);
      disposables.push(dashGeo, dashMat);

      customUpdate = (t) => {
        hubMesh.rotation.y = t * 0.3;
        coreMesh.rotation.x = t * 0.6;
        coreMesh.rotation.y = t * 0.8;

        const pathAttr = pathwayGeo.attributes['position'] as THREE.BufferAttribute;
        const packetAttr = packetGeo.attributes['position'] as THREE.BufferAttribute;

        satelliteMeshes.forEach((sat, idx) => {
          const angle = (idx / nodeCount) * Math.PI * 2 + t * 0.25;
          const radius = 2.0;
          const sx = Math.cos(angle) * radius;
          const sz = Math.sin(angle) * radius;
          const sy = -0.7 + Math.sin(t * 1.5 + idx) * 0.15;
          sat.position.set(sx, sy, sz);
          sat.rotation.y = t + idx;

          // Connect pathway line to hub
          pathAttr.setXYZ(idx * 2, 0, -0.7, 0);
          pathAttr.setXYZ(idx * 2 + 1, sx, sy, sz);

          // Moving packet along this pathway
          const pProgress = (t * 0.8 + idx * 0.25) % 1.0;
          const px = sx * (1 - pProgress);
          const py = -0.7 + (sy - -0.7) * (1 - pProgress);
          const pz = sz * (1 - pProgress);
          packetAttr.setXYZ(idx, px, py, pz);
          // Return packet in reverse
          const revProgress = (t * 0.8 + idx * 0.25 + 0.5) % 1.0;
          packetAttr.setXYZ(idx + nodeCount, sx * revProgress, -0.7 + (sy - -0.7) * revProgress, sz * revProgress);
        });

        pathAttr.needsUpdate = true;
        packetAttr.needsUpdate = true;

        dashMesh.rotation.y = Math.sin(t * 0.5) * 0.15;
        rootGroup.rotation.y = Math.sin(t * 0.15) * 0.2 + 0.1;
      };
    }

    // ═════════════════════════════════════════════════════════════════════════
    // 2. PHYSIOSIS: Biomechanical Geometry, Skeletal Nodes & Gait Trajectories
    // ═════════════════════════════════════════════════════════════════════════
    else if (type === 'physiosis') {
      const jointGeo = new THREE.SphereGeometry(0.08, 12, 12);
      const jointMat = new THREE.MeshStandardMaterial({
        color: 0x00d4ff,
        emissive: 0x00d4ff,
        emissiveIntensity: 0.9,
      });
      disposables.push(jointGeo, jointMat);

      // 15 Key Biomechanical Nodes
      const skeletonJoints: THREE.Mesh[] = [];
      const totalJoints = 15;
      for (let i = 0; i < totalJoints; i++) {
        const j = new THREE.Mesh(jointGeo, jointMat);
        rootGroup.add(j);
        skeletonJoints.push(j);
      }

      // Bone connection pairs
      const bonePairs: [number, number][] = [
        [0, 1], // Head - Neck
        [1, 2], // Neck - Spine
        [1, 3], // Neck - L Shoulder
        [3, 4], // L Shoulder - L Elbow
        [4, 5], // L Elbow - L Wrist
        [1, 6], // Neck - R Shoulder
        [6, 7], // R Shoulder - R Elbow
        [7, 8], // R Elbow - R Wrist
        [2, 9], // Spine - L Hip
        [9, 10], // L Hip - L Knee
        [10, 11], // L Knee - L Ankle
        [2, 12], // Spine - R Hip
        [12, 13], // R Hip - R Knee
        [13, 14], // R Knee - R Ankle
      ];

      const boneGeo = new THREE.BufferGeometry();
      const bonePositions = new Float32Array(bonePairs.length * 2 * 3);
      boneGeo.setAttribute('position', new THREE.BufferAttribute(bonePositions, 3));
      const boneMat = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.85,
      });
      const boneLines = new THREE.LineSegments(boneGeo, boneMat);
      rootGroup.add(boneLines);
      disposables.push(boneGeo, boneMat);

      // Joint Angle Measurement Rings (Left Knee & Left Hip)
      const angleRingGeo = new THREE.RingGeometry(0.28, 0.32, 24);
      const angleRingMat = new THREE.MeshBasicMaterial({
        color: 0xd946ef,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
      });
      const kneeRing = new THREE.Mesh(angleRingGeo, angleRingMat);
      rootGroup.add(kneeRing);
      disposables.push(angleRingGeo, angleRingMat);

      // Gait Motion Path Trail Points
      const trailPointCount = 30;
      const trailPositions = new Float32Array(trailPointCount * 3);
      const trailGeo = new THREE.BufferGeometry();
      trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
      const trailMat = new THREE.LineBasicMaterial({
        color: 0x00d4ff,
        transparent: true,
        opacity: 0.4,
      });
      const trailLine = new THREE.Line(trailGeo, trailMat);
      rootGroup.add(trailLine);
      disposables.push(trailGeo, trailMat);

      // Ground Contact Pressure Ripple Ring
      const rippleGeo = new THREE.RingGeometry(0.1, 0.45, 24);
      const rippleMat = new THREE.MeshBasicMaterial({
        color: 0x00d4ff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.4,
      });
      const rippleMesh = new THREE.Mesh(rippleGeo, rippleMat);
      rippleMesh.rotation.x = Math.PI / 2;
      rippleMesh.position.y = -1.8;
      rootGroup.add(rippleMesh);
      disposables.push(rippleGeo, rippleMat);

      customUpdate = (t) => {
        const gaitPhase = t * 3.2;
        const lLeg = Math.sin(gaitPhase);
        const rLeg = Math.sin(gaitPhase + Math.PI);

        // Biomechanical coordinates representing dynamic human posture
        const coords: [number, number, number][] = [
          [0, 1.7, 0], // 0: Cranial
          [0, 1.25, 0], // 1: Cervical
          [0, 0.35, 0], // 2: Pelvic Core
          [-0.65, 1.15, 0], // 3: L Shoulder
          [-0.85, 0.65, rLeg * 0.3], // 4: L Elbow
          [-0.95, 0.1, rLeg * 0.5], // 5: L Wrist
          [0.65, 1.15, 0], // 6: R Shoulder
          [0.85, 0.65, lLeg * 0.3], // 7: R Elbow
          [0.95, 0.1, lLeg * 0.5], // 8: R Wrist
          [-0.38, 0.25, 0], // 9: L Hip
          [-0.42, -0.65, lLeg * 0.55], // 10: L Knee
          [-0.42, -1.65, lLeg * 0.75], // 11: L Ankle
          [0.38, 0.25, 0], // 12: R Hip
          [0.42, -0.65, rLeg * 0.55], // 13: R Knee
          [0.42, -1.65, rLeg * 0.75], // 14: R Ankle
        ];

        coords.forEach((pos, idx) => {
          skeletonJoints[idx].position.set(pos[0], pos[1], pos[2]);
        });

        // Update bone line segments
        const boneAttr = boneGeo.attributes['position'] as THREE.BufferAttribute;
        bonePairs.forEach((pair, idx) => {
          const c1 = coords[pair[0]];
          const c2 = coords[pair[1]];
          boneAttr.setXYZ(idx * 2, c1[0], c1[1], c1[2]);
          boneAttr.setXYZ(idx * 2 + 1, c2[0], c2[1], c2[2]);
        });
        boneAttr.needsUpdate = true;

        // Position joint angle measurement telemetry over Left Knee
        kneeRing.position.set(coords[10][0], coords[10][1], coords[10][2]);
        kneeRing.rotation.y = t * 1.5;

        // Foot strike ripple expansion
        const ripplePhase = (t * 1.6) % 1.0;
        rippleMesh.scale.set(1 + ripplePhase * 2, 1 + ripplePhase * 2, 1);
        rippleMat.opacity = (1 - ripplePhase) * 0.6;
        rippleMesh.position.x = lLeg > 0 ? -0.42 : 0.42;

        rootGroup.rotation.y = Math.sin(t * 0.3) * 0.35 + 0.3;
      };
    }

    // ═════════════════════════════════════════════════════════════════════════
    // 3. SMART STUDY PLANNER: Chrono-orbital Time Grids & Adaptive Rings
    // ═════════════════════════════════════════════════════════════════════════
    else if (type === 'planner') {
      // 3 Concentric Scheduling Orbital Rings (Daily / Weekly / Sprint)
      const ringData = [
        { radius: 1.2, color: 0x00d4ff, speed: 0.35 },
        { radius: 1.8, color: 0x7c3aed, speed: -0.25 },
        { radius: 2.4, color: 0x38bdf8, speed: 0.18 },
      ];

      const orbitMeshes: THREE.Mesh[] = [];
      ringData.forEach((rd, i) => {
        const rGeo = new THREE.TorusGeometry(rd.radius, 0.015, 8, 80);
        const rMat = new THREE.MeshBasicMaterial({
          color: rd.color,
          wireframe: true,
          transparent: true,
          opacity: 0.5,
        });
        const rMesh = new THREE.Mesh(rGeo, rMat);
        rMesh.rotation.x = Math.PI / 3 + i * 0.15;
        rMesh.rotation.y = i * 0.3;
        rootGroup.add(rMesh);
        orbitMeshes.push(rMesh);
        disposables.push(rGeo, rMat);
      });

      // Central Productivity Pulse Core
      const pulseGeo = new THREE.IcosahedronGeometry(0.45, 1);
      const pulseMat = new THREE.MeshStandardMaterial({
        color: 0x0284c7,
        emissive: 0x00d4ff,
        emissiveIntensity: 1.1,
        wireframe: true,
      });
      const pulseCore = new THREE.Mesh(pulseGeo, pulseMat);
      rootGroup.add(pulseCore);
      disposables.push(pulseGeo, pulseMat);

      // Productivity Wave Signal Rings expanding outward (radar sweeps)
      const waveGeo = new THREE.RingGeometry(0.3, 0.34, 36);
      const waveMat = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6,
      });
      const waveMesh = new THREE.Mesh(waveGeo, waveMat);
      waveMesh.rotation.x = Math.PI / 2;
      rootGroup.add(waveMesh);
      disposables.push(waveGeo, waveMat);

      // Orbiting Holographic Task Nodes (High / Medium / Completed)
      const taskCount = 7;
      const taskGeo = new THREE.BoxGeometry(0.18, 0.18, 0.18);
      const taskMatCyan = new THREE.MeshStandardMaterial({ color: 0x00f0ff, emissive: 0x00f0ff, emissiveIntensity: 0.9 });
      const taskMatViolet = new THREE.MeshStandardMaterial({ color: 0x7c3aed, emissive: 0x7c3aed, emissiveIntensity: 0.9 });
      disposables.push(taskGeo, taskMatCyan, taskMatViolet);

      const taskNodes: THREE.Mesh[] = [];
      for (let i = 0; i < taskCount; i++) {
        const tMesh = new THREE.Mesh(taskGeo, i % 2 === 0 ? taskMatCyan : taskMatViolet);
        rootGroup.add(tMesh);
        taskNodes.push(tMesh);
      }

      customUpdate = (t) => {
        pulseCore.rotation.x = t * 0.5;
        pulseCore.rotation.y = t * 0.7;

        orbitMeshes.forEach((mesh, idx) => {
          mesh.rotation.z = t * ringData[idx].speed;
        });

        // Productivity signal wave pulse
        const waveProgress = (t * 0.7) % 1.0;
        const waveRadius = 0.5 + waveProgress * 2.2;
        waveMesh.scale.set(waveRadius, waveRadius, 1);
        waveMat.opacity = (1 - waveProgress) * 0.7;

        taskNodes.forEach((node, idx) => {
          const orbitIdx = idx % 3;
          const radius = ringData[orbitIdx].radius;
          const speed = ringData[orbitIdx].speed * 2.0;
          const angle = t * speed + (idx / taskCount) * Math.PI * 2;

          node.position.set(
            Math.cos(angle) * radius,
            Math.sin(angle) * (radius * 0.5),
            Math.sin(angle) * 0.6
          );
          node.rotation.x = t + idx;
          node.rotation.y = t * 1.4;
        });

        rootGroup.rotation.y = t * 0.12;
      };
    }

    // ═════════════════════════════════════════════════════════════════════════
    // 4. PNEUMONIA DETECTION: Medical Radiograph Voxel Stack & Neural Convolutions
    // ═════════════════════════════════════════════════════════════════════════
    else {
      // 5 Layer Radiograph Convolutional Slices
      const sliceCount = 5;
      const sliceMeshes: THREE.Mesh[] = [];
      const sliceGeo = new THREE.PlaneGeometry(2.5, 2.5, 14, 14);

      for (let i = 0; i < sliceCount; i++) {
        const sliceMat = new THREE.MeshBasicMaterial({
          color: i === 2 ? 0x00f0ff : i % 2 === 0 ? 0x3b82f6 : 0x7c3aed,
          wireframe: true,
          transparent: true,
          opacity: 0.25 + (i === 2 ? 0.35 : i * 0.08),
        });
        const slice = new THREE.Mesh(sliceGeo, sliceMat);
        slice.position.z = (i - 2) * 0.75;
        rootGroup.add(slice);
        sliceMeshes.push(slice);
        disposables.push(sliceMat);
      }
      disposables.push(sliceGeo);

      // Sweeping Laser Scan Plane
      const laserGeo = new THREE.PlaneGeometry(2.6, 0.04);
      const laserMat = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.9,
      });
      const laserPlane = new THREE.Mesh(laserGeo, laserMat);
      rootGroup.add(laserPlane);
      disposables.push(laserGeo, laserMat);

      // 3x3 Convolutional Kernel Scanning Grid
      const kernelGeo = new THREE.BoxGeometry(0.7, 0.7, 0.25);
      const kernelMat = new THREE.MeshBasicMaterial({
        color: 0xd946ef,
        wireframe: true,
      });
      const kernelBox = new THREE.Mesh(kernelGeo, kernelMat);
      rootGroup.add(kernelBox);
      disposables.push(kernelGeo, kernelMat);

      // Neural Synaptic Weight Lines (Connecting Slices to Classification Output)
      const synapseCount = 12;
      const synapseGeo = new THREE.BufferGeometry();
      const synapsePositions = new Float32Array(synapseCount * 2 * 3);
      synapseGeo.setAttribute('position', new THREE.BufferAttribute(synapsePositions, 3));
      const synapseMat = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.45,
      });
      const synapseLines = new THREE.LineSegments(synapseGeo, synapseMat);
      rootGroup.add(synapseLines);
      disposables.push(synapseGeo, synapseMat);

      // Classification Decision Node
      const decisionGeo = new THREE.OctahedronGeometry(0.3, 0);
      const decisionMat = new THREE.MeshStandardMaterial({
        color: 0x10b981,
        emissive: 0x10b981,
        emissiveIntensity: 1.0,
      });
      const decisionNode = new THREE.Mesh(decisionGeo, decisionMat);
      decisionNode.position.set(0, 0, 2.2);
      rootGroup.add(decisionNode);
      disposables.push(decisionGeo, decisionMat);

      customUpdate = (t) => {
        sliceMeshes.forEach((slice, idx) => {
          slice.rotation.z = Math.sin(t * 0.3 + idx * 0.4) * 0.04;
        });

        // Laser scan plane moves vertically across the slices
        laserPlane.position.y = Math.sin(t * 1.8) * 1.1;
        laserPlane.position.z = Math.sin(t * 0.9) * 1.2;

        // Convolutional kernel box scans regions of interest
        kernelBox.position.x = Math.sin(t * 1.1) * 0.6;
        kernelBox.position.y = Math.cos(t * 0.9) * 0.6;
        kernelBox.rotation.z = t * 0.4;

        // Animate synaptic weight lines
        const synAttr = synapseGeo.attributes['position'] as THREE.BufferAttribute;
        for (let i = 0; i < synapseCount; i++) {
          const sliceZ = (i % sliceCount - 2) * 0.75;
          const angle = (i / synapseCount) * Math.PI * 2;
          const sx = Math.cos(angle + t * 0.2) * 1.0;
          const sy = Math.sin(angle + t * 0.2) * 1.0;

          synAttr.setXYZ(i * 2, sx, sy, sliceZ);
          synAttr.setXYZ(i * 2 + 1, decisionNode.position.x, decisionNode.position.y, decisionNode.position.z);
        }
        synAttr.needsUpdate = true;

        decisionNode.rotation.y = t * 0.8;
        decisionNode.rotation.x = t * 0.5;

        rootGroup.rotation.y = Math.sin(t * 0.25) * 0.35 + 0.3;
        rootGroup.rotation.x = Math.cos(t * 0.2) * 0.15;
      };
    }

    // ── LIGHTING ──────────────────────────────────────────────────────────────
    const dirLight = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight.position.set(4, 5, 5);
    scene.add(dirLight);

    const ambientLight = new THREE.AmbientLight(0x0a192f, 2.2);
    scene.add(ambientLight);

    const accentLight = new THREE.PointLight(0x00d4ff, 4.0, 12);
    accentLight.position.set(-3, -2, 3);
    scene.add(accentLight);

    // ── RESIZE & INTERSECTION OBSERVERS ───────────────────────────────────────
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    resizeObserver.observe(container);

    let isVisible = true;
    const visibilityObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => { isVisible = e.isIntersecting; });
    }, { threshold: 0.05 });
    visibilityObserver.observe(container);

    // ── RENDER LOOP ───────────────────────────────────────────────────────────
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (document.hidden || !isVisible) return;
      const t = clock.getElapsedTime();
      customUpdate(t);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();

      disposables.forEach((item) => item.dispose());
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [type]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[280px] relative pointer-events-none"
      aria-hidden="true"
    />
  );
};
