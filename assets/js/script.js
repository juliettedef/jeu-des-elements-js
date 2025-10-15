

const pouvoirs = ["feu", "eau", "terre"];
function powerPc () {
    const random = Math.floor(Math.random() * pouvoirs.length);
    return pouvoirs[random];
}

console.log("Pouvoir du PC :", powerPc());