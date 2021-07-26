import menu from '../menu.json';
import card from '../templates/card.hbs';

const menuList = document.querySelector('.js-menu');

menuList.insertAdjacentHTML('beforeend', createMenu);

function createMenu(menu) {
    return menu.map(card).join('');
}
console.log(menu)