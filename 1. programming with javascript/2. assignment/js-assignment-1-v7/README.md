# CAMP Travel

## Directions

Pak Aditira selaku pemilik travel ingin membuat sebuah program harga khusus serta discount untuk penumpang agensi travelnya yang menggunakan voucher dan berpergian secara group/berkelompok. Ia punya kriteria khusus dalam menentukan harga dan discount yang akan diberikan. Harga dan discount yang akan diberikan bergantung dari status pada voucher yang dimiliki dari penumpangnya.

Penentuan `status` didapatkan dari `id` voucher yang bertipe string dengan ketentuan:
- Apabila dalam string `id` voucher terdapat kode status `STD`, maka `status` adalah `STUDENT`,
- Apabila dalam string `id` voucher terdapat kode status `CORP`, maka `status` adalah `CORPORATE`,

  - contoh 1:

    id = "STD3888-0-197621", karena dalam string `id` terdapat kode status `STD`, maka `status` = `STUDENT`

  - contoh 2:

    id = "CORP3888-0-197621", karena dalam string `id` terdapat kode status `CORP`, maka `status` = `CORPORATE`

- Apabila dalam string `id` customer terdapat kode status selain `STD` dan `CORP` atau `status` adalah string kosong `("")` yang berarti tidak terdapat kode status, maka akan menampilkan pesan `Maaf, voucher yang anda miliki tidak valid!`

Setelah Pak Aditira menentukan sekema status pada voucher, Pak Aditira juga ingin menentukan jumlah harga dan discount pembayarannya. Ketentuan pembayarannya adalah:

- Jika `status` adalah `STUDENT`:
  - Harga Utama: `20000`/orang
  - Diskon `20%` dari Harga Total, Jika total penumpang di atas `20` orang
- Jika `status` adalah `CORPORATE`:
  - Harga Utama: `50000`/orang
  - Diskon `25%` dari Harga Total, Jika total penumpang di atas `30` orang
- Penghitungan total tagihan:
  - Harga Total - (Harga Total * Diskon)

Kalian di hire oleh Pak Aditira untuk membuat program dengan output dari sistem pembayaran CAMP Travel berupa pesan yang menampilkan total tagihan dengan format berikut:

```txt
"Selamat! Voucher untuk <status> dengan id <id> berhasil di redeem, total yang harus dibayarkan sebesar Rp. <total harga>."
```

- Input:
  ```js
  let id = 'STD9845-846-1121'
  let amount = 21
  ```

- Output:
  ```js
  "Selamat! Voucher untuk STUDENT dengan id STD9845-846-1121 berhasil di redeem, total yang harus dibayarkan sebesar Rp. 336000."
  ```

Jika di lihat dari `id` pada `input`, terdapat kode status berupa "STD" yang berarti `id` tersebut valid dan memiliki kode status untuk `STUDENT` di mana harga untuk 1 tiket student yaitu `20000`/orang. pada `input` jumlah tiket yang di beli sebanyak `21`, yang mana jika total penumpang di atas `20` orang maka akan mendapatkan diskon sebesar `20%`. Sehingga total yang harus di bayarkan sebesar `336000` (price - (price * discount) -> (2000 * 21) - ((2000 * 21) - 20%).