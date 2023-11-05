var hitTarget;
var score = 0;

function fillBubbles() {
  var clutter = "";

  for (var i = 1; i <= 144; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector(".bubble-container").innerHTML = clutter;
}

function startTimer() {
  var timer = 60;
  var intervalId = setInterval(() => {
    if (timer <= 0) {
      clearInterval(intervalId);
      document.querySelector(".bubble-container").classList.remove("set-visible")
      document.querySelector(".bubble-container").classList.add("set-invisible")
      document.querySelector(".game-completed").classList.remove("set-invisible");
      document.querySelector(".game-completed").textContent = `Time is up ! Score: ${score}`
      document.querySelector(".game-completed").classList.add("set-visible");
    } else {
      timer--;
      document.querySelector("#timer-box").textContent = timer;
      
    }
  }, 1000);
}

function randomizeHitNumber() {
    hitTarget = Math.floor(Math.random()*10);
    document.querySelector("#hit-target").textContent = hitTarget;
}

function correctHit() {
    score += 10;
    updateScoreboard();
}

function incorrectHit() {
    score -= 5;
    updateScoreboard();
}

function updateScoreboard() {
    document.querySelector("#scoreboard").textContent = score;
}

fillBubbles();
startTimer();
randomizeHitNumber();
updateScoreboard();

document.querySelector(".bubble-container").addEventListener(
    'click',
    (event) => {
        if(Number(event.target.textContent) == hitTarget){
            correctHit();
        } else{
            incorrectHit();
        }
        fillBubbles();
        randomizeHitNumber()
    }
)