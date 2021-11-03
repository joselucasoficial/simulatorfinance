function calculo() {

    var veiculo = document.getElementById('veiculo')
    var valor = document.getElementById('valor')
    var qw1 = window.document.getElementById('qw1')

    var nomeVeiculo = String(veiculo.value)
    var valorVeiculo = Number(valor.value)
    var entrada = valorVeiculo / 2
    var parcelas = entrada / 60
    var parcelasJuros = parcelas + (parcelas * (70/100))

    qw1.innerHTML = `
    <div>Carro : <strong>${nomeVeiculo}</strong></div>
    <div>Entrada: <strong>R$${entrada}</strong></div>
    <div>+ 60x de <strong>R$${parcelasJuros.toFixed(2)}</strong></div>`
}