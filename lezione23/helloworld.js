var message = "Ciao, Mondo!";
var eta = 18;
var cities = ["Milano", "Roma"];
var numbers = [7, 21, 46];
var languages = ["Javascript", "Typescript"];
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
if (typeof a === "number") {
    console.log("numero " + a);
}
console.log(typeof risultato);
myLog("ciao");
console.log("Risultato " + risultato);
var qualsiasi = "10";
console.log(typeof qualsiasi);
qualsiasi = 10;
qualsiasi = [7, 21, 46];
console.log(typeof qualsiasi);
console.log(qualsiasi[0]);
// Definisce una funzione chiamata circle che ottiene una variabile di tipo number e ritorna un valore di tipo string
function circle(diam) {
    return "The circumference is " + Math.PI * diam;
}
console.log(circle(10));
var circle2 = function (diam, raggio) {
    return "Raggio " + raggio + " circonferenza è " + Math.PI * diam;
};
console.log(circle2(10, 5));
console.log("***********");
var add = function (a, b, c) {
    console.log(c);
    return a + b;
};
console.log(add(5, 4, "I could pass a number, string, or nothing here!"));
console.log(add(3, 2));
//const form = document.getElementById("signup-form") as HTMLFormElement;
//console.log(form.method); // post
var Person = /** @class */ (function () {
    function Person(name, c, pets, age) {
        this.name = name;
        this.isCool = c;
        this.pets = pets;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        return "Hi, my name is ".concat(this.name, " and I have ").concat(this.pets, " pets");
    };
    Person.prototype.myAge = function () {
        return this.age;
    };
    return Person;
}());
var person1 = new Person("Danny", false, 1, 34);
var person2 = new Person("Sarah", true, 6, 28); // ERRORE: Argomento di tipo 'string' non è assegnabile al parametro di tipo 'boolean'.
console.log(person1.sayHello());
console.log(person2.sayHello());
console.log("Ho " + person2.myAge() + " anni");
var People = [person1, person2];
console.log(People[0].myAge());
/*
Installazione nella cartella
npm install typescript --save-dev

Compilazione singola
npx tsc index.ts

Compilazione "perpetua"
npx tsc index.ts -w
*/
