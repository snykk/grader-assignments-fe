# Data Selection

### NOTES

- Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
- Dilarang menghapus ataupun mengedit bagian module.exports dibagian bawah file `main.js`
- Dilarang mengganti nama function yang diberikan

---

## Objective

- mampu memecahkan masalah yang diberikan
- mampu mengakses element dari sebuah array
- mampu mengubah element dari sebuah array

## Directions

Diberikan sebuah function `dataSelection` yang menerima 3 parameter berupa 1 data array dan 2 integer. function ini akan mengembalikan array yang akan menseleksi sesuai jumlah dan posisi dalam array. Berikut ketentuan yang harus kalian ikuti:

​- Jika data merupakan array kosong, maka akan mengembalika pesan "Data not found".
- Jika jumlah dan/atau posisi array merupakan string, maka akan mengembalika pesan "Invalid command".
- Jika jumlah yang dibawah 1, maka akan mengembalika pesan "Minimum amount is 1".
- Jika posisi array merupakan angka minus, maka akan mengembalika pesan "Starting number cannot be below 0".
- Jika posisi array tidak terdefinisi, data yang diambil dimulai dari data yang pertama.

Diasumsikan:
- Jumlah dan posisi dalam array akan selalu berupa 1 digit angka.
- Jumlah yang diminta tidak akan melebihi data yang ada.
- Posisi array tidak akan di luar dari data yang ada.
- Data, jumlah dan posisi akan selalu ada.

Contoh:

```js
dataSelection(data, amount, starting position)
```

```
data : ["Dimitri", "Alvin", "Arrizal", "Indra"]
amout: 2
start: 3
```

Bila dilihat dari contoh di atas, diminta 2 buah nama dari urutan ke 3, sehingga dengan begitu output yang diharapkan adalah:

```
["Arrizal", "Indra"]
```

### CASE 1

- input: ["Semangka", "Nanas", "Jeruk", "Mengkudu", "Jambu klutuk"], 2, 3
- output: [ 'Jeruk', 'Mengkudu' ]

### CASE 2

- input: ["Deny", "Ganjar", "Raam", "Imam", "Eddy", "Afis"], 4, 1
- output: [ 'Deny', 'Ganjar', 'Raam', 'Imam' ]

### CASE 3

- input: [97, 44, 21, 76, 10, 1, 33], 2, -1
- output: Starting number cannot be below 0

### CASE 4

- input: ["Tegar", "Miranda", "Wulan"], 0, 3
- output: Minimum amount is 1

### CASE 5

- input: ["Fauzan", "Uli", "Vika"], "1", "3"
- output: Invalid command

### CASE 6

- input: [], 1, 3
- output: Data not found