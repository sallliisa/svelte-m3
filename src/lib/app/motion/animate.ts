import { motion } from './index'

export function expand(
  node: HTMLElement,
  {
    duration = motion.duration.short4,
    easing = motion.easing.emphasized_decelerate,
    property = 'height',
    target = 100,
    delay = 0,
  }: {
    duration?: number
    easing?: (t: number) => number
    property?: string
    target?: number
    delay?: number
  } = {}
) {
  return {
    duration,
    easing,
    delay,
    css: (t: number) => `${property}: ${t * target}px;`,
  }
}

export function expandHeightAuto(
  node: HTMLElement,
  {
    duration = motion.duration.short4,
    easing = motion.easing.emphasized_decelerate,
    delay = 0,
  }: {
    duration?: number
    easing?: (t: number) => number
    delay?: number
  } = {}
) {
  const childHeight = Array.from(node.children).reduce((acc, child) => acc + (child as HTMLElement).offsetHeight, 0)
  return {
    duration,
    easing,
    delay,
    css: (t: number) => `height: ${t * childHeight}px;`,
  }
}

export function expandHeightAutoFade(
  node: HTMLElement,
  {
    duration = motion.duration.short4,
    easing = motion.easing.emphasized_decelerate,
    delay = 0,
  }: {
    duration?: number
    easing?: (t: number) => number
    delay?: number
  } = {}
) {
  return {
    duration,
    easing,
    delay,
    css: (t: number) => `height: ${t * node.offsetHeight}px; opacity: ${t}; transform: translateY(${(1 - t) * -node.offsetHeight}px)`,
  }
}

export function expandWidthAuto(
  node: HTMLElement,
  {
    duration = motion.duration.short4,
    easing = motion.easing.emphasized_decelerate,
    delay = 0,
  }: {
    duration?: number
    easing?: (t: number) => number
    delay?: number
  } = {}
) {
  const childWidth = Array.from(node.children).reduce((acc, child) => acc + (child as HTMLElement).offsetWidth, 0)
  return {
    duration,
    easing,
    delay,
    css: (t: number) => `width: ${t * childWidth}px;`,
  }
}

export function expandWidthAutoFade(
  node: HTMLElement,
  {
    duration = motion.duration.short4,
    easing = motion.easing.emphasized_decelerate,
    delay = 0,
  }: {
    duration?: number
    easing?: (t: number) => number
    delay?: number
  } = {}
) {
  return {
    duration,
    easing,
    delay,
    css: (t: number) => `width: ${t * node.offsetHeight}px; opacity: ${t}; transform: translateX(${(1 - t) * -node.offsetHeight}px)`,
  }
}

export function fade(
  node: HTMLElement,
  {
    duration = motion.duration.short4,
    easing = motion.easing.emphasized_decelerate,
    delay = 0,
  }: {
    duration?: number
    easing?: (t: number) => number
    delay?: number
  } = {}
) {
  const o = +getComputedStyle(node).opacity
  return {
    duration,
    easing,
    delay,
    css: (t: number) => `opacity: ${t * o}`,
  }
}

export function directionalFadeLeft(
  node: HTMLElement,
  {
    duration = motion.duration.short4,
    easing = motion.easing.emphasized_decelerate,
    delay = 0,
  }: {
    duration?: number
    easing?: (t: number) => number
    delay?: number
  } = {}
) {
  const o = +getComputedStyle(node).opacity
  return {
    duration,
    easing,
    delay,
    css: (t: number) => `opacity: ${t * o}; transform: translateX(${(1 - t) * -10}px)`,
  }
}

export function directionalFadeRight(
  node: HTMLElement,
  {
    duration = motion.duration.short4,
    easing = motion.easing.emphasized_decelerate,
    delay = 0,
  }: {
    duration?: number
    easing?: (t: number) => number
    delay?: number
  } = {}
) {
  const o = +getComputedStyle(node).opacity
  return {
    duration,
    easing,
    delay,
    css: (t: number) => `opacity: ${t * o}; transform: translateX(${(1 - t) * 10}px)`,
  }
}
