// Working on the Popup
const menuPop = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar-m');

menuPop.addEventListener('click', () => {
  menuPop.classList.toggle('active');
  navbar.classList.toggle('active');
});

// Menu Items