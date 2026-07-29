import * as taxService from './TaxService.js';
import * as pensionService from './PensionService.js';

export function calculateNetSalary(employee){
    const tax = taxService.calculateTax(employee.salary);
    const pension = pensionService.calculateDiscount(employee.salary);

    return (employee.salary - tax - pension).toFixed(2);
}