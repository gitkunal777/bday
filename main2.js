// script.js

const buttons = document.querySelectorAll('.surprise-button');
const messageArea = document.getElementById('message-area');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
   let message = '';
   switch (button.id) {
    case 'button-1':
     message = 'Happy birthday to an amazing person!';
     break;
    case 'button-2':
     message = 'Congratulations on your graduation!';
     break;
    case 'button-3':
     message = 'Good luck on your new job!';
     break;
    case 'button-4':
     message = 'Thank you for being a great friend!';
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