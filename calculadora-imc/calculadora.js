function CalcularImc(event) {
    event.preventDefault();
    var peso = Number(document.forms.peso.value);
    var altura = Number(document.forms.altura.value);

    var imc = peso / (altura * altura);
    imc = imc.toFixed(2);
    
    if(imc<18.5){
        document.getElementById("").textContent = "" + imc + "Abaixo do peso adequado";

    }else if(imc >= 18.5 && imc <= 24.9);{
        document.getElementById("").textContent = "" + imc + "Peso adequado";

    }else if(imc >= 25.0 && imc <= 29.9 ){
        document.getElementById("").textContent = "" + imc + "Acima do peso";

    }else if (imc >= 30.0 && imc <= 34.9){
        document.getElementById("").textContent = "" + imc + "Obesidade (grau 1)";
    }else if(imc >= 35.0 && imc <=39.9){
        document.getElementById("").textContent = "" + imc + "Obesidade severa (grau 2)";
    }else if (imc >= 40) {
        document.getElementById("").textContent = "" + imc + "Obesidade mórbita (grau 3)";
    }
}
