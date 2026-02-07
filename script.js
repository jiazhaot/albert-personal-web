const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const panels = Array.from(document.querySelectorAll('.panel'));
const fallback = document.getElementById('gallery-fallback');

const showSection = (sectionId) => {
  panels.forEach((panel) => {
    const isTarget = panel.id === sectionId;
    panel.classList.toggle('is-visible', isTarget);
  });

  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link.dataset.section === sectionId);
  });
};

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    showSection(link.dataset.section);
  });
});

showSection('about');

if (fallback) {
  setTimeout(() => {
    const gallerySection = document.querySelector('#gallery .elfsight-app-PLACEHOLDER');
    if (!gallerySection || gallerySection.children.length === 0) {
      fallback.classList.add('is-visible');
    }
  }, 6000);
}
