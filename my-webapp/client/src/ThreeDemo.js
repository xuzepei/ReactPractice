import React, { useEffect } from 'react';
import * as THREE from 'three';
//import { PLYLoader } from 'three-ply-loader';
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import { TextureLoader } from 'three';

const ThreeDemo = () => {
  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Load PLY file with texture coordinates
    const loader = new PLYLoader();
    loader.load('4.ply', (geometry) => {
      // Assuming your PLY file has texture coordinates, you can apply a texture
      const textureLoader = new TextureLoader();
      const texture = textureLoader.load('smile.png');
      const material = new THREE.MeshBasicMaterial({ map: texture });

      // Create a mesh with the loaded geometry and material
      const mesh = new THREE.Mesh(geometry, material);

      // Add the mesh to the scene
      scene.add(mesh);
    });

    // Animation/rendering loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Perform any additional animations or updates here

      // Render the scene
      renderer.render(scene, camera);
    };

    // Start the animation loop
    animate();
  }, []); // Empty dependency array to run the effect only once

  return null;
};

export default ThreeDemo;