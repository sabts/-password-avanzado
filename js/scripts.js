const elementPassword = document.getElementById("password");
const elementRangeLengthInfo = document.getElementById("length-info");
const elementRangeSlider = document.getElementById("length-range");
const elementToggleUpperCase = document.getElementById("check-for-uppercase");
const elementToggleLowerCase = document.getElementById("check-for-lowercase");
const elementToggleNumbers = document.getElementById("check-for-numbers");
const elementToggleSymbols = document.getElementById("check-for-symbols");
const elementButtonPassword = document.getElementById("button");

const passwordContent = {
  UpperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  LowertCase: "abcdefghijklmnopqrstuvwxyz/",
  numbers: "01234567890",
  symbols: "!@#$%^&*()_+-={}[]:;<>,.?/",
};

let passwordLength = elementRangeSlider.value;
let passwordCreated = "";
let charactersAllowed = "";

const detectPasswordLength = event => {
  passwordLength = event.target.value;
  elementRangeLengthInfo.textContent = `LENGTH: ${passwordLength}`;
  //console.log(event.target.value);
};

const toggleCheekerActivateButton = () => {
  if (
    elementToggleUpperCase.checked ||
    elementToggleLowerCase.checked ||
    elementToggleNumbers.checked ||
    elementToggleSymbols.checked
  ) {
    elementButtonPassword.disabled = false;
  } else {
    elementButtonPassword.disabled = true;
  }
  //console.log('Configuración de toggles:');
  //console.log('Mayúsculas:', elementToggleUpperCase.checked);
  //console.log('Minúsculas:', elementToggleLowerCase.checked);
  //console.log('Números:', elementToggleNumbers.checked);
  //console.log('Símbolos:', elementToggleSymbols.checked);
};

const toggleContentinPassword = () => {
  charactersAllowed = "";

  if (elementToggleUpperCase.checked) {
    charactersAllowed += passwordContent.UpperCase;
    passwordCreated += passwordContent.UpperCase.charAt(
      Math.floor(Math.random() * passwordContent.UpperCase.length)
    );
  }
  if (elementToggleLowerCase.checked) {
    charactersAllowed += passwordContent.LowertCase;
    passwordCreated += passwordContent.LowertCase.charAt(
      Math.floor(Math.random() * passwordContent.LowertCase.length)
    );
  }
  if (elementToggleNumbers.checked) {
    charactersAllowed += passwordContent.numbers;
    passwordCreated += passwordContent.numbers.charAt(
      Math.floor(Math.random() * passwordContent.numbers.length)
    );
  }
  if (elementToggleSymbols.checked) {
    charactersAllowed += passwordContent.symbols;
    passwordCreated += passwordContent.symbolsymbols.charAt(
      Math.floor(Math.random() * passwordContent.symbolsymbols.length)
    );
  }
};

const passwordGenerator = () => {
  toggleContentinPassword();
  for (let i = 0; 0 < elementRangeSlider - passwordCreated; i++) {
    passwordContent += passwordContent.charAt(
      Math.random() * passwordContent.length
    );
    elementPassword.value = passwordCreated;
    passwordCreated = "";
  }
};

elementRangeSlider.addEventListener("input", detectPasswordLength);
elementToggleUpperCase.addEventListener("change", toggleCheekerActivateButton);
elementToggleLowerCase.addEventListener("change", toggleCheekerActivateButton);
elementToggleNumbers.addEventListener("change", toggleCheekerActivateButton);
elementToggleSymbols.addEventListener("change", toggleCheekerActivateButton);
elementButtonPassword.addEventListener("click", passwordGenerator);
