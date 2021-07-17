const url = "https://api.adviceslip.com/advice";
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
}
