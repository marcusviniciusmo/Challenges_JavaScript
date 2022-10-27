/* 
  Write a function that takes an array per parameter and removes the first 3
  array elements. If the array has less than 3 elements, return an array
  empty.

  Escreva uma funcao que recebe um array por parâmetro e remove os 3 primeiros
  elementos do array. Caso o array tenha menos de 3 elementos, retornar um array
  vazio.

  Src: https://www.instagram.com/p/Cbe0nm-sZe1/
*/

/*
  OUTPUT:

  myFunction([1, 2, 3, 4, 5]); // [4, 5]
  myFunction([5, 4, 3, 2, 1, 0]); // [2, 1, 0]
  myFunction([10, 20, 30]); // []
  myFunction([99, 100]); // []
*/

function Challenge008(a) {
  return a.length < 3 ? [] : a.slice(3);
};

console.log(`Example 1: ${Challenge008([1, 2, 3, 4, 5])}`);
console.log(`Example 2: ${Challenge008([5, 4, 3, 2, 1, 0])}`);
console.log(`Example 3: ${Challenge008([10, 20, 30])}`);
console.log(`Example 4: ${Challenge008([99, 100])}`);