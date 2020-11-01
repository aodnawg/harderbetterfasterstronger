import { Vector2 } from "three";

/**
 * https://threejs.org/docs/#api/en/core/Uniform
 */
export interface Uniform {
  type: string;
  value: any;
}

export type UniformsKeys = "time" | "resolution" | "mouse" | "scroll";

export type Uniforms = { [key in UniformsKeys]: Uniform };

export const initUniforms = (): Uniforms => {
  return {
    time: { type: "f", value: 1.0 },
    resolution: { type: "v2", value: new Vector2() },
    mouse: { type: "v2", value: new Vector2() },
    scroll: { type: "f", value: 0 },
  };
};
