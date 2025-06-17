 const textos = [

            "Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês.",
            "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas serão acrescentadas a vocês.", 
            "Por isso não tema, pois estou com você não tenha medo, pois sou o seu DeusEu o fortalecerei e o ajudarei eu o segurarei com a minha mão direita vitoriosa. ",
            "se o meu povo, que se chama pelo meu nome, se humilhar e orar, buscar a minha face e se afastar dos seus maus caminhos, dos céus o ouvirei, perdoarei o seu pecado e curarei a sua terra.",
            "Se, porém, não agrada a vocês servir ao Senhor, esco­lham hoje a quem irão servir, se aos deuses que os seus antepassados serviram além do Eufrates, ou aos deuses dos amorreus, em cuja terra vocês estão vivendo. Mas eu e a minha família servi­remos ao Senhor"

];

let contadorCerto = 0;

let contadorErrado = 0;

let intervaloTempo;

let tempoRestante = 60;

let textoAtual = '';

function iniciarContadorTempo(){

    if(intervaloTempo) clearInterval(intervaloTempo);

    tempoRestante = 60;

    document.getElementById('contadorTempo').textContent = tempoRestante;

    intervaloTempo = setInterval(() =>{

        tempoRestante --;

        document.getElementById('contadorTempo').textContent = tempoRestante;

        if(tempoRestante <= 0){

            clearInterval(intervaloTempo);

            verificarResultado()

        }
    },1000);

}

function verificarResultado(){ 

    const porcentagemCerta = contadorCerto / textoAtual.length;

    if(porcentagemCerta >= 0.8){

        alert(`Parabéns! Você foi aprovado!`)
    }else{

        alert(`Tente novamente, mais tarde!`);
    }

    resetar()

}

function resetar(){

    const elementoEntrada = document.getElementById('entrada');

    elementoEntrada.value = '';

    elementoEntrada.disabled = true;

    clearInterval(intervaloTempo);

    document.getElementById('contadorCerto').textContent = '0';

    document.getElementById('contadorErrado').textContent = '0';

    document.getElementById('contadorTempo').textContent = '60';

    tempoRestante = 60;

    contadorCerto = 0;

    contadorErrado = 0;

    [...document.getElementById('texto').children].forEach(span => {
        span.classList.remove('certo', 'errado');
    });
    
}

function mudarNivel(nivel) {

    resetar();

    textoAtual = textos[nivel - 1];

    const elementoTexto = document.getElementById('texto');

    elementoTexto.innerHTML = textoAtual.split('').map(char => `<span>${char}</span>`).join('');

    document.getElementById('entrada').disabled = false;

}

document.getElementById('entrada').addEventListener('input', function() {

    if(tempoRestante === 60) iniciarContadorTempo();

    const entradaTexto = this.value;

    if(entradaTexto.length > textoAtual.length){

        this.value = entradaTexto.substring(0, textoAtual.length);

        return;
    }

    contadorCerto = 0;

    contadorErrado = 0;

    [...document.getElementById('texto').children].forEach((span, index) =>{

        if (index < entradaTexto.length) {

             if(entradaTexto[index] === span.textContent) {

            span.classList.add('certo');

            span.classList.remove('errado');

            contadorCerto++;
        }else{

             span.classList.add('errado');

            span.classList.remove('certo');

            contadorErrado++;


        }
            
        }else{
            span.classList.remove('certo','errado');

        }

    });

    document.getElementById('contadorCerto').textContent = contadorCerto;
    
    document.getElementById('contadorErrado').textContent = contadorErrado;
    
    if(entradaTexto.length === textoAtual.length){

        verificarResultado();

    }
});