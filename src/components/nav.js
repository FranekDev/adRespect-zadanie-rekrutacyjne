const mobileMenu = (hide) => {
  const burgerMenu = document.querySelector('#burger-menu');
  const input = document.querySelector('#search-input');
  let isHidden = hide;
  burgerMenu.addEventListener('click', () => {
    if (isHidden) {
      input.classList.remove('hidden');
      isHidden = !isHidden;
    } else {
      input.classList.add('animate-hideInput');
      setTimeout(() => {
        input.classList.add('hidden');
      }, 530);
      isHidden = !isHidden;
    }
  });
};

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

  const searchInput = document.createElement('input');
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('placeholder', 'Search');
  searchInput.id = 'search-input';
  searchInput.classList =
    'bg-transparent h-full outline-none p-1 border-b-2 border-black hidden w-40 animate-expandInput';

  const searchContainer = document.createElement('div');
  searchContainer.classList = `flex justify-center items-center`;
  searchContainer.innerHTML = `
  <img src="./search.svg" alt="Szukaj" id="burger-menu">
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

  links.appendChild(offersLink);
  links.appendChild(aboutLink);
  links.appendChild(registerLink);
  links.appendChild(contactLink);
  links.appendChild(searchInput);
  links.appendChild(searchContainer);
  navbar.appendChild(logoContainer);
  navbar.appendChild(links);
  navbar.appendChild(burgerMenu);

  document.body.appendChild(navbar);

  const isHidden = true;
  mobileMenu(isHidden);
};

export default Nav;
