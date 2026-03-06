Algoritmo "ex5"


var
n, i: inteiro
   fatorial: real


Inicio
  repita
      escreva("Digite um numero inteiro positivo: ")
      leia(n)

      se (n < 0) entao
         escreval("Erro: O numero deve ser positivo.")
      fimse
   ate (n >= 0)

   fatorial <- 1

   se (n > 0) entao
      para i de 1 ate n faca
         fatorial <- fatorial * i
      fimpara
   fimse

   escreval("O fatorial de ", n, " e: ", fatorial)
fimalgoritmo
