/*
 * Задача 3: «Развернуть слова в предложении»
 *
 * Напишите функцию reverseWords(str), принимающую на вход строку.
 * Функция должна вернуть новую строку, расставив слова в обратном
 * порядке.Если в строке есть знаки препинания, их можно удалить
 * или оставить — на ваше усмотрение.
 *
*/

function reverseWords(str) {
    const sourceString = str.replace(/[,]/g, '');
    const sourceArray = sourceString.split(' ');
    let reverseString = ''
    let reverseArray = [];
    for (let i = sourceArray.length-1; i >= 0; i-- ) {
        reverseArray.push(sourceArray[i]);
    }
    reverseString = reverseArray.join(' ');
    return reverseString;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(reverseWords('всегда много путей достичь цель есть')); // "есть цель достичь путей много всегда"
console.log(reverseWords('испробовать их все должны вы')); // "вы должны все их испробовать"