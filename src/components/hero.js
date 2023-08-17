const Hero = () => {
  const main = document.createElement('main');

  main.innerHTML = `
  <div class="flex w-full h-screen">
  
    <aside class="flex-col w-3/4 h-auto space-y-16 bg-[#DCC1AB] px-10 py-16">
        <div class="space-y-10">
            <div class="text-6xl">Nowoczesna aranżacja Twojego ogrodu</div>
            
            <div class="text-base">Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.</div>
        </div>

        <div class="flex justify-between [&>a]:cursor-pointer">
            <button class="bg-green-800 text-white px-[24px] py-[12px] rounded-full">Skontaktuj się z nami</button>
            <a href="#realizacje" class="flex space-x-3 w-fit border-solid border-2 border-green-800 px-[24px] py-[12px] rounded-full text-green-800">
            <span class="whitespace-nowrap">Zobacz nasze realizacje</span>
            <img src="./heroArrowDown.svg" alt="">
            </a>
        </div>

    </aside>

    <div class=" h-auto w-full relative">
        <div class="flex bottom-0 right-0 absolute">
            <button class="w-[50px] h-[50px] flex justify-center items-center bg-slate-200"><-</button>
            <button class="w-[50px] h-[50px] flex justify-center items-center bg-slate-300">-></button>
        </div>
    </div>
  
  </div>
  `;

  document.body.appendChild(main);
};

export default Hero;
