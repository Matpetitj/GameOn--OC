// Fontion d'affichage de la modal de confirmation du formulaire
function validationWindow(){
    form.style.display = 'none';

//Création du nouveau texte dans la modal
    const validationText = document.createElement("p");
    validationText.className = "validationText";
    validationText.textContent = "Formulaire envoyé ! ";
    document.querySelector(".modal-body").appendChild(validationText);

//Création d'un nouveau bouton pour fermer la modal
    const buttonConfirmation = document.createElement("button");
    buttonConfirmation.className = "btn-signup button";
    buttonConfirmation.textContent = "Fermer";
    document.querySelector(".modal-body").appendChild(buttonConfirmation);
    buttonConfirmation.addEventListener('click', closeModal);
}

