//KNOWLEDGE TEST function

/*function getQuestionAnswer(questionId, answeId) {
  const answer = document.getElementById(questionId).innerText;
  
  if (answer === expectedAnswer) {
    document.getElementById(answerId).innerText += 'Correct!';
  }
}*/

function checkAnswer(correctAnswerId, resultId) {
  

  let userAnswer1 = document.getElementById('userInput1').value.trim();
  let userAnswer2 = document.getElementById('userInput2').value.trim();
  let userAnswer3 = document.getElementById('userInput3').value.trim();

  let correctAnswerCount = 0;
  
  if (userAnswer1 == "can") {
      document.getElementById(resultId).innerHTML = "Result: correct";
      correctAnswerCount++;
      
  } else {
      document.getElementById(correctAnswerId).style.visibility = "visible";
      document.getElementById('test-table').style.display = "none";
      document.getElementById('your-level').style.display = "initial";
  }

 if (userAnswer2 == "am") {
    document.getElementById(resultId).innerHTML = "Result: correct";
    correctAnswerCount++;
} else {
    document.getElementById(resultId).innerHTML = "Result: wrong";
    document.getElementById(correctAnswerId).style.visibility = "visible";
}

if (userAnswer3 == "a" || userAnswer3 == "the") {
  document.getElementById(resultId).innerHTML = "Result: correct";
  correctAnswerCount++;
} else {
  document.getElementById(resultId).innerHTML = "Result: wrong";
  document.getElementById(correctAnswerId).style.visibility = "visible";
}
}

  