/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/demo-scripts/backgroundToggle.js":
/*!*****************************************************!*\
  !*** ./src/assets/demo-scripts/backgroundToggle.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initBackgroundToggle": function() { return /* binding */ initBackgroundToggle; }
/* harmony export */ });
function initBackgroundToggle() {
  const contrastButton = document.getElementById('contrast');
  const sectionElements = document.querySelectorAll('section');
  let state = {
    "active": 0
  };
  let bgProps = ['none', 'bg--primary-light-3', 'bg--primary-light-4', 'bg--secondary-light-3', 'bg--primary-base', 'bg--primary-light-1', 'bg--primary-light-2', 'bg--primary-dark-1', 'bg--primary-dark-2', 'bg--secondary-base', 'bg--secondary-light-1', 'bg--secondary-light-2', 'bg--secondary-dark-1', 'bg--secondary-dark-2'];
  for (let i = 0; i < sectionElements.length; i++) {
    sectionElements[i].classList.add(bgProps[state.active]);
  }
  contrastButton.addEventListener('click', e => {
    let prevActive = state.active;
    state.active = state.active < bgProps.length - 1 ? state.active + 1 : 0;
    for (let i = 0; i < sectionElements.length; i++) {
      if (sectionElements[i].classList.length !== 0) {
        sectionElements[i].classList.replace(bgProps[prevActive], bgProps[state.active]);
      } else {
        sectionElements[i].classList.add(bgProps[state.active]);
      }
    }
  });
}
;

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************************!*\
  !*** ./src/demos/links/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_demo_scripts_backgroundToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/demo-scripts/backgroundToggle */ "./src/assets/demo-scripts/backgroundToggle.js");

(0,_assets_demo_scripts_backgroundToggle__WEBPACK_IMPORTED_MODULE_0__.initBackgroundToggle)();
}();
/******/ })()
;
//# sourceMappingURL=index.html.js.map