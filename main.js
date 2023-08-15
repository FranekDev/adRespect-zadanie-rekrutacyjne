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

/***/ "./src/components/about.js":
/*!*********************************!*\
  !*** ./src/components/about.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const About = () => {
  const section = document.createElement('section');

  section.innerHTML = `
    <div class="w-full h-full bg-green-800 md:flex">
    <div class="w-1/2 bg-slate-300"></div>
    <div class="w-1/2 text-[#F5F0EC] flex items-center justify-center h-screen">
        <div class="w-4/5 h-1/2 space-y-20">
            <div class="space-y-8">
                <div class="space-y-3">
                    <div class="text-sm">O firmie</div>
                    <div class="md:text-5xl w-fit">Tworzymy</br> z <i>pasją</i></div>
                </div>
                <div>
                    Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą wykwalifikowani projektanci oraz architekci, których zadaniem jest rozpoznanie i realizacja potrzeb każdego Klienta. Nasza specjalizacja to przestrzenie nowoczesne, które charakteryzuje minimalizm, geometria i elegancka prostota. Tworzymy ogrody małoobsługowe, dostosowane do współczesnego trybu życia.
                </div>
            </div>
            <div>
                <a href="" class="border-solid border-2 border-[#F5F0EC]-800 px-[24px] py-[12px] rounded-full">Poznaj nas bliżej -></a>
            </div>
        </div>
    </div>
    </div>
  `;

  document.body.appendChild(section);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


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
  <div class="flex-col space-y-8">

    <div class="w-full flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between">
      logo
      <aside class="flex justify-center items-center h-auto gap-6 text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
        <div class="w-32 md:w-auto lg:w-auto xl:w-auto 2xl:w-auto">Daj znać, co możemy dla Ciebie zrobic!</div>
        <button class='w-git h-auto bg-green-700 py-2 px-3 rounded-full'>
          Skontaktuj się z nami
        </button>
      </aside>
    </div>

    <div class="w-full h-[1px] bg-slate-300"></div>


    <div class="flex w-full md:h-10 xl:h-10 2xl:h-10 lg:h-10 h-auto justify-between">
      <ul class="flex-col md:flex-row xl:flex 2xl:flex lg:flex gap-8" >
        <li>Kontakt</li>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Linkedin</li>
      </ul>
      <div class="flex-col lg:flex-row md:flex-row xl:flex-row 2xl:flex-row gap-8 w-fit">
        <div>000-000-000</div>
        <div>giarddesign@kontakt.pl</div>
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

/***/ "./src/components/hero.js":
/*!********************************!*\
  !*** ./src/components/hero.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Hero = () => {
  const main = document.createElement('main');

  main.innerHTML = `
  <div class="flex w-full h-screen">
  
    <aside class="flex-col w-3/4 h-auto space-y-16 bg-[#DCC1AB] px-10 py-16">
        <div class="space-y-10">
            <div class="text-6xl">Nowoczesna aranżacja Twojego ogrodu</div>
            
            <div class="text-base">Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.</div>
        </div>

        <div class="flex justify-between [&>a]:cursor-pointer">
            <button class="bg-green-800 text-white px-[24px] py-[12px] rounded-full">Skontaktuj się z nami</button>
            <a href="realizacje" class="border-solid border-2 border-green-800 px-[24px] py-[12px] rounded-full text-green-800">Zobacz nasze realizacje</a>
        </div>

    </aside>

    <div class=" h-auto w-full relative">
        <div class="flex bottom-0 right-0 absolute">
            <button class="w-[50px] h-[50px] flex justify-center items-center bg-slate-200"><-</button>
            <button class="w-[50px] h-[50px] flex justify-center items-center bg-slate-300">-></button>
        </div>
    </div>
  
  </div>
  `;

  document.body.appendChild(main);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


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


/***/ }),

/***/ "./src/components/offer.js":
/*!*********************************!*\
  !*** ./src/components/offer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Offer = (title, description) => {
  const offerContainer = document.querySelector('.offers-view');
  const page = document.createElement('div');
  page.innerHTML = `
  <div class="flex-con bg-white md:w-80 w-72 h-auto space-y-10 md:space-y-20 p-5 rounded-xl">
    <div>
        <div>Icona</div>
        <div class="md:text-2xl text-xl">${title}</div>
        <div class="md:text-base text-sm">${description}</div>
    </div>
    <div class="text-green-800 flex justify-start items-center space-x-2 border-b-2 border-green-800 w-fit">
        <div class="md:text-base text-sm">
        Dowiedz się więcej
        </div>
        <div>-></div>
        </div>
  </div>
  `;
  offerContainer.appendChild(page);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Offer);


/***/ }),

/***/ "./src/components/offers.js":
/*!**********************************!*\
  !*** ./src/components/offers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _offer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offer */ "./src/components/offer.js");


const Offers = () => {
  const section = document.createElement('section');
  section.classList =
    'flex-col w-full h-auto md:h-screen space-y-10 bg-[#F5F0EC] p-5';

  section.innerHTML = `
  <div class="max-w-[1040px] flex-col space-y-5 w-3/4 m-auto">
    <div class="text-xs text-green-800">Oferta</div>
    <div class="md:text-5xl text-3xl">Działamy <i>kompleksowo</i></div>
    <div class="md:text-base w-full text-md">
        Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne. Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie, a na każdym etapie posłużymy radą i wieloletnim doświadczeniem. 
    </div>
  </div>

  <div class="offers-view md:px-5 lg:px-5 xl:px-5 2xl:px-5 flex justify-center items-center w-full flex-wrap space-y-5"></div>
  `;

  document.body.appendChild(section);

  const firstOfferTitle = 'Projekty';
  const firstOfferDescription =
    'Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.';
  (0,_offer__WEBPACK_IMPORTED_MODULE_0__["default"])(firstOfferTitle, firstOfferDescription);

  const secondOfferTitle = 'Wizualizacje';
  const secondOfferDescription =
    'Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.';
  (0,_offer__WEBPACK_IMPORTED_MODULE_0__["default"])(secondOfferTitle, secondOfferDescription);

  const thirdOfferTitle = 'Realizacje';
  const thirdOfferDescription =
    'Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.';
  (0,_offer__WEBPACK_IMPORTED_MODULE_0__["default"])(thirdOfferTitle, thirdOfferDescription);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Offers);


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
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/hero */ "./src/components/hero.js");
/* harmony import */ var _components_offers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/offers */ "./src/components/offers.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about */ "./src/components/about.js");







(0,_components_nav__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_hero__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_components_offers__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_components_about__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();

// document.body.classList.add('bg-amber-500');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3REdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNqQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxNQUFNO0FBQ2pELDRDQUE0QyxZQUFZO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBSztBQUNQO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7VUNyQ3RCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNjO0FBQ007QUFDSjtBQUNJO0FBQ0Y7O0FBRXZDLDJEQUFHO0FBQ0gsNERBQUk7QUFDSiw4REFBTTtBQUNOLDZEQUFLO0FBQ0wsOERBQU07O0FBRU4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL2Fib3V0LmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9oZXJvLmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL25hdi5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9vZmZlci5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9vZmZlcnMuanMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcblxyXG4gIHNlY3Rpb24uaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cInctZnVsbCBoLWZ1bGwgYmctZ3JlZW4tODAwIG1kOmZsZXhcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ3LTEvMiBiZy1zbGF0ZS0zMDBcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ3LTEvMiB0ZXh0LVsjRjVGMEVDXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LTQvNSBoLTEvMiBzcGFjZS15LTIwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZS15LThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZS15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zbVwiPk8gZmlybWllPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kOnRleHQtNXhsIHctZml0XCI+VHdvcnp5bXk8L2JyPiB6IDxpPnBhc2rEhTwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICBLYcW8ZHkgcHJvamVrdCB0byBub3dlIHd5endhbmllLiBEbGF0ZWdvIG5hc3ogemVzcMOzxYIgdHdvcnrEhSB3eWt3YWxpZmlrb3dhbmkgcHJvamVrdGFuY2kgb3JheiBhcmNoaXRla2NpLCBrdMOzcnljaCB6YWRhbmllbSBqZXN0IHJvenBvem5hbmllIGkgcmVhbGl6YWNqYSBwb3RyemViIGthxbxkZWdvIEtsaWVudGEuIE5hc3phIHNwZWNqYWxpemFjamEgdG8gcHJ6ZXN0cnplbmllIG5vd29jemVzbmUsIGt0w7NyZSBjaGFyYWt0ZXJ5enVqZSBtaW5pbWFsaXptLCBnZW9tZXRyaWEgaSBlbGVnYW5ja2EgcHJvc3RvdGEuIFR3b3J6eW15IG9ncm9keSBtYcWCb29ic8WCdWdvd2UsIGRvc3Rvc293YW5lIGRvIHdzcMOzxYJjemVzbmVnbyB0cnlidSDFvHljaWEuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLVsjRjVGMEVDXS04MDAgcHgtWzI0cHhdIHB5LVsxMnB4XSByb3VuZGVkLWZ1bGxcIj5Qb3puYWogbmFzIGJsacW8ZWogLT48L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiIsImNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICBjb25zdCBmb290ZXJDbGFzc2VzID0gYGJnLWJsYWNrIHctZnVsbCBoLWF1dG8gdGV4dC13aGl0ZSBweC1bNDBweF0gcHktWzgwcHhdIGZsZXgtY29sIHNwYWNlLXktMjBgO1xyXG4gIGZvb3Rlci5jbGFzc0xpc3QgPSBmb290ZXJDbGFzc2VzO1xyXG4gIGZvb3Rlci5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImZsZXgtY29sIHNwYWNlLXktOFwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgZmxleC1jb2wgbWQ6ZmxleC1yb3cgbGc6ZmxleC1yb3cgeGw6ZmxleC1yb3cgMnhsOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICBsb2dvXHJcbiAgICAgIDxhc2lkZSBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtYXV0byBnYXAtNiB0ZXh0LXNtIG1kOnRleHQtYmFzZSBsZzp0ZXh0LWJhc2UgeGw6dGV4dC1iYXNlIDJ4bDp0ZXh0LWJhc2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidy0zMiBtZDp3LWF1dG8gbGc6dy1hdXRvIHhsOnctYXV0byAyeGw6dy1hdXRvXCI+RGFqIHpuYcSHLCBjbyBtb8W8ZW15IGRsYSBDaWViaWUgenJvYmljITwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9J3ctZ2l0IGgtYXV0byBiZy1ncmVlbi03MDAgcHktMiBweC0zIHJvdW5kZWQtZnVsbCc+XHJcbiAgICAgICAgICBTa29udGFrdHVqIHNpxJkgeiBuYW1pXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvYXNpZGU+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGgtWzFweF0gYmctc2xhdGUtMzAwXCI+PC9kaXY+XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IHctZnVsbCBtZDpoLTEwIHhsOmgtMTAgMnhsOmgtMTAgbGc6aC0xMCBoLWF1dG8ganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cImZsZXgtY29sIG1kOmZsZXgtcm93IHhsOmZsZXggMnhsOmZsZXggbGc6ZmxleCBnYXAtOFwiID5cclxuICAgICAgICA8bGk+S29udGFrdDwvbGk+XHJcbiAgICAgICAgPGxpPkluc3RhZ3JhbTwvbGk+XHJcbiAgICAgICAgPGxpPkZhY2Vib29rPC9saT5cclxuICAgICAgICA8bGk+TGlua2VkaW48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleC1jb2wgbGc6ZmxleC1yb3cgbWQ6ZmxleC1yb3cgeGw6ZmxleC1yb3cgMnhsOmZsZXgtcm93IGdhcC04IHctZml0XCI+XHJcbiAgICAgICAgPGRpdj4wMDAtMDAwLTAwMDwvZGl2PlxyXG4gICAgICAgIDxkaXY+Z2lhcmRkZXNpZ25Aa29udGFrdC5wbDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+UHJhd2EgemFzdHJ6ZcW8b25lIEAgMjAyMjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3Bhbj5tYWRlIGJ5PC9zcGFuPlxyXG4gICAgICAgIGxvZ29cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIGA7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiY29uc3QgSGVybyA9ICgpID0+IHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5cclxuICBtYWluLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiZmxleCB3LWZ1bGwgaC1zY3JlZW5cIj5cclxuICBcclxuICAgIDxhc2lkZSBjbGFzcz1cImZsZXgtY29sIHctMy80IGgtYXV0byBzcGFjZS15LTE2IGJnLVsjRENDMUFCXSBweC0xMCBweS0xNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZS15LTEwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LTZ4bFwiPk5vd29jemVzbmEgYXJhbsW8YWNqYSBUd29qZWdvIG9ncm9kdTwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtYmFzZVwiPk1hcmthIEdpYXJkRGVzaWduIHRvIHdpZWxvbGV0bmllIGRvxZt3aWFkY3plbmllIGkgd3lzb2thIGVzdGV0eWthIHJlYWxpemFjamkuIE9mZXJ1amVteSBrb21wbGVrc293eSB6YWtyZXMgdXPFgnVnIHogaW5keXdpZHVhbG55bSBwb2RlasWbY2llbSBkbyBrYcW8ZGVnbyBwcm9qZWt0dS48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIFsmPmFdOmN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJiZy1ncmVlbi04MDAgdGV4dC13aGl0ZSBweC1bMjRweF0gcHktWzEycHhdIHJvdW5kZWQtZnVsbFwiPlNrb250YWt0dWogc2nEmSB6IG5hbWk8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cInJlYWxpemFjamVcIiBjbGFzcz1cImJvcmRlci1zb2xpZCBib3JkZXItMiBib3JkZXItZ3JlZW4tODAwIHB4LVsyNHB4XSBweS1bMTJweF0gcm91bmRlZC1mdWxsIHRleHQtZ3JlZW4tODAwXCI+Wm9iYWN6IG5hc3plIHJlYWxpemFjamU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9hc2lkZT5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiIGgtYXV0byB3LWZ1bGwgcmVsYXRpdmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBib3R0b20tMCByaWdodC0wIGFic29sdXRlXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ3LVs1MHB4XSBoLVs1MHB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1zbGF0ZS0yMDBcIj48LTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidy1bNTBweF0gaC1bNTBweF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctc2xhdGUtMzAwXCI+LT48L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIFxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iLCIvLyBpbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9hc3NldHMvZ2lhcmRkZXNpZ24uc3ZnJztcclxuLy8gaW1wb3J0IGFycm93SWNvbiBmcm9tICcuLi8uLi9hc3NldHMvYXJyb3dEb3duLnN2Zyc7XHJcbi8vIGltcG9ydCBzZWFyY2hJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9zZWFyY2guc3ZnJztcclxuXHJcbmNvbnN0IE5hdiA9ICgpID0+IHtcclxuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICBuYXZiYXIuY2xhc3NMaXN0ID1cclxuICAgICdiZy1zbGF0ZS0xMDAgdy1mdWxsIHAtNiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgc3RpY2t5IHRvcC0wJztcclxuXHJcbiAgLy8gY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xyXG4gIC8vIGxvZ29Db250YWluZXIuY2xhc3NMaXN0ID0gJ3ctWzQwMHB4XSBoLWF1dG8nO1xyXG4gIC8vIGxvZ29Db250YWluZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ltYWdlL3N2ZycpO1xyXG4gIC8vIGxvZ29Db250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhJywgJy4uLy4uL2Fzc2V0cy9naWFyZGRlc2lnbi5zdmcnKTtcclxuICAvLyAgIGxvZ29Db250YWluZXIuaW5uZXJIVE1MID0gbG9nbztcclxuXHJcbiAgLy8gICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29JbWFnZSk7XHJcbiAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBsb2dvQ29udGFpbmVyLnRleHRDb250ZW50ID0gJ0xvZ28nO1xyXG5cclxuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxpbmtzLmNsYXNzTGlzdCA9ICdmbGV4IGdhcC0xMCBbJj4qXTpjdXJzb3ItcG9pbnRlcic7XHJcblxyXG4gIGNvbnN0IG9mZmVyc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgb2ZmZXJzTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI29mZmVycycpO1xyXG4gIG9mZmVyc0xpbmsudGV4dENvbnRlbnQgPSAnT2ZlcnRhJztcclxuXHJcbiAgLy8gY29uc3QgYXJyb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgLy8gICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gIC8vICAgJ3N2ZydcclxuICAvLyApO1xyXG4gIC8vIGFycm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ctNCcpO1xyXG4gIC8vIGNvbnN0IGFycm93SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgLy8gICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gIC8vICAgJ3VzZSdcclxuICAvLyApO1xyXG4gIC8vIGFycm93SW1hZ2Uuc2V0QXR0cmlidXRlKCdocmVmJywgYXJyb3dJY29uKTtcclxuICAvLyBhcnJvd0ltYWdlLnNldEF0dHJpYnV0ZU5TKFxyXG4gIC8vICAgJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLFxyXG4gIC8vICAgJ3hsaW5rOmhyZWYnLFxyXG4gIC8vICAgYXJyb3dJY29uXHJcbiAgLy8gKTtcclxuICAvLyBhcnJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJvd0ltYWdlKTtcclxuICBjb25zdCBhcnJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBhcnJvd0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICdeJztcclxuXHJcbiAgb2ZmZXJzTGluay5hcHBlbmRDaGlsZChhcnJvd0NvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBhYm91dExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyNhYm91dCcpO1xyXG4gIGFib3V0TGluay50ZXh0Q29udGVudCA9ICdPIGZpcm1pZSc7XHJcbiAgb2ZmZXJzTGluay5jbGFzc0xpc3QgPSAnZmxleCBnYXAtMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1hdXRvJztcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIHJlZ2lzdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI3JlZ2lzdGVyJyk7XHJcbiAgcmVnaXN0ZXJMaW5rLnRleHRDb250ZW50ID0gJ1JlYWxpemFjamUnO1xyXG4gIHJlZ2lzdGVyTGluay5jbGFzc0xpc3QgPSAndGV4dC1jZW50ZXInO1xyXG5cclxuICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBjb250YWN0TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI2NvbnRhY3QnKTtcclxuICBjb250YWN0TGluay50ZXh0Q29udGVudCA9ICdLb250YWt0JztcclxuXHJcbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHNlYXJjaENvbnRhaW5lci50ZXh0Q29udGVudCA9ICdRJztcclxuXHJcbiAgLy8gY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gIC8vICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcclxuICAvLyAgICdzdmcnXHJcbiAgLy8gKTtcclxuICAvLyBzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndy02Jyk7XHJcbiAgLy8gLy8gICBjb25zdCBzZWFyY2hJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAvLyAvLyAgICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcclxuICAvLyAvLyAgICAgJ2ltYWdlJ1xyXG4gIC8vIC8vICAgKTtcclxuICAvLyAvLyAgIHNlYXJjaEltYWdlLnNldEF0dHJpYnV0ZSgnaHJlZicsIHNlYXJjaEljb24pO1xyXG4gIC8vIC8vICAgc2VhcmNoSW1hZ2Uuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxMDAlJyk7XHJcbiAgLy8gLy8gICBzZWFyY2hJbWFnZS5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcxMDAlJyk7XHJcbiAgLy8gY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0Jyk7XHJcbiAgLy8gc3ZnQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndHlwZScsICdpbWFnZS9zdmcreG1sJyk7XHJcbiAgLy8gc3ZnQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YScsICdzZWFyY2guc3ZnJyk7XHJcblxyXG4gIC8vIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzdmdDb250YWluZXIpO1xyXG5cclxuICBsaW5rcy5hcHBlbmRDaGlsZChvZmZlcnNMaW5rKTtcclxuICBsaW5rcy5hcHBlbmRDaGlsZChhYm91dExpbmspO1xyXG4gIGxpbmtzLmFwcGVuZENoaWxkKHJlZ2lzdGVyTGluayk7XHJcbiAgbGlua3MuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xyXG4gIGxpbmtzLmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lcik7XHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpO1xyXG4gIG5hdmJhci5hcHBlbmRDaGlsZChsaW5rcyk7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmF2YmFyKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuIiwiY29uc3QgT2ZmZXIgPSAodGl0bGUsIGRlc2NyaXB0aW9uKSA9PiB7XHJcbiAgY29uc3Qgb2ZmZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub2ZmZXJzLXZpZXcnKTtcclxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZS5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImZsZXgtY29uIGJnLXdoaXRlIG1kOnctODAgdy03MiBoLWF1dG8gc3BhY2UteS0xMCBtZDpzcGFjZS15LTIwIHAtNSByb3VuZGVkLXhsXCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+SWNvbmE8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6dGV4dC0yeGwgdGV4dC14bFwiPiR7dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kOnRleHQtYmFzZSB0ZXh0LXNtXCI+JHtkZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInRleHQtZ3JlZW4tODAwIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGJvcmRlci1iLTIgYm9yZGVyLWdyZWVuLTgwMCB3LWZpdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZDp0ZXh0LWJhc2UgdGV4dC1zbVwiPlxyXG4gICAgICAgIERvd2llZHogc2nEmSB3acSZY2VqXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj4tPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcbiAgb2ZmZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPZmZlcjtcclxuIiwiaW1wb3J0IE9mZmVyIGZyb20gJy4vb2ZmZXInO1xyXG5cclxuY29uc3QgT2ZmZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgc2VjdGlvbi5jbGFzc0xpc3QgPVxyXG4gICAgJ2ZsZXgtY29sIHctZnVsbCBoLWF1dG8gbWQ6aC1zY3JlZW4gc3BhY2UteS0xMCBiZy1bI0Y1RjBFQ10gcC01JztcclxuXHJcbiAgc2VjdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cIm1heC13LVsxMDQwcHhdIGZsZXgtY29sIHNwYWNlLXktNSB3LTMvNCBtLWF1dG9cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXhzIHRleHQtZ3JlZW4tODAwXCI+T2ZlcnRhPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWQ6dGV4dC01eGwgdGV4dC0zeGxcIj5EemlhxYJhbXkgPGk+a29tcGxla3Nvd288L2k+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWQ6dGV4dC1iYXNlIHctZnVsbCB0ZXh0LW1kXCI+XHJcbiAgICAgICAgT2ZlcnVqZW15IGtvbXBsZXRuxIUgb2JzxYJ1Z8SZIGlud2VzdHljamkgdGVyZW7Ds3cgemllbG9ueWNoLiBQcm9qZWt0dWplbXkgbm93b2N6ZXNuZSBvZ3JvZHkgcHJ6eWRvbW93ZSBvcmF6IHJlenlkZW5jam9uYWxuZS4gU3R3b3J6eW15IGRsYSBDaWViaWUgcHJvamVrdCwgendpenVhbGl6dWplbXkgZ28gaSB3Y2llbGlteSB3IMW8eWNpZSwgYSBuYSBrYcW8ZHltIGV0YXBpZSBwb3PFgnXFvHlteSByYWTEhSBpIHdpZWxvbGV0bmltIGRvxZt3aWFkY3plbmllbS4gXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cIm9mZmVycy12aWV3IG1kOnB4LTUgbGc6cHgtNSB4bDpweC01IDJ4bDpweC01IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBmbGV4LXdyYXAgc3BhY2UteS01XCI+PC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxuXHJcbiAgY29uc3QgZmlyc3RPZmZlclRpdGxlID0gJ1Byb2pla3R5JztcclxuICBjb25zdCBmaXJzdE9mZmVyRGVzY3JpcHRpb24gPVxyXG4gICAgJ1phcHJvamVrdHVqZW15IFR3w7NqIG9ncsOzZCB3IG5vd29jemVzbnltIHN0eWx1IGkgeiBuYWpsZXBzenltIHd5a29yenlzdGFuaWVtIGlzdG5pZWrEhWNlaiBwcnplc3RyemVuaS4nO1xyXG4gIE9mZmVyKGZpcnN0T2ZmZXJUaXRsZSwgZmlyc3RPZmZlckRlc2NyaXB0aW9uKTtcclxuXHJcbiAgY29uc3Qgc2Vjb25kT2ZmZXJUaXRsZSA9ICdXaXp1YWxpemFjamUnO1xyXG4gIGNvbnN0IHNlY29uZE9mZmVyRGVzY3JpcHRpb24gPVxyXG4gICAgJ1ByemVkc3Rhd2lteSBDaSBwcm9qZWt0eSBrb25jZXBjeWpuZSB3IHBvc3RhY2kgd2lydHVhbG5lZ28gc3BhY2VydSBhbmltb3dhbmVnbyB3IHRlY2hub2xvZ2lpIDNELic7XHJcbiAgT2ZmZXIoc2Vjb25kT2ZmZXJUaXRsZSwgc2Vjb25kT2ZmZXJEZXNjcmlwdGlvbik7XHJcblxyXG4gIGNvbnN0IHRoaXJkT2ZmZXJUaXRsZSA9ICdSZWFsaXphY2plJztcclxuICBjb25zdCB0aGlyZE9mZmVyRGVzY3JpcHRpb24gPVxyXG4gICAgJ1pyZWFsaXp1amVteSBUd29qZSBtYXJ6ZW5pZSBwcnp5IHXFvHljaXUgbmFqbm93c3p5Y2ggcm96d2nEhXphxYQgaSB6YWF3YW5zb3dhbnljaCB0ZWNobm9sb2dpaS4nO1xyXG4gIE9mZmVyKHRoaXJkT2ZmZXJUaXRsZSwgdGhpcmRPZmZlckRlc2NyaXB0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9mZmVycztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBOYXYgZnJvbSAnLi9jb21wb25lbnRzL25hdic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi9jb21wb25lbnRzL2hlcm8nO1xuaW1wb3J0IE9mZmVycyBmcm9tICcuL2NvbXBvbmVudHMvb2ZmZXJzJztcbmltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvYWJvdXQnO1xuXG5OYXYoKTtcbkhlcm8oKTtcbk9mZmVycygpO1xuQWJvdXQoKTtcbkZvb3RlcigpO1xuXG4vLyBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JnLWFtYmVyLTUwMCcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9