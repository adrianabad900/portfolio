const btns=document.querySelectorAll('.filters button'),cards=document.querySelectorAll('#lista .card');
btns.forEach(b=>b.addEventListener('click',()=>{btns.forEach(x=>x.classList.remove('on'));b.classList.add('on');
cards.forEach(c=>{c.style.display=(b.dataset.f==='all'||c.dataset.c.split(' ').includes(b.dataset.f))?'':'none'})}));
document.getElementById('tema').addEventListener('click',()=>{
const r=document.documentElement,dark=getComputedStyle(r).colorScheme==='dark';
r.setAttribute('data-theme',dark?'light':'dark');
try{localStorage.setItem('tema',dark?'light':'dark')}catch(e){}});
try{const t=localStorage.getItem('tema');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}
