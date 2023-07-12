import bezier from "bezier-easing";

export function linear(t: number) {
  return bezier(0, 0, 1, 1)(t)
}

export function standard(t: number) {
  return bezier(0.2, 0, 0, 1)(t)
}

export function standard_accelerate(t: number) {
  return bezier(0.3, 0, 1, 1)(t)
}

export function standard_decelerate(t: number) {
  return bezier(0, 0, 0, 1)(t)
}

export function emphasized(t: number) {
  return bezier(0.2, 0, 0, 1)(t)
}

export function emphasized_decelerate(t: number) {
  return bezier(0.05, 0.7, 0.1, 1)(t)
}

export function emphasized_accelerate(t: number) {
  return bezier(0.3, 0, 0.8, 0.15)(t)
}

export function legacy(t: number) {
  return bezier(0.4, 0, 0.2, 1)(t)
}

export function legacy_decelerate(t: number) {
  return bezier(0, 0, 0.2, 1)(t)
}

export function legacy_accelerate(t: number) {
  return bezier(0.4, 0, 1, 1)(t)
}
