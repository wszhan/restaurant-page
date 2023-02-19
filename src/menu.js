import { generateImageCredits, generateImageElement } from "./utils";
import ChickDrumStick from './assets/chicken-drumstick-with-rice.jpeg';
import Tempura from './assets/tempura.jpeg';
import Hotdog from './assets/hotdog.jpeg';
import Chips from './assets/chips.jpeg';
import Chocolate from './assets/chocolate.jpeg';
import Donuts from './assets/donuts.jpeg';
import EggTart from './assets/egg-tart.jpeg';
import EnokiMushroomBeefRoll from './assets/enoki-mushroom-beef-rolls.jpeg';
import Gelato from './assets/gelato.jpeg';
import Omuraisu from './assets/omuraisu.jpeg';
import Oreo from './assets/oreo.jpeg';
import RamenWithSoftBoiledEgg from './assets/ramen-with-soft-boiled-egg.jpeg';
import SalmonSushi from './assets/salmon-sushi.jpeg';
import Sukiyaki from './assets/sukiyaki.jpeg';
import SunnySideUpEgg from './assets/sunny-side-up.jpeg';
import Takoyaki from './assets/takoyaki.jpeg';

const contentDivContainer = document.getElementById('content');

function MenuItem(imgSrc, dishName, description, price) {
    return {
        imgSrc, dishName, description, price
    };
}



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
    }, 
    MenuItem(
        EnokiMushroomBeefRoll, 'Enoki Mushroom Beef Roll', 
        'Fresh enoki mushroom rolled in beef',
        19.99
    ),
    MenuItem(
        RamenWithSoftBoiledEgg, 'Ramen', 
        'Authentic Japanese style ramen served with Softboiled Egg and Baby Carrots',
        22.99
    ),
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