import * as THREE from "three";

const initScene = (): THREE.Scene => {
  return new THREE.Scene();
};

const initRenderer = (): THREE.WebGLRenderer => {
  return new THREE.WebGLRenderer();
};

const initCamera = (): THREE.Camera => {
  const camera = new THREE.Camera();
  camera.position.z = 1;
  return camera;
};

const initThreeObjects = () => {
  const scene = initScene();
  const renderer = initRenderer();
  const camera = initCamera();

  return { scene, renderer, camera };
};

export default initThreeObjects;
