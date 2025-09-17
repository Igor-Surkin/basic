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