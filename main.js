let list = [
    "rock",
    "paper",
    "scissors"
]


function ClickHandler(input) {
    console.log("Handle")
    let computerChoice = list[Math.floor(Math.random()*3)]
    let displayLabel = document.getElementById("result")

    if (list.includes(input) == false) {
        displayLabel.textContent = "Please choose rock, paper, or scissors"
        return
    }

    if (input == computerChoice){
        displayLabel.textContent = "The computer chose " + computerChoice + ". Tie game"
    } else if ((input == "rock" && computerChoice == "scissors") 
    || (input == "paper" && computerChoice == "rock") 
    || (input == "scissors" && computerChoice == "paper")) 
    {
        displayLabel.textContent = "The computer chose " + computerChoice + ". You win"
    } else {
        displayLabel.textContent = "The computer chose " + computerChoice + ". You lose"
    }
}

function paper() {
    ClickHandler("paper")
}
function rock() {
    ClickHandler("rock")
}
function scissors() {
    ClickHandler("scissors")
}

window.onload=function() {
    document.getElementById("Paper").addEventListener("click", paper);
    document.getElementById("Rock").addEventListener("click", rock);
    document.getElementById("Scissors").addEventListener("click", scissors);
}






// while (true) {
//     let input = prompt("Choose rock, paper, or scissors", "Rock").toLowerCase();
//     let computerChoice = list[Math.floor(Math.random()*3)]

//     if (list.includes(input) == false) {
//         confirm("Please choose rock, paper, or scissors")
//         continue
//     }

//     if (input == computerChoice){
//         confirm("The computer chose " + computerChoice + ". Tie game")
//     } else if ((input == "rock" && computerChoice == "scissors") 
//     || (input == "paper" && computerChoice == "rock") 
//     || (input == "scissors" && computerChoice == "paper")) 
//     {
//         confirm("The computer chose " + computerChoice + ". You win")
//     } else {
//         confirm("The computer chose " + computerChoice + ". You lose")
//     }
// }

 