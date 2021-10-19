/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    return str.split(' ').map(function (item) {
        return item === '' ? '' : item[0].toUpperCase() + item.substring(1);
    }).join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('Испробовать Их Все Должны Вы'));
console.log(capitalize('молодость всё простит'));
console.log(capitalize(' '));
console.log(capitalize('слово '));
console.log(capitalize(''));
console.log(capitalize('молодость  всё  простит'));