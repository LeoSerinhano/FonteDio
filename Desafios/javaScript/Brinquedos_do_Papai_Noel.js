/*
Papai Noel todo ano pede ajuda aos elfos para coletar todas as cartinhas das crianças e saber com o quê presenteá-las. Porém, não são todas as crianças
que enviam as suas cartinhas e, como ele não quer deixar ninguém de fora, decidiu que vai presentear  mesmo quem não enviou a cartinha. 
Pensando em um gosto geral, decidiu dar um carrinho de brinquedo para os meninos, e uma boneca para as meninas.
*/

let criancas = gets();
let menina = 0;
let menino = 0;


for (let i = 0; i < criancas; i++){
  let nomeGenero = gets().split(" ");
  let genero = nomeGenero[1];

  if(genero === 'F'){
    menina++
  } 
  else{
    menino++
  }

}

console.log(menino + " carrinhos")
console.log(menina + " bonecas")