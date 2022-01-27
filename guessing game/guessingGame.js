var secretNumber = Math.floor(Math.random() * 10) + 1;


var startButton = document.getElementById("myBtn")
startButton.onclick = beginGame;

function beginGame() {

    var answer = prompt("Please guess the secret number (1-10)");
    answer = Number(answer);
    checkAnswer(answer);

    function checkAnswer(guess) {
        if (guess == secretNumber) {
            document.getElementById("congrats").innerHTML = "<br>Congrats, you guessed it correctly";
            alert("Correct!");
        } else if (guess > secretNumber) {
            alert("Incorrect " + answer + " Too High!");
            answer = prompt("Please guess the secret number (1-10)")
        } else if (guess < secretNumber) {
            alert("Incorrect " + answer + " Too Low!");
            answer = prompt("Please guess the secret number (1-10)");
        } else {
            alert("Invalid Input");
            answer = prompt("Please guess the secret number (1-10)");
        }
    }
}