const Footer = () => {
  const footer = document.createElement('footer');
  const footerClasses = `bg-black w-full h-auto text-white px-[40px] py-[80px] flex-col space-y-20`;
  footer.classList = footerClasses;
  footer.innerHTML = `
  <div class="flex-col space-y-8">

    <div class="w-full flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between">
      logo
      <aside class="flex justify-center items-center h-auto gap-6 text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
        <div class="w-32 md:w-auto lg:w-auto xl:w-auto 2xl:w-auto">Daj znać, co możemy dla Ciebie zrobic!</div>
        <button class='w-git h-auto bg-green-700 py-2 px-3 rounded-full'>
          Skontaktuj się z nami
        </button>
      </aside>
    </div>

    <div class="w-full h-[1px] bg-slate-300"></div>


    <div class="flex w-full md:h-10 xl:h-10 2xl:h-10 lg:h-10 h-auto justify-between">
      <ul class="flex-col md:flex-row xl:flex 2xl:flex lg:flex gap-8" >
        <li>Kontakt</li>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Linkedin</li>
      </ul>
      <div class="flex-col lg:flex-row md:flex-row xl:flex-row 2xl:flex-row gap-8 w-fit">
        <div>000-000-000</div>
        <div>giarddesign@kontakt.pl</div>
      </div>
    </div>

    </div>


    <div class="flex justify-between">

      <div>
        <span>Prawa zastrzeżone @ 2022</span>
      </div>
    
      <div>
        <span>made by</span>
        logo
      </div>

    </div>

  `;

  document.body.appendChild(footer);
};

export default Footer;
