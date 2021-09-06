const inputText = document.getElementsByClassName("row");
const submit = document.querySelector(".submit");
const email = document.querySelector(".email");

const emailValid = function (email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

//break at i = 2 continue at i =4, write conditional for i = 3 separately

submit.addEventListener("click", function () {
  for (let i = 1; i < inputText.length + 1; i++) {
    if (
      document.querySelector(".row3").childNodes[1].value === "" ||
      !emailValid(email.value)
    ) {
      email.placeholder = "example@email.com";
      email.style.border = "1px solid hsl(0, 100%, 74%)";
      document.querySelector(`.error${i}`).style.display = "block";
      document.querySelector(`.input${i}`).style.background =
        "url('/images/icon-error.svg')";
      document.querySelector(`.input${i}`).style.backgroundRepeat = "no-repeat";
      document.querySelector(`.input${i}`).style.backgroundPosition =
        "410px, 0px";
      document.querySelector(`.input${i}`).style.backgroundSize = "5%";
      document.querySelector(".card").style.height = "540px";
      if (i === 3) {
        continue;
      }
    }

    if (document.querySelector(`.row${i}`).childNodes[1].value === "") {
      document.querySelector(`.input${i}`).style.border =
        "1px solid hsl(0, 100%, 74%)";
      document.querySelector(`.error${i}`).style.display = "block";
      document.querySelector(`.input${i}`).style.background =
        "url('/images/icon-error.svg')";
      document.querySelector(`.input${i}`).style.backgroundRepeat = "no-repeat";
      document.querySelector(`.input${i}`).style.backgroundPosition =
        "410px, 0px";
      document.querySelector(`.input${i}`).style.backgroundSize = "5%";
      document.querySelector(".card").style.height = "540px";
    } else {
      document.querySelector(`.error${i}`).style.display = "none";
      document.querySelector(`.input${i}`).style.background = "none";
      document.querySelector(`.input${i}`).style.border =
        "1px solid hsl(246, 25%, 77%)";
    }
  }
});
