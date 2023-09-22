//DOM Elements
const submitModal = document.getElementsByClassName(".confirmation-submit");
const closeSubmitModal = document.getElementsByClassName(".close-modal-btn");

// Confirmation d'envoi
function closeForm(){
    modalbg.style.display = 'none';
    submitModal.style.display = 'block'
}

// Closing Modal

function closeModal(){
    submitModal.style.display = 'none';
}

// listener

closeSubmitModal.addEventListener('click', closeModal);

//Modifier la modale formulaire pour changer le contenu et afficher un message de confirmation