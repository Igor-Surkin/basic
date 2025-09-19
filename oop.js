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
    withdraw(amount) {
        if(amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Снято: ${amount}. Новый баланс:${this.#balance}`);
        } else {
            console.log('Недостаточно средств или неверная сумма');
        }
    }


    // приватный метод для получения баланса
    #getBalance() {
        return this.#balance;

    
}
}
const myAccount = new BankAccount(100);
myAccount.deposit(50);
myAccount.withdraw(30);
// console.log(myAccount.#balance); Ошибка: приватное свойство
// myAccount.#getBalance; //  Ошибка: приватный метод

// 3. Наследование (Inheritance)
// наследование -- создание нового класса на основе существующего

console.log('---Наследование---');

class Dog extends Animal {
    constructor(name, age, breed) {
        // super - вызов конструктора родительского класса
        super(name, age);
        this.breed = breed; // добавляем своё, новое свойство
    }
    // переопределение метода speak
    speak() {
        console.log(`${this.name} лает: гав-гав.`);
    }

    // Можно вызывать и родительский метод внутри дочернего
    displayInfo() {
        super.displayInfo(); //родительский
        console.log(`Порода: ${this.breed}`);
    }
}

const newDog = new Dog ("Бобик", 5, "Овчарка");
newDog.displayInfo(); // вызывает оба метода: родительский и дочерний.
newDog.speak(); // Вызовет переопределённый метод

// 4. Полиморфизм
console.log("---Полиморфизм---");
class Cat extends Animal {
    // переопределим метод speak.
    speak() {
        console.log(`${this.name} мяукает: Мяуу!`);
    }
}
const myCat = new Cat("Васька", 2);
// Создадим массив из разных объектов и вызовем один и тот же метод
const animals = [myCat, newDog, new Animal("Нечто", 1)];
// Проходим по массиву и вызываем один и тот же метов speak()
// в зависимости от класса объекта будет вызвана своя реализация этого метода
animals.forEach(animal => {
animal.speak();
}); 