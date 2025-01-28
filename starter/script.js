'use strict';

// Function
function resetGame() {
  for (let i = 0; i < score.length; i++) {
    playing = true;
    score[i].textContent = 0;
    currentScore[i].textContent = 0;
    sumCurrentPlayer = 0;
    activePlayer = 0;
    scores[i] = 0;
    onePlayer.classList.add('player--active');
    twoPlayer.classList.remove('player--active');
    allPlayer[i].classList.remove('player--winner');
  }
  img.classList.add('hidden');
}

function changePlayer() {
  oneCurrent.textContent = '0';
  sumCurrentPlayer = 0;
  // scores[activePlayer] = 0;
  onePlayer.classList.toggle('player--active');
  twoPlayer.classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
}

// Varibalse

let number;
let sumCurrentPlayer = 0;
let score1 = 0;
let activePlayer = 0;
let playing = true;
const scores = [0, 0];

let oneScore;
const score = document.querySelectorAll('.score');
const img = document.querySelector('.dice');

let oneCurrent;
const currentScore = document.querySelectorAll('.current-score');

const btn = document.querySelector('.btn');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let player;
const allPlayer = document.querySelectorAll('.player');
const onePlayer = document.querySelector('.player--0');
const twoPlayer = document.querySelector('.player--1');

// Operation
resetGame();

// BTN Roll
btnRoll.addEventListener('click', () => {
  if (playing) {
    // Create Random Number
    number = Math.trunc(Math.random() * 6) + 1;
    // Show Dice
    img.classList.remove('hidden');
    img.src = `dice-${number}.png`;
    if (number === 1) {
      changePlayer();
    } else {
      oneCurrent = document.getElementById(`current--${activePlayer}`);
      sumCurrentPlayer += number;
      oneCurrent.textContent = sumCurrentPlayer;
    }
  }
});

// BTN Hold
btnHold.addEventListener('click', () => {
  if (playing) {
    oneScore = document.getElementById(`score--${activePlayer}`);
    scores[activePlayer] += sumCurrentPlayer;
    oneScore.textContent = scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      player = document.querySelector(`.player--${activePlayer}`);
      player.classList.add('player--winner');
      player.classList.remove('player--active');
      img.classList.add('hidden');
    } else changePlayer();
  }
});
// BTN New Game
btnNewGame.addEventListener('click', resetGame);
