/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  const wordsUpper = str.toLowerCase().split(" ");
  const newArr = [];
  for (let i = 0; i < wordsUpper.length; i++) {
    newArr.push(wordsUpper[i].charAt(0).toUpperCase() + wordsUpper[i].slice(1));
  }
  return newArr.join(" ");
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize("молодость всё простит")); // "Молодость Всё Простит"
