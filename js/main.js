const ham=document.querySelector('.ham');
const menu=document.querySelector('.mobile-menu');

ham.addEventListener('click',()=>{
  menu.classList.toggle('menu-open')
  ham.classList.toggle('menu-open')
});

const title=document.querySelector('.about__title');
const img=document.querySelectorAll('.product__img');
const view=document.querySelector('.view__title');

const cb=entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }else{
      entry.target.observe;
    }
  })
}

const io=new IntersectionObserver(cb);

io.observe(title);
io.observe(view);

img.forEach(el=>{
  io.observe(el)
});




