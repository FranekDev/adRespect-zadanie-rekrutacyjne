const About = () => {
  const section = document.createElement('section');

  section.innerHTML = `
    <div class="w-full h-full bg-green-800 md:flex">
    <div class="w-1/2 bg-slate-300"></div>
    <div class="w-1/2 text-[#F5F0EC] flex items-center justify-center h-screen">
        <div class="w-4/5 h-1/2 space-y-20">
            <div class="space-y-8">
                <div class="space-y-3">
                    <div class="text-sm">O firmie</div>
                    <div class="md:text-5xl w-fit">Tworzymy</br> z <i>pasją</i></div>
                </div>
                <div>
                    Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą wykwalifikowani projektanci oraz architekci, których zadaniem jest rozpoznanie i realizacja potrzeb każdego Klienta. Nasza specjalizacja to przestrzenie nowoczesne, które charakteryzuje minimalizm, geometria i elegancka prostota. Tworzymy ogrody małoobsługowe, dostosowane do współczesnego trybu życia.
                </div>
            </div>
            <div>
                <a href="" class="border-solid border-2 border-[#F5F0EC]-800 px-[24px] py-[12px] rounded-full">Poznaj nas bliżej -></a>
            </div>
        </div>
    </div>
    </div>
  `;

  document.body.appendChild(section);
};

export default About;
