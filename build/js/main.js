/* eslint-env es6 */
'use strict';
//  ////////////// меню бургер
const headerMenu = document.querySelector('.header-menu');
const menuButton = document.querySelector('.menu-button');


const showMenu = () => {
  menuButton.setAttribute('aria-expanded', 'true');
  menuButton.setAttribute('aria-label', 'close menu');
  headerMenu.classList.remove('header-menu--closed');
  headerMenu.classList.add('header-menu--opened');
};

const closeMenu = () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'open menu');
  headerMenu.classList.add('header-menu--closed');
  headerMenu.classList.remove('header-menu--opened');
};

// //////////////// КОНЕЦ меню бургер

document.addEventListener('DOMContentLoaded', () => {

  headerMenu.classList.remove('header-menu--no-js');
  headerMenu.classList.add('header-menu--closed');

  menuButton.addEventListener('click', () => {
    if (headerMenu.classList.contains('header-menu--closed')) {
      showMenu();
    } else {
      closeMenu();
    }
  });
});
