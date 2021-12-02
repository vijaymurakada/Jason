'use strict';
let secretNumer = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let game = true;
//console.log(secretNumer);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (game) {
    //no number entered
    if (!guess) {
      document.querySelector('.message').textContent = '⛔No number';
      console.log(score);
      //entering value above 20 or below 0
    } else if (guess < 0 || guess > 21) {
      document.querySelector('.message').textContent =
        'Enter value between 1 nd 20';
      //corect Number
    } else if (guess === secretNumer) {
      document.querySelector('.message').textContent = '🥇correct Number';
      document.querySelector('.number').textContent = secretNumer;
      document.querySelector('body').style.backgroundColor = '#009933';
      if (score > highscore) {
        document.querySelector('.highscore').textContent = score;
        game = false;
      }
      //high value
    } else if (guess > secretNumer) {
      document.querySelector('.message').textContent = '📈Too High';
      score--;
      if (score > 0) {
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '💥Game over';
      }
      //low value
    } else if (guess < secretNumer) {
      document.querySelector('.message').textContent = '📉Too Low';
      score--;
      if (score > 0) {
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '💥Game over';
      }
    }
  }
});
//reset game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumer = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(secretNumer);
//   switch (true) {
//     case !guess:
//       document.querySelector('.message').textContent = 'please enter a number';

//     case guess < secretNumer:
//       document.querySelector('.message').textContent = 'too low';
//   }
// });
