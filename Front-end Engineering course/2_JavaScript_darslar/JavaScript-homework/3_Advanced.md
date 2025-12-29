

<details>
<summary>OOP Homework</summary>
---

# 🧩 JavaScript OOP (ES6 Class) — 7 ta aniq tushuntirilgan vazifa

---

## 🟢 1-vazifa: `Car` class yaratish

### 🎯 Maqsad:

`class`, `constructor`, `this` bilan ishlashni o‘rganish.

### 📝 Vazifa:

`Car` nomli class yarating.

### 🔹 Qadamlar:

1. Class nomi `Car` bo‘lsin
2. `constructor` ichida:

   * `model`
   * `year`
     property’larini qabul qilsin
3. `info()` nomli method yozing:

   * Mashina modeli va yili haqida matn chiqarsin

### ✅ Kutilgan natija:

Agar obyekt yaratilsa, `info()` chaqirilganda mashina haqida to‘liq ma’lumot chiqishi kerak.

---

## 🟡 2-vazifa: `Calculator` class

### 🎯 Maqsad:

Methodlar yordamida hisob-kitob qilish.

### 📝 Vazifa:

`Calculator` nomli class yarating.

### 🔹 Qadamlar:

1. Class ichida 4 ta method bo‘lsin:

   * `add(a, b)` → qo‘shish
   * `subtract(a, b)` → ayirish
   * `multiply(a, b)` → ko‘paytirish
   * `divide(a, b)` → bo‘lish
2. `divide()` methodida:

   * agar `b = 0` bo‘lsa, xatolik haqida xabar chiqaring
   * aks holda natijani chiqaring

### ✅ Kutilgan natija:

0 ga bo‘lishning oldi olinishi kerak.

---

## 🟡 3-vazifa: Bank hisob raqami

### 🎯 Maqsad:

Class ichida property va methodlarni to‘g‘ri ishlatish.

### 📝 Vazifa:

`BankAccount` nomli class yarating.

### 🔹 Qadamlar:

1. `constructor`:

   * `owner` (egasi)
   * `balance` (boshlang‘ich balans)
2. `deposit(sum)`:

   * balansga pul qo‘shadi
3. `withdraw(sum)`:

   * agar balans yetarli bo‘lsa, pul yechadi
   * aks holda ogohlantirish beradi
4. `checkBalance()`:

   * joriy balansni chiqaradi

### ✅ Kutilgan natija:

Balans manfiy bo‘lib ketmasligi kerak.

---

## 🟠 4-vazifa: Meros olish (`extends`)

### 🎯 Maqsad:

Inheritance tushunchasini tushunish.

### 📝 Vazifa:

1. `Person` nomli class yarating:

   * `name`
   * `age`
   * `introduce()` → o‘zini tanishtirsin
2. `Student` class yarating:

   * `extends Person`
   * qo‘shimcha `grade`
   * `introduce()` methodini **qayta yozing (override)**

### ✅ Kutilgan natija:

`Student` obyektida ota class’dagi property’lar ishlashi kerak.

---

## 🟠 5-vazifa: `super()` bilan ishlash

### 🎯 Maqsad:

Parent class constructor’ini chaqirish.

### 📝 Vazifa:

1. `Animal` class:

   * `name`
2. `Bird` class:

   * `extends Animal`
   * `color`
3. `Bird` constructor’ida:

   * `super(name)` ishlatilishi **shart**
4. `info()` methodi:

   * qush nomi va rangini chiqarsin

### ✅ Kutilgan natija:

Agar `super()` ishlatilmasa, kod xato berishi tushunilishi kerak.

---

## 🔴 6-vazifa: Private field (`#password`)

### 🎯 Maqsad:

Xavfsiz ma’lumotlarni yashirish.

### 📝 Vazifa:

`UserAccount` nomli class yarating.

### 🔹 Qadamlar:

1. `username` — ochiq property
2. `#password` — private property
3. `login(inputPassword)` methodi:

   * kiritilgan parolni tekshiradi
4. Tashqaridan:

   * parolni o‘qish
   * o‘zgartirish
     mumkin bo‘lmasin

### ✅ Kutilgan natija:

Faqat class ichida parolga murojaat qilish mumkin.

---

## 🔴 7-vazifa: `static` methodlar

### 🎯 Maqsad:

Class darajasidagi methodlarni tushunish.

### 📝 Vazifa:

`MathHelper` nomli class yarating.

### 🔹 Qadamlar:

1. Quyidagi `static` methodlarni yozing:

   * `isEven(number)` → juftligini tekshiradi
   * `isOdd(number)` → toqligini tekshiradi
   * `square(number)` → kvadratini qaytaradi
2. Bu methodlar:

   * obyekt yaratmasdan
   * to‘g‘ridan-to‘g‘ri class nomi bilan chaqirilsin

### ✅ Kutilgan natija:

`new MathHelper()` ishlatilmasligi kerak.

---

## 🏆 BONUS: Mini loyiha (ixtiyoriy)

### 🎯 Maqsad:

Barcha OOP bilimlarni birlashtirish.

### 📝 Vazifa:

**"User Login System"**

### 🔹 Talablar:

* `User` class
* `name`, `#password`
* `login()`
* `static welcome()`
* Kamida 2 ta foydalanuvchi bilan sinov qiling

---

<details>
