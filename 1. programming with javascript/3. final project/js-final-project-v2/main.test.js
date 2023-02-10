const { expect, describe, it } = require('@jest/globals');
const { findMovies,
    findTicketAvailability,
    findRecommendation,
    generateRecommendation } = require('./main');

describe("findMovies", () => {
    it('should generate the movies list based on the user favorite genre', () => {
        let result1 = [
            {
                id: 1,
                name: 'Avengers end game',
                genre: 'Action',
                soldTicket: 149,
                capacity: 150
            },
            {
                id: 4,
                name: 'Superman vs Batman',
                genre: 'Action',
                soldTicket: 150,
                capacity: 250
            },
            {
                id: 5,
                name: 'Transformer',
                genre: 'Action',
                soldTicket: 90,
                capacity: 90
            },
            {
                id: 11,
                name: 'Fast and Furios',
                genre: 'Action',
                soldTicket: 25,
                capacity: 40
            },
            {
                id: 7,
                name: 'Hamilton',
                genre: 'Musical',
                soldTicket: 295,
                capacity: 300
            },
            {
                id: 8,
                name: 'Dear Evan Hansen',
                genre: 'Musical',
                soldTicket: 150,
                capacity: 200
            },
            {
                id: 13,
                name: 'Wicked',
                genre: 'Musical',
                soldTicket: 75,
                capacity: 75
            }
        ]

        let result2 = [
            {
                id: 1,
                name: 'Avengers end game',
                genre: 'Action',
                soldTicket: 149,
                capacity: 150
            },
            {
                id: 4,
                name: 'Superman vs Batman',
                genre: 'Action',
                soldTicket: 150,
                capacity: 250
            },
            {
                id: 5,
                name: 'Transformer',
                genre: 'Action',
                soldTicket: 90,
                capacity: 90
            },
            {
                id: 11,
                name: 'Fast and Furios',
                genre: 'Action',
                soldTicket: 25,
                capacity: 40
            },
            {
                id: 7,
                name: 'Hamilton',
                genre: 'Musical',
                soldTicket: 295,
                capacity: 300
            },
            {
                id: 8,
                name: 'Dear Evan Hansen',
                genre: 'Musical',
                soldTicket: 150,
                capacity: 200
            },
            {
                id: 13,
                name: 'Wicked',
                genre: 'Musical',
                soldTicket: 75,
                capacity: 75
            },
            {
                id: 2,
                name: 'La la Land',
                genre: 'Romance',
                soldTicket: 20,
                capacity: 75
            },
            {
                id: 3,
                name: 'Beauty and the Beast',
                genre: 'Romance',
                soldTicket: 50,
                capacity: 50
            },
            {
                id: 6,
                name: '5 feet apart',
                genre: 'Romance',
                soldTicket: 25,
                capacity: 45
            },
            {
                id: 12,
                name: 'Romeo and Julet',
                genre: 'Romance',
                soldTicket: 15,
                capacity: 15
            },
            {
                id: 9,
                name: 'Conjuring',
                genre: 'Horror',
                soldTicket: 30,
                capacity: 100
            },
            {
                id: 10,
                name: 'Annabelle',
                genre: 'Horror',
                soldTicket: 10,
                capacity: 30
            }
        ]

        let test1 = findMovies(['Action', 'Musical'])
        let test2 = findMovies(['Action', 'Musical', 'Romance', 'Horror'])

        expect(test1).toEqual(expect.arrayContaining(result1));
        expect(test1.length).toBe(7);
        expect(test2).toEqual(expect.arrayContaining(result2));
        expect(test2.length).toBe(13);
    })
})

describe("findTicketAvailability", () => {
    it('should generate a availability of a movie', () => {
        let user1 = {
            name: 'Djalal',
            ticket: 10,
            favoriteGenre: ['Action', 'Musical']
        }

        let user2 = {
            name: 'Djarot',
            ticket: 100,
            favoriteGenre: ['Musical']
        }

        let movie = {
            id: 7,
            name: 'Dear Evan Hansen',
            genre: 'Musical',
            soldTicket: 150,
            capacity: 200
        }

        expect(findTicketAvailability(movie, user1)).toBe(true);
        expect(findTicketAvailability(movie, user2)).toBe(false);
    })
})

describe("findRecommendation", () => {
    it('should generate a recommendation list of movies', () => {
        let user1 = {
            name: 'Djalal',
            ticket: 20,
            favoriteGenre: ['Musical', 'Romance']
        }

        let user2 = {
            name: 'Djarot',
            ticket: 10,
            favoriteGenre: ['Action', 'Musical']
        }

        let result1 = [
            {
                id: 8,
                name: 'Dear Evan Hansen',
                genre: 'Musical',
                soldTicket: 150,
                capacity: 200
            },
            {
                id: 2,
                name: 'La la Land',
                genre: 'Romance',
                soldTicket: 20,
                capacity: 75
            },
            {
                id: 6,
                name: '5 feet apart',
                genre: 'Romance',
                soldTicket: 25,
                capacity: 45
            }
        ]

        let result2 = [
            {
                id: 4,
                name: 'Superman vs Batman',
                genre: 'Action',
                soldTicket: 150,
                capacity: 250
            },
            {
                id: 11,
                name: 'Fast and Furios',
                genre: 'Action',
                soldTicket: 25,
                capacity: 40
            },
            {
                id: 8,
                name: 'Dear Evan Hansen',
                genre: 'Musical',
                soldTicket: 150,
                capacity: 200
            }
        ]

        let test1 = findRecommendation(user1)
        let test2 = findRecommendation(user2)

        expect(test1).toEqual(expect.arrayContaining(result1));
        expect(test1.length).toBe(3);
        expect(test2).toEqual(expect.arrayContaining(result2));
        expect(test2.length).toBe(3);
    })
})

describe("generateRecommendation", () => {
    it('should generate a recommendation with correct format', () => {

        let user1 = {
            name: 'Aditira',
            ticket: 1,
            favoriteGenre: ['Action', 'Musical', 'Romance', 'Horror']
        }

        let user2 = {
            name: 'Eddy',
            ticket: 20,
            favoriteGenre: ['Musical', 'Romance']
        }

        let user3 = {
            name: 'Afis',
            ticket: 1,
            favoriteGenre: ['Sci Fi', 'Documentary', 'Thriller']
        }

        let result1 = [
            {
                id: 1,
                name: 'Avengers end game',
                genre: 'Action',
                totalPrice: 100000
            },
            {
                id: 4,
                name: 'Superman vs Batman',
                genre: 'Action',
                totalPrice: 100000
            },
            {
                id: 11,
                name: 'Fast and Furios',
                genre: 'Action',
                totalPrice: 100000
            },
            { id: 7, name: 'Hamilton', genre: 'Musical', totalPrice: 80000 },
            {
                id: 8,
                name: 'Dear Evan Hansen',
                genre: 'Musical',
                totalPrice: 80000
            },
            { id: 2, name: 'La la Land', genre: 'Romance', totalPrice: 40000 },
            { id: 6, name: '5 feet apart', genre: 'Romance', totalPrice: 40000 },
            { id: 9, name: 'Conjuring', genre: 'Horror', totalPrice: 75000 },
            { id: 10, name: 'Annabelle', genre: 'Horror', totalPrice: 75000 }
        ]

        let result2 = [
            {
                id: 8,
                name: 'Dear Evan Hansen',
                genre: 'Musical',
                totalPrice: 1600000
            },
            { id: 2, name: 'La la Land', genre: 'Romance', totalPrice: 800000 },
            { id: 6, name: '5 feet apart', genre: 'Romance', totalPrice: 800000 }
        ]

        let result3 = "Tidak ada film yang sesuai kriteria"

        let test1 = generateRecommendation(user1)
        let test2 = generateRecommendation(user2)

        expect(test1).toEqual(expect.arrayContaining(result1));
        expect(test1.length).toBe(9);
        expect(test2).toEqual(expect.arrayContaining(result2));
        expect(test2.length).toBe(3);
        expect(generateRecommendation(user3)).toBe(result3);
    })
})