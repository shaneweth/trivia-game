// Timer Variable - Need to set function in order to nest.
var timeLeft = 30;
    var elem = document.getElementById('timer-box');

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

let currentQuestion = 0;
var totalQuest = questions.length;


var container = document.getElementById('quiz-box');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuest (QuestionIndex) {
    
}

