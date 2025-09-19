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