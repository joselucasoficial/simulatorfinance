function shr() {

    var veiculo = document.getElementById('veiculo')
    var valor = document.getElementById('valor')
    var qw1 = window.document.getElementById('qw1')

    var nVeiculo = String(veiculo.value)
    var vVeiculo = Number(valor.value)
    var entrada = vVeiculo / 2
    var parcelas = entrada / 60
    var pJuros = parcelas + (parcelas * (70/100))

    qw1.innerHTML = `
    <div>Carro : <strong>${nVeiculo}</strong></div>
    <div>Entrada: <strong>R$${entrada}</strong></div>
    <div>+ 60x de <strong>R$${pJuros.toFixed(2)}</strong></div>`

}