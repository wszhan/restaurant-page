import './style.css';
import { generateHomeTab } from './home';
import { generateMenuTab } from './menu';
import { generateAboutTab } from './about';
import { removeImageCredits } from './utils';
import { generateContactTab } from './contact';

const initialTabContents = [
    'HOME', 'MENU', 'ABOUT', 'CONTACT'
];
const body = document.body;

const contentDivContainer = document.createElement('div');
contentDivContainer.setAttribute('id', 'content');

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

function clearContentContainer() {
    contentDivContainer.innerHTML = '';
}

function addTabEventListeners() {
    const homeTab = document.querySelector('#home-tab');
    homeTab.addEventListener('click', () => {
        clearContentContainer();
        removeImageCredits();
        generateHomeTab(contentDivContainer);
    })

    const menuTab = document.querySelector('#menu-tab');
    menuTab.addEventListener('click', () => {
        clearContentContainer();
        removeImageCredits();
        generateMenuTab(contentDivContainer);
    })

    const aboutTab = document.querySelector('#about-tab');
    aboutTab.addEventListener('click', () => {
        clearContentContainer();
        removeImageCredits();
        generateAboutTab(contentDivContainer);
    })

    const contactTab = document.querySelector('#contact-tab');
    contactTab.addEventListener('click', () => {
        clearContentContainer();
        removeImageCredits();
        generateContactTab(contentDivContainer);
    })
}

(function init() {

    body.appendChild(contentDivContainer);

    const header = document.createElement('header');

    (function generateNavBar() {
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

    generateHomeTab(contentDivContainer);
})();