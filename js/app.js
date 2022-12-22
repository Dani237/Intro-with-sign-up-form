let firstNameInput = document.querySelector('.firstName');
let lastNameInput = document.querySelector('.lastName');
let emailInput = document.querySelector('.email');
let passwordInput = document.querySelector('.password');
let btnSubmit = document.querySelector('.submit');
let formElements = document.querySelectorAll('.input-content');
let iconError = document.querySelectorAll('.input-error');
let form = document.querySelector('.form-elements');

let firstName = 'First Name', lastName = 'Last Name', password = 'Password', email = 'Email';
let errorText = ' cannot be empty';

const errorMessage1 = document.createElement('div');
const errorMessage2 = document.createElement('div');
const errorMessage3 = document.createElement('div');
const errorMessage4 = document.createElement('div');

errorMessage1.classList.add('error-message');
errorMessage2.classList.add('error-message');
errorMessage3.classList.add('error-message');
errorMessage4.classList.add('error-message');

let m1 = false;
let m2 = false;
let m3 = false;
let m4 = false;

let logueo = [false, false, false, false];

exreg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (firstNameInput.value == "") {
        errorMessage1.textContent = firstName + errorText;
        formElements[0].appendChild(errorMessage1);
        iconError[0].hidden = false;
        logueo[0] = false;
        m1 = true;
    } else {
        if (m1) {
            formElements[0].removeChild(errorMessage1);
            iconError[0].hidden = true;
            m1 = false;
        }
        logueo[0] = true;
    }
    if (lastNameInput.value == "") {
        errorMessage2.textContent = lastName + errorText;
        formElements[1].appendChild(errorMessage2);
        iconError[1].hidden = false;
        logueo[1] = false;
        m2 = true;
    } else {
        if (m2) {
            formElements[1].removeChild(errorMessage2);
            iconError[1].hidden = true;
            m2 = false;
        }
        logueo[1] = true;
    }
    if (!exreg.test(emailInput.value)) {
        errorMessage3.textContent = 'Looks like this is not an email';
        formElements[2].appendChild(errorMessage3);
        iconError[2].hidden = false;
        logueo[2] = false;
        m3 = true;
    } else  {
        if (m3) {
            formElements[2].removeChild(errorMessage3);
            iconError[2].hidden = true;
            m3 = false;
        }
        logueo[2] = true;
    }
    if (passwordInput.value == "") {
        errorMessage4.textContent = password + errorText;
        formElements[3].appendChild(errorMessage4);
        iconError[3].hidden = false;
        logueo[3] = false;
        m4 = true;
    } else {
        if (m4) {
            formElements[3].removeChild(errorMessage4);
            iconError[3].hidden = true;
            m4 = false;
        }
        logueo[3] = true;
    }

    console.log(logueo);
    if (!logueo.includes(false)) window.open('https://github.com/Dani237', '_blank'); 
   
})

