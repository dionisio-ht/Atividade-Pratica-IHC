const botoes = document.querySelectorAll('.menu a');

botoes.forEach(function (botao) {
  botao.addEventListener('click', function (event) {
    event.preventDefault(); // impede a página de pular para a seção

    const anterior = document.querySelector('.menu a.ativo'); // procura um botão ativo

    if (anterior) {
      anterior.classList.remove('ativo'); // desativa o anterior
    }

    botao.classList.add('ativo'); // ativa o clicado

    document.querySelector('.tela.ativa').classList.remove('ativa'); // esconde a tela atual

    const id = botao.getAttribute('href'); // ex: "#metodologia"
    document.querySelector(id).classList.add('ativa'); // mostra a tela do botão
  });
});