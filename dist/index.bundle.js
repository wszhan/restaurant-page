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

    div.innerText = 'Chef Bu-Bu is a master panda chef in growing food and catering fine cuisine. Although he himself eats mostly bamboo, he cooks all kinds of delicious food that bring joy and happiness to his customers. He only cooks his own growing vegetables, and buys meats from trusted local vendors whom he has known for decades (although Chef Bu-Bu himself is only a few years ago).';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLHNCQUFzQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBa0I7QUFDMUIsUUFBUSxzREFBZTtBQUN2QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQWtCO0FBQzFCLFFBQVEsc0RBQWU7QUFDdkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBEQUFrQjtBQUMxQixRQUFRLHdEQUFnQjtBQUN4QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQWtCO0FBQzFCLFFBQVEsNERBQWtCO0FBQzFCLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLHNEQUFlO0FBQ25CLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IEZhcm1lciBmcm9tICcuL2Fzc2V0cy9mYXJtZXIuanBlZyc7XG5pbXBvcnQgSW1hZ2VDaGVmIGZyb20gJy4vYXNzZXRzL2NoZWYuanBlZyc7XG5cbmltcG9ydCB7IGdlbmVyYXRlSW1hZ2VDcmVkaXRzLCBnZW5lcmF0ZUltYWdlRWxlbWVudCB9IGZyb20gJy4vdXRpbHMnO1xuXG4vLyBjb25zdCBjb250ZW50RGl2Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9maWxlUGljdHVyZXMoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQtcHJvZmlsZS1waWN0dXJlcycpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGdlbmVyYXRlSW1hZ2VFbGVtZW50KFxuICAgICAgICBGYXJtZXIsIHtcbiAgICAgICAgICAgIGFsdDogJ0J1LUJ1IGFzIGEgZmFybWVyLicsXG4gICAgICAgICAgICBpZDogJ2Zhcm1lcidcbiAgICAgICAgfVxuICAgICkpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZUltYWdlRWxlbWVudChcbiAgICAgICAgSW1hZ2VDaGVmLCB7XG4gICAgICAgICAgICBhbHQ6ICdCdS1CdSBhcyBhIGNoZWYuJyxcbiAgICAgICAgICAgIGlkOiAnY2hlZidcbiAgICAgICAgfVxuICAgICkpO1xuXG4gICAgcmV0dXJuIGRpdjtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSW50cm9kdWN0aW9uKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LWludHJvZHVjdGlvbi10ZXh0Jyk7XG5cbiAgICBkaXYuaW5uZXJUZXh0ID0gJ0NoZWYgQnUtQnUgaXMgYSBtYXN0ZXIgcGFuZGEgY2hlZiBpbiBncm93aW5nIGZvb2QgYW5kIGNhdGVyaW5nIGZpbmUgY3Vpc2luZS4gQWx0aG91Z2ggaGUgaGltc2VsZiBlYXRzIG1vc3RseSBiYW1ib28sIGhlIGNvb2tzIGFsbCBraW5kcyBvZiBkZWxpY2lvdXMgZm9vZCB0aGF0IGJyaW5nIGpveSBhbmQgaGFwcGluZXNzIHRvIGhpcyBjdXN0b21lcnMuIEhlIG9ubHkgY29va3MgaGlzIG93biBncm93aW5nIHZlZ2V0YWJsZXMsIGFuZCBidXlzIG1lYXRzIGZyb20gdHJ1c3RlZCBsb2NhbCB2ZW5kb3JzIHdob20gaGUgaGFzIGtub3duIGZvciBkZWNhZGVzIChhbHRob3VnaCBDaGVmIEJ1LUJ1IGhpbXNlbGYgaXMgb25seSBhIGZldyB5ZWFycyBhZ28pLic7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVBYm91dFRhYihjb250ZW50RGl2Q29udGFpbmVyKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQtcGFnZScpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGdlbmVyYXRlUHJvZmlsZVBpY3R1cmVzKCkpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZUludHJvZHVjdGlvbigpKTtcblxuICAgIGNvbnRlbnREaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIGdlbmVyYXRlSW1hZ2VDcmVkaXRzKCk7XG59IiwiXG5mdW5jdGlvbiBjcmVhdGVJbnB1dFdpdGhMYWJlbChpbnB1dE5hbWUsIGlucHV0UHJvbXB0LCBpbnB1dFR5cGUsIGlucHV0TGFiZWxDbGFzc0xpc3QsIGlucHV0QXJlYUNsYXNzTGlzdCwgcmVxdWlyZWQsIHBhcmVudE5vZGUpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaW5wdXRMYWJlbENsYXNzTGlzdC5mb3JFYWNoKGMgPT4gbGFiZWwuY2xhc3NMaXN0LmFkZChjKSk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dE5hbWUpO1xuICAgIGxhYmVsLmlubmVyVGV4dCA9IGlucHV0UHJvbXB0O1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0QXJlYUNsYXNzTGlzdC5mb3JFYWNoKGMgPT4gaW5wdXQuY2xhc3NMaXN0LmFkZChjKSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlucHV0TmFtZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgaW5wdXROYW1lKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBpbnB1dFR5cGUpO1xuXG4gICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGlucHV0KTtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtZm9ybScpO1xuXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybS10aXRsZScpO1xuICAgIGZvcm1UaXRsZS5pbm5lclRleHQgPSAnQ29udGFjdCBGb3JtJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG5cbiAgICBjcmVhdGVJbnB1dFdpdGhMYWJlbChcbiAgICAgICAgJ25hbWUnLCAnSG93IHNob3VsZCB3ZSBhZGRyZXNzIHlvdT8nLCAndGV4dCcsXG4gICAgICAgIFsnZm9ybS1sYWJlbCddLCBbJ2Zvcm0tdGV4dC1pbnB1dCddLCB0cnVlLCBmb3JtXG4gICAgKVxuICAgIGNyZWF0ZUlucHV0V2l0aExhYmVsKFxuICAgICAgICAnZW1haWwnLCAnV2hhdCBpcyB5b3VyIEVtYWlsIGFkZHJlc3M/JywgJ2VtYWlsJyxcbiAgICAgICAgWydmb3JtLWxhYmVsJ10sIFsnZm9ybS10ZXh0LWlucHV0J10sIGZhbHNlLCBmb3JtXG4gICAgKVxuXG4gICAgY3JlYXRlRHJvcGRvd24oXG4gICAgICAgICd1c2VyLXR5cGUnLCAnUGxlYXNlIGNob29zZSBvbmUgdGhhdCBiZXN0IGRlc2NyaWJlcyB5b3UuJyxcbiAgICAgICAgWydmb3JtLWxhYmVsJ10sIFtdLCBmYWxzZSwgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9wdGlvbkdyb3VwTGFiZWw6ICdQbGVhc2UgY2hvb3NlIG9uZSBmcm9tIHRoZSBkcm9wZG93biBsaXN0JyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyOiAnUmVzdGF1cmFudCBDdXN0b21lcicsXG4gICAgICAgICAgICAgICAgICAgIGZhbjogJ0p1c3QgYSBmYW4gb2YgQ2hlZiBCdS1CdSBvciB0aGUgY3Vpc2luZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSwgZm9ybVxuICAgICk7XG5cbiAgICBjcmVhdGVUZXh0YXJlYShcbiAgICAgICAgJ2NvbW1lbnRzJywgJ0FueSBjb21tZW50cyB5b3Ugd291bGQgbGlrZSB0byBzaGFyZSB3aXRoIHVzPycsXG4gICAgICAgIFsnZm9ybS1sYWJlbCddLCBbJ2Zvcm0tdGV4dCddLCBmYWxzZSwgZm9ybVxuICAgICk7XG5cbiAgICBjcmVhdGVCdXR0b24oZm9ybSk7XG5cbiAgICByZXR1cm4gZm9ybTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHBhcmVudE5vZGUpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtYnV0dG9uJyk7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9ICdTZW5kJztcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGJ1dHRvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRhcmVhKGlucHV0TmFtZSwgaW5wdXRQcm9tcHQsIFxuICAgIGlucHV0TGFiZWxDbGFzc0xpc3QsIGlucHV0QXJlYUNsYXNzTGlzdCwgXG4gICAgcmVxdWlyZWQsIHBhcmVudE5vZGUpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaW5wdXRMYWJlbENsYXNzTGlzdC5mb3JFYWNoKGMgPT4gbGFiZWwuY2xhc3NMaXN0LmFkZChjKSk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dE5hbWUpO1xuICAgIGxhYmVsLmlubmVyVGV4dCA9IGlucHV0UHJvbXB0O1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGlucHV0QXJlYUNsYXNzTGlzdC5mb3JFYWNoKGMgPT4gaW5wdXQuY2xhc3NMaXN0LmFkZChjKSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlucHV0TmFtZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgaW5wdXROYW1lKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCAzMCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyb3dzJywgMTApO1xuXG4gICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGlucHV0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRHJvcGRvd24oaW5wdXROYW1lLCBpbnB1dFByb21wdCwgXG4gICAgaW5wdXRMYWJlbENsYXNzTGlzdCwgaW5wdXRBcmVhQ2xhc3NMaXN0LCBcbiAgICByZXF1aXJlZCwgb3B0aW9uTGlzdCwgcGFyZW50Tm9kZSkge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBpbnB1dExhYmVsQ2xhc3NMaXN0LmZvckVhY2goYyA9PiBsYWJlbC5jbGFzc0xpc3QuYWRkKGMpKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlucHV0TmFtZSk7XG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gaW5wdXRQcm9tcHQ7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGlucHV0QXJlYUNsYXNzTGlzdC5mb3JFYWNoKGMgPT4gaW5wdXQuY2xhc3NMaXN0LmFkZChjKSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlucHV0TmFtZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgaW5wdXROYW1lKTtcblxuICAgIG9wdGlvbkxpc3QuZm9yRWFjaChvcHRpb25PYmogPT4ge1xuICAgICAgICBjb25zdCBvcHRHcm91cCA9IG9wdGlvbk9iai5vcHRpb25Hcm91cExhYmVsID8gXG4gICAgICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0Z3JvdXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0Z3JvdXAnKTtcbiAgICAgICAgICAgICAgICBvcHRncm91cEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYWJlbCcsIG9wdGlvbk9iai5vcHRpb25Hcm91cExhYmVsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0Z3JvdXBFbGVtZW50O1xuICAgICAgICAgICAgfSkoKSA6IGlucHV0O1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgayBpbiBvcHRpb25PYmoub3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGspO1xuICAgICAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IG9wdGlvbk9iai5vcHRpb25zW2tdO1xuICAgICAgICAgICAgb3B0R3JvdXAuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRHcm91cCAhPT0gaW5wdXQpIHtcbiAgICAgICAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdEdyb3VwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGlucHV0KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDb250YWN0VGFiKGNvbnRlbnRDb250YWluZXIpIHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtZm9ybS1jb250YWluZXInKTtcblxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybSgpKTtcblxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG59IiwiaW1wb3J0IEltYWdlQ2hlZiBmcm9tICcuL2Fzc2V0cy9jaGVmLmpwZWcnO1xuaW1wb3J0IHsgZ2VuZXJhdGVJbWFnZUNyZWRpdHMsIGdlbmVyYXRlSW1hZ2VFbGVtZW50IH0gZnJvbSAnLi91dGlscyc7XG5cbi8vIGNvbnN0IGNvbnRlbnREaXZDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUhvbWVUYWJJbWFnZSgpIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVJbWFnZUVsZW1lbnQoXG4gICAgICAgIEltYWdlQ2hlZiwge1xuICAgICAgICAgICAgJ2lkJzogJ2hvbWUtaW1hZ2UtY2hlZicsXG4gICAgICAgICAgICAnYWx0JzogJ1RoZSBwaWN0dXJlIG9mIENoZWYgQnUtQnUgbWFraW5nIHN1c2hpLicsXG4gICAgICAgIH1cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVIb21lVGFiKGNvbnRlbnREaXZDb250YWluZXIpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdob21lLXRhYi1jb250ZW50Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGdlbmVyYXRlSG9tZVRhYkltYWdlKCkpO1xuXG4gICAgY29udGVudERpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgZ2VuZXJhdGVJbWFnZUNyZWRpdHMoKTtcbn0iLCJpbXBvcnQgeyBnZW5lcmF0ZUltYWdlQ3JlZGl0cywgZ2VuZXJhdGVJbWFnZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IENoaWNrRHJ1bVN0aWNrIGZyb20gJy4vYXNzZXRzL2NoaWNrZW4tZHJ1bXN0aWNrLXdpdGgtcmljZS5qcGVnJztcbmltcG9ydCBUZW1wdXJhIGZyb20gJy4vYXNzZXRzL3RlbXB1cmEuanBlZyc7XG5pbXBvcnQgSG90ZG9nIGZyb20gJy4vYXNzZXRzL2hvdGRvZy5qcGVnJztcbmltcG9ydCBDaGlwcyBmcm9tICcuL2Fzc2V0cy9jaGlwcy5qcGVnJztcbmltcG9ydCBDaG9jb2xhdGUgZnJvbSAnLi9hc3NldHMvY2hvY29sYXRlLmpwZWcnO1xuaW1wb3J0IERvbnV0cyBmcm9tICcuL2Fzc2V0cy9kb251dHMuanBlZyc7XG5pbXBvcnQgRWdnVGFydCBmcm9tICcuL2Fzc2V0cy9lZ2ctdGFydC5qcGVnJztcbmltcG9ydCBFbm9raU11c2hyb29tQmVlZlJvbGwgZnJvbSAnLi9hc3NldHMvZW5va2ktbXVzaHJvb20tYmVlZi1yb2xscy5qcGVnJztcbmltcG9ydCBHZWxhdG8gZnJvbSAnLi9hc3NldHMvZ2VsYXRvLmpwZWcnO1xuaW1wb3J0IE9tdXJhaXN1IGZyb20gJy4vYXNzZXRzL29tdXJhaXN1LmpwZWcnO1xuaW1wb3J0IE9yZW8gZnJvbSAnLi9hc3NldHMvb3Jlby5qcGVnJztcbmltcG9ydCBSYW1lbldpdGhTb2Z0Qm9pbGVkRWdnIGZyb20gJy4vYXNzZXRzL3JhbWVuLXdpdGgtc29mdC1ib2lsZWQtZWdnLmpwZWcnO1xuaW1wb3J0IFNhbG1vblN1c2hpIGZyb20gJy4vYXNzZXRzL3NhbG1vbi1zdXNoaS5qcGVnJztcbmltcG9ydCBTdWtpeWFraSBmcm9tICcuL2Fzc2V0cy9zdWtpeWFraS5qcGVnJztcbmltcG9ydCBTdW5ueVNpZGVVcEVnZyBmcm9tICcuL2Fzc2V0cy9zdW5ueS1zaWRlLXVwLmpwZWcnO1xuaW1wb3J0IFRha295YWtpIGZyb20gJy4vYXNzZXRzL3Rha295YWtpLmpwZWcnO1xuXG4vLyBjb25zdCBjb250ZW50RGl2Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZnVuY3Rpb24gTWVudUl0ZW0oaW1nU3JjLCBkaXNoTmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW1nU3JjLCBkaXNoTmFtZSwgZGVzY3JpcHRpb24sIHByaWNlXG4gICAgfTtcbn1cblxuY29uc3QgbWVudUl0ZW1zSW5mbyA9IFtcbiAgICBNZW51SXRlbShTdWtpeWFraSwgJ1N1a2l5YWtpJywgJ0phcGFuZXNlIHN0eWxlIGxpdHRsZSBob3Rwb3Qgd2l0aCBhIG1pbGQgdGFzdGUgb2Ygc3dlZXQgYW5kIHNhbHR5LicsIDkuOTkpLFxuICAgIE1lbnVJdGVtKFRha295YWtpLCAnVGFrb3lha2knLCAnVGhlIHBpY3R1cmUgbG9va3MgbGlrZSBpdFxcJ3MgYSBUYWtveWFraS4gSSBhbSBub3Qgc3VyZSBhYm91dCB0aGUgY29udGVudCBidXQgaXQgbXVzdCBiZSBkZWxpY2lvdXMuJywgOS45OSksXG4gICAgTWVudUl0ZW0oU2FsbW9uU3VzaGksICdTYWxtb24gU3VzaGknLCAnQSBtdXN0LXRyeSBzdXNoaSB0aGF0IGlzIHNvIGNsYXNzaWMgYW5kIHRhc3R5LiBXaGF0IGRvIHlvdSB0aGluaz8nLCA1Ljk5KSxcbiAgICBNZW51SXRlbShPbXVyYWlzdSwgJ09tdXJhaXN1JywgJ0phc21pbmUgcmljZSByb2xsZWQgaW4gZWdncyBhbmQgbWlsZGx5IGNvdmVyZWQgaW4ga2V0Y2h1cC4nLCAxMS45OSksXG4gICAgTWVudUl0ZW0oU3VubnlTaWRlVXBFZ2csICdTdW5ueS1zaWRlLXVwIEVnZycsICdHcmVhdCBmb3IgYnJlYWtmYXN0LCBvciBzZXJ2ZWQgYXMgYSBzbmFjay4nLCAzLjk5KSxcbiAgICBNZW51SXRlbShFZ2dUYXJ0LCAnRWdnIFRhcnQnLCAnRGVsaWNhdGVseSBiYWtlZCBDYW50b25lc2UgZGltc3VtIHN0eWxlIGVnZyB0YXJ0LicsIDIuOTkpLFxuICAgIHtcbiAgICAgICAgaW1nU3JjOiBDaGlja0RydW1TdGljayxcbiAgICAgICAgZGlzaE5hbWU6ICdDaGlja2VuIERydW1zdGljaycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRGVsaWNpb3VzIGNoaWNrZW4gZHJ1bXN0aWNrIHNlcnZlZCB3aXRoIHN1bm55LXNpZGUtdXAgZWdnLCBmcmVzaGx5IGNvb2tlZCB2ZWdldGFibGVzLCBhbmQgamFzbWluZSByaWNlJyxcbiAgICAgICAgcHJpY2U6IDEzLjk5LFxuICAgIH0sIHtcbiAgICAgICAgaW1nU3JjOiBUZW1wdXJhLFxuICAgICAgICBkaXNoTmFtZTogJ1NocmltcCBUZW1wdXJhJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEZWxpY2F0ZWx5IG1hZGUgSmFwYW5lc2Ugc3R5bGUgdGVtcHVyYSBzZXJ2ZWQgd2l0aCBub3RoaW5nIGVsc2UuJyxcbiAgICAgICAgcHJpY2U6IDUuOTksXG4gICAgfSwgXG4gICAgTWVudUl0ZW0oXG4gICAgICAgIEVub2tpTXVzaHJvb21CZWVmUm9sbCwgJ0Vub2tpIE11c2hyb29tIEJlZWYgUm9sbCcsIFxuICAgICAgICAnRnJlc2ggZW5va2kgbXVzaHJvb20gcm9sbGVkIGluIGJlZWYnLFxuICAgICAgICAxOS45OVxuICAgICksXG4gICAgTWVudUl0ZW0oXG4gICAgICAgIFJhbWVuV2l0aFNvZnRCb2lsZWRFZ2csICdSYW1lbicsIFxuICAgICAgICAnQXV0aGVudGljIEphcGFuZXNlIHN0eWxlIHJhbWVuIHNlcnZlZCB3aXRoIFNvZnRib2lsZWQgRWdnIGFuZCBCYWJ5IENhcnJvdHMnLFxuICAgICAgICAyMi45OVxuICAgICksXG4gICAgTWVudUl0ZW0oSG90ZG9nLCAnSG90ZG9nJywgJ1RoaXMgaXMgYW4gQXNpYW4gcmVzdGF1cmFudCBidXQgd2Ugc2VydmVkIGhvdGRvZyBmb3IgdW5rbm93biByZWFzb25zLicsIDIyLjk5KSxcbl07XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVDYXJkc0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBtZW51Q2FyZHNDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q2FyZHNDb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkcycpO1xuICAgIHJldHVybiBtZW51Q2FyZHNDb250YWluZXJEaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVDYXJkKGltYWdlU3JjLCBkaXNoTmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgbWVudUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q2FyZC5jbGFzc0xpc3QuYWRkKCdtZW51LWNhcmQnKTtcblxuICAgIGNvbnN0IGltZyA9IGdlbmVyYXRlSW1hZ2VFbGVtZW50KGltYWdlU3JjLCB7XG4gICAgICAgICdpZCc6IGAke2Rpc2hOYW1lfWAsXG4gICAgICAgICdhbHQnOiBgQW4gaW1hZ2Ugb2YgJHtkaXNoTmFtZX1gLFxuICAgIH0pO1xuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCdkaXNoLW5hbWUnKTtcbiAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IGRpc2hOYW1lO1xuICAgIGNvbnN0IGRlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc2gtZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjRGl2LnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgY29uc3QgcHJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmljZURpdi5jbGFzc0xpc3QuYWRkKCdkaXNoLXByaWNlJyk7XG4gICAgcHJpY2VEaXYudGV4dENvbnRlbnQgPSBgXFwkJHtwcmljZX1gO1xuXG4gICAgY29uc3QgbWVudVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51VGV4dC5jbGFzc0xpc3QuYWRkKCdtZW51LXRleHQnKTtcbiAgICBtZW51VGV4dC5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gICAgbWVudVRleHQuYXBwZW5kQ2hpbGQoZGVzY0Rpdik7XG4gICAgbWVudVRleHQuYXBwZW5kQ2hpbGQocHJpY2VEaXYpO1xuXG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChtZW51VGV4dCk7XG5cbiAgICByZXR1cm4gbWVudUNhcmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU1lbnVUYWIoY29udGVudERpdkNvbnRhaW5lcikge1xuICAgIGNvbnN0IG1lbnVDYXJkc0NvbnRhaW5lciA9IGNyZWF0ZU1lbnVDYXJkc0NvbnRhaW5lcigpO1xuXG4gICAgbWVudUl0ZW1zSW5mby5mb3JFYWNoKGluZm8gPT4ge1xuICAgICAgICBjb25zdCB7aW1nU3JjLCBkaXNoTmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9ufSA9IGluZm87XG4gICAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVNZW51Q2FyZChpbWdTcmMsIGRpc2hOYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICBtZW51Q2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfSk7XG5cbiAgICBjb250ZW50RGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDYXJkc0NvbnRhaW5lcik7XG5cbiAgICBnZW5lcmF0ZUltYWdlQ3JlZGl0cygpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUltYWdlRWxlbWVudChpbWFnZVNvdXJjZSwgaW1hZ2VBdHRyaWJ1dGVzKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBpbWFnZVNvdXJjZTtcbiAgICBpbWFnZUF0dHJpYnV0ZXNcblxuICAgIGZvciAobGV0IGsgaW4gaW1hZ2VBdHRyaWJ1dGVzKSB7XG4gICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShrLCBpbWFnZUF0dHJpYnV0ZXNba10pO1xuICAgIH1cblxuICAgIHJldHVybiBpbWFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUltYWdlQ3JlZGl0cygpIHsgLy8gaWYgYW55XG4gICAgY29uc3QgY3JlZGl0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVkaXRzJyk7XG4gICAgaWYgKGNyZWRpdHMpIHtcbiAgICAgICAgY3JlZGl0cy5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUltYWdlQ3JlZGl0cygpIHtcbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYW5jaG9yLmhyZWYgPSAnaHR0cHM6Ly93ZWliby5jb20vdS8yNjIzNDcxNjUwJztcbiAgICBhbmNob3IudGV4dENvbnRlbnQgPSAn6buE5bCPQic7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjcmVkaXRzJyk7XG4gICAgZGl2LnRleHRDb250ZW50ID0gJ0ltYWdlIENyZWRpdHMgdG8gJztcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGdlbmVyYXRlSG9tZVRhYiB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBnZW5lcmF0ZU1lbnVUYWIgfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgZ2VuZXJhdGVBYm91dFRhYiB9IGZyb20gJy4vYWJvdXQnO1xuaW1wb3J0IHsgcmVtb3ZlSW1hZ2VDcmVkaXRzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBnZW5lcmF0ZUNvbnRhY3RUYWIgfSBmcm9tICcuL2NvbnRhY3QnO1xuXG5jb25zdCBpbml0aWFsVGFiQ29udGVudHMgPSBbXG4gICAgJ0hPTUUnLCAnTUVOVScsICdBQk9VVCcsICdDT05UQUNUJ1xuXTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG5jb25zdCBjb250ZW50RGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250ZW50RGl2Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYih0YWJOYW1lLCBoZWFkZXIpIHtcbiAgICBpZiAoIXRhYk5hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0YWJOYW1lIG11c3Qgbm90IGJlIG51bGwnKTtcbiAgICB9XG4gICAgaWYgKCFoZWFkZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdoZWFkZXIgbXVzdCBub3QgYmUgbnVsbCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGFiTmFtZS50b0xvd2VyQ2FzZSgpfS10YWJgKTtcbiAgICB0YWIuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYicpO1xuICAgIGNvbnN0IHNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW5FbGVtZW50LmlubmVyVGV4dCA9IHRhYk5hbWU7XG4gICAgdGFiLmFwcGVuZENoaWxkKHNwYW5FbGVtZW50KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGFiKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDb250ZW50Q29udGFpbmVyKCkge1xuICAgIGNvbnRlbnREaXZDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG59XG5cbmZ1bmN0aW9uIGFkZFRhYkV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS10YWInKTtcbiAgICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbGVhckNvbnRlbnRDb250YWluZXIoKTtcbiAgICAgICAgcmVtb3ZlSW1hZ2VDcmVkaXRzKCk7XG4gICAgICAgIGdlbmVyYXRlSG9tZVRhYihjb250ZW50RGl2Q29udGFpbmVyKTtcbiAgICB9KVxuXG4gICAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LXRhYicpO1xuICAgIG1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudENvbnRhaW5lcigpO1xuICAgICAgICByZW1vdmVJbWFnZUNyZWRpdHMoKTtcbiAgICAgICAgZ2VuZXJhdGVNZW51VGFiKGNvbnRlbnREaXZDb250YWluZXIpO1xuICAgIH0pXG5cbiAgICBjb25zdCBhYm91dFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dC10YWInKTtcbiAgICBhYm91dFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50Q29udGFpbmVyKCk7XG4gICAgICAgIHJlbW92ZUltYWdlQ3JlZGl0cygpO1xuICAgICAgICBnZW5lcmF0ZUFib3V0VGFiKGNvbnRlbnREaXZDb250YWluZXIpO1xuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QtdGFiJyk7XG4gICAgY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50Q29udGFpbmVyKCk7XG4gICAgICAgIHJlbW92ZUltYWdlQ3JlZGl0cygpO1xuICAgICAgICBnZW5lcmF0ZUNvbnRhY3RUYWIoY29udGVudERpdkNvbnRhaW5lcik7XG4gICAgfSlcbn1cblxuKGZ1bmN0aW9uIGluaXQoKSB7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnREaXZDb250YWluZXIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgICAoZnVuY3Rpb24gZ2VuZXJhdGVOYXZCYXIoKSB7XG4gICAgICAgIGluaXRpYWxUYWJDb250ZW50cy5mb3JFYWNoKCh0YWJOYW1lKSA9PiB7XG4gICAgICAgICAgICBnZW5lcmF0ZVRhYih0YWJOYW1lLCBoZWFkZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoaGVhZGVyLCBjb250ZW50RGl2Q29udGFpbmVyKTtcbiAgICB9KSgpO1xuXG4gICAgYWRkVGFiRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIChmdW5jdGlvbiBnZW5lcmF0ZUZvb3RlcigpIHtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgICAgIGZvb3Rlci5pbm5lclRleHQgPSAnQ29weXJpZ2h0IMKp77iPIDIwMjMgT08gU3R1ZGlvJztcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIH0pKCk7XG5cbiAgICBnZW5lcmF0ZUhvbWVUYWIoY29udGVudERpdkNvbnRhaW5lcik7XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==