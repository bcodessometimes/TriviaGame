//Global Variables
var number = 121;
var intervalId;
var correct = 0;
var incorrect = 0;
var answers;

//right/wrong answers
//cant select two answers
//submit button


function startScreen() {
    $(".data").html(`<div>
        <h2>To begin press this button</h2>
        <button type="button" class=startButton class="btn btn-info">Begin</button>
    </div>`)
    $(".startButton").on("click", function() {
    questionScreen () }
)}

function questionScreen () {
    $(".data").html(` <div class="timer">
    <h1>Begin!</h1>
</div>

<h2>First Question Here</h2>

<select id="Q1" class="custom-select">
    <option selected>Select Answer</option>
    <option value="incorrect">Incorrect</option>
    <option value="correct">Correct</option>
    <option value="incorrect">Incorrect</option>
    <option value="incorrect">Incorrect</option>
  </select>


<h2>Second Question Here</h2>

<select id="Q2" class="custom-select">
    <option selected>Select Answer</option>
    <option value="incorrect">Incorrect</option>
    <option value="correct">Correct</option>
    <option value="incorrect">Incorrect</option>
    <option value="incorrect">Incorrect</option>
  </select>


<h2>Third Question Here</h2>

<select id="Q2" class="custom-select">
    <option selected>Select Answer</option>
    <option value="incorrect">Incorrect</option>
    <option value="correct">Correct</option>
    <option value="incorrect">Incorrect</option>
    <option value="incorrect">Incorrect</option>
  </select>


<h2>Fourth Question Here</h2>

<select id="Q4" class="custom-select">
    <option selected>Select Answer</option>
    <option value="incorrect">Incorrect</option>
    <option value="incorrect">Incorrect</option>
    <option value="correct">Correct</option>
    <option value="incorrect">Incorrect</option>
  </select>


<h2>Fifth Question Here</h2>

<select id="Q5" class="custom-select">
    <option selected>Select Answer</option>
    <option value="incorrect">Incorrect</option>
    <option value="incorrect">Incorrect</option>
    <option value="correct">Correct</option>
    <option value="incorrect">Incorrect</option>
  </select>

<button type="button" class ="submitButton" class="btn btn-primary btn-lg btn-block">Submit</button>`)
    run()

    $(".submitButton").on("click", function() {
        gameOver() 
        scoreGame() }
    )}


function scoreGame () {
    var Q1Score = $("Q1").val();
    console.log(Q1Score);
    if (Q1Score == "correct") {
        correct ++; 
    console.log(correct);}
    
    
    
}


function gameOver() {

    $(".data").html(`<h2>Game Over!</h2>
    <div class="wins">Correct: </div>
    <div class="losses">Incorrect: </div>
    <button type="button" class="restartButton class="btn btn-info">Try Again</button>`)

    $(".restartButton").on("click", function () {
        startScreen () }


)}

//Build timer

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;

    $(".timer").html("<h1>" + number + "</h1>");

    if (number === 0) {
      stop();
      $(".timer").html("<h1>TIMES UP! </h1>")
    }
}

function stop() {

    clearInterval(intervalId);
}

$(document).ready(startScreen);


