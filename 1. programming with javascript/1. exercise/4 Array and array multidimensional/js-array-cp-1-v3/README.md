# Split to Array

### NOTES

- Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
- Dilarang menghapus ataupun mengedit bagian module.exports dibagian bawah file `main.js`
- Dilarang mengganti nama function yang diberikan

---

## Directions

Diberikan sebuah function `splitToArr` yang menerima satu parameter bertipe string berisikan sebuah nama. Kalian diminta untuk memisahkan setiap nama yang terdapat dalam parameter yang dipisahkan oleh **karakter non-huruf**. Namun, jika ditemukan **karakter dot** (`.`) maka akan dianggap bagian sebuah nama.

Output dari function ini adalah mengembalikan sebuah **array yang merupakan nama** dari input parameter dengan kondisi **setiap huruf pertama dari setiap nama merupakan huruf kapital**.

Contoh:

```
string : "shelda.alni;pahlevi.fikri-ricky.kurniawan"
```

Terapat 3 karakter non-huruf (";", "-", dan "."), namun karena karakter dot dianggap bagian dari sebuah nama, maka setiap nama yang terdapat dalam string akan dipisahkan berdasarkan ";" dan "-".

Dengan begitu output yang diharapkan adalah:

```
["Shelda.alni", "Pahlevi.fikri, "Ricky.kurniawan"]
```

### CASE 1

- input: "annisa;dimitri-alvin;fajar-mirza;tandry"
- output: [ 'Annisa', 'Dimitri', 'Alvin', 'Fajar', 'Mirza', 'Tandry' ]

### CASE 2

- input: "ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"
- output: [
  'Ganang.prakoso',
  'Ivan.tjendra',
  'Haekal.yudhistira',
  'Ridza.adhandra',
  'Ganda.sipayung',
  'Diaz.kautsar'
]

### CASE 3

- input: ""
- output: "Data not available"

### CASE 4

- input: undefined
- output: "Invalid input"
