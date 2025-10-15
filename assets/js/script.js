
let playerScore = 0;
let pcScore = 0;

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
    
    const pcChoice = powerPc();
    console.log("L'ordinateur a choisi :", pcChoice)

    playGame(playerChoice, pcChoice);
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
        resultat = `Égalité ! Vous avez tous les deux choisi l'élement ${playerChoice}.`;
    } else if (
        (playerChoice === "feu" && pcChoice === "terre") ||
        (playerChoice === "eau" && pcChoice === "feu") ||
        (playerChoice === "terre" && pcChoice === "eau")
    ) {
        resultat = `Bravo ! L'élement ${playerChoice} bat l'élément ${pcChoice}.`;
        playerScore++;
    } else {
        resultat = `Perdu ! L'élément ${pcChoice} bat l'élément ${playerChoice}.`;
        pcScore++;
    }

    document.querySelector(".resultat").textContent = resultat;
    console.log(resultat)

    document.getElementById("player-score").textContent = playerScore;
    document.getElementById('pc-score').textContent = pcScore

    document.querySelector(".resultat").textContent = resultat;

}



