/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    let capitalizeString = '';
    for (let i = 0; i < str.length; i++) {
        capitalizeString += (i === 0 || str[i - 1] === ' ') ? str[i].toUpperCase() : str[i];
    }
    return capitalizeString;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('Испробовать Их Все Должны Вы'));
console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize(' '));
console.log(capitalize('слово '));
console.log(capitalize('')); 