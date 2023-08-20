const Hero = () => {
  const main = document.createElement('main');

  main.innerHTML = `
  <div class="flex flex-col md:flex-row w-full md:h-auto h-full">
  
    <aside class="h-full flex-col w-full md:w-3/4  md:h-auto space-y-16 md:space-y-12 bg-[#DCC1AB] px-10 py-12">
        <div class="space-y-10">
            <div class="text-6xl">Nowoczesna aranżacja Twojego ogrodu</div>
            
            <div class="text-base">Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.</div>
        </div>

        <div class="flex-col space-y-3 md:flex justify-between [&>a]:cursor-pointer">
            <button class="bg-green-800 text-white px-[24px] py-[12px] rounded-full w-fit hover:shadow-md hover:scale-105">Skontaktuj się z nami</button>
            <a href="#realizacje" class="flex space-x-3 w-fit border-solid border-2 border-green-800 px-[24px] py-[12px] rounded-full text-green-800">
            <span class="whitespace-nowrap">Zobacz nasze realizacje</span>
            <img src="./heroArrowDown.svg" alt="">
            </a>
        </div>

    </aside>

    <div class="h-screen md:h-auto w-full relative bg-amber-200">
        <div class="flex bottom-0 right-0 absolute">
            <button class="w-[50px] h-[50px] flex justify-center items-center bg-slate-200">
                <img src="./sliderLeft.svg" alt="Poprzednie zdjęcie">
            </button>
            <button class="w-[50px] h-[50px] flex justify-center items-center bg-slate-300">
                <img src="./sliderRight.svg" alt="Poprzednie zdjęcie">
            </button>
        </div>
    </div>
  
  </div>
  `;

  document.body.appendChild(main);
};

export default Hero;
