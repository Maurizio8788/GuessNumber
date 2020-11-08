'use strict';

let message = document.querySelector( '.message' );
let number =  document.querySelector( '.number' );
let secretNumber =  Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (txt) => {
    message.textContent = txt;
}

document.querySelector( '.check' ).addEventListener( 'click', function(){
    let guessNumber = document.querySelector( '.guess' ).value;
    const guess = Number( guessNumber );
   
    // Quando non sono inseriti numeri nell'input
    if( !guess ){
        displayMessage("⛔ Nessun Numero!");

    // Numero corretto
    } else if( guess === secretNumber) {
        number.textContent = secretNumber;
        document.body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';
        displayMessage("🎉🎉 Hai indovinato!! 🎉🎉");

        if( score > highScore ){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }  
     // Gestione numero errato
    } else if( guess !== secretNumber ){
        if( score > 1){
            let tooHigh = "📈 troppo alto!!";
            let tooLow =  "📉 troppo basso!!";
    
            displayMessage( ( guess < secretNumber ) ?  tooLow : tooLow);
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.body.backgroundColor = '#f00';
            displayMessage("💥 Hai Perso!! 💥");
        }
    }
} );

document.querySelector('.again').addEventListener( 'click', () => {
    score = 20;
    displayMessage( "Indovina...");
    secretNumber = Math.trunc( Math.random() * 20) + 1;
    number.style.width = '15rem';
    number.textContent = "?";
    document.querySelector('.score').textContent = score;
    document.querySelector( '.guess' ).value = null;
    document.body.style.backgroundColor = "#222";
} )
