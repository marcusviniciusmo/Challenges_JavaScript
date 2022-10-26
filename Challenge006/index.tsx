/* 
  Write a function that takes a number as a parameter. If the number is even,
  returns "true" and if odd, returns "false".

  Escreva uma funcao que recebe um número como parâmetro. Se o número for par,
  retorna "true" e se for ímpar, retorna "false".

  Src: https://www.instagram.com/p/CbZrB1NAVoQ/
*/

/*
  OUTPUT:

  myFunction(8); // true
  myFunction(-10); // true
  myFunction(7); // false
  myFunction(-41); // false
*/

function Challenge006(num) {
  return num % 2 == 0;
};

console.log(`Example 1: ${Challenge006(8)}`);
console.log(`Example 2: ${Challenge006(-10)}`);
console.log(`Example 3: ${Challenge006(7)}`);
console.log(`Example 4: ${Challenge006(-41)}`);