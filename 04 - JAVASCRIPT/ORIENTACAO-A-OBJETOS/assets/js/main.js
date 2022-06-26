class ContaBancaria {
  constructor(agencia, numero, tipo, saldo) {
    this._agencia = agencia
    this._numero = numero
    this._tipo = tipo
    this._saldo = saldo
  }
  
  set saldo(number) {
    this._saldo = number
  }

  get saldo() {
    return this._saldo
  }

  sacar(number) {
    let saque = this._saldo - number

    if(number > this._saldo) {
      return `Saldo insuficiente, o valor de: $${number} ultrapassa seu saldo de: $${this._saldo}`
    } else {
      return `Saldo inicial: $${this._saldo}.\nSaque no valor de $${number} realizado com sucesso.\nSaldo final: $${saque}`
    }
  }

  depositar(number) {
    let deposito = this._saldo + number
    
    return `Saldo inicial: $${this._saldo}.\nDepósito no valor de $${number} realizado com sucesso.\nSaldo final: $${deposito}`
  }
}

// var conta = new ContaBancaria('','','', 10000)
// console.log(conta.depositar(4738))

class ContaCorrente extends ContaBancaria {
  constructor(cartaoCredito,type = 'conta corrente') {
    this._cartaoCredito = cartaoCredito
  }

  set cartaoCredito(number) {
    this.this.cartaoCredito = number
  }

  get cartaoCredito(){
    return this._cartaoCredito
  }
}

class ContaPoupanca extends ContaBancaria {

}

class ContaUniversitaria extends ContaBancaria {
  constructor (saldo) {
    super(saldo)
  }

  saque(number) {
    console.log(this._saldo)
    let saque = this._saldo - number
    
    if(number > 500) {
      return `Saque no valor de: $${number} inválido.\nSaques disponíveis apenas abaixo de: $500`
    } else {
      return `Saldo inicial: $${this._saldo}.\nSaque no valor de $${number} realizado com sucesso.\nSaldo final: $${saque}`
    }
  }
}

var contaUniver = new ContaUniversitaria(10000)
console.log(contaUniver.saque(473))
// Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
// Dentro de ContaBancaria, construa o getter e o setter de saldo;
// Dentro de ContaBancaria, crie os métodos sacar e depositar;
// Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
// Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
// Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
// Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
// Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
// Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.