function palindromo(phrase) {
  const FIRST_PHRASE = firstCheck(phrase)
  const SECOND_PHRASE = seconCheck(phrase)

  let say1 = ''

  for(let i = 0; i < FIRST_PHRASE.length && i < SECOND_PHRASE.length; i++){
    if(FIRST_PHRASE[i] != SECOND_PHRASE[i]) {
      say1 = 'não'
    } 
  }

  return `Os nomes ${FIRST_PHRASE.join('')} e ${SECOND_PHRASE.join('')} ${say1} são palíndromos`
}

function firstCheck(phrase) {
  let firstArrayCheck = []

  for(let i = 0; i < phrase.length; i++) {
    firstArrayCheck.push(phrase[i])
  }

  return firstArrayCheck
}

function seconCheck(phrase) {
  let secondArrayCheck = []

  for(let i = 0; i< phrase.length; i++) {
    secondArrayCheck.unshift(phrase[i])
  }

  return secondArrayCheck
}

console.log(palindromo('pop'))