const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle?.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => {
  if (!glow) return;
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: .14 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
