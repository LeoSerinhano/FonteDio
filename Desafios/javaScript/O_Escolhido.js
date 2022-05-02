/*
As aulas do Prof. Xavier estão dando o que falar até no exterior, pois ele ensina Algorítmos de um jeito diferente aos seus alunos. Uma universidade dos EUA,
que soube sobre o método do Prof. Xavier, quer selecionar um aluno para um intercâmbio no país. Para isso, ele possuem uma lista de inscrição com o número 
de cada aluno e sua nota. 
Para ajudá-los a encontrarem o melhor aluno que ganhará o intercâmbio, você deve desenvolver um programa. Só tem um detalhe, se a nota mais alta não for maior 
ou igual a 8, você deverá imprimir “Minimum note not reached”.
*/

let x = gets();
let matricula, maiorNota = 0;

for (i = 0; i < x; i++) {
  line = gets().split(" ")
  if (parseFloat(line[1]) >= 8 && parseFloat(line[1]) > maiorNota) {
    maiorNota = line[1];
    matricula = line[0];
  }
}


if (maiorNota >= 8) {
  print(matricula)
}
else {
  print("Minimum note not reached")
}
