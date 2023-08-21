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
  <div class="flex flex-col md:flex-row w-full h-[92vh]">
  
    <aside class="h-full flex flex-col justify-center items-center w-full md:w-3/4 space-y-16 md:space-y-12 bg-[#DCC1AB] px-10 py-12">
        <div class="space-y-10">
            <div class="text-6xl">Nowoczesna aranżacja Twojego ogrodu</div>
            
            <div class="text-base leading-6">Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.</div>
        </div>

        <div class=" flex flex-col space-y-3 lg:flex-row justify-between [&>a]:cursor-pointer lg:space-y-0 lg:space-x-9">
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

    <div class="h-screen md:h-auto w-full relative bg-amber-200">
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
        <div class="md:text-base text-sm">${description}</div>
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
    <div class="md:text-base w-full text-md leading-6">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbENyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUR0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkZwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzFRbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSwyQ0FBMkMsTUFBTTtBQUNqRCw0Q0FBNEMsWUFBWTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzlCTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0RBQUs7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFLO0FBQ1A7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFlBQVksRUFBQzs7Ozs7OztVQ3ZDNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDYztBQUNNO0FBQ0o7QUFDSTtBQUNGO0FBQ0k7QUFDVTs7QUFFckQ7QUFDQTs7QUFFQTs7QUFFQSwyREFBRztBQUNILDREQUFJO0FBQ0osOERBQU07QUFDTiw2REFBSztBQUNMLG9FQUFZO0FBQ1osK0RBQU87QUFDUCw4REFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9zdHlsZS5jc3M/ZmU5ZSIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9hYm91dC5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9jb250YWN0LmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9oZXJvLmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL25hdi5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9vZmZlci5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9vZmZlcnMuanMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2NvbXBvbmVudHMvcmVhbGl6YXRpb25zLmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBBYm91dCA9ICgpID0+IHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIHNlY3Rpb24uaWQgPSAnYWJvdXQnO1xyXG5cclxuICBzZWN0aW9uLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgaC1bYXV0b10gYmctZ3JlZW4tOTAwIGZsZXgtY29sIGZsZXggbWQ6ZmxleC1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGJnLXNsYXRlLTMwMCBoLWF1dG9cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fib3V0UGhvdG8ucG5nXCIgYWx0PVwiTGFkbmUgemRqZWNpZVwiIGNsYXNzPVwiaC1mdWxsIHctZnVsbFwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgcHktMTAgdGV4dC1bI0Y1RjBFQ10gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTQvNSBzcGFjZS15LTIwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlLXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zbVwiPk8gZmlybWllPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LTR4bCB3LWZpdFwiPlR3b3J6eW15PC9icj4geiA8aT5wYXNqxIU8L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgS2HFvGR5IHByb2pla3QgdG8gbm93ZSB3eXp3YW5pZS4gRGxhdGVnbyBuYXN6IHplc3DDs8WCIHR3b3J6xIUgd3lrd2FsaWZpa293YW5pIHByb2pla3RhbmNpIG9yYXogYXJjaGl0ZWtjaSwga3TDs3J5Y2ggemFkYW5pZW0gamVzdCByb3pwb3puYW5pZSBpIHJlYWxpemFjamEgcG90cnplYiBrYcW8ZGVnbyBLbGllbnRhLiBOYXN6YSBzcGVjamFsaXphY2phIHRvIHByemVzdHJ6ZW5pZSBub3dvY3plc25lLCBrdMOzcmUgY2hhcmFrdGVyeXp1amUgbWluaW1hbGl6bSwgZ2VvbWV0cmlhIGkgZWxlZ2FuY2thIHByb3N0b3RhLiBUd29yenlteSBvZ3JvZHkgbWHFgm9vYnPFgnVnb3dlLCBkb3N0b3Nvd2FuZSBkbyB3c3DDs8WCY3plc25lZ28gdHJ5YnUgxbx5Y2lhLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1maXQgYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJvcmRlci1bI0Y1RjBFQ10tODAwIHB4LVsyNHB4XSBweS1bMTJweF0gcm91bmRlZC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNwYWNlLXgtMiB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzaGFkb3ctbWQgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUG96bmFqIG5hcyBibGnFvGVqXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9zdmcvYWJvdXRBcnJvd1JpZ2h0LnN2Z1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iLCJjb25zdCBDb250YWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgc2VjdGlvbi5pZCA9ICdjb250YWN0JztcclxuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3B5LVs2MHB4XScpO1xyXG5cclxuICBzZWN0aW9uLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiaC1mdWxsIHB4LTYgcHktNiB3LWZ1bGwgbGc6dy1hdXRvIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaC1hdXRvIGJnLWdyZWVuLTkwMCB3LWF1dG8gZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBsZzpqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtWyNGNUYwRUNdIHRleHQtWzQwcHhdIGxlYWRpbmctWzQ4cHhdIHNwYWNlLXktNiBwLTkgbWQ6cHgtMTYgbWQ6cHktMTQgbGc6cHgtWzExMHB4XSBsZzpweS1bMTEwcHhdIGxnOnNwYWNlLXgtMTYgbGc6aXRlbXMtZW5kXCI+XHJcbiAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCIgdy1mdWxsIGxnOndoaXRlc3BhY2Utbm93cmFwIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+Wm9zdGHFhG15IHcga29udGFrY2llITwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+Wm5hamR6aWVzeiBuYXMgbmEgPGk+PGI+SW5zdGFncmFtaWU8L2I+PC9pPi48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggbGc6ZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWVuZCBtZDppdGVtcy1zdGFydCB3LWZ1bGwgc3BhY2UteS02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtYmFzZSB3LVsxNTBweF0gbGc6dy1bMTUwcHhdIG1kOnctYXV0b1wiPsWabGVkxbogbmFzemUgbmFqbm93c3plIHJlYWxpemFjamUhPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInB0LVsxMHB4XSBwYi1bMTJweF0gcHgtWzI0cHhdIGJnLVsjRjVGMEVDXSB0ZXh0LWdyZWVuLTkwMCByb3VuZGVkLWZ1bGwgdGV4dC1iYXNlIHRyYW5zaXRpb24tYWxsIGhvdmVyOmJnLXNsYXRlLTEwMCBob3ZlcjpzaGFkb3ctbWRcIj5JbnN0YWdyYW08L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcclxuIiwiY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gIGNvbnN0IGZvb3RlckNsYXNzZXMgPSBgYmctYmxhY2sgdy1mdWxsIGgtYXV0byB0ZXh0LXdoaXRlIHB4LVs0MHB4XSBweS1bODBweF0gZmxleC1jb2wgc3BhY2UteS0yMGA7XHJcbiAgZm9vdGVyLmNsYXNzTGlzdCA9IGZvb3RlckNsYXNzZXM7XHJcbiAgZm9vdGVyLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiZmxleC1jb2wgc3BhY2UteS04XCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInctZnVsbCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGxnOmZsZXgtcm93IHhsOmZsZXgtcm93IDJ4bDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteS00XCI+XHJcbiAgICAgIFxyXG4gICAgICA8aW1nIHNyYz1cIi4vc3ZnL2dpYXJkZGVzaWduV2hpdGUuc3ZnXCIgYWx0PVwibG9nb1wiIGNsYXNzPVwidy1bMTE1cHhdXCI+XHJcbiAgICAgIDxhc2lkZSBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBoLWF1dG8gZ2FwLTYgdGV4dC1zbSBtZDp0ZXh0LWJhc2UgbGc6dGV4dC1iYXNlIHhsOnRleHQtYmFzZSAyeGw6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInctYXV0byBtZDp3LWF1dG8gbGc6dy1hdXRvIHhsOnctYXV0byAyeGw6dy1hdXRvXCI+RGFqIHpuYcSHLCBjbyBtb8W8ZW15IGRsYSBDaWViaWUgenJvYmljITwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ3LWdpdCBoLTkgYmctZ3JlZW4tOTAwIHB5LTIgcHgtMyByb3VuZGVkLWZ1bGwgd2hpdGVzcGFjZS1ub3dyYXAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC02IHB0LVsxMnB4XSBwYi1bMTRweF1cIj5Ta29udGFrdHVqIHNpxJkgeiBuYW1pPC9kaXY+XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8L2FzaWRlPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgaC1bMXB4XSBiZy1zbGF0ZS0zMDBcIj48L2Rpdj5cclxuXHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImZsZXggdy1mdWxsIG1kOmgtMTAgeGw6aC0xMCAyeGw6aC0xMCBsZzpoLTEwIGgtYXV0byBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgPHVsIGNsYXNzPVwiZmxleC1jb2wgbWQ6ZmxleC1yb3cgeGw6ZmxleCAyeGw6ZmxleCBsZzpmbGV4IGdhcC04XCIgPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPktvbnRha3Q8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5JbnN0YWdyYW08L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5GYWNlYm9vazwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkxpbmtlZGluPC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IG1kOmZsZXgtcm93IHhsOmZsZXgtcm93IDJ4bDpmbGV4LXJvdyBnYXAtMCBtZDpnYXAtOCB3LWZpdFwiPlxyXG4gICAgICAgIDxkaXY+MDAwLTAwMC0wMDA8L2Rpdj5cclxuICAgICAgICA8ZGl2PmdpYXJkZGVzaWduQGtvbnRha3QucGw8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIFwiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImgtZnVsbCBteS1hdXRvXCI+XHJcbiAgICAgICAgPGRpdj5QcmF3YSB6YXN0cnplxbxvbmUgwqkgMjAyMjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNwYWNlLXktMSB3LTMwIGgtZnVsbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LTIwIFwiPm1hZGUgYnk8L2Rpdj5cclxuICAgICAgICA8aW1nIHNyYz1cIi4vc3ZnL2FkUmVzcGVjdC5zdmdcIiBhbHQ9XCJhZFJlc3BlY3RcIj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIGA7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiLy8gY29uc3Qgc2xpZGVyTmV4dCA9ICgpID0+IHtcclxuLy8gICBjb25zdCBpbWFnZVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWctc2xpZGVyJykuc3JjO1xyXG4vLyAgIC8vICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmlnaHQnKTtcclxuLy8gICBjb25zdCBwYXRoID0gaW1hZ2VTbGlkZXIucmVwbGFjZSgvXi4qW1xcXFwvXS8sICcnKS5zcGxpdCgnLicpWzBdO1xyXG4vLyAgIGNvbnN0IG5ld1BhdGggPSBgJHsrcGF0aCArIDF9LnBuZ2A7XHJcbi8vICAgaW1hZ2VTbGlkZXIuc3JjID0geyBuZXdQYXRoIH07XHJcbi8vICAgY29uc29sZS5sb2cobmV3UGF0aCk7XHJcbi8vIH07XHJcblxyXG5jb25zdCBIZXJvID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgbWFpbi5pZCA9ICdoZXJvJztcclxuXHJcbiAgbWFpbi5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgdy1mdWxsIGgtWzkydmhdXCI+XHJcbiAgXHJcbiAgICA8YXNpZGUgY2xhc3M9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIG1kOnctMy80IHNwYWNlLXktMTYgbWQ6c3BhY2UteS0xMiBiZy1bI0RDQzFBQl0gcHgtMTAgcHktMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS0xMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC02eGxcIj5Ob3dvY3plc25hIGFyYW7FvGFjamEgVHdvamVnbyBvZ3JvZHU8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWJhc2UgbGVhZGluZy02XCI+TWFya2EgR2lhcmREZXNpZ24gdG8gd2llbG9sZXRuaWUgZG/Fm3dpYWRjemVuaWUgaSB3eXNva2EgZXN0ZXR5a2EgcmVhbGl6YWNqaS4gT2ZlcnVqZW15IGtvbXBsZWtzb3d5IHpha3JlcyB1c8WCdWcgeiBpbmR5d2lkdWFsbnltIHBvZGVqxZtjaWVtIGRvIGthxbxkZWdvIHByb2pla3R1LjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiIGZsZXggZmxleC1jb2wgc3BhY2UteS0zIGxnOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBbJj5hXTpjdXJzb3ItcG9pbnRlciBsZzpzcGFjZS15LTAgbGc6c3BhY2UteC05XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJiZy1ncmVlbi04MDAgdGV4dC13aGl0ZSBweC02IHB0LVsxMnB4XSBwYi1bMTRweF0gcm91bmRlZC1mdWxsIHctZml0IGhvdmVyOnNoYWRvdy1tZCBsZzp3aGl0ZXNwYWNlLW5vd3JhcCBob3ZlcjpiZy1ncmVlbi05MDAgdHJhbnNpdGlvbi1hbGxcIj5cclxuICAgICAgICAgICAgICAgIFNrb250YWt0dWogc2nEmSB6IG5hbWlcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjcmVhbGl6YWNqZVwiIGNsYXNzPVwiZmxleCB3LWZpdCBib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLWdyZWVuLTgwMCBweC1bMjJweF0gcHQtWzEycHhdIHBiLVsxNHB4XSByb3VuZGVkLWZ1bGwgdGV4dC1ncmVlbi04MDBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzcGFjZS14LVs4cHhdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwid2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpvYmFjeiBuYXN6ZSByZWFsaXphY2plXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vc3ZnL2hlcm9BcnJvd0Rvd24uc3ZnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2FzaWRlPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJoLXNjcmVlbiBtZDpoLWF1dG8gdy1mdWxsIHJlbGF0aXZlIGJnLWFtYmVyLTIwMFwiPlxyXG4gICAgPGltZyBzcmM9XCIxLmpwZ1wiIGNsYXNzPVwiaC1mdWxsIHctZnVsbFwiIGlkPVwiaW1nLXNsaWRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGJvdHRvbS0wIHJpZ2h0LTAgYWJzb2x1dGUgcHgtOCBweS02IHNwYWNlLXgtOCBiZy1bI0Y1RjBFQ11cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInctWzUwcHhdIGgtWzUwcHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCIgaWQ9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vc3ZnL3NsaWRlckxlZnQuc3ZnXCIgYWx0PVwiUG9wcnplZG5pZSB6ZGrEmWNpZVwiPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInctWzUwcHhdIGgtWzUwcHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCIgaWQ9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL3N2Zy9zbGlkZXJSaWdodC5zdmdcIiBhbHQ9XCJOYXN0xJlwbmUgemRqxJljaWVcIj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBcclxuICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xyXG5cclxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1nLXNsaWRlcicpO1xyXG4gIGNvbnN0IG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmlnaHQnKTtcclxuICBjb25zdCBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnQnKTtcclxuICBjb25zdCBpbWFnZXMgPSBbJzEuanBnJywgJzIucG5nJ107XHJcbiAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNsaWRlckltYWdlID0gKGluZGV4KSA9PiB7XHJcbiAgICBpbWcuc3JjID0gaW1hZ2VzW2luZGV4XTtcclxuICB9O1xyXG5cclxuICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRJbmRleCA8IGltYWdlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIGN1cnJlbnRJbmRleCsrO1xyXG4gICAgICB1cGRhdGVTbGlkZXJJbWFnZShjdXJyZW50SW5kZXgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRJbmRleCA+IDApIHtcclxuICAgICAgY3VycmVudEluZGV4LS07XHJcbiAgICAgIHVwZGF0ZVNsaWRlckltYWdlKGN1cnJlbnRJbmRleCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iLCJjb25zdCBzZWFyY2hGaWVsZCA9IChoaWRlKSA9PiB7XHJcbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtaWNvbicpO1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1pbnB1dCcpO1xyXG4gIGxldCBpc0hpZGRlbiA9IGhpZGU7XHJcbiAgc2VhcmNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChpc0hpZGRlbikge1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdtZDpoaWRkZW4nKTtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnbWQ6YW5pbWF0ZS1oaWRlSW5wdXQnKTtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnbWQ6YW5pbWF0ZS1leHBhbmRJbnB1dCcpO1xyXG4gICAgICBpc0hpZGRlbiA9ICFpc0hpZGRlbjtcclxuICAgICAgc2VhcmNoSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdtZDphbmltYXRlLXJvdGF0ZVJpZ2h0Jyk7XHJcbiAgICAgIHNlYXJjaEljb24uY2xhc3NMaXN0LmFkZCgnbWQ6YW5pbWF0ZS1yb3RhdGVMZWZ0Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZWFyY2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ21kOmFuaW1hdGUtcm90YXRlTGVmdCcpO1xyXG4gICAgICBzZWFyY2hJY29uLmNsYXNzTGlzdC5hZGQoJ21kOmFuaW1hdGUtcm90YXRlUmlnaHQnKTtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnbWQ6YW5pbWF0ZS1leHBhbmRJbnB1dCcpO1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdtZDphbmltYXRlLWhpZGVJbnB1dCcpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdtZDpoaWRkZW4nKTtcclxuICAgICAgfSwgNTMwKTtcclxuICAgICAgaXNIaWRkZW4gPSAhaXNIaWRkZW47XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBtb2JpbGVNZW51ID0gKGhpZGUpID0+IHtcclxuICBsZXQgaGlkZGVuID0gaGlkZTtcclxuICBjb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1cmdlci1tZW51Jyk7XHJcbiAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlua3MnKTtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtaW5wdXQnKTtcclxuICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wZG93bicpO1xyXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0Jyk7XHJcbiAgY29uc3QgcmVhbGl6YXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlYWxpemF0aW9ucycpO1xyXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdCcpO1xyXG5cclxuICBidXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGhpZGRlbikge1xyXG4gICAgICBsaW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgcmVhbGl6YXRpb25zLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG4gICAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLXNob3dNb2JpbGVNZW51Jyk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdmbGV4Jyk7XHJcblxyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJyk7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1leHBhbmRJbnB1dCcpO1xyXG5cclxuICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBhYm91dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICByZWFsaXphdGlvbnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICAgICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICAgICAgcmVhbGl6YXRpb25zLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtb3BhY2l0eScpO1xyXG4gICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICAgICAgICBhYm91dC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLW9wYWNpdHknKTtcclxuICAgICAgICAgIHJlYWxpemF0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLW9wYWNpdHknKTtcclxuICAgICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICAgICAgICBsaW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLXNob3dNb2JpbGVNZW51Jyk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgICAgfSwgMzAwKTtcclxuXHJcbiAgICAgIGhpZGRlbiA9ICFoaWRkZW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWRlY3JlYXNlT3BhY2l0eScpO1xyXG4gICAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWRlY3JlYXNlT3BhY2l0eScpO1xyXG4gICAgICByZWFsaXphdGlvbnMuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWRlY3JlYXNlT3BhY2l0eScpO1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWhpZGVJbnB1dCcpO1xyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbGlua3MuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1oaWRlTW9iaWxlTWVudScpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgbGlua3MuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1oaWRlTW9iaWxlTWVudScpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLWRlY3JlYXNlT3BhY2l0eScpO1xyXG4gICAgICAgICAgICBhYm91dC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLWRlY3JlYXNlT3BhY2l0eScpO1xyXG4gICAgICAgICAgICByZWFsaXphdGlvbnMuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgICAgICAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLWRlY3JlYXNlT3BhY2l0eScpO1xyXG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLWhpZGVJbnB1dCcpO1xyXG4gICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfSwgMjcwKTtcclxuICAgICAgfSwgMjcwKTtcclxuXHJcbiAgICAgIGhpZGRlbiA9ICFoaWRkZW47XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgbmF2YmFyLmNsYXNzTGlzdCA9XHJcbiAgICAnYmctc2xhdGUtMTAwIHctZnVsbCBweC02IHB5LTMgbWQ6cC02IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBzdGlja3kgdG9wLTAgei0xMCBoLVs4dmhdJztcclxuXHJcbiAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBsb2dvQ29udGFpbmVyLnRleHRDb250ZW50ID0gJ0xvZ28nO1xyXG4gIGxvZ29Db250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgPGEgaHJlZj1cIiNoZXJvXCI+XHJcbiAgICAgIDxpbWcgc3JjPVwiLi9zdmcvZ2lhcmRkZXNpZ24uc3ZnXCIgYWx0PVwiTG9nb1wiPlxyXG4gICAgPC9hPlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGlua3MuaWQgPSAnbGlua3MnO1xyXG4gIGxpbmtzLmNsYXNzTGlzdCA9XHJcbiAgICAnbWQ6ZmxleCBtZDpnYXAtMTAgZ2FwLTMgWyY+Kl06Y3Vyc29yLXBvaW50ZXIgbWQ6ZmxleC1yb3cgbWQ6cmVsYXRpdmUgbWQ6bS0wIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgbWQ6anVzdGlmeS1jZW50ZXIgbWQ6aXRlbXMtY2VudGVyIGZpeGVkIG10LVs0NTBweF0gcm91bmRlZC14bCBweS01IHB4LTYgbWQ6cC0wIGJnLXNsYXRlLTEwMCBmbGV4IGZsZXgtY29sIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgdy1bODV2d10gc2hhZG93LXhsIG1kOnNoYWRvdy1ub25lIG1kOnctYXV0byBtZDpsZWZ0LTAgbWQ6dHJhbnNsYXRlLXgtMCBoaWRkZW4gYW5pbWF0ZS1zaG93TW9iaWxlTWVudSBtZDphbmltYXRlLW5vbmUnO1xyXG5cclxuICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRyb3Bkb3duLmlkID0gJ2Ryb3Bkb3duJztcclxuICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bicsICdmbGV4JywgJ2ZsZXgtY29sJywgJ2dyb3VwJyk7XHJcblxyXG4gIGNvbnN0IG9mZmVyc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgb2ZmZXJzTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI29mZmVycycpO1xyXG4gIG9mZmVyc0xpbmsuaWQgPSAnb2ZmZXInO1xyXG4gIG9mZmVyc0xpbmsudGV4dENvbnRlbnQgPSAnT2ZlcnRhJztcclxuICBvZmZlcnNMaW5rLmNsYXNzTGlzdCA9XHJcbiAgICAnb2ZmZXJzIGZsZXggZ2FwLTIganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCBtZDpqdXN0aWZ5LWNlbnRlciBtZDppdGVtcy1jZW50ZXIgaC1hdXRvIGdyb3VwIGFuaW1hdGUtb3BhY2l0eSc7XHJcblxyXG4gIGNvbnN0IGFycm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYXJyb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZChcclxuICAgICdncm91cC1ob3Zlcjpyb3RhdGUtMTgwJyxcclxuICAgICd0cmFuc2l0aW9uLWFsbCcsXHJcbiAgICAnaGlkZGVuJyxcclxuICAgICdtZDpibG9jaydcclxuICApO1xyXG4gIGFycm93Q29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICA8aW1nIHNyYz1cIi4vc3ZnL2Fycm93RG93bi5zdmdcIiBhbHQ9XCJSb3p3acWEXCI+XHJcbiAgYDtcclxuXHJcbiAgY29uc3Qgb2ZmZXJzTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG9mZmVyc0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcclxuICAgICdvZmZlcnMtbGlzdCcsXHJcbiAgICAndy1hdXRvJyxcclxuICAgICdoLWF1dG8nLFxyXG4gICAgJ21kOnB5LTUnLFxyXG4gICAgJ21kOnB4LTYnLFxyXG4gICAgJ21kOmJnLXNsYXRlLTEwMCcsXHJcbiAgICAnbWQ6bXQtWzl2aF0nLFxyXG4gICAgJ21kOnNoYWRvdy14bCcsXHJcbiAgICAnbWQ6cm91bmRlZC1tZCcsXHJcbiAgICAnbWQ6YWJzb2x1dGUnLFxyXG4gICAgJ2dyb3VwLWhvdmVyOmFuaW1hdGUtc2xpZGVEb3duJyxcclxuICAgICdtZDpoaWRkZW4nLFxyXG4gICAgJ2dyb3VwLWhvdmVyOmJsb2NrJyxcclxuICAgICdtZDpib3JkZXItbm9uZScsXHJcbiAgICAnYm9yZGVyLWwtMicsXHJcbiAgICAnYm9yZGVyLXNsYXRlLTMwMCcsXHJcbiAgICAnbWQ6bS0wJyxcclxuICAgICdtbC01JyxcclxuICAgICdtdC0yJ1xyXG4gICk7XHJcbiAgY29uc3Qgb2ZmZXJzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgb2ZmZXJzTGlzdC5pZCA9ICdvZmZlcnMtbGlzdCc7XHJcbiAgb2ZmZXJzTGlzdC5jbGFzc0xpc3QuYWRkKCdzcGFjZS15LTInLCAnbWQ6dGV4dC1jZW50ZXInLCAncmVsYXRpdmUnKTtcclxuICBjb25zdCBvZmZlckVsZW1lbnRPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGNvbnN0IG9mZmVyRWxlbWVudFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgY29uc3Qgb2ZmZXJFbGVtZW50VGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIG9mZmVyRWxlbWVudE9uZS50ZXh0Q29udGVudCA9ICdQcm9qZWt0eSc7XHJcbiAgb2ZmZXJzTGlzdC5hcHBlbmRDaGlsZChvZmZlckVsZW1lbnRPbmUpO1xyXG4gIG9mZmVyRWxlbWVudFR3by50ZXh0Q29udGVudCA9ICdXaXp1YWxpemFjamUnO1xyXG4gIG9mZmVyc0xpc3QuYXBwZW5kQ2hpbGQob2ZmZXJFbGVtZW50VHdvKTtcclxuICBvZmZlckVsZW1lbnRUaHJlZS50ZXh0Q29udGVudCA9ICdSZWFsaXphY2plJztcclxuICBvZmZlcnNMaXN0LmFwcGVuZENoaWxkKG9mZmVyRWxlbWVudFRocmVlKTtcclxuXHJcbiAgLy8gb2ZmZXJzTGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gIC8vICAgb2ZmZXJzTGlzdENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLXNsaWRlRG93bicpO1xyXG4gIC8vICAgb2ZmZXJzTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLXNsaWRlVXAnKTtcclxuICAvLyB9KTtcclxuXHJcbiAgLy8gb2ZmZXJzTGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcclxuICAvLyAgIG9mZmVyc0xpc3RDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1zbGlkZURvd24nKTtcclxuICAvLyAgIG9mZmVyc0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1zbGlkZVVwJyk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIG9mZmVyc0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQob2ZmZXJzTGlzdCk7XHJcblxyXG4gIG9mZmVyc0xpbmsuYXBwZW5kQ2hpbGQoYXJyb3dDb250YWluZXIpO1xyXG5cclxuICBkcm9wZG93bi5hcHBlbmRDaGlsZChvZmZlcnNMaW5rKTtcclxuICBkcm9wZG93bi5hcHBlbmRDaGlsZChvZmZlcnNMaXN0Q29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgYWJvdXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGFib3V0TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI2Fib3V0Jyk7XHJcbiAgYWJvdXRMaW5rLmlkID0gJ2Fib3V0JztcclxuICBhYm91dExpbmsuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgYWJvdXRMaW5rLnRleHRDb250ZW50ID0gJ08gZmlybWllJztcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIHJlZ2lzdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI3JlZ2lzdGVyJyk7XHJcbiAgcmVnaXN0ZXJMaW5rLmlkID0gJ3JlYWxpemF0aW9ucyc7XHJcbiAgcmVnaXN0ZXJMaW5rLnRleHRDb250ZW50ID0gJ1JlYWxpemFjamUnO1xyXG4gIHJlZ2lzdGVyTGluay5jbGFzc0xpc3QuYWRkKCd0ZXh0LWNlbnRlcicsICdhbmltYXRlLW9wYWNpdHknKTtcclxuXHJcbiAgY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgY29udGFjdExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyNjb250YWN0Jyk7XHJcbiAgY29udGFjdExpbmsuaWQgPSAnY29udGFjdCc7XHJcbiAgY29udGFjdExpbmsuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgY29udGFjdExpbmsudGV4dENvbnRlbnQgPSAnS29udGFrdCc7XHJcblxyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VhcmNoJyk7XHJcbiAgc2VhcmNoSW5wdXQuaWQgPSAnc2VhcmNoLWlucHV0JztcclxuICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QgPVxyXG4gICAgJ2JnLXRyYW5zcGFyZW50IGgtYXV0byBvdXRsaW5lLW5vbmUgcC0wLjUgYm9yZGVyLWItMiBib3JkZXItYmxhY2sgbWQ6aGlkZGVuIHctNDAgYm94LWJvcmRlcic7XHJcblxyXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QgPSBgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1mdWxsIGhpZGRlbiBtZDpibG9jayBhbmltYXRlLW9wYWNpdHlgO1xyXG4gIHNlYXJjaENvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgPGltZyBzcmM9XCIuL3N2Zy9zZWFyY2guc3ZnXCIgYWx0PVwiU3p1a2FqXCIgaWQ9XCJzZWFyY2gtaWNvblwiPlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXJnZXJNZW51LmNsYXNzTGlzdCA9ICdtZDpoaWRkZW4nO1xyXG4gIGJ1cmdlck1lbnUuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJzcGFjZS15LTIgY3Vyc29yLXBvaW50ZXJcIiBpZD1cImJ1cmdlci1tZW51XCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHctOCBoLVswLjJyZW1dIGJnLWdyYXktNjAwXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJibG9jayB3LTggaC1bMC4ycmVtXSBiZy1ncmF5LTYwMFwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdy01IGgtWzAuMnJlbV0gYmctZ3JheS02MDBcIj48L3NwYW4+XHJcbiAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgbGlua3MuYXBwZW5kQ2hpbGQoZHJvcGRvd24pO1xyXG4gIGxpbmtzLmFwcGVuZENoaWxkKGFib3V0TGluayk7XHJcbiAgbGlua3MuYXBwZW5kQ2hpbGQocmVnaXN0ZXJMaW5rKTtcclxuICBsaW5rcy5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XHJcbiAgbGlua3MuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xyXG4gIGxpbmtzLmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lcik7XHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpO1xyXG4gIG5hdmJhci5hcHBlbmRDaGlsZChsaW5rcyk7XHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGJ1cmdlck1lbnUpO1xyXG5cclxuICBjb25zdCBvZmZlcnNDaGlsZHJlbiA9IG9mZmVyc0xpc3QuY2hpbGROb2RlcztcclxuICBvZmZlcnNDaGlsZHJlbi5mb3JFYWNoKChvZmZlcikgPT4ge1xyXG4gICAgb2ZmZXIuY2xhc3NMaXN0LmFkZChcclxuICAgICAgJ3B4LTInLFxyXG4gICAgICAncHktMC41JyxcclxuICAgICAgJ2hvdmVyOmJnLXNsYXRlLTIwMCcsXHJcbiAgICAgICdob3ZlcjpweC0yJyxcclxuICAgICAgJ2hvdmVyOnB5LTAuNScsXHJcbiAgICAgICdob3Zlcjpyb3VuZGVkLW1kJyxcclxuICAgICAgJ2hvdmVyOnNoYWRvdy1zbScsXHJcbiAgICAgICd0cmFuc2l0aW9uLWFsbCdcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmF2YmFyKTtcclxuXHJcbiAgY29uc3QgaXNIaWRkZW4gPSB0cnVlO1xyXG4gIHNlYXJjaEZpZWxkKGlzSGlkZGVuKTtcclxuICBtb2JpbGVNZW51KGlzSGlkZGVuKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuIiwiY29uc3QgT2ZmZXIgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBpY29uKSA9PiB7XHJcbiAgY29uc3Qgb2ZmZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub2ZmZXJzLXZpZXcnKTtcclxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZS5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImZsZXgtY29sIGJnLXdoaXRlIG1kOnctODAgdy03MiBoLWF1dG8gbWQ6aC1bMzcwcHhdIHNwYWNlLXktMTAgbWQ6c3BhY2UteS0yMCBweS0xMiBweC0xMCByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsIGhvdmVyOlt0cmFuc2Zvcm06cm90YXRlWSgzNjBkZWcpXSBjdXJzb3ItcG9pbnRlciBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6c2hhZG93LXhsXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS0zXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgJHtpY29ufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZDp0ZXh0LTJ4bCB0ZXh0LXhsXCI+JHt0aXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6dGV4dC1iYXNlIHRleHQtc21cIj4ke2Rlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCB3LWZpdCBjdXJzb3ItcG9pbnRlciBncm91cFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyZWVuLTgwMCBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBib3JkZXItYi0yIGJvcmRlci1ncmVlbi04MDAgbWQ6Ym9yZGVyLW5vbmVcIj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kOnRleHQtYmFzZSB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICBEb3dpZWR6IHNpxJkgd2nEmWNlalxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9zdmcvb2ZmZXJBcnJvd1JpZ2h0LnN2Z1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInctMCBoLTAgYmctZ3JlZW4tODAwIHRyYW5zaXRpb24tYWxsIGdyb3VwLWhvdmVyOnctZnVsbCBncm91cC1ob3ZlcjpoLVsycHhdXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgO1xyXG4gIG9mZmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2ZmZXI7XHJcbiIsImltcG9ydCBPZmZlciBmcm9tICcuL29mZmVyJztcclxuXHJcbmNvbnN0IE9mZmVycyA9ICgpID0+IHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIHNlY3Rpb24uaWQgPSAnb2ZmZXJzJztcclxuICBzZWN0aW9uLmNsYXNzTGlzdCA9XHJcbiAgICAnZmxleC1jb2wgdy1mdWxsIG1kOmgtYXV0byBzcGFjZS15LTEwIGJnLVsjRjVGMEVDXSBwLTUgcHktMTAgcHQtWzEyMHB4XSBwYi1bMTYwcHhdIHNwYWNlLXktWzk2cHhdJztcclxuXHJcbiAgc2VjdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cIm1heC13LVsxMDQwcHhdIGZsZXgtY29sIHNwYWNlLXktNSB3LTMvNCBtLWF1dG9cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXhzIHRleHQtZ3JlZW4tODAwXCI+T2ZlcnRhPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWQ6dGV4dC01eGwgdGV4dC0zeGxcIj5EemlhxYJhbXkgPGk+a29tcGxla3Nvd288L2k+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWQ6dGV4dC1iYXNlIHctZnVsbCB0ZXh0LW1kIGxlYWRpbmctNlwiPlxyXG4gICAgICAgIE9mZXJ1amVteSBrb21wbGV0bsSFIG9ic8WCdWfEmSBpbndlc3R5Y2ppIHRlcmVuw7N3IHppZWxvbnljaC4gUHJvamVrdHVqZW15IG5vd29jemVzbmUgb2dyb2R5IHByenlkb21vd2Ugb3JheiByZXp5ZGVuY2pvbmFsbmUuIFN0d29yenlteSBkbGEgQ2llYmllIHByb2pla3QsIHp3aXp1YWxpenVqZW15IGdvIGkgd2NpZWxpbXkgdyDFvHljaWUsIGEgbmEga2HFvGR5bSBldGFwaWUgcG9zxYJ1xbx5bXkgcmFkxIUgaSB3aWVsb2xldG5pbSBkb8Wbd2lhZGN6ZW5pZW0uIFxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJvZmZlcnMtdmlldyBncmlkIGdyaWQtY29scy0xIHBsYWNlLWl0ZW1zLWNlbnRlciBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtMTYgdy1hdXRvIGgtZnVsbFwiPjwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcblxyXG4gIGNvbnN0IGZpcnN0T2ZmZXJUaXRsZSA9ICdQcm9qZWt0eSc7XHJcbiAgY29uc3QgZmlyc3RPZmZlckRlc2NyaXB0aW9uID1cclxuICAgICdaYXByb2pla3R1amVteSBUd8OzaiBvZ3LDs2QgdyBub3dvY3plc255bSBzdHlsdSBpIHogbmFqbGVwc3p5bSB3eWtvcnp5c3RhbmllbSBpc3RuaWVqxIVjZWogcHJ6ZXN0cnplbmkuJztcclxuICBjb25zdCBmaXJzdE9mZmVySWNvbiA9IGA8aW1nIHNyYz1cIi4vc3ZnL3Byb2plY3RzSWNvbi5zdmdcIiBhbHQ9XCJcIj5gO1xyXG4gIE9mZmVyKGZpcnN0T2ZmZXJUaXRsZSwgZmlyc3RPZmZlckRlc2NyaXB0aW9uLCBmaXJzdE9mZmVySWNvbik7XHJcblxyXG4gIGNvbnN0IHNlY29uZE9mZmVyVGl0bGUgPSAnV2l6dWFsaXphY2plJztcclxuICBjb25zdCBzZWNvbmRPZmZlckRlc2NyaXB0aW9uID1cclxuICAgICdQcnplZHN0YXdpbXkgQ2kgcHJvamVrdHkga29uY2VwY3lqbmUgdyBwb3N0YWNpIHdpcnR1YWxuZWdvIHNwYWNlcnUgYW5pbW93YW5lZ28gdyB0ZWNobm9sb2dpaSAzRC4nO1xyXG4gIGNvbnN0IHNlY29uZE9mZmVySWNvbiA9IGA8aW1nIHNyYz1cIi4vc3ZnL3Zpc3VhbEljb24uc3ZnXCIgYWx0PVwiXCI+YDtcclxuICBPZmZlcihzZWNvbmRPZmZlclRpdGxlLCBzZWNvbmRPZmZlckRlc2NyaXB0aW9uLCBzZWNvbmRPZmZlckljb24pO1xyXG5cclxuICBjb25zdCB0aGlyZE9mZmVyVGl0bGUgPSAnUmVhbGl6YWNqZSc7XHJcbiAgY29uc3QgdGhpcmRPZmZlckRlc2NyaXB0aW9uID1cclxuICAgICdacmVhbGl6dWplbXkgVHdvamUgbWFyemVuaWUgcHJ6eSB1xbx5Y2l1IG5ham5vd3N6eWNoIHJvendpxIV6YcWEIGkgemFhd2Fuc293YW55Y2ggdGVjaG5vbG9naWkuJztcclxuICBjb25zdCB0aGlyZE9mZmVySWNvbiA9IGA8aW1nIHNyYz1cIi4vc3ZnL3JlYWxpemF0aW9uc0ljb24uc3ZnXCIgYWx0PVwiXCI+YDtcclxuICBPZmZlcih0aGlyZE9mZmVyVGl0bGUsIHRoaXJkT2ZmZXJEZXNjcmlwdGlvbiwgdGhpcmRPZmZlckljb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2ZmZXJzO1xyXG4iLCIvLyBpbXBvcnQgTWFjeSBmcm9tICdtYWN5JztcclxuLy8gaW1wb3J0IE1hY3kgZnJvbSAnbWFjeSc7XHJcblxyXG5jb25zdCBSZWFsaXphdGlvbnMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBzZWN0aW9uLmlkID0gJ3JlYWxpemF0aW9ucyc7XHJcbiAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFxyXG4gICAgJ2JnLVsjRENDMUFCXScsXHJcbiAgICAndy1mdWxsJyxcclxuICAgICdoLWF1dG8nLFxyXG4gICAgJ3B0LVsxMjBweF0nLFxyXG4gICAgJ3BiLTExJ1xyXG4gICk7XHJcbiAgc2VjdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgaC1hdXRvIGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCBnYXAtNCBwbC00MFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmVlbi04MDAgdGV4dC14c1wiPlJlYWxpemFjamU8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtNXhsXCI+TmFzemUgPGk+cHJvamVrdHk8L2k+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICAvLyAgIGNvbnN0IG1hY3kgPSBNYWN5KHtcclxuICAvLyAgICAgY29udGFpbmVyOiAnI21hY3ktY29udGFpbmVyJyxcclxuICAvLyAgICAgdHJ1ZU9yZGVyOiBmYWxzZSxcclxuICAvLyAgICAgd2FpdEZvckltYWdlczogZmFsc2UsXHJcbiAgLy8gICAgIG1hcmdpbjogMjQsXHJcbiAgLy8gICAgIGNvbHVtbnM6IDYsXHJcbiAgLy8gICAgIGJyZWFrQXQ6IHtcclxuICAvLyAgICAgICAxMjAwOiA1LFxyXG4gIC8vICAgICAgIDk0MDogMyxcclxuICAvLyAgICAgICA1MjA6IDIsXHJcbiAgLy8gICAgICAgNDAwOiAxXHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pO1xyXG4gIC8vICAgc2VjdGlvbi5hcHBlbmRDaGlsZChtYWN5KTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhbGl6YXRpb25zO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IE5hdiBmcm9tICcuL2NvbXBvbmVudHMvbmF2JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgSGVybyBmcm9tICcuL2NvbXBvbmVudHMvaGVybyc7XG5pbXBvcnQgT2ZmZXJzIGZyb20gJy4vY29tcG9uZW50cy9vZmZlcnMnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vY29tcG9uZW50cy9hYm91dCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL2NvbXBvbmVudHMvY29udGFjdCc7XG5pbXBvcnQgUmVhbGl6YXRpb25zIGZyb20gJy4vY29tcG9uZW50cy9yZWFsaXphdGlvbnMnO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXTtcbnJvb3QuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLXNtb290aCcpO1xuXG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JnLVsjRjVGMEVDXScpO1xuXG5OYXYoKTtcbkhlcm8oKTtcbk9mZmVycygpO1xuQWJvdXQoKTtcblJlYWxpemF0aW9ucygpO1xuQ29udGFjdCgpO1xuRm9vdGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=