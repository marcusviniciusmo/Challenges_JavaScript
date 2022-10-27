/* 
  Write a function that takes an array "a" and a value "b" as parameters. The
  function should remove all occurrences of "b" and return the filtered array.

  Escreva uma funcao que recebe um array "a" e um valor "b" como parâmetros. A
  função deve remover todas as ocorrências de "b" e retornar o array filtrado.

  Src: https://www.instagram.com/p/CbhZaZqsIqV/
*/

/*
  OUTPUT:

  myFunction([1, 2, 3], 2); // [1. 3]
  myFunction([1, 2, "3"], "3"); // [1, 2]
  myFunction(["1", false, 2, "3"], false); // ["1", 2, "3"]
  myFunction([5, 1, 2, 5, 3, 5], 5); // [1, 2, 3]
*/

function Challenge009(a, b) {
  return a.filter(item => item !== b);
};

console.log(`Example 1: ${Challenge009([1, 2, 3], 2)}`);
console.log(`Example 2: ${Challenge009([1, 2, "3"], "3")}`);
console.log(`Example 3: ${Challenge009(["1", false, 2, "3"], false)}`);
console.log(`Example 4: ${Challenge009([5, 1, 2, 5, 3, 5], 5)}`);