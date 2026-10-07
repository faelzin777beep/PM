Algoritmo "ex6"


var
 num, limite, i, resultado: inteiro


Inicio
  escreva("Digite o numero para a tabuada: ")
   leia(num)
   escreva("Digite o limite final da tabuada: ")
   leia(limite)

   escreval("--- Tabuada do ", num, " ate ", limite, " ---")

   para i de 1 ate limite faca
      resultado <- num * i
      escreval(num, " x ", i, " = ", resultado)
   fimpara
fimalgoritmo

