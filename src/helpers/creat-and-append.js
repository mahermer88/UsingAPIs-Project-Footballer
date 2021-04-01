export function createAndAppend(name, parent, options = {}) {
  const element = document.createElement(name);
  parent.appendChild(element);
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'text') {
      element.textContent = value;
    } else {
      element.setAttribute(key, value);
    }
  });
  return element;
}
