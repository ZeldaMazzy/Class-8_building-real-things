const progressBar = document.querySelector("#progress-bar")

window.addEventListener("scroll", fillProgressBar)

function fillProgressBar() {
    const windowHeight = window.innerHeight;
	const fullHeight = document.body.clientHeight;
	const scrollAmount = window.scrollY;

    const percentScrolled = (scrollAmount / (fullHeight - windowHeight)) * 100;

	progressBar.value = percentScrolled;
}