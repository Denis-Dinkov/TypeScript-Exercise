interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let person: Person;

person = {
  name: "Wanko",
  age: 1,

  greet(phrase) {
    console.log(`${phrase} ${this.name}`);
  },
};

person.greet("My name is");
