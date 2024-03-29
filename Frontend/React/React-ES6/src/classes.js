/**
 * Classes are templates for creating objects in JavaScript, providing a blueprint for their structure and behavior.
 * @syntax -  class <ClassName>{}
 * @file classes.js
 * @author thesyscoder
 */

// create a simple class
class Car {
  constructor(brand) {
    this.brand = brand;
  }
}

// initialize the car class object

const mycar = new Car("Seltos");
console.log(mycar);

// Methods in class

class Employee {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }
  showEmployeeDetails() {
    console.log(`
    --- Employee Details --- \n
    id : ${this.id}
    name: ${this.name}
    salary: ${this.salary}
    `);
  }
}

// create the object of Employee class
const emp = new Employee(1234, "John", 874590);
emp.showEmployeeDetails();

/**
 * Inheritance defines as a subclass can inherit the properties and methods from another class.
 * @syntax - class <SubClass> extends <ParentClass>
 */

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} Make a sound.`);
  }
}

// child class to inherit the properties and methods

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks`);
  }
  displayBreed() {
    console.log(`${this.name} is a ${this.breed}`);
  }
}

const dog = new Dog("Buddy", "Barks");
dog.displayBreed();
dog.speak();
