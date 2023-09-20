var message = 'Ciao, Mondo!';
var eta = 18;
var cities = ['Milano', 'Roma'];
var numbers = [7, 21, 46];
var languages = ['Javascript', 'Typescript'];
console.log(message);
function myLog(s) {
    console.log("Scrivo nel log " + s);
}
function calcola(x, y) {
    return x + y;
}
var risultato;
risultato = calcola(7, 5);
console.log("risultato " + risultato);
var a = 11;
if (typeof a === 'number') {
    console.log("numero " + a);
}
console.log(typeof (risultato));
myLog("ciao");
console.log("Risultato " + risultato);
var qualsiasi = "10";
console.log(typeof (qualsiasi));
qualsiasi = 10;
qualsiasi = [7, 21, 46];
console.log(typeof (qualsiasi));
console.log(qualsiasi[0]);
// Definisce una funzione chiamata circle che ottiene una variabile di tipo number e ritorna un valore di tipo string
function circle(diam) {
    return 'The circumference is ' + Math.PI * diam;
}
console.log(circle(10));
var circle2 = function (diam, raggio) {
    return 'Raggio ' + raggio + ' circonferenza è ' + Math.PI * diam;
};
console.log(circle2(10, 5));
/*
Installazione nella cartella
npm install typescript --save-dev

Compilazione singola
npx tsc index.ts

Compilazione "perpetua"
npx tsc index.ts -w
*/ 
