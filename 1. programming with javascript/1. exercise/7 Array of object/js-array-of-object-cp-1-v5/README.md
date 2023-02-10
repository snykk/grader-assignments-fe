# Games Grouping

### NOTES

- Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
- Dilarang menghapus ataupun mengedit bagian module.exports dibagian bawah file `main.js`
- Dilarang mengganti nama function yang diberikan

---

## Directions

Diberikan sebuah function `gameGrouping` yang menerima satu parameter bertipe _array of object_ yang berisikan data sebuah game mulai dari _title_, _genre_, _developer_ hingga _rating_. Kalian diminta untuk mengumpulkan _title_ setiap game berdasarkan genre-nya masing-masing.

   - Input:

     ```js
     const allGames = [
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

   - Output:

     ```js
     {
       actionAdventure: { title: [ 'The Last of Us Part I', 'The Witcher 3: Wild Hunt' ] },
       fighting: { title: [ 'WWE 2K22', 'Tekken 7' ] },
     }
     ```

Bila kita perhatikan pada variabel `allGames` terdapat 2 genre yang berbeda untuk 4 game, yaitu:

- Genre "**actionAdventure**" dengan title game "**The Last of Us Part I**" dan "**The Witcher 3: Wild Hunt**"
- Genre "**fighting**" dengan title game "**WWE 2K22**" dan "**Tekken 7**".

Masing-masing title game ini akan dikelompokan berdasarkan genrenya sehingga menjadi `'actionAdventure': { title: [ 'The Last of Us Part I', 'The Witcher 3: Wild Hunt' ] }` dan `fighting: { title: [ 'WWE 2K22', 'Tekken 7' ] }`. 

Namun, jika data game yang diterima kurang dari 2, maka akan menampilkan _error messege_ "Data cannot be compared". Diasumsikan setiap data game selalu memiliki _title_, _genre_, _developer_ hingga _rating_, data setiap game salalu ada, setiap game dengan _genre_ yang sama memiliki _rating_ yang berbeda-beda dan tidak ada nama game yang sama.

### CASE 1

- input:

  ```js
  [
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
      genre: "firstPersonShooter",
      developer: "Ubisoft Belgrade",
      rating: 7.9,
    },
    {
      title: "The Sims 4",
      genre: "simulation",
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
      genre: "simulation",
      developer: "Colossal Order",
      rating: 9.4,
    },
    {
      title: "Far Cry 5",
      genre: "firstPersonShooter",
      developer: "Ubisoft Montreal",
      rating: 8.9,
    },
    {
      title: "Project CARS 3",
      genre: "racing",
      developer: "Slightly Mad Studios",
      rating: 6.8,
    },
    {
      title: "Hot Wheels Unleashed",
      genre: "racing",
      developer: "Milestone",
      rating: 9.2,
    },
  ];
  ```

- output:
  ```js
  {
    actionAdventure: { title: [ 'The Last of Us Part I', 'The Witcher 3: Wild Hunt' ] },
    fighting: { title: [ 'WWE 2K22', 'Tekken 7' ] },
    firstPersonShooter: { title: [ "Tom Clancy's Ghost Recon: Wildlands", 'Far Cry 5' ] },
    simulation: { title: [ 'The Sims 4', 'Cities: Skylines' ] },
    racing: { title: [ 'Project CARS 3', 'Hot Wheels Unleashed' ] },
  }
  ```

### CASE 2

- input:

  ```js
  [
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
