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

/***/ "./src/assets/chef.jpeg":
/*!******************************!*\
  !*** ./src/assets/chef.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0d10cce63a2e3689e5c1.jpeg";

/***/ }),

/***/ "./src/assets/farmer.jpeg":
/*!********************************!*\
  !*** ./src/assets/farmer.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0c231d33007dbc6fe1a.jpeg";

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
  !*** ./src/about.js ***!
  \**********************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTyxnQ0FBZ0M7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmMEM7QUFDQzs7QUFFMEI7O0FBRXJFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNERBQW9CO0FBQ3hDLFFBQVEsZ0RBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0REFBb0I7QUFDeEMsUUFBUSw4Q0FBUztBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSw0REFBb0I7QUFDeEIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUltYWdlRWxlbWVudChpbWFnZVNvdXJjZSwgaW1hZ2VBdHRyaWJ1dGVzKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBpbWFnZVNvdXJjZTtcbiAgICBpbWFnZUF0dHJpYnV0ZXNcblxuICAgIGZvciAobGV0IGsgaW4gaW1hZ2VBdHRyaWJ1dGVzKSB7XG4gICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShrLCBpbWFnZUF0dHJpYnV0ZXNba10pO1xuICAgIH1cblxuICAgIHJldHVybiBpbWFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUltYWdlQ3JlZGl0cygpIHsgLy8gaWYgYW55XG4gICAgY29uc3QgY3JlZGl0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVkaXRzJyk7XG4gICAgaWYgKGNyZWRpdHMpIHtcbiAgICAgICAgY3JlZGl0cy5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUltYWdlQ3JlZGl0cygpIHtcbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYW5jaG9yLmhyZWYgPSAnaHR0cHM6Ly93ZWliby5jb20vdS8yNjIzNDcxNjUwJztcbiAgICBhbmNob3IudGV4dENvbnRlbnQgPSAn6buE5bCPQic7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjcmVkaXRzJyk7XG4gICAgZGl2LnRleHRDb250ZW50ID0gJ0ltYWdlIENyZWRpdHMgdG8gJztcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgRmFybWVyIGZyb20gJy4vYXNzZXRzL2Zhcm1lci5qcGVnJztcbmltcG9ydCBJbWFnZUNoZWYgZnJvbSAnLi9hc3NldHMvY2hlZi5qcGVnJztcblxuaW1wb3J0IHsgZ2VuZXJhdGVJbWFnZUNyZWRpdHMsIGdlbmVyYXRlSW1hZ2VFbGVtZW50IH0gZnJvbSAnLi91dGlscyc7XG5cbi8vIGNvbnN0IGNvbnRlbnREaXZDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb2ZpbGVQaWN0dXJlcygpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dC1wcm9maWxlLXBpY3R1cmVzJyk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVJbWFnZUVsZW1lbnQoXG4gICAgICAgIEZhcm1lciwge1xuICAgICAgICAgICAgYWx0OiAnQnUtQnUgYXMgYSBmYXJtZXIuJyxcbiAgICAgICAgICAgIGlkOiAnZmFybWVyJ1xuICAgICAgICB9XG4gICAgKSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGdlbmVyYXRlSW1hZ2VFbGVtZW50KFxuICAgICAgICBJbWFnZUNoZWYsIHtcbiAgICAgICAgICAgIGFsdDogJ0J1LUJ1IGFzIGEgY2hlZi4nLFxuICAgICAgICAgICAgaWQ6ICdjaGVmJ1xuICAgICAgICB9XG4gICAgKSk7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVJbnRyb2R1Y3Rpb24oKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQtaW50cm9kdWN0aW9uLXRleHQnKTtcblxuICAgIGRpdi5pbm5lclRleHQgPSAnQ2hlZiBCdS1CdSBpcyBhIG1hc3RlciBwYW5kYSBjaGVmIGluIGdyb3dpbmcgZm9vZCBhbmQgY2F0ZXJpbmcgZmluZSBjdWlzaW5lLiBBbHRob3VnaCBoZSBoaW1zZWxmIGVhdHMgbW9zdGx5IGJhbWJvbywgaGUgY29va3MgYWxsIGtpbmRzIG9mIGRlbGljaW91cyBmb29kIHRoYXQgYnJpbmdzIGpveSBhbmQgaGFwcGluZXNzIHRvIGhpcyBjdXN0b21lcnMuIEhlIG9ubHkgY29va3MgaGlzIG93biBncm93aW5nIHZlZ2V0YWJsZXMsIGFuZCBidXlzIG1lYXRzIGZyb20gdHJ1c3RlZCBsb2NhbCB2ZW5kb3JzIHdob20gaGUgaGFzIGtub3duIGZvciBkZWNhZGVzIChhbHRob3VnaCBDaGVmIEJ1LUJ1IGhpbXNlbGYgaXMgb25seSBhIGZldyB5ZWFycyBvbGQpLic7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVBYm91dFRhYihjb250ZW50RGl2Q29udGFpbmVyKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQtcGFnZScpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGdlbmVyYXRlUHJvZmlsZVBpY3R1cmVzKCkpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZUludHJvZHVjdGlvbigpKTtcblxuICAgIGNvbnRlbnREaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIGdlbmVyYXRlSW1hZ2VDcmVkaXRzKCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9