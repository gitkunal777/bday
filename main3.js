const candles = document.querySelectorAll('.candle');
const blowButton = document.getElementById('blow-button');
const wishMessage = document.getElementById('wish-message');

blowButton.addEventListener('click', () => {
  candles.forEach((candle) => {
   candle.classList.add('blow');
  });
  setTimeout(() => {
   wishMessage.classList.add('show');
  }, 1000);
  var audio = new Audio('song.mp3');
  audio.play();
});