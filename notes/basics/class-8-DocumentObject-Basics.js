//query selectors
const eventListenerButton = document.querySelector(".query-selected-button");
eventListenerButton.addEventListener('click', changeBackgroundToRandomColor)
eventListenerButton.addEventListener('mouseenter', changeBackgroundToRandomColor)

//changing the background color
function changeBackground() {
    document.body.style.backgroundColor = "#bae6fd";
}

//changing to a random color
function changeBackgroundToRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	document.body.style.backgroundColor = `#${randomColor}`;
}