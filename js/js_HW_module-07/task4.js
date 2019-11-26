const refs = {
  increment: document.querySelector('[data-action="increment"]'),
  decrement: document.querySelector('[data-action="decrement"]'),
  result: document.querySelector("#value")
};

let counterValue = 0;

refs.increment.addEventListener("click", () => {
  counterValue++;
  refs.result.textContent = counterValue;
});

refs.decrement.addEventListener("click", () => {
  counterValue--;
  refs.result.textContent = counterValue;
});