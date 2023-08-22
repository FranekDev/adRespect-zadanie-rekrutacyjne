import Macy from 'macy';

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
    'realizations-container'
  );
  section.innerHTML = `
    <div class="h-full relative">

        <div class="w-full h-auto flex flex-col justify-start items-start gap-4 pl-10 md:pl-40 pb-24">
            <div class="text-green-800 text-xs">Realizacje</div>
            <div class="text-5xl">Nasze <i>projekty</i></div>
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
  const macy = Macy({
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

export default Realizations;
