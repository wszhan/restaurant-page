import ImageChef from './assets/chef.jpeg';
import { generateImageElement } from './utils';

const contentDivContainer = document.getElementById('content');

export function generateHomeTab() {
    contentDivContainer.appendChild(
        generateImageElement(
            ImageChef, {
                'id': 'home-image-chef',
            }
        )
    );
}