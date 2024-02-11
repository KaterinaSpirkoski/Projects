// !form validation

const form = document.getElementById("form");
const usernamee = document.getElementById("username");
const email = document.getElementById("email");
const compName = document.getElementById("compName");
const phoneNum = document.getElementById("phoneNum");
const studenSelect = document.getElementById("studenSelect");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get the values from inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const compNameValue = compName.value.trim();
  const phoneNumValue = phoneNum.value.trim();
  const studentSelectValue = studentSelect.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "*Ве молиме внесете го вашето име и презиме");
  } else {
    setSuccessFor(username);
  }
  if (emailValue === "") {
    setErrorFor(email, "*Ве молиме внесете ја вашата е-пошта");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Вашата е-пошта не е валидна");
  } else {
    setSuccessFor(email);
  }
  if (compNameValue === "") {
    setErrorFor(compName, "*Ве молиме внесете го името на компанија");
  } else {
    setSuccessFor(compName);
  }
  if (phoneNumValue === "") {
    setErrorFor(phoneNum, "*Ве молиме внесете го вашиот тел. број");
  } else {
    setSuccessFor(phoneNum);
  }
  if (studentSelectValue === "") {
    setErrorFor(studentSelect, "*Ве молиме изберете тип на студент");
  } else {
    setSuccessFor(studentSelect);
  }
}
function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");

  // add error message inside small
  small.innerText = message;

  //    add error class
  formGroup.className = "form-group error";
}
function setSuccessFor(input) {
  const formGroup = input.parentElement;

  formGroup.className = "form-group success";
}
function setSuccessFor(button) {
  const formGroup = button.parentElement;

  formGroup.className = "form-group success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// dropdown
// const studentSelect = document.getElementById("studentSelect");
// const option1 = document.getElementById("option1");
// const option2 = document.getElementById("option2");
// const option3 = document.getElementById("option3");
// const option4 = document.getElementById("option4");

// option1.addEventListener("click", function () {
//   studentSelect.innerText = option1.innerText;
// });

// option2.addEventListener("click", function () {
//   studentSelect.innerText = option2.innerText;
// });
// option3.addEventListener("click", function () {
//   studentSelect.innerText = option3.innerText;
// });
// option4.addEventListener("click", function () {
//   studentSelect.innerText = option4.innerText;
// });
