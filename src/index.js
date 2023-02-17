import './style.css';
import { generateHomeTab } from './home';

const body = document.body;
const contentDivContainer = document.getElementById('content');
const initialTabContents = [
    'HOME', 'MENU', 'ABOUT', 'CONTACT'
];

function generateTab(tabName, header) {
    if (!tabName) {
        throw new Error('tabName must not be null');
    }
    if (!header) {
        throw new Error('header must not be null');
    }

    const tab = document.createElement('div');
    tab.setAttribute('id', `${tabName.toLowerCase()}-tab`);
    tab.classList.add('nav-tab');
    const spanElement = document.createElement('span');
    spanElement.innerText = tabName;
    tab.appendChild(spanElement);
    header.appendChild(tab);
}

function addTabEventListeners() {
    const homeTab = document.querySelector('#home-tab');
    homeTab.addEventListener('click', () => {
        generateHomeTab();
    })
}

(function init() {
    (function generateNavBar() {
        const header = document.createElement('header');
        initialTabContents.forEach((tabName) => {
            generateTab(tabName, header);
        });
        body.insertBefore(header, contentDivContainer);
    })();

    addTabEventListeners();

    (function generateFooter() {
        const footer = document.createElement('footer');
        footer.innerText = 'Copyright ©️ 2023 OO Studio';
        body.appendChild(footer);
    })();
})();