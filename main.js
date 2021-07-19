function reloadPage() {
  location.reload();
}
const url = "https://api.adviceslip.com/advice";
var adviceResults = {};

function getAdvice() {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log("success!", res);
      adviceResults = res;
      document.getElementById("quote").innerHTML = res.slip.advice;
    })
    .catch((err) => {
      console.log("something went wrong...", err);
    });
  document.getElementById("button-text").innerText = "Next advice";
}

const url1 =
  "https://opentdb.com/api.php?amount=15&category=23&difficulty=medium&type=boolean";
var triviaResults = {};
function playTrivia() {
  fetch(url1)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log("Success trivia", res);
      triviaResults = res;
    })
    .catch((err) => {
      console.log("something went wrong...", err);
    });
}
let count = 0;
function nextQuestion() {
  if (count < 15) {
    document.getElementById("quote-trivia").innerHTML =
      triviaResults.results[count].question;
  } else {
    document.getElementById("quote").innerHTML = "End of the questions";
  }
  count += 1;
  document.getElementById("button-text-trivia").innerHTML = "Next Question";
}
