const email = "asta@gmail.com"
const senha = "astazin"

function logar(event) {
    event.preventDefault()
if (document.forms.email.value === email && document.form.senha === senha ) {
    location.href = ""
}
}