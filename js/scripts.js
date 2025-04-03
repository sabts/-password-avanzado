const elementPassword = document.getElementById("password");
const elementRangeLengthInfo = document.getElementById("length-info");
const elementRangeSlider = document.getElementById("length-range");
const elementToggleUpperCase = document.getElementById("check-for-uppercase");
const elementToggleLowerCase = document.getElementById("check-for-lowercase");
const elementToggleNumbers = document.getElementById("check-for-numbers");
const elementToggleSymbols = document.getElementById("check-for-symbols");
const elementButtonPassword = document.getElementById("acction-button");

const passwordContentLettersUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const passwordContentLettersLowertCase = "abcdefghijklmnopqrstuvwxyz/";

const passwordContentLettersNumbers = "01234567890";

const passwordContentLettersSymbols = "!@#$%^&*()_+-={}[]:;<>,.?/";

const detectPasswordLength = event => {
  const passwordLength = event.target.value;
  elementRangeLengthInfo.textContent = `LENGTH: ${passwordLength}`;
  //console.log(event.target.value);
};

const toggleCheekerContent = event => {
  if (elemento.che === true) {
    elementPassword = Math.floor(ramdom * passwordContentLettersUpperCase);
  }
};

elementRangeSlider.addEventListener("input", detectPasswordLength);
elementToggleUpperCase.addEventListener("change");
