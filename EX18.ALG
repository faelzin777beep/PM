Algoritmo "ex18"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/02/2026
var
   salario, parcela: real

inicio
   escreva("Digite o salario: ")
   leia(salario)

   escreva("Digite o valor da parcela: ")
   leia(parcela)

   se (parcela <= salario * 0.3) entao
      escreval("Emprestimo aprovado")
   senao
      escreval("Emprestimo negado")
   fimse

Fimalgoritmo