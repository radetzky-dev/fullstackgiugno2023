var Person = /** @class */ (function () {
    function Person(name, isCool, email, pets) {
        this.name = name;
        this.isCool = isCool;
        this.email = email;
        this.pets = pets;
    }
    Person.prototype.sayMyName = function () {
        console.log("Sono cool? " + this.isCool);
        console.log("Your not Heisenberg, you're ".concat(this.name));
        this.email = "nuova@mail.com";
        console.log("Mail ? " + this.email);
    };
    return Person;
}());
var person1 = new Person("Danny", false, "dan@e.com", 1);
console.log("My name " + person1.name); // Fine
person1.pets = 7;
person1.sayMyName();
console.log("Numero animali " + person1.pets);
