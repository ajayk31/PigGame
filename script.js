'use strict';

// Selecting Elements 
const player0El =document.querySelector('.player--0');
const player1El =document.querySelector('.player--1');
const score0El =document.getElementById('score--0');
const score1El =document.getElementById('score--1');
const current0El =document.getElementById('current--0');
const current1El =document.getElementById('current--1');
const diceEl =document.querySelector(".dice");
const btnNew =document.querySelector('.btn--new');
const btnRoll =document.querySelector('.btn--roll');
const btnHold =document.querySelector('.btn--hold');

let scores =[0,0];
let currentScore =0;
let activePlayer =0;
let playing =true;


const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    activePlayer =activePlayer===0 ? 1 : 0;
    currentScore=0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


// Starting condition 
score0El.textContent=0;
score1El.innerHTML=0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click',function(){
    if(playing){

    
    // Generating a random dice roll 
    const dice =Math.trunc(Math.random()*6)+1;

    // Display dice 
    diceEl.classList.remove('hidden');
    diceEl.src = `./img/dice-${dice}.png`;


    // check if the dice is 1 switch to next player 
    if(dice!==1){
        //Add dice to current score
        currentScore+=dice;
        document.querySelector(`#current--${activePlayer}`).textContent=currentScore;
    }
    else{
        // switch to next player
        switchPlayer();
    }
}
});

btnHold.addEventListener('click',function(){
    if(playing){
    // Add current score to active player's score
    scores[activePlayer]+=currentScore;
    // document.querySelector(`#current--${activePlayer}`).textContent=scores[activePlayer];
    document.querySelector(`#score--${activePlayer}`).textContent=scores[activePlayer];

    // check if player's score is >=100
    if(scores[activePlayer]>=10){
        playing=false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else{
        switchPlayer();
    }
    //finish the game


    //switch  to next player
    switchPlayer();
} 
});
