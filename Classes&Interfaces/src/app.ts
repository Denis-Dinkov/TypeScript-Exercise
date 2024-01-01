interface Greetable {
  name: string;

  greet(phrase: string): void;
}
class Person implements Greetable {
  name: string;
  age: number = 30;
  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name} ${this.age}`);
  }
}
let person = new Person("Iwancho");

person.greet("My name is");
