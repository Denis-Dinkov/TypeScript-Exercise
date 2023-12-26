class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: ${this.name}`);
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

const accounting = new Department("Accounting");
accounting.addEmployee("Max");
accounting.printEmplyees();
accounting.addEmployee("Wanko");
accounting.printEmplyees();
accounting.reverseWords("Pepsi the pepilota");
// accounting.employees[3] = "Ne"; // very bad practice
