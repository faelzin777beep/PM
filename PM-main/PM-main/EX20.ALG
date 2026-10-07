Algoritmo "ex20"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/02/2026
var
   peso, altura, imc: real

inicio
   escreva("Digite o peso kg: ")
   leia(peso)

   escreva("Digite a altura m: ")
   leia(altura)

   imc <- peso / (altura * altura)

   se (imc < 18.5) entao
      escreval("Abaixo do peso")
   senao
      se (imc >= 18.5) e (imc < 25) entao
         escreval("Peso normal")
      senao
         se (imc >= 25) e (imc < 30) entao
            escreval("Sobrepeso")
         senao
            escreval("Obesidade")
         fimse
      fimse
   fimse

Fimalgoritmo