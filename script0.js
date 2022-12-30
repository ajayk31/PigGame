"use strict";

//selection
const score0 =document.getElementById('score--0');
const score1 =document.getElementById('score--1');
const diceEl =document.getElementsByClassName('dice')[0];
const btnNew =document.getElementsByClassName('btn--new')[0];
const btnRoll =document.getElementsByClassName('btn--roll')[0];
const btnHold =document.getElementsByClassName('btn--hold')[0];
const current0El =document.getElementById('current--0');
const current1El =document.getElementById('current--1');
const player0El =document.getElementsByClassName(`player--0`)[0];
const player1El =document.getElementsByClassName(`player--1`)[0];

let currentScore =0;
let currentPlayer =0;
let scores =[0,0];
let playing =true;

score0.textContent =0;
score1.textContent =0;

diceEl.classList.add('hidden');

const switchPlayer =function(){
    document.getElementById(`current--${currentPlayer}`).textContent=0;
    currentPlayer= currentPlayer===0 ? 1 : 0; 
    currentScore=0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


btnRoll.addEventListener('click',function(){
    if(playing){
        const randomNumber =Math.trunc(Math.random()*6)+1;

        diceEl.classList.remove('hidden');
    
        diceEl.src=`dice-${randomNumber}.png`;
    
    
        if(randomNumber!==1){
            currentScore+=randomNumber;
            // currenScore= currenScore+randomNumber;
        
            document.getElementById(`current--${currentPlayer}`).textContent =currentScore;
            }
        
        else{
            // Switch Player
            switchPlayer();
    
        }
    }
});


btnHold.addEventListener('click',function(){
    if(playing){
        scores[currentPlayer]+=currentScore;
        document.getElementById(`score--${currentPlayer}`).textContent=scores[currentPlayer];
    
        // gamewin
        if(scores[currentPlayer]>=100){
        player0El.classList.remove('player--active');
        player1El.classList.remove('player--active');
        document.getElementsByClassName(`player--${currentPlayer}`)[0].classList.add('player--winner');
        playing=false;
        }
        else{
            switchPlayer();
        }
    }
 
});

//Reseting Game
btnNew.addEventListener('click',function(){
    // making total score =>0
    scores=[0,0];
    score0.textContent =0;
    score1.textContent =0;
    playing=true;
    currentScore=0;
    currentPlayer =0;
    
    current0El.textContent=0;
    current1El.textContent=0;

    diceEl.classList.add('hidden');

 player0El.classList.add('player--active');
 player0El.classList.remove('player--winner'); 
 player1El.classList.remove('player--active'); 
 player1El.classList.remove('player--winner'); 
});