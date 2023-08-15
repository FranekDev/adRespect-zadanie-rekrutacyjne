const Footer = () => {
  const footer = document.createElement('footer');
  const footerClasses = `bg-black w-full h-auto text-white px-[40px] py-[80px] flex-col space-y-20`;
  footer.classList = footerClasses;
  footer.innerHTML = `
  <div class="flex-col h-500px space-y-8">

    <div class="w-full flex justify-between">
      logo
      <aside class="flex justify-center items-center h-auto gap-6">
        <span>Daj znać, co możemy dla Ciebie zrobic!</span>
        <button class='w-auto h-auto bg-green-700 py-3 px-6 rounded-full'>
          Skontaktuj się z nami
        </button>
      </aside>
    </div>

    <div class="w-full h-[1px] bg-slate-300"></div>


    <div class="flex w-full h-10 justify-between">
      <ul class="flex gap-8" >
        <li>Kontakt</li>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Linkedin</li>
      </ul>
      <div class="flex gap-8">
        <span>000-000-000</span>
        <span>giarddesign@kontakt.pl</span>
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
