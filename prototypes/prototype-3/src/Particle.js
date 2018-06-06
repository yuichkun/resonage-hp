"use strict"
import * as THREE from 'three';

export default class Particle {
    constructor() {
        // const geometry = new THREE.PlaneGeometry(1, 1, 1);
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const mat = new THREE.MeshPhongMaterial({
            color: 0x4080ff
        });
        const plane = new THREE.Mesh(geometry, mat);
        plane.position.set(0, -2, 0);

        this.plane = plane;
    }
    update() {
        this.plane.position.x += Math.random() * 0.2 - 0.1; 
        this.plane.position.y += Math.random() * 0.2 - 0.1; 
        this.plane.position.z += Math.random() * 0.2 - 0.1;
        this.plane.rotation.x += Math.random() * 0.2 - 0.1;
        this.plane.rotation.y += Math.random() * 0.2 - 0.1;
        this.plane.rotation.z += Math.random() * 0.2 - 0.1;
    }
}