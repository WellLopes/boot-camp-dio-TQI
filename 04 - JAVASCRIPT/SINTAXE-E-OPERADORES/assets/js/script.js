function reciveNumber() {
  let n1 = Number(prompt('Digite o primerio valor: '))
  let n2 = Number(prompt('Digite o segundo valor: '))

  let sumNumber = n1 + n2

  let checkEqual =
    n1 === n2
      ? `Os números ${n1} e ${n2} são iguais`
      : `Os números ${n1} e ${n2} não são iguais`

  if ( sumNumber > 10 && sumNumber < 20) {
    var checkSumNumber = (`Sua soma é ${sumNumber} que é maior que 10 e menor que 20`)
  }
  else if (sumNumber < 10) {
    var checkSumNumber = (`Sua soma é ${sumNumber} que é menor que 10 e menor que 20`)
  }
  else {
    var checkSumNumber = (`Sua soma é ${sumNumber} que é maior que 10 e 20`)
  } 

  console.log(`${checkEqual}. ${checkSumNumber}`)
}

reciveNumber()