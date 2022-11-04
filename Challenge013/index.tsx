/* 
  Write a function that takes two parameters, "min" and "max" (minimum and
    maximum), and returns an array of numbers according to the range. If
    informed (1, 5) the array will be:
  [1, 2, 3, 4, 5]

  Escreva uma funcao que recebe dois parâmetros, "min" e "max" (mínimo e máximo),
  e retorna um array de números de acordo com o intervalo. Caso seja informado
  (1, 5) o array será:
  [1, 2, 3, 4, 5]

  Src: https://www.instagram.com/p/Cbw2iKuLGZH/
*/

/*
  OUTPUT:

  myFunction(1, 5); // [1, 2, 3, 4, 5]
  myFunction(11, 18); // [11, 12, 13, 14, 15, 16, 17, 18]
  myFunction(-5, 5); // [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
*/

function Challenge013(a, b) {
  return a === b ? [a] : [a].concat(Challenge013(a + 1, b));
};

console.log(`Example 1: ${Challenge013(1, 5)}`);
console.log(`Example 2: ${Challenge013(11, 18)}`);
console.log(`Example 3: ${Challenge013(-5, 5)}`);