const formulario = document.querySelector("#formContato");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoServico = document.querySelector("#assunto");
const campoMensagem = document.querySelector("#mensagem");
const mensagem = document.querySelector("#mensagemForm");

// A validacao nativa bloqueia o submit; este evento tambem orienta no DOM.
formulario.addEventListener("invalid", () => {
  mensagem.textContent = "Confira os campos obrigatórios e o formato do e-mail.";
}, true);

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();
  const servico = campoServico.value;
  const texto = campoMensagem.value.trim();

  if (nome === "" || email === "" || servico === "" || texto === "") {
    mensagem.textContent = "Preencha todos os campos obrigatórios antes de continuar.";
    return;
  }

  mensagem.textContent = `Obrigado, ${nome}! Os dados foram validados nesta página.`;
});
