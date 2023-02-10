# Holly Knight

## NOTES

- Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
- Dilarang menghapus ataupun mengedit bagian module.exports dibagian bawah file `main.js`
- Dilarang mengganti nama function yang diberikan

---

## Directions

Diberikan sebuah function `hollyKnight`, sebuah function yang mensimulasikan pertempuran antara Holly Knigth dengan pasukan undead di negeri Rogu.

Function ini yang akan menerima 3 parameter dengan tipe data sebagai berikut:

- Parameter pertama berupa `string`, berisikan **nama dari Holly Knight**.
- Parameter kedua berupa `number`, berisikan **stamina dari Holly Knight**.
- Parameter ketiga berupa `number`, berisikan **jumlah undead di medan pertempuran**.

Pertempuran di negeri Rogu berlangsung dengan sengit, ada beberapa kondisi yang terjadi di dalam pertempuran:

- 1 stamina, cukup untuk mengalahkan 1 undead.
- Jika pertempuran berakhir, semua undead berhasil dikalahkan dan Holly Knight masih memiliki stamina, maka pertempuran dimenangkan telak oleh Holly Knight.
- Jika pertempuran berakhir, semua undead berhasil dikalahkan, namun Holly Knight juga kehabisan tenaga, maka pertempuran beruntung bisa dimenangkan oleh Holly Knight.
- Jika pertempuran berakhir, masih ada undead yang hidup dan Holly Knight kehabisan tenaga, maka Holly Knight gugur di medan perang dengan gagah berani.

Berdasarkan kondisi tersebut, function akan mengembalikan string berdasarkan dengan format sebagai berikut:

- Jika Holly Knigt memenangkan pertempuran secara telak :

  ```bash
  Holly Knight + NAMA HOLLY KNIGHT + memenangkan pertempuran dengan mudah!
  ```

- Jika Holly Knigt beruntung bisa memenangkan pertempuran :

  ```bash
  Beruntung Holly knight + NAMA HOLLY KNIGHT + berhasil mengalahkan + JUMLAH UNDEAD + undead!
  ```

- Jika Holly Knigt gugur di medan pertempuran :

  ```bash
  Holly knight + NAMA HOLLY KNIGHT + mengalahkan + JUMLAH UNDEAD YANG BERHASIL DIKALAHKAN + undead, namun sayang holly knight + NAMA HOLLY KNIGHT + gugur di medan perang!
  ```

## Contoh

```bash
name = Lancelot
stamina = 30
undead = 20
result = Holly Knight Lancelot memenangkan pertempuran dengan mudah!
```

```bash
name = Gallahad
stamina = 10
undead = 10
result = Beruntung Holly knight Gallahad berhasil mengalahkan 10 undead!
```

```bash
name = Tristan
stamina = 100
undead = 110
result = Holly knight Tristan mengalahkan 100 undead, namun sayang holly knight Tristan gugur di medan perang!
```
