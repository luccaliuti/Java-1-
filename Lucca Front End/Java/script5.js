//tipos de variaveis 
// sensiveis a maiusculas e minusculas 
let num1=50;
let num2=50.05;
console.log(num1);
console.log(num2);

let str1="Senai";
let str2="Senai";
let str3="Senai";
console.log(str1);
console.log(str2);
console.log(str3);

//nomes de variaveis compostos
//hifens nao sao permitidos -> ex.:
//let primeiro-nome: "ANA MARIA"

let primeiroNome = "Lucca"
console.log(primeiroNome);

/*
explicção dos tipoa de variaveis 
-> const
-> var 
-> let
*/

//constante - nao podera receber outro valor 
const a =80;
console.log(a);

//var esta sendo substituida por let 
var nome, sobrenome, completo, dataAdm;
nome= "Lucca";
sobrenome="Liuti";
nomeCompleto= nome + "" + sobrenome;
console.log(nomeCompleto);
document.getElementById("texto").innerHTML = nomeCompleto;

dataAdm = 2009;
tempo = 2024-dataAdm;
document.getElementById("tempoEmpresa").innerHTML= tempo + " anos de empresa ";

var x,y,total;

x=45;
y=20;
total = x + y;
console.log("total")

//reatribuir outro valor para a variavel 

y=30;
console.log(y)

let d, z, resultado;

d=65;
z=10;
resultado= d * z;
console.log(z);// nesse momento z vale 15 

z=15;
console.log(z);// nesse momento z vale 20 

