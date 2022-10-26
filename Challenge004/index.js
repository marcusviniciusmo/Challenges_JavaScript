/* 
  Write a function that takes two parameters (text, flag). If the "flag" is
  equal to "start", it must return the first 3 characters of the "text"
  parameter.
  If "flag" is equal to "end", it must return the last 3 characters of the
  "text" parameter.
  If the "text" parameter is less than 3 characters, just return the "text".

  Escreva uma funcao que recebe dois parâmetros (text, flag). Se a "flag" for
  igual a "start", deve retornar os 3 primeiros caracteres do parâmetro "text".
  Se a "flag" for igual a "end", deve retornar os 3 últimos caracteres do
  parâmetro "text".
  Se o parâmetro "text" tiver menos de 3 caracteres, apenas retornar o "text".

  Src: https://www.instagram.com/p/CbPYB8_r9qN/
*/

/*
  OUTPUT:

  myFunction("abcdefg", "start"); // abc
  myFunction("abcdefg", "end"); // efg
  myFunction("ab", "end"); // ab
  myFunction("abcdefg"); // abc
*/

function Challenge004(text, flag = "start") {
  return text.length < 3 ? text : flag === "start" ? text.slice(0, 3) : text.slice(-3);
};

console.log(`Example 1: ${Challenge004("abcdefg", "start")}`);
console.log(`Example 2: ${Challenge004("abcdefg", "end")}`);
console.log(`Example 3: ${Challenge004("ab", "end")}`);
console.log(`Example 4: ${Challenge004("abcdefg")}`);