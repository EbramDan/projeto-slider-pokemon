/*
Objetivo 1 - quando clicar na seta de avançar temos que  ostrar o próximocartão da lista
    -passo 1- dar um jeito de pegar o elemento HTML da seta avançar.
    -passo 2- dar um jeito de identificar o clique do usuário na seta avançar.
    -passo 3 - fazer aparecer o próximo cartão da lista
    -passo 4- buscar o cartão que esta selecionado e esconder.

Objetivo 2 - quando clicar na seta de voltar temos que mostrar o cartão anterior da lista
     -passo 1- dar um jeito de pegar o elemento HTML da seta voltar.
    -passo 2- dar um jeito de identificar o clique do usuário na seta voltar.
    -passo 3 - fazer aparecer o cartão anterior da lista
    -passo 4- buscar o cartão que esta selecionado e esconder.
*/
window.alert('oi, seja bem vindo a agenda pokemon! Fique a vontade para consultar os pokemons aqui encontrados')

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado (){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click",function () {
    if(cartaoAtual === cartoes.length - 1)return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostarCartao(cartaoAtual);
    
});

/*parte do botão voltar é daqui para frente
*/

btnVoltar.addEventListener('click',function (){ 
    if(cartaoAtual === 0) return;
    
    esconderCartaoSelecionado();

    cartaoAtual--;
    mostarCartao(cartaoAtual);

});
