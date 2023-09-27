//Desafio da DIO. Seu intuito é criar classes de heróis que vão se comportar de diferentes maneiras.
let idade =25
let name = "Drogon Stormhold"
// Aqui temos a seleção do personagem escolhida pelo jogador
let escolhaHeroi= 3
class TiposDeHeroisEAtaques {
    constructor (tipoHero, tipoAtaque){
        this.tipoHero= tipoHero
        this.tipoAtaque= tipoAtaque
    }    
    atack(){
        console.log(`O Herói de ${idade} anos ${name}, ${this.tipoHero}, atacou usando ${this.tipoAtaque}.`)
    }

}
let heroiMago = new TiposDeHeroisEAtaques("Mago" , "Magia")
let heroiGuerreiro = new TiposDeHeroisEAtaques("Guerreiro", "Espada")
let heroiMonge = new TiposDeHeroisEAtaques("Monge", "Artes Marciais")
let heroiNinja = new TiposDeHeroisEAtaques("Ninja", "Shuriken")

if (escolhaHeroi== 1) {
    heroiMago.atack()
}
if (escolhaHeroi== 2) {
    heroiGuerreiro.atack()
}
if (escolhaHeroi== 3) {
    heroiMonge.atack()
}
if (escolhaHeroi== 4) {
    heroiNinja.atack()
}
