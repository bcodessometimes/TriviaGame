//Global Variables
var number = 1200;
var intervalId;
var correct = 0;
var incorrect = 0;

//right/wrong answers
//cant select two answers
//submit button


function startScreen() {
    $(".data").html(`<div>
        <h2>To begin press this button</h2>
        <button type="button" class="btn btn-info">Begin</button>
    </div>`)
}

function questionScreen () {
    $(".data").html(` <div class="timer">
    <h1>Begin!</h1>
</div>

<h2 class="Q1">First Question Here</h2>

<select class="custom-select">
    <option selected>Select Answer</option>
    <option value="1" class="incorrect">One</option>
    <option value="2" class="correct">Two</option>
    <option value="3" class="incorrect">Three</option>
    <option value="4" class="incorrect">Four</option>
  </select>


<h2 class="Q2">Second Question Here</h2>

<select class="custom-select">
    <option selected>Select Answer</option>
    <option value="1" class="correct">One</option>
    <option value="2" class="incorrect">Two</option>
    <option value="3" class="incorrect">Three</option>
    <option value="4" class="incorrect">Four</option>
  </select>


<h2 class="Q3">Third Question Here</h2>

<select class="custom-select">
    <option selected>Select Answer</option>
    <option value="1" class="incorrect">One</option>
    <option value="2" class="incorrect">Two</option>
    <option value="3" class="correct">Three</option>
    <option value="4" class="incorrect">Four</option>
  </select>


<h2 class="Q4">Fourth Question Here</h2>

<select class="custom-select">
    <option selected>Select Answer</option>
    <option value="1" class="correct">One</option>
    <option value="2" class="incorrect">Two</option>
    <option value="3" class="incorrect">Three</option>
    <option value="4" class="incorrect">Four</option>
  </select>


<h2 class="Q5">Fifth Question Here</h2>

<select class="custom-select">
    <option selected>Select Answer</option>
    <option value="1" class="incorrect">One</option>
    <option value="2" class="correct">Two</option>
    <option value="3" class="incorrect">Three</option>
    <option value="4" class="incorrect">Four</option>
  </select>

<button type="button" class ="submitButton" class="btn btn-primary btn-lg btn-block">Submit</button>`)
    run()
    $(".submitButton").on("click", scoreSubmit() )
}

function scoreSubmit() {
    if $("Q1") = class"correct"
        correct++

    gameOver()
}



function gameOver() {

    $(".data").html(`<h2>Game Over!</h2>
    <div class="wins">Correct: </div>
    <div class="losses">Incorrect: </div>
    <button type="button" class="btn btn-info">Try Again</button>`)


}

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

$(document).ready(questionScreen);


//Display timer
//Change screen to end screen 
//Display scores
//Restart button