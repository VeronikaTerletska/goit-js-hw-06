const inputRef = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};
inputRef.input.addEventListener("input", onInputChange);
function onInputChange(event) {
  inputRef.nameLabel.textContent = event.currentTarget.value || "Anonymous";
}
