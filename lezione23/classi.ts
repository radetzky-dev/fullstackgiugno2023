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
    this.email ="nuova@mail.com";
    console.log("Mail ? " + this.email);
  }
}

const person1 = new Person("Danny", false, "dan@e.com", 1);
console.log("My name " + person1.name); // Fine

person1.pets = 7;

person1.sayMyName();
console.log("Numero animali " + person1.pets);
