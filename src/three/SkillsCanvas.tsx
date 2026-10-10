import { useEffect, useRef } from 'react';
import type React from 'react';
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

    const isMobile = window.innerWidth < 768;

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03050a, 0.035);

    const camera = new THREE.PerspectiveCamera(
      48,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 11);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
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
      const clusterCenterY = Math.sin(clusterAngle) * (clusterRadius * 0.72);
      const clusterCenterZ = (Math.random() - 0.5) * 1.5;

      const catColor = new THREE.Color(cat.color);

      cat.skills.forEach((skillName) => {
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

    // BUILD INTERCONNECTING NETWORK LINES (Within clusters and bridging cross-domain)
    const linePairs: [number, number][] = [];
    nodes.forEach((n1, i) => {
      nodes.forEach((n2, j) => {
        if (i >= j) return;
        const dist = n1.basePosition.distanceTo(n2.basePosition);
        if (n1.category === n2.category && dist < 2.0) {
          linePairs.push([i, j]);
        } else if (n1.category !== n2.category && dist < 2.8 && Math.random() > 0.82) {
          linePairs.push([i, j]);
        }
      });
    });

    // CREATE INSTANCED OR INDIVIDUAL NODE MESHES
    const nodeGeometry = new THREE.SphereGeometry(0.18, 16, 16);
    const nodeMeshes: THREE.Mesh[] = [];

    nodes.forEach((node, idx) => {
      const mat = new THREE.MeshStandardMaterial({
        color: node.color,
        emissive: node.color,
        emissiveIntensity: 0.9,
        roughness: 0.15,
        metalness: 0.85,
        transparent: true,
        opacity: 0.95,
      });
      const mesh = new THREE.Mesh(nodeGeometry, mat);
      mesh.position.copy(node.position);
      mesh.userData = { nodeIndex: idx, name: node.name, category: node.category };
      graphGroup.add(mesh);
      nodeMeshes.push(mesh);
    });

    // CREATE NETWORK LINE GEOMETRY
    const linePositions = new Float32Array(linePairs.length * 2 * 3);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });
    const networkLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    graphGroup.add(networkLines);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0x060e1e, 2.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00d4ff, 8, 20);
    pointLight.position.set(0, 0, 6);
    scene.add(pointLight);

    // RAYCASTING & MOUSE INTERACTION
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);
    let hoveredMeshIndex: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    container.addEventListener('mousemove', handleMouseMove, { passive: true });

    // RESIZE OBSERVER
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
    resizeObserver.observe(container);

    // INTERSECTION OBSERVER FOR PERFORMANCE CULLING
    let isVisible = true;
    const visibilityObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => { isVisible = e.isIntersecting; });
    }, { threshold: 0.05 });
    visibilityObserver.observe(container);

    // ANIMATION LOOP
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (document.hidden || !isVisible) return;
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

        const scale = isHovered ? 1.6 : isCatMatch ? 1.0 : 0.55;
        mesh.scale.setScalar(scale);

        const mat = mesh.material as THREE.MeshStandardMaterial;
        mat.emissiveIntensity = isHovered ? 2.5 : isCatMatch ? 0.9 : 0.2;
        mat.opacity = isCatMatch ? 0.95 : 0.22;
        mat.transparent = true;
      });

      // Update line segment positions
      const posAttr = lineGeometry.attributes['position'] as THREE.BufferAttribute;
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
      resizeObserver.disconnect();
      visibilityObserver.disconnect();

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
