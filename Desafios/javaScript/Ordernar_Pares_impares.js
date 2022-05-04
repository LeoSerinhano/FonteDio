/*
Crie um programa onde você receberá valores inteiros não negativos como entrada.

Ordene estes valores de acordo com o seguinte critério:

Primeiro os Pares
Depois os Ímpares
Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente.
*/

let totalItems = [10,4,32,34,543,3456,654,567,87,6789,98];
let numeros = Array(totalItems);
let i = 0;

while ( i < totalItems ) {
    numero = parseInt(gets());	  
    if (numero >= 0 ) {
      numeros[i] = numero;
      i++;
    }
}
pares = numeros.filter(value => value % 2 == 0);
impares = numeros.filter(value => value % 2 != 0);	

pares.sort((a, b) =>a-b);
impares.sort((a, b) =>b-a);


pares.forEach(x => console.log(x));
impares.forEach(x => console.log(x));