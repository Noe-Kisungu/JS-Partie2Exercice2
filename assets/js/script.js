
document.getElementById('lastname').addEventListener('blur',displayMessage)
//Etape 1 : créer sa fonction ; étape 2 : créer un callback pour l'appeler
function displayMessage() {
	alert("Keep focus!");
}