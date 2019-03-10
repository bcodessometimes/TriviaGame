//Global Variables
var number = 121;
var intervalId;

//right/wrong answers
//cant select two answers
//submit button
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
      alert("Time Up!");
    }
}

function stop() {

    clearInterval(intervalId);
}



run();
//Display timer
//Change screen to end screen 
//Display scores
//Restart button