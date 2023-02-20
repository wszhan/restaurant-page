/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPLGdDQUFnQztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUU7QUFDRTtBQUMzQjtBQUNGO0FBQ0Y7QUFDUTtBQUNOO0FBQ0c7QUFDK0I7QUFDbEM7QUFDSTtBQUNSO0FBQ3dDO0FBQ3pCO0FBQ1A7QUFDVztBQUNYOztBQUU5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxtREFBUTtBQUNyQixhQUFhLG1EQUFRO0FBQ3JCLGFBQWEsdURBQVc7QUFDeEIsYUFBYSxtREFBUTtBQUNyQixhQUFhLHdEQUFjO0FBQzNCLGFBQWEsa0RBQU87QUFDcEI7QUFDQSxnQkFBZ0IscUVBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdCQUFnQixpREFBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxRQUFRLG1FQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQXNCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0RBQU07QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLDREQUFvQjtBQUNwQyxpQkFBaUIsU0FBUztBQUMxQiw4QkFBOEIsU0FBUztBQUN2QyxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsTUFBTTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBLGVBQWUsc0NBQXNDO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBLElBQUksNERBQW9CO0FBQ3hCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUltYWdlRWxlbWVudChpbWFnZVNvdXJjZSwgaW1hZ2VBdHRyaWJ1dGVzKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBpbWFnZVNvdXJjZTtcbiAgICBpbWFnZUF0dHJpYnV0ZXNcblxuICAgIGZvciAobGV0IGsgaW4gaW1hZ2VBdHRyaWJ1dGVzKSB7XG4gICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShrLCBpbWFnZUF0dHJpYnV0ZXNba10pO1xuICAgIH1cblxuICAgIHJldHVybiBpbWFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUltYWdlQ3JlZGl0cygpIHsgLy8gaWYgYW55XG4gICAgY29uc3QgY3JlZGl0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVkaXRzJyk7XG4gICAgaWYgKGNyZWRpdHMpIHtcbiAgICAgICAgY3JlZGl0cy5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUltYWdlQ3JlZGl0cygpIHtcbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYW5jaG9yLmhyZWYgPSAnaHR0cHM6Ly93ZWliby5jb20vdS8yNjIzNDcxNjUwJztcbiAgICBhbmNob3IudGV4dENvbnRlbnQgPSAn6buE5bCPQic7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjcmVkaXRzJyk7XG4gICAgZGl2LnRleHRDb250ZW50ID0gJ0ltYWdlIENyZWRpdHMgdG8gJztcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBnZW5lcmF0ZUltYWdlQ3JlZGl0cywgZ2VuZXJhdGVJbWFnZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IENoaWNrRHJ1bVN0aWNrIGZyb20gJy4vYXNzZXRzL2NoaWNrZW4tZHJ1bXN0aWNrLXdpdGgtcmljZS5qcGVnJztcbmltcG9ydCBUZW1wdXJhIGZyb20gJy4vYXNzZXRzL3RlbXB1cmEuanBlZyc7XG5pbXBvcnQgSG90ZG9nIGZyb20gJy4vYXNzZXRzL2hvdGRvZy5qcGVnJztcbmltcG9ydCBDaGlwcyBmcm9tICcuL2Fzc2V0cy9jaGlwcy5qcGVnJztcbmltcG9ydCBDaG9jb2xhdGUgZnJvbSAnLi9hc3NldHMvY2hvY29sYXRlLmpwZWcnO1xuaW1wb3J0IERvbnV0cyBmcm9tICcuL2Fzc2V0cy9kb251dHMuanBlZyc7XG5pbXBvcnQgRWdnVGFydCBmcm9tICcuL2Fzc2V0cy9lZ2ctdGFydC5qcGVnJztcbmltcG9ydCBFbm9raU11c2hyb29tQmVlZlJvbGwgZnJvbSAnLi9hc3NldHMvZW5va2ktbXVzaHJvb20tYmVlZi1yb2xscy5qcGVnJztcbmltcG9ydCBHZWxhdG8gZnJvbSAnLi9hc3NldHMvZ2VsYXRvLmpwZWcnO1xuaW1wb3J0IE9tdXJhaXN1IGZyb20gJy4vYXNzZXRzL29tdXJhaXN1LmpwZWcnO1xuaW1wb3J0IE9yZW8gZnJvbSAnLi9hc3NldHMvb3Jlby5qcGVnJztcbmltcG9ydCBSYW1lbldpdGhTb2Z0Qm9pbGVkRWdnIGZyb20gJy4vYXNzZXRzL3JhbWVuLXdpdGgtc29mdC1ib2lsZWQtZWdnLmpwZWcnO1xuaW1wb3J0IFNhbG1vblN1c2hpIGZyb20gJy4vYXNzZXRzL3NhbG1vbi1zdXNoaS5qcGVnJztcbmltcG9ydCBTdWtpeWFraSBmcm9tICcuL2Fzc2V0cy9zdWtpeWFraS5qcGVnJztcbmltcG9ydCBTdW5ueVNpZGVVcEVnZyBmcm9tICcuL2Fzc2V0cy9zdW5ueS1zaWRlLXVwLmpwZWcnO1xuaW1wb3J0IFRha295YWtpIGZyb20gJy4vYXNzZXRzL3Rha295YWtpLmpwZWcnO1xuXG4vLyBjb25zdCBjb250ZW50RGl2Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZnVuY3Rpb24gTWVudUl0ZW0oaW1nU3JjLCBkaXNoTmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW1nU3JjLCBkaXNoTmFtZSwgZGVzY3JpcHRpb24sIHByaWNlXG4gICAgfTtcbn1cblxuY29uc3QgbWVudUl0ZW1zSW5mbyA9IFtcbiAgICBNZW51SXRlbShTdWtpeWFraSwgJ1N1a2l5YWtpJywgJ0phcGFuZXNlIHN0eWxlIGxpdHRsZSBob3Rwb3Qgd2l0aCBhIG1pbGQgdGFzdGUgb2Ygc3dlZXQgYW5kIHNhbHR5LicsIDkuOTkpLFxuICAgIE1lbnVJdGVtKFRha295YWtpLCAnVGFrb3lha2knLCAnVGhlIHBpY3R1cmUgbG9va3MgbGlrZSBpdFxcJ3MgYSBUYWtveWFraS4gSSBhbSBub3Qgc3VyZSBhYm91dCB0aGUgY29udGVudCBidXQgaXQgbXVzdCBiZSBkZWxpY2lvdXMuJywgOS45OSksXG4gICAgTWVudUl0ZW0oU2FsbW9uU3VzaGksICdTYWxtb24gU3VzaGknLCAnQSBtdXN0LXRyeSBzdXNoaSB0aGF0IGlzIHNvIGNsYXNzaWMgYW5kIHRhc3R5LiBXaGF0IGRvIHlvdSB0aGluaz8nLCA1Ljk5KSxcbiAgICBNZW51SXRlbShPbXVyYWlzdSwgJ09tdXJhaXN1JywgJ0phc21pbmUgcmljZSByb2xsZWQgaW4gZWdncyBhbmQgbWlsZGx5IGNvdmVyZWQgaW4ga2V0Y2h1cC4nLCAxMS45OSksXG4gICAgTWVudUl0ZW0oU3VubnlTaWRlVXBFZ2csICdTdW5ueS1zaWRlLXVwIEVnZycsICdHcmVhdCBmb3IgYnJlYWtmYXN0LCBvciBzZXJ2ZWQgYXMgYSBzbmFjay4nLCAzLjk5KSxcbiAgICBNZW51SXRlbShFZ2dUYXJ0LCAnRWdnIFRhcnQnLCAnRGVsaWNhdGVseSBiYWtlZCBDYW50b25lc2UgZGltc3VtIHN0eWxlIGVnZyB0YXJ0LicsIDIuOTkpLFxuICAgIHtcbiAgICAgICAgaW1nU3JjOiBDaGlja0RydW1TdGljayxcbiAgICAgICAgZGlzaE5hbWU6ICdDaGlja2VuIERydW1zdGljaycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRGVsaWNpb3VzIGNoaWNrZW4gZHJ1bXN0aWNrIHNlcnZlZCB3aXRoIHN1bm55LXNpZGUtdXAgZWdnLCBmcmVzaGx5IGNvb2tlZCB2ZWdldGFibGVzLCBhbmQgamFzbWluZSByaWNlJyxcbiAgICAgICAgcHJpY2U6IDEzLjk5LFxuICAgIH0sIHtcbiAgICAgICAgaW1nU3JjOiBUZW1wdXJhLFxuICAgICAgICBkaXNoTmFtZTogJ1NocmltcCBUZW1wdXJhJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEZWxpY2F0ZWx5IG1hZGUgSmFwYW5lc2Ugc3R5bGUgdGVtcHVyYSBzZXJ2ZWQgd2l0aCBub3RoaW5nIGVsc2UuJyxcbiAgICAgICAgcHJpY2U6IDUuOTksXG4gICAgfSwgXG4gICAgTWVudUl0ZW0oXG4gICAgICAgIEVub2tpTXVzaHJvb21CZWVmUm9sbCwgJ0Vub2tpIE11c2hyb29tIEJlZWYgUm9sbCcsIFxuICAgICAgICAnRnJlc2ggZW5va2kgbXVzaHJvb20gcm9sbGVkIGluIGJlZWYnLFxuICAgICAgICAxOS45OVxuICAgICksXG4gICAgTWVudUl0ZW0oXG4gICAgICAgIFJhbWVuV2l0aFNvZnRCb2lsZWRFZ2csICdSYW1lbicsIFxuICAgICAgICAnQXV0aGVudGljIEphcGFuZXNlIHN0eWxlIHJhbWVuIHNlcnZlZCB3aXRoIFNvZnRib2lsZWQgRWdnIGFuZCBCYWJ5IENhcnJvdHMnLFxuICAgICAgICAyMi45OVxuICAgICksXG4gICAgTWVudUl0ZW0oSG90ZG9nLCAnSG90ZG9nJywgJ1RoaXMgaXMgYW4gQXNpYW4gcmVzdGF1cmFudCBidXQgd2Ugc2VydmVkIGhvdGRvZyBmb3IgdW5rbm93biByZWFzb25zLicsIDIyLjk5KSxcbl07XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVDYXJkc0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBtZW51Q2FyZHNDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q2FyZHNDb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkcycpO1xuICAgIHJldHVybiBtZW51Q2FyZHNDb250YWluZXJEaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVDYXJkKGltYWdlU3JjLCBkaXNoTmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgbWVudUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q2FyZC5jbGFzc0xpc3QuYWRkKCdtZW51LWNhcmQnKTtcblxuICAgIGNvbnN0IGltZyA9IGdlbmVyYXRlSW1hZ2VFbGVtZW50KGltYWdlU3JjLCB7XG4gICAgICAgICdpZCc6IGAke2Rpc2hOYW1lfWAsXG4gICAgICAgICdhbHQnOiBgQW4gaW1hZ2Ugb2YgJHtkaXNoTmFtZX1gLFxuICAgIH0pO1xuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCdkaXNoLW5hbWUnKTtcbiAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IGRpc2hOYW1lO1xuICAgIGNvbnN0IGRlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc2gtZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjRGl2LnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgY29uc3QgcHJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmljZURpdi5jbGFzc0xpc3QuYWRkKCdkaXNoLXByaWNlJyk7XG4gICAgcHJpY2VEaXYudGV4dENvbnRlbnQgPSBgXFwkJHtwcmljZX1gO1xuXG4gICAgY29uc3QgbWVudVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51VGV4dC5jbGFzc0xpc3QuYWRkKCdtZW51LXRleHQnKTtcbiAgICBtZW51VGV4dC5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gICAgbWVudVRleHQuYXBwZW5kQ2hpbGQoZGVzY0Rpdik7XG4gICAgbWVudVRleHQuYXBwZW5kQ2hpbGQocHJpY2VEaXYpO1xuXG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChtZW51VGV4dCk7XG5cbiAgICByZXR1cm4gbWVudUNhcmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU1lbnVUYWIoY29udGVudERpdkNvbnRhaW5lcikge1xuICAgIGNvbnN0IG1lbnVDYXJkc0NvbnRhaW5lciA9IGNyZWF0ZU1lbnVDYXJkc0NvbnRhaW5lcigpO1xuXG4gICAgbWVudUl0ZW1zSW5mby5mb3JFYWNoKGluZm8gPT4ge1xuICAgICAgICBjb25zdCB7aW1nU3JjLCBkaXNoTmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9ufSA9IGluZm87XG4gICAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVNZW51Q2FyZChpbWdTcmMsIGRpc2hOYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICBtZW51Q2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfSk7XG5cbiAgICBjb250ZW50RGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDYXJkc0NvbnRhaW5lcik7XG5cbiAgICBnZW5lcmF0ZUltYWdlQ3JlZGl0cygpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==