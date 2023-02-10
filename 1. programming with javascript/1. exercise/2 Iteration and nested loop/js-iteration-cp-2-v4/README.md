# Exercise Iteration 2

## Treasure Hunter

### Description

Seorang trasure hunter sedang mencari harta karun di sebuah pulau. Trasure hunter akan mencatat perjalanannya tiap hari kedalam sebuah string. Setiap karakter dalam string tersebut memiliki arti sebagai berikut:

- `$` => Harta karun ditemukan, nilai harta karun adalah 100
- `x` => Trasure hunter terjatuh ke laut, nilai harta karun akan berkurang 10
- `#` => Trasure hunter terjatuh ke jurang, nilai harta karun akan berkurang 50% dari nilai harta karun yang dimiliki

Jika trasure hunter terjatuh ke laut dan nilai harta karun yang dimilikinya kurang dari 10, maka nilai harta karun yang dimilikinya akan menjadi 0.

Jika trasure hunter terjatuh ke jurang dan nilai harta karun yang dimilikinya adalah 0, maka nilai harta karun yang dimilikinya akan tetap 0.

Buatlah sebuah function yang akan menghitung nilai harta karun yang ditemukan oleh trasure hunter tersebut.

### Constraints

- Input berupa string
- Input hanya terdiri dari karakter `$`, `x`, dan `#`
- Panjang input minimal 1 karakter dan maksimal 100 karakter

### Test Case Examples

#### Test Case 1

**Input**:

```text
INPUT: $$xx$$x
```

**Expected Output / Behavior**:

```text
OUTPUT: 370
```

**Explanation**:

- langkah pertama, trasure hunter menemukan harta karun sebesar 100, total harta karun yang dimilikinya sekarang adalah 100
- langkah kedua, trasure hunter menemukan harta karun sebesar 100, total harta karun yang dimilikinya sekarang adalah 200
- langkah ketiga, trasure hunter terjatuh ke laut, total harta karun yang dimilikinya sekarang adalah 190
- langkah keempat, trasure hunter terjatuh ke laut, total harta karun yang dimilikinya sekarang adalah 180
- langkah kelima, trasure hunter menemukan harta karun sebesar 100, total harta karun yang dimilikinya sekarang adalah 280
- langkah keenam, trasure hunter menemukan harta karun sebesar 100, total harta karun yang dimilikinya sekarang adalah 380
- langkah ketujuh, trasure hunter terjatuh ke laut, total harta karun yang dimilikinya sekarang adalah 370
- total harta karun yang ditemukan oleh trasure hunter adalah 370

#### Test Case 2

**Input**:

```text
INPUT: $x$xx$
```

**Expected Output / Behavior**:

```text

OUTPUT: 270
```

**Explanation**:

- langkah pertama, trasure hunter menemukan harta karun sebesar 100, total harta karun yang dimilikinya sekarang adalah 100
- langkah kedua, trasure hunter terjatuh ke laut, total harta karun yang dimilikinya sekarang adalah 90
- langkah ketiga, trasure hunter menemukan harta karun sebesar 100, total harta karun yang dimilikinya sekarang adalah 190
- langkah keempat, trasure hunter terjatuh ke laut, total harta karun yang dimilikinya sekarang adalah 180
- langkah kelima, trasure hunter terjatuh ke laut, total harta karun yang dimilikinya sekarang adalah 170
- langkah keenam, trasure hunter menemukan harta karun sebesar 100, total harta karun yang dimilikinya sekarang adalah 270
- total harta karun yang ditemukan oleh trasure hunter adalah 270

#### Test Case 3

**Input**:

```text
INPUT: $x$xx$##$$x
```

**Expected Output / Behavior**:

```text
OUTPUT: 257.5
```

**Explanation**:

- langkah pertama, trasure hunter menemukan harta karun sebesar 100, total harta karun yang dimilikinya sekarang adalah 100
- langkah kedua, trasure hunter terjatuh ke laut, total harta karun yang dimilikinya sekarang adalah 90
- langkah ketiga, trasure hunter menemukan harta karun sebesar 100, total harta karun yang dimilikinya sekarang adalah 190
- langkah keempat, trasure hunter terjatuh ke laut, total harta karun yang dimilikinya sekarang adalah 180
- langkah kelima, trasure hunter terjatuh ke laut, total harta karun yang dimilikinya sekarang adalah 170
- langkah keenam, trasure hunter menemukan harta karun sebesar 100, total harta karun yang dimilikinya sekarang adalah 270
- langkah ketujuh, trasure hunter terjatuh ke jurang, total harta karun yang dimilikinya sekarang adalah 135
- langkah kedelapan, trasure hunter terjatuh ke jurang, total harta karun yang dimilikinya sekarang adalah 67.5
- langkah kesembilan, trasure hunter menemukan harta karun sebesar 100, total harta karun yang dimilikinya sekarang adalah 167.5
- langkah kesepuluh, trasure hunter menemukan harta karun sebesar 100, total harta karun yang dimilikinya sekarang adalah 267.5
- langkah kesebelas, trasure hunter terjatuh ke laut, total harta karun yang dimilikinya sekarang adalah 257.5

#### Test Case 4

**Input**:

```text
INPUT: #######xx$
```

**Expected Output / Behavior**:

```text
OUTPUT: 100
```

**Explanation**:

- langkah pertama, trasure hunter terjatuh ke jurang, total harta karun yang dimilikinya sekarang adalah 0
- langkah kedua, trasure hunter terjatuh ke jurang, total harta karun yang dimilikinya sekarang adalah 0
- langkah ketiga, trasure hunter terjatuh ke jurang, total harta karun yang dimilikinya sekarang adalah 0
- langkah keempat, trasure hunter terjatuh ke jurang, total harta karun yang dimilikinya sekarang adalah 0
- langkah kelima, trasure hunter terjatuh ke jurang, total harta karun yang dimilikinya sekarang adalah 0
- langkah keenam, trasure hunter terjatuh ke jurang, total harta karun yang dimilikinya sekarang adalah 0
- langkah ketujuh, trasure hunter terjatuh ke jurang, total harta karun yang dimilikinya sekarang adalah 0
- langkah kedelapan, trasure hunter terjatuh ke laut, total harta karun yang dimilikinya sekarang adalah 0
- langkah kesembilan, trasure hunter terjadi ke laut, total harta karun yang dimilikinya sekarang adalah 0
- langkah kesepuluh, trasure hunter menemukan harta karun sebesar 100, total harta karun yang dimilikinya sekarang adalah 100
