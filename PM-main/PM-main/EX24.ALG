Algoritmo "ex24"
"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/02/2026
var
   num, soma, contador: inteiro

inicio
   soma <- 0
   contador <- 0

   escreva("Digite um numero (0 para parar): ")
   leia(num)

   enquanto (num <> 0) faca
      soma <- soma + num
      contador <- contador + 1
      escreva("Digite outro numero (0 para parar): ")
      leia(num)
   fimenquanto

   escreval("Quantidade de numeros digitados: ", contador)
   escreval("Soma total: ", soma)

Fimalgoritmo