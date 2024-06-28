/*!
confetti
Copyright (c) 2023 by Wakana Y.K. (https://codepen.io/wakana-k/pen/gOqqWdY)

Luxurious version : https://codepen.io/wakana-k/pen/mdvoQaV
*/
"use strict";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

console.clear();

(function () {
  const worldRadius = 5;
  const confettiSize = 0.07;
  const confettiNum = 3000;
  const rotateRange_x = Math.PI / 30;
  const rotateRange_y = Math.PI / 50;
  const speed_y = 0.01;
  const speed_x = 0.003;
  const speed_z = 0.005;

  let camera, scene, renderer, controls;
  let confettiMesh;
  const dummy = new THREE.Object3D();
  const matrix = new THREE.Matrix4();
  const color = new THREE.Color();

  init();

  function init() {
    //
    camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      1,
      worldRadius * 3
    );
    camera.position.z = worldRadius * Math.sqrt(2);
    //camera.position.set(-1, 1.5, 2);
    //camera.lookAt(0, 0.5, 0);

    scene = new THREE.Scene();
    //scene.background = new THREE.Color(0x666666);

    /////////////////////////////////
    // Confetti
    /////////////////////////////////
    // choose random color
    function getRandomColor() {
      let saturation = 100;
      let lightness = 50;
      const colors = [
        "hsl(0, " + saturation + "%, " + lightness + "%)",
