import { emphasized_decelerate } from "./easing";

export function expand(node: HTMLElement, {duration = null, easing = null, property = null, target = null}: {duration?: number, easing?: (t: number) => number, property?: string, target?: number} = {}) {
  return {
    duration: duration,
    easing: easing,
    css: (t: number) => `${property}: ${t * target}px;`
  }
}