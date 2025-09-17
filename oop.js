// парадигма програмирования, которая использует "объекты" для представления данных
// и методов для работы с этими данными.

//1. Класс и Объект (Class & Object)
//класс - "чертёж" для создания объектов
//объект - экземпляр класса с собственными данными
//object - instance of class

class Animal {
    // конструктор = специальный метод
    // для создания и инициализации объекта
    constructor(name, age) {
        // this - ссылка на текущий объект
        this.name = name;
        this.age = age;
    }
    // метод - это функция внутри объекта
    speak() {
        console.log(`${this.name} издаёт какой то звук.`);
    }
    displayInfo() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
    }
}
// создание объектов (экземпляров класса)
const genericAnimal = new Animal('Some animal', 5);
const myDog = new Animal ("Шарик", 8);
genericAnimal.displayInfo();
myDog.displayInfo();
myDog.speak();

// Инкапсуляция
// инкапсуляция - скрытие внутренней реализации от внешнего мира
// или же - объединение данных и методов
// и работы с этими данными в одном классе
console.log('---Инкапсуляция---');
class BankAccount {
    //# означает, что свойство приватное
    #balance = 0; //приватное свойство
    constructor(initialBalance) {
        if(initialBalance > 0) {
            this.#balance = initialBalance
        }
    }
    // публичный метод для внесения денег
    deposit(amount) {
        this.#balance += amount;
        console.log(`Внесено: ${amount}. Новый баланс: ${this.#balance}`);
    } 
    // публичный метод для снятия денег
    withdraw() {
        if(amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Снято: ${amount}. Новый баланс:${this.#balance}`);
        } else {
            console.log('Недостаточно средств или неверная сумма');
        }
    }
}