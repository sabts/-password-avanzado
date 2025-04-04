const elementPassword = document.getElementById("password");
const elementRangeLengthInfo = document.getElementById("length-info");
const elementRangeSlider = document.getElementById("length-range");

const elementToggleUpperCase = document.getElementById("check-for-uppercase");
const elementToggleLowerCase = document.getElementById("check-for-lowercase");
const elementToggleNumbers = document.getElementById("check-for-numbers");
const elementToggleSymbols = document.getElementById("check-for-symbols");

const elementButtonPassword = document.getElementById("button");

const passwordContent = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowertCase: "abcdefghijklmnopqrstuvwxyz/",
  numbers: "01234567890",
  symbols: "!@#$%^&*()_+-={}[]:;<>,.?/",
};

const allToggleOptions = document.querySelectorAll('.input-toggle');


let passwordLength = elementRangeSlider.value;
let passwordCreated = "";
let charactersAllowed = "";

const detectPasswordLength = event => {
  passwordLength = event.target.value;
  elementRangeLengthInfo.textContent = `LENGTH: ${passwordLength}`;
  //console.log(event.target.value);
};

const generateAleatoryCharacters = (max) => {
  return (Math.floor(Math.random() * max))
}

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
    charactersAllowed += passwordContent.upperCase;
    passwordCreated += passwordContent.upperCase.charAt
    (generateAleatoryCharacters(passwordContent.upperCase));
  }
  if (elementToggleLowerCase.checked) {
    charactersAllowed += passwordContent.lowertCase;
    passwordCreated += passwordContent.lowertCase.charAt
    (generateAleatoryCharacters(passwordContent.lowertCase));
  }
  if (elementToggleNumbers.checked) {
    charactersAllowed += passwordContent.numbers;
    passwordCreated += passwordContent.numbers.charAt
    (generateAleatoryCharacters(passwordContent.numbers));;
  }
  if (elementToggleSymbols.checked) {
    charactersAllowed += passwordContent.symbols;
    passwordCreated += passwordContent.symbols.charAt
    (generateAleatoryCharacters(passwordContent.symbols));
  }
};

const passwordGenerator = () => {
  toggleContentinPassword();
  for (let i = passwordCreated.length; i < passwordLength; i++) {
    passwordCreated += charactersAllowed.charAt(
      Math.floor(Math.random() * charactersAllowed.length)
    );
  }
  elementPassword.value = passwordCreated;
    passwordCreated = "";
};

elementRangeSlider.addEventListener("input", detectPasswordLength);
elementToggleUpperCase.addEventListener("change", toggleCheekerActivateButton);
elementToggleLowerCase.addEventListener("change", toggleCheekerActivateButton);
elementToggleNumbers.addEventListener("change", toggleCheekerActivateButton);
elementToggleSymbols.addEventListener("change", toggleCheekerActivateButton);
elementButtonPassword.addEventListener("click", passwordGenerator);
