const questions = [
  {
    question: "Which language runs in the browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 3
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style System",
      "Colorful Style Syntax"
    ],
    correct: 1
  },
  {
    question: "Which HTML tag is used for JavaScript?",
    answers: ["<js>", "<script>", "<javascript>", "<code>"],
    correct: 1
  },
  {
    question: "Which company developed React?",
    answers: ["Google", "Facebook", "Microsoft", "Amazon"],
    correct: 1
  },
  {
    question: "Which hook is used for state in React?",
    answers: ["useEffect", "useState", "useRef", "useMemo"],
    correct: 1
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");
const progressEl = document.getElementById("progress");

function loadQuestion() {
  const q = questions[currentIndex];
  questionEl.textContent = q.question;
  progressEl.textContent = `Question ${currentIndex + 1} of ${questions.length}`;

  answersEl.innerHTML = "";
  nextBtn.style.display = "none";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => selectAnswer(btn, index);
    answersEl.appendChild(btn);
  });
}

function selectAnswer(button, index) {
  const correctIndex = questions[currentIndex].correct;

  Array.from(answersEl.children).forEach(btn => btn.disabled = true);

  if (index === correctIndex) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    answersEl.children[correctIndex].classList.add("correct");
  }

  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
};

function showScore() {
  questionEl.style.display = "none";
  answersEl.style.display = "none";
  nextBtn.style.display = "none";
  progressEl.style.display = "none";

  scoreEl.textContent = `Score: ${score} / ${questions.length}`;
  scoreEl.style.display = "block";
  restartBtn.style.display = "block";
}

restartBtn.onclick = () => {
  currentIndex = 0;
  score = 0;

  questionEl.style.display = "block";
  answersEl.style.display = "block";
  progressEl.style.display = "block";

  scoreEl.style.display = "none";
  restartBtn.style.display = "none";

  loadQuestion();
};

loadQuestion();
