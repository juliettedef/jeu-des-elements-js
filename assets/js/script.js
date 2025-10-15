function powerPc() {
    const pouvoirs = ["feu", "eau", "terre"];
    const random = Math.floor(Math.random() * pouvoirs.length);
    return pouvoirs[random];
}

console.log("Pouvoir du PC :", powerPc());

function powerPlayer(event) {
    const playerChoice = event.target.id;
    console.log("Le joueur a cliqué sur :", playerChoice);
    return playerChoice;
}

const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
    button.addEventListener("click", powerPlayer);
});




