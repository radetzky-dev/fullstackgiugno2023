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


/*
npx tsc index.ts --outfile file-name.js

npx tsc hellow.ts -w

*/