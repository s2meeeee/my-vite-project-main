async function loadComponent(url, elementId) {
  const response = await fetch(url);
  const text = await response.text();
  document.getElementById(elementId).innerHTML = text;
}

export function loadHeader() {
  loadComponent('/header.html', 'header');
}

export function loadFooter() {
  loadComponent('/footer.html', 'footer');
}