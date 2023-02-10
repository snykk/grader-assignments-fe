# Seat Arrangement

### NOTES

- Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
- Dilarang menghapus ataupun mengedit bagian module.exports dibagian bawah file `main.js`
- Dilarang mengganti nama function yang diberikan

---

## Directions

Diberikan sebuah function `travelSeat` yang menerima dua parameter berupa array dan integer. Parameter pertama merupakan daftar penumpang dan parameter ke dua merupakan julah kolom tempat duduk.

Function ini akan mengembalikan array multidimensi yang akan membagi setiap penumpang berdasarkan kolom tempat duduk yang tersedia.

- Jika kolom tempat duduk `0` atau minus, maka akan mengembalikan _error message_ "Invalid number".
- Jika tidak ada penumpang yang ditemukan, maka akan mengembalikan _error message_ "Oops! tickets not sold!".
- Jika masih terdapat tempat duduk dalam pembagiannya, maka akan diisi dengan "Seat available". 

Namun sebelum membagi penumpang, kalian diminta untuk mengurutkan daftar penumpang berdasarkan Nama mereka.

Contoh:

```
passengers : ["Andrean", "Patra", "Ardi", "Rudy", "Idham"]
seat column: 3
```
Bila dilihat dari contoh di atas, terdapat 5 penumpang serta setiap barisnya terdapat 3 kolom kursi, sebelumnya data penumpang akan diurutkan terlebih dahulu berdasarkan nama mereka lalu penumpang akan di bagi 2 dengan masing-masing terdapat 3 nama, namun karena masih terdapat kursi kosong maka akan diisi dengan "Seat available".

Dengan begitu output yang diharapkan adalah:

```
[["Andrean", "Ardi", "Idham"], ["Patra", "Rudy", "Seat available"]]
```

### CASE 1

- input: ["Djalal", "Ismet", "Hengky", "Romli"], 2
- output: [ [ 'Djalal', 'Hengky' ], [ 'Ismet', 'Romli' ] ]

### CASE 2

- input: ["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5
- output: [ [ 'Indah', 'Inezka', 'Karin', 'Naila', 'Nisa' ] ]

### CASE 3

- input: ["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3
- output: [
  [ 'Alvin', 'Arda', 'Hilmi' ],
  [ 'Irfan', 'Waluyo', 'Seat available' ]
  ]

### CASE 4

- input: ["Zona", "Retha", "Yoga"], 0
- output: Invalid number

### CASE 5

- input: [], 4
- output: Oops! tickets not sold!
