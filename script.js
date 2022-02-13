//Tipos primitivos

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = 'Christiane';
console.log(typeof(nome));

//function
var funcao = function() {}
console.log(typeof(funcao));


//como declarar
var variavel = 'Christiane';
//podemos alterar a variavel com outro valor
variavel = 'Arthur';
console.log(variavel);

//let
let variavel2 = 'Christiane';
variavel2 = 'Alex';
console.log(variavel2);


//const
const constante = 'Christiane';
//constante = 'Bia';
console.log(constante);

//escopo global
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);

}

escopoLocal();


//atribuiçao
var atribuicao = 'christiane';

//comparacao
var comparacao = '0' == 0;
console.log(comparacao);

//comparacao identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);


//Operadores aritméticos,

//adicao
var adicao =  1 + 1;
console.log(adicao);

//subtracao
var subtracao 2 - 1;
console.log(subtracao);

//divisao real
var divisaoReal = 6 / 2;

//divisao inteira
var divisaoInteira = 45 % 2;
console.log(divisaoInteira);

//potencializacao
var potencializacao = 2 ** 4;
console.log(potencializacao);

//multiplicacao 
var multiplicacao = 2 * 3;
console.log(multiplicacao);


//Operadores relacionais 


//maior que 
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que 
var menorQue = 4 < 2;
console.log(menorQue);

//maior ou igual a 
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//menor ou igaul a 
var menorOuIgual =  5 <= 2;
console.log(menorOuIgual);


//Operadores lógicos

// operadores && "e"
var e =  true && false;
console.log(e);

//operadores || "ou"
var ou = false || false;
console.log(ou);

//operadores ! "não"
var nao = !true;
console.log(nao);


