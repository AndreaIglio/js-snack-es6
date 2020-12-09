
// Codice viene eseguito solo quando documento e' carico
$(function () {
  // //JSNACK BLOCCO 1
  // //N1  L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
  // const userNumber1 = Number(prompt("Inserisci un numero"));
  // const userNumber2 = Number(prompt("Inserisci un numero"));
  // userNumber1 > userNumber2
  //   ? console.log("Number 1 win")
  //   : userNumber1 == userNumber2
  //   ? console.log("Numbers are the same")
  //   : console.log("Number 2 win");
  // // /N1
  // //N2  L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga
  // const word1 = prompt("Inserisci la prima parola");
  // const word2 = prompt("Inserisci la seconda parola");
  // word1.length < word2.length
  //   ? console.log("second word is longer")
  //   : word1.length > word2.length
  //   ? console.log("first word is longer")
  //   : console.log("they got the same length");
  // // /N2
  // //N3 Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while
  // let i = 0;
  // let sum = 0;
  // while (i < 5) {
  //   const userNumber = Number(prompt("Insert a number"));
  //   sum += userNumber;
  //   i++;
  // }
  // console.log(sum);
  // // /N3
  // //N4  In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa
  // const partyList = ["marcolino", "piripicchio", "leandro"];
  // const userName = prompt("Insert your name").toLowerCase();
  // partyList.includes(userName)
  //   ? console.log("Puoi partecipare alla festa")
  //   : console.log("Non puoi partecipare alla festa");
  // // /N4
  // //N5 Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array
  //   const oddNumbers = [];

  //   while (i < 6){
  //     userNumber = Number(prompt('Insert a number'));
  //     if (userNumber % 2 != 0){
  //       oddNumbers.push(userNumber);
  //     }
  //     i++;
  //   }
  // console.log(oddNumbers);
  // // /N5
  // //N6 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente
  // const numbeer = Number(prompt("Insert a number"));
  // for (let i = 0; i <= numbeer; i++) {
  //   const numberCubo = Math.pow(numbeer, 3);
  //   console.log(numberCubo);
  // }
  // // /N6
  // //N7  Stampa le potenze di 2 fino a 1000.
  // for (let i = 0; i <= 1000; i ++) {
  // const numb = Math.pow(2,i);
  // console.log(numb);
  // }
  // // /N7
  // //N8 Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero
  // const number = "1234";
  // for (let i = 0; i < number.length; i++) {
  //   let n = Number(number[i]);
  //   sum = sum + n;
  // }
  // console.log(sum);
  // // /N8
  // //N9 Calcola la somma e la media dei primi 10 numeri
  // const numberList = [];
  // let mediaAritm;
  // for (let i = 0; i <= 10; i ++){
  //   sum += i;
  //   numberList.push(i)
  //   mediaAritm = sum / numberList.length;
  // }
  // console.log(sum);
  // console.log(numberList);
  // console.log(mediaAritm);

  // // /N9
  // // /JSNACK BLOCCO 1

  //JSNACK BLOCCO 4

  // JSnack 1A

  // Creare un oggetto palla che abbia le seguenti proprietà:
  Nome = palla;
  Peso = 10;

  const palla = {
    name: "palla",
    weight: 10,
  };

  console.log(palla);

  //JSNACK 1B
  // Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

  palla.weight = Number(prompt("Insert palla weight in kg"));

  console.log(palla);

  // JSNACK 2

  // Creare un array di oggetti: ogni oggetto descrivera' una bici da corsa con le seguenti proprieta': nome e peso. Stampare a schermo la bici con peso minore

  const runBike = [
    {
      nome: "bianchi",
      peso: 2,
    },

    {
      nome: "Atala",
      peso: 3.5,
    },

    {
      nome: "Colnago",
      peso: 4,
    },
  ];

  const weightBike = [];

  runBike.forEach((element) => {
    console.log(element.peso);
    weightBike.push(element.peso);
  });

  console.log(weightBike);
  weightBike.sort(function (a, b) {
    return a - b;
  });

  console.log(weightBike[0]);

  // console.log(runBike);

  // JSNACK 3

  // Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
  // Calcolare perimetro e area.

  const tRett = {
    base: 10,
    h: 20,
  };

  console.log(tRett);

  tRett.ipotenusa = Number(
    Math.sqrt(Math.pow(tRett.base, 2) + Math.pow(tRett.h, 2)).toFixed(2)
  );
  console.log(tRett.ipotenusa);

  tRett.perimetro = tRett.base + tRett.h + tRett.ipotenusa;
  console.log(tRett.perimetro);

  // JSNACK 4A + 4B
  // Creare un array di oggetti di squadre di calcio.
  // Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
  // Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

  const footballTeams = [
    {
      name: "Inter",
      points: 0,
      foulagainst: 0,
    },
    {
      name: "Torino",
      points: 0,
      foulagainst: 0,
    },
    {
      name: "Napoli",
      points: 0,
      foulagainst: 0,
    },
  ];

  // Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  footballTeams.forEach((element) => {
    element.foulagainst = getRndInteger(30, 100);
    element.points = getRndInteger(1, 100);
    console.log(element);
  });

  //JSNACK BLOCCO 5

  //JSNACK 1
  //Crea 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.

  const zucchine = [
    {
      variety: "a",
      weight: 0.1,
      length: 10,
    },
    {
      variety: "b",
      weight: 0.2,
      length: 15,
    },
    {
      variety: "c",
      weight: 0.3,
      length: 16,
    },
    {
      variety: "d",
      weight: 0.7,
      length: 18,
    },
    {
      variety: "e",
      weight: 0.8,
      length: 19,
    },
    {
      variety: "f",
      weight: 0.9,
      length: 21,
    },
    {
      variety: "g",
      weight: 1.1,
      length: 34,
    },
    {
      variety: "h",
      weight: 0.4,
      length: 4,
    },
    {
      variety: "i",
      weight: 0.5,
      length: 14,
    },
    {
      variety: "l",
      weight: 0.6,
      length: 8,
    },
  ];

  // Calcola quanto pesano tutte le zucchine.

  let sum = 0;

  zucchine.forEach((element) => {
    console.log(element.weight);

    sum += element.weight;
  });

  console.log(sum);

  console.log("Il peso totale delle zucchine e' di: " + sum + " kg");

  //JSNACK 2
  //Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

const reverseWord = (string) => string.split("").reverse().join("");

console.log(reverseWord("marco"));

  // JSNACK 3

  // Crea 10 oggetti che rappresentano una zucchina.
  // Dividi in due array separati le zucchine che misurano
  // meno o più di 15cm.
  // Infine stampa separatamente quanto pesano i due gruppi
  // di zucchine

  const zucchine = [
    {
      variety: "a",
      weight: 0.1,
      length: 10,
    },
    {
      variety: "b",
      weight: 0.2,
      length: 15,
    },
    {
      variety: "c",
      weight: 0.3,
      length: 16,
    },
    {
      variety: "d",
      weight: 0.7,
      length: 18,
    },
    {
      variety: "e",
      weight: 0.8,
      length: 19,
    },
    {
      variety: "f",
      weight: 0.9,
      length: 21,
    },
    {
      variety: "g",
      weight: 1.1,
      length: 34,
    },
    {
      variety: "h",
      weight: 0.4,
      length: 4,
    },
    {
      variety: "i",
      weight: 0.5,
      length: 14,
    },
    {
      variety: "l",
      weight: 0.6,
      length: 8,
    },
  ];

  const zucchineSmallList = [];
  const zucchineBigList = [];

  zucchine.forEach((element) => {
    zucchineLength = element.length;

    if (zucchineLength < 15) {
      zucchineSmallList.push(element);
    } else {
      zucchineBigList.push(element);
    }

    // console.log(zucchineSmallList);
    // console.log(zucchineBigList);
  });

  let sommaZucchineSmall = 0;

  zucchineSmallList.forEach((element) => {
    sommaZucchineSmall += element.weight;
  });

  console.log(sommaZucchineSmall);

  let sommaZucchineBig = 0;

  zucchineBigList.forEach((element) => {
    sommaZucchineBig += element.weight;
  });

  console.log(sommaZucchineBig);

  // JSNACK 4
  // Scrivi una funzione che fonda due array (con lo stesso
  // numero di elementi) prendendo alternativamente gli
  // elementi da uno e dall’altro
  // es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

 
let a = ["1", "5"];
let b = ["c", "f"];

const arrayFusion = (array1, array2) => {
  const arrayMixValues = [];
  for (let i = 0; i < array1.length; i++) {
    for (i = 0; i < array2.length; i++) {
      arrayMixValues.push(array1[i], array2[i]);
    }
  }
  return arrayMixValues;
};

console.log(arrayFusion(a, b)); 

  // JSNACK 5
  // Scrivi una funzione che accetti tre argomenti:
  // un array e due numeri (“a” più piccolo di “b” e “b” grande al
  // massimo quanto il numero di elementi dell’array).
  // La funzione ritornerà un nuovo array con i valori che
  // hanno la posizione compresa tra “a” e “b”

  // function getRndInteger(min, max) {
  //   return Math.floor(Math.random() * (max - min)) + min;
  // };

  var x = ["a", "2", "c", "4", "d"];
  var g = 2;
  var d = 5;

  function birillo(array, a, b) {
    const arrayWithinElements = [];

    // function getRndInteger(min, max) {
    //   return Math.floor(Math.random() * (max - min)) + min;
    // }

    // var b = getRndInteger(0, array.length + 1);
    // var a = getRndInteger(0, b);

    for (var i = a; i < b - 1; i++) {
      arrayWithinElements.push(array[i]);
    }

    return arrayWithinElements;
  }

  console.log(birillo(x, g, d));

  //ARROW FUNCTION

  const birillo = (array, a, b) => {
    const arrayWithinElements = [];

    for (let i = a; i < b - 1; i++) {
      arrayWithinElements.push(array[i]);
    }

    return arrayWithinElements;
  };
});
