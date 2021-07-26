import menu from './menu.json';
import card from './templates/card.hbs';

import './styles.css';

// Разметка

const menuList = document.querySelector('.js-menu');
const menuCardsMarkup = createMenu(menu);

menuList.insertAdjacentHTML('beforeend', menuCardsMarkup);

function createMenu(menu) {
    return menu.map(card).join('');
}

// Переключатель темы

const checkbox = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body')



const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

themeCheck()

body.classList.add(Theme.LIGHT)

checkbox.addEventListener('click', e => {
    if (checkbox.checked){
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK)
    } else {
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT)
    }
});

function themeCheck() {
    const localValue = localStorage.getItem('theme');
    
    if(localValue === Theme.DARK) {
        checkbox.checked = true;
        body.classList.add(Theme.DARK);
    }
};


