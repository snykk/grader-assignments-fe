function hollyKnight(name, stamina, undead) {
    if (stamina > undead) {
        return `Holly Knight ${name} memenangkan pertempuran dengan mudah!`;
    } else if (stamina < undead) {
        return `Holly knight ${name} mengalahkan ${stamina} undead, namun sayang holly knight ${name} gugur di medan perang!`;
    }
    return `Beruntung Holly knight ${name} berhasil mengalahkan ${undead} undead!`; // TODO: replace this
}

console.log(hollyKnight("Lancelot", 30, 20)); // Holly Knight Lancelot memenangkan pertempuran dengan mudah!
console.log(hollyKnight("Gallahad", 10, 10)); // Beruntung Holly knight Gallahad berhasil mengalahkan 10 undead!
console.log(hollyKnight("Tristan", 100, 110)); // Holly knight Tristan mengalahkan 100 undead, namun sayang holly knight Tristan gugur di medan perang!

module.exports = hollyKnight;
