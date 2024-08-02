const list = document.querySelector('.header__list');
const button = document.querySelector('.header__menu-button');


const closeNav = () => {
  if (!list) {
    return console.error('Такой элемент не найден на странице!')
  }

  list.classList.toggle('header__list--opened')
}

const onCloseNav = () => {
  if (!button) {
    return console.error('Такой элемент не найден на странице!')
  }

  button.addEventListener('click', closeNav)
}

export { onCloseNav };



