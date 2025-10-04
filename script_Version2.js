// Navbar toggle for mobile
document.getElementById('navToggle').onclick = function () {
  document.querySelector('.nav-links').classList.toggle('show');
};

// Reveal on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const elTop = el.getBoundingClientRect().top;
    if (elTop < windowHeight - 60) {
      el.classList.add('active');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);