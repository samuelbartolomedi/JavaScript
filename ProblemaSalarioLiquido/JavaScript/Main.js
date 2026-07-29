import Employee from './Models/Employee.js';
import * as salaryService from './Services/SalaryService.js';

const employeeData = document.getElementById('salaryInput')
                             .innerHTML.split("\n");

const employee = new Employee(employeeData[0],
                              parseFloat(employeeData[1]));

const netSalary = salaryService.calculateNetSalary(employee);

console.log(`Employee: ${employee.name}`);
console.log(`Gross Salary: ${employee.salary}`);
console.log(`Net Salary: ${netSalary}`);