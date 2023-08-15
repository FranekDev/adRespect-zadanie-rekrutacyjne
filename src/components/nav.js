// import logo from '../../assets/giarddesign.svg';
// import arrowIcon from '../../assets/arrowDown.svg';
// import searchIcon from '../../assets/search.svg';

const Nav = () => {
  const navbar = document.createElement('nav');
  navbar.classList =
    'bg-slate-100 w-full p-6 flex justify-between items-center sticky top-0';

  // const logoContainer = document.createElement('object');
  // logoContainer.classList = 'w-[400px] h-auto';
  // logoContainer.setAttribute('type', 'image/svg');
  // logoContainer.setAttribute('data', '../../assets/giarddesign.svg');
  //   logoContainer.innerHTML = logo;

  //   logoContainer.appendChild(logoImage);
  const logoContainer = document.createElement('span');
  logoContainer.textContent = 'Logo';

  const links = document.createElement('div');
  links.classList = 'flex gap-10 [&>*]:cursor-pointer';

  const offersLink = document.createElement('a');
  offersLink.setAttribute('href', '#offers');
  offersLink.textContent = 'Oferta';

  // const arrowContainer = document.createElementNS(
  //   'http://www.w3.org/2000/svg',
  //   'svg'
  // );
  // arrowContainer.classList.add('w-4');
  // const arrowImage = document.createElementNS(
  //   'http://www.w3.org/2000/svg',
  //   'use'
  // );
  // arrowImage.setAttribute('href', arrowIcon);
  // arrowImage.setAttributeNS(
  //   'http://www.w3.org/1999/xlink',
  //   'xlink:href',
  //   arrowIcon
  // );
  // arrowContainer.appendChild(arrowImage);
  const arrowContainer = document.createElement('span');
  arrowContainer.textContent = '^';

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

  const searchContainer = document.createElement('span');
  searchContainer.textContent = 'Q';

  // const searchContainer = document.createElementNS(
  //   'http://www.w3.org/2000/svg',
  //   'svg'
  // );
  // searchContainer.classList.add('w-6');
  // //   const searchImage = document.createElementNS(
  // //     'http://www.w3.org/2000/svg',
  // //     'image'
  // //   );
  // //   searchImage.setAttribute('href', searchIcon);
  // //   searchImage.setAttribute('width', '100%');
  // //   searchImage.setAttribute('height', '100%');
  // const svgContainer = document.createElement('object');
  // svgContainer.setAttribute('type', 'image/svg+xml');
  // svgContainer.setAttribute('data', 'search.svg');

  // searchContainer.appendChild(svgContainer);

  links.appendChild(offersLink);
  links.appendChild(aboutLink);
  links.appendChild(registerLink);
  links.appendChild(contactLink);
  links.appendChild(searchContainer);
  navbar.appendChild(logoContainer);
  navbar.appendChild(links);

  document.body.appendChild(navbar);
};

export default Nav;
