import { useEffect, useRef } from "react";
import * as THREE from "three";

import { Uniforms } from "./uniforms";
import { resize } from "./resize";

const init = (
  container: Element,
  scene: THREE.Scene,
  renderer: THREE.Renderer,
  uniforms: Uniforms
) => {
  const geometry = new THREE.PlaneBufferGeometry(2, 2);
  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: document.getElementById("vertexShader")!.textContent!,
    fragmentShader: document.getElementById("fragmentShader")!.textContent!,
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  (renderer as any).setPixelRatio!(window.devicePixelRatio);
  container.appendChild(renderer.domElement);
  document.onmousemove = function (e) {
    uniforms.u_mouse.value.x = e.pageX;
    uniforms.u_mouse.value.y = e.pageY;
  };
};

const useInit = (
  scene: THREE.Scene,
  renderer: THREE.Renderer,
  uniforms: Uniforms
) => {
  const cnvsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (cnvsRef.current === null) {
      return;
    }

    init(cnvsRef.current, scene, renderer, uniforms);
    const resize_ = () => resize(cnvsRef.current!, renderer, uniforms);
    resize_();
    window.addEventListener("resize", resize_, false);
    return () => {
      window.removeEventListener("resize", resize_, false);
    };
  }, []);
  return cnvsRef;
};

export default useInit;
