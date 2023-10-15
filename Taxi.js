let Character = {
    Name: "John",
    SanteMentale: 10
}

let Playlist = [
    'Anissa - Wejdenne',
    'SKELETONS - Travis Scott',
    'A$AP Forver - A$AP Rocky',
    'N*ggas In Paris - Jay Z',
    '90210 - Travis Scott'
]

let Trajet = {
    FeuxRouges: 30,
    Changements: 0
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log("Ici débute votre trajet, vous espérez ne pas tomber la musique 'Anissa' de Wejdene. Si vous écoutez cette musique plus de 10 fois, vous exploserez, causant alors un tragique accient !")

for (let i = 1; i < Trajet.FeuxRouges; i++) {
    let SelectionMusique = getRandomInt(5)
    console.log("La musique qui passe est " + Playlist[SelectionMusique])
    console.log("Il vous reste " + ((Trajet.FeuxRouges) - i) + " feux rouges.")
    if (Playlist[SelectionMusique] == Playlist[0]) {
        Character.SanteMentale--
        console.log("Encore cette musique ! Vous perdez " + Character.SanteMentale + " de santé mentale et vous changez de taxi.")
        Trajet.Changements++
    }
    if (Character.SanteMentale <= 0) {
        console.log("Anissa à eu raison de vous ! Vous explosez et causez un terrible accident de la route...")
        break
    }
    if (i == 29) {
        console.log("Félicitations, vous êtes bien arrivé !")
        console.log("Il vous aura en tout fallu " + Trajet.Changements + " changements de taxi !")
        console.log("Vous avez en tout perdu " + Character.SanteMentale + " de santé mentale.")
    }
}
