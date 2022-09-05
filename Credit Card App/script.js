const fullName = document.getElementById("name");
const number = document.getElementById("number");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");
const errorName = document.querySelector(".name");
const errorNumber = document.querySelector(".number");
const errorMonth = document.querySelector(".emonth");
const errorYear = document.querySelector(".eyear");
const errorCvc = document.querySelector(".cvc");

let cardName = document.getElementById("card__name");
let cardNumber = document.querySelector(".card__number");
let cardMonth = document.getElementById("card__month");
let cardYear = document.getElementById("card__year");
let cardCvc = document.getElementById("card__cvc");

fullName.addEventListener("input", () => {
  if (/[0-9]/.test(fullName.value)) {
    console.log("done");
    errorName.style.display = "block";
    errorName.innerHTML = "Wrong format!";
  } else cardName.innerText = fullName.value;
});

number.addEventListener("input", () => {
  if (number.value.length < 12 || number.value.length > 12) {
    errorNumber.style.display = "block";
    errorNumber.innerHTML = `Invalid Number!`;
    number.style.outlineColor = "hsl(0, 100%, 66%)";
  } else {
    number.style.outlineColor = "hsl(113, 93%, 46%)";
    errorNumber.style.display = "none";
  }
  cardNumber.style.fontSize = "32px";
  cardNumber.innerText = number.value;
});

month.addEventListener("input", () => {
  if (month.value === "" || month.value == 0) {
    errorMonth.style.display = "block";
    errorMonth.innerHTML = `Can't be blank!`;
    month.style.outlineColor = "hsl(0, 100%, 66%)";
  } else if (month.value.length > 2) {
    errorMonth.style.display = "block";
    errorMonth.innerHTML = "Invalid Input!";
    month.style.outlineColor = "hsl(0, 100%, 66%)";
  } else {
    month.style.outlineColor = "hsl(113, 93%, 46%)";
    errorMonth.style.display = "none";
    if (month.value < 10) {
      if (month.value.includes("0")) {
        cardMonth.innerText = `${month.value}`;
      } else {
        cardMonth.innerText = `0${month.value}`;
      }
    } else if (month.value > 12) {
      errorMonth.style.display = "block";
      errorMonth.innerHTML = "Invalid Input!";
      month.style.outlineColor = "hsl(0, 100%, 66%)";
    } else cardMonth.innerText = month.value;
  }
});

year.addEventListener("input", () => {
  if (year.value === "") {
    errorYear.style.display = "block";
    errorYear.innerHTML = `Can't be blank!`;
    year.style.outlineColor = "hsl(0, 100%, 66%)";
  } else if (year.value.length > 2) {
    errorYear.style.display = "block";
    errorYear.innerHTML = `Invalid Input`;
    year.style.outlineColor = "hsl(0, 100%, 66%)";
  } else {
    if (year.value < 10) {
      if (!year.value.includes("0")) {
        cardYear.innerText = `0${year.value}`;
      } else {
        cardYear.innerText = `${year.value}`;
      }
    }
    year.style.outlineColor = "hsl(113, 93%, 46%)";
    errorYear.style.display = "none";
    cardYear.innerText = year.value;
  }
});

cvc.addEventListener("input", () => {
  if (cvc.value.length !== 3) {
    errorCvc.style.display = "block";
    errorCvc.innerHTML = "Invalid input!";
    cvc.style.outlineColor = "hsl(0, 100%, 66%)";
  } else {
    cvc.style.outlineColor = "hsl(113, 93%, 46%)";
    errorCvc.style.display = "none";
    cardCvc.innerText = cvc.value;
  }
});
