let options = document.getElementsByName('userInput');
let cheatCode = document.getElementById('cheatCode');
let userChoice;
let compChoice;
let winner;
let userScore = 0;
let compScore = 0;

function getUserChoice () {
    if (cheatCode.value === 'jakeRoolz4eva!!') {
        userChoice = 'a Nuke'
    } else {
        for (let option of options) {
            if (option.checked) {
                userChoice = option.value;
                break;
            }
        }
    }
}

function getCompChoice () {
    let compNum = Math.floor(Math.random()*3);
    switch (compNum) {
        case 0: compChoice = 'Rock';
        break;
        case 1: compChoice = 'Paper';
        break;
        case 2: compChoice = 'Scissors';
        break;
    }
}

function getWinner () {
    if (userChoice === 'a Nuke')
        {winner = 'You'}
    else if(userChoice === compChoice) 
        {winner = 'None'}
    else if(userChoice === 'Rock')
        {if(compChoice === 'Paper')
            {winner = 'Computer'}
        else{winner = 'You'}}
    else if(userChoice === 'Paper')
        {if(compChoice === 'Scissors')
            {winner = 'Computer'}
        else{winner = 'You'}}
    else if(userChoice === 'Scissors')
        {if(compChoice === 'Rock')
            {winner = 'Computer'}
        else{winner = 'You'}}
}

function updateScores () {
    if (winner === 'You') {
        userScore++;
    } else if (winner === 'Computer') {
        compScore++;
    };
    if (userChoice === 'a Nuke') {
        userScore += 9999
    };
    document.getElementById('userScore').innerHTML = userScore;
    document.getElementById('compScore').innerHTML = compScore;
}

function getAlert () {
    let whoWon = () => {
        if (winner === 'None') {
            return 'It\'s a tie!'
        } else if (winner === 'Computer') {
            return 'Computer wins :('
        } else {
            return 'You win!'
        }
    }
    alert(`You chose ${userChoice},\nComputer chose ${compChoice}.\n${whoWon()}`);
}

function playGame () {
    getUserChoice();
    getCompChoice();
    getWinner();
    updateScores();
    // document.getElementById('results').style.display = 'block';
    document.getElementById('userChoice').innerHTML = userChoice;
    document.getElementById('compChoice').innerHTML = compChoice;
    document.getElementById('winner').innerHTML = winner;
    getAlert();
};

function startOver () {
    userScore = 0;
    compScore = 0;
    document.getElementById('userScore').innerHTML = userScore;
    document.getElementById('compScore').innerHTML = compScore;
    document.getElementById('results').style.display = 'none';
    document.getElementById('userChoice').innerHTML = '';
    document.getElementById('compChoice').innerHTML = '';
    document.getElementById('winner').innerHTML = '';
    cheatCode.value = '';
    for (let option of options) {
        option.checked = false;
    }
}