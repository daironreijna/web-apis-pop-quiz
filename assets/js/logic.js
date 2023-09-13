/* Clear console log
   ============================================ */
//console.clear();

/* Setup of variable containers
   ============================================ */


// variables to keep track if quiz state
let questions = [{"title": "question1", "choices":["1.1", "1.2", "1.3", "1.4"], "answer": "1.4"}, {"title": "quetion2", "choices":["2.1", "2.2", "2.3", "2.2"], "answer": "1.4"}, {"title": "question3", "choices":["3.1", "3.2", "3.3", "3.4"], "answer": "3.1"}]
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerID;

// HTML elements;
const timeEL = document.querySelector("#time");
const startButton = document.querySelector("#start");
const submitButton = document.querySelector("submit");
console.log(submitButton);

let timeLeft = 10 // (Needs to be 3 minutes for ten questions)
let minutesLeft = 0;
let secondsLeft = 59;


// function timer(event) {
//     // Prevent default action
//     event.preventDefault();
//     // Sets interval in variable
//     var timerInterval = setInterval(function() {

//         // As long as the `timeLeft` is greater than 1
//         if (timeLeft > 0){
//             // Set the `textContent` of `timerEl` to show the remaining seconds
//             timeEL.textContent = (`${timeLeft}`);
//             // Decrement `timeLeft` by 1
//             timeLeft--;
            
//         }  else {
//             timeEL.textContent = (`${timeLeft}`)
//             // Stops execution of action at set interval
//             clearInterval(timerInterval);
//         }
//     },1000);
// };

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
            
        } else if (minutesLeft > 0 && secondsLeft === 0  ) {
            timeEL.textContent = (`${minutesLeft} : ${secondsLeft}`);
            minutesLeft--;
            secondsLeft = 59;
            // Calls function to create and append highscore
           // sendHighscore();
        } else if (minutesLeft === 0 && secondsLeft === 1) {
            secondsLeft = 0 
            timeEL.textContent = (`${minutesLeft} : ${secondsLeft}`);
                        
        }  else {
            timeEL.textContent = (`${minutesLeft} : ${secondsLeft}`);
            // ====================
            timeLeft = 0;
            console.log(`${timeLeft}`)
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }
    },1000);
};

startButton.addEventListener("click", timer);

