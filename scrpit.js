// Working on the Popup
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.display');
const mennuIcon = document.querySelector('.icon');
const list = document.querySelector('.display > li');

list.forEach((item) => {
  item.addEventListener('click', () => {
    navbar.classList.remove('active');
    menu.classList.remove('active');
  });
});

mennuIcon.addEventListener('click', () => { 