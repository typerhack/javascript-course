let guesses = [];
let correctNumber = getRandomNumber();

window.onload = function () {
    document.querySelector("#number-submit").addEventListener("click", playGame);
    document.querySelector("#restart-game").addEventListener("click", initGame);
};

function playGame() {
    let numberGuess = document.querySelector("#number-guess").value;
    saveGuessHistory(numberGuess);
    displayHistory(guesses);
    diplayResult(numberGuess);
    
}

function diplayResult(numberGuess) {
    if (numberGuess < correctNumber) {
        showNumberBelow();
    } else if (numberGuess > correctNumber) {
        showNumberAbove();
    } else {
        showYouWon();
    }
}

function initGame() {
    document.querySelector('#result').innerHTML = "";
    document.querySelector('#history').innerHTML = "";
    guesses = [];
    correctNumber = getRandomNumber();
}

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}

function saveGuessHistory(guess) {
    guesses.push(guess);
}

function displayHistory(guessesList){

    let list=`<ul class="list-group mt-3 list-unstyled">`;

    guessesList.reverse().forEach(item => {
        list += `<li class="list-group-item">You Guessed: ${item}<li>`;        
    });
     list +=`</ul>`;
    document.querySelector('#history').innerHTML = list;
}

function getDialog(displayType, text) {
    let dialog;
    switch (displayType) {
        case "warning":
            dialog = `<div class="alert alert-warning" role="alert">${text}</div>`;
            break;
        case "won":
            dialog = `<div class="alert alert-success" role="alert">${text}</div>`;
            break;
    }
    return dialog;
}

function showYouWon() {
    const text = "Awesome job! You got it!";
    let dialog = getDialog('won', text);
    document.querySelector('#result').innerHTML = dialog;
}

function showNumberAbove() {
    const text = "Your guess is too high!";
    let dialog = getDialog('warning', text);
    document.querySelector('#result').innerHTML = dialog;
}

function showNumberBelow() {
    const text = "Your guess is too low!";
    let dialog = getDialog('warning', text);
    document.querySelector('#result').innerHTML = dialog;
}