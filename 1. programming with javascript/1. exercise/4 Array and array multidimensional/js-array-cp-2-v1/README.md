# Vocal Counter

### NOTES

- Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
- Dilarang menghapus ataupun mengedit bagian module.exports dibagian bawah file `main.js`
- Dilarang mengganti nama function yang diberikan

---

## Directions

Diberikan sebuah function `vocalCounter` yang menerima satu parameter bertipe array, dimana setiap elementnya bisa berupa 1 buah string atau 1 buah number.

Kalian diminta untuk mencari huruf vokal apa saja yang terdapat dalam array serta jumlahnya (baik huruf besar maupun kecil). Output dari function ini adalah mengembalikan sebuah sebuah _message_ sebagai berikut:

- Jika terdapat huruf vokal dalam array: "Jumlah vocal yang ditemukan sebanyak `<jumlah>` berupa `<huruf vocal yang ditemukan>`"
- Jika tidak terdapat huruf vokal: "Tidak ada huruf vocal yang ditemukan"

Contoh:

```
array : ['O', 2, 'i', 'o', 'X', 6, 'I']
```

Terapat 4 huruf vokal (O, i, o, I) dalam array, baik huruf besar maupun kecil. Dengan begitu output yang diharapkan adalah:

```
Jumlah vokal yang ditemukan sebanyak 4 berupa OioI
```

### CASE 1

- input: ['x', 'A', 5, 'o', 1, 'T', 'b']
- output: Jumlah vokal yang ditemukan sebanyak 2 berupa Ao

### CASE 2

- input: [-10, 'E', 'e', 'z', 'p', 'i', 4]
- output: Jumlah vokal yang ditemukan sebanyak 3 berupa Eei

### CASE 3

- input: ['q', 'W', 'r', 't', 'Y']
- output: "Tidak ada huruf vokal yang ditemukan"
