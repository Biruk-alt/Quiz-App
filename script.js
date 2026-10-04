"use strict";
const questionContainer = document.querySelector(`.question-container`);
const questionNumAndScore = document.querySelector(`.question-num-and-score`);
const nextQuestionBtn = document.querySelector(`.next-question`);

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
    answers: ["Strawberry", "Raspberry", "Banana", "Blackberry"],
    correct: 2,
  },
  {
    question: "What is a group of flamingos called?",
    answers: ["A flamboyance", "A pink parade", "A flock of drama", "A disco"],
    correct: 0,
  },
  {
    question:
      "Archaeologists found 3,000-year-old edible food in Egyptian tombs. What was it?",
    answers: ["Bread", "Honey", "Hummus", "Cheese"],
    correct: 1,
  },
  {
    question: "How many hearts does an octopus have?",
    answers: ["One, like everyone", "Two", "Three", "Eight, one per arm"],
    correct: 2,
  },
];

//display on the question container
let questionNum = 1;

nextQuestionBtn.addEventListener(`click`, function(e) {
    e.preventDefault();
    questionNum++;
    questionNumAndScore.innerHTML = "";
    questionNumAndScore.insertAdjacentHTML(`afterbegin`, questionNumber);
})

const questionNumber = `
<h1 class="question-num">Question ${questionNum} of 5</h1>
`
questionNumAndScore.insertAdjacentHTML(`afterbegin`, questionNumber);


const html = `
        <h1 class="question">${questions[0].question}</h1>
            <div class="choice-container">
                <div class="choice choice-1">${questions[0].choices[0]}</div>
                <div class="choice choice-2">${questions[0].choices[1]}</div>
                <div class="choice choice-3">${questions[0].choices[2]}</div>
                <div class="choice choice-4">${questions[0].choices[3]}</div>
            </div>
`;

questionContainer.insertAdjacentHTML(`afterbegin`, html);
const choices = document.querySelectorAll(`.choice`)



//choosing answer
choices.forEach(choice => {
    choice.addEventListener(`click`, function(e) {
        e.preventDefault();
        console.log(e.target)
    })
})