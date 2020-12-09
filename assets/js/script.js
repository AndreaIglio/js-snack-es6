
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





  //N3 Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while

  let i = 0;
  let sum = 0;
  while (i < 5) {
    const userNumber = Number(prompt("Insert a number"));
    sum += userNumber;
    i++;
  }
  console.log(sum);

  // /N3



  //N4  In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa
  

  const partyList = ['marcolino', 'piripicchio', "leandro"];

  const userName = prompt('Insert your name').toLowerCase();

  partyList.includes(userName) ? console.log('Puoi partecipare alla festa') : console.log('Non puoi partecipare alla festa');

  
  
  // /N4
  // /JSNACK BLOCCO 1
});
