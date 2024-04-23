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

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// Модальное окно\r\nconst BODY = document.body;\r\n\r\n// Прелодер\r\nconst mainPreloader = document.querySelector('.preloader');\r\nconst hideMainPreloader = () => {\r\n  mainPreloader.classList.add('preloader_hidden');\r\n};\r\n\r\n// Модальное окно\r\nconst modalContainer = document.querySelector('.popup_content_monitoring');\r\nconst modalContent = modalContainer.querySelector('.popup__body');\r\nconst companyCards = document.querySelectorAll('.company-card');\r\nconst openModalContainer = function () {\r\n  let windowScroll = window.innerWidth - document.documentElement.clientWidth;\r\n  if (windowScroll != 0)\r\n    document.documentElement.style.paddingRight = windowScroll + 'px';\r\n  BODY.style.overflow = 'hidden';\r\n  modalContainer.classList.add('popup_opened');\r\n};\r\nconst closeModalContainer = function () {\r\n  document.documentElement.style.paddingRight = '';\r\n  BODY.style.overflow = '';\r\n  modalContainer.classList.remove('popup_opened');\r\n};\r\nconst hideTableContent = function () {\r\n  Array.from(modalContent.children).map((children) => {\r\n    children.classList.add('--hide');\r\n  });\r\n};\r\nconst openPopupTableContent = function (element) {\r\n  hideTableContent();\r\n  document\r\n    .getElementById(element.dataset.id + '_table')\r\n    ?.classList.remove('--hide');\r\n  openModalContainer();\r\n};\r\n\r\ncompanyCards.forEach((element) =>\r\n  element.addEventListener('click', () => {\r\n    openPopupTableContent(element);\r\n  })\r\n);\r\n\r\nmodalContainer.addEventListener('click', (evt) => {\r\n  if (\r\n    evt.target.classList.contains('popup_content_monitoring') ||\r\n    evt.target.classList.contains('popup__close-button')\r\n  ) {\r\n    closeModalContainer();\r\n  }\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  hideMainPreloader();\r\n});\r\n\n\n//# sourceURL=webpack://health-heuristics/./src/scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;