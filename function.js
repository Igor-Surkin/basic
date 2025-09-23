// Основные способы объявления функций

console.log("---1. Function declaration---");
// можно вызывать до объявления функции, так как оно поднимается в начало области видимости
console.log(sum(5, 3));
function sum(a, b) {
    return a + b;
}

console.log("---2. Function Expression");
// нельзя вызывать до объявления.
// Функция создаётся, когда до этого места доходит обработчик кода
// console.log(sumExpression(9, 15)); так нельзя делать!!
const sumExpression = function (a, b) {
    return a + b;
};

console.log(sumExpression(9, 15));
// функция также не поднимается
// главная особенность - не имеет своего контекста "this"
console.log("---3. Стрелочная функция-----");

const sumArrow = (a, b) => {
    return a + b;
};

console.log(sumArrow(3, 7));

// короткий синтаксис
const multiply = (a, b) => a * b;
console.log(multiply(5, 7));
//Пример с this
const person = {
    name: "John",
    greetRegular: function() {
        // this - здесь это объект person
        console.log(`Hello from ${this.name} (regular)`);
    },
    greetArrow: () => {
        // у стрелочной функции нет своего this (контекста)
        console.log(`Hello from ${this.name} arrow`);
    }
}
person.greetRegular();
person.greetArrow();

// ПАРАМЕТРЫ ФУНКЦИЙ
console.log("----Параметры функций------");

// Парметры по умолчанию 

function greet(name= "Somebody") {
    console.log(`Welcome ${name}!`);
}
greet("Anna");
greet();
// REST params
// Собирают все переданные аргументы (параметры) в массив
function sumAll (...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}
console.log("Summa 1,2,3,4,5: ", sumAll(1,2,3,4,5));
// call-back - функции
// это функция, переданная в другую функцию в качестве аргумента
// классический пример callback
setTimeout(() => {
    console.log("это сообщение появится через 4 сек.");
}, 4000);
function operate (a, b, operationCallback) {
    return operationCallback(a, b);
}
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
console.log("Вызов колбеком add: ", operate(10, 5, add));
console.log("Вызов колбеком subtract: ", operate(10, 5, subtract));
console.log("----Замыкание----");
// Замыкания - комбинация функции и её окружения.
// проще - внутренняя функция "помнит" переменные внешней функции даже после того, как внешняя завершила работу.

function createCounter() {
    let count = 0; // эта переменная в лексич. окружении
    // внутренняя функция, которая будет возвращена
    return function(){
        count++;
        console.log(count);
        return count;
    };
}
const counter1 = createCounter();
counter1();
counter1();
const counter2 = createCounter();
counter2();
console.log("-----Самовызывающая функция------");
// IIFE - Immediately Invoked Function Expression

(function(){
    const secretMessage = "Это сообщение не доступно глобально, только внутри этой функции";
    console.log(secretMessage);

})();