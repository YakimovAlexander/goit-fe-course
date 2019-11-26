const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output")
};

refs.input.addEventListener("input", event => {
  const element = event.currentTarget.value;
  refs.output.textContent = element;
});