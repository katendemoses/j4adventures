// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile drawer
const hamburger = document.getElementById('hamburger');
const mobileDrawer = document.getElementById('mobileDrawer');
function toggleDrawer() {
  hamburger.classList.toggle('open');
  mobileDrawer.classList.toggle('open');
  document.body.style.overflow = mobileDrawer.classList.contains('open') ? 'hidden' : '';
}
function closeDrawer() {
  hamburger.classList.remove('open');
  mobileDrawer.classList.remove('open');
  document.body.style.overflow = '';
}

// Active nav links
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 140) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// Form submission
function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  const fb = document.getElementById('formFeedback');
  if (name && email && msg) {
    fb.innerHTML = '<span style="color:#1a5c36;"><i class="fas fa-check-circle"></i> Thanks, ' + name + '! Our travel expert will be in touch within 24 hours. 🌍</span>';
    e.target.reset();
  }
}