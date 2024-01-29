// Desafios
// Pergunte ao usuário qual é o dia da semana.
//
//
//     Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
//
//     Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".
//     Caso contrário, mostre "Tente novamente para ganhar.".
//     Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
//     Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

// 1) Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let dia = prompt("Olá qual é o dia da Semana?")
    if(dia === "Sabado"){
        alert("Bom final de Semana")
    } if(dia === "Domingo"){
    alert("Bom final de Semana")
} else{
        alert("Boa Semana")
}





//
// alert('Boas-vindas ao jogo do número secreto');
// let numeroSecreto = 29;
// let chute = prompt('Escolha um número entre 1 e 30');
//
//
// if (chute == numeroSecreto){
//     alert(`Isso ai! você descobriu o número secreto ${numeroSecreto}`)
// } else {
//     alert(`Você errou`)
// }