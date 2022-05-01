/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
   let count = 0
   const newArr = []
   for(let i = 1; i <= num; i++) {
       count += 1
    newArr.push(count)
}
    for(let k = 0; k < newArr.length; k++) {
        if(newArr[k] % 3 === 0 && newArr[k] % 5 === 0) {
            newArr[k] = 'fizzbuzz'
        }
        if(newArr[k] % 3 === 0) {
            newArr[k] = 'fizz'
        }
        if(newArr[k] % 5 === 0) {
            newArr[k] = 'buzz'
        }
        console.log(newArr[k])
    }
    return newArr
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));