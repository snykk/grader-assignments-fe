# Exercise Callback

## Dynamic Calculation Callback

### Description

Buatlah sebuah function `calculate` yang menerima 3 parameter yaitu `number1`, `number2`, dan `callback`. Function `calculate` akan melakukan perhitungan dari kedua parameter tersebut dan mengembalikan hasilnya ke dalam `callback` yang telah disediakan setelah 2 detik.

Berikut merupakan aturan perhitungan dari function `calculate`:

- Jika `number1` dan `number2` merupakan bilangan genap, maka function `calculate` akan mengurangkan kedua bilangan tersebut.
- Jika `number1` merupakan bilangan genap dan `number2` merupakan bilangan ganjil, maka function `calculate` akan menjumlahkan kedua bilangan tersebut.
- Jika `number1` merupakan bilangan ganjil, maka function `calculate` akan mengalikan kedua bilangan tersebut.

> Mengembalikan nilai harus menggunakan `callback function`

---

### Constraints

- `number1` dan `number2` bertipe data `number`.
- `number1` dan `number2` bernilai bilangan bulat positif.
- `callback` merupakan _function_ yang menerima 1 `parameter`.
- `parameter callback` merupakan hasil dari perhitungan dari `number1` dan `number2`.
- `parameter callback` bertipe data `number`.

---

### Test Case Examples

#### Test Case 1

**Input**:

```txt
number1 = 2
number2 = 3
```

**Expected Output / Behavior**:

```txt
5
```

**Explanation**:

- Karena `number1` merupakan bilangan genap, maka function `calculate` akan menjumlahkan kedua bilangan tersebut.
- Hasil dari perhitungan tersebut adalah 5.
- Hasil dari perhitungan tersebut akan dikembalikan ke dalam `callback` yang telah disediakan.

---

#### Test Case 2

**Input**:

```txt
number1 = 3
number2 = 5
```

**Expected Output / Behavior**:

```txt
15
```

**Explanation**:

- Karena `number1` merupakan bilangan ganjil, maka function `calculate` akan mengalikan kedua bilangan tersebut.
- Hasil dari perhitungan tersebut adalah 15.
- Hasil dari perhitungan tersebut akan dikembalikan ke dalam `callback` yang telah disediakan.

---

#### Test Case 3

**Input**:

```txt
number1 = 2
number2 = 5
```

**Expected Output / Behavior**:

```txt
7
```

**Explanation**:

- Karena `number1` merupakan bilangan genap dan `number2` merupakan bilangan ganjil, maka function `calculate` akan menambahkan kedua bilangan tersebut.
- Hasil dari perhitungan tersebut adalah 7.
- Hasil dari perhitungan tersebut akan dikembalikan ke dalam `callback` yang telah disediakan.

---

#### Test Case 4

**Input**:

```txt
number1 = 8
number2 = 4
```

**Expected Output / Behavior**:

```txt
4
```

**Explanation**:

- Karena `number1` dan `number2` merupakan bilangan genap, maka function `calculate` akan mengurangkan kedua bilangan tersebut.
- Hasil dari perhitungan tersebut adalah 4.
- Hasil dari perhitungan tersebut akan dikembalikan ke dalam `callback` yang telah disediakan.

---

### Template

```javascript
function calculate(number1, number2, callback) {
  // Your code here
}
```
