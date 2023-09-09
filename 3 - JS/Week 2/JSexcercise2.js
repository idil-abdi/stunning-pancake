

function random() {
    
    let computerGuess = Math.random()*10;
    computerGuess = Math.ceil(computerGuess);

    //let users = prompt('higher or lower');

    if (computerGuess > 5) {
        console.log(`${computerGuess} is higher`);
    } else if (computerGuess < 5) {
        console.log(`${computerGuess} is lower`);
    }
};

random();

