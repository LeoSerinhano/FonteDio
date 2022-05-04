/*
Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos 
valores informados são positivos e quantos valores informados são negativos. Considere que o número zero é positivo, mas não pode ser considerado como 
positivo ou negativo.
*/

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class minhaClasse {
	
    public static void main(String[] args) throws IOException {
        String linha;
        int positivo = 0 ; 
        int negativo = 0;
        int pares = 0; 
        int impares = 0;
        int x = 0;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        for ( int i = 0; i < 5; i++) {
            linha = br.readLine();
            x = Integer.parseInt(linha);
          
          if(x%2==0){
        	  pares++;
        	}
        	else{
        	  impares++;
        	}
          if(x > 0){
        	  positivo++;
        	}
            else if (x < 0){
        	  negativo++;
        	}
        	
        }
        System.out.println( pares + " par(es)");
        System.out.println( impares + " impar(es)");
        System.out.println( positivo + " positivo(s)");
        System.out.println( negativo + " negativo(s)");
    }
	
}