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

// document events

document.addEventListener("DOMContentLoaded", () => {
	const popup = document.querySelector(".popup");
	const popupPara = document.querySelector(".popup p");

	// show popup after delay
	setTimeout(() => {
		popup.style.display = "block";
		popupPara.style.whiteSpace = "pre-line";
		popupPara.textContent = "⚠️WARNING\n\nIn March 2026, Discord will put into effect treating all accounts as \"Teen by Default\" until \"proven\" otherwise -- requiring users to go through \"age verification\" to access many basic app features. This announcement was made on Discord's official blog on February 9th, 2026.\n\nThe announcement came four months after Discord had disclosed a security breach in a press release on October 9th, 2026. In this breach, Discord confirmed that their ID age verification database had been compromised, resulting in the public leakage of 70,000 people's identification documents.\n\nThe decision to treat all accounts as \"Teen by Default\" and collecting facial scans of users appears to be a direct response to the security breach and the subsequent exposure of users' personal identification information."
	}, 750);
});

// function calls

setInterval(chooseQualities, 750); // run function every 1 second(s)

document.querySelector("#year").innerHTML = new Date().getFullYear();

booleanFlip();
