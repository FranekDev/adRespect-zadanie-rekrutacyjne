// import Macy from 'macy';
// import Macy from 'macy';

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
    <div>
        <div class="w-full h-auto flex flex-col justify-start items-start gap-4 pl-40">
            <div class="text-green-800 text-xs">Realizacje</div>
            <div class="text-5xl">Nasze <i>projekty</i></div>
        </div>
    </div>
  `;

  //   const macy = Macy({
  //     container: '#macy-container',
  //     trueOrder: false,
  //     waitForImages: false,
  //     margin: 24,
  //     columns: 6,
  //     breakAt: {
  //       1200: 5,
  //       940: 3,
  //       520: 2,
  //       400: 1
  //     }
  //   });
  //   section.appendChild(macy);
  document.body.appendChild(section);
};

export default Realizations;
