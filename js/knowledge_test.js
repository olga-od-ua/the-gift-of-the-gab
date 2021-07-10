//KNOWLEDGE TEST function

/*function getQuestionAnswer(questionId, answerId) {
  const answer = document.getElementById(questionId).innerText;
  
  if (answer === expectedAnswer) {
    document.getElementById(answerId).innerText += 'Correct!';
  }
}*/



function checkAnswer(userAnswerId, correctAnswerId, resultId) {
  
  
  let userAnswer = document.getElementById(userAnswerId).value.trim();
  let correctAnswer = document.getElementById(correctAnswerId).value;
  let result = document.getElementById(resultId);
  let correctAnswerCount = 0;

  if (userAnswer == correctAnswer) {
    result.innerHTML = 'Correct!';
    correctAnswerCount++;
  } else {
    document.getElementById('test-table').style.display = 'none';
  }

  if (correctAnswerCount <= 5) {
    document.getElementById('result-level-message').innerHTML = 'Your level is Beginner/Elementary';
  } else (
    alert("Please Try Again!")
  )
}


  