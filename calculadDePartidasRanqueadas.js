// Desafio Da DIO proposto pelo Felipão 
let saldoVitorias = soma (140, 13)

function soma(vitorias, derrotas){
    let resultado = vitorias - derrotas
    return resultado
}
if (saldoVitorias <=10) {
        console.log("O Herói tem de saldo de " + saldoVitorias +  " vitórias e está no nível de Ferro")}
if ((saldoVitorias >=11) && (saldoVitorias <=20)) {
    console.log("O Herói tem de saldo de " + saldoVitorias +  " vitórias e está no nível de Bronze")
}
if ((saldoVitorias >=21) && (saldoVitorias <=50)) {
    console.log("O Herói tem de saldo de " + saldoVitorias +  " vitórias e está no nível de Prata")
}
if ((saldoVitorias >=51) && (saldoVitorias <=80)) {
    console.log("O Herói tem de saldo de " + saldoVitorias +  " vitórias e está no nível de Ouro")
}
if ((saldoVitorias >=81) && (saldoVitorias <=90)) {
    console.log("O Herói tem de saldo de " + saldoVitorias +  " vitórias e está no nível de Diamante")
}
if ((saldoVitorias >=91) && (saldoVitorias <=100)) {
    console.log("O Herói tem de saldo de " + saldoVitorias +  " vitórias e está no nível de Lendário")
}
if (saldoVitorias>=101) {
    console.log("O Herói tem de saldo de " + saldoVitorias +  " vitórias e está no nível de Imortal")
}
//Desafio Completo!!!!