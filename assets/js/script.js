// fonction powerPC

function powerPc() {
    const pouvoirs = ["feu", "eau", "terre"];
    const random = Math.floor(Math.random() * pouvoirs.length);
    return pouvoirs[random];
}

console.log("Pouvoir du PC :", powerPc());

// fonction powerPlayer

function powerPlayer(event) {
    const playerChoice = event.target.id;
    console.log("Le joueur a cliqué sur :", playerChoice);
    return playerChoice;
}

// récupération des clics sur les boutons

const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
    button.addEventListener("click", powerPlayer);
});

// fonction playGame

function playGame(playerChoice, pcChoice) {
    let resultat = "";

    if (playerChoice === pcChoice) {
        resultat = `Égalité ! Vous avez tous les deux choisi ${playerChoice}.`;
    } else if (
        (playerChoice === "feu" && pcChoice === "terre") ||
        (playerChoice === "eau" && pcChoice === "feu") ||
        (playerChoice === "terre" && pcChoice === "eau")
    ) {
        resultat = `Bravo ! ${playerChoice} bat ${pcChoice}.`;
    } else {
        resultat = `Perdu ! ${pcChoice} bat ${playerChoice}.`;
    }
}




