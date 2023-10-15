//DOM Elements
let submitBtn = document.getElementsByClassName(".btn-submit");
let modalBody = document.getElementsByClassName(".modal-body");

// Confirmation d'envoi
function validationWindow(){
    form.style.display = 'none';

    const validationText = document.createElement("p");
    validationText.className = "validationText";
    validationText.textContent = "Formulaire envoyé ! ";
    modalBody.appendChild(validationText);
    
    submitBtn.setAttribute(value, "Fermer");
}

