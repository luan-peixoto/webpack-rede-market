import '../css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery/dist/jquery.min.js";

import Popover from 'bootstrap/js/dist/popover';

import Toast from 'bootstrap/js/dist/toast';

// importar imagens para fazer com que o webpack crie uma pasta delas em dist

function importAll(r) {//
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg|ico)$/));


// FUNÇÃO PARA COLOCAR SOMBRA NA NAVBAR APÓS ROLAR A TELA:

$(window).scroll(function () {

    if ($(this).scrollTop() < 50) {
        $('.sticky-shadow').css({
            'box-shadow': 'none',
            '-moz-box-shadow': 'none',
            '-webkit-box-shadow': 'none'
        });
    }
    else {
        $('.sticky-shadow').css({
            'box-shadow': '0px 0px 5px rgba(0, 0, 0, 0.2)',
            '-moz-box-shadow': '0px 0px 5px rgba(0, 0, 0, 0.2)',
            '-webkit-box-shadow': '0px 0px 5px rgba(0, 0, 0, 0.2)'
        });
    }
});

// FUNÇÃO PARA REMOVER NAVBAR MOBILE SE CLICAR FORA DELA:

$(document).click(function (event) {
    if (!$(event.target).is('.navbar-collapse *')) {
        $('.navbar-collapse').collapse('hide');
    }
});

// TROCAR BOTÕES DE PESQUISA:
// com o wepack precisa usar window.nome_funcao = function
window.replace = function(hide, show) {
    document.getElementById(hide).style.display = "none";
    document.getElementById(show).style.display = "block";
}

// LIBERAR POPOVER BARRA DE PESQUISA:

const popover = new Popover(document.querySelector('.ativar-popover-pesq'), {
    container: 'body',
    html: true,
    placement: 'bottom',
    sanitize: false,
    content() {
        return document.querySelector('#conteudo-popover').innerHTML;
    }
})



// FUNÇÃO PARA COLOCAR LIBERAR BOTÃO DE VOLTAR AO TOPO:

$(window).scroll(function () {

    if ($(this).scrollTop() < 500) {
        $('.btn-visivel').fadeOut();
    }
    else {
        $('.btn-visivel').fadeIn();
    }
});

// INICIAR TOAST COM TIMEOUT:

setTimeout(function () {
    let myAlert = document.getElementById('toast-promo-relampago'); 
    if (myAlert !== null) { // previne que em paginas que não existam a div do toast, um erro não ocorra
        let bsAlert = new Toast(myAlert);
        bsAlert.show();
    }
}, 7000);