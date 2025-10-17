// Set current year in footer
document.getElementById('year')?.append(new Date().getFullYear());

// Auto-activate nav link based on current path
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar-nav .nav-link').forEach(a => {
  const href = a.getAttribute('href');
  if (href === path) a.classList.add('active');
});

// Respect reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('*').forEach(el => {
    el.style.scrollBehavior = 'auto';
    el.style.transition = 'none';
    el.style.animation = 'none';
  });
}
// Footer year
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Collapse navbar after click on mobile
  const nav = document.getElementById('navbarsExampleDefault') || document.getElementById('siteNav');
  if (nav) {
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const bsCollapse = bootstrap.Collapse.getInstance(nav);
        if (bsCollapse) bsCollapse.hide();
      });
    });
  }
});
