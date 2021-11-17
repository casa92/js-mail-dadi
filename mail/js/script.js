// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


//creare array di email con possibilità di accesso
const logedEmail = [ 'prova1@gmail.it', 'prova2@gmail.it', 'prova3@gmail.it'];

//chiedere email all'utente
let userLogin = prompt('Inserisci l\'email con cui vuoi accedere');

//verificare che l'email sia presente nell'array
let emailAuthorized = false;
for (i = 0; i <= logedEmail.length - 1; i++) {
    let thisEmail = logedEmail[i];

    if ( thisEmail === userLogin ) {
        emailAuthorized = true;
    }
}

//output
if (emailAuthorized === true) {
        alert('Benvenuto ' + userLogin + ' ora puoi accedere alla tua casella postale.');
    } else {
        alert('Ci dispiace ' + userLogin + ' la tua emai non è ancora presente nei nostri sistemi.');
}