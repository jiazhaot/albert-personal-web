const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const sections = Array.from(document.querySelectorAll('.panel'));
const fallback = document.getElementById('gallery-fallback');

const setActiveLink = (sectionId) => {
  navLinks.forEach((link) => {
    const target = link.getAttribute('href')?.replace('#', '');
    link.classList.toggle('is-active', target === sectionId);
  });
};

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId) {
      return;
    }
    event.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveLink(target.id);
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  },
  { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
);

sections.forEach((section) => observer.observe(section));

if (fallback) {
  setTimeout(() => {
    const gallerySection = document.querySelector('#gallery .elfsight-app-PLACEHOLDER');
    if (!gallerySection || gallerySection.children.length === 0) {
      fallback.classList.add('is-visible');
    }
  }, 6000);
}
