import ImageChef from './assets/chef.jpeg';
import { generateImageCredits, generateImageElement } from './utils';

const contentDivContainer = document.getElementById('content');

function generateHomeTabImage() {
    return generateImageElement(
        ImageChef, {
            'id': 'home-image-chef',
        }
    );
}

export function generateHomeTab() {
    const div = document.createElement('div');
    div.setAttribute('id', 'home-tab-content');
    div.appendChild(generateHomeTabImage());

    contentDivContainer.appendChild(div);

    generateImageCredits();
}