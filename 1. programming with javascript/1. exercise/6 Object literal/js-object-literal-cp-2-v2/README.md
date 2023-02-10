# Counter App

### NOTES

- Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
- Dilarang menghapus ataupun mengedit bagian module.exports dibagian bawah file `main.js`
- Dilarang mengganti nama function yang diberikan

---

## Directions

Diberikan sebuah function `stockOpname` yang menerima satu parameter bertipe array multidimensi dan didalam function `stockOpname` terdapat 1 variabel `stockItems` berupa object. 

Pada parameter yang diterima setiap elementnya berisi 2 data, data pertama merupakan nama item dan data ke 2 berupa nominal item yang terjual.

Kalian diminta untuk mengupdate data pada variabel `stockItems` dari data penjualan yang diterima sebagai parameter. 

Output dari function ini berupa objek dengan nominal value yang sudah dikurangi dari nominal item pada parameter.

Contoh:

```
stockItems = {
  "Ram": 10,
  "Motherboard": 4,
  "Processor": 5,
  "SSD": 8,
  "PSU": 12,
  "Cooling": 5,
}

data = [
  ["PSU", 1],
  ["SSD", 2],
  ["Motherboard", 1],
  ["Ram", 1],
  ["Cooling", 1],
  ["Processor", 3],
]
```

Dengan begitu output yang diharapkan adalah:

```
{
  "Ram": 9,
  "Motherboard": 3,
  "Processor": 2,
  "SSD": 6,
  "PSU": 11,
  "Cooling": 4,
}
```

Jika data yang diterima berupa array kosong, maka akan menampilkan _error messege_ "Data not found".

Diasumsikan parameter array multidimensi yang diterima setiap elementnya terdapat nama item dan nominal item yang terjual (tidak akan lebih besar dibanding stok yang ada) dan data items tidak `undefined`.

### CASE 1

- input: [
    ["PSU", 6],
    ["SSD", 3],
    ["Motherboard", 3],
    ["Ram", 2],
    ["Cooling", 4],
    ["Processor", 5],
]
- output: { Ram: 8, Motherboard: 1, Processor: 0, SSD: 5, PSU: 6, Cooling: 1 }

### CASE 2

- input: [
    ["SSD", 5],
    ["Motherboard", 4],
    ["Processor", 1],
    ["PSU", 3],
    ["Cooling", 5],
    ["Ram", 5],
]
- output: { Ram: 5, Motherboard: 0, Processor: 4, SSD: 3, PSU: 9, Cooling: 0 }

### CASE 3

- input: []
- output: 'Data not found'
