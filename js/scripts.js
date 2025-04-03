const elementPassword = document.getElementById("password");
const elementRangeLengthInfo = document.getElementById("length-info");
const elementRangeSlider = document.getElementById("length-range");
const elementToggleUpperCase = document.getElementById("check-for-uppercase");
const elementToggleLowerCase = document.getElementById("check-for-lowercase");
const elementToggleNumbers = document.getElementById("check-for-numbers");
const elementToggleSymbols = document.getElementById("check-for-symbols");
const elementButtonPassword = document.getElementById("button");

//const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//const LowertCase = "abcdefghijklmnopqrstuvwxyz/";
//const Numbers = "01234567890";
//const Symbols = "!@#$%^&*()_+-={}[]:;<>,.?/";

const passwordContent = {
  UpperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  LowertCase : "abcdefghijklmnopqrstuvwxyz/",
  Numbers : "01234567890",
  Symbols : "!@#$%^&*()_+-={}[]:;<>,.?/",
}

let passwordLength = elementRangeSlider.value;

const detectPasswordLength = event => {
  passwordLength = event.target.value;
  elementRangeLengthInfo.textContent = `LENGTH: ${passwordLength}`;
  //console.log(event.target.value);
};

const toggleCheekerContent = () => { //Funciona asi que por favor no inventes y no lo toques

    if (elementToggleUpperCase.checked === true || elementToggleLowerCase.checked === true || elementToggleNumbers.checked === true || elementToggleSymbols.checked === true)
      {
      elementButtonPassword.disabled = false;
    } else {
      elementButtonPassword.disabled = true;
    }
  //console.log('Contraseña generada:', passwordCreate);
  //console.log('Configuración de toggles:');
  //console.log('Mayúsculas:', elementToggleUpperCase.checked);
  //console.log('Minúsculas:', elementToggleLowerCase.checked);
  //console.log('Números:', elementToggleNumbers.checked);
  //console.log('Símbolos:', elementToggleSymbols.checked);
}

const passwordGenerator = () => {
  let passwordCreated = "";

  for(let i=0; i<passwordLength;i++){
    if (elementToggleUpperCase.checked) {
      passwordCreated += passwordContent.UpperCase.charAt(Math.floor(Math.random() * passwordContent.UpperCase.length));
    }
    if (elementToggleLowerCase.checked) {
      passwordCreated += passwordContent.LowertCase.charAt(Math.floor(Math.random() * passwordContent.LowertCase.length));
    }
    if (elementToggleNumbers.checked) {
      passwordCreated += passwordContent.Numbers.charAt(Math.floor(Math.random() * passwordContent.Numbers.length));
    }
    if (elementToggleSymbols.checked) {
      passwordCreated += passwordContent.Symbols.charAt(Math.floor(Math.random() * passwordContent.Symbols.length));
    }
    elementPassword.value = passwordCreated;//No canto victoria porque algunas veces no crea uno de cada uno
    if (elementToggleUpperCase.checked && elementToggleLowerCase.checked && elementToggleNumbers.checked && elementToggleSymbols.checked) {
      passwordCreated += passwordContent.charAt(Math.floor(Math.random() * passwordContent.length));
    }
    elementPassword.value = passwordCreated;
  }
  elementPassword.textContent = passwordCreated
}

elementRangeSlider.addEventListener("input", detectPasswordLength);
elementToggleUpperCase.addEventListener('change', toggleCheekerContent);
elementToggleLowerCase.addEventListener('change', toggleCheekerContent);
elementToggleNumbers.addEventListener('change', toggleCheekerContent);
elementToggleSymbols.addEventListener('change', toggleCheekerContent);
elementButtonPassword.addEventListener('click', passwordGenerator);