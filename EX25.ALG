Algoritmo "ex25"
"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/02/2026
var
   num, i, maior, menor: inteiro

inicio
   i <- 1
   escreva("Digite o numero 1: ")
   leia(num)
   maior <- num
   menor <- num

   enquanto (i < 10) faca
      i <- i + 1
      escreva("Digite o numero ", i, ": ")
      leia(num)

      se (num > maior) entao
         maior <- num
      fimse

      se (num < menor) entao
         menor <- num
      fimse
   fimenquanto

   escreval("O maior numero digitado foi ", maior)
   escreval("O menor numero digitado foi ", menor)

Fimalgoritmo