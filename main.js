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
  section.id = 'about';

  section.innerHTML = `
    <div class="w-full h-[auto] bg-green-900 flex-col flex md:flex-row">
        <div class="w-full bg-slate-300 h-auto">
            <img src="./aboutPhoto.png" alt="Ladne zdjecie" class="h-full w-full">
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
                <div class="w-fit border-solid border-2 border-[#F5F0EC]-800 px-[24px] py-[12px] rounded-full flex justify-center items-center space-x-2 transition-all hover:shadow-md cursor-pointer">
                    <a href="" class="">
                        Poznaj nas bliżej
                    </a>
                    <img src="./svg/aboutArrowRight.svg" alt="">
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
  section.id = 'contact';
  section.classList.add('py-[60px]');

  section.innerHTML = `
  <div class="h-full px-6 py-6 w-full lg:w-auto flex justify-center items-center">
    <div class="h-auto bg-green-900 w-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center text-[#F5F0EC] text-[40px] leading-[48px] space-y-6 p-9 md:px-16 md:py-14 lg:px-[110px] lg:py-[110px] lg:space-x-16 lg:items-end">
    
          <div class=" w-full lg:whitespace-nowrap h-full">
              <div>Zostańmy w kontakcie!</div>
              <div>Znajdziesz nas na <i><b>Instagramie</b></i>.</div>
          </div>
          <div class="flex lg:flex-col justify-between items-end md:items-start w-full space-y-6">
              <div class="text-base w-[150px] lg:w-[150px] md:w-auto">Śledź nasze najnowsze realizacje!</div>
              <a href="#" class="pt-[10px] pb-[12px] px-[24px] bg-[#F5F0EC] text-green-900 rounded-full text-base transition-all hover:bg-slate-100 hover:shadow-md">Instagram</a>
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

    <div class="w-full flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between space-y-4">
      
      <img src="./svg/giarddesignWhite.svg" alt="logo" class="w-[115px]">
      <aside class="flex justify-between items-center h-auto gap-6 text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
        
        <div class="w-auto md:w-auto lg:w-auto xl:w-auto 2xl:w-auto">Daj znać, co możemy dla Ciebie zrobic!</div>
        <button class="w-git h-9 bg-green-900 py-2 px-3 rounded-full whitespace-nowrap flex justify-center items-center">
          <div class="px-6 pt-[12px] pb-[14px]">Skontaktuj się z nami</div>
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
      <div class="flex flex-col lg:flex-row md:flex-row xl:flex-row 2xl:flex-row gap-0 md:gap-8 w-fit">
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
        <img src="./svg/adRespect.svg" alt="adRespect">
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
// const sliderNext = () => {
//   const imageSlider = document.querySelector('#img-slider').src;
//   //   const right = document.querySelector('#right');
//   const path = imageSlider.replace(/^.*[\\/]/, '').split('.')[0];
//   const newPath = `${+path + 1}.png`;
//   imageSlider.src = { newPath };
//   console.log(newPath);
// };

const Hero = () => {
  const main = document.createElement('main');
  main.id = 'hero';

  main.innerHTML = `
  <div class="flex flex-col md:flex-row w-full h-auto md:h-[92vh]">
  
<div class="lg:w-1/2 bg-[#DCC1AB] flex justify-center items-center">

    <aside class="md:h-full flex flex-col justify-center items-center w-full md:w-3/4 lg:w-[599px] space-y-[72px] md:space-y-12 bg-[#DCC1AB] px-10 py-12 h-[92vh]">
    <div class="space-y-11">
        <div class="text-6xl">Nowoczesna aranżacja Twojego ogrodu</div>
        
        <div class="text-base leading-6">Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.</div>
    </div>

    <div class="lg:w-full flex flex-col space-y-3 lg:flex-row justify-start w-full md:w-auto md:justify-between [&>a]:cursor-pointer lg:space-y-0 lg:space-x-9">
        <button class="bg-green-800 text-white px-6 pt-[12px] pb-[14px] rounded-full w-fit hover:shadow-md lg:whitespace-nowrap hover:bg-green-900 transition-all">
            Skontaktuj się z nami
        </button>
        <a href="#realizacje" class="flex w-fit border-solid border-2 border-green-800 px-[22px] pt-[12px] pb-[14px] rounded-full text-green-800">
            <div class="flex justify-center items-center space-x-[8px]">
                <div class="flex items-center justify-center">
                    <p class="whitespace-nowrap">
                        Zobacz nasze realizacje
                    </p>
                </div>
                <img src="./svg/heroArrowDown.svg" alt="">
            </div>    
        </a>
    </div>

    </aside>

</div>

    <div class="h-[92vh] md:h-auto w-full relative bg-amber-200">
    <img src="1.jpg" class="h-full w-full" id="img-slider">
        <div class="flex bottom-0 right-0 absolute px-8 py-6 space-x-8 bg-[#F5F0EC]">
            <button class="w-[50px] h-[50px] flex justify-center items-center" id="left">
                <img src="./svg/sliderLeft.svg" alt="Poprzednie zdjęcie">
            </button>
            <button class="w-[50px] h-[50px] flex justify-center items-center" id="right">
                <img src="./svg/sliderRight.svg" alt="Następne zdjęcie">
            </button>
        </div>
    </div>
  
  </div>
  `;

  document.body.appendChild(main);

  const img = document.querySelector('#img-slider');
  const next = document.querySelector('#right');
  const prev = document.querySelector('#left');
  const images = ['1.jpg', '2.png'];
  let currentIndex = 0;

  const updateSliderImage = (index) => {
    img.src = images[index];
  };

  next.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateSliderImage(currentIndex);
    }
  });

  prev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderImage(currentIndex);
    }
  });
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
const searchField = (hide) => {
  const searchIcon = document.querySelector('#search-icon');
  const input = document.querySelector('#search-input');
  let isHidden = hide;
  searchIcon.addEventListener('click', () => {
    if (isHidden) {
      input.classList.remove('md:hidden');
      input.classList.remove('md:animate-hideInput');
      input.classList.add('md:animate-expandInput');
      isHidden = !isHidden;
      searchIcon.classList.remove('md:animate-rotateRight');
      searchIcon.classList.add('md:animate-rotateLeft');
    } else {
      searchIcon.classList.remove('md:animate-rotateLeft');
      searchIcon.classList.add('md:animate-rotateRight');
      input.classList.remove('md:animate-expandInput');
      input.classList.add('md:animate-hideInput');
      setTimeout(() => {
        input.classList.add('md:hidden');
      }, 530);
      isHidden = !isHidden;
    }
  });
};

const mobileMenu = (hide) => {
  let hidden = hide;
  const burgerMenu = document.querySelector('#burger-menu');
  const links = document.querySelector('#links');
  const input = document.querySelector('#search-input');
  const dropdown = document.querySelector('#dropdown');
  const about = document.querySelector('#about');
  const realizations = document.querySelector('#realizations');
  const contact = document.querySelector('#contact');

  burgerMenu.addEventListener('click', () => {
    if (hidden) {
      links.classList.remove('hidden');

      dropdown.classList.add('hidden');
      about.classList.add('hidden');
      realizations.classList.add('hidden');
      contact.classList.add('hidden');

      input.classList.add('hidden');

      links.classList.add('animate-showMobileMenu');

      setTimeout(() => {
        links.classList.add('flex');

        input.classList.remove('hidden');
        input.classList.add('block');
        input.classList.add('animate-expandInput');

        dropdown.classList.remove('hidden');
        about.classList.remove('hidden');
        realizations.classList.remove('hidden');
        contact.classList.remove('hidden');

        dropdown.classList.add('animate-opacity');
        about.classList.add('animate-opacity');
        realizations.classList.add('animate-opacity');
        contact.classList.add('animate-opacity');

        setTimeout(() => {
          dropdown.classList.remove('animate-opacity');
          about.classList.remove('animate-opacity');
          realizations.classList.remove('animate-opacity');
          contact.classList.remove('animate-opacity');
          links.classList.remove('animate-showMobileMenu');
        }, 300);
      }, 300);

      hidden = !hidden;
    } else {
      dropdown.classList.add('animate-decreaseOpacity');
      about.classList.add('animate-decreaseOpacity');
      realizations.classList.add('animate-decreaseOpacity');
      contact.classList.add('animate-decreaseOpacity');
      input.classList.add('animate-hideInput');

      setTimeout(() => {
        links.classList.add('animate-hideMobileMenu');
        setTimeout(() => {
          links.classList.remove('animate-hideMobileMenu');
          setTimeout(() => {
            links.classList.add('hidden');
            dropdown.classList.remove('animate-decreaseOpacity');
            about.classList.remove('animate-decreaseOpacity');
            realizations.classList.remove('animate-decreaseOpacity');
            contact.classList.remove('animate-decreaseOpacity');
            input.classList.remove('animate-hideInput');
          }, 0);
        }, 270);
      }, 270);

      hidden = !hidden;
    }
  });
};

const Nav = () => {
  const navbar = document.createElement('nav');
  navbar.classList =
    'bg-slate-100 w-full px-6 py-3 md:p-6 flex justify-between items-center sticky top-0 z-10 h-[8vh]';

  const logoContainer = document.createElement('span');
  logoContainer.textContent = 'Logo';
  logoContainer.innerHTML = `
    <a href="#hero">
      <img src="./svg/giarddesign.svg" alt="Logo">
    </a>
  `;

  const links = document.createElement('div');
  links.id = 'links';
  links.classList =
    'md:flex md:gap-10 gap-3 [&>*]:cursor-pointer md:flex-row md:relative md:m-0 justify-start items-start md:justify-center md:items-center fixed mt-[450px] rounded-xl py-5 px-6 md:p-0 bg-slate-100 flex flex-col left-1/2 -translate-x-1/2 w-[85vw] shadow-xl md:shadow-none md:w-auto md:left-0 md:translate-x-0 hidden animate-showMobileMenu md:animate-none';

  const dropdown = document.createElement('div');
  dropdown.id = 'dropdown';
  dropdown.classList.add('dropdown', 'flex', 'flex-col', 'group');

  const offersLink = document.createElement('a');
  offersLink.setAttribute('href', '#offers');
  offersLink.id = 'offer';
  offersLink.textContent = 'Oferta';
  offersLink.classList =
    'offers flex gap-2 justify-start items-start md:justify-center md:items-center h-auto group animate-opacity';

  const arrowContainer = document.createElement('div');
  arrowContainer.classList.add(
    'group-hover:rotate-180',
    'transition-all',
    'hidden',
    'md:block'
  );
  arrowContainer.innerHTML = `
  <img src="./svg/arrowDown.svg" alt="Rozwiń">
  `;

  const offersListContainer = document.createElement('div');
  offersListContainer.classList.add(
    'offers-list',
    'w-auto',
    'h-auto',
    'md:py-5',
    'md:px-6',
    'md:bg-slate-100',
    'md:mt-[9vh]',
    'md:shadow-xl',
    'md:rounded-md',
    'md:absolute',
    'group-hover:animate-slideDown',
    'md:hidden',
    'group-hover:block',
    'md:border-none',
    'border-l-2',
    'border-slate-300',
    'md:m-0',
    'ml-5',
    'mt-2'
  );
  const offersList = document.createElement('ul');
  offersList.id = 'offers-list';
  offersList.classList.add('space-y-2', 'md:text-center', 'relative');
  const offerElementOne = document.createElement('li');
  const offerElementTwo = document.createElement('li');
  const offerElementThree = document.createElement('li');
  offerElementOne.textContent = 'Projekty';
  offersList.appendChild(offerElementOne);
  offerElementTwo.textContent = 'Wizualizacje';
  offersList.appendChild(offerElementTwo);
  offerElementThree.textContent = 'Realizacje';
  offersList.appendChild(offerElementThree);

  // offersListContainer.addEventListener('mouseleave', () => {
  //   offersListContainer.classList.remove('animate-slideDown');
  //   offersListContainer.classList.add('animate-slideUp');
  // });

  // offersListContainer.addEventListener('mouseout', () => {
  //   offersListContainer.classList.remove('animate-slideDown');
  //   offersListContainer.classList.add('animate-slideUp');
  // });

  offersListContainer.appendChild(offersList);

  offersLink.appendChild(arrowContainer);

  dropdown.appendChild(offersLink);
  dropdown.appendChild(offersListContainer);

  const aboutLink = document.createElement('a');
  aboutLink.setAttribute('href', '#about');
  aboutLink.id = 'about';
  aboutLink.classList.add('animate-opacity');
  aboutLink.textContent = 'O firmie';

  const registerLink = document.createElement('a');
  registerLink.setAttribute('href', '#register');
  registerLink.id = 'realizations';
  registerLink.textContent = 'Realizacje';
  registerLink.classList.add('text-center', 'animate-opacity');

  const contactLink = document.createElement('a');
  contactLink.setAttribute('href', '#contact');
  contactLink.id = 'contact';
  contactLink.classList.add('animate-opacity');
  contactLink.textContent = 'Kontakt';

  const searchInput = document.createElement('input');
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('placeholder', 'Search');
  searchInput.id = 'search-input';
  searchInput.classList =
    'bg-transparent h-auto outline-none p-0.5 border-b-2 border-black md:hidden w-40 box-border';

  const searchContainer = document.createElement('div');
  searchContainer.classList = `flex justify-center items-center h-full hidden md:block animate-opacity`;
  searchContainer.innerHTML = `
  <img src="./svg/search.svg" alt="Szukaj" id="search-icon">
  `;

  const burgerMenu = document.createElement('div');
  burgerMenu.classList = 'md:hidden';
  burgerMenu.innerHTML = `
  <div class="space-y-2 cursor-pointer" id="burger-menu">
    <span class="block w-8 h-[0.2rem] bg-gray-600"></span>
    <span class="block w-8 h-[0.2rem] bg-gray-600"></span>
    <span class="block w-5 h-[0.2rem] bg-gray-600"></span>
  </div>
  `;

  links.appendChild(dropdown);
  links.appendChild(aboutLink);
  links.appendChild(registerLink);
  links.appendChild(contactLink);
  links.appendChild(searchInput);
  links.appendChild(searchContainer);
  navbar.appendChild(logoContainer);
  navbar.appendChild(links);
  navbar.appendChild(burgerMenu);

  const offersChildren = offersList.childNodes;
  offersChildren.forEach((offer) => {
    offer.classList.add(
      'px-2',
      'py-0.5',
      'hover:bg-slate-200',
      'hover:px-2',
      'hover:py-0.5',
      'hover:rounded-md',
      'hover:shadow-sm',
      'transition-all'
    );
  });

  document.body.appendChild(navbar);

  const isHidden = true;
  searchField(isHidden);
  mobileMenu(isHidden);
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
  <div class="flex-col bg-white md:w-80 w-72 h-auto md:h-[370px] space-y-10 md:space-y-20 py-12 px-10 rounded-xl transition-all hover:[transform:rotateY(360deg)] cursor-pointer hover:scale-105 hover:shadow-xl">
    <div class="space-y-3">
        <div>
            ${icon}
        </div>
        <div class="md:text-2xl text-xl">${title}</div>
        <div class="text-base">${description}</div>
    </div>
    <div class="flex flex-col w-fit cursor-pointer group">
        <div class="text-green-800 flex justify-start items-center space-x-2 border-b-2 border-green-800 md:border-none">
        
            <div class="md:text-base text-sm">
                Dowiedz się więcej
            </div>
            <div>
                <img src="./svg/offerArrowRight.svg" alt="">
            </div>

        </div>
        <div class="w-0 h-0 bg-green-800 transition-all group-hover:w-full group-hover:h-[2px]"></div>
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
  section.id = 'offers';
  section.classList =
    'flex-col w-full md:h-auto space-y-10 bg-[#F5F0EC] p-5 py-10 pt-[120px] pb-[160px] space-y-[96px]';

  section.innerHTML = `
  <div class="max-w-[1040px] flex-col space-y-5 w-3/4 m-auto">
    <div class="text-xs text-green-800">Oferta</div>
    <div class="md:text-5xl text-3xl">Działamy <i>kompleksowo</i></div>
    <div class="w-full text-base leading-6">
        Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne. Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie, a na każdym etapie posłużymy radą i wieloletnim doświadczeniem. 
    </div>
  </div>

  <div class="offers-view grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-16 w-auto h-full"></div>
  `;

  document.body.appendChild(section);

  const firstOfferTitle = 'Projekty';
  const firstOfferDescription =
    'Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.';
  const firstOfferIcon = `<img src="./svg/projectsIcon.svg" alt="">`;
  (0,_offer__WEBPACK_IMPORTED_MODULE_0__["default"])(firstOfferTitle, firstOfferDescription, firstOfferIcon);

  const secondOfferTitle = 'Wizualizacje';
  const secondOfferDescription =
    'Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.';
  const secondOfferIcon = `<img src="./svg/visualIcon.svg" alt="">`;
  (0,_offer__WEBPACK_IMPORTED_MODULE_0__["default"])(secondOfferTitle, secondOfferDescription, secondOfferIcon);

  const thirdOfferTitle = 'Realizacje';
  const thirdOfferDescription =
    'Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.';
  const thirdOfferIcon = `<img src="./svg/realizationsIcon.svg" alt="">`;
  (0,_offer__WEBPACK_IMPORTED_MODULE_0__["default"])(thirdOfferTitle, thirdOfferDescription, thirdOfferIcon);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Offers);


/***/ }),

/***/ "./src/components/realizations.js":
/*!****************************************!*\
  !*** ./src/components/realizations.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import Macy from 'macy';
// import Macy from 'macy';

const Realizations = () => {
  const section = document.createElement('section');
  section.id = 'realizations';
  section.classList.add(
    'bg-[#DCC1AB]',
    'w-full',
    'h-auto',
    'pt-[120px]',
    'pb-11'
  );
  section.innerHTML = `
    <div>
        <div class="w-full h-auto flex flex-col justify-start items-start gap-4 pl-40">
            <div class="text-green-800 text-xs">Realizacje</div>
            <div class="text-5xl">Nasze <i>projekty</i></div>
        </div>
    </div>
  `;

  //   const macy = Macy({
  //     container: '#macy-container',
  //     trueOrder: false,
  //     waitForImages: false,
  //     margin: 24,
  //     columns: 6,
  //     breakAt: {
  //       1200: 5,
  //       940: 3,
  //       520: 2,
  //       400: 1
  //     }
  //   });
  //   section.appendChild(macy);
  document.body.appendChild(section);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Realizations);


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
/* harmony import */ var _components_realizations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/realizations */ "./src/components/realizations.js");









const root = document.getElementsByTagName('html')[0];
root.classList.add('scroll-smooth');

document.body.classList.add('bg-[#F5F0EC]');

(0,_components_nav__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_hero__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_components_offers__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_components_about__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_components_realizations__WEBPACK_IMPORTED_MODULE_7__["default"])();
(0,_components_contact__WEBPACK_IMPORTED_MODULE_6__["default"])();
(0,_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbENyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUR0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN2RnBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMVFuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLDJDQUEyQyxNQUFNO0FBQ2pELGlDQUFpQyxZQUFZO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0RBQUs7QUFDUDtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6Q3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7O1VDdkM1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNjO0FBQ007QUFDSjtBQUNJO0FBQ0Y7QUFDSTtBQUNVOztBQUVyRDtBQUNBOztBQUVBOztBQUVBLDJEQUFHO0FBQ0gsNERBQUk7QUFDSiw4REFBTTtBQUNOLDZEQUFLO0FBQ0wsb0VBQVk7QUFDWiwrREFBTztBQUNQLDhEQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9hYm91dC5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9jb250YWN0LmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9oZXJvLmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL25hdi5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9vZmZlci5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9vZmZlcnMuanMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2NvbXBvbmVudHMvcmVhbGl6YXRpb25zLmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBBYm91dCA9ICgpID0+IHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIHNlY3Rpb24uaWQgPSAnYWJvdXQnO1xyXG5cclxuICBzZWN0aW9uLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgaC1bYXV0b10gYmctZ3JlZW4tOTAwIGZsZXgtY29sIGZsZXggbWQ6ZmxleC1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGJnLXNsYXRlLTMwMCBoLWF1dG9cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fib3V0UGhvdG8ucG5nXCIgYWx0PVwiTGFkbmUgemRqZWNpZVwiIGNsYXNzPVwiaC1mdWxsIHctZnVsbFwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgcHktMTAgdGV4dC1bI0Y1RjBFQ10gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTQvNSBzcGFjZS15LTIwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlLXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zbVwiPk8gZmlybWllPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LTR4bCB3LWZpdFwiPlR3b3J6eW15PC9icj4geiA8aT5wYXNqxIU8L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgS2HFvGR5IHByb2pla3QgdG8gbm93ZSB3eXp3YW5pZS4gRGxhdGVnbyBuYXN6IHplc3DDs8WCIHR3b3J6xIUgd3lrd2FsaWZpa293YW5pIHByb2pla3RhbmNpIG9yYXogYXJjaGl0ZWtjaSwga3TDs3J5Y2ggemFkYW5pZW0gamVzdCByb3pwb3puYW5pZSBpIHJlYWxpemFjamEgcG90cnplYiBrYcW8ZGVnbyBLbGllbnRhLiBOYXN6YSBzcGVjamFsaXphY2phIHRvIHByemVzdHJ6ZW5pZSBub3dvY3plc25lLCBrdMOzcmUgY2hhcmFrdGVyeXp1amUgbWluaW1hbGl6bSwgZ2VvbWV0cmlhIGkgZWxlZ2FuY2thIHByb3N0b3RhLiBUd29yenlteSBvZ3JvZHkgbWHFgm9vYnPFgnVnb3dlLCBkb3N0b3Nvd2FuZSBkbyB3c3DDs8WCY3plc25lZ28gdHJ5YnUgxbx5Y2lhLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1maXQgYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJvcmRlci1bI0Y1RjBFQ10tODAwIHB4LVsyNHB4XSBweS1bMTJweF0gcm91bmRlZC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNwYWNlLXgtMiB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzaGFkb3ctbWQgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUG96bmFqIG5hcyBibGnFvGVqXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9zdmcvYWJvdXRBcnJvd1JpZ2h0LnN2Z1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iLCJjb25zdCBDb250YWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgc2VjdGlvbi5pZCA9ICdjb250YWN0JztcclxuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3B5LVs2MHB4XScpO1xyXG5cclxuICBzZWN0aW9uLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiaC1mdWxsIHB4LTYgcHktNiB3LWZ1bGwgbGc6dy1hdXRvIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaC1hdXRvIGJnLWdyZWVuLTkwMCB3LWF1dG8gZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBsZzpqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtWyNGNUYwRUNdIHRleHQtWzQwcHhdIGxlYWRpbmctWzQ4cHhdIHNwYWNlLXktNiBwLTkgbWQ6cHgtMTYgbWQ6cHktMTQgbGc6cHgtWzExMHB4XSBsZzpweS1bMTEwcHhdIGxnOnNwYWNlLXgtMTYgbGc6aXRlbXMtZW5kXCI+XHJcbiAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCIgdy1mdWxsIGxnOndoaXRlc3BhY2Utbm93cmFwIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+Wm9zdGHFhG15IHcga29udGFrY2llITwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+Wm5hamR6aWVzeiBuYXMgbmEgPGk+PGI+SW5zdGFncmFtaWU8L2I+PC9pPi48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggbGc6ZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWVuZCBtZDppdGVtcy1zdGFydCB3LWZ1bGwgc3BhY2UteS02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtYmFzZSB3LVsxNTBweF0gbGc6dy1bMTUwcHhdIG1kOnctYXV0b1wiPsWabGVkxbogbmFzemUgbmFqbm93c3plIHJlYWxpemFjamUhPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInB0LVsxMHB4XSBwYi1bMTJweF0gcHgtWzI0cHhdIGJnLVsjRjVGMEVDXSB0ZXh0LWdyZWVuLTkwMCByb3VuZGVkLWZ1bGwgdGV4dC1iYXNlIHRyYW5zaXRpb24tYWxsIGhvdmVyOmJnLXNsYXRlLTEwMCBob3ZlcjpzaGFkb3ctbWRcIj5JbnN0YWdyYW08L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcclxuIiwiY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gIGNvbnN0IGZvb3RlckNsYXNzZXMgPSBgYmctYmxhY2sgdy1mdWxsIGgtYXV0byB0ZXh0LXdoaXRlIHB4LVs0MHB4XSBweS1bODBweF0gZmxleC1jb2wgc3BhY2UteS0yMGA7XHJcbiAgZm9vdGVyLmNsYXNzTGlzdCA9IGZvb3RlckNsYXNzZXM7XHJcbiAgZm9vdGVyLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiZmxleC1jb2wgc3BhY2UteS04XCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInctZnVsbCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGxnOmZsZXgtcm93IHhsOmZsZXgtcm93IDJ4bDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteS00XCI+XHJcbiAgICAgIFxyXG4gICAgICA8aW1nIHNyYz1cIi4vc3ZnL2dpYXJkZGVzaWduV2hpdGUuc3ZnXCIgYWx0PVwibG9nb1wiIGNsYXNzPVwidy1bMTE1cHhdXCI+XHJcbiAgICAgIDxhc2lkZSBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBoLWF1dG8gZ2FwLTYgdGV4dC1zbSBtZDp0ZXh0LWJhc2UgbGc6dGV4dC1iYXNlIHhsOnRleHQtYmFzZSAyeGw6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInctYXV0byBtZDp3LWF1dG8gbGc6dy1hdXRvIHhsOnctYXV0byAyeGw6dy1hdXRvXCI+RGFqIHpuYcSHLCBjbyBtb8W8ZW15IGRsYSBDaWViaWUgenJvYmljITwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ3LWdpdCBoLTkgYmctZ3JlZW4tOTAwIHB5LTIgcHgtMyByb3VuZGVkLWZ1bGwgd2hpdGVzcGFjZS1ub3dyYXAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC02IHB0LVsxMnB4XSBwYi1bMTRweF1cIj5Ta29udGFrdHVqIHNpxJkgeiBuYW1pPC9kaXY+XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8L2FzaWRlPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgaC1bMXB4XSBiZy1zbGF0ZS0zMDBcIj48L2Rpdj5cclxuXHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImZsZXggdy1mdWxsIG1kOmgtMTAgeGw6aC0xMCAyeGw6aC0xMCBsZzpoLTEwIGgtYXV0byBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgPHVsIGNsYXNzPVwiZmxleC1jb2wgbWQ6ZmxleC1yb3cgeGw6ZmxleCAyeGw6ZmxleCBsZzpmbGV4IGdhcC04XCIgPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPktvbnRha3Q8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5JbnN0YWdyYW08L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5GYWNlYm9vazwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkxpbmtlZGluPC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IG1kOmZsZXgtcm93IHhsOmZsZXgtcm93IDJ4bDpmbGV4LXJvdyBnYXAtMCBtZDpnYXAtOCB3LWZpdFwiPlxyXG4gICAgICAgIDxkaXY+MDAwLTAwMC0wMDA8L2Rpdj5cclxuICAgICAgICA8ZGl2PmdpYXJkZGVzaWduQGtvbnRha3QucGw8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIFwiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImgtZnVsbCBteS1hdXRvXCI+XHJcbiAgICAgICAgPGRpdj5QcmF3YSB6YXN0cnplxbxvbmUgwqkgMjAyMjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNwYWNlLXktMSB3LTMwIGgtZnVsbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LTIwIFwiPm1hZGUgYnk8L2Rpdj5cclxuICAgICAgICA8aW1nIHNyYz1cIi4vc3ZnL2FkUmVzcGVjdC5zdmdcIiBhbHQ9XCJhZFJlc3BlY3RcIj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIGA7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiLy8gY29uc3Qgc2xpZGVyTmV4dCA9ICgpID0+IHtcclxuLy8gICBjb25zdCBpbWFnZVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWctc2xpZGVyJykuc3JjO1xyXG4vLyAgIC8vICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmlnaHQnKTtcclxuLy8gICBjb25zdCBwYXRoID0gaW1hZ2VTbGlkZXIucmVwbGFjZSgvXi4qW1xcXFwvXS8sICcnKS5zcGxpdCgnLicpWzBdO1xyXG4vLyAgIGNvbnN0IG5ld1BhdGggPSBgJHsrcGF0aCArIDF9LnBuZ2A7XHJcbi8vICAgaW1hZ2VTbGlkZXIuc3JjID0geyBuZXdQYXRoIH07XHJcbi8vICAgY29uc29sZS5sb2cobmV3UGF0aCk7XHJcbi8vIH07XHJcblxyXG5jb25zdCBIZXJvID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgbWFpbi5pZCA9ICdoZXJvJztcclxuXHJcbiAgbWFpbi5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgdy1mdWxsIGgtYXV0byBtZDpoLVs5MnZoXVwiPlxyXG4gIFxyXG48ZGl2IGNsYXNzPVwibGc6dy0xLzIgYmctWyNEQ0MxQUJdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcblxyXG4gICAgPGFzaWRlIGNsYXNzPVwibWQ6aC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBtZDp3LTMvNCBsZzp3LVs1OTlweF0gc3BhY2UteS1bNzJweF0gbWQ6c3BhY2UteS0xMiBiZy1bI0RDQzFBQl0gcHgtMTAgcHktMTIgaC1bOTJ2aF1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJzcGFjZS15LTExXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtNnhsXCI+Tm93b2N6ZXNuYSBhcmFuxbxhY2phIFR3b2plZ28gb2dyb2R1PC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtYmFzZSBsZWFkaW5nLTZcIj5NYXJrYSBHaWFyZERlc2lnbiB0byB3aWVsb2xldG5pZSBkb8Wbd2lhZGN6ZW5pZSBpIHd5c29rYSBlc3RldHlrYSByZWFsaXphY2ppLiBPZmVydWplbXkga29tcGxla3Nvd3kgemFrcmVzIHVzxYJ1ZyB6IGluZHl3aWR1YWxueW0gcG9kZWrFm2NpZW0gZG8ga2HFvGRlZ28gcHJvamVrdHUuPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwibGc6dy1mdWxsIGZsZXggZmxleC1jb2wgc3BhY2UteS0zIGxnOmZsZXgtcm93IGp1c3RpZnktc3RhcnQgdy1mdWxsIG1kOnctYXV0byBtZDpqdXN0aWZ5LWJldHdlZW4gWyY+YV06Y3Vyc29yLXBvaW50ZXIgbGc6c3BhY2UteS0wIGxnOnNwYWNlLXgtOVwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJiZy1ncmVlbi04MDAgdGV4dC13aGl0ZSBweC02IHB0LVsxMnB4XSBwYi1bMTRweF0gcm91bmRlZC1mdWxsIHctZml0IGhvdmVyOnNoYWRvdy1tZCBsZzp3aGl0ZXNwYWNlLW5vd3JhcCBob3ZlcjpiZy1ncmVlbi05MDAgdHJhbnNpdGlvbi1hbGxcIj5cclxuICAgICAgICAgICAgU2tvbnRha3R1aiBzacSZIHogbmFtaVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjcmVhbGl6YWNqZVwiIGNsYXNzPVwiZmxleCB3LWZpdCBib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLWdyZWVuLTgwMCBweC1bMjJweF0gcHQtWzEycHhdIHBiLVsxNHB4XSByb3VuZGVkLWZ1bGwgdGV4dC1ncmVlbi04MDBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNwYWNlLXgtWzhweF1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwid2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgWm9iYWN6IG5hc3plIHJlYWxpemFjamVcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9zdmcvaGVyb0Fycm93RG93bi5zdmdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwvYXNpZGU+XHJcblxyXG48L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiaC1bOTJ2aF0gbWQ6aC1hdXRvIHctZnVsbCByZWxhdGl2ZSBiZy1hbWJlci0yMDBcIj5cclxuICAgIDxpbWcgc3JjPVwiMS5qcGdcIiBjbGFzcz1cImgtZnVsbCB3LWZ1bGxcIiBpZD1cImltZy1zbGlkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBib3R0b20tMCByaWdodC0wIGFic29sdXRlIHB4LTggcHktNiBzcGFjZS14LTggYmctWyNGNUYwRUNdXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ3LVs1MHB4XSBoLVs1MHB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiIGlkPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL3N2Zy9zbGlkZXJMZWZ0LnN2Z1wiIGFsdD1cIlBvcHJ6ZWRuaWUgemRqxJljaWVcIj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ3LVs1MHB4XSBoLVs1MHB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiIGlkPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9zdmcvc2xpZGVyUmlnaHQuc3ZnXCIgYWx0PVwiTmFzdMSZcG5lIHpkasSZY2llXCI+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgXHJcbiAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcclxuXHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltZy1zbGlkZXInKTtcclxuICBjb25zdCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JpZ2h0Jyk7XHJcbiAgY29uc3QgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0Jyk7XHJcbiAgY29uc3QgaW1hZ2VzID0gWycxLmpwZycsICcyLnBuZyddO1xyXG4gIGxldCBjdXJyZW50SW5kZXggPSAwO1xyXG5cclxuICBjb25zdCB1cGRhdGVTbGlkZXJJbWFnZSA9IChpbmRleCkgPT4ge1xyXG4gICAgaW1nLnNyYyA9IGltYWdlc1tpbmRleF07XHJcbiAgfTtcclxuXHJcbiAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChjdXJyZW50SW5kZXggPCBpbWFnZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICBjdXJyZW50SW5kZXgrKztcclxuICAgICAgdXBkYXRlU2xpZGVySW1hZ2UoY3VycmVudEluZGV4KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChjdXJyZW50SW5kZXggPiAwKSB7XHJcbiAgICAgIGN1cnJlbnRJbmRleC0tO1xyXG4gICAgICB1cGRhdGVTbGlkZXJJbWFnZShjdXJyZW50SW5kZXgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIiwiY29uc3Qgc2VhcmNoRmllbGQgPSAoaGlkZSkgPT4ge1xyXG4gIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWljb24nKTtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtaW5wdXQnKTtcclxuICBsZXQgaXNIaWRkZW4gPSBoaWRlO1xyXG4gIHNlYXJjaEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoaXNIaWRkZW4pIHtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnbWQ6aGlkZGVuJyk7XHJcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ21kOmFuaW1hdGUtaGlkZUlucHV0Jyk7XHJcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ21kOmFuaW1hdGUtZXhwYW5kSW5wdXQnKTtcclxuICAgICAgaXNIaWRkZW4gPSAhaXNIaWRkZW47XHJcbiAgICAgIHNlYXJjaEljb24uY2xhc3NMaXN0LnJlbW92ZSgnbWQ6YW5pbWF0ZS1yb3RhdGVSaWdodCcpO1xyXG4gICAgICBzZWFyY2hJY29uLmNsYXNzTGlzdC5hZGQoJ21kOmFuaW1hdGUtcm90YXRlTGVmdCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2VhcmNoSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdtZDphbmltYXRlLXJvdGF0ZUxlZnQnKTtcclxuICAgICAgc2VhcmNoSWNvbi5jbGFzc0xpc3QuYWRkKCdtZDphbmltYXRlLXJvdGF0ZVJpZ2h0Jyk7XHJcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ21kOmFuaW1hdGUtZXhwYW5kSW5wdXQnKTtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnbWQ6YW5pbWF0ZS1oaWRlSW5wdXQnKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnbWQ6aGlkZGVuJyk7XHJcbiAgICAgIH0sIDUzMCk7XHJcbiAgICAgIGlzSGlkZGVuID0gIWlzSGlkZGVuO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbW9iaWxlTWVudSA9IChoaWRlKSA9PiB7XHJcbiAgbGV0IGhpZGRlbiA9IGhpZGU7XHJcbiAgY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXJnZXItbWVudScpO1xyXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpbmtzJyk7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWlucHV0Jyk7XHJcbiAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcGRvd24nKTtcclxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dCcpO1xyXG4gIGNvbnN0IHJlYWxpemF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWFsaXphdGlvbnMnKTtcclxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKTtcclxuXHJcbiAgYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChoaWRkZW4pIHtcclxuICAgICAgbGlua3MuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblxyXG4gICAgICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgIHJlYWxpemF0aW9ucy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgbGlua3MuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1zaG93TW9iaWxlTWVudScpO1xyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbGlua3MuY2xhc3NMaXN0LmFkZCgnZmxleCcpO1xyXG5cclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdibG9jaycpO1xyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtZXhwYW5kSW5wdXQnKTtcclxuXHJcbiAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgYWJvdXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgcmVhbGl6YXRpb25zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtb3BhY2l0eScpO1xyXG4gICAgICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtb3BhY2l0eScpO1xyXG4gICAgICAgIHJlYWxpemF0aW9ucy5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLW9wYWNpdHknKTtcclxuICAgICAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtb3BhY2l0eScpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtb3BhY2l0eScpO1xyXG4gICAgICAgICAgYWJvdXQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICAgICAgICByZWFsaXphdGlvbnMuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICAgICAgICBjb250YWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtb3BhY2l0eScpO1xyXG4gICAgICAgICAgbGlua3MuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1zaG93TW9iaWxlTWVudScpO1xyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICAgIH0sIDMwMCk7XHJcblxyXG4gICAgICBoaWRkZW4gPSAhaGlkZGVuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgcmVhbGl6YXRpb25zLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtZGVjcmVhc2VPcGFjaXR5Jyk7XHJcbiAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1oaWRlSW5wdXQnKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtaGlkZU1vYmlsZU1lbnUnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGxpbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtaGlkZU1vYmlsZU1lbnUnKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgICAgICAgYWJvdXQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgICAgICAgcmVhbGl6YXRpb25zLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtZGVjcmVhc2VPcGFjaXR5Jyk7XHJcbiAgICAgICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1oaWRlSW5wdXQnKTtcclxuICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH0sIDI3MCk7XHJcbiAgICAgIH0sIDI3MCk7XHJcblxyXG4gICAgICBoaWRkZW4gPSAhaGlkZGVuO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gIG5hdmJhci5jbGFzc0xpc3QgPVxyXG4gICAgJ2JnLXNsYXRlLTEwMCB3LWZ1bGwgcHgtNiBweS0zIG1kOnAtNiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgc3RpY2t5IHRvcC0wIHotMTAgaC1bOHZoXSc7XHJcblxyXG4gIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgbG9nb0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICdMb2dvJztcclxuICBsb2dvQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgIDxhIGhyZWY9XCIjaGVyb1wiPlxyXG4gICAgICA8aW1nIHNyYz1cIi4vc3ZnL2dpYXJkZGVzaWduLnN2Z1wiIGFsdD1cIkxvZ29cIj5cclxuICAgIDwvYT5cclxuICBgO1xyXG5cclxuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxpbmtzLmlkID0gJ2xpbmtzJztcclxuICBsaW5rcy5jbGFzc0xpc3QgPVxyXG4gICAgJ21kOmZsZXggbWQ6Z2FwLTEwIGdhcC0zIFsmPipdOmN1cnNvci1wb2ludGVyIG1kOmZsZXgtcm93IG1kOnJlbGF0aXZlIG1kOm0tMCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IG1kOmp1c3RpZnktY2VudGVyIG1kOml0ZW1zLWNlbnRlciBmaXhlZCBtdC1bNDUwcHhdIHJvdW5kZWQteGwgcHktNSBweC02IG1kOnAtMCBiZy1zbGF0ZS0xMDAgZmxleCBmbGV4LWNvbCBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIHctWzg1dnddIHNoYWRvdy14bCBtZDpzaGFkb3ctbm9uZSBtZDp3LWF1dG8gbWQ6bGVmdC0wIG1kOnRyYW5zbGF0ZS14LTAgaGlkZGVuIGFuaW1hdGUtc2hvd01vYmlsZU1lbnUgbWQ6YW5pbWF0ZS1ub25lJztcclxuXHJcbiAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkcm9wZG93bi5pZCA9ICdkcm9wZG93bic7XHJcbiAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24nLCAnZmxleCcsICdmbGV4LWNvbCcsICdncm91cCcpO1xyXG5cclxuICBjb25zdCBvZmZlcnNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIG9mZmVyc0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyNvZmZlcnMnKTtcclxuICBvZmZlcnNMaW5rLmlkID0gJ29mZmVyJztcclxuICBvZmZlcnNMaW5rLnRleHRDb250ZW50ID0gJ09mZXJ0YSc7XHJcbiAgb2ZmZXJzTGluay5jbGFzc0xpc3QgPVxyXG4gICAgJ29mZmVycyBmbGV4IGdhcC0yIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgbWQ6anVzdGlmeS1jZW50ZXIgbWQ6aXRlbXMtY2VudGVyIGgtYXV0byBncm91cCBhbmltYXRlLW9wYWNpdHknO1xyXG5cclxuICBjb25zdCBhcnJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFycm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAnZ3JvdXAtaG92ZXI6cm90YXRlLTE4MCcsXHJcbiAgICAndHJhbnNpdGlvbi1hbGwnLFxyXG4gICAgJ2hpZGRlbicsXHJcbiAgICAnbWQ6YmxvY2snXHJcbiAgKTtcclxuICBhcnJvd0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgPGltZyBzcmM9XCIuL3N2Zy9hcnJvd0Rvd24uc3ZnXCIgYWx0PVwiUm96d2nFhFwiPlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IG9mZmVyc0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvZmZlcnNMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAnb2ZmZXJzLWxpc3QnLFxyXG4gICAgJ3ctYXV0bycsXHJcbiAgICAnaC1hdXRvJyxcclxuICAgICdtZDpweS01JyxcclxuICAgICdtZDpweC02JyxcclxuICAgICdtZDpiZy1zbGF0ZS0xMDAnLFxyXG4gICAgJ21kOm10LVs5dmhdJyxcclxuICAgICdtZDpzaGFkb3cteGwnLFxyXG4gICAgJ21kOnJvdW5kZWQtbWQnLFxyXG4gICAgJ21kOmFic29sdXRlJyxcclxuICAgICdncm91cC1ob3ZlcjphbmltYXRlLXNsaWRlRG93bicsXHJcbiAgICAnbWQ6aGlkZGVuJyxcclxuICAgICdncm91cC1ob3ZlcjpibG9jaycsXHJcbiAgICAnbWQ6Ym9yZGVyLW5vbmUnLFxyXG4gICAgJ2JvcmRlci1sLTInLFxyXG4gICAgJ2JvcmRlci1zbGF0ZS0zMDAnLFxyXG4gICAgJ21kOm0tMCcsXHJcbiAgICAnbWwtNScsXHJcbiAgICAnbXQtMidcclxuICApO1xyXG4gIGNvbnN0IG9mZmVyc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIG9mZmVyc0xpc3QuaWQgPSAnb2ZmZXJzLWxpc3QnO1xyXG4gIG9mZmVyc0xpc3QuY2xhc3NMaXN0LmFkZCgnc3BhY2UteS0yJywgJ21kOnRleHQtY2VudGVyJywgJ3JlbGF0aXZlJyk7XHJcbiAgY29uc3Qgb2ZmZXJFbGVtZW50T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBjb25zdCBvZmZlckVsZW1lbnRUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGNvbnN0IG9mZmVyRWxlbWVudFRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBvZmZlckVsZW1lbnRPbmUudGV4dENvbnRlbnQgPSAnUHJvamVrdHknO1xyXG4gIG9mZmVyc0xpc3QuYXBwZW5kQ2hpbGQob2ZmZXJFbGVtZW50T25lKTtcclxuICBvZmZlckVsZW1lbnRUd28udGV4dENvbnRlbnQgPSAnV2l6dWFsaXphY2plJztcclxuICBvZmZlcnNMaXN0LmFwcGVuZENoaWxkKG9mZmVyRWxlbWVudFR3byk7XHJcbiAgb2ZmZXJFbGVtZW50VGhyZWUudGV4dENvbnRlbnQgPSAnUmVhbGl6YWNqZSc7XHJcbiAgb2ZmZXJzTGlzdC5hcHBlbmRDaGlsZChvZmZlckVsZW1lbnRUaHJlZSk7XHJcblxyXG4gIC8vIG9mZmVyc0xpc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAvLyAgIG9mZmVyc0xpc3RDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1zbGlkZURvd24nKTtcclxuICAvLyAgIG9mZmVyc0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1zbGlkZVVwJyk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vIG9mZmVyc0xpc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XHJcbiAgLy8gICBvZmZlcnNMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtc2xpZGVEb3duJyk7XHJcbiAgLy8gICBvZmZlcnNMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtc2xpZGVVcCcpO1xyXG4gIC8vIH0pO1xyXG5cclxuICBvZmZlcnNMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG9mZmVyc0xpc3QpO1xyXG5cclxuICBvZmZlcnNMaW5rLmFwcGVuZENoaWxkKGFycm93Q29udGFpbmVyKTtcclxuXHJcbiAgZHJvcGRvd24uYXBwZW5kQ2hpbGQob2ZmZXJzTGluayk7XHJcbiAgZHJvcGRvd24uYXBwZW5kQ2hpbGQob2ZmZXJzTGlzdENvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBhYm91dExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyNhYm91dCcpO1xyXG4gIGFib3V0TGluay5pZCA9ICdhYm91dCc7XHJcbiAgYWJvdXRMaW5rLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtb3BhY2l0eScpO1xyXG4gIGFib3V0TGluay50ZXh0Q29udGVudCA9ICdPIGZpcm1pZSc7XHJcblxyXG4gIGNvbnN0IHJlZ2lzdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICByZWdpc3Rlckxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyNyZWdpc3RlcicpO1xyXG4gIHJlZ2lzdGVyTGluay5pZCA9ICdyZWFsaXphdGlvbnMnO1xyXG4gIHJlZ2lzdGVyTGluay50ZXh0Q29udGVudCA9ICdSZWFsaXphY2plJztcclxuICByZWdpc3RlckxpbmsuY2xhc3NMaXN0LmFkZCgndGV4dC1jZW50ZXInLCAnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGNvbnRhY3RMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjY29udGFjdCcpO1xyXG4gIGNvbnRhY3RMaW5rLmlkID0gJ2NvbnRhY3QnO1xyXG4gIGNvbnRhY3RMaW5rLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtb3BhY2l0eScpO1xyXG4gIGNvbnRhY3RMaW5rLnRleHRDb250ZW50ID0gJ0tvbnRha3QnO1xyXG5cclxuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NlYXJjaCcpO1xyXG4gIHNlYXJjaElucHV0LmlkID0gJ3NlYXJjaC1pbnB1dCc7XHJcbiAgc2VhcmNoSW5wdXQuY2xhc3NMaXN0ID1cclxuICAgICdiZy10cmFuc3BhcmVudCBoLWF1dG8gb3V0bGluZS1ub25lIHAtMC41IGJvcmRlci1iLTIgYm9yZGVyLWJsYWNrIG1kOmhpZGRlbiB3LTQwIGJveC1ib3JkZXInO1xyXG5cclxuICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0ID0gYGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtZnVsbCBoaWRkZW4gbWQ6YmxvY2sgYW5pbWF0ZS1vcGFjaXR5YDtcclxuICBzZWFyY2hDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gIDxpbWcgc3JjPVwiLi9zdmcvc2VhcmNoLnN2Z1wiIGFsdD1cIlN6dWthalwiIGlkPVwic2VhcmNoLWljb25cIj5cclxuICBgO1xyXG5cclxuICBjb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnVyZ2VyTWVudS5jbGFzc0xpc3QgPSAnbWQ6aGlkZGVuJztcclxuICBidXJnZXJNZW51LmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwic3BhY2UteS0yIGN1cnNvci1wb2ludGVyXCIgaWQ9XCJidXJnZXItbWVudVwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJibG9jayB3LTggaC1bMC4ycmVtXSBiZy1ncmF5LTYwMFwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdy04IGgtWzAuMnJlbV0gYmctZ3JheS02MDBcIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHctNSBoLVswLjJyZW1dIGJnLWdyYXktNjAwXCI+PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGxpbmtzLmFwcGVuZENoaWxkKGRyb3Bkb3duKTtcclxuICBsaW5rcy5hcHBlbmRDaGlsZChhYm91dExpbmspO1xyXG4gIGxpbmtzLmFwcGVuZENoaWxkKHJlZ2lzdGVyTGluayk7XHJcbiAgbGlua3MuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xyXG4gIGxpbmtzLmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcclxuICBsaW5rcy5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xyXG4gIG5hdmJhci5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcclxuICBuYXZiYXIuYXBwZW5kQ2hpbGQobGlua3MpO1xyXG4gIG5hdmJhci5hcHBlbmRDaGlsZChidXJnZXJNZW51KTtcclxuXHJcbiAgY29uc3Qgb2ZmZXJzQ2hpbGRyZW4gPSBvZmZlcnNMaXN0LmNoaWxkTm9kZXM7XHJcbiAgb2ZmZXJzQ2hpbGRyZW4uZm9yRWFjaCgob2ZmZXIpID0+IHtcclxuICAgIG9mZmVyLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICdweC0yJyxcclxuICAgICAgJ3B5LTAuNScsXHJcbiAgICAgICdob3ZlcjpiZy1zbGF0ZS0yMDAnLFxyXG4gICAgICAnaG92ZXI6cHgtMicsXHJcbiAgICAgICdob3ZlcjpweS0wLjUnLFxyXG4gICAgICAnaG92ZXI6cm91bmRlZC1tZCcsXHJcbiAgICAgICdob3ZlcjpzaGFkb3ctc20nLFxyXG4gICAgICAndHJhbnNpdGlvbi1hbGwnXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5hdmJhcik7XHJcblxyXG4gIGNvbnN0IGlzSGlkZGVuID0gdHJ1ZTtcclxuICBzZWFyY2hGaWVsZChpc0hpZGRlbik7XHJcbiAgbW9iaWxlTWVudShpc0hpZGRlbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiIsImNvbnN0IE9mZmVyID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgaWNvbikgPT4ge1xyXG4gIGNvbnN0IG9mZmVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9mZmVycy12aWV3Jyk7XHJcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2UuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJmbGV4LWNvbCBiZy13aGl0ZSBtZDp3LTgwIHctNzIgaC1hdXRvIG1kOmgtWzM3MHB4XSBzcGFjZS15LTEwIG1kOnNwYWNlLXktMjAgcHktMTIgcHgtMTAgcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbCBob3ZlcjpbdHJhbnNmb3JtOnJvdGF0ZVkoMzYwZGVnKV0gY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtMTA1IGhvdmVyOnNoYWRvdy14bFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInNwYWNlLXktM1wiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICR7aWNvbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6dGV4dC0yeGwgdGV4dC14bFwiPiR7dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtYmFzZVwiPiR7ZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIHctZml0IGN1cnNvci1wb2ludGVyIGdyb3VwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZ3JlZW4tODAwIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGJvcmRlci1iLTIgYm9yZGVyLWdyZWVuLTgwMCBtZDpib3JkZXItbm9uZVwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6dGV4dC1iYXNlIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgIERvd2llZHogc2nEmSB3acSZY2VqXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL3N2Zy9vZmZlckFycm93UmlnaHQuc3ZnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidy0wIGgtMCBiZy1ncmVlbi04MDAgdHJhbnNpdGlvbi1hbGwgZ3JvdXAtaG92ZXI6dy1mdWxsIGdyb3VwLWhvdmVyOmgtWzJweF1cIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcbiAgb2ZmZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPZmZlcjtcclxuIiwiaW1wb3J0IE9mZmVyIGZyb20gJy4vb2ZmZXInO1xyXG5cclxuY29uc3QgT2ZmZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgc2VjdGlvbi5pZCA9ICdvZmZlcnMnO1xyXG4gIHNlY3Rpb24uY2xhc3NMaXN0ID1cclxuICAgICdmbGV4LWNvbCB3LWZ1bGwgbWQ6aC1hdXRvIHNwYWNlLXktMTAgYmctWyNGNUYwRUNdIHAtNSBweS0xMCBwdC1bMTIwcHhdIHBiLVsxNjBweF0gc3BhY2UteS1bOTZweF0nO1xyXG5cclxuICBzZWN0aW9uLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwibWF4LXctWzEwNDBweF0gZmxleC1jb2wgc3BhY2UteS01IHctMy80IG0tYXV0b1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRleHQteHMgdGV4dC1ncmVlbi04MDBcIj5PZmVydGE8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZDp0ZXh0LTV4bCB0ZXh0LTN4bFwiPkR6aWHFgmFteSA8aT5rb21wbGVrc293bzwvaT48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgdGV4dC1iYXNlIGxlYWRpbmctNlwiPlxyXG4gICAgICAgIE9mZXJ1amVteSBrb21wbGV0bsSFIG9ic8WCdWfEmSBpbndlc3R5Y2ppIHRlcmVuw7N3IHppZWxvbnljaC4gUHJvamVrdHVqZW15IG5vd29jemVzbmUgb2dyb2R5IHByenlkb21vd2Ugb3JheiByZXp5ZGVuY2pvbmFsbmUuIFN0d29yenlteSBkbGEgQ2llYmllIHByb2pla3QsIHp3aXp1YWxpenVqZW15IGdvIGkgd2NpZWxpbXkgdyDFvHljaWUsIGEgbmEga2HFvGR5bSBldGFwaWUgcG9zxYJ1xbx5bXkgcmFkxIUgaSB3aWVsb2xldG5pbSBkb8Wbd2lhZGN6ZW5pZW0uIFxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJvZmZlcnMtdmlldyBncmlkIGdyaWQtY29scy0xIHBsYWNlLWl0ZW1zLWNlbnRlciBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtMTYgdy1hdXRvIGgtZnVsbFwiPjwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcblxyXG4gIGNvbnN0IGZpcnN0T2ZmZXJUaXRsZSA9ICdQcm9qZWt0eSc7XHJcbiAgY29uc3QgZmlyc3RPZmZlckRlc2NyaXB0aW9uID1cclxuICAgICdaYXByb2pla3R1amVteSBUd8OzaiBvZ3LDs2QgdyBub3dvY3plc255bSBzdHlsdSBpIHogbmFqbGVwc3p5bSB3eWtvcnp5c3RhbmllbSBpc3RuaWVqxIVjZWogcHJ6ZXN0cnplbmkuJztcclxuICBjb25zdCBmaXJzdE9mZmVySWNvbiA9IGA8aW1nIHNyYz1cIi4vc3ZnL3Byb2plY3RzSWNvbi5zdmdcIiBhbHQ9XCJcIj5gO1xyXG4gIE9mZmVyKGZpcnN0T2ZmZXJUaXRsZSwgZmlyc3RPZmZlckRlc2NyaXB0aW9uLCBmaXJzdE9mZmVySWNvbik7XHJcblxyXG4gIGNvbnN0IHNlY29uZE9mZmVyVGl0bGUgPSAnV2l6dWFsaXphY2plJztcclxuICBjb25zdCBzZWNvbmRPZmZlckRlc2NyaXB0aW9uID1cclxuICAgICdQcnplZHN0YXdpbXkgQ2kgcHJvamVrdHkga29uY2VwY3lqbmUgdyBwb3N0YWNpIHdpcnR1YWxuZWdvIHNwYWNlcnUgYW5pbW93YW5lZ28gdyB0ZWNobm9sb2dpaSAzRC4nO1xyXG4gIGNvbnN0IHNlY29uZE9mZmVySWNvbiA9IGA8aW1nIHNyYz1cIi4vc3ZnL3Zpc3VhbEljb24uc3ZnXCIgYWx0PVwiXCI+YDtcclxuICBPZmZlcihzZWNvbmRPZmZlclRpdGxlLCBzZWNvbmRPZmZlckRlc2NyaXB0aW9uLCBzZWNvbmRPZmZlckljb24pO1xyXG5cclxuICBjb25zdCB0aGlyZE9mZmVyVGl0bGUgPSAnUmVhbGl6YWNqZSc7XHJcbiAgY29uc3QgdGhpcmRPZmZlckRlc2NyaXB0aW9uID1cclxuICAgICdacmVhbGl6dWplbXkgVHdvamUgbWFyemVuaWUgcHJ6eSB1xbx5Y2l1IG5ham5vd3N6eWNoIHJvendpxIV6YcWEIGkgemFhd2Fuc293YW55Y2ggdGVjaG5vbG9naWkuJztcclxuICBjb25zdCB0aGlyZE9mZmVySWNvbiA9IGA8aW1nIHNyYz1cIi4vc3ZnL3JlYWxpemF0aW9uc0ljb24uc3ZnXCIgYWx0PVwiXCI+YDtcclxuICBPZmZlcih0aGlyZE9mZmVyVGl0bGUsIHRoaXJkT2ZmZXJEZXNjcmlwdGlvbiwgdGhpcmRPZmZlckljb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2ZmZXJzO1xyXG4iLCIvLyBpbXBvcnQgTWFjeSBmcm9tICdtYWN5JztcclxuLy8gaW1wb3J0IE1hY3kgZnJvbSAnbWFjeSc7XHJcblxyXG5jb25zdCBSZWFsaXphdGlvbnMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBzZWN0aW9uLmlkID0gJ3JlYWxpemF0aW9ucyc7XHJcbiAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFxyXG4gICAgJ2JnLVsjRENDMUFCXScsXHJcbiAgICAndy1mdWxsJyxcclxuICAgICdoLWF1dG8nLFxyXG4gICAgJ3B0LVsxMjBweF0nLFxyXG4gICAgJ3BiLTExJ1xyXG4gICk7XHJcbiAgc2VjdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgaC1hdXRvIGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCBnYXAtNCBwbC00MFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmVlbi04MDAgdGV4dC14c1wiPlJlYWxpemFjamU8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtNXhsXCI+TmFzemUgPGk+cHJvamVrdHk8L2k+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICAvLyAgIGNvbnN0IG1hY3kgPSBNYWN5KHtcclxuICAvLyAgICAgY29udGFpbmVyOiAnI21hY3ktY29udGFpbmVyJyxcclxuICAvLyAgICAgdHJ1ZU9yZGVyOiBmYWxzZSxcclxuICAvLyAgICAgd2FpdEZvckltYWdlczogZmFsc2UsXHJcbiAgLy8gICAgIG1hcmdpbjogMjQsXHJcbiAgLy8gICAgIGNvbHVtbnM6IDYsXHJcbiAgLy8gICAgIGJyZWFrQXQ6IHtcclxuICAvLyAgICAgICAxMjAwOiA1LFxyXG4gIC8vICAgICAgIDk0MDogMyxcclxuICAvLyAgICAgICA1MjA6IDIsXHJcbiAgLy8gICAgICAgNDAwOiAxXHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pO1xyXG4gIC8vICAgc2VjdGlvbi5hcHBlbmRDaGlsZChtYWN5KTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhbGl6YXRpb25zO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IE5hdiBmcm9tICcuL2NvbXBvbmVudHMvbmF2JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgSGVybyBmcm9tICcuL2NvbXBvbmVudHMvaGVybyc7XG5pbXBvcnQgT2ZmZXJzIGZyb20gJy4vY29tcG9uZW50cy9vZmZlcnMnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vY29tcG9uZW50cy9hYm91dCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL2NvbXBvbmVudHMvY29udGFjdCc7XG5pbXBvcnQgUmVhbGl6YXRpb25zIGZyb20gJy4vY29tcG9uZW50cy9yZWFsaXphdGlvbnMnO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXTtcbnJvb3QuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLXNtb290aCcpO1xuXG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JnLVsjRjVGMEVDXScpO1xuXG5OYXYoKTtcbkhlcm8oKTtcbk9mZmVycygpO1xuQWJvdXQoKTtcblJlYWxpemF0aW9ucygpO1xuQ29udGFjdCgpO1xuRm9vdGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=