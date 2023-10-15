//DOM Elements
let submitBtn = document.getElementsByClassName(".btn-submit");

// Confirmation d'envoi
function validationWindow(){
    form.style.display = 'none';

    const validationText = document.createElement("p");
    validationText.className = "validationText";
    validationText.textContent = "Formulaire envoyé ! ";
    document.querySelector(".modal-body").appendChild(validationText);
    //Creer un nouveau bouton 
    //submitBtn.setAttribute(value, "Fermer");
}

