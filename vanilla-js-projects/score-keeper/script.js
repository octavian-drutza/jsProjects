const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const reset = document.getElementById("reset");
const maxScore = document.getElementById("maxscore");
const input = document.querySelector("input");
let scoreNum1 = parseInt(score1.innerText);
let scoreNum2 = parseInt(score2.innerText);
let maxScoreNum = parseInt(maxScore.innerText);

input.addEventListener("input", (e) => {
  maxScoreNum = parseInt(e.target.value);
  maxScore.innerText = e.target.value;
});

player1.addEventListener("click", () => {
  if (scoreNum1 < maxScoreNum) {
    scoreNum1++;
    score1.innerText = scoreNum1;
  }
  if (scoreNum1 === maxScoreNum) {
    score1.style.color = "green";
  }
});

player2.addEventListener("click", () => {
  if (scoreNum2 < maxScoreNum) {
    scoreNum2++;
    score2.innerText = scoreNum2;
  }
  if (scoreNum2 === maxScoreNum) {
    score2.style.color = "green";
  }
});

reset.addEventListener("click", () => location.reload());
