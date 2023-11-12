const secondOne = document.getElementsByClassName("secondOnes")[0];
const minuteOne = document.getElementsByClassName("minuteOnes")[0];
const buttons = Array.from(document.getElementsByClassName("buttons"));
let seconds = parseInt(secondOne.innerHTML);
let minutes = parseInt(minuteOne.innerHTML);
let secInterval;
buttons.forEach((button) => {
  button.addEventListener("click", mainFuction);
});

function addTime() {
  seconds += 1;

  if (seconds > 59) {
    seconds = 0;
    minutes += 1;
  }
  if (seconds <= 9) {
    secondOne.innerHTML = "0" + seconds;
  } else {
    secondOne.innerHTML = seconds;
  }
  if (minutes <= 9) {
    minuteOne.innerHTML = "0" + minutes;
  } else {
    minuteOne.innerHTML = minutes;
  }
}

function mainFuction(e) {
  let button = e.target;

  if (button.classList.contains("start")) {
    clearInterval(secInterval);
    secInterval = setInterval(addTime, 1000);
  } else if (button.classList.contains("stop")) {
    clearInterval(secInterval);
  } else {
    seconds = 0;
    minutes = 0;
    secondOne.innerHTML = "0" + seconds;
    minuteOne.innerHTML = "0" + minutes;
    clearInterval(secInterval);
  }
}
