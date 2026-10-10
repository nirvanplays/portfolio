import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsCanvasProps {
  selectedCategory: string | null;
  onHoverSkill: (skillName: string | null, category: string | null) => void;
  onSelectCategory?: (category: string) => void;
}

interface NodeData {
  id: string;
  name: string;
  category: string;
  color: THREE.Color;
  position: THREE.Vector3;
  basePosition: THREE.Vector3;
  connections: number[];
  meshIndex: number;
}

export const SkillsCanvas: React.FC<SkillsCanvasProps> = ({
  selectedCategory,
  onHoverSkill,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedCatRef = useRef(selectedCategory);
  selectedCatRef.current = selectedCategory;

  const onHoverSkillRef = useRef(onHoverSkill);
  onHoverSkillRef.current = onHoverSkill;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070b, 0.04);

    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 11);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ROOT NODE GRAPH
    const graphGroup = new THREE.Group();
    scene.add(graphGroup);

    // FLATTEN SKILLS & ASSIGN 3D CLUSTER POSITIONS
    const nodes: NodeData[] = [];
    const categoryAngles: Record<string, number> = {};
    const totalCategories = SKILL_CATEGORIES.length;

    SKILL_CATEGORIES.forEach((cat, idx) => {
      categoryAngles[cat.category] = (idx / totalCategories) * Math.PI * 2;
    });

    let globalNodeIdx = 0;
    SKILL_CATEGORIES.forEach((cat) => {
      const clusterAngle = categoryAngles[cat.category];
      const clusterRadius = 4.2;
      const clusterCenterX = Math.cos(clusterAngle) * clusterRadius;
      const clusterCenterY = Math.sin(clusterAngle) * (clusterRadius * 0.75);
      const clusterCenterZ = (Math.random() - 0.5) * 1.5;

      const catColor = new THREE.Color(cat.color);

      cat.skills.forEach((skillName) => {
        // Offset each skill inside its cluster
        const offsetAngle = Math.random() * Math.PI * 2;
        const offsetDist = 0.5 + Math.random() * 1.2;
        const pos = new THREE.Vector3(
          clusterCenterX + Math.cos(offsetAngle) * offsetDist,
          clusterCenterY + Math.sin(offsetAngle) * (offsetDist * 0.8),
          clusterCenterZ + (Math.random() - 0.5) * 1.8
        );

        nodes.push({
          id: `${cat.category}-${skillName}`,
          name: skillName,
          category: cat.category,
          color: catColor,
          position: pos.clone(),
          basePosition: pos.clone(),
          connections: [],
          meshIndex: globalNodeIdx++,
        });
      });
    });

    // BUILD CONNECTIONS (Intra-cluster lines + some inter-cluster cross links)
    const linePairs: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const sameCategory = nodes[i].category === nodes[j].category;
        const dist = nodes[i].basePosition.distanceTo(nodes[j].basePosition);

        if (sameCategory && dist < 2.2) {
          linePairs.push([i, j]);
          nodes[i].connections.push(j);
          nodes[j].connections.push(i);
        } else if (!sameCategory && dist < 3.2 && Math.random() > 0.82) {
          // Cross-domain connection
          linePairs.push([i, j]);
          nodes[i].connections.push(j);
          nodes[j].connections.push(i);
        }
      }
    }

    // SPHERICAL NODE MESHES
    const nodeGeometry = new THREE.SphereGeometry(0.12, 16, 16);
    const nodeMeshes: THREE.Mesh[] = [];

    nodes.forEach((node) => {
      const mat = new THREE.MeshStandardMaterial({
        color: node.color,
        emissive: node.color,
        emissiveIntensity: 0.8,
        roughness: 0.2,
        metalness: 0.8,
      });
      const mesh = new THREE.Mesh(nodeGeometry, mat);
      mesh.position.copy(node.position);
      mesh.userData = { nodeIndex: node.meshIndex };
      graphGroup.add(mesh);
      nodeMeshes.push(mesh);
    });

    // LINES GEOMETRY
    const linePositions = new Float32Array(linePairs.length * 2 * 3);
    const lineColors = new Float32Array(linePairs.length * 2 * 3);

    for (let k = 0; k < linePairs.length; k++) {
      const [n1, n2] = linePairs[k];
      const p1 = nodes[n1].position;
      const p2 = nodes[n2].position;
      const c1 = nodes[n1].color;
      const c2 = nodes[n2].color;

      linePositions[k * 6] = p1.x;
      linePositions[k * 6 + 1] = p1.y;
      linePositions[k * 6 + 2] = p1.z;
      linePositions[k * 6 + 3] = p2.x;
      linePositions[k * 6 + 4] = p2.y;
      linePositions[k * 6 + 5] = p2.z;

      lineColors[k * 6] = c1.r;
      lineColors[k * 6 + 1] = c1.g;
      lineColors[k * 6 + 2] = c1.b;
      lineColors[k * 6 + 3] = c2.r;
      lineColors[k * 6 + 4] = c2.g;
      lineColors[k * 6 + 5] = c2.b;
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });

    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    graphGroup.add(lineSegments);

    // AMBIENT & LIGHTS
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00f0ff, 2.5, 20);
    pointLight.position.set(0, 0, 6);
    scene.add(pointLight);

    // RAYCASTER FOR MOUSE INTERACTION
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);
    let hoveredMeshIndex: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    container.addEventListener('mousemove', handleMouseMove);

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
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle floating motion
      nodes.forEach((node, idx) => {
        const floatY = Math.sin(elapsedTime * 1.2 + idx * 0.4) * 0.1;
        const floatX = Math.cos(elapsedTime * 0.9 + idx * 0.3) * 0.08;
        node.position.x = node.basePosition.x + floatX;
        node.position.y = node.basePosition.y + floatY;

        const mesh = nodeMeshes[idx];
        mesh.position.copy(node.position);

        // Highlight if category matches
        const activeCategory = selectedCatRef.current;
        const isCatMatch = !activeCategory || node.category === activeCategory;
        const isHovered = hoveredMeshIndex === idx;

        const scale = isHovered ? 1.6 : isCatMatch ? 1.0 : 0.6;
        mesh.scale.setScalar(scale);

        const mat = mesh.material as THREE.MeshStandardMaterial;
        mat.emissiveIntensity = isHovered ? 2.5 : isCatMatch ? 0.9 : 0.2;
        mat.opacity = isCatMatch ? 1.0 : 0.25;
        mat.transparent = true;
      });

      // Update line segment positions
      const posAttr = lineGeometry.attributes.position as THREE.BufferAttribute;
      for (let k = 0; k < linePairs.length; k++) {
        const [n1, n2] = linePairs[k];
        const p1 = nodes[n1].position;
        const p2 = nodes[n2].position;

        posAttr.setXYZ(k * 2, p1.x, p1.y, p1.z);
        posAttr.setXYZ(k * 2 + 1, p2.x, p2.y, p2.z);
      }
      posAttr.needsUpdate = true;

      // Subtle constellation rotation
      graphGroup.rotation.y = elapsedTime * 0.04;
      graphGroup.rotation.x = Math.sin(elapsedTime * 0.03) * 0.08;

      // Raycast hover test
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);

      if (intersects.length > 0) {
        const hitIdx = intersects[0].object.userData.nodeIndex as number;
        if (hoveredMeshIndex !== hitIdx) {
          hoveredMeshIndex = hitIdx;
          const node = nodes[hitIdx];
          onHoverSkillRef.current(node.name, node.category);
        }
      } else {
        if (hoveredMeshIndex !== null) {
          hoveredMeshIndex = null;
          onHoverSkillRef.current(null, null);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      nodeGeometry.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      nodeMeshes.forEach((m) => {
        (m.material as THREE.Material).dispose();
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[460px] relative cursor-crosshair"
      aria-label="Interactive 3D Skill Constellation"
    />
  );
};
