const regularValidation =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const button0 = document.getElementById('submitBtn0');
const button1 = document.getElementById('submitBtn1');
const email0 = document.getElementById('email0');
const email1 = document.getElementById('email1');
const checkbox0 = document.getElementById('checkbox0');
const checkbox1 = document.getElementById('checkbox1');

email0.addEventListener('input', (event) => isFormValid0(event.target.value));
email1.addEventListener('input', (event) => isFormValid1(event.target.value));

checkbox0.addEventListener('click', (event) => isFormValid0(email0.value));
checkbox1.addEventListener('click', (event) => isFormValid1(email1.value));

const isFormValid0 = (email) => {
    let isValid = regularValidation.test(String(email).toLowerCase());

    if (checkbox0.checked && isValid) {
        button0.classList.add('able');
        button0.disabled = false;
        return;
    }

    button0.disabled = true;
    button0.classList.remove('able');
};
const isFormValid1 = (email) => {
    let isValid = regularValidation.test(String(email).toLowerCase());

    if (checkbox1.checked && isValid) {
        button1.classList.add('able');
        button1.disabled = false;
        return;
    }

    button1.disabled = true;
    button1.classList.remove('able');
};
