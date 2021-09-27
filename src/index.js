import './styles.css';
import menuItemsTpl from './templates/menu-items.hbs';
import menuItems from './menu.json';

const refs = {
 menuRef: document.querySelector('.js-menu'),
 checkBoxRef: document.querySelector('#theme-switch-toggle'),
};

const Theme = {
 LIGHT: 'light-theme',
 DARK: 'dark-theme',
};

const markup = menuItemsTpl(menuItems);
refs.menuRef.insertAdjacentHTML('beforeend', markup);
refs.checkBoxRef.addEventListener('change', onThemeSwitch);

function toggleClass(addClass, revomeClass) {
 document.body.classList.add(addClass);
 document.body.classList.remove(revomeClass);
}

function onThemeSwitch(e) {
 if (e.target.checked) {
  toggleClass(Theme.DARK, Theme.LIGHT);
  localStorage.setItem('Theme', Theme.DARK);
 } else if (!e.target.checked) {
  toggleClass(Theme.LIGHT, Theme.DARK);
  localStorage.setItem('Theme', Theme.LIGHT);
 }
}

function onPageReload() {
 const getTheme = localStorage.getItem('Theme');
 if (getTheme === Theme.DARK) {
  refs.checkBoxRef.checked = 'true';
  document.body.classList.add(Theme.DARK);
 }
}
onPageReload();
