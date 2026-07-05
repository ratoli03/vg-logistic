const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
if(menu && nav){
  menu.addEventListener('click',()=>{
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.position = 'absolute';
    nav.style.top = '76px';
    nav.style.left = '14px';
    nav.style.right = '14px';
    nav.style.padding = '18px';
    nav.style.flexDirection = 'column';
    nav.style.background = 'rgba(6,6,6,.96)';
    nav.style.border = '1px solid rgba(255,255,255,.12)';
    nav.style.borderRadius = '20px';
  });
}
