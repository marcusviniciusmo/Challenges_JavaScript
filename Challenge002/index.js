/* 
  Write a function that takes a parameter and returns the type of the value
  received in that parameter.

  Escreva uma funcao que recebe parâmetro e retorna o tipo do valor recebido
  nesse parâmetro.

  Src: https://www.instagram.com/p/CbKOQ11Lyd3/
*/

/*
  OUTPUT:

  myFunction(1); // number
  myFunction(false); // boolean
  myFunction({}); // object
  myFunction("Hello World"); // string
  myFunction(["Hello World"]); // object
*/

function Challenge002(a) {
  return typeof a;
};

console.log(`Example 1: ${Challenge002(1)}`);
console.log(`Example 2: ${Challenge002(false)}`);
console.log(`Example 3: ${Challenge002({})}`);
console.log(`Example 4: ${Challenge002("Hello World")}`);
console.log(`Example 5: ${Challenge002(["Hello World"])}`);