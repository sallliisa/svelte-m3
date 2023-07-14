import bezier from "bezier-easing";

const curve = {
  linear: bezier(0, 0, 1, 1),
  standard: bezier(0.2, 0, 0, 1),
  standard_accelerate: bezier(0.3, 0, 1, 1),
  standard_decelerate: bezier(0, 0, 0, 1),
  emphasized: bezier(0.2, 0, 0, 1),
  emphasized_decelerate: bezier(0.05, 0.7, 0.1, 1),
  emphasized_accelerate: bezier(0.3, 0, 0.8, 0.15),
  legacy: bezier(0.4, 0, 0.2, 1),
  legacy_decelerate: bezier(0, 0, 0.2, 1),
  legacy_accelerate: bezier(0.4, 0, 1, 1),
};

export const easing = {
  linear: (t: number) => curve.linear(t),
  standard: (t: number) => curve.standard(t),
  standard_accelerate: (t: number) => curve.standard_accelerate(t),
  standard_decelerate: (t: number) => curve.standard_decelerate(t),
  emphasized: (t: number) => curve.emphasized(t),
  emphasized_decelerate: (t: number) => curve.emphasized_decelerate(t),
  emphasized_accelerate: (t: number) => curve.emphasized_accelerate(t),
  legacy: (t: number) => curve.legacy(t),
  legacy_decelerate: (t: number) => curve.legacy_decelerate(t),
  legacy_accelerate: (t: number) => curve.legacy_accelerate(t),
}
