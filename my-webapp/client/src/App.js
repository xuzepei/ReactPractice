import './css/app.css';

import MyButton from './MyButton'
import MyNewButton from './MyNewButton';
import Profile from './Profile';
import ShoppingList from './ShoppingList';
import Game from './Game';
import Gallery from './Gallery';

import PackingList from './PackingList'

import ScientistList from './ScientistList';

import RecipeList from './RecipeList';

import TodoList from './TodoList';

import Carousel from './Carousel';

import UseHook from './UseHook';

import QuoteGenerator from './QuoteGenerator';

import GitHubUserSearch from './GitHubUserSearch';

import ThreeDemo from './ThreeDemo';

import { useState } from 'react';

import React from "react";
import * as THREE from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TextureLoader } from 'three';


import Stats from "three/examples/jsm/libs/stats.module";
var container, stats;
var camera, cameraTarget, scene, renderer;

export default function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      {/* <h1>Counters that update separately</h1>
        <ol>
          <li><MyButton /></li>
          <li><MyButton /></li>
        </ol>

        <h1>Counters that update together</h1>
        <ol>
          <li><MyNewButton count={count} onClick={handleClick} /></li>
          <li><MyNewButton count={count} onClick={handleClick} /></li>
        </ol>

        <Profile />
        <ShoppingList />

        <Game />

        <p>
          <Gallery />
        </p>

        <PackingList />

        <ScientistList /> */}

      {/* <RecipeList /> */}

      {/* <TodoList /> */}

      {/* <Carousel /> */}

      {/* <UseHook /> */}

      {/* <QuoteGenerator /> */}

      {/* <GitHubUserSearch /> */}
      {/* <ThreeDemo/> */}
    </div>
  );


}



init();
animate();

function init() {
  container = document.createElement("div");
  document.body.appendChild(container);

  camera = new THREE.PerspectiveCamera(
    35,
    window.innerWidth / window.innerHeight,
    1,
    15
  );
  camera.position.set(3, 0.15, 3);

  cameraTarget = new THREE.Vector3(0, -0.1, 0);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  scene.fog = new THREE.Fog(0x000000, 2, 15);

  // Ground

  var plane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(40, 40),
    new THREE.MeshPhongMaterial({ color: 0xFFFFFF, specular: 0x101010 })
  );
  plane.rotation.x = -Math.PI / 2;
  plane.position.y = -0.5;
  scene.add(plane);

  plane.receiveShadow = true;

  // PLY file
  var loader = new PLYLoader();
  loader.load("3dtest.ply", function (geometry) {
    //geometry.computeVertexNormals();

    // Assuming your PLY file has texture coordinates, you can apply a texture
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load('1.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    
    // var material = new THREE.MeshStandardMaterial({
    //   wireframe: true
    // });
    var mesh = new THREE.Mesh(geometry, material);

    // mesh.position.y = -0.2;
    // mesh.position.z = 0.3;
    // mesh.rotation.x = -Math.PI / 2;
    mesh.scale.multiplyScalar(1);

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    scene.add(mesh);
  });

  // loader.load("4.ply", function (geometry) {
  //   geometry.computeVertexNormals();

  //   var material = new THREE.MeshStandardMaterial({
  //     wireframe: true
  //   });
  //   var mesh = new THREE.Mesh(geometry, material);

  //   mesh.position.x = -0.2;
  //   mesh.position.y = -0.02;
  //   mesh.position.z = -0.2;
  //   mesh.scale.multiplyScalar(0.0006);

  //   mesh.castShadow = true;
  //   mesh.receiveShadow = true;

  //   scene.add(mesh);
  // });

  // Lights

  scene.add(new THREE.HemisphereLight(0x443333, 0x111122));

  addShadowedLight(1, 1, 1, 0xffffff, 1.35);
  addShadowedLight(0.5, 1, -1, 0xffaa00, 1);

  // renderer

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;

  renderer.shadowMap.enabled = true;

  container.appendChild(renderer.domElement);

  // stats

  stats = new Stats();
  container.appendChild(stats.dom);

  // resize

  window.addEventListener("resize", onWindowResize, false);
}

function addShadowedLight(x, y, z, color, intensity) {
  var directionalLight = new THREE.DirectionalLight(color, intensity);
  directionalLight.position.set(x, y, z);
  scene.add(directionalLight);

  directionalLight.castShadow = true;

  var d = 1;
  directionalLight.shadow.camera.left = -d;
  directionalLight.shadow.camera.right = d;
  directionalLight.shadow.camera.top = d;
  directionalLight.shadow.camera.bottom = -d;

  directionalLight.shadow.camera.near = 1;
  directionalLight.shadow.camera.far = 4;

  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;

  directionalLight.shadow.bias = -0.001;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  render();
  stats.update();
}

function render() {
  var timer = Date.now() * 0.0005;

  camera.position.x = Math.sin(timer) * 2.5;
  camera.position.z = Math.cos(timer) * 2.5;

  camera.lookAt(cameraTarget);

  renderer.render(scene, camera);
}