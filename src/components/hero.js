const Hero = () => {
  const main = document.createElement('main');
  main.id = 'hero';

  main.innerHTML = `
  <div class="flex flex-col md:flex-row w-full h-[92vh]">
  
    <aside class="h-full flex flex-col justify-center items-center w-full md:w-3/4 space-y-16 md:space-y-12 bg-[#DCC1AB] px-10 py-12">
        <div class="space-y-10">
            <div class="text-6xl">Nowoczesna aranżacja Twojego ogrodu</div>
            
            <div class="text-base leading-6">Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.</div>
        </div>

        <div class=" flex flex-col space-y-3 lg:flex-row justify-between [&>a]:cursor-pointer lg:space-y-0 lg:space-x-9">
            <button class="bg-green-800 text-white px-6 pt-[12px] pb-[14px] rounded-full w-fit hover:shadow-md lg:whitespace-nowrap hover:bg-green-900 transition-all">
                Skontaktuj się z nami
            </button>
            <a href="#realizacje" class="flex w-fit border-solid border-2 border-green-800 px-[22px] pt-[12px] pb-[14px] rounded-full text-green-800">
                <div class="flex justify-center items-center space-x-[8px]">
                    <div class="flex items-center justify-center">
                        <p class="whitespace-nowrap">
                            Zobacz nasze realizacje
                        </p>
                    </div>
                    <img src="./heroArrowDown.svg" alt="">
                </div>    
            </a>
        </div>

    </aside>

    <div class="h-screen md:h-auto w-full relative bg-amber-200">
        <div class="flex bottom-0 right-0 absolute px-8 py-6 space-x-8 bg-[#F5F0EC]">
            <button class="w-[50px] h-[50px] flex justify-center items-center">
                <img src="./sliderLeft.svg" alt="Poprzednie zdjęcie">
            </button>
            <button class="w-[50px] h-[50px] flex justify-center items-center">
                <img src="./sliderRight.svg" alt="Poprzednie zdjęcie">
            </button>
        </div>
    </div>
  
  </div>
  `;

  document.body.appendChild(main);
};

export default Hero;
