export const radioPlayerInit = () => {
   const radio = document.querySelector('.radio');
   const radioCoverImg = document.querySelector('.radio-cover__img');
   const radioNavigation = document.querySelector('.radio-navigation');
   const radioHeaderBig = document.querySelector('.radio-header__big');
   const radioItem = document.querySelectorAll('.radio-item');
   const radioStop = document.querySelector('.radio-stop');
   const radioVolume = document.querySelector('.radio-volume');
   const radioMute = document.querySelector('.radio-mute');
 
   
   const audio = new Audio();
   audio.type = 'audio/aac';
   
   const prevVolume = audio.volume;

   radioStop.disabled = true;

   const changeIconPlay = () => {
      if (audio.paused) {
         radio.classList.remove('play');
         radioStop.classList.add('fa-play');
         radioStop.classList.remove('fa-stop');
      } else {
         radio.classList.add('play');
         radioStop.classList.remove('fa-play');
         radioStop.classList.add('fa-stop');
      }
   };

   const selectItem = elem => {
      radioItem.forEach(item => item.classList.remove('select'));
      elem.classList.add('select');
   };

   const changeVolume = () => {
      const valueVolume = radioVolume.value;
      audio.volume = valueVolume / 100;
      audio.muted = false;
   };

   radioNavigation.addEventListener('change', event => {
      const target = event.target;
      const parrent = target.closest('.radio-item');
      selectItem(parrent);

      const title = parrent.querySelector('.radio-name').textContent;
      radioHeaderBig.textContent = title;

      const urlImg = parrent.querySelector('.radio-img');
      console.log(urlImg);
      radioCoverImg.src = urlImg.src;
            
      radioStop.disabled = false;
      audio.src = target.dataset.radioStantion;
      audio.play();
      changeIconPlay();
   });

   radioStop.addEventListener('click', () => {
      if (audio.paused) {
         audio.play();
      }  else {
         audio.pause();
      }
      changeIconPlay();
   });

   radioVolume.addEventListener('input', changeVolume);

   radioMute.addEventListener('click',  () => {
      audio.muted = !audio.muted;
   });

   changeVolume();

   radioPlayerInit.stop = () => {
      audio.pause();
      changeIconPlay();
   };
};