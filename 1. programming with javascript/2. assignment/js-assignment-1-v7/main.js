function travelDiscount(id, amount) {
    var price = 0;
    var status = "";
    var afDis = 0;
    if (id.includes("STD")) {
        status = "STUDENT";
        price = 20000;
        afDis = amount > 20 ? 0.8 : 1;
    } else if (id.includes("CORP")) {
        status = "CORPORATE";
        price = 50000;
        afDis = amount > 30 ? 0.75 : 1;
    } else {
        return "Maaf, voucher yang anda miliki tidak valid!";
    }

    return `Selamat! Voucher untuk ${status} dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${price * amount * afDis}.`;
}

console.log(travelDiscount("STD9845-8461-121", 11));
console.log(travelDiscount("CORP8135-4612-912", 30));
console.log(travelDiscount("STD7601-639-184", 36));
console.log(travelDiscount("CORP5611-8456-999", 31));
console.log(travelDiscount("8347-7-9124365", 99));
console.log(travelDiscount("XYZ8135461-2-912", 1));

module.exports = travelDiscount;
