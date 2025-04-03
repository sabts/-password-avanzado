const elementPassword = document.getElementById("password");
const elementRangeLengthInfo = document.getElementById("length-info");
const elementRangeSlider = document.getElementById("length-range");
const elementToggleUpperCase = document.getElementById("check-for-uppercase");
const elementToggleLowerCase = document.getElementById("check-for-lowercase");
const elementToggleNumbers = document.getElementById("check-for-numbers");
const elementToggleSymbols = document.getElementById("check-for-symbols");
const elementButtonPassword = document.getElementById("acction-button");

//const passwordContentLettersUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//const passwordContentLettersLowertCase = "abcdefghijklmnopqrstuvwxyz/";
//const passwordContentLettersNumbers = "01234567890";
//const passwordContentLettersSymbols = "!@#$%^&*()_+-={}[]:;<>,.?/";


const passwordContent = {
  UpperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  LowertCase : "abcdefghijklmnopqrstuvwxyz/",
  Numbers : "01234567890",
  Symbols : "!@#$%^&*()_+-={}[]:;<>,.?/",
}

const detectPasswordLength = event => {
  const passwordLength = event.target.value;
  elementRangeLengthInfo.textContent = `LENGTH: ${passwordLength}`;
  //console.log(event.target.value);
};

//const passwordLength = () => {
  //passwordLength = elementRangeSlider.value;
  //let passwordCreated = "";

 // for(let i=0; i<passwordLength;i++){
  //  const characters =  passwordContent.charAt(Math.floor(Math.random() * passwordContent.length))
  //if (elementToggleUpperCase.checked === true) {
  //  passwordCreate += passwordContentLettersUpperCase.charAt(Math.floor(Math.random() * passwordContentLettersUpperCase.length));
  //}
  //if (elementToggleLowerCase.checked === true) {
  //  passwordCreate += passwordContentLettersLowertCase.charAt(Math.floor(Math.random() * passwordContentLettersLowertCase.length));
  //}
  //if (elementToggleNumbers.checked === true) {
  //  passwordCreate += passwordContentLettersNumbers.charAt(Math.floor(Math.random() * passwordContentLettersNumbers.length));
  //}
  //if (elementToggleSymbols.checked === true) {
  // passwordCreate += passwordContentLettersSymbols.charAt(Math.floor(Math.random() * passwordContentLettersSymbols.length));
  //}
  //}
  //passwordCreated = characters;
  //elementPassword.value = passwordCreate;}

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

elementRangeSlider.addEventListener("input", detectPasswordLength);
elementToggleUpperCase.addEventListener('change', toggleCheekerContent);
elementToggleLowerCase.addEventListener('change', toggleCheekerContent);
elementToggleNumbers.addEventListener('change', toggleCheekerContent);
elementToggleSymbols.addEventListener('change', toggleCheekerContent);