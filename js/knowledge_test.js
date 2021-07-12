var correctAnswerCount = 0;

function checkAnswer(userAnswerId, correctAnswerId, resultId, submitButtonId) {
  
  
  let userAnswer = document.getElementById(userAnswerId).value.trim();
  let correctAnswer = document.getElementById(correctAnswerId).value;
  let result = document.getElementById(resultId);
  let submitButton;

  if (userAnswer == correctAnswer) {

    result.innerHTML = 'Correct!';
    submitButton = document.getElementById(submitButtonId).disabled = true;  //Prevents multiple submissions
    submitButton = document.getElementById(submitButtonId).style.display = "none";//Prevents multiple submissions

    
    correctAnswerCount += 1;

    var count = correctAnswerCount;
var pcg = Math.floor(count*4);        
document.getElementsByClassName('progress-bar').item(0).setAttribute('aria-valuenow',pcg);
document.getElementsByClassName('progress-bar').item(0).setAttribute('style','width:'+Number(pcg)+'%');

     if (correctAnswerCount == 25) {
      document.getElementById('test-table').style.display = 'none';
      document.getElementById('result-level-message').style.display = 'none';
      document.getElementById('test-instructions').style.display = 'none';
      document.getElementById('your-level').style.display = 'block';
      document.getElementById('result-message-header').innerHTML = 'CONGRATULATIONS!!!';
      document.getElementById('result-message-header2').innerHTML = 'WOW! We are impressed!<br>Your level is <strong>ADVANCED</strong>!';
      document.getElementById('result-message').innerHTML = 'But the sky is the limit.<br>We will be delighted to have you join our school!';
      

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
      document.getElementById('test-table').style.display = 'none';
      document.getElementById('result-level-message').style.display = 'none';
      document.getElementById('test-instructions').style.display = 'none';
      document.getElementById('your-level').style.display = 'block';
      document.getElementById('result-message-header').innerHTML = 'Ooops...';
      document.getElementById('result-message-header2').innerHTML = 'There was a mistake in your answer.<br>Your level is <strong>Beginner</strong>.';
      document.getElementById('result-message').innerHTML = 'We will be delighted to have you join our school and help you grow on your English language journey!';
      
    } else if (correctAnswerCount >= 5 && correctAnswerCount <10) {
      document.getElementById('test-table').style.display = 'none';
      document.getElementById('result-level-message').style.display = 'none';
      document.getElementById('test-instructions').style.display = 'none';
      document.getElementById('your-level').style.display = 'block';
      document.getElementById('result-message-header').innerHTML = 'Ooops...';
      document.getElementById('result-message-header2').innerHTML = 'There was a mistake in your last answer.<br>Your current level is <strong>Elementary</strong>.';
      document.getElementById('result-message').innerHTML = 'We will be delighted to have you join our school and help you grow on your English language journey!';
    } else if (correctAnswerCount >=10 && correctAnswerCount <15) {
      document.getElementById('test-table').style.display = 'none';
      document.getElementById('result-level-message').style.display = 'none';
      document.getElementById('test-instructions').style.display = 'none';
      document.getElementById('your-level').style.display = 'block';
      document.getElementById('result-message-header').innerHTML = 'Ooops...';
      document.getElementById('result-message-header2').innerHTML = 'There was a mistake in your last answer.<br>Your current level is <strong>Pre-Intermediate</strong>.';
      document.getElementById('result-message').innerHTML = 'We will be delighted to have you join our school and help you grow on your English language journey!';
    } else if (correctAnswerCount >=15 && correctAnswerCount <20) {
      document.getElementById('test-table').style.display = 'none';
      document.getElementById('result-level-message').style.display = 'none';
      document.getElementById('test-instructions').style.display = 'none';
      document.getElementById('your-level').style.display = 'block';
      document.getElementById('result-message-header').innerHTML = 'WELL DONE!';
      document.getElementById('result-message-header2').innerHTML = 'Unfortunately, there was a mistake in your last answer.<br>Your current level is <strong>Intermediate</strong>.';
      document.getElementById('result-message').innerHTML = 'We will be delighted to have you join our school and help you grow on your English language journey!';
    } else if (correctAnswerCount >=21 && correctAnswerCount <25) {
      document.getElementById('test-table').style.display = 'none';
      document.getElementById('result-level-message').style.display = 'none';
      document.getElementById('test-instructions').style.display = 'none';
      document.getElementById('your-level').style.display = 'block';
      document.getElementById('result-message-header').innerHTML = 'WAY TO GO!';
      document.getElementById('result-message-header2').innerHTML = 'Unfortunately, there was a mistake in your last answer.<br>Your current level is <strong>Upper-Intermediate</strong>.';
      document.getElementById('result-message').innerHTML = 'We will be delighted to have you join our school and help you grow on your English language journey!';
    } else {
      alert("Please try again");
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