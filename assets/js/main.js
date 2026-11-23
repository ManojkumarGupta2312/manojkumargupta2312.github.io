'use strict';
const button=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
if(button && nav){
 const close=()=>{nav.classList.remove('is-open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open navigation');};
 button.addEventListener('click',()=>{const opened=!nav.classList.contains('is-open');nav.classList.toggle('is-open',opened);button.setAttribute('aria-expanded',String(opened));button.setAttribute('aria-label',opened?'Close navigation':'Open navigation');});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
 document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!button.contains(e.target))close();});
}
const videos=[...document.querySelectorAll('video')];
videos.forEach(v=>v.addEventListener('play',()=>videos.forEach(other=>{if(other!==v && !other.paused)other.pause();})));
const y=document.querySelector('#copyright-year');if(y)y.textContent=new Date().getFullYear().toString();
