export function createAndAppend(name, parent, options = {}) {
  const element = document.createElement(name);
  if (parent) {
    parent.appendChild(element);
  }

  Object.entries(options).forEach(([key, value]) => {
    if (key === `content`) {
      if (value instanceof Node || value instanceof HTMLElement) {
        element.appendChild(value);
      } else {
        element.textContent = value;
      }
    } else if (value) {
      element.setAttribute(key, value);
    } else {
      element.setAttribute(key, `media/logo.jpg`);
    }
  });
  return element;
}
