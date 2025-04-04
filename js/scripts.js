const elementPassword = document.getElementById("password");
const elementRangeLengthInfo = document.getElementById("length-info");
const elementRangeSlider = document.getElementById("length-range");

const elementToggleUpperCase = document.getElementById("uppercase");
const elementToggleLowerCase = document.getElementById("lowercase");
const elementToggleNumbers = document.getElementById("numbers");
const elementToggleSymbols = document.getElementById("symbols");

const elementButtonPassword = document.getElementById("button");

const passwordContent = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz/",
  numbers: "01234567890",
  symbols: "!@#$%^&*()_+-={}[]:;<>,.?/",
};

const allToggleOptions = document.querySelectorAll('.input-toggle');

allToggleOptions.forEach(toggle => {
  console.log(toggle.id);
});

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
  elementButtonPassword.disabled = true;
  
  allToggleOptions.forEach(toggle => {
    if (toggle.checked) {
      elementButtonPassword.disabled = false;
    }
  });
}

const toggleContentinPassword = () => { 
  charactersAllowed = "";

  allToggleOptions.forEach(toggleCheck => {
    if (toggleCheck.checked) {
      charactersAllowed += passwordContent[toggleCheck.id]}
    }
  );
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