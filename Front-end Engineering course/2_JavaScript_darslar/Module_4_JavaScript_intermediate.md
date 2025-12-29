# JavaScript Intermediate

<details>
<summary>Scope, Hoisting va Temporal Dead Zone (TDZ)</summary>
---

# 🔍 **Scope, Hoisting va Temporal Dead Zone (TDZ)**

---

Bu darsda quyidagi tushunchalarni chuqur o‘rganamiz:

1. Scope — o‘zgaruvchilarni qayerda e’lon qilish mumkin?
2. Hoisting — JS qayerga qanday kodlarni "ko‘taradi"?
3. Temporal Dead Zone — `let` va `const` ni noto‘g‘ri ishlatishdagi xatoliklar

---

## 🧠 1. Scope (Ko‘lam) nima?

**Scope** — bu o‘zgaruvchining **qaysi joyda yaratilganligi** va **qayerda unga murojaat qilish mumkinligi**ni bildiradi.

JavaScript’da quyidagi scope turlari mavjud:

### ✅ Global scope (umumiy ko‘lam)

```js
let ism = "Ali";

function salomBer() {
  console.log(ism); // "Ali"
}

salomBer();
```

> `ism` globalda e’lon qilingan. Shuning uchun har yerda ishlatiladi.

---

### ✅ Function scope (faqat funksiyada ishlaydi)

```js
function test() {
  let yosh = 20;
  console.log(yosh);
}

test();
// console.log(yosh); ❌ Error – bu yerda ko‘rinmaydi
```

> `let yosh` faqat `test()` funksiyasi ichida mavjud.

---

### ✅ Block scope (if, for, {} ichidagi scope)

```js
{
  let x = 5;
  console.log(x); // 5
}
// console.log(x); ❌ Error – tashqarida ko‘rinmaydi
```

> `let` va `const` o‘zgaruvchilar **blok ichida yashaydi**, `var` esa emas.

---

### ⚠️ `var` block scope’ni ko‘rmaydi

```js
if (true) {
  var test = "salom";
}
console.log(test); // "salom" ❗️
```

> Shuning uchun `var` ni emas, **doim `let` yoki `const`** ni ishlating.

---

## 🔄 2. Hoisting (Ko‘tarilish) nima?

**Hoisting** degani — JavaScript kodni bajarishdan oldin, **ba’zi e’lonlarni (declarations)** avtomatik tarzda yuqoriga “ko‘taradi”.

### ✅ `var` — hoist bo‘ladi (undefined bo‘lib)

```js
console.log(a); // undefined
var a = 5;
```

> JavaScript bu kodni aslida shunday ko‘radi:

```js
var a;        // e’lonlash ko‘tariladi
console.log(a); // undefined
a = 5;
```

---

### ❌ `let` va `const` — hoist qilinadi, ammo **TDZ** sababli ishlatib bo‘lmaydi

```js
console.log(x); // ❌ ReferenceError
let x = 10;
```

> Bu kodda `x` yuqoriga ko‘tariladi, ammo **ishlatishga ruxsat berilmaydi** — bu holat **Temporal Dead Zone** deyiladi.

---

## ⏳ 3. Temporal Dead Zone (TDZ) nima?

`let` va `const` o‘zgaruvchilari e’lon qilingan blok (yoki funksiya) ichida **e’lon qilingunga qadar** hech qanday shaklda ishlatilmaydi.

### Misol:

```js
{
  console.log(a); // ❌ ReferenceError
  let a = 5;
}
```

> Bu kod **yaxshi ko‘rinadi**, lekin `a` e’lon qilinmasdan avval unga murojaat qilingani uchun xato beradi.

---

### ✅ To‘g‘ri yo‘l:

```js
{
  let a = 5;
  console.log(a); // 5
}
```

---

## ⚠️ `const` xususiyati

* `const` — doim qiymat bilan birga e’lon qilinishi shart
* Uni keyinchalik o‘zgartirish mumkin emas

```js
const PI = 3.14;
// PI = 3.1415 ❌ Error: reassignment not allowed
```

> Ammo `const` bilan yaratilgan **array** yoki **object** ichidagi qiymatlar **o‘zgartirilishi mumkin**:

```js
const user = { name: "Ali" };
user.name = "Karim"; // bu ruxsat etiladi
```

---

## 🧪 Yakuniy misollar

### Global va block scope farqi:

```js
let ism = "Zuhra";

if (true) {
  let ism = "Dilnoza";
  console.log(ism); // "Dilnoza"
}

console.log(ism); // "Zuhra"
```

> Har bir `let` o‘z blokida yashaydi — boshqa `let` bilan to‘qnashmaydi.

---

## 📝 Xulosa jadvali:

| Tushuncha          | Tavsif                                              |
| ------------------ | --------------------------------------------------- |
| Global scope       | Butun faylga tegishli o‘zgaruvchi                   |
| Function scope     | Faqat funksiyada mavjud                             |
| Block scope        | `{}` ichida ishlaydigan scope (`let`, `const`)      |
| Hoisting           | JS o‘zgaruvchini e’lonlashni yuqoriga ko‘taradi     |
| Temporal Dead Zone | `let/const` ishlatishdan oldin foydalanib bo‘lmaydi |

---

---

## 🧪 5 ta Test (tanlovli savollar)

**1. Savol:** Quyidagi kodda nima chiqadi?

```js
console.log(x);
var x = 10;
```

* A) 10
* B) `undefined`
* C) `ReferenceError`
* D) `null`

> *To‘g‘ri javob: B (chunki `var` hoist qilinadi, ammo qiymat keyin beriladi)*

---

**2. Savol:** `let` bilan e’lon qilingan o‘zgaruvchi hoisting bo‘ladimi?

* A) Ha, va qiymati `undefined` bo‘ladi
* B) Yo‘q, hech qachon hoist qilinmaydi
* C) Ha, lekin TDZ ichida ishlatib bo‘lmaydi
* D) Faqat globalda ishlaydi

> *To‘g‘ri javob: C*

---

**3. Savol:** Quyidagi kodda nima xatolik bor?

```js
{
  console.log(y);
  let y = 5;
}
```

* A) Y yaxshi ishlaydi
* B) y is undefined
* C) ReferenceError
* D) SyntaxError

> *To‘g‘ri javob: C (TDZ sababi bilan)*

---

**4. Savol:** Quyidagi holatda qaysi `ism` chaqiriladi?

```js
let ism = "Ali";

function salom() {
  let ism = "Karim";
  console.log(ism);
}

salom();
```

* A) "Ali"
* B) "Karim"
* C) `undefined`
* D) `ReferenceError`

> *To‘g‘ri javob: B*

---

**5. Savol:** Quyidagida qanday xato chiqadi?

```js
const yosh;
yosh = 25;
```

* A) `SyntaxError`
* B) `TypeError`
* C) `ReferenceError`
* D) Ishlaydi

> *To‘g‘ri javob: A (const qiymatsiz e’lon qilinmaydi)*

---

## 🧠 5 ta Mashq (Qiyinlashtirilgan amaliy topshiriqlar)

---

**1. Mashq: Global vs Block Scope**

```js
let status = "off";

if (true) {
  let status = "on";
  console.log("Ichkarida:", status);
}

console.log("Tashqarida:", status);
```

📌 **Vazifa:** Har bir `console.log` qayerdagi `status` ni ko‘rsatadi? Yozib tushuntiring.

---

**2. Mashq: `var` bilan xavfli kod**

```js
if (true) {
  var raqam = 100;
}
console.log(raqam);
```

📌 **Vazifa:** `var` sababli bu kodda qanday xavf yoki muammo bor? `let`ga o‘zgartirib ko‘ring va farqini tushuntiring.

---

**3. Mashq: Hoistingni amalda aniqlash**

```js
function test() {
  console.log(a);
  var a = 50;
}
test();
```

📌 **Vazifa:** Ushbu kod qanday natija qaytaradi va nima sababdan?

---

**4. Mashq: Temporal Dead Zone holati**

```js
function start() {
  console.log(x);
  let x = 20;
}
start();
```

📌 **Vazifa:** Nima xato chiqadi? Sababini aniq TDZ bilan tushuntiring.

---

**5. Mashq: const bilan obyekt**

```js
const user = {
  name: "Zilola",
  age: 22
};

user.age = 23;
user.name = "Ziyoda";
```

📌 **Vazifa:** `const` bilan e’lon qilingan `user` o‘zgaryaptimi? Qanday qilib? Nega bu xatolik emas?

---





</details>



<details>
<summary>Closures</summary>

---

# 🔒 JavaScript’da **Closures** tushunchasi

---

## 🎯 Bu darsda o‘rganasiz:

1. Closure nima?
2. Qanday ishlaydi?
3. Nega kerak?
4. Real hayotiy misollar
5. Ko‘p xatolik qilinadigan joylar

---

## 1. ❓ Closure nima?

**Closure** — bu funksiyaning o‘zidan tashqarida e’lon qilingan o‘zgaruvchilarga **kirish imkonini saqlab qolishidir**, hatto **funksiya ishlatilgandan keyin ham**.

Oddiy qilib aytganda:

> **Function ichidan function qaytarilsa, va bu ichki function tashqi functionning qiymatlaridan foydalansa — bu Closure hisoblanadi.**

---

## 2. 🧪 Eng oddiy misol

```js
function tashqi() {
  let son = 5;

  function ichki() {
    console.log(son); // ichki funksiyada tashqi o‘zgaruvchi ishlatilmoqda
  }

  return ichki;
}

let natija = tashqi(); // tashqi() chaqirilyapti, ichki qaytdi
natija(); // 5
```

### 🧠 Nima bo‘ldi bu yerda?

* `tashqi()` chaqirildi → `son = 5`
* `ichki()` funksiyasi qaytarildi
* `natija()` orqali ichki funksiyani keyinchalik chaqirdik
* `son` o‘zgaruvchisi **aslida allaqachon tugagan funksiya ichida** edi, lekin **JavaScript uni saqlab qoldi**

> Bu **closure** deb ataladi.

---

## 3. 🔁 Closure nima uchun kerak?

### ✅ Ma’lumotni yashirish uchun (Data encapsulation)

```js
function hisoblagich() {
  let count = 0;

  return function () {
    count++;
    console.log("Hisob:", count);
  };
}

let plus = hisoblagich();
plus(); // 1
plus(); // 2
plus(); // 3
```

> `count` o‘zgaruvchisi tashqi dunyodan yashirin, faqat ichki funksiya orqali unga kirish mumkin.

---

## 4. 🧰 Real hayotiy misol: maxfiy hisoblagich

```js
function makeCounter(nomi) {
  let qiymat = 0;

  return {
    orttir: function () {
      qiymat++;
      console.log(nomi + " = " + qiymat);
    },
    kamaytir: function () {
      qiymat--;
      console.log(nomi + " = " + qiymat);
    }
  };
}

let userCounter = makeCounter("Foydalanuvchi balli");
userCounter.orttir(); // Foydalanuvchi balli = 1
userCounter.orttir(); // Foydalanuvchi balli = 2
userCounter.kamaytir(); // Foydalanuvchi balli = 1
```

> Har bir `makeCounter()` uchun **yangi yopiq xotira** (closure) hosil bo‘ladi

---

## 5. ⚠️ Ko‘p uchraydigan xatolik

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

> Siz `0`, `1`, `2` chiqishini kutasiz. Ammo...

### 🟥 Natija:

```
3
3
3
```

### ✅ To‘g‘ri qilish (Closure bilan `let` ishlatish):

```js
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

> `let` block scope’da ishlagani uchun har bir `i` o‘z joyida saqlanadi.

---

## 🧠 Yakuniy eslatmalar:

| Tushuncha | Izoh                                                                         |
| --------- | ---------------------------------------------------------------------------- |
| Closure   | Ichki funksiyaning tashqi o‘zgaruvchilarga kirish qobiliyati                 |
| Saqlash   | Closure yordamida funksiya chaqirilganidan keyin ham qiymatni saqlash mumkin |
| Foyda     | Maxfiylik, funksiyalarni parametrlar bilan "xotiraga olish"                  |

---



---

## 🔟 Closure Challenge’lar

---

### **1. Oddiy closure: Salom beruvchi**

**Vazifa:** `salomBeruvchi(ism)` nomli funksiya yarating. Bu funksiya `ism` ni qabul qiladi va **yana bir funksiya** qaytaradi. Qaytgan funksiya ishga tushganda `Salom, [ism]` deb konsolga chiqarsin.

📌 *Yordam:* `function salomBeruvchi(ism) { return function() { ... } }`

---

### **2. Mustaqil hisoblagich**

**Vazifa:** `hisoblagich()` nomli funksiya yarating. U `count` nomli o‘zgaruvchini yopiq holatda saqlaydi va har safar `plus()` funksiyasi ishga tushganda 1 taga orttiradi.

📌 *Maslahat:* Qaytgan function `count` ni ichida eslab qoladi — bu closure.

---

### **3. Maxfiy parolni tekshiruvchi**

**Vazifa:** `parolYarat(haqiqiyParol)` funksiyasi yozing. Bu funksiya **parolni qabul qiladi** va yana bir funksiya qaytaradi. Qaytgan funksiya `foydalanuvchiParoli` bilan taqqoslaydi va `true` yoki `false` qaytaradi.

📌 *Tushuncha:* haqiqiy parol tashqi dunyodan yashiringan bo‘ladi.

---

### **4. To‘plovchi (Collector)**

**Vazifa:** `createCollector()` funksiyasini yozing. Har safar bu funksiya orqali yangi so‘z qo‘shing. So‘ngra to‘plangan barcha so‘zlarni bitta `array` holatida qaytaradigan funksiya bo‘lsin.

📌 *Maslahat:* Closure ichida `let sozlar = []` yarating va unga `push()` qiling.

---

### **5. Reset bilan hisoblagich**

**Vazifa:** `makeCounter()` funksiyasi yarating. U 3 ta metodga ega bo‘lsin: `plus()`, `minus()`, `reset()`. Har biri closure orqali bitta `count` qiymatni boshqaradi.

📌 *Ishlashi:* `counter.plus() → 1`, `counter.minus() → 0`, `counter.reset() → 0`

---

### **6. Yangi foydalanuvchi generatori**

**Vazifa:** `createUser(name)` funksiyasi yozing. U `id` degan o‘zgaruvchini closure ichida saqlaydi. Har safar `createUser()` chaqirilganda yangi `id` qiymat (masalan, 1, 2, 3) berilsin.

📌 *Maslahat:* `let id = 0` ni tashqarida saqlang, `return function()` orqali foydalanuvchi qaytarilsin.

---

### **7. FAQat bir marta ishlaydigan funksiya**

**Vazifa:** `faqatBirMarta(fn)` funksiyasini yozing. U berilgan funksiyani faqat **birinchi marta** chaqirishga ruxsat beradi. Qolgan paytlarda hech narsa bajarmasligi kerak.

📌 *Tushuncha:* `let bajarildi = false` bilan yopiq qiymat saqlang.

---

### **8. Bank hisob raqami**

**Vazifa:** `createBankAccount()` funksiyasi yozing. U ichida balans bo‘ladi (masalan, 0). Funksiya quyidagi metodlarni qaytarsin: `deposit()`, `withdraw()`, `checkBalance()`.

📌 *Maslahat:* `balance` o‘zgaruvchisi closure orqali yashiringan bo‘lishi kerak.

---

### **9. Timer yaratish**

**Vazifa:** `startTimer(name)` funksiyasi yarating. U ichida `sekundlar` degan o‘zgaruvchi bo‘lsin. Har safar `tik()` funksiyasi ishga tushganda, vaqt ortsin va natija chiqsin: `"Ali uchun vaqt: 3 sekund"`

📌 *Yordam:* `sekund` ni har chaqirilganda 1 ga orttiring.

---

### **10. Har bir foydalanuvchiga alohida hisoblagich**

**Vazifa:** `createMultiUserCounter(name)` funksiyasi yozing. Har bir foydalanuvchi o‘zining hisoblagichiga ega bo‘lsin (`Ali`, `Vali` kabi). `Ali` ko‘p chaqirsa — faqat `Ali`ni hisoblaydi.

📌 *Maslahat:* Har bir chaqirilgan user uchun `let count = 0` bo‘lsin va closure bilan bog‘langan bo‘lsin.

---


</details>

<details>
<summary>Callback Functions</summary>

---

# 🔁 **Callback Functions — JavaScript’da funksiya ichida funksiya**

---

## 🎯 Bu darsda o‘rganasiz:

1. Callback nima?
2. Nega kerak?
3. Oddiy misollar
4. setTimeout, setInterval bilan callback ishlatish
5. Real hayotiy senariylar

---

## 1. ❓ Callback Function nima?

**Callback** — bu boshqa funksiyaga **argument sifatida beriladigan funksiya**.

> JavaScript asinxron til bo‘lgani uchun, ko‘plab funksiyalar **callback** funksiyalar orqali bajariladi (masalan: foydalanuvchi kutadi, brauzer javob beradi, va h.k.)

---

## 2. ✅ Oddiy misol

```js
function salomBer(ism) {
  console.log("Salom, " + ism);
}

function bajar(callback) {
  let foydalanuvchi = "Ali";
  callback(foydalanuvchi);
}

bajar(salomBer); // Salom, Ali
```

> `salomBer` funksiyasi **boshqa funksiya ichida chaqirildi** — bu callback hisoblanadi.

---

## 3. 🔄 setTimeout bilan Callback

```js
setTimeout(function () {
  console.log("3 soniyadan so‘ng ishladi!");
}, 3000);
```

> Bu yerda `function () { ... }` — bu **callback**, u 3 sekunddan so‘ng ishlaydi.

---

## 4. ⏱️ setInterval bilan takroriy ishlash

```js
let son = 1;
let timer = setInterval(function () {
  console.log("Sekund:", son);
  son++;

  if (son > 5) {
    clearInterval(timer);
  }
}, 1000);
```

> Har 1 sekundda callback ishlaydi. `clearInterval` bilan to‘xtatiladi.

---

## 5. 🧩 Real hayotdagi foydasi

### 🛒 Misol: Tugmani bosganda ma’lumotni olib kelish

```js
function yuklash(callback) {
  console.log("Ma'lumotlarni yuklayapmiz...");

  setTimeout(function () {
    console.log("Yuklandi!");
    callback();
  }, 2000);
}

function natija() {
  console.log("Endi sahifani yangilaymiz!");
}

yuklash(natija);
```

> Avval yuklash, keyin callback bajariladi — real web sahifalardagi interaktiv holatga o‘xshaydi.

---

## 6. ⚠️ Callback hell nima?

```js
setTimeout(function () {
  console.log("1");
  setTimeout(function () {
    console.log("2");
    setTimeout(function () {
      console.log("3");
    }, 1000);
  }, 1000);
}, 1000);
```

> Bu **callback hell** deyiladi — **qiyin o‘qiladi**, bu muammo keyinchalik `Promise` va `async/await` bilan hal qilinadi.

---

## 📝 Xulosa:

| Tushuncha         | Izoh                                    |
| ----------------- | --------------------------------------- |
| Callback function | Argument sifatida uzatiladigan funksiya |
| setTimeout        | Callbackni kechiktirib bajaradi         |
| setInterval       | Har bir vaqtda callbackni takrorlaydi   |
| clearInterval     | Takrorlovchi callbackni to‘xtatadi      |

---


---

# 🔟 Callback Function Mashqlari

---

### **1. Oddiy callback chaqirish**

**Vazifa:** `salomBer` degan funksiya yozing. U `ism` qabul qiladi va `Salom, ism!` deb chiqarsin.
`bajar()` degan boshqa funksiya yozing, u `callback`ni chaqiradi va unga `"Zafar"` yuboradi.

📌 *Ma’no:* Funksiya ichida boshqa funksiyani ishlating.

---

### **2. 2 soniyadan so‘ng salom berish**

**Vazifa:** `setTimeout()` orqali `"Salom, dunyo!"` matnini 2 soniyadan so‘ng chiqaring.

📌 *Yordam:* `setTimeout(function() { ... }, 2000)`

---

### **3. Loading... va keyin natija**

**Vazifa:** `malumotYuklash(callback)` funksiyasi yozing. U avval `"Yuklanmoqda..."` deb yozadi, 3 soniyadan keyin `"Yuklandi"` deb chiqadi va `callback()` ni chaqiradi.

📌 *Maslahat:* 3-soniyali kechikma ichida callback chaqiring.

---

### **4. Har 1 sekundda sana chiqarish**

**Vazifa:** `setInterval()` ishlatib, har 1 sekundda `new Date().toLocaleTimeString()` ni konsolga chiqaradigan kod yozing.

📌 *Qo‘shimcha:* 5 martadan keyin `clearInterval()` bilan to‘xtating.

---

### **5. Ikki funksiya ketma-ket ishlashi**

**Vazifa:** `boshlash(callback1, callback2)` funksiyasi yozing. U `callback1()` ni chaqiradi, keyin `callback2()` ni.

📌 *Yordam:* Ketma-ket funksiya chaqirishni mashq qiling.

---

### **6. Maxsus xabar beruvchi**

**Vazifa:** `xabarYarat(matn, callback)` funksiyasi yozing. U `matn`ni konsolga chiqaradi, so‘ng `callback()` ni chaqiradi.

```js
xabarYarat("Xush kelibsiz!", function() {
  console.log("Tizimga kirdingiz.");
});
```

---

### **7. Foydalanuvchi ro‘yxatini yuklash**

**Vazifa:** `foydalanuvchilar(callback)` funksiyasi yarating. Unda 2 sekundlik kechikishdan so‘ng `["Ali", "Vali", "Zilola"]` massivini `callback` orqali yuboring.

📌 *Yordam:* `setTimeout()` + `callback(massiv)`

---

### **8. 3 bosqichli qadamlarni bajarish**

**Vazifa:** `step1`, `step2`, `step3` nomli funksiyalar yarating. Har biri biror ish qiladi (`console.log()`) va keyingisini callback sifatida chaqiradi.

📌 *Ko‘rinishi:* `step1(() => step2(() => step3()))`

---

### **9. Button bosilganda matn chiqarish (HTML + JS)**

```html
<button id="bos">Bosish</button>
```

**Vazifa:** `onclick` orqali tugma bosilganda `callback` funksiya chaqirilsin va `alert("Siz tugmani bosdingiz!")` chiqarsin.

📌 *Yordam:* `addEventListener("click", callbackFunction)`

---

### **10. Reusable performOperation(callback, data)**

**Vazifa:** `performOperation(callback, data)` funksiyasi yozing. `callback`ni `data` bilan chaqirsin.
Uni `toUpperCase`, `reverse`, yoki `length` hisoblash uchun qayta-qayta ishlating.

📌 *Ma’no:* Bir funksiyani turli maqsadda qayta ishlating.

```js
performOperation(function (str) {
  console.log(str.toUpperCase());
}, "javascript");
```

---


</details>


<details>
<summary>Array Methods Advanced: find, some, every, sort, reduce</summary>

---

# 🔗 **Array Methods Advanced: find, some, every, sort, reduce**

---

## 🎯 Dars rejasi:

1. `find()` — shartga mos birinchi elementni topish
2. `some()` — hech bo‘lmaganda bittasi shartga to‘g‘ri keladimi?
3. `every()` — barcha elementlar shartga to‘g‘rimi?
4. `sort()` — massivni tartiblash
5. `reduce()` — massivni bitta qiymatga qisqartirish

---

## 1. 🔍 `find()` — Birinchi mos elementni topish

```js
let sonlar = [10, 25, 40, 15, 30];

let topilgan = sonlar.find(function(son) {
  return son > 20;
});

console.log(topilgan); // 25
```

> `find()` — shartga mos **birinchi** elementni qaytaradi.
> Agar hech narsa topilmasa, `undefined` qaytaradi.

---

## 2. ✅ `some()` — Hech bo‘lmasa bitta mos kelsa `true`

```js
let yoshlar = [12, 18, 21, 15];

let natija = yoshlar.some(function(yosh) {
  return yosh >= 18;
});

console.log(natija); // true
```

> **Kamida bitta element** shartga to‘g‘ri kelsa — `true`
> Aks holda — `false`

---

## 3. 🧪 `every()` — Hammasi shartga mos bo‘lsa `true`

```js
let baholar = [5, 4, 5, 5];

let yaxshi = baholar.every(function(baho) {
  return baho >= 4;
});

console.log(yaxshi); // true
```

> Har bir element shartga mos bo‘lishi kerak.
> Bitta element ham mos kelmasa — `false`.

---

## 4. 🧮 `sort()` — Massivni tartiblash

### 🔢 Sonlar bo‘yicha

```js
let raqamlar = [100, 2, 35, 10];

raqamlar.sort(function(a, b) {
  return a - b;
});

console.log(raqamlar); // [2, 10, 35, 100]
```

> Eslatma: `.sort()` sonlarni matn sifatida taqqoslaydi, shuning uchun `function(a, b)` yozish kerak.

### 🔤 Matnlar bo‘yicha

```js
let ismlar = ["Ali", "Zuhra", "Vali", "Botir"];

ismlar.sort(); // alfavit bo‘yicha
console.log(ismlar); // ["Ali", "Botir", "Vali", "Zuhra"]
```

---

## 5. 🧲 `reduce()` — Massivdan bitta umumiy natija chiqarish

```js
let narxlar = [10, 15, 20];

let jami = narxlar.reduce(function(yigindi, qiymat) {
  return yigindi + qiymat;
}, 0);

console.log(jami); // 45
```

> `reduce()` massivning har bir qiymatini olib, **bitta yakuniy natijaga** olib keladi.

### 🧠 Parametrlar:

* `yigindi` — oldingi natija (har doim yangilanadi)
* `qiymat` — hozirgi element

---

## 💡 Real Hayotiy Misollar

### 🎓 O‘quvchilar orasidan 5 bahoni topish

```js
let students = [
  { name: "Ali", mark: 4 },
  { name: "Zarina", mark: 5 },
  { name: "Karim", mark: 3 }
];

let top = students.find(function(student) {
  return student.mark === 5;
});

console.log(top.name); // "Zarina"
```

---

### 💰 Xaridlar bo‘yicha umumiy narx

```js
let cart = [
  { name: "Olma", price: 3 },
  { name: "Non", price: 2 },
  { name: "Sut", price: 5 }
];

let total = cart.reduce(function(sum, item) {
  return sum + item.price;
}, 0);

console.log("Jami:", total); // 10
```

---

## 📝 Yakuniy jadval

| Method      | Nima qiladi?                         |
| ----------- | ------------------------------------ |
| `.find()`   | Birinchi mos elementni qaytaradi     |
| `.some()`   | Hech bo‘lmasa bittasi to‘g‘ri bo‘lsa |
| `.every()`  | Barchasi to‘g‘ri bo‘lsa              |
| `.sort()`   | Tartiblaydi (son/matn)               |
| `.reduce()` | Bitta natijaga qisqartiradi          |

---

</details>



<details>
<summary>Array Method Real-Life Challenges</summary>
---

# 🔟 Array Method Real-Life Challenges

---

### **1. Mos keladigan elementni topish (`find`)**

**Vazifa:** Quyidagi `foydalanuvchilar` massivida `username: "admin"` bo‘lgan foydalanuvchini toping va uning `email`ini konsolga chiqaring.

```js
let foydalanuvchilar = [
  { username: "ali", email: "ali@gmail.com" },
  { username: "admin", email: "admin@site.uz" },
  { username: "mehmon", email: "guest@mail.com" }
];
```

---

### **2. Bitta shartga to‘g‘ri keladimi? (`some`)**

**Vazifa:** Foydalanuvchilar ro‘yxatidan hech bo‘lmasa birontasi `isOnline: true` bo‘lsa, `"Onlayn foydalanuvchi bor"` degan xabar chiqaring.

```js
let users = [
  { name: "Ali", isOnline: false },
  { name: "Vali", isOnline: false },
  { name: "Botir", isOnline: true }
];
```

---

### **3. Barchasi voyaga yetganmi? (`every`)**

**Vazifa:** Quyidagi `yoshlar` massividagi barcha foydalanuvchilar `18+` yoshdami? Ha bo‘lsa `"Barchasi voyaga yetgan"`, yo‘q bo‘lsa `"Voyaga yetmaganlar bor"` deb chiqaring.

```js
let yoshlar = [19, 22, 20, 17];
```

---

### **4. Mahsulotlarni narx bo‘yicha tartiblash (`sort`)**

**Vazifa:** Quyidagi `products` massivini `narx` bo‘yicha kamayish tartibida saralang va konsolga chiqaring.

```js
let products = [
  { name: "Telefon", narx: 150 },
  { name: "Quloqchin", narx: 30 },
  { name: "Noutbuk", narx: 400 }
];
```

---

### **5. Eng arzon mahsulotni toping (`reduce`)**

**Vazifa:** `products` massivida eng arzon mahsulotni aniqlang (eng kichik `narx`ga ega bo‘lgan obyekt).

📌 Yordam: `reduce` bilan har bir narxni solishtiring.

---

### **6. Jami baholarni hisoblang (`reduce`)**

**Vazifa:** Quyidagi `students` massivida o‘quvchilarning umumiy `score` yig‘indisini hisoblang.

```js
let students = [
  { name: "Ali", score: 75 },
  { name: "Ziyoda", score: 85 },
  { name: "Kamol", score: 90 }
];
```

---

### **7. Alifbo bo‘yicha ismlar tartiblash (`sort`)**

**Vazifa:** Quyidagi ismlar ro‘yxatini alifbo tartibida tartiblang:

```js
let ismlar = ["Zuhra", "Ali", "Karim", "Baxrom"];
```

---

### **8. 18 yoshdan katta birinchi kishini toping (`find`)**

**Vazifa:** Quyidagi massivdan 18 yoshdan katta bo‘lgan birinchi shaxsni aniqlang va uning ismini chiqaring:

```js
let people = [
  { name: "Lola", age: 16 },
  { name: "Salim", age: 17 },
  { name: "Aziz", age: 21 }
];
```

---

### **9. Barcha mahsulotlar mavjudmi? (`every`)**

**Vazifa:** `products` massivida barcha mahsulotlar `stock: true` holatdami? Shunga qarab xabar chiqaring.

```js
let products = [
  { name: "Monitor", stock: true },
  { name: "Klavitura", stock: true },
  { name: "Mouse", stock: false }
];
```

---

### **10. Narxlar bo‘yicha umumiy xarajat (`reduce`)**

**Vazifa:** Quyidagi `savat` massividagi `price` larni qo‘shib umumiy hisobni toping:

```js
let savat = [
  { name: "Non", price: 3 },
  { name: "Sut", price: 5 },
  { name: "Yog'", price: 10 }
];
```

---

</details>


<details>
<summary>ES6+ Xususiyatlari (Destructuring, Spread/Rest, Template Literals, Optional Chaining)</summary>
---

# 🚀 ES6+ Xususiyatlari (Destructuring, Spread/Rest, Template Literals, Optional Chaining)

---

## 🎯 Bu darsda siz o‘rganasiz:

1. **Destructuring** — array va objectdan qiymatlarni ajratib olish
2. **Spread va Rest operatorlari** — ma’lumotni tarqatish va yig‘ish
3. **Template literals** — matnli ifodalarni qulayroq yozish
4. **Optional chaining (`?.`)** — mavjud bo‘lmagan qiymatlarga xatolarsiz murojaat qilish

---

## 1. 🧩 **Destructuring**

### 📦 Object dan ajratib olish:

```js
let foydalanuvchi = {
  ism: "Ali",
  yosh: 25,
  email: "ali@gmail.com"
};

let { ism, yosh } = foydalanuvchi;

console.log(ism);  // Ali
console.log(yosh); // 25
```

> Obyektdagi qiymatlarni alohida o‘zgaruvchilarga "ajratib" olasiz.

---

### 📚 Array dan ajratib olish:

```js
let mevalar = ["olma", "banan", "anor"];

let [birinchi, ikkinchi] = mevalar;

console.log(birinchi); // olma
console.log(ikkinchi); // banan
```

---

## 2. 🌪 **Spread (`...`) va Rest (`...`)**

### 🌀 Spread — array yoki objectni yoyish:

```js
let raqamlar = [1, 2, 3];
let yangi = [...raqamlar, 4, 5];

console.log(yangi); // [1, 2, 3, 4, 5]
```

```js
let user = { name: "Ali", age: 30 };
let copy = { ...user, city: "Toshkent" };

console.log(copy);
// { name: "Ali", age: 30, city: "Toshkent" }
```

---

### 📥 Rest — ko‘p qiymatni bitta joyda yig‘ish:

```js
function yigindi(...raqamlar) {
  console.log(raqamlar); // arrayga aylanadi
}

yigindi(1, 2, 3, 4); // [1, 2, 3, 4]
```

```js
let [bir, ...qolgan] = [10, 20, 30, 40];
console.log(bir);     // 10
console.log(qolgan);  // [20, 30, 40]
```

---

## 3. 🧵 **Template Literals (\`\` backtick bilan)**

```js
let ism = "Ali";
let yosh = 24;

let matn = `Mening ismim ${ism} va yoshim ${yosh}da`;
console.log(matn);
// Mening ismim Ali va yoshim 24da
```

> Qulay, o‘qilishi oson, ko‘p qatorli matn yozish mumkin.

```js
let xabar = `
Salom!
Siz tizimga muvaffaqiyatli kirdingiz.
Rahmat!
`;

console.log(xabar);
```

---

## 4. ❓ **Optional Chaining (`?.`)**

> Mavjud bo‘lmagan qiymatga murojaat qilganingizda `undefined` chiqadi, **xatolik bo‘lmaydi**.

```js
let user = {
  name: "Ziyoda",
  contact: {
    email: "zi@mail.com"
  }
};

console.log(user.contact?.email); // zi@mail.com
console.log(user.social?.instagram); // undefined (xatolik chiqmaydi!)
```

---

## 🧠 Yakuniy eslatmalar

| Texnika             | Foyda                                                  |
| ------------------- | ------------------------------------------------------ |
| `Destructuring`     | Object/array dan qiymatlarni ajratib olish             |
| `Spread (...)`      | Ma’lumotni yoyish (array, object)                      |
| `Rest (...)`        | Ko‘p qiymatni bitta joyga yig‘ish (funksiya parametri) |
| `Template literals` | Matnlarni qulay yozish                                 |
| `Optional chaining` | Xatolarsiz chuqur obyektga murojaat qilish             |

---
</details>

<details>
<summary>
🎯 JavaScript Events va Event Delegation
</summary>

---

# 🎯 JavaScript Events va Event Delegation

Zamonaviy web dasturlashda foydalanuvchi o'zaro ta'sirini boshqarish bo'yicha to'liq qo'llanma.

---

## 📚 O'rganish Maqsadlari

Ushbu darslik tugagandan so'ng siz quyidagilarni tushunasiz:

1. **Event Asoslari** - Eventlar nima va qanday ishlaydi
2. **Event Boshqarish Usullari** - Eventlarni boshqarishning turli yondashuvlari
3. **Event Obyekti** - Event ma'lumotlariga kirish va xususiyatlari
4. **Event Tarqalishi** - Bubbling va capturing fazalari
5. **Event Delegation** - Dinamik kontent uchun samarali event boshqarish
6. **Eng Yaxshi Amaliyotlar** - Professional event boshqarish namunalari

---

## 1. 🎯 Eventlarni Tushunish

### Eventlar nima?

Eventlar - bu foydalanuvchilar web sahifalar bilan o'zaro ta'sir qilganda brauzerda yuzaga keladigan harakatlar yoki hodisalar. Ular interaktiv web dasturlarning asosidir.

**Keng tarqalgan Event turlari:**
- `click` - Sichqoncha bosishlari
- `mouseover` / `mouseout` - Sichqoncha hover
- `keydown` / `keyup` - Klaviatura kiritish
- `submit` - Forma yuborish
- `input` / `change` - Forma maydonlari o'zgarishi
- `load` / `DOMContentLoaded` - Sahifa yuklanishi
- `scroll` - Sahifa aylantirish
- `resize` - Oyna o'lchamini o'zgartirish

### Eventlar nima uchun muhim?

Eventlar quyidagilarni ta'minlaydi:
- Foydalanuvchi o'zaro ta'sirini boshqarish
- Dinamik kontent yangilashlari
- Forma tekshirish
- Responsive foydalanuvchi interfeyslari
- Real vaqt dasturlari

---

## 2. 🛠️ Event Boshqarish Usullari

### Usul 1: Inline Event Handlerlar (Tavsiya etilmaydi)

```html
<button onclick="handleClick()">Meni bos</button>
```

```javascript
function handleClick() {
    console.log('Tugma bosildi!');
}
```

**Bu yondashuvning muammolari:**
- HTML va JavaScriptni aralashtiradi
- Har bir element uchun faqat bitta handler
- Saqlash va debug qilish qiyin
- Yaxshi ajratish yo'q

### Usul 2: addEventListener (Tavsiya etiladi)

```html
<button id="myButton">Meni bos</button>
```

```javascript
const button = document.getElementById('myButton');

button.addEventListener('click', function(event) {
    console.log('Tugma bosildi!');
    console.log('Event:', event);
});
```

**Afzalliklari:**
- Toza ajratish
- Har bir element uchun bir nechta handler
- Yaxshiroq debug imkoniyatlari
- Professional standart

### Usul 3: Zamonaviy Arrow Function Sintaksisi

```javascript
const button = document.getElementById('myButton');

button.addEventListener('click', (event) => {
    console.log('Tugma bosildi!');
    console.log('Target element:', event.target);
});
```

---

## 3. 🎯 Event Obyekti

Har bir event handler event haqida ma'lumot o'z ichiga olgan event obyektini oladi.

### Asosiy Event Xususiyatlari

```javascript
element.addEventListener('click', (event) => {
    // Eventni qo'zg'atgan target element
    console.log('Target:', event.target);
    
    // Joriy element (listener biriktirilgan joy)
    console.log('Current target:', event.currentTarget);
    
    // Event turi
    console.log('Event type:', event.type);
    
    // Sichqoncha koordinatalari (sichqoncha eventlari uchun)
    console.log('Mouse X:', event.clientX);
    console.log('Mouse Y:', event.clientY);
    
    // Klaviatura tugmasi (klaviatura eventlari uchun)
    console.log('Key pressed:', event.key);
    
    // Standart xatti-harakatni oldini olish
    event.preventDefault();
    
    // Event tarqalishini to'xtatish
    event.stopPropagation();
});
```

### Keng tarqalgan Event Metodlari

| Metod | Maqsadi |
|-------|---------|
| `preventDefault()` | Brauzer standart xatti-harakatini oldini oladi |
| `stopPropagation()` | Eventning yuqoriga chiqishini to'xtatadi |
| `stopImmediatePropagation()` | Eventni to'xtatadi va boshqa handlerlarni oldini oladi |

---

## 4. 🌊 Event Tarqalishi: Bubbling va Capturing

DOM'dagi eventlar uchta fazadan iborat aniq tarqalish yo'lini kuzatadi:

1. **Capturing Fazasi** - Event ildizdan targetga pastga tushadi
2. **Target Fazasi** - Event target elementga yetadi
3. **Bubbling Fazasi** - Event targetdan ildizga yuqoriga ko'tariladi

### Bubblingni Tushunish

```html
<div id="parent" style="padding: 20px; border: 2px solid blue;">
    <button id="child" style="padding: 10px;">
        Meni bos
    </button>
</div>
```

```javascript
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Ota element event handleri
parent.addEventListener('click', (event) => {
    console.log('Ota bosildi');
    console.log('Event target:', event.target);
    console.log('Current target:', event.currentTarget);
});

// Bola element event handleri
child.addEventListener('click', (event) => {
    console.log('Bola bosildi');
    console.log('Event target:', event.target);
    console.log('Current target:', event.currentTarget);
});
```

**Tugma bosilganda chiqadigan natija:**
```
Bola bosildi
Event target: <button id="child">
Current target: <button id="child">
Ota bosildi
Event target: <button id="child">
Current target: <div id="parent">
```

### Capturing Fazasi

```javascript
// Uchinchi parametr 'true' capturingni yoqadi
parent.addEventListener('click', (event) => {
    console.log('Ota captured');
}, true);

child.addEventListener('click', (event) => {
    console.log('Bola captured');
}, true);
```

**Natija:**
```
Ota captured
Bola captured
Bola bosildi
Ota bosildi
```

---

## 5. ♻️ Event Delegation

Event delegation - bu ota elementga event listener biriktirib, bola elementlardan keladigan eventlarni boshqarish texnikasi, ayniqsa dinamik yaratilgan kontent uchun foydali.

### Event Delegation nima uchun ishlatiladi?

1. **Samaradorlik** - Kamroq event listener
2. **Dinamik Kontent** - Keyinchalik qo'shilgan elementlar bilan ishlaydi
3. **Xotira Samaradorligi** - Xotira sarfini kamaytiradi
4. **Saqlash** - Markazlashtirilgan event boshqarish

### Asosiy Event Delegation

```html
<ul id="todoList">
    <li>Vazifa 1</li>
    <li>Vazifa 2</li>
    <li>Vazifa 3</li>
</ul>
```

```javascript
const todoList = document.getElementById('todoList');

// Barcha ro'yxat elementlari uchun bitta event listener
todoList.addEventListener('click', (event) => {
    // Bosilgan element ro'yxat elementi ekanligini tekshirish
    if (event.target.tagName === 'LI') {
        console.log('Bosilgan vazifa:', event.target.textContent);
        event.target.style.textDecoration = 'line-through';
    }
});
```

### Dinamik Kontent bilan Kengaytirilgan Event Delegation

```html
<div id="container">
    <button id="addButton">Element qo'shish</button>
    <ul id="dynamicList"></ul>
</div>
```

```javascript
const container = document.getElementById('container');
const addButton = document.getElementById('addButton');
const dynamicList = document.getElementById('dynamicList');

// Yangi elementlarni dinamik ravishda qo'shish
addButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `Element ${Date.now()}`;
    dynamicList.appendChild(newItem);
});

// Barcha ro'yxat elementlari uchun event delegation (kelajakdakilar ham)
dynamicList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});

// Container'ning o'ziga bosishni boshqarish
container.addEventListener('click', (event) => {
    if (event.target.id === 'addButton') {
        console.log('Qo\'shish tugmasi bosildi');
    } else if (event.target.tagName === 'LI') {
        console.log('Ro\'yxat elementi bosildi:', event.target.textContent);
    }
});
```

---

## 6. 💡 Haqiqiy Hayotiy Misollar

### Misol 1: Forma Tekshirish va Yuborish

```html
<form id="contactForm">
    <input type="text" id="name" placeholder="Ism" required>
    <input type="email" id="email" placeholder="Email" required>
    <textarea id="message" placeholder="Xabar" required></textarea>
    <button type="submit">Xabar yuborish</button>
</form>
```

```javascript
const form = document.getElementById('contactForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Formani tekshirish
    if (!data.name || !data.email || !data.message) {
        alert('Iltimos, barcha maydonlarni to\'ldiring');
        return;
    }
    
    // Forma yuborishni simulyatsiya qilish
    console.log('Forma ma\'lumotlari:', data);
    alert('Xabar muvaffaqiyatli yuborildi!');
    form.reset();
});

// Real vaqtda tekshirish
form.addEventListener('input', (event) => {
    const field = event.target;
    const value = field.value.trim();
    
    if (field.hasAttribute('required') && !value) {
        field.style.borderColor = 'red';
    } else {
        field.style.borderColor = 'green';
    }
});
```

### Misol 2: Interaktiv UI Komponentlari

```html
<div id="accordion">
    <div class="accordion-item">
        <h3 class="accordion-header">Bo'lim 1</h3>
        <div class="accordion-content">
            <p>Bu bo'lim 1 uchun kontent.</p>
        </div>
    </div>
    <div class="accordion-item">
        <h3 class="accordion-header">Bo'lim 2</h3>
        <div class="accordion-content">
            <p>Bu bo'lim 2 uchun kontent.</p>
        </div>
    </div>
</div>
```

```javascript
const accordion = document.getElementById('accordion');

accordion.addEventListener('click', (event) => {
    const header = event.target.closest('.accordion-header');
    
    if (header) {
        const item = header.parentElement;
        const content = item.querySelector('.accordion-content');
        
        // Faol holatni almashtirish
        const isActive = item.classList.contains('active');
        
        // Barcha elementlarni yopish
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.accordion-content').style.display = 'none';
        });
        
        // Bosilgan elementni ochish agar u faol bo'lmasa
        if (!isActive) {
            item.classList.add('active');
            content.style.display = 'block';
        }
    }
});
```

### Misol 3: Klaviatura Navigatsiyasi

```html
<div id="keyboardDemo">
    <div class="box" tabindex="0">Quti 1</div>
    <div class="box" tabindex="0">Quti 2</div>
    <div class="box" tabindex="0">Quti 3</div>
</div>
```

```javascript
const keyboardDemo = document.getElementById('keyboardDemo');

keyboardDemo.addEventListener('keydown', (event) => {
    const boxes = Array.from(document.querySelectorAll('.box'));
    const currentIndex = boxes.findIndex(box => box === document.activeElement);
    
    switch (event.key) {
        case 'ArrowRight':
            event.preventDefault();
            const nextIndex = (currentIndex + 1) % boxes.length;
            boxes[nextIndex].focus();
            break;
            
        case 'ArrowLeft':
            event.preventDefault();
            const prevIndex = currentIndex === 0 ? boxes.length - 1 : currentIndex - 1;
            boxes[prevIndex].focus();
            break;
            
        case 'Enter':
        case ' ':
            event.preventDefault();
            event.target.style.backgroundColor = 'yellow';
            break;
    }
});
```

---

## 7. 🎯 Eng Yaxshi Amaliyotlar

### ✅ Qilish kerak

```javascript
// ✅ Inline handlerlar o'rniga addEventListener ishlatish
element.addEventListener('click', handleClick);

// ✅ Dinamik kontent uchun event delegation ishlatish
parent.addEventListener('click', (event) => {
    if (event.target.matches('.dynamic-item')) {
        handleItemClick(event);
    }
});

// ✅ Kerak bo'lmaganda event listenerlarni olib tashlash
const handler = () => console.log('Boshqarildi');
element.addEventListener('click', handler);
element.removeEventListener('click', handler);

// ✅ Forma yuborish uchun preventDefault() ishlatish
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Forma yuborishni boshqarish
});

// ✅ Boshqarishdan oldin event targetni tekshirish
element.addEventListener('click', (event) => {
    if (event.target.matches('.button')) {
        handleButtonClick(event);
    }
});
```

### ❌ Qilmaslik kerak

```javascript
// ❌ Inline event handlerlarni ishlatmaslik
<button onclick="handleClick()">Bos</button>

// ❌ Har bir bola elementga listener biriktirmaslik
items.forEach(item => {
    item.addEventListener('click', handler); // Samarasiz
});

// ❌ Kerak bo'lganda preventDefault() ni unutmaslik
link.addEventListener('click', (event) => {
    // Navigatsiyani oldini olish uchun event.preventDefault() yo'q
});

// ❌ Arrow functionlarda 'this' ishlatmaslik
element.addEventListener('click', () => {
    console.log(this); // Arrow functionlarda 'this' undefined
});
```

---

## 8. 🧠 Xulosa

| Tushuncha | Maqsadi | Qachon ishlatiladi |
|-----------|---------|-------------------|
| `addEventListener` | Professional event boshqarish | Har doim inline handlerlardan ustun |
| Event Obyekti | Event ma'lumotlariga kirish | Event ma'lumotlari kerak bo'lganda |
| `preventDefault()` | Standart xatti-harakatni to'xtatish | Forma yuborish, link bosish |
| `stopPropagation()` | Event oqimini boshqarish | Eventlarni izolyatsiya qilish kerak bo'lganda |
| Event Delegation | Dinamik kontentni boshqarish | Ro'yxatlar, jadvallar, dinamik UI |
| Bubbling | Event oqimini tushunish | Debug qilish, event delegation |
| Capturing | Erta event boshqarish | Kam, kengaytirilgan holatlar |

---

---

# 🔟 JavaScript Events va Event Delegation bo‘yicha Mashqlar

---

### **1. Tugma bosilganda xabar chiqaring**

**Vazifa:** HTML sahifada bitta `<button>` yarating. U bosilganda `alert("Salom, foydalanuvchi!")` chiqsin.

📌 *Yordam:* `addEventListener("click", function(){ ... })` dan foydalaning.

---

### **2. Input maydoniga yozilgan matnni ko‘rsating**

**Vazifa:** Inputga yozilgan matnni avtomatik ravishda `<p>` ichida chiqaring.

📌 *Event:* `input`

```html
<input type="text" id="ism" placeholder="Ismingizni kiriting" />
<p id="natija"></p>
```

---

### **3. Form yuborilishini to‘xtating**

**Vazifa:** Form yuborilganda sahifa qayta yuklanmasligi uchun `preventDefault()` ishlating va alertda “Forma qabul qilindi” degan xabar chiqaring.

📌 *Event:* `submit`

---

### **4. Hover qilganda rangni o‘zgartiring**

**Vazifa:** `<div>` elementiga sichqoncha keltirilganda (`mouseover`) fon rangi ko‘k bo‘lsin, sichqoncha olib chiqilganda (`mouseout`) yana oq bo‘lsin.

📌 *Event:* `mouseover`, `mouseout`

---

### **5. Dinamik `<li>` qo‘shish va ustiga bosganda alert chiqish**

**Vazifa:** Tugma bosilganda yangi `<li>` element yaratilsin. Har bir `li` bosilganda uning ichidagi matn alertda chiqsin. (Event Delegation)

📌 *Event:* `click` — parent elementga qo‘shing.

---

### **6. Klaviatura bosilganini kuzatish**

**Vazifa:** Foydalanuvchi inputga yozayotgan har bir belgini `console.log()`da chiqaring.

📌 *Event:* `keydown` yoki `keyup`

---

### **7. Faqat raqam kiritishga ruxsat bering**

**Vazifa:** Foydalanuvchi inputga harf yozmoqchi bo‘lsa, `alert("Faqat raqam kiritish mumkin!")` chiqsin va yozilmasin.

📌 *Event:* `keydown` + `event.preventDefault()`

---

### **8. Div bosilganda hajmini 2 baravar kattalashtiring**

**Vazifa:** `<div>` bosilganda `width` va `height` qiymatlari 2 baravar ko‘paytirilishi kerak.

📌 *Event:* `click` + `element.style.width = ...`

---

### **9. Dinamik tugmalar — har biriga event biriktiring**

**Vazifa:** Sahifaga 5 ta tugma JS orqali qo‘shilsin. Har birini bosganda o‘z tartib raqamini alert qiladigan tizim tuzing. (Event Delegation tavsiya etiladi)

---

### **10. Raqamlarni bosganingizda ularni jamlang**

**Vazifa:** `<ul>` ichida `<li>`larda raqamlar berilgan bo‘lsin. Foydalanuvchi istalgan `li`larga bosganida u raqamlar jamlanib, umumiy natija ko‘rsatilishi kerak.

📌 *Event Delegation* orqali `ul`da `click` event qo‘shing. `event.target.textContent` yordamida raqamni oling.

---

</details>


<details>
<summary>Form Validation va Input Handling</summary>
---

# ✅ **Form Validation va Input Handling**

---

## 🎯 Bu darsda siz o‘rganasiz:

1. `input`, `change`, `submit` hodisalari
2. Form maydonlarini o‘qish va tekshirish
3. `required`, `minLength`, `type`, `pattern` kabi HTML atributlar
4. JavaScript orqali validatsiya (handmade validation)
5. `preventDefault()` bilan formani to‘xtatish
6. Xatolik va muvaffaqiyatli holatlarni ko‘rsatish (styling va JS orqali)

---

## 1. 🧾 Form elementlarida hodisalar

```html
<form id="loginForm">
  <input type="text" id="username" />
  <input type="password" id="password" />
  <button type="submit">Kirish</button>
</form>
```

```js
let form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Forma yuborildi");
});
```

> `submit` hodisasi form tugmasi bosilganda ishga tushadi.
> `preventDefault()` orqali sahifa qayta yuklanishini to‘xtatamiz.

---

## 2. 🧪 Input qiymatini olish

```js
let ism = document.getElementById("username").value;
console.log("Foydalanuvchi ismi:", ism);
```

> `.value` — input yoki textarea’dagi qiymatni olish uchun ishlatiladi.

---

## 3. 🔐 HTML5 orqali validatsiya

```html
<input type="email" required />
<input type="text" minlength="3" />
<input type="text" pattern="[A-Za-z]+" />
```

| Atribut        | Nima qiladi                        |
| -------------- | ---------------------------------- |
| `required`     | Bo‘sh qoldirib bo‘lmaydi           |
| `minlength`    | Belgilar soni kamida necha bo‘lsin |
| `pattern`      | Regex orqali format tekshirish     |
| `type="email"` | Email format bo‘yicha tekshiradi   |

---

## 4. ✅ JavaScript bilan validatsiya qilish

```js
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username.length < 3) {
    alert("Foydalanuvchi ismi kamida 3 ta belgidan iborat bo‘lishi kerak");
    return;
  }

  if (password.length < 6) {
    alert("Parol kamida 6 belgidan iborat bo‘lishi kerak");
    return;
  }

  alert("Kirish muvaffaqiyatli!");
});
```

---

## 5. 🎨 Xatoliklarni ko‘rsatish

```html
<input type="text" id="email" />
<small id="error"></small>
```

```js
let email = document.getElementById("email");
let error = document.getElementById("error");

email.addEventListener("input", function () {
  if (!email.value.includes("@")) {
    error.textContent = "Emailda '@' belgisi bo‘lishi kerak";
    error.style.color = "red";
  } else {
    error.textContent = "";
  }
});
```

---

## 6. 🔄 `change` va `input` hodisalari farqi

| Hodisa   | Qachon ishga tushadi          |
| -------- | ----------------------------- |
| `input`  | Har bir harf kiritilganda     |
| `change` | Inputdan chiqilganda (`blur`) |

---

## 7. 🔁 Radio va checkboxlar bilan ishlash

```html
<input type="radio" name="gender" value="male" /> Erkak  
<input type="radio" name="gender" value="female" /> Ayol
```

```js
let tanlangan = document.querySelector('input[name="gender"]:checked');
console.log(tanlangan.value);
```

---

## 8. 🎓 Real hayotiy forma: Ro‘yxatdan o‘tish

```html
<form id="register">
  <input type="text" id="username" placeholder="Ism" required />
  <input type="email" id="email" placeholder="Email" required />
  <input type="password" id="password" placeholder="Parol" required />
  <button type="submit">Ro‘yxatdan o‘tish</button>
</form>
```

```js
document.getElementById("register").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!email.includes("@")) {
    alert("Email xato");
    return;
  }

  if (password.length < 6) {
    alert("Parol juda qisqa");
    return;
  }

  alert("Ro‘yxatdan o‘tish muvaffaqiyatli!");
});
```

---

## ✅ Xulosa

| Tushuncha                     | Foydasi                                  |
| ----------------------------- | ---------------------------------------- |
| `submit` + `preventDefault()` | Forma avtomatik yuborilishini to‘xtatadi |
| `.value`                      | Input qiymatini olish                    |
| HTML5 atributlari             | Tez va oson validatsiya                  |
| JS bilan tekshirish           | Moslashuvchan, murakkab shartlar         |
| `input` hodisasi              | Real vaqtli tekshiruv                    |

---
</details>