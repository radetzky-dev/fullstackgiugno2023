var message = "Ciao, Mondo!";
console.log(message);
function addNumbers(a, b) {
  return a + b;
}
var sum = addNumbers(10, 15);
var myName = "Paolo";
myName = myName + " Musa";
console.log("Sum of the two numbers is: " + sum);
var nameX = "Danny";
var arr = [1, 3, 5, 7];
arr.pop();
console.log(arr); // [1, 3, 5] - il metodo di array ha cambiato l'array
var id = 5;
var firstname = "danny";
var hasDog = true;
var unit; // Dichiara la variabile senza assegnare un valore
unit = 5;
//Variabile UNION vale o stringa o number
var age;
age = 26;
age = "26";
age = 31;
console.log("My age " + age);
var point1 = { x: 1, y: 1 };
var point2 = point1;
point1.y = 100;
console.log(point2.y);
var ids = [1, 2, 3, 4, 5]; // può contenere solo numeri
var names = ["Danny", "Anna", "Bazza"]; // può contenere solo  stringhe
var options = [true, false, false]; // può contenere solo true o false
var books = [
  { name: "Fooled by randomness", author: "Nassim Taleb" },
  { name: "Sapiens", author: "Yuval Noah Harari" },
]; // può contenere solo oggetti
var arr = ["hello", 1, true]; // any in pratica fa sì che TypeScript si comporti come Javascript
ids.push(6);
console.log(ids);
console.log(arr);
var person;
// Assegna person a un oggetto con tutte le proprietà e tipi di valore richiesti
person = {
  name: "Danny",
  location: "UK",
  isProgrammer: true,
};
person.isProgrammer = false;
console.log(person.name + " è programmatore? " + person.isProgrammer);
var person1 = {
  name: "Danny",
  location: "UK",
  isProgrammer: true,
};
var person2 = {
  name: "Sarah",
  location: "Germany",
  isProgrammer: false,
};
console.log(person1.name + " e " + person2.name);


/*
npx tsc index.ts --outfile file-name.js

npx tsc hellow.ts -w

*/
