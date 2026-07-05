const menu=document.getElementById('menu'),nav=document.getElementById('nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const counters=document.querySelectorAll('[data-count]');
const countIO=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target;const target=+el.dataset.count;let n=0;const step=Math.max(1,Math.ceil(target/60));const timer=setInterval(()=>{n+=step;if(n>=target){n=target;clearInterval(timer)}el.textContent=target>=1000?`${n}+`:n},18);countIO.unobserve(el)})},{threshold:.6});
counters.forEach(c=>countIO.observe(c));
