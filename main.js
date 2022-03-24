/* pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.
 */

//chiediamo all'utente se vuole pari o dispari
const pari_o_dispari = prompt('vuoi essere pari o dispari?')
console.log(`Hai scelto ${pari_o_dispari}`);

//messaggio di errore se sbaglia ad inserire i dati 
if (pari_o_dispari != 'pari' && pari_o_dispari!= 'dispari') {
    alert('Ti sei sbagliato ad insertire i dati')
}

//chiediamo un numero compreso tra 1 e 9
const numero_giocatore = parseInt(prompt('inserisci il tuo numero compreso tra 1 e 9'))
console.log(`Hai scelto il numero ${numero_giocatore}`);

//messaggio di errore se sbaglia ad inserire i dati
if (numero_giocatore < 1 || numero_giocatore > 9 || isNaN(numero_giocatore))/* isNaN verifica se è un numero */ {
    alert('errore numero sbagliato')
}

//generare un numero casuale da 1 a 9
const numero_computer = Math.floor(Math.random()*9)+1; 
console.log(`Il numero del computer è ${numero_computer}`);

//comunichiamo la somma
const somma = numero_giocatore + numero_computer;
console.log(`La somma è ${somma}`);

//stabiliamo chi ha vinto
if (somma % 2 == 0) {
    var risultato = 'pari';
} else {
    var risultato = 'dispari';
}

//comunichiamo il risultato
console.log(`Il risultato è ${risultato}`)


//comunichiamo il vincitore
if (risultato == pari_o_dispari) {
    console.log('Sei il vincitore');
} else {
    console.log('Mi dispiace hai perso');
}