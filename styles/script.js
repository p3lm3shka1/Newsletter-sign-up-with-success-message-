const form = document.querySelector(".email-form");
const emailInput = document.getElementById("email");
const mainSection = document.querySelector(".main-cont");
const successCard = document.querySelector(".success-card");
const successEmailSpan = document.querySelector(".success-email");
const dismissBtn = document.querySelector(".dismiss-btn");
const errorText = document.querySelector(".error-text");

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailValue = emailInput.value.trim();

  if (!isValidEmail(emailValue)) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");

    successEmailSpan.textContent = emailValue;

    mainSection.style.display = "none";
    successCard.style.display = "block";
  }
});

emailInput.addEventListener("input", function () {
  if (form.classList.contains("error")) {
    form.classList.remove("error");
  }
});

dismissBtn.addEventListener("click", function () {
  successCard.style.display = "none";
  mainSection.style.display = "flex";
  form.reset();
});
