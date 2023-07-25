const questions = [
    {
        question: " What is the largest continent in the world?",
        answers: [
            {text: "North America", correct: false},
            {text: "Europe", correct: false},
            {text: "Asia", correct: true},
            {text: "Australia", correct: false}
        ]
    },
    {
        question: "Who was the first person to walk on the moon?",
        answers: [
            {text: "Neil Armstrong", correct: true},
            {text: " Buzz Aldrin", correct: false},
            {text: "Yuri Gagarin", correct: false},
            {text: " Alan Shepard", correct: false}
        ]
    },
    {
        question: "Which river is the longest river in the world?",
        answers: [
            {text: "Amazon River", correct: false},
            {text: "Nile River", correct: true},
            {text: "Yangtze River", correct: false},
            {text: "Mississippi River", correct: false}
        ]
    },
    {
        question: "Who is known as the father of the Indian Constitution?",
        answers: [
            {text: "Mahatma Gandhi", correct: false},
            {text: "B.R. Ambedkar", correct: true},
            {text: " Jawaharlal Nehru", correct: false},
            {text: "Sardar Vallabhbhai Patel", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = newFunction();
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

    function newFunction() {
        return 'Wanna Play Again!';
    }
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();