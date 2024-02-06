
alert('Boas-vindas ao jogo do número secreto');
let nome = prompt("Qual seu Nome");
let numeroSecreto = 29;
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute  = prompt('Escolha um número entre 1 e 30');
    if (chute == numeroSecreto){
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`${nome } você errou o número secreto, o número é menor que ${ chute} esta é sua ${tentativas} tentativa(s)`);
        }else {
            alert(`${nome } você errou o número secreto é maior que ${ chute} esta é sua ${tentativas} tentativa(s)`);
        }
        tentativas++;
    }

}
let palavraTentativa = tentativas >1 ? 'tentativas' : 'tentativa';
alert(`Isso ai ${nome}! você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}`);

    // if (tentativas > 1) {
    //     alert(`Isso ai ${nome}! você descobriu o número secreto ${numeroSecreto} em ${tentativas} tentativas`);
    // } else {
    //     alert(`Isso ai${nome} você descobriu o número secreto ${numeroSecreto} em ${tentativas} tentativa`);
    // }





