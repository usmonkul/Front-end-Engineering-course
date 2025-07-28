<details>
   <summary>JavaScript Kirish va Ma'lumot Turlari (Data Types)</summary>
---

# 🟨 JavaScript Kirish va Ma'lumot Turlari (Data Types)

---

## JavaScript nima?

**JavaScript** — bu brauzerda (client-side) va serverda (Node.js orqali) ishlaydigan **interpreted, dynamically typed, high-level programming language**.

JavaScript yordamida siz:

* Interaktiv web sahifalar yaratishingiz mumkin (klik, hover, formalar bilan ishlash)
* API’dan ma’lumot olib kelishingiz mumkin
* O‘yinlar, ilovalar, animatsiyalar yaratishingiz mumkin

---

## 🔹 JavaScript’da O‘zgaruvchilar: `var`, `let`, `const`

### `var`

* Eski usul, hoistingga uchraydi.
* Function-scoped (faqat function ichida yopiqlanadi).
* Xatolik keltirib chiqaruvchi holatlar ko‘p.

```javascript
var name = "Ali";
console.log(name); // "Ali"

var age = 25;
age = 26; // qiymatni o‘zgartirish mumkin
```

### `let`

* ES6’da joriy qilingan.
* Block-scoped (faqat `{}` ichida ishlaydi).
* Qiymatini o‘zgartirish mumkin.

```javascript
let city = "Toshkent";
city = "Samarqand"; // o‘zgaradi
```

### `const`

* Constant (doimiy) qiymat.
* Qiymat bir marta beriladi, keyin o‘zgartirib bo‘lmaydi.
* Faqat `primitive` emas, `object` va `array` ichidagi qiymatlar o‘zgarishi mumkin.

```javascript
const PI = 3.14;
// PI = 3.1415 ❌ xatolik!

const user = {
  name: "Aziz"
};
user.name = "Diyor"; // ✅ bu mumkin
```

> 🟡 **Har doim `let` va `const` ishlating. `var`ni faqat tushunish uchun o‘rganing.**

---

## 🔹 Ma’lumot Turlari (Data Types)

JavaScript’da ikki asosiy turdagi ma’lumot mavjud:

* **Primitive types** (oddiy): `String`, `Number`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`
* **Reference types** (murakkab): `Object`, `Array`, `Function`

Bu darsda **asosiy primitive** turlarga e’tibor qaratamiz.

---

### 1. **String (Matn)**

```javascript
let name = "Ali";
let greeting = `Salom, ${name}`;
```

* Qavs: `'`, `"`, `` ` `` ishlatish mumkin
* String concatenation (qo‘shish): `+` orqali
* Template string: `` `Salom, ${ism}` `` — ko‘proq tavsiya qilinadi

**Real misol:**

```javascript
let user = "Zarina";
let welcome = `Assalomu alaykum, ${user}!`;
console.log(welcome); // "Assalomu alaykum, Zarina!"
```

---

### 2. **Number (Son)**

```javascript
let age = 23;
let price = 149.99;
```

Matematik amallar:

```javascript
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a / b); // 3.333...
console.log(a % b); // 1
```

**Maxsus qiymatlar:**

```javascript
console.log(1 / 0); // Infinity
console.log("salom" * 5); // NaN (Not a Number)
```

---

### 3. **Boolean (mantiqiy)**

Faqat 2 ta qiymat oladi: `true` yoki `false`

```javascript
let isLoggedIn = true;
let isExpired = false;

console.log(5 > 3); // true
console.log("Ali" === "ali"); // false
```

**if/else** bilan ishlaganda asosan boolean qiymatlar ishlatiladi.

---

### 4. **Undefined**

* Qiymat **hali berilmagan** o‘zgaruvchiga avtomatik tarzda tayinlanadi.

```javascript
let x;
console.log(x); // undefined
```

---

### 5. **Null**

* Maqsadli ravishda o‘zgaruvchini **bo‘sh** deb belgilash.

```javascript
let currentUser = null; // foydalanuvchi hali login qilmagan
```

---

## 🔹 Type Checking

JavaScript’da `typeof` operatori yordamida o‘zgaruvchi turini aniqlash mumkin:

```javascript
typeof "salom";       // "string"
typeof 45;            // "number"
typeof true;          // "boolean"
typeof undefined;     // "undefined"
typeof null;          // ❗️"object" (JS'dagi tarixiy xato)
```

---

## 🔹 Type Conversion (Tiplar o‘zgarishi)

JavaScript **dynamic type** til: o‘zgaruvchi turi avtomatik o‘zgarishi mumkin.

---

### 1. Stringga o‘zgartirish

```javascript
let num = 123;
let str = String(num); // "123"
```

Yoki avtomatik:

```javascript
let a = "5" + 2;
console.log(a); // "52" (stringga aylantirib qo‘shadi)
```

---

### 2. Songa o‘zgartirish

```javascript
let str = "456";
let num = Number(str); // 456
```

**NaN chiqish ehtimoli:**

```javascript
Number("hello"); // NaN
```

---

### 3. Boolean’ga o‘zgartirish

```javascript
Boolean(0);       // false
Boolean("");      // false
Boolean(null);    // false
Boolean(undefined); // false
Boolean("salom"); // true
Boolean(123);     // true
```

---

## 🔸 Real Hayotiy Misollar

### 1. Foydalanuvchi ro‘yxatdan o‘tganmi?

```javascript
let user = null;

if (user) {
  console.log("Xush kelibsiz!");
} else {
  console.log("Avval ro‘yxatdan o‘ting.");
}
// "Avval ro‘yxatdan o‘ting."
```

### 2. Formaga yosh kiritish:

```javascript
let ageInput = "18";
let age = Number(ageInput);

if (age >= 18) {
  console.log("Kirishga ruxsat berildi");
} else {
  console.log("Yosh yetarli emas");
}
```

---

## Amaliy Mashg‘ulot

* `let`, `const`, `var` farqlarini tahlil qiling
* Har bir ma’lumot turi uchun o‘zgaruvchilar yarating
* `typeof` yordamida turlarni tekshiring
* `Number()`, `String()`, `Boolean()` funksiyalari bilan konversiyalar bajaring
* Foydalanuvchi kiritgan ma’lumotni tekshirish (`prompt`) orqali kichik interaktiv forma yarating


Tushundim: bundan keyingi darslarda **uyga vazifa** bo‘lmaydi. Hozir esa siz uchun quyidagilarni tayyorlab berdim:

1. **String, Number, Boolean metodlari bo‘yicha chuqur, amaliy JavaScript darsi**
2. **10 ta o‘rta va qiyin darajadagi mashqlar** — o‘quvchilarning oldingi mavzular bo‘yicha bilimini mustahkamlash uchun

---

# 🟦 JavaScript: String, Number va Boolean metodlari

---

## 🔹 String metodlari

JavaScript’da stringlar uchun **o‘rnatilgan metodlar** juda ko‘p. Ular matn ustida ishlashni osonlashtiradi.

### `length`

String uzunligini qaytaradi:

```javascript
let word = "JavaScript";
console.log(word.length); // 10
```

---

### `toUpperCase()` / `toLowerCase()`

Barcha harflarni katta yoki kichik qiladi:

```javascript
"salom".toUpperCase(); // "SALOM"
"YAXSHIMISIZ".toLowerCase(); // "yaxshimisiz"
```

---

### `trim()`

Boshlanish va oxiridagi bo‘sh joylarni olib tashlaydi:

```javascript
let input = "   Hello   ";
console.log(input.trim()); // "Hello"
```

---

### `includes()`

Matn ichida qidirilgan substring bor-yo‘qligini aniqlaydi:

```javascript
let text = "JavaScript is awesome";
console.log(text.includes("Script")); // true
```

---

### `indexOf()` / `lastIndexOf()`

Belgining (yoki substring’ning) indexini qaytaradi:

```javascript
"hello".indexOf("l"); // 2
"hello".lastIndexOf("l"); // 3
```

---

### `slice(start, end)`

String’ning qism qismini qaytaradi:

```javascript
let name = "Frontend";
console.log(name.slice(0, 5)); // "Front"
```

---

### `replace()` / `replaceAll()`

Matn ichidagi substring’ni boshqa qiymat bilan almashtiradi:

```javascript
"salom do‘stim".replace("do‘stim", "dunyo"); // "salom dunyo"
"aaa".replaceAll("a", "*"); // "***"
```

---

### `split()`

String’ni bo‘lib, array (massiv) qiladi:

```javascript
let sentence = "Men frontend dasturchiman";
let words = sentence.split(" ");
console.log(words); // ["Men", "frontend", "dasturchiman"]
```

---

## 🔸 Number metodlari

JavaScript’da sonlar ham objectdek usullar bilan ishlashi mumkin.

### `toFixed(n)`

Belgilangandek kasrdan keyingi `n` ta raqamni chiqaradi (string ko‘rinishida):

```javascript
let price = 12.34567;
console.log(price.toFixed(2)); // "12.35"
```

---

### `toString()`

Sonni stringga aylantiradi:

```javascript
let x = 100;
x.toString(); // "100"
```

---

### `parseInt()` / `parseFloat()`

Stringdan butun yoki o‘nlik son chiqaradi:

```javascript
parseInt("100px"); // 100
parseFloat("10.5kg"); // 10.5
```

---

### `isNaN()` va `Number.isNaN()`

Qiymat son emasligini tekshiradi:

```javascript
isNaN("salom"); // true
Number.isNaN("salom"); // false (faqat real `NaN` ni tekshiradi)
```

---

### `Number.isInteger()`

Qiymat butun son ekanligini tekshiradi:

```javascript
Number.isInteger(15); // true
Number.isInteger(12.5); // false
```

---

## 🔸 Boolean metodlari

Boolean’ning o‘zi metodlarga boy emas, lekin quyidagilar orqali foydalaniladi:

### `Boolean()` – Tipni mantiqiyga o‘zgartirish

```javascript
Boolean("");      // false
Boolean("salom"); // true
Boolean(0);       // false
Boolean(1);       // true
```

### `!!` — Shortcut usul

```javascript
!!"text" // true
!!null   // false
```

### Foydali texnikalar

```javascript
let input = " ";
if (input.trim()) {
  console.log("Kiritilgan qiymat bor");
}
```

---

## 🧠 10 ta o‘rta va qiyin JavaScript mashq (faqat o‘rganilgan mavzulardan)

---

### 1. ✅ **So‘zlar sonini aniqlang**

Matn: `"Men front-end dasturchiman"`
Natija: `3 ta bo‘shliq → 4 ta so‘z`

**Yo‘nalish:**

* `.split(" ")` → array
* `.length` → so‘zlar soni

---

### 2. ✅ **Katta harflar sonini hisoblang**

Matn: `"JavAScrIPT"`
Natija: `6 ta katta harf`

**Yordam:**

* `.toUpperCase()`, `charAt(i)`, `for` sikli
* Har bir belgi katta bo‘lsa, sanash

---

### 3. ✅ **Qiymatni stringdan numberga aylantirib kvadratini toping**

Qiymat: `" 7 "`
Natija: `49`

**Yordam:**

* `.trim()` → bo‘shliqni olib tashlash
* `Number()` yoki `parseInt()` → raqamga aylantirish
* `num * num`

---

### 4. ✅ **Berilgan matn `a` bilan boshlanadimi va `z` bilan tugaydimi?**

Matn: `"applez"`
Natija: `true`

**Yordam:**

* `.charAt(0)` va `.charAt(matn.length - 1)` orqali tekshirish

---

### 5. ✅ **3 ta string’ni birlashtirib, umumiy uzunligini aniqlang**

So‘zlar: `"Web"`, `"App"`, `"Design"`
Natija: `13`

**Yordam:**

* 3 ta stringni `+` bilan birlashtirish
* `.length` yordamida umumiy uzunlikni olish

---

### 6. ✅ **"frontend" so‘zidagi unli harflar sonini hisoblang**

Matn: `"frontend"`
Natija: `3` (o, e, e)

**Yordam:**

* `for` sikli bilan har bir belgini tekshirish
* Agar belgi `a`, `e`, `i`, `o`, `u` ga teng bo‘lsa, sanash

---

### 7. ✅ **Kiritilgan qiymat raqammi?**

Qiymat: `"123"` → `true`
Qiymat: `"salom"` → `false`

**Yordam:**

* `Number(qiymat)` ishlatish
* So‘ng `isNaN()` bilan tekshirish

---

### 8. ✅ **Berilgan matnni har bir so‘zning birinchi harfini katta harfga aylantiring**

Matn: `"hello world"`
Natija: `"Hello World"`

**Yordam:**

* `.split(" ")`
* Har bir so‘z uchun: `word.charAt(0).toUpperCase() + word.slice(1)`
* `.join(" ")`

---

### 9. ✅ **Qiymatni faqat `true` yoki `false`ga aylantiring**

Qiymat: `""` → `false`
Qiymat: `"js"` → `true`

**Yordam:**

* `Boolean(qiymat)` yoki `!!qiymat`

---

### 10. ✅ **Ism, familiya va yoshdan iborat matn qaytaring**

Input: `"Ali"`, `"Valiyev"`, `21`
Output: `"Men Ali Valiyevman, 21 yoshdaman"`

**Yordam:**

* Template string: `` `Men ${ism} ${familiya}man, ${yosh} yoshdaman.` ``

---

</details>

<details>
   <summary>Operatorlar va If/Else Shartlar</summary>

# 🟩 JavaScript: Operatorlar va If/Else Shartlar

---

## 🔹 Operatorlar nima?

JavaScript’da operatorlar **qiymatlar ustida amallar bajarish** uchun ishlatiladi. Ular bir yoki bir nechta operandlar bilan ishlaydi.

---

## 🔸 1. Arithmetic (Matematik) operatorlar

| Operator | Ma’nosi            | Misol          |
| -------- | ------------------ | -------------- |
| `+`      | Qo‘shish           | `5 + 3` → `8`  |
| `-`      | Ayirish            | `10 - 4` → `6` |
| `*`      | Ko‘paytirish       | `2 * 6` → `12` |
| `/`      | Bo‘lish            | `8 / 2` → `4`  |
| `%`      | Qoldiq olish       | `9 % 2` → `1`  |
| `**`     | Darajaga ko‘tarish | `2 ** 3` → `8` |

```js
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
```

---

## 🔸 2. Assignment (Tayinlash) operatorlari

```js
let x = 5;
x += 3; // x = x + 3 → 8
x *= 2; // x = x * 2 → 16
```

**Tayinlash turlari:**

| Operator | Misol    | Teng qiymat       |
| -------- | -------- | ----------------- |
| `=`      | `x = 5`  | 5 ni x ga tayinla |
| `+=`     | `x += 2` | `x = x + 2`       |
| `-=`     | `x -= 2` | `x = x - 2`       |
| `*=`     | `x *= 2` | `x = x * 2`       |
| `/=`     | `x /= 2` | `x = x / 2`       |
| `%=`     | `x %= 2` | `x = x % 2`       |

---

## 🔸 3. Comparison (Taqqoslash) operatorlari

Bu operatorlar natijada **true yoki false** qaytaradi.

| Operator | Tavsifi                  | Misol                 |
| -------- | ------------------------ | --------------------- |
| `==`     | Teng (tipiga qarab emas) | `"5" == 5` → `true`   |
| `===`    | Qat'iy tenglik           | `"5" === 5` → `false` |
| `!=`     | Teng emas                | `4 != 5` → `true`     |
| `!==`    | Qat'iy teng emas         | `"5" !== 5` → `true`  |
| `>`      | Katta                    | `6 > 3` → `true`      |
| `<`      | Kichik                   | `2 < 5` → `true`      |
| `>=`     | Katta yoki teng          | `5 >= 5` → `true`     |
| `<=`     | Kichik yoki teng         | `3 <= 4` → `true`     |

**Tavsiyalar:**

* Har doim `===` va `!==` ni ishlating (`==` va `!=` noaniq natija berishi mumkin)

---

## 🔸 4. Logical (Mantiqiy) operatorlar

| Operator | Tavsifi                      | Misol                   |                          |        |   |                |
| -------- | ---------------------------- | ----------------------- | ------------------------ | ------ | - | -------------- |
| `&&`     | AND — har ikkisi true bo‘lsa | `true && true` → `true` |                          |        |   |                |
| \`       |                              | \`                      | OR — bittasi true bo‘lsa | \`true |   | false`→`true\` |
| `!`      | NOT — teskarisini oladi      | `!true` → `false`       |                          |        |   |                |

**Misollar:**

```js
let age = 20;
console.log(age > 18 && age < 30); // true
console.log(!(age === 25));        // true
```

---

## 🔸 5. Ternary operator (`? :`)

Shartli ifoda bo‘lib, `if/else`ning qisqa shakli.

```js
let age = 17;
let message = age >= 18 ? "Kirish mumkin" : "Ruxsat yo‘q";
console.log(message);
```

---

## 🔹 If / Else shart operatori

`if` orqali **shartlar** asosida kodni boshqaramiz.

### Sintaksis:

```js
if (shart) {
  // shart true bo‘lsa bajariladi
} else {
  // shart false bo‘lsa bajariladi
}
```

### Misol:

```js
let yosh = 20;

if (yosh >= 18) {
  console.log("Siz ruxsat oldingiz");
} else {
  console.log("Yosh yetarli emas");
}
```

---

## 🔹 If / Else If / Else

Bir nechta shartlarni tekshirish:

```js
let ball = 85;

if (ball >= 90) {
  console.log("A baho");
} else if (ball >= 75) {
  console.log("B baho");
} else if (ball >= 60) {
  console.log("C baho");
} else {
  console.log("Imtihondan o‘tolmadingiz");
}
```

---

## 🔹 Nested If (Ichma-ich)

```js
let isStudent = true;
let age = 22;

if (isStudent) {
  if (age > 20) {
    console.log("Katta yoshdagi talaba");
  } else {
    console.log("Yosh talaba");
  }
} else {
  console.log("Siz talaba emassiz");
}
```

---

## 🔸 Real hayotiy misollar

### 1. Foydalanuvchi yoshi bo‘yicha saytga kirish:

```js
let age = 15;
if (age >= 18) {
  console.log("Xush kelibsiz!");
} else {
  console.log("Kechirasiz, sizga ruxsat yo‘q.");
}
```

---

### 2. Login qilinganini tekshirish:

```js
let user = "admin";

if (user === "admin") {
  console.log("Xush kelibsiz, admin!");
} else {
  console.log("Foydalanuvchi aniqlanmadi.");
}
```

---

### 3. Ternary bilan tugma holatini ko‘rsatish:

```js
let isDarkMode = true;
let theme = isDarkMode ? "Dark Mode yoqilgan" : "Light Mode yoqilgan";
console.log(theme);
```

---

## 🔹 Yaxshi amaliyotlar

* Har doim `===` ishlating (qat’iy taqqoslash uchun)
* Shartlar aniq va o‘qilishi oson bo‘lsin
* Ternary operatorni faqat qisqa shartlar uchun ishlating

---

## 🔸 Amaliy mashqlar

## 🟢 **2 ta oson darajadagi interaktiv mashq**

---

### ✅ 1. Foydalanuvchidan ismini so‘rang va `alert` bilan xush kelibsiz degan xabar chiqaring

```js
// "Ismingizni kiriting:" → "Salom, Sardor! Xush kelibsiz!"
```

**Asosiy bilimlar:**
`prompt()`, string concatenation yoki template literal

---

### ✅ 2. Foydalanuvchidan son kiritishini so‘rang va bu son juftmi yoki toqmi, aniqlang

```js
// Input: 7 → Output: "Toq son"
// Input: 12 → Output: "Juft son"
```

**Asosiy bilimlar:**
`prompt()`, `Number()`, `%`, `if/else`

---

## 🟡 **4 ta o‘rta darajadagi real hayot mashqlari**

---

### ✅ 3. Foydalanuvchining yoshi asosida kirishga ruxsat bor-yo‘qligini tekshiring

```js
// prompt: "Yoshingizni kiriting:"
// Agar yosh ≥ 18 → "Kirishga ruxsat berildi"
// Aks holda → "Kechirasiz, siz voyaga yetmagansiz"
```

**Asosiy bilimlar:**
Type conversion, `if/else`, `alert()`

---

### ✅ 4. Berilgan matn `Salom` so‘zi bilan boshlanadimi? Natijani `true/false` ko‘rinishida chiqarish

```js
let message = "Salom, bugun dars bor";
```

**Yordam:**
`.startsWith("Salom")` yoki `.slice(0, 5) === "Salom"`

**Asosiy bilimlar:**
String methods, shart operatori

---

### ✅ 5. Foydalanuvchidan 2 ta son so‘rang va ular ustida +, -, \*, / amallarini bajarib natijalarni konsolga chiqaring

```js
// "1-sonni kiriting:", "2-sonni kiriting:"
// Natija: "Yig‘indi: 15", "Ko‘paytma: 50", ...
```

**Asosiy bilimlar:**
`prompt()`, `Number()`, arithmetic operatorlar

---

### ✅ 6. Ismda nechta katta harf borligini toping

```js
let name = "AlIbEk"; // → 4 ta katta harf
```

**Yordam:**

* `.charAt(i) === .charAt(i).toUpperCase()`
* `isNaN()` bilan raqam emasligini tekshirish

---

## 🔴 **4 ta qiyin (challenging) darajadagi mashqlar**

---

### ✅ 7. Foydalanuvchi ism, familiya, va yosh kiritadi. Siz jumla shaklida u haqida xabar qaytaring

```js
// prompt orqali ma’lumot olish
// Natija: "Men Sardor Yo‘ldoshevman. 22 yoshdaman."
```

**Yordam:**
Template literal, `prompt()`

---

### ✅ 8. Foydalanuvchidan matn kiriting. Agar matn bo‘sh bo‘lsa (faqat bo‘sh joy), `alert("Matn kiritilmadi")` chiqsin

```js
let input = prompt("Matn kiriting:"); 
```

**Yordam:**
`.trim() === ""` → bo‘sh yoki faqat bo‘sh joy

---

### ✅ 9. Foydalanuvchi parol kiritadi. Shartlar:

* parol uzunligi ≥ 6
* parolda hech bo‘lmaganda bitta katta harf bo‘lishi kerak
* agar ikki shart ham bajarilsa → “Parol qabul qilindi”

Aks holda:

* “Parol juda qisqa” yoki “Parolda katta harf yo‘q”

---

**Asosiy bilimlar:**
`.length`, `.toUpperCase()`, `.charAt(i)`, `if/else`

---

### ✅ 10. Raqam kiritiladi: agar butun son bo‘lsa — `"Butun son"`; aks holda `"Kasr son"`

```js
let num = prompt("Son kiriting:");
```

**Yordam:**
`Number.isInteger(Number(num))`





</details>



<details>
   <summary>Loops (for, while, do...while)</summary>

---

# 🔁 JavaScript: Loops (for, while, do...while)

---

## 🔹 Nega loop kerak?

Agar bir xil amalni 10, 100, yoki 1000 marta bajarish kerak bo‘lsa, kodni takror yozmasdan **avtomatik takrorlash** uchun **loop** ishlatiladi.

---

## 🔸 1. `for` loop

### Sintaksis:

```js
for (boshlanish; shart; o‘zgarish) {
  // bajariladigan kod
}
```

**Misol:** 1 dan 5 gacha bo‘lgan sonlarni chiqarish

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

**Ishlash ketma-ketligi:**

1. `i = 1` — boshlang‘ich qiymat
2. `i <= 5` — shart tekshiriladi
3. `console.log(i)` — bajariladi
4. `i++` — qiymat ortadi
5. Shart yana tekshiriladi va jarayon takrorlanadi

---

### 🔸 Amaliy misollar:

#### 1. 5 marta “Salom!” chiqarish:

```js
for (let i = 0; i < 5; i++) {
  console.log("Salom!");
}
```

#### 2. Foydalanuvchidan ismni so‘rab, uni 3 marta chiqarish:

```js
let ism = prompt("Ismingizni kiriting:");

for (let i = 0; i < 3; i++) {
  alert("Xush kelibsiz, " + ism);
}
```

---

## 🔸 2. `while` loop

### Sintaksis:

```js
while (shart) {
  // kodlar
}
```

**Misol:** 1 dan 5 gacha bo‘lgan sonlarni chiqarish

```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

---

### Foydalanish holati:

* Foydalanuvchi tugmani bosmaguncha davom etadi
* Oldindan nechta takrorlanish bo‘lishi noma’lum bo‘lsa

---

## 🔸 3. `do...while` loop

```js
do {
  // kod
} while (shart);
```

**Farqi:**

* Avval **bitta marta bajariladi**, keyin `shart` tekshiriladi

**Misol:**

```js
let count = 0;

do {
  console.log("Son: " + count);
  count++;
} while (count < 3);
```

---

## 🔸 4. `break` va `continue`

### `break` — loop’ni butunlay to‘xtatadi:

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // 5 da to‘xtaydi
  }
  console.log(i);
}
```

### `continue` — faqat shu aylanishni o‘tkazib yuboradi:

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // 3 ni chiqarib yuboradi
  }
  console.log(i);
}
```

---

## 🔸 Real hayot misollar

### 1. Foydalanuvchidan 3 ta ism so‘rab chiqarish

```js
for (let i = 1; i <= 3; i++) {
  let name = prompt(`Ism ${i} ni kiriting:`);
  console.log(`Ism ${i}: ` + name);
}
```

---

### 2. 1 dan 100 gacha faqat juft sonlarni chiqarish

```js
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

---

### 3. Parol to‘g‘ri kiritilmaguncha foydalanuvchini so‘rash

```js
let password;

do {
  password = prompt("Parolni kiriting:");
} while (password !== "12345");

alert("Parol to‘g‘ri!");
```

---

### 4. Foydalanuvchidan raqam so‘rab, 1 dan ushbu raqamgacha sonlarni chiqarish

```js
let son = Number(prompt("Nechagacha sanashni xohlaysiz?"));

for (let i = 1; i <= son; i++) {
  console.log(i);
}
```

---

## 🔸 Yaxshi amaliyotlar

* `for` — necha marta takrorlash ma’lum bo‘lsa ishlating
* `while` — shart to‘g‘ri bo‘lsa davom etadi, oldindan qancha ekanligi noma’lum bo‘lsa
* `do...while` — kam hollarda ishlatiladi, lekin foydali
* `break` va `continue` ni faqat zarur bo‘lsa ishlating


---

## ✅ 2 ta Oson Darajadagi Mashq

---

### 1. **1 dan 5 gacha sonlarni chiqaring**

```js
// Output: 1, 2, 3, 4, 5
```

**Tushuntirish:**
`for` loop bilan boshlang‘ich mashq. Faqat `console.log(i)` orqali chiqariladi.

---

### 2. **Foydalanuvchidan ismini 3 marta chiqarish**

```js
// prompt: "Ismingiz?" → 3 marta alert bilan chiqarilsin
```

**Tushuntirish:**
`prompt()` va `for` loopdan foydalaniladi. Har gal alert chiqaradi.

---

## 🔄 4 ta O‘rta Darajadagi Mashq

---

### 3. **1 dan 100 gacha faqat toq sonlarni chiqaring**

```js
// Output: 1, 3, 5, 7, ...
```

**Tushuntirish:**
`for` loop + `if (i % 2 !== 0)` bilan tekshirish.

---

### 4. **Foydalanuvchidan son so‘rab, 1 dan shu songacha barcha sonlarni chiqarish**

```js
// prompt: "Nechagacha sanaylik?"
// Output: 1, 2, 3, ... n
```

**Tushuntirish:**
`prompt()`, `Number()`, `for` loop

---

### 5. **So‘z ichida nechta `a` harfi borligini sanang**

```js
let word = "salom dunyo"; // Output: 1
```

**Tushuntirish:**

* `.length`, `.charAt(i)`
* `if (harf === "a")` → sanash

---

### 6. **0 dan 20 gacha bo‘lgan sonlar ichida 3 ga qoldiqsiz bo‘linadiganlarini chiqaring**

```js
// Output: 0, 3, 6, 9, 12, ...
```

**Tushuntirish:**
`for` loop + `if (i % 3 === 0)`

---

## 🔥 4 ta Qiyin Darajadagi Mashq

---

### 7. **Foydalanuvchidan parol so‘ralsin, to‘g‘ri parol (`"secret123"`) kiritilmaguncha doimiy so‘rala bersin**

```js
// prompt orqali: "Parolni kiriting"
// to‘g‘ri kiritilganda: alert("Parol to‘g‘ri!")
```

**Tushuntirish:**
`do...while` loop, `!==` taqqoslash

---

### 8. **Berilgan so‘zning teskari ko‘rinishini chiqaruvchi dastur yozing**

```js
let word = "salom"; // Output: "molas"
```

**Tushuntirish:**

* `for (let i = word.length - 1; i >= 0; i--)`
* `newWord += word.charAt(i)`

---

### 9. **1 dan 50 gacha sonlar ichidan faqat 3 ga bo‘linadigan va juft bo‘lgan sonlarni chiqarish**

```js
// Output: 6, 12, 18, ...
```

**Tushuntirish:**
`if (i % 3 === 0 && i % 2 === 0)`

---

### 10. **Foydalanuvchidan 5 ta ism so‘rab, har birining uzunligini chiqarish**

```js
// prompt orqali 5 ta ism kiritiladi
// Output: "Ali — 3 ta harf", "Zilola — 6 ta harf"
```

**Tushuntirish:**
`for` loop, `prompt()`, `.length`, `console.log()` yoki `alert()`

--- 


## 🔥 10 ta Realistik, Bir Qadam Murakkabroq JS Mashqlar

---

### ✅ 1. **Oddiy kirish formasi: foydalanuvchi ism va yosh kiritadi**

* Agar ism uzunligi < 2 bo‘lsa → `"Ism juda qisqa"`
* Agar yosh < 13 bo‘lsa → `"Bolalar sahifasiga yo‘naltirilasiz"`
* Aks holda → `"Xush kelibsiz, [ism]!"`

> Foydalaniladi: `prompt`, `.length`, `Number()`, `if/else`

---

### ✅ 2. **Foydalanuvchidan parol so‘rang, noto‘g‘ri kiritsa: qancha urindi?**

* To‘g‘ri parol: `"12345"`
* Har safar noto‘g‘ri kiritganda: `"Xato. Yana urinib ko‘ring"`
* To‘g‘ri kiritganda: `"Kirish muvaffaqiyatli. Urinishlar: 3"`
* `do...while` bilan yechiladi

---

### ✅ 3. **1 dan 100 gacha bo‘lgan sonlar ichidan faqat 7 ga bo‘linadigan va 5 ga bo‘linmaydiganlarini chiqarish**

```js
// Output: 7, 14, 21, 28, ... (lekin 35, 70 yo‘q)
```

> `for` loop, `if (i % 7 === 0 && i % 5 !== 0)`

---

### ✅ 4. **Narx va chegirma kiritilsin. Yangi narxni hisoblang**

* Foydalanuvchi 2 ta qiymat kiritadi: `narx`, `chegirma foizi`
* Hisob: `yakuniyNarx = narx - (narx * chegirma / 100)`
* Butun son ko‘rinishida chiqarilsin (`toFixed()` **yo‘q**)

---

### ✅ 5. **Foydalanuvchi parol kiritadi. 3 ta shart tekshiriladi:**

1. Uzunligi ≥ 6
2. Ichida `@` belgisi bor
3. Belgilar soni 20 dan oshmasligi kerak

Agar uchalasi bajarilsa → "Parol qabul qilindi", aks holda → "Xato!"

---

### ✅ 6. **Foydalanuvchidan 5 marta raqam so‘rab, faqat juftlarini chiqarish**

```js
// prompt orqali 5 ta raqam
// faqat juftlarini `console.log()` bilan chiqarish
```

> Foydalaniladi: `for`, `prompt`, `Number()`, `if (x % 2 === 0)`

---

### ✅ 7. **Haroratni kiritish va baholash (5 marta)**

* `while` loop ishlatiladi
* Harorat har gal kiritiladi va quyidagicha baholanadi:

  * < 0: `"Qor yog‘yapti"`
  * 0–20: `"Salqin"`
  * 21–35: `"Yaxshi ob-havo"`
  * > 35: `"Juda issiq"`

---

### ✅ 8. **Soatga qarab avtomatik salomlashuv**

* Foydalanuvchi soat kiritadi (0–23)
* Quyidagicha salomlashiladi:

  * 0–4: `"Tun yarmida uxlayotgan bo‘lish kerak"`
  * 5–11: `"Xayrli tong"`
  * 12–17: `"Xayrli kun"`
  * 18–21: `"Xayrli kech"`
  * 22–23: `"Tunda dam olish vaqti"`

---

### ✅ 9. **Foydalanuvchidan 10 ta raqam kiritib, faqat musbat sonlarni chiqaring**

* `for` sikl 10 marta ishlaydi
* Agar son > 0 bo‘lsa → `console.log()`
* Aks holda o‘tkazib yuboriladi

---

### ✅ 10. **Foydalanuvchi tug‘ilgan yili kiritadi va yoshi aniqlanadi**

* Tug‘ilgan yil noto‘g‘ri (hozirgi yildan katta yoki 1900 yildan kichik) bo‘lsa: `"Noto‘g‘ri yil"`
* Aks holda: `"Siz [yosh] yoshdasiz"`

> `new Date().getFullYear()` **yo‘q**, shunchaki `2025 - yil` kabi statik ishlatiladi.

---



</details>



<details>
   <summary>JavaScript Funksiyalari - To'liq Qo'llanma</summary>

# 🎯 JavaScript Funksiyalari - To'liq Qo'llanma

## 1. Funksiya nima?

Funksiya - bu qayta-qayta ishlatilishi mumkin bo'lgan kod bloki. Funksiyalar kodimizni qayta ishlatiladigan qilib, DRY (Don't Repeat Yourself) prinsipiga amal qilishimizga yordam beradi.

## 2. Funksiya Yaratish Usullari

### 2.1. Funksiya Deklaratsiyasi (Function Declaration)
```javascript
// Eng oddiy usul
function salomlash() {
    console.log("Salom!");
}

// Parametrli funksiya
function salomlashIsm(ism) {
    console.log(`Salom, ${ism}!`);
}

// Return qaytaruvchi funksiya
function yigindi(a, b) {
    return a + b;
}
```

### 2.2. Funksiya Ifodasi (Function Expression)
```javascript
// O'zgaruvchiga funksiya tayinlash
const salomlash = function() {
    console.log("Salom!");
};

// Parametrli funksiya ifodasi
const salomlashIsm = function(ism) {
    console.log(`Salom, ${ism}!`);
};
```

### 2.3. Arrow Funksiyalar (ES6+)
```javascript
// Oddiy arrow funksiya
const salomlash = () => {
    console.log("Salom!");
};

// Parametrli arrow funksiya
const salomlashIsm = (ism) => {
    console.log(`Salom, ${ism}!`);
};

// Qisqa sintaksis (bitta qator)
const yigindi = (a, b) => a + b;
```

## 3. Funksiya Parametrlari

### 3.1. Oddiy Parametrlar
```javascript
function toliqIsm(ism, familiya) {
    return `${ism} ${familiya}`;
}
```

### 3.2. Default Parametrlar
```javascript
function salomlash(ism = "Mehmon") {
    console.log(`Salom, ${ism}!`);
}
```

### 3.3. Rest Parametrlar
```javascript
function yigindi(...sonlar) {
    return sonlar.reduce((sum, son) => sum + son, 0);
}
```

### 3.4. Destructuring Parametrlar
```javascript
function userInfo({ ism, yosh, manzil }) {
    console.log(`${ism} ${yosh} yoshda, ${manzil}da yashaydi`);
}
```

## 4. Return Qaytarish

### 4.1. Oddiy Return
```javascript
function kvadrat(son) {
    return son * son;
}
```

### 4.2. Early Return
```javascript
function tekshirish(son) {
    if (son < 0) return "Manfiy son";
    if (son === 0) return "Nol";
    return "Musbat son";
}
```

## 5. Funksiya Scope va Closure

### 5.1. Scope
```javascript
let global = "Global";

function scopeMisol() {
    let local = "Local";
    console.log(global); // Global
    console.log(local);  // Local
}
```

### 5.2. Closure
```javascript
function tashqi() {
    let son = 0;
    
    return function() {
        return ++son;
    };
}

const counter = tashqi();
console.log(counter()); // 1
console.log(counter()); // 2
```

## 6. Callback Funksiyalar
```javascript
function bajarish(vazifa, callback) {
    console.log(`Vazifa bajarilmoqda: ${vazifa}`);
    callback();
}

bajarish("Kod yozish", function() {
    console.log("Vazifa yakunlandi!");
});
```

## 7. Funksiya Metodlari

### 7.1. call(), apply(), bind()
```javascript
const shaxs = {
    ism: "Ali",
    salomlash: function() {
        console.log(`Salom, men ${this.ism}man!`);
    }
};

const boshqaShaxs = {
    ism: "Vali"
};

// call() metodi
shaxs.salomlash.call(boshqaShaxs);

// apply() metodi
shaxs.salomlash.apply(boshqaShaxs);

// bind() metodi
const yangiSalomlash = shaxs.salomlash.bind(boshqaShaxs);
yangiSalomlash();
```

## 8. Amaliy Misollar

### 8.1. Kalkulyator
```javascript
const kalkulyator = {
    qoshish: (a, b) => a + b,
    ayirish: (a, b) => a - b,
    kopaytirish: (a, b) => a * b,
    bolish: (a, b) => b !== 0 ? a / b : "Nolga bo'lish mumkin emas"
};
```

### 8.2. Forma Validatsiyasi
```javascript
function formaTekshirish(form) {
    const xatolar = [];
    
    if (!form.ism) xatolar.push("Ism kiritilmagan");
    if (!form.email.includes('@')) xatolar.push("Noto'g'ri email");
    if (form.yosh < 18) xatolar.push("Yosh 18 dan katta bo'lishi kerak");
    
    return xatolar.length === 0 ? true : xatolar;
}
```

## 9. Funksiyalar bilan Ishlashda Muhim Maslahatlar

1. **Funksiya nomi** aniq va ma'noli bo'lishi kerak
2. **Bitta funksiya** bitta vazifani bajarishi kerak
3. **Parametrlar soni** 3 tadan oshmasligi tavsiya etiladi
4. **Arrow funksiyalar** oddiy funksiyalarga qaraganda qisqaroq
5. **Callback funksiyalar** asinxron operatsiyalar uchun juda muhim

## 10. Amaliy Mashg'ulot

Quyidagi vazifani bajarish orqali o'z bilimlaringizni sinab ko'ring:

```javascript
// Vazifa: User Management System yarating
// 1. User qo'shish
// 2. User o'chirish
// 3. User ma'lumotlarini yangilash
// 4. Userlarni ro'yxatdan olish
// 5. User qidirish

const userManagement = {
    users: [],
    
    addUser: function(user) {
        // Kod yozing
    },
    
    removeUser: function(id) {
        // Kod yozing
    },
    
    updateUser: function(id, newData) {
        // Kod yozing
    },
    
    getAllUsers: function() {
        // Kod yozing
    },
    
    findUser: function(id) {
        // Kod yozing
    }
};
```
</details>


<details>
   <summary>🎯 JavaScript Funksiyalari - To'liq Qo'llanma</summary>

## 1. Funksiya nima?

Funksiya - bu JavaScript dasturlash tilida muhim tushuncha bo'lib, u bir nechta vazifalarni bajaradi:
- **Kodni qayta ishlatish**: Bir marta yozilgan kodni ko'p marta ishlatish imkonini beradi
- **Kodni tashkil qilish**: Katta dasturni kichik, boshqariladigan qismlarga bo'lish
- **Abstraksiya**: Murakkab operatsiyalarni oddiy interfeys orqali bajarish

```javascript
// Funksiya yordamida kodni qayta ishlatish
function salomlash(ism) {
    console.log(`Salom, ${ism}!`);
}

// Funksiyani bir necha marta chaqirish
salomlash("Ali");    // "Salom, Ali!"
salomlash("Vali");   // "Salom, Vali!"
salomlash("Hasan");  // "Salom, Hasan!"
```

## 2. Funksiya Yaratish Usullari

### 2.1. Funksiya Deklaratsiyasi (Function Declaration)
Bu eng oddiy va an'anaviy usul. Funksiya deklaratsiyasi quyidagi xususiyatlarga ega:
- `function` kalit so'zi bilan boshlanadi
- Funksiya nomi majburiy
- Hoisting (ko'tarilish) xususiyatiga ega - ya'ni funksiyani chaqirish uni e'lon qilishdan oldin ham mumkin

```javascript
// Funksiya deklaratsiyasi
function kvadrat(son) {
    return son * son;
}

// Hoisting xususiyati
console.log(kvadrat(5));  // 25

function kvadrat(son) {
    return son * son;
}
```

### 2.2. Funksiya Ifodasi (Function Expression)
Bu usul funksiyani o'zgaruvchiga tayinlash orqali yaratish:
- Funksiya nomi ixtiyoriy (anonymous funksiya)
- Hoisting xususiyatiga ega emas
- O'zgaruvchi sifatida ishlatilishi mumkin

```javascript
// Funksiya ifodasi
const yigindi = function(a, b) {
    return a + b;
};

// Hoisting ishlamaydi
console.log(yigindi(2, 3));  // 5

const yigindi = function(a, b) {
    return a + b;
};
// ReferenceError: Cannot access 'yigindi' before initialization
```

### 2.3. Arrow Funksiyalar (ES6+)
ES6 bilan kiritilgan zamonaviy sintaksis:
- Qisqaroq yozish usuli
- `this` konteksti o'zgaruvchi emas, balki tashqi scope'dan meros oladi
- Bir qatorli funksiyalar uchun `return` va `{}` qavslarni tushirib yozish mumkin

```javascript
// Oddiy funksiya
function yigindi(a, b) {
    return a + b;
}

// Arrow funksiya
const yigindi = (a, b) => a + b;

// this konteksti farqi
const shaxs = {
    ism: "Ali",
    salomlash: function() {
        setTimeout(function() {
            console.log(this.ism);  // undefined
        }, 1000);
        
        setTimeout(() => {
            console.log(this.ism);  // "Ali"
        }, 1000);
    }
};
```

## 3. Funksiya Parametrlari

### 3.1. Oddiy Parametrlar
Funksiyaga ma'lumot uzatishning asosiy usuli:
- Parametrlar funksiya qavslari ichida e'lon qilinadi
- Parametrlar funksiya ichida o'zgaruvchilar sifatida ishlatiladi

```javascript
function toliqIsm(ism, familiya) {
    return `${ism} ${familiya}`;
}

console.log(toliqIsm("Ali", "Valiyev"));  // "Ali Valiyev"
```

### 3.2. Default Parametrlar
Parametrga qiymat berilmaganda ishlatiladigan standart qiymat:
- ES6 da kiritilgan
- Parametrga qiymat berilmaganda default qiymat ishlatiladi

```javascript
function salomlash(ism = "Mehmon", vaqt = "tong") {
    console.log(`${vaqt} yaxshi, ${ism}!`);
}

salomlash("Ali", "kechqurun");  // "kechqurun yaxshi, Ali!"
salomlash("Vali");              // "tong yaxshi, Vali!"
salomlash();                    // "tong yaxshi, Mehmon!"
```

### 3.3. Rest Parametrlar
Cheklanmagan sonli parametrlarni massiv sifatida qabul qilish:
- `...` operatori bilan belgilanadi
- Faqat oxirgi parametr bo'lishi kerak

```javascript
function yigindi(...sonlar) {
    return sonlar.reduce((sum, son) => sum + son, 0);
}

console.log(yigindi(1, 2, 3));        // 6
console.log(yigindi(1, 2, 3, 4, 5));  // 15
```

### 3.4. Destructuring Parametrlar
Obyekt yoki massiv parametrlarini ajratib olish:
- Obyekt yoki massiv strukturasini buzib, alohida o'zgaruvchilarga ajratish
- Default qiymatlar bilan ishlatish mumkin

```javascript
function userInfo({ ism, yosh, manzil = "Toshkent" }) {
    console.log(`${ism} ${yosh} yoshda, ${manzil}da yashaydi`);
}

userInfo({ ism: "Ali", yosh: 25 });  // "Ali 25 yoshda, Toshkentda yashaydi"
userInfo({ ism: "Vali", yosh: 30, manzil: "Samarqand" });  // "Vali 30 yoshda, Samarqandda yashaydi"
```

## 4. Return Qaytarish

Funksiyadan qiymat qaytarish:
- `return` operatori funksiyani to'xtatadi va qiymat qaytaradi
- Bir nechta `return` operatorlari bo'lishi mumkin
- `return` operatorsiz funksiya `undefined` qaytaradi

```javascript
function tekshirish(son) {
    if (son < 0) return "Manfiy son";
    if (son === 0) return "Nol";
    return "Musbat son";
}

console.log(tekshirish(-5));  // "Manfiy son"
console.log(tekshirish(0));   // "Nol"
console.log(tekshirish(5));   // "Musbat son"

// return operatorsiz funksiya
function salomlash() {
    console.log("Salom!");
}
console.log(salomlash());  // undefined
```

## 5. Funksiya Scope va Closure

### 5.1. Scope
Scope - o'zgaruvchilar ko'rinish doirasi:
- **Global Scope**: Butun dastur bo'ylab ko'rinadi
- **Function Scope**: Faqat funksiya ichida ko'rinadi
- **Block Scope**: `let` va `const` uchun blok ichida ko'rinadi

```javascript
let global = "Global";

function scopeMisol() {
    let local = "Local";
    console.log(global);  // "Global"
    console.log(local);   // "Local"
}

console.log(global);  // "Global"
console.log(local);   // ReferenceError: local is not defined
```

### 5.2. Closure
Closure - funksiya va uning tashqi muhiti o'rtasidagi bog'lanish:
- Funksiya o'z yaratilgan muhitdagi o'zgaruvchilarni eslab qoladi
- Tashqi funksiya yopilgandan keyin ham ichki funksiya tashqi o'zgaruvchilarga kirish huquqiga ega

```javascript
function tashqi() {
    let son = 0;
    
    return {
        increment: function() {
            return ++son;
        },
        decrement: function() {
            return --son;
        },
        getValue: function() {
            return son;
        }
    };
}

const counter = tashqi();
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.decrement());  // 1
console.log(counter.getValue());   // 1
```

## 6. Callback Funksiyalar
Callback - boshqa funksiyaga parametr sifatida uzatiladigan funksiya:
- Asinxron operatsiyalarni boshqarish uchun ishlatiladi
- Event handling da keng qo'llaniladi

```javascript
function bajarish(vazifa, callback) {
    console.log(`Vazifa bajarilmoqda: ${vazifa}`);
    setTimeout(() => {
        callback();
    }, 1000);
}

bajarish("Kod yozish", function() {
    console.log("Vazifa yakunlandi!");
});
// "Vazifa bajarilmoqda: Kod yozish"
// 1 sekunddan keyin: "Vazifa yakunlandi!"
```

## 7. Funksiya Metodlari

### 7.1. call(), apply(), bind()
Bu metodlar funksiyaning `this` kontekstini boshqarish uchun ishlatiladi:

```javascript
const shaxs = {
    ism: "Ali",
    salomlash: function() {
        console.log(`Salom, men ${this.ism}man!`);
    }
};

const boshqaShaxs = {
    ism: "Vali"
};

// call() metodi
shaxs.salomlash.call(boshqaShaxs);  // "Salom, men Valiman!"

// apply() metodi
shaxs.salomlash.apply(boshqaShaxs);  // "Salom, men Valiman!"

// bind() metodi
const yangiSalomlash = shaxs.salomlash.bind(boshqaShaxs);
yangiSalomlash();  // "Salom, men Valiman!"
```

# 🎯 JavaScript Funksiyalar - 10 ta Realistik Vazifa

## Boshlang'ich Daraja (1-3)

1. **Kalkulyator Funksiyasi**
   - Ikkita son va operatsiya (qo'shish, ayirish, ko'paytirish, bo'lish) qabul qiluvchi funksiya yarating
   - Funksiya kiritilgan operatsiyani bajarib, natijani qaytarsin
   - Masalan: `kalkulyator(5, 3, '+')` → `8`

2. **Tekshiruvchi Funksiya**
   - Son qabul qiluvchi funksiya yarating
   - Son musbat, manfiy yoki nol ekanligini tekshirib, tegishli xabarni qaytarsin
   - Masalan: `tekshirish(-5)` → `"Manfiy son"`

3. **Massiv Yig'indisi**
   - Massiv qabul qiluvchi funksiya yarating
   - Massivdagi barcha sonlar yig'indisini hisoblab qaytarsin
   - Masalan: `yigindi([1, 2, 3, 4])` → `10`

## O'rta Daraja (4-7)

4. **Vaqtni Formatlash**
   - Sekundlar sonini qabul qiluvchi funksiya yarating
   - Uni soat:dakika:sekund formatiga o'tkazib qaytarsin
   - Masalan: `vaqtFormatlash(3661)` → `"1:1:1"`

5. **Parol Tekshiruvchi**
   - Parol qabul qiluvchi funksiya yarating
   - Parol quyidagi talablarni qondirishi kerak:
     - Kamida 8 ta belgi
     - Kamida 1 ta katta harf
     - Kamida 1 ta son
   - Parol to'g'ri yoki noto'g'ri ekanligini qaytarsin

6. **Telefon Raqam Formatlash**
   - Raqamlar qatorini qabul qiluvchi funksiya yarating
   - Uni telefon raqam formatiga o'tkazib qaytarsin
   - Masalan: `"998901234567"` → `"+998 90 123 45 67"`

7. **So'zlar Soni**
   - Matn qabul qiluvchi funksiya yarating
   - Matndagi so'zlar sonini, harflar sonini va jumlalar sonini hisoblab qaytarsin
   - Masalan: `"Salom! Men Ali."` → `{sozlar: 3, harflar: 10, jumlalar: 2}`

## Yuqori Daraja (8-10)

8. **Valyuta Konvertori**
   - Miqdor, manba valyuta va maqsad valyutani qabul qiluvchi funksiya yarating
   - Valyuta kurslarini API dan olish
   - Konvertatsiya qilib, natijani qaytarsin
   - Masalan: `konvertor(100, "USD", "UZS")`

9. **Vazifalar Boshqaruvchi**
   - Vazifalarni saqlash, qo'shish, o'chirish va bajarilganini belgilash imkoniyatini beruvchi funksiya yarating
   - Vazifalar localStorage da saqlansin
   - Vazifalar orasida qidirish imkoniyati bo'lsin
   - Vazifalarni bajarilish vaqtiga qarab saralash imkoniyati bo'lsin

10. **Forma Validatsiyasi**
    - Forma ma'lumotlarini tekshiruvchi funksiya yarating
    - Quyidagi maydonlarni tekshirsin:
      - Email (to'g'ri formatda)
      - Telefon raqam (to'g'ri formatda)
      - Parol (kuchli parol talablari)
      - Tug'ilgan sana (18 yoshdan katta)
    - Xatoliklarni aniq ko'rsatib bering
    - Barcha maydonlar to'g'ri to'ldirilgandan keyin formani yuborishga ruxsat bering

Har bir vazifani bajarishda:
- Funksiyani to'g'ri nomlang
- Parametrlarni aniq belgilang
- Xatoliklarni ushlang
- Kodni tushunarli yozing
- Natijani sinab ko'ring


</details>


<details>
   <summary>JavaScript: Functions (Funksiya asoslari)</summary>
---

# 🟦 JavaScript: Functions (Funksiya asoslari)

---

## 🔹 Nima uchun function kerak?

Funksiyalar — bu **ma’lum bir vazifani bajaradigan kod bloklari**. Ular:

* Kodni takror yozishdan saqlaydi
* Tuzilishi bo‘yicha modulli (bo‘linadigan)
* Harakatni nom bilan chaqirish imkonini beradi

---

## 🔸 1. Function deklaratsiyasi (function declaration)

### Sintaksis:

```js
function salomBer() {
  console.log("Salom, dunyo!");
}
```

**Funksiyani chaqirish:**

```js
salomBer(); // Natija: Salom, dunyo!
```

> Funksiya chaqirilmaguncha ishlamaydi.

---

## 🔸 2. Parametr va argumentlar

Funksiya parametr orqali **ma’lumot qabul qiladi**.

```js
function salomBer(ism) {
  console.log("Salom, " + ism + "!");
}

salomBer("Ali"); // Salom, Ali!
salomBer("Zarina"); // Salom, Zarina!
```

> `ism` — parametr
> `"Ali"` — argument

---

### Bir nechta parametr:

```js
function yoshiniHisobla(ism, yil) {
  let yosh = 2025 - yil;
  console.log(`${ism} ${yosh} yoshda`);
}

yoshiniHisobla("Diyor", 2000); // Diyor 25 yoshda
```

---

## 🔸 3. return operatori

Funksiya `return` bilan **qiymat qaytaradi**, shunchaki konsolga chiqarib yubormaydi.

```js
function kvadrat(x) {
  return x * x;
}

let natija = kvadrat(5);
console.log(natija); // 25
```

> `return`dan keyin hech narsa yozilmasligi kerak (funksiya to‘xtaydi)

---

## 🔸 4. Expression Function (Funksiyani o‘zgaruvchiga saqlash)

```js
const salom = function () {
  console.log("Assalomu alaykum");
};

salom(); // Assalomu alaykum
```

---

## 🔸 5. Arrow function (zamonaviy sintaksis)

```js
const kvadrat = (son) => {
  return son * son;
};

console.log(kvadrat(6)); // 36
```

Yoki qisqacha:

```js
const kvadrat = son => son * son;
```

> Faqat 1 ta parametr va bitta amal bo‘lsa, `{}` va `return` kerak emas

---

## 🔸 6. Real hayotiy misollar

---

### 🧪 Misol 1: Haroratni baholovchi funksiya

```js
function haroratBahosi(temp) {
  if (temp < 0) return "Qor yog‘moqda";
  else if (temp < 20) return "Salqin";
  else return "Issiq";
}

console.log(haroratBahosi(5)); // Salqin
```

---

### 🧪 Misol 2: Parol kuchini tekshiruvchi funksiya

```js
function kuchliParol(parol) {
  if (parol.length >= 8 && parol.includes("@")) {
    return true;
  } else {
    return false;
  }
}
```

---

### 🧪 Misol 3: Tug‘ilgan yil asosida yosh qaytarish

```js
function hisoblaYosh(yil) {
  return 2025 - yil;
}

let ism = prompt("Ismingiz?");
let yil = Number(prompt("Tug‘ilgan yilingiz?"));
let yosh = hisoblaYosh(yil);

alert(`${ism}, siz ${yosh} yoshdasiz.`);
```

---

## 🔹 Yaxshi amaliyotlar

* Funksiya **faqat bitta vazifani** bajarsin
* Nomi **aniq nima qilayotganini ifodalasın** (`hisoblaYosh`, `baholaImtihon`, `salomBer`)
* `return` ishlatib **qiymatni qaytaring**, faqat `console.log()` emas

---

## 💡 Qanday farqlari bor?

| Turi           | Chaqarishdan oldin mavjudmi? | Sintaksis qisqa | Modern JS |
| -------------- | ---------------------------- | --------------- | --------- |
| Declaration    | ✅ Ha                         | ❌ Yo‘q          | ✅         |
| Expression     | ❌ Yo‘q                       | ❌ Yo‘q          | ✅         |
| Arrow Function | ❌ Yo‘q                       | ✅ Ha            | ✅ ✅       |

---

</details>


<details>
   <summary>JavaScript Scope, Hoisting va Temporal Dead Zone</summary>

---

# 🧠 **JavaScript Scope, Hoisting va Temporal Dead Zone**

Bu darsda siz JavaScript’da o‘zgaruvchilar **qayerda va qanday ishlashini**, qanday qilib **oldin e’lon qilinmagan o‘zgaruvchi bilan muammo yuzaga kelishini**, va **`var`, `let`, `const`** o‘rtasidagi farqni chuqur tushunasiz.

---

## 🔹 1. Scope (Ko‘lam) nima?

**Scope** — bu o‘zgaruvchining **qayerda mavjud** va **qayerdan unga murojaat qilsa bo‘lishini** belgilovchi qism.

### Scope turlari:

1. **Global Scope** – kod faylida tashqarida e’lon qilingan o‘zgaruvchilar
2. **Function Scope** – funksiyaning ichida yaratilgan o‘zgaruvchilar
3. **Block Scope** – `{}` ichida (if, for, while) `let`/`const` bilan yaratilgan o‘zgaruvchilar

---

### ✅ Misol: Global vs Function scope

```js
let ism = "Ali"; // global

function salom() {
  let xabar = "Salom"; // function scope
  console.log(xabar + " " + ism); // Salom Ali
}

salom();
// console.log(xabar); ❌ xato – function ichida e’lon qilingan
```

---

### ✅ Misol: Block scope

```js
if (true) {
  let yosh = 25;
  console.log(yosh); // 25
}

// console.log(yosh); ❌ Error – yosh block scope’da mavjud
```

> `var` bilan e’lon qilingan o‘zgaruvchilar block scope’ga ega emas!

---

## 🔹 2. var, let, const: qanday farq bor?

| Tavsif     | `var`    | `let`     | `const`   |
| ---------- | -------- | --------- | --------- |
| Scope      | Function | Block     | Block     |
| Re-declare | ✅ Ha     | ❌ Yo‘q    | ❌ Yo‘q    |
| Re-assign  | ✅ Ha     | ✅ Ha      | ❌ Yo‘q    |
| Default    | eski JS  | zamonaviy | zamonaviy |

---

### ✅ Misol:

```js
function test() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }

  console.log(a); // ✅ 10
  // console.log(b); ❌ Error
  // console.log(c); ❌ Error
}
```

---

## 🔹 3. Hoisting nima?

JavaScriptda funksiyalar va `var` o‘zgaruvchilar **avvaldan "ko‘tariladi"** — ya’ni kod ishlashidan oldin deklaratsiya yuqoriga "ko‘tarilganday" bo‘ladi.

---

### ✅ Misol: Hoisting bilan `var`

```js
console.log(a); // undefined
var a = 5;
```

> JavaScript bunga shunday qaraydi:

```js
var a;        // hoisting
console.log(a); // undefined
a = 5;
```

---

### ❌ let / const hoisting qilinadi, ammo...

Ular **Temporal Dead Zone (TDZ)** ichida bo‘ladi va **hoisting** bo‘lsa ham **ishlatib bo‘lmaydi**.

```js
console.log(x); // ❌ ReferenceError
let x = 10;
```

> `x` o‘zgaruvchisi TDZ hududida — hozircha "tutib turiladi", ammo qiymatga ega emas.

---

## 🔹 4. Temporal Dead Zone (TDZ)

`let` va `const` bilan yaratilgan o‘zgaruvchilar `hoisting` qilingan bo‘lsa ham, **ularni e’lon qilinmaguncha ishlatish mumkin emas**.

```js
{
  // TDZ boshlanishi
  // console.log(ism); ❌ ReferenceError
  let ism = "Javohir";
  // TDZ tugaydi
}
```

---

## 🧪 Amaliy misol (Scope + Hoisting):

```js
function test() {
  console.log(x); // ❌ ReferenceError
  let x = 5;
}
```

Ammo:

```js
function test() {
  console.log(y); // undefined
  var y = 10;
}
```

---

## 💡 Xulosa:

| Holat                                 | `var`            | `let` / `const` |
| ------------------------------------- | ---------------- | --------------- |
| Hoisting                              | ✅ Ha             | ✅ Ha            |
| Qo‘llashdan oldin ishlatish mumkinmi? | ✅ Ha (undefined) | ❌ Error (TDZ)   |
| Scope                                 | Function         | Block           |
| Re-declare                            | ✅                | ❌               |

---

</details>



<details>
   <summary>🧩 JavaScript Arrays va Asosiy Metodlar — To‘liq Darslik</summary>
---

# 🧩 JavaScript Arrays va Asosiy Metodlar — To‘liq Darslik

---

## 🔹 1. Array nima?

**Array** — bir nechta qiymatlarni tartibli holda saqlovchi konteyner. Undagi har bir elementning **o‘z tartib raqami (index)** bo‘ladi, va **0-dan** boshlanadi.

```js
let mevalar = ["olma", "banan", "anor"];
```

---

## 🔹 2. Array yaratish

```js
let sonlar = [1, 2, 3];
let ismlar = ["Ali", "Zebo", "Karim"];
let turli = ["text", 123, true];
```

---

## 🔹 3. Oddiy metodlar bilan ishlash

### `push()` – oxiriga element qo‘shish

```js
let ismlar = ["Ali", "Zebo"];
ismlar.push("Lola");
// ["Ali", "Zebo", "Lola"]
```

---

### `pop()` – oxirgi elementni olib tashlash

```js
ismlar.pop();
// ["Ali", "Zebo"]
```

---

### `unshift()` – boshiga element qo‘shish

```js
ismlar.unshift("Botir");
// ["Botir", "Ali", "Zebo"]
```

---

### `shift()` – boshidagi elementni olib tashlash

```js
ismlar.shift();
// ["Ali", "Zebo"]
```

---

### `slice(start, end)` – arraydan nusxa olish

```js
let raqamlar = [10, 20, 30, 40, 50];
let kesma = raqamlar.slice(1, 4);
// [20, 30, 40]
```

---

### `splice(start, deleteCount, newItem1, newItem2, ...)` – o‘chirish yoki qo‘shish

```js
let sonlar = [1, 2, 3, 4];
sonlar.splice(2, 1); // 2-indexdagi 1 elementni olib tashlaydi
// [1, 2, 4]

sonlar.splice(1, 0, 99); // 1-indexga 99 qo‘shiladi
// [1, 99, 2, 4]
```

---

## 🔹 4. Array bo‘yicha aylanish (for, forEach)

### `for` orqali

```js
let ismlar = ["Ali", "Lola", "Karim"];

for (let i = 0; i < ismlar.length; i++) {
  console.log(ismlar[i]);
}
```

---

### `forEach()` – har bir element uchun funksiya bajaradi

```js
ismlar.forEach(function(ism) {
  console.log("Salom, " + ism);
});
```

> `forEach` faqat `console.log()` yoki `harakat qilish` uchun, **return qilmaydi**

---

## 🔹 5. `map()` – yangi array qaytaradi

Har bir elementga amal bajaradi va **yangi array yaratadi**.

```js
let sonlar = [1, 2, 3];
let kvadratlar = sonlar.map(function(son) {
  return son * son;
});
console.log(kvadratlar); // [1, 4, 9]
```

> `map()` — yangi massiv hosil qiladi

---

## 🔹 6. `filter()` – shart asosida saralab beradi

```js
let yoshlar = [12, 18, 22, 15];

let kattalar = yoshlar.filter(function(yosh) {
  return yosh >= 18;
});
console.log(kattalar); // [18, 22]
```

---

## 🔹 7. `reduce()` – bitta qiymatga keltiradi (jamlash, ko‘paytirish, ...)

```js
let raqamlar = [1, 2, 3, 4];

let yigindi = raqamlar.reduce(function(yig‘indi, qiymat) {
  return yig‘indi + qiymat;
}, 0);

console.log(yigindi); // 10
```

> `reduce(callback, boshlang‘ichQiymat)`

---

## 🔹 8. Arrow function bilan qisqaroq yozish

```js
let kvadratlar = sonlar.map(son => son * son);

let yigindi = sonlar.reduce((sum, val) => sum + val, 0);
```

---

## 🔹 9. Real Hayotiy Misollar

---

### 🎯 Mahsulot narxlarini solishtirish

```js
let narxlar = [12000, 8000, 15000];

let arzonNarxlar = narxlar.filter(n => n < 10000);
// [8000]
```

---

### 🎯 Har bir narxga 15% soliq qo‘shish

```js
let yangiNarxlar = narxlar.map(n => n * 1.15);
```

---

### 🎯 Umumiy narxni hisoblash

```js
let umumiy = narxlar.reduce((sum, n) => sum + n, 0);
```

---

## ✅ Xulosa

| Metod     | Qanday ishlaydi                    | Natijasi              |
| --------- | ---------------------------------- | --------------------- |
| `push`    | Oxiriga element qo‘shadi           | Array o‘zgaradi       |
| `pop`     | Oxirgi elementni olib tashlaydi    | Array o‘zgaradi       |
| `slice`   | Kesib nusxa oladi                  | Yangi array           |
| `splice`  | O‘chiradi yoki qo‘shadi            | Array o‘zgaradi       |
| `forEach` | Har bir elementga amal bajaradi    | Return yo‘q           |
| `map`     | Har bir elementni o‘zgartiradi     | Yangi array qaytaradi |
| `filter`  | Shartga mos elementlarni tanlaydi  | Yangi array           |
| `reduce`  | Hammasini bir qiymatga olib keladi | Number yoki boshqasi  |

---


</details>



<details>
   <summary>📦 JavaScript’da Objectlar (Obyektlar) va Ularning Metodlari</summary>

---

# 📦 JavaScript’da Objectlar (Obyektlar) va Ularning Metodlari

---

## 🎯 1. Obyekt nima?

JavaScript’da **obyekt (object)** — bu **ko‘p xususiyat (property)** yoki **ma’lumotni** bitta joyda saqlash uchun ishlatiladigan tuzilma. Har bir property `kalit: qiymat` juftligi ko‘rinishida yoziladi.

---

### ✅ Misol:

```js
let inson = {
  ism: "Ali",
  yosh: 25,
  shahar: "Toshkent"
};
```

**Bu yerda:**

* `"ism"` — property nomi (kalit)
* `"Ali"` — uning qiymati
* `"yosh"` — 25 ga teng
* `"shahar"` — "Toshkent"

O‘quvchilar buni oddiy jadval deb tushunishlari mumkin:

| Kalit  | Qiymat     |
| ------ | ---------- |
| ism    | "Ali"      |
| yosh   | 25         |
| shahar | "Toshkent" |

---

## 🧭 2. Qiymatni olish (dot va bracket notation)

### 💡 2 ta usul mavjud:

#### ▶️ Dot notation:

```js
console.log(inson.ism); // Ali
```

#### ▶️ Bracket notation:

```js
console.log(inson["shahar"]); // Toshkent
```

> Agar kalit nomi o‘zgaruvchi orqali bo‘lsa, bracket kerak bo‘ladi.

```js
let xususiyat = "yosh";
console.log(inson[xususiyat]); // 25
```

---

## ✏️ 3. Obyektga yangi property qo‘shish

```js
inson.kasb = "Dasturchi";
inson["hobby"] = "Kitob o‘qish";
```

---

## ✏️ 4. Qiymatni o‘zgartirish

```js
inson.yosh = 26;
inson["shahar"] = "Samarqand";
```

---

## ❌ 5. Propertyni o‘chirish

```js
delete inson.kasb;
```

> `kasb` endi mavjud bo‘lmaydi

---

## 🔄 6. Obyekt ichida funksiya yozish — method

Agar obyekt ichida funksiyaga ega bo‘lsak, bu **method** deb ataladi.

```js
let foydalanuvchi = {
  ism: "Zebo",
  salomBer: function () {
    console.log("Salom, " + this.ism);
  }
};

foydalanuvchi.salomBer(); // Salom, Zebo
```

**Tushuntirish:**

* `this.ism` — bu obyekt ichidagi `ism`ga murojaat qiladi
* `this` — **shu obyektning o‘zi**

---

## 📚 7. Ichma-ich obyektlar (nested object)

```js
let talaba = {
  ism: "Lola",
  manzil: {
    shahar: "Buxoro",
    kocha: "G‘alaba 12"
  }
};

console.log(talaba.manzil.shahar); // Buxoro
```

---

## 🔁 8. Obyektdagi ma’lumotlar ustida aylanish

### `for...in` — barcha kalitlar bo‘yicha yuradi:

```js
let mashina = {
  rusum: "Nexia",
  rang: "qora",
  yil: 2020
};

for (let kalit in mashina) {
  console.log(kalit + ": " + mashina[kalit]);
}
```

---

## 🛠 9. Object Methods: keys, values, entries

### ▶️ `Object.keys(obj)` – kalitlar ro‘yxati (massiv)

```js
let student = { ism: "Jamshid", kurs: 3 };
console.log(Object.keys(student)); // ["ism", "kurs"]
```

---

### ▶️ `Object.values(obj)` – qiymatlar ro‘yxati (massiv)

```js
console.log(Object.values(student)); // ["Jamshid", 3]
```

---

### ▶️ `Object.entries(obj)` – `[[kalit, qiymat], ...]`

```js
console.log(Object.entries(student));
// [["ism", "Jamshid"], ["kurs", 3]]
```

---

## 📦 10. Real hayotiy misol

### Mahsulot haqida ma’lumot

```js
let buyurtma = {
  id: 1001,
  mahsulot: "Monitor",
  narx: 1200000,
  tolangan: false
};

if (buyurtma.tolangan) {
  console.log("Buyurtma tasdiqlandi");
} else {
  console.log("To‘lov kutilmoqda...");
}
```

---

## ✅ Yakuniy xulosa

| Qanday qilish?      | Sintaksis                       |
| ------------------- | ------------------------------- |
| Qiymat olish        | `obj.kalit` yoki `obj["kalit"]` |
| Qo‘shish            | `obj.kalit = qiymat`            |
| O‘zgartirish        | `obj.kalit = yangiQiymat`       |
| O‘chirish           | `delete obj.kalit`              |
| Kalitlarda aylanish | `for...in`                      |
| Kalitlar olish      | `Object.keys(obj)`              |
| Qiymatlar olish     | `Object.values(obj)`            |

---

</details>


<details>
   <summary>🧱 JavaScript DOM Asoslari – **1-qism**</summary>

---

# 🧱 JavaScript DOM Asoslari – **1-qism**

---

## 🎯 Darsda o‘rganamiz:

1. DOM nima?
2. Elementlarni tanlash:

   * `getElementById`
   * `querySelector`
3. `textContent`, `innerText`, `innerHTML` farqlari
4. `classList` bilan ishlash (add, remove, toggle)
5. `style` orqali CSS o‘zgartirish

---

## 1. ❓ DOM nima?

DOM — bu **Document Object Model** degani. HTML faylingiz **brauzer tomonidan tuzilma daraxti ko‘rinishiga keltiriladi**, va JavaScript orqali bu daraxtdagi har bir tugun (element) bilan ishlashingiz mumkin bo‘ladi.

**Oddiy tushuncha:** DOM — bu JavaScript orqali HTML ni o‘zgartirish imkoniyatini beradigan obyektlar to‘plami.

```html
<body>
  <h1>Salom</h1>
</body>
```

JavaScript buni shunday ko‘radi:

```js
document.body → <body>...</body>
document.body.children[0] → <h1>Salom</h1>
```

---

## 2. 🔍 HTML elementlarini tanlash

JavaScript orqali istalgan HTML elementni “topib olish” mumkin. Buni quyidagi usullar orqali amalga oshiramiz:

---

### ✅ 2.1 `getElementById`

Bu metod HTML elementni `id` orqali tanlaydi.

```html
<h1 id="sarlavha">Dasturlash darsi</h1>
```

```js
let h1 = document.getElementById("sarlavha");
console.log(h1); // <h1 id="sarlavha">Dasturlash darsi</h1>
```

---

### ✅ 2.2 `querySelector`

`querySelector()` — **CSS selektorlaridan foydalanib** istalgan elementni tanlaydi.

```html
<p class="matn">Bu oddiy matn</p>
```

```js
let paragraf = document.querySelector(".matn");
console.log(paragraf); // <p class="matn">Bu oddiy matn</p>
```

> U `id`, `class`, `element`, yoki hatto `div > span` kabi **har qanday CSS selektor** bilan ishlaydi.

---

## 3. ✍️ Matnni o‘zgartirish

Tanlangan elementning ichidagi matnni o‘zgartirish uchun 3 usul mavjud:

### 🅰 `textContent` – faqat matnni o‘zgartiradi:

```js
h1.textContent = "Yangi sarlavha!";
```

---

### 🅱 `innerText` – foydalanuvchi ko‘rgan matnni o‘zgartiradi:

```js
paragraf.innerText = "Bu ko‘rinadigan matn";
```

> `innerText` ko‘rinmaydigan qismlarni hisobga olmaydi (CSS `display: none` bo‘lsa).

---

### 🅲 `innerHTML` – ichki HTML-ni to‘liq o‘zgartiradi:

```js
paragraf.innerHTML = "<strong>Qalin matn</strong>";
```

> Bu bilan siz matn emas, **ichki HTML tuzilmasi**ni almashtirasiz.

---

## 4. 🎨 Elementlarga class qo‘shish / olib tashlash (`classList`)

Har bir HTML elementning `classList` degan xossasi mavjud. U orqali CSS class-larni boshqarish mumkin.

```html
<div id="quti">Quti</div>
```

```js
let quti = document.getElementById("quti");

// class qo‘shish
quti.classList.add("faol");

// class olib tashlash
quti.classList.remove("faol");

// class mavjud bo‘lsa – olib tashlaydi, yo‘q bo‘lsa – qo‘shadi
quti.classList.toggle("faol");
```

> `classList` foydalanuvchi bilan ishlovchi interfeyslar yaratishda juda muhim!

---

## 5. 🎨 CSS uslublarini JavaScript orqali o‘zgartirish

Siz JavaScript orqali har bir HTML elementga **to‘g‘ridan-to‘g‘ri style** yozishingiz mumkin:

```js
quti.style.backgroundColor = "lightblue";
quti.style.padding = "20px";
quti.style.borderRadius = "10px";
```

> Har doim CSS xossasining nomini camelCase ko‘rinishda yozing:
> `background-color` → `backgroundColor`

---

## 🧪 Amaliy misol: Tugma bosilsa rang o‘zgarsin

```html
<button id="tugma">Rangni o‘zgartir</button>
<div id="quti">Rangli quti</div>
```

```js
let tugma = document.getElementById("tugma");
let quti = document.getElementById("quti");

tugma.addEventListener("click", function () {
  quti.classList.toggle("yashil");
});
```

```css
.yashil {
  background-color: green;
  color: white;
}
```

---

## 🔚 Xulosa

Bu darsda siz o‘rgandingiz:

✅ DOM nima
✅ HTML elementlarini tanlash: `getElementById`, `querySelector`
✅ Matnni o‘zgartirish: `textContent`, `innerText`, `innerHTML`
✅ Class bilan ishlash: `classList.add/remove/toggle`
✅ CSS style berish: `element.style` orqali

---
</details>


<details>
   <summary>🧱 JavaScript DOM Asoslari – **2-qism**</summary>
---

# 🧱 JavaScript DOM Asoslari – **2-qism**

---

## 🎯 Darsda o‘rganamiz:

1. `addEventListener()` bilan hodisalar
2. `createElement`, `appendChild`, `remove()` — dinamik elementlar
3. `setAttribute()` va `getAttribute()`
4. Real misollar bilan tugmalar, forma va elementlarni boshqarish

---

## 1. 🧲 Hodisalarni tutish: `addEventListener()`

Bu usul yordamida biz foydalanuvchi qandaydir harakat qilganda (bosish, yozish, kursor harakati) JS bilan javob bera olamiz.

```html
<button id="salomBtn">Meni bos</button>
```

```js
let btn = document.getElementById("salomBtn");

btn.addEventListener("click", function () {
  alert("Salom, foydalanuvchi!");
});
```

> `"click"` — bu hodisa turi. Bundan tashqari: `mouseover`, `mouseout`, `keydown`, `submit`, `change` kabi hodisalar mavjud.

---

## 2. 🧱 Dinamik elementlar yaratish: `createElement`

Siz JavaScript yordamida **yangi HTML element** yaratib, sahifaga qo‘shishingiz mumkin.

```js
let yangiP = document.createElement("p");
yangiP.textContent = "Men yangi yaratilgan paragrafman!";
document.body.appendChild(yangiP);
```

---

## ✅ Real misol: ro‘yxatga yangi element qo‘shish

```html
<ul id="mevalar">
  <li>Olma</li>
</ul>
<button id="qoshishBtn">Yangi meva qo‘shish</button>
```

```js
let tugma = document.getElementById("qoshishBtn");
let ro‘yxat = document.getElementById("mevalar");

tugma.addEventListener("click", function () {
  let yangiMeva = document.createElement("li");
  yangiMeva.textContent = "Banan";
  ro‘yxat.appendChild(yangiMeva);
});
```

---

## 3. ❌ Elementni o‘chirish: `remove()`

Agar kerakli elementni o‘chirishingiz kerak bo‘lsa:

```html
<p id="yoqiladiganMatn">Bu matn o‘chadi</p>
<button id="ochirBtn">O‘chir</button>
```

```js
let matn = document.getElementById("yoqiladiganMatn");
let tugma = document.getElementById("ochirBtn");

tugma.addEventListener("click", function () {
  matn.remove();
});
```

---

## 4. ⚙️ Atributlar bilan ishlash

### ✅ `getAttribute()` — atribut qiymatini olish

```html
<a id="havola" href="https://google.com">Google</a>
```

```js
let link = document.getElementById("havola");
console.log(link.getAttribute("href")); // https://google.com
```

---

### ✅ `setAttribute()` — yangi qiymat berish

```js
link.setAttribute("href", "https://openai.com");
```

> Bu bilan `href`, `src`, `id`, `class`, `placeholder`, `type`, va boshqa HTML atributlarni o‘zgartirish mumkin.

---

## 💡 Qo‘shimcha misol: inputdan qiymat olib, sahifaga chiqarish

```html
<input type="text" id="ism" placeholder="Ismingizni kiriting">
<button id="korsatBtn">Chiqarish</button>
<p id="natija"></p>
```

```js
let input = document.getElementById("ism");
let tugma = document.getElementById("korsatBtn");
let p = document.getElementById("natija");

tugma.addEventListener("click", function () {
  let qiymat = input.value;
  p.textContent = "Sizning ismingiz: " + qiymat;
});
```

---

## ✅ DOM 2-qismda o‘rgandik:

| Harakat                 | Metod                           |
| ----------------------- | ------------------------------- |
| Tugmaga hodisa qo‘shish | `addEventListener("click", fn)` |
| Yangi element yaratish  | `createElement("tag")`          |
| Elementni qo‘shish      | `appendChild(element)`          |
| Elementni o‘chirish     | `element.remove()`              |
| Atributni o‘zgartirish  | `setAttribute("name", "value")` |
| Input qiymatini olish   | `input.value`                   |

---

## ✅ DOM Asoslari yakuni

Endi siz:

* Har qanday HTML elementni tanlashingiz
* Matnini va style’ni o‘zgartirishingiz
* Foydalanuvchi bilan interaktivlik yaratishingiz
* Yangi elementlar qo‘shishingiz va o‘chirishingiz mumkin

---
</details>