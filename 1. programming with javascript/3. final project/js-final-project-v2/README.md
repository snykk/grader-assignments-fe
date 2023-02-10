# Ruang Cinema

## Final Project

### Description

`Ruang Cinema` merupakan sebuah aplikasi yang akan merekomendasikan film-film yang dapat ditonton oleh setiap `user` sesuai dengan genre yang mereka sukai.

### Test Case Examples

#### Release 1 - findMovies

`findMovies` merupakan sebuah function yang didalamnya sudah terdapat data `movies` berupa `array of object` seperti di bawah ini.

```js
movies = [
  {
    id: 1,
    name: "Avengers end game",
    genre: "Action",
    soldTicket: 149,
    capacity: 150,
  },
  {
    id: 2,
    name: "La la Land",
    genre: "Romance",
    soldTicket: 20,
    capacity: 75,
  },
  {
    id: 3,
    name: "Beauty and the Beast",
    genre: "Romance",
    soldTicket: 50,
    capacity: 50,
  },
  {
    id: 4,
    name: "Superman vs Batman",
    genre: "Action",
    soldTicket: 150,
    capacity: 250,
  },
  {
    id: 5,
    name: "Transformer",
    genre: "Action",
    soldTicket: 90,
    capacity: 90,
  },
  {
    id: 6,
    name: "5 feet apart",
    genre: "Romance",
    soldTicket: 25,
    capacity: 45,
  },
  {
    id: 7,
    name: "Hamilton",
    genre: "Musical",
    soldTicket: 295,
    capacity: 300,
  },
  {
    id: 8,
    name: "Dear Evan Hansen",
    genre: "Musical",
    soldTicket: 150,
    capacity: 200,
  },
  {
    id: 9,
    name: "Conjuring",
    genre: "Horror",
    soldTicket: 30,
    capacity: 100,
  },
  {
    id: 10,
    name: "Annabelle",
    genre: "Horror",
    soldTicket: 10,
    capacity: 30,
  },
  {
    id: 11,
    name: "Fast and Furios",
    genre: "Action",
    soldTicket: 25,
    capacity: 40,
  },
  {
    id: 12,
    name: "Romeo and Julet",
    genre: "Romance",
    soldTicket: 15,
    capacity: 15,
  },
  {
    id: 13,
    name: "Wicked",
    genre: "Musical",
    soldTicket: 75,
    capacity: 75,
  },
];
```

Function ini juga akan menerima satu buah parameter sebuah `array` kumpulan `genre` yang disukai oleh user bertipe data `string`. Function ini akan mengembalikan `array of object` `movies` yang disukai oleh user tersebut yang setiap elemennya berupa object dengan keterangan berikut:

| Name         | Data Type |
| ------------ | --------- |
| _id_         | integer   |
| _name_       | string    |
| _genre_      | string    |
| _soldTicket_ | integer   |
| _capacity_   | integer   |

**Input**:

```js
favoriteGenre = ["Action", "Musical"];
```

**Expected Output / Behavior**:

```js
[
  {
    id: 1,
    name: "Avengers end game",
    genre: "Action",
    soldTicket: 149,
    capacity: 150,
  },
  {
    id: 4,
    name: "Superman vs Batman",
    genre: "Action",
    soldTicket: 150,
    capacity: 250,
  },
  {
    id: 5,
    name: "Transformer",
    genre: "Action",
    soldTicket: 90,
    capacity: 90,
  },
  {
    id: 11,
    name: "Fast and Furios",
    genre: "Action",
    soldTicket: 25,
    capacity: 40,
  },
  {
    id: 7,
    name: "Hamilton",
    genre: "Musical",
    soldTicket: 295,
    capacity: 300,
  },
  {
    id: 8,
    name: "Dear Evan Hansen",
    genre: "Musical",
    soldTicket: 150,
    capacity: 200,
  },
  {
    id: 13,
    name: "Wicked",
    genre: "Musical",
    soldTicket: 75,
    capacity: 75,
  },
];
```

**Explanation**:

```txt
Berdasarkan input user memiliki dua buah `favoriteGenre` yaitu `Action` dan `Musical`. Maka dari itu hasil dari `function` ini hanya akan mengembalikan data film-film mana saja yang memiliki kedua genre tersebut.
```

#### Release 2 - findTicketAvailability

Function `findTicketAvailability` merupakan sebuah function yang akan menerima 2 buah parameter.

- Parameter pertama merupakan sebuah `object` berisi informasi mengenai seorang `user`.

  | Name            | Data Type |
  | --------------- | --------- |
  | _name_          | string    |
  | _ticket_        | integer   |
  | _favoriteGenre_ | array     |

- Parameter kedua merupakan sebuah `object` berisi informasi mengenai `movie` yang ingin ditonton.

  | Name         | Data Type |
  | ------------ | --------- |
  | _id_         | integer   |
  | _name_       | string    |
  | _genre_      | string    |
  | _soldTicket_ | integer   |
  | _capacity_   | integer   |

Function ini akan mengembalikan sebuah `boolean` tentang ketersediaan sebuah `movie`. Ketersediaan sebuah film ditentukan apakah jumlah ticket yang ingin dibeli user masih tersedia atau tidak.

**Input**:

```js
user = {
  name: "Aditira",
  ticket: 10,
  favoriteGenre: ["Action", "Musical"],
};

movie = {
  id: 7,
  name: "Dear Evan Hansen",
  genre: "Musical",
  soldTicket: 150,
  capacity: 200,
};
```

**Expected Output / Behavior**:

```js
true;
```

**Explanation**:

```txt
Jika dilihat dari data `movie` jumlah dari `capacity` dan `soldTicket` yaitu 50 tiket, dimana lebih banyak dari tiket yang dibutuhkan user yaitu 10. Sehingga output `function` ini adalah `true`
```

#### Release 3 - findRecommendation

Function `findRecommendation` merupakan sebuah function yang akan menerima satu buah parameter berupa sebuah `object` berisi informasi mengenai user.

| Name            | Data Type |
| --------------- | --------- |
| _name_          | string    |
| _ticket_        | integer   |
| _favoriteGenre_ | array     |

Function ini akan mengembalikan sebuah `array of object` berisi informasi film-film mana yang bisa ditonton oleh user tersebut.

| Name         | Data Type |
| ------------ | --------- |
| _id_         | integer   |
| _name_       | string    |
| _genre_      | string    |
| _soldTicket_ | integer   |
| _capacity_   | integer   |

Syarat sebuah film dapat ditonton oleh user adalah:

- Merupakan film dengan `genre` yang disukai oleh user.
- `movie` tersebut available untuk ditonton oleh user.

**Hints**

- Gunakan kedua `modular function` yang sudah dibuat sebelumnya pada function ini.

**Input**:

```js
user = {
  name: "Aditira",
  ticket: 10,
  favoriteGenre: ["Action", "Musical"],
};
```

**Expected Output / Behavior**:

```js
[
  {
    id: 4,
    name: "Superman vs Batman",
    genre: "Action",
    soldTicket: 150,
    capacity: 250,
  },
  {
    id: 11,
    name: "Fast and Furios",
    genre: "Action",
    soldTicket: 25,
    capacity: 40,
  },
  {
    id: 8,
    name: "Dear Evan Hansen",
    genre: "Musical",
    soldTicket: 150,
    capacity: 200,
  },
];
```

**Explanation**:

```txt
Setelah di function sebelumnya kita mambandingakn jumlah tiket yang tersedia dengan tiket yang ingin dibeli user, maka function ini hanya akan mengembalikan data dari film-film apa saja yang masih memiliki tiket yang tersedia.
```

#### Release 4 - generateRecommendation

Function `generateRecommendation` merupakan sebuah function yang akan menerima satu buah parameter berupa sebuah `object` informasi seorang user.

| Name            | Data Type |
| --------------- | --------- |
| _name_          | string    |
| _ticket_        | integer   |
| _favoriteGenre_ | array     |

Function ini akan mengembalikan sebuah `array of object`, dimana setiap `object` pada array tersebut akan memiliki properti:

- `id` => `id` dari `movie` tersebut
- `name` => `nama` dari `movie` tersebut
- `genre` => `genre` dari `movie` tersebut
- `totalPrice` => Harga yang harus dibayarkan oleh user untuk menonton `movie` tersebut

| Name         | Data Type |
| ------------ | --------- |
| _id_         | integer   |
| _name_       | string    |
| _genre_      | string    |
| _totalPrice_ | integer   |

Untuk harga dari sebuah `movie` dapat dihitung dengan rumus

`[jumlah ticket yang ingin dibeli] * [harga satu ticker per film]`

Harga satu ticket per film akan mengikuti table harga ticker per genre dibawah ini.

| Genre   | Harga  |
| ------- | ------ |
| Action  | 100000 |
| Musical | 80000  |
| Romance | 40000  |
| Horror  | 75000  |

Pada function ini diwajibkan membuat sebuah `validasi` ketika

Jika tidak ada `movie` yang sesuai dengan genre yang disukai oleh `user` maka tampilkan pesan `Tidak ada film yang sesuai kriteria`

**Input**:

```js
user = {
  name: "Aditira",
  ticket: 10,
  favoriteGenre: ["Action", "Musical"],
};
```

**Expected Output / Behavior**:

```js
[
  {
    id: 4,
    name: "Superman vs Batman",
    genre: "Action",
    totalPrice: 1000000,
  },
  {
    id: 11,
    name: "Fast and Furios",
    genre: "Action",
    totalPrice: 1000000,
  },
  {
    id: 8,
    name: "Dear Evan Hansen",
    genre: "Musical",
    totalPrice: 800000,
  },
];
```

**Explanation**:

```js
Berdasarkan harga dari setiap kategori film dan film yang direkomendasikan maka kita hanya perlu menghitung berapakah jumlah tiket dari setiap film berdasarkan kategotinya.
```

### CASE 1

- input:

  ```js
  {
    name: 'Eddy',
    ticket: 20,
    favoriteGenre: ['Musical', 'Romance']
  }
  ```

- output:
  ```js
  [
    {
      id: 8,
      name: "Dear Evan Hansen",
      genre: "Musical",
      totalPrice: 1600000,
    },
    { id: 2, name: "La la Land", genre: "Romance", totalPrice: 800000 },
    { id: 6, name: "5 feet apart", genre: "Romance", totalPrice: 800000 },
  ];
  ```

### CASE 2

- input:

  ```js
  {
    name: 'Afis',
    ticket: 1,
    favoriteGenre: ['Sci Fi', 'Documentary', 'Thriller']
  }
  ```

- output:
  ```js
  "Tidak ada film yang sesuai kriteria";
  ```
