
//initialisations
let playerChoice;
let computerSelection;
let score = [0, 0];

//function list

//generate computer choice
function computer() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'ROCK';
            break;
        case 1:
            return 'PAPER';
            break;
        case 2:
            return "SCISSORS";
            break;
        default:
            return "ROCK";
    }
}

//not in use
function randomize(num, start = 0) {
    Math.floor(Math.random() * num + start)
}

//disable button when game reach to 5
function disable(logic) {
    let btns = Array.from(document.querySelectorAll(".btn"));
    btns.forEach(btn => btn.disabled = logic);
}


//determine winner and loser
function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return 'DRAW'
    }
    else if (playerSelection == 'ROCK') {
        return computerSelection == 'PAPER' ? 'LOSE' : 'WIN';
    }
    else if (playerSelection == 'PAPER') {
        return computerSelection == 'SCISSORS' ? 'LOSE' : 'WIN';
    }
    else if (playerSelection == 'SCISSORS') {
        return computerSelection == 'ROCK' ? 'LOSE' : 'WIN';
    }
    else {
        return 'LOSE'
    }
}//playRound function end.

//update score , computer()
function game() {
    computerSelection = computer();
    let result = playRound(playerChoice, computerSelection);
    result == 'WIN' ? score[0]++ : score;
    result == 'LOSE' ? score[1]++ : score;
    document.querySelector("#demo").textContent = result;
}

//show out the results on html
function displayOut() {
    document.querySelector("#player-choice").textContent = playerChoice;
    document.querySelector("#computer-choice").textContent = computerSelection;
    document.querySelector("#player-score").innerText = score[0];
    document.querySelector('#computer-score').innerText = score[1];

    //game end logic
    if (score[0] == 5) {
        document.querySelector('#demo').textContent = "PLAYER WON";
        disable(true);
    } else if (score[1] == 5) {
        document.querySelector('#demo').textContent = "PLAYER LOST";
        disable(true);
    }

}

//function to use with button click rock paper scissors
function getChoice(e) {
    playerChoice = e.target.value;
    console.log(playerChoice)
    game();
    displayOut();
}

//add listeners to the choices
const picks = Array.from(document.querySelectorAll(".btn"));
picks.forEach(pick => pick.addEventListener("click", getChoice))


//reset gameplay
const reset = document.querySelector("#reset-btn").addEventListener("click", function () {
    score = [0, 0];
    document.querySelector("#player-score").innerText = score[0];
    document.querySelector('#computer-score').innerText = score[1];
    document.querySelector('#demo').innerText = ' ';
    disable(false);
})




