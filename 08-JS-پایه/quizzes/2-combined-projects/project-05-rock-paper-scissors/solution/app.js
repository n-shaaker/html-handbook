/* ===== عنصرهای صفحه ===== */

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const resetBtn = document.getElementById("reset-btn");
const choicesOut = document.getElementById("choices-out");
const roundOut = document.getElementById("round-out");
const scoreOut = document.getElementById("score-out");
const finalOut = document.getElementById("final-out");


/* ===== وضعیت بازی (بیرون از تابع‌ها تا با هر کلیک صفر نشود) ===== */

const winScore = 5;
let playerScore = 0;
let computerScore = 0;
let draws = 0;


/* ===== تابع‌های کوچک ===== */

function randomChoice() {
  // این خط آماده است: یک عدد تصادفی ۰، ۱ یا ۲
  const number = Math.floor(Math.random() * 3);

  switch (number) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }
}

function choiceName(choice) {
  switch (choice) {
    case "rock":
      return "سنگ ✊";
    case "paper":
      return "کاغذ ✋";
    case "scissors":
      return "قیچی ✌️";
    default:
      return "نامعلوم";
  }
}

// خروجی: "win" یا "lose" یا "draw" از نگاه بازیکن
function getResult(player, computer) {
  if (player === computer) {
    return "draw";
  }
  if (player === "rock" && computer === "scissors") {
    return "win";
  }
  if (player === "paper" && computer === "rock") {
    return "win";
  }
  if (player === "scissors" && computer === "paper") {
    return "win";
  }
  return "lose";
}

function setButtonsDisabled(isDisabled) {
  rockBtn.disabled = isDisabled;
  paperBtn.disabled = isDisabled;
  scissorsBtn.disabled = isDisabled;
}

function updateScore() {
  scoreOut.textContent = `شما: ${playerScore} — کامپیوتر: ${computerScore} — مساوی: ${draws}`;
}

function showRoundText(text, className) {
  roundOut.textContent = text;
  roundOut.classList.remove("win", "lose", "draw");
  roundOut.classList.add(className);
}


/* ===== یک دست بازی ===== */

function playRound(playerChoice) {
  const computerChoice = randomChoice();
  const result = getResult(playerChoice, computerChoice);

  choicesOut.textContent = `شما: ${choiceName(playerChoice)} — کامپیوتر: ${choiceName(computerChoice)}`;

  switch (result) {
    case "win":
      playerScore++;
      showRoundText("این دست را بردی! 🎉", "win");
      break;
    case "lose":
      computerScore++;
      showRoundText("این دست را باختی 😕", "lose");
      break;
    default:
      draws++;
      showRoundText("مساوی شد 🤝", "draw");
  }

  updateScore();

  if (playerScore === winScore) {
    finalOut.textContent = `تبریک! بازی را ${playerScore} به ${computerScore} بردی 🏆`;
    setButtonsDisabled(true);
  } else if (computerScore === winScore) {
    finalOut.textContent = `کامپیوتر ${computerScore} به ${playerScore} برد. یک بار دیگر امتحان کن!`;
    setButtonsDisabled(true);
  }
}


/* ===== رویدادها ===== */

rockBtn.addEventListener("click", function () {
  playRound("rock");
});

paperBtn.addEventListener("click", function () {
  playRound("paper");
});

scissorsBtn.addEventListener("click", function () {
  playRound("scissors");
});

resetBtn.addEventListener("click", function () {
  playerScore = 0;
  computerScore = 0;
  draws = 0;
  updateScore();
  choicesOut.textContent = "یک گزینه را انتخاب کن.";
  roundOut.textContent = "";
  roundOut.classList.remove("win", "lose", "draw");
  finalOut.textContent = "";
  setButtonsDisabled(false);
});
