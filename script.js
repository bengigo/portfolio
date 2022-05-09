const burger = document.querySelector('#burger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-links');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileNav.classList.toggle('active');
});

mobileLinks.forEach((link) => link.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileNav.classList.toggle('active');
}));
