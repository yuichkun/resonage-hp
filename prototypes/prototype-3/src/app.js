"use strict"
import './style.scss';
import * as THREE from 'three';
import Particle from './Particle';

window.addEventListener('load', () => {
    const { scene, camera, renderer } = init();

    const particles = Array(1000).fill(new Particle());
    scene.add(...particles.map(p => p.plane));

    function update() {
        particles.forEach(p => {
            p.update();
        });        
    }

    function animate() {
        update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
});

function init() {
    const targetDOM = document.getElementById('jumbotron');
    const {
        clientWidth: width,
        clientHeight: height
    } = targetDOM;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera();
    camera.position.z = 40;
    const renderer = new THREE.WebGLRenderer();
    const light = new THREE.DirectionalLight(0xffffff);
    scene.add(light);
    // light.position.x = 120;
    // light.position.y = 120;
    // light.position.z = 120;
    renderer.setSize(width, height);
    targetDOM.appendChild(renderer.domElement);
    return {
        scene, camera, renderer
    }
}