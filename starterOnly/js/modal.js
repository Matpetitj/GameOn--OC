// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closingCross = document.getElementById("cross");

// Evenement pour lancer la fonction d'ouverture du formulaire
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Ouvre de le formulaire
function launchModal() {
  modalbg.style.display = "block";
}

// Ferme le formulaire
function closeModal() {
  modalbg.style.display = "none";
}
closingCross.addEventListener('click', closeModal);

// Si un utilisateur clique en dehors de la fenêtre, cela ferme également le formulaire
window.onclick = function(event) {
  if (event.target == modalbg) {
    modalbg.style.display = "none";
  }
}

// Function nav responsive
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}