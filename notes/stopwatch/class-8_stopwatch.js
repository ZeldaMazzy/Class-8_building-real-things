//declarations
let currentTime = 0;
let timerIsRunning = false;
let stopwatchInterval;

//adding query selectors
const startButton = document.querySelector("[data-action='start']");
const stopButton = document.querySelector("[data-action='stop']");
const resetButton = document.querySelector("[data-action='reset']");

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
    if(timerIsRunning) return;

    timerIsRunning = true;
    stopwatchInterval = setInterval(() => {
        currentTime++; 
        const { minutes, seconds } = getFormattedTime()
        displayFormattedTime(minutes, seconds)
    }, 1000)
}

function stopTimer() {
    if(timerIsRunning == false) return;
    timerIsRunning = false;
    clearInterval(stopwatchInterval);
}

function resetTimer() {
    stopTimer();
    currentTime = 0;
    minutesDisplay.innerText = "0 0";
    secondsDisplay.innerText = "0 0";
}

function getFormattedTime() {
    let min = Math.floor(currentTime / 60);
	let sec = currentTime % 60;

	return {
		minutes: min < 10 ? `0 ${min}` : min,
		seconds: sec < 10 ? `0 ${sec}` : sec
	};
}

function displayFormattedTime(minutesToDisplay, secondsToDisplay) {
    minutesDisplay.innerText = minutesToDisplay;
    secondsDisplay.innerText = secondsToDisplay;
}