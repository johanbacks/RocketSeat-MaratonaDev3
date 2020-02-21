
var  text = "teste ok"
document
  .querySelector("header button")
  .addEventListener("click", function(){
    document
      .querySelector(".form")
      .classList.toggle("hide")
  });