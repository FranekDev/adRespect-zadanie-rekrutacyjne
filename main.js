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
  section.classList.add('hideElement', 'to-darken');

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
  section.classList.add('py-[60px]', 'hideElement', 'to-darken');

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
  footer.classList = `to-darken bg-black w-full h-auto text-white px-[40px] py-[80px] flex-col space-y-20 md:px-64`;
  footer.innerHTML = `
  <div class="flex-col space-y-8">

    <div class="w-full flex flex-col xl:flex-row  justify-between space-y-4">
      
      <img src="./svg/giarddesignWhite.svg" alt="logo" class="w-[115px]">
      <aside class="flex justify-between items-center h-auto gap-6 text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
        
        <div class="min-w-[100px] w-auto md:w-auto md:text-base text-sm">Daj znać, co możemy dla Ciebie zrobic!</div>
        <button class="w-git h-9 bg-green-800 py-2 px-3 rounded-full whitespace-nowrap flex justify-center items-center hover:bg-green-900 transition-all hover:shadow-md">
          <div class="px-2 md:px-6 pt-[12px] pb-[14px]">Skontaktuj się z nami</div>
        </button>

      </aside>

    </div>

    <div class="w-full h-[1px] bg-slate-300"></div>


    <div class="flex w-full md:h-10  h-auto justify-between">
      <ul class="flex-col md:flex-row xl:flex 2xl:flex lg:flex gap-8" >
        <li><a href="#contact">Kontakt</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Linkedin</a></li>
      </ul>
      <div class="flex flex-col  md:flex-row  gap-0 md:gap-8 w-fit">
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
  main.classList.add('hideElement', 'to-darken');
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

    <div class="h-[92vh] md:h-auto w-full md:w-1/2 relative bg-[#F5F0EC] overflow-hidden">
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

  const updateSliderImage = (index, auto = true, type = '') => {
    img.src = images[index];
    if (type === 'next' || type === '') {
      img.classList.add('animate-slideTop', 'animate-opacity');
    } else {
      img.classList.add('animate-opacity');
    }

    if (auto) {
      const imgToAnimate = document.querySelector(`[src='${images[index]}']`);
      setTimeout(() => {
        imgToAnimate.classList.add('animate-slideLeft');
      }, 2500);

      setTimeout(() => {
        imgToAnimate.classList.remove('animate-slideLeft');
        if (type === 'next' || type === '') {
          img.classList.remove('animate-slideTop', 'animate-opacity');
        } else {
          img.classList.remove('animate-opacity');
        }
      }, 300);
    } else {
      setTimeout(() => {
        if (type === 'next' || type === '') {
          img.classList.remove('animate-slideTop', 'animate-opacity');
        } else {
          img.classList.remove('animate-opacity');
        }
      }, 300);
    }
  };

  next.addEventListener('click', () => {
    if (currentIndex === images.length - 1) {
      currentIndex = 0;
      updateSliderImage(currentIndex);
    } else if (currentIndex < images.length - 1) {
      currentIndex++;
      updateSliderImage(currentIndex, false, 'next');
    }
  });

  prev.addEventListener('click', () => {
    if (currentIndex === 0) {
      currentIndex = images.length - 1;
      updateSliderImage(currentIndex);
    } else if (currentIndex > 0) {
      currentIndex--;
      updateSliderImage(currentIndex, false, 'prev');
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
      input.classList.remove('lg:hidden');
      input.classList.remove('lg:animate-hideInput');
      input.classList.add('lg:animate-expandInput');
      isHidden = !isHidden;
      searchIcon.classList.remove('lg:animate-rotateRight');
      searchIcon.classList.add('lg:animate-rotateLeft');
    } else {
      searchIcon.classList.remove('lg:animate-rotateLeft');
      searchIcon.classList.add('lg:animate-rotateRight');
      input.classList.remove('lg:animate-expandInput');
      input.classList.add('lg:animate-hideInput');
      setTimeout(() => {
        input.classList.add('lg:hidden');
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
    const toDarken = document.querySelectorAll('.to-darken');
    if (hidden) {
      toDarken.forEach((dark) => {
        dark.classList.remove('hideElement', 'showElement');
        dark.classList.add('transition-all', 'opacity-50');
      });
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
      toDarken.forEach((dark) => {
        dark.classList.add('hideElement', 'showElement');
        dark.classList.remove('transition-all', 'opacity-50');
      });
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
    'hideElement bg-white w-full px-6 py-3 lg:p-6 flex justify-between items-center sticky top-0 z-10 h-[8vh]';

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
    'lg:flex text-[#111111] lg:gap-10 gap-3 [&>*]:cursor-pointer lg:flex-row lg:relative lg:m-0 justify-start items-start lg:justify-center lg:items-center fixed mt-[450px] rounded-xl py-5 px-6 lg:p-0 bg-white flex flex-col left-1/2 -translate-x-1/2 w-[85vw] shadow-xl lg:shadow-none lg:w-auto lg:left-0 lg:translate-x-0 hidden animate-showMobileMenu lg:animate-none font-inter';

  const dropdown = document.createElement('div');
  dropdown.id = 'dropdown';
  dropdown.classList.add('dropdown', 'flex', 'flex-col', 'group');

  const offersLink = document.createElement('a');
  offersLink.setAttribute('href', '#offers');
  offersLink.id = 'offer';
  offersLink.textContent = 'Oferta';
  offersLink.classList =
    'offers flex gap-2 justify-start items-start lg:justify-center lg:items-center h-auto group animate-opacity';

  const arrowContainer = document.createElement('div');
  arrowContainer.classList.add(
    'group-hover:rotate-180',
    'transition-all',
    'hidden',
    'lg:block'
  );
  arrowContainer.innerHTML = `
  <img src="./svg/arrowDown.svg" alt="Rozwiń">
  `;

  const offersListContainer = document.createElement('div');
  offersListContainer.classList.add(
    'offers-list',
    'w-auto',
    'h-auto',
    'lg:py-5',
    'lg:px-6',
    'lg:bg-white',
    'lg:mt-[-200px]',
    'lg:group-hover:mt-[24px]',
    'lg:shadow-xl',
    'lg:rounded-md',
    'lg:absolute',
    'z-[-100]',
    'lg:border-none',
    'border-l-2',
    'border-slate-300',
    'transition-all',
    'lg:m-0',
    'ml-5',
    'mt-2'
  );
  const offersList = document.createElement('ul');
  offersList.id = 'offers-list';
  offersList.classList.add('space-y-2', 'lg:text-center', 'relative');
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
    'bg-transparent h-auto outline-none p-0.5 border-b-2 border-black lg:hidden w-40 box-border';

  const searchContainer = document.createElement('div');
  searchContainer.classList = `flex justify-center items-center h-full hidden lg:block animate-opacity`;
  searchContainer.innerHTML = `
  <img src="./svg/search.svg" alt="Szukaj" id="search-icon">
  `;

  const burgerMenu = document.createElement('div');
  burgerMenu.classList = 'lg:hidden';
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
  page.id = title;
  page.innerHTML = `
<div class="w-auto h-auto group">

<div class="flex flex-col justify-between bg-white  w-72 min-h-[412px] h-auto xl:w-[370px] py-12 px-10 rounded-xl transition-all group-hover:[transform:rotateY(360deg)] cursor-pointer hover:scale-105 group-hover:shadow-xl">
    <div class="space-y-8">
        <div class="w-[40px] h-[40px]">
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
    'to-darken hideElement flex justify-center items-center flex-col w-full md:h-auto space-y-10 bg-[#F5F0EC] p-5 py-10 pt-[120px] pb-[160px] space-y-[96px]';

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
    'z-10',
    'to-darken'
  );
  section.innerHTML = `
    <div class="h-full relative">

        <div class="w-full h-auto flex flex-col justify-start items-start gap-4 pl-10 md:pl-40 pb-24">
            <div class="text-green-800 text-xs">Realizacje</div>
            <div class="text-4xl md:text-5xl font-montserrat font-medium">Nasze <i>projekty</i></div>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxlQUFlLEtBQW9ELG9CQUFvQixDQUEwRCxDQUFDLGlCQUFpQixhQUFhLGdCQUFnQixhQUFhLGtCQUFrQixzQ0FBc0MsZ0JBQWdCLDRCQUE0QixJQUFJLHFCQUFxQixTQUFTLGdCQUFnQiw4REFBOEQsa0NBQWtDLHFCQUFxQixjQUFjLDZFQUE2RSxXQUFXLEtBQUssd0JBQXdCLDhCQUE4QixTQUFTLGNBQWMsc0ZBQXNGLEtBQUssS0FBSyx3QkFBd0IsOEJBQThCLFNBQVMsY0FBYyxnRkFBZ0YsbUJBQW1CLHNCQUFzQiwwQkFBMEIsV0FBVyx1QkFBdUIsNkJBQTZCLHdCQUF3QixnREFBZ0QsS0FBSyxnREFBZ0QsRUFBRSxjQUFjLG9CQUFvQixjQUFjLG1CQUFtQixjQUFjLHlGQUF5RixlQUFlLHNCQUFzQixXQUFXLHVCQUF1QixvQkFBb0Isc0JBQXNCLDREQUE0RCxnQkFBZ0IseUNBQXlDLG9CQUFvQixpQkFBaUIsV0FBVyx1QkFBdUIsdUJBQXVCLHNCQUFzQiwrRkFBK0YsY0FBYywrQkFBK0IsZ0JBQWdCLFVBQVUsd0JBQXdCLGdCQUFnQiwySkFBMkoseUJBQXlCLHNDQUFzQyx3Q0FBd0MsbUJBQW1CLDRJQUE0SSwyQkFBMkIsZ0JBQWdCLDJKQUEySix5QkFBeUIsNkJBQTZCLG9CQUFvQix3TkFBd04sMkJBQTJCLHNCQUFzQiwwQ0FBMEMsMEJBQTBCLHNFQUFzRSx3R0FBd0csc0JBQXNCLGdDQUFnQyx3Q0FBd0MseUJBQXlCLGtEQUFrRCx1REFBdUQsNENBQTRDLHdDQUF3QyxrREFBa0QsZ0RBQWdELG9CQUFvQix1QkFBdUIsSUFBSSxhQUFhLGNBQWMsOERBQThELDRDQUE0QywyQkFBMkIsd0NBQXdDLDBCQUEwQixnREFBZ0QsNEJBQTRCLHFFQUFxRSw2Q0FBNkMsZ0JBQWdCLHlDQUF5Qyw4QkFBOEIsZ0JBQWdCLGtCQUFrQixnRUFBZ0Usd0NBQXdDLGNBQWMsOERBQThELGNBQWMsa0JBQWtCLDBCQUEwQix3SEFBd0gsNkZBQTZGLDZCQUE2QiwwSEFBMEgsK0NBQStDLDZCQUE2Qiw2QkFBNkIsWUFBWSxHQUFHLGtCQUFrQix1RkFBdUYsaUJBQWlCLDhEQUE4RCxpQ0FBaUMsb0NBQW9DLHFDQUFxQyxzQkFBc0Isd0NBQXdDLFlBQVksRUFBRSxtQkFBbUIsd0NBQXdDLE1BQU0sRUFBRSxvQkFBb0IsNkNBQTZDLE1BQU0sRUFBRSxFQUFFLGlCQUFpQiw4REFBOEQsdUJBQXVCLGdCQUFnQixFQUFFLGlCQUFpQiw4REFBOEQsNkNBQTZDLHlDQUF5QyxFQUFFLGVBQWUsb0JBQW9CLHdEQUF3RCw0QkFBNEIsRUFBRSxNQUFNLGVBQWUsa0pBQWtKLHVIQUF1SCxlQUFlLHlEQUF5RCxlQUFlLDJCQUEyQix5RkFBeUYsNEJBQTRCLG1EQUFtRCw0QkFBNEIscUdBQXFHLGVBQWUsZUFBZSxlQUFlLDJFQUEyRSxpQkFBaUIsb0dBQW9HLHNCQUFzQixvSUFBb0ksaUJBQWlCLDJEQUEyRCxpQkFBaUIsOERBQThELHVEQUF1RCxnQ0FBZ0MsY0FBYyxLQUFLLGlDQUFpQyxtQkFBbUIsVUFBVSxjQUFjLEtBQUssMkJBQTJCLEtBQUssYUFBYSxjQUFjLEtBQUssNEJBQTRCLGVBQWUsOE1BQThNLG1DQUFtQyw2QkFBNkIsRUFBRSxtQkFBbUIsdUJBQXVCLDhDQUE4Qyw4SEFBOEgsY0FBYyx1QkFBdUIsOEJBQThCLFlBQVksbUJBQW1CLEtBQUssbUJBQW1CLHNFQUFzRSxVQUFVLG9DQUFvQyxpQkFBaUIsV0FBVyxnQkFBZ0IsU0FBUyxFQUFFLE9BQU8sNkVBQTZFLCtFQUErRSxZQUFZLElBQUksc0RBQXNELFNBQVMsWUFBWSxjQUFjLG1CQUFtQixpQkFBaUIsOEJBQThCLHlGQUF5Riw4QkFBOEIsNERBQTRELGdDQUFnQyx3REFBd0QsNENBQTRDLGdDQUFnQyw0Q0FBNEMsK0NBQStDLGdDQUFnQyxJQUFJLEdBQUcsbUJBQW1CLCtEQUErRCx3Q0FBd0MsZUFBZSwrREFBK0QsMEJBQTBCLDhHQUE4RyxrQkFBa0IsY0FBYywrQ0FBK0MsOERBQThELDBDQUEwQyx3Q0FBd0Msd0ZBQXdGLGdIQUFnSCxvQ0FBb0Msa0lBQWtJLHVEQUF1RCxnQkFBZ0IsRUFBRSwrQkFBK0Isd0ZBQXdGLG1FQUFtRSwwQ0FBMEMsK0JBQStCLDRKQUE0Siw4QkFBOEIsb0JBQW9CLGdDQUFnQyxzQkFBc0IsY0FBYywyTkFBMk4scUNBQXFDOzs7Ozs7Ozs7Ozs7O0FDQTkzVTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RHRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsY0FBYztBQUN6RTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JTbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLDJFQUEyRSxNQUFNO0FBQ2pGLHFDQUFxQyxZQUFZO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0RBQUs7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFLO0FBQ1A7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNFO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDJDQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7O1VDak01QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDYztBQUNNO0FBQ0o7QUFDSTtBQUNGO0FBQ0k7QUFDVTs7QUFFckQ7QUFDQTs7QUFFQTs7QUFFQSwyREFBRztBQUNILDREQUFJO0FBQ0osOERBQU07QUFDTiw2REFBSztBQUNMLG9FQUFZO0FBQ1osK0RBQU87QUFDUCw4REFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL25vZGVfbW9kdWxlcy9tYWN5L2Rpc3QvbWFjeS5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL2Fib3V0LmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL2hlcm8uanMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2NvbXBvbmVudHMvbmF2LmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL29mZmVyLmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL29mZmVycy5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9yZWFsaXphdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24odCxuKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1uKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShuKTp0Lk1hY3k9bigpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0LG4pe3ZhciBlPXZvaWQgMDtyZXR1cm4gZnVuY3Rpb24oKXtlJiZjbGVhclRpbWVvdXQoZSksZT1zZXRUaW1lb3V0KHQsbil9fWZ1bmN0aW9uIG4odCxuKXtmb3IodmFyIGU9dC5sZW5ndGgscj1lLG89W107ZS0tOylvLnB1c2gobih0W3ItZS0xXSkpO3JldHVybiBvfWZ1bmN0aW9uIGUodCxuKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdO2lmKHdpbmRvdy5Qcm9taXNlKXJldHVybiBBKHQsbixlKTt0LnJlY2FsY3VsYXRlKCEwLCEwKX1mdW5jdGlvbiByKHQpe2Zvcih2YXIgbj10Lm9wdGlvbnMsZT10LnJlc3BvbnNpdmVPcHRpb25zLHI9dC5rZXlzLG89dC5kb2NXaWR0aCxpPXZvaWQgMCxzPTA7czxyLmxlbmd0aDtzKyspe3ZhciBhPXBhcnNlSW50KHJbc10sMTApO28+PWEmJihpPW4uYnJlYWtBdFthXSxPKGksZSkpfXJldHVybiBlfWZ1bmN0aW9uIG8odCl7Zm9yKHZhciBuPXQub3B0aW9ucyxlPXQucmVzcG9uc2l2ZU9wdGlvbnMscj10LmtleXMsbz10LmRvY1dpZHRoLGk9dm9pZCAwLHM9ci5sZW5ndGgtMTtzPj0wO3MtLSl7dmFyIGE9cGFyc2VJbnQocltzXSwxMCk7bzw9YSYmKGk9bi5icmVha0F0W2FdLE8oaSxlKSl9cmV0dXJuIGV9ZnVuY3Rpb24gaSh0KXt2YXIgbj10LnVzZUNvbnRhaW5lckZvckJyZWFrcG9pbnRzP3QuY29udGFpbmVyLmNsaWVudFdpZHRoOndpbmRvdy5pbm5lcldpZHRoLGU9e2NvbHVtbnM6dC5jb2x1bW5zfTtiKHQubWFyZ2luKT9lLm1hcmdpbj17eDp0Lm1hcmdpbi54LHk6dC5tYXJnaW4ueX06ZS5tYXJnaW49e3g6dC5tYXJnaW4seTp0Lm1hcmdpbn07dmFyIGk9T2JqZWN0LmtleXModC5icmVha0F0KTtyZXR1cm4gdC5tb2JpbGVGaXJzdD9yKHtvcHRpb25zOnQscmVzcG9uc2l2ZU9wdGlvbnM6ZSxrZXlzOmksZG9jV2lkdGg6bn0pOm8oe29wdGlvbnM6dCxyZXNwb25zaXZlT3B0aW9uczplLGtleXM6aSxkb2NXaWR0aDpufSl9ZnVuY3Rpb24gcyh0KXtyZXR1cm4gaSh0KS5jb2x1bW5zfWZ1bmN0aW9uIGEodCl7cmV0dXJuIGkodCkubWFyZ2lufWZ1bmN0aW9uIGModCl7dmFyIG49IShhcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSl8fGFyZ3VtZW50c1sxXSxlPXModCkscj1hKHQpLngsbz0xMDAvZTtpZighbilyZXR1cm4gbztpZigxPT09ZSlyZXR1cm5cIjEwMCVcIjt2YXIgaT1cInB4XCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHIpe3ZhciBjPXBhcnNlRmxvYXQocik7aT1yLnJlcGxhY2UoYyxcIlwiKSxyPWN9cmV0dXJuIHI9KGUtMSkqci9lLFwiJVwiPT09aT9vLXIrXCIlXCI6XCJjYWxjKFwiK28rXCIlIC0gXCIrcitpK1wiKVwifWZ1bmN0aW9uIHUodCxuKXt2YXIgZT1zKHQub3B0aW9ucykscj0wLG89dm9pZCAwLGk9dm9pZCAwO2lmKDE9PT0rK24pcmV0dXJuIDA7aT1hKHQub3B0aW9ucykueDt2YXIgdT1cInB4XCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkpe3ZhciBsPXBhcnNlRmxvYXQoaSwxMCk7dT1pLnJlcGxhY2UobCxcIlwiKSxpPWx9cmV0dXJuIG89KGktKGUtMSkqaS9lKSoobi0xKSxyKz1jKHQub3B0aW9ucywhMSkqKG4tMSksXCIlXCI9PT11P3IrbytcIiVcIjpcImNhbGMoXCIrcitcIiUgKyBcIitvK3UrXCIpXCJ9ZnVuY3Rpb24gbCh0KXt2YXIgbj0wLGU9dC5jb250YWluZXIscj10LnJvd3M7dihyLGZ1bmN0aW9uKHQpe249dD5uP3Q6bn0pLGUuc3R5bGUuaGVpZ2h0PW4rXCJweFwifWZ1bmN0aW9uIHAodCxuKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdLHI9IShhcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXSl8fGFyZ3VtZW50c1szXSxvPXModC5vcHRpb25zKSxpPWEodC5vcHRpb25zKS55O00odCxvLGUpLHYobixmdW5jdGlvbihuKXt2YXIgZT0wLG89cGFyc2VJbnQobi5vZmZzZXRIZWlnaHQsMTApO2lzTmFOKG8pfHwodC5yb3dzLmZvckVhY2goZnVuY3Rpb24obixyKXtuPHQucm93c1tlXSYmKGU9cil9KSxuLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixuLnN0eWxlLnRvcD10LnJvd3NbZV0rXCJweFwiLG4uc3R5bGUubGVmdD1cIlwiK3QuY29sc1tlXSx0LnJvd3NbZV0rPWlzTmFOKG8pPzA6bytpLHImJihuLmRhdGFzZXQubWFjeUNvbXBsZXRlPTEpKX0pLHImJih0LnRtcFJvd3M9bnVsbCksbCh0KX1mdW5jdGlvbiBmKHQsbil7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXSxyPSEoYXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10pfHxhcmd1bWVudHNbM10sbz1zKHQub3B0aW9ucyksaT1hKHQub3B0aW9ucykueTtNKHQsbyxlKSx2KG4sZnVuY3Rpb24obil7dC5sYXN0Y29sPT09byYmKHQubGFzdGNvbD0wKTt2YXIgZT1DKG4sXCJoZWlnaHRcIik7ZT1wYXJzZUludChuLm9mZnNldEhlaWdodCwxMCksaXNOYU4oZSl8fChuLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixuLnN0eWxlLnRvcD10LnJvd3NbdC5sYXN0Y29sXStcInB4XCIsbi5zdHlsZS5sZWZ0PVwiXCIrdC5jb2xzW3QubGFzdGNvbF0sdC5yb3dzW3QubGFzdGNvbF0rPWlzTmFOKGUpPzA6ZStpLHQubGFzdGNvbCs9MSxyJiYobi5kYXRhc2V0Lm1hY3lDb21wbGV0ZT0xKSl9KSxyJiYodC50bXBSb3dzPW51bGwpLGwodCl9dmFyIGg9ZnVuY3Rpb24gdChuLGUpe2lmKCEodGhpcyBpbnN0YW5jZW9mIHQpKXJldHVybiBuZXcgdChuLGUpO2lmKG4mJm4ubm9kZU5hbWUpcmV0dXJuIG47aWYobj1uLnJlcGxhY2UoL15cXHMqLyxcIlwiKS5yZXBsYWNlKC9cXHMqJC8sXCJcIiksZSlyZXR1cm4gdGhpcy5ieUNzcyhuLGUpO2Zvcih2YXIgciBpbiB0aGlzLnNlbGVjdG9ycylpZihlPXIuc3BsaXQoXCIvXCIpLG5ldyBSZWdFeHAoZVsxXSxlWzJdKS50ZXN0KG4pKXJldHVybiB0aGlzLnNlbGVjdG9yc1tyXShuKTtyZXR1cm4gdGhpcy5ieUNzcyhuKX07aC5wcm90b3R5cGUuYnlDc3M9ZnVuY3Rpb24odCxuKXtyZXR1cm4obnx8ZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwodCl9LGgucHJvdG90eXBlLnNlbGVjdG9ycz17fSxoLnByb3RvdHlwZS5zZWxlY3RvcnNbL15cXC5bXFx3XFwtXSskL109ZnVuY3Rpb24odCl7cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodC5zdWJzdHJpbmcoMSkpfSxoLnByb3RvdHlwZS5zZWxlY3RvcnNbL15cXHcrJC9dPWZ1bmN0aW9uKHQpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0KX0saC5wcm90b3R5cGUuc2VsZWN0b3JzWy9eXFwjW1xcd1xcLV0rJC9dPWZ1bmN0aW9uKHQpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0LnN1YnN0cmluZygxKSl9O3ZhciB2PWZ1bmN0aW9uKHQsbil7Zm9yKHZhciBlPXQubGVuZ3RoLHI9ZTtlLS07KW4odFtyLWUtMV0pfSxtPWZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXTt0aGlzLnJ1bm5pbmc9ITEsdGhpcy5ldmVudHM9W10sdGhpcy5hZGQodCl9O20ucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe2lmKCF0aGlzLnJ1bm5pbmcmJnRoaXMuZXZlbnRzLmxlbmd0aD4wKXt2YXIgdD10aGlzLmV2ZW50cy5zaGlmdCgpO3RoaXMucnVubmluZz0hMCx0KCksdGhpcy5ydW5uaW5nPSExLHRoaXMucnVuKCl9fSxtLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLG49YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXTtyZXR1cm4hIW4mJihBcnJheS5pc0FycmF5KG4pP3YobixmdW5jdGlvbihuKXtyZXR1cm4gdC5hZGQobil9KToodGhpcy5ldmVudHMucHVzaChuKSx2b2lkIHRoaXMucnVuKCkpKX0sbS5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmV2ZW50cz1bXX07dmFyIGQ9ZnVuY3Rpb24odCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9O3JldHVybiB0aGlzLmluc3RhbmNlPXQsdGhpcy5kYXRhPW4sdGhpc30seT1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF07dGhpcy5ldmVudHM9e30sdGhpcy5pbnN0YW5jZT10fTt5LnByb3RvdHlwZS5vbj1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF0sbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSYmYXJndW1lbnRzWzFdO3JldHVybiEoIXR8fCFuKSYmKEFycmF5LmlzQXJyYXkodGhpcy5ldmVudHNbdF0pfHwodGhpcy5ldmVudHNbdF09W10pLHRoaXMuZXZlbnRzW3RdLnB1c2gobikpfSx5LnByb3RvdHlwZS5lbWl0PWZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXSxuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fTtpZighdHx8IUFycmF5LmlzQXJyYXkodGhpcy5ldmVudHNbdF0pKXJldHVybiExO3ZhciBlPW5ldyBkKHRoaXMuaW5zdGFuY2Usbik7dih0aGlzLmV2ZW50c1t0XSxmdW5jdGlvbih0KXtyZXR1cm4gdChlKX0pfTt2YXIgZz1mdW5jdGlvbih0KXtyZXR1cm4hKFwibmF0dXJhbEhlaWdodFwiaW4gdCYmdC5uYXR1cmFsSGVpZ2h0K3QubmF0dXJhbFdpZHRoPT09MCl8fHQud2lkdGgrdC5oZWlnaHQhPT0wfSxFPWZ1bmN0aW9uKHQsbil7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCxlKXtpZihuLmNvbXBsZXRlKXJldHVybiBnKG4pP3Qobik6ZShuKTtuLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oKXtyZXR1cm4gZyhuKT90KG4pOmUobil9KSxuLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLGZ1bmN0aW9uKCl7cmV0dXJuIGUobil9KX0pLnRoZW4oZnVuY3Rpb24obil7ZSYmdC5lbWl0KHQuY29uc3RhbnRzLkVWRU5UX0lNQUdFX0xPQUQse2ltZzpufSl9KS5jYXRjaChmdW5jdGlvbihuKXtyZXR1cm4gdC5lbWl0KHQuY29uc3RhbnRzLkVWRU5UX0lNQUdFX0VSUk9SLHtpbWc6bn0pfSl9LHc9ZnVuY3Rpb24odCxlKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdO3JldHVybiBuKGUsZnVuY3Rpb24obil7cmV0dXJuIEUodCxuLHIpfSl9LEE9ZnVuY3Rpb24odCxuKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdO3JldHVybiBQcm9taXNlLmFsbCh3KHQsbixlKSkudGhlbihmdW5jdGlvbigpe3QuZW1pdCh0LmNvbnN0YW50cy5FVkVOVF9JTUFHRV9DT01QTEVURSl9KX0sST1mdW5jdGlvbihuKXtyZXR1cm4gdChmdW5jdGlvbigpe24uZW1pdChuLmNvbnN0YW50cy5FVkVOVF9SRVNJWkUpLG4ucXVldWUuYWRkKGZ1bmN0aW9uKCl7cmV0dXJuIG4ucmVjYWxjdWxhdGUoITAsITApfSl9LDEwMCl9LE49ZnVuY3Rpb24odCl7aWYodC5jb250YWluZXI9aCh0Lm9wdGlvbnMuY29udGFpbmVyKSx0LmNvbnRhaW5lciBpbnN0YW5jZW9mIGh8fCF0LmNvbnRhaW5lcilyZXR1cm4hIXQub3B0aW9ucy5kZWJ1ZyYmY29uc29sZS5lcnJvcihcIkVycm9yOiBDb250YWluZXIgbm90IGZvdW5kXCIpO3QuY29udGFpbmVyLmxlbmd0aCYmKHQuY29udGFpbmVyPXQuY29udGFpbmVyWzBdKSx0Lm9wdGlvbnMuY29udGFpbmVyPXQuY29udGFpbmVyLHQuY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIn0sVD1mdW5jdGlvbih0KXt0LnF1ZXVlPW5ldyBtLHQuZXZlbnRzPW5ldyB5KHQpLHQucm93cz1bXSx0LnJlc2l6ZXI9SSh0KX0sTD1mdW5jdGlvbih0KXt2YXIgbj1oKFwiaW1nXCIsdC5jb250YWluZXIpO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdC5yZXNpemVyKSx0Lm9uKHQuY29uc3RhbnRzLkVWRU5UX0lNQUdFX0xPQUQsZnVuY3Rpb24oKXtyZXR1cm4gdC5yZWNhbGN1bGF0ZSghMSwhMSl9KSx0Lm9uKHQuY29uc3RhbnRzLkVWRU5UX0lNQUdFX0NPTVBMRVRFLGZ1bmN0aW9uKCl7cmV0dXJuIHQucmVjYWxjdWxhdGUoITAsITApfSksdC5vcHRpb25zLnVzZU93bkltYWdlTG9hZGVyfHxlKHQsbiwhdC5vcHRpb25zLndhaXRGb3JJbWFnZXMpLHQuZW1pdCh0LmNvbnN0YW50cy5FVkVOVF9JTklUSUFMSVpFRCl9LF89ZnVuY3Rpb24odCl7Tih0KSxUKHQpLEwodCl9LGI9ZnVuY3Rpb24odCl7cmV0dXJuIHQ9PT1PYmplY3QodCkmJlwiW29iamVjdCBBcnJheV1cIiE9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KX0sTz1mdW5jdGlvbih0LG4pe2IodCl8fChuLmNvbHVtbnM9dCksYih0KSYmdC5jb2x1bW5zJiYobi5jb2x1bW5zPXQuY29sdW1ucyksYih0KSYmdC5tYXJnaW4mJiFiKHQubWFyZ2luKSYmKG4ubWFyZ2luPXt4OnQubWFyZ2luLHk6dC5tYXJnaW59KSxiKHQpJiZ0Lm1hcmdpbiYmYih0Lm1hcmdpbikmJnQubWFyZ2luLngmJihuLm1hcmdpbi54PXQubWFyZ2luLngpLGIodCkmJnQubWFyZ2luJiZiKHQubWFyZ2luKSYmdC5tYXJnaW4ueSYmKG4ubWFyZ2luLnk9dC5tYXJnaW4ueSl9LEM9ZnVuY3Rpb24odCxuKXtyZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodCxudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKG4pfSxNPWZ1bmN0aW9uKHQsbil7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXTtpZih0Lmxhc3Rjb2x8fCh0Lmxhc3Rjb2w9MCksdC5yb3dzLmxlbmd0aDwxJiYoZT0hMCksZSl7dC5yb3dzPVtdLHQuY29scz1bXSx0Lmxhc3Rjb2w9MDtmb3IodmFyIHI9bi0xO3I+PTA7ci0tKXQucm93c1tyXT0wLHQuY29sc1tyXT11KHQscil9ZWxzZSBpZih0LnRtcFJvd3Mpe3Qucm93cz1bXTtmb3IodmFyIHI9bi0xO3I+PTA7ci0tKXQucm93c1tyXT10LnRtcFJvd3Nbcl19ZWxzZXt0LnRtcFJvd3M9W107Zm9yKHZhciByPW4tMTtyPj0wO3ItLSl0LnRtcFJvd3Nbcl09dC5yb3dzW3JdfX0sVj1mdW5jdGlvbih0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSYmYXJndW1lbnRzWzFdLGU9IShhcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSl8fGFyZ3VtZW50c1syXSxyPW4/dC5jb250YWluZXIuY2hpbGRyZW46aCgnOnNjb3BlID4gKjpub3QoW2RhdGEtbWFjeS1jb21wbGV0ZT1cIjFcIl0pJyx0LmNvbnRhaW5lcik7cj1BcnJheS5mcm9tKHIpLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gbnVsbCE9PXQub2Zmc2V0UGFyZW50fSk7dmFyIG89Yyh0Lm9wdGlvbnMpO3JldHVybiB2KHIsZnVuY3Rpb24odCl7biYmKHQuZGF0YXNldC5tYWN5Q29tcGxldGU9MCksdC5zdHlsZS53aWR0aD1vfSksdC5vcHRpb25zLnRydWVPcmRlcj8oZih0LHIsbixlKSx0LmVtaXQodC5jb25zdGFudHMuRVZFTlRfUkVDQUxDVUxBVEVEKSk6KHAodCxyLG4sZSksdC5lbWl0KHQuY29uc3RhbnRzLkVWRU5UX1JFQ0FMQ1VMQVRFRCkpfSxSPWZ1bmN0aW9uKCl7cmV0dXJuISF3aW5kb3cuUHJvbWlzZX0seD1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXt2YXIgZT1hcmd1bWVudHNbbl07Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfXJldHVybiB0fTtBcnJheS5mcm9tfHwoQXJyYXkuZnJvbT1mdW5jdGlvbih0KXtmb3IodmFyIG49MCxlPVtdO248dC5sZW5ndGg7KWUucHVzaCh0W24rK10pO3JldHVybiBlfSk7dmFyIGs9e2NvbHVtbnM6NCxtYXJnaW46Mix0cnVlT3JkZXI6ITEsd2FpdEZvckltYWdlczohMSx1c2VJbWFnZUxvYWRlcjohMCxicmVha0F0Ont9LHVzZU93bkltYWdlTG9hZGVyOiExLG9uSW5pdDohMSxjYW5jZWxMZWdhY3k6ITEsdXNlQ29udGFpbmVyRm9yQnJlYWtwb2ludHM6ITF9OyFmdW5jdGlvbigpe3RyeXtkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKS5xdWVyeVNlbGVjdG9yKFwiOnNjb3BlICpcIil9Y2F0Y2godCl7IWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoZSYmbi50ZXN0KGUpKXt2YXIgcj10aGlzLmdldEF0dHJpYnV0ZShcImlkXCIpO3J8fCh0aGlzLmlkPVwicVwiK01hdGguZmxvb3IoOWU2Kk1hdGgucmFuZG9tKCkpKzFlNiksYXJndW1lbnRzWzBdPWUucmVwbGFjZShuLFwiI1wiK3RoaXMuaWQpO3ZhciBvPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiBudWxsPT09cj90aGlzLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpOnJ8fCh0aGlzLmlkPXIpLG99cmV0dXJuIHQuYXBwbHkodGhpcyxhcmd1bWVudHMpfX12YXIgbj0vOnNjb3BlXFxiL2dpLGU9dChFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yKTtFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yPWZ1bmN0aW9uKHQpe3JldHVybiBlLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07dmFyIHI9dChFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsKTtFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsPWZ1bmN0aW9uKHQpe3JldHVybiByLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KCl9fSgpO3ZhciBxPWZ1bmN0aW9uIHQoKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06aztpZighKHRoaXMgaW5zdGFuY2VvZiB0KSlyZXR1cm4gbmV3IHQobik7dGhpcy5vcHRpb25zPXt9LHgodGhpcy5vcHRpb25zLGssbiksdGhpcy5vcHRpb25zLmNhbmNlbExlZ2FjeSYmIVIoKXx8Xyh0aGlzKX07cmV0dXJuIHEuaW5pdD1mdW5jdGlvbih0KXtyZXR1cm4gY29uc29sZS53YXJuKFwiRGVwcmVjaWF0ZWQ6IE1hY3kuaW5pdCB3aWxsIGJlIHJlbW92ZWQgaW4gdjMuMC4wIG9wdCB0byB1c2UgTWFjeSBkaXJlY3RseSBsaWtlIHNvIE1hY3koeyAvKm9wdGlvbnMgaGVyZSovIH0pIFwiKSxuZXcgcSh0KX0scS5wcm90b3R5cGUucmVjYWxjdWxhdGVPbkltYWdlTG9hZD1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF07cmV0dXJuIGUodGhpcyxoKFwiaW1nXCIsdGhpcy5jb250YWluZXIpLCF0KX0scS5wcm90b3R5cGUucnVuT25JbWFnZUxvYWQ9ZnVuY3Rpb24odCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0mJmFyZ3VtZW50c1sxXSxyPWgoXCJpbWdcIix0aGlzLmNvbnRhaW5lcik7cmV0dXJuIHRoaXMub24odGhpcy5jb25zdGFudHMuRVZFTlRfSU1BR0VfQ09NUExFVEUsdCksbiYmdGhpcy5vbih0aGlzLmNvbnN0YW50cy5FVkVOVF9JTUFHRV9MT0FELHQpLGUodGhpcyxyLG4pfSxxLnByb3RvdHlwZS5yZWNhbGN1bGF0ZT1mdW5jdGlvbigpe3ZhciB0PXRoaXMsbj1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdLGU9IShhcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSl8fGFyZ3VtZW50c1sxXTtyZXR1cm4gZSYmdGhpcy5xdWV1ZS5jbGVhcigpLHRoaXMucXVldWUuYWRkKGZ1bmN0aW9uKCl7cmV0dXJuIFYodCxuLGUpfSl9LHEucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZXNpemVyKSx2KHRoaXMuY29udGFpbmVyLmNoaWxkcmVuLGZ1bmN0aW9uKHQpe3QucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1tYWN5LWNvbXBsZXRlXCIpLHQucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIil9KSx0aGlzLmNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKX0scS5wcm90b3R5cGUucmVJbml0PWZ1bmN0aW9uKCl7dGhpcy5yZWNhbGN1bGF0ZSghMCwhMCksdGhpcy5lbWl0KHRoaXMuY29uc3RhbnRzLkVWRU5UX0lOSVRJQUxJWkVEKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplciksdGhpcy5jb250YWluZXIuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwifSxxLnByb3RvdHlwZS5vbj1mdW5jdGlvbih0LG4pe3RoaXMuZXZlbnRzLm9uKHQsbil9LHEucHJvdG90eXBlLmVtaXQ9ZnVuY3Rpb24odCxuKXt0aGlzLmV2ZW50cy5lbWl0KHQsbil9LHEuY29uc3RhbnRzPXtFVkVOVF9JTklUSUFMSVpFRDpcIm1hY3kuaW5pdGlhbGl6ZWRcIixFVkVOVF9SRUNBTENVTEFURUQ6XCJtYWN5LnJlY2FsY3VsYXRlZFwiLEVWRU5UX0lNQUdFX0xPQUQ6XCJtYWN5LmltYWdlLmxvYWRcIixFVkVOVF9JTUFHRV9FUlJPUjpcIm1hY3kuaW1hZ2UuZXJyb3JcIixFVkVOVF9JTUFHRV9DT01QTEVURTpcIm1hY3kuaW1hZ2VzLmNvbXBsZXRlXCIsRVZFTlRfUkVTSVpFOlwibWFjeS5yZXNpemVcIn0scS5wcm90b3R5cGUuY29uc3RhbnRzPXEuY29uc3RhbnRzLHF9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgc2VjdGlvbi5pZCA9ICdhYm91dCc7XHJcbiAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRlRWxlbWVudCcsICd0by1kYXJrZW4nKTtcclxuXHJcbiAgc2VjdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG1kOm1heC1oLVs3MjBweF0gaC1hdXRvIGJnLWdyZWVuLTkwMCBmbGV4LWNvbCBmbGV4IG1kOmZsZXgtcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBiZy1ncmVlbi04MDAgaC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hYm91dFBob3RvLnBuZ1wiIGFsdD1cIkxhZG5lIHpkamVjaWVcIiBjbGFzcz1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBweS0xMCB0ZXh0LVsjRjVGMEVDXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLWF1dG9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctNC81IHNwYWNlLXktMjBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZS15LThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXNtXCI+TyBmaXJtaWU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtNHhsIHctZml0IGZvbnQtbW9udHNlcnJhdCBmb250LW1lZGl1bVwiPlR3b3J6eW15PC9icj4geiA8aT5wYXNqxIU8L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1heC13LVs4MDBweF0gdGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEthxbxkeSBwcm9qZWt0IHRvIG5vd2Ugd3l6d2FuaWUuIERsYXRlZ28gbmFzeiB6ZXNww7PFgiB0d29yesSFIHd5a3dhbGlmaWtvd2FuaSBwcm9qZWt0YW5jaSBvcmF6IGFyY2hpdGVrY2ksIGt0w7NyeWNoIHphZGFuaWVtIGplc3Qgcm96cG96bmFuaWUgaSByZWFsaXphY2phIHBvdHJ6ZWIga2HFvGRlZ28gS2xpZW50YS4gTmFzemEgc3BlY2phbGl6YWNqYSB0byBwcnplc3RyemVuaWUgbm93b2N6ZXNuZSwga3TDs3JlIGNoYXJha3Rlcnl6dWplIG1pbmltYWxpem0sIGdlb21ldHJpYSBpIGVsZWdhbmNrYSBwcm9zdG90YS4gVHdvcnp5bXkgb2dyb2R5IG1hxYJvb2JzxYJ1Z293ZSwgZG9zdG9zb3dhbmUgZG8gd3Nww7PFgmN6ZXNuZWdvIHRyeWJ1IMW8eWNpYS5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZml0IGJvcmRlci1zb2xpZCBib3JkZXItMiBib3JkZXItWyNGNUYwRUNdIHB4LVsyNHB4XSBweS1bMTJweF0gcm91bmRlZC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNwYWNlLXgtMiB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzaGFkb3cteGwgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUG96bmFqIG5hcyBibGnFvGVqXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9zdmcvYWJvdXRBcnJvd1JpZ2h0LnN2Z1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iLCJjb25zdCBDb250YWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgc2VjdGlvbi5pZCA9ICdjb250YWN0JztcclxuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3B5LVs2MHB4XScsICdoaWRlRWxlbWVudCcsICd0by1kYXJrZW4nKTtcclxuXHJcbiAgc2VjdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImgtZnVsbCBweC02IHB5LTYgdy1mdWxsIGxnOnctYXV0byBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImgtYXV0byBiZy1ncmVlbi05MDAgdy1hdXRvIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgbGc6anVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LVsjRjVGMEVDXSB0ZXh0LVs0MHB4XSBsZWFkaW5nLVs0OHB4XSBzcGFjZS15LTYgcC05IG1kOnB4LTE2IG1kOnB5LTE0IGxnOnB4LVsxMTBweF0gbGc6cHktWzExMHB4XSBsZzpzcGFjZS14LTE2IGxnOml0ZW1zLWVuZFwiPlxyXG4gICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiIHctZnVsbCBsZzp3aGl0ZXNwYWNlLW5vd3JhcCBoLWZ1bGwgZm9udC1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5ab3N0YcWEbXkgdyBrb250YWtjaWUhPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5abmFqZHppZXN6IG5hcyBuYSA8aT48Yj5JbnN0YWdyYW1pZTwvYj48L2k+LjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBsZzpmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kIG1kOml0ZW1zLXN0YXJ0IHctZnVsbCBzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1iYXNlIHctWzE1MHB4XSBsZzp3LVsxNTBweF0gbWQ6dy1hdXRvXCI+xZpsZWTFuiBuYXN6ZSBuYWpub3dzemUgcmVhbGl6YWNqZSE8L2Rpdj5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwicHQtWzEwcHhdIHBiLVsxMnB4XSBweC1bMjRweF0gYmctWyNGNUYwRUNdIHRleHQtZ3JlZW4tOTAwIHJvdW5kZWQtZnVsbCB0ZXh0LWJhc2UgdHJhbnNpdGlvbi1hbGwgaG92ZXI6YmctWyNlY2U3ZTJdIGhvdmVyOnNoYWRvdy1tZFwiPkluc3RhZ3JhbTwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iLCJjb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgZm9vdGVyLmNsYXNzTGlzdCA9IGB0by1kYXJrZW4gYmctYmxhY2sgdy1mdWxsIGgtYXV0byB0ZXh0LXdoaXRlIHB4LVs0MHB4XSBweS1bODBweF0gZmxleC1jb2wgc3BhY2UteS0yMCBtZDpweC02NGA7XHJcbiAgZm9vdGVyLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiZmxleC1jb2wgc3BhY2UteS04XCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInctZnVsbCBmbGV4IGZsZXgtY29sIHhsOmZsZXgtcm93ICBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteS00XCI+XHJcbiAgICAgIFxyXG4gICAgICA8aW1nIHNyYz1cIi4vc3ZnL2dpYXJkZGVzaWduV2hpdGUuc3ZnXCIgYWx0PVwibG9nb1wiIGNsYXNzPVwidy1bMTE1cHhdXCI+XHJcbiAgICAgIDxhc2lkZSBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBoLWF1dG8gZ2FwLTYgdGV4dC1zbSBtZDp0ZXh0LWJhc2UgbGc6dGV4dC1iYXNlIHhsOnRleHQtYmFzZSAyeGw6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1pbi13LVsxMDBweF0gdy1hdXRvIG1kOnctYXV0byBtZDp0ZXh0LWJhc2UgdGV4dC1zbVwiPkRhaiB6bmHEhywgY28gbW/FvGVteSBkbGEgQ2llYmllIHpyb2JpYyE8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwidy1naXQgaC05IGJnLWdyZWVuLTgwMCBweS0yIHB4LTMgcm91bmRlZC1mdWxsIHdoaXRlc3BhY2Utbm93cmFwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGhvdmVyOmJnLWdyZWVuLTkwMCB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzaGFkb3ctbWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC0yIG1kOnB4LTYgcHQtWzEycHhdIHBiLVsxNHB4XVwiPlNrb250YWt0dWogc2nEmSB6IG5hbWk8L2Rpdj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDwvYXNpZGU+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInctZnVsbCBoLVsxcHhdIGJnLXNsYXRlLTMwMFwiPjwvZGl2PlxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmxleCB3LWZ1bGwgbWQ6aC0xMCAgaC1hdXRvIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICA8dWwgY2xhc3M9XCJmbGV4LWNvbCBtZDpmbGV4LXJvdyB4bDpmbGV4IDJ4bDpmbGV4IGxnOmZsZXggZ2FwLThcIiA+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjY29udGFjdFwiPktvbnRha3Q8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5JbnN0YWdyYW08L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5GYWNlYm9vazwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkxpbmtlZGluPC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sICBtZDpmbGV4LXJvdyAgZ2FwLTAgbWQ6Z2FwLTggdy1maXRcIj5cclxuICAgICAgICA8ZGl2PjAwMC0wMDAtMDAwPC9kaXY+XHJcbiAgICAgICAgPGRpdj5naWFyZGRlc2lnbkBrb250YWt0LnBsPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJoLWZ1bGwgbXktYXV0b1wiPlxyXG4gICAgICAgIDxkaXY+UHJhd2EgemFzdHJ6ZcW8b25lIMKpIDIwMjI8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzcGFjZS15LTEgdy0zMCBoLWZ1bGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidy0yMCBcIj5tYWRlIGJ5PC9kaXY+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuL3N2Zy9hZFJlc3BlY3Quc3ZnXCIgYWx0PVwiYWRSZXNwZWN0XCI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImNvbnN0IEhlcm8gPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICBtYWluLmNsYXNzTGlzdC5hZGQoJ2hpZGVFbGVtZW50JywgJ3RvLWRhcmtlbicpO1xyXG4gIG1haW4uaWQgPSAnaGVybyc7XHJcblxyXG4gIG1haW4uaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IHctZnVsbCBoLWF1dG8gbWQ6aC1bOTJ2aF1cIj5cclxuICBcclxuICAgIDxkaXYgY2xhc3M9XCJtZDp3LTEvMiBiZy1bI0RDQzFBQl0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgPGFzaWRlIGNsYXNzPVwibWQ6aC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBtZDp3LWZ1bGwgeGw6dy1bNTk5cHhdIHNwYWNlLXktWzcycHhdIG1kOnNwYWNlLXktMTIgYmctWyNEQ0MxQUJdIHB4LTEwIHB5LTkgbWQ6cHktMTIgaC1bOTJ2aF1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZS15LTExXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtNXhsIG1kOnRleHQtNnhsIHRleHQtWyMxMTExMTFdIGxlYWRpbmctWzUwcHhdIG1kOmxlYWRpbmctWzcwcHhdIGZvbnQtbW9udHNlcnJhdCBmb250LW1lZGl1bVwiPk5vd29jemVzbmEgYXJhbsW8YWNqYSBUd29qZWdvIG9ncm9kdTwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWJhc2UgbGVhZGluZy1ub3JtYWwgZm9udC1pbnRlclwiPk1hcmthIEdpYXJkRGVzaWduIHRvIHdpZWxvbGV0bmllIGRvxZt3aWFkY3plbmllIGkgd3lzb2thIGVzdGV0eWthIHJlYWxpemFjamkuIE9mZXJ1amVteSBrb21wbGVrc293eSB6YWtyZXMgdXPFgnVnIHogaW5keXdpZHVhbG55bSBwb2RlasWbY2llbSBkbyBrYcW8ZGVnbyBwcm9qZWt0dS48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZzp3LWZ1bGwgZmxleCBmbGV4LWNvbCBzcGFjZS15LTMgbGc6ZmxleC1yb3cganVzdGlmeS1zdGFydCB3LWZ1bGwgbWQ6dy1hdXRvIG1kOmp1c3RpZnktYmV0d2VlbiBbJj5hXTpjdXJzb3ItcG9pbnRlciBsZzpzcGFjZS15LTAgbGc6c3BhY2UteC05XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJnLWdyZWVuLTgwMCB0ZXh0LXdoaXRlIHB4LTYgcHQtWzEycHhdIHBiLVsxNHB4XSByb3VuZGVkLWZ1bGwgdy1maXQgaG92ZXI6c2hhZG93LW1kIGxnOndoaXRlc3BhY2Utbm93cmFwIGhvdmVyOmJnLWdyZWVuLTkwMCB0cmFuc2l0aW9uLWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICBTa29udGFrdHVqIHNpxJkgeiBuYW1pXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNyZWFsaXphY2plXCIgY2xhc3M9XCJmbGV4IHctZml0IGJvcmRlci1zb2xpZCBib3JkZXItMiBib3JkZXItZ3JlZW4tODAwIHB4LVsyMnB4XSBwdC1bMTJweF0gcGItWzE0cHhdIHJvdW5kZWQtZnVsbCB0ZXh0LWdyZWVuLTgwMCB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzaGFkb3cteGxcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNwYWNlLXgtWzhweF1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwid2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWm9iYWN6IG5hc3plIHJlYWxpemFjamVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9zdmcvaGVyb0Fycm93RG93bi5zdmdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXNpZGU+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImgtWzkydmhdIG1kOmgtYXV0byB3LWZ1bGwgbWQ6dy0xLzIgcmVsYXRpdmUgYmctWyNGNUYwRUNdIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiMS5qcGdcIiBjbGFzcz1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyXCIgaWQ9XCJpbWctc2xpZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggYm90dG9tLTAgcmlnaHQtMCBhYnNvbHV0ZSBweC04IHB5LTYgc3BhY2UteC04IGJnLVsjRjVGMEVDXVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidy1bNTBweF0gaC1bNTBweF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIiBpZD1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9zdmcvc2xpZGVyTGVmdC5zdmdcIiBhbHQ9XCJQb3ByemVkbmllIHpkasSZY2llXCI+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidy1bNTBweF0gaC1bNTBweF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIiBpZD1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vc3ZnL3NsaWRlclJpZ2h0LnN2Z1wiIGFsdD1cIk5hc3TEmXBuZSB6ZGrEmWNpZVwiPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgXHJcbiAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcclxuXHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltZy1zbGlkZXInKTtcclxuICBjb25zdCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JpZ2h0Jyk7XHJcbiAgY29uc3QgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0Jyk7XHJcbiAgY29uc3QgaW1hZ2VzID0gW1xyXG4gICAgJzEuanBnJyxcclxuICAgICdhYm91dFBob3RvLnBuZycsXHJcbiAgICAncHJvamVjdHNJbWFnZXMvaW1nMi5qcGcnLFxyXG4gICAgJ3Byb2plY3RzSW1hZ2VzL2ltZzMuanBnJyxcclxuICAgICdwcm9qZWN0c0ltYWdlcy9pbWc0LmpwZycsXHJcbiAgICAncHJvamVjdHNJbWFnZXMvaW1nNi5qcGcnLFxyXG4gICAgJ3Byb2plY3RzSW1hZ2VzL2ltZzkuanBnJ1xyXG4gIF07XHJcbiAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNsaWRlckltYWdlID0gKGluZGV4LCBhdXRvID0gdHJ1ZSwgdHlwZSA9ICcnKSA9PiB7XHJcbiAgICBpbWcuc3JjID0gaW1hZ2VzW2luZGV4XTtcclxuICAgIGlmICh0eXBlID09PSAnbmV4dCcgfHwgdHlwZSA9PT0gJycpIHtcclxuICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtc2xpZGVUb3AnLCAnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGF1dG8pIHtcclxuICAgICAgY29uc3QgaW1nVG9BbmltYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW3NyYz0nJHtpbWFnZXNbaW5kZXhdfSddYCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGltZ1RvQW5pbWF0ZS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLXNsaWRlTGVmdCcpO1xyXG4gICAgICB9LCAyNTAwKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGltZ1RvQW5pbWF0ZS5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLXNsaWRlTGVmdCcpO1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnbmV4dCcgfHwgdHlwZSA9PT0gJycpIHtcclxuICAgICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLXNsaWRlVG9wJywgJ2FuaW1hdGUtb3BhY2l0eScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAzMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICduZXh0JyB8fCB0eXBlID09PSAnJykge1xyXG4gICAgICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtc2xpZGVUb3AnLCAnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLW9wYWNpdHknKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDMwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChjdXJyZW50SW5kZXggPT09IGltYWdlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICAgIHVwZGF0ZVNsaWRlckltYWdlKGN1cnJlbnRJbmRleCk7XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA8IGltYWdlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIGN1cnJlbnRJbmRleCsrO1xyXG4gICAgICB1cGRhdGVTbGlkZXJJbWFnZShjdXJyZW50SW5kZXgsIGZhbHNlLCAnbmV4dCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gMCkge1xyXG4gICAgICBjdXJyZW50SW5kZXggPSBpbWFnZXMubGVuZ3RoIC0gMTtcclxuICAgICAgdXBkYXRlU2xpZGVySW1hZ2UoY3VycmVudEluZGV4KTtcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudEluZGV4ID4gMCkge1xyXG4gICAgICBjdXJyZW50SW5kZXgtLTtcclxuICAgICAgdXBkYXRlU2xpZGVySW1hZ2UoY3VycmVudEluZGV4LCBmYWxzZSwgJ3ByZXYnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gaW1hZ2VzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgY3VycmVudEluZGV4ID0gMDtcclxuICAgICAgdXBkYXRlU2xpZGVySW1hZ2UoY3VycmVudEluZGV4KTtcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudEluZGV4IDwgaW1hZ2VzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgY3VycmVudEluZGV4Kys7XHJcbiAgICAgIHVwZGF0ZVNsaWRlckltYWdlKGN1cnJlbnRJbmRleCk7XHJcbiAgICB9XHJcbiAgfSwgMzAwMCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iLCJjb25zdCBzZWFyY2hGaWVsZCA9IChoaWRlKSA9PiB7XHJcbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtaWNvbicpO1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1pbnB1dCcpO1xyXG4gIGxldCBpc0hpZGRlbiA9IGhpZGU7XHJcbiAgc2VhcmNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChpc0hpZGRlbikge1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdsZzpoaWRkZW4nKTtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnbGc6YW5pbWF0ZS1oaWRlSW5wdXQnKTtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnbGc6YW5pbWF0ZS1leHBhbmRJbnB1dCcpO1xyXG4gICAgICBpc0hpZGRlbiA9ICFpc0hpZGRlbjtcclxuICAgICAgc2VhcmNoSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdsZzphbmltYXRlLXJvdGF0ZVJpZ2h0Jyk7XHJcbiAgICAgIHNlYXJjaEljb24uY2xhc3NMaXN0LmFkZCgnbGc6YW5pbWF0ZS1yb3RhdGVMZWZ0Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZWFyY2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2xnOmFuaW1hdGUtcm90YXRlTGVmdCcpO1xyXG4gICAgICBzZWFyY2hJY29uLmNsYXNzTGlzdC5hZGQoJ2xnOmFuaW1hdGUtcm90YXRlUmlnaHQnKTtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnbGc6YW5pbWF0ZS1leHBhbmRJbnB1dCcpO1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdsZzphbmltYXRlLWhpZGVJbnB1dCcpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdsZzpoaWRkZW4nKTtcclxuICAgICAgfSwgNTMwKTtcclxuICAgICAgaXNIaWRkZW4gPSAhaXNIaWRkZW47XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBtb2JpbGVNZW51ID0gKGhpZGUpID0+IHtcclxuICBsZXQgaGlkZGVuID0gaGlkZTtcclxuICBjb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1cmdlci1tZW51Jyk7XHJcbiAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlua3MnKTtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtaW5wdXQnKTtcclxuICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wZG93bicpO1xyXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0Jyk7XHJcbiAgY29uc3QgcmVhbGl6YXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlYWxpemF0aW9ucycpO1xyXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdCcpO1xyXG5cclxuICBidXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgdG9EYXJrZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZGFya2VuJyk7XHJcbiAgICBpZiAoaGlkZGVuKSB7XHJcbiAgICAgIHRvRGFya2VuLmZvckVhY2goKGRhcmspID0+IHtcclxuICAgICAgICBkYXJrLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVFbGVtZW50JywgJ3Nob3dFbGVtZW50Jyk7XHJcbiAgICAgICAgZGFyay5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLWFsbCcsICdvcGFjaXR5LTUwJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBsaW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgcmVhbGl6YXRpb25zLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG4gICAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLXNob3dNb2JpbGVNZW51Jyk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdmbGV4Jyk7XHJcblxyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJyk7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1leHBhbmRJbnB1dCcpO1xyXG5cclxuICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBhYm91dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICByZWFsaXphdGlvbnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICAgICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICAgICAgcmVhbGl6YXRpb25zLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtb3BhY2l0eScpO1xyXG4gICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICAgICAgICBhYm91dC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLW9wYWNpdHknKTtcclxuICAgICAgICAgIHJlYWxpemF0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLW9wYWNpdHknKTtcclxuICAgICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICAgICAgICBsaW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLXNob3dNb2JpbGVNZW51Jyk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgICAgfSwgMzAwKTtcclxuXHJcbiAgICAgIGhpZGRlbiA9ICFoaWRkZW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b0Rhcmtlbi5mb3JFYWNoKChkYXJrKSA9PiB7XHJcbiAgICAgICAgZGFyay5jbGFzc0xpc3QuYWRkKCdoaWRlRWxlbWVudCcsICdzaG93RWxlbWVudCcpO1xyXG4gICAgICAgIGRhcmsuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNpdGlvbi1hbGwnLCAnb3BhY2l0eS01MCcpO1xyXG4gICAgICB9KTtcclxuICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgcmVhbGl6YXRpb25zLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtZGVjcmVhc2VPcGFjaXR5Jyk7XHJcbiAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1oaWRlSW5wdXQnKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtaGlkZU1vYmlsZU1lbnUnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGxpbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtaGlkZU1vYmlsZU1lbnUnKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgICAgICAgYWJvdXQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgICAgICAgcmVhbGl6YXRpb25zLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtZGVjcmVhc2VPcGFjaXR5Jyk7XHJcbiAgICAgICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1oaWRlSW5wdXQnKTtcclxuICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH0sIDI3MCk7XHJcbiAgICAgIH0sIDI3MCk7XHJcblxyXG4gICAgICBoaWRkZW4gPSAhaGlkZGVuO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gIG5hdmJhci5jbGFzc0xpc3QgPVxyXG4gICAgJ2hpZGVFbGVtZW50IGJnLXdoaXRlIHctZnVsbCBweC02IHB5LTMgbGc6cC02IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBzdGlja3kgdG9wLTAgei0xMCBoLVs4dmhdJztcclxuXHJcbiAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBsb2dvQ29udGFpbmVyLnRleHRDb250ZW50ID0gJ0xvZ28nO1xyXG4gIGxvZ29Db250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgPGEgaHJlZj1cIiNoZXJvXCI+XHJcbiAgICAgIDxpbWcgc3JjPVwiLi9zdmcvZ2lhcmRkZXNpZ24uc3ZnXCIgYWx0PVwiTG9nb1wiPlxyXG4gICAgPC9hPlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGlua3MuaWQgPSAnbGlua3MnO1xyXG4gIGxpbmtzLmNsYXNzTGlzdCA9XHJcbiAgICAnbGc6ZmxleCB0ZXh0LVsjMTExMTExXSBsZzpnYXAtMTAgZ2FwLTMgWyY+Kl06Y3Vyc29yLXBvaW50ZXIgbGc6ZmxleC1yb3cgbGc6cmVsYXRpdmUgbGc6bS0wIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgbGc6anVzdGlmeS1jZW50ZXIgbGc6aXRlbXMtY2VudGVyIGZpeGVkIG10LVs0NTBweF0gcm91bmRlZC14bCBweS01IHB4LTYgbGc6cC0wIGJnLXdoaXRlIGZsZXggZmxleC1jb2wgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiB3LVs4NXZ3XSBzaGFkb3cteGwgbGc6c2hhZG93LW5vbmUgbGc6dy1hdXRvIGxnOmxlZnQtMCBsZzp0cmFuc2xhdGUteC0wIGhpZGRlbiBhbmltYXRlLXNob3dNb2JpbGVNZW51IGxnOmFuaW1hdGUtbm9uZSBmb250LWludGVyJztcclxuXHJcbiAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkcm9wZG93bi5pZCA9ICdkcm9wZG93bic7XHJcbiAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24nLCAnZmxleCcsICdmbGV4LWNvbCcsICdncm91cCcpO1xyXG5cclxuICBjb25zdCBvZmZlcnNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIG9mZmVyc0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyNvZmZlcnMnKTtcclxuICBvZmZlcnNMaW5rLmlkID0gJ29mZmVyJztcclxuICBvZmZlcnNMaW5rLnRleHRDb250ZW50ID0gJ09mZXJ0YSc7XHJcbiAgb2ZmZXJzTGluay5jbGFzc0xpc3QgPVxyXG4gICAgJ29mZmVycyBmbGV4IGdhcC0yIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgbGc6anVzdGlmeS1jZW50ZXIgbGc6aXRlbXMtY2VudGVyIGgtYXV0byBncm91cCBhbmltYXRlLW9wYWNpdHknO1xyXG5cclxuICBjb25zdCBhcnJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFycm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAnZ3JvdXAtaG92ZXI6cm90YXRlLTE4MCcsXHJcbiAgICAndHJhbnNpdGlvbi1hbGwnLFxyXG4gICAgJ2hpZGRlbicsXHJcbiAgICAnbGc6YmxvY2snXHJcbiAgKTtcclxuICBhcnJvd0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgPGltZyBzcmM9XCIuL3N2Zy9hcnJvd0Rvd24uc3ZnXCIgYWx0PVwiUm96d2nFhFwiPlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IG9mZmVyc0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvZmZlcnNMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAnb2ZmZXJzLWxpc3QnLFxyXG4gICAgJ3ctYXV0bycsXHJcbiAgICAnaC1hdXRvJyxcclxuICAgICdsZzpweS01JyxcclxuICAgICdsZzpweC02JyxcclxuICAgICdsZzpiZy13aGl0ZScsXHJcbiAgICAnbGc6bXQtWy0yMDBweF0nLFxyXG4gICAgJ2xnOmdyb3VwLWhvdmVyOm10LVsyNHB4XScsXHJcbiAgICAnbGc6c2hhZG93LXhsJyxcclxuICAgICdsZzpyb3VuZGVkLW1kJyxcclxuICAgICdsZzphYnNvbHV0ZScsXHJcbiAgICAnei1bLTEwMF0nLFxyXG4gICAgJ2xnOmJvcmRlci1ub25lJyxcclxuICAgICdib3JkZXItbC0yJyxcclxuICAgICdib3JkZXItc2xhdGUtMzAwJyxcclxuICAgICd0cmFuc2l0aW9uLWFsbCcsXHJcbiAgICAnbGc6bS0wJyxcclxuICAgICdtbC01JyxcclxuICAgICdtdC0yJ1xyXG4gICk7XHJcbiAgY29uc3Qgb2ZmZXJzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgb2ZmZXJzTGlzdC5pZCA9ICdvZmZlcnMtbGlzdCc7XHJcbiAgb2ZmZXJzTGlzdC5jbGFzc0xpc3QuYWRkKCdzcGFjZS15LTInLCAnbGc6dGV4dC1jZW50ZXInLCAncmVsYXRpdmUnKTtcclxuICBjb25zdCBvZmZlckVsZW1lbnRPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGNvbnN0IG9mZmVyRWxlbWVudFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgY29uc3Qgb2ZmZXJFbGVtZW50VGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIG9mZmVyRWxlbWVudE9uZS5pbm5lckhUTUwgPSBgXHJcbiAgPGEgaHJlZj1cIiNQcm9qZWt0eVwiPlByb2pla3R5PC9hPlxyXG4gIGA7XHJcbiAgb2ZmZXJzTGlzdC5hcHBlbmRDaGlsZChvZmZlckVsZW1lbnRPbmUpO1xyXG4gIG9mZmVyRWxlbWVudFR3by5pbm5lckhUTUwgPSBgXHJcbiAgPGEgaHJlZj1cIiNXaXp1YWxpemFjamVcIj5XaXp1YWxpemFjamU8L2E+XHJcbiAgYDtcclxuICBvZmZlcnNMaXN0LmFwcGVuZENoaWxkKG9mZmVyRWxlbWVudFR3byk7XHJcbiAgb2ZmZXJFbGVtZW50VGhyZWUuaW5uZXJIVE1MID0gYFxyXG4gIDxhIGhyZWY9XCIjUmVhbGl6YWNqZVwiPlJlYWxpemFjamU8L2E+XHJcbiAgYDtcclxuICBvZmZlcnNMaXN0LmFwcGVuZENoaWxkKG9mZmVyRWxlbWVudFRocmVlKTtcclxuXHJcbiAgb2ZmZXJzTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChvZmZlcnNMaXN0KTtcclxuXHJcbiAgb2ZmZXJzTGluay5hcHBlbmRDaGlsZChhcnJvd0NvbnRhaW5lcik7XHJcblxyXG4gIGRyb3Bkb3duLmFwcGVuZENoaWxkKG9mZmVyc0xpbmspO1xyXG4gIGRyb3Bkb3duLmFwcGVuZENoaWxkKG9mZmVyc0xpc3RDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBhYm91dExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgYWJvdXRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjYWJvdXQnKTtcclxuICBhYm91dExpbmsuY2xhc3NMaXN0LmFkZChcclxuICAgICdhbmltYXRlLW9wYWNpdHknLFxyXG4gICAgJ2dyb3VwL3RleHQnLFxyXG4gICAgJ2JveC1ib3JkZXInLFxyXG4gICAgJ2Fib3V0J1xyXG4gICk7XHJcbiAgYWJvdXRMaW5rLmlubmVySFRNTCA9IGBcclxuICA8c3Bhbj5PIGZpcm1pZTwvc3Bhbj5cclxuICA8ZGl2IGNsYXNzPVwidy0wIGgtWzJweF0gYmctc2xhdGUtODAwIHRyYW5zaXRpb24tYWxsIGdyb3VwLWhvdmVyL3RleHQ6dy1mdWxsIGdyb3VwLWhvdmVyL3RleHQ6aC1bMnB4XVwiPjwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IHJlZ2lzdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICByZWdpc3Rlckxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyNyZWFsaXphdGlvbnMnKTtcclxuICByZWdpc3RlckxpbmsuY2xhc3NMaXN0LmFkZChcclxuICAgICd0ZXh0LWNlbnRlcicsXHJcbiAgICAnYW5pbWF0ZS1vcGFjaXR5JyxcclxuICAgICdncm91cC90ZXh0JyxcclxuICAgICdib3gtYm9yZGVyJyxcclxuICAgICdyZWFsaXphdGlvbnMnXHJcbiAgKTtcclxuICByZWdpc3RlckxpbmsuaW5uZXJIVE1MID0gYFxyXG4gIDxzcGFuPlJlYWxpemFjamU8L3NwYW4+XHJcbiAgPGRpdiBjbGFzcz1cInctMCBoLVsycHhdIGJnLXNsYXRlLTgwMCB0cmFuc2l0aW9uLWFsbCBncm91cC1ob3Zlci90ZXh0OnctZnVsbCBncm91cC1ob3Zlci90ZXh0OmgtWzJweF1cIj48L2Rpdj5cclxuICBgO1xyXG5cclxuICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBjb250YWN0TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI2NvbnRhY3QnKTtcclxuICBjb250YWN0TGluay5jbGFzc0xpc3QuYWRkKFxyXG4gICAgJ2FuaW1hdGUtb3BhY2l0eScsXHJcbiAgICAnZ3JvdXAvdGV4dCcsXHJcbiAgICAnYm94LWJvcmRlcicsXHJcbiAgICAnY29udGFjdCdcclxuICApO1xyXG4gIGNvbnRhY3RMaW5rLmlubmVySFRNTCA9IGBcclxuICA8c3Bhbj5Lb250YWt0PC9zcGFuPlxyXG4gIDxkaXYgY2xhc3M9XCJ3LTAgaC1bMnB4XSBiZy1zbGF0ZS04MDAgdHJhbnNpdGlvbi1hbGwgZ3JvdXAtaG92ZXIvdGV4dDp3LWZ1bGwgZ3JvdXAtaG92ZXIvdGV4dDpoLVsycHhdXCI+PC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZWFyY2gnKTtcclxuICBzZWFyY2hJbnB1dC5pZCA9ICdzZWFyY2gtaW5wdXQnO1xyXG4gIHNlYXJjaElucHV0LmNsYXNzTGlzdCA9XHJcbiAgICAnYmctdHJhbnNwYXJlbnQgaC1hdXRvIG91dGxpbmUtbm9uZSBwLTAuNSBib3JkZXItYi0yIGJvcmRlci1ibGFjayBsZzpoaWRkZW4gdy00MCBib3gtYm9yZGVyJztcclxuXHJcbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc2VhcmNoQ29udGFpbmVyLmNsYXNzTGlzdCA9IGBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWZ1bGwgaGlkZGVuIGxnOmJsb2NrIGFuaW1hdGUtb3BhY2l0eWA7XHJcbiAgc2VhcmNoQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICA8aW1nIHNyYz1cIi4vc3ZnL3NlYXJjaC5zdmdcIiBhbHQ9XCJTenVrYWpcIiBpZD1cInNlYXJjaC1pY29uXCI+XHJcbiAgYDtcclxuXHJcbiAgY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJ1cmdlck1lbnUuY2xhc3NMaXN0ID0gJ2xnOmhpZGRlbic7XHJcbiAgYnVyZ2VyTWVudS5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cInNwYWNlLXktMiBjdXJzb3ItcG9pbnRlclwiIGlkPVwiYnVyZ2VyLW1lbnVcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdy04IGgtWzAuMnJlbV0gYmctZ3JheS02MDBcIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHctOCBoLVswLjJyZW1dIGJnLWdyYXktNjAwXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJibG9jayB3LTUgaC1bMC4ycmVtXSBiZy1ncmF5LTYwMFwiPjwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICBsaW5rcy5hcHBlbmRDaGlsZChkcm9wZG93bik7XHJcbiAgbGlua3MuYXBwZW5kQ2hpbGQoYWJvdXRMaW5rKTtcclxuICBsaW5rcy5hcHBlbmRDaGlsZChyZWdpc3RlckxpbmspO1xyXG4gIGxpbmtzLmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcclxuICBsaW5rcy5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XHJcbiAgbGlua3MuYXBwZW5kQ2hpbGQoc2VhcmNoQ29udGFpbmVyKTtcclxuICBuYXZiYXIuYXBwZW5kQ2hpbGQobG9nb0NvbnRhaW5lcik7XHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGxpbmtzKTtcclxuICBuYXZiYXIuYXBwZW5kQ2hpbGQoYnVyZ2VyTWVudSk7XHJcblxyXG4gIGNvbnN0IG9mZmVyc0NoaWxkcmVuID0gb2ZmZXJzTGlzdC5jaGlsZE5vZGVzO1xyXG4gIG9mZmVyc0NoaWxkcmVuLmZvckVhY2goKG9mZmVyKSA9PiB7XHJcbiAgICBvZmZlci5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAncHgtMicsXHJcbiAgICAgICdweS0wLjUnLFxyXG4gICAgICAnaG92ZXI6Ymctc2xhdGUtMTAwJyxcclxuICAgICAgJ2hvdmVyOnB4LTInLFxyXG4gICAgICAnaG92ZXI6cHktMC41JyxcclxuICAgICAgJ2hvdmVyOnJvdW5kZWQtbWQnLFxyXG4gICAgICAnaG92ZXI6c2hhZG93LXNtJyxcclxuICAgICAgJ3RyYW5zaXRpb24tYWxsJ1xyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuYXZiYXIpO1xyXG5cclxuICBjb25zdCBpc0hpZGRlbiA9IHRydWU7XHJcbiAgc2VhcmNoRmllbGQoaXNIaWRkZW4pO1xyXG4gIG1vYmlsZU1lbnUoaXNIaWRkZW4pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iLCJjb25zdCBPZmZlciA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGljb24pID0+IHtcclxuICBjb25zdCBvZmZlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vZmZlcnMtdmlldycpO1xyXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlLmlkID0gdGl0bGU7XHJcbiAgcGFnZS5pbm5lckhUTUwgPSBgXHJcbjxkaXYgY2xhc3M9XCJ3LWF1dG8gaC1hdXRvIGdyb3VwXCI+XHJcblxyXG48ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gYmctd2hpdGUgIHctNzIgbWluLWgtWzQxMnB4XSBoLWF1dG8geGw6dy1bMzcwcHhdIHB5LTEyIHB4LTEwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgZ3JvdXAtaG92ZXI6W3RyYW5zZm9ybTpyb3RhdGVZKDM2MGRlZyldIGN1cnNvci1wb2ludGVyIGhvdmVyOnNjYWxlLTEwNSBncm91cC1ob3ZlcjpzaGFkb3cteGxcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJzcGFjZS15LThcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1bNDBweF0gaC1bNDBweF1cIj5cclxuICAgICAgICAgICAgJHtpY29ufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZS15LTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kOnRleHQtMnhsIHRleHQteGwgZm9udC1tb250c2VycmF0IGZvbnQtbWVkaXVtXCI+JHt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtYmFzZVwiPiR7ZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIHctZml0IGN1cnNvci1wb2ludGVyIGdyb3VwL3RleHRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmVlbi04MDAgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgYm9yZGVyLWItMiBib3JkZXItZ3JlZW4tODAwIG1kOmJvcmRlci1ub25lXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZDp0ZXh0LWJhc2UgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgRG93aWVkeiBzacSZIHdpxJljZWpcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vc3ZnL29mZmVyQXJyb3dSaWdodC5zdmdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LTAgaC0wIGJnLWdyZWVuLTgwMCB0cmFuc2l0aW9uLWFsbCBncm91cC1ob3Zlci90ZXh0OnctZnVsbCBncm91cC1ob3Zlci90ZXh0OmgtWzJweF1cIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG4gIGA7XHJcbiAgb2ZmZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPZmZlcjtcclxuIiwiaW1wb3J0IE9mZmVyIGZyb20gJy4vb2ZmZXInO1xyXG5cclxuY29uc3QgT2ZmZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgc2VjdGlvbi5pZCA9ICdvZmZlcnMnO1xyXG4gIHNlY3Rpb24uY2xhc3NMaXN0ID1cclxuICAgICd0by1kYXJrZW4gaGlkZUVsZW1lbnQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2wgdy1mdWxsIG1kOmgtYXV0byBzcGFjZS15LTEwIGJnLVsjRjVGMEVDXSBwLTUgcHktMTAgcHQtWzEyMHB4XSBwYi1bMTYwcHhdIHNwYWNlLXktWzk2cHhdJztcclxuXHJcbiAgc2VjdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cIm1heC13LVsxMDQwcHhdIGZsZXgtY29sIHNwYWNlLXktNSB3LTMvNCBtLWF1dG8gdGV4dC1bIzExMTExMV1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXhzIHRleHQtZ3JlZW4tODAwXCI+T2ZlcnRhPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWQ6dGV4dC01eGwgdGV4dC0zeGwgbGVhZGluZy1bNTUuMjBweF0gZm9udC1tb250c2VycmF0IGZvbnQtbWVkaXVtXCI+RHppYcWCYW15IDxpPmtvbXBsZWtzb3dvPC9pPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInctZnVsbCB0ZXh0LWJhc2UgbGVhZGluZy02XCI+XHJcbiAgICAgICAgT2ZlcnVqZW15IGtvbXBsZXRuxIUgb2JzxYJ1Z8SZIGlud2VzdHljamkgdGVyZW7Ds3cgemllbG9ueWNoLiBQcm9qZWt0dWplbXkgbm93b2N6ZXNuZSBvZ3JvZHkgcHJ6eWRvbW93ZSBvcmF6IHJlenlkZW5jam9uYWxuZS4gU3R3b3J6eW15IGRsYSBDaWViaWUgcHJvamVrdCwgendpenVhbGl6dWplbXkgZ28gaSB3Y2llbGlteSB3IMW8eWNpZSwgYSBuYSBrYcW8ZHltIGV0YXBpZSBwb3PFgnXFvHlteSByYWTEhSBpIHdpZWxvbGV0bmltIGRvxZt3aWFkY3plbmllbS4gXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImhpZGVFbGVtZW50IG9mZmVycy12aWV3IGdyaWQgZ3JpZC1jb2xzLTEgcGxhY2UtaXRlbXMtY2VudGVyIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC0xNiB3LWF1dG8gaC1mdWxsIG1heC13LVsxNDQwcHhdIG1heC1weC1bODhweF1cIj48L2Rpdj5cclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG5cclxuICBjb25zdCBmaXJzdE9mZmVyVGl0bGUgPSAnUHJvamVrdHknO1xyXG4gIGNvbnN0IGZpcnN0T2ZmZXJEZXNjcmlwdGlvbiA9XHJcbiAgICAnWmFwcm9qZWt0dWplbXkgVHfDs2ogb2dyw7NkIHcgbm93b2N6ZXNueW0gc3R5bHUgaSB6IG5hamxlcHN6eW0gd3lrb3J6eXN0YW5pZW0gaXN0bmllasSFY2VqIHByemVzdHJ6ZW5pLic7XHJcbiAgY29uc3QgZmlyc3RPZmZlckljb24gPSBgPGltZyBzcmM9XCIuL3N2Zy9wcm9qZWN0c0ljb24uc3ZnXCIgYWx0PVwiXCI+YDtcclxuICBPZmZlcihmaXJzdE9mZmVyVGl0bGUsIGZpcnN0T2ZmZXJEZXNjcmlwdGlvbiwgZmlyc3RPZmZlckljb24pO1xyXG5cclxuICBjb25zdCBzZWNvbmRPZmZlclRpdGxlID0gJ1dpenVhbGl6YWNqZSc7XHJcbiAgY29uc3Qgc2Vjb25kT2ZmZXJEZXNjcmlwdGlvbiA9XHJcbiAgICAnUHJ6ZWRzdGF3aW15IENpIHByb2pla3R5IGtvbmNlcGN5am5lIHcgcG9zdGFjaSB3aXJ0dWFsbmVnbyBzcGFjZXJ1IGFuaW1vd2FuZWdvIHcgdGVjaG5vbG9naWkgM0QuJztcclxuICBjb25zdCBzZWNvbmRPZmZlckljb24gPSBgPGltZyBzcmM9XCIuL3N2Zy92aXN1YWxJY29uLnN2Z1wiIGFsdD1cIlwiPmA7XHJcbiAgT2ZmZXIoc2Vjb25kT2ZmZXJUaXRsZSwgc2Vjb25kT2ZmZXJEZXNjcmlwdGlvbiwgc2Vjb25kT2ZmZXJJY29uKTtcclxuXHJcbiAgY29uc3QgdGhpcmRPZmZlclRpdGxlID0gJ1JlYWxpemFjamUnO1xyXG4gIGNvbnN0IHRoaXJkT2ZmZXJEZXNjcmlwdGlvbiA9XHJcbiAgICAnWnJlYWxpenVqZW15IFR3b2plIG1hcnplbmllIHByenkgdcW8eWNpdSBuYWpub3dzenljaCByb3p3acSFemHFhCBpIHphYXdhbnNvd2FueWNoIHRlY2hub2xvZ2lpLic7XHJcbiAgY29uc3QgdGhpcmRPZmZlckljb24gPSBgPGltZyBzcmM9XCIuL3N2Zy9yZWFsaXphdGlvbnNJY29uLnN2Z1wiIGFsdD1cIlwiPmA7XHJcbiAgT2ZmZXIodGhpcmRPZmZlclRpdGxlLCB0aGlyZE9mZmVyRGVzY3JpcHRpb24sIHRoaXJkT2ZmZXJJY29uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9mZmVycztcclxuIiwiaW1wb3J0IE1hY3kgZnJvbSAnbWFjeSc7XHJcblxyXG5jb25zdCBoaWRlR2FsbGVyeSA9IChtYWN5KSA9PiB7XHJcbiAgY29uc3QgZXhwYW5kQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cGFuZCcpO1xyXG4gIGNvbnN0IGJsdXJCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZ0JsdXJlZCcpO1xyXG4gIGNvbnN0IHJlYWxpemF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWFsaXphdGlvbnMtY29udGFpbmVyJyk7XHJcbiAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlcycpO1xyXG4gIGNvbnN0IGhpZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGlkZS1nYWxsZXJ5Jyk7XHJcbiAgY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5Jyk7XHJcblxyXG4gIGdhbGxlcnkuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICd3LVs4NXZ3XScsXHJcbiAgICAnYmctd2hpdGUnLFxyXG4gICAgJ2gtWzgwdmhdJyxcclxuICAgICdmaXhlZCcsXHJcbiAgICAnc2hhZG93LXhsJyxcclxuICAgICd0b3AtMS8yJyxcclxuICAgICdsZWZ0LTEvMicsXHJcbiAgICAnLXRyYW5zbGF0ZS14LTEvMicsXHJcbiAgICAnLXRyYW5zbGF0ZS15LTEvMicsXHJcbiAgICAncC01JyxcclxuICAgICdyb3VuZGVkLXhsJyxcclxuICAgICdzaGFkb3cteGwnLFxyXG4gICAgJ20tMCcsXHJcbiAgICAnb3ZlcmZsb3cteS1zY3JvbGwnLFxyXG4gICAgJ2FuaW1hdGUtb3BhY2l0eSdcclxuICApO1xyXG4gIGltYWdlcy5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLW9wYWNpdHknKTtcclxuICByZWFsaXphdGlvbnMuY2xhc3NMaXN0LmFkZCgnbWQ6aC1bMTgyNHB4XScpO1xyXG4gIGltYWdlcy5jbGFzc0xpc3QuYWRkKCdtZDpoLVsxNDc1cHhdJyk7XHJcbiAgaW1hZ2VzLmNsYXNzTGlzdC5hZGQoJ2gtWzEwMDBweF0nKTtcclxuICBibHVyQmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgaW1hZ2VzLmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LWhpZGRlbicpO1xyXG4gIGV4cGFuZEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICBoaWRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIGhpZGVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZmxleCcpO1xyXG4gIG1hY3kucnVuT25JbWFnZUxvYWQoKTtcclxufTtcclxuXHJcbmNvbnN0IGV4cGFuZEdhbGxlcnkgPSAobWFjeSkgPT4ge1xyXG4gIGNvbnN0IGV4cGFuZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleHBhbmQnKTtcclxuICBjb25zdCBpbWFnZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IGJsdXJCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZ0JsdXJlZCcpO1xyXG4gIGNvbnN0IHJlYWxpemF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWFsaXphdGlvbnMtY29udGFpbmVyJyk7XHJcbiAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlcycpO1xyXG4gIGNvbnN0IGhpZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGlkZS1nYWxsZXJ5Jyk7XHJcbiAgY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5Jyk7XHJcblxyXG4gIGV4cGFuZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGltYWdlcy5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLW9wYWNpdHknKTtcclxuICAgIGdhbGxlcnkuY2xhc3NMaXN0LmFkZChcclxuICAgICAgJ3ctWzg1dnddJyxcclxuICAgICAgJ2JnLXdoaXRlJyxcclxuICAgICAgJ2gtWzgwdmhdJyxcclxuICAgICAgJ2ZpeGVkJyxcclxuICAgICAgJ3NoYWRvdy14bCcsXHJcbiAgICAgICd0b3AtMS8yJyxcclxuICAgICAgJ2xlZnQtMS8yJyxcclxuICAgICAgJy10cmFuc2xhdGUteC0xLzInLFxyXG4gICAgICAnLXRyYW5zbGF0ZS15LTEvMicsXHJcbiAgICAgICdwLTUnLFxyXG4gICAgICAncm91bmRlZC14bCcsXHJcbiAgICAgICdzaGFkb3cteGwnLFxyXG4gICAgICAnbS0wJyxcclxuICAgICAgJ292ZXJmbG93LXktc2Nyb2xsJyxcclxuICAgICAgJ2FuaW1hdGUtb3BhY2l0eSdcclxuICAgICk7XHJcblxyXG4gICAgcmVhbGl6YXRpb25zLmNsYXNzTGlzdC5yZW1vdmUoJ21kOmgtWzE4MjRweF0nKTtcclxuICAgIHJlYWxpemF0aW9ucy5jbGFzc0xpc3QuYWRkKCdoLWF1dG8nKTtcclxuICAgIGltYWdlcy5jbGFzc0xpc3QucmVtb3ZlKCdtZDpoLVsxNDc1cHhdJyk7XHJcbiAgICBpbWFnZXMuY2xhc3NMaXN0LnJlbW92ZSgnaC1bMTAwMHB4XScpO1xyXG4gICAgYmx1ckJnLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgZXhwYW5kQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgaGlkZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIGhpZGVCdG4uY2xhc3NMaXN0LmFkZCgnZmxleCcpO1xyXG4gICAgbWFjeS5ydW5PbkltYWdlTG9hZCgpO1xyXG4gICAgaGlkZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaGlkZUdhbGxlcnkobWFjeSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IFJlYWxpemF0aW9ucyA9ICgpID0+IHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIHNlY3Rpb24uaWQgPSAncmVhbGl6YXRpb25zJztcclxuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAnYmctWyNEQ0MxQUJdJyxcclxuICAgICd3LWZ1bGwnLFxyXG4gICAgJ21kOmgtWzE4MjRweF0nLFxyXG4gICAgJ2gtYXV0bycsXHJcbiAgICAncHQtWzEyMHB4XScsXHJcbiAgICAncGItMTEnLFxyXG4gICAgJ3JlYWxpemF0aW9ucy1jb250YWluZXInLFxyXG4gICAgJ3otMTAnLFxyXG4gICAgJ3RvLWRhcmtlbidcclxuICApO1xyXG4gIHNlY3Rpb24uaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImgtZnVsbCByZWxhdGl2ZVwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGgtYXV0byBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgZ2FwLTQgcGwtMTAgbWQ6cGwtNDAgcGItMjRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZ3JlZW4tODAwIHRleHQteHNcIj5SZWFsaXphY2plPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LW1vbnRzZXJyYXQgZm9udC1tZWRpdW1cIj5OYXN6ZSA8aT5wcm9qZWt0eTwvaT48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPGRpdiBjbGFzcz1cImltYWdlcyByZWxhdGl2ZSBoLVsxMDAwcHhdIG1kOmgtWzE0NzVweF0gb3ZlcmZsb3ctaGlkZGVuIHRyYW5zaXRpb24tYWxsXCIgaWQ9XCJpbWFnZXMtZ2FsbGVyeVwiPlxyXG4gICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeVwiPlxyXG5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJpbWFnZXMtY29udGFpbmVyXCIgY2xhc3M9XCJbJj5pbWddOnctWzQ1MHB4XSBbJj5pbWddOm9iamVjdC1jb3ZlciBbJj5pbWddOmFsaWduLXRvcFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vcHJvamVjdHNJbWFnZXMvaW1nOS5qcGdcIiBhbHQ9XCJJbWc5XCIgY2xhc3M9XCJtZDpoLVs2MDFweF0gaC1hdXRvXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vcHJvamVjdHNJbWFnZXMvaW1nOC5qcGdcIiBhbHQ9XCJJbWc4XCIgY2xhc3M9XCJtZDpoLVszMzhweF0gaC1hdXRvXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vcHJvamVjdHNJbWFnZXMvaW1nNy5qcGdcIiBhbHQ9XCJJbWc3XCIgY2xhc3M9XCJtZDpoLVs0NTFweF0gaC1hdXRvXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vcHJvamVjdHNJbWFnZXMvaW1nNS5qcGdcIiBhbHQ9XCJJbWc1XCIgY2xhc3M9XCJtZDpoLVs0NTJweF0gaC1hdXRvXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vcHJvamVjdHNJbWFnZXMvaW1nNC5qcGdcIiBhbHQ9XCJJbWc0XCIgY2xhc3M9XCJtZDpoLVs2MDNweF0gaC1hdXRvXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vcHJvamVjdHNJbWFnZXMvaW1nNi5qcGdcIiBhbHQ9XCJJbWc2XCIgY2xhc3M9XCJtZDpoLVs0NTJweF0gaC1hdXRvXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vcHJvamVjdHNJbWFnZXMvaW1nMi5qcGdcIiBhbHQ9XCJJbWcyXCIgY2xhc3M9XCJtZDpoLVs2MDFweF0gaC1hdXRvXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vcHJvamVjdHNJbWFnZXMvaW1nMy5qcGdcIiBhbHQ9XCJJbWczXCIgY2xhc3M9XCJtZDpoLVszMzhweF0gaC1hdXRvXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vcHJvamVjdHNJbWFnZXMvaW1nMS5qcGdcIiBhbHQ9XCJJbWcxXCIgY2xhc3M9XCJtZDpoLVszMzhweF0gaC1hdXRvXCIvPlxyXG5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3Byb2plY3RzSW1hZ2VzL2ltZzkuanBnXCIgYWx0PVwiSW1nOVwiIGNsYXNzPVwibWQ6aC1bNjAxcHhdIGgtYXV0b1wiLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3Byb2plY3RzSW1hZ2VzL2ltZzguanBnXCIgYWx0PVwiSW1nOFwiIGNsYXNzPVwibWQ6aC1bMzM4cHhdIGgtYXV0b1wiLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3Byb2plY3RzSW1hZ2VzL2ltZzcuanBnXCIgYWx0PVwiSW1nN1wiIGNsYXNzPVwibWQ6aC1bNDUxcHhdIGgtYXV0b1wiLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3Byb2plY3RzSW1hZ2VzL2ltZzUuanBnXCIgYWx0PVwiSW1nNVwiIGNsYXNzPVwibWQ6aC1bNDUycHhdIGgtYXV0b1wiLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3Byb2plY3RzSW1hZ2VzL2ltZzQuanBnXCIgYWx0PVwiSW1nNFwiIGNsYXNzPVwibWQ6aC1bNjAzcHhdIGgtYXV0b1wiLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3Byb2plY3RzSW1hZ2VzL2ltZzYuanBnXCIgYWx0PVwiSW1nNlwiIGNsYXNzPVwibWQ6aC1bNDUycHhdIGgtYXV0b1wiLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3Byb2plY3RzSW1hZ2VzL2ltZzIuanBnXCIgYWx0PVwiSW1nMlwiIGNsYXNzPVwibWQ6aC1bNjAxcHhdIGgtYXV0b1wiLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3Byb2plY3RzSW1hZ2VzL2ltZzMuanBnXCIgYWx0PVwiSW1nM1wiIGNsYXNzPVwibWQ6aC1bMzM4cHhdIGgtYXV0b1wiLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3Byb2plY3RzSW1hZ2VzL2ltZzEuanBnXCIgYWx0PVwiSW1nMVwiIGNsYXNzPVwibWQ6aC1bMzM4cHhdIGgtYXV0b1wiLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJoaWRlLWdhbGxlcnlcIiBjbGFzcz1cInN0aWNreSBiZy13aGl0ZSBib3R0b20tMCBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwdC1bMTJweF0gcGItWzE0cHhdIHB4LVsyMnB4XSBnYXAtWzhweF0gYm9yZGVyIGJvcmRlci1bIzExMTExMV0gcm91bmRlZC1mdWxsIGhpZGRlbiBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgPHNwYW4+WndpxYQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9zdmcvZXhwYW5kLnN2Z1wiIGNsYXNzPVwicm90YXRlLTE4MFwiLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cImJnQmx1cmVkXCIgY2xhc3M9XCJ3LWZ1bGwgaC1bMTAwMHB4XSBiZy1ncmFkaWVudC10by10IGZyb20tWyNEQ0MxQUJdICBhYnNvbHV0ZSBib3R0b20tMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWVuZFwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImV4cGFuZFwiIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHQtWzEycHhdIHBiLVsxNHB4XSBweC1bMjJweF0gZ2FwLVs4cHhdIGJvcmRlciBib3JkZXItWyMxMTExMTFdIHJvdW5kZWQtZnVsbFwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5Sb3p3acWEPC9zcGFuPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vc3ZnL2V4cGFuZC5zdmdcIi8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxuICBjb25zdCBtYWN5ID0gTWFjeSh7XHJcbiAgICBjb250YWluZXI6ICcjaW1hZ2VzLWNvbnRhaW5lcicsXHJcbiAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcclxuICAgIGNvbHVtbnM6IDEsXHJcbiAgICBicmVha0F0OiB7XHJcbiAgICAgIDM1MDoge1xyXG4gICAgICAgIG1hcmdpbjoge1xyXG4gICAgICAgICAgeDogNyxcclxuICAgICAgICAgIHk6IDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbnM6IDJcclxuICAgICAgfSxcclxuICAgICAgNDAwOiB7XHJcbiAgICAgICAgbWFyZ2luOiB7XHJcbiAgICAgICAgICB4OiAxMCxcclxuICAgICAgICAgIHk6IDEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5zOiAyXHJcbiAgICAgIH0sXHJcbiAgICAgIDcwMDoge1xyXG4gICAgICAgIG1hcmdpbjoge1xyXG4gICAgICAgICAgeDogMjAsXHJcbiAgICAgICAgICB5OiAyMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uczogM1xyXG4gICAgICB9LFxyXG4gICAgICAxODAwOiB7XHJcbiAgICAgICAgbWFyZ2luOiB7XHJcbiAgICAgICAgICB4OiAyMCxcclxuICAgICAgICAgIHk6IDIwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5zOiA0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZXhwYW5kR2FsbGVyeShtYWN5KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWxpemF0aW9ucztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IE5hdiBmcm9tICcuL2NvbXBvbmVudHMvbmF2JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgSGVybyBmcm9tICcuL2NvbXBvbmVudHMvaGVybyc7XG5pbXBvcnQgT2ZmZXJzIGZyb20gJy4vY29tcG9uZW50cy9vZmZlcnMnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vY29tcG9uZW50cy9hYm91dCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL2NvbXBvbmVudHMvY29udGFjdCc7XG5pbXBvcnQgUmVhbGl6YXRpb25zIGZyb20gJy4vY29tcG9uZW50cy9yZWFsaXphdGlvbnMnO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXTtcbnJvb3QuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLXNtb290aCcpO1xuXG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JnLVsjRjVGMEVDXScsICdmb250LWludGVyJyk7XG5cbk5hdigpO1xuSGVybygpO1xuT2ZmZXJzKCk7XG5BYm91dCgpO1xuUmVhbGl6YXRpb25zKCk7XG5Db250YWN0KCk7XG5Gb290ZXIoKTtcblxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3Nob3dFbGVtZW50Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93RWxlbWVudCcpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuY29uc3QgdG9BbmltYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZGVFbGVtZW50Jyk7XG50b0FuaW1hdGUuZm9yRWFjaCgoZWwpID0+IG9ic2VydmVyLm9ic2VydmUoZWwpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==