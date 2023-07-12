export function clickOutside(
  node: HTMLElement,
  { handler = () => {}, exclude = "" }
): { destroy: () => void } {
  const onClick = (event: MouseEvent) => {
    let excludedElementClicked = false;
    if (exclude) {
      document.querySelectorAll(exclude).forEach((element) => {
        if (element.contains(event.target as HTMLElement)) {
          excludedElementClicked = true;
        }
      });
    }
    return (
      node &&
      !node.contains(event.target as HTMLElement) &&
      !excludedElementClicked &&
      !event.defaultPrevented &&
      handler()
    );
  };

  document.addEventListener("click", onClick, true);

  return {
    destroy() {
      document.removeEventListener("click", onClick, true);
    },
  };
}
