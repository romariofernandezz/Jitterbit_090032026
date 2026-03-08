/* 8. Escreva uma função em JavaScript chamada “somaImpares” que recebe um número inteiro
positivo “n” como parâmetro e retorna a soma de todos os números ímpares de 1 até n. */

function somaImpares(n) {
    let soma = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            soma += i;
        }
    }

    return soma;
}

/*9. Escreva uma função chamada” inverterPalavra” que recebe uma string como parâmetro e retorna a
string com as letras invertidas. */

function inverterPalavra(palavra) {
    return palavra.split('').reverse().join('');
}


/*10. Considere o seguinte trecho de código em JavaScript que tenta realizar a divisão de dois
números: */

function dividirNumeros(number1, number2) {
try
{
if (number2 === 0)
{
throw new Error("Divisão por zero não é permitida.");
}
return number1 / number2;
}
catch (error)
{
return "Erro: " + error.message;
}
}

/*Escreva abaixo o resultado retornado por cada função: */

console.log(dividirNumeros(20, 2));

R: 10

console.log(dividirNumeros(6, 0)); 

R: Erro: Divisão por zero não é permitida.

console.log(dividirNumeros(21,3));

R: 7


/*11. */