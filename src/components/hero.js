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

export default Hero;
