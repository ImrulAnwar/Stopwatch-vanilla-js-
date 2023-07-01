const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const timerDisplay = document.getElementById("timerDisplay");

let msecs = 0;
let secs = 0;
let mins = 0;

let timerID = null;

startBtn.addEventListener("click", () => {
  if (timerID !== null) {
    clearInterval(timerID);
  }
  timerID = setInterval(startTimer, 10);
});

stopBtn.addEventListener("click", () => {
  if (timerID !== null) {
    clearInterval(timerID);
  }
});

resetBtn.addEventListener("click", () => {
  if (timerID !== null) {
    clearInterval(timerID);
  }
  msecs = mins = secs = 0;
  timerDisplay.innerHTML = "00 : 00 : 00";
});

function startTimer() {
  msecs++;
  if (msecs == 100) {
    msecs = 0;
    secs++;
    if (secs == 60) {
      secs = 0;
      mins++;
    }
  }

  let msecString = msecs < 10 ? `0${msecs}` : msecs;
  let secsString = secs < 10 ? `0${secs}` : secs;
  let minsString = mins < 10 ? `0${mins}` : mins;

  let timerText = `${minsString} : ${secsString} : ${msecString}`;

  timerDisplay.innerHTML = timerText;
}
