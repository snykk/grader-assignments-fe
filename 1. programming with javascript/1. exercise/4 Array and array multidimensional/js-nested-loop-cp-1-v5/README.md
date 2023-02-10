# Exercise Nested Loop

## Buy Them All

### Description

Afista sangat senang membaca buku. Ia memiliki koleksi buku yang sangat banyak. Ia ingin membeli buku-buku baru, namun ia tidak memiliki cukup uang untuk membeli semua buku yang ia inginkan. Ia ingin membeli buku-buku mulai dari urutan paling mahal, namun ia tidak ingin melebihi budget yang ia miliki. Bantulah Afista untuk menentukan berapa banyak buku yang dapat dibeli berdasarkan budget yang ia miliki.

Bantulah Afista menentukan buku apa saja yang bisa dia beli dan berapa banyak buku yang bisa dia beli.

Note:

- Afista selalu membeli buku berdasarkan urutan dari yang paling mahal ke yang paling murah.
- List buku sudah berurutan mulai dari yang paling mahal ke yang paling murah.

> clue: gunakan _nested loop_ `while` dan `for loop`

---

### Input Format

Function akan menerima 2 buah parameter, yaitu:

- `books` berupa `string`, dimana `string` ini akan menjelaskan judul buku dan harganya dengan format berikut:
  - `judul_buku1:harga_buku1,judul_buku2:harga_buku2,judul_buku3:harga_buku3......`
  - Contoh: `The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000`
- `budget` berupa `number` yang merupakan budget yang dimiliki Afista untuk membeli buku.

contoh input:

```javascript
books = "The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000";

budget = 100000;
```

---

### Output Format

Function akan mengembalikan sebuah string, dimana string tersebut berisikan informasi berapa banyak buku yang bisa dibeli Afista, dan keterangan buku apa yang dibeli oleh afista jika uang yang dimiliki Afista cukup untuk membeli buku. Selain itu ada informasi berapa sisa uang yang dimiliki Afista.

Format string yang diharapkan adalah sebagai berikut:

```text
Afista membeli [jumlah_buku] buku yaitu [judul_buku1], [judul_buku2], [judul_buku3]. Total belanja [total_belanja], sisa uang Afista adalah [sisa_uang].
```

Contoh:

```text
Afista membeli 2 buku yaitu The Alchemist, The Hobbit. Total belanja 95000, sisa uang Afista adalah 5000.
```

Jika uang yang dimiliki Afista tidak cukup untuk membeli buku, maka function akan mengembalikan string berikut:

```text
Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah [sisa_uang].
```

---

### Constraints

- `books` berupa string dan tidak akan kosong.
- `budget` berupa number dan tidak akan kosong.
- `budget` tidak akan bernilai negatif.
- `books` tidak akan mengandung buku yang sama.
- urutan dalam `books` dari yang paling mahal ke yang paling murah.

---

### Test Case Examples

#### Test Case 1

**Input**:

```javascript
books = "The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000";

budget = 100000;
```

**Expected Output / Behavior**:

```text
Afista membeli 2 buku yaitu The Alchemist, The Hobbit. Total belanja 95000, sisa uang Afista adalah 5000.
```

**Explanation**:

- Afista memiliki budget sebesar `100000`.
- Afista membeli buku yang paling mahal, yaitu `The Alchemist` dengan harga `55000`.
- Kemudian Afista membeli buku yang lebih murah, yaitu `The Hobbit` dengan harga `40000`.
- Sisa uang yang dimiliki Afista adalah `100000 - 55000 - 40000 = 5000`.
- Sisa uang yang dimiliki Afista tidak cukup untuk membeli buku lagi, maka Afista hanya akan membeli 2 buku.

#### Test Case 2

**Input**:

```javascript
books = "The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000";

budget = 50000;
```

**Expected Output / Behavior**:

```text
Afista membeli 1 buku yaitu The Hobbit. Total belanja 40000, sisa uang Afista adalah 10000.
```

**Explanation**:

- Afista memiliki budget sebesar `50000`.
- Afista ingin membeli buku yang paling mahal, yaitu `The Alchemist` dengan harga `55000`.
- Karena budget yang dimiliki Afista tidak cukup untuk membeli `The Alchemist`, maka Afista akan membeli buku yang lebih murah, yaitu `The Hobbit` dengan harga `40000`.
- Sisa uang yang dimiliki Afista adalah `50000 - 40000 = 10000`.
- Sisa uang yang dimiliki Afista tidak cukup untuk membeli buku lagi, maka Afista hanya akan membeli 1 buku.

#### Test Case 3

**Input**:

```javascript
books = "The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000";

budget = 10000;
```

**Expected Output / Behavior**:

```text
Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 10000.
```

**Explanation**:

- Afista memiliki budget sebesar `10000`.
- Afista ingin membeli buku yang paling mahal, yaitu `The Alchemist` dengan harga `55000`.
- Karena budget yang dimiliki Afista tidak cukup untuk membeli `The Alchemist`, maka Afista akan membeli buku yang lebih murah, yaitu `The Hobbit` dengan harga `40000`.
- Karena budget yang dimiliki Afista tidak cukup untuk membeli `The Hobbit`, maka Afista akan membeli buku yang lebih murah, yaitu `The Power of Habit` dengan harga `30000`.
- Karena budget yang dimiliki Afista tidak cukup untuk membeli `The Power of Habit`, maka Afista tidak akan membeli buku sama sekali.

#### Test Case 4

**Input**:

```javascript
books = "The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000";

budget = 0;
```

**Expected Output / Behavior**:

```text
Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 0.
```

**Explanation**:

- Afista memiliki budget sebesar `0`.
- Afista tidak akan membeli buku sama sekali.
- Sisa uang yang dimiliki Afista adalah 0.

#### Test Case 5

**Input**:

```javascript
books = "The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000";

budget = 200000;
```

**Expected Output / Behavior**:

```text
Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 75000.
```

**Explanation**:

- Afista memiliki budget sebesar `200000`.
- Afista ingin membeli buku yang paling mahal, yaitu `The Alchemist` dengan harga `55000`.
- Karena budget yang dimiliki Afista cukup untuk membeli `The Alchemist`, maka Afista akan membeli `The Alchemist`.
- Sisa uang yang dimiliki Afista adalah `200000 - 55000 = 145000`.
- Afista ingin membeli buku yang paling mahal, yaitu `The Hobbit` dengan harga `40000`.
- Karena budget yang dimiliki Afista cukup untuk membeli `The Hobbit`, maka Afista akan membeli `The Hobbit`.
- Sisa uang yang dimiliki Afista adalah `145000 - 40000 = 105000`.
- Afista ingin membeli buku yang paling mahal, yaitu `The Power of Habit` dengan harga `30000`.
- Karena budget yang dimiliki Afista cukup untuk membeli `The Power of Habit`, maka Afista akan membeli `The Power of Habit`.
- Sisa uang yang dimiliki Afista adalah `105000 - 30000 = 75000`.

### Template

```javascript
function buyThemAll(books, budget) {
  // Write your code here
}

console.log(
  buyThemAll(
    "The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000",
    100000
  )
);
// Afista membeli 2 buku yaitu The Alchemist, The Hobbit. Total belanja 95000, sisa uang Afista adalah 5000.
```
