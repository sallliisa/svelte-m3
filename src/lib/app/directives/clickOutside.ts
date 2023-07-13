export function clickOutside(
  node: HTMLElement,
  { handler = () => {}, exclude = "" }
): { destroy: () => void } {
  const onClick = (event: MouseEvent) => {
    if (exclude) {
      for (const node of document.querySelectorAll(exclude)) {
        if (node.contains(event.target as HTMLElement)) return
      }
    }
    return node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented && handler()
  }

  document.addEventListener("click", onClick, true);

  return {
    destroy() {
      document.removeEventListener("click", onClick, true);
    },
  };
}
