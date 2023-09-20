let message: string = "Ciao, Mondo!";

let eta: number = 18;

let cities: string[] = ["Milano", "Roma"];
let numbers: number[] = [7, 21, 46];

let languages: Array<string> = ["Javascript", "Typescript"];

console.log(message);

function myLog(s: string): void {
  console.log("Scrivo nel log " + s);
}

function calcola(x: number, y: number) {
  return x + y;
}

let risultato: number;

risultato = calcola(7, 5);
console.log("risultato " + risultato);

const a: unknown = 11;

if (typeof a === "number") {
  console.log("numero " + a);
}

console.log(typeof risultato);
myLog("ciao");

console.log("Risultato " + risultato);

let qualsiasi: any = "10";
console.log(typeof qualsiasi);
qualsiasi = 10;
qualsiasi = [7, 21, 46];

console.log(typeof qualsiasi);
console.log(qualsiasi[0]);

// Definisce una funzione chiamata circle che ottiene una variabile di tipo number e ritorna un valore di tipo string
function circle(diam: number): string {
  return "The circumference is " + Math.PI * diam;
}

console.log(circle(10));

const circle2 = (diam: number, raggio: number): string => {
  return "Raggio " + raggio + " circonferenza è " + Math.PI * diam;
};

console.log(circle2(10, 5));

console.log("***********");

const add = (a: number, b: number, c?: number | string) => {
  console.log(c);

  return a + b;
};

console.log(add(5, 4, "I could pass a number, string, or nothing here!"));
console.log(add(3, 2));

//const form = document.getElementById("signup-form") as HTMLFormElement;
//console.log(form.method); // post

class Person {
  name: string;
  isCool: boolean;
  pets: number;
  age: number;

  constructor(name: string, c: boolean, pets: number, age: number) {
    this.name = name;
    this.isCool = c;
    this.pets = pets;
    this.age = age;
  }

  sayHello(): string {
    return `Hi, my name is ${this.name} and I have ${this.pets} pets`;
  }

  myAge(): number {
    return this.age;
  }
}

const person1 = new Person("Danny", false, 1,34);
const person2 = new Person("Sarah", true, 6,28); // ERRORE: Argomento di tipo 'string' non è assegnabile al parametro di tipo 'boolean'.

console.log(person1.sayHello());
console.log(person2.sayHello());
console.log ("Ho "+person2.myAge() +" anni");

let People: Person[] = [person1, person2];

console.log (People[0].myAge());

/*
Installazione nella cartella
npm install typescript --save-dev

Compilazione singola
npx tsc index.ts

Compilazione "perpetua"
npx tsc index.ts -w
*/
