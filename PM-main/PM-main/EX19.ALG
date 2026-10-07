Algoritmo "ex19"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/02/2026
var
   ano: inteiro

inicio
   escreva("Digite o ano: ")
   leia(ano)

   se (ano % 400 = 0) ou ((ano % 4 = 0) e (ano % 100 <> 0)) entao
      escreval(ano, " é bissexto.")
   senao
      escreval(ano, " não é bissexto.")
   fimse

Fimalgoritmo