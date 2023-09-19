let message: string = 'Ciao, Mondo!';
console.log(message);

function addNumbers(a: number, b: number) { 
    return a + b; 
} 

let sum: number = addNumbers(10, 15) 

let myName: string ="Paolo";
myName = myName + " Musa";

console.log('Sum of the two numbers is: ' +sum); 

let nameX = 'Danny';

let arr = [1, 3, 5, 7];
arr.pop();
console.log(arr); // [1, 3, 5] - il metodo di array ha cambiato l'array


let id: number = 5;
let firstname: string = 'danny';
let hasDog: boolean = true;

let unit: number; // Dichiara la variabile senza assegnare un valore

unit = 5;

//Variabile UNION vale o stringa o number
let age: string | number;
age = 26;
age = '26';
age = 31;

console.log ("My age "+age);

let point1 = { x: 1, y: 1 };
let point2 = point1;

point1.y = 100;
console.log(point2.y); 


let ids: number[] = [1, 2, 3, 4, 5]; // può contenere solo numeri
let names: string[] = ['Danny', 'Anna', 'Bazza']; // può contenere solo  stringhe
let options: boolean[] = [true, false, false]; // può contenere solo true o false
let books: object[] = [
  { name: 'Fooled by randomness', author: 'Nassim Taleb' },
  { name: 'Sapiens', author: 'Yuval Noah Harari' },
]; // può contenere solo oggetti
let arr: any[] = ['hello', 1, true]; // any in pratica fa sì che TypeScript si comporti come Javascript


ids.push(6);

console.log (ids);
console.log (arr);

let person: {
    name: string;
    location: string;
    isProgrammer: boolean;
  };
  
  // Assegna person a un oggetto con tutte le proprietà e tipi di valore richiesti
  person = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
  };

  person.isProgrammer = false;

  console.log (person.name + " è programmatore? "+person.isProgrammer);


  interface Person {
    name: string;
    location: string;
    isProgrammer: boolean;
  }
  
  let person1: Person = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
  };
  
  let person2: Person = {
    name: 'Sarah',
    location: 'Germany',
    isProgrammer: false,
  };


  console.log (person1.name + " e "+person2.name);

/*
npx tsc index.ts --outfile file-name.js

npx tsc hellow.ts -w

*/