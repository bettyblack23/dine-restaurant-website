const form = document.getElementById("booking_form");
const fname = document.getElementById("full_name");
const email = document.getElementById("email_address");

const month = document.getElementById("month");
const day = document.getElementById("day");
const year = document.getElementById("year");

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");

const people = document.getElementById("people");
const minus = document.getElementById("minus-button");
const plus = document.getElementById("plus-button");

/*---------------------EVENT LISTENERS--------------------------*/
form.addEventListener("submit", (x) => {
  x.preventDefault();

  checkInputs();
});

let checkInputs = () => {
  const nameValue = fname.value.trim();
  const emailValue = email.value.trim();

  const monthValue = month.value.trim();
  const dayValue = day.value.trim();
  const yearValue = year.value.trim();

  const minuteValue = minute.value.trim();
  const hourValue = hour.value.trim();

  if (nameValue === "") {
    setErrorFor(fname, "This field is required");
  } else {
    setSuccesFor(fname, "SUCCES");
  }

  if (emailValue === "") {
    setErrorFor(email, "This field is required");
  } else if (!emailValidation(emailValue)) {
    setErrorFor(email, "This is not a valid e-mail address");
  } else if (emailValidation(emailValue)) {
    setSuccesFor(email);
  }

  if (monthValue === "" || dayValue === "" || yearValue === "") {
    setErrorForDate("This field is incomplete");
  } else if (monthValue !== "" || dayValue !== "" || yearValue !== "") {
    setSuccesForDate();
  }

  if (minuteValue === "" || hourValue === "") {
    setErrorForTime("This field is incomplete");
  } else if (minuteValue !== "" || hourValuee !== "") {
    setSuccesForTime();
  }
};

minus.addEventListener("click", function () {
  let number = parseInt(people.value);
  if (number > 1) {
    people.value = number - 1 + " people";
  }
});

plus.addEventListener("click", function () {
  let number = parseInt(people.value);

  if (number < 99) {
    people.value = number + 1 + " people";
  }
});

/*---------------------EVENT LISTENERS END-----------------------*/

let setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const redText = formControl.querySelector(".red-text");
  formControl.classList.add("error");
  formControl.classList.add("error-underline");
  redText.innerText = message;
};

let setSuccesFor = (input, message) => {
  const formControl = input.parentElement;
  const redText = formControl.querySelector(".red-text");
  formControl.classList.remove("error");
  formControl.classList.remove("error-underline");
  redText.innerText = message;
};

let setErrorForDate = (message) => {
  const dateContainer = document.querySelector(".form-date");
  const redText = dateContainer.querySelector(".red-text");
  dateContainer.classList.add("error", "error-underline");
  redText.innerText = message;
};

let setSuccesForDate = () => {
  const dateContainer = document.querySelector(".form-date");
  dateContainer.classList.remove("error", "error-underline");
};

let setErrorForTime = (message) => {
  const dateContainer = document.querySelector(".form-time");
  const redText = dateContainer.querySelector(".red-text");
  dateContainer.classList.add("error", "error-underline");
  redText.innerText = message;
};

let setSuccesForTime = () => {
  const dateContainer = document.querySelector(".form-time");
  dateContainer.classList.remove("error", "error-underline");
};

/*------------------------------------------------------------------------*/
let emailValidation = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

/*-------------------AM PM SELECT----------------------------------------*/

const selected = document.getElementById("selected");
const options = document.getElementById("options_list");
const am = document.getElementById("am");
const pm = document.getElementById("pm");
const optionsList = document.getElementById("pm");

let toggleStatus = false;

selected.addEventListener("click", function () {
  if (toggleStatus === false) {
    options.classList.add("active");
    selected.classList.add("open");
    
    toggleStatus = true;
  } else if (toggleStatus === true) {
    options.classList.remove("active");
    selected.classList.remove("open");
    toggleStatus = false;
  }
});

am.addEventListener("click", function () {
  options.classList.remove("active");
  selected.classList.remove("open");
  toggleStatus = false;

  selected.innerHTML = am.value;
});

pm.addEventListener("click", function () {
  options.classList.remove("active");
  selected.classList.remove("open");
  toggleStatus = false;

  selected.innerHTML = pm.value;
});

