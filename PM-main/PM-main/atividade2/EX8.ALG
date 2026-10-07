Algoritmo "ex8"


var
vendedor: inteiro
   venda, bonus, total_bonus, maior_venda: real


Inicio
 total_bonus <- 0
   maior_venda <- 0

   para vendedor de 1 ate 10 faca
      escreva("Digite o valor vendido pelo vendedor ", vendedor, ": ")
      leia(venda)

      se (venda >= 5000) entao
         bonus <- venda * 0.10
      senao
         bonus <- venda * 0.05
      fimse

      total_bonus <- total_bonus + bonus

      se (venda > maior_venda) entao
         maior_venda <- venda
      fimse

      escreva("Bonus deste vendedor: R$ ", bonus:2:2)
   fimpara

   escreval("Total pago em bonus: R$ ", total_bonus:2:2)
   escreval("Maior venda realizada: R$ ", maior_venda:2:2)

fimalgoritmo

