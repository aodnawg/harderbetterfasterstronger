import { useEffect } from "react";
import * as THREE from "three";

import { Uniforms } from "./uniforms";

const render = (
  uniforms: Uniforms,
  renderer: THREE.Renderer,
  scene: THREE.Scene,
  camera: THREE.Camera
) => {
  uniforms.iTime.value += 0.05;
  renderer.render(scene, camera);
};

const animate = (
  uniforms: Uniforms,
  renderer: THREE.Renderer,
  scene: THREE.Scene,
  camera: THREE.Camera
) => {
  requestAnimationFrame(() => animate(uniforms, renderer, scene, camera));
  render(uniforms, renderer, scene, camera);
};

const useAnimete = (
  scene: THREE.Scene,
  renderer: THREE.Renderer,
  uniforms: Uniforms,
  camera: THREE.Camera
) => {
  useEffect(() => {
    animate(uniforms, renderer, scene, camera);
  }, []);
};

export default useAnimete;
