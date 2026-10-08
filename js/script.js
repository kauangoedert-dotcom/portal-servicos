// Dados dos serviços organizados em um array de objetos.
const servicos = [
  {
    nome: "Lavagem simples",
    descricao: "Limpeza externa para remover a sujeira do dia a dia, incluindo lataria e pneus."
  },
  {
    nome: "Lavagem completa",
    descricao: "Limpeza detalhada interna e externa, incluindo bancos, tapetes, painel e lataria."
  },
  {
    nome: "Enceramento",
    descricao: "Aplicação de cera para realçar o brilho e ajudar a proteger a pintura."
  }
];

// Confira os dados e percorra a lista no Console.
console.table(servicos);
servicos.forEach((servico) => {
  console.log(servico.nome);
});

// Cria os cards do catálogo a partir dos dados do array.
const listaServicos = document.querySelector("#listaServicos");

function renderizarServicos() {
  listaServicos.innerHTML = "";

  servicos.forEach((servico) => {
    const card = document.createElement("article");
    card.classList.add("card-servico");

    const titulo = document.createElement("h3");
    titulo.textContent = servico.nome;

    const descricao = document.createElement("p");
    descricao.textContent = servico.descricao;

    card.append(titulo, descricao);
    listaServicos.appendChild(card);
  });
}

renderizarServicos();

// Aula 08: consulta de orientação preservada.
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
