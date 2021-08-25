'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//#region Auxiliar Functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function () {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const scoreFunc = function () {
  if (score > 1) {
    score--;
    displayScore();
  } else {
    score = 0;
    displayScore();
    displayMessage('😖 You lose the game!');
  }
};

//#endregion

const mainFunction = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('❌ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    scoreFunc();
  }
};

document.querySelector('.check').addEventListener('click', mainFunction);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') mainFunction();
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScore();
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
