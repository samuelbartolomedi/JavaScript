export default function Employee(name, salary) {
    this.name = name.trim();
    this.salary = (salary).toFixed(2);
}