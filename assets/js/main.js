'use strict';
const button=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
if(button&&nav){
  const close=()=>{nav.classList.remove('is-open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open navigation');};
  button.addEventListener('click',()=>{const active=!nav.classList.contains('is-open');nav.classList.toggle('is-open',active);button.setAttribute('aria-expanded',String(active));button.setAttribute('aria-label',active?'Close navigation':'Open navigation');});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
  document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!button.contains(e.target))close();});
}
// Keep a single research recording playing at a time.
const videos=[...document.querySelectorAll('video')];
videos.forEach(v=>v.addEventListener('play',()=>videos.forEach(other=>{if(other!==v&&!other.paused)other.pause();})));
const year=document.querySelector('#copyright-year');if(year)year.textContent=new Date().getFullYear().toString();
