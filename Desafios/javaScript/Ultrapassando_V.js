/*
Como um bom desenvolvedor, você precisa fazer um programa que leia dois inteiros: R e V (devem ser lidos tantos valores para V quantos necessários, até que 
seja digitado um valor maior do que R para ele). Conte quantos números inteiros devem ser somados em sequência (considerando o R nesta soma) para que a 
soma ultrapasse a V o mínimo possível. Escreva o valor final da contagem.

*/

let R = parseInt(gets());
let V = 0;
let cont = 0;
let it = 0;


while(V <= R){
  V = parseInt(gets());
}


while(it <= V){
  it = R + it;
  R++;
  cont++;
}

console.log(cont);