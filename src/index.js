import './styles.css';
import menuItemsTpl from './templates/menu-items.hbs';
import menuItems from './menu.json';
const menuRef = document.querySelector('.js-menu');
const markup = menuItemsTpl(menuItems);
menuRef.insertAdjacentHTML('beforeend', markup);
