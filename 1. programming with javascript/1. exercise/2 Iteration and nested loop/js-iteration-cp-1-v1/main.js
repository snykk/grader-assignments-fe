function reverseUnique(word) {
    var res = "";
    for (let i = word.length - 1; i >= 0; i--) {
        if (res != "" && res[res.length - 1] === word[i]) {
            continue;
        }
        res += word[i];
    }
    return res; // TODO: replace this
}

console.log(reverseUnique("greating")); //gnitaerg
console.log(reverseUnique("learning")); //gninrael
console.log(reverseUnique("book")); // kob
console.log(reverseUnique("RuangGuru")); //uruGnauR
console.log(reverseUnique("I am reading a book how to hunt a deer")); // red a tnuh ot woh kob a gnidaer ma I

module.exports = reverseUnique;
