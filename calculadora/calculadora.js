var valor1;
var valor2;
var operador;

function preencheValor(valor) {
    var input = document.getElementById("tela");
    if (input.value == "0") {
        input.value = valor;
    } else {
        input.value = input.value + valor;
    }
}

function limparTela() {
    document.getElementById("tela").value = ""
}

function operacao(op) {
    valor1 = document.getElementById("tela").value;
    operador = op;
    limparTela();

}

function calcula() {
    var input = document.getElementById("tela");
    valor2 = input.value;
    switch (operador) {
        case "+": input.value = parseFloat(valor1) + parseFloat(valor2);
            break;
        case "-": input.value = parseFloat(valor1) - parseFloat(valor2);
            break;
        case "x": input.value = parseFloat(valor1) * parseFloat(valor2);
            break;
        case ":": input.value = parseFloat(valor1) / parseFloat(valor2);
            break;
        case "%": input.value = (parseFloat(valor2) * parseFloat(valor1)) / 100;
            break;

    }
}

function porcentagem() {
    operador = "%";
    calcula();
}