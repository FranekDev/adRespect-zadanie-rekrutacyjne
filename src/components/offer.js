const Offer = (title, description, icon) => {
  const offerContainer = document.querySelector('.offers-view');
  const page = document.createElement('div');
  page.innerHTML = `
  <div class="flex-col bg-white md:w-80 w-72 h-auto space-y-10 md:space-y-20 p-5 rounded-xl">
    <div class="space-y-3">
        <div>
            ${icon}
        </div>
        <div class="md:text-2xl text-xl">${title}</div>
        <div class="md:text-base text-sm">${description}</div>
    </div>
    <div class="text-green-800 flex justify-start items-center space-x-2 border-b-2 border-green-800 w-fit cursor-pointer">
        <div class="md:text-base text-sm">
            Dowiedz się więcej
        </div>
        <div>
            <img src="./offerArrowRight.svg" alt="">
        </div>
        </div>
  </div>
  `;
  offerContainer.appendChild(page);
};

export default Offer;
