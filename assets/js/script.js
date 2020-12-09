
// Codice viene eseguito solo quando documento e' carico
$(function () {
  //JSNACK BLOCCO 1
  //N1  L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
  const userNumber1 = Number(prompt("Inserisci un numero"));
  const userNumber2 = Number(prompt("Inserisci un numero"));
  userNumber1 > userNumber2
    ? console.log("Number 1 win")
    : userNumber1 == userNumber2
    ? console.log("Numbers are the same")
    : console.log("Number 2 win");
  // /N1
  //N2  L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga
  const word1 = prompt("Inserisci la prima parola");
  const word2 = prompt("Inserisci la seconda parola");
  word1.length < word2.length
    ? console.log("second word is longer")
    : word1.length > word2.length
    ? console.log("first word is longer")
    : console.log("they got the same length");
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
  const partyList = ["marcolino", "piripicchio", "leandro"];
  const userName = prompt("Insert your name").toLowerCase();
  partyList.includes(userName)
    ? console.log("Puoi partecipare alla festa")
    : console.log("Non puoi partecipare alla festa");
  // /N4
  //N5 Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array
    const oddNumbers = [];
    
    while (i < 6){
      userNumber = Number(prompt('Insert a number'));
      if (userNumber % 2 != 0){
        oddNumbers.push(userNumber);
      }
      i++;
    }
  console.log(oddNumbers);
  // /N5
  //N6 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente
  const numbeer = Number(prompt("Insert a number"));
  for (let i = 0; i <= numbeer; i++) {
    const numberCubo = Math.pow(numbeer, 3);
    console.log(numberCubo);
  }
  // /N6
  //N7  Stampa le potenze di 2 fino a 1000.
  for (let i = 0; i <= 1000; i ++) {
  const numb = Math.pow(2,i);
  console.log(numb);
  }
  // /N7
  //N8 Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero
  const number = "1234";
  for (let i = 0; i < number.length; i++) {
    let n = Number(number[i]);
    sum = sum + n;
  }
  console.log(sum);
  // /N8
  //N9 Calcola la somma e la media dei primi 10 numeri
  const numberList = [];
  let mediaAritm;
  for (let i = 0; i <= 10; i ++){
    sum += i;
    numberList.push(i)
    mediaAritm = sum / numberList.length;
  }
  console.log(sum);
  console.log(numberList);
  console.log(mediaAritm);
  
  // /N9
  // /JSNACK BLOCCO 1
});
