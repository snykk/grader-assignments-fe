# CAMP AutoShop

## Directions

Kang Arief selaku pemilik bengkel ingin merekap data _spare parts_ yang dimilikinya. Ia ingin mengetahui berapa banyak jumlah barang yang memiliki kategori "_variation_", "_bodyParts_", "_electricity_". Namun data yang dimiliki oleh Kang Arief masih tergolong berantakan, sehingga ia perlu memperbaiki dan merapihkan data yang ada.

Kamu sebagai developer diminta untuk mambantu Kang Arief untuk menyelesaikan permasalahan yang dimilikinya, dengan ketentuan berikut:

### Release 1 - `convertItems`

Pada bagian ini Kang Arief ingin kamu membantunya untuk merapihkan data yang diterima, dimana data tersebut berupa `array`. Setiap elemen dari array merupakan `string` yang berisi `nama spare parts`, `harga`, dan `kategori` yang di pisahkan oleh karakter `|`.

```js
"Spakbor Gordon|150000|variation";
```

Kalian diminta untuk memisahkan ke-3 bagian tersebut yang terdapat dalam setiap elemen dan menjadikannya sebuah `array`.

```js
["Spakbor Gordon", "150000", "variation"];
```

Namun, terdapat juga sebuah `string` dengan format `nama spare parts` tanpa adanya `harga`, dan `kategori` seperti `'Head Lamp'` yang akan dirubah menjadi sebuah `array` dengan format`['Head Lamp']`.

Function ini akan menerima satu parameter berupa `array` yang akan dirubah menjadi sebuah `array 2 dimensi`.

- Input:

  ```js
  const items = [
    "Spakbor Gordon|150000|variation",
    "Head Lamp",
    "USD KX150|8500000|bodyParts",
    "Handle Expedition|275000|variation",
    "Karet Body",
    "Body set KTM|1899950|bodyParts",
    "Jok Gordon|250000|variation",
    "Behel Bodyset Gordon",
    "CDI BRT KLX|625000|electrics",
    "Cover jok KLX|185000|variation",
  ];
  ```

- Output:

  ```js
  [
    ["Spakbor Gordon", "150000", "variation"],
    ["Head Lamp"],
    ["USD KX150", "8500000", "bodyParts"],
    ["Handle Expedition", "275000", "variation"],
    ["Karet Body"],
    ["Body set KTM", "1899950", "bodyParts"],
    ["Jok Gordon", "250000", "variation"],
    ["Behel Bodyset Gordon"],
    ["CDI BRT KLX", "625000", "electricity"],
    ["Cover jok KLX", "185000", "variation"],
  ];
  ```

### Release 2 - `filterItems`

Setelah data menjadi lebih mudah dibaca, Kang Arief ingin melakukan penyaringan `items` yang dimilikinya, dimana setiap `items` yang tidak memiliki `harga` dan `kategori` akan dihilangkan. Selain itu juga Kang Arief ingin setiap `harga` yang berupa `string` diubah menjadi `integer`.

Function ini akan menerima sebuah parameter berupa `array 2 dimensi` dan akan melakukan penyaringan terhadap item yang tidak memiliki `harga` dan `kategori`.

- `harga` pada sebuah array `items` diwakilkan pada index pertama
- `kategori` pada sebuah array `items` diwakilkan pada index kedua.

Pada function ini kalian juga diharuskan untuk meng-_convert_ `harga` dalam bentuk _string_ menjadi sebuah _integer_.

- Input:

  ```js
  const items = [
    ["Spakbor Gordon", "150000", "variation"],
    ["Head Lamp"],
    ["USD KX150", "8500000", "bodyParts"],
    ["Handle Expedition", "275000", "variation"],
    ["Karet Body"],
    ["Body set KTM", "1899950", "bodyParts"],
    ["Jok Gordon", "250000", "variation"],
    ["Behel Bodyset Gordon"],
    ["CDI BRT KLX", "625000", "electricity"],
    ["Cover jok KLX", "185000", "variation"],
  ];
  ```

- Output:

  ```js
  [
    ["Spakbor Gordon", 150000, "variation"],
    ["USD KX150", 8500000, "bodyParts"],
    ["Handle Expedition", 275000, "variation"],
    ["Body set KTM", 1899950, "bodyParts"],
    ["Jok Gordon", 250000, "variation"],
    ["CDI BRT KLX", 625000, "electricity"],
    ["Cover jok KLX", 185000, "variation"],
  ];
  ```

## Release 3 - `generateSpareParts`

Setelah data di yang hanya memeiliki nama item saja dihilangkan, Kang Arief ingin data yang dimilikinya berbentuk array of object, karena dengan bergitu ia dapat lebih mudah membacanya.

Function ini akan menerima satu parameter berupa `array multidimensi` dari kumpulan `item`. Function ini akan mengembalikan sebuah `array of object` di mana setiap elemen dalam array memiliki key _name_ dari index pertama, _price_ dari index kedua dan _category_ dari index ketiga.

- input:

  ```js
  const items = [
    ["Spakbor Gordon", 150000, "variation"],
    ["USD KX150", 8500000, "bodyParts"],
    ["Handle Expedition", 275000, "variation"],
    ["Body set KTM", 1899950, "bodyParts"],
    ["Jok Gordon", 250000, "variation"],
    ["CDI BRT KLX", 625000, "electricity"],
    ["Cover jok KLX", 185000, "variation"],
  ];
  ```

- Output:

  ```js
  [
    { name: "Spakbor Gordon", price: 150000, category: "variation" },
    { name: "USD KX150", price: 8500000, category: "bodyParts" },
    { name: "Handle Expedition", price: 275000, category: "variation" },
    { name: "Body set KTM", price: 1899950, category: "bodyParts" },
    { name: "Jok Gordon", price: 250000, category: "variation" },
    { name: "CDI BRT KLX", price: 625000, category: "electricity" },
    { name: "Cover jok KLX", price: 185000, category: "variation" },
  ];
  ```

## Release 4 - `itemsStatistics`

Data yang diterima Kang Arief sudah mulai terlihat rapi, namun ia masih kebingungan karena ia tidak mengetahui berapa jumlah `item` yang dimilikinya dari masing-masing kategorinya. Kamu diminta untuk membantunya menghitung setiap kategori dari masing-masing `item`.

Function ini akan menerima satu parameter berupa `array multidimensi` dari kumpulan `item`. Function ini akan mengembalikan sebuah `object` dengan jumlah `item` yang memiliki kategori "_variation_", "_bodyParts_", "_electricity_".

- input:

  ```js
  const items = [
    ["Spakbor Gordon", 150000, "variation"],
    ["USD KX150", 8500000, "bodyParts"],
    ["Handle Expedition", 275000, "variation"],
    ["Body set KTM", 1899950, "bodyParts"],
    ["Jok Gordon", 250000, "variation"],
    ["CDI BRT KLX", 625000, "electricity"],
    ["Cover jok KLX", 185000, "variation"],
  ];
  ```

- Output:

  ```js
  { variation: 4, 'bodyParts': 2, electricity: 1 }
  ```

## Release 5 - `generateItemsData`

Function ini merupakan **main** function yang akan memanggil function yang sudah dibuat sebelumnya. Function ini akan menerima satu parameter berupa `array of string` yang akan mengembalikan sebuah `object` dengan dua `key`:

- `spare_parts`: Key ini akan berisi sebuah `array of object` kumpulan `item` yang ada. Format `object` pada `key` ini adalah:

  - `name` berisi nama dari `item`.
  - `price` berisi harga dari `item`.
  - `category` berisi kategori dari `item`.

- `statistics`: Key ini akan berisi object jumlah `item` dengan kategori "_variation_", "_bodyParts_", "_electricity_".
- Input:

  ```js
  const items = [
    "Spakbor Gordon|150000|variation",
    "Head Lamp",
    "USD KX150|8500000|bodyParts",
    "Handle Expedition|275000|variation",
    "Karet Body",
    "Body set KTM|1899950|bodyParts",
    "Jok Gordon|250000|variation",
    "Behel Bodyset Gordon",
    "CDI BRT KLX|625000|electrics",
    "Cover jok KLX|185000|variation",
  ];
  ```

- Output:

  ```js
  {
    'spare_parts': [
      { name: 'Spakbor Gordon', price: 150000, category: 'variation' },
      { name: 'USD KX150', price: 8500000, category: 'bodyParts' },
      { name: 'Handle Expedition', price: 275000, category: 'variation' },
      { name: 'Body set KTM', price: 1899950, category: 'bodyParts' },
      { name: 'Jok Gordon', price: 250000, category: 'variation' },
      { name: 'CDI BRT KLX', price: 625000, category: 'electricity' },
      { name: 'Cover jok KLX', price: 185000, category: 'variation' }
    ],
    statistics: { variation: 4, 'bodyParts': 2, electricity: 1 }
  }
  ```
