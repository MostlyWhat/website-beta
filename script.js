// FOOD RELATED STUFF
let foc = document.getElementById("food-or-consequences");

function warnAboutFood() {
  foc.textContent = "It's too late to warn about the consequences, you better run";
  foc.style.color = "red";
}

function tooLate() {
  foc.textContent = "I am glad you survive for a few seconds, but she's right behind you...";
  foc.style.color = "purple";
}

foc.addEventListener('mouseenter', warnAboutFood);
foc.addEventListener('mouseleave', tooLate);

// QUIZ RELATED STUFF
let quizOptions = document.querySelectorAll("#quiz-form .quiz-option");
let quizResult = document.getElementById("quiz-result");
let wrongDialog = document.getElementById("wrong-dialog");
let closeDialog = document.getElementById("close-dialog");
let songLink = document.getElementById("song-link");

function showWrongDialog() {
  wrongDialog.showModal();
}

function showCorrectAnswer() {
  quizResult.textContent = "Correct! Our favorite song is Tokyo Nights!";
  songLink.hidden = false;
}

function checkAnswer(event) {
  let button = event.target;
  if (button.dataset.correct === "true") {
    showCorrectAnswer();
  } else {
    showWrongDialog();
  }
}

quizOptions.forEach(function(button) {
  button.addEventListener('click', checkAnswer);
});

closeDialog.addEventListener('click', function() {
  wrongDialog.close();
});
