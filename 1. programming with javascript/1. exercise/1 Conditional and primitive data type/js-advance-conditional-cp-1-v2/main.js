const scissor = "scissor";
const paper = "paper";
const rock = "rock";

function rockPaperScissor(player1, player2) {
    switch (player1) {
        case player2:
            return "Draw!";
        case rock:
            switch (player2) {
                case scissor:
                    return "Player 1 Won!";
                default:
                    return "Player 2 Won!";
            }
        case paper:
            switch (player2) {
                case rock:
                    return "Player 1 Won!";
                default:
                    return "Player 2 Won!";
            }
        case scissor:
            switch (player2) {
                case paper:
                    return "Player 1 Won!";
                default:
                    return "Player 2 Won!";
            }
        default:
            return "Invalid input";
    }
}

console.log(rockPaperScissor(scissor, paper)); // "Player 1 Won!"
console.log(rockPaperScissor(rock, paper)); // "Player 2 Won!"
console.log(rockPaperScissor(paper, paper)); // "Draw!"
console.log(rockPaperScissor(rock, rock)); // "Draw!"

module.exports = rockPaperScissor;
