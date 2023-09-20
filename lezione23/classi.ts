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
  "php", "java", "c#"
]);

console.log("My name is " + developer.name);
developer.sayMyName();
developer.getLanguages();
