/* 
  Write a function that takes two parameters (fullname, flag). If the "flag"
  is equal to "firstname", it must return only the first word of the parameter
  "fullname".
  If "flag" is equal to "lastname", it must return all the text except the
  first word of the "fullname" parameter.
  If the "flag" parameter is empty or "fullname" contains only one word,
  just return the contents of "fullname".

  Escreva uma funcao que recebe dois parâmetros (fullname, flag). Se a "flag"
  for igual a "firstname", deve retornar apenas a primeira palavra do parâmetro
  "fullname".
  Se a "flag" for igual a "lastname", deve retornar todo o texto, exceto a
  primeira palavra do parâmetro "fullname".
  Se o parâmetro "flag" for vazio ou "fullname" conter apenas uma palavra,
  apenas retornar o conteúdo de "fullname".

  Src: https://www.instagram.com/p/CbXGOzmML3z/
*/

/*
  OUTPUT:

  myFunction("John Williams Smith", "firstname"); // John
  myFunction("John Williams Smith", "lastname"); // Williams Smith
  myFunction("John Williams Smith"); // John Williams Smith
  myFunction("John", "lastname"); // John
*/

function Challenge005(fullname, flag = "") {
  const names = fullname.split(' ');

  return flag.length == 0 || names.length <= 1
    ? fullname
    : flag === "firstname"
      ? names[0]
      : names.slice(1).join(" ");
};

console.log(`Example 1: ${Challenge005("John Williams Smith", "firstname")}`);
console.log(`Example 2: ${Challenge005("John Williams Smith", "lastname")}`);
console.log(`Example 3: ${Challenge005("John Williams Smith")}`);
console.log(`Example 4: ${Challenge005("John", "lastname")}`);