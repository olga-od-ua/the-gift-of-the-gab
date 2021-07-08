//KNOWLEDGE TEST function

/*function getQuestionAnswer(questionId, answeId) {
  const answer = document.getElementById(questionId).innerText;
  
  if (answer === expectedAnswer) {
    document.getElementById(answerId).innerText += 'Correct!';
  }
}*/

function checkAnswer(correctAnswerId) {
  

    let userAnswer1 = document.getElementById('userInput1').value;
    let userAnswer2 = document.getElementById('userInput2').value;
    let userAnswer3 = document.getElementById('userInput3').value;
    document.getElementById(correctAnswerId).style.visibility = "visible";
    
  }

  