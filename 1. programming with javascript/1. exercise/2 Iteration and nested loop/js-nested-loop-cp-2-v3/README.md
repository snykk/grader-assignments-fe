# Exercise Nested Loop 2

## Dereten Angka Hingga N

### Description

Function `deretanAngkaHinggaN` adalah function yang menerima parameter berupa sebuah angka `n` dan akan membuat output berupa string berisikan angka dengan pola sebagai berikut:

- Langkah pertama, kita akan menulis deretan `n - 1` hingga `1`, contoh `n = 4`, maka hasilnya akan menjadi `321`
- Selanjutnya, tulis deretan `n - 2` hingga `1` dan tambahkan ke belakang hasil yang telah kamu dapatkan sebelumnya, maka hasilnya akan menjadi `32121`
- Lakukan hingga `n - (urutan sekarang) = 1`, dalam contoh ini `n - 3 = 1`, maka hasilnya akan menjadi `3212121`

Jika `n <= 1`, maka function akan mengembalikan `Incorrect param`

---

### Constraints

- Input berupa angka, bisa negatif maupun positif.

---

### Test Case Examples

#### Test Case 1

**Input**:

```text
INPUT: 4
```

**Expected Output / Behavior**:

```text
OUTPUT:
321211
```

**Explanation**:

- String akan dimulai dengan urutan dari `n-1` hingga `1`, dalam contoh ini `n = 4`, sehingga kita membuat urutan `321`,
- String selanjutnya akan ditambahkan dengan `n-2` hingga `1`, dalam contoh ini sehingga kita membuat urutan `21`, jika ditambahkan dengan string sebelumnya menjadi `32121`.
- String selanjutnya akan ditambahkan dengan `n-3` hingga `1`, karena `n-3` dari `4` adalah `1`, sehingga kita cukup menambahkan `1`, jika ditambahkan dengan string sebelumnya menjadi `321211`.

---

#### Test Case 2

**Input**:

```text
INPUT: 6
```

**Expected Output / Behavior**:

```text
OUTPUT:
543214321321211
```

**Explanation**:

- String akan dimulai dengan urutan dari `n-1` hingga `1`, dalam contoh ini `n = 6`, sehingga kita membuat urutan `54321`,
- String selanjutnya akan ditambahkan dengan `n-2` hingga `1`, dalam contoh ini sehingga kita membuat urutan `4321`, jika ditambahkan dengan string sebelumnya menjadi `543214321`.
- String selanjutnya akan ditambahkan dengan `n-3` hingga `1`, dalam contoh ini sehingga kita membuat urutan `321`, jika ditambahkan dengan string sebelumnya menjadi `543214321321`.
- String selanjutnya akan ditambahkan dengan `n-4` hingga `1`, dalam contoh ini sehingga kita membuat urutan `21`, jika ditambahkan dengan string sebelumnya menjadi `54321432132121`.
- String selanjutnya akan ditambahkan dengan `n-5` hingga `1`, dalam contoh ini karena `n-5` dari `6` adalah `1`, sehingga kita cukup menambahkan `1`, jika ditambahkan dengan string sebelumnya menjadi `543214321321211`.
