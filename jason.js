// Liste de prénoms aléatoires
const prenoms = ["Alice", "Bob", "Charlie", "Dave", "Brandon", "Frank", "Jennifer", "Anna", "Stacy", "Jack"];

// Liste de caractéristiques de survivants
const caracteristiques = ["Nerd", "Sportif", "Blonde", "Génie", "Artiste", "Aventurier", "Peureux", "Scientifique", "Infirmière", "Étudiant"];

// Classe représentant le tueur en série
class Jason {
    constructor() {
        this.nom = "Jason";
        this.vie = 100;
        this.probabiliteMourir = 0.3;
        this.probabiliteInfligerDegats = 0.5;
        this.probabiliteMourirDegats = 0.2;
    }

    attaquer(survivant) {
        const action = Math.random();
        if (action < this.probabiliteMourir) {
            return this.nom + " a tué " + survivant.nom + ".";
        } else if (action < this.probabiliteMourir + this.probabiliteInfligerDegats) {
            survivant.vie -= 10;
            return survivant.nom + " a esquivé et infligé 10 points de dégâts à " + this.nom + ".";
        } else {
            survivant.vie -= 15;
            return survivant.nom + " a infligé 15 points de dégâts à " + this.nom + " mais est mort.";
        }
    }
}

// Classe représentant un survivant
class Survivant {
    constructor() {
        this.nom = prenoms[Math.floor(Math.random() * prenoms.length)];
        this.caracteristique = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
        this.vie = 20;
    }

    attaquer(jason) {
        const action = Math.random();
        if (action < 0.5) {
            jason.vie -= 10;
            return this.nom + " a attaqué " + jason.nom + " et infligé 10 points de dégâts.";
        } else {
            return this.nom + " a attaqué " + jason.nom + " mais n'a pas réussi à le toucher.";
        }
    }
}

// Création du tueur
const jason = new Jason();

// Création des survivants
const survivants = Array.from({ length: 5 }, () => new Survivant());

// Liste pour suivre les morts
const morts = [];

// Tant que le tueur est en vie et au moins un survivant est en vie
console.log("Un groupe de 8 survivants sont à la recherche du tueur Jason. Ce dernier se cache dans une forêt sinistre et est bien décidé à s'occuper de tous les survivants uns par uns...")
while (jason.vie > 0 && survivants.some(s => s.vie > 0)) {
    for (const survivant of survivants) {
        if (survivant.vie > 0) {
            const action = survivant.attaquer(jason);
            console.log(action);
            if (jason.vie <= 0) {
                console.log(jason.nom + " est mort.");
                break;
            }
        }
    }

    for (const survivant of survivants) {
        if (jason.vie > 0 && survivant.vie > 0) {
            const action = jason.attaquer(survivant);
            console.log(action);
            if (survivant.vie <= 0) {
                morts.push(survivant.nom);
                console.log(survivant.nom + " est mort !");
            }
        }
    }
}

if (jason.vie <= 0) {
    console.log("Les survivants ont gagné ! RIP à " + morts.join(', ') + ".");
} else {
    console.log("Le tueur " + jason.nom + " a survécu, les survivants ont échoué.");
}