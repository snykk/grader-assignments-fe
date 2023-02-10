function deretanAngkaHinggaN(n) {
    if (n < 2) return "Incorrect param";

    var res = "";
    var state = n - 1;
    while (state != 0) {
        for (let i = state; i > 0; i--) {
            res += i;
        }
        state--;
    }
    return res; // TODO: replace this
}

console.log(deretanAngkaHinggaN(5));

module.exports = deretanAngkaHinggaN;
