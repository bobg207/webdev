// DOM objects
const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const result = document.querySelector('.result')
const compImg = document.querySelector('.comp-img')
const userImg = document.querySelector('.user-img')
const output = document.querySelector('.header')

// game variables
const choices = ['rock', 'paper', 'scissors']
let comp
let userScore = 0

// event listeners
rockButton.addEventListener('click', () => {
    userImg.src = "../images/rps_imgs/" + rockButton.id + ".png"
    compChoice()
    winLose(rockButton.id)
})
paperButton.addEventListener('click', () => {
    userImg.src = "../images/rps_imgs/" + paperButton.id + ".png"
    compChoice()
    winLose(paperButton.id)
})
scissorsButton.addEventListener('click', () => {
    userImg.src = "../images/rps_imgs/" + scissorsButton.id + ".png"
    compChoice()
    winLose(scissorsButton.id)
})

// game functions
function compChoice() {
    const randNum = Math.floor(Math.random()*3)
    comp = choices[randNum]
    compImg.src = "../images/rps_imgs/" + comp + ".png"
}

function winLose(userChoice) {
    if ((userChoice == "rock" && comp == "paper") || (userChoice == "scissors" && comp == "rock") || (userChoice == "paper" && comp == "scissors")){
        result.innerText = 'Computer Wins'
    } else if (comp == "rock" && userChoice == "paper") {
        result.innerText = 'User Wins'
    } else if (comp == "scissors" && userChoice == "rock") {
        result.innerText = 'User Wins'
    } else if (comp == "paper" && userChoice == "scissors") {
        result.innerText = 'User Wins'
    } else {
        result.innerText = "That's a Tie"
    }
}
