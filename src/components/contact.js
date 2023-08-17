const Contact = () => {
  const section = document.createElement('section');

  section.innerHTML = `
  <div class="h-full px-6 py-6 w-full">
    <div class="h-auto bg-green-900 w-auto flex-col justify-center items-center text-[#F5F0EC] text-[40px] leading-[48px] space-y-6 p-9">
        <div>
            <div>Zostańmy w kontakcie!</div>
            <div>Znajdziesz nas na <i><b>Instagramie</b></i>.</div>
        </div>
        <div class="flex justify-between items-center">
            <div class="text-base">Śledź nasze<br> najnowsze realizacje!</div>
            <div>
                <a href="#" class="pt-[10px] pb-[12px] px-[24px] bg-[#F5F0EC] text-green-900 rounded-full text-base">Instagram</a>
            </div>
        </div>
    </div>
  </div>
  `;

  document.body.appendChild(section);
};

export default Contact;
