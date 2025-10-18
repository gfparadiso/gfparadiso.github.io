// Shared site behaviors for every page
document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Auto-collapse navbar after tapping a link on mobile
  const collapseEl =
    document.getElementById('navbarsExampleDefault') ||
    document.getElementById('siteNav');

  if (collapseEl) {
    collapseEl.addEventListener('click', (e) => {
      const target = e.target;
      if (target.classList.contains('nav-link')) {
        const instance = bootstrap.Collapse.getOrCreateInstance(collapseEl);
        if (collapseEl.classList.contains('show')) instance.hide();
      }
    });
  }
});

