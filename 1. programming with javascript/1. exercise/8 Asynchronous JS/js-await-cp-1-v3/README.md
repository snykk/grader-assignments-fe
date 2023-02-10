# Exercise Async & Await

## Dynamic Calculation Async & Await

### Description

Buatlah sebuah `async function` dengan nama `calculate` yang menerima 2 parameter yaitu `number1`, `number2`.

Function `calculate` akan melakukan perhitungan dari kedua parameter tersebut dan mengembalikan hasilnya dalam `Promise`.

Berikut merupakan aturan perhitungan dari function `calculate`:

- Jika kedua `number1` dan `number2` adalah angka nol, maka function `calculate` akan mengembalikan Promise yang gagal (rejected) dengan error message `number1 and number2 cannot be 0`.
- Jika `number1` dan `number2` merupakan bilangan genap, maka function `calculate` akan mengurangkan kedua bilangan tersebut.
- Jika `number1` merupakan bilangan genap dan `number2` merupakan bilangan ganjil, maka function `calculate` akan menjumlahkan kedua bilangan tersebut.
- Jika `number1` merupakan bilangan ganjil, maka function `calculate` akan mengalikan kedua bilangan tersebut.

> Mengembalikan nilai harus menggunakan `Promise`, `function` dalam format `async function`.

---

### Constraints

- `number1` dan `number2` bertipe data `number`.
- `number1` dan `number2` bernilai bilangan bulat positif.

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

- Karena `number1` merupakan bilangan genap, dan `number2` adalah bilangan ganjil, maka function `calculate` akan menjumlahkan kedua bilangan tersebut.
- Hasil dari perhitungan tersebut adalah 5.
- Hasil dari perhitungan tersebut akan dikembalikan dalam `promise`.

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
- Hasil dari perhitungan tersebut akan dikembalikan dalam `Promise`.

---

#### Test Case 3

**Input**:

```txt
number1 = 2
number2 = 12
```

**Expected Output / Behavior**:

```txt
-10
```

**Explanation**:

- Karena `number1` merupakan bilangan genap, dan `number2` juga bilangan genap, maka function `calculate` akan mengurangkan kedua bilangan tersebut.
- Hasil dari perhitungan tersebut adalah -10.
- Hasil dari perhitungan tersebut akan dikembalikan dalam `Promise`.

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
- Hasil dari perhitungan tersebut akan dikembalikan dalam `Promise`.

---

### Template

```javascript
async function calculate(number1, number2) {
  // Your code here
}
```
