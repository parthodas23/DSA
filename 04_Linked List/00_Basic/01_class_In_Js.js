class Person {
  constructor(name, age) { // it's run automatically when you create a new obj.
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    return `Hello I'm ${this.name} and my age is ${this.age}`;
  }
}

// Instance --> meaning --> example

const a1 = new Person("Partha", 20);
const a2 = new Person("Emon", 19);
console.log(a1.greet());
console.log(a2.greet());
