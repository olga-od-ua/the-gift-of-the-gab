//KNOWLEDGE TEST function

/*function getQuestionAnswer(questionId, answerId) {
  const answer = document.getElementById(questionId).innerText;
  
  if (answer === expectedAnswer) {
    document.getElementById(answerId).innerText += 'Correct!';
  }
}*/


var correctAnswerCount = 0;

function checkAnswer(userAnswerId, correctAnswerId, resultId, submitButtonId) {
  
  
  let userAnswer = document.getElementById(userAnswerId).value.trim();
  let correctAnswer = document.getElementById(correctAnswerId).value;
  let result = document.getElementById(resultId);
  let submitButton;

  if (userAnswer == correctAnswer) {

    result.innerHTML = 'Correct!';
    submitButton = document.getElementById(submitButtonId).disabled = true;
    submitButton = document.getElementById(submitButtonId).style.display = "none";

    
    correctAnswerCount += 1;
     if (correctAnswerCount == 25) {
      document.getElementById('test-table').style.display = 'none';
      document.getElementById('result-level').innerHTML = 'Advanced';
     }
  } else {
    document.getElementById('test-table').style.display = 'none';
    if (correctAnswerCount >=1 && correctAnswerCount <5) {
      document.getElementById('result-level').innerHTML = 'Beginner';
    } else if (correctAnswerCount >= 5 && correctAnswerCount <10) {
      document.getElementById('result-level').innerHTML = 'Elementary';
    } else if (correctAnswerCount >=10 && correctAnswerCount <15) {
      document.getElementById('result-level').innerHTML = 'Pre-Intermediate';
    } else if (correctAnswerCount >=15 && correctAnswerCount <20) {
      document.getElementById('result-level').innerHTML = 'Intermediate';
    } else if (correctAnswerCount >=21 && correctAnswerCount <25) {
      document.getElementById('result-level').innerHTML = 'Upper-Intermediate';
    } else {
      alert("try again")
    }
  }
}


$(document).ready(function() {
  $('#test-table-body').find('tr').slice(1).hide();
  $('.submit-test-answer').on('click', function() {
    $('#test-table-body').find('tr:visible').next().show();
  });
});