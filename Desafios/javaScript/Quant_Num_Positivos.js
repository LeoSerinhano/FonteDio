/*
Crie um programa que leia 6 valores, os quais poderão ser negativos e/ou positivos. 
Em seguida, apresente a quantidade de valores positivos digitados.
*/

let quantPos = 0;
let i = 0;
let valor;
while (i < 6) {

    valor = [7, -5, 6, -3.4, 4.6, 12];//parseFloat(gets())
    if (valor[i] >= 0) {
        quantPos += 1;
    }
    i += 1;
}
console.log(quantPos + " valores positivos");