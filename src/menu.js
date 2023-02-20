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

// const contentDivContainer = document.getElementById('content');

function MenuItem(imgSrc, dishName, description, price) {
    return {
        imgSrc, dishName, description, price
    };
}

const menuItemsInfo = [
    MenuItem(Sukiyaki, 'Sukiyaki', 'Japanese style little hotpot with a mild taste of sweet and salty.', 9.99),
    MenuItem(Takoyaki, 'Takoyaki', 'The picture looks like it\'s a Takoyaki. I am not sure about the content but it must be delicious.', 9.99),
    MenuItem(SalmonSushi, 'Salmon Sushi', 'A must-try sushi that is so classic and tasty. What do you think?', 5.99),
    MenuItem(Omuraisu, 'Omuraisu', 'Jasmine rice rolled in eggs and mildly covered in ketchup.', 11.99),
    MenuItem(SunnySideUpEgg, 'Sunny-side-up Egg', 'Great for breakfast, or served as a snack.', 3.99),
    MenuItem(EggTart, 'Egg Tart', 'Delicately baked Cantonese dimsum style egg tart.', 2.99),
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
    MenuItem(Hotdog, 'Hotdog', 'This is an Asian restaurant but we served hotdog for unknown reasons.', 22.99),
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

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('dish-name');
    titleDiv.textContent = dishName;
    const descDiv = document.createElement('div');
    descDiv.classList.add('dish-description');
    descDiv.textContent = description;
    const priceDiv = document.createElement('div');
    priceDiv.classList.add('dish-price');
    priceDiv.textContent = `\$${price}`;

    const menuText = document.createElement('div');
    menuText.classList.add('menu-text');
    menuText.appendChild(titleDiv);
    menuText.appendChild(descDiv);
    menuText.appendChild(priceDiv);

    menuCard.appendChild(img);
    menuCard.appendChild(menuText);

    return menuCard;
}

export function generateMenuTab(contentDivContainer) {
    const menuCardsContainer = createMenuCardsContainer();

    menuItemsInfo.forEach(info => {
        const {imgSrc, dishName, price, description} = info;
        const card = createMenuCard(imgSrc, dishName, price, description);
        menuCardsContainer.appendChild(card);
    });

    contentDivContainer.appendChild(menuCardsContainer);

    generateImageCredits();
}