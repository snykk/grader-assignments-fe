# Rock Paper Scissor

## NOTES

- Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
- Dilarang menghapus ataupun mengedit bagian module.exports dibagian bawah file `main.js`
- Dilarang mengganti nama function yang diberikan

---

## Directions

Diberikan sebuah function `rockPaperScissor`, sebuah function yang mensimulasikan permainan `batu-gunting-kertas `.

Function ini yang akan menerima 2 parameter bertipe data string.

Kedua parameter ini sudah dipastikan hanya berisi kemungkinan dari 3 string berikut:

- `rock`
- `paper`
- `scissor`

Parameter pertama merupakan string yang dipilih oleh `player1` dan parameter kedua merupakan string yang dipilih oleh `player2`.

function ini akan mengembalikan sebuah string yang menyatakan hasil akhir dari game dengan aturan sebagai berikut:

- `paper` akan selalu menang melawan `rock`
- `rock` akan selalu menang melawan `scissor`
- `scissor` akan selalu menang melawan `paper`
- jika string yang dipilih sama, maka function akan return string `Draw!`
- jika player1 menang, maka function akan return string `Player 1 Won!`.
- jika player2 menang, maka function akan return string `Player 2 Won!`.

## Contoh

```bash
Player 1 = rock
Player 2 = rock
result = Draw!
```

```bash
Player 1 = paper
Player 2 = rock
result = Player 1 Won!
```

```bash
Player 1 = scissor
Player 2 = rock
result = Player 2 Won!
```
