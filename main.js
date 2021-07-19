const url = "https://api.adviceslip.com/advice";
function reloadPage() {
  location.reload();
}
function getAdvice() {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log("success!", res);
      document.getElementById("quote").innerHTML = res.slip.advice;
    })
    .catch((err) => {
      console.log("something went wrong...", err);
    });
  document.getElementById("button-text").innerText = "Next advice";
}

const url1 =
  "https://opentdb.com/api.php?amount=15&category=23&difficulty=medium&type=boolean";
var allResults = {};
function playTrivia() {
  fetch(url1)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log("Success trivia", res);
      allResults = res;
    })
    .catch((err) => {
      console.log("something went wrong...", err);
    });
}
let count = 0;
function nextQuestion() {
  if (count < 15) {
    document.getElementById("quote").innerHTML =
      allResults.results[count].question;
  } else {
    document.getElementById("quote").innerHTML = "End of the questions";
  }
  count += 1;
}
