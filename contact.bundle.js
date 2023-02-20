/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuZnVuY3Rpb24gY3JlYXRlSW5wdXRXaXRoTGFiZWwoaW5wdXROYW1lLCBpbnB1dFByb21wdCwgaW5wdXRUeXBlLCBpbnB1dExhYmVsQ2xhc3NMaXN0LCBpbnB1dEFyZWFDbGFzc0xpc3QsIHJlcXVpcmVkLCBwYXJlbnROb2RlKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGlucHV0TGFiZWxDbGFzc0xpc3QuZm9yRWFjaChjID0+IGxhYmVsLmNsYXNzTGlzdC5hZGQoYykpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXROYW1lKTtcbiAgICBsYWJlbC5pbm5lclRleHQgPSBpbnB1dFByb21wdDtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dEFyZWFDbGFzc0xpc3QuZm9yRWFjaChjID0+IGlucHV0LmNsYXNzTGlzdC5hZGQoYykpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpbnB1dE5hbWUpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGlucHV0TmFtZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRUeXBlKTtcblxuICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChpbnB1dCk7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlRm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWZvcm0nKTtcblxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm0tdGl0bGUnKTtcbiAgICBmb3JtVGl0bGUuaW5uZXJUZXh0ID0gJ0NvbnRhY3QgRm9ybSc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuXG4gICAgY3JlYXRlSW5wdXRXaXRoTGFiZWwoXG4gICAgICAgICduYW1lJywgJ0hvdyBzaG91bGQgd2UgYWRkcmVzcyB5b3U/JywgJ3RleHQnLFxuICAgICAgICBbJ2Zvcm0tbGFiZWwnXSwgWydmb3JtLXRleHQtaW5wdXQnXSwgdHJ1ZSwgZm9ybVxuICAgIClcbiAgICBjcmVhdGVJbnB1dFdpdGhMYWJlbChcbiAgICAgICAgJ2VtYWlsJywgJ1doYXQgaXMgeW91ciBFbWFpbCBhZGRyZXNzPycsICdlbWFpbCcsXG4gICAgICAgIFsnZm9ybS1sYWJlbCddLCBbJ2Zvcm0tdGV4dC1pbnB1dCddLCBmYWxzZSwgZm9ybVxuICAgIClcblxuICAgIGNyZWF0ZURyb3Bkb3duKFxuICAgICAgICAndXNlci10eXBlJywgJ1BsZWFzZSBjaG9vc2Ugb25lIHRoYXQgYmVzdCBkZXNjcmliZXMgeW91LicsXG4gICAgICAgIFsnZm9ybS1sYWJlbCddLCBbXSwgZmFsc2UsIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcHRpb25Hcm91cExhYmVsOiAnUGxlYXNlIGNob29zZSBvbmUgZnJvbSB0aGUgZHJvcGRvd24gbGlzdCcsXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogJ1Jlc3RhdXJhbnQgQ3VzdG9tZXInLFxuICAgICAgICAgICAgICAgICAgICBmYW46ICdKdXN0IGEgZmFuIG9mIENoZWYgQnUtQnUgb3IgdGhlIGN1aXNpbmUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sIGZvcm1cbiAgICApO1xuXG4gICAgY3JlYXRlVGV4dGFyZWEoXG4gICAgICAgICdjb21tZW50cycsICdBbnkgY29tbWVudHMgeW91IHdvdWxkIGxpa2UgdG8gc2hhcmUgd2l0aCB1cz8nLFxuICAgICAgICBbJ2Zvcm0tbGFiZWwnXSwgWydmb3JtLXRleHQnXSwgZmFsc2UsIGZvcm1cbiAgICApO1xuXG4gICAgY3JlYXRlQnV0dG9uKGZvcm0pO1xuXG4gICAgcmV0dXJuIGZvcm07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihwYXJlbnROb2RlKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0LWJ1dHRvbicpO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSAnU2VuZCc7XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChidXR0b24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0YXJlYShpbnB1dE5hbWUsIGlucHV0UHJvbXB0LCBcbiAgICBpbnB1dExhYmVsQ2xhc3NMaXN0LCBpbnB1dEFyZWFDbGFzc0xpc3QsIFxuICAgIHJlcXVpcmVkLCBwYXJlbnROb2RlKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGlucHV0TGFiZWxDbGFzc0xpc3QuZm9yRWFjaChjID0+IGxhYmVsLmNsYXNzTGlzdC5hZGQoYykpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXROYW1lKTtcbiAgICBsYWJlbC5pbm5lclRleHQgPSBpbnB1dFByb21wdDtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBpbnB1dEFyZWFDbGFzc0xpc3QuZm9yRWFjaChjID0+IGlucHV0LmNsYXNzTGlzdC5hZGQoYykpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpbnB1dE5hbWUpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGlucHV0TmFtZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdjb2xzJywgMzApO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncm93cycsIDEwKTtcblxuICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChpbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURyb3Bkb3duKGlucHV0TmFtZSwgaW5wdXRQcm9tcHQsIFxuICAgIGlucHV0TGFiZWxDbGFzc0xpc3QsIGlucHV0QXJlYUNsYXNzTGlzdCwgXG4gICAgcmVxdWlyZWQsIG9wdGlvbkxpc3QsIHBhcmVudE5vZGUpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaW5wdXRMYWJlbENsYXNzTGlzdC5mb3JFYWNoKGMgPT4gbGFiZWwuY2xhc3NMaXN0LmFkZChjKSk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dE5hbWUpO1xuICAgIGxhYmVsLmlubmVyVGV4dCA9IGlucHV0UHJvbXB0O1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBpbnB1dEFyZWFDbGFzc0xpc3QuZm9yRWFjaChjID0+IGlucHV0LmNsYXNzTGlzdC5hZGQoYykpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpbnB1dE5hbWUpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGlucHV0TmFtZSk7XG5cbiAgICBvcHRpb25MaXN0LmZvckVhY2gob3B0aW9uT2JqID0+IHtcbiAgICAgICAgY29uc3Qgb3B0R3JvdXAgPSBvcHRpb25PYmoub3B0aW9uR3JvdXBMYWJlbCA/IFxuICAgICAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGdyb3VwRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJyk7XG4gICAgICAgICAgICAgICAgb3B0Z3JvdXBFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFiZWwnLCBvcHRpb25PYmoub3B0aW9uR3JvdXBMYWJlbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGdyb3VwRWxlbWVudDtcbiAgICAgICAgICAgIH0pKCkgOiBpbnB1dDtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGsgaW4gb3B0aW9uT2JqLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBrKTtcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBvcHRpb25PYmoub3B0aW9uc1trXTtcbiAgICAgICAgICAgIG9wdEdyb3VwLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0R3JvdXAgIT09IGlucHV0KSB7XG4gICAgICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHRHcm91cCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChpbnB1dCk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ29udGFjdFRhYihjb250ZW50Q29udGFpbmVyKSB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWZvcm0tY29udGFpbmVyJyk7XG5cbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvcm0oKSk7XG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==