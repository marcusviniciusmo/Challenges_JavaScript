/* 
  Write a function that takes an array "a" and a number "b" as parameters.
  Sum all array elements with "greater value" than 'b.

  Escreva uma funcao que recebe um array "a" e um número "b" como parâmetros.
  Faça a soma de todos os elementos do array com "valor maior" que 'b.

  Src: https://www.instagram.com/p/CbuQ2PKNCEm/
*/

/*
  OUTPUT:

  myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3); // 30
  myFunction([-14, -12, -5, 4, -4], -5); // 0
  myFunction([33, 45, 88, 105, 111], 99); // 216
*/

function Challenge012(a, b) {
  return a.reduce(function(prev, cur) {
    return cur > b ? prev + cur : prev;
  }, 0);
};

console.log(`Example 1: ${Challenge012([1, 2, 3, 4, 5, 6, 7, 8], 3)}`);
console.log(`Example 2: ${Challenge012([-14, -12, -5, 4, -4], -5)}`);
console.log(`Example 3: ${Challenge012([33, 45, 88, 105, 111], 99)}`);