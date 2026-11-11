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


// Modo alto contraste
// acha o botão de contraste na página html
const botaoContraste = document.getElementById('botao-contraste');

// mantém o modo escolhido ao recarregar a página
// faz o site se lembrar se a ultima vez que voce reacarregou a pagina estava com o modo contraste ligado ou desligado
if (localStorage.getItem('contraste') === 'ligado') {
  document.body.classList.add('alto-contraste');
  botaoContraste.setAttribute('aria-pressed', 'true');
}

botaoContraste.addEventListener('click', function () {
  const ligado = document.body.classList.toggle('alto-contraste'); // liga/desliga
  botaoContraste.setAttribute('aria-pressed', ligado);             // informa se o botão ta apertado ou não
  localStorage.setItem('contraste', ligado ? 'ligado' : 'desligado');
});
