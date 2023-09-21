const buttons = document.querySelectorAll(".btn_onclick");

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", changeBackgroundColor);
}

function changeBackgroundColor() {
    const randomColor = Math.floor(Math.random() * (2**24)).toString(16);
	document.body.style.backgroundColor = `#${randomColor}`;
}