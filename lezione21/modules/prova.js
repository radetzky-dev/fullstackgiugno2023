export default function createPerson ()
{
    return "Mario Rossi";
}

function helloWorld()
{
    console.log ("ciao mondo");
}

const foo = Math.PI + Math.SQRT2;

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }

    cosaGuidi()
    {
        return this.name + " del "+this.year;
    }
  }


export { Car, helloWorld, foo };

