let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);

//undefined foi impresso pois não iniciamos as variáveis

nome = prompt("Qual teu nome?");
idade = prompt("Qual sua idade?");

console.log(typeof nome);
console.log(typeof idade);

// agora os tipos das variáveis foram definidos. idade ainda consta como string

console.log("Olá", nome, "você tem", idade, "anos");
