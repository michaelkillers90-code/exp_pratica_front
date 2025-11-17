// Seleciona o formulário e a mensagem de sucesso
const form = document.querySelector("form");
const msgSucesso = document.getElementById("msg-sucesso");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // evita o envio real para demonstração

    // Configura o texto da mensagem
    msgSucesso.textContent = "Cadastro realizado com sucesso! Obrigado por ajudar!";
    
    // Adiciona a classe que dispara a animação
    msgSucesso.classList.add("show");

    // Remove a classe após a animação terminar (3s)
    setTimeout(() => {
        msgSucesso.classList.remove("show");
        form.reset(); // opcional: limpa o formulário
    }, 3000);
});

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form-cadastro");
  const msgSucesso = document.getElementById("msg-sucesso");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // evita o envio tradicional

    // coleta dados do formulário
    const dados = new FormData(form);
    const objetoDados = {};
    dados.forEach((value, key) => {
      objetoDados[key] = value;
    });

    // aqui você poderia enviar via fetch para um backend real
    // exemplo:
    // fetch("processa_cadastro.php", { method: "POST", body: dados })

    // exibe mensagem de sucesso
    msgSucesso.style.display = "block";
    msgSucesso.innerHTML = `<strong>Cadastro enviado com sucesso!</strong><br>Obrigado, ${objetoDados.nome}!`;

    // limpa o formulário
    form.reset();
  });
});
