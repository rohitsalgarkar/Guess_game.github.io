let gameResult = document.getElementById("gameResult");
let guessnumber = document.getElementById("userInput");
let randomnumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let guessnumbervalue = parseInt(guessnumber.value);
    if (guessnumbervalue > randomnumber) {
        gameResult.textContent = "To High!,Please Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessnumbervalue < randomnumber) {
        gameResult.textContent = "To Low!,Please Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessnumbervalue === randomnumber) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Invalid input, please enter valid input";
        gameResult.style.backgroundColor = "red";
    }
}