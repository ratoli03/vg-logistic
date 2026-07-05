const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.style.background = 'rgba(8, 8, 8, 0.96)';
  } else {
    navbar.style.background = 'rgba(8, 8, 8, 0.82)';
  }
});
