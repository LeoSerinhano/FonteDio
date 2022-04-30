/*
Você terá o desafio de escrever um programa que leia um valor inteiro N (1 < N < 1000). 
Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.
*/

let limit = 5; //parseInt(gets())

for (let i = 1; i <= limit; i++) {
  let X = i * 1;
  let Y = X * i;
  let Z = Y * i;

  //print(X + ' ' + Y + ' ' + Z);
  console.log(X + ' ' + Y + ' ' + Z);
}
