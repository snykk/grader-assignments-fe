# Exercise Modular Function

## Temperature Conversion

### Description

`convertTemperature` adalah sebuah function yang menerima tiga parameter, yaitu `temperature`, `initialUnit`, dan `finalUnit`. Function akan mengembalikan nilai suhu yang sudah dikonversi dari `initialUnit` ke `finalUnit`. Nilai suhu yang dikembalikan harus memiliki dua angka di belakang koma.

Pada exercise ini, kamu akan diminta untuk membuat beberapa helper function yang akan digunakan oleh `convertTemperature` untuk melakukan konversi suhu.

helper function yang akan kamu buat adalah:

- `kelvinToCelsius`
- `kelvinToFahrenheit`
- `celsiusToFahrenheit`
- `celsiusToKelvin`
- `fahrenheitToKelvin`
- `fahrenheitToCelsius`

Untuk mempermudah kamu dalam mengerjakan exercise ini, kamu bisa menggunakan rumus konversi suhu berikut:

- `kelvinToCelsius` => `kelvin - 273.15`
- `kelvinToFahrenheit` => `(kelvin - 273.15) * 9/5 + 32`
- `celsiusToFahrenheit` => `(celsius * 9/5) + 32`
- `celsiusToKelvin` => `celsius + 273.15`
- `fahrenheitToKelvin` => `(fahrenheit - 32) * 5/9 + 273.15`
- `fahrenheitToCelsius` => `(fahrenheit - 32) * 5/9`

### Instructions

- Buatlah function `kelvinToCelsius` yang menerima satu parameter `kelvin` dan mengembalikan nilai suhu dalam satuan celcius.
- Buatlah function `kelvinToFahrenheit` yang menerima satu parameter `kelvin` dan mengembalikan nilai suhu dalam satuan fahrenheit.
- Buatlah function `celsiusToFahrenheit` yang menerima satu parameter `celsius` dan mengembalikan nilai suhu dalam satuan fahrenheit.
- Buatlah function `celsiusToKelvin` yang menerima satu parameter `celsius` dan mengembalikan nilai suhu dalam satuan kelvin.
- Buatlah function `fahrenheitToKelvin` yang menerima satu parameter `fahrenheit` dan mengembalikan nilai suhu dalam satuan kelvin.
- Buatlah function `fahrenheitToCelsius` yang menerima satu parameter `fahrenheit` dan mengembalikan nilai suhu dalam satuan celcius.
- Buatlah function `convertTemperature` yang menerima tiga parameter `temperature`, `initialUnit`, dan `finalUnit`. Function akan mengembalikan nilai suhu yang sudah dikonversi dari `initialUnit` ke `finalUnit`. Untuk melakukan konversi suhu, kamu bisa menggunakan function yang sudah kamu buat sebelumnya.

### Constraints

- `temperature` adalah angka yang bisa berupa number
- `initialUnit` dan `finalUnit` adalah string yang berisi `C`, `F`, atau `K`
- `initialUnit` dan `finalUnit` tidak boleh sama
- `initialUnit` dan `finalUnit` tidak boleh kosong
- `initialUnit` dan `finalUnit` tidak boleh selain `C`, `F`, atau `K`
- `kelvinToCelsius` hanya menerima satu parameter
- `kelvinToFahrenheit` hanya menerima satu parameter
- `celsiusToFahrenheit` hanya menerima satu parameter
- `celsiusToKelvin` hanya menerima satu parameter
- `fahrenheitToKelvin` hanya menerima satu parameter
- `fahrenheitToCelsius` hanya menerima satu parameter
- `convertTemperature` hanya menerima tiga parameter
- `convertTemperature` hanya mengembalikan nilai suhu yang sudah dikonversi dari `initialUnit` ke `finalUnit`

### Test Case Examples

#### Test Case 1

**Input**:

```text
temperature: 0
initialUnit: 'C'
finalUnit: 'K'
```

**Expected Output / Behavior**:

```txt
273.15
```

**Explanation**:

- `0` adalah nilai suhu yang akan dikonversi
- `C` adalah satuan awal suhu yang akan dikonversi
- `K` adalah satuan akhir suhu yang akan dikonversi
- `0` celcius sama dengan `273.15` kelvin

#### Test Case 2

**Input**:

```txt
temperature: 0
initialUnit: 'C'
finalUnit: 'F'
```

**Expected Output / Behavior**:

```txt
32
```

**Explanation**:

- `0` adalah nilai suhu yang akan dikonversi
- `C` adalah satuan awal suhu yang akan dikonversi
- `F` adalah satuan akhir suhu yang akan dikonversi
- `0` celcius sama dengan `32` fahrenheit

#### Test Case 3

**Input**:

```txt
temperature: 0
initialUnit: 'F'
finalUnit: 'C'
```

**Expected Output / Behavior**:

```txt
-17.78
```

**Explanation**:

- `0` adalah nilai suhu yang akan dikonversi
- `F` adalah satuan awal suhu yang akan dikonversi
- `C` adalah satuan akhir suhu yang akan dikonversi
- `0` fahrenheit sama dengan `-17.78` celcius

### Template

```javascript
function kelvinToCelsius(kelvin) {
  // your code here
}

function kelvinToFahrenheit(kelvin) {
  // your code here
}

function celsiusToFahrenheit(celsius) {
  // your code here
}

function celsiusToKelvin(celsius) {
  // your code here
}

function fahrenheitToKelvin(fahrenheit) {
  // your code here
}

function fahrenheitToCelsius(fahrenheit) {
  // your code here
}

function convertTemperature(temperature, initialUnit, finalUnit) {
  // your code here
}

console.log(convertTemperature(0, 'C', 'K')); // 273.15
console.log(convertTemperature(0, 'C', 'F')); // 32

console.log(convertTemperature(0, 'F', 'C')); // -17.78
console.log(convertTemperature(0, 'F', 'K')); // 255.37

console.log(convertTemperature(0, 'K', 'C')); // -273.15
console.log(convertTemperature(0, 'K', 'F')); // -459.67
```
