let nome = "Rapha"; // String
let idade = 33; // Number
let possuiFaculdade = true; // Boolean
let indefinido = undefined; // Undefined (explícita)
let indefinido2;
let stringVazia = "";
let nulo = null;
let carrinhoDeCompras = ["Arroz", "Ovos", "Café", true, 54]; // Array => Object
let pessoa = {
  nome: "Raphael",
  idade: 33,
  possuiFaculdade: true,
}; // Object

function criarTexto(nome) {
  return "Seu nome é " + nome;
} // Function

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof possuiFaculdade);
console.log(typeof indefinido);
console.log(typeof indefinido2);
console.log(typeof stringVazia);
console.log(typeof nulo);
console.log(typeof carrinhoDeCompras);
console.log(typeof pessoa);
console.log(typeof criarTexto);
