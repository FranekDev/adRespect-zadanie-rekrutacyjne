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

export default Nav;
