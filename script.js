const burger = document.querySelector('#burger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-links');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileNav.classList.toggle('active');
  body.classList.toggle('fixed');
});

mobileLinks.forEach((link) => link.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileNav.classList.toggle('active');
  body.classList.toggle('fixed');
}));
