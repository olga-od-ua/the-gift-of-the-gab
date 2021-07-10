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
  
  if (userAnswer == correctAnswer) {
    result.innerHTML = 'Correct!';
  } else {
    document.getElementById('test-table').style.display = 'none';
  }
}
  