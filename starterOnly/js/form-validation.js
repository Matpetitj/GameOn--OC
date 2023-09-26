//type listener à utiliser = change pour attendre la fin de la saisie
//submit pour le formulaire (send)
//Regex pour les différents champs de saisie
//booléen comme valeur de retour pour identifier si je garde les valeurs du formulaire
//let p = inputlastName.nextElementSibling; juste après l'input seulement pour les messages d'erreur

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const form = document.getElementById('form');
const checkbox1 = document.getElementById('checkbox1');
const input = document.getElementsByClassName('text-control');
// const locations = document.getElementById('location');
// const location = document.querySelectorAll('#locations .checkbox-input');
const regex = /^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const birthDateRegex = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
// function errorAdvert () {
    
// }

// Validation de la saisie du prénom
function firstNameValidation () {
    if(regex.test(firstName.value)){
        firstName.style.border = "solid 2px green";
        return true
    } else {
        let errorText = firstName.nextElementSibling;
        errorText.classList.add("errorText");
        errorText.textContent = "Erreur dans la saisie";
        return false;
    }
}
firstName.addEventListener('change', () => {
    firstNameValidation();
});

function lastNameValidation() {
    if(regex.test(lastName.value)) {
        lastName.style.border = "solid 2px green";
        return true;
    } else {
        let errorText = lastName.nextElementSibling;
        errorText.classList.add("errorText");
        errorText.textContent = "Erreur dans la saisie";
        return false;
    }
}
lastName.addEventListener('change', () => {
    lastNameValidation();
});

function emailValidation() {
    if(emailRegex.test(email.value)){
        email.style.border = "solid 2px green";
        return true;
    } else {
        let errorText = email.nextElementSibling;
        errorText.classList.add("errorText");
        errorText.textContent = "Mauvais format d'adresse mail";
        return false;
    }
}
email.addEventListener('change', () => {
    emailValidation();
});

function birthDateValidation() {
    if(birthDateRegex.test(birthDate.value)){
        birthDate.style.border = "solid 2px green";
        return true;
    } else {
        let errorText = birthDate.nextElementSibling;
        errorText.classList.add("errorText");
        errorText.textContent = "Erreur dans la saisie";
        return false;
    }
}
birthDate.addEventListener('change', () => {
    birthDateValidation();
});

function quantityValidation() {
    if(quantity.value >= 0 && quantity.value < 999){
        return true;
    } else {
        let errorText = quantity.nextElementSibling;
        errorText.classList.add("errorText");
        errorText.textContent = "Veuillez indiquer un nombre correct de tournois";
        return false;
    }
}

quantity.addEventListener('change', () => {
    quantityValidation();
});






// function formValidation () {
//     if (firstNameValidation === true &&
//         lastNameValidation === true &&
//         emailValidation === true &&
//         birthDateValidation === true &&
//         quantityValidation === true &&
//         ) {
//             return true;
//         }
//     return false;
// } 