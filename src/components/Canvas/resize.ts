import { Uniforms } from "./uniforms";

export const resize = (
  container: Element,
  renderer: THREE.Renderer,
  uniforms: Uniforms
): void => {
  renderer.setSize(container.clientWidth, container.clientHeight);
  uniforms.resolution.value.x = renderer.domElement.width;
  uniforms.resolution.value.y = renderer.domElement.height;
};

export default resize;
