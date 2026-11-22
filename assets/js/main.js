'use strict';
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-nav');
if (menuButton && menu) {
  const closeMenu = () => {
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  };
  menuButton.addEventListener('click', () => {
    const open = !menu.classList.contains('is-open');
    menu.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => { if (!menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu(); });
}
// Keep video downloads and simultaneous playback limited on long research pages.
const allVideos = Array.from(document.querySelectorAll('video'));
for (const video of allVideos) {
  video.addEventListener('play', () => {
    for (const other of allVideos) if (other !== video && !other.paused) other.pause();
  });
}
const copyright = document.getElementById('copyright-year');
if (copyright) copyright.textContent = String(new Date().getFullYear());
