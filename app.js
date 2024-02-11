//08 Desafio: hora da prática
// Desafios finais
//6)-Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha.
// Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado".
// Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

var valor1 = parseInt(prompt("Me passe o primeiro valor a ser subtraido"))
var valor2 = parseInt(prompt("Me passe o segundo valor a ser subtratido"))
var resultado = (valor1 - valor2)
    console.log(`O valor da subtração de ${valor1} com ${valor2} é ${resultado}`)
    alert(`O valor da subtração de ${valor1} com ${valor2} é ${resultado}`)



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





