import Farmer from './assets/farmer.jpeg';
import ImageChef from './assets/chef.jpeg';

import { generateImageCredits, generateImageElement } from './utils';

// const contentDivContainer = document.getElementById('content');

function generateProfilePictures() {
    const div = document.createElement('div');
    div.setAttribute('id', 'about-profile-pictures');

    div.appendChild(generateImageElement(
        Farmer, {
            alt: 'Bu-Bu as a farmer.',
            id: 'farmer'
        }
    ));
    div.appendChild(generateImageElement(
        ImageChef, {
            alt: 'Bu-Bu as a chef.',
            id: 'chef'
        }
    ));

    return div;
}
function generateIntroduction() {
    const div = document.createElement('div');
    div.setAttribute('id', 'about-introduction-text');

    div.innerText = 'Chef Bu-Bu is a master panda chef in growing food and catering fine cuisine. Although he himself eats mostly bamboo, he cooks all kinds of delicious food that brings joy and happiness to his customers. He only cooks his own growing vegetables, and buys meats from trusted local vendors whom he has known for decades (although Chef Bu-Bu himself is only a few years old).';

    return div;
}

export function generateAboutTab(contentDivContainer) {
    const div = document.createElement('div');
    div.setAttribute('id', 'about-page');

    div.appendChild(generateProfilePictures());
    div.appendChild(generateIntroduction());

    contentDivContainer.appendChild(div);

    generateImageCredits();
}