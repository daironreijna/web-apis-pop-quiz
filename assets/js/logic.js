/* Clear console log
   ============================================ */
console.clear();

/* Setup of variable containers
   ============================================ */

const timeEL = document.querySelector("#time");

const startButton = document.querySelector("#start");

let timeLeft = 3 // (Needs to be 3 minutes for ten questions)
let minutesLeft = 2
let secondsLeft = 59


function timer(event) {
    // Prevent default action
    event.preventDefault();
    // Sets interval in variable
    var timerInterval = setInterval(function() {

        // As long as the `timeLeft` is greater than 1
        if (secondsLeft > 0){
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timeEL.textContent = (`${minutesLeft} : ${secondsLeft}`);
            // Decrement `timeLeft` by 1
            secondsLeft--;
        } else if (secondsLeft === 0) {
            minutesLeft--;
            secondsLeft = 59;
            // Calls function to create and append highscore
           // sendHighscore();
        } else if (minutesLeft === 0 && secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }
    },1000);
};

startButton.addEventListener("click", timer);

