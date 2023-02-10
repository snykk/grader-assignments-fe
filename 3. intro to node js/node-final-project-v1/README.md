# Final Project

### NOTES

- Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
- Dilarang mengganti nama function yang diberikan.
- Wajib menjalankan `npm install` atau `pnpm install` sebelum mengerjakan final project.

### Description

Dalam Final Project ini terdapat 3 file, antara lain:

- `getters.js`: berisikan function untuk mendapatkan data masing-masing dari _users_ serta _articles_.
- `main.js`: berisikan function untuk mendapatkan data _users_ serta _articles_ yang akan di merge menjadi 1.
- `.env`: berisikan _environment variable_

Kalian diminta untuk mengerjakan final project pada file `getters.js`, `main.js` dan `.env`

---

## `.env`

Pada file ini kalian diminta untuk membuat sebuah _environment variables_ dengan ketentuan berikut:

- `PROJECT_NAME`: berisikan sebuah nama project yaitu "`FINALPROJECT_BATCH3`"
- `ACCESS_TOKEN`: berisikan sebuah akses token, untuk mendapatkannya kalian perlu menjalankan _command_ `npm run get-secret` atau `pnpm get-secret`.

_Value_ dari file ini akan kalian gunakan pada file `main.js`

---

## `getter.js`

### `mapUsers`

`mapUsers` merupakan sebuah function yang menerima parameter `users`.

| Name    | Data Type       |
| ------- | --------------- |
| _users_ | array of object |

Parameter `users` berisi data seluruh _user_ dalam bentuk `array of object` dimana setiap `object` nya memiliki key sebagai berikut:

| Name       | Data Type |
| ---------- | --------- |
| _id_       | integer   |
| _username_ | string    |
| _password_ | string    |
| _gender_   | string    |

Kalian diminta untuk meng-_convert_ data yang diterima dari parameter menjadi sebuah object dengan key `data` yang berisikan seluruh data _users_ dan `count` yang berisikan jumlah data user yang diterima serta melakukan _export function_ `mapUsers` menggunakan "**Default export**". Output dari function ini berupa object dengan format berikut:

```txt
{
  data: <user-data>,
  count: <total-data-user>
}
```

**Input**:

```js
[
  {
    id: 1,
    username: "isrotrip",
    password: "PhT1Oky01",
    gender: "male",
  },
  {
    id: 2,
    username: "dmtrxw",
    password: "oYt2Thj9w",
    gender: "male",
  },
];
```

**Expected Output / Behavior**:

```js
{
  data: [
    {
      "id": 1,
      "username": "isrotrip",
      "password": "PhT1Oky01",
      "gender": "male"
    },
    {
      "id": 2,
      "username": "dmtrxw",
      "password": "oYt2Thj9w",
      "gender": "male"
    }
  ],
  count: 2
}
```

**Explanation**:

```txt
Data user yang diterima merupakan sebuah array of object dan disimpan pada key `data`, dan jumlah data user yang diterima berjumlah 2 dan disimpan pada key `count`
```

### `mapArticles`

`mapArticles` merupakan sebuah function yang menerima parameter `articles`.

| Name       | Data Type       |
| ---------- | --------------- |
| _articles_ | array of object |

Parameter `articles` berisi data seluruh _articles_ dalam bentuk `array of object` dimana setiap `object` nya memiliki key sebagai berikut:

| Name      | Data Type |
| --------- | --------- |
| _id_      | integer   |
| _article_ | string    |
| _userId_  | integer   |

Kalian diminta untuk meng-_convert_ data yang diterima dari parameter menjadi sebuah object dengan key `data` yang berisikan seluruh data _articles_ dan `count` yang berisikan jumlah data _articles_ yang diterima serta melakukan _export function_ `mapArticles` menggunakan "**Named Export**". Output dari function ini berupa object dengan format berikut:

```txt
{
  data: <article-data>,
  count: <total-data-article>
}
```

**Input**:

```js
[
  {
    id: 1,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 1,
  },
  {
    id: 2,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 5,
  },
  {
    id: 3,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 4,
  },
];
```

**Expected Output / Behavior**:

```js
{
  data: [
    {
      "id": 1,
      "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "userId": 1
    },
    {
      "id": 2,
      "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "userId": 5
    },
    {
      "id": 3,
      "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "userId": 4
    }
  ],
  count: 3
}
```

**Explanation**:

```txt
Data article yang diterima merupakan sebuah array of object dan di simpan pada key `data`, dan jumlah data article yang diterima berjumlah 3 dan disimpan pada key `count`
```

---

## `main.js`

Pada file ini kalian diminta untuk melakukan beberapa hal, antara lain:

- melakukan konfigurasi `dotenv`
- melakukan _import_ function `mapUsers` dan `mapArticles` dari file `getters.js`

Selain itu terdapat juga function `mergeData` dengan penjelasan dibawah ini.

### `mergeData`

`mergeData` merupakan sebuah function yang menerima parameter `usersData` dan `articlesData`.

| Name           | Data Type       |
| -------------- | --------------- |
| _usersData_    | array of object |
| _articlesData_ | array of object |

- `usersData` : Parameter isi berisi data seluruh _user_ dalam bentuk `array of object` dimana setiap `object` nya memiliki key sebagai berikut:

| Name       | Data Type |
| ---------- | --------- |
| _id_       | integer   |
| _username_ | string    |
| _password_ | string    |
| _gender_   | string    |

- `articlesData` : Parameter isi berisi data seluruh _articles_ dalam bentuk `array of object` dimana setiap `object` nya memiliki key sebagai berikut:

| Name      | Data Type |
| --------- | --------- |
| _id_      | integer   |
| _article_ | string    |
| _userId_  | integer   |

Pada function ini kalian akan memanggil function `mapUsers` dan `mapArticles` untuk memproses data yang diterima pada parameter. selain itu juga kalian diminta untuk memanggil _environment variable_ yang sebelumnya sudah kalian buat serta melakukan _export function_ `mergeData` menggunakan "**Default export**". Output dari funtion ini berupa object dengan format berikut ini:

```txt
{
  projectName : <nama project pada environment variable>,
  accessToken: <access token pada environment variable>,
  users: <data yang diterima dari function `mapUsers`>
  articles: <data yang diterima dari function `mapArticles`>
}
```

**Input**:

```js
const usersData: [
  {
    id: 1,
    username: "isrotrip",
    password: "PhT1Oky01",
    gender: "male",
  },
  {
    id: 2,
    username: "dmtrxw",
    password: "oYt2Thj9w",
    gender: "male",
  },
];

const articlesData: [
  {
    id: 1,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 1,
  },
  {
    id: 2,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 5,
  },
  {
    id: 3,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 4,
  },
]
```

**Expected Output / Behavior**:

```js
{
  projectName: 'FINALPROJECT_BATCH3',
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.jUpPwPQdui7EECeGc4-YgYW1p5e1Wl0AtiUNPkx7-DI',
  users: {
    data: [
      {
        id: 1,
        username: "isrotrip",
        password: "PhT1Oky01",
        gender: "male",
      },
      {
        id: 2,
        username: "dmtrxw",
        password: "oYt2Thj9w",
        gender: "male",
      }
  ],
    count: 2
  },
  articles: {
    data: [
      {
        id: 1,
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        userId: 1,
      },
      {
        id: 2,
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        userId: 5,
      },
      {
        id: 3,
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        userId: 4,
      },
    ]
    count: 3
  }
}
```

**Explanation**:

```txt
value dari key `projectName` dan `accessToken` diambil dari nilai environment variable.
value dari key `users` merupakan hasil dari proses pada function `mapUsers`.
value dari key `articles` merupakan hasil dari proses pada function `mapArticles`.
```
