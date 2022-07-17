const settingForm = document.querySelector("#setting-form");
const maxNumInput = document.querySelector("#setting-form #maxnum");
const guessNumInput = document.querySelector("#setting-form #guessnum");
const playBtn = document.querySelector("#setting-form #playbtn");
const mention = document.querySelector(".mention");
const result = document.querySelector(".result");

function handlePlaybtn(event) {
  event.preventDefault();
  let randomValue = Math.floor(
    Math.random() * (parseInt(maxNumInput.value) + 1)
  );
  if (parseInt(guessNumInput.value) === randomValue) {
    mention.innerText = `You chose:${guessNumInput.value} , the machine chose:${randomValue}`;
    result.innerText = "YOU WIN";
  } else {
    mention.innerText = `You chose:${guessNumInput.value} , the machine chose:${randomValue}`;
    result.innerText = "YOU LOSE";
  }
}

settingForm.addEventListener("submit", handlePlaybtn);
