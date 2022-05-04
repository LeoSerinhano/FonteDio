/*
Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D 
segundo a fórmula: DIFERENCA = (A * B - C * D).
*/

import java.io.IOException;
import java.util.Scanner;

public class Desafio {
    public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);
        int a = leitor.nextInt();
        int b = leitor.nextInt();
        int c = leitor.nextInt();
        int d = leitor.nextInt();
         
        int DIFERENCA = ((a * b ) - (c * d));
       //complete o codigo
        System.out.println("DIFERENCA = " + DIFERENCA);
    }
}