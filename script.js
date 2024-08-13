function somar() {
    showResultado(getNumero1() + getNumero2())
}
function subtrair() {
    showResultado(getNumero1() - getNumero2())
}
function multiplicar() {
    showResultado(getNumero1() * getNumero2())

}
function dividir() {
    showResultado(getNumero1() / getNumero2())
}

function getNumero1() {
    let numero1 = document.getElementById("inputNumero1").value
    return parseFloat(numero1)
}

function getNumero2() {
    let numero2 = document.getElementById("inputNumero2").value
    return parseFloat(numero2)
}

function showResultado(resultado) {
    document.getElementById("resultado").innerHTML = resultado
}