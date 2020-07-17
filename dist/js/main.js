const menuBtn = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.main-menu');

menuBtn.addEventListener('click', () => {
  if (mainMenu.classList.contains('show')) {
    mainMenu.classList.remove('show');
  } else {
    mainMenu.classList.add('show');
  }
});
