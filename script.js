const annualSteps = document.querySelector("#annual-steps");
const stepsPerDay = document.querySelector(".steps-per-day");
const differenceOfSteps = document.querySelector(".difference-of-steps");
const allStepsToNow = document.querySelector(".all-steps-to-now");
const allSteps = document.querySelector("#all-steps");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const info = document.querySelector(".info");

let steps;
let stepsNow;
let daysOfTheYear;
let toTheGoal;
let goal;
const countSteps = (e) => {
  e.preventDefault();

  const today = new Date();
  const year = today.getFullYear();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  if (year % 4 === 0) {
    daysOfTheYear = 366;
  } else {
    daysOfTheYear = 365;
  }

  steps = parseInt((annualSteps.value / daysOfTheYear).toFixed(0)) + 1;
  stepsNow = steps * day;
  toTheGoal = annualSteps.value - allSteps.value;
  stepsPerDay.textContent = steps;
  allStepsToNow.textContent = stepsNow;
  differenceOfSteps.textContent = toTheGoal;
  let sum = parseInt(stepsNow - allSteps.value);
  if (allSteps.value < stepsNow) {
    info.textContent = "Do celu na dzień dzisiejszy brakuje " + sum;
  } else {
    info.textContent = "Jesteś w celu";
  }
};
const clearForm = (e) => {
  e.preventDefault();
  stepsPerDay.textContent = "";
  allStepsToNow.textContent = "";
  differenceOfSteps.textContent = "";
  allSteps.value = "";
  annualSteps.value = "";
  info.textContent = "";
};
sendBtn.addEventListener("click", countSteps);
clearBtn.addEventListener("click", clearForm);
