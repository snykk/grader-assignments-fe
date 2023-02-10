# Functional component and props

## Exercise - 2

### NOTES

- Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
- Dilarang mengganti nama function yang diberikan.
- Wajib menjalankan `npm install` atau `pnpm install` sebelum mengerjakan project.

### Description

Buatlah sebuah _functional component_ pada file `App.js` dengan nama `Student`. _Function_ ini akan menerima `props` `name` dan `isStudent` dengan format berikut:

| Name        | Data Type |
| ----------- | --------- |
| _name_      | string    |
| _isStudent_ | boolean   |

Yang perlu kalian lakukan adalah menampilkan data yang terdapat pada `props` menggunakan elemen HTML `p` dengan format berikut:

```txt
Name: <full name>
First name: <first name>
Status: <isStudent>
```

- Full name diambil dari props `name`.
- First name diambil dari nama pertama dari props `name`.
- Status diambil dari props `isStudent`, jika statusnya `true`, akan menampilkan "Student", jika statusnya `false` maka akan menampilkan "Not student".

Contoh:

```txt
Name: Djarot Purnomo
First name: Djarot
Status: Student
```

Setiap elemen `p` masing-masing memiliki `className`, yaitu:

- `fullName` untuk elemen `p` yang menampilkan full name.
- `firstName` untuk elemen `p` yang menampilkan first name.
- `status` untuk elemen `p` yang menampilkan status.
