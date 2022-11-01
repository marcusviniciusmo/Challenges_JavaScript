/* 
  Write a function that takes two arrays as parameters. return a single
  array containing the values ​​of the two concatenated arrays, removing values
  duplicates, if any.

  Escreva uma funcao que recebe dois arrays como parâmetros. Retorne um único
  array contendo os valores dos dois arrays concatenados, removendo valores
  duplicados, caso existam.

  Src: https://www.instagram.com/p/Cbr2Jx5se19/
*/

/*
  OUTPUT:

  myFunction([1, 2, 3], [3, 4, 5]); // [1, 2, 3, 4, 5]
  myFunction([6, 7], [8, 9]); // [6, 7, 8, 9]
  myFunction([-2, -1, 0, 1, 2], [-1, 1, 2, 3]); // [-2, -1, 0, 1, 2, 3]
*/

function Challenge011(a, b) {
  return [...new Set(a.concat(b))];
};

console.log(`Example 1: ${Challenge011([1, 2, 3], [3, 4, 5])}`);
console.log(`Example 2: ${Challenge011([6, 7], [8, 9])}`);
console.log(`Example 3: ${Challenge011([-2, -1, 0, 1, 2], [-1, 1, 2, 3])}`);