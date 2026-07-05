const menuBtn=document.querySelector('.menuBtn');const nav=document.querySelector('.nav');if(menuBtn){menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');const n=e.target.querySelector('[data-count]');if(n&&!n.dataset.done){n.dataset.done=1;const end=parseInt(n.dataset.count,10);let cur=0;const step=Math.max(1,Math.ceil(end/70));const t=setInterval(()=>{cur+=step;if(cur>=end){cur=end;clearInterval(t)}n.textContent=cur.toLocaleString('pl-PL')},18)}}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
