let menu = document.querySelector('.header__menu');
let menuBurger = document.querySelector('.header__menu_burger');
let body = document.querySelector('.touch');

menuBurger.addEventListener("click",function(){
      menu.classList.toggle('active');
      menuBurger.classList.toggle('active');
      body.classList.toggle('lock');
});