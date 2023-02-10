function countryMedals(players, countries) {
    if (countries === undefined) return "Countries not provided";
    var result = [];
    for (let country of countries) {
        result.push({ name: country, athlete: [], totalMedals: 0 });
    }

    for (let player of players) {
        for (let i = 0; i < result.length; i++) {
            if (result[i].name === player.country) {
                result[i].athlete.push(player.name);
                result[i].totalMedals += player.medals;
            }
        }
    }

    return result; // TODO: replace this
}

let playerData = [
    {
        name: "Lionel Messi",
        medals: 5,
        country: "Argentina",
    },
    {
        name: "Iker Casillas",
        medals: 7,
        country: "Spain",
    },
    {
        name: "Ahmad Waluyo",
        medals: 5,
        country: "Indonesia",
    },
    {
        name: "Alvin Arkansas",
        medals: 8,
        country: "Indonesia",
    },
    {
        name: "Gabriel Batistuta",
        medals: 1,
        country: "Argentina",
    },
    {
        name: "Xavi Hernandes",
        medals: 9,
        country: "Spain",
    },
    {
        name: "Carles Puyol",
        medals: 5,
        country: "Spain",
    },
    {
        name: "Jatmika Teja",
        medals: 6,
        country: "Indonesia",
    },
    {
        name: "Sergio Aguero",
        medals: 3,
        country: "Argentina",
    },
];

console.log(countryMedals(playerData, ["Indonesia", "Spain"]));
console.log(countryMedals(playerData, ["Argentina", "Spain"]));
console.log(countryMedals(playerData, ["Indonesia", "Argentina"]));
console.log(countryMedals(playerData));

module.exports = countryMedals;
