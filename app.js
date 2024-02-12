//08 Desafio: hora da prática
// Desafios finais
//8)Crie uma variável "numero" e peça um valor com prompt verifique se é positivo,
// negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = parseInt(prompt("Digite um Número"))
    if(numero<0){
        alert("Número Negativo")
    } else{
        alert("Número Positivo")
    }


// alert('Boas-vindas ao jogo do número secreto');
// let nome = prompt("Qual seu Nome");
// let numeroSecreto = parseInt(Math.random()*100+1);
// let chute;
// let tentativas = 1;
//
// while(chute != numeroSecreto){
//     chute  = prompt('Escolha um número entre 1 e 100');
//     if (chute == numeroSecreto){
//         break;
//     } else {
//         if (chute > numeroSecreto){
//             alert(`${nome } você errou o número secreto, o número é menor que ${ chute} esta é sua ${tentativas} tentativa(s)`);
//         }else {
//             alert(`${nome } você errou o número secreto é maior que ${ chute} esta é sua ${tentativas} tentativa(s)`);
//         }
//         tentativas++;
//     }
//
// }
// let palavraTentativa = tentativas >1 ? 'tentativas' : 'tentativa';
// alert(`Isso ai ${nome}! você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}`);

    // if (tentativas > 1) {
    //     alert(`Isso ai ${nome}! você descobriu o número secreto ${numeroSecreto} em ${tentativas} tentativas`);
    // } else {
    //     alert(`Isso ai${nome} você descobriu o número secreto ${numeroSecreto} em ${tentativas} tentativa`);
    // }





