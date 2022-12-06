var start = document.querySelector(".start")
var countDown = document.querySelector("#time")
var title = document.querySelector("#title")
var mainMenu = document.querySelector(".wrapper")
var endScreen = document.querySelector("#end-screen")
var finalScore = document.querySelector("#final-score")
var questions = document.getElementById("questions")
var questionsButtons = document.getElementById("choices")
var questionTitle = document.getElementById("question-title")
var initials = document.getElementById("initials")
var submitInitials = document.getElementById("submit")


var count = 125;
var countQuestions = 5;
var questionTransition = 5;
var SecondQuestionTransition = 5;

// function countStyle() {
//   var countDown = document.querySelector("#time");
//   if(count < 20) {
//   countDown.style.color = "red";}
//   return;
// }


// As a user, I want the game to be timed.
start.addEventListener('click', (setTime)); {
  countDown.textContent = count;
}


function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    count--;
    // console.log(count)
    countDown.textContent = count;
    // Display the first questions
    firstQuestion();
    // Hides the start menu on click
    start.style.display = "none";
    if(count <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Add a H1 text when time is over
      var gameOver = document.createElement("h1");
      var gameOverText = gameOver.textContent = "Game Over";
      document.querySelector(".wrapper").appendChild(gameOver) 

    // Timer to show star menu after game over 
      var gameOverTimer = setInterval(function() {
      countQuestions--;
      console.log(countQuestions)
      if(countQuestions <= 0) {
      start.style.display = "inline-block";
      gameOver.classList.add("hide");
      gameOver.classList.remove("show");
      clearInterval(gameOverTimer);
    }
      }, 700);
    }

  }, 1000);
}


// Questions 

// First Question
function firstQuestion() {
  if(count === 0) {
    questions.style.display = "none";
  }
  else  {
    questions.classList.add("show"); 
    questions.classList.remove("hide");  
    questions.textContent = "What programming language is used to style webpages?";
  appendButtonsQ1();
  }
}

// First question buttons
function appendButtonsQ1() {
  var text = ["CSS", "HTML", "PHP", "Python"];
  text.forEach(function(el) {
      var button = document.createElement("button");
      button.innerHTML = el;
      document.getElementById("questions").appendChild(button); 
      button.style.cssText = "display: flex; justify-content: center; align-text: center; margin: 0 auto; margin-top:10px;"
      button.dataset.index = el;
  });
}

// First question logic
var testIng = document.getElementById("questions").addEventListener("click", function(event) {
  var element = event.target;
  // Check if the clicked element was a button
  if (element.matches("button")) {
    var state = element.getAttribute("data-index"); 
    if(state === "CSS") { 
      questions.style.display = "none";  
      var result = document.createElement("h3");
      result.textContent = "Correct";
      document.body.appendChild(result);
      result.style.cssText = "color: green; text-align: center; font-size: 25px; font-weight: bolder;" 
      localStorage.score1 = (10);
      secondQuestion();
    }
    else {
      questions.style.display = "none";
      var resultWrong = document.createElement("h3");
      resultWrong.textContent = "Wrong";
      document.body.appendChild(resultWrong);
      resultWrong.style.cssText = "color: red; text-align: center; font-size: 25px; font-weight: bolder;" 
    count = count - 25;
    // console.log(element)
    }
      var questionTimer = setInterval(function() {
        questionTransition--;
        if(questionTransition === 0) {
          resultWrong.classList.add("hide"); 
          secondQuestion();
          console.log(questionTransition)
        clearInterval(questionTransition);}
        }, 300);
      }
  }
);


// Second question
function secondQuestion() {
  var secondQuestionWrapper = document.createElement("div");
  secondQuestionWrapper.classList.add("secondQuestionWrap");
  document.body.appendChild(secondQuestionWrapper);
  var secondQuestion = document.createElement("h2");
  secondQuestion.classList.add("secondQuestionTitle");
secondQuestionWrapper.appendChild(secondQuestion);
  secondQuestion.textContent = "Which of the options is NOT a value type in JavaScript?"
  appendButtonsQ2();
}

function appendButtonsQ2() {
  var text = ["number", "boolean", "react", "string"];
  text.forEach(function(el) {
      var button = document.createElement("button");
      button.innerHTML = el;
      var questionTwo = document.querySelector(".secondQuestionTitle");
      questionTwo.appendChild(button); 
      button.style.cssText = "display: flex; justify-content: center; align-text: center; margin: 0 auto; margin-top:10px;"
      button.dataset.index = el;
      button.addEventListener("click", function(event) {
          var element = event.target;
          var second = document.querySelector(".secondQuestionWrap");
          // Check if the clicked element was a button
          if (element.matches("button")) {
            var state = element.getAttribute("data-index"); 
            if(state === "react") { 
      second.style.display = "none";  
      var result = document.createElement("h3");
      result.textContent = "Correct";
      document.body.appendChild(result);
      result.style.cssText = "color: green; text-align: center; font-size: 25px; font-weight: bolder;" 
      localStorage.score2 = (10);
          }
          else {
            second.style.display = "none";
            var resultWrong = document.createElement("h3");
            resultWrong.textContent = "Wrong";
            document.body.appendChild(resultWrong);
            resultWrong.style.cssText = "color: red; text-align: center; font-size: 25px; font-weight: bolder;" 
          count = count - 25;
        
        };
        var SecondQuestionTimer = setInterval(function() {
          SecondQuestionTimer--;
          if(questionTransition === 0) {
            resultWrong.classList.add("hide"); 
            console.log(SecondQuestionTimer)
          clearInterval(SecondQuestionTimer);}
          }, 300);
          endGame();
  };
});
});
}

var score1 = localStorage.getItem("score");
var score2 = localStorage.getItem("score2");


finalScore.textContent = 0;

function endGame() {
  endScreen.classList.add("show");
  finalScore.textContent = parseInt(score1) + parseInt(score2);
  localStorage.clear();
}








    //   document.body.appendChild(result);
    //   result.style.cssText = "color: green; text-align: center; font-size: 25px; font-weight: bolder;" 
    //   localStorage.score = (10);
    //   secondQuestion();
    // }
    // else {
    //   questions.style.display = "none";
    //   var resultWrong = document.createElement("h3");
    //   resultWrong.textContent = "Wrong";
    //   document.body.appendChild(resultWrong);
    //   resultWrong.style.cssText = "color: red; text-align: center; font-size: 25px; font-weight: bolder;" 
    // count = count - 25;
    // localStorage.score = (0);
    // // console.log(element)
    // }
//       var questionTimer = setInterval(function() {
//         questionTransition--;
//         if(questionTransition === 0) {
//           resultWrong.classList.add("hide"); 
//           secondQuestion();
//           console.log(questionTransition)
//         clearInterval(questionTransition);}
//         }, 300);
//       }
//   }
// );



