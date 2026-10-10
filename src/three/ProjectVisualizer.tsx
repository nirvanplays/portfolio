import React, { useEffect, useRef } from 'react';
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

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 6.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Dynamic objects to animate and clean up
    const disposables: (THREE.BufferGeometry | THREE.Material)[] = [];
    let customUpdate: (time: number) => void = () => {};

    if (type === 'campus') {
      // 1. SMART CAMPUS: Hierarchical Topology Nodes & Ring Matrix
      const ringGeo = new THREE.TorusGeometry(2.0, 0.02, 16, 64);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2.5;
      rootGroup.add(ringMesh);
      disposables.push(ringGeo, ringMat);

      // Central Hub
      const hubGeo = new THREE.IcosahedronGeometry(0.7, 1);
      const hubMat = new THREE.MeshStandardMaterial({
        color: 0x0284c7,
        emissive: 0x00f0ff,
        emissiveIntensity: 0.6,
        wireframe: true,
      });
      const hubMesh = new THREE.Mesh(hubGeo, hubMat);
      rootGroup.add(hubMesh);
      disposables.push(hubGeo, hubMat);

      // Satellite Nodes (Representing Modules: Student, Leave, Voting, Analytics)
      const satCount = 6;
      const satMeshes: THREE.Mesh[] = [];
      const satGeo = new THREE.SphereGeometry(0.16, 12, 12);
      const satMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 1.0,
      });
      disposables.push(satGeo, satMat);

      for (let i = 0; i < satCount; i++) {
        const sat = new THREE.Mesh(satGeo, satMat);
        rootGroup.add(sat);
        satMeshes.push(sat);
      }

      // Connecting Lines to Hub
      const linePositions = new Float32Array(satCount * 2 * 3);
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.4,
      });
      const lines = new THREE.LineSegments(lineGeo, lineMat);
      rootGroup.add(lines);
      disposables.push(lineGeo, lineMat);

      customUpdate = (t) => {
        hubMesh.rotation.y = t * 0.4;
        hubMesh.rotation.x = t * 0.2;
        ringMesh.rotation.z = -t * 0.2;

        const posAttr = lineGeo.attributes.position as THREE.BufferAttribute;
        satMeshes.forEach((sat, idx) => {
          const angle = (idx / satCount) * Math.PI * 2 + t * 0.35;
          const x = Math.cos(angle) * 2.0;
          const y = Math.sin(angle) * 0.8;
          const z = Math.sin(angle) * 1.5;
          sat.position.set(x, y, z);

          posAttr.setXYZ(idx * 2, 0, 0, 0);
          posAttr.setXYZ(idx * 2 + 1, x, y, z);
        });
        posAttr.needsUpdate = true;
      };
    } else if (type === 'physiosis') {
      // 2. PHYSIOSIS: Biomechanical Kinematic Skeleton & Gait Joint Angles
      const skeletonJoints: THREE.Mesh[] = [];
      const jointGeo = new THREE.SphereGeometry(0.1, 12, 12);
      const jointMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
      disposables.push(jointGeo, jointMat);

      // Define standard humanoid joint anchor offsets
      const jointBones: [number, number][] = [
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

      const totalJoints = 15;
      for (let i = 0; i < totalJoints; i++) {
        const j = new THREE.Mesh(jointGeo, jointMat);
        rootGroup.add(j);
        skeletonJoints.push(j);
      }

      const boneGeo = new THREE.BufferGeometry();
      const bonePositions = new Float32Array(jointBones.length * 2 * 3);
      boneGeo.setAttribute('position', new THREE.BufferAttribute(bonePositions, 3));
      const boneMat = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.8,
      });
      const boneLines = new THREE.LineSegments(boneGeo, boneMat);
      rootGroup.add(boneLines);
      disposables.push(boneGeo, boneMat);

      // Joint Angle Arc Circle Indicator
      const arcGeo = new THREE.RingGeometry(0.35, 0.4, 32);
      const arcMat = new THREE.MeshBasicMaterial({
        color: 0xd946ef,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7,
      });
      const arcMesh = new THREE.Mesh(arcGeo, arcMat);
      rootGroup.add(arcMesh);
      disposables.push(arcGeo, arcMat);

      customUpdate = (t) => {
        // Procedural gait cycle locomotion
        const gaitPhase = t * 3.5;
        const lLegPhase = Math.sin(gaitPhase);
        const rLegPhase = Math.sin(gaitPhase + Math.PI);

        // Coordinates mapping
        const coords: [number, number, number][] = [
          [0, 1.8, 0], // 0: Head
          [0, 1.3, 0], // 1: Neck
          [0, 0.4, 0], // 2: Pelvis
          [-0.7, 1.2, 0], // 3: L Shoulder
          [-0.9, 0.7, rLegPhase * 0.3], // 4: L Elbow (counterarm)
          [-1.0, 0.1, rLegPhase * 0.5], // 5: L Wrist
          [0.7, 1.2, 0], // 6: R Shoulder
          [0.9, 0.7, lLegPhase * 0.3], // 7: R Elbow
          [1.0, 0.1, lLegPhase * 0.5], // 8: R Wrist
          [-0.4, 0.3, 0], // 9: L Hip
          [-0.45, -0.6, lLegPhase * 0.6], // 10: L Knee
          [-0.45, -1.6, lLegPhase * 0.8], // 11: L Ankle
          [0.4, 0.3, 0], // 12: R Hip
          [0.45, -0.6, rLegPhase * 0.6], // 13: R Knee
          [0.45, -1.6, rLegPhase * 0.8], // 14: R Ankle
        ];

        coords.forEach((c, idx) => {
          skeletonJoints[idx].position.set(c[0], c[1], c[2]);
        });

        // Position angular tracking arc over the left knee
        arcMesh.position.set(coords[10][0], coords[10][1], coords[10][2]);
        arcMesh.rotation.y = t;

        const posAttr = boneGeo.attributes.position as THREE.BufferAttribute;
        jointBones.forEach((pair, idx) => {
          const c1 = coords[pair[0]];
          const c2 = coords[pair[1]];
          posAttr.setXYZ(idx * 2, c1[0], c1[1], c1[2]);
          posAttr.setXYZ(idx * 2 + 1, c2[0], c2[1], c2[2]);
        });
        posAttr.needsUpdate = true;

        rootGroup.rotation.y = Math.sin(t * 0.5) * 0.4 + 0.3;
      };
    } else if (type === 'planner') {
      // 3. SMART STUDY PLANNER: Chrono-orbital Time-Grid & Adaptive Schedule Rings
      const ringCount = 4;
      const rings: THREE.Mesh[] = [];
      for (let i = 0; i < ringCount; i++) {
        const radius = 1.0 + i * 0.6;
        const rGeo = new THREE.TorusGeometry(radius, 0.015, 8, 64);
        const rMat = new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0x00f0ff : 0x8b5cf6,
          wireframe: true,
          transparent: true,
          opacity: 0.4 + i * 0.1,
        });
        const rMesh = new THREE.Mesh(rGeo, rMat);
        rMesh.rotation.x = Math.PI / 3 + i * 0.1;
        rMesh.rotation.y = i * 0.2;
        rootGroup.add(rMesh);
        rings.push(rMesh);
        disposables.push(rGeo, rMat);
      }

      // Orbiting Session Nodes
      const planNodesGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      const planNodesMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x00f0ff,
        emissiveIntensity: 0.8,
      });
      disposables.push(planNodesGeo, planNodesMat);

      const planNodes: THREE.Mesh[] = [];
      for (let i = 0; i < 8; i++) {
        const pNode = new THREE.Mesh(planNodesGeo, planNodesMat);
        rootGroup.add(pNode);
        planNodes.push(pNode);
      }

      customUpdate = (t) => {
        rings.forEach((ring, idx) => {
          ring.rotation.z = t * (0.2 + idx * 0.1) * (idx % 2 === 0 ? 1 : -1);
        });

        planNodes.forEach((node, idx) => {
          const ringIndex = idx % ringCount;
          const radius = 1.0 + ringIndex * 0.6;
          const speed = 0.5 + ringIndex * 0.2;
          const angle = t * speed + (idx / planNodes.length) * Math.PI * 2;
          node.position.set(
            Math.cos(angle) * radius,
            Math.sin(angle) * (radius * 0.6),
            Math.sin(angle) * 0.5
          );
          node.rotation.x = t + idx;
          node.rotation.y = t * 1.5;
        });

        rootGroup.rotation.y = t * 0.15;
      };
    } else {
      // 4. PNEUMONIA DETECTION: Medical Radiograph Convolutional Feature Maps
      // 3D Matrix / Grid of neural feature layers
      const layerCount = 5;
      const layers: THREE.Mesh[] = [];

      for (let i = 0; i < layerCount; i++) {
        const planeGeo = new THREE.PlaneGeometry(2.4, 2.4, 12, 12);
        const planeMat = new THREE.MeshBasicMaterial({
          color: i === 2 ? 0x00f0ff : 0x3b82f6,
          wireframe: true,
          transparent: true,
          opacity: 0.25 + i * 0.12,
        });
        const plane = new THREE.Mesh(planeGeo, planeMat);
        plane.position.z = (i - 2) * 0.7;
        rootGroup.add(plane);
        layers.push(plane);
        disposables.push(planeGeo, planeMat);
      }

      // Feature detection bounding crosshair
      const boxGeo = new THREE.BoxGeometry(0.9, 0.9, 0.4);
      const boxMat = new THREE.MeshBasicMaterial({
        color: 0xd946ef,
        wireframe: true,
      });
      const box = new THREE.Mesh(boxGeo, boxMat);
      box.position.set(0.3, 0.2, 0);
      rootGroup.add(box);
      disposables.push(boxGeo, boxMat);

      customUpdate = (t) => {
        layers.forEach((layer, idx) => {
          layer.rotation.z = Math.sin(t * 0.4 + idx * 0.3) * 0.05;
        });

        box.position.x = Math.sin(t * 1.2) * 0.5 + 0.2;
        box.position.y = Math.cos(t * 0.9) * 0.4;
        box.rotation.z = t * 0.2;

        rootGroup.rotation.y = Math.sin(t * 0.3) * 0.35 + 0.4;
        rootGroup.rotation.x = Math.cos(t * 0.2) * 0.15;
      };
    }

    // LIGHTING
    const light = new THREE.DirectionalLight(0xffffff, 2.0);
    light.position.set(3, 4, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x0a192f, 1.8);
    scene.add(ambientLight);

    // RESIZE
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // ANIMATION
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      customUpdate(t);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);

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
