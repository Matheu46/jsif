const paragrafo = document.querySelector('p');
const body = document.querySelector('body');

function mudarCor(){
    if(body.className == 'fechado'){
        body.className = 'aberto';
        paragrafo.innerText = 'Aberto';
    } else {
        body.className = 'fechado';
        paragrafo.innerText = 'Fechado';
    }

}

paragrafo.addEventListener('click', mudarCor);