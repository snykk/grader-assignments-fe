# Exercise Iteration 1

## Reverse Word Unique Character

### Description

Buatlah sebuah _function_ yang akan menerima _input_ berupa sebuah _string_. Kemudian _function_ ini akan mengembalikan _string_ dengan ketentuan sebagai berikut:

- String akan dibalik urutan karakternya (_reverse_), contoh:

  - `greating` => `gnitaerg`
  - `learning` => `gninrael`
  - `RuangGuru` => `uruGgnauR`
  - `I am learning Javascript` => `tpircsavaJ gninrael ma I`

- Jika ada karakter yang berulang sama, maka hanya ambil salah satu saja, contoh:
  - `book` => `kob`
  - `baloon` => `nolab`
  - `agree` => `erga`
  - `callback` => `kcablac`
  - `I am reading a book how to hunt a deer` => `red a tnuh ot woh kob a gnidaer ma I`

### Constraints

- _function_ pasti akan menerima inputan berupa `string`.
- `string` inputan bisa dalam bentuk `lowercase`, `uppercase`, atau kombinasi `lowercase` dan `uppercase`.
- `string` inputan terdiri dari minimal 2 karakter dan maksimal 100 karakter.

### Test Case Examples

#### Test Case 1

**Input**:

```txt
Input: greating
```

**Expected Output / Behavior**:

```txt
gnitaerg
```

**Explanation**:

Dari inputan string `greating`, bisa kita pisah per nomor index dari karakternya sebagai berikut:

```text
index 0 = g
index 1 = r
index 2 = e
index 3 = a
index 4 = t
index 5 = i
index 6 = n
index 7 = g
```

Kemudian untuk menghasilkan output diperlukan membalik urutan indexnya dari terbesar ke terkecil:

```text
index 7 menjadi index 0 = g
index 6 menjadi index 0 = n
index 5 menjadi index 0 = i
index 4 menjadi index 0 = t
index 3 menjadi index 0 = a
index 2 menjadi index 0 = e
index 1 menjadi index 0 = r
index 0 menjadi index 0 = g
```

Sehingga output yang akan di return oleh function menjadi `gnitaerg`

---

#### Test Case 2

**Input**:

```txt
book
```

**Expected Output / Behavior**:

```txt
kob
```

**Explanation**:

Dari inputan string `book`, bisa kita pisah per nomor index dari karakternya sebagai berikut:

```text
index 0 = b
index 1 = o
index 2 = o
index 3 = k
```

Kemudian untuk menghasilkan output diperlukan membalik urutan indexnya dari terbesar ke terkecil:

```text
index 3 menjadi index 0 = k
index 2 menjadi index 1 = o
index 1 menjadi index 2 = o
index 0 menjadi index 3 = b
```

karena ada karakter yang berulang sama, yaitu huruf `o` pada index ke-1 dan ke-2, maka akan diambil salah satunya, yaitu index yang pertama kali ditemukan, yaitu huruf `o` index ke-1.

```text
index 3 menjadi index 0 = k
index 2 menjadi index 1 = o
index 0 menjadi index 3 = b
```

Sehingga output yang akan di return oleh function menjadi `kob`
