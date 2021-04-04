export function resetElement(element) {
  if (element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
}
