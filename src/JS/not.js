const botaoNao = document.getElementById('nao');
const modalNao = document.getElementById('modal-nao');
const spanFechar = document.querySelector('.fechar');

botaoNao.addEventListener('click', function() {
    modalNao.style.display = 'block';
});

spanFechar.addEventListener('click', function() {
    modalNao.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modalNao) {
        modalNao.style.display = 'none';
    }
});

//const botaoNao = document.getElementById('nao');

/*
botaoNao.addEventListener('mouseover', function() {
    const maxX = window.innerWidth - botaoNao.offsetWidth;
    const maxY = window.innerHeight - botaoNao.offsetHeight;

    let randomX, randomY;

    do {
        randomX = Math.floor(Math.random() * maxX);
        randomY = Math.floor(Math.random() * maxY);
    } while (
        randomX + botaoNao.offsetWidth > window.innerWidth ||
        randomY + botaoNao.offsetHeight > window.innerHeight
    );

    botaoNao.style.left = randomX + 'px';
    botaoNao.style.top = randomY + 'px';
});

document.getElementById('sim').addEventListener('click', function() {
    // Redireciona para a próxima seção ou página
    transicao(4, 5); // Assumindo que a próxima seção tenha o ID "section5"
});



function fuja() {
    let larguraJanela = window.innerWidth;
    let alturaJanela = window.innerHeight;

    let maxX = larguraJanela - botaoNao.offsetWidth;
    let maxY = alturaJanela - botaoNao.offsetHeight;

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = randomX + 'px';
    botaoNao.style.top = randomY + 'px';
}

const botaoNao = document.getElementById('nao');
const posicoes = [
    { top: '10%', left: '10%' },
    { top: '80%', left: '80%' },
    { top: '20%', left: '70%' },
    { top: '70%', left: '20%' }
];
let posicaoAtual = 0;

botaoNao.addEventListener('mouseover', function() {
    posicaoAtual = (posicaoAtual + 1) % posicoes.length;
    botaoNao.style.top = posicoes[posicaoAtual].top;
    botaoNao.style.left = posicoes[posicaoAtual].left;
});

document.getElementById('sim').addEventListener('click', function() {
    // Redireciona para a próxima seção ou página
    transicao(5, 6); // Assumindo que a próxima seção tenha o ID "section5"
});

*/