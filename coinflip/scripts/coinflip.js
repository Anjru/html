function flipcoin(){
    let answer = Math.floor(Math.random()*2); 
    return answer;
}

function heads() {
    let answer = flipcoin();
    let guess = document.getElementById("guess");
    let answerText = document.getElementById("answer");
    let correct = document.getElementById("correct");
    guess.innerText = "You guessed Heads...";
    if(answer == 0) {
        answerText.innerText = 
            'The coin flips and comes up Heads!';
        correct.innertext = 'Good Guess';
    } else {
        answerText.innerText = 
            'The coin flips and comes up Tails!';
            correct.innertext = 'Wrong guess';
    }
}

function tails() {
    let answer = flipcoin();
    let guess = document.getElementById("guess");
    let answerText = document.getElementById("answer");
    let correct = document.getElementById("correct");
    guess.innerText = "You guessed Tails...";
    if(answer == 0) {
        answerText.innerText = 
            'The coin flips and comes up Heads!';
            correct.innertext = 'Wrong guess';
        
    } else {
        answerText.innerText = 
            'The coin flips and comes up Tails!';
            correct.innertext = 'Good Guess';
    }
}
