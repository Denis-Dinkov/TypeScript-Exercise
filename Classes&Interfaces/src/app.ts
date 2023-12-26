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
}

const accounting = new Department("Accounting");
accounting.addEmployee("Max");
accounting.printEmplyees();
accounting.addEmployee("Wanko");
accounting.printEmplyees();

// accounting.employees[3] = "Ne"; // very bad practice
