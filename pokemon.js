class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        if(Math.random() < this.luck) {
            return true 
        } else {
            return false
        }
    }

    attackPokemon(cible) {
        if(cible.isLucky()) {
            cible.hp = cible.hp - (this.attack-this.defense)
            console.log(cible.name + " à été attaqué par " + this.name + " et est maintenant " + cible.hp + " HP");
        } else {
            console.log(cible.name + " à esquivé l'attaque de " + this.name + " !")
        }
        
    }
}

let Carapuce = new Pokemon("Carapuce", 20, 14, 112, 0.6);
let Dracaufeu = new Pokemon("Dracaufeu", 24, 10, 100, 0.3);

console.log("Et voici venir le combat tant attendu opposant Dracaufeu à Carapuce ! Pokemons, combattez !")

while(Carapuce.hp > 0 && Dracaufeu.hp > 0) {
    Carapuce.attackPokemon(Dracaufeu);
    Dracaufeu.attackPokemon(Carapuce);
}
    
if(Dracaufeu.hp <= 0) {
    console.log("Dracaufeu est K.O ! Carapuce remporte le combat !")
}

if(Carapuce.hp <= 0) {
    console.log("Carapuce est K.O ! Dracaufeu remporte le combat !")
}


