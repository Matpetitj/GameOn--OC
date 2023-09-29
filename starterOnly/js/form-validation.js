//type listener à utiliser = change pour attendre la fin de la saisie
//submit pour le formulaire (send)
//Regex pour les différents champs de saisie
//booléen comme valeur de retour pour identifier si je garde les valeurs du formulaire
//let p = inputlastName.nextElementSibling; juste après l'input seulement pour les messages d'erreur

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
// const formSubmit = document.getElementsByClassName('.btn-submit');
const form = document.getElementById('form');
const input = document.getElementsByClassName('text-control');
const locations = document.getElementsByName('location');
const locationInput = document.querySelectorAll('#locations .checkbox-input');
const checkbox1 = document.getElementById('checkbox1');

// Validation de la saisie du prénom

function nameValidation(element) {
    const regex = /^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$/;
   let errorMsg = element.nextElementSibling;
   if(element.value.trim().length <= 2){
    errorMsg.textContent="Veuillez saisir plus que 2 caracteres";
    return false;
    } 
    if(!regex.test(element.value.trim())){
        errorMsg.textContent = "Mauvais format du nom";
        return false;
    } 
    errorMsg.textContent = "";
    return true;
}

firstName.addEventListener('change', (e) => {
    e.preventDefault();
    nameValidation(firstName);
});

lastName.addEventListener('change', (e) => {
    e.preventDefault();
    nameValidation(lastName);
});

function emailValidation() {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let errorMsg = email.nextElementSibling;
    if(!emailRegex.test(email.value.trim())){
        errorMsg.textContent = "Mauvais format d'adresse mail";
        return false;
    } 
    errorMsg.textContent = "";
    return true;
}
email.addEventListener('change', (e) => {
    e.preventDefault();
    emailValidation();
});
/*
function birthdateValidation() {
    if(birthdate.value.trim().length !== 10){
        birthdate.style.border = "solid 2px green";
        return true;
    } else {
        let errorText = birthdate.nextElementSibling;
        errorText.classList.add("errorText");
        errorText.textContent = "Erreur dans la saisie";
        return false;
    }
}
birthdate.addEventListener('change', () => {
    birthdateValidation();
});

function quantityValidation() {
    if(quantity.value >= 0){
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

function checkboxLocation () {
    
    for(let i = 0; locations.length; i++){

        if(locations[i].checked) {
            let errorText = locationInput.nextElementSibling;
            errorText.classList.add("errorText");
            errorText.style.color = "green";
            errorText.textContent = "Destination valide ! ";
            return true;
        } else {
            let errorText = locationInput.nextElementSibling;
            errorText.classList.add("errorText");
            errorText.style.color = "red";
            errorText.textContent = "Choisissez une destination :)";
            return false;
        }
    }
}

locations.forEach((locationInput) => locationInput.addEventListener('change', function (){
    checkboxLocation();
}))

function checkboxControle() {
    if(checkbox1.checked){
        return true;
    } else {
        let errorText = checkbox1.nextElementSibling;
        errorText.classList.add("errorText");
        errorText.style.color = "red";
        errorText.textContent = "Choisissez une destination :)";
        return false;
    }
}

checkbox1.addEventListener('change', () => {
    checkboxControle();
})


form.addEventListener('submit', function (e) {
    e.preventDefault();
      if (firstNameValidation ||
        lastNameValidation ||
        emailValidation ||
        birthdateValidation ||
        quantityValidation ||
        checkboxLocation  ||
        checkboxControle 
        ) {
            alert("Veuillez verifier le formulaire ! ");
        }
        else{
            //envoi du formulaire
            closeForm();
            
            //Envoyer les données du formulaire sur la console 
            //vider les champs du formulaire (reset )
            //cacher le formulaire et afficher un message de confirmation  sur la meme modale 
            
        }

});
*/