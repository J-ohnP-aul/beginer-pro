
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
function updateScoreElement() {
 document.querySelector('.js-score')
   .innerHTML = `wins: ${score.wins}, lost: ${score.loses}, Ties: ${score.ties}`;
}

function pickComputerMove () {
 const randomNumber = Math.random();

 let computerMove = '';

 if (randomNumber >= 0  && randomNumber < 1/3) {
   computerMove = 'Rock';
 }else if (randomNumber >= 1/3 && randomNumber < 2/3) {
   computerMove = 'Paper';
 }else if (randomNumber >= 2/3 && randomNumber < 1) {
   computerMove ='scissors';
 }
/* return statement terminates the function immediatly*/
 return computerMove;
 
}
function playGame (playerMove) {
 const computerMove = pickComputerMove();

 let result;

 if (playerMove === 'scissors') {
   if ( computerMove === 'Rock') {
   result = 'You lose!';
   } else if (computerMove === 'Paper') {
   result = 'You Win!.';
   } else if (computerMove === 'scisors') {
   result = 'Tie.';
   }

 } else if (playerMove === 'paper') {
     if ( computerMove === 'Rock') {
     result = 'You WIn!.';
   } else if (computerMove === 'Paper') {
     result = 'Tie!.';
   } else if (computerMove === 'scissors') {
     result = 'You lose!.';
   }
   
 } else if (playerMove === 'rock') {
   if ( computerMove === 'Rock') {
     result = 'Tie!.';
   } else if (computerMove === 'Paper') {
     result = 'You lose!.';
   } else if (computerMove === 'scissors') {
     result = 'You WIn!.';
   }
 } if (result == 'You WIn!.') {
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

