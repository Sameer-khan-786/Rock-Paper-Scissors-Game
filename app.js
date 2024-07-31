let userScore = 0;
let compScore = 0;
let draw = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawPara = document.querySelector("#draw");


const drawGame = () => {
	draw++;
	drawPara.innerText = draw;
	console.log("Game is a Draw");
	msg.innerText = "Its a Draw!!";
	msg.style.backgroundColor = "darkblue";
}

const showWinner = (userWin, userChoice, compChoice) => {
	if (userWin) {
		userScore++;
		userScorePara.innerText = userScore;
		console.log("You Win");
		msg.innerText = `You Win!! ${userChoice} beats ${compChoice}`;
		msg.style.backgroundColor = "green";
	} else {
		compScore++;
		compScorePara.innerText = compScore;
		console.log("Computer Win");
		msg.innerText = `Computer Win!! ${compChoice} beats ${userChoice}`;
		msg.style.backgroundColor = "red";
	}
}

const genCompChoice = () => {
	let options = ["rock", "paper", "scissor"];
	const randomIndex = Math.floor(Math.random() * 3);
	return options[randomIndex];
}

const playGame = (userChoice) => {
	console.log(`your choice is ${userChoice}`);
	// Generate Computer Choice
    const compChoice = genCompChoice();
	console.log(`Computer choice is ${compChoice}`);
    
	if(userChoice === compChoice)
	{
		// Draw Game
		drawGame();
	} else {
		let userWin = true;   
		
		if(userChoice === "rock") {
			// here we only have paper and scissor as we already handled draw
			// paper, scissor
			if (compChoice === "paper") {
				userWin = false;
			} else {
				userWin = true;
			}
 		} else if (userChoice === "paper") {
			// rock , scissor
			if (compChoice === "scissor") {
				userWin = false;
			} else {
				userWin = true;
			}
		} else {
			// rock , paper
			if (compChoice === "rock") {
				userWin = false;
			} else {
				userWin = true;
			}
		}
		showWinner(userWin, userChoice, compChoice);
	}
	

}

choices.forEach(

	(choice) => {
		choice.addEventListener("click", () => {
			const userChoice = choice.getAttribute("id");
			playGame(userChoice);
		})
	}
)