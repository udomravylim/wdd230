const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	body.classList.toggle("dark-mode");
	if (modeButton.textContent.includes("🌙")) {
		modeButton.textContent = "☀️";
	} else {
		modeButton.textContent = "🌙";
	}
});