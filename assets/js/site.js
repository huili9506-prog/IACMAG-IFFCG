function setActive(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(a=>{
    if(a.getAttribute('href') === path) a.classList.add('active');
  });
}
function toggleMenu(){
  const links = document.querySelector('.navlinks');
  links.classList.toggle('open');
}
document.addEventListener('DOMContentLoaded', ()=>{
  setActive();
  const btn = document.querySelector('.menu-btn');
  if(btn) btn.addEventListener('click', toggleMenu);
});