"use strict"
const input = document.querySelector('#validation-input[data-length="6"]');

let correctLength = input.dataset.length;

input.addEventListener("blur", input => {
  const element = input.currentTarget;
  const inputLength = element.value.length;
  if (correctLength == inputLength) {
    element.classList.add("valid");
  } else element.classList.add("invalid");
});