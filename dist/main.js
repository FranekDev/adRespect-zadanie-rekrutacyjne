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
    <img src="1.jpg" class="h-full w-full object-cover" id="img-slider">
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
<div class="w-auto h-auto group">

<div class="flex-col bg-white md:w-80 w-72 h-auto md:h-[370px] space-y-10 md:space-y-20 py-12 px-10 rounded-xl transition-all group-hover:[transform:rotateY(360deg)] cursor-pointer hover:scale-105 hover:shadow-xl">
    <div class="space-y-3">
        <div>
            ${icon}
        </div>
        <div class="md:text-2xl text-xl">${title}</div>
        <div class="text-base">${description}</div>
    </div>
    <div class="flex flex-col w-fit cursor-pointer group/text">
        <div class="text-green-800 flex justify-start items-center space-x-2 border-b-2 border-green-800 md:border-none">
        
            <div class="md:text-base text-sm">
                Dowiedz się więcej
            </div>
            <div>
                <img src="./svg/offerArrowRight.svg" alt="">
            </div>

        </div>
        <div class="w-0 h-0 bg-green-800 transition-all group-hover/text:w-full group-hover/text:h-[2px]"></div>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbENyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUR0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN2RnBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMVFuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSwyQ0FBMkMsTUFBTTtBQUNqRCxpQ0FBaUMsWUFBWTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ087QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0RBQUs7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBSztBQUNQO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7VUN2QzVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2M7QUFDTTtBQUNKO0FBQ0k7QUFDRjtBQUNJO0FBQ1U7O0FBRXJEO0FBQ0E7O0FBRUE7O0FBRUEsMkRBQUc7QUFDSCw0REFBSTtBQUNKLDhEQUFNO0FBQ04sNkRBQUs7QUFDTCxvRUFBWTtBQUNaLCtEQUFPO0FBQ1AsOERBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvc3R5bGUuY3NzP2ZlOWUiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2NvbXBvbmVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2NvbXBvbmVudHMvaGVyby5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9uYXYuanMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2NvbXBvbmVudHMvb2ZmZXIuanMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2NvbXBvbmVudHMvb2ZmZXJzLmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL3JlYWxpemF0aW9ucy5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBzZWN0aW9uLmlkID0gJ2Fib3V0JztcclxuXHJcbiAgc2VjdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGgtW2F1dG9dIGJnLWdyZWVuLTkwMCBmbGV4LWNvbCBmbGV4IG1kOmZsZXgtcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBiZy1zbGF0ZS0zMDAgaC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hYm91dFBob3RvLnBuZ1wiIGFsdD1cIkxhZG5lIHpkamVjaWVcIiBjbGFzcz1cImgtZnVsbCB3LWZ1bGxcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIHB5LTEwIHRleHQtWyNGNUYwRUNdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy00LzUgc3BhY2UteS0yMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlLXktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZS15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc21cIj5PIGZpcm1pZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC00eGwgdy1maXRcIj5Ud29yenlteTwvYnI+IHogPGk+cGFzasSFPC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEthxbxkeSBwcm9qZWt0IHRvIG5vd2Ugd3l6d2FuaWUuIERsYXRlZ28gbmFzeiB6ZXNww7PFgiB0d29yesSFIHd5a3dhbGlmaWtvd2FuaSBwcm9qZWt0YW5jaSBvcmF6IGFyY2hpdGVrY2ksIGt0w7NyeWNoIHphZGFuaWVtIGplc3Qgcm96cG96bmFuaWUgaSByZWFsaXphY2phIHBvdHJ6ZWIga2HFvGRlZ28gS2xpZW50YS4gTmFzemEgc3BlY2phbGl6YWNqYSB0byBwcnplc3RyemVuaWUgbm93b2N6ZXNuZSwga3TDs3JlIGNoYXJha3Rlcnl6dWplIG1pbmltYWxpem0sIGdlb21ldHJpYSBpIGVsZWdhbmNrYSBwcm9zdG90YS4gVHdvcnp5bXkgb2dyb2R5IG1hxYJvb2JzxYJ1Z293ZSwgZG9zdG9zb3dhbmUgZG8gd3Nww7PFgmN6ZXNuZWdvIHRyeWJ1IMW8eWNpYS5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZml0IGJvcmRlci1zb2xpZCBib3JkZXItMiBib3JkZXItWyNGNUYwRUNdLTgwMCBweC1bMjRweF0gcHktWzEycHhdIHJvdW5kZWQtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgdHJhbnNpdGlvbi1hbGwgaG92ZXI6c2hhZG93LW1kIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvem5haiBuYXMgYmxpxbxlalxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vc3ZnL2Fib3V0QXJyb3dSaWdodC5zdmdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIiwiY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIHNlY3Rpb24uaWQgPSAnY29udGFjdCc7XHJcbiAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdweS1bNjBweF0nKTtcclxuXHJcbiAgc2VjdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImgtZnVsbCBweC02IHB5LTYgdy1mdWxsIGxnOnctYXV0byBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImgtYXV0byBiZy1ncmVlbi05MDAgdy1hdXRvIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgbGc6anVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LVsjRjVGMEVDXSB0ZXh0LVs0MHB4XSBsZWFkaW5nLVs0OHB4XSBzcGFjZS15LTYgcC05IG1kOnB4LTE2IG1kOnB5LTE0IGxnOnB4LVsxMTBweF0gbGc6cHktWzExMHB4XSBsZzpzcGFjZS14LTE2IGxnOml0ZW1zLWVuZFwiPlxyXG4gICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiIHctZnVsbCBsZzp3aGl0ZXNwYWNlLW5vd3JhcCBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICA8ZGl2Plpvc3RhxYRteSB3IGtvbnRha2NpZSE8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlpuYWpkemllc3ogbmFzIG5hIDxpPjxiPkluc3RhZ3JhbWllPC9iPjwvaT4uPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGxnOmZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1lbmQgbWQ6aXRlbXMtc3RhcnQgdy1mdWxsIHNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWJhc2Ugdy1bMTUwcHhdIGxnOnctWzE1MHB4XSBtZDp3LWF1dG9cIj7FmmxlZMW6IG5hc3plIG5ham5vd3N6ZSByZWFsaXphY2plITwvZGl2PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJwdC1bMTBweF0gcGItWzEycHhdIHB4LVsyNHB4XSBiZy1bI0Y1RjBFQ10gdGV4dC1ncmVlbi05MDAgcm91bmRlZC1mdWxsIHRleHQtYmFzZSB0cmFuc2l0aW9uLWFsbCBob3ZlcjpiZy1zbGF0ZS0xMDAgaG92ZXI6c2hhZG93LW1kXCI+SW5zdGFncmFtPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiIsImNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICBjb25zdCBmb290ZXJDbGFzc2VzID0gYGJnLWJsYWNrIHctZnVsbCBoLWF1dG8gdGV4dC13aGl0ZSBweC1bNDBweF0gcHktWzgwcHhdIGZsZXgtY29sIHNwYWNlLXktMjBgO1xyXG4gIGZvb3Rlci5jbGFzc0xpc3QgPSBmb290ZXJDbGFzc2VzO1xyXG4gIGZvb3Rlci5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImZsZXgtY29sIHNwYWNlLXktOFwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBsZzpmbGV4LXJvdyB4bDpmbGV4LXJvdyAyeGw6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXktNFwiPlxyXG4gICAgICBcclxuICAgICAgPGltZyBzcmM9XCIuL3N2Zy9naWFyZGRlc2lnbldoaXRlLnN2Z1wiIGFsdD1cImxvZ29cIiBjbGFzcz1cInctWzExNXB4XVwiPlxyXG4gICAgICA8YXNpZGUgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgaC1hdXRvIGdhcC02IHRleHQtc20gbWQ6dGV4dC1iYXNlIGxnOnRleHQtYmFzZSB4bDp0ZXh0LWJhc2UgMnhsOnRleHQtYmFzZVwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LWF1dG8gbWQ6dy1hdXRvIGxnOnctYXV0byB4bDp3LWF1dG8gMnhsOnctYXV0b1wiPkRhaiB6bmHEhywgY28gbW/FvGVteSBkbGEgQ2llYmllIHpyb2JpYyE8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwidy1naXQgaC05IGJnLWdyZWVuLTkwMCBweS0yIHB4LTMgcm91bmRlZC1mdWxsIHdoaXRlc3BhY2Utbm93cmFwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtNiBwdC1bMTJweF0gcGItWzE0cHhdXCI+U2tvbnRha3R1aiBzacSZIHogbmFtaTwvZGl2PlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPC9hc2lkZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGgtWzFweF0gYmctc2xhdGUtMzAwXCI+PC9kaXY+XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IHctZnVsbCBtZDpoLTEwIHhsOmgtMTAgMnhsOmgtMTAgbGc6aC0xMCBoLWF1dG8ganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cImZsZXgtY29sIG1kOmZsZXgtcm93IHhsOmZsZXggMnhsOmZsZXggbGc6ZmxleCBnYXAtOFwiID5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Lb250YWt0PC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+SW5zdGFncmFtPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+RmFjZWJvb2s8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5MaW5rZWRpbjwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBtZDpmbGV4LXJvdyB4bDpmbGV4LXJvdyAyeGw6ZmxleC1yb3cgZ2FwLTAgbWQ6Z2FwLTggdy1maXRcIj5cclxuICAgICAgICA8ZGl2PjAwMC0wMDAtMDAwPC9kaXY+XHJcbiAgICAgICAgPGRpdj5naWFyZGRlc2lnbkBrb250YWt0LnBsPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJoLWZ1bGwgbXktYXV0b1wiPlxyXG4gICAgICAgIDxkaXY+UHJhd2EgemFzdHJ6ZcW8b25lIMKpIDIwMjI8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzcGFjZS15LTEgdy0zMCBoLWZ1bGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidy0yMCBcIj5tYWRlIGJ5PC9kaXY+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuL3N2Zy9hZFJlc3BlY3Quc3ZnXCIgYWx0PVwiYWRSZXNwZWN0XCI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsIi8vIGNvbnN0IHNsaWRlck5leHQgPSAoKSA9PiB7XHJcbi8vICAgY29uc3QgaW1hZ2VTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1nLXNsaWRlcicpLnNyYztcclxuLy8gICAvLyAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JpZ2h0Jyk7XHJcbi8vICAgY29uc3QgcGF0aCA9IGltYWdlU2xpZGVyLnJlcGxhY2UoL14uKltcXFxcL10vLCAnJykuc3BsaXQoJy4nKVswXTtcclxuLy8gICBjb25zdCBuZXdQYXRoID0gYCR7K3BhdGggKyAxfS5wbmdgO1xyXG4vLyAgIGltYWdlU2xpZGVyLnNyYyA9IHsgbmV3UGF0aCB9O1xyXG4vLyAgIGNvbnNvbGUubG9nKG5ld1BhdGgpO1xyXG4vLyB9O1xyXG5cclxuY29uc3QgSGVybyA9ICgpID0+IHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gIG1haW4uaWQgPSAnaGVybyc7XHJcblxyXG4gIG1haW4uaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IHctZnVsbCBoLWF1dG8gbWQ6aC1bOTJ2aF1cIj5cclxuICBcclxuPGRpdiBjbGFzcz1cImxnOnctMS8yIGJnLVsjRENDMUFCXSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG5cclxuICAgIDxhc2lkZSBjbGFzcz1cIm1kOmgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgbWQ6dy0zLzQgbGc6dy1bNTk5cHhdIHNwYWNlLXktWzcycHhdIG1kOnNwYWNlLXktMTIgYmctWyNEQ0MxQUJdIHB4LTEwIHB5LTEyIGgtWzkydmhdXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS0xMVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LTZ4bFwiPk5vd29jemVzbmEgYXJhbsW8YWNqYSBUd29qZWdvIG9ncm9kdTwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWJhc2UgbGVhZGluZy02XCI+TWFya2EgR2lhcmREZXNpZ24gdG8gd2llbG9sZXRuaWUgZG/Fm3dpYWRjemVuaWUgaSB3eXNva2EgZXN0ZXR5a2EgcmVhbGl6YWNqaS4gT2ZlcnVqZW15IGtvbXBsZWtzb3d5IHpha3JlcyB1c8WCdWcgeiBpbmR5d2lkdWFsbnltIHBvZGVqxZtjaWVtIGRvIGthxbxkZWdvIHByb2pla3R1LjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImxnOnctZnVsbCBmbGV4IGZsZXgtY29sIHNwYWNlLXktMyBsZzpmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IHctZnVsbCBtZDp3LWF1dG8gbWQ6anVzdGlmeS1iZXR3ZWVuIFsmPmFdOmN1cnNvci1wb2ludGVyIGxnOnNwYWNlLXktMCBsZzpzcGFjZS14LTlcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmctZ3JlZW4tODAwIHRleHQtd2hpdGUgcHgtNiBwdC1bMTJweF0gcGItWzE0cHhdIHJvdW5kZWQtZnVsbCB3LWZpdCBob3ZlcjpzaGFkb3ctbWQgbGc6d2hpdGVzcGFjZS1ub3dyYXAgaG92ZXI6YmctZ3JlZW4tOTAwIHRyYW5zaXRpb24tYWxsXCI+XHJcbiAgICAgICAgICAgIFNrb250YWt0dWogc2nEmSB6IG5hbWlcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YSBocmVmPVwiI3JlYWxpemFjamVcIiBjbGFzcz1cImZsZXggdy1maXQgYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJvcmRlci1ncmVlbi04MDAgcHgtWzIycHhdIHB0LVsxMnB4XSBwYi1bMTRweF0gcm91bmRlZC1mdWxsIHRleHQtZ3JlZW4tODAwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzcGFjZS14LVs4cHhdXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIndoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFpvYmFjeiBuYXN6ZSByZWFsaXphY2plXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vc3ZnL2hlcm9BcnJvd0Rvd24uc3ZnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2FzaWRlPlxyXG5cclxuPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImgtWzkydmhdIG1kOmgtYXV0byB3LWZ1bGwgcmVsYXRpdmUgYmctYW1iZXItMjAwXCI+XHJcbiAgICA8aW1nIHNyYz1cIjEuanBnXCIgY2xhc3M9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlclwiIGlkPVwiaW1nLXNsaWRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGJvdHRvbS0wIHJpZ2h0LTAgYWJzb2x1dGUgcHgtOCBweS02IHNwYWNlLXgtOCBiZy1bI0Y1RjBFQ11cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInctWzUwcHhdIGgtWzUwcHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCIgaWQ9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vc3ZnL3NsaWRlckxlZnQuc3ZnXCIgYWx0PVwiUG9wcnplZG5pZSB6ZGrEmWNpZVwiPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInctWzUwcHhdIGgtWzUwcHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCIgaWQ9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL3N2Zy9zbGlkZXJSaWdodC5zdmdcIiBhbHQ9XCJOYXN0xJlwbmUgemRqxJljaWVcIj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBcclxuICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xyXG5cclxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1nLXNsaWRlcicpO1xyXG4gIGNvbnN0IG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmlnaHQnKTtcclxuICBjb25zdCBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnQnKTtcclxuICBjb25zdCBpbWFnZXMgPSBbJzEuanBnJywgJzIucG5nJ107XHJcbiAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNsaWRlckltYWdlID0gKGluZGV4KSA9PiB7XHJcbiAgICBpbWcuc3JjID0gaW1hZ2VzW2luZGV4XTtcclxuICB9O1xyXG5cclxuICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRJbmRleCA8IGltYWdlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIGN1cnJlbnRJbmRleCsrO1xyXG4gICAgICB1cGRhdGVTbGlkZXJJbWFnZShjdXJyZW50SW5kZXgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRJbmRleCA+IDApIHtcclxuICAgICAgY3VycmVudEluZGV4LS07XHJcbiAgICAgIHVwZGF0ZVNsaWRlckltYWdlKGN1cnJlbnRJbmRleCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iLCJjb25zdCBzZWFyY2hGaWVsZCA9IChoaWRlKSA9PiB7XHJcbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtaWNvbicpO1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1pbnB1dCcpO1xyXG4gIGxldCBpc0hpZGRlbiA9IGhpZGU7XHJcbiAgc2VhcmNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChpc0hpZGRlbikge1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdtZDpoaWRkZW4nKTtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnbWQ6YW5pbWF0ZS1oaWRlSW5wdXQnKTtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnbWQ6YW5pbWF0ZS1leHBhbmRJbnB1dCcpO1xyXG4gICAgICBpc0hpZGRlbiA9ICFpc0hpZGRlbjtcclxuICAgICAgc2VhcmNoSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdtZDphbmltYXRlLXJvdGF0ZVJpZ2h0Jyk7XHJcbiAgICAgIHNlYXJjaEljb24uY2xhc3NMaXN0LmFkZCgnbWQ6YW5pbWF0ZS1yb3RhdGVMZWZ0Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZWFyY2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ21kOmFuaW1hdGUtcm90YXRlTGVmdCcpO1xyXG4gICAgICBzZWFyY2hJY29uLmNsYXNzTGlzdC5hZGQoJ21kOmFuaW1hdGUtcm90YXRlUmlnaHQnKTtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnbWQ6YW5pbWF0ZS1leHBhbmRJbnB1dCcpO1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdtZDphbmltYXRlLWhpZGVJbnB1dCcpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdtZDpoaWRkZW4nKTtcclxuICAgICAgfSwgNTMwKTtcclxuICAgICAgaXNIaWRkZW4gPSAhaXNIaWRkZW47XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBtb2JpbGVNZW51ID0gKGhpZGUpID0+IHtcclxuICBsZXQgaGlkZGVuID0gaGlkZTtcclxuICBjb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1cmdlci1tZW51Jyk7XHJcbiAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlua3MnKTtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtaW5wdXQnKTtcclxuICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wZG93bicpO1xyXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0Jyk7XHJcbiAgY29uc3QgcmVhbGl6YXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlYWxpemF0aW9ucycpO1xyXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdCcpO1xyXG5cclxuICBidXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGhpZGRlbikge1xyXG4gICAgICBsaW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgcmVhbGl6YXRpb25zLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG4gICAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLXNob3dNb2JpbGVNZW51Jyk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdmbGV4Jyk7XHJcblxyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJyk7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1leHBhbmRJbnB1dCcpO1xyXG5cclxuICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBhYm91dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICByZWFsaXphdGlvbnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICAgICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICAgICAgcmVhbGl6YXRpb25zLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtb3BhY2l0eScpO1xyXG4gICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICAgICAgICBhYm91dC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLW9wYWNpdHknKTtcclxuICAgICAgICAgIHJlYWxpemF0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLW9wYWNpdHknKTtcclxuICAgICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICAgICAgICBsaW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLXNob3dNb2JpbGVNZW51Jyk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgICAgfSwgMzAwKTtcclxuXHJcbiAgICAgIGhpZGRlbiA9ICFoaWRkZW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWRlY3JlYXNlT3BhY2l0eScpO1xyXG4gICAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWRlY3JlYXNlT3BhY2l0eScpO1xyXG4gICAgICByZWFsaXphdGlvbnMuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWRlY3JlYXNlT3BhY2l0eScpO1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWhpZGVJbnB1dCcpO1xyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbGlua3MuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1oaWRlTW9iaWxlTWVudScpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgbGlua3MuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1oaWRlTW9iaWxlTWVudScpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLWRlY3JlYXNlT3BhY2l0eScpO1xyXG4gICAgICAgICAgICBhYm91dC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLWRlY3JlYXNlT3BhY2l0eScpO1xyXG4gICAgICAgICAgICByZWFsaXphdGlvbnMuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgICAgICAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLWRlY3JlYXNlT3BhY2l0eScpO1xyXG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLWhpZGVJbnB1dCcpO1xyXG4gICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfSwgMjcwKTtcclxuICAgICAgfSwgMjcwKTtcclxuXHJcbiAgICAgIGhpZGRlbiA9ICFoaWRkZW47XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgbmF2YmFyLmNsYXNzTGlzdCA9XHJcbiAgICAnYmctc2xhdGUtMTAwIHctZnVsbCBweC02IHB5LTMgbWQ6cC02IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBzdGlja3kgdG9wLTAgei0xMCBoLVs4dmhdJztcclxuXHJcbiAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBsb2dvQ29udGFpbmVyLnRleHRDb250ZW50ID0gJ0xvZ28nO1xyXG4gIGxvZ29Db250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgPGEgaHJlZj1cIiNoZXJvXCI+XHJcbiAgICAgIDxpbWcgc3JjPVwiLi9zdmcvZ2lhcmRkZXNpZ24uc3ZnXCIgYWx0PVwiTG9nb1wiPlxyXG4gICAgPC9hPlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGlua3MuaWQgPSAnbGlua3MnO1xyXG4gIGxpbmtzLmNsYXNzTGlzdCA9XHJcbiAgICAnbWQ6ZmxleCBtZDpnYXAtMTAgZ2FwLTMgWyY+Kl06Y3Vyc29yLXBvaW50ZXIgbWQ6ZmxleC1yb3cgbWQ6cmVsYXRpdmUgbWQ6bS0wIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgbWQ6anVzdGlmeS1jZW50ZXIgbWQ6aXRlbXMtY2VudGVyIGZpeGVkIG10LVs0NTBweF0gcm91bmRlZC14bCBweS01IHB4LTYgbWQ6cC0wIGJnLXNsYXRlLTEwMCBmbGV4IGZsZXgtY29sIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgdy1bODV2d10gc2hhZG93LXhsIG1kOnNoYWRvdy1ub25lIG1kOnctYXV0byBtZDpsZWZ0LTAgbWQ6dHJhbnNsYXRlLXgtMCBoaWRkZW4gYW5pbWF0ZS1zaG93TW9iaWxlTWVudSBtZDphbmltYXRlLW5vbmUnO1xyXG5cclxuICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRyb3Bkb3duLmlkID0gJ2Ryb3Bkb3duJztcclxuICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bicsICdmbGV4JywgJ2ZsZXgtY29sJywgJ2dyb3VwJyk7XHJcblxyXG4gIGNvbnN0IG9mZmVyc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgb2ZmZXJzTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI29mZmVycycpO1xyXG4gIG9mZmVyc0xpbmsuaWQgPSAnb2ZmZXInO1xyXG4gIG9mZmVyc0xpbmsudGV4dENvbnRlbnQgPSAnT2ZlcnRhJztcclxuICBvZmZlcnNMaW5rLmNsYXNzTGlzdCA9XHJcbiAgICAnb2ZmZXJzIGZsZXggZ2FwLTIganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCBtZDpqdXN0aWZ5LWNlbnRlciBtZDppdGVtcy1jZW50ZXIgaC1hdXRvIGdyb3VwIGFuaW1hdGUtb3BhY2l0eSc7XHJcblxyXG4gIGNvbnN0IGFycm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYXJyb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZChcclxuICAgICdncm91cC1ob3Zlcjpyb3RhdGUtMTgwJyxcclxuICAgICd0cmFuc2l0aW9uLWFsbCcsXHJcbiAgICAnaGlkZGVuJyxcclxuICAgICdtZDpibG9jaydcclxuICApO1xyXG4gIGFycm93Q29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICA8aW1nIHNyYz1cIi4vc3ZnL2Fycm93RG93bi5zdmdcIiBhbHQ9XCJSb3p3acWEXCI+XHJcbiAgYDtcclxuXHJcbiAgY29uc3Qgb2ZmZXJzTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG9mZmVyc0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcclxuICAgICdvZmZlcnMtbGlzdCcsXHJcbiAgICAndy1hdXRvJyxcclxuICAgICdoLWF1dG8nLFxyXG4gICAgJ21kOnB5LTUnLFxyXG4gICAgJ21kOnB4LTYnLFxyXG4gICAgJ21kOmJnLXNsYXRlLTEwMCcsXHJcbiAgICAnbWQ6bXQtWzl2aF0nLFxyXG4gICAgJ21kOnNoYWRvdy14bCcsXHJcbiAgICAnbWQ6cm91bmRlZC1tZCcsXHJcbiAgICAnbWQ6YWJzb2x1dGUnLFxyXG4gICAgJ2dyb3VwLWhvdmVyOmFuaW1hdGUtc2xpZGVEb3duJyxcclxuICAgICdtZDpoaWRkZW4nLFxyXG4gICAgJ2dyb3VwLWhvdmVyOmJsb2NrJyxcclxuICAgICdtZDpib3JkZXItbm9uZScsXHJcbiAgICAnYm9yZGVyLWwtMicsXHJcbiAgICAnYm9yZGVyLXNsYXRlLTMwMCcsXHJcbiAgICAnbWQ6bS0wJyxcclxuICAgICdtbC01JyxcclxuICAgICdtdC0yJ1xyXG4gICk7XHJcbiAgY29uc3Qgb2ZmZXJzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgb2ZmZXJzTGlzdC5pZCA9ICdvZmZlcnMtbGlzdCc7XHJcbiAgb2ZmZXJzTGlzdC5jbGFzc0xpc3QuYWRkKCdzcGFjZS15LTInLCAnbWQ6dGV4dC1jZW50ZXInLCAncmVsYXRpdmUnKTtcclxuICBjb25zdCBvZmZlckVsZW1lbnRPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGNvbnN0IG9mZmVyRWxlbWVudFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgY29uc3Qgb2ZmZXJFbGVtZW50VGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIG9mZmVyRWxlbWVudE9uZS50ZXh0Q29udGVudCA9ICdQcm9qZWt0eSc7XHJcbiAgb2ZmZXJzTGlzdC5hcHBlbmRDaGlsZChvZmZlckVsZW1lbnRPbmUpO1xyXG4gIG9mZmVyRWxlbWVudFR3by50ZXh0Q29udGVudCA9ICdXaXp1YWxpemFjamUnO1xyXG4gIG9mZmVyc0xpc3QuYXBwZW5kQ2hpbGQob2ZmZXJFbGVtZW50VHdvKTtcclxuICBvZmZlckVsZW1lbnRUaHJlZS50ZXh0Q29udGVudCA9ICdSZWFsaXphY2plJztcclxuICBvZmZlcnNMaXN0LmFwcGVuZENoaWxkKG9mZmVyRWxlbWVudFRocmVlKTtcclxuXHJcbiAgLy8gb2ZmZXJzTGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gIC8vICAgb2ZmZXJzTGlzdENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLXNsaWRlRG93bicpO1xyXG4gIC8vICAgb2ZmZXJzTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLXNsaWRlVXAnKTtcclxuICAvLyB9KTtcclxuXHJcbiAgLy8gb2ZmZXJzTGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcclxuICAvLyAgIG9mZmVyc0xpc3RDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1zbGlkZURvd24nKTtcclxuICAvLyAgIG9mZmVyc0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1zbGlkZVVwJyk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIG9mZmVyc0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQob2ZmZXJzTGlzdCk7XHJcblxyXG4gIG9mZmVyc0xpbmsuYXBwZW5kQ2hpbGQoYXJyb3dDb250YWluZXIpO1xyXG5cclxuICBkcm9wZG93bi5hcHBlbmRDaGlsZChvZmZlcnNMaW5rKTtcclxuICBkcm9wZG93bi5hcHBlbmRDaGlsZChvZmZlcnNMaXN0Q29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgYWJvdXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGFib3V0TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI2Fib3V0Jyk7XHJcbiAgYWJvdXRMaW5rLmlkID0gJ2Fib3V0JztcclxuICBhYm91dExpbmsuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgYWJvdXRMaW5rLnRleHRDb250ZW50ID0gJ08gZmlybWllJztcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIHJlZ2lzdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI3JlZ2lzdGVyJyk7XHJcbiAgcmVnaXN0ZXJMaW5rLmlkID0gJ3JlYWxpemF0aW9ucyc7XHJcbiAgcmVnaXN0ZXJMaW5rLnRleHRDb250ZW50ID0gJ1JlYWxpemFjamUnO1xyXG4gIHJlZ2lzdGVyTGluay5jbGFzc0xpc3QuYWRkKCd0ZXh0LWNlbnRlcicsICdhbmltYXRlLW9wYWNpdHknKTtcclxuXHJcbiAgY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgY29udGFjdExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyNjb250YWN0Jyk7XHJcbiAgY29udGFjdExpbmsuaWQgPSAnY29udGFjdCc7XHJcbiAgY29udGFjdExpbmsuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgY29udGFjdExpbmsudGV4dENvbnRlbnQgPSAnS29udGFrdCc7XHJcblxyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VhcmNoJyk7XHJcbiAgc2VhcmNoSW5wdXQuaWQgPSAnc2VhcmNoLWlucHV0JztcclxuICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QgPVxyXG4gICAgJ2JnLXRyYW5zcGFyZW50IGgtYXV0byBvdXRsaW5lLW5vbmUgcC0wLjUgYm9yZGVyLWItMiBib3JkZXItYmxhY2sgbWQ6aGlkZGVuIHctNDAgYm94LWJvcmRlcic7XHJcblxyXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QgPSBgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1mdWxsIGhpZGRlbiBtZDpibG9jayBhbmltYXRlLW9wYWNpdHlgO1xyXG4gIHNlYXJjaENvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgPGltZyBzcmM9XCIuL3N2Zy9zZWFyY2guc3ZnXCIgYWx0PVwiU3p1a2FqXCIgaWQ9XCJzZWFyY2gtaWNvblwiPlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXJnZXJNZW51LmNsYXNzTGlzdCA9ICdtZDpoaWRkZW4nO1xyXG4gIGJ1cmdlck1lbnUuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJzcGFjZS15LTIgY3Vyc29yLXBvaW50ZXJcIiBpZD1cImJ1cmdlci1tZW51XCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHctOCBoLVswLjJyZW1dIGJnLWdyYXktNjAwXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJibG9jayB3LTggaC1bMC4ycmVtXSBiZy1ncmF5LTYwMFwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdy01IGgtWzAuMnJlbV0gYmctZ3JheS02MDBcIj48L3NwYW4+XHJcbiAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgbGlua3MuYXBwZW5kQ2hpbGQoZHJvcGRvd24pO1xyXG4gIGxpbmtzLmFwcGVuZENoaWxkKGFib3V0TGluayk7XHJcbiAgbGlua3MuYXBwZW5kQ2hpbGQocmVnaXN0ZXJMaW5rKTtcclxuICBsaW5rcy5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XHJcbiAgbGlua3MuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xyXG4gIGxpbmtzLmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lcik7XHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpO1xyXG4gIG5hdmJhci5hcHBlbmRDaGlsZChsaW5rcyk7XHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGJ1cmdlck1lbnUpO1xyXG5cclxuICBjb25zdCBvZmZlcnNDaGlsZHJlbiA9IG9mZmVyc0xpc3QuY2hpbGROb2RlcztcclxuICBvZmZlcnNDaGlsZHJlbi5mb3JFYWNoKChvZmZlcikgPT4ge1xyXG4gICAgb2ZmZXIuY2xhc3NMaXN0LmFkZChcclxuICAgICAgJ3B4LTInLFxyXG4gICAgICAncHktMC41JyxcclxuICAgICAgJ2hvdmVyOmJnLXNsYXRlLTIwMCcsXHJcbiAgICAgICdob3ZlcjpweC0yJyxcclxuICAgICAgJ2hvdmVyOnB5LTAuNScsXHJcbiAgICAgICdob3Zlcjpyb3VuZGVkLW1kJyxcclxuICAgICAgJ2hvdmVyOnNoYWRvdy1zbScsXHJcbiAgICAgICd0cmFuc2l0aW9uLWFsbCdcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmF2YmFyKTtcclxuXHJcbiAgY29uc3QgaXNIaWRkZW4gPSB0cnVlO1xyXG4gIHNlYXJjaEZpZWxkKGlzSGlkZGVuKTtcclxuICBtb2JpbGVNZW51KGlzSGlkZGVuKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuIiwiY29uc3QgT2ZmZXIgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBpY29uKSA9PiB7XHJcbiAgY29uc3Qgb2ZmZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub2ZmZXJzLXZpZXcnKTtcclxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZS5pbm5lckhUTUwgPSBgXHJcbjxkaXYgY2xhc3M9XCJ3LWF1dG8gaC1hdXRvIGdyb3VwXCI+XHJcblxyXG48ZGl2IGNsYXNzPVwiZmxleC1jb2wgYmctd2hpdGUgbWQ6dy04MCB3LTcyIGgtYXV0byBtZDpoLVszNzBweF0gc3BhY2UteS0xMCBtZDpzcGFjZS15LTIwIHB5LTEyIHB4LTEwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgZ3JvdXAtaG92ZXI6W3RyYW5zZm9ybTpyb3RhdGVZKDM2MGRlZyldIGN1cnNvci1wb2ludGVyIGhvdmVyOnNjYWxlLTEwNSBob3ZlcjpzaGFkb3cteGxcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJzcGFjZS15LTNcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAke2ljb259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kOnRleHQtMnhsIHRleHQteGxcIj4ke3RpdGxlfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWJhc2VcIj4ke2Rlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCB3LWZpdCBjdXJzb3ItcG9pbnRlciBncm91cC90ZXh0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZ3JlZW4tODAwIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGJvcmRlci1iLTIgYm9yZGVyLWdyZWVuLTgwMCBtZDpib3JkZXItbm9uZVwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6dGV4dC1iYXNlIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgIERvd2llZHogc2nEmSB3acSZY2VqXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL3N2Zy9vZmZlckFycm93UmlnaHQuc3ZnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidy0wIGgtMCBiZy1ncmVlbi04MDAgdHJhbnNpdGlvbi1hbGwgZ3JvdXAtaG92ZXIvdGV4dDp3LWZ1bGwgZ3JvdXAtaG92ZXIvdGV4dDpoLVsycHhdXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuICBgO1xyXG4gIG9mZmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2ZmZXI7XHJcbiIsImltcG9ydCBPZmZlciBmcm9tICcuL29mZmVyJztcclxuXHJcbmNvbnN0IE9mZmVycyA9ICgpID0+IHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIHNlY3Rpb24uaWQgPSAnb2ZmZXJzJztcclxuICBzZWN0aW9uLmNsYXNzTGlzdCA9XHJcbiAgICAnZmxleC1jb2wgdy1mdWxsIG1kOmgtYXV0byBzcGFjZS15LTEwIGJnLVsjRjVGMEVDXSBwLTUgcHktMTAgcHQtWzEyMHB4XSBwYi1bMTYwcHhdIHNwYWNlLXktWzk2cHhdJztcclxuXHJcbiAgc2VjdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cIm1heC13LVsxMDQwcHhdIGZsZXgtY29sIHNwYWNlLXktNSB3LTMvNCBtLWF1dG9cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXhzIHRleHQtZ3JlZW4tODAwXCI+T2ZlcnRhPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWQ6dGV4dC01eGwgdGV4dC0zeGxcIj5EemlhxYJhbXkgPGk+a29tcGxla3Nvd288L2k+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIHRleHQtYmFzZSBsZWFkaW5nLTZcIj5cclxuICAgICAgICBPZmVydWplbXkga29tcGxldG7EhSBvYnPFgnVnxJkgaW53ZXN0eWNqaSB0ZXJlbsOzdyB6aWVsb255Y2guIFByb2pla3R1amVteSBub3dvY3plc25lIG9ncm9keSBwcnp5ZG9tb3dlIG9yYXogcmV6eWRlbmNqb25hbG5lLiBTdHdvcnp5bXkgZGxhIENpZWJpZSBwcm9qZWt0LCB6d2l6dWFsaXp1amVteSBnbyBpIHdjaWVsaW15IHcgxbx5Y2llLCBhIG5hIGthxbxkeW0gZXRhcGllIHBvc8WCdcW8eW15IHJhZMSFIGkgd2llbG9sZXRuaW0gZG/Fm3dpYWRjemVuaWVtLiBcclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwib2ZmZXJzLXZpZXcgZ3JpZCBncmlkLWNvbHMtMSBwbGFjZS1pdGVtcy1jZW50ZXIgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTE2IHctYXV0byBoLWZ1bGxcIj48L2Rpdj5cclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG5cclxuICBjb25zdCBmaXJzdE9mZmVyVGl0bGUgPSAnUHJvamVrdHknO1xyXG4gIGNvbnN0IGZpcnN0T2ZmZXJEZXNjcmlwdGlvbiA9XHJcbiAgICAnWmFwcm9qZWt0dWplbXkgVHfDs2ogb2dyw7NkIHcgbm93b2N6ZXNueW0gc3R5bHUgaSB6IG5hamxlcHN6eW0gd3lrb3J6eXN0YW5pZW0gaXN0bmllasSFY2VqIHByemVzdHJ6ZW5pLic7XHJcbiAgY29uc3QgZmlyc3RPZmZlckljb24gPSBgPGltZyBzcmM9XCIuL3N2Zy9wcm9qZWN0c0ljb24uc3ZnXCIgYWx0PVwiXCI+YDtcclxuICBPZmZlcihmaXJzdE9mZmVyVGl0bGUsIGZpcnN0T2ZmZXJEZXNjcmlwdGlvbiwgZmlyc3RPZmZlckljb24pO1xyXG5cclxuICBjb25zdCBzZWNvbmRPZmZlclRpdGxlID0gJ1dpenVhbGl6YWNqZSc7XHJcbiAgY29uc3Qgc2Vjb25kT2ZmZXJEZXNjcmlwdGlvbiA9XHJcbiAgICAnUHJ6ZWRzdGF3aW15IENpIHByb2pla3R5IGtvbmNlcGN5am5lIHcgcG9zdGFjaSB3aXJ0dWFsbmVnbyBzcGFjZXJ1IGFuaW1vd2FuZWdvIHcgdGVjaG5vbG9naWkgM0QuJztcclxuICBjb25zdCBzZWNvbmRPZmZlckljb24gPSBgPGltZyBzcmM9XCIuL3N2Zy92aXN1YWxJY29uLnN2Z1wiIGFsdD1cIlwiPmA7XHJcbiAgT2ZmZXIoc2Vjb25kT2ZmZXJUaXRsZSwgc2Vjb25kT2ZmZXJEZXNjcmlwdGlvbiwgc2Vjb25kT2ZmZXJJY29uKTtcclxuXHJcbiAgY29uc3QgdGhpcmRPZmZlclRpdGxlID0gJ1JlYWxpemFjamUnO1xyXG4gIGNvbnN0IHRoaXJkT2ZmZXJEZXNjcmlwdGlvbiA9XHJcbiAgICAnWnJlYWxpenVqZW15IFR3b2plIG1hcnplbmllIHByenkgdcW8eWNpdSBuYWpub3dzenljaCByb3p3acSFemHFhCBpIHphYXdhbnNvd2FueWNoIHRlY2hub2xvZ2lpLic7XHJcbiAgY29uc3QgdGhpcmRPZmZlckljb24gPSBgPGltZyBzcmM9XCIuL3N2Zy9yZWFsaXphdGlvbnNJY29uLnN2Z1wiIGFsdD1cIlwiPmA7XHJcbiAgT2ZmZXIodGhpcmRPZmZlclRpdGxlLCB0aGlyZE9mZmVyRGVzY3JpcHRpb24sIHRoaXJkT2ZmZXJJY29uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9mZmVycztcclxuIiwiLy8gaW1wb3J0IE1hY3kgZnJvbSAnbWFjeSc7XHJcbi8vIGltcG9ydCBNYWN5IGZyb20gJ21hY3knO1xyXG5cclxuY29uc3QgUmVhbGl6YXRpb25zID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgc2VjdGlvbi5pZCA9ICdyZWFsaXphdGlvbnMnO1xyXG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcclxuICAgICdiZy1bI0RDQzFBQl0nLFxyXG4gICAgJ3ctZnVsbCcsXHJcbiAgICAnaC1hdXRvJyxcclxuICAgICdwdC1bMTIwcHhdJyxcclxuICAgICdwYi0xMSdcclxuICApO1xyXG4gIHNlY3Rpb24uaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGgtYXV0byBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgZ2FwLTQgcGwtNDBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZ3JlZW4tODAwIHRleHQteHNcIj5SZWFsaXphY2plPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LTV4bFwiPk5hc3plIDxpPnByb2pla3R5PC9pPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgLy8gICBjb25zdCBtYWN5ID0gTWFjeSh7XHJcbiAgLy8gICAgIGNvbnRhaW5lcjogJyNtYWN5LWNvbnRhaW5lcicsXHJcbiAgLy8gICAgIHRydWVPcmRlcjogZmFsc2UsXHJcbiAgLy8gICAgIHdhaXRGb3JJbWFnZXM6IGZhbHNlLFxyXG4gIC8vICAgICBtYXJnaW46IDI0LFxyXG4gIC8vICAgICBjb2x1bW5zOiA2LFxyXG4gIC8vICAgICBicmVha0F0OiB7XHJcbiAgLy8gICAgICAgMTIwMDogNSxcclxuICAvLyAgICAgICA5NDA6IDMsXHJcbiAgLy8gICAgICAgNTIwOiAyLFxyXG4gIC8vICAgICAgIDQwMDogMVxyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KTtcclxuICAvLyAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQobWFjeSk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWxpemF0aW9ucztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBOYXYgZnJvbSAnLi9jb21wb25lbnRzL25hdic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi9jb21wb25lbnRzL2hlcm8nO1xuaW1wb3J0IE9mZmVycyBmcm9tICcuL2NvbXBvbmVudHMvb2ZmZXJzJztcbmltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvYWJvdXQnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhY3QnO1xuaW1wb3J0IFJlYWxpemF0aW9ucyBmcm9tICcuL2NvbXBvbmVudHMvcmVhbGl6YXRpb25zJztcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF07XG5yb290LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1zbW9vdGgnKTtcblxuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdiZy1bI0Y1RjBFQ10nKTtcblxuTmF2KCk7XG5IZXJvKCk7XG5PZmZlcnMoKTtcbkFib3V0KCk7XG5SZWFsaXphdGlvbnMoKTtcbkNvbnRhY3QoKTtcbkZvb3RlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9