const refs = {
  control: document.querySelector("#font-size-control[type=range]"),
  text: document.querySelector("#text")
};

refs.control.addEventListener("input", input => {
  const value = input.currentTarget.value;
  refs.text.style.fontSize = value + "px";
});
