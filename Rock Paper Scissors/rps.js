function getUserChoice (userInput) {
    if(userInput.toLowerCase() === 'rock' || userInput.toLowerCase() === 'paper' || userInput.toLowerCase() === 'scissors' || userInput.toLowerCase() === 'bomb') 
        {return userInput.toLowerCase()}
    else{console.log('Invalid entry')}
}

var compNumber = Math.floor(Math.random()*3)
function getComputerChoice () {
    if(compNumber === 0) 
        {return'rock'}
    else if(compNumber === 1)
        {return 'paper'}
    else if(compNumber === 2)
        {return 'scissors'}
}

function determineWinner (userChoice, computerChoice) {
    if (userChoice === 'bomb')
        {return 'User wins'}
    else if(userChoice === computerChoice) 
        {return 'Tie'}
    else if(userChoice === 'rock')
        {if(computerChoice === 'paper')
            {return 'Computer wins'}
        else{return 'User wins'}}
    else if(userChoice === 'paper')
        {if(computerChoice === 'scissors')
            {return 'Computer wins'}
        else{return 'User wins'}}
    else if(userChoice === 'scissors')
        {if(computerChoice === 'rock')
            {return 'Computer wins'}
        else{return 'User wins'}}
}

function playGame (userInput) {
    var userChoice = getUserChoice(userInput); 
    console.log(`User: ${userChoice}`);
    var computerChoice = getComputerChoice()
    console.log(`Computer: ${computerChoice}`)
    console.log(determineWinner(userChoice, computerChoice))
}

playGame('Rock')