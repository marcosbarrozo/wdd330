import {User} from './user.js';

const user = new User;
//VALIDATE DATA

const form = document.querySelector("#sign_up_form");
const email = document.getElementById("email");
const emailError = document.querySelector(".error");
const submitBtn = document.querySelector(".btn");

/*USER DATA */
const name_ = document.querySelector("#name");
const email_ = document.querySelector("#email");
const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm_password");

email.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // if the email field is valid, we let the form submit
  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
  user.createUser(name_.value,email_.value,password.value);
  emailError.textContent = "User Created!"
  window.location.href = "https://marcosbarrozo.github.io/wdd330/week8/index.html";
  event.preventDefault();

});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "Entered value needs to be an e-mail address.";
  } 

  // Set the styling appropriately
  emailError.className = "error active";
}