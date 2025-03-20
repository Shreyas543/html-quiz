// Define quiz questions and answers
const quiz = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: 0
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Earth", "Saturn", "Jupiter", "Uranus"],
        correctAnswer: 2
    },
    {
        question: "Who is the Prime Minister of India?",
        answers: ["Shreyas Khobragade","Narendra Modi","Samay Raina","Abhinav Gupta"]
    }
];

// Initialize variables
let currentQuestion = 0;
let score = 0;

// Function to display question
function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const questionElement = document.getElementById("question");
    const answerButton = document.getElementById("answer-button");
    const rightAnswerSpan = document.getElementById("right-answer");

    questionContainer.classList.remove("hide");
    answerButton.classList.remove("hide");
    rightAnswerSpan.textContent = "Correct answers: 0";

    const currentQuiz = quiz[currentQuestion];
    questionElement.textContent = currentQuiz.question;
    const answerButtons = answerButton.children;
    for (let i = 0; i < answerButtons.length; i++) {
        const button = answerButtons[i];
        button.textContent = currentQuiz.answers[i];
        button.addEventListener("click", () => {
            if (i === currentQuiz.correctAnswer) {
                score++;
                rightAnswerSpan.textContent = `Correct answers: ${score}`;
                button.style.backgroundColor = "var(--secondary-color)";
                button.style.color = "#fff";
            } else {
                button.style.backgroundColor = "var(--primary-color)";
                button.style.color = "#fff";
            }
            currentQuestion++;
            if (currentQuestion >= quiz.length) {
                alert(`Quiz finished! Your final score is ${score} out of ${quiz.length}`);
                score = 0;
                currentQuestion = 0;
                questionContainer.classList.add("hide");
                answerButton.classList.add("hide");
            } else {
                displayQuestion();
            }
        });
    }
}

// Function to start quiz
function startQuiz() {
    const startButton = document.getElementById("start-btn");
    startButton.classList.add("hide");
    displayQuestion();
}

// Add event listeners
document.getElementById("start-btn").addEventListener("click", startQuiz);

// Display start button
const startButton = document.getElementById("start-btn");
startButton.classList.remove("hide");

// Create question element
const questionElement = document.createElement("p");
questionElement.id = "question";
questionElement.style.fontSize = "24px";
questionElement.style.fontWeight = "bold";
document.getElementById("question-container").appendChild(questionElement);