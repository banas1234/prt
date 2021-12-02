var menu = document.querySelector('.header__wrapper');
document.onscroll = function() {

  if (window.scrollY > 0 && !menu.classList.contains('fixed')) {
    menu.classList.add('fixed');
  }

  if (window.scrollY <= 0 && menu.classList.contains('fixed')) {
    menu.classList.remove('fixed');
  }
  
};