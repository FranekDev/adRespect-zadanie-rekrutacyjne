import Macy from 'macy';

const Realizations = () => {
  const section = document.createElement('section');
  section.id = 'realizations';
  section.classList.add(
    'bg-[#DCC1AB]',
    'w-full',
    'h-auto',
    'pt-[120px]',
    'pb-11'
  );
  section.innerHTML = `
    <div class="h-full">
        <div class="w-full h-auto flex flex-col justify-start items-start gap-4 pl-10 md:pl-40 pb-24">
            <div class="text-green-800 text-xs">Realizacje</div>
            <div class="text-5xl">Nasze <i>projekty</i></div>
        </div>
        
      <div class="relative">
      
        <div id="images-container" class="[&>img]:w-[450px] [&>img]:object-cover">
          <img src="./projectsImages/img9.jpg" alt="Img9" class="md:h-[601px] h-auto">
          <img src="./projectsImages/img8.jpg" alt="Img8" class="md:h-[338px] h-auto">
          <img src="./projectsImages/img7.jpg" alt="Img7" class="md:h-[451px] h-auto">
          <img src="./projectsImages/img5.jpg" alt="Img5" class="md:h-[452px] h-auto">
          <img src="./projectsImages/img4.jpg" alt="Img4" class="md:h-[603px] h-auto">
          <img src="./projectsImages/img6.jpg" alt="Img6" class="md:h-[452px] h-auto">
          <img src="./projectsImages/img2.jpg" alt="Img2" class="md:h-[601px] h-auto">
          <img src="./projectsImages/img3.jpg" alt="Img3" class="md:h-[338px] h-auto">
          <img src="./projectsImages/img1.jpg" alt="Img1" class="md:h-[338px] h-auto">

        </div>

        <div id="bgBlured" class="w-full h-[1000px] bg-gradient-to-t from-[#DCC1AB]  absolute bottom-0 flex justify-center items-end">
        
        <button class="flex justify-center items-center pt-[12px] pb-[14px] px-[22px] gap-[8px] border border-[#111111] rounded-full">
          <span>Rozwiń</span>
          <img src="./svg/expand.svg"/>
        </button>
        </div>
      
      </div>
    </div>
  `;

  document.body.appendChild(section);
  const macy = Macy({
    container: '#images-container',
    mobileFirst: true,
    columns: 1,
    breakAt: {
      400: {
        margin: {
          x: 10,
          y: 10
        },
        columns: 2
      },
      700: {
        margin: {
          x: 20,
          y: 20
        },
        columns: 3
      }
    }
  });
};

export default Realizations;
