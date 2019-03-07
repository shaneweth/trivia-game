
const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const optionA = document.getElementById("A");
const optionB = document.getElementById("B");
const optionC = document.getElementById("C");
const optionD = document.getElementById("D");


var timeLeft = 30;
    var elem = document.getElementById('timerDemo');

    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft === 0) {
            clearTimeout(timerId);
            // doSomething will be the action the page takes after the clock has expired. 
            doSomething();
        } else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }

// Variable for questions. THis may be replaced with an API or a JSON file. 

let questions = [
    {
        question : "What does HTML stand for?",
        optionA : "hyper text markup language",
        optionB : "laksdflkajsdflj",
        optionC : "lllllllllalalalalal",
        optionD : "boobs",
        correct : "A"
    },
    
]

