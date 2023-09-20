var message = 'Ciao, Mondo!';
var eta = 18;
var cities = ['Milano', 'Roma'];
var numbers = [7, 21, 46];
var languages = ['Javascript', 'Typescript'];
console.log(message);
function myLog(s) {
    console.log("Scrivo nel log " + s);
    var result = calcola(9, 4);
    console.log("Result " + result);
}
function calcola(x, y) {
    return x + y;
}
var risultato = true;
risultato = calcola(7, 5);
console.log(typeof (risultato));
myLog("ciao");
console.log("Risultato " + risultato);
/*
Installazione nella cartella
npm install typescript --save-dev

Compilazione singola
npx tsc index.ts

Compilazione "perpetua"
npx tsc index.ts -w
*/ 
