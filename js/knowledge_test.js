//KNOWLEDGE TEST function

/*function getQuestionAnswer(questionId, answerId) {
  const answer = document.getElementById(questionId).innerText;
  
  if (answer === expectedAnswer) {
    document.getElementById(answerId).innerText += 'Correct!';
  }
}*/


var correctAnswerCount = 0;

function checkAnswer(userAnswerId, correctAnswerId, resultId) {
  
  
  let userAnswer = document.getElementById(userAnswerId).value.trim();
  let correctAnswer = document.getElementById(correctAnswerId).value;
  let result = document.getElementById(resultId);
  
  

  if (userAnswer == correctAnswer) {

    result.innerHTML = 'Correct!';
    correctAnswerCount += 1;
  
  } else {
    document.getElementById('test-table').style.display = 'none';
    if (correctAnswerCount <= 4) {
      document.getElementById('result-level').innerHTML = 'Beginner/Elementary';
    } else if (correctAnswerCount >= 5 && correctAnswerCount <=9) {
      document.getElementById('result-level').innerHTML = 'Pre-Intermediate';
    } else {
      alert("try again")
    }
  }

  
}




  