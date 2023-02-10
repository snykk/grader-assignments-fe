function findMovies(favoriteGenre) {
    const movies = [
        {
            id: 1,
            name: "Avengers end game",
            genre: "Action",
            soldTicket: 149,
            capacity: 150,
        },
        {
            id: 2,
            name: "La la Land",
            genre: "Romance",
            soldTicket: 20,
            capacity: 75,
        },
        {
            id: 3,
            name: "Beauty and the Beast",
            genre: "Romance",
            soldTicket: 50,
            capacity: 50,
        },
        {
            id: 4,
            name: "Superman vs Batman",
            genre: "Action",
            soldTicket: 150,
            capacity: 250,
        },
        {
            id: 5,
            name: "Transformer",
            genre: "Action",
            soldTicket: 90,
            capacity: 90,
        },
        {
            id: 6,
            name: "5 feet apart",
            genre: "Romance",
            soldTicket: 25,
            capacity: 45,
        },
        {
            id: 7,
            name: "Hamilton",
            genre: "Musical",
            soldTicket: 295,
            capacity: 300,
        },
        {
            id: 8,
            name: "Dear Evan Hansen",
            genre: "Musical",
            soldTicket: 150,
            capacity: 200,
        },
        {
            id: 9,
            name: "Conjuring",
            genre: "Horror",
            soldTicket: 30,
            capacity: 100,
        },
        {
            id: 10,
            name: "Annabelle",
            genre: "Horror",
            soldTicket: 10,
            capacity: 30,
        },
        {
            id: 11,
            name: "Fast and Furios",
            genre: "Action",
            soldTicket: 25,
            capacity: 40,
        },
        {
            id: 12,
            name: "Romeo and Julet",
            genre: "Romance",
            soldTicket: 15,
            capacity: 15,
        },
        {
            id: 13,
            name: "Wicked",
            genre: "Musical",
            soldTicket: 75,
            capacity: 75,
        },
    ];

    var newMovie = [];

    for (let movie of movies) {
        if (favoriteGenre.includes(movie.genre)) {
            newMovie.push(movie);
        }
    }

    return newMovie;
}

function findTicketAvailability(movie, user) {
    return movie.capacity - movie.soldTicket >= user.ticket;
}

function findRecommendation(user) {
    var getRelateMovie = findMovies(user.favoriteGenre);

    var recommendationMovie = [];
    for (let movie of getRelateMovie) {
        if (findTicketAvailability(movie, user)) {
            recommendationMovie.push(movie);
        }
    }

    return recommendationMovie;
}

function generateRecommendation(user) {
    var priceByGenre = {
        Action: 100000,
        Musical: 80000,
        Romance: 40000,
        Horror: 75000,
    };

    var movieRecomendation = findRecommendation(user);

    var result = [];
    for (let movie of movieRecomendation) {
        result.push({
            id: movie.id,
            name: movie.name,
            genre: movie.genre,
            totalPrice: user.ticket * priceByGenre[movie.genre],
        });
    }

    if (result.length === 0) {
        return "Tidak ada film yang sesuai kriteria";
    }
    return result;
}

let user1 = {
    name: "Eddy",
    ticket: 20,
    favoriteGenre: ["Musical", "Romance"],
};

// let user2 = {
//     name: "Eddy",
//     ticket: 20,
//     favoriteGenre: ["Musical", "Romance"],
// };

// let user3 = {
//     name: "Afis",
//     ticket: 1,
//     favoriteGenre: ["Sci Fi", "Documentary", "Thriller"],
// };

console.log(generateRecommendation(user1));
// console.log(generateRecommendation(user2));
// console.log(generateRecommendation(user3));

module.exports = {
    findMovies,
    findTicketAvailability,
    findRecommendation,
    generateRecommendation,
};
