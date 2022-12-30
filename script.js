const burger = document.querySelector('#burger');
const menuContainer = document.querySelector('nav');
const menu = document.querySelector('#menu');
const navLinks = document.querySelectorAll('.nav-link');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menuContainer.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('fixed');
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  burger.classList.remove('active');
  menuContainer.classList.remove('active');
  menu.classList.toggle('active');
  body.classList.toggle('fixed');
}));