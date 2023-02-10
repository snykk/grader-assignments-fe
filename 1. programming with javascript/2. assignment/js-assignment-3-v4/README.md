# Programming with Javascript

## Assignment 3 - Salesman Dengan Penjualan Terbaik

### Description

Sebuah perusahaan Maju Terus memiliki 5 orang sales, yaitu Adi, Udin, Budi, Poltak dan Sri. Pembukuan di perusahaan ini cukup rapih, dimana penjualan setiap sales dicatat total per harinya. Karena produk yang dijual cukup unik, maka tidak setiap hari ada penjualan.

Pada akhir bulan, akan dibuat laporan penjualan bulan tersebut yang merupakan hasil rekap dari semua sales. Dan diumumkan 1 orang sales dengan penjualan terbanyak yang akan menerima bonus.

Karena admin dari Maju Terus masih manusia, maka terkadang ada data sales harian yang salah. Data ini bisa dikoreksi sebelum laporan penjualan dibuat dan bisa berupa penambahan atau koreksi data.

Sebagai programmer baru, kamu diminta untuk membuat laporan penjualan bulanan dan mencari siapa sales dengan penjualan terbanyak yang akan menerima bonus.

Diasumsikan bahwa laporan penjualan dibuat pukul 23:59:59.
Diasumsikan bahwa laporan pasti merupakan data bulan tersebut, tidak tercampur dengan bulan lain.

Diberikan satu function salesReport yang akan menjadi fungsi utama dan menerima 2 parameter yaitu "data" dan "correction".

**"data"** berisi data sales harian dalam bentuk array of object dengan struktur berikut:
```json
[
    {
        "salesName": "berisi_nama_sales_pasti_salah_satu_dari_5_nama_diatas.",
        "totalSales": "berisi_total_sales_dalam_integer.",
        "salesDate": "berisi_tanggal_penjualan_antara_1-31.",
    }
]
```
**"correction"** berisi data koreksi dalam bentuk array of object dengan struktur berikut:
```js
[
    {
        type: "pasti_berisi_kata_'tambah'_atau_'koreksi'",
        salesName: "berisi_nama_sales_yang_dikoreksi",
        totalSales: "berisi_angka_pengganti_total_sales_dalam_integer",
        salesDate: "berisi_tanggal_penjualan_yang dikoreksi_berisi_angka_antara_1-31",
    },
    ...
]
```

> Note: Untuk data 'tambah', maka tinggal menambahkan data salesName, totalSales dan salesData. 

> Note: Untuk data 'koreksi', maka yang dirubah hanya totalSales, gunakan salesDate dan salesName untuk mencari data yang perlu diganti.

Output yang diharapkan adalah dalam bentuk object dengan format berikut:
```js
{
    monthlySales: "sum_of_total_sales_by_all_sales",
    totalSalesByName:
    {
        "Adi": "totalSales for the month",
        "Budi": "totalSales for the month",
        "Poltak": "totalSales for the month",
        "Sri": "totalSales for the month",
        "Udin": "totalSales for the month",
    },
    bestSalesman: `Penjualan terbanyak dilakukan oleh name_of_salesName dengan total penjualan dalam 1 bulan sebesar total_of_totalSales`,
}
```

> Note: urutan nama sales di key "totalSalesByName" berurutan sesuai abjad, sama persis dengan contoh diatas.

### Constraints

- Fungsi utama yaitu Function `salesReport()` beserta parameter-nya tidak boleh dirubah.
- Diperbolehkan membuat function baru untuk membantu yang nantinya akan digunakan di function `salesReport()`, contohnya  `rekapSalesByName()`. Contoh function `rekapSalesByName()` ini boleh dirubah maupun tidak digunakan sama sekali.
- Diasumsikan bahwa hanya ada 5 nama sales, tidak ada nama sales lain atau penjualan tanpa nama sales.
- Diasumsikan bahwa hanya akan ada satu nama dengan penjualan terbanyak.
- Diasumsikan bahwa parameter `"data"` berisi data penjualan, pasti ada dan tidak mungkin kosong.

#### Test Case 1

**Input**:

```js
data = [
    {
        salesName: 'Udin',
        totalSales: 100,
        salesDate: 1 
    },
    {
        salesName: 'Poltak',
        totalSales: 100,
        salesDate: 1
    },
    {
        salesName: 'Poltak',
        totalSales: 50,
        salesDate: 2
    },
];
```

**Expected Output / Behavior**:

```js
{
  monthlySales: 250,
  totalSalesByName: { Adi: 0, Budi: 0, Poltak: 150, Sri: 0, Udin: 100 },
  bestSalesman: 'Penjualan terbanyak dilakukan oleh Poltak dengan total penjualan dalam 1 bulan sebesar 150'
}
```

**Explanation**:

```js
- monthlySales didapatkan dari penjumlahan seluruh totalSales dari data yang ada, 100+100+50 = 250.

- Udin memiliki satu hari penjualan dengan nilai 100, maka totalSalesByName milik Udin = 100.
- Poltak memiliki dua hari penjualan dengan nilai 100 dan 50, maka total salesByName milik Poltak = 150.

- Untuk best Salesman adalah Poltak karena dia menjual 150, lebih banyak dibandingkan Udin yang hanya 100.
```

#### Test Case 2

**Input**:

```js
data = [
    {
        salesName: 'Udin',
        totalSales: 100,
        salesDate: 1 
    },
    {
        salesName: 'Poltak',
        totalSales: 100,
        salesDate: 1
    },
    {
        salesName: 'Poltak',
        totalSales: 50,
        salesDate: 2
    },
];

correction = [
    {
        type: 'tambah',
        salesName: 'Udin',
        totalSales: 100,
        salesDate: 2
    }
]
```

**Expected Output / Behavior**:

```js
{
  monthlySales: 350,
  totalSalesByName: { Adi: 0, Budi: 0, Poltak: 150, Sri: 0, Udin: 200 },
  bestSalesman: 'Penjualan terbanyak dilakukan oleh Udin dengan total penjualan dalam 1 bulan sebesar 200'
}
```

**Explanation**:

```js
- Untuk data sama dengan Test Case 1, namun terdapat correction disini. Yaitu "tambah" penjualan Udin dengan nilai 100.

- monthly totalSales yang sebelumnya 250 bertambah 100 menjadi 350.

- totalSalesByName untuk Udin juga berubah, dari 100 menjadi 200.

- bestSalesman berubah menjadi Udin, karena total penjualan-nya menjadi 200, lebih besar dari milik Poltak sebesar 150.
```

#### Test Case 3

**Input**:

```js
data = [
    {
        salesName: 'Udin',
        totalSales: 100,
        salesDate: 1 
    },
    {
        salesName: 'Poltak',
        totalSales: 100,
        salesDate: 1
    },
    {
        salesName: 'Poltak',
        totalSales: 50,
        salesDate: 2
    },
];

correction = [
    {
        type: 'tambah',
        salesName: 'Udin',
        totalSales: 100,
        salesDate: 2
    },
    {
        type: 'koreksi',
        salesName: 'Udin',
        totalSales: 20,
        salesDate: 2
    }
]
```

**Expected Output / Behavior**:

```js
{
  monthlySales: 270,
  totalSalesByName: { Adi: 0, Budi: 0, Poltak: 150, Sri: 0, Udin: 120 },
  bestSalesman: 'Penjualan terbanyak dilakukan oleh Poltak dengan total penjualan dalam 1 bulan sebesar 150'
}
```

**Explanation**:

```js
- Untuk data sama dengan Test Case 2, terdapat tambahan data untuk correction disini. Yaitu "koreksi" penjualan Udin menjadi nilai 20.

- monthly totalSales yang sebelumnya 350 berubah menjadi 270. Yaitu 250 + 100 dikoreksi menjadi 250 + 20.

- totalSalesByName untuk Udin juga berubah, dari 200 menjadi 120. Yaitu 100 + 100 dikoreksi menjadi 100 + 20.

- bestSalesman berubah menjadi Poltak, karena total penjualan-nya menjadi 120, lebih kecil dari milik Poltak sebesar 150.
```

#### Test Case 4

**Input**:

```js
data = [
    {
        salesName: 'Udin',
        totalSales: 100,
        salesDate: 1 
    },
    {
        salesName: 'Poltak',
        totalSales: 100,
        salesDate: 1
    },
    {
        salesName: 'Poltak',
        totalSales: 50,
        salesDate: 2
    },
];

correction = [
    {
        type: 'koreksi',
        salesName: 'Udin',
        totalSales: 20,
        salesDate: 1
    }
]
```

**Expected Output / Behavior**:

```js
{
  monthlySales: 170,
  totalSalesByName: { Adi: 0, Budi: 0, Poltak: 150, Sri: 0, Udin: 20 },
  bestSalesman: 'Penjualan terbanyak dilakukan oleh Poltak dengan total penjualan dalam 1 bulan sebesar 150'
}
```

**Explanation**:

```js
- Untuk data sama dengan Test Case 1, namun terdapat correction disini. Yaitu "koreksi" penjualan Udin dengan nilai 20 dan salesDate 1.

- monthly totalSales yang sebelumnya 250 menjadi 170 karena penjualan Udin sebelumnya adalah 100, sekarang menjadi 20, sehingga terjadi pengurangan sebesar 80. Angka 250 dikurangi 80 = 170.

- totalSalesByName untuk Udin juga berubah, dari 100 menjadi 20.

- bestSalesman tetap Poltak, karena total penjualan-nya Udin berkurang menjadi 20 sehingga tidak melebihi penjualan Poltak sebesar 150.
```
