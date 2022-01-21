console.log("Um string literal pode ficar entre aspas duplas");
console.log('Um string literal pode ficar entre aspas simples');
console.log(`Um string literal pode ficar entre crases`);

console.log("concatenação e interpolação:");
const num = 14.5;
console.log("O valor do produto é " + num);
console.log('O valor do produto é ' + num);
console.log(`O valor do produto é ${num}`);

console.log("Conversão entre number e string");

const str1 = num.toString();
console.log(`Tipo de ${str1}: ${typeof str1}`);

const str2 = num.toFixed(2);//muda o tipo para string
console.log(`Tipo de ${str2}: ${typeof str2}`);

//converter string para número
const num1 = Number("14.5");
console.log(`Tipo de ${num1}: ${typeof num1}`);

//parse int
const num2 = parseInt("21");
console.log(`Tipo de ${num2}: ${typeof num2}`);

//converter para outras bases base hexadecimal 16
const num3 = parseInt("21", 16);
console.log(`Tipo de ${num3}: ${typeof num3}`);

//converte decimal
const num4 = parseFloat("21.34", 10);
console.log(`Tipo de ${num4}: ${typeof num4}`);
/////////////////////////////////////////////////
//Funções de Strings
const str = "Maria Silva  ";
console.log(`const str = "Maria Silva  "`);

//Maiúsculo - Minúsculo
console.log(`toLowerCase: ${str.toLowerCase()}`);
console.log(`toUpperCase: ${str.toLocaleUpperCase()}`);

//pegar um item na posição do vetor
console.log(`charAt: ${str.charAt(3)}`);
console.log(`charAt: ${str[3]}`);

//Replace
//trocar só uma ocorrência onde for i por cifrão
console.log(`replace: ${str.replace("i", "$")}`);

//trocar todas as ocorrências onde for i por cifrão
console.log(`replace: ${str.replace(/i/g, "$")}`);

//descobrir o tamanho do vetor
console.log(`length: ${str.length}`);

//pesquisar no vetor a primeira ocorrência com i
console.log(`indexOf: ${str.indexOf("i")}`);

//pesquisar no vetor a última ocorrência com i
console.log(`lastIndexOf: ${str.lastIndexOf("i")}`);

//recortar a string a partir da posição três
console.log(`substring: ${str.substring(3)}`);

//recortar a string a partir da posição três até a 9
console.log(`substring: ${str.substring(3, 9)}`);

//recortar mês da data
const data = "14/10/2021";

const mes = Number(data.substring(3, 5));
console.log(mes);

//trocar ponto por vírgula 
const valor = 200.99
const novoValor = valor.toString().replace(".", ",");
console.log(novoValor);

//gera um novo string sem espaço em branco no início e no fim
console.log(`trim:${str.trim()}`);
