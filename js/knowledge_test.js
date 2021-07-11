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
      document.getElementById('result-level-message').style.display = 'none';
      document.getElementById('your-level').style.display = 'block';

     } else if (correctAnswerCount == 1) {
      document.getElementById('result-level').innerText = 'Beginner';
      document.getElementById('result-level').style.fontSize = 'larger';
      document.getElementById('result-level').style.backgroundColor = 'rgb(58, 181, 89)';
      document.getElementById('result-level').style.color = 'white';
     } else if (correctAnswerCount == 5) {
      document.getElementById('result-level').innerText = 'Elementary';
      document.getElementById('result-level').style.fontSize = 'larger';
      document.getElementById('result-level').style.backgroundColor = 'rgb(61, 174, 191)';
      document.getElementById('result-level').style.color = 'white';
     } else if (correctAnswerCount == 10) {
      document.getElementById('result-level').innerText = 'Pre-Intermediate';
      document.getElementById('result-level').style.fontSize = 'larger';
      document.getElementById('result-level').style.backgroundColor = 'rgb(117, 61, 191)';
      document.getElementById('result-level').style.color = 'white';
     } else if (correctAnswerCount == 15) {
      document.getElementById('result-level').innerText = 'Intermediate';
      document.getElementById('result-level').style.fontSize = 'larger';
      document.getElementById('result-level').style.backgroundColor = 'rgb(181, 119, 33)';
      document.getElementById('result-level').style.color = 'white';
     } else if (correctAnswerCount == 20) {
      document.getElementById('result-level').innerText = 'Upper-Intermediate';
      document.getElementById('result-level').style.fontSize = 'larger';
      document.getElementById('result-level').style.backgroundColor = 'rgb(252, 186, 3)';
      document.getElementById('result-level').style.color = 'white';
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

// credit to Nikhil Patil from https://stackoverflow.com/questions/65504888/how-to-continuously-click-on-button-to-show-next-element-in-javascript
$(document).ready(function() {
  $('#test-table-body').find('tr').slice(1).hide();
  $('.submit-test-answer').on('click', function() {
    $('#test-table-body').find('tr:visible').next().show();
  });
});