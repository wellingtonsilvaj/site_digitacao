 const textos = [

            "Como se mede uma pessoa? Os tamanhos variam conforme o grau de envolvimento.",
            "Ela é enorme pra você quando fala do que leu e viveu, quando trata você com carinho e respeito, quando olha nos olhos e sorri destravado.", 
            "Uma pessoa é gigante pra você quando se interessa pela sua vida, quando busca alternativas para o seu crescimento, quando sonha junto. ",
            "Uma pessoa é grande quando perdoa, quando compreende, quando se coloca no  com o que espera de si mesma",
            "É difícil conviver com esta elasticidade: as pessoas se agigantam e se encolhem aos nossos olhos."

];

let contadorCerto = 0;

let contadorErrado = 0;

let intervaloTempo;

let tempoRestante = 60;

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

function resetar(params){

    
}