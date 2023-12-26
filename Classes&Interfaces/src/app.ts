class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: ${this.name}`);
  }
}

const accounting = new Department("Accounting");

// accounting.describe();

const accountingCopy = {
  name: "dasda",
  age: "312312321",
  describe: accounting.describe,
};
accountingCopy.describe();
