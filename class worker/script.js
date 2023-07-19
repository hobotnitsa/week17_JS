class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = Number(rate);
        this.days = Number(days);
    }
    getSalary() {
        return this.rate * this.days;
    }
}

const workerFrodo = new Worker('Frodo', 'Baggins', 10, 15);

console.log(workerFrodo.name);
console.log(workerFrodo.surname);
console.log(workerFrodo.rate);
console.log(workerFrodo.days);
console.log(workerFrodo.getSalary());
