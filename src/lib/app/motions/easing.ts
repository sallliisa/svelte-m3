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

export function linear(t: number) {
  return curve.linear(t);
}

export function standard(t: number) {
  return curve.standard(t);
}

export function standard_accelerate(t: number) {
  return curve.standard_accelerate(t);
}

export function standard_decelerate(t: number) {
  return curve.standard_decelerate(t);
}

export function emphasized(t: number) {
  return curve.emphasized(t);
}

export function emphasized_decelerate(t: number) {
  return curve.emphasized_decelerate(t);
}

export function emphasized_accelerate(t: number) {
  return curve.emphasized_accelerate(t);
}

export function legacy(t: number) {
  return curve.legacy(t);
}

export function legacy_decelerate(t: number) {
  return curve.legacy_decelerate(t);
}

export function legacy_accelerate(t: number) {
  return curve.legacy_accelerate(t);
}
