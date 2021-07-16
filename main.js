const url = "https://api.fisenko.net/quotes?l=en";
header("Access-Control-Allow-Origin: https://api.fisenko.net/quotes?l=en");
fetch(url)
  .then((res) => {
    console.log("success!", res);
  })
  .catch((err) => {
    console.log("Something went wrong...", err);
  });

console.log("connected");
document.getElementById("quote").innerHTML = "Hello new text is here";
