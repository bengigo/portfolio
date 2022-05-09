const burger = document.querySelector('#burger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-links');

burger.addEventListener('click', () => {
    //toggle class active
    burger.classList.toggle('active');
    mobileNav.classList.toggle('active');
})


// const mobileLinks = document.querySelectorAll('.mobile-links');

// mobileLinks.forEach((link) =>
//     link.addEventListener('click', () => {
//         alert('hello');
//     })
// );

console.log('end');