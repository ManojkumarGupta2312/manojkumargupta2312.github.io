'use strict';
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  const close = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
  };
  toggle.addEventListener('click', () => {
    const opening = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', opening);
    toggle.setAttribute('aria-expanded', String(opening));
    toggle.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  document.addEventListener('click', e => { if (!toggle.contains(e.target) && !nav.contains(e.target)) close(); });
}
// Prevent simultaneous large-video playback and needless decoding.
const videos = [...document.querySelectorAll('video')];
videos.forEach(v => v.addEventListener('play', () => videos.forEach(other => {
  if (other !== v && !other.paused) other.pause();
})));
// View details of diagrams and experimental images without enlarging the page cards.
const viewer = document.querySelector('#research-image-dialog');
const viewerImg = viewer?.querySelector('img');
const viewerCaption = viewer?.querySelector('.dialog-caption');
if (viewer && viewerImg && viewerCaption) {
  document.querySelectorAll('[data-full-image]').forEach(button => {
    button.addEventListener('click', () => {
      viewerImg.src = button.dataset.fullImage;
      viewerImg.alt = button.dataset.alt || 'Research image';
      viewerCaption.textContent = button.closest('figure')?.querySelector('figcaption > span')?.textContent || '';
      viewer.showModal();
    });
  });
  viewer.querySelector('.dialog-close')?.addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
  viewer.addEventListener('close', () => { viewerImg.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='; });
}
const year = document.querySelector('#copyright-year');
if (year) year.textContent = new Date().getFullYear().toString();
