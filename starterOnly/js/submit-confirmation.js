//DOM Elements
let submitBtn = document.getElementsByClassName(".btn-submit");
let form = document.getElementById("form");
let modalBody = document.getElementsByClassName(".modal-body");
const closingCross = document.getElementById("cross");
const modalbg = document.querySelector(".bground");

// Confirmation d'envoi
function validationWindow(){
    form.style.display = 'none';

    const validationText = document.createElement("p");
    validationText.className = "validationText";
    validationText.textContent = "Formulaire envoyé ! ";
    modalBody.appendChild(validationText);
    
    submitBtn.setAttribute(value, "Fermer");
}

