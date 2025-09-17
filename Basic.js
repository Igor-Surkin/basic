// Файл для повторения основ программирования на JavaScript

// -----------------------------------------------------------------
// 1. ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ
// -----------------------------------------------------------------

// `var` - устаревший способ, имеет функциональную область видимости.
// Старайтесь избегать его использования в современном коде.
var oldStyleVar = "Это переменная, объявленная через var";

// `let` - современный способ, имеет блочную область видимости.
// Значение можно перезаписать.
let modernMutableVar = 10;
modernMutableVar = 15; // Значение изменено

// `const` - современный способ, блочная область видимости.
// Значение нельзя перезаписать (константа).
const constantVar = "Это значение нельзя изменить";
// constantVar = "Новое значение"; // -> вызовет ошибку TypeError

console.log("--- 1. Переменные ---");
console.log(oldStyleVar);
console.log("Значение let-переменной:", modernMutableVar);
console.log(constantVar);

// -----------------------------------------------------------------
// 2. ТИПЫ ДАННЫХ
// -----------------------------------------------------------------

// Простые (примитивные) типы данных
const stringType = "Текст (строка)"; // String
const numberType = 42; // Number (число)
const booleanType = true; // Boolean (логический тип: true или false)
const nullType = null; // Null (специальное значение "ничего" или "пусто")
let undefinedType; // Undefined (значение не присвоено)
const symbolType = Symbol("id"); // Symbol (уникальный и неизменяемый идентификатор)
const bigIntType = 1234567890123456789012345678901234567890n; // BigInt (для очень больших целых чисел)

// Сложные типы данных
// Массив (Array) - упорядоченная коллекция элементов
const arrayType = [1, "два", true, { name: "вложенный объект" }];

// Объект (Object) - неупорядоченная коллекция пар "ключ-значение"
const objectType = {
    name: "Алекс",
    age: 30,
    isStudent: false,
    "ключ с пробелом": "да, так можно"
};

console.log("\n--- 2. Типы данных ---");
console.log("String:", stringType);
console.log("Number:", numberType);
console.log("Boolean:", booleanType);
console.log("Null:", nullType);
console.log("Undefined:", undefinedType);
console.log("Symbol:", symbolType);
console.log("BigInt:", bigIntType);
console.log("Array:", arrayType);
console.log("Object:", objectType);
console.log("Доступ к свойству объекта:", objectType.name); // "Алекс"
console.log("Доступ к элементу массива:", arrayType[1]); // "два"


// -----------------------------------------------------------------
// 3. РАБОТА С МАССИВАМИ
// -----------------------------------------------------------------
const fruits = ["Яблоко", "Банан", "Апельсин"];
console.log("\n--- 3. Работа с массивами ---");
console.log("Исходный массив:", fruits);

// Добавить элемент в конец
// fruits.push("Манго"); // Corrected from potential over-escaping of newline
console.log("После push('Манго'):", fruits);

// Удалить последний элемент
const lastFruit = fruits.pop();
console.log("Удаленный элемент (pop):", lastFruit);
console.log("Массив после pop:", fruits);

// Доступ к элементу по индексу (индексы начинаются с 0)
console.log("Второй элемент (индекс 1):", fruits[1]);

// Длина массива
console.log("Длина массива:", fruits.length);


// -----------------------------------------------------------------
// 4. УСЛОВНЫЕ ОПЕРАТОРЫ
// -----------------------------------------------------------------
const age = 20;
console.log("\n--- 4. Условные операторы ---");

// if...else
if (age >= 18) {
    console.log("Вы совершеннолетний.");
} else {
    console.log("Вы несовершеннолетний.");
}

// if...else if...else
const score = 85;
if (score > 90) {
    console.log("Оценка: Отлично");
} else if (score > 75) {
    console.log("Оценка: Хорошо");
} else {
    console.log("Оценка: Удовлетворительно");
}

// switch (строгое сравнение ===)
const fruit = "Яблоко";
switch (fruit) {
    case "Банан":
        console.log("Это банан.");
        break;
    case "Яблоко":
        console.log("Это яблоко.");
        break;
    default:
        console.log("Неизвестный фрукт.");
}


// -----------------------------------------------------------------
// 5. ЦИКЛЫ
// -----------------------------------------------------------------
console.log("\n--- 5. Циклы ---");

// Цикл `for` (классический)
console.log("Цикл for:");
for (let i = 0; i < 3; i) {
    console.log(`Итерация номер ${i}`);
}

// Цикл `while` (с предусловием)
console.log("Цикл while:");
let counter = 0;
while (counter < 3) {
    console.log(`Счетчик: ${counter}`);
    counter++;
}

// Цикл `do...while` (с постусловием, выполнится хотя бы раз)
console.log("Цикл do...while:");
let j = 5;
do {
    console.log(`j = ${j}, этот цикл выполнился один раз.`);
    j++;
} while (j < 3);


// Перебор элементов массива
const colors = ["красный", "зеленый", "синий"];
console.log("Перебор массива (for...of):");
// `for...of` - для перебора значений итерируемых объектов (массивы, строки)
for (const color of colors) {
    console.log(color);
}

// Перебор свойств объекта
const user = { name: "Иван", role: "admin" };
console.log("Перебор свойств объекта (for...in):");
// `for...in` - для перебора ключей (свойств) объекта
for (const key in user) {
    console.log(`Ключ: ${key}, Значение: ${user[key]}`);
}

// Метод массива `forEach`
console.log("Перебор массива (forEach):");
colors.forEach((color, index) => {
    console.log(`Элемент ${index}: ${color}`);
});


// -----------------------------------------------------------------
// 6. РЕКУРСИЯ
// -----------------------------------------------------------------
console.log("\n--- 6. Рекурсия ---");

// Рекурсивная функция - это функция, которая вызывает саму себя.
// Пример: вычисление факториала числа (n!) 
// 5! = 5 * 4 * 3 * 2 * 1

function factorial(n) {
    // Базовый случай: условие выхода из рекурсии
    if (n === 0 || n === 1) {
        return 1;
    }
    // Рекурсивный шаг: функция вызывает саму себя с измененным аргументом
    else {
        return n * factorial(n - 1);
    }
}

const number = 21;
const result = factorial(number);
console.log(`Факториал числа ${number} равен ${result}.`);
