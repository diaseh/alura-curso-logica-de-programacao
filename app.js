// Desafios
// 4)-Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numero = prompt("Me passe um número para contar");
contador =0;

while(contador <= numero){
    alert(contador);
    console.log(contador);
    contador++;

}


// let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
// let soma = 0;
// let contador = qtdNumeros;
//
// while(contador > 0){
//     let numero = parseInt(prompt('Digite o numero:'));
//     soma += numero;
//     contador --;
// }
//
// let media = soma / qtdNumeros;
//
// console.log(media);







// alert('Boas-vindas ao jogo do número secreto');
// let nome = prompt("Qual seu Nome");
// let numeroSecreto = 29;
// let chute;
// let tentativas = 1;
//
// while(chute != numeroSecreto){
//     chute  = prompt('Escolha um número entre 1 e 30');
//     if (chute == numeroSecreto){
//         alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} em ${tentativas} tentatia(s)`)
//     } else {
//         if (chute > numeroSecreto){
//             alert(`Você errou o número secreto é menor que ${ chute} esta é sua ${tentativas} tentativa(s)`)
//         }else {
//             alert(`Você errou o número secreto é maior que ${ chute} esta é sua ${tentativas} tentativa(s)`)
//         }
//         tentativas++;
//     }
//
// }




