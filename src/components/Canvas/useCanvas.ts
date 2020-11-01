import React from "react";

import useInit from "./useInit";
import useAnimate from "./useAnimate";

import { initUniforms } from "./uniforms";
import initThreeObjects from "./initThreeObjects";

export const useCanvas = () => {
  const uniforms = initUniforms();
  const { camera, renderer, scene } = initThreeObjects();
  const ref = useInit(scene, renderer, uniforms);
  useAnimate(scene, renderer, uniforms, camera);
  return ref;
};
