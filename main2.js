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
     message = "Happy Birthday! wishing you a day filled with joy, laughter and unforgettable moments. May the year ahead bring you success, happiness and everything you've been hoping for. Enjoy your day to the fullest! Bhiya!";
     break;
       
    case 'button-3':
     message = 'Wishing you a fantastic birthday, Bhiya!';
     break;
       
    case 'button-4':
     message = "Happy Birthday, Pradeep bhaiya! Wishing you a fantastic day filled with joy and all your favorite things. Cheers to another great year ahead!";
     break;
       
    case 'button-5':
     message = "Wishing you a day filled with happiness and a year filled with joy. May your birthday be as incredible as you are! Another trip around the sun-time to celebrate! here's to another year of adventure, laughter and amazing memories. Sending you lots of love om your special day! Happy Birthday!";
     break;
       
    case 'button-6':
     message = "null";
     break;
       
    case 'button-7':
     message = "Dear Pradeep, today is your birthday. I wish this day will come again and again in your life. Your silent attitude should stay with you everytime. You should go very successful I wish and this is all from my side.";
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