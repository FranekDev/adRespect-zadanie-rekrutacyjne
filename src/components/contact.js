const Contact = () => {
  const section = document.createElement('section');

  section.innerHTML = `
  <div class="h-full px-6 py-6 w-full lg:w-auto flex justify-center items-center">
    <div class="h-auto bg-green-900 w-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center text-[#F5F0EC] text-[40px] leading-[48px] space-y-6 p-9 md:px-16 lg:py-14">
        <div class=" w-full lg:whitespace-nowrap h-full">
            <div>Zostańmy w kontakcie!</div>
            <div>Znajdziesz nas na <i><b>Instagramie</b></i>.</div>
        </div>
        <div class="flex lg:flex-col justify-between items-center w-full">
            <div class="text-base w-[150px] lg:w-[150px] md:w-auto">Śledź nasze najnowsze realizacje!</div>
            <div class="w-auto">
                <a href="#" class="pt-[10px] pb-[12px] px-[24px] bg-[#F5F0EC] text-green-900 rounded-full text-base">Instagram</a>
            </div>
        </div>
    </div>
  </div>
  `;

  document.body.appendChild(section);
};

export default Contact;
