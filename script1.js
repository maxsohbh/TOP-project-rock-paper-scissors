//initialisations
let playerChoice;
let score = [0,3];

//function list
function playRound(playerSelection, computerSelection){

    console.log(computerSelection)
    console.log('player : '+ playerSelection)
   
    if(playerSelection == computerSelection){
        return 'draw'
    }
    else if (playerSelection == 'rock'){
        return computerSelection == 'paper' ? 'lose' : 'win';
    }
    else if(playerSelection == 'paper'){
        return computerSelection == 'scissors' ? 'lose' : 'win';
    }
    else if(playerSelection == 'scissors'){
        return computerSelection == 'rock' ? 'lose' : 'win';
    }
    else{
        return 'lose'
    }
}//playRound function end.



const rockChoice = document.querySelector("#rock-btn");
rockChoice.addEventListener('click', function(){
    playerChoice = rockChoice.value;
    displayOut();
});
const paperChoice = document.querySelector("#paper-btn");
paperChoice.addEventListener('click', function(){
    playerChoice = paperChoice.value;
    displayOut();
});
const scissorsChoice = document.querySelector("#scissors-btn");
scissorsChoice.addEventListener('click', function(){
    playerChoice = scissorsChoice.value;
    displayOut();
});

const reset = document.querySelector("#reset-btn").addEventListener("click", function(){
    score = [0,0];
    document.querySelector("#player-score").innerText = score[0];
    document.querySelector('#computer-score').innerText = score[1];
    document.querySelector("#rock-btn").disabled = false;
    document.querySelector("#paper-btn").disabled = false;
    document.querySelector("#scissors-btn").disabled = false;
    
})

function disable(){
    document.querySelector("#rock-btn").disabled = true;
    document.querySelector("#paper-btn").disabled = true;
    document.querySelector("#scissors-btn").disabled = true;
}



function displayOut(){
    let computerSelection;  
    switch(Math.floor(Math.random()*3)){
        case 0:
            computerSelection= 'rock';
            break;
        case 1:
            computerSelection= 'paper';
            break;
        case 2:
            computerSelection= "scissors";
            break;
        default:
            computerSelection= "rock";  
    }

    document.querySelector("#player-choice").innerHTML = playerChoice.toUpperCase();
    document.querySelector("#computer-choice").innerHTML = computerSelection.toUpperCase();
    
    let result = playRound(playerChoice, computerSelection);
    result == 'win' ? score[0]++ : score;
    result == 'lose' ? score[1]++ : score;
    
    document.querySelector("#player-score").innerText = score[0];
    document.querySelector('#computer-score').innerText = score[1];
    document.querySelector("#demo").innerHTML = result.toUpperCase();

    if(score[0] == 5){
        document.querySelector('#demo').innerHTML = "PLAYER WON";
        disable();
    }else if(score[1]==5){
        document.querySelector('#demo').innerHTML = "PLAYER LOST";
        disable();
    }

}

