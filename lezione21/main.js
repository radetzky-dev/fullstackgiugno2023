import createPerson, { Car, helloWorld, foo } from "./modules/prova.js";

console.log(foo);
helloWorld();

const persona = createPerson();
console.log ("Io mi chiamo "+persona);

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Fiat", 2010);
console.log ("Guido una "+ myCar1.cosaGuidi());
console.log ("Guido una "+ myCar2.cosaGuidi());

//add node che mostrano cars
