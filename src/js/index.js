const btnAvancar = document.querySelector('#btn-avancar');
const btnVoltar = document.querySelector('#btn-voltar');
/* Selecionando todos os cartôes dos pokemons e guardando nas constantes */
const cartoes = document.querySelectorAll('.cartao');

let cartaoAtual = 0;

function esconderCartaoSeleciodado() {
    const cartaoSeleciodado = document.querySelector('.selecionado');
    /* classList permite que o javascript manipule classes do css, nesse caso está recebendo a função remove que irá remover uma classe de um elemento */
    cartaoSeleciodado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao) {
    /* [] determina a posição do vetor */
    cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', () => {
    /* .lenght = retorna o tamanho do vetor ou seja a qtde de elementos qu está guardada nele */
    if (cartaoAtual < cartoes.length - 1) {
        esconderCartaoSeleciodado();

        cartaoAtual++;
        mostrarCartao(cartaoAtual);
    }

});

btnVoltar.addEventListener('click', () => {
    /* .lenght = retorna o tamanho do vetor ou seja a qtde de elementos qu está guardada nele */
    if (cartaoAtual > 0) {
        esconderCartaoSeleciodado();

        cartaoAtual--;
        mostrarCartao(cartaoAtual);
    }

});



