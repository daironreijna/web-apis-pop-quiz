/* setup of object array container 
source: https://www.beelovedcity.com/uk-quiz and https://www.britannica.com/quiz/united-states-of-america-quiz and https://www.britannica.com/quiz/usa-facts and https://www.bbc.co.uk/cbbc/quizzes/united-states-quiz 
used an online js minifier to reduce questionBank into one line. https://www.toptal.com/developers/javascript-minifier
=========================================== */

const questionBank = [{ title: "In which London park is Winter Wonderland (the Christmas market)?", Q1: "Regents park", Q2: "Hyde Park", Q3: "St James Park", Q4: "Green Park", Answer: "Hyde Park" }, { title: "Which flower is worn for Remembrance Day?", Q1: "Poppy", Q2: "Daffodil", Q3: "Bluebell", Q4: "Rose", Answer: "Poppy" }, { title: "In which timezone is the UK?", Q1: "GMT", Q2: "EST", Q3: "CET", Q4: "PST", Answer: "GMT" }, { title: "In which UK city was J.K. Rowling living when she wrote most of the Harry Potter books?", Q1: "Bristol", Q2: "Newcastle", Q3: "Cardiff", Q4: "Edinburgh", Answer: "Edinburgh" }, { title: "In which city was the Titanic built?", Q1: "Southampton", Q2: "Belfast", Q3: "Liverpool", Q4: "Plymouth", Answer: "Belfast" }, { title: "Which one of the following wasn’t written by William Shakespeare?", Q1: "Macbeth", Q2: "Hamlet", Q3: "Oliver Twist", Q4: "Romeo and Juliet", Answer: "Oliver Twist" }, { title: "What is Sam Heughan’s character in Outlander?", Q1: "Jack Randall", Q2: "Murtagh Fitzgibbons", Q3: "Jamie Fraser", Q4: "Lord John Grey", Answer: "Jamie Fraser" }, { title: "Who is the longest-reigning monarch in English history?", Q1: "Queen Elizabeth II", Q2: "Queen Victoria", Q3: "King George III", Q4: "King George II", Answer: "Queen Elizabeth II" }, { title: "Which city are people from a scouse accent from?", Q1: "Newcastle", Q2: "Leeds", Q3: "Manchester", Q4: "Liverpool", Answer: "Liverpool" }, { title: "Which London Skyscraper is the tallest?", Q1: "The Gherkin", Q2: "The Walkie Talkie", Q3: "The Shard", Q4: "Baltimore Tower", Answer: "The Shard" }, { title: "If you eat Bangers and Mash, what are Bangers?", Q1: "Beans", Q2: "Sausages", Q3: "Bacon stripes", Q4: "Tomatoes", Answer: "Sausages" }, { title: "Which actress was the first one to portray the Queen in the Netflix show “The Crown”?", Q1: "Claire Foy", Q2: "Olivia Colman", Q3: "Sylvia Hoeks", Q4: "Emma Corrin", Answer: "Claire Foy" }, { title: "What was the first capital of England?", Q1: "Winchester", Q2: "Chester", Q3: "Chesterfield", Q4: "Cambridge", Answer: "Winchester" }, { title: "Which one of the following cities is the further north?", Q1: "Aberdeen", Q2: "Dundee", Q3: "Belfast", Q4: "Newcastle", Answer: "Aberdeen" }, { title: "Who was the last Tudor Monarch?", Q1: "Elizabeth I", Q2: "Henry VII", Q3: "Edward VI", Q4: "Mary I", Answer: "Elizabeth I" }, { title: "Where were the Beatles from?", Q1: "Manchester", Q2: "Leeds", Q3: "London", Q4: "Liverpool", Answer: "Liverpool" }, { title: "Which one of the following islands is not in Scotland?", Q1: "Isle of Skye", Q2: "Isle of Mull", Q3: "Islay", Q4: "Isle of Man", Answer: "Isle of Man" }, { title: "In which small town was Charles Darwin born?", Q1: "Shrewsbury", Q2: "Macclesfield", Q3: "Salcombe", Q4: "Coventry", Answer: "Shrewsbury" }, { title: "Who is regarded as the first Prime Minister of the United Kingdom?", Q1: "Winston Churchill", Q2: "William Grenville", Q3: "Henry Pelham", Q4: "Robert Walpole", Answer: "Robert Walpole" }, { title: "Which Nobel Prize did Churchill win?", Q1: "Peace", Q2: "Economics", Q3: "Medicine", Q4: "Literature", Answer: "Literature" }, { title: "How many stations does the London Underground serve?", Q1: "72", Q2: "172", Q3: "272", Q4: "372", Answer: "272" }, { title: "Which castle is the real-life version of Downton Abbey?", Q1: "Highclere Castle", Q2: "Bodiam Castle", Q3: "Alnwick Castle", Q4: "Belvoir Castle", Answer: "Highclere Castle" }, { title: "Which English county is the further south?", Q1: "Worcester", Q2: "Suffolk", Q3: "Bedford", Q4: "Somerset", Answer: "Somerset" }, { title: "How long is the channel tunnel?", Q1: "3 miles", Q2: "18 miles", Q3: "31 miles", Q4: "65 miles", Answer: "31 miles" }, { title: "What is Adele’s best selling single?", Q1: "Rolling in the deep", Q2: "Someone like you", Q3: "Hello", Q4: "Set Fire to the rain", Answer: "Someone like you" }, { title: "When was Ed Sheeran born?", Q1: "1981", Q2: "1984", Q3: "1989", Q4: "1991", Answer: "1991" }, { title: "When did John Lewis launch their first Christmas advert?", Q1: "1977", Q2: "1987", Q3: "1997", Q4: "2007", Answer: "2007" }, { title: "Which American city was historically known as New Amsterdam?", Q1: "Salt Lake City", Q2: "New York City", Q3: "Brigham City", Q4: "Boulder City", Answer: "New York City" }, { title: "What is the American state with the fewest counties?", Q1: "Maine", Q2: "Delaware", Q3: "Utah", Q4: "Rhode Island", Answer: "Delaware" }, { title: "Which was the first official national flag of America?", Q1: "Union Flag", Q2: "Stars and Stripes", Q3: "Stars and Bars", Q4: "Continental Colours", Answer: "Stars and Stripes" }, { title: "Which national park is located in Lake Superior?", Q1: "Olympic National Park", Q2: "Isle Royale National Park", Q3: "Great Sand Dunes National Park and Preserve", Q4: "Dry Tortugas National Park", Answer: "Isle Royale National Park" }, { title: "In which state will you find the natural park known as the Garden of the Gods?", Q1: "Colorado", Q2: "Nevada", Q3: "Wyoming", Q4: "Missouri", Answer: "Colorado" }, { title: 'Who designed the most famous Uncle Sam "I Want You" poster?', Q1: "Howard Chandler Christy", Q2: "James Montgomery Flagg", Q3: "Thomas Nast", Q4: "Charles Dana Gibson", Answer: "James Montgomery Flagg" }, { title: "What was the first steam-operated railway in the United States to be chartered as a common carrier of freight and passengers?", Q1: "Baltimore and Ohio Railroad", Q2: "Union Pacific Railroad", Q3: "Pennsylvania Railroad", Q4: "Erie Railroad", Answer: "Baltimore and Ohio Railroad" }, { title: "What are Lakes Superior, Michigan, Huron, Erie, and Ontario collectively known as?", Q1: "Arrow Lakes", Q2: "Lake District", Q3: "Greater Lakes", Q4: "Great Lakes", Answer: "Great Lakes" }, { title: "In what year was the New York Stock Exchange created?", Q1: "1875", Q2: "1928", Q3: "1909", Q4: "1817", Answer: "1817" }, { title: "Which state did Edward Kennedy represent as a U.S. Senator?", Q1: "Massachusetts", Q2: "Delaware", Q3: "New York", Q4: "Connecticut", Answer: "Massachusetts" }, { title: "Which university was founded as the College of New Jersey in 1746?", Q1: "Rowan University", Q2: "Kean University", Q3: "Rutgers, The State University of New Jersey", Q4: "Princeton University", Answer: "Princeton University" }, { title: "Who was the first American to orbit the Earth?", Q1: "Donald Slayton", Q2: "John Glenn", Q3: "Neil Armstrong", Q4: "Virgil Grissom", Answer: "John Glenn" }, { title: "What is the largest man-made reservoir in the United States?", Q1: "Table Rock Lake", Q2: "Lake Mead", Q3: "Bull Shoals Lake", Q4: "Lake Francis Case", Answer: "Lake Mead" }, { title: "How many states are included in the New England region of the United States?", Q1: "4", Q2: "3", Q3: "6", Q4: "9", Answer: "6" }, { title: "In which state is the Painted Desert located?", Q1: "Arizona", Q2: "Nevada", Q3: "California", Q4: "Kansas", Answer: "Arizona" }, { title: "Which is the only state in the United States to be split into two large land segments?", Q1: "Hawaii", Q2: "Washington", Q3: "North Carolina", Q4: "Michigan", Answer: "Michigan" }, { title: "In which American city was the world’s first domed air-conditioned indoor stadium built?", Q1: "Philadelphia", Q2: "Denver", Q3: "Houston", Q4: "Chicago", Answer: "Houston" }, { title: 'The name of which state is derived from a Shoshone phrase meaning "gem of the mountains"?', Q1: "Idaho", Q2: "Louisiana", Q3: "Nevada", Q4: "Alabama", Answer: "Idaho" }, { title: "What is the minimum age necessary to be eligible for membership in the U.S. House of Representatives?", Q1: "21", Q2: "18", Q3: "25", Q4: "30", Answer: "25" }, { title: "What is the longest tributary of the Mississippi River?", Q1: "Missouri River", Q2: "Red River", Q3: "Ohio River", Q4: "Arkansas River", Answer: "Missouri River" }, { title: "Which university was founded as King’s College in 1754?", Q1: "Columbia University", Q2: "Stanford University", Q3: "Brown University", Q4: "Princeton University", Answer: "Columbia University" }, { title: "In which state would you find the Everglades?", Q1: "Colorado", Q2: "Alaska", Q3: "Florida", Q4: "Texas", Answer: "Florida" }, { title: "Which was the first state in U.S. to be carved from the Northwest Territory?", Q1: "Ohio", Q2: "Illinois", Q3: "Michigan", Q4: "Indiana", Answer: "Ohio" }, { title: "How many colleges and universities make up the Ivy League?", Q1: "10", Q2: "5", Q3: "6", Q4: "8", Answer: "8" }, { title: "If you are visiting Death Valley, in which U.S. state will you be?", Q1: "Nevada", Q2: "California", Q3: "Colorado", Q4: "New Mexico", Answer: "California" }, { title: "Who was the first chief justice of the United States?", Q1: "William Howard Taft", Q2: "John Jay", Q3: "Charles Evans Hughes", Q4: "Earl Warren", Answer: "John Jay" }, { title: "Which of these is not an American national park?", Q1: "Yellowstone", Q2: "Grand Canyon", Q3: "Disneyland", Q4: "Yosemite", Answer: "Disneyland" }, { title: "How many stripes does the American flag have?", Q1: "18", Q2: "13", Q3: "10", Q4: "15", Answer: "13" }, { title: "What was the boundary between Maryland and Pennsylvania originally called?", Q1: "Maryland Demarcation Line", Q2: "Mason-Dixon Line", Q3: "Mason Pennsylvania Line", Q4: "Charles Dixon Line", Answer: "Mason-Dixon Line" }, { title: "In which American city is the Miss America Pageant held annually?", Q1: "New York City", Q2: "Los Angeles", Q3: "Atlantic City", Q4: "Kansas City", Answer: "Atlantic City" }, { title: "Who appoints the director of the Federal Bureau of Investigation?", Q1: "the chief justice", Q2: "the U.S. vice president", Q3: "the U.S. president", Q4: "the chief of staff", Answer: "the U.S. president" }, { title: "What is the oldest institution of higher learning in the United States?", Q1: "Cornell University", Q2: "College of William & Mary", Q3: "Harvard University", Q4: "Yale University", Answer: "Harvard University" }, { title: "Which of these is the highest civilian award in the United States?", Q1: "Medal for Merit", Q2: "National Medal of Arts", Q3: "Presidential Citizens Medal", Q4: "Presidential Medal of Freedom", Answer: "Presidential Medal of Freedom" }, { title: "What nickname is given to the period preceding the Great Depression in America?", Q1: "the Roaring Twenties", Q2: "the Terrible Teens", Q3: "the Naughties", Q4: "the Rumbling Thirties", Answer: "the Roaring Twenties" }, { title: "How many months was the Pony Express, the pioneer mail service in the Wild West, operational?", Q1: "48", Q2: "18", Q3: "12", Q4: "24", Answer: "18" }, { title: "How many stars are there in the American flag?", Q1: "50", Q2: "60", Q3: "70", Q4: "40", Answer: "50" }, { title: "What was New York called before it was New York?", Q1: "New Jersey", Q2: "New Zealand", Q3: "Staten Island", Q4: "New Amsterdam", Answer: "New Amsterdam" }, { title: "What major airline began as a crop-dusting service?", Q1: "American", Q2: "Air India", Q3: "Delta", Q4: "Pan Am", Answer: "Delta" }, { title: "Which structure was destroyed in the September 11 terrorist attacks?", Q1: "the Pentagon", Q2: "the Chrysler Building", Q3: "the World Trade Center", Q4: "the Empire State Building", Answer: "the World Trade Center" }, { title: "Where was Abraham Lincoln assassinated?", Q1: "in a theater", Q2: "in the street", Q3: "on a train", Q4: "in his home", Answer: "in a theater" }, { title: "The Rocky Mountains (or the 'Rockies') stretch down from Canada and throughout the United States. In which of these states would you NOT see these mountains?", Q1: "Colorado", Q2: "Minnesota", Q3: "New Mexico", Q4: "Wyoming", Answer: "Minnesota" }, { title: "By size, which is the biggest state in America?", Q1: "California", Q2: "Texas", Q3: "Alaska", Q4: "Montana", Answer: "Alaska" }, { title: "The White House is a building where the President lives, but where is it?", Q1: "Pennsylvania", Q2: "New York", Q3: "California", Q4: "Washington DC", Answer: "Washington DC" }, { title: "By size, which is the smallest state in America?", Q1: "Rhode Island", Q2: "New Hampshire", Q3: "Delaware", Q4: "New Jersey", Answer: "Rhode Island" }]

/* setup of variable containers 
   =========================================== 
*/

const titleQuestion = document.querySelector("h2");

const buttonClick = document.querySelector("#start");

const questionChoices = document.querySelector("#choices");

// Funtion for getting a random element from an array
function getRandom(arr) {
   let randomIndex = Math.ceil(Math.random() * arr.length);
   let randomElement = arr[randomIndex];
   return randomElement;
}

// Function to shuffle the choices 
// resource: stackoverflow (2021) 
function shuffle(array) {
   var m = array.length, t, i;

   // While there remain elements to shuffle…
   while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
   }

   return array;
}

// Function for sending questions to HTML page after timer is started. 
function sendQuestion() {
   // the start page needs to be hidden.
   const startEL = document.querySelector("#start-screen");

   const list = startEL.classList;
   list.add("hide");
   list.remove("start");

   // Question element is visible, and question and choices are sent to HTML
   var questionsEL = document.querySelector("#questions");

   const list2 = questionsEL.classList;
   list2.remove("hide");
   list2.add("start");

   // get questions to show on html but randomise which question is shown from the questionBank.

   const getQuestions = getRandom(questionBank);
   console.log(getQuestions)
   var questionTitle = document.querySelector("#question-title");
   console.log(questionTitle)
   questionTitle.innerHTML = getQuestions.title;

   // variable to append list of options/multiple choice 
   var choices = document.querySelector(".choices");

   // create the list elements on the HTML page
   for (let index = 0; index < 4; index++) {
      choices.innerHTML += `<li class="choice-${index}"></li>`
   }

   // create variables that point to the respective list nr
   var option1 = document.querySelector(".choice-0");
   var option2 = document.querySelector(".choice-1");
   var option3 = document.querySelector(".choice-2");
   var option4 = document.querySelector(".choice-3");

   // Create a new array with the choices 

   let choicesArray = [];
   choicesArray = [getQuestions.Q1, getQuestions.Q2, getQuestions.Q3, getQuestions.Q4];
   
   // shuffle the multiple choice questions
   for (let index2 = 0; index2 < 4; index2++) {
      shuffle(choicesArray);
   }

   option1.innerHTML = choicesArray[0];
   option2.innerHTML = choicesArray[1];
   option3.innerHTML = choicesArray[2];
   option4.innerHTML = choicesArray[3];

   //var input = document.getElementById('TI').value;
   //localStorage.setItem('TI', input);
   //document.getElementById('TI').value = localStorage.getItem('TI');

   // // store
   // localStorage.setItem('choice0Local', choiceQ1)
   // // Retrieve
   // //document.getElementById("choice4").innerHTML = localStorage.getItem("choice0Local");
   // // store
   // localStorage.setItem('choice1Local', choiceQ2)
   // // Retrieve
   // //document.getElementById("choice5").innerHTML = localStorage.getItem("choice1Local");
   // // store
   // localStorage.setItem('choice2Local', choiceQ3)
   // // Retrieve
   // //document.getElementById("choice6").innerHTML = localStorage.getItem("choice2Local");
   // // store
   // localStorage.setItem('choice3Local', choiceQ4)
   // // Retrieve
   // //document.getElementById("choice7").innerHTML = localStorage.getItem("choice3Local");
   // // storage
   // //localStorage.setItem('answerLocal', answer)



   // //var choice1 = document.getElementById("#choice1");
   // // var text1 = document.createTextNode(choiceQ2);

   // // //   choice1.innerHTML(text1);

   // // var choice2 = document.getElementById("#choice2");
   // // var text2 = document.createTextNode(choiceQ3);

   // // // choice2.innerHTML(text2);

   // // var choice3 = document.getElementById("#choice3");
   // // var text3 = document.createTextNode(choiceQ4);
   // // console.log(choice3)
   // // console.log(text3)
   // // //choice3.innerHTML(text3);

   window.localStorage.setItem("JSONgetQuestions", JSON.stringify(getQuestions));

   // let newObject = window.localStorage.getItem("JSONgetQuestions");
   // console.log(JSON.parse(newObject));

   // let formDataArry = localStorage.getItem('formDataArry') || []

   // let inputData2Array = JSON.stringify(getRandom(questionBank))

   // formDataArry.push(inputData2Array)

   // localStorage.setItem('formDataArry', formDataArry)

   // if ("class=choice0")
   // function choiceList(index){
   //    if ((index + 1) === 1) {
   //       return choiceQ1;
   //    } else if ((index + 1) === 2) {
   //       return choiceQ2;
   //    } else if ((index + 1) === 3) {
   //       return choiceQ3;
   //    } else if ((index + 1) === 4) {
   //       return choiceQ4;
   //    }
   // }
};

// local storage 


// window.localStorage.setItem("JSONquestionBank_random", JSON.stringify(getRandom(questionBank)));

// let newObject2 = window.localStorage.getItem("JSONquestionBank_random");
// console.log(JSON.parse(newObject2));

// fillHTML = JSON.parse(newObject2);
// fillHTML2 = newObject2;

// // var choice4 = document.getElementById("#choice4");
// console.log(`fillHTML ln 667 ${fillHTML}`);
// console.log(`fillHTML ln 668 ${fillHTML2}`);

// let formDataArry2 = localStorage.getItem('formDataArry2') || []

// let inputData2Array2 = JSON.stringify(getRandom(questionBank))

// formDataArry2.push(inputData2Array2)

// localStorage.setItem('formDataArry2', formDataArry2)


// var choice5 = document.getElementById("#choice5");
// choice5.textContent = fillHTML[2];

// var choice6 = document.getElementById("#choice6");
// choice6.textContent = fillHTML[3];

// var choice7 = document.getElementById("#choice7");
// choice7.textContent = fillHTML[4];



/*
When working with the window.localStorage object, you should be familiar with the following methods: setItem, getItem, removeItem, clear, and key.

*/

// document.body.appendChild(box1);

// var box2 = document.createElement("div");

// box2.innerHTML = choiceQ2;

// document.body.appendChild(box2);

// var box3 = document.createElement("div");

// box3.innerHTML = choiceQ3;

// document.body.appendChild(box3);


// var box4 = document.createElement("div");

// box4.innerHTML = choiceQ4;

// document.body.appendChild(box4);

//questionChoices 

//    var boxes = questionsEL.querySelector("boxes"); 
//    boxes.addEventListener("click", function (event) {
//       // if they select any of the div elements and its content corresponds with the correct answer for that question bank then highlight correct or highlight incorrect and deduct 10s from 'timeLeft'.
//       if (answer === event)
//          console.log("correct");
//          //setAnswerText()
//       else {
//          console.log("incorrect");
//          timeLeft -= 10;
//          //setAnswerText()
//       }

//    });
// }

// function setAnswerText() {

// }

/*
function pushQuestions(event) {
   // Prevent default action
   event.preventDefault();
   // Sets interval in variable
   var questionInterval = setInterval(function() {

       // As long as the `timeLeft` is greater than 1
       if (secondsLeft > 0){
           // Set the `textContent` of `timerEl` to show the remaining seconds
           timeEL.textContent = (`${ minutesLeft } : ${ secondsLeft } `);
           // Decrement `timeLeft` by 1
           secondsLeft--;
       } else if (secondsLeft === 0) {
           minutesLeft--;
           secondsLeft = 59;
           // Calls function to create and append highscore
          // sendHighscore();
       } else if (minutesLeft === 0 && secondsLeft === 0) {
           // Stops execution of action at set interval
           clearInterval(questionInterval);
       }
   },1000);
};

function sendHighscore()


*/

// Get id of element clicked by user
// $("#color-picker").click(function (event) {
//    userAnswer = event.target.id;

//    // Compare id to target id
//    if (userAnswer === targetColorOfText) {
//       alert("You win!");
//       reset();
//    }
//    else {
//       alert("Wrong!");
//       reset();
//    }
// });

buttonClick.addEventListener("click", sendQuestion);