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
  page.id = title;
  page.innerHTML = `
<div class="w-auto h-auto group">

<div class="flex flex-col justify-between bg-white  w-72 min-h-[412px] h-auto md:w-[370px] py-12 px-10 rounded-xl transition-all group-hover:[transform:rotateY(360deg)] cursor-pointer hover:scale-105 group-hover:shadow-xl">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxlQUFlLEtBQW9ELG9CQUFvQixDQUEwRCxDQUFDLGlCQUFpQixhQUFhLGdCQUFnQixhQUFhLGtCQUFrQixzQ0FBc0MsZ0JBQWdCLDRCQUE0QixJQUFJLHFCQUFxQixTQUFTLGdCQUFnQiw4REFBOEQsa0NBQWtDLHFCQUFxQixjQUFjLDZFQUE2RSxXQUFXLEtBQUssd0JBQXdCLDhCQUE4QixTQUFTLGNBQWMsc0ZBQXNGLEtBQUssS0FBSyx3QkFBd0IsOEJBQThCLFNBQVMsY0FBYyxnRkFBZ0YsbUJBQW1CLHNCQUFzQiwwQkFBMEIsV0FBVyx1QkFBdUIsNkJBQTZCLHdCQUF3QixnREFBZ0QsS0FBSyxnREFBZ0QsRUFBRSxjQUFjLG9CQUFvQixjQUFjLG1CQUFtQixjQUFjLHlGQUF5RixlQUFlLHNCQUFzQixXQUFXLHVCQUF1QixvQkFBb0Isc0JBQXNCLDREQUE0RCxnQkFBZ0IseUNBQXlDLG9CQUFvQixpQkFBaUIsV0FBVyx1QkFBdUIsdUJBQXVCLHNCQUFzQiwrRkFBK0YsY0FBYywrQkFBK0IsZ0JBQWdCLFVBQVUsd0JBQXdCLGdCQUFnQiwySkFBMkoseUJBQXlCLHNDQUFzQyx3Q0FBd0MsbUJBQW1CLDRJQUE0SSwyQkFBMkIsZ0JBQWdCLDJKQUEySix5QkFBeUIsNkJBQTZCLG9CQUFvQix3TkFBd04sMkJBQTJCLHNCQUFzQiwwQ0FBMEMsMEJBQTBCLHNFQUFzRSx3R0FBd0csc0JBQXNCLGdDQUFnQyx3Q0FBd0MseUJBQXlCLGtEQUFrRCx1REFBdUQsNENBQTRDLHdDQUF3QyxrREFBa0QsZ0RBQWdELG9CQUFvQix1QkFBdUIsSUFBSSxhQUFhLGNBQWMsOERBQThELDRDQUE0QywyQkFBMkIsd0NBQXdDLDBCQUEwQixnREFBZ0QsNEJBQTRCLHFFQUFxRSw2Q0FBNkMsZ0JBQWdCLHlDQUF5Qyw4QkFBOEIsZ0JBQWdCLGtCQUFrQixnRUFBZ0Usd0NBQXdDLGNBQWMsOERBQThELGNBQWMsa0JBQWtCLDBCQUEwQix3SEFBd0gsNkZBQTZGLDZCQUE2QiwwSEFBMEgsK0NBQStDLDZCQUE2Qiw2QkFBNkIsWUFBWSxHQUFHLGtCQUFrQix1RkFBdUYsaUJBQWlCLDhEQUE4RCxpQ0FBaUMsb0NBQW9DLHFDQUFxQyxzQkFBc0Isd0NBQXdDLFlBQVksRUFBRSxtQkFBbUIsd0NBQXdDLE1BQU0sRUFBRSxvQkFBb0IsNkNBQTZDLE1BQU0sRUFBRSxFQUFFLGlCQUFpQiw4REFBOEQsdUJBQXVCLGdCQUFnQixFQUFFLGlCQUFpQiw4REFBOEQsNkNBQTZDLHlDQUF5QyxFQUFFLGVBQWUsb0JBQW9CLHdEQUF3RCw0QkFBNEIsRUFBRSxNQUFNLGVBQWUsa0pBQWtKLHVIQUF1SCxlQUFlLHlEQUF5RCxlQUFlLDJCQUEyQix5RkFBeUYsNEJBQTRCLG1EQUFtRCw0QkFBNEIscUdBQXFHLGVBQWUsZUFBZSxlQUFlLDJFQUEyRSxpQkFBaUIsb0dBQW9HLHNCQUFzQixvSUFBb0ksaUJBQWlCLDJEQUEyRCxpQkFBaUIsOERBQThELHVEQUF1RCxnQ0FBZ0MsY0FBYyxLQUFLLGlDQUFpQyxtQkFBbUIsVUFBVSxjQUFjLEtBQUssMkJBQTJCLEtBQUssYUFBYSxjQUFjLEtBQUssNEJBQTRCLGVBQWUsOE1BQThNLG1DQUFtQyw2QkFBNkIsRUFBRSxtQkFBbUIsdUJBQXVCLDhDQUE4Qyw4SEFBOEgsY0FBYyx1QkFBdUIsOEJBQThCLFlBQVksbUJBQW1CLEtBQUssbUJBQW1CLHNFQUFzRSxVQUFVLG9DQUFvQyxpQkFBaUIsV0FBVyxnQkFBZ0IsU0FBUyxFQUFFLE9BQU8sNkVBQTZFLCtFQUErRSxZQUFZLElBQUksc0RBQXNELFNBQVMsWUFBWSxjQUFjLG1CQUFtQixpQkFBaUIsOEJBQThCLHlGQUF5Riw4QkFBOEIsNERBQTRELGdDQUFnQyx3REFBd0QsNENBQTRDLGdDQUFnQyw0Q0FBNEMsK0NBQStDLGdDQUFnQyxJQUFJLEdBQUcsbUJBQW1CLCtEQUErRCx3Q0FBd0MsZUFBZSwrREFBK0QsMEJBQTBCLDhHQUE4RyxrQkFBa0IsY0FBYywrQ0FBK0MsOERBQThELDBDQUEwQyx3Q0FBd0Msd0ZBQXdGLGdIQUFnSCxvQ0FBb0Msa0lBQWtJLHVEQUF1RCxnQkFBZ0IsRUFBRSwrQkFBK0Isd0ZBQXdGLG1FQUFtRSwwQ0FBMEMsK0JBQStCLDRKQUE0Siw4QkFBOEIsb0JBQW9CLGdDQUFnQyxzQkFBc0IsY0FBYywyTkFBMk4scUNBQXFDOzs7Ozs7Ozs7Ozs7O0FDQTkzVTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RHRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RHcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDclNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsMkVBQTJFLE1BQU07QUFDakYscUNBQXFDLFlBQVk7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0RBQUs7QUFDUDtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0U7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMkNBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7VUNqTTVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNjO0FBQ007QUFDSjtBQUNJO0FBQ0Y7QUFDSTtBQUNVOztBQUVyRDtBQUNBOztBQUVBOztBQUVBLDJEQUFHO0FBQ0gsNERBQUk7QUFDSiw4REFBTTtBQUNOLDZEQUFLO0FBQ0wsb0VBQVk7QUFDWiwrREFBTztBQUNQLDhEQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vbm9kZV9tb2R1bGVzL21hY3kvZGlzdC9tYWN5LmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2NvbXBvbmVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2NvbXBvbmVudHMvaGVyby5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvLi9zcmMvY29tcG9uZW50cy9uYXYuanMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2NvbXBvbmVudHMvb2ZmZXIuanMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2NvbXBvbmVudHMvb2ZmZXJzLmpzIiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS8uL3NyYy9jb21wb25lbnRzL3JlYWxpemF0aW9ucy5qcyIsIndlYnBhY2s6Ly9hZHJlc3BlY3QtemFkYW5pZS1yZWtydXRhY3lqbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FkcmVzcGVjdC16YWRhbmllLXJla3J1dGFjeWpuZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWRyZXNwZWN0LXphZGFuaWUtcmVrcnV0YWN5am5lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbih0LG4pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPW4oKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKG4pOnQuTWFjeT1uKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHQsbil7dmFyIGU9dm9pZCAwO3JldHVybiBmdW5jdGlvbigpe2UmJmNsZWFyVGltZW91dChlKSxlPXNldFRpbWVvdXQodCxuKX19ZnVuY3Rpb24gbih0LG4pe2Zvcih2YXIgZT10Lmxlbmd0aCxyPWUsbz1bXTtlLS07KW8ucHVzaChuKHRbci1lLTFdKSk7cmV0dXJuIG99ZnVuY3Rpb24gZSh0LG4pe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdJiZhcmd1bWVudHNbMl07aWYod2luZG93LlByb21pc2UpcmV0dXJuIEEodCxuLGUpO3QucmVjYWxjdWxhdGUoITAsITApfWZ1bmN0aW9uIHIodCl7Zm9yKHZhciBuPXQub3B0aW9ucyxlPXQucmVzcG9uc2l2ZU9wdGlvbnMscj10LmtleXMsbz10LmRvY1dpZHRoLGk9dm9pZCAwLHM9MDtzPHIubGVuZ3RoO3MrKyl7dmFyIGE9cGFyc2VJbnQocltzXSwxMCk7bz49YSYmKGk9bi5icmVha0F0W2FdLE8oaSxlKSl9cmV0dXJuIGV9ZnVuY3Rpb24gbyh0KXtmb3IodmFyIG49dC5vcHRpb25zLGU9dC5yZXNwb25zaXZlT3B0aW9ucyxyPXQua2V5cyxvPXQuZG9jV2lkdGgsaT12b2lkIDAscz1yLmxlbmd0aC0xO3M+PTA7cy0tKXt2YXIgYT1wYXJzZUludChyW3NdLDEwKTtvPD1hJiYoaT1uLmJyZWFrQXRbYV0sTyhpLGUpKX1yZXR1cm4gZX1mdW5jdGlvbiBpKHQpe3ZhciBuPXQudXNlQ29udGFpbmVyRm9yQnJlYWtwb2ludHM/dC5jb250YWluZXIuY2xpZW50V2lkdGg6d2luZG93LmlubmVyV2lkdGgsZT17Y29sdW1uczp0LmNvbHVtbnN9O2IodC5tYXJnaW4pP2UubWFyZ2luPXt4OnQubWFyZ2luLngseTp0Lm1hcmdpbi55fTplLm1hcmdpbj17eDp0Lm1hcmdpbix5OnQubWFyZ2lufTt2YXIgaT1PYmplY3Qua2V5cyh0LmJyZWFrQXQpO3JldHVybiB0Lm1vYmlsZUZpcnN0P3Ioe29wdGlvbnM6dCxyZXNwb25zaXZlT3B0aW9uczplLGtleXM6aSxkb2NXaWR0aDpufSk6byh7b3B0aW9uczp0LHJlc3BvbnNpdmVPcHRpb25zOmUsa2V5czppLGRvY1dpZHRoOm59KX1mdW5jdGlvbiBzKHQpe3JldHVybiBpKHQpLmNvbHVtbnN9ZnVuY3Rpb24gYSh0KXtyZXR1cm4gaSh0KS5tYXJnaW59ZnVuY3Rpb24gYyh0KXt2YXIgbj0hKGFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdKXx8YXJndW1lbnRzWzFdLGU9cyh0KSxyPWEodCkueCxvPTEwMC9lO2lmKCFuKXJldHVybiBvO2lmKDE9PT1lKXJldHVyblwiMTAwJVwiO3ZhciBpPVwicHhcIjtpZihcInN0cmluZ1wiPT10eXBlb2Ygcil7dmFyIGM9cGFyc2VGbG9hdChyKTtpPXIucmVwbGFjZShjLFwiXCIpLHI9Y31yZXR1cm4gcj0oZS0xKSpyL2UsXCIlXCI9PT1pP28tcitcIiVcIjpcImNhbGMoXCIrbytcIiUgLSBcIityK2krXCIpXCJ9ZnVuY3Rpb24gdSh0LG4pe3ZhciBlPXModC5vcHRpb25zKSxyPTAsbz12b2lkIDAsaT12b2lkIDA7aWYoMT09PSsrbilyZXR1cm4gMDtpPWEodC5vcHRpb25zKS54O3ZhciB1PVwicHhcIjtpZihcInN0cmluZ1wiPT10eXBlb2YgaSl7dmFyIGw9cGFyc2VGbG9hdChpLDEwKTt1PWkucmVwbGFjZShsLFwiXCIpLGk9bH1yZXR1cm4gbz0oaS0oZS0xKSppL2UpKihuLTEpLHIrPWModC5vcHRpb25zLCExKSoobi0xKSxcIiVcIj09PXU/citvK1wiJVwiOlwiY2FsYyhcIityK1wiJSArIFwiK28rdStcIilcIn1mdW5jdGlvbiBsKHQpe3ZhciBuPTAsZT10LmNvbnRhaW5lcixyPXQucm93czt2KHIsZnVuY3Rpb24odCl7bj10Pm4/dDpufSksZS5zdHlsZS5oZWlnaHQ9bitcInB4XCJ9ZnVuY3Rpb24gcCh0LG4pe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdJiZhcmd1bWVudHNbMl0scj0hKGFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdKXx8YXJndW1lbnRzWzNdLG89cyh0Lm9wdGlvbnMpLGk9YSh0Lm9wdGlvbnMpLnk7TSh0LG8sZSksdihuLGZ1bmN0aW9uKG4pe3ZhciBlPTAsbz1wYXJzZUludChuLm9mZnNldEhlaWdodCwxMCk7aXNOYU4obyl8fCh0LnJvd3MuZm9yRWFjaChmdW5jdGlvbihuLHIpe248dC5yb3dzW2VdJiYoZT1yKX0pLG4uc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLG4uc3R5bGUudG9wPXQucm93c1tlXStcInB4XCIsbi5zdHlsZS5sZWZ0PVwiXCIrdC5jb2xzW2VdLHQucm93c1tlXSs9aXNOYU4obyk/MDpvK2ksciYmKG4uZGF0YXNldC5tYWN5Q29tcGxldGU9MSkpfSksciYmKHQudG1wUm93cz1udWxsKSxsKHQpfWZ1bmN0aW9uIGYodCxuKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdLHI9IShhcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXSl8fGFyZ3VtZW50c1szXSxvPXModC5vcHRpb25zKSxpPWEodC5vcHRpb25zKS55O00odCxvLGUpLHYobixmdW5jdGlvbihuKXt0Lmxhc3Rjb2w9PT1vJiYodC5sYXN0Y29sPTApO3ZhciBlPUMobixcImhlaWdodFwiKTtlPXBhcnNlSW50KG4ub2Zmc2V0SGVpZ2h0LDEwKSxpc05hTihlKXx8KG4uc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLG4uc3R5bGUudG9wPXQucm93c1t0Lmxhc3Rjb2xdK1wicHhcIixuLnN0eWxlLmxlZnQ9XCJcIit0LmNvbHNbdC5sYXN0Y29sXSx0LnJvd3NbdC5sYXN0Y29sXSs9aXNOYU4oZSk/MDplK2ksdC5sYXN0Y29sKz0xLHImJihuLmRhdGFzZXQubWFjeUNvbXBsZXRlPTEpKX0pLHImJih0LnRtcFJvd3M9bnVsbCksbCh0KX12YXIgaD1mdW5jdGlvbiB0KG4sZSl7aWYoISh0aGlzIGluc3RhbmNlb2YgdCkpcmV0dXJuIG5ldyB0KG4sZSk7aWYobiYmbi5ub2RlTmFtZSlyZXR1cm4gbjtpZihuPW4ucmVwbGFjZSgvXlxccyovLFwiXCIpLnJlcGxhY2UoL1xccyokLyxcIlwiKSxlKXJldHVybiB0aGlzLmJ5Q3NzKG4sZSk7Zm9yKHZhciByIGluIHRoaXMuc2VsZWN0b3JzKWlmKGU9ci5zcGxpdChcIi9cIiksbmV3IFJlZ0V4cChlWzFdLGVbMl0pLnRlc3QobikpcmV0dXJuIHRoaXMuc2VsZWN0b3JzW3JdKG4pO3JldHVybiB0aGlzLmJ5Q3NzKG4pfTtoLnByb3RvdHlwZS5ieUNzcz1mdW5jdGlvbih0LG4pe3JldHVybihufHxkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbCh0KX0saC5wcm90b3R5cGUuc2VsZWN0b3JzPXt9LGgucHJvdG90eXBlLnNlbGVjdG9yc1svXlxcLltcXHdcXC1dKyQvXT1mdW5jdGlvbih0KXtyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0LnN1YnN0cmluZygxKSl9LGgucHJvdG90eXBlLnNlbGVjdG9yc1svXlxcdyskL109ZnVuY3Rpb24odCl7cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHQpfSxoLnByb3RvdHlwZS5zZWxlY3RvcnNbL15cXCNbXFx3XFwtXSskL109ZnVuY3Rpb24odCl7cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQuc3Vic3RyaW5nKDEpKX07dmFyIHY9ZnVuY3Rpb24odCxuKXtmb3IodmFyIGU9dC5sZW5ndGgscj1lO2UtLTspbih0W3ItZS0xXSl9LG09ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdO3RoaXMucnVubmluZz0hMSx0aGlzLmV2ZW50cz1bXSx0aGlzLmFkZCh0KX07bS5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7aWYoIXRoaXMucnVubmluZyYmdGhpcy5ldmVudHMubGVuZ3RoPjApe3ZhciB0PXRoaXMuZXZlbnRzLnNoaWZ0KCk7dGhpcy5ydW5uaW5nPSEwLHQoKSx0aGlzLnJ1bm5pbmc9ITEsdGhpcy5ydW4oKX19LG0ucHJvdG90eXBlLmFkZD1mdW5jdGlvbigpe3ZhciB0PXRoaXMsbj1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdO3JldHVybiEhbiYmKEFycmF5LmlzQXJyYXkobik/dihuLGZ1bmN0aW9uKG4pe3JldHVybiB0LmFkZChuKX0pOih0aGlzLmV2ZW50cy5wdXNoKG4pLHZvaWQgdGhpcy5ydW4oKSkpfSxtLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuZXZlbnRzPVtdfTt2YXIgZD1mdW5jdGlvbih0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307cmV0dXJuIHRoaXMuaW5zdGFuY2U9dCx0aGlzLmRhdGE9bix0aGlzfSx5PWZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXTt0aGlzLmV2ZW50cz17fSx0aGlzLmluc3RhbmNlPXR9O3kucHJvdG90eXBlLm9uPWZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXSxuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdJiZhcmd1bWVudHNbMV07cmV0dXJuISghdHx8IW4pJiYoQXJyYXkuaXNBcnJheSh0aGlzLmV2ZW50c1t0XSl8fCh0aGlzLmV2ZW50c1t0XT1bXSksdGhpcy5ldmVudHNbdF0ucHVzaChuKSl9LHkucHJvdG90eXBlLmVtaXQ9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdLG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9O2lmKCF0fHwhQXJyYXkuaXNBcnJheSh0aGlzLmV2ZW50c1t0XSkpcmV0dXJuITE7dmFyIGU9bmV3IGQodGhpcy5pbnN0YW5jZSxuKTt2KHRoaXMuZXZlbnRzW3RdLGZ1bmN0aW9uKHQpe3JldHVybiB0KGUpfSl9O3ZhciBnPWZ1bmN0aW9uKHQpe3JldHVybiEoXCJuYXR1cmFsSGVpZ2h0XCJpbiB0JiZ0Lm5hdHVyYWxIZWlnaHQrdC5uYXR1cmFsV2lkdGg9PT0wKXx8dC53aWR0aCt0LmhlaWdodCE9PTB9LEU9ZnVuY3Rpb24odCxuKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbih0LGUpe2lmKG4uY29tcGxldGUpcmV0dXJuIGcobik/dChuKTplKG4pO24uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbigpe3JldHVybiBnKG4pP3Qobik6ZShuKX0pLG4uYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsZnVuY3Rpb24oKXtyZXR1cm4gZShuKX0pfSkudGhlbihmdW5jdGlvbihuKXtlJiZ0LmVtaXQodC5jb25zdGFudHMuRVZFTlRfSU1BR0VfTE9BRCx7aW1nOm59KX0pLmNhdGNoKGZ1bmN0aW9uKG4pe3JldHVybiB0LmVtaXQodC5jb25zdGFudHMuRVZFTlRfSU1BR0VfRVJST1Ise2ltZzpufSl9KX0sdz1mdW5jdGlvbih0LGUpe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdJiZhcmd1bWVudHNbMl07cmV0dXJuIG4oZSxmdW5jdGlvbihuKXtyZXR1cm4gRSh0LG4scil9KX0sQT1mdW5jdGlvbih0LG4pe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdJiZhcmd1bWVudHNbMl07cmV0dXJuIFByb21pc2UuYWxsKHcodCxuLGUpKS50aGVuKGZ1bmN0aW9uKCl7dC5lbWl0KHQuY29uc3RhbnRzLkVWRU5UX0lNQUdFX0NPTVBMRVRFKX0pfSxJPWZ1bmN0aW9uKG4pe3JldHVybiB0KGZ1bmN0aW9uKCl7bi5lbWl0KG4uY29uc3RhbnRzLkVWRU5UX1JFU0laRSksbi5xdWV1ZS5hZGQoZnVuY3Rpb24oKXtyZXR1cm4gbi5yZWNhbGN1bGF0ZSghMCwhMCl9KX0sMTAwKX0sTj1mdW5jdGlvbih0KXtpZih0LmNvbnRhaW5lcj1oKHQub3B0aW9ucy5jb250YWluZXIpLHQuY29udGFpbmVyIGluc3RhbmNlb2YgaHx8IXQuY29udGFpbmVyKXJldHVybiEhdC5vcHRpb25zLmRlYnVnJiZjb25zb2xlLmVycm9yKFwiRXJyb3I6IENvbnRhaW5lciBub3QgZm91bmRcIik7dC5jb250YWluZXIubGVuZ3RoJiYodC5jb250YWluZXI9dC5jb250YWluZXJbMF0pLHQub3B0aW9ucy5jb250YWluZXI9dC5jb250YWluZXIsdC5jb250YWluZXIuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwifSxUPWZ1bmN0aW9uKHQpe3QucXVldWU9bmV3IG0sdC5ldmVudHM9bmV3IHkodCksdC5yb3dzPVtdLHQucmVzaXplcj1JKHQpfSxMPWZ1bmN0aW9uKHQpe3ZhciBuPWgoXCJpbWdcIix0LmNvbnRhaW5lcik7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0LnJlc2l6ZXIpLHQub24odC5jb25zdGFudHMuRVZFTlRfSU1BR0VfTE9BRCxmdW5jdGlvbigpe3JldHVybiB0LnJlY2FsY3VsYXRlKCExLCExKX0pLHQub24odC5jb25zdGFudHMuRVZFTlRfSU1BR0VfQ09NUExFVEUsZnVuY3Rpb24oKXtyZXR1cm4gdC5yZWNhbGN1bGF0ZSghMCwhMCl9KSx0Lm9wdGlvbnMudXNlT3duSW1hZ2VMb2FkZXJ8fGUodCxuLCF0Lm9wdGlvbnMud2FpdEZvckltYWdlcyksdC5lbWl0KHQuY29uc3RhbnRzLkVWRU5UX0lOSVRJQUxJWkVEKX0sXz1mdW5jdGlvbih0KXtOKHQpLFQodCksTCh0KX0sYj1mdW5jdGlvbih0KXtyZXR1cm4gdD09PU9iamVjdCh0KSYmXCJbb2JqZWN0IEFycmF5XVwiIT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfSxPPWZ1bmN0aW9uKHQsbil7Yih0KXx8KG4uY29sdW1ucz10KSxiKHQpJiZ0LmNvbHVtbnMmJihuLmNvbHVtbnM9dC5jb2x1bW5zKSxiKHQpJiZ0Lm1hcmdpbiYmIWIodC5tYXJnaW4pJiYobi5tYXJnaW49e3g6dC5tYXJnaW4seTp0Lm1hcmdpbn0pLGIodCkmJnQubWFyZ2luJiZiKHQubWFyZ2luKSYmdC5tYXJnaW4ueCYmKG4ubWFyZ2luLng9dC5tYXJnaW4ueCksYih0KSYmdC5tYXJnaW4mJmIodC5tYXJnaW4pJiZ0Lm1hcmdpbi55JiYobi5tYXJnaW4ueT10Lm1hcmdpbi55KX0sQz1mdW5jdGlvbih0LG4pe3JldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0LG51bGwpLmdldFByb3BlcnR5VmFsdWUobil9LE09ZnVuY3Rpb24odCxuKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdO2lmKHQubGFzdGNvbHx8KHQubGFzdGNvbD0wKSx0LnJvd3MubGVuZ3RoPDEmJihlPSEwKSxlKXt0LnJvd3M9W10sdC5jb2xzPVtdLHQubGFzdGNvbD0wO2Zvcih2YXIgcj1uLTE7cj49MDtyLS0pdC5yb3dzW3JdPTAsdC5jb2xzW3JdPXUodCxyKX1lbHNlIGlmKHQudG1wUm93cyl7dC5yb3dzPVtdO2Zvcih2YXIgcj1uLTE7cj49MDtyLS0pdC5yb3dzW3JdPXQudG1wUm93c1tyXX1lbHNle3QudG1wUm93cz1bXTtmb3IodmFyIHI9bi0xO3I+PTA7ci0tKXQudG1wUm93c1tyXT10LnJvd3Nbcl19fSxWPWZ1bmN0aW9uKHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdJiZhcmd1bWVudHNbMV0sZT0hKGFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdKXx8YXJndW1lbnRzWzJdLHI9bj90LmNvbnRhaW5lci5jaGlsZHJlbjpoKCc6c2NvcGUgPiAqOm5vdChbZGF0YS1tYWN5LWNvbXBsZXRlPVwiMVwiXSknLHQuY29udGFpbmVyKTtyPUFycmF5LmZyb20ocikuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT09dC5vZmZzZXRQYXJlbnR9KTt2YXIgbz1jKHQub3B0aW9ucyk7cmV0dXJuIHYocixmdW5jdGlvbih0KXtuJiYodC5kYXRhc2V0Lm1hY3lDb21wbGV0ZT0wKSx0LnN0eWxlLndpZHRoPW99KSx0Lm9wdGlvbnMudHJ1ZU9yZGVyPyhmKHQscixuLGUpLHQuZW1pdCh0LmNvbnN0YW50cy5FVkVOVF9SRUNBTENVTEFURUQpKToocCh0LHIsbixlKSx0LmVtaXQodC5jb25zdGFudHMuRVZFTlRfUkVDQUxDVUxBVEVEKSl9LFI9ZnVuY3Rpb24oKXtyZXR1cm4hIXdpbmRvdy5Qcm9taXNlfSx4PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspe3ZhciBlPWFyZ3VtZW50c1tuXTtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9cmV0dXJuIHR9O0FycmF5LmZyb218fChBcnJheS5mcm9tPWZ1bmN0aW9uKHQpe2Zvcih2YXIgbj0wLGU9W107bjx0Lmxlbmd0aDspZS5wdXNoKHRbbisrXSk7cmV0dXJuIGV9KTt2YXIgaz17Y29sdW1uczo0LG1hcmdpbjoyLHRydWVPcmRlcjohMSx3YWl0Rm9ySW1hZ2VzOiExLHVzZUltYWdlTG9hZGVyOiEwLGJyZWFrQXQ6e30sdXNlT3duSW1hZ2VMb2FkZXI6ITEsb25Jbml0OiExLGNhbmNlbExlZ2FjeTohMSx1c2VDb250YWluZXJGb3JCcmVha3BvaW50czohMX07IWZ1bmN0aW9uKCl7dHJ5e2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLnF1ZXJ5U2VsZWN0b3IoXCI6c2NvcGUgKlwiKX1jYXRjaCh0KXshZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3JldHVybiBmdW5jdGlvbihlKXtpZihlJiZuLnRlc3QoZSkpe3ZhciByPXRoaXMuZ2V0QXR0cmlidXRlKFwiaWRcIik7cnx8KHRoaXMuaWQ9XCJxXCIrTWF0aC5mbG9vcig5ZTYqTWF0aC5yYW5kb20oKSkrMWU2KSxhcmd1bWVudHNbMF09ZS5yZXBsYWNlKG4sXCIjXCIrdGhpcy5pZCk7dmFyIG89dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIG51bGw9PT1yP3RoaXMucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik6cnx8KHRoaXMuaWQ9ciksb31yZXR1cm4gdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fXZhciBuPS86c2NvcGVcXGIvZ2ksZT10KEVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3IpO0VsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3I9ZnVuY3Rpb24odCl7cmV0dXJuIGUuYXBwbHkodGhpcyxhcmd1bWVudHMpfTt2YXIgcj10KEVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwpO0VsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGw9ZnVuY3Rpb24odCl7cmV0dXJuIHIuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0oKX19KCk7dmFyIHE9ZnVuY3Rpb24gdCgpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTprO2lmKCEodGhpcyBpbnN0YW5jZW9mIHQpKXJldHVybiBuZXcgdChuKTt0aGlzLm9wdGlvbnM9e30seCh0aGlzLm9wdGlvbnMsayxuKSx0aGlzLm9wdGlvbnMuY2FuY2VsTGVnYWN5JiYhUigpfHxfKHRoaXMpfTtyZXR1cm4gcS5pbml0PWZ1bmN0aW9uKHQpe3JldHVybiBjb25zb2xlLndhcm4oXCJEZXByZWNpYXRlZDogTWFjeS5pbml0IHdpbGwgYmUgcmVtb3ZlZCBpbiB2My4wLjAgb3B0IHRvIHVzZSBNYWN5IGRpcmVjdGx5IGxpa2Ugc28gTWFjeSh7IC8qb3B0aW9ucyBoZXJlKi8gfSkgXCIpLG5ldyBxKHQpfSxxLnByb3RvdHlwZS5yZWNhbGN1bGF0ZU9uSW1hZ2VMb2FkPWZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXTtyZXR1cm4gZSh0aGlzLGgoXCJpbWdcIix0aGlzLmNvbnRhaW5lciksIXQpfSxxLnByb3RvdHlwZS5ydW5PbkltYWdlTG9hZD1mdW5jdGlvbih0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSYmYXJndW1lbnRzWzFdLHI9aChcImltZ1wiLHRoaXMuY29udGFpbmVyKTtyZXR1cm4gdGhpcy5vbih0aGlzLmNvbnN0YW50cy5FVkVOVF9JTUFHRV9DT01QTEVURSx0KSxuJiZ0aGlzLm9uKHRoaXMuY29uc3RhbnRzLkVWRU5UX0lNQUdFX0xPQUQsdCksZSh0aGlzLHIsbil9LHEucHJvdG90eXBlLnJlY2FsY3VsYXRlPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxuPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF0sZT0hKGFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdKXx8YXJndW1lbnRzWzFdO3JldHVybiBlJiZ0aGlzLnF1ZXVlLmNsZWFyKCksdGhpcy5xdWV1ZS5hZGQoZnVuY3Rpb24oKXtyZXR1cm4gVih0LG4sZSl9KX0scS5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLnJlc2l6ZXIpLHYodGhpcy5jb250YWluZXIuY2hpbGRyZW4sZnVuY3Rpb24odCl7dC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLW1hY3ktY29tcGxldGVcIiksdC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKX0pLHRoaXMuY29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpfSxxLnByb3RvdHlwZS5yZUluaXQ9ZnVuY3Rpb24oKXt0aGlzLnJlY2FsY3VsYXRlKCEwLCEwKSx0aGlzLmVtaXQodGhpcy5jb25zdGFudHMuRVZFTlRfSU5JVElBTElaRUQpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZXNpemVyKSx0aGlzLmNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCJ9LHEucHJvdG90eXBlLm9uPWZ1bmN0aW9uKHQsbil7dGhpcy5ldmVudHMub24odCxuKX0scS5wcm90b3R5cGUuZW1pdD1mdW5jdGlvbih0LG4pe3RoaXMuZXZlbnRzLmVtaXQodCxuKX0scS5jb25zdGFudHM9e0VWRU5UX0lOSVRJQUxJWkVEOlwibWFjeS5pbml0aWFsaXplZFwiLEVWRU5UX1JFQ0FMQ1VMQVRFRDpcIm1hY3kucmVjYWxjdWxhdGVkXCIsRVZFTlRfSU1BR0VfTE9BRDpcIm1hY3kuaW1hZ2UubG9hZFwiLEVWRU5UX0lNQUdFX0VSUk9SOlwibWFjeS5pbWFnZS5lcnJvclwiLEVWRU5UX0lNQUdFX0NPTVBMRVRFOlwibWFjeS5pbWFnZXMuY29tcGxldGVcIixFVkVOVF9SRVNJWkU6XCJtYWN5LnJlc2l6ZVwifSxxLnByb3RvdHlwZS5jb25zdGFudHM9cS5jb25zdGFudHMscX0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBzZWN0aW9uLmlkID0gJ2Fib3V0JztcclxuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGVFbGVtZW50JywgJ3RvLWRhcmtlbicpO1xyXG5cclxuICBzZWN0aW9uLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbWQ6bWF4LWgtWzcyMHB4XSBoLWF1dG8gYmctZ3JlZW4tOTAwIGZsZXgtY29sIGZsZXggbWQ6ZmxleC1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGJnLWdyZWVuLTgwMCBoLWF1dG9cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fib3V0UGhvdG8ucG5nXCIgYWx0PVwiTGFkbmUgemRqZWNpZVwiIGNsYXNzPVwiaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXJcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIHB5LTEwIHRleHQtWyNGNUYwRUNdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy00LzUgc3BhY2UteS0yMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlLXktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZS15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc21cIj5PIGZpcm1pZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC00eGwgdy1maXQgZm9udC1tb250c2VycmF0IGZvbnQtbWVkaXVtXCI+VHdvcnp5bXk8L2JyPiB6IDxpPnBhc2rEhTwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF4LXctWzgwMHB4XSB0ZXh0LWJhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgS2HFvGR5IHByb2pla3QgdG8gbm93ZSB3eXp3YW5pZS4gRGxhdGVnbyBuYXN6IHplc3DDs8WCIHR3b3J6xIUgd3lrd2FsaWZpa293YW5pIHByb2pla3RhbmNpIG9yYXogYXJjaGl0ZWtjaSwga3TDs3J5Y2ggemFkYW5pZW0gamVzdCByb3pwb3puYW5pZSBpIHJlYWxpemFjamEgcG90cnplYiBrYcW8ZGVnbyBLbGllbnRhLiBOYXN6YSBzcGVjamFsaXphY2phIHRvIHByemVzdHJ6ZW5pZSBub3dvY3plc25lLCBrdMOzcmUgY2hhcmFrdGVyeXp1amUgbWluaW1hbGl6bSwgZ2VvbWV0cmlhIGkgZWxlZ2FuY2thIHByb3N0b3RhLiBUd29yenlteSBvZ3JvZHkgbWHFgm9vYnPFgnVnb3dlLCBkb3N0b3Nvd2FuZSBkbyB3c3DDs8WCY3plc25lZ28gdHJ5YnUgxbx5Y2lhLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1maXQgYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJvcmRlci1bI0Y1RjBFQ10gcHgtWzI0cHhdIHB5LVsxMnB4XSByb3VuZGVkLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIHRyYW5zaXRpb24tYWxsIGhvdmVyOnNoYWRvdy14bCBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3puYWogbmFzIGJsacW8ZWpcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL3N2Zy9hYm91dEFycm93UmlnaHQuc3ZnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiIsImNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBzZWN0aW9uLmlkID0gJ2NvbnRhY3QnO1xyXG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgncHktWzYwcHhdJywgJ2hpZGVFbGVtZW50JywgJ3RvLWRhcmtlbicpO1xyXG5cclxuICBzZWN0aW9uLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiaC1mdWxsIHB4LTYgcHktNiB3LWZ1bGwgbGc6dy1hdXRvIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaC1hdXRvIGJnLWdyZWVuLTkwMCB3LWF1dG8gZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBsZzpqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtWyNGNUYwRUNdIHRleHQtWzQwcHhdIGxlYWRpbmctWzQ4cHhdIHNwYWNlLXktNiBwLTkgbWQ6cHgtMTYgbWQ6cHktMTQgbGc6cHgtWzExMHB4XSBsZzpweS1bMTEwcHhdIGxnOnNwYWNlLXgtMTYgbGc6aXRlbXMtZW5kXCI+XHJcbiAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCIgdy1mdWxsIGxnOndoaXRlc3BhY2Utbm93cmFwIGgtZnVsbCBmb250LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICA8ZGl2Plpvc3RhxYRteSB3IGtvbnRha2NpZSE8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlpuYWpkemllc3ogbmFzIG5hIDxpPjxiPkluc3RhZ3JhbWllPC9iPjwvaT4uPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGxnOmZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1lbmQgbWQ6aXRlbXMtc3RhcnQgdy1mdWxsIHNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWJhc2Ugdy1bMTUwcHhdIGxnOnctWzE1MHB4XSBtZDp3LWF1dG9cIj7FmmxlZMW6IG5hc3plIG5ham5vd3N6ZSByZWFsaXphY2plITwvZGl2PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJwdC1bMTBweF0gcGItWzEycHhdIHB4LVsyNHB4XSBiZy1bI0Y1RjBFQ10gdGV4dC1ncmVlbi05MDAgcm91bmRlZC1mdWxsIHRleHQtYmFzZSB0cmFuc2l0aW9uLWFsbCBob3ZlcjpiZy1bI2VjZTdlMl0gaG92ZXI6c2hhZG93LW1kXCI+SW5zdGFncmFtPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiIsImNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICBmb290ZXIuY2xhc3NMaXN0ID0gYHRvLWRhcmtlbiBiZy1ibGFjayB3LWZ1bGwgaC1hdXRvIHRleHQtd2hpdGUgcHgtWzQwcHhdIHB5LVs4MHB4XSBmbGV4LWNvbCBzcGFjZS15LTIwIG1kOnB4LTY0YDtcclxuICBmb290ZXIuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJmbGV4LWNvbCBzcGFjZS15LThcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbGc6ZmxleC1yb3cgeGw6ZmxleC1yb3cgMnhsOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBzcGFjZS15LTRcIj5cclxuICAgICAgXHJcbiAgICAgIDxpbWcgc3JjPVwiLi9zdmcvZ2lhcmRkZXNpZ25XaGl0ZS5zdmdcIiBhbHQ9XCJsb2dvXCIgY2xhc3M9XCJ3LVsxMTVweF1cIj5cclxuICAgICAgPGFzaWRlIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGgtYXV0byBnYXAtNiB0ZXh0LXNtIG1kOnRleHQtYmFzZSBsZzp0ZXh0LWJhc2UgeGw6dGV4dC1iYXNlIDJ4bDp0ZXh0LWJhc2VcIj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWluLXctWzEwMHB4XSB3LWF1dG8gbWQ6dy1hdXRvIG1kOnRleHQtYmFzZSB0ZXh0LXNtXCI+RGFqIHpuYcSHLCBjbyBtb8W8ZW15IGRsYSBDaWViaWUgenJvYmljITwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ3LWdpdCBoLTkgYmctZ3JlZW4tODAwIHB5LTIgcHgtMyByb3VuZGVkLWZ1bGwgd2hpdGVzcGFjZS1ub3dyYXAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaG92ZXI6YmctZ3JlZW4tOTAwIHRyYW5zaXRpb24tYWxsIGhvdmVyOnNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInB4LTIgbWQ6cHgtNiBwdC1bMTJweF0gcGItWzE0cHhdXCI+U2tvbnRha3R1aiBzacSZIHogbmFtaTwvZGl2PlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPC9hc2lkZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGgtWzFweF0gYmctc2xhdGUtMzAwXCI+PC9kaXY+XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IHctZnVsbCBtZDpoLTEwIHhsOmgtMTAgMnhsOmgtMTAgbGc6aC0xMCBoLWF1dG8ganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cImZsZXgtY29sIG1kOmZsZXgtcm93IHhsOmZsZXggMnhsOmZsZXggbGc6ZmxleCBnYXAtOFwiID5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNjb250YWN0XCI+S29udGFrdDwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkluc3RhZ3JhbTwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkZhY2Vib29rPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TGlua2VkaW48L2E+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgbWQ6ZmxleC1yb3cgeGw6ZmxleC1yb3cgMnhsOmZsZXgtcm93IGdhcC0wIG1kOmdhcC04IHctZml0XCI+XHJcbiAgICAgICAgPGRpdj4wMDAtMDAwLTAwMDwvZGl2PlxyXG4gICAgICAgIDxkaXY+Z2lhcmRkZXNpZ25Aa29udGFrdC5wbDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIG15LWF1dG9cIj5cclxuICAgICAgICA8ZGl2PlByYXdhIHphc3RyemXFvG9uZSDCqSAyMDIyPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc3BhY2UteS0xIHctMzAgaC1mdWxsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInctMjAgXCI+bWFkZSBieTwvZGl2PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiLi9zdmcvYWRSZXNwZWN0LnN2Z1wiIGFsdD1cImFkUmVzcGVjdFwiPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJjb25zdCBIZXJvID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlRWxlbWVudCcsICd0by1kYXJrZW4nKTtcclxuICBtYWluLmlkID0gJ2hlcm8nO1xyXG5cclxuICBtYWluLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyB3LWZ1bGwgaC1hdXRvIG1kOmgtWzkydmhdXCI+XHJcbiAgXHJcbiAgICA8ZGl2IGNsYXNzPVwibWQ6dy0xLzIgYmctWyNEQ0MxQUJdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcblxyXG4gICAgICAgIDxhc2lkZSBjbGFzcz1cIm1kOmgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgbWQ6dy1mdWxsIHhsOnctWzU5OXB4XSBzcGFjZS15LVs3MnB4XSBtZDpzcGFjZS15LTEyIGJnLVsjRENDMUFCXSBweC0xMCBweS05IG1kOnB5LTEyIGgtWzkydmhdXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS0xMVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LTV4bCBtZDp0ZXh0LTZ4bCB0ZXh0LVsjMTExMTExXSBsZWFkaW5nLVs1MHB4XSBtZDpsZWFkaW5nLVs3MHB4XSBmb250LW1vbnRzZXJyYXQgZm9udC1tZWRpdW1cIj5Ob3dvY3plc25hIGFyYW7FvGFjamEgVHdvamVnbyBvZ3JvZHU8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1iYXNlIGxlYWRpbmctbm9ybWFsIGZvbnQtaW50ZXJcIj5NYXJrYSBHaWFyZERlc2lnbiB0byB3aWVsb2xldG5pZSBkb8Wbd2lhZGN6ZW5pZSBpIHd5c29rYSBlc3RldHlrYSByZWFsaXphY2ppLiBPZmVydWplbXkga29tcGxla3Nvd3kgemFrcmVzIHVzxYJ1ZyB6IGluZHl3aWR1YWxueW0gcG9kZWrFm2NpZW0gZG8ga2HFvGRlZ28gcHJvamVrdHUuPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGc6dy1mdWxsIGZsZXggZmxleC1jb2wgc3BhY2UteS0zIGxnOmZsZXgtcm93IGp1c3RpZnktc3RhcnQgdy1mdWxsIG1kOnctYXV0byBtZDpqdXN0aWZ5LWJldHdlZW4gWyY+YV06Y3Vyc29yLXBvaW50ZXIgbGc6c3BhY2UteS0wIGxnOnNwYWNlLXgtOVwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJiZy1ncmVlbi04MDAgdGV4dC13aGl0ZSBweC02IHB0LVsxMnB4XSBwYi1bMTRweF0gcm91bmRlZC1mdWxsIHctZml0IGhvdmVyOnNoYWRvdy1tZCBsZzp3aGl0ZXNwYWNlLW5vd3JhcCBob3ZlcjpiZy1ncmVlbi05MDAgdHJhbnNpdGlvbi1hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgU2tvbnRha3R1aiBzacSZIHogbmFtaVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjcmVhbGl6YWNqZVwiIGNsYXNzPVwiZmxleCB3LWZpdCBib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLWdyZWVuLTgwMCBweC1bMjJweF0gcHQtWzEycHhdIHBiLVsxNHB4XSByb3VuZGVkLWZ1bGwgdGV4dC1ncmVlbi04MDAgdHJhbnNpdGlvbi1hbGwgaG92ZXI6c2hhZG93LXhsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzcGFjZS14LVs4cHhdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIndoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpvYmFjeiBuYXN6ZSByZWFsaXphY2plXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vc3ZnL2hlcm9BcnJvd0Rvd24uc3ZnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FzaWRlPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJoLVs5MnZoXSBtZDpoLWF1dG8gdy1mdWxsIG1kOnctMS8yIHJlbGF0aXZlIGJnLVsjRjVGMEVDXVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiMS5qcGdcIiBjbGFzcz1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyXCIgaWQ9XCJpbWctc2xpZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggYm90dG9tLTAgcmlnaHQtMCBhYnNvbHV0ZSBweC04IHB5LTYgc3BhY2UteC04IGJnLVsjRjVGMEVDXVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidy1bNTBweF0gaC1bNTBweF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIiBpZD1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9zdmcvc2xpZGVyTGVmdC5zdmdcIiBhbHQ9XCJQb3ByemVkbmllIHpkasSZY2llXCI+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidy1bNTBweF0gaC1bNTBweF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIiBpZD1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vc3ZnL3NsaWRlclJpZ2h0LnN2Z1wiIGFsdD1cIk5hc3TEmXBuZSB6ZGrEmWNpZVwiPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgXHJcbiAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcclxuXHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltZy1zbGlkZXInKTtcclxuICBjb25zdCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JpZ2h0Jyk7XHJcbiAgY29uc3QgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0Jyk7XHJcbiAgY29uc3QgaW1hZ2VzID0gW1xyXG4gICAgJzEuanBnJyxcclxuICAgICdhYm91dFBob3RvLnBuZycsXHJcbiAgICAncHJvamVjdHNJbWFnZXMvaW1nMi5qcGcnLFxyXG4gICAgJ3Byb2plY3RzSW1hZ2VzL2ltZzMuanBnJyxcclxuICAgICdwcm9qZWN0c0ltYWdlcy9pbWc0LmpwZycsXHJcbiAgICAncHJvamVjdHNJbWFnZXMvaW1nNi5qcGcnLFxyXG4gICAgJ3Byb2plY3RzSW1hZ2VzL2ltZzkuanBnJ1xyXG4gIF07XHJcbiAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNsaWRlckltYWdlID0gKGluZGV4KSA9PiB7XHJcbiAgICBpbWcuc3JjID0gaW1hZ2VzW2luZGV4XTtcclxuICB9O1xyXG5cclxuICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gaW1hZ2VzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgY3VycmVudEluZGV4ID0gMDtcclxuICAgICAgdXBkYXRlU2xpZGVySW1hZ2UoY3VycmVudEluZGV4KTtcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudEluZGV4IDwgaW1hZ2VzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgY3VycmVudEluZGV4Kys7XHJcbiAgICAgIHVwZGF0ZVNsaWRlckltYWdlKGN1cnJlbnRJbmRleCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudEluZGV4ID09PSAwKSB7XHJcbiAgICAgIGN1cnJlbnRJbmRleCA9IGltYWdlcy5sZW5ndGggLSAxO1xyXG4gICAgICB1cGRhdGVTbGlkZXJJbWFnZShjdXJyZW50SW5kZXgpO1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50SW5kZXggPiAwKSB7XHJcbiAgICAgIGN1cnJlbnRJbmRleC0tO1xyXG4gICAgICB1cGRhdGVTbGlkZXJJbWFnZShjdXJyZW50SW5kZXgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudEluZGV4ID09PSBpbWFnZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICBjdXJyZW50SW5kZXggPSAwO1xyXG4gICAgICB1cGRhdGVTbGlkZXJJbWFnZShjdXJyZW50SW5kZXgpO1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50SW5kZXggPCBpbWFnZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICBjdXJyZW50SW5kZXgrKztcclxuICAgICAgdXBkYXRlU2xpZGVySW1hZ2UoY3VycmVudEluZGV4KTtcclxuICAgIH1cclxuICB9LCAzMDAwKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm87XHJcbiIsImNvbnN0IHNlYXJjaEZpZWxkID0gKGhpZGUpID0+IHtcclxuICBjb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1pY29uJyk7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWlucHV0Jyk7XHJcbiAgbGV0IGlzSGlkZGVuID0gaGlkZTtcclxuICBzZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGlzSGlkZGVuKSB7XHJcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ21kOmhpZGRlbicpO1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdtZDphbmltYXRlLWhpZGVJbnB1dCcpO1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdtZDphbmltYXRlLWV4cGFuZElucHV0Jyk7XHJcbiAgICAgIGlzSGlkZGVuID0gIWlzSGlkZGVuO1xyXG4gICAgICBzZWFyY2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ21kOmFuaW1hdGUtcm90YXRlUmlnaHQnKTtcclxuICAgICAgc2VhcmNoSWNvbi5jbGFzc0xpc3QuYWRkKCdtZDphbmltYXRlLXJvdGF0ZUxlZnQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNlYXJjaEljb24uY2xhc3NMaXN0LnJlbW92ZSgnbWQ6YW5pbWF0ZS1yb3RhdGVMZWZ0Jyk7XHJcbiAgICAgIHNlYXJjaEljb24uY2xhc3NMaXN0LmFkZCgnbWQ6YW5pbWF0ZS1yb3RhdGVSaWdodCcpO1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdtZDphbmltYXRlLWV4cGFuZElucHV0Jyk7XHJcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ21kOmFuaW1hdGUtaGlkZUlucHV0Jyk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ21kOmhpZGRlbicpO1xyXG4gICAgICB9LCA1MzApO1xyXG4gICAgICBpc0hpZGRlbiA9ICFpc0hpZGRlbjtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IG1vYmlsZU1lbnUgPSAoaGlkZSkgPT4ge1xyXG4gIGxldCBoaWRkZW4gPSBoaWRlO1xyXG4gIGNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnVyZ2VyLW1lbnUnKTtcclxuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaW5rcycpO1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1pbnB1dCcpO1xyXG4gIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3Bkb3duJyk7XHJcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKTtcclxuICBjb25zdCByZWFsaXphdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVhbGl6YXRpb25zJyk7XHJcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0Jyk7XHJcblxyXG4gIGJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCB0b0RhcmtlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kYXJrZW4nKTtcclxuICAgIGlmIChoaWRkZW4pIHtcclxuICAgICAgdG9EYXJrZW4uZm9yRWFjaCgoZGFyaykgPT4ge1xyXG4gICAgICAgIGRhcmsuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZUVsZW1lbnQnLCAnc2hvd0VsZW1lbnQnKTtcclxuICAgICAgICBkYXJrLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24tYWxsJywgJ29wYWNpdHktNTAnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGxpbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICByZWFsaXphdGlvbnMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtc2hvd01vYmlsZU1lbnUnKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnKTtcclxuXHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWV4cGFuZElucHV0Jyk7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIGFib3V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIHJlYWxpemF0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBjb250YWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLW9wYWNpdHknKTtcclxuICAgICAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLW9wYWNpdHknKTtcclxuICAgICAgICByZWFsaXphdGlvbnMuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1vcGFjaXR5Jyk7XHJcbiAgICAgICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLW9wYWNpdHknKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLW9wYWNpdHknKTtcclxuICAgICAgICAgIGFib3V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtb3BhY2l0eScpO1xyXG4gICAgICAgICAgcmVhbGl6YXRpb25zLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtb3BhY2l0eScpO1xyXG4gICAgICAgICAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLW9wYWNpdHknKTtcclxuICAgICAgICAgIGxpbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtc2hvd01vYmlsZU1lbnUnKTtcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgICB9LCAzMDApO1xyXG5cclxuICAgICAgaGlkZGVuID0gIWhpZGRlbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvRGFya2VuLmZvckVhY2goKGRhcmspID0+IHtcclxuICAgICAgICBkYXJrLmNsYXNzTGlzdC5hZGQoJ2hpZGVFbGVtZW50JywgJ3Nob3dFbGVtZW50Jyk7XHJcbiAgICAgICAgZGFyay5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2l0aW9uLWFsbCcsICdvcGFjaXR5LTUwJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWRlY3JlYXNlT3BhY2l0eScpO1xyXG4gICAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWRlY3JlYXNlT3BhY2l0eScpO1xyXG4gICAgICByZWFsaXphdGlvbnMuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWRlY3JlYXNlT3BhY2l0eScpO1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWhpZGVJbnB1dCcpO1xyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbGlua3MuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1oaWRlTW9iaWxlTWVudScpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgbGlua3MuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1oaWRlTW9iaWxlTWVudScpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLWRlY3JlYXNlT3BhY2l0eScpO1xyXG4gICAgICAgICAgICBhYm91dC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLWRlY3JlYXNlT3BhY2l0eScpO1xyXG4gICAgICAgICAgICByZWFsaXphdGlvbnMuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1kZWNyZWFzZU9wYWNpdHknKTtcclxuICAgICAgICAgICAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLWRlY3JlYXNlT3BhY2l0eScpO1xyXG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLWhpZGVJbnB1dCcpO1xyXG4gICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfSwgMjcwKTtcclxuICAgICAgfSwgMjcwKTtcclxuXHJcbiAgICAgIGhpZGRlbiA9ICFoaWRkZW47XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgbmF2YmFyLmNsYXNzTGlzdCA9XHJcbiAgICAnaGlkZUVsZW1lbnQgYmctd2hpdGUgdy1mdWxsIHB4LTYgcHktMyBtZDpwLTYgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHN0aWNreSB0b3AtMCB6LTEwIGgtWzh2aF0nO1xyXG5cclxuICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGxvZ29Db250YWluZXIudGV4dENvbnRlbnQgPSAnTG9nbyc7XHJcbiAgbG9nb0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICA8YSBocmVmPVwiI2hlcm9cIj5cclxuICAgICAgPGltZyBzcmM9XCIuL3N2Zy9naWFyZGRlc2lnbi5zdmdcIiBhbHQ9XCJMb2dvXCI+XHJcbiAgICA8L2E+XHJcbiAgYDtcclxuXHJcbiAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsaW5rcy5pZCA9ICdsaW5rcyc7XHJcbiAgbGlua3MuY2xhc3NMaXN0ID1cclxuICAgICdtZDpmbGV4IHRleHQtWyMxMTExMTFdIG1kOmdhcC0xMCBnYXAtMyBbJj4qXTpjdXJzb3ItcG9pbnRlciBtZDpmbGV4LXJvdyBtZDpyZWxhdGl2ZSBtZDptLTAganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCBtZDpqdXN0aWZ5LWNlbnRlciBtZDppdGVtcy1jZW50ZXIgZml4ZWQgbXQtWzQ1MHB4XSByb3VuZGVkLXhsIHB5LTUgcHgtNiBtZDpwLTAgYmctd2hpdGUgZmxleCBmbGV4LWNvbCBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIHctWzg1dnddIHNoYWRvdy14bCBtZDpzaGFkb3ctbm9uZSBtZDp3LWF1dG8gbWQ6bGVmdC0wIG1kOnRyYW5zbGF0ZS14LTAgaGlkZGVuIGFuaW1hdGUtc2hvd01vYmlsZU1lbnUgbWQ6YW5pbWF0ZS1ub25lIGZvbnQtaW50ZXInO1xyXG5cclxuICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRyb3Bkb3duLmlkID0gJ2Ryb3Bkb3duJztcclxuICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bicsICdmbGV4JywgJ2ZsZXgtY29sJywgJ2dyb3VwJyk7XHJcblxyXG4gIGNvbnN0IG9mZmVyc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgb2ZmZXJzTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI29mZmVycycpO1xyXG4gIG9mZmVyc0xpbmsuaWQgPSAnb2ZmZXInO1xyXG4gIG9mZmVyc0xpbmsudGV4dENvbnRlbnQgPSAnT2ZlcnRhJztcclxuICBvZmZlcnNMaW5rLmNsYXNzTGlzdCA9XHJcbiAgICAnb2ZmZXJzIGZsZXggZ2FwLTIganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCBtZDpqdXN0aWZ5LWNlbnRlciBtZDppdGVtcy1jZW50ZXIgaC1hdXRvIGdyb3VwIGFuaW1hdGUtb3BhY2l0eSc7XHJcblxyXG4gIGNvbnN0IGFycm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYXJyb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZChcclxuICAgICdncm91cC1ob3Zlcjpyb3RhdGUtMTgwJyxcclxuICAgICd0cmFuc2l0aW9uLWFsbCcsXHJcbiAgICAnaGlkZGVuJyxcclxuICAgICdtZDpibG9jaydcclxuICApO1xyXG4gIGFycm93Q29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICA8aW1nIHNyYz1cIi4vc3ZnL2Fycm93RG93bi5zdmdcIiBhbHQ9XCJSb3p3acWEXCI+XHJcbiAgYDtcclxuXHJcbiAgY29uc3Qgb2ZmZXJzTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG9mZmVyc0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcclxuICAgICdvZmZlcnMtbGlzdCcsXHJcbiAgICAndy1hdXRvJyxcclxuICAgICdoLWF1dG8nLFxyXG4gICAgJ21kOnB5LTUnLFxyXG4gICAgJ21kOnB4LTYnLFxyXG4gICAgJ21kOmJnLXdoaXRlJyxcclxuICAgICdtZDptdC1bLTIwMHB4XScsXHJcbiAgICAnbWQ6Z3JvdXAtaG92ZXI6bXQtWzI0cHhdJyxcclxuICAgICdtZDpzaGFkb3cteGwnLFxyXG4gICAgJ21kOnJvdW5kZWQtbWQnLFxyXG4gICAgJ21kOmFic29sdXRlJyxcclxuICAgICd6LVstMTAwXScsXHJcbiAgICAnbWQ6Ym9yZGVyLW5vbmUnLFxyXG4gICAgJ2JvcmRlci1sLTInLFxyXG4gICAgJ2JvcmRlci1zbGF0ZS0zMDAnLFxyXG4gICAgJ3RyYW5zaXRpb24tYWxsJyxcclxuICAgICdtZDptLTAnLFxyXG4gICAgJ21sLTUnLFxyXG4gICAgJ210LTInXHJcbiAgKTtcclxuICBjb25zdCBvZmZlcnNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICBvZmZlcnNMaXN0LmlkID0gJ29mZmVycy1saXN0JztcclxuICBvZmZlcnNMaXN0LmNsYXNzTGlzdC5hZGQoJ3NwYWNlLXktMicsICdtZDp0ZXh0LWNlbnRlcicsICdyZWxhdGl2ZScpO1xyXG4gIGNvbnN0IG9mZmVyRWxlbWVudE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgY29uc3Qgb2ZmZXJFbGVtZW50VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBjb25zdCBvZmZlckVsZW1lbnRUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgb2ZmZXJFbGVtZW50T25lLmlubmVySFRNTCA9IGBcclxuICA8YSBocmVmPVwiI1Byb2pla3R5XCI+UHJvamVrdHk8L2E+XHJcbiAgYDtcclxuICBvZmZlcnNMaXN0LmFwcGVuZENoaWxkKG9mZmVyRWxlbWVudE9uZSk7XHJcbiAgb2ZmZXJFbGVtZW50VHdvLmlubmVySFRNTCA9IGBcclxuICA8YSBocmVmPVwiI1dpenVhbGl6YWNqZVwiPldpenVhbGl6YWNqZTwvYT5cclxuICBgO1xyXG4gIG9mZmVyc0xpc3QuYXBwZW5kQ2hpbGQob2ZmZXJFbGVtZW50VHdvKTtcclxuICBvZmZlckVsZW1lbnRUaHJlZS5pbm5lckhUTUwgPSBgXHJcbiAgPGEgaHJlZj1cIiNSZWFsaXphY2plXCI+UmVhbGl6YWNqZTwvYT5cclxuICBgO1xyXG4gIG9mZmVyc0xpc3QuYXBwZW5kQ2hpbGQob2ZmZXJFbGVtZW50VGhyZWUpO1xyXG5cclxuICBvZmZlcnNMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG9mZmVyc0xpc3QpO1xyXG5cclxuICBvZmZlcnNMaW5rLmFwcGVuZENoaWxkKGFycm93Q29udGFpbmVyKTtcclxuXHJcbiAgZHJvcGRvd24uYXBwZW5kQ2hpbGQob2ZmZXJzTGluayk7XHJcbiAgZHJvcGRvd24uYXBwZW5kQ2hpbGQob2ZmZXJzTGlzdENvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBhYm91dExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyNhYm91dCcpO1xyXG4gIGFib3V0TGluay5jbGFzc0xpc3QuYWRkKFxyXG4gICAgJ2FuaW1hdGUtb3BhY2l0eScsXHJcbiAgICAnZ3JvdXAvdGV4dCcsXHJcbiAgICAnYm94LWJvcmRlcicsXHJcbiAgICAnYWJvdXQnXHJcbiAgKTtcclxuICBhYm91dExpbmsuaW5uZXJIVE1MID0gYFxyXG4gIDxzcGFuPk8gZmlybWllPC9zcGFuPlxyXG4gIDxkaXYgY2xhc3M9XCJ3LTAgaC1bMnB4XSBiZy1zbGF0ZS04MDAgdHJhbnNpdGlvbi1hbGwgZ3JvdXAtaG92ZXIvdGV4dDp3LWZ1bGwgZ3JvdXAtaG92ZXIvdGV4dDpoLVsycHhdXCI+PC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIHJlZ2lzdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI3JlYWxpemF0aW9ucycpO1xyXG4gIHJlZ2lzdGVyTGluay5jbGFzc0xpc3QuYWRkKFxyXG4gICAgJ3RleHQtY2VudGVyJyxcclxuICAgICdhbmltYXRlLW9wYWNpdHknLFxyXG4gICAgJ2dyb3VwL3RleHQnLFxyXG4gICAgJ2JveC1ib3JkZXInLFxyXG4gICAgJ3JlYWxpemF0aW9ucydcclxuICApO1xyXG4gIHJlZ2lzdGVyTGluay5pbm5lckhUTUwgPSBgXHJcbiAgPHNwYW4+UmVhbGl6YWNqZTwvc3Bhbj5cclxuICA8ZGl2IGNsYXNzPVwidy0wIGgtWzJweF0gYmctc2xhdGUtODAwIHRyYW5zaXRpb24tYWxsIGdyb3VwLWhvdmVyL3RleHQ6dy1mdWxsIGdyb3VwLWhvdmVyL3RleHQ6aC1bMnB4XVwiPjwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGNvbnRhY3RMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjY29udGFjdCcpO1xyXG4gIGNvbnRhY3RMaW5rLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAnYW5pbWF0ZS1vcGFjaXR5JyxcclxuICAgICdncm91cC90ZXh0JyxcclxuICAgICdib3gtYm9yZGVyJyxcclxuICAgICdjb250YWN0J1xyXG4gICk7XHJcbiAgY29udGFjdExpbmsuaW5uZXJIVE1MID0gYFxyXG4gIDxzcGFuPktvbnRha3Q8L3NwYW4+XHJcbiAgPGRpdiBjbGFzcz1cInctMCBoLVsycHhdIGJnLXNsYXRlLTgwMCB0cmFuc2l0aW9uLWFsbCBncm91cC1ob3Zlci90ZXh0OnctZnVsbCBncm91cC1ob3Zlci90ZXh0OmgtWzJweF1cIj48L2Rpdj5cclxuICBgO1xyXG5cclxuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NlYXJjaCcpO1xyXG4gIHNlYXJjaElucHV0LmlkID0gJ3NlYXJjaC1pbnB1dCc7XHJcbiAgc2VhcmNoSW5wdXQuY2xhc3NMaXN0ID1cclxuICAgICdiZy10cmFuc3BhcmVudCBoLWF1dG8gb3V0bGluZS1ub25lIHAtMC41IGJvcmRlci1iLTIgYm9yZGVyLWJsYWNrIG1kOmhpZGRlbiB3LTQwIGJveC1ib3JkZXInO1xyXG5cclxuICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0ID0gYGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtZnVsbCBoaWRkZW4gbWQ6YmxvY2sgYW5pbWF0ZS1vcGFjaXR5YDtcclxuICBzZWFyY2hDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gIDxpbWcgc3JjPVwiLi9zdmcvc2VhcmNoLnN2Z1wiIGFsdD1cIlN6dWthalwiIGlkPVwic2VhcmNoLWljb25cIj5cclxuICBgO1xyXG5cclxuICBjb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnVyZ2VyTWVudS5jbGFzc0xpc3QgPSAnbWQ6aGlkZGVuJztcclxuICBidXJnZXJNZW51LmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwic3BhY2UteS0yIGN1cnNvci1wb2ludGVyXCIgaWQ9XCJidXJnZXItbWVudVwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJibG9jayB3LTggaC1bMC4ycmVtXSBiZy1ncmF5LTYwMFwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdy04IGgtWzAuMnJlbV0gYmctZ3JheS02MDBcIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHctNSBoLVswLjJyZW1dIGJnLWdyYXktNjAwXCI+PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGxpbmtzLmFwcGVuZENoaWxkKGRyb3Bkb3duKTtcclxuICBsaW5rcy5hcHBlbmRDaGlsZChhYm91dExpbmspO1xyXG4gIGxpbmtzLmFwcGVuZENoaWxkKHJlZ2lzdGVyTGluayk7XHJcbiAgbGlua3MuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xyXG4gIGxpbmtzLmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcclxuICBsaW5rcy5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xyXG4gIG5hdmJhci5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcclxuICBuYXZiYXIuYXBwZW5kQ2hpbGQobGlua3MpO1xyXG4gIG5hdmJhci5hcHBlbmRDaGlsZChidXJnZXJNZW51KTtcclxuXHJcbiAgY29uc3Qgb2ZmZXJzQ2hpbGRyZW4gPSBvZmZlcnNMaXN0LmNoaWxkTm9kZXM7XHJcbiAgb2ZmZXJzQ2hpbGRyZW4uZm9yRWFjaCgob2ZmZXIpID0+IHtcclxuICAgIG9mZmVyLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICdweC0yJyxcclxuICAgICAgJ3B5LTAuNScsXHJcbiAgICAgICdob3ZlcjpiZy1zbGF0ZS0xMDAnLFxyXG4gICAgICAnaG92ZXI6cHgtMicsXHJcbiAgICAgICdob3ZlcjpweS0wLjUnLFxyXG4gICAgICAnaG92ZXI6cm91bmRlZC1tZCcsXHJcbiAgICAgICdob3ZlcjpzaGFkb3ctc20nLFxyXG4gICAgICAndHJhbnNpdGlvbi1hbGwnXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5hdmJhcik7XHJcblxyXG4gIGNvbnN0IGlzSGlkZGVuID0gdHJ1ZTtcclxuICBzZWFyY2hGaWVsZChpc0hpZGRlbik7XHJcbiAgbW9iaWxlTWVudShpc0hpZGRlbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiIsImNvbnN0IE9mZmVyID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgaWNvbikgPT4ge1xyXG4gIGNvbnN0IG9mZmVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9mZmVycy12aWV3Jyk7XHJcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2UuaWQgPSB0aXRsZTtcclxuICBwYWdlLmlubmVySFRNTCA9IGBcclxuPGRpdiBjbGFzcz1cInctYXV0byBoLWF1dG8gZ3JvdXBcIj5cclxuXHJcbjxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBiZy13aGl0ZSAgdy03MiBtaW4taC1bNDEycHhdIGgtYXV0byBtZDp3LVszNzBweF0gcHktMTIgcHgtMTAgcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbCBncm91cC1ob3ZlcjpbdHJhbnNmb3JtOnJvdGF0ZVkoMzYwZGVnKV0gY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtMTA1IGdyb3VwLWhvdmVyOnNoYWRvdy14bFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInNwYWNlLXktOFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LVs0MHB4XSBoLVs0MHB4XVwiPlxyXG4gICAgICAgICAgICAke2ljb259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlLXktM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6dGV4dC0yeGwgdGV4dC14bCBmb250LW1vbnRzZXJyYXQgZm9udC1tZWRpdW1cIj4ke3RpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1iYXNlXCI+JHtkZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgdy1maXQgY3Vyc29yLXBvaW50ZXIgZ3JvdXAvdGV4dFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyZWVuLTgwMCBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBib3JkZXItYi0yIGJvcmRlci1ncmVlbi04MDAgbWQ6Ym9yZGVyLW5vbmVcIj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kOnRleHQtYmFzZSB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICBEb3dpZWR6IHNpxJkgd2nEmWNlalxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9zdmcvb2ZmZXJBcnJvd1JpZ2h0LnN2Z1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInctMCBoLTAgYmctZ3JlZW4tODAwIHRyYW5zaXRpb24tYWxsIGdyb3VwLWhvdmVyL3RleHQ6dy1mdWxsIGdyb3VwLWhvdmVyL3RleHQ6aC1bMnB4XVwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPC9kaXY+XHJcbiAgYDtcclxuICBvZmZlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9mZmVyO1xyXG4iLCJpbXBvcnQgT2ZmZXIgZnJvbSAnLi9vZmZlcic7XHJcblxyXG5jb25zdCBPZmZlcnMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBzZWN0aW9uLmlkID0gJ29mZmVycyc7XHJcbiAgc2VjdGlvbi5jbGFzc0xpc3QgPVxyXG4gICAgJ3RvLWRhcmtlbiBoaWRlRWxlbWVudCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbCB3LWZ1bGwgbWQ6aC1hdXRvIHNwYWNlLXktMTAgYmctWyNGNUYwRUNdIHAtNSBweS0xMCBwdC1bMTIwcHhdIHBiLVsxNjBweF0gc3BhY2UteS1bOTZweF0nO1xyXG5cclxuICBzZWN0aW9uLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwibWF4LXctWzEwNDBweF0gZmxleC1jb2wgc3BhY2UteS01IHctMy80IG0tYXV0byB0ZXh0LVsjMTExMTExXVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRleHQteHMgdGV4dC1ncmVlbi04MDBcIj5PZmVydGE8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZDp0ZXh0LTV4bCB0ZXh0LTN4bCBsZWFkaW5nLVs1NS4yMHB4XSBmb250LW1vbnRzZXJyYXQgZm9udC1tZWRpdW1cIj5EemlhxYJhbXkgPGk+a29tcGxla3Nvd288L2k+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIHRleHQtYmFzZSBsZWFkaW5nLTZcIj5cclxuICAgICAgICBPZmVydWplbXkga29tcGxldG7EhSBvYnPFgnVnxJkgaW53ZXN0eWNqaSB0ZXJlbsOzdyB6aWVsb255Y2guIFByb2pla3R1amVteSBub3dvY3plc25lIG9ncm9keSBwcnp5ZG9tb3dlIG9yYXogcmV6eWRlbmNqb25hbG5lLiBTdHdvcnp5bXkgZGxhIENpZWJpZSBwcm9qZWt0LCB6d2l6dWFsaXp1amVteSBnbyBpIHdjaWVsaW15IHcgxbx5Y2llLCBhIG5hIGthxbxkeW0gZXRhcGllIHBvc8WCdcW8eW15IHJhZMSFIGkgd2llbG9sZXRuaW0gZG/Fm3dpYWRjemVuaWVtLiBcclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiaGlkZUVsZW1lbnQgb2ZmZXJzLXZpZXcgZ3JpZCBncmlkLWNvbHMtMSBwbGFjZS1pdGVtcy1jZW50ZXIgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTE2IHctYXV0byBoLWZ1bGwgbWF4LXctWzE0NDBweF0gbWF4LXB4LVs4OHB4XVwiPjwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcblxyXG4gIGNvbnN0IGZpcnN0T2ZmZXJUaXRsZSA9ICdQcm9qZWt0eSc7XHJcbiAgY29uc3QgZmlyc3RPZmZlckRlc2NyaXB0aW9uID1cclxuICAgICdaYXByb2pla3R1amVteSBUd8OzaiBvZ3LDs2QgdyBub3dvY3plc255bSBzdHlsdSBpIHogbmFqbGVwc3p5bSB3eWtvcnp5c3RhbmllbSBpc3RuaWVqxIVjZWogcHJ6ZXN0cnplbmkuJztcclxuICBjb25zdCBmaXJzdE9mZmVySWNvbiA9IGA8aW1nIHNyYz1cIi4vc3ZnL3Byb2plY3RzSWNvbi5zdmdcIiBhbHQ9XCJcIj5gO1xyXG4gIE9mZmVyKGZpcnN0T2ZmZXJUaXRsZSwgZmlyc3RPZmZlckRlc2NyaXB0aW9uLCBmaXJzdE9mZmVySWNvbik7XHJcblxyXG4gIGNvbnN0IHNlY29uZE9mZmVyVGl0bGUgPSAnV2l6dWFsaXphY2plJztcclxuICBjb25zdCBzZWNvbmRPZmZlckRlc2NyaXB0aW9uID1cclxuICAgICdQcnplZHN0YXdpbXkgQ2kgcHJvamVrdHkga29uY2VwY3lqbmUgdyBwb3N0YWNpIHdpcnR1YWxuZWdvIHNwYWNlcnUgYW5pbW93YW5lZ28gdyB0ZWNobm9sb2dpaSAzRC4nO1xyXG4gIGNvbnN0IHNlY29uZE9mZmVySWNvbiA9IGA8aW1nIHNyYz1cIi4vc3ZnL3Zpc3VhbEljb24uc3ZnXCIgYWx0PVwiXCI+YDtcclxuICBPZmZlcihzZWNvbmRPZmZlclRpdGxlLCBzZWNvbmRPZmZlckRlc2NyaXB0aW9uLCBzZWNvbmRPZmZlckljb24pO1xyXG5cclxuICBjb25zdCB0aGlyZE9mZmVyVGl0bGUgPSAnUmVhbGl6YWNqZSc7XHJcbiAgY29uc3QgdGhpcmRPZmZlckRlc2NyaXB0aW9uID1cclxuICAgICdacmVhbGl6dWplbXkgVHdvamUgbWFyemVuaWUgcHJ6eSB1xbx5Y2l1IG5ham5vd3N6eWNoIHJvendpxIV6YcWEIGkgemFhd2Fuc293YW55Y2ggdGVjaG5vbG9naWkuJztcclxuICBjb25zdCB0aGlyZE9mZmVySWNvbiA9IGA8aW1nIHNyYz1cIi4vc3ZnL3JlYWxpemF0aW9uc0ljb24uc3ZnXCIgYWx0PVwiXCI+YDtcclxuICBPZmZlcih0aGlyZE9mZmVyVGl0bGUsIHRoaXJkT2ZmZXJEZXNjcmlwdGlvbiwgdGhpcmRPZmZlckljb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2ZmZXJzO1xyXG4iLCJpbXBvcnQgTWFjeSBmcm9tICdtYWN5JztcclxuXHJcbmNvbnN0IGhpZGVHYWxsZXJ5ID0gKG1hY3kpID0+IHtcclxuICBjb25zdCBleHBhbmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwYW5kJyk7XHJcbiAgY29uc3QgYmx1ckJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnQmx1cmVkJyk7XHJcbiAgY29uc3QgcmVhbGl6YXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlYWxpemF0aW9ucy1jb250YWluZXInKTtcclxuICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2VzJyk7XHJcbiAgY29uc3QgaGlkZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoaWRlLWdhbGxlcnknKTtcclxuICBjb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnknKTtcclxuXHJcbiAgZ2FsbGVyeS5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgJ3ctWzg1dnddJyxcclxuICAgICdiZy13aGl0ZScsXHJcbiAgICAnaC1bODB2aF0nLFxyXG4gICAgJ2ZpeGVkJyxcclxuICAgICdzaGFkb3cteGwnLFxyXG4gICAgJ3RvcC0xLzInLFxyXG4gICAgJ2xlZnQtMS8yJyxcclxuICAgICctdHJhbnNsYXRlLXgtMS8yJyxcclxuICAgICctdHJhbnNsYXRlLXktMS8yJyxcclxuICAgICdwLTUnLFxyXG4gICAgJ3JvdW5kZWQteGwnLFxyXG4gICAgJ3NoYWRvdy14bCcsXHJcbiAgICAnbS0wJyxcclxuICAgICdvdmVyZmxvdy15LXNjcm9sbCcsXHJcbiAgICAnYW5pbWF0ZS1vcGFjaXR5J1xyXG4gICk7XHJcbiAgaW1hZ2VzLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtb3BhY2l0eScpO1xyXG4gIHJlYWxpemF0aW9ucy5jbGFzc0xpc3QuYWRkKCdtZDpoLVsxODI0cHhdJyk7XHJcbiAgaW1hZ2VzLmNsYXNzTGlzdC5hZGQoJ21kOmgtWzE0NzVweF0nKTtcclxuICBpbWFnZXMuY2xhc3NMaXN0LmFkZCgnaC1bMTAwMHB4XScpO1xyXG4gIGJsdXJCZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICBpbWFnZXMuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaGlkZGVuJyk7XHJcbiAgZXhwYW5kQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIGhpZGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgaGlkZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4Jyk7XHJcbiAgbWFjeS5ydW5PbkltYWdlTG9hZCgpO1xyXG59O1xyXG5cclxuY29uc3QgZXhwYW5kR2FsbGVyeSA9IChtYWN5KSA9PiB7XHJcbiAgY29uc3QgZXhwYW5kQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cGFuZCcpO1xyXG4gIGNvbnN0IGltYWdlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZXMtY29udGFpbmVyJyk7XHJcbiAgY29uc3QgYmx1ckJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnQmx1cmVkJyk7XHJcbiAgY29uc3QgcmVhbGl6YXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlYWxpemF0aW9ucy1jb250YWluZXInKTtcclxuICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2VzJyk7XHJcbiAgY29uc3QgaGlkZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoaWRlLWdhbGxlcnknKTtcclxuICBjb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnknKTtcclxuXHJcbiAgZXhwYW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaW1hZ2VzLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtb3BhY2l0eScpO1xyXG4gICAgZ2FsbGVyeS5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAndy1bODV2d10nLFxyXG4gICAgICAnYmctd2hpdGUnLFxyXG4gICAgICAnaC1bODB2aF0nLFxyXG4gICAgICAnZml4ZWQnLFxyXG4gICAgICAnc2hhZG93LXhsJyxcclxuICAgICAgJ3RvcC0xLzInLFxyXG4gICAgICAnbGVmdC0xLzInLFxyXG4gICAgICAnLXRyYW5zbGF0ZS14LTEvMicsXHJcbiAgICAgICctdHJhbnNsYXRlLXktMS8yJyxcclxuICAgICAgJ3AtNScsXHJcbiAgICAgICdyb3VuZGVkLXhsJyxcclxuICAgICAgJ3NoYWRvdy14bCcsXHJcbiAgICAgICdtLTAnLFxyXG4gICAgICAnb3ZlcmZsb3cteS1zY3JvbGwnLFxyXG4gICAgICAnYW5pbWF0ZS1vcGFjaXR5J1xyXG4gICAgKTtcclxuXHJcbiAgICByZWFsaXphdGlvbnMuY2xhc3NMaXN0LnJlbW92ZSgnbWQ6aC1bMTgyNHB4XScpO1xyXG4gICAgcmVhbGl6YXRpb25zLmNsYXNzTGlzdC5hZGQoJ2gtYXV0bycpO1xyXG4gICAgaW1hZ2VzLmNsYXNzTGlzdC5yZW1vdmUoJ21kOmgtWzE0NzVweF0nKTtcclxuICAgIGltYWdlcy5jbGFzc0xpc3QucmVtb3ZlKCdoLVsxMDAwcHhdJyk7XHJcbiAgICBibHVyQmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBleHBhbmRCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBoaWRlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgaGlkZUJ0bi5jbGFzc0xpc3QuYWRkKCdmbGV4Jyk7XHJcbiAgICBtYWN5LnJ1bk9uSW1hZ2VMb2FkKCk7XHJcbiAgICBoaWRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBoaWRlR2FsbGVyeShtYWN5KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgUmVhbGl6YXRpb25zID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgc2VjdGlvbi5pZCA9ICdyZWFsaXphdGlvbnMnO1xyXG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcclxuICAgICdiZy1bI0RDQzFBQl0nLFxyXG4gICAgJ3ctZnVsbCcsXHJcbiAgICAnbWQ6aC1bMTgyNHB4XScsXHJcbiAgICAnaC1hdXRvJyxcclxuICAgICdwdC1bMTIwcHhdJyxcclxuICAgICdwYi0xMScsXHJcbiAgICAncmVhbGl6YXRpb25zLWNvbnRhaW5lcicsXHJcbiAgICAnei0xMCcsXHJcbiAgICAndG8tZGFya2VuJ1xyXG4gICk7XHJcbiAgc2VjdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIHJlbGF0aXZlXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgaC1hdXRvIGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCBnYXAtNCBwbC0xMCBtZDpwbC00MCBwYi0yNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmVlbi04MDAgdGV4dC14c1wiPlJlYWxpemFjamU8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtbW9udHNlcnJhdCBmb250LW1lZGl1bVwiPk5hc3plIDxpPnByb2pla3R5PC9pPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VzIHJlbGF0aXZlIGgtWzEwMDBweF0gbWQ6aC1bMTQ3NXB4XSBvdmVyZmxvdy1oaWRkZW4gdHJhbnNpdGlvbi1hbGxcIiBpZD1cImltYWdlcy1nYWxsZXJ5XCI+XHJcbiAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5XCI+XHJcblxyXG4gICAgICAgICAgPGRpdiBpZD1cImltYWdlcy1jb250YWluZXJcIiBjbGFzcz1cIlsmPmltZ106dy1bNDUwcHhdIFsmPmltZ106b2JqZWN0LWNvdmVyIFsmPmltZ106YWxpZ24tdG9wXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wcm9qZWN0c0ltYWdlcy9pbWc5LmpwZ1wiIGFsdD1cIkltZzlcIiBjbGFzcz1cIm1kOmgtWzYwMXB4XSBoLWF1dG9cIi8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wcm9qZWN0c0ltYWdlcy9pbWc4LmpwZ1wiIGFsdD1cIkltZzhcIiBjbGFzcz1cIm1kOmgtWzMzOHB4XSBoLWF1dG9cIi8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wcm9qZWN0c0ltYWdlcy9pbWc3LmpwZ1wiIGFsdD1cIkltZzdcIiBjbGFzcz1cIm1kOmgtWzQ1MXB4XSBoLWF1dG9cIi8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wcm9qZWN0c0ltYWdlcy9pbWc1LmpwZ1wiIGFsdD1cIkltZzVcIiBjbGFzcz1cIm1kOmgtWzQ1MnB4XSBoLWF1dG9cIi8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wcm9qZWN0c0ltYWdlcy9pbWc0LmpwZ1wiIGFsdD1cIkltZzRcIiBjbGFzcz1cIm1kOmgtWzYwM3B4XSBoLWF1dG9cIi8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wcm9qZWN0c0ltYWdlcy9pbWc2LmpwZ1wiIGFsdD1cIkltZzZcIiBjbGFzcz1cIm1kOmgtWzQ1MnB4XSBoLWF1dG9cIi8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wcm9qZWN0c0ltYWdlcy9pbWcyLmpwZ1wiIGFsdD1cIkltZzJcIiBjbGFzcz1cIm1kOmgtWzYwMXB4XSBoLWF1dG9cIi8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wcm9qZWN0c0ltYWdlcy9pbWczLmpwZ1wiIGFsdD1cIkltZzNcIiBjbGFzcz1cIm1kOmgtWzMzOHB4XSBoLWF1dG9cIi8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wcm9qZWN0c0ltYWdlcy9pbWcxLmpwZ1wiIGFsdD1cIkltZzFcIiBjbGFzcz1cIm1kOmgtWzMzOHB4XSBoLWF1dG9cIi8+XHJcblxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vcHJvamVjdHNJbWFnZXMvaW1nOS5qcGdcIiBhbHQ9XCJJbWc5XCIgY2xhc3M9XCJtZDpoLVs2MDFweF0gaC1hdXRvXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vcHJvamVjdHNJbWFnZXMvaW1nOC5qcGdcIiBhbHQ9XCJJbWc4XCIgY2xhc3M9XCJtZDpoLVszMzhweF0gaC1hdXRvXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vcHJvamVjdHNJbWFnZXMvaW1nNy5qcGdcIiBhbHQ9XCJJbWc3XCIgY2xhc3M9XCJtZDpoLVs0NTFweF0gaC1hdXRvXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vcHJvamVjdHNJbWFnZXMvaW1nNS5qcGdcIiBhbHQ9XCJJbWc1XCIgY2xhc3M9XCJtZDpoLVs0NTJweF0gaC1hdXRvXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vcHJvamVjdHNJbWFnZXMvaW1nNC5qcGdcIiBhbHQ9XCJJbWc0XCIgY2xhc3M9XCJtZDpoLVs2MDNweF0gaC1hdXRvXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vcHJvamVjdHNJbWFnZXMvaW1nNi5qcGdcIiBhbHQ9XCJJbWc2XCIgY2xhc3M9XCJtZDpoLVs0NTJweF0gaC1hdXRvXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vcHJvamVjdHNJbWFnZXMvaW1nMi5qcGdcIiBhbHQ9XCJJbWcyXCIgY2xhc3M9XCJtZDpoLVs2MDFweF0gaC1hdXRvXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vcHJvamVjdHNJbWFnZXMvaW1nMy5qcGdcIiBhbHQ9XCJJbWczXCIgY2xhc3M9XCJtZDpoLVszMzhweF0gaC1hdXRvXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vcHJvamVjdHNJbWFnZXMvaW1nMS5qcGdcIiBhbHQ9XCJJbWcxXCIgY2xhc3M9XCJtZDpoLVszMzhweF0gaC1hdXRvXCIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImhpZGUtZ2FsbGVyeVwiIGNsYXNzPVwic3RpY2t5IGJnLXdoaXRlIGJvdHRvbS0wIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB0LVsxMnB4XSBwYi1bMTRweF0gcHgtWzIycHhdIGdhcC1bOHB4XSBib3JkZXIgYm9yZGVyLVsjMTExMTExXSByb3VuZGVkLWZ1bGwgaGlkZGVuIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5ad2nFhDwvc3Bhbj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3N2Zy9leHBhbmQuc3ZnXCIgY2xhc3M9XCJyb3RhdGUtMTgwXCIvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwiYmdCbHVyZWRcIiBjbGFzcz1cInctZnVsbCBoLVsxMDAwcHhdIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1bI0RDQzFBQl0gIGFic29sdXRlIGJvdHRvbS0wIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtZW5kXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwiZXhwYW5kXCIgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwdC1bMTJweF0gcGItWzE0cHhdIHB4LVsyMnB4XSBnYXAtWzhweF0gYm9yZGVyIGJvcmRlci1bIzExMTExMV0gcm91bmRlZC1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlJvendpxYQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9zdmcvZXhwYW5kLnN2Z1wiLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG4gIGNvbnN0IG1hY3kgPSBNYWN5KHtcclxuICAgIGNvbnRhaW5lcjogJyNpbWFnZXMtY29udGFpbmVyJyxcclxuICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgY29sdW1uczogMSxcclxuICAgIGJyZWFrQXQ6IHtcclxuICAgICAgMzUwOiB7XHJcbiAgICAgICAgbWFyZ2luOiB7XHJcbiAgICAgICAgICB4OiA3LFxyXG4gICAgICAgICAgeTogN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uczogMlxyXG4gICAgICB9LFxyXG4gICAgICA0MDA6IHtcclxuICAgICAgICBtYXJnaW46IHtcclxuICAgICAgICAgIHg6IDEwLFxyXG4gICAgICAgICAgeTogMTBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbnM6IDJcclxuICAgICAgfSxcclxuICAgICAgNzAwOiB7XHJcbiAgICAgICAgbWFyZ2luOiB7XHJcbiAgICAgICAgICB4OiAyMCxcclxuICAgICAgICAgIHk6IDIwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5zOiAzXHJcbiAgICAgIH0sXHJcbiAgICAgIDE4MDA6IHtcclxuICAgICAgICBtYXJnaW46IHtcclxuICAgICAgICAgIHg6IDIwLFxyXG4gICAgICAgICAgeTogMjBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbnM6IDRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBleHBhbmRHYWxsZXJ5KG1hY3kpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhbGl6YXRpb25zO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgTmF2IGZyb20gJy4vY29tcG9uZW50cy9uYXYnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCBIZXJvIGZyb20gJy4vY29tcG9uZW50cy9oZXJvJztcbmltcG9ydCBPZmZlcnMgZnJvbSAnLi9jb21wb25lbnRzL29mZmVycyc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL2Fib3V0JztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29tcG9uZW50cy9jb250YWN0JztcbmltcG9ydCBSZWFsaXphdGlvbnMgZnJvbSAnLi9jb21wb25lbnRzL3JlYWxpemF0aW9ucyc7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdO1xucm9vdC5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtc21vb3RoJyk7XG5cbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYmctWyNGNUYwRUNdJywgJ2ZvbnQtaW50ZXInKTtcblxuTmF2KCk7XG5IZXJvKCk7XG5PZmZlcnMoKTtcbkFib3V0KCk7XG5SZWFsaXphdGlvbnMoKTtcbkNvbnRhY3QoKTtcbkZvb3RlcigpO1xuXG5jb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2hvd0VsZW1lbnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dFbGVtZW50Jyk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5jb25zdCB0b0FuaW1hdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlkZUVsZW1lbnQnKTtcbnRvQW5pbWF0ZS5mb3JFYWNoKChlbCkgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShlbCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9