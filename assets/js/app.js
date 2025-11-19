// app.js

const app = document.getElementById("app");

// ROTEAMENTO
function navegar() {
    const rota = location.hash.replace("#", "") || "home";

    // Marca o menu ativo
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${rota}`);
    });

    // Renderiza template
    app.innerHTML = Templates[rota] || "<h1>Página não encontrada</h1>";

    // Reativa scripts da página
    if (rota === "cadastro") ativarFormulario();
}

window.addEventListener("hashchange", navegar);
window.addEventListener("load", navegar);

// VALIDAÇÃO DO FORMULÁRIO
function ativarFormulario() {

    const form = document.getElementById("form-cadastro");
    const msg = document.getElementById("msg-sucesso");

    form.addEventListener("submit", e => {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const cpf = document.getElementById("cpf").value.trim();
        const tel = document.getElementById("telefone").value.trim();
        const cep = document.getElementById("cep").value.trim();

        if (!Validators.validarCPF(cpf))
            return Validators.exibirErro("CPF", "Formato inválido");

        if (!Validators.validarTelefone(tel))
            return Validators.exibirErro("Telefone", "Número inválido");

        if (!Validators.validarCEP(cep))
            return Validators.exibirErro("CEP", "CEP inválido");

        msg.innerText = "Cadastro enviado com sucesso!";
        msg.style.display = "block";
        msg.classList.add("show");

        form.reset();
    });
}
