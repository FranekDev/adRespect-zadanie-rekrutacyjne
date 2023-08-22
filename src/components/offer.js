const Offer = (title, description, icon) => {
  const offerContainer = document.querySelector('.offers-view');
  const page = document.createElement('div');
  //   page.classList = 'px-10 py-12';
  page.id = title;
  page.innerHTML = `
<div class="w-auto h-auto group">

<div class="flex-col bg-white  w-72 h-auto md:w-[370px] space-y-10 md:space-y-20 py-12 px-10 rounded-xl transition-all group-hover:[transform:rotateY(360deg)] cursor-pointer hover:scale-105 group-hover:shadow-xl">
    <div class="space-y-8">
        <div>
            ${icon}
        </div>
        <div class="space-y-3">
            <div class="md:text-2xl text-xl font-montserrat font-medium">${title}</div>
            <div class="text-base">${description}</div>
        </div>
    </div>
    <div class="flex flex-col w-fit cursor-pointer group/text">
        <div class="text-green-800 flex justify-start items-center space-x-2 border-b-2 border-green-800 md:border-none">
        
            <div class="md:text-base text-sm">
                Dowiedz się więcej
            </div>
            <div>
                <img src="./svg/offerArrowRight.svg" alt="">
            </div>

        </div>
        <div class="w-0 h-0 bg-green-800 transition-all group-hover/text:w-full group-hover/text:h-[2px]"></div>
    </div>
</div>

</div>
  `;
  offerContainer.appendChild(page);
};

export default Offer;
