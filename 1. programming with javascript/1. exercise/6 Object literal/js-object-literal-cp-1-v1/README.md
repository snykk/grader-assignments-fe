# Counter App

### NOTES

- Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
- Dilarang menghapus ataupun mengedit bagian module.exports dibagian bawah file `main.js`
- Dilarang mengganti nama function yang diberikan

---

## Directions

Diberikan sebuah function `counterApp` yang menerima satu parameter bertipe array dapat berupa string atau integer. Kalian diminta untuk menghitung berapa jumlah yang muncul dari masing-masing elemen.

Output dari function ini berupa objek dengan elemen sebagai key dan jumlah munculnya elemen sebagai value.

Contoh:

```
array : ['nama1', 'nama2', 'nama3', 'nama4', 'nama2', 'nama3', 'nama4', 'nama3', 'nama4', 'nama4']
```

Dengan begitu output yang diharapkan adalah:

```
{ 
  nama1: 1,
  nama2: 2,
  nama3: 3,
  nama4: 4
}
```

Namun, jika data yang diterima berupa array kosong, maka akan menampilkan _error messege_ "Data not found", dan jika parameter undefined menampilkan _error messege_ "Invalid input". Diasumsikan parameter yang dapat diterima dari function `counterApp` berupa array.

### CASE 1

- input: ['Hikman', 'Naufal', 'Kanda', 'Arya', 'Kanda', 'Hikman', 'Naufal', 'Hikman', 'Kanda', 'Kanda']
- output: { Hikman: 3, Naufal: 2, Kanda: 4, Arya: 1 }

### CASE 2

- input: [5, 6, 7, 5, 5, 7, 6, 7, 7, 7, 5, 6]
- output: { '5': 4, '6': 3, '7': 5 }

### CASE 3

- input: []
- output: "Data not found"

### CASE 4

- input: undefined
- output: "Invalid input"
