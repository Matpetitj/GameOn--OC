//DOM Elements
const submitModal = document.getElementsByClassName(".confirmation-submit");
const closeSubmitModal = document.getElementsByClassName(".close-modal-btn");

// Confirmation d'envoi
function closeForm(){
    modalbg.style.display = 'none';
    
}

// Closing Modal

function closeModal(){
    submitModal.style.display = 'none';
}

//Modifier la modale formulaire pour changer le contenu et afficher un message de confirmation