// script.js

const buttons = document.querySelectorAll('.surprise-button');
const messageArea = document.getElementById('message-area');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
   let message = '';
   switch (button.id) {
    case 'button-1':
     message = 'This website is from my side Happy Birthday!';
     break;
    case 'button-2':
     message = "Happy Birthday! wishing you a day filled with joy, laughter and unforgettable moments. May the year ahead bring you success, happiness and everything you've been hoping for. Enjoy your day to the fullest! Bhiya";
     break;
    case 'button-3':
     message = 'Wishing you a fantastic birthday, Bhiya!';
     break;
    case 'button-4':
     message = 'null';
     break;
   }
   messageArea.value = message;
  });
});

const nextButton = document.querySelector('.next-button');

nextButton.addEventListener('click', () => {
  // Simulate a page transition
  setTimeout(() => {
   // Transition to the next page (button.html)
   window.location.href = 'last.html';
  }, 500);
});