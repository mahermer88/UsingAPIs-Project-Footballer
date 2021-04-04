export function resetSelected(element, selected) {
  const buttons = document.querySelectorAll(element);
  for (const button of [...buttons]) {
    button.classList.remove(selected);
  }
}
