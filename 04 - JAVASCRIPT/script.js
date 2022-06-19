const PRECO = 5
let desconto = 0.2

function calc_desconto(PRECO, desconto) {
  let total = PRECO - PRECO * desconto
  console.log(`O valor do preço final é R$${total},00`)
}

calc_desconto(5, 0.2)
