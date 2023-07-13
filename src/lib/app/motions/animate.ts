import { emphasized_decelerate } from './easing'

export function expand(
  node: HTMLElement,
  {
    duration = 350,
    easing = emphasized_decelerate,
    property = 'height',
    target = 100,
  }: {
    duration?: number
    easing?: (t: number) => number
    property?: string
    target?: number
  } = {}
) {
  return {
    duration: duration,
    easing: easing,
    css: (t: number) => `${property}: ${t * target}px;`,
  }
}

export function expandHeightAuto(
  node: HTMLElement,
  {
    duration = 350,
    easing = emphasized_decelerate,
  }: {
    duration?: number
    easing?: (t: number) => number
  } = {}
) {
  const childHeight = Array.from(node.children).reduce((acc, child) => acc + (child as HTMLElement).offsetHeight, 0)
  return {
    duration,
    easing,
    css: (t: number) => `height: ${t * childHeight}px;`,
  }
}

export function expandHeightAutoFade(
  node: HTMLElement,
  {
    duration = 350,
    easing = emphasized_decelerate,
  }: {
    duration?: number
    easing?: (t: number) => number
  } = {}
) {
  return {
    duration,
    easing,
    css: (t: number) => `height: ${t * node.offsetHeight}px; opacity: ${t};`,
  }
}

export function expandWidthAuto(
  node: HTMLElement,
  {
    duration = 350,
    easing = emphasized_decelerate,
  }: {
    duration?: number
    easing?: (t: number) => number
  } = {}
) {
  const childWidth = Array.from(node.children).reduce((acc, child) => acc + (child as HTMLElement).offsetWidth, 0)
  return {
    duration,
    easing,
    css: (t: number) => `width: ${t * childWidth}px;`,
  }
}

export function expandWidthAutoFade(
  node: HTMLElement,
  {
    duration = 350,
    easing = emphasized_decelerate,
  }: {
    duration?: number
    easing?: (t: number) => number
  } = {}
) {
  const childWidth = Array.from(node.children).reduce((acc, child) => acc + (child as HTMLElement).offsetWidth, 0)
  return {
    duration,
    easing,
    css: (t: number) => `width: ${t * childWidth}px; opacity: ${t}`,
  }
}

export function fade(
  node: HTMLElement,
  {
    duration = 350,
    easing = emphasized_decelerate,
  }: {
    duration?: number
    easing?: (t: number) => number
  } = {}
) {
  const o = +getComputedStyle(node).opacity
  return {
    duration: duration,
    easing: easing,
    css: (t: number) => `opacity: ${t * o}`,
  }
}
