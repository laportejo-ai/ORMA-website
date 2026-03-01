// ORMA — Main JavaScript

// Navigation scroll state
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  });
}

// Scroll reveal animations
const reveals = document.querySelectorAll('.reveal');
if (reveals.length > 0) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  reveals.forEach(reveal => observer.observe(reveal));
}

// Active nav link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// Form submission (placeholder)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submission functionality to be implemented. This is a demo.');
  });
});

// ── MOBILE BURGER MENU ──────────────────────────────────────────────────────
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuClose = document.getElementById('menuClose');
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

function openMobileMenu() {
  if (mobileMenu) mobileMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  if (mobileMenu) mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
}

if (menuToggle) menuToggle.addEventListener('click', openMobileMenu);
if (menuClose) menuClose.addEventListener('click', closeMobileMenu);
mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

// ── LIGHTBOX GALLERY ────────────────────────────────────────────────────────
const lightboxData = {
  project1: {
    title: 'Villa Horizons',
    location: 'Provence, France',
    images: [
      'images/garden1_cover.jpg',
      'images/garden1_plan.jpg',
      'images/garden1_plant1.jpg',
      'images/garden1_plant2.jpg',
    ]
  },
  project2: {
    title: 'Urban Retreat',
    location: 'Geneva, Switzerland',
    images: [
      'images/garden2_cover.jpg',
      'images/garden2_plan.jpg',
      'images/garden2_alternative.jpg',
    ]
  },
  project3: {
    title: 'Cascading Meadow',
    location: 'Bordeaux, France',
    images: [
      'images/garden3_cover.JPG',
      'images/garden3_plan.jpg',
      'images/garden3_alternative.jpg',
    ]
  },
  project4: {
    title: 'Garden 4',
    location: '',
    images: [
      'images/garden4_cover.jpg',
      'images/garden4_plan.jpg',
      'images/garden4_alternative.JPG',
    ]
  }
};

let currentProject = null;
let currentIndex = 0;
let touchStartX = 0;

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxLocation = document.getElementById('lightboxLocation');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

function openLightbox(projectId) {
  currentProject = lightboxData[projectId];
  if (!currentProject || !lightbox) return;
  currentIndex = 0;
  renderLightbox();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function renderLightbox() {
  const images = currentProject.images;
  lightboxImg.src = images[currentIndex];
  lightboxImg.alt = currentProject.title;
  lightboxCounter.textContent = `${currentIndex + 1} / ${images.length}`;
  lightboxTitle.textContent = currentProject.title;
  lightboxLocation.textContent = currentProject.location;
}

function prevImage() {
  if (!currentProject) return;
  currentIndex = (currentIndex - 1 + currentProject.images.length) % currentProject.images.length;
  renderLightbox();
}

function nextImage() {
  if (!currentProject) return;
  currentIndex = (currentIndex + 1) % currentProject.images.length;
  renderLightbox();
}

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);
if (lightboxNext) lightboxNext.addEventListener('click', nextImage);
if (lightboxImg) lightboxImg.addEventListener('click', nextImage);

// Click anywhere outside the image + arrows to close
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (!e.target.closest('.lightbox-image-wrap')) closeLightbox();
  });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox || !lightbox.classList.contains('active')) return;
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'Escape') closeLightbox();
});

// Touch swipe
if (lightbox) {
  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextImage();
      else prevImage();
    }
  }, { passive: true });
}

// Expose openLightbox globally for onclick handlers in HTML
window.openLightbox = openLightbox;
