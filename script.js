// Carregar

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

// Exibir Ação

function exibirAction() {
  const btns = document.querySelectorAll('.btn');
  btns.forEach((element) => {
    element.classList.remove('active');
  });

  const btnAction = document.querySelector('.btnAction');
  btnAction.classList.add('active');

  const filmes = document.querySelectorAll('.filme');
  filmes.forEach((element) => {
    if (element.classList.contains('action')) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
}

// Exibir Suspense

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

// Exibir Terror

function exibirTerror() {
  const btns = document.querySelectorAll('.btn');
  btns.forEach((element) => {
    element.classList.remove('active');
  });

  const btnTerror = document.querySelector('.btnTerror');
  btnTerror.classList.add('active');

  const filmes = document.querySelectorAll('.filme');
  filmes.forEach((element) => {
    if (element.classList.contains('terror')) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
}

// Exibir Todos

function exibirTodos() {
  const btns = document.querySelectorAll('.btn');
  btns.forEach((element) => {
    element.classList.remove('active');
  });

  const btnTodos = document.querySelector('.btnTodos');
  btnTodos.classList.add('active');

  const filmes = document.querySelectorAll('.filme');
  filmes.forEach((element) => {
    element.style.display = 'block';
  });
}

// Modal

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

// Share

function share() {
  if (navigator.share !== undefined) {
    navigator
      .share({
        title: 'Movie Hall',
        text: 'Cansado de rolar a tela? As melhores sugestões de filme estão aqui! Acesse: ',
        url: 'https://movie-hall.vercel.app/',
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }
}
