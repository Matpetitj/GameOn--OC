// Confirmation d'envoi
function validationWindow(){
    form.style.display = 'none';

    const validationText = document.createElement("p");
    validationText.className = "validationText";
    validationText.textContent = "Formulaire envoyé ! ";
    document.querySelector(".modal-body").appendChild(validationText);

    const buttonConfirmation = document.createElement("button");
    buttonConfirmation.className = "btn-signup button";
    buttonConfirmation.textContent = "Fermer";
    document.querySelector(".modal-body").appendChild(buttonConfirmation);
    buttonConfirmation.addEventListener('click', closeModal);
}

