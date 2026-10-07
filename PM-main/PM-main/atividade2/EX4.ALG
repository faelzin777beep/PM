Algoritmo "ex4"


var
cont, num: inteiro
   faixa1, faixa2, faixa3: inteiro


Inicio
...
   faixa1 <- 0
   faixa2 <- 0
   faixa3 <- 0

   para cont de 1 ate 30 faca
      escreva("Digite o ", cont, "º número: ")
      leia(num)


      se (num >= 0) e (num <= 25) entao
         faixa1 <- faixa1 + 1
      senao
         se (num >= 26) e (num <= 50) entao
            faixa2 <- faixa2 + 1
         senao
            se (num > 50) entao
               faixa3 <- faixa3 + 1
            fimse
         fimse
      fimse
   fimpara



   escreva("Entre 0 e 25: ", faixa1)
   escreva("   Entre 26 e 50: ", faixa2)
   escreva("   Acima de 50: ", faixa3)

fimalgoritmo
