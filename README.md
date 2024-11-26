<div align="center">
  <h1>Movie Hall</h1>
  <img src="https://img.shields.io/github/languages/count/udanielnogueira/movie-hall">
  <img src="https://img.shields.io/github/languages/top/udanielnogueira/movie-hall">
  <img src="https://img.shields.io/github/languages/code-size/udanielnogueira/movie-hall">
  <img src="https://img.shields.io/github/last-commit/udanielnogueira/movie-hall">
  <img src="https://img.shields.io/github/deployments/udanielnogueira/movie-hall/github-pages">
  <img src="https://img.shields.io/badge/responsive-yes-ff69b4">
  <p>Para de rolar a tela, a Movie Hall te indica um filme!</p>
</div>

## Sumário

- [Sobre](#about)
- [Preview](#preview)
- [Tecnologias](#built-with)
- [Funcionalidades](#key-features)
- [Deploy](#deploy)
- [Destaques](#highlights)
- [Meu contato](#contact)

<h2 id="about">Sobre</h2>

Descubra as melhores sugestões de filmes e em quais plataformas eles estão disponíveis.

<img src="./assets/img/desktop-mockup.png">

<h2 id="preview">Preview</h2>

Desktop Showcase

![Desktop Preview](./assets/img/desktop-preview.png 'Desktop Preview')

<br>

Mobile Showcase

<img src="./assets/img/mobile-preview.png">

<h2 id="built-with">Tecnologias</h2>

- JavaScript
- HTML
- CSS

<h2 id="key-features">Funcionalidades</h2>

- [x] Selecionar filme
- [x] Selecionar categoria
- [x] Compartilhar aplicação
- [x] Visualizar tempo de duração
- [x] Visualizar ano de lançamento
- [x] Visualizar plataformas disponíveis

<h2 id="deploy">Deploy</h2>

[Movie Hall](https://movie-hall.vercel.app/)

<h2 id="highlights">Destaques</h2>

Carregamento de página com `setTimeout()`

```js
function carregar() {
  const loading = document.querySelector('.loading');
  const container = document.querySelector('.container');
  const loading__text = document.querySelector('.loading__text');

  loading__text.innerText = 'Filme bom?';
  setTimeout(() => {
    loading__text.innerText = 'Calma aí...';
  }, 800);

  setTimeout(esconder, 1490);
  function esconder() {
    loading.style.display = 'none';
  }

  setTimeout(exibir, 1500);
  function exibir() {
    container.style.display = 'grid';
  }
}
```

<br>

Criação de uma base de dados em JavaScript

```js
catalogo = [
  // Ação
  {
    nome: 'John Wick 3 Parabellum',
    ano: '2019',
    duracao: '2h 10min',
    plataformas: 'Netflix • Prime Video • Telecine',
  },
  {
    nome: 'Nada de Novo no Front',
    ano: '2022',
    duracao: '2h 28min',
    plataformas: 'Netflix',
  },
  {
    nome: 'Resgate 2',
    ano: '2023',
    duracao: '2h 03min',
    plataformas: 'Netflix',
  },
  {
    nome: 'Sniper Americano',
    ano: '2015',
    duracao: '2h 07min',
    plataformas: 'Max • Prime Video',
  },
];
```

<br>

Adição de classes e Inserção de HTML via JS

```js
function exibirSuspense() {
  const btns = document.querySelectorAll('.btn');
  btns.forEach((element) => {
    element.classList.remove('active');
  });

  const btnSuspense = document.querySelector('.btnSuspense');
  btnSuspense.classList.add('active');

  const filmes = document.querySelectorAll('.filme');
  filmes.forEach((element) => {
    if (element.classList.contains('suspense')) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
}
```

<br>

Desenvolvimento de Modal

```js
function exibirModal(filme) {
  let filmeCerto;
  for (let i of catalogo) {
    if (i.nome == filme.title) {
      filmeCerto = i;
    }
  }

  const container = document.querySelector('.container');
  container.style.opacity = '5%';

  const modal = document.querySelector('.modal');
  modal.innerHTML = `
   <img
      src="${filme.src}"
      alt="${filmeCerto.nome}"
      title="${filmeCerto.nome}"
      class="filme"
    />
    <div class="imagem-modal"></div>
    <p>${filmeCerto.nome}</p>
    <p>${filmeCerto.ano} · ${filmeCerto.duracao}</p>
    <p>Plataformas</p>
    <p>${filmeCerto.plataformas}</p>
    <button class='btn close-btn'>Voltar</button>
  `;
  modal.showModal();

  const closeButton = document.querySelector('.close-btn');
  closeButton.addEventListener('click', () => {
    modal.close();
    container.style.opacity = '100%';
  });
}
```

<br>

Função de compartilhar a aplicação

```js
function share() {
  if (navigator.share !== undefined) {
    navigator
      .share({
        title: 'Movie Hall',
        text: 'Cansado de rolar a tela? As melhores sugestões de filme estão aqui! Acesse: ',
        url: 'https://udanielnogueira.github.io/movie-hall/',
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }
}
```

<h2 id="contact">Meu contato</h2>

LinkedIn [@udanielnogueira](https://www.linkedin.com/in/udanielnogueira/)
