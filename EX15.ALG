Algoritmo "ex15"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/02/2026
Var
lado1, lado2, lado3:real



Inicio
escreva("Digite o valor do primeiro lado: ")
leia(lado1)

escreva("Digite o valor do segundo lado: ")
leia(lado2)

escreva("Digite o valor do terceiro lado: ")
leia(lado3)

se (lado1 + lado2 > lado3) e (lado1 + lado3 > lado2) e(lado2 + lado3 > lado1) entao

   escreva("Formam um triangulo")

senao
   escreva("Nao formam um triangulo")
   fimse



Fimalgoritmo
