/* 
  Write a function that receives an array "a" and an "order" flag with default
  value "asc". If the value of "order" is "asc" return the array sorted in order
  ascending and if "desc" return in descending order.

  Escreva uma funcao que recebe um array "a" e uma flag "order" com valor padrão
  "asc". Caso o valor de "order" seja "asc" retornar o array ordenado em ordem
  ascendente e caso seja "desc" retornar em ordem descendente.

  Src: https://www.instagram.com/p/CbpHzPNgJkB/
*/

/*
  OUTPUT:

  myFunction([2, 3, 1], "asc"); // [1, 2, 3]
  myFunction([6, 2, 8, 1 , 5], "desc"); // [8, 6, 5, 2, 1]
  myFunction(["uva", "maçã", "laranja"], "asc"); // ["laranja", "maçã", "uva"]
  myFunction(["t", "a", "s", "z", "m"]); // ["a", "m", "s", "t", "z"]
*/

function Challenge010(a, order = "asc") {
  return order === "asc" ? a.sort() : a.sort().reverse();
};

console.log(`Example 1: ${Challenge010([2, 3, 1], "asc")}`);
console.log(`Example 2: ${Challenge010([6, 2, 8, 1 , 5], "desc")}`);
console.log(`Example 3: ${Challenge010(["uva", "maçã", "laranja"], "asc")}`);
console.log(`Example 4: ${Challenge010(["t", "a", "s", "z", "m"])}`);