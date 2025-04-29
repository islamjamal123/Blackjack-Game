const cardsDealt = document.querySelector('.cards-dealt');
const sumCards = document.querySelector('.sum-cards');
const questions = document.querySelector('.question');
const newButton = document.querySelector('.new-button');
const startButton = document.querySelector('.start-button');
let card = 0;
let count = 0;
let answers = [];

function newCard() {
    

    card = Math.floor(Math.random() * 11) + 1;
    answers.push(card);
    cardsDealt.textContent = "Cards: " + answers.join(' ');
    count++;

    sumCards.textContent = "Sum: " + answers.reduce((a, b) => a + b);

    const sums = answers.reduce((a, b) => a + b);

    if (sums <= 20) {
        questions.textContent = 'Do you want to draw a new card?';
        startButton.disabled = true;
        newButton.disabled = false;
    } else if (sums === 21) {
        questions.textContent = "Woohoo! You've got a Blackjack!";
        startButton.disabled = false;
        newButton.disabled = true;
    } else {
        questions.textContent = "You're out of the game!";
        newButton.disabled = true;
        startButton.disabled = false;
    }
}

function startGame() {

    answers = [];
    count = 0;
    cardsDealt.textContent = 'Cards:';
    sumCards.textContent = 'Sum:';
    questions.textContent = 'Do you want to draw a new card?';
    newButton.disabled = false;
    startButton.disabled = true;

}


