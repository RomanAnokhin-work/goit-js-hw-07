const input = document.getElementById(`name-input`);
const output = document.getElementById(`name-output`);

input.addEventListener("input", inputHandler);

function inputHandler(event) {
    output.textContent = event.target.value.trim();
    if (output.textContent === "") {
        output.textContent = "Anonymous";
    }
}