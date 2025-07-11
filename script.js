let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#Comp-score");

// Generate computer's random choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Helper function to display messages with animation
const showMessage = (text, bgColor) => {
    msg.innerText = text;
    msg.style.backgroundColor = bgColor;

    // Reset transition by removing and re-adding the class
    msg.classList.remove("show");
    void msg.offsetWidth; // Trigger reflow
    msg.classList.add("show");
};

// Game draw
const drawGame = () => {
    showMessage("Game was draw, Play again!", "#081b31");
};

// Show winner message
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        showMessage(`You win! Your ${userChoice} beats ${compChoice}`, "green");
    } else {
        CompScore++;
        CompScorePara.innerText = CompScore;
        showMessage(`You lose! ${compChoice} beats ${userChoice}`, "red");
    }
};

// Game logic
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

// Event listeners on choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
