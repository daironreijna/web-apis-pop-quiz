/* Clear console log
   ============================================ */
//console.clear();

/* Setup of variable containers
   ============================================ */

const timeEL = document.querySelector("#time");

const startButton = document.querySelector("#start");

let timeLeft = 100 // (Needs to be 3 minutes for ten questions)
// let minutesLeft = 2
// let secondsLeft = 59

//TODO! problem with timer, the count down of minutes and seconds stops at 0:1, also the count down may better be 100s and easier to program the deduction of 10s for wrong answers.

function timer(event) {
    // Prevent default action
    event.preventDefault();
    // Sets interval in variable
    var timerInterval = setInterval(function() {

        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 0){
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timeEL.textContent = (`${timeLeft}`);
            // Decrement `timeLeft` by 1
            timeLeft--;
            
        }  else {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }
    },1000);
};

// function timer(event) {
//     // Prevent default action
//     event.preventDefault();
//     // Sets interval in variable
//     var timerInterval = setInterval(function() {

//         // As long as the `timeLeft` is greater than 1
//         if (secondsLeft > 0){
//             // Set the `textContent` of `timerEl` to show the remaining seconds
//             timeEL.textContent = (`${minutesLeft} : ${secondsLeft}`);
//             // Decrement `timeLeft` by 1
//             secondsLeft--;
            
//         } else if (minutesLeft > 0 && secondsLeft === 0  ) {
//             minutesLeft--;
//             secondsLeft = 59;
//             // Calls function to create and append highscore
//            // sendHighscore();
//         } else if (minutesLeft === 0 && secondsLeft === 1) {
//             secondsLeft = 0 
//             timeEL.textContent = (`${minutesLeft} : ${secondsLeft}`);
            
            
//         }  else {
//             secondsLeft--;
//             // Stops execution of action at set interval
//             clearInterval(timerInterval);
//         }
//     },1000);
// };

startButton.addEventListener("click", timer);

