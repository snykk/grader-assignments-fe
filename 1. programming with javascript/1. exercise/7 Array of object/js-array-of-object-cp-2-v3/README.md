# Counter App

### NOTES

- Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
- Dilarang menghapus ataupun mengedit bagian module.exports dibagian bawah file `main.js`
- Dilarang mengganti nama function yang diberikan

---

## Directions

Diberikan sebuah function `countryMedals` yang menerima dua parameter bertipe array. Berikut penjelasan dari masing-masing parameter:

1. **Parameter pertama** merupakan sebuah data seluruh pemain berupa array of object, dimana setiap elemennya berisi nama, jumlah medali, dan negara asal pemain tersebut.
2. **Parameter kedua** merupakan sebuah array yang selalu berisikan 2 nama negara, diasumsikan nama negara yang terdapat pada parameter kedua selalu negara yang terdaftar pada data pemain (parameter pertama)

Kalian diminta untuk menghitung berapa jumlah medali yang dimiliki dan menumpulkan siapa saja atlit dari setiap negara **berdasarkan parameter kedua** dimana data tersebut di kumpulkan dalam bentuk array of object.

Contoh:

```js
let playerData = [
  {
    name: "Iker Casillas",
    medals: 7,
    country: "Spain",
  },
  {
    name: "Ahmad Waluyo",
    medals: 5,
    country: "Indonesia",
  },
  {
    name: "Alvin Arkansas",
    medals: 8,
    country: "Indonesia",
  },
  {
    name: "Xavi Hernandes",
    medals: 9,
    country: "Spain",
  },
  {
    name: "Carles Puyol",
    medals: 5,
    country: "Spain",
  },
  {
    name: "Jatmika Teja",
    medals: 6,
    country: "Indonesia",
  },
];

let countries = ["Indonesia", "Spain"];
```

Dengan begitu output yang diharapkan adalah:

```js
[
  {
    name: "Indonesia",
    athlete: ["Ahmad Waluyo", "Alvin Arkansas", "Jatmika Teja"],
    totalMedals: 19,
  },
  {
    name: "Spain",
    athlete: ["Iker Casillas", "Xavi Hernandes", "Carles Puyol"],
    totalMedals: 21,
  },
];
```

Namun, jika parameter kedua yang undefined , maka akan menampilkan _error messege_ "Countries not provided". Diasumsikan `playerData` akan selalu ada.

### CASE 1

- input:

  ```js
  let playerData = [
    {
      name: "Lionel Messi",
      medals: 5,
      country: "Argentina",
    },
    {
      name: "Iker Casillas",
      medals: 7,
      country: "Spain",
    },
    {
      name: "Ahmad Waluyo",
      medals: 5,
      country: "Indonesia",
    },
    {
      name: "Alvin Arkansas",
      medals: 8,
      country: "Indonesia",
    },
    {
      name: "Gabriel Batistuta",
      medals: 1,
      country: "Argentina",
    },
    {
      name: "Xavi Hernandes",
      medals: 9,
      country: "Spain",
    },
    {
      name: "Carles Puyol",
      medals: 5,
      country: "Spain",
    },
    {
      name: "Jatmika Teja",
      medals: 6,
      country: "Indonesia",
    },
    {
      name: "Sergio Aguero",
      medals: 3,
      country: "Argentina",
    },
  ];

  let countries = ["Indonesia", "Spain"];
  ```

- output:

  ```js
  [
    {
      name: "Indonesia",
      athlete: ["Ahmad Waluyo", "Alvin Arkansas", "Jatmika Teja"],
      totalMedals: 19,
    },
    {
      name: "Spain",
      athlete: ["Iker Casillas", "Xavi Hernandes", "Carles Puyol"],
      totalMedals: 21,
    },
  ];
  ```

---

```js
let playerData = [
  {
    name: "Lionel Messi",
    medals: 5,
    country: "Argentina",
  },
  {
    name: "Iker Casillas",
    medals: 7,
    country: "Spain",
  },
  {
    name: "Ahmad Waluyo",
    medals: 5,
    country: "Indonesia",
  },
  {
    name: "Alvin Arkansas",
    medals: 8,
    country: "Indonesia",
  },
  {
    name: "Gabriel Batistuta",
    medals: 1,
    country: "Argentina",
  },
  {
    name: "Xavi Hernandes",
    medals: 9,
    country: "Spain",
  },
  {
    name: "Carles Puyol",
    medals: 5,
    country: "Spain",
  },
  {
    name: "Jatmika Teja",
    medals: 6,
    country: "Indonesia",
  },
  {
    name: "Sergio Aguero",
    medals: 3,
    country: "Argentina",
  },
];
```

### CASE 1

- input:

  ```js
  let players = playerData;
  let countries = ["Indonesia", "Spain"];
  ```

- output:

  ```js
  [
    {
      name: "Indonesia",
      athlete: ["Ahmad Waluyo", "Alvin Arkansas", "Jatmika Teja"],
      totalMedals: 19,
    },
    {
      name: "Spain",
      athlete: ["Iker Casillas", "Xavi Hernandes", "Carles Puyol"],
      totalMedals: 21,
    },
  ];
  ```

### CASE 2

- input:

  ```js
  let players = playerData;
  let countries = undefined
  ```

- output:
  ```js
  "Countries not provided";
  ```
