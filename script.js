function carregar() {
  const loading = document.querySelector(".loading");
  const container = document.querySelector(".container");

  setTimeout(esconder, 1490);
  function esconder() {
    loading.style.display = "none";
  }

  setTimeout(exibir, 1500);
  function exibir() {
    container.style.display = "grid";
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
  { nome: "Fratura", ano: "2019", plataformas: "Netflix" },
  { nome: "Fuja", ano: "2020", plataformas: "Netflix" },
  {
    nome: "Corra",
    ano: "2017",
    plataformas: "Amazon Prime, Disney+ e Netflix",
  },
  {
    nome: "O Homem nas Trevas 2",
    ano: "2021",
    plataformas: "Amazon Prime e Netflix",
  },
  { nome: "A Sociedade da Neve", ano: "2023", plataformas: "Netflix" },
  { nome: "Bird Box", ano: "2018", plataformas: "Netflix" },
  { nome: "Destinos a Deriva", ano: "2023", plataformas: "Netflix" },
  { nome: "O Poço", ano: "2019", plataformas: "Netflix" },

  { nome: "Mama", ano: "2013", plataformas: "Amazon Prime e Netflix" },
  { nome: "A Bruxa", ano: "2015", plataformas: "Amazon Prime e Netflix" },
  {
    nome: "Boneco do Mal",
    ano: "2016",
    plataformas: "Amazon Prime e Netflix",
    duracao: "01h37m",
  },
  {
    nome: "Hereditário",
    ano: "2019",
    plataformas: "Amazon Prime, Max e Netflix",
    duracao: "2h07m",
  },
  {
    nome: "Midsommar",
    ano: "2019",
    plataformas: "Amazon Prime",
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
  container.style.opacity = "20%";

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
    <button class='close-btn'>Voltar</button>
  `;
  modal.showModal();

  const closeButton = document.querySelector(".close-btn");
  closeButton.addEventListener("click", () => {
    modal.close();
    container.style.opacity = "100%";
  });
}
