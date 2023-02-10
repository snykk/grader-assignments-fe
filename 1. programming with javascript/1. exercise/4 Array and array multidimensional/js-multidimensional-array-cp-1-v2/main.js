function travelSeat(passengers, seatColumn) {
    if (seatColumn <= 0) {
        return "Invalid number";
    }

    if (passengers.length === 0) {
        return "Oops! tickets not sold!";
    }
    var res = [];

    passengers.sort();
    var iterate = 0;
    if (passengers.length % seatColumn !== 0) {
        iterate = (Math.floor(passengers.length / seatColumn) + 1) * seatColumn;
    } else {
        iterate = passengers.length;
    }

    res.sort();
    var groupSeat = [];
    for (let i = 0; i < iterate; i++) {
        if (passengers.length > i) {
            groupSeat.push(passengers[i]);
        } else {
            groupSeat.push("Seat available");
        }

        if (groupSeat.length === seatColumn) {
            res.push(groupSeat);
            groupSeat = [];
        }
    }

    return res; // TODO: replace this
}

// console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
// console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
// console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
// console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
// console.log(travelSeat([], 4));
console.log(travelSeat(["Andrean", "Patra", "Ardi", "Rudy", "Idham", "Bagus"], 3));

module.exports = travelSeat;
