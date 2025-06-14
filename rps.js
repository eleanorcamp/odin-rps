let player_score = 0, computer_score = 0;

function getPlayerChoice(){
    let choice;
    choice = prompt("Please enter your choice between: \n[Rock, Paper, Scissors]").toLowerCase()
    return choice;
}

function getComputerChoice() {
    let choice;
    let num = Math.random();
    // console.log("num = " + num)
    if (num < 0.33){
        choice = "rock";
    } else if (num < 0.66){
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;
}

function playRound(computer, player){
    let winner;
    if (player === "rock"){
        if (computer === "scissors"){
            winner = "player";
        } else if (computer === "paper"){
            winner = "computer";
        } else if (computer === "rock"){
            winner = "tie";
        }
    }
    if (player === "paper"){
        if (computer === "rock"){
            winner = "player";
        } else if (computer === "scissors"){
            winner = "computer";
        } else if (computer === "paper"){
            winner = "tie";
        }
    }
    if (player === "scissors"){
        if (computer === "paper"){
            winner = "player";
        } else if (computer === "rock"){
            winner = "computer";
        } else if (computer === "scissors"){
            winner = "tie";
        }
    }
    if (winner === "player"){
        console.log(`You win! ${player} beats ${computer}!`);
        player_score++;
    } else if (winner === "computer"){
        console.log(`You lose! ${computer} beats ${player}!`);
        computer_score++;
    } else if (winner === "tie"){
        console.log(`It's a tie! You both played ${player}`);
    }
}

function play_game(){
    // console.log("AHH");
    for (let i=0; i<5; i++){
        playRound(getComputerChoice(), getPlayerChoice());
    }
    
    if (player_score > computer_score){
        console.log(`Congrats! You beat the computer with a score of ${player_score} to ${computer_score}`)
    } else if (computer_score > player_score){
        console.log(`Sorry! You lost to the computer with a score of ${computer_score} to ${player_score}`)
    }
    else if (computer_score == player_score){
        console.log(`You tied the computer with a score of ${player_score}!`)
    }
}

play_game()
// console.log("DONE")