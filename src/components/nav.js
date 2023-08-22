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

export default Nav;
