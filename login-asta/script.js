var email = "asta@gmail.com"
var senha = "astazin"

function logar(event) {
    event.preventDefault()
if (document.form.email.value === email && document.form.senha.value === senha ) {
    console.log(form)
    location.href = "asta.html";
}else {
    alert('Senha ou E-mail invalido!')
}
}