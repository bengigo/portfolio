const burger = document.querySelector('#burger');
const menuContainer = document.querySelector('nav');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menuContainer.classList.toggle('active');
  menu.classList.toggle('active');
})