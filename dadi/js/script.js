// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


//genera messaggio per utente
alert('Benvenuto nel gioco dei dadi, clicca il pulsante seguente per scoprire il tuo numero ed iniziare a giocare');

//genera numero utente
let userNumber = Math.floor(Math.random() * 6) + 1;

//genera numero computer
let computerNumber = Math.floor(Math.random() * 6) + 1;

//messaggio che indica numero ad utente
// alert('Il tuo numero è ' + userNumber + ', clicca di seguito per scoprire se hai vinto');
let userNumberMessage = `Il tuo numero è ${userNumber}, clicca di seguito per scoprire se hai vinto`;
alert(userNumberMessage);

// // paragona numeri, determina vincitore e genera output
// if (userNumber > computerNumber) {
//     alert('Complimenti sei il vincitore!');
// } else if (userNumber < computerNumber) {
//     alert('Il vincitore è il computer con il numero ' + computerNumber);
// } else {
//     alert('Hai pareggiato con il computer! Aggiorna la pagina e ritenta');
// }


// //paragona numeri e determina vincitore
// let userMessage;

// if (userNumber > computerNumber) {
//     userMessage = 'Complimenti sei il vincitore!';
// } else if (userNumber < computerNumber) {
//     userMessage = 'Il vincitore è il computer con il numero ' + computerNumber;
// } else {
//     userMessage = 'Hai pareggiato con il computer! Aggiorna la pagina e ritenta';
// }

// //output
// alert(userMessage);


//paragona numeri e determina vincitore
let userMessage;
let winner = 'Complimenti sei il vincitore!';
let loser = `Il vincitore è il computer con il numero ${computerNumber}`;
let draw = 'Hai pareggiato con il computer! Aggiorna la pagina e ritenta';

if (userNumber > computerNumber) {
    userMessage = winner;
} else if (userNumber < computerNumber) {
    userMessage = loser;
} else {
    userMessage = draw;
}

//output vincitore
alert(userMessage);



