# Discount Checker

### NOTES

- Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
- Dilarang menghapus ataupun mengedit bagian module.exports dibagian bawah file `main.js`
- Dilarang mengganti nama function yang diberikan

---

## Directions

Diberikan sebuah function `discountChecker` yang menerima dua parameter bertipe array multidimensi yang setiap elementnya berupa data customer berisi **harga barang** dan **status member**, lalu parameter kedua berupa string tanggal. Kalian diminta untuk memfilter customer mana saja yang bisa mendapatkan diskon dari harga dan tanggal yang tertera.

- harga barang ganjil akan mendapatkan diskon di tanggal ganjil.
- harga barang genap akan mendapatkan diskon di tanggal genap.

Peraturan ini hanya berlaku untuk customer dengan status **non-member**.

Diasumsikan akan selalu terdapat data customer (baik harga barang serta status member) dan tanggal.

Contoh:

```
customers : [
  ["$ 4", "non-member"],
  ["$ 2", "non-member"],
  ["$ 1", "member"] ];
date : "28-9-2022"
```

Karena tanggal yang tertera merupakan tanggal genap maka customer dengan jumlah harga barang genap akan mendapatkan diskon, namun terdapat juga satu customer berstatus member sehingga akan tetap mendapatkan diskon. 

Dengan begitu output yang diharapkan adalah:

```
[
  ["$ 4", "non-member"],
  ["$ 1", "member"]
]
```

### CASE 1
```
- input: [
  ["$ 228", "member"],
  ["$ 19", "non-member"],
  ["$ 238", "non-member"],
  ["$ 49", "member"]
], "28-10-2022"
- output: [
  [ '$ 228', 'member' ],
  [ '$ 238', 'non-member' ],
  [ '$ 49', 'member' ]
]
```

### CASE 2
```
- input: [
  ["$ 754", "member"],
  ["$ 233", "member"],
  ["$ 31", "non-member"],
  ["$ 332", "non-member"]
], "11-06-2022"
- output: [
  [ '$ 754', 'member' ],
  [ '$ 233', 'member' ],
  [ '$ 31', 'non-member' ]
]
```