/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateAboutTab": () => (/* binding */ generateAboutTab)
/* harmony export */ });
/* harmony import */ var _assets_farmer_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/farmer.jpeg */ "./src/assets/farmer.jpeg");
/* harmony import */ var _assets_chef_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/chef.jpeg */ "./src/assets/chef.jpeg");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");





// const contentDivContainer = document.getElementById('content');

function generateProfilePictures() {
    const div = document.createElement('div');
    div.setAttribute('id', 'about-profile-pictures');

    div.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_2__.generateImageElement)(
        _assets_farmer_jpeg__WEBPACK_IMPORTED_MODULE_0__, {
            alt: 'Bu-Bu as a farmer.',
            id: 'farmer'
        }
    ));
    div.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_2__.generateImageElement)(
        _assets_chef_jpeg__WEBPACK_IMPORTED_MODULE_1__, {
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

function generateAboutTab(contentDivContainer) {
    const div = document.createElement('div');
    div.setAttribute('id', 'about-page');

    div.appendChild(generateProfilePictures());
    div.appendChild(generateIntroduction());

    contentDivContainer.appendChild(div);

    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.generateImageCredits)();
}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateContactTab": () => (/* binding */ generateContactTab)
/* harmony export */ });

function createInputWithLabel(inputName, inputPrompt, inputType, inputLabelClassList, inputAreaClassList, required, parentNode) {
    const label = document.createElement('label');
    inputLabelClassList.forEach(c => label.classList.add(c));
    label.setAttribute('for', inputName);
    label.innerText = inputPrompt;

    const input = document.createElement('input');
    inputAreaClassList.forEach(c => input.classList.add(c));
    input.setAttribute('id', inputName);
    input.setAttribute('name', inputName);
    input.setAttribute('type', inputType);

    if (required) {
        input.required = true;
    }

    parentNode.appendChild(label);
    parentNode.appendChild(input);
}


function createForm() {
    const form = document.createElement('form');
    form.setAttribute('id', 'contact-form');

    const formTitle = document.createElement('div');
    formTitle.setAttribute('id', 'form-title');
    formTitle.innerText = 'Contact Form';
    form.appendChild(formTitle);

    createInputWithLabel(
        'name', 'How should we address you?', 'text',
        ['form-label'], ['form-text-input'], true, form
    )
    createInputWithLabel(
        'email', 'What is your Email address?', 'email',
        ['form-label'], ['form-text-input'], false, form
    )

    createDropdown(
        'user-type', 'Please choose one that best describes you.',
        ['form-label'], [], false, [
            {
                optionGroupLabel: 'Please choose one from the dropdown list',
                options: {
                    customer: 'Restaurant Customer',
                    fan: 'Just a fan of Chef Bu-Bu or the cuisine',
                },
            }
        ], form
    );

    createTextarea(
        'comments', 'Any comments you would like to share with us?',
        ['form-label'], ['form-text'], false, form
    );

    createButton(form);

    return form;
}

function createButton(parentNode) {
    const button = document.createElement('button');
    button.setAttribute('id', 'submit-button');
    button.innerText = 'Send';
    parentNode.appendChild(button);
}

function createTextarea(inputName, inputPrompt, 
    inputLabelClassList, inputAreaClassList, 
    required, parentNode) {
    const label = document.createElement('label');
    inputLabelClassList.forEach(c => label.classList.add(c));
    label.setAttribute('for', inputName);
    label.innerText = inputPrompt;

    const input = document.createElement('textarea');
    inputAreaClassList.forEach(c => input.classList.add(c));
    input.setAttribute('id', inputName);
    input.setAttribute('name', inputName);
    input.setAttribute('cols', 30);
    input.setAttribute('rows', 10);

    if (required) {
        input.required = true;
    }

    parentNode.appendChild(label);
    parentNode.appendChild(input);
}

function createDropdown(inputName, inputPrompt, 
    inputLabelClassList, inputAreaClassList, 
    required, optionList, parentNode) {
    const label = document.createElement('label');
    inputLabelClassList.forEach(c => label.classList.add(c));
    label.setAttribute('for', inputName);
    label.innerText = inputPrompt;

    const input = document.createElement('select');
    inputAreaClassList.forEach(c => input.classList.add(c));
    input.setAttribute('id', inputName);
    input.setAttribute('name', inputName);

    optionList.forEach(optionObj => {
        const optGroup = optionObj.optionGroupLabel ? 
            (function() {
                const optgroupElement = document.createElement('optgroup');
                optgroupElement.setAttribute('label', optionObj.optionGroupLabel);
                return optgroupElement;
            })() : input;
        
        for (let k in optionObj.options) {
            const option = document.createElement('option');
            option.setAttribute('value', k);
            option.innerText = optionObj.options[k];
            optGroup.appendChild(option);
        }

        if (optGroup !== input) {
            input.appendChild(optGroup);
        }
    });

    if (required) {
        input.required = true;
    }

    parentNode.appendChild(label);
    parentNode.appendChild(input);
}


function generateContactTab(contentContainer) {
    const formContainer = document.createElement('div');
    formContainer.setAttribute('id', 'contact-form-container');

    formContainer.appendChild(createForm());

    contentContainer.appendChild(formContainer);
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateHomeTab": () => (/* binding */ generateHomeTab)
/* harmony export */ });
/* harmony import */ var _assets_chef_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/chef.jpeg */ "./src/assets/chef.jpeg");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



// const contentDivContainer = document.getElementById('content');

function generateHomeTabImage() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.generateImageElement)(
        _assets_chef_jpeg__WEBPACK_IMPORTED_MODULE_0__, {
            'id': 'home-image-chef',
            'alt': 'The picture of Chef Bu-Bu making sushi.',
        }
    );
}

function generateHomeTab(contentDivContainer) {
    const div = document.createElement('div');
    div.setAttribute('id', 'home-tab-content');
    div.appendChild(generateHomeTabImage());

    contentDivContainer.appendChild(div);

    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.generateImageCredits)();
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateMenuTab": () => (/* binding */ generateMenuTab)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _assets_chicken_drumstick_with_rice_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/chicken-drumstick-with-rice.jpeg */ "./src/assets/chicken-drumstick-with-rice.jpeg");
/* harmony import */ var _assets_tempura_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/tempura.jpeg */ "./src/assets/tempura.jpeg");
/* harmony import */ var _assets_hotdog_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/hotdog.jpeg */ "./src/assets/hotdog.jpeg");
/* harmony import */ var _assets_chips_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/chips.jpeg */ "./src/assets/chips.jpeg");
/* harmony import */ var _assets_chocolate_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/chocolate.jpeg */ "./src/assets/chocolate.jpeg");
/* harmony import */ var _assets_donuts_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/donuts.jpeg */ "./src/assets/donuts.jpeg");
/* harmony import */ var _assets_egg_tart_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/egg-tart.jpeg */ "./src/assets/egg-tart.jpeg");
/* harmony import */ var _assets_enoki_mushroom_beef_rolls_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/enoki-mushroom-beef-rolls.jpeg */ "./src/assets/enoki-mushroom-beef-rolls.jpeg");
/* harmony import */ var _assets_gelato_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/gelato.jpeg */ "./src/assets/gelato.jpeg");
/* harmony import */ var _assets_omuraisu_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/omuraisu.jpeg */ "./src/assets/omuraisu.jpeg");
/* harmony import */ var _assets_oreo_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/oreo.jpeg */ "./src/assets/oreo.jpeg");
/* harmony import */ var _assets_ramen_with_soft_boiled_egg_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/ramen-with-soft-boiled-egg.jpeg */ "./src/assets/ramen-with-soft-boiled-egg.jpeg");
/* harmony import */ var _assets_salmon_sushi_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/salmon-sushi.jpeg */ "./src/assets/salmon-sushi.jpeg");
/* harmony import */ var _assets_sukiyaki_jpeg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/sukiyaki.jpeg */ "./src/assets/sukiyaki.jpeg");
/* harmony import */ var _assets_sunny_side_up_jpeg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/sunny-side-up.jpeg */ "./src/assets/sunny-side-up.jpeg");
/* harmony import */ var _assets_takoyaki_jpeg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/takoyaki.jpeg */ "./src/assets/takoyaki.jpeg");


















// const contentDivContainer = document.getElementById('content');

function MenuItem(imgSrc, dishName, description, price) {
    return {
        imgSrc, dishName, description, price
    };
}

const menuItemsInfo = [
    MenuItem(_assets_sukiyaki_jpeg__WEBPACK_IMPORTED_MODULE_14__, 'Sukiyaki', 'Japanese style little hotpot with a mild taste of sweet and salty.', 9.99),
    MenuItem(_assets_takoyaki_jpeg__WEBPACK_IMPORTED_MODULE_16__, 'Takoyaki', 'The picture looks like it\'s a Takoyaki. I am not sure about the content but it must be delicious.', 9.99),
    MenuItem(_assets_salmon_sushi_jpeg__WEBPACK_IMPORTED_MODULE_13__, 'Salmon Sushi', 'A must-try sushi that is so classic and tasty. What do you think?', 5.99),
    MenuItem(_assets_omuraisu_jpeg__WEBPACK_IMPORTED_MODULE_10__, 'Omuraisu', 'Jasmine rice rolled in eggs and mildly covered in ketchup.', 11.99),
    MenuItem(_assets_sunny_side_up_jpeg__WEBPACK_IMPORTED_MODULE_15__, 'Sunny-side-up Egg', 'Great for breakfast, or served as a snack.', 3.99),
    MenuItem(_assets_egg_tart_jpeg__WEBPACK_IMPORTED_MODULE_7__, 'Egg Tart', 'Delicately baked Cantonese dimsum style egg tart.', 2.99),
    {
        imgSrc: _assets_chicken_drumstick_with_rice_jpeg__WEBPACK_IMPORTED_MODULE_1__,
        dishName: 'Chicken Drumstick',
        description: 'Delicious chicken drumstick served with sunny-side-up egg, freshly cooked vegetables, and jasmine rice',
        price: 13.99,
    }, {
        imgSrc: _assets_tempura_jpeg__WEBPACK_IMPORTED_MODULE_2__,
        dishName: 'Shrimp Tempura',
        description: 'Delicately made Japanese style tempura served with nothing else.',
        price: 5.99,
    }, 
    MenuItem(
        _assets_enoki_mushroom_beef_rolls_jpeg__WEBPACK_IMPORTED_MODULE_8__, 'Enoki Mushroom Beef Roll', 
        'Fresh enoki mushroom rolled in beef',
        19.99
    ),
    MenuItem(
        _assets_ramen_with_soft_boiled_egg_jpeg__WEBPACK_IMPORTED_MODULE_12__, 'Ramen', 
        'Authentic Japanese style ramen served with Softboiled Egg and Baby Carrots',
        22.99
    ),
    MenuItem(_assets_hotdog_jpeg__WEBPACK_IMPORTED_MODULE_3__, 'Hotdog', 'This is an Asian restaurant but we served hotdog for unknown reasons.', 22.99),
];

function createMenuCardsContainer() {
    const menuCardsContainerDiv = document.createElement('div');
    menuCardsContainerDiv.classList.add('menu-cards');
    return menuCardsContainerDiv;
}

function createMenuCard(imageSrc, dishName, price, description) {
    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');

    const img = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateImageElement)(imageSrc, {
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

function generateMenuTab(contentDivContainer) {
    const menuCardsContainer = createMenuCardsContainer();

    menuItemsInfo.forEach(info => {
        const {imgSrc, dishName, price, description} = info;
        const card = createMenuCard(imgSrc, dishName, price, description);
        menuCardsContainer.appendChild(card);
    });

    contentDivContainer.appendChild(menuCardsContainer);

    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateImageCredits)();
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateImageCredits": () => (/* binding */ generateImageCredits),
/* harmony export */   "generateImageElement": () => (/* binding */ generateImageElement),
/* harmony export */   "removeImageCredits": () => (/* binding */ removeImageCredits)
/* harmony export */ });
function generateImageElement(imageSource, imageAttributes) {
    const image = new Image();
    image.src = imageSource;
    imageAttributes

    for (let k in imageAttributes) {
        image.setAttribute(k, imageAttributes[k]);
    }

    return image;
}

function removeImageCredits() { // if any
    const credits = document.getElementById('credits');
    if (credits) {
        credits.remove();
    }
}

function generateImageCredits() {
    const anchor = document.createElement('a');
    anchor.href = 'https://weibo.com/u/2623471650';
    anchor.textContent = '黄小B';

    const div = document.createElement('div');
    div.setAttribute('id', 'credits');
    div.textContent = 'Image Credits to ';
    div.appendChild(anchor);

    document.body.appendChild(div);
}

/***/ }),

/***/ "./src/assets/chef.jpeg":
/*!******************************!*\
  !*** ./src/assets/chef.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0d10cce63a2e3689e5c1.jpeg";

/***/ }),

/***/ "./src/assets/chicken-drumstick-with-rice.jpeg":
/*!*****************************************************!*\
  !*** ./src/assets/chicken-drumstick-with-rice.jpeg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b06585ce3678825c3781.jpeg";

/***/ }),

/***/ "./src/assets/chips.jpeg":
/*!*******************************!*\
  !*** ./src/assets/chips.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43085b7f2b391e5f7a48.jpeg";

/***/ }),

/***/ "./src/assets/chocolate.jpeg":
/*!***********************************!*\
  !*** ./src/assets/chocolate.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "716a67ce1ce42f46b7f4.jpeg";

/***/ }),

/***/ "./src/assets/donuts.jpeg":
/*!********************************!*\
  !*** ./src/assets/donuts.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee70a8027438f1a6a8e1.jpeg";

/***/ }),

/***/ "./src/assets/egg-tart.jpeg":
/*!**********************************!*\
  !*** ./src/assets/egg-tart.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f3ab24768fae4ec8329.jpeg";

/***/ }),

/***/ "./src/assets/enoki-mushroom-beef-rolls.jpeg":
/*!***************************************************!*\
  !*** ./src/assets/enoki-mushroom-beef-rolls.jpeg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f16c48b4b2138ac76cf.jpeg";

/***/ }),

/***/ "./src/assets/farmer.jpeg":
/*!********************************!*\
  !*** ./src/assets/farmer.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0c231d33007dbc6fe1a.jpeg";

/***/ }),

/***/ "./src/assets/gelato.jpeg":
/*!********************************!*\
  !*** ./src/assets/gelato.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7e8016354b306603531.jpeg";

/***/ }),

/***/ "./src/assets/hotdog.jpeg":
/*!********************************!*\
  !*** ./src/assets/hotdog.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ddb6169467f40f8c691.jpeg";

/***/ }),

/***/ "./src/assets/omuraisu.jpeg":
/*!**********************************!*\
  !*** ./src/assets/omuraisu.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d98348adbb45f5290601.jpeg";

/***/ }),

/***/ "./src/assets/oreo.jpeg":
/*!******************************!*\
  !*** ./src/assets/oreo.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d76f476e81aae66e5aa8.jpeg";

/***/ }),

/***/ "./src/assets/ramen-with-soft-boiled-egg.jpeg":
/*!****************************************************!*\
  !*** ./src/assets/ramen-with-soft-boiled-egg.jpeg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64288cc78b69776b69e9.jpeg";

/***/ }),

/***/ "./src/assets/salmon-sushi.jpeg":
/*!**************************************!*\
  !*** ./src/assets/salmon-sushi.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75e96884f6fed0fc7081.jpeg";

/***/ }),

/***/ "./src/assets/sukiyaki.jpeg":
/*!**********************************!*\
  !*** ./src/assets/sukiyaki.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4df5c9ce1100fea786ab.jpeg";

/***/ }),

/***/ "./src/assets/sunny-side-up.jpeg":
/*!***************************************!*\
  !*** ./src/assets/sunny-side-up.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5f1bbe1c86a33d003b1.jpeg";

/***/ }),

/***/ "./src/assets/takoyaki.jpeg":
/*!**********************************!*\
  !*** ./src/assets/takoyaki.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "076b8023c6b4461f73f5.jpeg";

/***/ }),

/***/ "./src/assets/tempura.jpeg":
/*!*********************************!*\
  !*** ./src/assets/tempura.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20dc3b2fce6901bbcc6e.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ "./src/contact.js");







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
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.removeImageCredits)();
        (0,_home__WEBPACK_IMPORTED_MODULE_1__.generateHomeTab)(contentDivContainer);
    })

    const menuTab = document.querySelector('#menu-tab');
    menuTab.addEventListener('click', () => {
        clearContentContainer();
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.removeImageCredits)();
        (0,_menu__WEBPACK_IMPORTED_MODULE_2__.generateMenuTab)(contentDivContainer);
    })

    const aboutTab = document.querySelector('#about-tab');
    aboutTab.addEventListener('click', () => {
        clearContentContainer();
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.removeImageCredits)();
        (0,_about__WEBPACK_IMPORTED_MODULE_3__.generateAboutTab)(contentDivContainer);
    })

    const contactTab = document.querySelector('#contact-tab');
    contactTab.addEventListener('click', () => {
        clearContentContainer();
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.removeImageCredits)();
        (0,_contact__WEBPACK_IMPORTED_MODULE_5__.generateContactTab)(contentDivContainer);
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

    (0,_home__WEBPACK_IMPORTED_MODULE_1__.generateHomeTab)(contentDivContainer);
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLHNCQUFzQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBa0I7QUFDMUIsUUFBUSxzREFBZTtBQUN2QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQWtCO0FBQzFCLFFBQVEsc0RBQWU7QUFDdkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBEQUFrQjtBQUMxQixRQUFRLHdEQUFnQjtBQUN4QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQWtCO0FBQzFCLFFBQVEsNERBQWtCO0FBQzFCLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLHNEQUFlO0FBQ25CLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IEZhcm1lciBmcm9tICcuL2Fzc2V0cy9mYXJtZXIuanBlZyc7XG5pbXBvcnQgSW1hZ2VDaGVmIGZyb20gJy4vYXNzZXRzL2NoZWYuanBlZyc7XG5cbmltcG9ydCB7IGdlbmVyYXRlSW1hZ2VDcmVkaXRzLCBnZW5lcmF0ZUltYWdlRWxlbWVudCB9IGZyb20gJy4vdXRpbHMnO1xuXG4vLyBjb25zdCBjb250ZW50RGl2Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9maWxlUGljdHVyZXMoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQtcHJvZmlsZS1waWN0dXJlcycpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGdlbmVyYXRlSW1hZ2VFbGVtZW50KFxuICAgICAgICBGYXJtZXIsIHtcbiAgICAgICAgICAgIGFsdDogJ0J1LUJ1IGFzIGEgZmFybWVyLicsXG4gICAgICAgICAgICBpZDogJ2Zhcm1lcidcbiAgICAgICAgfVxuICAgICkpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZUltYWdlRWxlbWVudChcbiAgICAgICAgSW1hZ2VDaGVmLCB7XG4gICAgICAgICAgICBhbHQ6ICdCdS1CdSBhcyBhIGNoZWYuJyxcbiAgICAgICAgICAgIGlkOiAnY2hlZidcbiAgICAgICAgfVxuICAgICkpO1xuXG4gICAgcmV0dXJuIGRpdjtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSW50cm9kdWN0aW9uKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LWludHJvZHVjdGlvbi10ZXh0Jyk7XG5cbiAgICBkaXYuaW5uZXJUZXh0ID0gJ0NoZWYgQnUtQnUgaXMgYSBtYXN0ZXIgcGFuZGEgY2hlZiBpbiBncm93aW5nIGZvb2QgYW5kIGNhdGVyaW5nIGZpbmUgY3Vpc2luZS4gQWx0aG91Z2ggaGUgaGltc2VsZiBlYXRzIG1vc3RseSBiYW1ib28sIGhlIGNvb2tzIGFsbCBraW5kcyBvZiBkZWxpY2lvdXMgZm9vZCB0aGF0IGJyaW5ncyBqb3kgYW5kIGhhcHBpbmVzcyB0byBoaXMgY3VzdG9tZXJzLiBIZSBvbmx5IGNvb2tzIGhpcyBvd24gZ3Jvd2luZyB2ZWdldGFibGVzLCBhbmQgYnV5cyBtZWF0cyBmcm9tIHRydXN0ZWQgbG9jYWwgdmVuZG9ycyB3aG9tIGhlIGhhcyBrbm93biBmb3IgZGVjYWRlcyAoYWx0aG91Z2ggQ2hlZiBCdS1CdSBoaW1zZWxmIGlzIG9ubHkgYSBmZXcgeWVhcnMgb2xkKS4nO1xuXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQWJvdXRUYWIoY29udGVudERpdkNvbnRhaW5lcikge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LXBhZ2UnKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2ZpbGVQaWN0dXJlcygpKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVJbnRyb2R1Y3Rpb24oKSk7XG5cbiAgICBjb250ZW50RGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICBnZW5lcmF0ZUltYWdlQ3JlZGl0cygpO1xufSIsIlxuZnVuY3Rpb24gY3JlYXRlSW5wdXRXaXRoTGFiZWwoaW5wdXROYW1lLCBpbnB1dFByb21wdCwgaW5wdXRUeXBlLCBpbnB1dExhYmVsQ2xhc3NMaXN0LCBpbnB1dEFyZWFDbGFzc0xpc3QsIHJlcXVpcmVkLCBwYXJlbnROb2RlKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGlucHV0TGFiZWxDbGFzc0xpc3QuZm9yRWFjaChjID0+IGxhYmVsLmNsYXNzTGlzdC5hZGQoYykpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXROYW1lKTtcbiAgICBsYWJlbC5pbm5lclRleHQgPSBpbnB1dFByb21wdDtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dEFyZWFDbGFzc0xpc3QuZm9yRWFjaChjID0+IGlucHV0LmNsYXNzTGlzdC5hZGQoYykpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpbnB1dE5hbWUpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGlucHV0TmFtZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRUeXBlKTtcblxuICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChpbnB1dCk7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlRm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWZvcm0nKTtcblxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm0tdGl0bGUnKTtcbiAgICBmb3JtVGl0bGUuaW5uZXJUZXh0ID0gJ0NvbnRhY3QgRm9ybSc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuXG4gICAgY3JlYXRlSW5wdXRXaXRoTGFiZWwoXG4gICAgICAgICduYW1lJywgJ0hvdyBzaG91bGQgd2UgYWRkcmVzcyB5b3U/JywgJ3RleHQnLFxuICAgICAgICBbJ2Zvcm0tbGFiZWwnXSwgWydmb3JtLXRleHQtaW5wdXQnXSwgdHJ1ZSwgZm9ybVxuICAgIClcbiAgICBjcmVhdGVJbnB1dFdpdGhMYWJlbChcbiAgICAgICAgJ2VtYWlsJywgJ1doYXQgaXMgeW91ciBFbWFpbCBhZGRyZXNzPycsICdlbWFpbCcsXG4gICAgICAgIFsnZm9ybS1sYWJlbCddLCBbJ2Zvcm0tdGV4dC1pbnB1dCddLCBmYWxzZSwgZm9ybVxuICAgIClcblxuICAgIGNyZWF0ZURyb3Bkb3duKFxuICAgICAgICAndXNlci10eXBlJywgJ1BsZWFzZSBjaG9vc2Ugb25lIHRoYXQgYmVzdCBkZXNjcmliZXMgeW91LicsXG4gICAgICAgIFsnZm9ybS1sYWJlbCddLCBbXSwgZmFsc2UsIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcHRpb25Hcm91cExhYmVsOiAnUGxlYXNlIGNob29zZSBvbmUgZnJvbSB0aGUgZHJvcGRvd24gbGlzdCcsXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogJ1Jlc3RhdXJhbnQgQ3VzdG9tZXInLFxuICAgICAgICAgICAgICAgICAgICBmYW46ICdKdXN0IGEgZmFuIG9mIENoZWYgQnUtQnUgb3IgdGhlIGN1aXNpbmUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sIGZvcm1cbiAgICApO1xuXG4gICAgY3JlYXRlVGV4dGFyZWEoXG4gICAgICAgICdjb21tZW50cycsICdBbnkgY29tbWVudHMgeW91IHdvdWxkIGxpa2UgdG8gc2hhcmUgd2l0aCB1cz8nLFxuICAgICAgICBbJ2Zvcm0tbGFiZWwnXSwgWydmb3JtLXRleHQnXSwgZmFsc2UsIGZvcm1cbiAgICApO1xuXG4gICAgY3JlYXRlQnV0dG9uKGZvcm0pO1xuXG4gICAgcmV0dXJuIGZvcm07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihwYXJlbnROb2RlKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0LWJ1dHRvbicpO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSAnU2VuZCc7XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChidXR0b24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0YXJlYShpbnB1dE5hbWUsIGlucHV0UHJvbXB0LCBcbiAgICBpbnB1dExhYmVsQ2xhc3NMaXN0LCBpbnB1dEFyZWFDbGFzc0xpc3QsIFxuICAgIHJlcXVpcmVkLCBwYXJlbnROb2RlKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGlucHV0TGFiZWxDbGFzc0xpc3QuZm9yRWFjaChjID0+IGxhYmVsLmNsYXNzTGlzdC5hZGQoYykpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXROYW1lKTtcbiAgICBsYWJlbC5pbm5lclRleHQgPSBpbnB1dFByb21wdDtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBpbnB1dEFyZWFDbGFzc0xpc3QuZm9yRWFjaChjID0+IGlucHV0LmNsYXNzTGlzdC5hZGQoYykpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpbnB1dE5hbWUpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGlucHV0TmFtZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdjb2xzJywgMzApO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncm93cycsIDEwKTtcblxuICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChpbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURyb3Bkb3duKGlucHV0TmFtZSwgaW5wdXRQcm9tcHQsIFxuICAgIGlucHV0TGFiZWxDbGFzc0xpc3QsIGlucHV0QXJlYUNsYXNzTGlzdCwgXG4gICAgcmVxdWlyZWQsIG9wdGlvbkxpc3QsIHBhcmVudE5vZGUpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaW5wdXRMYWJlbENsYXNzTGlzdC5mb3JFYWNoKGMgPT4gbGFiZWwuY2xhc3NMaXN0LmFkZChjKSk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dE5hbWUpO1xuICAgIGxhYmVsLmlubmVyVGV4dCA9IGlucHV0UHJvbXB0O1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBpbnB1dEFyZWFDbGFzc0xpc3QuZm9yRWFjaChjID0+IGlucHV0LmNsYXNzTGlzdC5hZGQoYykpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpbnB1dE5hbWUpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGlucHV0TmFtZSk7XG5cbiAgICBvcHRpb25MaXN0LmZvckVhY2gob3B0aW9uT2JqID0+IHtcbiAgICAgICAgY29uc3Qgb3B0R3JvdXAgPSBvcHRpb25PYmoub3B0aW9uR3JvdXBMYWJlbCA/IFxuICAgICAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGdyb3VwRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJyk7XG4gICAgICAgICAgICAgICAgb3B0Z3JvdXBFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFiZWwnLCBvcHRpb25PYmoub3B0aW9uR3JvdXBMYWJlbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGdyb3VwRWxlbWVudDtcbiAgICAgICAgICAgIH0pKCkgOiBpbnB1dDtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGsgaW4gb3B0aW9uT2JqLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBrKTtcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBvcHRpb25PYmoub3B0aW9uc1trXTtcbiAgICAgICAgICAgIG9wdEdyb3VwLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0R3JvdXAgIT09IGlucHV0KSB7XG4gICAgICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHRHcm91cCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChpbnB1dCk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ29udGFjdFRhYihjb250ZW50Q29udGFpbmVyKSB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWZvcm0tY29udGFpbmVyJyk7XG5cbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvcm0oKSk7XG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xufSIsImltcG9ydCBJbWFnZUNoZWYgZnJvbSAnLi9hc3NldHMvY2hlZi5qcGVnJztcbmltcG9ydCB7IGdlbmVyYXRlSW1hZ2VDcmVkaXRzLCBnZW5lcmF0ZUltYWdlRWxlbWVudCB9IGZyb20gJy4vdXRpbHMnO1xuXG4vLyBjb25zdCBjb250ZW50RGl2Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVIb21lVGFiSW1hZ2UoKSB7XG4gICAgcmV0dXJuIGdlbmVyYXRlSW1hZ2VFbGVtZW50KFxuICAgICAgICBJbWFnZUNoZWYsIHtcbiAgICAgICAgICAgICdpZCc6ICdob21lLWltYWdlLWNoZWYnLFxuICAgICAgICAgICAgJ2FsdCc6ICdUaGUgcGljdHVyZSBvZiBDaGVmIEJ1LUJ1IG1ha2luZyBzdXNoaS4nLFxuICAgICAgICB9XG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSG9tZVRhYihjb250ZW50RGl2Q29udGFpbmVyKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS10YWItY29udGVudCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZUhvbWVUYWJJbWFnZSgpKTtcblxuICAgIGNvbnRlbnREaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIGdlbmVyYXRlSW1hZ2VDcmVkaXRzKCk7XG59IiwiaW1wb3J0IHsgZ2VuZXJhdGVJbWFnZUNyZWRpdHMsIGdlbmVyYXRlSW1hZ2VFbGVtZW50IH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCBDaGlja0RydW1TdGljayBmcm9tICcuL2Fzc2V0cy9jaGlja2VuLWRydW1zdGljay13aXRoLXJpY2UuanBlZyc7XG5pbXBvcnQgVGVtcHVyYSBmcm9tICcuL2Fzc2V0cy90ZW1wdXJhLmpwZWcnO1xuaW1wb3J0IEhvdGRvZyBmcm9tICcuL2Fzc2V0cy9ob3Rkb2cuanBlZyc7XG5pbXBvcnQgQ2hpcHMgZnJvbSAnLi9hc3NldHMvY2hpcHMuanBlZyc7XG5pbXBvcnQgQ2hvY29sYXRlIGZyb20gJy4vYXNzZXRzL2Nob2NvbGF0ZS5qcGVnJztcbmltcG9ydCBEb251dHMgZnJvbSAnLi9hc3NldHMvZG9udXRzLmpwZWcnO1xuaW1wb3J0IEVnZ1RhcnQgZnJvbSAnLi9hc3NldHMvZWdnLXRhcnQuanBlZyc7XG5pbXBvcnQgRW5va2lNdXNocm9vbUJlZWZSb2xsIGZyb20gJy4vYXNzZXRzL2Vub2tpLW11c2hyb29tLWJlZWYtcm9sbHMuanBlZyc7XG5pbXBvcnQgR2VsYXRvIGZyb20gJy4vYXNzZXRzL2dlbGF0by5qcGVnJztcbmltcG9ydCBPbXVyYWlzdSBmcm9tICcuL2Fzc2V0cy9vbXVyYWlzdS5qcGVnJztcbmltcG9ydCBPcmVvIGZyb20gJy4vYXNzZXRzL29yZW8uanBlZyc7XG5pbXBvcnQgUmFtZW5XaXRoU29mdEJvaWxlZEVnZyBmcm9tICcuL2Fzc2V0cy9yYW1lbi13aXRoLXNvZnQtYm9pbGVkLWVnZy5qcGVnJztcbmltcG9ydCBTYWxtb25TdXNoaSBmcm9tICcuL2Fzc2V0cy9zYWxtb24tc3VzaGkuanBlZyc7XG5pbXBvcnQgU3VraXlha2kgZnJvbSAnLi9hc3NldHMvc3VraXlha2kuanBlZyc7XG5pbXBvcnQgU3VubnlTaWRlVXBFZ2cgZnJvbSAnLi9hc3NldHMvc3Vubnktc2lkZS11cC5qcGVnJztcbmltcG9ydCBUYWtveWFraSBmcm9tICcuL2Fzc2V0cy90YWtveWFraS5qcGVnJztcblxuLy8gY29uc3QgY29udGVudERpdkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmZ1bmN0aW9uIE1lbnVJdGVtKGltZ1NyYywgZGlzaE5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGltZ1NyYywgZGlzaE5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZVxuICAgIH07XG59XG5cbmNvbnN0IG1lbnVJdGVtc0luZm8gPSBbXG4gICAgTWVudUl0ZW0oU3VraXlha2ksICdTdWtpeWFraScsICdKYXBhbmVzZSBzdHlsZSBsaXR0bGUgaG90cG90IHdpdGggYSBtaWxkIHRhc3RlIG9mIHN3ZWV0IGFuZCBzYWx0eS4nLCA5Ljk5KSxcbiAgICBNZW51SXRlbShUYWtveWFraSwgJ1Rha295YWtpJywgJ1RoZSBwaWN0dXJlIGxvb2tzIGxpa2UgaXRcXCdzIGEgVGFrb3lha2kuIEkgYW0gbm90IHN1cmUgYWJvdXQgdGhlIGNvbnRlbnQgYnV0IGl0IG11c3QgYmUgZGVsaWNpb3VzLicsIDkuOTkpLFxuICAgIE1lbnVJdGVtKFNhbG1vblN1c2hpLCAnU2FsbW9uIFN1c2hpJywgJ0EgbXVzdC10cnkgc3VzaGkgdGhhdCBpcyBzbyBjbGFzc2ljIGFuZCB0YXN0eS4gV2hhdCBkbyB5b3UgdGhpbms/JywgNS45OSksXG4gICAgTWVudUl0ZW0oT211cmFpc3UsICdPbXVyYWlzdScsICdKYXNtaW5lIHJpY2Ugcm9sbGVkIGluIGVnZ3MgYW5kIG1pbGRseSBjb3ZlcmVkIGluIGtldGNodXAuJywgMTEuOTkpLFxuICAgIE1lbnVJdGVtKFN1bm55U2lkZVVwRWdnLCAnU3Vubnktc2lkZS11cCBFZ2cnLCAnR3JlYXQgZm9yIGJyZWFrZmFzdCwgb3Igc2VydmVkIGFzIGEgc25hY2suJywgMy45OSksXG4gICAgTWVudUl0ZW0oRWdnVGFydCwgJ0VnZyBUYXJ0JywgJ0RlbGljYXRlbHkgYmFrZWQgQ2FudG9uZXNlIGRpbXN1bSBzdHlsZSBlZ2cgdGFydC4nLCAyLjk5KSxcbiAgICB7XG4gICAgICAgIGltZ1NyYzogQ2hpY2tEcnVtU3RpY2ssXG4gICAgICAgIGRpc2hOYW1lOiAnQ2hpY2tlbiBEcnVtc3RpY2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0RlbGljaW91cyBjaGlja2VuIGRydW1zdGljayBzZXJ2ZWQgd2l0aCBzdW5ueS1zaWRlLXVwIGVnZywgZnJlc2hseSBjb29rZWQgdmVnZXRhYmxlcywgYW5kIGphc21pbmUgcmljZScsXG4gICAgICAgIHByaWNlOiAxMy45OSxcbiAgICB9LCB7XG4gICAgICAgIGltZ1NyYzogVGVtcHVyYSxcbiAgICAgICAgZGlzaE5hbWU6ICdTaHJpbXAgVGVtcHVyYScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRGVsaWNhdGVseSBtYWRlIEphcGFuZXNlIHN0eWxlIHRlbXB1cmEgc2VydmVkIHdpdGggbm90aGluZyBlbHNlLicsXG4gICAgICAgIHByaWNlOiA1Ljk5LFxuICAgIH0sIFxuICAgIE1lbnVJdGVtKFxuICAgICAgICBFbm9raU11c2hyb29tQmVlZlJvbGwsICdFbm9raSBNdXNocm9vbSBCZWVmIFJvbGwnLCBcbiAgICAgICAgJ0ZyZXNoIGVub2tpIG11c2hyb29tIHJvbGxlZCBpbiBiZWVmJyxcbiAgICAgICAgMTkuOTlcbiAgICApLFxuICAgIE1lbnVJdGVtKFxuICAgICAgICBSYW1lbldpdGhTb2Z0Qm9pbGVkRWdnLCAnUmFtZW4nLCBcbiAgICAgICAgJ0F1dGhlbnRpYyBKYXBhbmVzZSBzdHlsZSByYW1lbiBzZXJ2ZWQgd2l0aCBTb2Z0Ym9pbGVkIEVnZyBhbmQgQmFieSBDYXJyb3RzJyxcbiAgICAgICAgMjIuOTlcbiAgICApLFxuICAgIE1lbnVJdGVtKEhvdGRvZywgJ0hvdGRvZycsICdUaGlzIGlzIGFuIEFzaWFuIHJlc3RhdXJhbnQgYnV0IHdlIHNlcnZlZCBob3Rkb2cgZm9yIHVua25vd24gcmVhc29ucy4nLCAyMi45OSksXG5dO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51Q2FyZHNDb250YWluZXIoKSB7XG4gICAgY29uc3QgbWVudUNhcmRzQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNhcmRzQ29udGFpbmVyRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZHMnKTtcbiAgICByZXR1cm4gbWVudUNhcmRzQ29udGFpbmVyRGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51Q2FyZChpbWFnZVNyYywgZGlzaE5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNhcmQuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkJyk7XG5cbiAgICBjb25zdCBpbWcgPSBnZW5lcmF0ZUltYWdlRWxlbWVudChpbWFnZVNyYywge1xuICAgICAgICAnaWQnOiBgJHtkaXNoTmFtZX1gLFxuICAgICAgICAnYWx0JzogYEFuIGltYWdlIG9mICR7ZGlzaE5hbWV9YCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnZGlzaC1uYW1lJyk7XG4gICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBkaXNoTmFtZTtcbiAgICBjb25zdCBkZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY0Rpdi5jbGFzc0xpc3QuYWRkKCdkaXNoLWRlc2NyaXB0aW9uJyk7XG4gICAgZGVzY0Rpdi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHByaWNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpY2VEaXYuY2xhc3NMaXN0LmFkZCgnZGlzaC1wcmljZScpO1xuICAgIHByaWNlRGl2LnRleHRDb250ZW50ID0gYFxcJCR7cHJpY2V9YDtcblxuICAgIGNvbnN0IG1lbnVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVRleHQuY2xhc3NMaXN0LmFkZCgnbWVudS10ZXh0Jyk7XG4gICAgbWVudVRleHQuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICAgIG1lbnVUZXh0LmFwcGVuZENoaWxkKGRlc2NEaXYpO1xuICAgIG1lbnVUZXh0LmFwcGVuZENoaWxkKHByaWNlRGl2KTtcblxuICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKGltZyk7XG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQobWVudVRleHQpO1xuXG4gICAgcmV0dXJuIG1lbnVDYXJkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVNZW51VGFiKGNvbnRlbnREaXZDb250YWluZXIpIHtcbiAgICBjb25zdCBtZW51Q2FyZHNDb250YWluZXIgPSBjcmVhdGVNZW51Q2FyZHNDb250YWluZXIoKTtcblxuICAgIG1lbnVJdGVtc0luZm8uZm9yRWFjaChpbmZvID0+IHtcbiAgICAgICAgY29uc3Qge2ltZ1NyYywgZGlzaE5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbn0gPSBpbmZvO1xuICAgICAgICBjb25zdCBjYXJkID0gY3JlYXRlTWVudUNhcmQoaW1nU3JjLCBkaXNoTmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgbWVudUNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH0pO1xuXG4gICAgY29udGVudERpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q2FyZHNDb250YWluZXIpO1xuXG4gICAgZ2VuZXJhdGVJbWFnZUNyZWRpdHMoKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVJbWFnZUVsZW1lbnQoaW1hZ2VTb3VyY2UsIGltYWdlQXR0cmlidXRlcykge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gaW1hZ2VTb3VyY2U7XG4gICAgaW1hZ2VBdHRyaWJ1dGVzXG5cbiAgICBmb3IgKGxldCBrIGluIGltYWdlQXR0cmlidXRlcykge1xuICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoaywgaW1hZ2VBdHRyaWJ1dGVzW2tdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1hZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJbWFnZUNyZWRpdHMoKSB7IC8vIGlmIGFueVxuICAgIGNvbnN0IGNyZWRpdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlZGl0cycpO1xuICAgIGlmIChjcmVkaXRzKSB7XG4gICAgICAgIGNyZWRpdHMucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVJbWFnZUNyZWRpdHMoKSB7XG4gICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFuY2hvci5ocmVmID0gJ2h0dHBzOi8vd2VpYm8uY29tL3UvMjYyMzQ3MTY1MCc7XG4gICAgYW5jaG9yLnRleHRDb250ZW50ID0gJ+m7hOWwj0InO1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY3JlZGl0cycpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9ICdJbWFnZSBDcmVkaXRzIHRvICc7XG4gICAgZGl2LmFwcGVuZENoaWxkKGFuY2hvcik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZUhvbWVUYWIgfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgZ2VuZXJhdGVNZW51VGFiIH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IGdlbmVyYXRlQWJvdXRUYWIgfSBmcm9tICcuL2Fib3V0JztcbmltcG9ydCB7IHJlbW92ZUltYWdlQ3JlZGl0cyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVDb250YWN0VGFiIH0gZnJvbSAnLi9jb250YWN0JztcblxuY29uc3QgaW5pdGlhbFRhYkNvbnRlbnRzID0gW1xuICAgICdIT01FJywgJ01FTlUnLCAnQUJPVVQnLCAnQ09OVEFDVCdcbl07XG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuY29uc3QgY29udGVudERpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGVudERpdkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVUYWIodGFiTmFtZSwgaGVhZGVyKSB7XG4gICAgaWYgKCF0YWJOYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndGFiTmFtZSBtdXN0IG5vdCBiZSBudWxsJyk7XG4gICAgfVxuICAgIGlmICghaGVhZGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaGVhZGVyIG11c3Qgbm90IGJlIG51bGwnKTtcbiAgICB9XG5cbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YWIuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RhYk5hbWUudG9Mb3dlckNhc2UoKX0tdGFiYCk7XG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoJ25hdi10YWInKTtcbiAgICBjb25zdCBzcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuRWxlbWVudC5pbm5lclRleHQgPSB0YWJOYW1lO1xuICAgIHRhYi5hcHBlbmRDaGlsZChzcGFuRWxlbWVudCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRhYik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudENvbnRhaW5lcigpIHtcbiAgICBjb250ZW50RGl2Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiBhZGRUYWJFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtdGFiJyk7XG4gICAgaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50Q29udGFpbmVyKCk7XG4gICAgICAgIHJlbW92ZUltYWdlQ3JlZGl0cygpO1xuICAgICAgICBnZW5lcmF0ZUhvbWVUYWIoY29udGVudERpdkNvbnRhaW5lcik7XG4gICAgfSlcblxuICAgIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS10YWInKTtcbiAgICBtZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbGVhckNvbnRlbnRDb250YWluZXIoKTtcbiAgICAgICAgcmVtb3ZlSW1hZ2VDcmVkaXRzKCk7XG4gICAgICAgIGdlbmVyYXRlTWVudVRhYihjb250ZW50RGl2Q29udGFpbmVyKTtcbiAgICB9KVxuXG4gICAgY29uc3QgYWJvdXRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXQtdGFiJyk7XG4gICAgYWJvdXRUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudENvbnRhaW5lcigpO1xuICAgICAgICByZW1vdmVJbWFnZUNyZWRpdHMoKTtcbiAgICAgICAgZ2VuZXJhdGVBYm91dFRhYihjb250ZW50RGl2Q29udGFpbmVyKTtcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0LXRhYicpO1xuICAgIGNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudENvbnRhaW5lcigpO1xuICAgICAgICByZW1vdmVJbWFnZUNyZWRpdHMoKTtcbiAgICAgICAgZ2VuZXJhdGVDb250YWN0VGFiKGNvbnRlbnREaXZDb250YWluZXIpO1xuICAgIH0pXG59XG5cbihmdW5jdGlvbiBpbml0KCkge1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gICAgKGZ1bmN0aW9uIGdlbmVyYXRlTmF2QmFyKCkge1xuICAgICAgICBpbml0aWFsVGFiQ29udGVudHMuZm9yRWFjaCgodGFiTmFtZSkgPT4ge1xuICAgICAgICAgICAgZ2VuZXJhdGVUYWIodGFiTmFtZSwgaGVhZGVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGhlYWRlciwgY29udGVudERpdkNvbnRhaW5lcik7XG4gICAgfSkoKTtcblxuICAgIGFkZFRhYkV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAoZnVuY3Rpb24gZ2VuZXJhdGVGb290ZXIoKSB7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgICAgICBmb290ZXIuaW5uZXJUZXh0ID0gJ0NvcHlyaWdodCDCqe+4jyAyMDIzIE9PIFN0dWRpbyc7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgICB9KSgpO1xuXG4gICAgZ2VuZXJhdGVIb21lVGFiKGNvbnRlbnREaXZDb250YWluZXIpO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=