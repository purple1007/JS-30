function playSound(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const keybox = document.querySelector(`div.keybox[data-key="${e.keyCode}"]`);
   if(!audio) return;
   // console.log(e.keyCode);
   // console.log(audio);
   // console.log(keybox);
   audio.currentTime = 0;
   audio.play();
   keybox.classList.add('active');
};

function removeTransition(e){
  // console.log(e);
  if(e.propertyName !== 'color') return;
  console.log(e.propertyName);
  // console.log(this);
  this.classList.remove('active');
};

const keyboxs = document.querySelectorAll('.keybox');
keyboxs.forEach(keybox => keybox.addEventListener('transitionend',removeTransition));

window.addEventListener('keydown',playSound);