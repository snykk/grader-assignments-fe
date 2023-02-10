# Counter App

## Exercise Interacting with the Web API 2

### Description

Counter App merupakan sebuah applikasi yang dapat menambahkan dan mengurangi nilai dari sebuah counter. Counter App ini memiliki 2 buah tombol, yaitu tombol tambah dan tombol kurang. Ketika tombol tambah ditekan, maka nilai dari counter akan bertambah 1. Begitu juga ketika tombol kurang ditekan, maka nilai dari counter akan berkurang 1.

### Acceptance Criteria

- Counter App punya judul dengan menggunakan tag `h1`. Text dari judul adalah "Counter App".
- Counter App menampilkan nilai dari counter dengan menggunakan tag `h2` dan mempunyai `id` counter. Text dari nilai counter secara default adalah "0".
- Counter App memiliki 2 buah tombol, yaitu tombol Up dan tombol Down.
- Tombol Up memiliki `id` "btn-add" dan tombol Down memiliki `id` "btn-subtract".
- Tombol Up memiliki text "Up" dan tombol Down memiliki text "Down".
- Ketika tombol Up ditekan, maka nilai dari counter akan bertambah 1.
- Ketika tombol Down ditekan, maka nilai dari counter akan berkurang 1.
- Jika nilai dari counter bernilai 0, dan tombol Down di klik, maka akan ada warning message `Oops! you reach the min value!`.
- Warning message tersebut akan hilang ketika tombol Up ditekan.
- Jika nilai dari counter bernilai 10, dan tombol Up di klik, maka akan ada warning message `Oops! you reach the max value!`.
- Warning message tersebut akan hilang ketika tombol Down ditekan.
- Warning message akan menggunakan tag `p` dan mempunyai `class` "warning-message".
