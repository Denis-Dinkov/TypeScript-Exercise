class Department {
  // name: string;
  private employees: string[] = [];

  constructor(private readonly name: string, public id: string) {}

  describe(this: Department) {
    // this.name= "asdasda"
    console.log(`Department: ${this.name} ${this.id}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmplyees(this: Department) {
    console.log(this.employees);
    console.log(this.employees.length);
  }
  pepsiHello() {
    console.log("I'm Pepsi the Pepilota");
  }

  reverseWords(sentence: string) {
    const words = sentence.split(" ");
    const reversedWords = words.reverse();
    const reversedSentence = reversedWords.join(" ");
    console.log(reversedSentence);
  }
}

const accounting = new Department("Accounting", "123");
accounting.describe();
accounting.addEmployee("peshi");
accounting.printEmplyees();
// accounting.employees[3] = "Ne"; // very bad practice
