const Offer = (title, description, icon) => {
  const offerContainer = document.querySelector('.offers-view');
  const page = document.createElement('div');
  page.innerHTML = `
  <div class="flex-col bg-white md:w-80 w-72 h-[370px] space-y-10 md:space-y-20 py-12 px-10 rounded-xl transition-all hover:[transform:rotateY(360deg)] cursor-pointer hover:scale-105 hover:shadow-xl">
    <div class="space-y-3">
        <div>
            ${icon}
        </div>
        <div class="md:text-2xl text-xl">${title}</div>
        <div class="md:text-base text-sm">${description}</div>
    </div>
    <div class="flex flex-col w-fit cursor-pointer group">
        <div class="text-green-800 flex justify-start items-center space-x-2 border-b-2 border-green-800 md:border-none">
        
            <div class="md:text-base text-sm">
                Dowiedz się więcej
            </div>
            <div>
                <img src="./offerArrowRight.svg" alt="">
            </div>

        </div>
        <div class="w-0 h-0 bg-green-800 transition-all group-hover:w-full group-hover:h-[2px]"></div>
    </div>
  </div>
  `;
  offerContainer.appendChild(page);
};

export default Offer;
