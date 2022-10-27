/* 
  Write a function that takes two strings (a, b) as a parameter and returns the
  number of times the string "a" is used within "b".

  Escreva uma funcao que recebe duas strings (a, b) como parâmetro e retorna o
  número de vezes que a string "a" é utilizada dentro de "b".

  Src: https://www.instagram.com/p/CbcRg3SM3ks/
*/

/*
  OUTPUT:

  myFunction("a", "Quantas vezes o valor de 'a' ocorre aqui?"); // 5
  myFunction("as", "Quantas vezes o valor 'a' ocorre aqui?"); // 1
  myFunction("q", "Quantas vezes o valor de 'a' ocorre aqui?"); // 2
*/

function Challenge007(a, b) {
  /* 
    Usando Regex: É preciso utilizar a classe RegExp pra porder usar a variável,
    onde o primeiro parâmetro é a ocorrência, e o segundo as configurações: "g"
    pra buscar todas as ocorrências, e "i" pra ignorar maiúsculas e minúsculas.
  */
  return b.match(new RegExp(a, "gi")).length;
};

console.log(`Example 1: ${Challenge007("a", "Quantas vezes o valor de 'a' ocorre aqui?")}`);
console.log(`Example 2: ${Challenge007("as", "Quantas vezes o valor 'a' ocorre aqui?")}`);
console.log(`Example 3: ${Challenge007("q", "Quantas vezes o valor de 'a' ocorre aqui?")}`);