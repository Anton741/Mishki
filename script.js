var burger = document.querySelector(".header__burger")
var nav__mobile = document.querySelector(".header__nav")
var body = document.querySelector(".page__body")
console.log('sdfdfsd');

burger.addEventListener("click", ()=>{
  console.log('wewer');
  nav__mobile.classList.toggle('header__nav--active');
  body.classList.toggle('lock');
})