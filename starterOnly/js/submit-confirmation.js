// Fontion d'affichage de la modal de confirmation du formulaire
function validationWindow(){
    form.style.display = 'none';

//Création du nouveau texte dans la modal
    const div = document.createElement('div');
    div.setAttribute("class", "flexCenter");

    const validationText = document.createElement("p");
    validationText.className = "validationText";
    validationText.classList.add= "centerText";
    validationText.textContent = "Merci pour votre inscription";
    div.appendChild(validationText)
    
//Création d'un nouveau bouton pour fermer la modal
    const buttonConfirmation = document.createElement("button");
    buttonConfirmation.className = "btn-signup button";
    buttonConfirmation.classList.add = "center";
    buttonConfirmation.textContent = "Fermer";
    
    div.appendChild(buttonConfirmation);

    document.querySelector(".modal-body").appendChild(div);
    buttonConfirmation.addEventListener('click', closeModal);
}

