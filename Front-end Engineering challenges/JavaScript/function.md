<details>
<summary>🧠 10 ta Real Hayotiy Funksiya Mashqlari</summary>
---
## 🧠 10 ta Real Hayotiy Funksiya Mashqlari

### ✅ 1. Salom beruvchi funksiya

**Funksiya:** `salomBer(ism)`
**Natija:** `"Salom, Sardor!"`

```js
function salomBer(ism) {
  return `Salom, ${ism}!`;
}
```

---

### ✅ 2. Yil asosida yosh hisoblovchi funksiya

**Funksiya:** `hisoblaYosh(yil)`
**Natija:** `2025 - yil`

> Foydalanuvchi tug‘ilgan yil kiritadi → funksiya yoshi qaytaradi

---

### ✅ 3. Raqam toqmi yoki juftmi?

**Funksiya:** `toqmiJuftmi(son)`
**Natija:** `"Juft"` yoki `"Toq"`

---

### ✅ 4. Narxga soliq qo‘shuvchi funksiya

**Funksiya:** `soliqliNarx(narx, foiz)`
**Misol:** `soliqliNarx(100, 15)` → `115`

---

### ✅ 5. To‘liq ism yasovchi funksiya

**Funksiya:** `fullName(ism, familiya)`
**Natija:** `"Javohir Karimov"`

> Faqat `return ism + " " + familiya`

---

### ✅ 6. Foydalanuvchidan parol olib, uni tekshiruvchi funksiya

Shartlar:

* Parol uzunligi ≥ 6
* Kamida 1 `@` belgisi bo‘lishi kerak

**Funksiya:** `parolTekshir(parol)`
**Natija:** `true` yoki `"Parol kuchsiz"`

---

### ✅ 7. Foydalanuvchining bahosini A, B, C tarzida baholash

**Funksiya:** `baholaBaho(son)`
Shartlar:

* 90–100: `"A’lo"`
* 70–89: `"Yaxshi"`
* 50–69: `"Qoniqarli"`
* <50: `"Qoniqarsiz"`

---

### ✅ 8. Raqamni kvadratga oshiruvchi arrow funksiya

```js
const kvadrat = son => son * son;
```

> Natija: `kvadrat(6)` → `36`

---

### ✅ 9. Foydalanuvchi telfon raqamini kiritadi, funksiya tekshiradi

Shartlar:

* Faqat raqam bo‘lishi kerak
* Uzunligi 9 yoki 12

**Funksiya:** `raqamTekshir(raqam)`
**Natija:** `true` yoki `"Xato: raqam noto‘g‘ri"`

---

### ✅ 10. Foydalanuvchi 3 ta son kiritadi. Eng kattasini qaytaruvchi funksiya yozing

**Funksiya:** `engKatta(a, b, c)`
**Natija:** `"Eng katta son: 98"`

> Ichida `if` orqali solishtirish yetarli.

---

</details>


<details>
   <summary>Mini Project: Mahsulot Narx Hisoblagichi (Advanced Version)</summary>
---

## 💼 **Mini Project: Mahsulot Narx Hisoblagichi (Advanced Version)**

---

### 🎯 **Topshiriq maqsadi:**

Quyidagi vazifalarni bajaradigan **interaktiv narx hisoblagich** dasturini tuzing:

---

### 📌 **Vazifa Talablari:**

1. **Foydalanuvchidan quyidagilarni prompt orqali so‘ralsin:**

   * Mahsulot narxi
   * Soni
   * Chegirma foizi
   * Valuta turi (so‘m, dollar, euro)

2. **Hisoblash funksiyasi yarating:**

   * Narx \* soni → umumiy narx
   * Umumiy narxdan chegirma ajratiladi
   * Yakuniy narx qaytariladi

3. **Valuta tanlashga qarab natijani chiqaring:**

   * `so‘m` → `"Yakuniy narx: 54000 so‘m"`
   * `dollar` → `"Yakuniy narx: $45"`
   * `euro` → `"Yakuniy narx: €41"`

> 💡 Kursda hali valuta konvertatsiyasi (1\$ = 12000 so‘m kabi) berilmagan bo‘lsa, qiymatlar faqat **namoyish maqsadida ishlatiladi**.

4. **Admin rejimi qo‘shing:**

   * Foydalanuvchi parol kiritadi (masalan, `"admin123"`)
   * Agar noto‘g‘ri parol kiritilsa → `"Kirish rad etildi!"` va hisoblash ishlatilmaydi
   * To‘g‘ri bo‘lsa → hisoblash davom etadi

---

### 💡 **Qo‘shimcha ko‘rsatmalar:**

* Hisoblash jarayonini alohida `function`ga joylashtiring
* Har bir qadamni `console.log` yoki `alert` orqali foydalanuvchiga ko‘rsating
* Kod soddaligi, o‘qilishi va funksiyaviyligi muhim
* Xatolik holatlari (yaroqsiz kirish, bo‘sh qiymatlar, noto‘g‘ri valuta) tekshirilsin

---

### 🎓 **Maqsad:**

Ushbu loyiha orqali siz quyidagilarni amaliyotda mustahkamlaysiz:

* Funksiya yozish va `return` bilan qiymat qaytarish
* `prompt` bilan ma’lumot olish
* `if/else` bilan murakkab shartlar tashkil qilish
* Real holatga yaqin, foydalanuvchi bilan ishlovchi kod yozish

---

🔐 **Yakunida:**
Kod ishga tushirilganda foydalanuvchi:

* Parol kiritadi
* Mahsulot narxi, miqdori, chegirmasi va valutani belgilaydi
* Hisob-kitobni ko‘radi

---
</details>


<details>
   <summary>Scope, Hoisting va TDZ (Temporal Dead Zone)</summary>
   Quyida **Scope, Hoisting va TDZ (Temporal Dead Zone)** mavzusiga oid:

* **5 ta test savoli** (tanlovli)
* **5 ta amaliy mashq** (real hayotga yaqin, murakkablik darajasi: o‘rta)

---

## ✅ 1. TEST SAVOLLARI (Multiple Choice)

---

### **1. Quyidagilardan qaysi biri *block scope* hisoblanadi?**

A) `var`
B) `function`
C) `let`
D) `return`

> **To‘g‘ri javob:** C

---

### **2. Nima uchun quyidagi kodda xatolik yuz beradi?**

```js
console.log(a);
let a = 5;
```

A) `a` hali e’lon qilinmagan
B) `let` hoisting qilinmaydi
C) `let` TDZda
D) `a` global emas

> **To‘g‘ri javob:** C

---

### **3. Quyidagilardan qaysi biri *hoisting*ga uchraydi?**

A) `let`
B) `const`
C) `var`
D) `for`

> **To‘g‘ri javob:** C

---

### **4. `const` bilan o‘zgaruvchi e’lon qilinganida...**

A) Qiymatini keyin o‘zgartirish mumkin
B) Qiymat berilmasa ham bo‘ladi
C) Qiymatni qayta yozib bo‘lmaydi
D) Unda faqat string bo‘lishi kerak

> **To‘g‘ri javob:** C

---

### **5. Quyidagi kod natijasi qanday bo‘ladi?**

```js
function test() {
  console.log(x);
  var x = 7;
}
test();
```

A) 7
B) `undefined`
C) `ReferenceError`
D) `null`

> **To‘g‘ri javob:** B

---

## 🧠 2. MASHQLAR (Realistik va Murakkabroq)

---

### **1. Block scope tekshiruvi**

Quyidagi kodni yozing va ishlatishga urining:

```js
{
  let ism = "Dilshod";
}
console.log(ism); // ❓
```

> Nima bo‘ladi? Nima uchun? Izohlang.

---

### **2. Global va Local scope farqini test qiling**

```js
let x = 10;

function oyna() {
  let x = 5;
  console.log(x); // ❓
}
oyna();
console.log(x); // ❓
```

> Har ikkala `console.log` qanday natija beradi? Nima uchun?

---

### **3. var bilan scope sinovi**

```js
if (true) {
  var a = 100;
}
console.log(a); // ❓
```

> `a` block tashqarisida mavjudmi? Nima uchun?

---

### **4. let bilan TDZ xatolik keltirish**

Quyidagi kodda nima xato bo‘ladi?

```js
function test() {
  console.log(ism);
  let ism = "Shoxrux";
}
test();
```

> Kodni tuzating va sababi bilan tushuntiring.

---

### **5. funksiya ichida global o‘zgaruvchiga kirish**

```js
let globalVar = "salom";

function ichkiFunksiya() {
  console.log(globalVar); // ❓
}
ichkiFunksiya();
```

> Bu kod ishlaydimi? Nega? Agar `let globalVar = "salom";` bo‘lmasa nima bo‘ladi?

---

</details>


