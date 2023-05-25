const questions = [
  {
    question: "Question 1?",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 0,
  },
  {
    question: "Question 2?",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 1,
  },
  // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  let question = questions[currentQuestion];

  document.getElementById("question").textContent = question.question;
  document.getElementById("choice0").textContent = question.choices[0];
  document.getElementById("choice1").textContent = question.choices[1];
  document.getElementById("choice2").textContent = question.choices[2];
  document.getElementById("choice3").textContent = question.choices[3];
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
