const overlay = document.getElementById("overlay")
const send = document.getElementById("send")
const inp = document.getElementById("inp")
const uName = document.getElementById("uName")
const alert = document.getElementById("alert")
const compScoreSpan = document.getElementById("compScore")
const playerScoreSpan = document.getElementById("playerScore")
const restartBtn = document.getElementById("restart");
const res = document.getElementById("res");
let choices = ["hand", "paper", "scissors"];
let playerChoice = "";
let computerChoice = "";
let computerScore = 0;
let playerScore = 0;

send.addEventListener("click", function () {
    if (inp.value !== "") {
        overlay.style.display = "none"
        uName.innerHTML = inp.value
    } else {
        alert.style.display = "block"
    }
})

function play(choicesPlayer) {
    playerChoice = choicesPlayer;
    if (playerScore === 5 || computerScore === 5) return;
    computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (computerChoice === playerChoice) {
        res.textContent = `🤝 تعادل! الكل اختار ${getEmoji(playerChoice)}`;
    } else if (
        (playerChoice === "hand" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "hand") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        res.textContent = `✅ فزت! ${getEmoji(playerChoice)} يهزم ${getEmoji(computerChoice)}`;
    } else {
        computerScore++;
        res.textContent = `❌ خسرت! ${getEmoji(computerChoice)} يهزم ${getEmoji(playerChoice)}`;
    }

    updateScore();
    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? `🎉 ${uName.textContent} فاز!` : "💻 الكمبيوتر فاز!";
        res.textContent += `\n${winner}`;
        restartBtn.style.display = "inline-block";
    }
}


function updateScore() {
    playerScoreSpan.textContent = playerScore;
    compScoreSpan.textContent = computerScore;
}

function getEmoji(choice) {
    switch (choice) {
        case "hand":
            return "✊";
        case "paper":
            return "📃";
        case "scissors":
            return "✂";
    }
}

restartBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    res.textContent = "";
    restartBtn.style.display = "none";
    updateScore();
});
