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
      <aside class="flex justify-between items-center h-auto gap-6 text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
        
        <div class="w-auto md:w-auto lg:w-auto xl:w-auto 2xl:w-auto">Daj znać, co możemy dla Ciebie zrobic!</div>
        <button class="w-git h-9 bg-green-900 py-2 px-3 rounded-full whitespace-nowrap">
          Skontaktuj się z nami
        </button>

      </aside>

    </div>

    <div class="w-full h-[1px] bg-slate-300"></div>


    <div class="flex w-full md:h-10 xl:h-10 2xl:h-10 lg:h-10 h-auto justify-between">
      <ul class="flex-col md:flex-row xl:flex 2xl:flex lg:flex gap-8" >
        <li><a href="#">Kontakt</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Linkedin</a></li>
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
  <div class="md:flex flex-col w-full md:h-screen h-full">
  
    <aside class="h-auto flex-col w-full md:w-3/4  md:h-auto space-y-16 bg-[#DCC1AB] px-10 py-14">
        <div class="space-y-10">
            <div class="text-6xl">Nowoczesna aranżacja Twojego ogrodu</div>
            
            <div class="text-base">Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.</div>
        </div>

        <div class="flex-col space-y-3 md:flex justify-between [&>a]:cursor-pointer">
            <button class="bg-green-800 text-white px-[24px] py-[12px] rounded-full">Skontaktuj się z nami</button>
            <a href="#realizacje" class="flex space-x-3 w-fit border-solid border-2 border-green-800 px-[24px] py-[12px] rounded-full text-green-800">
            <span class="whitespace-nowrap">Zobacz nasze realizacje</span>
            <img src="./heroArrowDown.svg" alt="">
            </a>
        </div>

    </aside>

    <div class="h-screen w-full relative bg-amber-200">
        <div class="flex bottom-0 right-0 absolute">
            <button class="w-[50px] h-[50px] flex justify-center items-center bg-slate-200">
                <img src="./sliderLeft.svg" alt="Poprzednie zdjęcie">
            </button>
            <button class="w-[50px] h-[50px] flex justify-center items-center bg-slate-300">
                <img src="./sliderRight.svg" alt="Poprzednie zdjęcie">
            </button>
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
    'bg-slate-100 w-full px-6 py-3 md:p-6 flex justify-between items-center sticky top-0 z-10';

  const logoContainer = document.createElement('span');
  logoContainer.textContent = 'Logo';
  logoContainer.innerHTML = `
    <img src="./giarddesign.svg" alt="Logo">
  `;

  const links = document.createElement('div');
  links.classList = 'flex gap-10 [&>*]:cursor-pointer hidden md:flex';

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

  const burgerMenu = document.createElement('div');
  burgerMenu.classList = 'md:hidden';
  burgerMenu.innerHTML = `
  <div class="space-y-2 cursor-pointer">
    <span class="block w-8 h-[0.2rem] bg-gray-600"></span>
    <span class="block w-8 h-[0.2rem] bg-gray-600"></span>
    <span class="block w-5 h-[0.2rem] bg-gray-600"></span>
  </div>
  `;

  links.appendChild(offersLink);
  links.appendChild(aboutLink);
  links.appendChild(registerLink);
  links.appendChild(contactLink);
  links.appendChild(searchContainer);
  navbar.appendChild(logoContainer);
  navbar.appendChild(links);
  navbar.appendChild(burgerMenu);

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
    <div class="space-y-3">
        <div>
            ${icon}
        </div>
        <div class="md:text-2xl text-xl">${title}</div>
        <div class="md:text-base text-sm">${description}</div>
    </div>
    <div class="text-green-800 flex justify-start items-center space-x-2 border-b-2 border-green-800 w-fit cursor-pointer">
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
    'flex-col w-full h-auto md:h-screen space-y-10 bg-[#F5F0EC] p-5 py-10';

  section.innerHTML = `
  <div class="max-w-[1040px] flex-col space-y-5 w-3/4 m-auto">
    <div class="text-xs text-green-800">Oferta</div>
    <div class="md:text-5xl text-3xl">Działamy <i>kompleksowo</i></div>
    <div class="md:text-base w-full text-md">
        Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne. Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie, a na każdym etapie posłużymy radą i wieloletnim doświadczeniem. 
    </div>
  </div>

  <div class="offers-view flex flex-col md:px-5 md:flex justify-center items-center w-full space-y-5 h-auto"></div>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUR0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDeENwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2xFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSwyQ0FBMkMsTUFBTTtBQUNqRCw0Q0FBNEMsWUFBWTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0RBQUs7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFLO0FBQ1A7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7OztVQ3hDdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNjO0FBQ007QUFDSjtBQUNJO0FBQ0Y7QUFDSTs7QUFFM0MsMkRBQUc7QUFDSCw0REFBSTtBQUNKLDhEQUFNO0FBQ04sNkRBQUs7QUFDTCwrREFBTztBQUNQLDhEQUFNOztBQUVOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9hYm91dC5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9jb250YWN0LmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9oZXJvLmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL25hdi5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9vZmZlci5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9vZmZlcnMuanMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcblxyXG4gIHNlY3Rpb24uaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cInctZnVsbCBoLWF1dG8gYmctZ3JlZW4tOTAwIGZsZXgtY29sXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBiZy1zbGF0ZS0zMDBcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fib3V0UGhvdG8ucG5nXCIgYWx0PVwiTGFkbmUgemRqZWNpZVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgcHktMTAgdGV4dC1bI0Y1RjBFQ10gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTQvNSBzcGFjZS15LTIwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlLXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zbVwiPk8gZmlybWllPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LTR4bCB3LWZpdFwiPlR3b3J6eW15PC9icj4geiA8aT5wYXNqxIU8L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgS2HFvGR5IHByb2pla3QgdG8gbm93ZSB3eXp3YW5pZS4gRGxhdGVnbyBuYXN6IHplc3DDs8WCIHR3b3J6xIUgd3lrd2FsaWZpa293YW5pIHByb2pla3RhbmNpIG9yYXogYXJjaGl0ZWtjaSwga3TDs3J5Y2ggemFkYW5pZW0gamVzdCByb3pwb3puYW5pZSBpIHJlYWxpemFjamEgcG90cnplYiBrYcW8ZGVnbyBLbGllbnRhLiBOYXN6YSBzcGVjamFsaXphY2phIHRvIHByemVzdHJ6ZW5pZSBub3dvY3plc25lLCBrdMOzcmUgY2hhcmFrdGVyeXp1amUgbWluaW1hbGl6bSwgZ2VvbWV0cmlhIGkgZWxlZ2FuY2thIHByb3N0b3RhLiBUd29yenlteSBvZ3JvZHkgbWHFgm9vYnPFgnVnb3dlLCBkb3N0b3Nvd2FuZSBkbyB3c3DDs8WCY3plc25lZ28gdHJ5YnUgxbx5Y2lhLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1maXQgYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJvcmRlci1bI0Y1RjBFQ10tODAwIHB4LVsyNHB4XSBweS1bMTJweF0gcm91bmRlZC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3puYWogbmFzIGJsacW8ZWpcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fib3V0QXJyb3dSaWdodC5zdmdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIiwiY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5cclxuICBzZWN0aW9uLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiaC1mdWxsIHB4LTYgcHktNiB3LWZ1bGxcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJoLWF1dG8gYmctZ3JlZW4tOTAwIHctYXV0byBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1bI0Y1RjBFQ10gdGV4dC1bNDBweF0gbGVhZGluZy1bNDhweF0gc3BhY2UteS02IHAtOVwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+Wm9zdGHFhG15IHcga29udGFrY2llITwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlpuYWpkemllc3ogbmFzIG5hIDxpPjxiPkluc3RhZ3JhbWllPC9iPjwvaT4uPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1iYXNlXCI+xZpsZWTFuiBuYXN6ZTxicj4gbmFqbm93c3plIHJlYWxpemFjamUhPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwicHQtWzEwcHhdIHBiLVsxMnB4XSBweC1bMjRweF0gYmctWyNGNUYwRUNdIHRleHQtZ3JlZW4tOTAwIHJvdW5kZWQtZnVsbCB0ZXh0LWJhc2VcIj5JbnN0YWdyYW08L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiIsImNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICBjb25zdCBmb290ZXJDbGFzc2VzID0gYGJnLWJsYWNrIHctZnVsbCBoLWF1dG8gdGV4dC13aGl0ZSBweC1bNDBweF0gcHktWzgwcHhdIGZsZXgtY29sIHNwYWNlLXktMjBgO1xyXG4gIGZvb3Rlci5jbGFzc0xpc3QgPSBmb290ZXJDbGFzc2VzO1xyXG4gIGZvb3Rlci5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImZsZXgtY29sIHNwYWNlLXktOFwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgZmxleC1jb2wgbWQ6ZmxleC1yb3cgbGc6ZmxleC1yb3cgeGw6ZmxleC1yb3cgMnhsOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBzcGFjZS15LTRcIj5cclxuICAgICAgXHJcbiAgICAgIDxpbWcgc3JjPVwiLi9naWFyZGRlc2lnbldoaXRlLnN2Z1wiIGFsdD1cImxvZ29cIj5cclxuICAgICAgPGFzaWRlIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGgtYXV0byBnYXAtNiB0ZXh0LXNtIG1kOnRleHQtYmFzZSBsZzp0ZXh0LWJhc2UgeGw6dGV4dC1iYXNlIDJ4bDp0ZXh0LWJhc2VcIj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1hdXRvIG1kOnctYXV0byBsZzp3LWF1dG8geGw6dy1hdXRvIDJ4bDp3LWF1dG9cIj5EYWogem5hxIcsIGNvIG1vxbxlbXkgZGxhIENpZWJpZSB6cm9iaWMhPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInctZ2l0IGgtOSBiZy1ncmVlbi05MDAgcHktMiBweC0zIHJvdW5kZWQtZnVsbCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgU2tvbnRha3R1aiBzacSZIHogbmFtaVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPC9hc2lkZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGgtWzFweF0gYmctc2xhdGUtMzAwXCI+PC9kaXY+XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IHctZnVsbCBtZDpoLTEwIHhsOmgtMTAgMnhsOmgtMTAgbGc6aC0xMCBoLWF1dG8ganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cImZsZXgtY29sIG1kOmZsZXgtcm93IHhsOmZsZXggMnhsOmZsZXggbGc6ZmxleCBnYXAtOFwiID5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Lb250YWt0PC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+SW5zdGFncmFtPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+RmFjZWJvb2s8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5MaW5rZWRpbjwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleC1jb2wgbGc6ZmxleC1yb3cgbWQ6ZmxleC1yb3cgeGw6ZmxleC1yb3cgMnhsOmZsZXgtcm93IGdhcC04IHctZml0XCI+XHJcbiAgICAgICAgPGRpdj4wMDAtMDAwLTAwMDwvZGl2PlxyXG4gICAgICAgIDxkaXY+Z2lhcmRkZXNpZ25Aa29udGFrdC5wbDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIG15LWF1dG9cIj5cclxuICAgICAgICA8ZGl2PlByYXdhIHphc3RyemXFvG9uZSDCqSAyMDIyPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc3BhY2UteS0xIHctMzAgaC1mdWxsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInctMjAgXCI+bWFkZSBieTwvZGl2PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiLi9hZFJlc3BlY3Quc3ZnXCIgYWx0PVwiYWRSZXNwZWN0XCI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImNvbnN0IEhlcm8gPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHJcbiAgbWFpbi5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cIm1kOmZsZXggZmxleC1jb2wgdy1mdWxsIG1kOmgtc2NyZWVuIGgtZnVsbFwiPlxyXG4gIFxyXG4gICAgPGFzaWRlIGNsYXNzPVwiaC1hdXRvIGZsZXgtY29sIHctZnVsbCBtZDp3LTMvNCAgbWQ6aC1hdXRvIHNwYWNlLXktMTYgYmctWyNEQ0MxQUJdIHB4LTEwIHB5LTE0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlLXktMTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtNnhsXCI+Tm93b2N6ZXNuYSBhcmFuxbxhY2phIFR3b2plZ28gb2dyb2R1PC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1iYXNlXCI+TWFya2EgR2lhcmREZXNpZ24gdG8gd2llbG9sZXRuaWUgZG/Fm3dpYWRjemVuaWUgaSB3eXNva2EgZXN0ZXR5a2EgcmVhbGl6YWNqaS4gT2ZlcnVqZW15IGtvbXBsZWtzb3d5IHpha3JlcyB1c8WCdWcgeiBpbmR5d2lkdWFsbnltIHBvZGVqxZtjaWVtIGRvIGthxbxkZWdvIHByb2pla3R1LjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1jb2wgc3BhY2UteS0zIG1kOmZsZXgganVzdGlmeS1iZXR3ZWVuIFsmPmFdOmN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJiZy1ncmVlbi04MDAgdGV4dC13aGl0ZSBweC1bMjRweF0gcHktWzEycHhdIHJvdW5kZWQtZnVsbFwiPlNrb250YWt0dWogc2nEmSB6IG5hbWk8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNyZWFsaXphY2plXCIgY2xhc3M9XCJmbGV4IHNwYWNlLXgtMyB3LWZpdCBib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLWdyZWVuLTgwMCBweC1bMjRweF0gcHktWzEycHhdIHJvdW5kZWQtZnVsbCB0ZXh0LWdyZWVuLTgwMFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndoaXRlc3BhY2Utbm93cmFwXCI+Wm9iYWN6IG5hc3plIHJlYWxpemFjamU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9oZXJvQXJyb3dEb3duLnN2Z1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9hc2lkZT5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiaC1zY3JlZW4gdy1mdWxsIHJlbGF0aXZlIGJnLWFtYmVyLTIwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGJvdHRvbS0wIHJpZ2h0LTAgYWJzb2x1dGVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInctWzUwcHhdIGgtWzUwcHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL3NsaWRlckxlZnQuc3ZnXCIgYWx0PVwiUG9wcnplZG5pZSB6ZGrEmWNpZVwiPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInctWzUwcHhdIGgtWzUwcHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLXNsYXRlLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL3NsaWRlclJpZ2h0LnN2Z1wiIGFsdD1cIlBvcHJ6ZWRuaWUgemRqxJljaWVcIj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBcclxuICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIiwiY29uc3QgTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gIG5hdmJhci5jbGFzc0xpc3QgPVxyXG4gICAgJ2JnLXNsYXRlLTEwMCB3LWZ1bGwgcHgtNiBweS0zIG1kOnAtNiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgc3RpY2t5IHRvcC0wIHotMTAnO1xyXG5cclxuICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGxvZ29Db250YWluZXIudGV4dENvbnRlbnQgPSAnTG9nbyc7XHJcbiAgbG9nb0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICA8aW1nIHNyYz1cIi4vZ2lhcmRkZXNpZ24uc3ZnXCIgYWx0PVwiTG9nb1wiPlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGlua3MuY2xhc3NMaXN0ID0gJ2ZsZXggZ2FwLTEwIFsmPipdOmN1cnNvci1wb2ludGVyIGhpZGRlbiBtZDpmbGV4JztcclxuXHJcbiAgY29uc3Qgb2ZmZXJzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBvZmZlcnNMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjb2ZmZXJzJyk7XHJcbiAgb2ZmZXJzTGluay50ZXh0Q29udGVudCA9ICdPZmVydGEnO1xyXG5cclxuICBjb25zdCBhcnJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBhcnJvd0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgPGltZyBzcmM9XCIuL2Fycm93RG93bi5zdmdcIiBhbHQ9XCJSb3p3acWEXCI+XHJcbiAgYDtcclxuXHJcbiAgb2ZmZXJzTGluay5hcHBlbmRDaGlsZChhcnJvd0NvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBhYm91dExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyNhYm91dCcpO1xyXG4gIGFib3V0TGluay50ZXh0Q29udGVudCA9ICdPIGZpcm1pZSc7XHJcbiAgb2ZmZXJzTGluay5jbGFzc0xpc3QgPSAnZmxleCBnYXAtMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1hdXRvJztcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIHJlZ2lzdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI3JlZ2lzdGVyJyk7XHJcbiAgcmVnaXN0ZXJMaW5rLnRleHRDb250ZW50ID0gJ1JlYWxpemFjamUnO1xyXG4gIHJlZ2lzdGVyTGluay5jbGFzc0xpc3QgPSAndGV4dC1jZW50ZXInO1xyXG5cclxuICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBjb250YWN0TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI2NvbnRhY3QnKTtcclxuICBjb250YWN0TGluay50ZXh0Q29udGVudCA9ICdLb250YWt0JztcclxuXHJcbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc2VhcmNoQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICA8aW1nIHNyYz1cIi4vc2VhcmNoLnN2Z1wiIGFsdD1cIlN6dWthalwiPlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXJnZXJNZW51LmNsYXNzTGlzdCA9ICdtZDpoaWRkZW4nO1xyXG4gIGJ1cmdlck1lbnUuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJzcGFjZS15LTIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdy04IGgtWzAuMnJlbV0gYmctZ3JheS02MDBcIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHctOCBoLVswLjJyZW1dIGJnLWdyYXktNjAwXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJibG9jayB3LTUgaC1bMC4ycmVtXSBiZy1ncmF5LTYwMFwiPjwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICBsaW5rcy5hcHBlbmRDaGlsZChvZmZlcnNMaW5rKTtcclxuICBsaW5rcy5hcHBlbmRDaGlsZChhYm91dExpbmspO1xyXG4gIGxpbmtzLmFwcGVuZENoaWxkKHJlZ2lzdGVyTGluayk7XHJcbiAgbGlua3MuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xyXG4gIGxpbmtzLmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lcik7XHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpO1xyXG4gIG5hdmJhci5hcHBlbmRDaGlsZChsaW5rcyk7XHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGJ1cmdlck1lbnUpO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5hdmJhcik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiIsImNvbnN0IE9mZmVyID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgaWNvbikgPT4ge1xyXG4gIGNvbnN0IG9mZmVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9mZmVycy12aWV3Jyk7XHJcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2UuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJmbGV4LWNvbiBiZy13aGl0ZSBtZDp3LTgwIHctNzIgaC1hdXRvIHNwYWNlLXktMTAgbWQ6c3BhY2UteS0yMCBwLTUgcm91bmRlZC14bFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInNwYWNlLXktM1wiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICR7aWNvbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6dGV4dC0yeGwgdGV4dC14bFwiPiR7dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kOnRleHQtYmFzZSB0ZXh0LXNtXCI+JHtkZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInRleHQtZ3JlZW4tODAwIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGJvcmRlci1iLTIgYm9yZGVyLWdyZWVuLTgwMCB3LWZpdCBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZDp0ZXh0LWJhc2UgdGV4dC1zbVwiPlxyXG4gICAgICAgIERvd2llZHogc2nEmSB3acSZY2VqXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL29mZmVyQXJyb3dSaWdodC5zdmdcIiBhbHQ9XCJcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgO1xyXG4gIG9mZmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2ZmZXI7XHJcbiIsImltcG9ydCBPZmZlciBmcm9tICcuL29mZmVyJztcclxuXHJcbmNvbnN0IE9mZmVycyA9ICgpID0+IHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIHNlY3Rpb24uY2xhc3NMaXN0ID1cclxuICAgICdmbGV4LWNvbCB3LWZ1bGwgaC1hdXRvIG1kOmgtc2NyZWVuIHNwYWNlLXktMTAgYmctWyNGNUYwRUNdIHAtNSBweS0xMCc7XHJcblxyXG4gIHNlY3Rpb24uaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJtYXgtdy1bMTA0MHB4XSBmbGV4LWNvbCBzcGFjZS15LTUgdy0zLzQgbS1hdXRvXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGV4dC14cyB0ZXh0LWdyZWVuLTgwMFwiPk9mZXJ0YTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1kOnRleHQtNXhsIHRleHQtM3hsXCI+RHppYcWCYW15IDxpPmtvbXBsZWtzb3dvPC9pPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1kOnRleHQtYmFzZSB3LWZ1bGwgdGV4dC1tZFwiPlxyXG4gICAgICAgIE9mZXJ1amVteSBrb21wbGV0bsSFIG9ic8WCdWfEmSBpbndlc3R5Y2ppIHRlcmVuw7N3IHppZWxvbnljaC4gUHJvamVrdHVqZW15IG5vd29jemVzbmUgb2dyb2R5IHByenlkb21vd2Ugb3JheiByZXp5ZGVuY2pvbmFsbmUuIFN0d29yenlteSBkbGEgQ2llYmllIHByb2pla3QsIHp3aXp1YWxpenVqZW15IGdvIGkgd2NpZWxpbXkgdyDFvHljaWUsIGEgbmEga2HFvGR5bSBldGFwaWUgcG9zxYJ1xbx5bXkgcmFkxIUgaSB3aWVsb2xldG5pbSBkb8Wbd2lhZGN6ZW5pZW0uIFxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJvZmZlcnMtdmlldyBmbGV4IGZsZXgtY29sIG1kOnB4LTUgbWQ6ZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIHNwYWNlLXktNSBoLWF1dG9cIj48L2Rpdj5cclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG5cclxuICBjb25zdCBmaXJzdE9mZmVyVGl0bGUgPSAnUHJvamVrdHknO1xyXG4gIGNvbnN0IGZpcnN0T2ZmZXJEZXNjcmlwdGlvbiA9XHJcbiAgICAnWmFwcm9qZWt0dWplbXkgVHfDs2ogb2dyw7NkIHcgbm93b2N6ZXNueW0gc3R5bHUgaSB6IG5hamxlcHN6eW0gd3lrb3J6eXN0YW5pZW0gaXN0bmllasSFY2VqIHByemVzdHJ6ZW5pLic7XHJcbiAgY29uc3QgZmlyc3RPZmZlckljb24gPSBgPGltZyBzcmM9XCIuL3Byb2plY3RzSWNvbi5zdmdcIiBhbHQ9XCJcIj5gO1xyXG4gIE9mZmVyKGZpcnN0T2ZmZXJUaXRsZSwgZmlyc3RPZmZlckRlc2NyaXB0aW9uLCBmaXJzdE9mZmVySWNvbik7XHJcblxyXG4gIGNvbnN0IHNlY29uZE9mZmVyVGl0bGUgPSAnV2l6dWFsaXphY2plJztcclxuICBjb25zdCBzZWNvbmRPZmZlckRlc2NyaXB0aW9uID1cclxuICAgICdQcnplZHN0YXdpbXkgQ2kgcHJvamVrdHkga29uY2VwY3lqbmUgdyBwb3N0YWNpIHdpcnR1YWxuZWdvIHNwYWNlcnUgYW5pbW93YW5lZ28gdyB0ZWNobm9sb2dpaSAzRC4nO1xyXG4gIGNvbnN0IHNlY29uZE9mZmVySWNvbiA9IGA8aW1nIHNyYz1cIi4vdmlzdWFsSWNvbi5zdmdcIiBhbHQ9XCJcIj5gO1xyXG4gIE9mZmVyKHNlY29uZE9mZmVyVGl0bGUsIHNlY29uZE9mZmVyRGVzY3JpcHRpb24sIHNlY29uZE9mZmVySWNvbik7XHJcblxyXG4gIGNvbnN0IHRoaXJkT2ZmZXJUaXRsZSA9ICdSZWFsaXphY2plJztcclxuICBjb25zdCB0aGlyZE9mZmVyRGVzY3JpcHRpb24gPVxyXG4gICAgJ1pyZWFsaXp1amVteSBUd29qZSBtYXJ6ZW5pZSBwcnp5IHXFvHljaXUgbmFqbm93c3p5Y2ggcm96d2nEhXphxYQgaSB6YWF3YW5zb3dhbnljaCB0ZWNobm9sb2dpaS4nO1xyXG4gIGNvbnN0IHRoaXJkT2ZmZXJJY29uID0gYDxpbWcgc3JjPVwiLi9yZWFsaXphdGlvbnNJY29uLnN2Z1wiIGFsdD1cIlwiPmA7XHJcbiAgT2ZmZXIodGhpcmRPZmZlclRpdGxlLCB0aGlyZE9mZmVyRGVzY3JpcHRpb24sIHRoaXJkT2ZmZXJJY29uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9mZmVycztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBOYXYgZnJvbSAnLi9jb21wb25lbnRzL25hdic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi9jb21wb25lbnRzL2hlcm8nO1xuaW1wb3J0IE9mZmVycyBmcm9tICcuL2NvbXBvbmVudHMvb2ZmZXJzJztcbmltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvYWJvdXQnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhY3QnO1xuXG5OYXYoKTtcbkhlcm8oKTtcbk9mZmVycygpO1xuQWJvdXQoKTtcbkNvbnRhY3QoKTtcbkZvb3RlcigpO1xuXG4vLyBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JnLWFtYmVyLTUwMCcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9