import { generateImageCredits, generateImageElement } from "./utils";
import ChickDrumStick from './assets/chicken-drumstick-with-rice.jpeg';
import Tempura from './assets/tempura.jpeg';

const contentDivContainer = document.getElementById('content');

const menuItemsInfo = [
    {
        imgSrc: ChickDrumStick,
        dishName: 'Chicken Drumstick',
        description: 'Delicious chicken drumstick served with sunny-side-up egg, freshly cooked vegetables, and jasmine rice',
        price: 13.99,
    }, {
        imgSrc: Tempura,
        dishName: 'Shrimp Tempura',
        description: 'Delicately made Japanese style tempura served with nothing else.',
        price: 5.99,
    }
];

function createMenuCardsContainer() {
    const menuCardsContainerDiv = document.createElement('div');
    menuCardsContainerDiv.classList.add('menu-cards');
    return menuCardsContainerDiv;
}

function createMenuCard(imageSrc, dishName, price, description) {
    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');

    const img = generateImageElement(imageSrc, {
        'id': `${dishName}`,
        'alt': `An image of ${dishName}`,
    });

    menuCard.appendChild(img);
    return menuCard;
}

export function generateMenuTab() {
    const menuCardsContainer = createMenuCardsContainer();

    menuItemsInfo.forEach(info => {
        const {imgSrc, dishName, price, description} = info;
        const card = createMenuCard(imgSrc, dishName, price, description);
        menuCardsContainer.appendChild(card);
    });

    // return menuCardsContainer;
    contentDivContainer.appendChild(menuCardsContainer);

    generateImageCredits();
}