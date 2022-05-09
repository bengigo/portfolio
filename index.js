const mobileLinks = document.querySelectorAll('.mobile-links');

mobileLinks.forEach((link) =>
    link.addEventListener('click', () => {
        alert('hello');
    })
);