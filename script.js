function carregar() {
  const loading = document.querySelector(".loading");
  const container = document.querySelector(".container");
  const loading__text = document.querySelector(".loading__text");

  setTimeout(esconder, 1490);
  function esconder() {
    loading.style.display = "none";
  }

  setTimeout(exibir, 1500);
  function exibir() {
    container.style.display = "grid";
  }

  loading__text.innerText = "Filme bom?";
  setTimeout(() => {
    loading__text.innerText = "Calma aí...";
  }, 800);

  function esconder() {
    loading.style.display = "none";
  }
}

// Outra forma
// setTimeout(() => {
//   container.style.display = "grid";
// }, 1500);

// Usar document.getElementsByClassName em btnAll não funcionaria
// Porque retormaria um HTML Collection e não um Elemento
// Por isso a necessidade de usar querySelector
// Que retorna btnAll como um Elemento

function exibirSuspense() {
  const btns = document.querySelectorAll(".btn");
  btns.forEach((element) => {
    element.classList.remove("active");
  });

  const btnSuspense = document.querySelector(".btnSuspense");
  btnSuspense.classList.add("active");

  const filmes = document.querySelectorAll(".filme");
  filmes.forEach((element) => {
    if (element.classList.contains("suspense")) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

function exibirTerror() {
  const btns = document.querySelectorAll(".btn");
  btns.forEach((element) => {
    element.classList.remove("active");
  });

  const btnTerror = document.querySelector(".btnTerror");
  btnTerror.classList.add("active");

  const filmes = document.querySelectorAll(".filme");
  filmes.forEach((element) => {
    if (element.classList.contains("terror")) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

// Usar document.getElementsByClassName em filmes não funcionaria
// Porque retornaria um HTML Collection e não um Array
// Por isso a necessidade de usar querySelectorAll
// Que retorna filmes como uma NodeList

function exibirTodos() {
  const btns = document.querySelectorAll(".btn");
  btns.forEach((element) => {
    element.classList.remove("active");
  });

  const btnTodos = document.querySelector(".btnTodos");
  btnTodos.classList.add("active");

  const filmes = document.querySelectorAll(".filme");
  filmes.forEach((element) => {
    element.style.display = "block";
  });
}

// Modal

catalogo = [
  // Filmes de Suspense

  { nome: "Fratura", ano: "2019", plataformas: "Netflix", duracao: "1h 40min" },
  { nome: "Fuja", ano: "2020", plataformas: "Netflix", duracao: "1h 30min" },
  {
    nome: "Corra",
    ano: "2017",
    plataformas: "Disney+, Netflix e Prime Video",
    duracao: "1h 44min",
  },
  {
    nome: "O Homem nas Trevas 2",
    ano: "2021",
    plataformas: "Netflix e Prime Video",
    duracao: "1h 38min",
  },
  {
    nome: "A Sociedade da Neve",
    ano: "2023",
    plataformas: "Netflix",
    duracao: "2h 24min",
  },
  { nome: "Bird Box", ano: "2018", plataformas: "Netflix", duracao: "2h 4min" },
  {
    nome: "Destinos a Deriva",
    ano: "2023",
    plataformas: "Netflix",
    duracao: "1h 49min",
  },
  {
    nome: "A Queda",
    ano: "2022",
    plataformas: "Prime Video",
    duracao: "1h 47min",
  },
  {
    nome: "O Enfermeiro da Noite",
    ano: "2022",
    plataformas: "Netflix",
    duracao: "2h",
  },
  {
    nome: "Nós",
    ano: "2019",
    plataformas: "Prime Video",
    duracao: "2h",
  },

  // Filmes de Terror

  { nome: "O Poço", ano: "2019", plataformas: "Netflix", duracao: "1h 34min" },

  {
    nome: "Mama",
    ano: "2013",
    plataformas: "Netflix e Prime Video",
    duracao: "1h 40min",
  },
  {
    nome: "A Bruxa",
    ano: "2015",
    plataformas: "Netflix e Prime Video",
    duracao: "1h 32min",
  },
  {
    nome: "Boneco do Mal",
    ano: "2016",
    plataformas: "Netflix e Prime Video",
    duracao: "1h 37min",
  },
  {
    nome: "Hereditário",
    ano: "2019",
    plataformas: "Max, Netflix e Prime Video",
    duracao: "2h 7min",
  },
  {
    nome: "Midsommar",
    ano: "2019",
    plataformas: "Prime Video",
    duracao: "2h 28m",
  },
  {
    nome: "Tin e Tina",
    ano: "2023",
    plataformas: "Netflix",
    duracao: "2h",
  },
  {
    nome: "Conferência Mortal",
    ano: "2023",
    plataformas: "Netflix",
    duracao: "1h 40min",
  },
  {
    nome: "Convite Maldito",
    ano: "2022",
    plataformas: "Prime Video",
    duracao: "1h 44min",
  },
  {
    nome: "Invocação do Mal 3",
    ano: "2021",
    plataformas: "Max e Prime Video",
    duracao: "1h 52min",
  },
  {
    nome: "Morte Morte Morte",
    ano: "2022",
    plataformas: "Prime Video",
    duracao: "1h 35min",
  },
  {
    nome: "O Telefone Preto",
    ano: "2021",
    plataformas: "Prime Video",
    duracao: "1h 42min",
  },
];

function exibirModal(filme) {
  console.log(filme);

  let filmeCerto;
  for (let i of catalogo) {
    if (i.nome == filme.title) {
      filmeCerto = i;
    }
  }
  console.log(filmeCerto);

  const container = document.querySelector(".container");
  container.style.opacity = "5%";

  const modal = document.querySelector(".modal");
  modal.innerHTML = `
   <img
      src="${filme.src}"
      alt="${filmeCerto.title}"
      title="${filmeCerto.title}"
      class="filme"
    />
    <div class="imagem-modal"></div>
    <p>${filmeCerto.nome}</p>
    <p>Ano: ${filmeCerto.ano}</p>
    <p>Duração:  ${filmeCerto.duracao}</p>
    <p>Disponível na: ${filmeCerto.plataformas}.</p>
    <button class='btn close-btn'>Voltar</button>
  `;
  modal.showModal();

  const closeButton = document.querySelector(".close-btn");
  closeButton.addEventListener("click", () => {
    modal.close();
    container.style.opacity = "100%";
    return modalAberto;
  });
}

// Share

function share() {
  if (navigator.share !== undefined) {
    navigator
      .share({
        title: "Movie Hall",
        text: "Achei seu filme!",
        url: "https://seusite.com/",
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing", error));
  }
}

// Frase

frases = [
  { frase: "O que fazemos na vida, ecoa na eternidade.", filme: "Gladiador" },
  {
    frase:
      "Apenas porque uma coisa funciona, não quer dizer que ela não possa ser aprimorada.",
    filme: "Pantera Negra",
  },
  {
    frase:
      "A felicidade pode ser encontrada mesmo nas horas mais difíceis, se você se lembrar de acender a luz.",
    filme: "Harry Potter e o Prisioneiro de Azkaban",
  },
  {
    frase:
      "Não importa quanto a vida possa ser ruim, sempre existe algo que você pode fazer e triunfar. Enquanto há vida, há esperança.",
    filme: "A Teoria de Tudo",
  },
  {
    frase: "Não há lugar como o nosso lar.",
    filme: "O Mágico de Oz",
  },
  {
    frase:
      "Tudo o que temos de decidir é o que fazer com o tempo que nos é dado.",
    filme: "O Senhor dos Anéis A Sociedade do Anel",
  },
  {
    frase: "Homens realmente grandes não nascem grandes, tornam-se grandes.",
    filme: "O Poderoso Chefão",
  },
  {
    frase:
      "As pessoas que são loucas o suficiente para pensar que podem mudar o mundo são as que o fazem.",
    filme: "Jobs",
  },
  {
    frase:
      "A flor que desabrocha na adversidade é a mais rara e mais bela de todas.",
    filme: "Mulan",
  },
  {
    frase: "Às vezes, o caminho certo não é o mais fácil.",
    filme: "Pocahontas",
  },
  {
    frase:
      "Quando a vida te decepciona, qual é a solução? Simplesmente continue a nadar.",
    filme: "Procurando Nemo",
  },
  {
    frase: "O amor é colocar as necessidades de outras pessoas antes das suas.",
    filme: "Frozen",
  },
  {
    frase: "Grandes poderes trazem grandes responsabilidades.",
    filme: "Homem-Aranha",
  },
  {
    frase: "Que a força esteja com você!",
    filme: "Star Wars",
  },
];

let frasesLength = frases.length;
const fraseTexto = document.querySelector(".frase__texto");
const fraseFilme = document.querySelector(".frase__filme");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
let aleatorio = getRandomInt(0, frasesLength);

fraseTexto.innerText = frases[aleatorio].frase;
fraseFilme.innerHTML = `- ${frases[aleatorio].filme}`;
