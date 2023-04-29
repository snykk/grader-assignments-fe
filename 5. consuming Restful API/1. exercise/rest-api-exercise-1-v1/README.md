## Consuming REST API Fundamental Exercie

Untuk exercise kali ini, silahkan teman-teman buka file `src\tasks.js`, jangan lupa untuk menjalankan `pnpm start` untuk menjalankan server.

### Task 1: Fetch a url

- Function: `task1`
- Description: Return function fetch dengan method GET dan parameter url `http://localhost:3000`

### Task 2: Submit PATCH request and get the response

- Function: `task2`
- Description: Return isi response dari fetch ke url `http://localhost:3000/task2` dengan method PATCH

### Task 3: Submit POST request with query parameter

- Function: `task3`
- Description: Return isi response dari fetch ke url `http://localhost:3000/task3` dengan method POST dan query parameter `user_id` dengan value `3` dan `role` dengan value `admin`

### Task 4: Submit POST request with body

- Function: `task4`
- Description: Return isi response dari fetch ke url `http://localhost:3000/task4` dengan method POST dan body `{ "username": "admin", "password": "password" }`, jangan lupa tambahkan header `Content-Type` dengan value `application/json`
