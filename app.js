alert('Boas-vindas ao jogo do número secreto');
let nome = prompt("Qual seu Nome");
let numeroSecreto = 29;
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute  = prompt('Escolha um número entre 1 e 30');
    if (chute == numeroSecreto){
        alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} em ${tentativas} tentatia(s)`)
    } else {
        if (chute > numeroSecreto){
            alert(`Você errou o número secreto é menor que ${ chute} esta é sua ${tentativas} tentativa(s)`)
        }else {
            alert(`Você errou o número secreto é maior que ${ chute} esta é sua ${tentativas} tentativa(s)`)
        }
        tentativas++;
    }

}




