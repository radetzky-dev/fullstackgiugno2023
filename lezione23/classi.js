var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(name, isCool, email, pets, pL) {
        var _this = 
        // La chiamata a super deve fornire tutti i parametri per il costruttore base (quello della classe Person), in quanto il costruttore non viene ereditato.
        _super.call(this, name, isCool, email, pets) || this;
        _this.programmingLanguages = pL;
        return _this;
    }
    Programmer.prototype.getLanguages = function () {
        for (var i = 1; i < 4; i++) {
            console.log("Block statement execution no." + i);
        }
        for (var index in this.programmingLanguages) {
            console.log(index);
            console.log(this.programmingLanguages[index]);
        }
        for (var _i = 0, _a = this.programmingLanguages; _i < _a.length; _i++) {
            var language = _a[_i];
            console.log("Programmo in " + language);
        }
    };
    return Programmer;
}(Person));
var developer = new Programmer("Sergio", true, "sergio@e.com", 1, [
    "javascript",
    "php",
    "java",
    "c#",
]);
console.log("My name is " + developer.name);
developer.sayMyName();
developer.getLanguages();
var kv1 = { key: 1, value: "Steve" }; // OK
console.log(kv1.value + " " + kv1.key);
function addKeyValue(key, value) {
    console.log("addKeyValue: key = " + key + ", value = " + value);
}
function updateKeyValue(key, value) {
    console.log("updateKeyValue: key = " + key + ", value = " + value);
}
var kvp = addKeyValue;
kvp(1, "Bill"); //Output: addKeyValue: key = 1, value = Bill
kvp = updateKeyValue;
kvp(2, "Steve"); //Output: updateKeyValue: key = 2, value = Steve
var empObj = {
    empCode: 6,
    name: "Bill",
    gender: "Male",
};
console.log(empObj.name + " " + empObj.empCode);
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.salary = 0;
        this.empCode = code;
        this.name = name;
    }
    Employee.prototype.setSalary = function (codiceImpiegato, salarioImpiegato) {
        if (codiceImpiegato === this.empCode) {
            this.salary = salarioImpiegato;
        }
    };
    Employee.prototype.getSalary = function (codiceImpiegato) {
        var localSalary = 0;
        if (codiceImpiegato === this.empCode) {
            return this.salary;
        }
        else {
            console.log("Salario sconosciuto per code " + codiceImpiegato);
        }
        return localSalary;
    };
    return Employee;
}());
var emp = new Employee(1, "Steve");
console.log("Setto salario per  " + emp.name);
emp.setSalary(1, 50000);
console.log("Il tuo salario " + emp.getSalary(1));
var emp2 = new Employee(3, "Mario");
console.log("Setto salario per " + emp2.name);
emp2.setSalary(3, 15000);
console.log("Il tuo salario " + emp2.getSalary(3));
console.log("Il tuo salario " + emp2.getSalary(6));
