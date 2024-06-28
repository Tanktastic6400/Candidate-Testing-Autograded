const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let originalAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
    candidateName = input.question("Please enter your name: ")
   
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
   for(let i = 0; i < questions.length; i++){
    candidateAnswers[i] = input.question(questions[i]);
   }

  originalAnswers = candidateAnswers;
}

function gradeQuiz(candidateAnswers) {
  
//reset score
let correctQuestions = 0;

formatAnswers(candidateAnswers);
  console.log("\n\n\n--------------------------------------------------------------------");
  console.log("Candidate name: " + candidateName);
  
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for(let i = 0; i < questions.length; i++){
 
   printQuizResults(i);
   
    if(candidateAnswers[i] === correctAnswers[i]){
      correctQuestions++;
    }//end of else
  }//end of for
 

  console.log("--------------------------------------------------------------------")

  let grade = (correctQuestions / questions.length) * 100;  //TODO 3.2 use this variable to calculate the candidates score.
  console.log(`Your final grade is: ${grade}% (${correctQuestions} out of ${questions.length} answers were correct)`);

  if(grade >= 80){
    console.log("Result: PASSED\n");
  }else{console.log("Result: FAILED\n");}


  return grade;
}


function printQuizResults(iterator){
 //quiz recap literal
 console.log(`
Question Number ${iterator+1}:
  ${questions[iterator]}
      Your Answer: ${originalAnswers[iterator]}
      Correct Answer: ${correctAnswers[iterator]}
      `)//end of recap literal
}

function formatAnswers(candidateAnswers){
  
let temp = "";

for(let i = 0; i < candidateAnswers.length; i++){
   temp = "";
   //figure out the question that you haven't formated yet and format them.
    if(i === 0){
        //capitalize the first letter of each word and slice the rest on lowercase
        temp += candidateAnswers[i][0].toUpperCase() + candidateAnswers[i].slice(1,6).toLowerCase();
        temp += candidateAnswers[i].charAt(candidateAnswers[i].indexOf(" ") + 1).toUpperCase() + candidateAnswers[i].slice(7);

    }else if(i === 1){
        //lower case all the letters
        temp += candidateAnswers[i].toLowerCase();
    }else if(i === 3){
        //capitalize the first letter and lowercase the rest.
        temp += candidateAnswers[i][0].toUpperCase() + candidateAnswers[i].slice(1).toLowerCase();
    }else{
        temp = candidateAnswers[i];
    }
    candidateAnswers[i] = temp;
}//end of format loop

}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`
Hello, ${candidateName}!
    `);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}
//runProgram();

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};