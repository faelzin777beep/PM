Algoritmo "ex18"
var
   i, num, div3, div5, divAmbos : inteiro

inicio
   div3 <- 0
   div5 <- 0
   divAmbos <- 0

   para i de 1 ate 25 faca
      escreval("Digite o ", i, "º número: ")
      leia(num)

      se (num % 3 = 0) e (num % 5 = 0) entao
         divAmbos <- divAmbos + 1
      fimse

      se num % 3 = 0 entao
         div3 <- div3 + 1
      fimse

      se num % 5 = 0 entao
         div5 <- div5 + 1
      fimse
   fimpara

   escreval("Divisíveis por 3: ", div3)
   escreval("Divisíveis por 5: ", div5)
   escreval("Divisíveis por ambos (3 e 5): ", divAmbos)

fimalgoritmo

