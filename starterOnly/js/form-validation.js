// DOM group element

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const form = document.getElementById('form');
const input = document.getElementsByClassName('text-control');
const locations = document.getElementsByName('location');
const locationsContainer = document.getElementById('locations');
const locationInput = document.querySelectorAll('#locations .checkbox-input');
const checkbox1 = document.getElementById('checkbox1');
const checkboxRequired = document.getElementById('checkbox-riquered');

// Validation de la saisie du prénom et du nom
function nameValidation(element) {
const regex = /^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$/;
   let errorMsg = element.nextElementSibling;
   if(element.value.trim().length <= 2){
    errorMsg.textContent="Veuillez saisir plus de 2 caractères (A-Z)";
    return false;
    } 
    if(!regex.test(element.value.trim())){
        errorMsg.textContent = "Mauvais format de nom (A-Z)";
        return false;
    } 
    errorMsg.textContent = "";
    return true;
}

//Evenement pour prénom et nom

firstName.addEventListener('change', (e) => {
    e.preventDefault();
    nameValidation(firstName);
});

lastName.addEventListener('change', (e) => {
    e.preventDefault();
    nameValidation(lastName);
});

//Fonction de validation de l'adresse mail
function emailValidation() {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let errorMsg = email.nextElementSibling;
    if(!emailRegex.test(email.value.trim())){
        errorMsg.textContent = "Mauvais format de l'adresse mail";
        return false;
    } 
    errorMsg.textContent = "";
    return true;
}
email.addEventListener('change', (e) => {
    e.preventDefault();
    emailValidation();
});

//Fonction de validation de la date naissance
function birthdateValidation() {
    let errorMsg = birthdate.nextElementSibling;
    if(birthdate.value.trim().length !== 10){
        errorMsg.textContent = "Veuillez donner une date valide";
        return false;
    } else {
        errorMsg.textContent = "";
        return true;
    }
}

birthdate.addEventListener('change', (e) => {
    e.preventDefault();
    birthdateValidation();
});

//Fonction de validation de la quantité
function quantityValidation() {
    let errorMsg = quantity.nextElementSibling;
    if(quantity.value < 1 || quantity.value > 99){
        errorMsg.textContent = "Veuillez donner un nombre valide";
        return false;
    } else { 
        errorMsg.textContent = "";
        return true;
    }
}

quantity.addEventListener('change', (e) => {
    e.preventDefault();
    quantityValidation();
});

//Fonction de validation des destinations
function checkboxLocation() {
    let isChecked = false; 
    let errorMsg = locationsContainer.nextElementSibling;
    for(let i = 0; i<locations.length; i++){
        if(locations[i].checked) {
           isChecked= true;
        }
    }
    if(isChecked) {
        errorMsg.textContent = "";
        return true;
    } else {
        errorMsg.textContent = "Veuillez cocher une destination"
        return false;
    }
}

locations.forEach((locationInput) => locationInput.addEventListener('click', function (){
    checkboxLocation();
}))

//Fonction de validation des conditions d'utilisation
function checkboxControle() {
    isChecked = false;
    let errorMsg = checkboxRequired.nextElementSibling;
    if(checkbox1.checked){
        isChecked = true;
    }
    if(isChecked){
        errorMsg.textContent = "";
        return true;
    } else {
        errorMsg.textContent = "Veuillez accepter les conditions d'utilisation";
        return false;
    }
}

checkbox1.addEventListener('change', (e) => {
    e.preventDefault();
    checkboxControle();
})

//Fonction de validation du formulaire
function validate(){
    event.preventDefault();
      if (
        !nameValidation(firstName) ||
        !nameValidation(lastName) ||
        !emailValidation() ||
        !birthdateValidation() ||
        !quantityValidation() ||
        !checkboxLocation()  ||
        !checkboxControle() 
        ) {
            alert("Vérifiez le formulaire");
        }
        else{
            //Affichage de la modal de confirmation
            validationWindow();
        }
}
