let jogadorEscolha = 0;
let jogadorPontos = 0;
let computadorEscolha = 0;
let computadorPontos = 0;
let ganhador = -1;

function jogar(escolha) {
    jogadorEscolha = escolha;
    computadorEscolha = Math.floor(Math.random() * (3- 1 +1 )) +1;
    /* PEDRA = 1        EU = 1
     PAPEL = 2          COMPUT. = 2
     TESOURA = 3        EMPATE = 0 */

    // PEDRA
    if (jogadorEscolha == 1 && computadorEscolha == 1) {
        ganhador = 0;
    } else if (jogadorEscolha == 1 && computadorEscolha == 2) {
        ganhador = 2;
    } else if (jogadorEscolha == 1 && computadorEscolha == 3) {
        ganhador = 1;
        // PAPEL
    } else if (jogadorEscolha == 2 && computadorEscolha == 1) {
        ganhador = 1;
    } else if (jogadorEscolha == 2 && computadorEscolha == 2) {
        ganhador = 0;
    } else if (jogadorEscolha == 2 && computadorEscolha == 3) {
        ganhador = 2;
    }
    // TESOURA
    else if (jogadorEscolha == 3 && computadorEscolha == 1) {
        ganhador = 2;
    } else if (jogadorEscolha == 3 && computadorEscolha == 2) {
        ganhador = 1;
    } else if (jogadorEscolha == 3 && computadorEscolha == 3) {
        ganhador = 0;
    }


    // JOGADOR
    document.getElementById('jogadorEscolha1').classList.remove('selecionado');
    document.getElementById('jogadorEscolha2').classList.remove('selecionado');
    document.getElementById('jogadorEscolha3').classList.remove('selecionado');
    // COMPUT.
    document.getElementById('computadorEscolha1').classList.remove('selecionado');
    document.getElementById('computadorEscolha2').classList.remove('selecionado');
    document.getElementById('computadorEscolha3').classList.remove('selecionado');

    document.getElementById('jogadorEscolha' + jogadorEscolha).classList.add('selecionado');
    document.getElementById('computadorEscolha' + computadorEscolha).classList.add('selecionado');

    if (ganhador == 0) {
        document.getElementById('mensagem').innerHTML = "EMPATE"
    } else if (ganhador == 1) {
        document.getElementById('mensagem').innerHTML = "K.O"
        jogadorPontos++;
    } else if (ganhador == 2) {
        document.getElementById('mensagem').innerHTML = "hoooo My GOD"
        computadorPontos++;
    }

    document.getElementById('jogadorPontos').innerHTML = jogadorPontos;
    document.getElementById('computadorPontos').innerHTML = computadorPontos;


}