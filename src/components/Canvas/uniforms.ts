import { Vector2 } from "three";

/**
 * https://threejs.org/docs/#api/en/core/Uniform
 */
export interface Uniform {
  type: string;
  value: any;
}

export type UniformsKeys = "iTime" | "iResolution" | "u_mouse";

export type Uniforms = { [key in UniformsKeys]: Uniform };

export const initUniforms = (): Uniforms => {
  return {
    iTime: { type: "f", value: 1.0 },
    iResolution: { type: "v2", value: new Vector2() },
    u_mouse: { type: "v2", value: new Vector2() },
  };
};
