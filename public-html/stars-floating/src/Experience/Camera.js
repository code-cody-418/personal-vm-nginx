import * as THREE from "three";
import Experience from "./Experience.js";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Sizes from "./Utils/Sizes.js";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = new Sizes();
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    
    this.setInstance();
    // this.setOrbitControls();
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      75,
      this.sizes.width / this.sizes.height,
      0.1,
      1000
    );
    this.instance.position.set(0, 1, 30);
    this.scene.add(this.instance);
  }

  setOrbitControls() {
    // orbit controls Note: uncomment update()
    // this.controls = new OrbitControls(this.instance, this.canvas)
    // this.controls.enableDamping = true
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  update() {
    // this.controls.update()
  }
}
