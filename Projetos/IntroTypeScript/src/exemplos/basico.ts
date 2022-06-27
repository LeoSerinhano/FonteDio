const button = document.getElementById('button');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

function adiconarNumero(numero1: number, numero2: number, devPrinter: boolean, cFrase: String) {
   let soma = numero1 + numero2
    if(devPrinter){
        console.log(cFrase +" "+ soma);
        //console.log(`${cFrase}${soma}`);
    }
    return numero1 + numero2;
}

let devPrinter = true;
let cFrase = "O Valor é"

if (button) {

    button.addEventListener('click', () => {
        if (input1 && input2) {
        }
        console.log(adiconarNumero(Number(input1), Number(input2),devPrinter,cFrase));
    });
}