const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
const navlink = document.querySelectorAll('.nav-link')
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
    // navlink.classList.toggle('change');
});
