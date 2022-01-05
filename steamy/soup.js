/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./uncooked/ingredients.js":
/*!*********************************!*\
  !*** ./uncooked/ingredients.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _soupDays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./soupDays */ \"./uncooked/soupDays.js\");\n\r\n\r\nlet index = 0;\r\nconst soupParagraph = document.getElementById('soup');\r\nconst dayParagraph = document.getElementById('day');\r\nconst nextButton = document.getElementById('next');\r\nconst previousButton = document.getElementById('previous');\r\nconst setSoupAndDay = () => {\r\n  soupParagraph.innerHTML = _soupDays__WEBPACK_IMPORTED_MODULE_0__.soups[index];\r\n  dayParagraph.innerHTML = _soupDays__WEBPACK_IMPORTED_MODULE_0__.days[index];\r\n}\r\nsetSoupAndDay();\r\nconst tomorrow = () => {\r\n  index = (index + 1) % _soupDays__WEBPACK_IMPORTED_MODULE_0__.days.length;\r\n  setSoupAndDay();\r\n}\r\nnextButton.addEventListener('click', tomorrow);\r\nconst yesterday = () => {\r\n  index = (index - 1 + _soupDays__WEBPACK_IMPORTED_MODULE_0__.days.length) % _soupDays__WEBPACK_IMPORTED_MODULE_0__.days.length;\r\n  setSoupAndDay();\r\n}\r\npreviousButton.addEventListener('click', yesterday);\n\n//# sourceURL=webpack://blank-workspace/./uncooked/ingredients.js?");

/***/ }),

/***/ "./uncooked/soupDays.js":
/*!******************************!*\
  !*** ./uncooked/soupDays.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"soups\": () => (/* binding */ soups),\n/* harmony export */   \"days\": () => (/* binding */ days)\n/* harmony export */ });\nconst days = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'];\r\nconst soups = ['Clam Chowder', 'Minestrone', 'Chicken Noodle', 'Tortilla', 'Gazpacho', 'Wonton', 'Tom Yum'];\r\n\n\n//# sourceURL=webpack://blank-workspace/./uncooked/soupDays.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./uncooked/ingredients.js");
/******/ 	
/******/ })()
;