import { questions } from "./questions.js";

console.log(questions, "+++++++++++++++");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  let question = questions[currentQuestion];

  document.getElementById("question").textContent = question.question;
  document.getElementById("choice0").textContent = question.choices[0].choice;
  document.getElementById("choice1").textContent = question.choices[1].choice;
  document.getElementById("choice2").textContent = question.choices[2].choice;
  document.getElementById("choice3").textContent = question.choices[3].choice;
}

function checkAnswer(answer) {
  if (answer === questions[currentQuestion].correctAnswer) {
    score++;
  }
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score").textContent = score;
  } else {
    showQuestion();
  }
}

document.getElementById("score-container").style.display = "none";
document.getElementById("btn0").addEventListener("click", function () {
  checkAnswer(0);
});
document.getElementById("btn1").addEventListener("click", function () {
  checkAnswer(1);
});
document.getElementById("btn2").addEventListener("click", function () {
  checkAnswer(2);
});
document.getElementById("btn3").addEventListener("click", function () {
  checkAnswer(3);
});
document.getElementById("next").addEventListener("click", function () {
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score").textContent = score;
  }
});

showQuestion();

/*

10-19 points: Junior Level - Requires substantial guidance and support to perform tasks and navigate issues.

20-29 points: Intermediate Level - Has some autonomy and can perform tasks with limited guidance, but often relies on support for handling complex issues.

30-39 points: Experienced Level - Is able to self-manage most tasks, seeks feedback, and helps others. May still require support for very complex issues.

40 points: Senior Level - Is highly autonomous, actively supports team members, resolves complex issues independently, and contributes significantly to team direction.

*/
