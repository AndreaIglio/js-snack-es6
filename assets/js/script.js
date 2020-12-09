
// Codice viene eseguito solo quando documento e' carico
$(function () {
  //JSNACK BLOCCO 1

  //N1  L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

  const userNumber1 = Number(prompt("Inserisci un numero"));
  const userNumber2 = Number(prompt("Inserisci un numero"));

  userNumber1 > userNumber2 ? console.log("Number 1 win") : userNumber1 == userNumber2 ? console.log("Numbers are the same") : console.log("Number 2 win");

  // /N1

  //N2  L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga

  const word1 = prompt ('Inserisci la prima parola');
  const word2 = prompt ('Inserisci la seconda parola');

  word1.length < word2.length ? console.log('second word is longer') : word1.length > word2.length ? console.log('first word is longer') : console.log('they got the same length');


  // /N2

  //N3
  // /N3
  //N4
  // /N4
  // /JSNACK BLOCCO 1
});
