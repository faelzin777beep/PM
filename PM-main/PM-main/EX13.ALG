Algoritmo "ex13"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 26/02/2026

// Seção de Declarações das variáveis 
Var
   valor, desconto, preço: real

Inicio
   escreva("Digite o valor da sua compra: ")
   leia(valor)

   se (valor > 100) entao
      desconto <- valor * 10 / 100
      preço <- valor - desconto
      escreva("Desconto de 10% aplicado")
      escreva("Valor final: ", preço)
   senao
      escreva("Sem desconto.")
      escreva("Valor final: ", valor)
   fimse
Fimalgoritmo


// Seção de Comandos, procedimento, funções, operadores, etc... 




