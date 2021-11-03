function calculo() {

    var veiculo = document.getElementById('veiculo')
    var valor = document.getElementById('valor')
    var qw1 = window.document.getElementById('qw1')

    var nomeVeiculo = String(veiculo.value)
    var valorVeiculo = Number(valor.value)
    var entrada = valorVeiculo / 2
    var parcelas = entrada / 60
    var parcelasJuros = parcelas + (parcelas * (70/100))

    qw1.innerText = `O ${nomeVeiculo} pode ser seu com uma
    Entrada minima de R$${entrada}
    + 60x de R$${parcelasJuros.toFixed(2)}`

}