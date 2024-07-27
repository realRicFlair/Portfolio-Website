'use client';
import { useEffect, useRef } from 'react';
import { render } from 'react-dom';
import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

//const RotatingGlassCube: React.FC = () => {
export default function RotatingGlassCube() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current: mount } = mountRef;

    if (!mount) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const runclock = new THREE.Clock();
    runclock.autoStart = true;

    // Load the environment map asynchronously
    const rgbeLoader = new RGBELoader();
    rgbeLoader.loadAsync('/glass_env.hdr').then(glassEnv => {
      glassEnv.mapping = THREE.EquirectangularReflectionMapping;

      // Geometry
      const geometry = new THREE.IcosahedronGeometry(1, 0);

      // Material
      const material = new THREE.MeshPhysicalMaterial({
        color: 0x1f2333,
        metalness: 0,
        opacity: 0.1,
        roughness: 0,
        transmission: 1, // Glass property
        thickness: 2,
        envMap: glassEnv,
        envMapIntensity: 2,
      });

      // Mesh
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y = Math.sin(runclock.getElapsedTime()) * 10;
        cube.position.z = Math.sin(runclock.getElapsedTime() * 1.25) * 1.5 + 1.5;

        renderer.render(scene, camera);
      };

      animate();
    }).catch(error => {
      console.error('Error loading HDR environment map:', error);
    });

    // Handle Resize
    const handleResize = () => {
      const { clientWidth, clientHeight } = mount;

      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

//export default RotatingGlassCube;
