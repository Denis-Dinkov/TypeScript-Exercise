class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "max");
    this.admins = admins;
  }
}

class AcountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please add value");
    }
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, "accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name == "Max") return;

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["dasda", "asdasdas"]);
const accounting = new AcountingDepartment("d2", []);

accounting.addReport("something went wrong");
accounting.mostRecentReport = "";
accounting.addEmployee("Vanio");
accounting.addEmployee("Max");
console.log(accounting);
accounting.printEmployeeInformation();
