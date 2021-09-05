const inputText = document.getElementsByClassName("row");
const submit = document.querySelector(".submit");
const card = document.querySelector(".card");
let cardHeight = (document.querySelector(".card").style.height = 475);
let height;

submit.addEventListener("click", function () {
  for (let i = 1; i < inputText.length + 1; i++) {
    if (document.querySelector(`.row${i}`).childNodes[1].value === "") {
      document.querySelector(`.error${i}`).style.display = "block";
      document.querySelector(`.input${i}`).style.background =
        "url('/images/icon-error.svg')";
      document.querySelector(`.input${i}`).style.backgroundRepeat = "no-repeat";
      document.querySelector(`.input${i}`).style.backgroundPosition =
        "410px, 0px";
      document.querySelector(`.input${i}`).style.backgroundSize = "5%";
      document.querySelector(".card").style.height = "550px";
    } else {
      document.querySelector(`.error${i}`).style.display = "none";
    }
  }
});

//end result is 47515px
