const inputRangeMin = document.querySelector(".inputRangeMin");
const inputRangeMax = document.querySelector(".inputRangeMax");
const submitButton = document.querySelector(".submitButton");

const primeNumbers = [];

const getArray = () => {
  const rangeMin = Number(inputRangeMin.value);
  const rangeMax = Number(inputRangeMax.value);
  const numbers = [];

  for (let i = rangeMin; i <= rangeMax; i++) {
    numbers.push(i);
  }
  return numbers;
};

const optimumsPrime = () => {};

const isPrime = () => {
  for (let i in getArray()) {
  }
};

submitButton.addEventListener("click", () => {
  isPrime();
});
