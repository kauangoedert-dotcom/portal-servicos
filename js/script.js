// ETAPA 2: Encontrar os elementos no DOM
const campoServico = document.querySelector("#servico");
const botaoConsultar = document.querySelector("#btnConsultar");
const resultado = document.querySelector("#resultado");

// ETAPA 3 e 4: Escutar o clique, ler a escolha e tomar decisões
botaoConsultar.addEventListener("click", () => {
  const escolha = campoServico.value;

  if (escolha === "") {
    resultado.textContent = "Escolha um serviço antes de consultar.";
  } else if (escolha === "lavagem-simples") {
    resultado.textContent = "A lavagem simples leva cerca de 30 minutos e inclui higienização externa da lataria e pneus.";
  } else if (escolha === "lavagem-completa") {
    resultado.textContent = "A lavagem completa leva cerca de 1h30 e abrange a higienização interna e externa detalhada.";
  } else if (escolha === "enceramento") {
    resultado.textContent = "O enceramento leva em torno de 1h e protege a pintura contra raios solares e pequenos arranhões.";
  } else {
    resultado.textContent = "Serviço não identificado.";
  }
});