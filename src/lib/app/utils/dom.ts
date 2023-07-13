import { tick } from 'svelte'

export function portal(el: HTMLElement, target: string = 'body') {
  // CREDIT: https://github.com/romkor/svelte-portal
  // Modified to only allow CSS Selector as target
  let targetEl: HTMLElement
  async function update(newTarget: string) {
    target = newTarget
    targetEl = document.querySelector(target)
    if (targetEl === null) {
      await tick()
      targetEl = document.querySelector(target)
    }
    if (targetEl === null) throw new Error(`No element found matching css selector: "${target}"`)
    targetEl.appendChild(el)
    el.hidden = false
  }

  function destroy() {
    if (el.parentNode) el.parentNode.removeChild(el)
  }

  update(target)
  return {
    update,
    destroy,
  }
}
