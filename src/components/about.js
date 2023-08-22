const About = () => {
  const section = document.createElement('section');
  section.id = 'about';
  section.classList.add('hideElement', 'to-darken');

  section.innerHTML = `
    <div class="w-full md:max-h-[720px] h-auto bg-green-900 flex-col flex md:flex-row">
        <div class="w-full bg-green-800 h-auto">
            <img src="./aboutPhoto.png" alt="Ladne zdjecie" class="h-full w-full object-cover">
        </div>
        <div class="w-full py-10 text-[#F5F0EC] flex items-center justify-center h-auto">
            <div class="w-4/5 space-y-20">
                <div class="space-y-8">
                    <div class="space-y-3">
                        <div class="text-sm">O firmie</div>
                        <div class="text-4xl w-fit font-montserrat font-medium">Tworzymy</br> z <i>pasją</i></div>
                    </div>
                    <div class="max-w-[800px] text-base">
                        Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą wykwalifikowani projektanci oraz architekci, których zadaniem jest rozpoznanie i realizacja potrzeb każdego Klienta. Nasza specjalizacja to przestrzenie nowoczesne, które charakteryzuje minimalizm, geometria i elegancka prostota. Tworzymy ogrody małoobsługowe, dostosowane do współczesnego trybu życia.
                    </div>
                </div>
                <div class="w-fit border-solid border-2 border-[#F5F0EC] px-[24px] py-[12px] rounded-full flex justify-center items-center space-x-2 transition-all hover:shadow-xl cursor-pointer">
                    <a href="" class="">
                        Poznaj nas bliżej
                    </a>
                    <img src="./svg/aboutArrowRight.svg" alt="">
                </div>
            </div>
        </div>
    </div>
  `;

  document.body.appendChild(section);
};

export default About;
