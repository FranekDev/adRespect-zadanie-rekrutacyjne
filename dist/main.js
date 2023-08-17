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
    <div class="w-full h-auto bg-green-900 flex-col">
        <div class="w-full bg-slate-300">
            <img src="./aboutPhoto.png" alt="Ladne zdjecie">
        </div>
        <div class="w-full py-10 text-[#F5F0EC] flex items-center justify-center h-auto">
            <div class="w-4/5 space-y-20">
                <div class="space-y-8">
                    <div class="space-y-3">
                        <div class="text-sm">O firmie</div>
                        <div class="text-4xl w-fit">Tworzymy</br> z <i>pasją</i></div>
                    </div>
                    <div>
                        Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą wykwalifikowani projektanci oraz architekci, których zadaniem jest rozpoznanie i realizacja potrzeb każdego Klienta. Nasza specjalizacja to przestrzenie nowoczesne, które charakteryzuje minimalizm, geometria i elegancka prostota. Tworzymy ogrody małoobsługowe, dostosowane do współczesnego trybu życia.
                    </div>
                </div>
                <div class="w-fit border-solid border-2 border-[#F5F0EC]-800 px-[24px] py-[12px] rounded-full flex justify-center items-center space-x-2">
                    <a href="" class="">
                        Poznaj nas bliżej
                    </a>
                    <img src="./aboutArrowRight.svg" alt="">
                </div>
            </div>
        </div>
    </div>
  `;

  document.body.appendChild(section);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Contact = () => {
  const section = document.createElement('section');

  section.innerHTML = `
  <div class="h-full px-6 py-6 w-full">
    <div class="h-auto bg-green-900 w-auto flex-col justify-center items-center text-[#F5F0EC] text-[40px] leading-[48px] space-y-6 p-9">
        <div>
            <div>Zostańmy w kontakcie!</div>
            <div>Znajdziesz nas na <i><b>Instagramie</b></i>.</div>
        </div>
        <div class="flex justify-between items-center">
            <div class="text-base">Śledź nasze<br> najnowsze realizacje!</div>
            <div>
                <a href="#" class="pt-[10px] pb-[12px] px-[24px] bg-[#F5F0EC] text-green-900 rounded-full text-base">Instagram</a>
            </div>
        </div>
    </div>
  </div>
  `;

  document.body.appendChild(section);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


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

    <div class="w-full flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between space-y-4">
      
      <img src="./giarddesignWhite.svg" alt="logo">
      <aside class="flex justify-center items-center h-auto gap-6 text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
        
        <div class="w-32 md:w-auto lg:w-auto xl:w-auto 2xl:w-auto">Daj znać, co możemy dla Ciebie zrobic!</div>
        <button class='w-git h-auto bg-green-900 py-2 px-3 rounded-full'>
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


    <div class="flex justify-between ">

      <div class="h-full my-auto">
        <div>Prawa zastrzeżone © 2022</div>
      </div>
    
      <div class="flex-col justify-center items-center space-y-1 w-30 h-full">
        <div class="w-20 ">made by</div>
        <img src="./adRespect.svg" alt="adRespect">
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
            <a href="#realizacje" class="flex space-x-3 w-fit border-solid border-2 border-green-800 px-[24px] py-[12px] rounded-full text-green-800">
            <span class="whitespace-nowrap">Zobacz nasze realizacje</span>
            <img src="./heroArrowDown.svg" alt="">
            </a>
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
const Nav = () => {
  const navbar = document.createElement('nav');
  navbar.classList =
    'bg-slate-100 w-full p-6 flex justify-between items-center sticky top-0';

  const logoContainer = document.createElement('span');
  logoContainer.textContent = 'Logo';
  logoContainer.innerHTML = `
    <img src="./giarddesign.svg" alt="Logo">
  `;

  const links = document.createElement('div');
  links.classList = 'flex gap-10 [&>*]:cursor-pointer';

  const offersLink = document.createElement('a');
  offersLink.setAttribute('href', '#offers');
  offersLink.textContent = 'Oferta';

  const arrowContainer = document.createElement('span');
  arrowContainer.innerHTML = `
  <img src="./arrowDown.svg" alt="Rozwiń">
  `;

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

  const searchContainer = document.createElement('div');
  searchContainer.innerHTML = `
  <img src="./search.svg" alt="Szukaj">
  `;

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
const Offer = (title, description, icon) => {
  const offerContainer = document.querySelector('.offers-view');
  const page = document.createElement('div');
  page.innerHTML = `
  <div class="flex-con bg-white md:w-80 w-72 h-auto space-y-10 md:space-y-20 p-5 rounded-xl">
    <div>
        <div>
            ${icon}
        </div>
        <div class="md:text-2xl text-xl">${title}</div>
        <div class="md:text-base text-sm">${description}</div>
    </div>
    <div class="text-green-800 flex justify-start items-center space-x-2 border-b-2 border-green-800 w-fit">
        <div class="md:text-base text-sm">
        Dowiedz się więcej
        </div>
        <div>
            <img src="./offerArrowRight.svg" alt="">
        </div>
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
  const firstOfferIcon = `<img src="./projectsIcon.svg" alt="">`;
  (0,_offer__WEBPACK_IMPORTED_MODULE_0__["default"])(firstOfferTitle, firstOfferDescription, firstOfferIcon);

  const secondOfferTitle = 'Wizualizacje';
  const secondOfferDescription =
    'Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.';
  const secondOfferIcon = `<img src="./visualIcon.svg" alt="">`;
  (0,_offer__WEBPACK_IMPORTED_MODULE_0__["default"])(secondOfferTitle, secondOfferDescription, secondOfferIcon);

  const thirdOfferTitle = 'Realizacje';
  const thirdOfferDescription =
    'Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.';
  const thirdOfferIcon = `<img src="./realizationsIcon.svg" alt="">`;
  (0,_offer__WEBPACK_IMPORTED_MODULE_0__["default"])(thirdOfferTitle, thirdOfferDescription, thirdOfferIcon);
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
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact */ "./src/components/contact.js");








(0,_components_nav__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_hero__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_components_offers__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_components_about__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_components_contact__WEBPACK_IMPORTED_MODULE_6__["default"])();
(0,_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();

// document.body.classList.add('bg-amber-500');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUR0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSwyQ0FBMkMsTUFBTTtBQUNqRCw0Q0FBNEMsWUFBWTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0RBQUs7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFLO0FBQ1A7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7OztVQ3hDdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNjO0FBQ007QUFDSjtBQUNJO0FBQ0Y7QUFDSTs7QUFFM0MsMkRBQUc7QUFDSCw0REFBSTtBQUNKLDhEQUFNO0FBQ04sNkRBQUs7QUFDTCwrREFBTztBQUNQLDhEQUFNOztBQUVOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL3N0eWxlLmNzcz9mZTllIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL2Fib3V0LmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL2hlcm8uanMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2NvbXBvbmVudHMvbmF2LmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL29mZmVyLmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL29mZmVycy5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuXHJcbiAgc2VjdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGgtYXV0byBiZy1ncmVlbi05MDAgZmxleC1jb2xcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGJnLXNsYXRlLTMwMFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYWJvdXRQaG90by5wbmdcIiBhbHQ9XCJMYWRuZSB6ZGplY2llXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBweS0xMCB0ZXh0LVsjRjVGMEVDXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLWF1dG9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctNC81IHNwYWNlLXktMjBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZS15LThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXNtXCI+TyBmaXJtaWU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtNHhsIHctZml0XCI+VHdvcnp5bXk8L2JyPiB6IDxpPnBhc2rEhTwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBLYcW8ZHkgcHJvamVrdCB0byBub3dlIHd5endhbmllLiBEbGF0ZWdvIG5hc3ogemVzcMOzxYIgdHdvcnrEhSB3eWt3YWxpZmlrb3dhbmkgcHJvamVrdGFuY2kgb3JheiBhcmNoaXRla2NpLCBrdMOzcnljaCB6YWRhbmllbSBqZXN0IHJvenBvem5hbmllIGkgcmVhbGl6YWNqYSBwb3RyemViIGthxbxkZWdvIEtsaWVudGEuIE5hc3phIHNwZWNqYWxpemFjamEgdG8gcHJ6ZXN0cnplbmllIG5vd29jemVzbmUsIGt0w7NyZSBjaGFyYWt0ZXJ5enVqZSBtaW5pbWFsaXptLCBnZW9tZXRyaWEgaSBlbGVnYW5ja2EgcHJvc3RvdGEuIFR3b3J6eW15IG9ncm9keSBtYcWCb29ic8WCdWdvd2UsIGRvc3Rvc293YW5lIGRvIHdzcMOzxYJjemVzbmVnbyB0cnlidSDFvHljaWEuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZpdCBib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLVsjRjVGMEVDXS04MDAgcHgtWzI0cHhdIHB5LVsxMnB4XSByb3VuZGVkLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvem5haiBuYXMgYmxpxbxlalxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYWJvdXRBcnJvd1JpZ2h0LnN2Z1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iLCJjb25zdCBDb250YWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcblxyXG4gIHNlY3Rpb24uaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJoLWZ1bGwgcHgtNiBweS02IHctZnVsbFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImgtYXV0byBiZy1ncmVlbi05MDAgdy1hdXRvIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LVsjRjVGMEVDXSB0ZXh0LVs0MHB4XSBsZWFkaW5nLVs0OHB4XSBzcGFjZS15LTYgcC05XCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5ab3N0YcWEbXkgdyBrb250YWtjaWUhPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+Wm5hamR6aWVzeiBuYXMgbmEgPGk+PGI+SW5zdGFncmFtaWU8L2I+PC9pPi48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWJhc2VcIj7FmmxlZMW6IG5hc3plPGJyPiBuYWpub3dzemUgcmVhbGl6YWNqZSE8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJwdC1bMTBweF0gcGItWzEycHhdIHB4LVsyNHB4XSBiZy1bI0Y1RjBFQ10gdGV4dC1ncmVlbi05MDAgcm91bmRlZC1mdWxsIHRleHQtYmFzZVwiPkluc3RhZ3JhbTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcclxuIiwiY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gIGNvbnN0IGZvb3RlckNsYXNzZXMgPSBgYmctYmxhY2sgdy1mdWxsIGgtYXV0byB0ZXh0LXdoaXRlIHB4LVs0MHB4XSBweS1bODBweF0gZmxleC1jb2wgc3BhY2UteS0yMGA7XHJcbiAgZm9vdGVyLmNsYXNzTGlzdCA9IGZvb3RlckNsYXNzZXM7XHJcbiAgZm9vdGVyLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiZmxleC1jb2wgc3BhY2UteS04XCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInctZnVsbCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBsZzpmbGV4LXJvdyB4bDpmbGV4LXJvdyAyeGw6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXktNFwiPlxyXG4gICAgICBcclxuICAgICAgPGltZyBzcmM9XCIuL2dpYXJkZGVzaWduV2hpdGUuc3ZnXCIgYWx0PVwibG9nb1wiPlxyXG4gICAgICA8YXNpZGUgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWF1dG8gZ2FwLTYgdGV4dC1zbSBtZDp0ZXh0LWJhc2UgbGc6dGV4dC1iYXNlIHhsOnRleHQtYmFzZSAyeGw6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInctMzIgbWQ6dy1hdXRvIGxnOnctYXV0byB4bDp3LWF1dG8gMnhsOnctYXV0b1wiPkRhaiB6bmHEhywgY28gbW/FvGVteSBkbGEgQ2llYmllIHpyb2JpYyE8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPSd3LWdpdCBoLWF1dG8gYmctZ3JlZW4tOTAwIHB5LTIgcHgtMyByb3VuZGVkLWZ1bGwnPlxyXG4gICAgICAgICAgU2tvbnRha3R1aiBzacSZIHogbmFtaVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPC9hc2lkZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGgtWzFweF0gYmctc2xhdGUtMzAwXCI+PC9kaXY+XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IHctZnVsbCBtZDpoLTEwIHhsOmgtMTAgMnhsOmgtMTAgbGc6aC0xMCBoLWF1dG8ganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cImZsZXgtY29sIG1kOmZsZXgtcm93IHhsOmZsZXggMnhsOmZsZXggbGc6ZmxleCBnYXAtOFwiID5cclxuICAgICAgICA8bGk+S29udGFrdDwvbGk+XHJcbiAgICAgICAgPGxpPkluc3RhZ3JhbTwvbGk+XHJcbiAgICAgICAgPGxpPkZhY2Vib29rPC9saT5cclxuICAgICAgICA8bGk+TGlua2VkaW48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleC1jb2wgbGc6ZmxleC1yb3cgbWQ6ZmxleC1yb3cgeGw6ZmxleC1yb3cgMnhsOmZsZXgtcm93IGdhcC04IHctZml0XCI+XHJcbiAgICAgICAgPGRpdj4wMDAtMDAwLTAwMDwvZGl2PlxyXG4gICAgICAgIDxkaXY+Z2lhcmRkZXNpZ25Aa29udGFrdC5wbDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIG15LWF1dG9cIj5cclxuICAgICAgICA8ZGl2PlByYXdhIHphc3RyemXFvG9uZSDCqSAyMDIyPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc3BhY2UteS0xIHctMzAgaC1mdWxsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInctMjAgXCI+bWFkZSBieTwvZGl2PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiLi9hZFJlc3BlY3Quc3ZnXCIgYWx0PVwiYWRSZXNwZWN0XCI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImNvbnN0IEhlcm8gPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHJcbiAgbWFpbi5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImZsZXggdy1mdWxsIGgtc2NyZWVuXCI+XHJcbiAgXHJcbiAgICA8YXNpZGUgY2xhc3M9XCJmbGV4LWNvbCB3LTMvNCBoLWF1dG8gc3BhY2UteS0xNiBiZy1bI0RDQzFBQl0gcHgtMTAgcHktMTZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS0xMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC02eGxcIj5Ob3dvY3plc25hIGFyYW7FvGFjamEgVHdvamVnbyBvZ3JvZHU8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWJhc2VcIj5NYXJrYSBHaWFyZERlc2lnbiB0byB3aWVsb2xldG5pZSBkb8Wbd2lhZGN6ZW5pZSBpIHd5c29rYSBlc3RldHlrYSByZWFsaXphY2ppLiBPZmVydWplbXkga29tcGxla3Nvd3kgemFrcmVzIHVzxYJ1ZyB6IGluZHl3aWR1YWxueW0gcG9kZWrFm2NpZW0gZG8ga2HFvGRlZ28gcHJvamVrdHUuPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBbJj5hXTpjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmctZ3JlZW4tODAwIHRleHQtd2hpdGUgcHgtWzI0cHhdIHB5LVsxMnB4XSByb3VuZGVkLWZ1bGxcIj5Ta29udGFrdHVqIHNpxJkgeiBuYW1pPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjcmVhbGl6YWNqZVwiIGNsYXNzPVwiZmxleCBzcGFjZS14LTMgdy1maXQgYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJvcmRlci1ncmVlbi04MDAgcHgtWzI0cHhdIHB5LVsxMnB4XSByb3VuZGVkLWZ1bGwgdGV4dC1ncmVlbi04MDBcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3aGl0ZXNwYWNlLW5vd3JhcFwiPlpvYmFjeiBuYXN6ZSByZWFsaXphY2plPC9zcGFuPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vaGVyb0Fycm93RG93bi5zdmdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvYXNpZGU+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cIiBoLWF1dG8gdy1mdWxsIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggYm90dG9tLTAgcmlnaHQtMCBhYnNvbHV0ZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidy1bNTBweF0gaC1bNTBweF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctc2xhdGUtMjAwXCI+PC08L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInctWzUwcHhdIGgtWzUwcHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLXNsYXRlLTMwMFwiPi0+PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBcclxuICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIiwiY29uc3QgTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gIG5hdmJhci5jbGFzc0xpc3QgPVxyXG4gICAgJ2JnLXNsYXRlLTEwMCB3LWZ1bGwgcC02IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBzdGlja3kgdG9wLTAnO1xyXG5cclxuICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGxvZ29Db250YWluZXIudGV4dENvbnRlbnQgPSAnTG9nbyc7XHJcbiAgbG9nb0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICA8aW1nIHNyYz1cIi4vZ2lhcmRkZXNpZ24uc3ZnXCIgYWx0PVwiTG9nb1wiPlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGlua3MuY2xhc3NMaXN0ID0gJ2ZsZXggZ2FwLTEwIFsmPipdOmN1cnNvci1wb2ludGVyJztcclxuXHJcbiAgY29uc3Qgb2ZmZXJzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBvZmZlcnNMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjb2ZmZXJzJyk7XHJcbiAgb2ZmZXJzTGluay50ZXh0Q29udGVudCA9ICdPZmVydGEnO1xyXG5cclxuICBjb25zdCBhcnJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBhcnJvd0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgPGltZyBzcmM9XCIuL2Fycm93RG93bi5zdmdcIiBhbHQ9XCJSb3p3acWEXCI+XHJcbiAgYDtcclxuXHJcbiAgb2ZmZXJzTGluay5hcHBlbmRDaGlsZChhcnJvd0NvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBhYm91dExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyNhYm91dCcpO1xyXG4gIGFib3V0TGluay50ZXh0Q29udGVudCA9ICdPIGZpcm1pZSc7XHJcbiAgb2ZmZXJzTGluay5jbGFzc0xpc3QgPSAnZmxleCBnYXAtMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1hdXRvJztcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIHJlZ2lzdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI3JlZ2lzdGVyJyk7XHJcbiAgcmVnaXN0ZXJMaW5rLnRleHRDb250ZW50ID0gJ1JlYWxpemFjamUnO1xyXG4gIHJlZ2lzdGVyTGluay5jbGFzc0xpc3QgPSAndGV4dC1jZW50ZXInO1xyXG5cclxuICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBjb250YWN0TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI2NvbnRhY3QnKTtcclxuICBjb250YWN0TGluay50ZXh0Q29udGVudCA9ICdLb250YWt0JztcclxuXHJcbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc2VhcmNoQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICA8aW1nIHNyYz1cIi4vc2VhcmNoLnN2Z1wiIGFsdD1cIlN6dWthalwiPlxyXG4gIGA7XHJcblxyXG4gIGxpbmtzLmFwcGVuZENoaWxkKG9mZmVyc0xpbmspO1xyXG4gIGxpbmtzLmFwcGVuZENoaWxkKGFib3V0TGluayk7XHJcbiAgbGlua3MuYXBwZW5kQ2hpbGQocmVnaXN0ZXJMaW5rKTtcclxuICBsaW5rcy5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XHJcbiAgbGlua3MuYXBwZW5kQ2hpbGQoc2VhcmNoQ29udGFpbmVyKTtcclxuICBuYXZiYXIuYXBwZW5kQ2hpbGQobG9nb0NvbnRhaW5lcik7XHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGxpbmtzKTtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuYXZiYXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iLCJjb25zdCBPZmZlciA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGljb24pID0+IHtcclxuICBjb25zdCBvZmZlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vZmZlcnMtdmlldycpO1xyXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiZmxleC1jb24gYmctd2hpdGUgbWQ6dy04MCB3LTcyIGgtYXV0byBzcGFjZS15LTEwIG1kOnNwYWNlLXktMjAgcC01IHJvdW5kZWQteGxcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgJHtpY29ufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZDp0ZXh0LTJ4bCB0ZXh0LXhsXCI+JHt0aXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6dGV4dC1iYXNlIHRleHQtc21cIj4ke2Rlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmVlbi04MDAgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgYm9yZGVyLWItMiBib3JkZXItZ3JlZW4tODAwIHctZml0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kOnRleHQtYmFzZSB0ZXh0LXNtXCI+XHJcbiAgICAgICAgRG93aWVkeiBzacSZIHdpxJljZWpcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vb2ZmZXJBcnJvd1JpZ2h0LnN2Z1wiIGFsdD1cIlwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcbiAgb2ZmZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPZmZlcjtcclxuIiwiaW1wb3J0IE9mZmVyIGZyb20gJy4vb2ZmZXInO1xyXG5cclxuY29uc3QgT2ZmZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgc2VjdGlvbi5jbGFzc0xpc3QgPVxyXG4gICAgJ2ZsZXgtY29sIHctZnVsbCBoLWF1dG8gbWQ6aC1zY3JlZW4gc3BhY2UteS0xMCBiZy1bI0Y1RjBFQ10gcC01JztcclxuXHJcbiAgc2VjdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cIm1heC13LVsxMDQwcHhdIGZsZXgtY29sIHNwYWNlLXktNSB3LTMvNCBtLWF1dG9cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXhzIHRleHQtZ3JlZW4tODAwXCI+T2ZlcnRhPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWQ6dGV4dC01eGwgdGV4dC0zeGxcIj5EemlhxYJhbXkgPGk+a29tcGxla3Nvd288L2k+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWQ6dGV4dC1iYXNlIHctZnVsbCB0ZXh0LW1kXCI+XHJcbiAgICAgICAgT2ZlcnVqZW15IGtvbXBsZXRuxIUgb2JzxYJ1Z8SZIGlud2VzdHljamkgdGVyZW7Ds3cgemllbG9ueWNoLiBQcm9qZWt0dWplbXkgbm93b2N6ZXNuZSBvZ3JvZHkgcHJ6eWRvbW93ZSBvcmF6IHJlenlkZW5jam9uYWxuZS4gU3R3b3J6eW15IGRsYSBDaWViaWUgcHJvamVrdCwgendpenVhbGl6dWplbXkgZ28gaSB3Y2llbGlteSB3IMW8eWNpZSwgYSBuYSBrYcW8ZHltIGV0YXBpZSBwb3PFgnXFvHlteSByYWTEhSBpIHdpZWxvbGV0bmltIGRvxZt3aWFkY3plbmllbS4gXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cIm9mZmVycy12aWV3IG1kOnB4LTUgbGc6cHgtNSB4bDpweC01IDJ4bDpweC01IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBmbGV4LXdyYXAgc3BhY2UteS01XCI+PC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxuXHJcbiAgY29uc3QgZmlyc3RPZmZlclRpdGxlID0gJ1Byb2pla3R5JztcclxuICBjb25zdCBmaXJzdE9mZmVyRGVzY3JpcHRpb24gPVxyXG4gICAgJ1phcHJvamVrdHVqZW15IFR3w7NqIG9ncsOzZCB3IG5vd29jemVzbnltIHN0eWx1IGkgeiBuYWpsZXBzenltIHd5a29yenlzdGFuaWVtIGlzdG5pZWrEhWNlaiBwcnplc3RyemVuaS4nO1xyXG4gIGNvbnN0IGZpcnN0T2ZmZXJJY29uID0gYDxpbWcgc3JjPVwiLi9wcm9qZWN0c0ljb24uc3ZnXCIgYWx0PVwiXCI+YDtcclxuICBPZmZlcihmaXJzdE9mZmVyVGl0bGUsIGZpcnN0T2ZmZXJEZXNjcmlwdGlvbiwgZmlyc3RPZmZlckljb24pO1xyXG5cclxuICBjb25zdCBzZWNvbmRPZmZlclRpdGxlID0gJ1dpenVhbGl6YWNqZSc7XHJcbiAgY29uc3Qgc2Vjb25kT2ZmZXJEZXNjcmlwdGlvbiA9XHJcbiAgICAnUHJ6ZWRzdGF3aW15IENpIHByb2pla3R5IGtvbmNlcGN5am5lIHcgcG9zdGFjaSB3aXJ0dWFsbmVnbyBzcGFjZXJ1IGFuaW1vd2FuZWdvIHcgdGVjaG5vbG9naWkgM0QuJztcclxuICBjb25zdCBzZWNvbmRPZmZlckljb24gPSBgPGltZyBzcmM9XCIuL3Zpc3VhbEljb24uc3ZnXCIgYWx0PVwiXCI+YDtcclxuICBPZmZlcihzZWNvbmRPZmZlclRpdGxlLCBzZWNvbmRPZmZlckRlc2NyaXB0aW9uLCBzZWNvbmRPZmZlckljb24pO1xyXG5cclxuICBjb25zdCB0aGlyZE9mZmVyVGl0bGUgPSAnUmVhbGl6YWNqZSc7XHJcbiAgY29uc3QgdGhpcmRPZmZlckRlc2NyaXB0aW9uID1cclxuICAgICdacmVhbGl6dWplbXkgVHdvamUgbWFyemVuaWUgcHJ6eSB1xbx5Y2l1IG5ham5vd3N6eWNoIHJvendpxIV6YcWEIGkgemFhd2Fuc293YW55Y2ggdGVjaG5vbG9naWkuJztcclxuICBjb25zdCB0aGlyZE9mZmVySWNvbiA9IGA8aW1nIHNyYz1cIi4vcmVhbGl6YXRpb25zSWNvbi5zdmdcIiBhbHQ9XCJcIj5gO1xyXG4gIE9mZmVyKHRoaXJkT2ZmZXJUaXRsZSwgdGhpcmRPZmZlckRlc2NyaXB0aW9uLCB0aGlyZE9mZmVySWNvbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPZmZlcnM7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgTmF2IGZyb20gJy4vY29tcG9uZW50cy9uYXYnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCBIZXJvIGZyb20gJy4vY29tcG9uZW50cy9oZXJvJztcbmltcG9ydCBPZmZlcnMgZnJvbSAnLi9jb21wb25lbnRzL29mZmVycyc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL2Fib3V0JztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29tcG9uZW50cy9jb250YWN0JztcblxuTmF2KCk7XG5IZXJvKCk7XG5PZmZlcnMoKTtcbkFib3V0KCk7XG5Db250YWN0KCk7XG5Gb290ZXIoKTtcblxuLy8gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdiZy1hbWJlci01MDAnKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==