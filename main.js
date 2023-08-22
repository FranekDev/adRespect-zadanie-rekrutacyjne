/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/macy/dist/macy.js":
/*!****************************************!*\
  !*** ./node_modules/macy/dist/macy.js ***!
  \****************************************/
/***/ (function(module) {

!function(t,n){ true?module.exports=n():0}(this,function(){"use strict";function t(t,n){var e=void 0;return function(){e&&clearTimeout(e),e=setTimeout(t,n)}}function n(t,n){for(var e=t.length,r=e,o=[];e--;)o.push(n(t[r-e-1]));return o}function e(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(window.Promise)return A(t,n,e);t.recalculate(!0,!0)}function r(t){for(var n=t.options,e=t.responsiveOptions,r=t.keys,o=t.docWidth,i=void 0,s=0;s<r.length;s++){var a=parseInt(r[s],10);o>=a&&(i=n.breakAt[a],O(i,e))}return e}function o(t){for(var n=t.options,e=t.responsiveOptions,r=t.keys,o=t.docWidth,i=void 0,s=r.length-1;s>=0;s--){var a=parseInt(r[s],10);o<=a&&(i=n.breakAt[a],O(i,e))}return e}function i(t){var n=t.useContainerForBreakpoints?t.container.clientWidth:window.innerWidth,e={columns:t.columns};b(t.margin)?e.margin={x:t.margin.x,y:t.margin.y}:e.margin={x:t.margin,y:t.margin};var i=Object.keys(t.breakAt);return t.mobileFirst?r({options:t,responsiveOptions:e,keys:i,docWidth:n}):o({options:t,responsiveOptions:e,keys:i,docWidth:n})}function s(t){return i(t).columns}function a(t){return i(t).margin}function c(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=s(t),r=a(t).x,o=100/e;if(!n)return o;if(1===e)return"100%";var i="px";if("string"==typeof r){var c=parseFloat(r);i=r.replace(c,""),r=c}return r=(e-1)*r/e,"%"===i?o-r+"%":"calc("+o+"% - "+r+i+")"}function u(t,n){var e=s(t.options),r=0,o=void 0,i=void 0;if(1===++n)return 0;i=a(t.options).x;var u="px";if("string"==typeof i){var l=parseFloat(i,10);u=i.replace(l,""),i=l}return o=(i-(e-1)*i/e)*(n-1),r+=c(t.options,!1)*(n-1),"%"===u?r+o+"%":"calc("+r+"% + "+o+u+")"}function l(t){var n=0,e=t.container,r=t.rows;v(r,function(t){n=t>n?t:n}),e.style.height=n+"px"}function p(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=s(t.options),i=a(t.options).y;M(t,o,e),v(n,function(n){var e=0,o=parseInt(n.offsetHeight,10);isNaN(o)||(t.rows.forEach(function(n,r){n<t.rows[e]&&(e=r)}),n.style.position="absolute",n.style.top=t.rows[e]+"px",n.style.left=""+t.cols[e],t.rows[e]+=isNaN(o)?0:o+i,r&&(n.dataset.macyComplete=1))}),r&&(t.tmpRows=null),l(t)}function f(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=s(t.options),i=a(t.options).y;M(t,o,e),v(n,function(n){t.lastcol===o&&(t.lastcol=0);var e=C(n,"height");e=parseInt(n.offsetHeight,10),isNaN(e)||(n.style.position="absolute",n.style.top=t.rows[t.lastcol]+"px",n.style.left=""+t.cols[t.lastcol],t.rows[t.lastcol]+=isNaN(e)?0:e+i,t.lastcol+=1,r&&(n.dataset.macyComplete=1))}),r&&(t.tmpRows=null),l(t)}var h=function t(n,e){if(!(this instanceof t))return new t(n,e);if(n&&n.nodeName)return n;if(n=n.replace(/^\s*/,"").replace(/\s*$/,""),e)return this.byCss(n,e);for(var r in this.selectors)if(e=r.split("/"),new RegExp(e[1],e[2]).test(n))return this.selectors[r](n);return this.byCss(n)};h.prototype.byCss=function(t,n){return(n||document).querySelectorAll(t)},h.prototype.selectors={},h.prototype.selectors[/^\.[\w\-]+$/]=function(t){return document.getElementsByClassName(t.substring(1))},h.prototype.selectors[/^\w+$/]=function(t){return document.getElementsByTagName(t)},h.prototype.selectors[/^\#[\w\-]+$/]=function(t){return document.getElementById(t.substring(1))};var v=function(t,n){for(var e=t.length,r=e;e--;)n(t[r-e-1])},m=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.running=!1,this.events=[],this.add(t)};m.prototype.run=function(){if(!this.running&&this.events.length>0){var t=this.events.shift();this.running=!0,t(),this.running=!1,this.run()}},m.prototype.add=function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return!!n&&(Array.isArray(n)?v(n,function(n){return t.add(n)}):(this.events.push(n),void this.run()))},m.prototype.clear=function(){this.events=[]};var d=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.instance=t,this.data=n,this},y=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.events={},this.instance=t};y.prototype.on=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!(!t||!n)&&(Array.isArray(this.events[t])||(this.events[t]=[]),this.events[t].push(n))},y.prototype.emit=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t||!Array.isArray(this.events[t]))return!1;var e=new d(this.instance,n);v(this.events[t],function(t){return t(e)})};var g=function(t){return!("naturalHeight"in t&&t.naturalHeight+t.naturalWidth===0)||t.width+t.height!==0},E=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise(function(t,e){if(n.complete)return g(n)?t(n):e(n);n.addEventListener("load",function(){return g(n)?t(n):e(n)}),n.addEventListener("error",function(){return e(n)})}).then(function(n){e&&t.emit(t.constants.EVENT_IMAGE_LOAD,{img:n})}).catch(function(n){return t.emit(t.constants.EVENT_IMAGE_ERROR,{img:n})})},w=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n(e,function(n){return E(t,n,r)})},A=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Promise.all(w(t,n,e)).then(function(){t.emit(t.constants.EVENT_IMAGE_COMPLETE)})},I=function(n){return t(function(){n.emit(n.constants.EVENT_RESIZE),n.queue.add(function(){return n.recalculate(!0,!0)})},100)},N=function(t){if(t.container=h(t.options.container),t.container instanceof h||!t.container)return!!t.options.debug&&console.error("Error: Container not found");t.container.length&&(t.container=t.container[0]),t.options.container=t.container,t.container.style.position="relative"},T=function(t){t.queue=new m,t.events=new y(t),t.rows=[],t.resizer=I(t)},L=function(t){var n=h("img",t.container);window.addEventListener("resize",t.resizer),t.on(t.constants.EVENT_IMAGE_LOAD,function(){return t.recalculate(!1,!1)}),t.on(t.constants.EVENT_IMAGE_COMPLETE,function(){return t.recalculate(!0,!0)}),t.options.useOwnImageLoader||e(t,n,!t.options.waitForImages),t.emit(t.constants.EVENT_INITIALIZED)},_=function(t){N(t),T(t),L(t)},b=function(t){return t===Object(t)&&"[object Array]"!==Object.prototype.toString.call(t)},O=function(t,n){b(t)||(n.columns=t),b(t)&&t.columns&&(n.columns=t.columns),b(t)&&t.margin&&!b(t.margin)&&(n.margin={x:t.margin,y:t.margin}),b(t)&&t.margin&&b(t.margin)&&t.margin.x&&(n.margin.x=t.margin.x),b(t)&&t.margin&&b(t.margin)&&t.margin.y&&(n.margin.y=t.margin.y)},C=function(t,n){return window.getComputedStyle(t,null).getPropertyValue(n)},M=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t.lastcol||(t.lastcol=0),t.rows.length<1&&(e=!0),e){t.rows=[],t.cols=[],t.lastcol=0;for(var r=n-1;r>=0;r--)t.rows[r]=0,t.cols[r]=u(t,r)}else if(t.tmpRows){t.rows=[];for(var r=n-1;r>=0;r--)t.rows[r]=t.tmpRows[r]}else{t.tmpRows=[];for(var r=n-1;r>=0;r--)t.tmpRows[r]=t.rows[r]}},V=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=n?t.container.children:h(':scope > *:not([data-macy-complete="1"])',t.container);r=Array.from(r).filter(function(t){return null!==t.offsetParent});var o=c(t.options);return v(r,function(t){n&&(t.dataset.macyComplete=0),t.style.width=o}),t.options.trueOrder?(f(t,r,n,e),t.emit(t.constants.EVENT_RECALCULATED)):(p(t,r,n,e),t.emit(t.constants.EVENT_RECALCULATED))},R=function(){return!!window.Promise},x=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};Array.from||(Array.from=function(t){for(var n=0,e=[];n<t.length;)e.push(t[n++]);return e});var k={columns:4,margin:2,trueOrder:!1,waitForImages:!1,useImageLoader:!0,breakAt:{},useOwnImageLoader:!1,onInit:!1,cancelLegacy:!1,useContainerForBreakpoints:!1};!function(){try{document.createElement("a").querySelector(":scope *")}catch(t){!function(){function t(t){return function(e){if(e&&n.test(e)){var r=this.getAttribute("id");r||(this.id="q"+Math.floor(9e6*Math.random())+1e6),arguments[0]=e.replace(n,"#"+this.id);var o=t.apply(this,arguments);return null===r?this.removeAttribute("id"):r||(this.id=r),o}return t.apply(this,arguments)}}var n=/:scope\b/gi,e=t(Element.prototype.querySelector);Element.prototype.querySelector=function(t){return e.apply(this,arguments)};var r=t(Element.prototype.querySelectorAll);Element.prototype.querySelectorAll=function(t){return r.apply(this,arguments)}}()}}();var q=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;if(!(this instanceof t))return new t(n);this.options={},x(this.options,k,n),this.options.cancelLegacy&&!R()||_(this)};return q.init=function(t){return console.warn("Depreciated: Macy.init will be removed in v3.0.0 opt to use Macy directly like so Macy({ /*options here*/ }) "),new q(t)},q.prototype.recalculateOnImageLoad=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e(this,h("img",this.container),!t)},q.prototype.runOnImageLoad=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=h("img",this.container);return this.on(this.constants.EVENT_IMAGE_COMPLETE,t),n&&this.on(this.constants.EVENT_IMAGE_LOAD,t),e(this,r,n)},q.prototype.recalculate=function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e&&this.queue.clear(),this.queue.add(function(){return V(t,n,e)})},q.prototype.remove=function(){window.removeEventListener("resize",this.resizer),v(this.container.children,function(t){t.removeAttribute("data-macy-complete"),t.removeAttribute("style")}),this.container.removeAttribute("style")},q.prototype.reInit=function(){this.recalculate(!0,!0),this.emit(this.constants.EVENT_INITIALIZED),window.addEventListener("resize",this.resizer),this.container.style.position="relative"},q.prototype.on=function(t,n){this.events.on(t,n)},q.prototype.emit=function(t,n){this.events.emit(t,n)},q.constants={EVENT_INITIALIZED:"macy.initialized",EVENT_RECALCULATED:"macy.recalculated",EVENT_IMAGE_LOAD:"macy.image.load",EVENT_IMAGE_ERROR:"macy.image.error",EVENT_IMAGE_COMPLETE:"macy.images.complete",EVENT_RESIZE:"macy.resize"},q.prototype.constants=q.constants,q});


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/about.js":
/*!*********************************!*\
  !*** ./src/components/about.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const About = () => {
  const section = document.createElement('section');
  section.id = 'about';
  section.classList.add('hideElement');

  section.innerHTML = `
    <div class="w-full md:max-h-[720px] h-auto bg-green-900 flex-col flex md:flex-row">
        <div class="w-full bg-green-800 h-auto">
            <img src="./aboutPhoto.png" alt="Ladne zdjecie" class="h-full w-full object-cover">
        </div>
        <div class="w-full py-10 text-[#F5F0EC] flex items-center justify-center h-auto">
            <div class="w-4/5 space-y-20">
                <div class="space-y-8">
                    <div class="space-y-3">
                        <div class="text-sm">O firmie</div>
                        <div class="text-4xl w-fit font-montserrat font-medium">Tworzymy</br> z <i>pasją</i></div>
                    </div>
                    <div class="max-w-[800px] text-base">
                        Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą wykwalifikowani projektanci oraz architekci, których zadaniem jest rozpoznanie i realizacja potrzeb każdego Klienta. Nasza specjalizacja to przestrzenie nowoczesne, które charakteryzuje minimalizm, geometria i elegancka prostota. Tworzymy ogrody małoobsługowe, dostosowane do współczesnego trybu życia.
                    </div>
                </div>
                <div class="w-fit border-solid border-2 border-[#F5F0EC] px-[24px] py-[12px] rounded-full flex justify-center items-center space-x-2 transition-all hover:shadow-xl cursor-pointer">
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Contact = () => {
  const section = document.createElement('section');
  section.id = 'contact';
  section.classList.add('py-[60px]', 'hideElement');

  section.innerHTML = `
  <div class="h-full px-6 py-6 w-full lg:w-auto flex justify-center items-center">
    <div class="h-auto bg-green-900 w-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center text-[#F5F0EC] text-[40px] leading-[48px] space-y-6 p-9 md:px-16 md:py-14 lg:px-[110px] lg:py-[110px] lg:space-x-16 lg:items-end">
    
          <div class=" w-full lg:whitespace-nowrap h-full font-montserrat">
              <div>Zostańmy w kontakcie!</div>
              <div>Znajdziesz nas na <i><b>Instagramie</b></i>.</div>
          </div>
          <div class="flex lg:flex-col justify-between items-end md:items-start w-full space-y-6">
              <div class="text-base w-[150px] lg:w-[150px] md:w-auto">Śledź nasze najnowsze realizacje!</div>
              <a href="#" class="pt-[10px] pb-[12px] px-[24px] bg-[#F5F0EC] text-green-900 rounded-full text-base transition-all hover:bg-[#ece7e2] hover:shadow-md">Instagram</a>
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Footer = () => {
  const footer = document.createElement('footer');
  footer.classList = ` bg-black w-full h-auto text-white px-[40px] py-[80px] flex-col space-y-20 md:px-64`;
  footer.innerHTML = `
  <div class="flex-col space-y-8">

    <div class="w-full flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between space-y-4">
      
      <img src="./svg/giarddesignWhite.svg" alt="logo" class="w-[115px]">
      <aside class="flex justify-between items-center h-auto gap-6 text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
        
        <div class="min-w-[100px] w-auto md:w-auto md:text-base text-sm">Daj znać, co możemy dla Ciebie zrobic!</div>
        <button class="w-git h-9 bg-green-800 py-2 px-3 rounded-full whitespace-nowrap flex justify-center items-center hover:bg-green-900 transition-all hover:shadow-md">
          <div class="px-2 md:px-6 pt-[12px] pb-[14px]">Skontaktuj się z nami</div>
        </button>

      </aside>

    </div>

    <div class="w-full h-[1px] bg-slate-300"></div>


    <div class="flex w-full md:h-10 xl:h-10 2xl:h-10 lg:h-10 h-auto justify-between">
      <ul class="flex-col md:flex-row xl:flex 2xl:flex lg:flex gap-8" >
        <li><a href="#contact">Kontakt</a></li>
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Hero = () => {
  const main = document.createElement('main');
  main.classList.add('hideElement');
  main.id = 'hero';

  main.innerHTML = `
  <div class="flex flex-col md:flex-row w-full h-auto md:h-[92vh]">
  
    <div class="md:w-1/2 bg-[#DCC1AB] flex justify-center items-center">

        <aside class="md:h-full flex flex-col justify-center items-center w-full md:w-full xl:w-[599px] space-y-[72px] md:space-y-12 bg-[#DCC1AB] px-10 py-9 md:py-12 h-[92vh]">
          <div class="space-y-11">
              <div class="text-5xl md:text-6xl text-[#111111] leading-[50px] md:leading-[70px] font-montserrat font-medium">Nowoczesna aranżacja Twojego ogrodu</div>
              
              <div class="text-base leading-normal font-inter">Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.</div>
          </div>

          <div class="lg:w-full flex flex-col space-y-3 lg:flex-row justify-start w-full md:w-auto md:justify-between [&>a]:cursor-pointer lg:space-y-0 lg:space-x-9">
              <button class="bg-green-800 text-white px-6 pt-[12px] pb-[14px] rounded-full w-fit hover:shadow-md lg:whitespace-nowrap hover:bg-green-900 transition-all">
                  Skontaktuj się z nami
              </button>
              <a href="#realizacje" class="flex w-fit border-solid border-2 border-green-800 px-[22px] pt-[12px] pb-[14px] rounded-full text-green-800 transition-all hover:shadow-xl">
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

    <div class="h-[92vh] md:h-auto w-full md:w-1/2 relative bg-[#F5F0EC]">
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
  const images = [
    '1.jpg',
    'aboutPhoto.png',
    'projectsImages/img2.jpg',
    'projectsImages/img3.jpg',
    'projectsImages/img4.jpg',
    'projectsImages/img6.jpg',
    'projectsImages/img9.jpg'
  ];
  let currentIndex = 0;

  const updateSliderImage = (index) => {
    img.src = images[index];
  };

  next.addEventListener('click', () => {
    if (currentIndex === images.length - 1) {
      currentIndex = 0;
      updateSliderImage(currentIndex);
    } else if (currentIndex < images.length - 1) {
      currentIndex++;
      updateSliderImage(currentIndex);
    }
  });

  prev.addEventListener('click', () => {
    if (currentIndex === 0) {
      currentIndex = images.length - 1;
      updateSliderImage(currentIndex);
    } else if (currentIndex > 0) {
      currentIndex--;
      updateSliderImage(currentIndex);
    }
  });

  setInterval(() => {
    if (currentIndex === images.length - 1) {
      currentIndex = 0;
      updateSliderImage(currentIndex);
    } else if (currentIndex < images.length - 1) {
      currentIndex++;
      updateSliderImage(currentIndex);
    }
  }, 3000);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ "./src/components/nav.js":
/*!*******************************!*\
  !*** ./src/components/nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  const about = document.querySelector('.about');
  const realizations = document.querySelector('.realizations');
  const contact = document.querySelector('.contact');

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
    'hideElement bg-white w-full px-6 py-3 md:p-6 flex justify-between items-center sticky top-0 z-10 h-[8vh]';

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
    'md:flex text-[#111111] md:gap-10 gap-3 [&>*]:cursor-pointer md:flex-row md:relative md:m-0 justify-start items-start md:justify-center md:items-center fixed mt-[450px] rounded-xl py-5 px-6 md:p-0 bg-white flex flex-col left-1/2 -translate-x-1/2 w-[85vw] shadow-xl md:shadow-none md:w-auto md:left-0 md:translate-x-0 hidden animate-showMobileMenu md:animate-none font-inter';

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
    'md:bg-white',
    'md:mt-[-200px]',
    'md:group-hover:mt-[24px]',
    'md:shadow-xl',
    'md:rounded-md',
    'md:absolute',
    'z-[-100]',
    'md:border-none',
    'border-l-2',
    'border-slate-300',
    'transition-all',
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
  offerElementOne.innerHTML = `
  <a href="#Projekty">Projekty</a>
  `;
  offersList.appendChild(offerElementOne);
  offerElementTwo.innerHTML = `
  <a href="#Wizualizacje">Wizualizacje</a>
  `;
  offersList.appendChild(offerElementTwo);
  offerElementThree.innerHTML = `
  <a href="#Realizacje">Realizacje</a>
  `;
  offersList.appendChild(offerElementThree);

  offersListContainer.appendChild(offersList);

  offersLink.appendChild(arrowContainer);

  dropdown.appendChild(offersLink);
  dropdown.appendChild(offersListContainer);

  const aboutLink = document.createElement('a');
  aboutLink.setAttribute('href', '#about');
  aboutLink.classList.add(
    'animate-opacity',
    'group/text',
    'box-border',
    'about'
  );
  aboutLink.innerHTML = `
  <span>O firmie</span>
  <div class="w-0 h-[2px] bg-slate-800 transition-all group-hover/text:w-full group-hover/text:h-[2px]"></div>
  `;

  const registerLink = document.createElement('a');
  registerLink.setAttribute('href', '#realizations');
  registerLink.classList.add(
    'text-center',
    'animate-opacity',
    'group/text',
    'box-border',
    'realizations'
  );
  registerLink.innerHTML = `
  <span>Realizacje</span>
  <div class="w-0 h-[2px] bg-slate-800 transition-all group-hover/text:w-full group-hover/text:h-[2px]"></div>
  `;

  const contactLink = document.createElement('a');
  contactLink.setAttribute('href', '#contact');
  contactLink.classList.add(
    'animate-opacity',
    'group/text',
    'box-border',
    'contact'
  );
  contactLink.innerHTML = `
  <span>Kontakt</span>
  <div class="w-0 h-[2px] bg-slate-800 transition-all group-hover/text:w-full group-hover/text:h-[2px]"></div>
  `;

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
      'hover:bg-slate-100',
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Offer = (title, description, icon) => {
  const offerContainer = document.querySelector('.offers-view');
  const page = document.createElement('div');
  //   page.classList = 'px-10 py-12';
  page.id = title;
  page.innerHTML = `
<div class="w-auto h-auto group">

<div class="flex-col bg-white  w-72 h-auto md:w-[370px] space-y-10 md:space-y-20 py-12 px-10 rounded-xl transition-all group-hover:[transform:rotateY(360deg)] cursor-pointer hover:scale-105 group-hover:shadow-xl">
    <div class="space-y-8">
        <div>
            ${icon}
        </div>
        <div class="space-y-3">
            <div class="md:text-2xl text-xl font-montserrat font-medium">${title}</div>
            <div class="text-base">${description}</div>
        </div>
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _offer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offer */ "./src/components/offer.js");


const Offers = () => {
  const section = document.createElement('section');
  section.id = 'offers';
  section.classList =
    'hideElement flex justify-center items-center flex-col w-full md:h-auto space-y-10 bg-[#F5F0EC] p-5 py-10 pt-[120px] pb-[160px] space-y-[96px]';

  section.innerHTML = `
  <div class="max-w-[1040px] flex-col space-y-5 w-3/4 m-auto text-[#111111]">
    <div class="text-xs text-green-800">Oferta</div>
    <div class="md:text-5xl text-3xl leading-[55.20px] font-montserrat font-medium">Działamy <i>kompleksowo</i></div>
    <div class="w-full text-base leading-6">
        Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne. Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie, a na każdym etapie posłużymy radą i wieloletnim doświadczeniem. 
    </div>
  </div>

  <div class="hideElement offers-view grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-16 w-auto h-full max-w-[1440px] max-px-[88px]"></div>
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var macy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! macy */ "./node_modules/macy/dist/macy.js");
/* harmony import */ var macy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(macy__WEBPACK_IMPORTED_MODULE_0__);


const hideGallery = (macy) => {
  const expandBtn = document.querySelector('#expand');
  const blurBg = document.querySelector('#bgBlured');
  const realizations = document.querySelector('.realizations-container');
  const images = document.querySelector('.images');
  const hideBtn = document.querySelector('#hide-gallery');
  const gallery = document.querySelector('.gallery');

  gallery.classList.remove(
    'w-[85vw]',
    'bg-white',
    'h-[80vh]',
    'fixed',
    'shadow-xl',
    'top-1/2',
    'left-1/2',
    '-translate-x-1/2',
    '-translate-y-1/2',
    'p-5',
    'rounded-xl',
    'shadow-xl',
    'm-0',
    'overflow-y-scroll',
    'animate-opacity'
  );
  images.classList.add('animate-opacity');
  realizations.classList.add('md:h-[1824px]');
  images.classList.add('md:h-[1475px]');
  images.classList.add('h-[1000px]');
  blurBg.classList.remove('hidden');
  images.classList.add('overflow-hidden');
  expandBtn.classList.remove('hidden');
  hideBtn.classList.add('hidden');
  hideBtn.classList.remove('flex');
  macy.runOnImageLoad();
};

const expandGallery = (macy) => {
  const expandBtn = document.querySelector('#expand');
  const imagesContainer = document.querySelector('#images-container');
  const blurBg = document.querySelector('#bgBlured');
  const realizations = document.querySelector('.realizations-container');
  const images = document.querySelector('.images');
  const hideBtn = document.querySelector('#hide-gallery');
  const gallery = document.querySelector('.gallery');

  expandBtn.addEventListener('click', () => {
    images.classList.remove('animate-opacity');
    gallery.classList.add(
      'w-[85vw]',
      'bg-white',
      'h-[80vh]',
      'fixed',
      'shadow-xl',
      'top-1/2',
      'left-1/2',
      '-translate-x-1/2',
      '-translate-y-1/2',
      'p-5',
      'rounded-xl',
      'shadow-xl',
      'm-0',
      'overflow-y-scroll',
      'animate-opacity'
    );

    realizations.classList.remove('md:h-[1824px]');
    realizations.classList.add('h-auto');
    images.classList.remove('md:h-[1475px]');
    images.classList.remove('h-[1000px]');
    blurBg.classList.add('hidden');
    expandBtn.classList.add('hidden');
    hideBtn.classList.remove('hidden');
    hideBtn.classList.add('flex');
    macy.runOnImageLoad();
    hideBtn.addEventListener('click', () => {
      hideGallery(macy);
    });
  });
};

const Realizations = () => {
  const section = document.createElement('section');
  section.id = 'realizations';
  section.classList.add(
    'bg-[#DCC1AB]',
    'w-full',
    'md:h-[1824px]',
    'h-auto',
    'pt-[120px]',
    'pb-11',
    'realizations-container',
    'z-10'
  );
  section.innerHTML = `
    <div class="h-full relative">

        <div class="w-full h-auto flex flex-col justify-start items-start gap-4 pl-10 md:pl-40 pb-24">
            <div class="text-green-800 text-xs">Realizacje</div>
            <div class="text-5xl font-montserrat font-medium">Nasze <i>projekty</i></div>
        </div>
        
      <div class="images relative h-[1000px] md:h-[1475px] overflow-hidden transition-all" id="images-gallery">
      
        <div class="gallery">

          <div id="images-container" class="[&>img]:w-[450px] [&>img]:object-cover [&>img]:align-top">
            <img src="./projectsImages/img9.jpg" alt="Img9" class="md:h-[601px] h-auto"/>
            <img src="./projectsImages/img8.jpg" alt="Img8" class="md:h-[338px] h-auto"/>
            <img src="./projectsImages/img7.jpg" alt="Img7" class="md:h-[451px] h-auto"/>
            <img src="./projectsImages/img5.jpg" alt="Img5" class="md:h-[452px] h-auto"/>
            <img src="./projectsImages/img4.jpg" alt="Img4" class="md:h-[603px] h-auto"/>
            <img src="./projectsImages/img6.jpg" alt="Img6" class="md:h-[452px] h-auto"/>
            <img src="./projectsImages/img2.jpg" alt="Img2" class="md:h-[601px] h-auto"/>
            <img src="./projectsImages/img3.jpg" alt="Img3" class="md:h-[338px] h-auto"/>
            <img src="./projectsImages/img1.jpg" alt="Img1" class="md:h-[338px] h-auto"/>

            <img src="./projectsImages/img9.jpg" alt="Img9" class="md:h-[601px] h-auto"/>
            <img src="./projectsImages/img8.jpg" alt="Img8" class="md:h-[338px] h-auto"/>
            <img src="./projectsImages/img7.jpg" alt="Img7" class="md:h-[451px] h-auto"/>
            <img src="./projectsImages/img5.jpg" alt="Img5" class="md:h-[452px] h-auto"/>
            <img src="./projectsImages/img4.jpg" alt="Img4" class="md:h-[603px] h-auto"/>
            <img src="./projectsImages/img6.jpg" alt="Img6" class="md:h-[452px] h-auto"/>
            <img src="./projectsImages/img2.jpg" alt="Img2" class="md:h-[601px] h-auto"/>
            <img src="./projectsImages/img3.jpg" alt="Img3" class="md:h-[338px] h-auto"/>
            <img src="./projectsImages/img1.jpg" alt="Img1" class="md:h-[338px] h-auto"/>
          </div>

          <button id="hide-gallery" class="sticky bg-white bottom-0 left-1/2 -translate-x-1/2 justify-center items-center pt-[12px] pb-[14px] px-[22px] gap-[8px] border border-[#111111] rounded-full hidden shadow-lg">
            <span>Zwiń</span>
            <img src="./svg/expand.svg" class="rotate-180"/>
          </button>

        </div>

        <div id="bgBlured" class="w-full h-[1000px] bg-gradient-to-t from-[#DCC1AB]  absolute bottom-0 flex justify-center items-end">
        
          <button id="expand" class="flex justify-center items-center pt-[12px] pb-[14px] px-[22px] gap-[8px] border border-[#111111] rounded-full">
            <span>Rozwiń</span>
            <img src="./svg/expand.svg"/>
          </button>

        </div>

      
      
      </div>
    </div>
  `;

  document.body.appendChild(section);
  const macy = macy__WEBPACK_IMPORTED_MODULE_0___default()({
    container: '#images-container',
    mobileFirst: true,
    columns: 1,
    breakAt: {
      350: {
        margin: {
          x: 7,
          y: 7
        },
        columns: 2
      },
      400: {
        margin: {
          x: 10,
          y: 10
        },
        columns: 2
      },
      700: {
        margin: {
          x: 20,
          y: 20
        },
        columns: 3
      },
      1800: {
        margin: {
          x: 20,
          y: 20
        },
        columns: 4
      }
    }
  });

  expandGallery(macy);
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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

document.body.classList.add('bg-[#F5F0EC]', 'font-inter');

(0,_components_nav__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_hero__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_components_offers__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_components_about__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_components_realizations__WEBPACK_IMPORTED_MODULE_7__["default"])();
(0,_components_contact__WEBPACK_IMPORTED_MODULE_6__["default"])();
(0,_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showElement');
    } else {
      entry.target.classList.remove('showElement');
    }
  });
});

const toAnimate = document.querySelectorAll('.hideElement');
toAnimate.forEach((el) => observer.observe(el));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxlQUFlLEtBQW9ELG9CQUFvQixDQUEwRCxDQUFDLGlCQUFpQixhQUFhLGdCQUFnQixhQUFhLGtCQUFrQixzQ0FBc0MsZ0JBQWdCLDRCQUE0QixJQUFJLHFCQUFxQixTQUFTLGdCQUFnQiw4REFBOEQsa0NBQWtDLHFCQUFxQixjQUFjLDZFQUE2RSxXQUFXLEtBQUssd0JBQXdCLDhCQUE4QixTQUFTLGNBQWMsc0ZBQXNGLEtBQUssS0FBSyx3QkFBd0IsOEJBQThCLFNBQVMsY0FBYyxnRkFBZ0YsbUJBQW1CLHNCQUFzQiwwQkFBMEIsV0FBVyx1QkFBdUIsNkJBQTZCLHdCQUF3QixnREFBZ0QsS0FBSyxnREFBZ0QsRUFBRSxjQUFjLG9CQUFvQixjQUFjLG1CQUFtQixjQUFjLHlGQUF5RixlQUFlLHNCQUFzQixXQUFXLHVCQUF1QixvQkFBb0Isc0JBQXNCLDREQUE0RCxnQkFBZ0IseUNBQXlDLG9CQUFvQixpQkFBaUIsV0FBVyx1QkFBdUIsdUJBQXVCLHNCQUFzQiwrRkFBK0YsY0FBYywrQkFBK0IsZ0JBQWdCLFVBQVUsd0JBQXdCLGdCQUFnQiwySkFBMkoseUJBQXlCLHNDQUFzQyx3Q0FBd0MsbUJBQW1CLDRJQUE0SSwyQkFBMkIsZ0JBQWdCLDJKQUEySix5QkFBeUIsNkJBQTZCLG9CQUFvQix3TkFBd04sMkJBQTJCLHNCQUFzQiwwQ0FBMEMsMEJBQTBCLHNFQUFzRSx3R0FBd0csc0JBQXNCLGdDQUFnQyx3Q0FBd0MseUJBQXlCLGtEQUFrRCx1REFBdUQsNENBQTRDLHdDQUF3QyxrREFBa0QsZ0RBQWdELG9CQUFvQix1QkFBdUIsSUFBSSxhQUFhLGNBQWMsOERBQThELDRDQUE0QywyQkFBMkIsd0NBQXdDLDBCQUEwQixnREFBZ0QsNEJBQTRCLHFFQUFxRSw2Q0FBNkMsZ0JBQWdCLHlDQUF5Qyw4QkFBOEIsZ0JBQWdCLGtCQUFrQixnRUFBZ0Usd0NBQXdDLGNBQWMsOERBQThELGNBQWMsa0JBQWtCLDBCQUEwQix3SEFBd0gsNkZBQTZGLDZCQUE2QiwwSEFBMEgsK0NBQStDLDZCQUE2Qiw2QkFBNkIsWUFBWSxHQUFHLGtCQUFrQix1RkFBdUYsaUJBQWlCLDhEQUE4RCxpQ0FBaUMsb0NBQW9DLHFDQUFxQyxzQkFBc0Isd0NBQXdDLFlBQVksRUFBRSxtQkFBbUIsd0NBQXdDLE1BQU0sRUFBRSxvQkFBb0IsNkNBQTZDLE1BQU0sRUFBRSxFQUFFLGlCQUFpQiw4REFBOEQsdUJBQXVCLGdCQUFnQixFQUFFLGlCQUFpQiw4REFBOEQsNkNBQTZDLHlDQUF5QyxFQUFFLGVBQWUsb0JBQW9CLHdEQUF3RCw0QkFBNEIsRUFBRSxNQUFNLGVBQWUsa0pBQWtKLHVIQUF1SCxlQUFlLHlEQUF5RCxlQUFlLDJCQUEyQix5RkFBeUYsNEJBQTRCLG1EQUFtRCw0QkFBNEIscUdBQXFHLGVBQWUsZUFBZSxlQUFlLDJFQUEyRSxpQkFBaUIsb0dBQW9HLHNCQUFzQixvSUFBb0ksaUJBQWlCLDJEQUEyRCxpQkFBaUIsOERBQThELHVEQUF1RCxnQ0FBZ0MsY0FBYyxLQUFLLGlDQUFpQyxtQkFBbUIsVUFBVSxjQUFjLEtBQUssMkJBQTJCLEtBQUssYUFBYSxjQUFjLEtBQUssNEJBQTRCLGVBQWUsOE1BQThNLG1DQUFtQyw2QkFBNkIsRUFBRSxtQkFBbUIsdUJBQXVCLDhDQUE4Qyw4SEFBOEgsY0FBYyx1QkFBdUIsOEJBQThCLFlBQVksbUJBQW1CLEtBQUssbUJBQW1CLHNFQUFzRSxVQUFVLG9DQUFvQyxpQkFBaUIsV0FBVyxnQkFBZ0IsU0FBUyxFQUFFLE9BQU8sNkVBQTZFLCtFQUErRSxZQUFZLElBQUksc0RBQXNELFNBQVMsWUFBWSxjQUFjLG1CQUFtQixpQkFBaUIsOEJBQThCLHlGQUF5Riw4QkFBOEIsNERBQTRELGdDQUFnQyx3REFBd0QsNENBQTRDLGdDQUFnQyw0Q0FBNEMsK0NBQStDLGdDQUFnQyxJQUFJLEdBQUcsbUJBQW1CLCtEQUErRCx3Q0FBd0MsZUFBZSwrREFBK0QsMEJBQTBCLDhHQUE4RyxrQkFBa0IsY0FBYywrQ0FBK0MsOERBQThELDBDQUEwQyx3Q0FBd0Msd0ZBQXdGLGdIQUFnSCxvQ0FBb0Msa0lBQWtJLHVEQUF1RCxnQkFBZ0IsRUFBRSwrQkFBK0Isd0ZBQXdGLG1FQUFtRSwwQ0FBMEMsK0JBQStCLDRKQUE0Siw4QkFBOEIsb0JBQW9CLGdDQUFnQyxzQkFBc0IsY0FBYywyTkFBMk4scUNBQXFDOzs7Ozs7Ozs7Ozs7O0FDQTkzVTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RHRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RHcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Um5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLDJFQUEyRSxNQUFNO0FBQ2pGLHFDQUFxQyxZQUFZO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0RBQUs7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFLO0FBQ1A7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNFO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyQ0FBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFlBQVksRUFBQzs7Ozs7OztVQ2hNNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2M7QUFDTTtBQUNKO0FBQ0k7QUFDRjtBQUNJO0FBQ1U7O0FBRXJEO0FBQ0E7O0FBRUE7O0FBRUEsMkRBQUc7QUFDSCw0REFBSTtBQUNKLDhEQUFNO0FBQ04sNkRBQUs7QUFDTCxvRUFBWTtBQUNaLCtEQUFPO0FBQ1AsOERBQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9ub2RlX21vZHVsZXMvbWFjeS9kaXN0L21hY3kuanMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9hYm91dC5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9jb250YWN0LmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9oZXJvLmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL25hdi5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9vZmZlci5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9vZmZlcnMuanMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2NvbXBvbmVudHMvcmVhbGl6YXRpb25zLmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKHQsbil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9bigpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUobik6dC5NYWN5PW4oKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCxuKXt2YXIgZT12b2lkIDA7cmV0dXJuIGZ1bmN0aW9uKCl7ZSYmY2xlYXJUaW1lb3V0KGUpLGU9c2V0VGltZW91dCh0LG4pfX1mdW5jdGlvbiBuKHQsbil7Zm9yKHZhciBlPXQubGVuZ3RoLHI9ZSxvPVtdO2UtLTspby5wdXNoKG4odFtyLWUtMV0pKTtyZXR1cm4gb31mdW5jdGlvbiBlKHQsbil7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXTtpZih3aW5kb3cuUHJvbWlzZSlyZXR1cm4gQSh0LG4sZSk7dC5yZWNhbGN1bGF0ZSghMCwhMCl9ZnVuY3Rpb24gcih0KXtmb3IodmFyIG49dC5vcHRpb25zLGU9dC5yZXNwb25zaXZlT3B0aW9ucyxyPXQua2V5cyxvPXQuZG9jV2lkdGgsaT12b2lkIDAscz0wO3M8ci5sZW5ndGg7cysrKXt2YXIgYT1wYXJzZUludChyW3NdLDEwKTtvPj1hJiYoaT1uLmJyZWFrQXRbYV0sTyhpLGUpKX1yZXR1cm4gZX1mdW5jdGlvbiBvKHQpe2Zvcih2YXIgbj10Lm9wdGlvbnMsZT10LnJlc3BvbnNpdmVPcHRpb25zLHI9dC5rZXlzLG89dC5kb2NXaWR0aCxpPXZvaWQgMCxzPXIubGVuZ3RoLTE7cz49MDtzLS0pe3ZhciBhPXBhcnNlSW50KHJbc10sMTApO288PWEmJihpPW4uYnJlYWtBdFthXSxPKGksZSkpfXJldHVybiBlfWZ1bmN0aW9uIGkodCl7dmFyIG49dC51c2VDb250YWluZXJGb3JCcmVha3BvaW50cz90LmNvbnRhaW5lci5jbGllbnRXaWR0aDp3aW5kb3cuaW5uZXJXaWR0aCxlPXtjb2x1bW5zOnQuY29sdW1uc307Yih0Lm1hcmdpbik/ZS5tYXJnaW49e3g6dC5tYXJnaW4ueCx5OnQubWFyZ2luLnl9OmUubWFyZ2luPXt4OnQubWFyZ2luLHk6dC5tYXJnaW59O3ZhciBpPU9iamVjdC5rZXlzKHQuYnJlYWtBdCk7cmV0dXJuIHQubW9iaWxlRmlyc3Q/cih7b3B0aW9uczp0LHJlc3BvbnNpdmVPcHRpb25zOmUsa2V5czppLGRvY1dpZHRoOm59KTpvKHtvcHRpb25zOnQscmVzcG9uc2l2ZU9wdGlvbnM6ZSxrZXlzOmksZG9jV2lkdGg6bn0pfWZ1bmN0aW9uIHModCl7cmV0dXJuIGkodCkuY29sdW1uc31mdW5jdGlvbiBhKHQpe3JldHVybiBpKHQpLm1hcmdpbn1mdW5jdGlvbiBjKHQpe3ZhciBuPSEoYXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0pfHxhcmd1bWVudHNbMV0sZT1zKHQpLHI9YSh0KS54LG89MTAwL2U7aWYoIW4pcmV0dXJuIG87aWYoMT09PWUpcmV0dXJuXCIxMDAlXCI7dmFyIGk9XCJweFwiO2lmKFwic3RyaW5nXCI9PXR5cGVvZiByKXt2YXIgYz1wYXJzZUZsb2F0KHIpO2k9ci5yZXBsYWNlKGMsXCJcIikscj1jfXJldHVybiByPShlLTEpKnIvZSxcIiVcIj09PWk/by1yK1wiJVwiOlwiY2FsYyhcIitvK1wiJSAtIFwiK3IraStcIilcIn1mdW5jdGlvbiB1KHQsbil7dmFyIGU9cyh0Lm9wdGlvbnMpLHI9MCxvPXZvaWQgMCxpPXZvaWQgMDtpZigxPT09KytuKXJldHVybiAwO2k9YSh0Lm9wdGlvbnMpLng7dmFyIHU9XCJweFwiO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpKXt2YXIgbD1wYXJzZUZsb2F0KGksMTApO3U9aS5yZXBsYWNlKGwsXCJcIiksaT1sfXJldHVybiBvPShpLShlLTEpKmkvZSkqKG4tMSkscis9Yyh0Lm9wdGlvbnMsITEpKihuLTEpLFwiJVwiPT09dT9yK28rXCIlXCI6XCJjYWxjKFwiK3IrXCIlICsgXCIrbyt1K1wiKVwifWZ1bmN0aW9uIGwodCl7dmFyIG49MCxlPXQuY29udGFpbmVyLHI9dC5yb3dzO3YocixmdW5jdGlvbih0KXtuPXQ+bj90Om59KSxlLnN0eWxlLmhlaWdodD1uK1wicHhcIn1mdW5jdGlvbiBwKHQsbil7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXSxyPSEoYXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10pfHxhcmd1bWVudHNbM10sbz1zKHQub3B0aW9ucyksaT1hKHQub3B0aW9ucykueTtNKHQsbyxlKSx2KG4sZnVuY3Rpb24obil7dmFyIGU9MCxvPXBhcnNlSW50KG4ub2Zmc2V0SGVpZ2h0LDEwKTtpc05hTihvKXx8KHQucm93cy5mb3JFYWNoKGZ1bmN0aW9uKG4scil7bjx0LnJvd3NbZV0mJihlPXIpfSksbi5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsbi5zdHlsZS50b3A9dC5yb3dzW2VdK1wicHhcIixuLnN0eWxlLmxlZnQ9XCJcIit0LmNvbHNbZV0sdC5yb3dzW2VdKz1pc05hTihvKT8wOm8raSxyJiYobi5kYXRhc2V0Lm1hY3lDb21wbGV0ZT0xKSl9KSxyJiYodC50bXBSb3dzPW51bGwpLGwodCl9ZnVuY3Rpb24gZih0LG4pe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdJiZhcmd1bWVudHNbMl0scj0hKGFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdKXx8YXJndW1lbnRzWzNdLG89cyh0Lm9wdGlvbnMpLGk9YSh0Lm9wdGlvbnMpLnk7TSh0LG8sZSksdihuLGZ1bmN0aW9uKG4pe3QubGFzdGNvbD09PW8mJih0Lmxhc3Rjb2w9MCk7dmFyIGU9QyhuLFwiaGVpZ2h0XCIpO2U9cGFyc2VJbnQobi5vZmZzZXRIZWlnaHQsMTApLGlzTmFOKGUpfHwobi5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsbi5zdHlsZS50b3A9dC5yb3dzW3QubGFzdGNvbF0rXCJweFwiLG4uc3R5bGUubGVmdD1cIlwiK3QuY29sc1t0Lmxhc3Rjb2xdLHQucm93c1t0Lmxhc3Rjb2xdKz1pc05hTihlKT8wOmUraSx0Lmxhc3Rjb2wrPTEsciYmKG4uZGF0YXNldC5tYWN5Q29tcGxldGU9MSkpfSksciYmKHQudG1wUm93cz1udWxsKSxsKHQpfXZhciBoPWZ1bmN0aW9uIHQobixlKXtpZighKHRoaXMgaW5zdGFuY2VvZiB0KSlyZXR1cm4gbmV3IHQobixlKTtpZihuJiZuLm5vZGVOYW1lKXJldHVybiBuO2lmKG49bi5yZXBsYWNlKC9eXFxzKi8sXCJcIikucmVwbGFjZSgvXFxzKiQvLFwiXCIpLGUpcmV0dXJuIHRoaXMuYnlDc3MobixlKTtmb3IodmFyIHIgaW4gdGhpcy5zZWxlY3RvcnMpaWYoZT1yLnNwbGl0KFwiL1wiKSxuZXcgUmVnRXhwKGVbMV0sZVsyXSkudGVzdChuKSlyZXR1cm4gdGhpcy5zZWxlY3RvcnNbcl0obik7cmV0dXJuIHRoaXMuYnlDc3Mobil9O2gucHJvdG90eXBlLmJ5Q3NzPWZ1bmN0aW9uKHQsbil7cmV0dXJuKG58fGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHQpfSxoLnByb3RvdHlwZS5zZWxlY3RvcnM9e30saC5wcm90b3R5cGUuc2VsZWN0b3JzWy9eXFwuW1xcd1xcLV0rJC9dPWZ1bmN0aW9uKHQpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHQuc3Vic3RyaW5nKDEpKX0saC5wcm90b3R5cGUuc2VsZWN0b3JzWy9eXFx3KyQvXT1mdW5jdGlvbih0KXtyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodCl9LGgucHJvdG90eXBlLnNlbGVjdG9yc1svXlxcI1tcXHdcXC1dKyQvXT1mdW5jdGlvbih0KXtyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodC5zdWJzdHJpbmcoMSkpfTt2YXIgdj1mdW5jdGlvbih0LG4pe2Zvcih2YXIgZT10Lmxlbmd0aCxyPWU7ZS0tOyluKHRbci1lLTFdKX0sbT1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF07dGhpcy5ydW5uaW5nPSExLHRoaXMuZXZlbnRzPVtdLHRoaXMuYWRkKHQpfTttLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXtpZighdGhpcy5ydW5uaW5nJiZ0aGlzLmV2ZW50cy5sZW5ndGg+MCl7dmFyIHQ9dGhpcy5ldmVudHMuc2hpZnQoKTt0aGlzLnJ1bm5pbmc9ITAsdCgpLHRoaXMucnVubmluZz0hMSx0aGlzLnJ1bigpfX0sbS5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxuPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF07cmV0dXJuISFuJiYoQXJyYXkuaXNBcnJheShuKT92KG4sZnVuY3Rpb24obil7cmV0dXJuIHQuYWRkKG4pfSk6KHRoaXMuZXZlbnRzLnB1c2gobiksdm9pZCB0aGlzLnJ1bigpKSl9LG0ucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5ldmVudHM9W119O3ZhciBkPWZ1bmN0aW9uKHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fTtyZXR1cm4gdGhpcy5pbnN0YW5jZT10LHRoaXMuZGF0YT1uLHRoaXN9LHk9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdO3RoaXMuZXZlbnRzPXt9LHRoaXMuaW5zdGFuY2U9dH07eS5wcm90b3R5cGUub249ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdLG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0mJmFyZ3VtZW50c1sxXTtyZXR1cm4hKCF0fHwhbikmJihBcnJheS5pc0FycmF5KHRoaXMuZXZlbnRzW3RdKXx8KHRoaXMuZXZlbnRzW3RdPVtdKSx0aGlzLmV2ZW50c1t0XS5wdXNoKG4pKX0seS5wcm90b3R5cGUuZW1pdD1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF0sbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307aWYoIXR8fCFBcnJheS5pc0FycmF5KHRoaXMuZXZlbnRzW3RdKSlyZXR1cm4hMTt2YXIgZT1uZXcgZCh0aGlzLmluc3RhbmNlLG4pO3YodGhpcy5ldmVudHNbdF0sZnVuY3Rpb24odCl7cmV0dXJuIHQoZSl9KX07dmFyIGc9ZnVuY3Rpb24odCl7cmV0dXJuIShcIm5hdHVyYWxIZWlnaHRcImluIHQmJnQubmF0dXJhbEhlaWdodCt0Lm5hdHVyYWxXaWR0aD09PTApfHx0LndpZHRoK3QuaGVpZ2h0IT09MH0sRT1mdW5jdGlvbih0LG4pe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdJiZhcmd1bWVudHNbMl07cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQsZSl7aWYobi5jb21wbGV0ZSlyZXR1cm4gZyhuKT90KG4pOmUobik7bi5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGcobik/dChuKTplKG4pfSksbi5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixmdW5jdGlvbigpe3JldHVybiBlKG4pfSl9KS50aGVuKGZ1bmN0aW9uKG4pe2UmJnQuZW1pdCh0LmNvbnN0YW50cy5FVkVOVF9JTUFHRV9MT0FELHtpbWc6bn0pfSkuY2F0Y2goZnVuY3Rpb24obil7cmV0dXJuIHQuZW1pdCh0LmNvbnN0YW50cy5FVkVOVF9JTUFHRV9FUlJPUix7aW1nOm59KX0pfSx3PWZ1bmN0aW9uKHQsZSl7dmFyIHI9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXTtyZXR1cm4gbihlLGZ1bmN0aW9uKG4pe3JldHVybiBFKHQsbixyKX0pfSxBPWZ1bmN0aW9uKHQsbil7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXTtyZXR1cm4gUHJvbWlzZS5hbGwodyh0LG4sZSkpLnRoZW4oZnVuY3Rpb24oKXt0LmVtaXQodC5jb25zdGFudHMuRVZFTlRfSU1BR0VfQ09NUExFVEUpfSl9LEk9ZnVuY3Rpb24obil7cmV0dXJuIHQoZnVuY3Rpb24oKXtuLmVtaXQobi5jb25zdGFudHMuRVZFTlRfUkVTSVpFKSxuLnF1ZXVlLmFkZChmdW5jdGlvbigpe3JldHVybiBuLnJlY2FsY3VsYXRlKCEwLCEwKX0pfSwxMDApfSxOPWZ1bmN0aW9uKHQpe2lmKHQuY29udGFpbmVyPWgodC5vcHRpb25zLmNvbnRhaW5lciksdC5jb250YWluZXIgaW5zdGFuY2VvZiBofHwhdC5jb250YWluZXIpcmV0dXJuISF0Lm9wdGlvbnMuZGVidWcmJmNvbnNvbGUuZXJyb3IoXCJFcnJvcjogQ29udGFpbmVyIG5vdCBmb3VuZFwiKTt0LmNvbnRhaW5lci5sZW5ndGgmJih0LmNvbnRhaW5lcj10LmNvbnRhaW5lclswXSksdC5vcHRpb25zLmNvbnRhaW5lcj10LmNvbnRhaW5lcix0LmNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCJ9LFQ9ZnVuY3Rpb24odCl7dC5xdWV1ZT1uZXcgbSx0LmV2ZW50cz1uZXcgeSh0KSx0LnJvd3M9W10sdC5yZXNpemVyPUkodCl9LEw9ZnVuY3Rpb24odCl7dmFyIG49aChcImltZ1wiLHQuY29udGFpbmVyKTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHQucmVzaXplciksdC5vbih0LmNvbnN0YW50cy5FVkVOVF9JTUFHRV9MT0FELGZ1bmN0aW9uKCl7cmV0dXJuIHQucmVjYWxjdWxhdGUoITEsITEpfSksdC5vbih0LmNvbnN0YW50cy5FVkVOVF9JTUFHRV9DT01QTEVURSxmdW5jdGlvbigpe3JldHVybiB0LnJlY2FsY3VsYXRlKCEwLCEwKX0pLHQub3B0aW9ucy51c2VPd25JbWFnZUxvYWRlcnx8ZSh0LG4sIXQub3B0aW9ucy53YWl0Rm9ySW1hZ2VzKSx0LmVtaXQodC5jb25zdGFudHMuRVZFTlRfSU5JVElBTElaRUQpfSxfPWZ1bmN0aW9uKHQpe04odCksVCh0KSxMKHQpfSxiPWZ1bmN0aW9uKHQpe3JldHVybiB0PT09T2JqZWN0KHQpJiZcIltvYmplY3QgQXJyYXldXCIhPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9LE89ZnVuY3Rpb24odCxuKXtiKHQpfHwobi5jb2x1bW5zPXQpLGIodCkmJnQuY29sdW1ucyYmKG4uY29sdW1ucz10LmNvbHVtbnMpLGIodCkmJnQubWFyZ2luJiYhYih0Lm1hcmdpbikmJihuLm1hcmdpbj17eDp0Lm1hcmdpbix5OnQubWFyZ2lufSksYih0KSYmdC5tYXJnaW4mJmIodC5tYXJnaW4pJiZ0Lm1hcmdpbi54JiYobi5tYXJnaW4ueD10Lm1hcmdpbi54KSxiKHQpJiZ0Lm1hcmdpbiYmYih0Lm1hcmdpbikmJnQubWFyZ2luLnkmJihuLm1hcmdpbi55PXQubWFyZ2luLnkpfSxDPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQsbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShuKX0sTT1mdW5jdGlvbih0LG4pe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdJiZhcmd1bWVudHNbMl07aWYodC5sYXN0Y29sfHwodC5sYXN0Y29sPTApLHQucm93cy5sZW5ndGg8MSYmKGU9ITApLGUpe3Qucm93cz1bXSx0LmNvbHM9W10sdC5sYXN0Y29sPTA7Zm9yKHZhciByPW4tMTtyPj0wO3ItLSl0LnJvd3Nbcl09MCx0LmNvbHNbcl09dSh0LHIpfWVsc2UgaWYodC50bXBSb3dzKXt0LnJvd3M9W107Zm9yKHZhciByPW4tMTtyPj0wO3ItLSl0LnJvd3Nbcl09dC50bXBSb3dzW3JdfWVsc2V7dC50bXBSb3dzPVtdO2Zvcih2YXIgcj1uLTE7cj49MDtyLS0pdC50bXBSb3dzW3JdPXQucm93c1tyXX19LFY9ZnVuY3Rpb24odCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0mJmFyZ3VtZW50c1sxXSxlPSEoYXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0pfHxhcmd1bWVudHNbMl0scj1uP3QuY29udGFpbmVyLmNoaWxkcmVuOmgoJzpzY29wZSA+ICo6bm90KFtkYXRhLW1hY3ktY29tcGxldGU9XCIxXCJdKScsdC5jb250YWluZXIpO3I9QXJyYXkuZnJvbShyKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIG51bGwhPT10Lm9mZnNldFBhcmVudH0pO3ZhciBvPWModC5vcHRpb25zKTtyZXR1cm4gdihyLGZ1bmN0aW9uKHQpe24mJih0LmRhdGFzZXQubWFjeUNvbXBsZXRlPTApLHQuc3R5bGUud2lkdGg9b30pLHQub3B0aW9ucy50cnVlT3JkZXI/KGYodCxyLG4sZSksdC5lbWl0KHQuY29uc3RhbnRzLkVWRU5UX1JFQ0FMQ1VMQVRFRCkpOihwKHQscixuLGUpLHQuZW1pdCh0LmNvbnN0YW50cy5FVkVOVF9SRUNBTENVTEFURUQpKX0sUj1mdW5jdGlvbigpe3JldHVybiEhd2luZG93LlByb21pc2V9LHg9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl7dmFyIGU9YXJndW1lbnRzW25dO2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX1yZXR1cm4gdH07QXJyYXkuZnJvbXx8KEFycmF5LmZyb209ZnVuY3Rpb24odCl7Zm9yKHZhciBuPTAsZT1bXTtuPHQubGVuZ3RoOyllLnB1c2godFtuKytdKTtyZXR1cm4gZX0pO3ZhciBrPXtjb2x1bW5zOjQsbWFyZ2luOjIsdHJ1ZU9yZGVyOiExLHdhaXRGb3JJbWFnZXM6ITEsdXNlSW1hZ2VMb2FkZXI6ITAsYnJlYWtBdDp7fSx1c2VPd25JbWFnZUxvYWRlcjohMSxvbkluaXQ6ITEsY2FuY2VsTGVnYWN5OiExLHVzZUNvbnRhaW5lckZvckJyZWFrcG9pbnRzOiExfTshZnVuY3Rpb24oKXt0cnl7ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIikucXVlcnlTZWxlY3RvcihcIjpzY29wZSAqXCIpfWNhdGNoKHQpeyFmdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKGUmJm4udGVzdChlKSl7dmFyIHI9dGhpcy5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtyfHwodGhpcy5pZD1cInFcIitNYXRoLmZsb29yKDllNipNYXRoLnJhbmRvbSgpKSsxZTYpLGFyZ3VtZW50c1swXT1lLnJlcGxhY2UobixcIiNcIit0aGlzLmlkKTt2YXIgbz10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gbnVsbD09PXI/dGhpcy5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTpyfHwodGhpcy5pZD1yKSxvfXJldHVybiB0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX19dmFyIG49LzpzY29wZVxcYi9naSxlPXQoRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3Rvcik7RWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3Rvcj1mdW5jdGlvbih0KXtyZXR1cm4gZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O3ZhciByPXQoRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbCk7RWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbD1mdW5jdGlvbih0KXtyZXR1cm4gci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSgpfX0oKTt2YXIgcT1mdW5jdGlvbiB0KCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOms7aWYoISh0aGlzIGluc3RhbmNlb2YgdCkpcmV0dXJuIG5ldyB0KG4pO3RoaXMub3B0aW9ucz17fSx4KHRoaXMub3B0aW9ucyxrLG4pLHRoaXMub3B0aW9ucy5jYW5jZWxMZWdhY3kmJiFSKCl8fF8odGhpcyl9O3JldHVybiBxLmluaXQ9ZnVuY3Rpb24odCl7cmV0dXJuIGNvbnNvbGUud2FybihcIkRlcHJlY2lhdGVkOiBNYWN5LmluaXQgd2lsbCBiZSByZW1vdmVkIGluIHYzLjAuMCBvcHQgdG8gdXNlIE1hY3kgZGlyZWN0bHkgbGlrZSBzbyBNYWN5KHsgLypvcHRpb25zIGhlcmUqLyB9KSBcIiksbmV3IHEodCl9LHEucHJvdG90eXBlLnJlY2FsY3VsYXRlT25JbWFnZUxvYWQ9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdO3JldHVybiBlKHRoaXMsaChcImltZ1wiLHRoaXMuY29udGFpbmVyKSwhdCl9LHEucHJvdG90eXBlLnJ1bk9uSW1hZ2VMb2FkPWZ1bmN0aW9uKHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdJiZhcmd1bWVudHNbMV0scj1oKFwiaW1nXCIsdGhpcy5jb250YWluZXIpO3JldHVybiB0aGlzLm9uKHRoaXMuY29uc3RhbnRzLkVWRU5UX0lNQUdFX0NPTVBMRVRFLHQpLG4mJnRoaXMub24odGhpcy5jb25zdGFudHMuRVZFTlRfSU1BR0VfTE9BRCx0KSxlKHRoaXMscixuKX0scS5wcm90b3R5cGUucmVjYWxjdWxhdGU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLG49YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXSxlPSEoYXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0pfHxhcmd1bWVudHNbMV07cmV0dXJuIGUmJnRoaXMucXVldWUuY2xlYXIoKSx0aGlzLnF1ZXVlLmFkZChmdW5jdGlvbigpe3JldHVybiBWKHQsbixlKX0pfSxxLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplciksdih0aGlzLmNvbnRhaW5lci5jaGlsZHJlbixmdW5jdGlvbih0KXt0LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtbWFjeS1jb21wbGV0ZVwiKSx0LnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpfSksdGhpcy5jb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIil9LHEucHJvdG90eXBlLnJlSW5pdD1mdW5jdGlvbigpe3RoaXMucmVjYWxjdWxhdGUoITAsITApLHRoaXMuZW1pdCh0aGlzLmNvbnN0YW50cy5FVkVOVF9JTklUSUFMSVpFRCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLnJlc2l6ZXIpLHRoaXMuY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIn0scS5wcm90b3R5cGUub249ZnVuY3Rpb24odCxuKXt0aGlzLmV2ZW50cy5vbih0LG4pfSxxLnByb3RvdHlwZS5lbWl0PWZ1bmN0aW9uKHQsbil7dGhpcy5ldmVudHMuZW1pdCh0LG4pfSxxLmNvbnN0YW50cz17RVZFTlRfSU5JVElBTElaRUQ6XCJtYWN5LmluaXRpYWxpemVkXCIsRVZFTlRfUkVDQUxDVUxBVEVEOlwibWFjeS5yZWNhbGN1bGF0ZWRcIixFVkVOVF9JTUFHRV9MT0FEOlwibWFjeS5pbWFnZS5sb2FkXCIsRVZFTlRfSU1BR0VfRVJST1I6XCJtYWN5LmltYWdlLmVycm9yXCIsRVZFTlRfSU1BR0VfQ09NUExFVEU6XCJtYWN5LmltYWdlcy5jb21wbGV0ZVwiLEVWRU5UX1JFU0laRTpcIm1hY3kucmVzaXplXCJ9LHEucHJvdG90eXBlLmNvbnN0YW50cz1xLmNvbnN0YW50cyxxfSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBBYm91dCA9ICgpID0+IHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIHNlY3Rpb24uaWQgPSAnYWJvdXQnO1xyXG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZUVsZW1lbnQnKTtcclxuXHJcbiAgc2VjdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG1kOm1heC1oLVs3MjBweF0gaC1hdXRvIGJnLWdyZWVuLTkwMCBmbGV4LWNvbCBmbGV4IG1kOmZsZXgtcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBiZy1ncmVlbi04MDAgaC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hYm91dFBob3RvLnBuZ1wiIGFsdD1cIkxhZG5lIHpkamVjaWVcIiBjbGFzcz1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBweS0xMCB0ZXh0LVsjRjVGMEVDXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLWF1dG9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctNC81IHNwYWNlLXktMjBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZS15LThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXNtXCI+TyBmaXJtaWU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtNHhsIHctZml0IGZvbnQtbW9udHNlcnJhdCBmb250LW1lZGl1bVwiPlR3b3J6eW15PC9icj4geiA8aT5wYXNqxIU8L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1heC13LVs4MDBweF0gdGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEthxbxkeSBwcm9qZWt0IHRvIG5vd2Ugd3l6d2FuaWUuIERsYXRlZ28gbmFzeiB6ZXNww7PFgiB0d29yesSFIHd5a3dhbGlmaWtvd2FuaSBwcm9qZWt0YW5jaSBvcmF6IGFyY2hpdGVrY2ksIGt0w7NyeWNoIHphZGFuaWVtIGplc3Qgcm96cG96bmFuaWUgaSByZWFsaXphY2phIHBvdHJ6ZWIga2HFvGRlZ28gS2xpZW50YS4gTmFzemEgc3BlY2phbGl6YWNqYSB0byBwcnplc3RyemVuaWUgbm93b2N6ZXNuZSwga3TDs3JlIGNoYXJha3Rlcnl6dWplIG1pbmltYWxpem0sIGdlb21ldHJpYSBpIGVsZWdhbmNrYSBwcm9zdG90YS4gVHdvcnp5bXkgb2dyb2R5IG1hxYJvb2JzxYJ1Z293ZSwgZG9zdG9zb3dhbmUgZG8gd3Nww7PFgmN6ZXNuZWdvIHRyeWJ1IMW8eWNpYS5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZml0IGJvcmRlci1zb2xpZCBib3JkZXItMiBib3JkZXItWyNGNUYwRUNdIHB4LVsyNHB4XSBweS1bMTJweF0gcm91bmRlZC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNwYWNlLXgtMiB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzaGFkb3cteGwgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUG96bmFqIG5hcyBibGnFvGVqXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9zdmcvYWJvdXRBcnJvd1JpZ2h0LnN2Z1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iLCJjb25zdCBDb250YWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgc2VjdGlvbi5pZCA9ICdjb250YWN0JztcclxuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3B5LVs2MHB4XScsICdoaWRlRWxlbWVudCcpO1xyXG5cclxuICBzZWN0aW9uLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiaC1mdWxsIHB4LTYgcHktNiB3LWZ1bGwgbGc6dy1hdXRvIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaC1hdXRvIGJnLWdyZWVuLTkwMCB3LWF1dG8gZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBsZzpqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtWyNGNUYwRUNdIHRleHQtWzQwcHhdIGxlYWRpbmctWzQ4cHhdIHNwYWNlLXktNiBwLTkgbWQ6cHgtMTYgbWQ6cHktMTQgbGc6cHgtWzExMHB4XSBsZzpweS1bMTEwcHhdIGxnOnNwYWNlLXgtMTYgbGc6aXRlbXMtZW5kXCI+XHJcbiAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCIgdy1mdWxsIGxnOndoaXRlc3BhY2Utbm93cmFwIGgtZnVsbCBmb250LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICA8ZGl2Plpvc3RhxYRteSB3IGtvbnRha2NpZSE8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlpuYWpkemllc3ogbmFzIG5hIDxpPjxiPkluc3RhZ3JhbWllPC9iPjwvaT4uPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGxnOmZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1lbmQgbWQ6aXRlbXMtc3RhcnQgdy1mdWxsIHNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWJhc2Ugdy1bMTUwcHhdIGxnOnctWzE1MHB4XSBtZDp3LWF1dG9cIj7FmmxlZMW6IG5hc3plIG5ham5vd3N6ZSByZWFsaXphY2plITwvZGl2PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJwdC1bMTBweF0gcGItWzEycHhdIHB4LVsyNHB4XSBiZy1bI0Y1RjBFQ10gdGV4dC1ncmVlbi05MDAgcm91bmRlZC1mdWxsIHRleHQtYmFzZSB0cmFuc2l0aW9uLWFsbCBob3ZlcjpiZy1bI2VjZTdlMl0gaG92ZXI6c2hhZG93LW1kXCI+SW5zdGFncmFtPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiIsImNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICBmb290ZXIuY2xhc3NMaXN0ID0gYCBiZy1ibGFjayB3LWZ1bGwgaC1hdXRvIHRleHQtd2hpdGUgcHgtWzQwcHhdIHB5LVs4MHB4XSBmbGV4LWNvbCBzcGFjZS15LTIwIG1kOnB4LTY0YDtcclxuICBmb290ZXIuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJmbGV4LWNvbCBzcGFjZS15LThcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbGc6ZmxleC1yb3cgeGw6ZmxleC1yb3cgMnhsOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBzcGFjZS15LTRcIj5cclxuICAgICAgXHJcbiAgICAgIDxpbWcgc3JjPVwiLi9zdmcvZ2lhcmRkZXNpZ25XaGl0ZS5zdmdcIiBhbHQ9XCJsb2dvXCIgY2xhc3M9XCJ3LVsxMTVweF1cIj5cclxuICAgICAgPGFzaWRlIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGgtYXV0byBnYXAtNiB0ZXh0LXNtIG1kOnRleHQtYmFzZSBsZzp0ZXh0LWJhc2UgeGw6dGV4dC1iYXNlIDJ4bDp0ZXh0LWJhc2VcIj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWluLXctWzEwMHB4XSB3LWF1dG8gbWQ6dy1hdXRvIG1kOnRleHQtYmFzZSB0ZXh0LXNtXCI+RGFqIHpuYcSHLCBjbyBtb8W8ZW15IGRsYSBDaWViaWUgenJvYmljITwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ3LWdpdCBoLTkgYmctZ3JlZW4tODAwIHB5LTIgcHgtMyByb3VuZGVkLWZ1bGwgd2hpdGVzcGFjZS1ub3dyYXAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaG92ZXI6YmctZ3JlZW4tOTAwIHRyYW5zaXRpb24tYWxsIGhvdmVyOnNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInB4LTIgbWQ6cHgtNiBwdC1bMTJweF0gcGItWzE0cHhdXCI+U2tvbnRha3R1aiBzacSZIHogbmFtaTwvZGl2PlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPC9hc2lkZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGgtWzFweF0gYmctc2xhdGUtMzAwXCI+PC9kaXY+XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IHctZnVsbCBtZDpoLTEwIHhsOmgtMTAgMnhsOmgtMTAgbGc6aC0xMCBoLWF1dG8ganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cImZsZXgtY29sIG1kOmZsZXgtcm93IHhsOmZsZXggMnhsOmZsZXggbGc6ZmxleCBnYXAtOFwiID5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNjb250YWN0XCI+S29udGFrdDwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkluc3RhZ3JhbTwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkZhY2Vib29rPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TGlua2VkaW48L2E+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgbWQ6ZmxleC1yb3cgeGw6ZmxleC1yb3cgMnhsOmZsZXgtcm93IGdhcC0wIG1kOmdhcC04IHctZml0XCI+XHJcbiAgICAgICAgPGRpdj4wMDAtMDAwLTAwMDwvZGl2PlxyXG4gICAgICAgIDxkaXY+Z2lhcmRkZXNpZ25Aa29udGFrdC5wbDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIG15LWF1dG9cIj5cclxuICAgICAgICA8ZGl2PlByYXdhIHphc3RyemXFvG9uZSDCqSAyMDIyPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc3BhY2UteS0xIHctMzAgaC1mdWxsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInctMjAgXCI+bWFkZSBieTwvZGl2PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiLi9zdmcvYWRSZXNwZWN0LnN2Z1wiIGFsdD1cImFkUmVzcGVjdFwiPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJjb25zdCBIZXJvID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlRWxlbWVudCcpO1xyXG4gIG1haW4uaWQgPSAnaGVybyc7XHJcblxyXG4gIG1haW4uaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IHctZnVsbCBoLWF1dG8gbWQ6aC1bOTJ2aF1cIj5cclxuICBcclxuICAgIDxkaXYgY2xhc3M9XCJtZDp3LTEvMiBiZy1bI0RDQzFBQl0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgPGFzaWRlIGNsYXNzPVwibWQ6aC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBtZDp3LWZ1bGwgeGw6dy1bNTk5cHhdIHNwYWNlLXktWzcycHhdIG1kOnNwYWNlLXktMTIgYmctWyNEQ0MxQUJdIHB4LTEwIHB5LTkgbWQ6cHktMTIgaC1bOTJ2aF1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZS15LTExXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtNXhsIG1kOnRleHQtNnhsIHRleHQtWyMxMTExMTFdIGxlYWRpbmctWzUwcHhdIG1kOmxlYWRpbmctWzcwcHhdIGZvbnQtbW9udHNlcnJhdCBmb250LW1lZGl1bVwiPk5vd29jemVzbmEgYXJhbsW8YWNqYSBUd29qZWdvIG9ncm9kdTwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWJhc2UgbGVhZGluZy1ub3JtYWwgZm9udC1pbnRlclwiPk1hcmthIEdpYXJkRGVzaWduIHRvIHdpZWxvbGV0bmllIGRvxZt3aWFkY3plbmllIGkgd3lzb2thIGVzdGV0eWthIHJlYWxpemFjamkuIE9mZXJ1amVteSBrb21wbGVrc293eSB6YWtyZXMgdXPFgnVnIHogaW5keXdpZHVhbG55bSBwb2RlasWbY2llbSBkbyBrYcW8ZGVnbyBwcm9qZWt0dS48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZzp3LWZ1bGwgZmxleCBmbGV4LWNvbCBzcGFjZS15LTMgbGc6ZmxleC1yb3cganVzdGlmeS1zdGFydCB3LWZ1bGwgbWQ6dy1hdXRvIG1kOmp1c3RpZnktYmV0d2VlbiBbJj5hXTpjdXJzb3ItcG9pbnRlciBsZzpzcGFjZS15LTAgbGc6c3BhY2UteC05XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJnLWdyZWVuLTgwMCB0ZXh0LXdoaXRlIHB4LTYgcHQtWzEycHhdIHBiLVsxNHB4XSByb3VuZGVkLWZ1bGwgdy1maXQgaG92ZXI6c2hhZG93LW1kIGxnOndoaXRlc3BhY2Utbm93cmFwIGhvdmVyOmJnLWdyZWVuLTkwMCB0cmFuc2l0aW9uLWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICBTa29udGFrdHVqIHNpxJkgeiBuYW1pXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNyZWFsaXphY2plXCIgY2xhc3M9XCJmbGV4IHctZml0IGJvcmRlci1zb2xpZCBib3JkZXItMiBib3JkZXItZ3JlZW4tODAwIHB4LVsyMnB4XSBwdC1bMTJweF0gcGItWzE0cHhdIHJvdW5kZWQtZnVsbCB0ZXh0LWdyZWVuLTgwMCB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzaGFkb3cteGxcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNwYWNlLXgtWzhweF1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwid2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWm9iYWN6IG5hc3plIHJlYWxpemFjamVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9zdmcvaGVyb0Fycm93RG93bi5zdmdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXNpZGU+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImgtWzkydmhdIG1kOmgtYXV0byB3LWZ1bGwgbWQ6dy0xLzIgcmVsYXRpdmUgYmctWyNGNUYwRUNdXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIxLmpwZ1wiIGNsYXNzPVwiaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXJcIiBpZD1cImltZy1zbGlkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBib3R0b20tMCByaWdodC0wIGFic29sdXRlIHB4LTggcHktNiBzcGFjZS14LTggYmctWyNGNUYwRUNdXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ3LVs1MHB4XSBoLVs1MHB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiIGlkPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL3N2Zy9zbGlkZXJMZWZ0LnN2Z1wiIGFsdD1cIlBvcHJ6ZWRuaWUgemRqxJljaWVcIj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ3LVs1MHB4XSBoLVs1MHB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiIGlkPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9zdmcvc2xpZGVyUmlnaHQuc3ZnXCIgYWx0PVwiTmFzdMSZcG5lIHpkasSZY2llXCI+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBcclxuICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xyXG5cclxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1nLXNsaWRlcicpO1xyXG4gIGNvbnN0IG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmlnaHQnKTtcclxuICBjb25zdCBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnQnKTtcclxuICBjb25zdCBpbWFnZXMgPSBbXHJcbiAgICAnMS5qcGcnLFxyXG4gICAgJ2Fib3V0UGhvdG8ucG5nJyxcclxuICAgICdwcm9qZWN0c0ltYWdlcy9pbWcyLmpwZycsXHJcbiAgICAncHJvamVjdHNJbWFnZXMvaW1nMy5qcGcnLFxyXG4gICAgJ3Byb2plY3RzSW1hZ2VzL2ltZzQuanBnJyxcclxuICAgICdwcm9qZWN0c0ltYWdlcy9pbWc2LmpwZycsXHJcbiAgICAncHJvamVjdHNJbWFnZXMvaW1nOS5qcGcnXHJcbiAgXTtcclxuICBsZXQgY3VycmVudEluZGV4ID0gMDtcclxuXHJcbiAgY29uc3QgdXBkYXRlU2xpZGVySW1hZ2UgPSAoaW5kZXgpID0+IHtcclxuICAgIGltZy5zcmMgPSBpbWFnZXNbaW5kZXhdO1xyXG4gIH07XHJcblxyXG4gIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudEluZGV4ID09PSBpbWFnZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICBjdXJyZW50SW5kZXggPSAwO1xyXG4gICAgICB1cGRhdGVTbGlkZXJJbWFnZShjdXJyZW50SW5kZXgpO1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50SW5kZXggPCBpbWFnZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICBjdXJyZW50SW5kZXgrKztcclxuICAgICAgdXBkYXRlU2xpZGVySW1hZ2UoY3VycmVudEluZGV4KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChjdXJyZW50SW5kZXggPT09IDApIHtcclxuICAgICAgY3VycmVudEluZGV4ID0gaW1hZ2VzLmxlbmd0aCAtIDE7XHJcbiAgICAgIHVwZGF0ZVNsaWRlckltYWdlKGN1cnJlbnRJbmRleCk7XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA+IDApIHtcclxuICAgICAgY3VycmVudEluZGV4LS07XHJcbiAgICAgIHVwZGF0ZVNsaWRlckltYWdlKGN1cnJlbnRJbmRleCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHNldEludGVydmFsKCgpID0+IHtcclxuICAgIGlmIChjdXJyZW50SW5kZXggPT09IGltYWdlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICAgIHVwZGF0ZVNsaWRlckltYWdlKGN1cnJlbnRJbmRleCk7XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA8IGltYWdlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIGN1cnJlbnRJbmRleCsrO1xyXG4gICAgICB1cGRhdGVTbGlkZXJJbWFnZShjdXJyZW50SW5kZXgpO1xyXG4gICAgfVxyXG4gIH0sIDMwMDApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIiwiY29uc3Qgc2VhcmNoRmllbGQgPSAoaGlkZSkgPT4ge1xyXG4gIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWljb24nKTtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtaW5wdXQnKTtcclxuICBsZXQgaXNIaWRkZW4gPSBoaWRlO1xyXG4gIHNlYXJjaEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoaXNIaWRkZW4pIHtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnbWQ6aGlkZGVuJyk7XHJcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ21kOmFuaW1hdGUtaGlkZUlucHV0Jyk7XHJcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ21kOmFuaW1hdGUtZXhwYW5kSW5wdXQnKTtcclxuICAgICAgaXNIaWRkZW4gPSAhaXNIaWRkZW47XHJcbiAgICAgIHNlYXJjaEljb24uY2xhc3NMaXN0LnJlbW92ZSgnbWQ6YW5pbWF0ZS1yb3RhdGVSaWdodCcpO1xyXG4gICAgICBzZWFyY2hJY29uLmNsYXNzTGlzdC5hZGQoJ21kOmFuaW1hdGUtcm90YXRlTGVmdCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2VhcmNoSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdtZDphbmltYXRlLXJvdGF0ZUxlZnQnKTtcclxuICAgICAgc2VhcmNoSWNvbi5jbGFzc0xpc3QuYWRkKCdtZDphbmltYXRlLXJvdGF0ZVJpZ2h0Jyk7XHJcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ21kOmFuaW1hdGUtZXhwYW5kSW5wdXQnKTtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnbWQ6YW5pbWF0ZS1oaWRlSW5wdXQnKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnbWQ6aGlkZGVuJyk7XHJcbiAgICAgIH0sIDUzMCk7XHJcbiAgICAgIGlzSGlkZGVuID0gIWlzSGlkZGVuO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbW9iaWxlTWVudSA9IChoaWRlKSA9PiB7XHJcbiAgbGV0IGhpZGRlbiA9IGhpZGU7XHJcbiAgY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXJnZXItbWVudScpO1xyXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpbmtzJyk7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWlucHV0Jyk7XHJcbiAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcGRvd24nKTtcclxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dCcpO1xyXG4gIGNvbnN0IHJlYWxpemF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWFsaXphdGlvbnMnKTtcclxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKTtcclxuXHJcbiAgYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChoaWRkZW4pIHtcclxuICAgICAgbGlua3MuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblxyXG4gICAgICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgIHJlYWxpemF0aW9ucy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgbGlua3MuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1zaG93TW9iaWxlTWVudScpO1xyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbGlua3MuY2xhc3NMaXN0LmFkZCgnZmxleCcpO1xyXG5cclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdibG9jaycpO1xyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtZXhwYW5kSW5wdXQnKTtcclxuXHJcbiAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgYWJvdXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgcmVhbGl6YXRpb25zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtb3BhY2l0eScpO1xyXG4gICAgICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtb3BhY2l0eScpO1xyXG4gICAgICAgIHJlYWxpemF0aW9ucy5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLW9wYWNpdHknKTtcclxuICAgICAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtb3BhY2l0eScpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtb3BhY2l0eScpO1xyXG4gICAgICAgICAgYWJvdXQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICAgICAgICByZWFsaXphdGlvbnMuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICAgICAgICBjb250YWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtb3BhY2l0eScpO1xyXG4gICAgICAgICAgbGlua3MuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1zaG93TW9iaWxlTWVudScpO1xyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICAgIH0sIDMwMCk7XHJcblxyXG4gICAgICBoaWRkZW4gPSAhaGlkZGVuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgcmVhbGl6YXRpb25zLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtZGVjcmVhc2VPcGFjaXR5Jyk7XHJcbiAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1oaWRlSW5wdXQnKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtaGlkZU1vYmlsZU1lbnUnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGxpbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtaGlkZU1vYmlsZU1lbnUnKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgICAgICAgYWJvdXQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgICAgICAgcmVhbGl6YXRpb25zLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtZGVjcmVhc2VPcGFjaXR5Jyk7XHJcbiAgICAgICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1oaWRlSW5wdXQnKTtcclxuICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH0sIDI3MCk7XHJcbiAgICAgIH0sIDI3MCk7XHJcblxyXG4gICAgICBoaWRkZW4gPSAhaGlkZGVuO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gIG5hdmJhci5jbGFzc0xpc3QgPVxyXG4gICAgJ2hpZGVFbGVtZW50IGJnLXdoaXRlIHctZnVsbCBweC02IHB5LTMgbWQ6cC02IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBzdGlja3kgdG9wLTAgei0xMCBoLVs4dmhdJztcclxuXHJcbiAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBsb2dvQ29udGFpbmVyLnRleHRDb250ZW50ID0gJ0xvZ28nO1xyXG4gIGxvZ29Db250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgPGEgaHJlZj1cIiNoZXJvXCI+XHJcbiAgICAgIDxpbWcgc3JjPVwiLi9zdmcvZ2lhcmRkZXNpZ24uc3ZnXCIgYWx0PVwiTG9nb1wiPlxyXG4gICAgPC9hPlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGlua3MuaWQgPSAnbGlua3MnO1xyXG4gIGxpbmtzLmNsYXNzTGlzdCA9XHJcbiAgICAnbWQ6ZmxleCB0ZXh0LVsjMTExMTExXSBtZDpnYXAtMTAgZ2FwLTMgWyY+Kl06Y3Vyc29yLXBvaW50ZXIgbWQ6ZmxleC1yb3cgbWQ6cmVsYXRpdmUgbWQ6bS0wIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgbWQ6anVzdGlmeS1jZW50ZXIgbWQ6aXRlbXMtY2VudGVyIGZpeGVkIG10LVs0NTBweF0gcm91bmRlZC14bCBweS01IHB4LTYgbWQ6cC0wIGJnLXdoaXRlIGZsZXggZmxleC1jb2wgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiB3LVs4NXZ3XSBzaGFkb3cteGwgbWQ6c2hhZG93LW5vbmUgbWQ6dy1hdXRvIG1kOmxlZnQtMCBtZDp0cmFuc2xhdGUteC0wIGhpZGRlbiBhbmltYXRlLXNob3dNb2JpbGVNZW51IG1kOmFuaW1hdGUtbm9uZSBmb250LWludGVyJztcclxuXHJcbiAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkcm9wZG93bi5pZCA9ICdkcm9wZG93bic7XHJcbiAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24nLCAnZmxleCcsICdmbGV4LWNvbCcsICdncm91cCcpO1xyXG5cclxuICBjb25zdCBvZmZlcnNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIG9mZmVyc0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyNvZmZlcnMnKTtcclxuICBvZmZlcnNMaW5rLmlkID0gJ29mZmVyJztcclxuICBvZmZlcnNMaW5rLnRleHRDb250ZW50ID0gJ09mZXJ0YSc7XHJcbiAgb2ZmZXJzTGluay5jbGFzc0xpc3QgPVxyXG4gICAgJ29mZmVycyBmbGV4IGdhcC0yIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgbWQ6anVzdGlmeS1jZW50ZXIgbWQ6aXRlbXMtY2VudGVyIGgtYXV0byBncm91cCBhbmltYXRlLW9wYWNpdHknO1xyXG5cclxuICBjb25zdCBhcnJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFycm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAnZ3JvdXAtaG92ZXI6cm90YXRlLTE4MCcsXHJcbiAgICAndHJhbnNpdGlvbi1hbGwnLFxyXG4gICAgJ2hpZGRlbicsXHJcbiAgICAnbWQ6YmxvY2snXHJcbiAgKTtcclxuICBhcnJvd0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgPGltZyBzcmM9XCIuL3N2Zy9hcnJvd0Rvd24uc3ZnXCIgYWx0PVwiUm96d2nFhFwiPlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IG9mZmVyc0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvZmZlcnNMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAnb2ZmZXJzLWxpc3QnLFxyXG4gICAgJ3ctYXV0bycsXHJcbiAgICAnaC1hdXRvJyxcclxuICAgICdtZDpweS01JyxcclxuICAgICdtZDpweC02JyxcclxuICAgICdtZDpiZy13aGl0ZScsXHJcbiAgICAnbWQ6bXQtWy0yMDBweF0nLFxyXG4gICAgJ21kOmdyb3VwLWhvdmVyOm10LVsyNHB4XScsXHJcbiAgICAnbWQ6c2hhZG93LXhsJyxcclxuICAgICdtZDpyb3VuZGVkLW1kJyxcclxuICAgICdtZDphYnNvbHV0ZScsXHJcbiAgICAnei1bLTEwMF0nLFxyXG4gICAgJ21kOmJvcmRlci1ub25lJyxcclxuICAgICdib3JkZXItbC0yJyxcclxuICAgICdib3JkZXItc2xhdGUtMzAwJyxcclxuICAgICd0cmFuc2l0aW9uLWFsbCcsXHJcbiAgICAnbWQ6bS0wJyxcclxuICAgICdtbC01JyxcclxuICAgICdtdC0yJ1xyXG4gICk7XHJcbiAgY29uc3Qgb2ZmZXJzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgb2ZmZXJzTGlzdC5pZCA9ICdvZmZlcnMtbGlzdCc7XHJcbiAgb2ZmZXJzTGlzdC5jbGFzc0xpc3QuYWRkKCdzcGFjZS15LTInLCAnbWQ6dGV4dC1jZW50ZXInLCAncmVsYXRpdmUnKTtcclxuICBjb25zdCBvZmZlckVsZW1lbnRPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGNvbnN0IG9mZmVyRWxlbWVudFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgY29uc3Qgb2ZmZXJFbGVtZW50VGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIG9mZmVyRWxlbWVudE9uZS5pbm5lckhUTUwgPSBgXHJcbiAgPGEgaHJlZj1cIiNQcm9qZWt0eVwiPlByb2pla3R5PC9hPlxyXG4gIGA7XHJcbiAgb2ZmZXJzTGlzdC5hcHBlbmRDaGlsZChvZmZlckVsZW1lbnRPbmUpO1xyXG4gIG9mZmVyRWxlbWVudFR3by5pbm5lckhUTUwgPSBgXHJcbiAgPGEgaHJlZj1cIiNXaXp1YWxpemFjamVcIj5XaXp1YWxpemFjamU8L2E+XHJcbiAgYDtcclxuICBvZmZlcnNMaXN0LmFwcGVuZENoaWxkKG9mZmVyRWxlbWVudFR3byk7XHJcbiAgb2ZmZXJFbGVtZW50VGhyZWUuaW5uZXJIVE1MID0gYFxyXG4gIDxhIGhyZWY9XCIjUmVhbGl6YWNqZVwiPlJlYWxpemFjamU8L2E+XHJcbiAgYDtcclxuICBvZmZlcnNMaXN0LmFwcGVuZENoaWxkKG9mZmVyRWxlbWVudFRocmVlKTtcclxuXHJcbiAgb2ZmZXJzTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChvZmZlcnNMaXN0KTtcclxuXHJcbiAgb2ZmZXJzTGluay5hcHBlbmRDaGlsZChhcnJvd0NvbnRhaW5lcik7XHJcblxyXG4gIGRyb3Bkb3duLmFwcGVuZENoaWxkKG9mZmVyc0xpbmspO1xyXG4gIGRyb3Bkb3duLmFwcGVuZENoaWxkKG9mZmVyc0xpc3RDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBhYm91dExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgYWJvdXRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjYWJvdXQnKTtcclxuICBhYm91dExpbmsuY2xhc3NMaXN0LmFkZChcclxuICAgICdhbmltYXRlLW9wYWNpdHknLFxyXG4gICAgJ2dyb3VwL3RleHQnLFxyXG4gICAgJ2JveC1ib3JkZXInLFxyXG4gICAgJ2Fib3V0J1xyXG4gICk7XHJcbiAgYWJvdXRMaW5rLmlubmVySFRNTCA9IGBcclxuICA8c3Bhbj5PIGZpcm1pZTwvc3Bhbj5cclxuICA8ZGl2IGNsYXNzPVwidy0wIGgtWzJweF0gYmctc2xhdGUtODAwIHRyYW5zaXRpb24tYWxsIGdyb3VwLWhvdmVyL3RleHQ6dy1mdWxsIGdyb3VwLWhvdmVyL3RleHQ6aC1bMnB4XVwiPjwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IHJlZ2lzdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICByZWdpc3Rlckxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyNyZWFsaXphdGlvbnMnKTtcclxuICByZWdpc3RlckxpbmsuY2xhc3NMaXN0LmFkZChcclxuICAgICd0ZXh0LWNlbnRlcicsXHJcbiAgICAnYW5pbWF0ZS1vcGFjaXR5JyxcclxuICAgICdncm91cC90ZXh0JyxcclxuICAgICdib3gtYm9yZGVyJyxcclxuICAgICdyZWFsaXphdGlvbnMnXHJcbiAgKTtcclxuICByZWdpc3RlckxpbmsuaW5uZXJIVE1MID0gYFxyXG4gIDxzcGFuPlJlYWxpemFjamU8L3NwYW4+XHJcbiAgPGRpdiBjbGFzcz1cInctMCBoLVsycHhdIGJnLXNsYXRlLTgwMCB0cmFuc2l0aW9uLWFsbCBncm91cC1ob3Zlci90ZXh0OnctZnVsbCBncm91cC1ob3Zlci90ZXh0OmgtWzJweF1cIj48L2Rpdj5cclxuICBgO1xyXG5cclxuICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBjb250YWN0TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI2NvbnRhY3QnKTtcclxuICBjb250YWN0TGluay5jbGFzc0xpc3QuYWRkKFxyXG4gICAgJ2FuaW1hdGUtb3BhY2l0eScsXHJcbiAgICAnZ3JvdXAvdGV4dCcsXHJcbiAgICAnYm94LWJvcmRlcicsXHJcbiAgICAnY29udGFjdCdcclxuICApO1xyXG4gIGNvbnRhY3RMaW5rLmlubmVySFRNTCA9IGBcclxuICA8c3Bhbj5Lb250YWt0PC9zcGFuPlxyXG4gIDxkaXYgY2xhc3M9XCJ3LTAgaC1bMnB4XSBiZy1zbGF0ZS04MDAgdHJhbnNpdGlvbi1hbGwgZ3JvdXAtaG92ZXIvdGV4dDp3LWZ1bGwgZ3JvdXAtaG92ZXIvdGV4dDpoLVsycHhdXCI+PC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZWFyY2gnKTtcclxuICBzZWFyY2hJbnB1dC5pZCA9ICdzZWFyY2gtaW5wdXQnO1xyXG4gIHNlYXJjaElucHV0LmNsYXNzTGlzdCA9XHJcbiAgICAnYmctdHJhbnNwYXJlbnQgaC1hdXRvIG91dGxpbmUtbm9uZSBwLTAuNSBib3JkZXItYi0yIGJvcmRlci1ibGFjayBtZDpoaWRkZW4gdy00MCBib3gtYm9yZGVyJztcclxuXHJcbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc2VhcmNoQ29udGFpbmVyLmNsYXNzTGlzdCA9IGBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWZ1bGwgaGlkZGVuIG1kOmJsb2NrIGFuaW1hdGUtb3BhY2l0eWA7XHJcbiAgc2VhcmNoQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICA8aW1nIHNyYz1cIi4vc3ZnL3NlYXJjaC5zdmdcIiBhbHQ9XCJTenVrYWpcIiBpZD1cInNlYXJjaC1pY29uXCI+XHJcbiAgYDtcclxuXHJcbiAgY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJ1cmdlck1lbnUuY2xhc3NMaXN0ID0gJ21kOmhpZGRlbic7XHJcbiAgYnVyZ2VyTWVudS5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cInNwYWNlLXktMiBjdXJzb3ItcG9pbnRlclwiIGlkPVwiYnVyZ2VyLW1lbnVcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdy04IGgtWzAuMnJlbV0gYmctZ3JheS02MDBcIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHctOCBoLVswLjJyZW1dIGJnLWdyYXktNjAwXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJibG9jayB3LTUgaC1bMC4ycmVtXSBiZy1ncmF5LTYwMFwiPjwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICBsaW5rcy5hcHBlbmRDaGlsZChkcm9wZG93bik7XHJcbiAgbGlua3MuYXBwZW5kQ2hpbGQoYWJvdXRMaW5rKTtcclxuICBsaW5rcy5hcHBlbmRDaGlsZChyZWdpc3RlckxpbmspO1xyXG4gIGxpbmtzLmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcclxuICBsaW5rcy5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XHJcbiAgbGlua3MuYXBwZW5kQ2hpbGQoc2VhcmNoQ29udGFpbmVyKTtcclxuICBuYXZiYXIuYXBwZW5kQ2hpbGQobG9nb0NvbnRhaW5lcik7XHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGxpbmtzKTtcclxuICBuYXZiYXIuYXBwZW5kQ2hpbGQoYnVyZ2VyTWVudSk7XHJcblxyXG4gIGNvbnN0IG9mZmVyc0NoaWxkcmVuID0gb2ZmZXJzTGlzdC5jaGlsZE5vZGVzO1xyXG4gIG9mZmVyc0NoaWxkcmVuLmZvckVhY2goKG9mZmVyKSA9PiB7XHJcbiAgICBvZmZlci5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAncHgtMicsXHJcbiAgICAgICdweS0wLjUnLFxyXG4gICAgICAnaG92ZXI6Ymctc2xhdGUtMTAwJyxcclxuICAgICAgJ2hvdmVyOnB4LTInLFxyXG4gICAgICAnaG92ZXI6cHktMC41JyxcclxuICAgICAgJ2hvdmVyOnJvdW5kZWQtbWQnLFxyXG4gICAgICAnaG92ZXI6c2hhZG93LXNtJyxcclxuICAgICAgJ3RyYW5zaXRpb24tYWxsJ1xyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuYXZiYXIpO1xyXG5cclxuICBjb25zdCBpc0hpZGRlbiA9IHRydWU7XHJcbiAgc2VhcmNoRmllbGQoaXNIaWRkZW4pO1xyXG4gIG1vYmlsZU1lbnUoaXNIaWRkZW4pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iLCJjb25zdCBPZmZlciA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGljb24pID0+IHtcclxuICBjb25zdCBvZmZlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vZmZlcnMtdmlldycpO1xyXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAvLyAgIHBhZ2UuY2xhc3NMaXN0ID0gJ3B4LTEwIHB5LTEyJztcclxuICBwYWdlLmlkID0gdGl0bGU7XHJcbiAgcGFnZS5pbm5lckhUTUwgPSBgXHJcbjxkaXYgY2xhc3M9XCJ3LWF1dG8gaC1hdXRvIGdyb3VwXCI+XHJcblxyXG48ZGl2IGNsYXNzPVwiZmxleC1jb2wgYmctd2hpdGUgIHctNzIgaC1hdXRvIG1kOnctWzM3MHB4XSBzcGFjZS15LTEwIG1kOnNwYWNlLXktMjAgcHktMTIgcHgtMTAgcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbCBncm91cC1ob3ZlcjpbdHJhbnNmb3JtOnJvdGF0ZVkoMzYwZGVnKV0gY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtMTA1IGdyb3VwLWhvdmVyOnNoYWRvdy14bFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInNwYWNlLXktOFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICR7aWNvbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZDp0ZXh0LTJ4bCB0ZXh0LXhsIGZvbnQtbW9udHNlcnJhdCBmb250LW1lZGl1bVwiPiR7dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWJhc2VcIj4ke2Rlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCB3LWZpdCBjdXJzb3ItcG9pbnRlciBncm91cC90ZXh0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZ3JlZW4tODAwIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGJvcmRlci1iLTIgYm9yZGVyLWdyZWVuLTgwMCBtZDpib3JkZXItbm9uZVwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6dGV4dC1iYXNlIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgIERvd2llZHogc2nEmSB3acSZY2VqXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL3N2Zy9vZmZlckFycm93UmlnaHQuc3ZnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidy0wIGgtMCBiZy1ncmVlbi04MDAgdHJhbnNpdGlvbi1hbGwgZ3JvdXAtaG92ZXIvdGV4dDp3LWZ1bGwgZ3JvdXAtaG92ZXIvdGV4dDpoLVsycHhdXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuICBgO1xyXG4gIG9mZmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2ZmZXI7XHJcbiIsImltcG9ydCBPZmZlciBmcm9tICcuL29mZmVyJztcclxuXHJcbmNvbnN0IE9mZmVycyA9ICgpID0+IHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIHNlY3Rpb24uaWQgPSAnb2ZmZXJzJztcclxuICBzZWN0aW9uLmNsYXNzTGlzdCA9XHJcbiAgICAnaGlkZUVsZW1lbnQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2wgdy1mdWxsIG1kOmgtYXV0byBzcGFjZS15LTEwIGJnLVsjRjVGMEVDXSBwLTUgcHktMTAgcHQtWzEyMHB4XSBwYi1bMTYwcHhdIHNwYWNlLXktWzk2cHhdJztcclxuXHJcbiAgc2VjdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cIm1heC13LVsxMDQwcHhdIGZsZXgtY29sIHNwYWNlLXktNSB3LTMvNCBtLWF1dG8gdGV4dC1bIzExMTExMV1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXhzIHRleHQtZ3JlZW4tODAwXCI+T2ZlcnRhPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWQ6dGV4dC01eGwgdGV4dC0zeGwgbGVhZGluZy1bNTUuMjBweF0gZm9udC1tb250c2VycmF0IGZvbnQtbWVkaXVtXCI+RHppYcWCYW15IDxpPmtvbXBsZWtzb3dvPC9pPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInctZnVsbCB0ZXh0LWJhc2UgbGVhZGluZy02XCI+XHJcbiAgICAgICAgT2ZlcnVqZW15IGtvbXBsZXRuxIUgb2JzxYJ1Z8SZIGlud2VzdHljamkgdGVyZW7Ds3cgemllbG9ueWNoLiBQcm9qZWt0dWplbXkgbm93b2N6ZXNuZSBvZ3JvZHkgcHJ6eWRvbW93ZSBvcmF6IHJlenlkZW5jam9uYWxuZS4gU3R3b3J6eW15IGRsYSBDaWViaWUgcHJvamVrdCwgendpenVhbGl6dWplbXkgZ28gaSB3Y2llbGlteSB3IMW8eWNpZSwgYSBuYSBrYcW8ZHltIGV0YXBpZSBwb3PFgnXFvHlteSByYWTEhSBpIHdpZWxvbGV0bmltIGRvxZt3aWFkY3plbmllbS4gXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImhpZGVFbGVtZW50IG9mZmVycy12aWV3IGdyaWQgZ3JpZC1jb2xzLTEgcGxhY2UtaXRlbXMtY2VudGVyIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC0xNiB3LWF1dG8gaC1mdWxsIG1heC13LVsxNDQwcHhdIG1heC1weC1bODhweF1cIj48L2Rpdj5cclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG5cclxuICBjb25zdCBmaXJzdE9mZmVyVGl0bGUgPSAnUHJvamVrdHknO1xyXG4gIGNvbnN0IGZpcnN0T2ZmZXJEZXNjcmlwdGlvbiA9XHJcbiAgICAnWmFwcm9qZWt0dWplbXkgVHfDs2ogb2dyw7NkIHcgbm93b2N6ZXNueW0gc3R5bHUgaSB6IG5hamxlcHN6eW0gd3lrb3J6eXN0YW5pZW0gaXN0bmllasSFY2VqIHByemVzdHJ6ZW5pLic7XHJcbiAgY29uc3QgZmlyc3RPZmZlckljb24gPSBgPGltZyBzcmM9XCIuL3N2Zy9wcm9qZWN0c0ljb24uc3ZnXCIgYWx0PVwiXCI+YDtcclxuICBPZmZlcihmaXJzdE9mZmVyVGl0bGUsIGZpcnN0T2ZmZXJEZXNjcmlwdGlvbiwgZmlyc3RPZmZlckljb24pO1xyXG5cclxuICBjb25zdCBzZWNvbmRPZmZlclRpdGxlID0gJ1dpenVhbGl6YWNqZSc7XHJcbiAgY29uc3Qgc2Vjb25kT2ZmZXJEZXNjcmlwdGlvbiA9XHJcbiAgICAnUHJ6ZWRzdGF3aW15IENpIHByb2pla3R5IGtvbmNlcGN5am5lIHcgcG9zdGFjaSB3aXJ0dWFsbmVnbyBzcGFjZXJ1IGFuaW1vd2FuZWdvIHcgdGVjaG5vbG9naWkgM0QuJztcclxuICBjb25zdCBzZWNvbmRPZmZlckljb24gPSBgPGltZyBzcmM9XCIuL3N2Zy92aXN1YWxJY29uLnN2Z1wiIGFsdD1cIlwiPmA7XHJcbiAgT2ZmZXIoc2Vjb25kT2ZmZXJUaXRsZSwgc2Vjb25kT2ZmZXJEZXNjcmlwdGlvbiwgc2Vjb25kT2ZmZXJJY29uKTtcclxuXHJcbiAgY29uc3QgdGhpcmRPZmZlclRpdGxlID0gJ1JlYWxpemFjamUnO1xyXG4gIGNvbnN0IHRoaXJkT2ZmZXJEZXNjcmlwdGlvbiA9XHJcbiAgICAnWnJlYWxpenVqZW15IFR3b2plIG1hcnplbmllIHByenkgdcW8eWNpdSBuYWpub3dzenljaCByb3p3acSFemHFhCBpIHphYXdhbnNvd2FueWNoIHRlY2hub2xvZ2lpLic7XHJcbiAgY29uc3QgdGhpcmRPZmZlckljb24gPSBgPGltZyBzcmM9XCIuL3N2Zy9yZWFsaXphdGlvbnNJY29uLnN2Z1wiIGFsdD1cIlwiPmA7XHJcbiAgT2ZmZXIodGhpcmRPZmZlclRpdGxlLCB0aGlyZE9mZmVyRGVzY3JpcHRpb24sIHRoaXJkT2ZmZXJJY29uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9mZmVycztcclxuIiwiaW1wb3J0IE1hY3kgZnJvbSAnbWFjeSc7XHJcblxyXG5jb25zdCBoaWRlR2FsbGVyeSA9IChtYWN5KSA9PiB7XHJcbiAgY29uc3QgZXhwYW5kQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cGFuZCcpO1xyXG4gIGNvbnN0IGJsdXJCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZ0JsdXJlZCcpO1xyXG4gIGNvbnN0IHJlYWxpemF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWFsaXphdGlvbnMtY29udGFpbmVyJyk7XHJcbiAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlcycpO1xyXG4gIGNvbnN0IGhpZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGlkZS1nYWxsZXJ5Jyk7XHJcbiAgY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5Jyk7XHJcblxyXG4gIGdhbGxlcnkuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICd3LVs4NXZ3XScsXHJcbiAgICAnYmctd2hpdGUnLFxyXG4gICAgJ2gtWzgwdmhdJyxcclxuICAgICdmaXhlZCcsXHJcbiAgICAnc2hhZG93LXhsJyxcclxuICAgICd0b3AtMS8yJyxcclxuICAgICdsZWZ0LTEvMicsXHJcbiAgICAnLXRyYW5zbGF0ZS14LTEvMicsXHJcbiAgICAnLXRyYW5zbGF0ZS15LTEvMicsXHJcbiAgICAncC01JyxcclxuICAgICdyb3VuZGVkLXhsJyxcclxuICAgICdzaGFkb3cteGwnLFxyXG4gICAgJ20tMCcsXHJcbiAgICAnb3ZlcmZsb3cteS1zY3JvbGwnLFxyXG4gICAgJ2FuaW1hdGUtb3BhY2l0eSdcclxuICApO1xyXG4gIGltYWdlcy5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLW9wYWNpdHknKTtcclxuICByZWFsaXphdGlvbnMuY2xhc3NMaXN0LmFkZCgnbWQ6aC1bMTgyNHB4XScpO1xyXG4gIGltYWdlcy5jbGFzc0xpc3QuYWRkKCdtZDpoLVsxNDc1cHhdJyk7XHJcbiAgaW1hZ2VzLmNsYXNzTGlzdC5hZGQoJ2gtWzEwMDBweF0nKTtcclxuICBibHVyQmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgaW1hZ2VzLmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LWhpZGRlbicpO1xyXG4gIGV4cGFuZEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICBoaWRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIGhpZGVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZmxleCcpO1xyXG4gIG1hY3kucnVuT25JbWFnZUxvYWQoKTtcclxufTtcclxuXHJcbmNvbnN0IGV4cGFuZEdhbGxlcnkgPSAobWFjeSkgPT4ge1xyXG4gIGNvbnN0IGV4cGFuZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleHBhbmQnKTtcclxuICBjb25zdCBpbWFnZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IGJsdXJCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZ0JsdXJlZCcpO1xyXG4gIGNvbnN0IHJlYWxpemF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWFsaXphdGlvbnMtY29udGFpbmVyJyk7XHJcbiAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlcycpO1xyXG4gIGNvbnN0IGhpZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGlkZS1nYWxsZXJ5Jyk7XHJcbiAgY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5Jyk7XHJcblxyXG4gIGV4cGFuZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGltYWdlcy5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLW9wYWNpdHknKTtcclxuICAgIGdhbGxlcnkuY2xhc3NMaXN0LmFkZChcclxuICAgICAgJ3ctWzg1dnddJyxcclxuICAgICAgJ2JnLXdoaXRlJyxcclxuICAgICAgJ2gtWzgwdmhdJyxcclxuICAgICAgJ2ZpeGVkJyxcclxuICAgICAgJ3NoYWRvdy14bCcsXHJcbiAgICAgICd0b3AtMS8yJyxcclxuICAgICAgJ2xlZnQtMS8yJyxcclxuICAgICAgJy10cmFuc2xhdGUteC0xLzInLFxyXG4gICAgICAnLXRyYW5zbGF0ZS15LTEvMicsXHJcbiAgICAgICdwLTUnLFxyXG4gICAgICAncm91bmRlZC14bCcsXHJcbiAgICAgICdzaGFkb3cteGwnLFxyXG4gICAgICAnbS0wJyxcclxuICAgICAgJ292ZXJmbG93LXktc2Nyb2xsJyxcclxuICAgICAgJ2FuaW1hdGUtb3BhY2l0eSdcclxuICAgICk7XHJcblxyXG4gICAgcmVhbGl6YXRpb25zLmNsYXNzTGlzdC5yZW1vdmUoJ21kOmgtWzE4MjRweF0nKTtcclxuICAgIHJlYWxpemF0aW9ucy5jbGFzc0xpc3QuYWRkKCdoLWF1dG8nKTtcclxuICAgIGltYWdlcy5jbGFzc0xpc3QucmVtb3ZlKCdtZDpoLVsxNDc1cHhdJyk7XHJcbiAgICBpbWFnZXMuY2xhc3NMaXN0LnJlbW92ZSgnaC1bMTAwMHB4XScpO1xyXG4gICAgYmx1ckJnLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgZXhwYW5kQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgaGlkZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIGhpZGVCdG4uY2xhc3NMaXN0LmFkZCgnZmxleCcpO1xyXG4gICAgbWFjeS5ydW5PbkltYWdlTG9hZCgpO1xyXG4gICAgaGlkZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaGlkZUdhbGxlcnkobWFjeSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IFJlYWxpemF0aW9ucyA9ICgpID0+IHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIHNlY3Rpb24uaWQgPSAncmVhbGl6YXRpb25zJztcclxuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAnYmctWyNEQ0MxQUJdJyxcclxuICAgICd3LWZ1bGwnLFxyXG4gICAgJ21kOmgtWzE4MjRweF0nLFxyXG4gICAgJ2gtYXV0bycsXHJcbiAgICAncHQtWzEyMHB4XScsXHJcbiAgICAncGItMTEnLFxyXG4gICAgJ3JlYWxpemF0aW9ucy1jb250YWluZXInLFxyXG4gICAgJ3otMTAnXHJcbiAgKTtcclxuICBzZWN0aW9uLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJoLWZ1bGwgcmVsYXRpdmVcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBoLWF1dG8gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IGdhcC00IHBsLTEwIG1kOnBsLTQwIHBiLTI0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyZWVuLTgwMCB0ZXh0LXhzXCI+UmVhbGl6YWNqZTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC01eGwgZm9udC1tb250c2VycmF0IGZvbnQtbWVkaXVtXCI+TmFzemUgPGk+cHJvamVrdHk8L2k+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZXMgcmVsYXRpdmUgaC1bMTAwMHB4XSBtZDpoLVsxNDc1cHhdIG92ZXJmbG93LWhpZGRlbiB0cmFuc2l0aW9uLWFsbFwiIGlkPVwiaW1hZ2VzLWdhbGxlcnlcIj5cclxuICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnlcIj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGlkPVwiaW1hZ2VzLWNvbnRhaW5lclwiIGNsYXNzPVwiWyY+aW1nXTp3LVs0NTBweF0gWyY+aW1nXTpvYmplY3QtY292ZXIgWyY+aW1nXTphbGlnbi10b3BcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3Byb2plY3RzSW1hZ2VzL2ltZzkuanBnXCIgYWx0PVwiSW1nOVwiIGNsYXNzPVwibWQ6aC1bNjAxcHhdIGgtYXV0b1wiLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3Byb2plY3RzSW1hZ2VzL2ltZzguanBnXCIgYWx0PVwiSW1nOFwiIGNsYXNzPVwibWQ6aC1bMzM4cHhdIGgtYXV0b1wiLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3Byb2plY3RzSW1hZ2VzL2ltZzcuanBnXCIgYWx0PVwiSW1nN1wiIGNsYXNzPVwibWQ6aC1bNDUxcHhdIGgtYXV0b1wiLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3Byb2plY3RzSW1hZ2VzL2ltZzUuanBnXCIgYWx0PVwiSW1nNVwiIGNsYXNzPVwibWQ6aC1bNDUycHhdIGgtYXV0b1wiLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3Byb2plY3RzSW1hZ2VzL2ltZzQuanBnXCIgYWx0PVwiSW1nNFwiIGNsYXNzPVwibWQ6aC1bNjAzcHhdIGgtYXV0b1wiLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3Byb2plY3RzSW1hZ2VzL2ltZzYuanBnXCIgYWx0PVwiSW1nNlwiIGNsYXNzPVwibWQ6aC1bNDUycHhdIGgtYXV0b1wiLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3Byb2plY3RzSW1hZ2VzL2ltZzIuanBnXCIgYWx0PVwiSW1nMlwiIGNsYXNzPVwibWQ6aC1bNjAxcHhdIGgtYXV0b1wiLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3Byb2plY3RzSW1hZ2VzL2ltZzMuanBnXCIgYWx0PVwiSW1nM1wiIGNsYXNzPVwibWQ6aC1bMzM4cHhdIGgtYXV0b1wiLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3Byb2plY3RzSW1hZ2VzL2ltZzEuanBnXCIgYWx0PVwiSW1nMVwiIGNsYXNzPVwibWQ6aC1bMzM4cHhdIGgtYXV0b1wiLz5cclxuXHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wcm9qZWN0c0ltYWdlcy9pbWc5LmpwZ1wiIGFsdD1cIkltZzlcIiBjbGFzcz1cIm1kOmgtWzYwMXB4XSBoLWF1dG9cIi8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wcm9qZWN0c0ltYWdlcy9pbWc4LmpwZ1wiIGFsdD1cIkltZzhcIiBjbGFzcz1cIm1kOmgtWzMzOHB4XSBoLWF1dG9cIi8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wcm9qZWN0c0ltYWdlcy9pbWc3LmpwZ1wiIGFsdD1cIkltZzdcIiBjbGFzcz1cIm1kOmgtWzQ1MXB4XSBoLWF1dG9cIi8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wcm9qZWN0c0ltYWdlcy9pbWc1LmpwZ1wiIGFsdD1cIkltZzVcIiBjbGFzcz1cIm1kOmgtWzQ1MnB4XSBoLWF1dG9cIi8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wcm9qZWN0c0ltYWdlcy9pbWc0LmpwZ1wiIGFsdD1cIkltZzRcIiBjbGFzcz1cIm1kOmgtWzYwM3B4XSBoLWF1dG9cIi8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wcm9qZWN0c0ltYWdlcy9pbWc2LmpwZ1wiIGFsdD1cIkltZzZcIiBjbGFzcz1cIm1kOmgtWzQ1MnB4XSBoLWF1dG9cIi8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wcm9qZWN0c0ltYWdlcy9pbWcyLmpwZ1wiIGFsdD1cIkltZzJcIiBjbGFzcz1cIm1kOmgtWzYwMXB4XSBoLWF1dG9cIi8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wcm9qZWN0c0ltYWdlcy9pbWczLmpwZ1wiIGFsdD1cIkltZzNcIiBjbGFzcz1cIm1kOmgtWzMzOHB4XSBoLWF1dG9cIi8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wcm9qZWN0c0ltYWdlcy9pbWcxLmpwZ1wiIGFsdD1cIkltZzFcIiBjbGFzcz1cIm1kOmgtWzMzOHB4XSBoLWF1dG9cIi8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwiaGlkZS1nYWxsZXJ5XCIgY2xhc3M9XCJzdGlja3kgYmctd2hpdGUgYm90dG9tLTAgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHQtWzEycHhdIHBiLVsxNHB4XSBweC1bMjJweF0gZ2FwLVs4cHhdIGJvcmRlciBib3JkZXItWyMxMTExMTFdIHJvdW5kZWQtZnVsbCBoaWRkZW4gc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlp3acWEPC9zcGFuPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vc3ZnL2V4cGFuZC5zdmdcIiBjbGFzcz1cInJvdGF0ZS0xODBcIi8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJiZ0JsdXJlZFwiIGNsYXNzPVwidy1mdWxsIGgtWzEwMDBweF0gYmctZ3JhZGllbnQtdG8tdCBmcm9tLVsjRENDMUFCXSAgYWJzb2x1dGUgYm90dG9tLTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1lbmRcIj5cclxuICAgICAgICBcclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJleHBhbmRcIiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB0LVsxMnB4XSBwYi1bMTRweF0gcHgtWzIycHhdIGdhcC1bOHB4XSBib3JkZXIgYm9yZGVyLVsjMTExMTExXSByb3VuZGVkLWZ1bGxcIj5cclxuICAgICAgICAgICAgPHNwYW4+Um96d2nFhDwvc3Bhbj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3N2Zy9leHBhbmQuc3ZnXCIvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcbiAgY29uc3QgbWFjeSA9IE1hY3koe1xyXG4gICAgY29udGFpbmVyOiAnI2ltYWdlcy1jb250YWluZXInLFxyXG4gICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICBjb2x1bW5zOiAxLFxyXG4gICAgYnJlYWtBdDoge1xyXG4gICAgICAzNTA6IHtcclxuICAgICAgICBtYXJnaW46IHtcclxuICAgICAgICAgIHg6IDcsXHJcbiAgICAgICAgICB5OiA3XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5zOiAyXHJcbiAgICAgIH0sXHJcbiAgICAgIDQwMDoge1xyXG4gICAgICAgIG1hcmdpbjoge1xyXG4gICAgICAgICAgeDogMTAsXHJcbiAgICAgICAgICB5OiAxMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uczogMlxyXG4gICAgICB9LFxyXG4gICAgICA3MDA6IHtcclxuICAgICAgICBtYXJnaW46IHtcclxuICAgICAgICAgIHg6IDIwLFxyXG4gICAgICAgICAgeTogMjBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbnM6IDNcclxuICAgICAgfSxcclxuICAgICAgMTgwMDoge1xyXG4gICAgICAgIG1hcmdpbjoge1xyXG4gICAgICAgICAgeDogMjAsXHJcbiAgICAgICAgICB5OiAyMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uczogNFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGV4cGFuZEdhbGxlcnkobWFjeSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFsaXphdGlvbnM7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBOYXYgZnJvbSAnLi9jb21wb25lbnRzL25hdic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi9jb21wb25lbnRzL2hlcm8nO1xuaW1wb3J0IE9mZmVycyBmcm9tICcuL2NvbXBvbmVudHMvb2ZmZXJzJztcbmltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvYWJvdXQnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhY3QnO1xuaW1wb3J0IFJlYWxpemF0aW9ucyBmcm9tICcuL2NvbXBvbmVudHMvcmVhbGl6YXRpb25zJztcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF07XG5yb290LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1zbW9vdGgnKTtcblxuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdiZy1bI0Y1RjBFQ10nLCAnZm9udC1pbnRlcicpO1xuXG5OYXYoKTtcbkhlcm8oKTtcbk9mZmVycygpO1xuQWJvdXQoKTtcblJlYWxpemF0aW9ucygpO1xuQ29udGFjdCgpO1xuRm9vdGVyKCk7XG5cbmNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzaG93RWxlbWVudCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd0VsZW1lbnQnKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmNvbnN0IHRvQW5pbWF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaWRlRWxlbWVudCcpO1xudG9BbmltYXRlLmZvckVhY2goKGVsKSA9PiBvYnNlcnZlci5vYnNlcnZlKGVsKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=