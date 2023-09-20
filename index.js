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

const optimumsPrime = (number) => {
  if (number <= 1) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const isPrime = () => {
  const numbers = getArray();

  for (let number of numbers) {
    if (optimumsPrime(number)) {
      primeNumbers.push(number);
    }
  }

  console.log("Prime numbers in the range:", primeNumbers);
};

submitButton.addEventListener("click", () => {
  const rangeMinValue = inputRangeMin.value.trim();
  const rangeMaxValue = inputRangeMax.value.trim();

  if (rangeMinValue === "" || rangeMaxValue === "") {
    alert("Enter a valid value for inputMin and inputMax.");
  } else {
    isPrime();
  }
});
