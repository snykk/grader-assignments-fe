# Games Recommendation

### NOTES

- Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
- Dilarang menghapus ataupun mengedit bagian module.exports dibagian bawah file `main.js`
- Dilarang mengganti nama function yang diberikan

---

## Directions

Diberikan sebuah function `mostRecommended` yang menerima satu parameter bertipe _array of object_ yang berisikan data sebuah game mulai dari _title_, _genre_, _developer_ hingga _rating_.

| Name        | Data Type |
| ----------- | --------- |
| _title_     | string    |
| _genre_     | string    |
| _developer_ | string    |
| _rating_    | integer   |

 Kalian diminta untuk mencari _rating_ tertinggi dari seluruh daftar game yang tersedia berdasarkan genrenya masing-masing.

- Input parameter function `mostRecommended`:

  ```js
  games = [
    {
      title: "The Last of Us Part I",
      genre: "actionAdventure",
      developer: "Naughty Dog",
      rating: 9.6,
    },
    {
      title: "WWE 2K22",
      genre: "fighting",
      developer: "Visual Concepts",
      rating: 7.5,
    },
    {
      title: "Tekken 7",
      genre: "fighting",
      developer: "BANDAI NAMCO Studios",
      rating: 9.5,
    },
    {
      title: "The Witcher 3: Wild Hunt",
      genre: "actionAdventure",
      developer: "CD Projekt Red",
      rating: 10,
    },
  ];
  ```

- Nilai yang di kembalikan (_return_) dari function `mostRecommended`:

  ```js
  {
    actionAdventure: {
      title: "The Witcher 3: Wild Hunt",
      genre: "actionAdventure",
      developer: "CD Projekt Red",
      rating: 10,
    },
    fighting: {
      title: "Tekken 7",
      genre: "fighting",
      developer: "BANDAI NAMCO Studios",
      rating: 9.5,
    }
  })
  ```

Bila kita perhatikan pada variabel `allGames` terdapat 2 genre yang berbeda untuk 4 game, yaitu:

- Genre "**actionAdventure**" dengan title game "**The Last of Us Part I**" dan "**The Witcher 3: Wild Hunt**"
- Genre "**fighting**" dengan title game "**WWE 2K22**" dan "**Tekken 7**".

Masing-masing rating game ini akan dibandingkan sehingga pada akhirnya kita akan mendapatkan data game dengan rating tertinggi dari masing-masing genrenya. Output dari function ini berupa _object_ dengan _key_ dari _genre_ setiap game dan _value_-nya berupa data game itu sendiri yang memiliki format seperti berikut:

| Name        | Data Type |
| ----------- | --------- |
| _title_     | string    |
| _genre_     | string    |
| _developer_ | string    |
| _rating_    | integer   |

Namun, jika data game yang diterima kurang dari 2, maka akan menampilkan _error messege_ "Data cannot be compared". Diasumsikan setiap data game selalu memiliki _title_, _genre_, _developer_ hingga _rating_, data setiap game salalu ada, setiap game dengan _genre_ yang sama memiliki _rating_ yang berbeda-beda dan tidak ada nama game yang sama.

### CASE 1

- input:

  ```js
  games = [
    {
      title: "The Last of Us Part I",
      genre: "actionAdventure",
      developer: "Naughty Dog",
      rating: 9.6,
    },
    {
      title: "WWE 2K22",
      genre: "fighting",
      developer: "Visual Concepts",
      rating: 7.5,
    },
    {
      title: "Tom Clancy's Ghost Recon: Wildlands",
      genre: "first-person shooter",
      developer: "Ubisoft Belgrade",
      rating: 7.9,
    },
    {
      title: "The Sims 4",
      genre: "Simulation",
      developer: "Maxis",
      rating: 9.2,
    },
    {
      title: "Tekken 7",
      genre: "fighting",
      developer: "BANDAI NAMCO Studios",
      rating: 9.5,
    },
    {
      title: "The Witcher 3: Wild Hunt",
      genre: "actionAdventure",
      developer: "CD Projekt Red",
      rating: 10,
    },
    {
      title: "Cities: Skylines",
      genre: "Simulation",
      developer: "Colossal Order",
      rating: 9.4,
    },
    {
      title: "Far Cry 5",
      genre: "first-person shooter",
      developer: "Ubisoft Montreal",
      rating: 8.9,
    },
    {
      title: "Project CARS 3",
      genre: "Racing",
      developer: "Slightly Mad Studios",
      rating: 6.8,
    },
    {
      title: "Hot Wheels Unleashed",
      genre: "Racing",
      developer: "Milestone",
      rating: 9.2,
    },
  ];
  ```

- output:
  ```js
  {
    actionAdventure: {
      title: 'The Witcher 3: Wild Hunt',
      genre: 'actionAdventure',
      developer: 'CD Projekt Red',
      rating: 10
    },
    fighting: {
      title: 'Tekken 7',
      genre: 'fighting',
      developer: 'BANDAI NAMCO Studios',
      rating: 9.5
    },
    firstPersonShooter: {
      title: 'Far Cry 5',
      genre: 'firstPersonShooter',
      developer: 'Ubisoft Montreal',
      rating: 8.9
    },
    simulation: {
      title: 'Cities: Skylines',
      genre: 'simulation',
      developer: 'Colossal Order',
      rating: 9.4
    },
    racing: {
      title: 'Hot Wheels Unleashed',
      genre: 'racing',
      developer: 'Milestone',
      rating: 9.2
    }
  }
  ```

### CASE 2

- input:

  ```js
  games = [
    {
      title: "Tekken 7",
      genre: "fighting",
      developer: "BANDAI NAMCO Studios",
      rating: 9.5,
    },
  ];
  ```

- output:
  ```js
  "Data cannot be compared";
  ```
