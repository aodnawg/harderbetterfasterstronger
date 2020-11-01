import { useEffect } from "react";
import * as THREE from "three";

import { CONTAINER_ID } from "../../const";
import { Uniforms } from "./uniforms";

const calcScroll = () => {
  const scrollY = window.scrollY;
  const contaier = document.getElementById(CONTAINER_ID);
  if (!contaier) {
    throw "no container";
  }
  const scroll = scrollY / (contaier.clientHeight - window.innerHeight);
  return scroll;
};

const render = (
  uniforms: Uniforms,
  renderer: THREE.Renderer,
  scene: THREE.Scene,
  camera: THREE.Camera
) => {
  uniforms.time.value += 0.01;
  uniforms.scroll.value = calcScroll();
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
