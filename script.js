'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🍕 Correct number! 🍕';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = '14';

document.querySelector('.score').textContent = '11';

document.querySelector('.guess').value = 22;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.number').textContent = '?';

// AGAIN BUTTON - AFTER WINNING
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;

  document.querySelector('.number').textContent = '?';

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').value = '';

  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  if (!guess) {
    displayMessage('No number! ✋🛑');

    // WHEN YOU GUESS THE SECRET NUMBER - WIN!
  } else if (guess === secretNumber) {
    displayMessage('😇😇😇 Correct number 🚢🚢🚢 ');

    // CHANGING BACKGROUND COLOR ON WIN
    document.querySelector('body').style.backgroundColor = '#3376FF';

    // CHANGING SECRET NUMBER WIDTH
    document.querySelector('.number').style.width = '30rem';

    // REVEALING THE SECRET NUMBER
    document.querySelector('.number').textContent = secretNumber;

    // HIGHSCORE UPDATE
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // WHEN GUESS IS WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'TOO HIGH!! 🙏🏿🙏🏿🙏🏿' : 'TOO LOW!! 🧛🏿‍♂️🐽🧛🏿‍♂️🐽🧛🏿‍♂️🐽';
      displayMessage(
        guess > secretNumber ? 'TOO HIGH!! 🙏🏿🙏🏿🙏🏿' : '🐽🧛🏿‍♂️🐽 TOO LOW!! 🧛🏿‍♂️🐽🧛🏿‍♂️'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' 👨🏻‍✈️🎟YOU LOST THE GAME👨🏻‍✈️🎟');
      document.querySelector('.score').textContent = 0;
    }
  }
  //  if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'TOO HIGH!! 🙏🏿🙏🏿🙏🏿';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       ' 👨🏻‍✈️🎟YOU LOST THE GAME👨🏻‍✈️🎟';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // WHEN GUESS IS TO LOW
  // } else if (guess < secretNumber) {
  //   document.querySelector('.message').textContent = 'TOO LOW!! 🧛🏿‍♂️🐽🧛🏿‍♂️🐽🧛🏿‍♂️🐽';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // } else {
  //   document.querySelector('.message').textContent = ' 👨🏻‍✈️🎟YOU LOST THE GAME👨🏻‍✈️🎟';
  //   document.querySelector('.score').textContent = 0;
  // }
});
