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
    questionScreen () 
    correct = 0}
    
)}

function questionScreen () {
    $(".data").html(` <div class="timer">
    <h1>Begin!</h1>
</div>

<h2>First Question Here</h2>

<select id="Q1" class="custom-select">
    <option selected>Select Answer</option>
    <option value="incorrect">Incorrect</option>
    <option value="incorrect">Incorrect</option>
    <option value="correct">Correct</option>
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

<select id="Q3" class="custom-select">
    <option selected>Select Answer</option>
    <option value="incorrect">Incorrect</option>
    <option value="correct">Correct</option>
    <option value="incorrect">Incorrect</option>
    <option value="incorrect">Incorrect</option>
  </select>


<h2>Fourth Question Here</h2>

<select id="Q4" class="custom-select">
    <option selected>Select Answer</option>
    <option value="correct">Correct</option>
    <option value="incorrect">Incorrect</option>
    <option value="incorrect"></option>
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
        scoreGame()
        gameOver() 
        $(".score").append("<h3>" + "Final Score:" + correct + "/5" + "</h3>")
         }
    )}


function scoreGame () {
    var Q1Score = $("#Q1").val();

    if (Q1Score === "correct") {
        correct++; }
        // console.log(Q1Score);
    
    var Q2Score = $("#Q2").val();

    if (Q2Score === "correct") {
        correct++; }
        // console.log(Q2Score);

    var Q3Score = $("#Q3").val();

    if (Q3Score === "correct") {
        correct++; }
        // console.log(Q3Score);
    
    var Q4Score = $("#Q4").val();

    if (Q4Score === "correct") {
        correct++; }
        // console.log(Q4Score);

    var Q5Score = $("#Q5").val();

    if (Q5Score === "correct") {
        correct++; }
        // console.log(Q5Score);

        console.log(correct);

    
}


function gameOver() {

    $(".data").html(`<h1>Game Over!</h1>
    <div class="score">  </div>
    
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


