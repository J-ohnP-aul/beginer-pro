
let score = JSON.parse(localStorage.getItem('score')) ||
{
   wins: 0,
   loses: 0,
   ties: 0
 }; 
 updateScoreElement();
/*
if (!score) {
 score = {
   wins: 0,
   loses: 0,
   ties: 0
 }
}
*/
let numC = JSON.parse(localStorage.getItem('numC')) || {
  even:0
}
console.log(numC.even);
let intervalId;
function accumuator(){
  numC.even += 1;
  console.log(numC.even);
  localStorage.setItem('numC', JSON.stringify(numC))
  const atplBtn = document.querySelector('.autoplay-bnt-js')

  if (numC.even%2 === 0){ 
    atplBtn.classList.add('autoPlay-on')
    atplBtn.innerHTML = 'ENABLED'
    intervalId = setInterval(function autoPlay(){
        playerMove = pickComputerMove();
        playGame(playerMove);
      }, 2000)
  }else{
    atplBtn.classList.remove('autoPlay-on');
    clearInterval(intervalId);
    atplBtn.innerHTML = 'Auto play'

  }

}
/**/


function updateScoreElement() {
 document.querySelector('.js-score')
   .innerHTML = `wins: ${score.wins}, lost: ${score.loses}, Ties: ${score.ties}`;
}

function pickComputerMove () {
 const randomNumber = Math.random();

 let computerMove = '';

 if (randomNumber >= 0  && randomNumber < 1/3) {
   computerMove = 'rock';
 }else if (randomNumber >= 1/3 && randomNumber < 2/3) {
   computerMove = 'paper';
 }else if (randomNumber >= 2/3 && randomNumber < 1) {
   computerMove ='scissors';
 }
/* return statement terminates the function immediatly*/
 return computerMove;
 
}
document.body.addEventListener('keydown', (event) => {
  console.log(event.key)
  if(event.key === 'r'){
    playGame('rock');
  } else if (event.key === 'p'){
    playGame('paper');
  } else if(event.key === 's'){
    playGame('scissors');
  }
});
document.querySelector('.js-btn-rock')
  .addEventListener('click', () => {
    playGame('rock');
  });
document.querySelector('.js-btn-paper')
  .addEventListener('click', () => {
    playGame('paper');
});
document.querySelector('.js-btn-scissors')
  .addEventListener('click', () => {
    playGame('scissors');
  });

function playGame (playerMove) {
 const computerMove = pickComputerMove();

 let result;

 if (playerMove === 'scissors') {
   if ( computerMove === 'rock') {
   result = 'You lose!.';
   } else if (computerMove === 'paper') {
   result = 'You Win!.';
   } else if (computerMove === 'scissors') {
   result = 'Tie!.';
   }

 } else if (playerMove === 'paper') {
     if ( computerMove === 'rock') {
     result = 'You Win!.';
   } else if (computerMove === 'paper') {
     result = 'Tie!.';
   } else if (computerMove === 'scissors') {
     result = 'You lose!.';
   }
   
 } else if (playerMove === 'rock') {
   if ( computerMove === 'rock') {
     result = 'Tie!.';
   } else if (computerMove === 'paper') {
     result = 'You lose!.';
   } else if (computerMove === 'scissors') {
     result = 'You Win!.';
   }
 } if (result == 'You Win!.') {
   score.wins += 1;
 } else if (result == 'You lose!.') {
   score.loses += 1;
 } else if (result === 'Tie!.') {
   score.ties += 1;
 }
//localStorage.setitem() method for saving to local storage takes 2 strings first name.. "message" 'value'
 localStorage.setItem('score', JSON.stringify(score));

 updateScoreElement()

 document.querySelector('.js-result')
   .innerHTML = result;

 document.querySelector('.js-moves')
   .innerHTML =`You
<img class="move-icon" src="pic/${playerMove}-emoji.png" alt="">
<img class="move-icon" src="pic/${computerMove}-emoji.png" alt="">
computer`
 }

