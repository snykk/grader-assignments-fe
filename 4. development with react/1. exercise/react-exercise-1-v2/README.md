## React Fundamental Exercie

Untuk exercise kali ini, silahkan teman-teman buka file `src\App.js`, jangan lupa untuk menjalankan `pnpm start` untuk menjalankan server Reactnya.

### Task 1: Create a basic React component

- Function: `Task1`
- Task: Buat sebuah React komponen dengan elemen HTML terluarnya berupa `div` dengan atribut `className` berisi `basic_component`, yang memiliki children berupa elemen `h1` yang berisi teks `Halo dunia!`

### Task 1.1: Create a React component with props

- Function: `Task1_1`
- Task: Buat sebuah React komponen dengan elemen HTML terluarnya berupa `h1`, komponen ini menerima sebuah props berupa `name`, tampikan props tersebut di dalam elemen `h1` tersebut.

### Task 2: Create a React component that use `useState` and onClick event

- Function: `Task2`
- Task: Tambahkan state yang memiliki default value "Klik tombol di bawah" dan tampilkan di elemen `h1` yang telah disediakan. Lalu di elemen `button`, tambahkan event handler `onClick` yang akan mengubah state tersebut menjadi "Tombol telah di-klik!".

### Task 3: Create a list of React components

- Function: `Task3`
- Task: Dari array `students`, buat sebuah list yang berisi elemen `h2` yang berisi nama dan umur dari siswa dengan format `nama - umur`. Contoh: `Budi - 20`.

### Task 3.1: Create a filtered list of React components

- Function: `task3_1`
- Task: Mirip seperti task sebelumnya, tapi pastikan bahwa seluruh siswa yang telah `dropout` tidak ditampilkan.

### Task 4: Create a React component with a conditional

- Function: `Task4`
- Task: Di komponen `Task4`, terdapat sebuah button. Buat sebuah state dan hubungkan event listener pada button tersebut, sehingga ketika button tersebut di-klik, elemen `p` yang kita berikan akan tidak ditampilkan.
