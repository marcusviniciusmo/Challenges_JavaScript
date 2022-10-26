/* 
  Write a function that takes six parameters, (a, b, c, d, e, f). Do the sum of
  "a" with "b". The result of the sum, subtract the value of "c". The result of
  subtraction, multiply by "d" and divide by "e". And finally, do the result
  raised to the power of "f".

  Escreva uma funcao que recebe seis parâmetros, (a, b, c, d, e, f). Faca a soma
  de "a" com "b". O resultado da soma, subtraia o valor de "c". O resultado da
  subtração, multiplique por "d" e faça a divisão por "e". E para finalizar,
  faça o resultado elevado a potência de "f".

  Src: https://www.instagram.com/p/CbMzDT5sTn5/
*/

/*
  OUTPUT:

  myFunction(6, 5, 4, 3, 2, 1); // 10.5
  myFunction(6, 2, 1, 4, 2, 3); // 2744
  myFunction(2, 3, 6, 4, 2, 3); // -8
*/

function Challenge003(a, b, c, d, e, f) {
  return (((a + b) - c) * d / e) ** f;
};

console.log(`Example 1: ${Challenge003(6, 5, 4, 3, 2, 1)}`);
console.log(`Example 2: ${Challenge003(6, 2, 1, 4, 2, 3)}`);
console.log(`Example 3: ${Challenge003(2, 3, 6, 4, 2, 3)}`);