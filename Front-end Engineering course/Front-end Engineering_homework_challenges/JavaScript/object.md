<details>
<summary>🧠 10 ta Realistik Object Mashqlari</summary>

---

## 🧠 10 ta Realistik Object Mashqlari

---

### ✅ 1. Foydalanuvchi Profilini Yaratish (Easy)

`foydalanuvchi` nomli obyekt yarating va quyidagi ma’lumotlarni joylashtiring:

* ism
* yoshi
* manzil

So‘ng, `console.log()` orqali uning ismini va manzilini chiqarib bering.

---

### ✅ 2. Foydalanuvchining Hobby qo‘shish (Easy)

1-mashqdagi `foydalanuvchi` obyektiga yangi property — `hobby` qo‘shing.
Qiymat sifatida o‘zingiz yoqtirgan mashg‘ulotni yozing.

---

### ✅ 3. Mahsulot haqida axborot chiqaruvchi method yozing (Medium)

Quyidagi `mahsulot` obyektini yarating:

```js
let mahsulot = {
  nomi: "Telefon",
  narx: 2500000,
  valyuta: "so‘m",
  info: function () {
    // bu yerda "Telefon narxi: 2500000 so‘m" deb chiqarsin
  }
};
```

`info` method orqali ekranga mahsulot narxini ko‘rsating.

---

### ✅ 4. Obyektdan qiymatni o‘chiring (Easy)

Yuqoridagi `mahsulot` obyektidan `valyuta` property’sini o‘chiring.
`console.log()` bilan tekshiring.

---

### ✅ 5. `for...in` bilan obyektni aylanish (Medium)

Quyidagi obyekt:

```js
let mashina = {
  rusum: "Malibu",
  rang: "oq",
  yil: 2021
};
```

`for...in` orqali har bir kalit va qiymatini quyidagicha chiqarib bering:
👉 `rusum: Malibu`, `rang: oq`, ...

---

### ✅ 6. Obyekt ichida obyekt (Hard)

Quyidagi `kitob` obyektini yarating:

```js
let kitob = {
  nomi: "JavaScript Asoslari",
  muallif: {
    ism: "Sardor",
    yosh: 30
  }
};
```

`kitob.muallif.ism` orqali muallifning ismini ekranga chiqaring.

---

### ✅ 7. `Object.keys()` bilan kalitlarni sanash (Medium)

Yuqoridagi `kitob` obyektida nechta property borligini hisoblang
(`Object.keys()` dan foydalaning)

---

### ✅ 8. Parol tekshiruvchi tizim (Medium-Hard)

Quyidagi obyekt mavjud:

```js
let admin = {
  login: "admin",
  parol: "1234"
};
```

`prompt()` orqali foydalanuvchidan login va parol so‘rang.
Agar ikkalasi to‘g‘ri bo‘lsa `"Xush kelibsiz!"`, aks holda `"Noto‘g‘ri ma’lumot"` chiqsin.

---

### ✅ 9. Object.values bilan qiymatlarni yig‘ish (Hard)

Quyidagi obyektdagi narxlarni qo‘shing:

```js
let savat = {
  non: 3000,
  sut: 6000,
  choy: 12000
};
```

`Object.values(savat)` orqali qiymatlarni olib, **jami narx**ni hisoblang.

---

### ✅ 10. `Object.entries()` bilan HTML ko‘rinish yaratish (Hard)

Quyidagi obyektni:

```js
let foydalanuvchi = {
  ism: "Dilshod",
  yosh: 28,
  kasb: "Frontend developer"
};
```

`Object.entries()` orqali **har bir kalit-va-qiymatni** quyidagi ko‘rinishda `console.log()` qil:

```
ism — Dilshod
yosh — 28
kasb — Frontend developer
```

---
</details>

<details>
<summary>🧠 10 ta Murakkab JS Mashq — Kod bilan birga Bosqichli Yechim</summary>
---

## 🧠 10 ta Murakkab JS Mashq — Kod bilan birga Bosqichli Yechim

---

### ✅ 1. 🛒 Savatchadagi jami narxni hisoblash

```js
let savat = [
  { nomi: "non", narx: 3000 },
  { nomi: "sut", narx: 5000 },
  { nomi: "shakar", narx: 7000 }
];
```

**Bosqichlar:**

1. `reduce()` metodidan foydalaning.
2. Har bir elementning `narx` qiymatini jamlang.
3. Boshlang‘ich qiymat sifatida `0` bering.
4. Natijani `console.log()` qiling.

---

### ✅ 2. 🏅 Eng yuqori ballni topish

```js
let talabalar = [
  { ism: "Ali", ball: 76 },
  { ism: "Zebo", ball: 89 },
  { ism: "Murod", ball: 92 },
  { ism: "Dilnoza", ball: 85 }
];
```

**Bosqichlar:**

1. `for` yoki `reduce()` bilan eng katta ballni toping.
2. Har yurishda avvalgi eng katta qiymat bilan solishtiring.
3. `ism` va `ball`ni ajratib saqlang.
4. Yakunida ularni konsolga chiqaring.

---

### ✅ 3. 🧾 Admin login tizimi

```js
let adminlar = {
  admin1: "1234",
  superadmin: "5678"
};
```

**Bosqichlar:**

1. Foydalanuvchidan `prompt()` orqali login va parol oling.
2. `adminlar[login]` orqali login bor-yo‘qligini tekshiring.
3. Parol qiymatini `if` orqali solishtiring.
4. Xabar chiqaring: `"Xush kelibsiz"` yoki `"Noto‘g‘ri login yoki parol"`.

---

### ✅ 4. 🧮 Ballni bahoga aylantirish

```js
let ballar = [89, 45, 72, 100, 66];
```

**Bosqichlar:**

1. `map()` bilan massiv bo‘ylab aylaning.
2. Har bir ballni `if` bilan tekshirib, A–F baho bering.
3. Natijani yangi massivga yig‘ing.
4. Konsolga chiqarish mumkin.

---

### ✅ 5. 🧍‍♂️ 18 yoshdan kattalarni ajratish

```js
let users = [
  { name: "Ali", yosh: 17 },
  { name: "Zebo", yosh: 21 },
  { name: "Karim", yosh: 15 },
  { name: "Lola", yosh: 19 }
];
```

**Bosqichlar:**

1. `filter()` metodidan foydalaning.
2. Har bir userni `yosh` bo‘yicha tekshiring: `>= 18`
3. Yangi massiv hosil bo‘ladi.
4. Uni `console.log()` qiling.

---

### ✅ 6. 🗓 Haftalik dars jadvalini chiqarish

```js
let hafta = {
  dushanba: ["html", "css"],
  seshanba: ["js"],
  chorshanba: ["praktika", "review"]
};
```

**Bosqichlar:**

1. `for...in` bilan obyekt ustida aylaning.
2. Har bir kun (kalit) va qiymat (array)ni oling.
3. Array’ni `join(", ")` orqali vergul bilan ajrating.
4. Har birini konsolga chiqaring.

---

### ✅ 7. 🔄 Ismni teskari chiqarish

```js
let ism = prompt("Ismingizni kiriting:");
```

**Bosqichlar:**

1. `split('')` bilan stringni harflarga ajrating.
2. `reverse()` yoki `for` bilan teskari aylantiring.
3. `join('')` orqali harflarni birlashtiring.
4. Natijani chiqarib bering.

---

### ✅ 8. 🧾 Mahsulotlarga 10% chegirma

```js
let mahsulotlar = [
  { nomi: "telefon", narx: 1200000 },
  { nomi: "noutbuk", narx: 8000000 }
];
```

**Bosqichlar:**

1. `map()` yordamida har bir mahsulot ustida ishlang.
2. `narx`ga 0.9 (90%) koeffitsiyent qo‘llang.
3. Yangi obyekt yarating: `nomi` va yangi `narx`
4. Yangi massivni qaytaring.

---

### ✅ 9. 🔡 To‘liq ism hosil qilish

```js
let odamlar = [
  { ism: "Ali", familiya: "Karimov" },
  { ism: "Dilnoza", familiya: "Xasanova" }
];
```

**Bosqichlar:**

1. `map()` bilan yurib chiqing.
2. `ism` va `familiya`ni birlashtiring.
3. Template literal yoki `+` bilan qo‘shing.
4. Yangi string massivni qaytaring.

---

### ✅ 10. 🔢 Sonlarni tahlil qilish

```js
let sonlar = [5, -2, 0, 9, -7, 10, 0];
```

**Bosqichlar:**

1. Uchta sanagich (`musbat`, `manfiy`, `nol`) tayyorlang.
2. `for` yoki `forEach` bilan har bir sonni tekshiring.
3. Tegishli sanagichni oshirib boring.
4. Natijani obyekt ko‘rinishida qaytaring.

---
</details>

<details>
<summary></summary>

</details>

<details>
<summary></summary>

</details>