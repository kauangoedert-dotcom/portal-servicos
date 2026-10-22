// Dados dos serviços organizados em um array de objetos.
const servicos = [
  {
    nome: "Lavagem simples",
    descricao: "Limpeza externa para remover a sujeira do dia a dia, incluindo lataria e pneus.",
    categoria: "lavagem"
  },
  {
    nome: "Lavagem completa",
    descricao: "Limpeza detalhada interna e externa, incluindo bancos, tapetes, painel e lataria.",
    categoria: "lavagem"
  },
  {
    nome: "Higienização interna",
    descricao: "Limpeza cuidadosa do painel, console, tapetes e demais superfícies internas.",
    categoria: "higienizacao"
  },
  {
    nome: "Higienização de bancos",
    descricao: "Limpeza profunda dos bancos para remover manchas e odores do estofado.",
    categoria: "higienizacao"
  },
  {
    nome: "Enceramento",
    descricao: "Aplicação de cera para realçar o brilho e ajudar a proteger a pintura.",
    categoria: "protecao"
  }
];

// Confira os dados e percorra a lista no Console.
console.table(servicos);
servicos.forEach((servico) => {
  console.log(servico.nome);
});
console.log(servicos[0].categoria);

// Cria os cards do catálogo a partir dos dados do array.
const listaServicos = document.querySelector("#listaServicos");

function renderizarServicos(lista) {
  listaServicos.innerHTML = "";

  if (lista.length === 0) {
    listaServicos.textContent = "Nenhum serviço foi encontrado nesta categoria.";
    return;
  }

  lista.forEach((servico) => {
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

renderizarServicos(servicos);

// Aula 11: filtra o catálogo sem recarregar a página.
const filtroCategoria = document.querySelector("#filtroCategoria");
const mensagemFiltro = document.querySelector("#mensagemFiltro");

filtroCategoria.addEventListener("change", () => {
  const categoriaEscolhida = filtroCategoria.value;
  console.log(categoriaEscolhida);

  if (categoriaEscolhida === "todos") {
    renderizarServicos(servicos);
    mensagemFiltro.textContent = "Mostrando todos os serviços.";
    return;
  }

  const servicosFiltrados = servicos.filter((servico) => {
    return servico.categoria === categoriaEscolhida;
  });

  renderizarServicos(servicosFiltrados);
  mensagemFiltro.textContent =
    servicosFiltrados.length + " serviço(s) encontrado(s).";
});

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

// Aula 13: salva e recupera a preferencia de servico neste navegador.
const campoFavorito = document.querySelector("#servicoFavorito");
const botaoFavorito = document.querySelector("#btnSalvarFavorito");
const mensagemFavorito = document.querySelector("#favoritoSalvo");
const favoritoSalvo = localStorage.getItem("servicoFavorito");
const favoritoValido = Array.from(campoFavorito.options).some((opcao) => {
  return opcao.value === favoritoSalvo;
});

if (favoritoSalvo && favoritoValido) {
  campoFavorito.value = favoritoSalvo;
  mensagemFavorito.textContent = `Seu serviço favorito é: ${campoFavorito.selectedOptions[0].textContent}.`;
}

botaoFavorito.addEventListener("click", () => {
  const servico = campoFavorito.value;

  if (servico === "") {
    mensagemFavorito.textContent = "Escolha um serviço primeiro.";
    return;
  }

  localStorage.setItem("servicoFavorito", servico);
  mensagemFavorito.textContent = `Favorito salvo: ${campoFavorito.selectedOptions[0].textContent}.`;
});
