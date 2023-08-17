import Offer from './offer';

const Offers = () => {
  const section = document.createElement('section');
  section.classList =
    'flex-col w-full h-auto md:h-screen space-y-10 bg-[#F5F0EC] p-5 py-10';

  section.innerHTML = `
  <div class="max-w-[1040px] flex-col space-y-5 w-3/4 m-auto">
    <div class="text-xs text-green-800">Oferta</div>
    <div class="md:text-5xl text-3xl">Działamy <i>kompleksowo</i></div>
    <div class="md:text-base w-full text-md">
        Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne. Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie, a na każdym etapie posłużymy radą i wieloletnim doświadczeniem. 
    </div>
  </div>

  <div class="offers-view flex flex-col md:px-5 md:flex justify-center items-center w-full space-y-5 h-auto"></div>
  `;

  document.body.appendChild(section);

  const firstOfferTitle = 'Projekty';
  const firstOfferDescription =
    'Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.';
  const firstOfferIcon = `<img src="./projectsIcon.svg" alt="">`;
  Offer(firstOfferTitle, firstOfferDescription, firstOfferIcon);

  const secondOfferTitle = 'Wizualizacje';
  const secondOfferDescription =
    'Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.';
  const secondOfferIcon = `<img src="./visualIcon.svg" alt="">`;
  Offer(secondOfferTitle, secondOfferDescription, secondOfferIcon);

  const thirdOfferTitle = 'Realizacje';
  const thirdOfferDescription =
    'Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.';
  const thirdOfferIcon = `<img src="./realizationsIcon.svg" alt="">`;
  Offer(thirdOfferTitle, thirdOfferDescription, thirdOfferIcon);
};

export default Offers;
