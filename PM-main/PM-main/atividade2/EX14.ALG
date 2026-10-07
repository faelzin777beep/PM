Algoritmo "ex13"

var
   dia, qtd_vendida, total_vendido, maior_venda, dia_maior : inteiro

inicio
   total_vendido <- 0
   maior_venda <- 0
   dia_maior <- 0

   para dia de 1 ate 30 faca
      escreval("digite a quantidade vendida no dia ", dia, ": ")
      leia(qtd_vendida)

      total_vendido <- total_vendido + qtd_vendida

      se qtd_vendida < 5 entao
         escreval("ALERTA: estoque baixo detectado no dia ", dia, "!")
      fimse

      se qtd_vendida > maior_venda entao
         maior_venda <- qtd_vendida
         dia_maior <- dia
      fimse
   fimpara

   escreval("total vendido no mês: ", total_vendido)
   escreval("a maior venda foi ", maior_venda, " unidades no dia ", dia_maior)

   
fimalgoritmo

