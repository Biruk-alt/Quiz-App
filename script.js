"use strict";
const questionContainer = document.querySelector(`.question-container`);
const nextQuestionBtn = document.querySelector(`.next-question`);
const questionNumDiv = document.querySelector(`.question-num-and-score`);
const restartBtn =document.querySelector(`.restart-btn`);
const progressBar =document.querySelector(`.progress-bar `);


//make questions array with questions, choices, and correct answer
const questions = [
  {
    question:
      "Which animal has fingerprints so similar to humans' that they could confuse a crime scene?",
    choices: ["Koala", "Sloth", "Panda", "Kangaroo"],
    correct: 0,
  },
  {
    question: "Which of these is technically a berry?",
    choices: ["Strawberry", "Raspberry", "Banana", "Blackberry"],
    correct: 2,
  },
  {
    question: "What is a group of flamingos called?",
    choices: ["A flamboyance", "A pink parade", "A flock of drama", "A disco"],
    correct: 0,
  },
  {
    question:
      "Archaeologists found 3,000-year-old edible food in Egyptian tombs. What was it?",
    choices: ["Bread", "Honey", "Hummus", "Cheese"],
    correct: 1,
  },
  {
    question: "How many hearts does an octopus have?",
    choices: ["One, like everyone", "Two", "Three", "Eight, one per arm"],
    correct: 2,
  },
];


//rendering questions based on questionNumber
let questionNumber = 1;
let questionNum = 1;
let answered = false;
let score = 0;


//updating the number of question
const renderQuestionNum = function() {
  const questionNumHtml = `
  <h1 class="question-num">Question ${questionNum} of 5</h1>
  `
  const questionNumElement = document.querySelector(`.question-num`)
  if(questionNumElement) questionNumElement.remove();
  questionNumDiv.insertAdjacentHTML(`afterbegin`, questionNumHtml)
}

renderQuestionNum();

//handling the restart button
restartBtn.addEventListener(`click`, function(e) {
  questionContainer.innerHTML = "";
  answered = false;
  questionNum = 1;
  questionNumber = 1;
  score = 0;
  questionNumDiv.innerHTML = "";
  renderScore();
  renderProgressBar();
  renderQuestionNum();
    const html = `
          <h1 class="question">${questions[questionNumber - 1].question}</h1>
              <div class="choice-container">
                  <div class="choice choice-0" data-index="0">${questions[questionNumber - 1].choices[0]}</div>
                  <div class="choice choice-1" data-index="1">${questions[questionNumber - 1].choices[1]}</div>
                  <div class="choice choice-2" data-index="2">${questions[questionNumber - 1].choices[2]}</div>
                  <div class="choice choice-3" data-index="3">${questions[questionNumber - 1].choices[3]}</div>
              </div>
                  `;
                  
    questionContainer.insertAdjacentHTML(`afterbegin`, html);
})


//updating the score
const renderScore = function() {
    const scoreHtml = `
      <h1 class="score">Score: ${score}</h1>
      `
      const scoreDiv = document.querySelector(`.score`);
      if (scoreDiv) scoreDiv.remove();
      questionNumDiv.insertAdjacentHTML(`beforeend`, scoreHtml)
}
    
renderScore();


nextQuestionBtn.addEventListener(`click`, function(e) {
  e.preventDefault();
  questionContainer.innerHTML = "";
  questionNumber++;
  questionNum++;
  if(questionNumber > questions.length) {
    questionContainer.innerHTML = `your score is ${score}/5`
    questionNumDiv.innerHTML = "Finished"
  };
  renderProgressBar();
  renderQuestion();
  if(questionNum > questions.length) {
    questionNum = 1;
    return;
  }
  const questionNumContent = document.querySelector(`.question-num`);
  questionNumContent.innerHTML = "";
  renderQuestionNum();
  answered = false
})

//handling the progress bar
const renderProgressBar = function() {
  if(questionNumber > questions.length) return;
  progressBar.style.width = `${(questionNumber / questions.length) * 100}%`
}

renderProgressBar();





//display on the question container
const renderQuestion = function() {
  const html = `
          <h1 class="question">${questions[questionNumber - 1].question}</h1>
              <div class="choice-container">
                  <div class="choice choice-0" data-index="0">${questions[questionNumber - 1].choices[0]}</div>
                  <div class="choice choice-1" data-index="1">${questions[questionNumber - 1].choices[1]}</div>
                  <div class="choice choice-2" data-index="2">${questions[questionNumber - 1].choices[2]}</div>
                  <div class="choice choice-3" data-index="3">${questions[questionNumber - 1].choices[3]}</div>
              </div>
                  `;
                  
                  questionContainer.insertAdjacentHTML(`afterbegin`, html);
                  const choices = document.querySelectorAll(`.choice`)
}

renderQuestion();



//choosing answer
  const choices = document.querySelectorAll(`.choice`)
  questionContainer.addEventListener(`click`, function(e) {
    e.preventDefault();
    if(answered === true) {
      return
    }

    if(e.target.classList.contains(`choice`)) {
      const choice = Number(e.target.dataset.index);
      if(choice === questions[questionNumber - 1].correct) {
        e.target.classList.add(`correct-answer`);
        answered = true;
        score++;
        renderScore();
     
      } else {
        e.target.classList.add(`choosed-answer`);
        document.querySelector(`.choice-${questions[questionNumber - 1].correct}`).classList.add(`correct-answer`);
        answered = true;
      }
      
    }
  })


