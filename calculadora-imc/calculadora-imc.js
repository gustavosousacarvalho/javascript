function calculaImc(event) {
    event.preventDefault();
    var peso = Number(document.form.peso.value);
    var altura = Number(document.form.altura.value);

    var imc = peso / (altura * altura);
    imc = imc.toFixed(2);
    if (imc < 18.5) {
        document.getElementById("resultado").textContent = "Resultado :" + imc + "Abaixo do peso ideal";

    } else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById("resultado").textContent = "Resultado :" + imc + " Peso normal";

    } else if (imc >= 25.0 && imc <= 29.9) {
        document.getElementById("resultado").textContent = "Resultado :" + imc + "Um pouco acima do peso ideal";
    
    }else if (imc>=30.0 && imc<=34.9) {
    document.getElementById("resultado").textContent = "Resultado :" +  imc + " Obesidade (Grau 1)";

}else if (imc>=35.0 && imc<=39.9) {
    document.getElementById("resultado").textContent = "Resultado :" +  imc + " Obesidade Severa (Grau 2)";

}else if (imc>=40) {
    document.getElementById("resultado").textContent = "Resultado :" +  imc + " Obesidade Mórbita (Grau 3)";
}
}