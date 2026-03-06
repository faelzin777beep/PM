Algoritmo "ex2"
//
//



Var
i, nota, soma: inteiro
media: real
inicio
soma <- 0

   para i de 1 ate 5 faca
      repita
         escreva("Digite a ", i, "ª nota (0 a 10): ")
         leia(nota)

         se (nota < 0) ou (nota > 10) entao
            escreval("Nota inválida! Digite um valor entre 0 e 10.")
         fimse
      ate (nota >= 0) e (nota <= 10)

      soma <- soma + nota
   fimpara

   media <- soma / 5




Fimalgoritmo