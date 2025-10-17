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
