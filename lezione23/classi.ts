class Person {
  constructor(
    readonly name: string,
    private isCool: boolean,
    protected email: string,
    public pets: number
  ) {}

  sayMyName() {
    console.log("Sono cool? " + this.isCool);
    console.log(`Your not Heisenberg, you're ${this.name}`);
    this.email = "nuova@mail.com";
    console.log("Mail ? " + this.email);
  }
}

const person1 = new Person("Danny", false, "dan@e.com", 1);
console.log("My name " + person1.name); // Fine

person1.pets = 7;

person1.sayMyName();
console.log("Numero animali " + person1.pets);

class Programmer extends Person {
  programmingLanguages: string[];

  constructor(
    name: string,
    isCool: boolean,
    email: string,
    pets: number,
    pL: string[]
  ) {
    // La chiamata a super deve fornire tutti i parametri per il costruttore base (quello della classe Person), in quanto il costruttore non viene ereditato.
    super(name, isCool, email, pets);
    this.programmingLanguages = pL;
  }

  getLanguages(): void {
    for (let i = 1; i < 4; i++) {
      console.log("Block statement execution no." + i);
    }

    for (let index in this.programmingLanguages) {
      console.log(index);
      console.log(this.programmingLanguages[index]);
    }

    for (let language of this.programmingLanguages) {
      console.log("Programmo in " + language);
    }
  }
}

const developer = new Programmer("Sergio", true, "sergio@e.com", 1, [
  "javascript",
  "php",
  "java",
  "c#",
]);

console.log("My name is " + developer.name);
developer.sayMyName();
developer.getLanguages();

interface KeyPair {
  key: number;
  value: string;
}

let kv1: KeyPair = { key: 1, value: "Steve" }; // OK

console.log(kv1.value + " " + kv1.key);

interface KeyValueProcessor {
  (key: number, value: string): void;
}

function addKeyValue(key: number, value: string): void {
  console.log("addKeyValue: key = " + key + ", value = " + value);
}

function updateKeyValue(key: number, value: string): void {
  console.log("updateKeyValue: key = " + key + ", value = " + value);
}

let kvp: KeyValueProcessor = addKeyValue;
kvp(1, "Bill"); //Output: addKeyValue: key = 1, value = Bill

kvp = updateKeyValue;
kvp(2, "Steve"); //Output: updateKeyValue: key = 2, value = Steve

interface IPerson {
  name: string;
  gender: string;
}

/*
interface IEmployee extends IPerson {
  empCode: number;
}

let empObj: IEmployee = {
  empCode: 6,
  name: "Bill",
  gender: "Male",
};

console.log(empObj.name + " " + empObj.empCode);
*/

interface IEmployee {
  empCode: number;
  name: string;
  getSalary: (empCode: number) => number;
}

class Employee implements IEmployee {
  empCode: number;
  name: string;
  salary: number = 0;

  constructor(code: number, name: string) {
    this.empCode = code;
    this.name = name;
  }

  setSalary(codiceImpiegato: number, salarioImpiegato: number): void {
    if (codiceImpiegato === this.empCode) {
      this.salary = salarioImpiegato;
    }
  }

  getSalary(codiceImpiegato: number): number {
    let localSalary: number = 0;
    if (codiceImpiegato === this.empCode) {
      return this.salary;
    } else {
      console.log("Salario sconosciuto per code " + codiceImpiegato);
    }
    return localSalary;
  }
}

let emp = new Employee(1, "Steve");
console.log("Setto salario per  " + emp.name);
emp.setSalary(1, 50000);
console.log("Il tuo salario " + emp.getSalary(1));

let emp2 = new Employee(3, "Mario");
console.log("Setto salario per " + emp2.name);
emp2.setSalary(3, 15000);
console.log("Il tuo salario " + emp2.getSalary(3));

console.log("Il tuo salario " + emp2.getSalary(6));

function isString(mioParametro: any) : mioParametro is string {
    return typeof mioParametro === "string";
}

let miaStringa: string ="ciao";
let mioNumero: number = 81;

console.log (miaStringa + " è stringa? "+isString(miaStringa));
console.log (mioNumero + " è stringa? "+isString(mioNumero));

if (isString(miaStringa))
{
    console.log ("Scrivo un testo");
}