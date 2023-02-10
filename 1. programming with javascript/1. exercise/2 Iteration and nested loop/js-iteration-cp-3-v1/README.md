# Print the Number

## Exercise

### Description

Cucup sedang belajar berhitung, namun dia hanya bisa berhitung dari 1 sampai 3, terus berulang lagi sebanyak (`n`). Bantulah Cucup untuk membuat program berhitungnya dimana (`n`) yang akan menjadi parameter dari function `printNumber` dengan tipe data `integer`.

### Constraints

Dikarenakan Cucup hanya bisa berhitung 1 sampai 3, maka program ini memiliki aturan jika angka yang di cetak terakhir angka 3 maka angka selanjutnya kembali ke angka 1 dan terus berulang sebanyak (`n`). Diasumsikan nilai (`n`) akan selalu lebih dari 0 `(min.1)`.

### Test Case Examples

#### Test Case 1

**Input**:

```txt
3
```

**Expected Output / Behavior**:

```txt
123
```

**Explanation**:

```txt
Karena input parameters merupakan angka 3 maka yang direturn adalah '123'
```

#### Test Case 2

**Input**:

```txt
6
```

**Expected Output / Behavior**:

```txt
123123
```

**Explanation**:

```txt
Karena input parameters merupakan angka 6 dan jika perhitungan sudah sampai ke angka 3 maka sistem perhitungan kembali dari angka 1, sehinga yang direturn adalah '123123'
```

<!-- Add sufficient numbers of test case example to help student understand the problem -->