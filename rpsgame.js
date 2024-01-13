function getComputerChoice(){
    return Math.floor(Math.random()*3);
}
// 0; is rock, 1; is scissors, 2; is paper 

function playGame(computer, user){
    user = user.toUpperCase();
    
    if(computer === 0){
        alert("Computer picks ROCK");
        switch(user){
            case "ROCK":
                let userRedo = prompt("It was a tie let go again, give another input for a rematch");
                let computerRedo = getComputerChoice();
                playGame(computerRedo,  userRedo);
                break;
                break;
            case "SCISSORS":
                computerScore = computerScore+1;
                return "It is a loss for you computer wins!";
                break;
            case "PAPER":
                userScore = userScore+1;
                return "It is a loss for the computer you win!";
                break;
        }
    }
    else if(computer === 1){
        alert("Computer picks SCISSORS");
        switch(user){
            case "SCISSORS":
                let userRedo = prompt("It was a tie let go again, give another input for a rematch");
                let computerRedo = getComputerChoice();
                playGame(computerRedo,  userRedo);
                break;
            case "PAPER":
                computerScore = computerScore+1;
                return "It is a loss for you computer wins!";
                break;
             case "ROCK":
                userScore = userScore+1;
                return "It is a loss for the computer you win!";
                break;
        }
    }
    else{
        alert("Computer picks PAPER")
        switch(user){
            case "PAPER":
                let userRedo = prompt("It was a tie let go again, give another input for a rematch");
                let computerRedo = getComputerChoice();
                playGame(computerRedo,  userRedo);
                break;
            case "ROCK":
                computerScore = computerScore+1
                return "It is a loss for you computer wins!";
                break;
            case "SCISSORS":
                userScore = userScore+1;
                return "It is a loss for the computer you win!";
                break;
        }
    }

}

function game(){
    for(let i=1; i <=5 ; i++){
        let userInput = prompt(`Lets play a game of  Rock Paper Scissors,
        Lets make our choices Round: ` + i);
        let computerChoice = getComputerChoice();
        console.log(playGame(computerChoice,  userInput));
        console.log("SCORE; COMPUTER: "+computerScore+ " YOU: " + userScore)
    }
}



let computerScore = 0;
let userScore = 0;
game();