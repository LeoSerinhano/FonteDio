/*
Faça um algoritmo para ler um número indeterminado de dados, contendo cada um, a idade de um indivíduo. O último dado, que não entrará nos cálculos, contém 
o valor de idade negativa. Calcular e imprimir a idade média deste grupo de indivíduos.
*/

import java.io.IOException;
import java.util.Scanner;

public class  Desafio {
	
    public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);
        int cont = 0;
        double soma = 0; 
        double n = 0;
        //complete o codigo
        while (n >= 0) {
            n = leitor.nextInt();
            if (n >= 0) { 
                soma = soma + n;
                cont++;
            }
        }
        double media = soma / cont;
        System.out.println(String.format("%.2f", media));
}