const list = document.querySelector('.header__list');
const button = document.querySelector('.header__menu-button');


button.addEventListener('click', () => {
  if (list.classList.contains('header__list--closed')) {
    list.classList.remove('header__list--closed')
    list.classList.add('header__list--opened')
  }
  else {
    list.classList.remove('header__list--opened')
    list.classList.add('header__list--closed')
  }
})
