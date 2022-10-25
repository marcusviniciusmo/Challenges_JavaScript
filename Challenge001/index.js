/* 
  Write a function that takes two values, "a" and "b", as parameters. This
  function should return true if both values are the same and of the same type.
  Otherwise, false.

  Escreva uma funcao que recebe dois valores, "a" e "b", como parâmetros. Essa
  função deve retornar true se os dois valores forem iguais e do mesmo tipo.
  Caso contrário, false.

  Src: https://www.instagram.com/p/CbHpCtjtdeW/
*/

/*
  OUTPUT:

  myFunction(2, 3); // return false
  myFunction(3, 3); // return true
  myFunction(1, "1"); // return false
  myFunction("10", "10"); // return true
*/

function Challenge001(a, b) {
  return a === b;
};

console.log(`Example 1: ${Challenge001(2, 3)}`);
console.log(`Example 2: ${Challenge001(3, 3)}`);
console.log(`Example 3: ${Challenge001(1, "1")}`);
console.log(`Example 4: ${Challenge001("10", "10")}`);