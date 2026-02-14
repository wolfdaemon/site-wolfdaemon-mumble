// TODO: Set my Javascript Free: https://www.gnu.org/licenses/agpl-3.0.html

const messagesAttention = ["Read below for more infomation!", ""];
const captionAttention = document.querySelector("#caption-attention");
let booleanFlipResult = 0;

// functions

function chooseQualities() {
	// choose a random array word
	randInt = Math.floor(Math.random() * (messagesAttention.length)); // return random number from 0 to provided array length

	// append messagesAttention to paragraph
	captionAttention.textContent = messagesAttention[booleanFlipResult];
}

function toggleDisplayMenu() {
	const classMenu = document.querySelector(".menu");
	const classMenuDisplay = classMenu.style.display; 
	if (classMenuDisplay == "block") {
		classMenu.style.display = "none";
	} else {
		classMenu.style.display = "block";
	}

}

function booleanFlip() {
	setInterval(() => {
		booleanFlipResult = 1 - booleanFlipResult;
		return booleanFlipResult;
	}, 700);
}

// function calls

setInterval(chooseQualities, 750); // run function every 1 second(s)

document.getElementById("year").innerHTML = new Date().getFullYear();

booleanFlip();
