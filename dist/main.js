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

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Footer = () => {
  const footer = document.createElement('footer');
  const footerClasses = `bg-black w-full h-auto text-white px-[40px] py-[80px] flex-col space-y-20`;
  footer.classList = footerClasses;
  footer.innerHTML = `
  <div class="flex-col h-500px space-y-8">

    <div class="w-full flex justify-between">
      logo
      <aside class="flex justify-center items-center h-auto gap-6">
        <span>Daj znać, co możemy dla Ciebie zrobic!</span>
        <button class='w-auto h-auto bg-green-700 py-3 px-6 rounded-full'>
          Skontaktuj się z nami
        </button>
      </aside>
    </div>

    <div class="w-full h-[1px] bg-slate-300"></div>


    <div class="flex w-full h-10 justify-between">
      <ul class="flex gap-8" >
        <li>Kontakt</li>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Linkedin</li>
      </ul>
      <div class="flex gap-8">
        <span>000-000-000</span>
        <span>giarddesign@kontakt.pl</span>
      </div>
    </div>

    </div>


    <div class="flex justify-between">

      <div>
        <span>Prawa zastrzeżone @ 2022</span>
      </div>
    
      <div>
        <span>made by</span>
        logo
      </div>

    </div>

  `;

  document.body.appendChild(footer);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ "./src/components/nav.js":
/*!*******************************!*\
  !*** ./src/components/nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import logo from '../../assets/giarddesign.svg';
// import arrowIcon from '../../assets/arrowDown.svg';
// import searchIcon from '../../assets/search.svg';

const Nav = () => {
  const navbar = document.createElement('nav');
  navbar.classList =
    'bg-slate-100 w-full p-6 flex justify-between items-center sticky top-0';

  // const logoContainer = document.createElement('object');
  // logoContainer.classList = 'w-[400px] h-auto';
  // logoContainer.setAttribute('type', 'image/svg');
  // logoContainer.setAttribute('data', '../../assets/giarddesign.svg');
  //   logoContainer.innerHTML = logo;

  //   logoContainer.appendChild(logoImage);
  const logoContainer = document.createElement('span');
  logoContainer.textContent = 'Logo';

  const links = document.createElement('div');
  links.classList = 'flex gap-10 [&>*]:cursor-pointer';

  const offersLink = document.createElement('a');
  offersLink.setAttribute('href', '#offers');
  offersLink.textContent = 'Oferta';

  // const arrowContainer = document.createElementNS(
  //   'http://www.w3.org/2000/svg',
  //   'svg'
  // );
  // arrowContainer.classList.add('w-4');
  // const arrowImage = document.createElementNS(
  //   'http://www.w3.org/2000/svg',
  //   'use'
  // );
  // arrowImage.setAttribute('href', arrowIcon);
  // arrowImage.setAttributeNS(
  //   'http://www.w3.org/1999/xlink',
  //   'xlink:href',
  //   arrowIcon
  // );
  // arrowContainer.appendChild(arrowImage);
  const arrowContainer = document.createElement('span');
  arrowContainer.textContent = '^';

  offersLink.appendChild(arrowContainer);

  const aboutLink = document.createElement('a');
  aboutLink.setAttribute('href', '#about');
  aboutLink.textContent = 'O firmie';
  offersLink.classList = 'flex gap-2 justify-center items-center h-auto';

  const registerLink = document.createElement('a');
  registerLink.setAttribute('href', '#register');
  registerLink.textContent = 'Realizacje';
  registerLink.classList = 'text-center';

  const contactLink = document.createElement('a');
  contactLink.setAttribute('href', '#contact');
  contactLink.textContent = 'Kontakt';

  const searchContainer = document.createElement('span');
  searchContainer.textContent = 'Q';

  // const searchContainer = document.createElementNS(
  //   'http://www.w3.org/2000/svg',
  //   'svg'
  // );
  // searchContainer.classList.add('w-6');
  // //   const searchImage = document.createElementNS(
  // //     'http://www.w3.org/2000/svg',
  // //     'image'
  // //   );
  // //   searchImage.setAttribute('href', searchIcon);
  // //   searchImage.setAttribute('width', '100%');
  // //   searchImage.setAttribute('height', '100%');
  // const svgContainer = document.createElement('object');
  // svgContainer.setAttribute('type', 'image/svg+xml');
  // svgContainer.setAttribute('data', 'search.svg');

  // searchContainer.appendChild(svgContainer);

  links.appendChild(offersLink);
  links.appendChild(aboutLink);
  links.appendChild(registerLink);
  links.appendChild(contactLink);
  links.appendChild(searchContainer);
  navbar.appendChild(logoContainer);
  navbar.appendChild(links);

  document.body.appendChild(navbar);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav */ "./src/components/nav.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer */ "./src/components/footer.js");




(0,_components_nav__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();

// document.body.classList.add('bg-amber-500');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3REdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsR0FBRyxFQUFDOzs7Ozs7O1VDN0ZuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDYztBQUNNOztBQUV6QywyREFBRztBQUNILDhEQUFNOztBQUVOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2NvbXBvbmVudHMvbmF2LmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgY29uc3QgZm9vdGVyQ2xhc3NlcyA9IGBiZy1ibGFjayB3LWZ1bGwgaC1hdXRvIHRleHQtd2hpdGUgcHgtWzQwcHhdIHB5LVs4MHB4XSBmbGV4LWNvbCBzcGFjZS15LTIwYDtcclxuICBmb290ZXIuY2xhc3NMaXN0ID0gZm9vdGVyQ2xhc3NlcztcclxuICBmb290ZXIuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJmbGV4LWNvbCBoLTUwMHB4IHNwYWNlLXktOFwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgbG9nb1xyXG4gICAgICA8YXNpZGUgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWF1dG8gZ2FwLTZcIj5cclxuICAgICAgICA8c3Bhbj5EYWogem5hxIcsIGNvIG1vxbxlbXkgZGxhIENpZWJpZSB6cm9iaWMhPC9zcGFuPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9J3ctYXV0byBoLWF1dG8gYmctZ3JlZW4tNzAwIHB5LTMgcHgtNiByb3VuZGVkLWZ1bGwnPlxyXG4gICAgICAgICAgU2tvbnRha3R1aiBzacSZIHogbmFtaVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2FzaWRlPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInctZnVsbCBoLVsxcHhdIGJnLXNsYXRlLTMwMFwiPjwvZGl2PlxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmxleCB3LWZ1bGwgaC0xMCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgPHVsIGNsYXNzPVwiZmxleCBnYXAtOFwiID5cclxuICAgICAgICA8bGk+S29udGFrdDwvbGk+XHJcbiAgICAgICAgPGxpPkluc3RhZ3JhbTwvbGk+XHJcbiAgICAgICAgPGxpPkZhY2Vib29rPC9saT5cclxuICAgICAgICA8bGk+TGlua2VkaW48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBnYXAtOFwiPlxyXG4gICAgICAgIDxzcGFuPjAwMC0wMDAtMDAwPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPmdpYXJkZGVzaWduQGtvbnRha3QucGw8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3Bhbj5QcmF3YSB6YXN0cnplxbxvbmUgQCAyMDIyPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzcGFuPm1hZGUgYnk8L3NwYW4+XHJcbiAgICAgICAgbG9nb1xyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCIvLyBpbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9hc3NldHMvZ2lhcmRkZXNpZ24uc3ZnJztcclxuLy8gaW1wb3J0IGFycm93SWNvbiBmcm9tICcuLi8uLi9hc3NldHMvYXJyb3dEb3duLnN2Zyc7XHJcbi8vIGltcG9ydCBzZWFyY2hJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9zZWFyY2guc3ZnJztcclxuXHJcbmNvbnN0IE5hdiA9ICgpID0+IHtcclxuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICBuYXZiYXIuY2xhc3NMaXN0ID1cclxuICAgICdiZy1zbGF0ZS0xMDAgdy1mdWxsIHAtNiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgc3RpY2t5IHRvcC0wJztcclxuXHJcbiAgLy8gY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xyXG4gIC8vIGxvZ29Db250YWluZXIuY2xhc3NMaXN0ID0gJ3ctWzQwMHB4XSBoLWF1dG8nO1xyXG4gIC8vIGxvZ29Db250YWluZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ltYWdlL3N2ZycpO1xyXG4gIC8vIGxvZ29Db250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhJywgJy4uLy4uL2Fzc2V0cy9naWFyZGRlc2lnbi5zdmcnKTtcclxuICAvLyAgIGxvZ29Db250YWluZXIuaW5uZXJIVE1MID0gbG9nbztcclxuXHJcbiAgLy8gICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29JbWFnZSk7XHJcbiAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBsb2dvQ29udGFpbmVyLnRleHRDb250ZW50ID0gJ0xvZ28nO1xyXG5cclxuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxpbmtzLmNsYXNzTGlzdCA9ICdmbGV4IGdhcC0xMCBbJj4qXTpjdXJzb3ItcG9pbnRlcic7XHJcblxyXG4gIGNvbnN0IG9mZmVyc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgb2ZmZXJzTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI29mZmVycycpO1xyXG4gIG9mZmVyc0xpbmsudGV4dENvbnRlbnQgPSAnT2ZlcnRhJztcclxuXHJcbiAgLy8gY29uc3QgYXJyb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgLy8gICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gIC8vICAgJ3N2ZydcclxuICAvLyApO1xyXG4gIC8vIGFycm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ctNCcpO1xyXG4gIC8vIGNvbnN0IGFycm93SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgLy8gICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gIC8vICAgJ3VzZSdcclxuICAvLyApO1xyXG4gIC8vIGFycm93SW1hZ2Uuc2V0QXR0cmlidXRlKCdocmVmJywgYXJyb3dJY29uKTtcclxuICAvLyBhcnJvd0ltYWdlLnNldEF0dHJpYnV0ZU5TKFxyXG4gIC8vICAgJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLFxyXG4gIC8vICAgJ3hsaW5rOmhyZWYnLFxyXG4gIC8vICAgYXJyb3dJY29uXHJcbiAgLy8gKTtcclxuICAvLyBhcnJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJvd0ltYWdlKTtcclxuICBjb25zdCBhcnJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBhcnJvd0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICdeJztcclxuXHJcbiAgb2ZmZXJzTGluay5hcHBlbmRDaGlsZChhcnJvd0NvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBhYm91dExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyNhYm91dCcpO1xyXG4gIGFib3V0TGluay50ZXh0Q29udGVudCA9ICdPIGZpcm1pZSc7XHJcbiAgb2ZmZXJzTGluay5jbGFzc0xpc3QgPSAnZmxleCBnYXAtMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1hdXRvJztcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIHJlZ2lzdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI3JlZ2lzdGVyJyk7XHJcbiAgcmVnaXN0ZXJMaW5rLnRleHRDb250ZW50ID0gJ1JlYWxpemFjamUnO1xyXG4gIHJlZ2lzdGVyTGluay5jbGFzc0xpc3QgPSAndGV4dC1jZW50ZXInO1xyXG5cclxuICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBjb250YWN0TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI2NvbnRhY3QnKTtcclxuICBjb250YWN0TGluay50ZXh0Q29udGVudCA9ICdLb250YWt0JztcclxuXHJcbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHNlYXJjaENvbnRhaW5lci50ZXh0Q29udGVudCA9ICdRJztcclxuXHJcbiAgLy8gY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gIC8vICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcclxuICAvLyAgICdzdmcnXHJcbiAgLy8gKTtcclxuICAvLyBzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndy02Jyk7XHJcbiAgLy8gLy8gICBjb25zdCBzZWFyY2hJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAvLyAvLyAgICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcclxuICAvLyAvLyAgICAgJ2ltYWdlJ1xyXG4gIC8vIC8vICAgKTtcclxuICAvLyAvLyAgIHNlYXJjaEltYWdlLnNldEF0dHJpYnV0ZSgnaHJlZicsIHNlYXJjaEljb24pO1xyXG4gIC8vIC8vICAgc2VhcmNoSW1hZ2Uuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxMDAlJyk7XHJcbiAgLy8gLy8gICBzZWFyY2hJbWFnZS5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcxMDAlJyk7XHJcbiAgLy8gY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0Jyk7XHJcbiAgLy8gc3ZnQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndHlwZScsICdpbWFnZS9zdmcreG1sJyk7XHJcbiAgLy8gc3ZnQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YScsICdzZWFyY2guc3ZnJyk7XHJcblxyXG4gIC8vIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzdmdDb250YWluZXIpO1xyXG5cclxuICBsaW5rcy5hcHBlbmRDaGlsZChvZmZlcnNMaW5rKTtcclxuICBsaW5rcy5hcHBlbmRDaGlsZChhYm91dExpbmspO1xyXG4gIGxpbmtzLmFwcGVuZENoaWxkKHJlZ2lzdGVyTGluayk7XHJcbiAgbGlua3MuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xyXG4gIGxpbmtzLmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lcik7XHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpO1xyXG4gIG5hdmJhci5hcHBlbmRDaGlsZChsaW5rcyk7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmF2YmFyKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBOYXYgZnJvbSAnLi9jb21wb25lbnRzL25hdic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9mb290ZXInO1xuXG5OYXYoKTtcbkZvb3RlcigpO1xuXG4vLyBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JnLWFtYmVyLTUwMCcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9