function checkPalindromo(string) {
  if(!string) return "string inexistente"

  return string.split("").reverse().join("") === string
}

console.log(checkPalindromo("ama"))