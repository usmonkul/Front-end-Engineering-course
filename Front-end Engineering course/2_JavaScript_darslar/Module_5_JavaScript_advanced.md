<details>
<summary>
Asynchronous JavaScript
</summary>

---

# ⏳ 15. Asynchronous JavaScript

**Callbacks → Promises → Async/Await**

Zamonaviy web dasturlashda asinxronlikni boshqarish bo'yicha to'liq qo'llanma.

---

## 📚 O'rganish Maqsadlari

Ushbu darslik tugagandan so'ng siz quyidagilarni tushunasiz:

1. **Asinxronlik Asoslari** - Nima va nima uchun muhim
2. **Event Loop** - JavaScript qanday ishlaydi
3. **Callbacks** - Asinxronlikning birinchi usuli
4. **Promises** - Callback Hell muammosiga yechim
5. **Async/Await** - Zamonaviy va o'qilishi oson usul
6. **Real-world Examples** - Haqiqiy loyihalarda qo'llash

---

## 🧠 Asinxronlik nima?

JavaScript — bu **bir oqimli (single-threaded)** til. Bu shuni anglatadiki, JS bir vaqtning o'zida **faqat bitta vazifani** bajaradi. Agar og'ir yoki kechikuvchi ish (masalan, serverga murojaat) bajarilsa, **asosiy oqim bloklanmasligi uchun** JS bu ishni "fon rejimida" bajaradi — buni **asynchronous programming** deyiladi.

### 🎯 Nima uchun asinxronlik muhim?

- **Foydalanuvchi tajribasi** - Sahifa bloklanmaydi
- **Samaradorlik** - Bir nechta ishlarni parallel bajarish
- **Real vaqt dasturlari** - Ma'lumotlarni kutish
- **API integratsiyasi** - Server bilan o'zaro ta'sir

### 🔄 Event Loop qanday ishlaydi?

```javascript
console.log('1. Boshladik');

setTimeout(() => {
    console.log('3. Timeout tugadi');
}, 0);

console.log('2. Davom etamiz');

// Natija:
// 1. Boshladik
// 2. Davom etamiz
// 3. Timeout tugadi
```

---

## 1️⃣ Callbacks — Asinxronlikning ilk usuli

### 🔍 Nima bu?

**Callback** — bu boshqa funksiyaga **argument sifatida beriladigan funksiya**. U asosan qandaydir ish tugagach chaqiriladi.

### ✅ Oddiy misol:

```javascript
function yuklabOlish(callback) {
    console.log("Yuklash boshlandi...");
    setTimeout(function () {
        console.log("Yuklash tugadi!");
        callback();
    }, 2000);
}

function tayyor() {
    console.log("Ishga tayyormiz!");
}

yuklabOlish(tayyor);
```

### 📝 Tushuntirish:

* `yuklabOlish` funksiyasi 2 soniya kutadi (setTimeout)
* So'ng `callback()` — bu yerda `tayyor` chaqiriladi

### ⚠️ Muammo: Callback Hell

```javascript
getUser(function(user) {
    getPosts(user.id, function(posts) {
        getComments(posts[0].id, function(comments) {
            getReplies(comments[0].id, function(replies) {
                // va h.k. - bu juda qiyin o'qiladi!
            });
        });
    });
});
```

**Muammolar:**
- O'qish qiyin
- Xatoliklarni tutish qiyin
- Debug qilish mushkul
- Kod saqlash qiyin

---

## 2️⃣ Promises — Muammoga yechim

### 🔍 Nima bu?

**Promise** — bu "va'da": ya'ni, JS sizga **hozircha natija yo'q, lekin bo'ladi** deb va'da beradi. U 3 holatda bo'ladi:

* `pending` – kutish holati
* `fulfilled` – muvaffaqiyatli bajarildi
* `rejected` – xato yuz berdi

### ✅ Asosiy misol:

```javascript
let promise = new Promise(function (resolve, reject) {
    let yuklandi = true;

    if (yuklandi) {
        resolve("Yuklash muvaffaqiyatli!");
    } else {
        reject("Xatolik yuz berdi!");
    }
});

promise
    .then(function (javob) {
        console.log(javob);
    })
    .catch(function (xato) {
        console.log("Xato:", xato);
    });
```

### 📝 Tushuntirish:

* `resolve()` — ish muvaffaqiyatli tugasa chaqiriladi
* `reject()` — xatolik yuz bersa
* `.then()` — muvaffaqiyatli javobni tutadi
* `.catch()` — xatoni tutadi

### 🔗 Promise Chaining — Ketma-ket `.then()`

```javascript
function sonniIkkiBarobarQil(son) {
    return new Promise(function (resolve) {
        resolve(son * 2);
    });
}

sonniIkkiBarobarQil(5)
    .then((res1) => {
        console.log("1-natija:", res1); // 10
        return sonniIkkiBarobarQil(res1);
    })
    .then((res2) => {
        console.log("2-natija:", res2); // 20
        return sonniIkkiBarobarQil(res2);
    })
    .then((res3) => {
        console.log("3-natija:", res3); // 40
    })
    .catch((xato) => {
        console.log("Xato:", xato);
    });
```

### 🎯 Promise.all() - Bir nechta Promise'larni kutish

```javascript
const promise1 = new Promise(resolve => setTimeout(() => resolve('1-tayyor'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('2-tayyor'), 2000));
const promise3 = new Promise(resolve => setTimeout(() => resolve('3-tayyor'), 1500));

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log('Barchasi tayyor:', results);
        // ['1-tayyor', '2-tayyor', '3-tayyor']
    })
    .catch(xato => {
        console.log('Xatolik:', xato);
    });
```

---

## 3️⃣ `async/await` — Eng zamonaviy va o'qilishi oson usul

### 🔍 Nima bu?

* `async` — funksiyani Promise qaytaruvchi qilib belgilaydi
* `await` — Promise natijasini kutadi (faqat `async` funksiyada ishlaydi)

### ✅ Asosiy misol:

```javascript
function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ishniBajar() {
    console.log("Boshladik...");
    await wait(2000);
    console.log("2 soniya o'tdi");
    console.log("Tugadi!");
}

ishniBajar();
```

### ⚠️ Xatolarni tutish — try/catch bilan

```javascript
async function bajarish() {
    try {
        let res = await Promise.reject("Noto'g'ri!");
        console.log(res);
    } catch (xato) {
        console.log("Xato yuz berdi:", xato);
    }
}

bajarish();
```

### 🔄 Callback Hell'ni async/await bilan hal qilish

```javascript
// Callback Hell (qiyin):
getUser(function(user) {
    getPosts(user.id, function(posts) {
        getComments(posts[0].id, function(comments) {
            console.log(comments);
        });
    });
});

// Async/Await (oson):
async function getData() {
    try {
        const user = await getUser();
        const posts = await getPosts(user.id);
        const comments = await getComments(posts[0].id);
        console.log(comments);
    } catch (xato) {
        console.log('Xato:', xato);
    }
}
```

---

## 4️⃣ Real-world Examples

### 📡 API dan ma'lumot olish

```javascript
async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const userData = await response.json();
        return userData;
    } catch (xato) {
        console.error('Ma\'lumot olishda xato:', xato);
        throw xato;
    }
}

// Ishlatish:
fetchUserData(123)
    .then(user => {
        console.log('Foydalanuvchi:', user);
    })
    .catch(xato => {
        console.log('Xato:', xato);
    });
```

### 📁 Fayl o'qish (Node.js)

```javascript
const fs = require('fs').promises;

async function readAndProcessFile(filename) {
    try {
        const content = await fs.readFile(filename, 'utf8');
        const processedData = content.toUpperCase();
        
        await fs.writeFile(`processed_${filename}`, processedData);
        console.log('Fayl muvaffaqiyatli qayta ishlangan');
        
        return processedData;
    } catch (xato) {
        console.error('Fayl bilan ishlashda xato:', xato);
        throw xato;
    }
}
```

### ⏰ Vaqtli ishlar

```javascript
async function showLoadingSteps() {
    const steps = ['Yuklanmoqda...', 'Tayyorlanmoqda...', 'Tugadi!'];
    
    for (let i = 0; i < steps.length; i++) {
        console.log(steps[i]);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

showLoadingSteps();
```

### 🔄 Parallel ishlar

```javascript
async function parallelTasks() {
    const tasks = [
        fetch('https://api.example.com/users'),
        fetch('https://api.example.com/posts'),
        fetch('https://api.example.com/comments')
    ];
    
    try {
        const results = await Promise.all(tasks);
        const data = await Promise.all(results.map(r => r.json()));
        
        console.log('Barcha ma\'lumotlar:', data);
        return data;
    } catch (xato) {
        console.error('Parallel ishlarda xato:', xato);
    }
}
```

---

## 5️⃣ Best Practices

### ✅ Qilish kerak

```javascript
// ✅ Try/catch ishlatish
async function safeFunction() {
    try {
        const result = await riskyOperation();
        return result;
    } catch (xato) {
        console.error('Xato:', xato);
        throw xato;
    }
}

// ✅ Promise.all() parallel ishlar uchun
const promises = [task1(), task2(), task3()];
const results = await Promise.all(promises);

// ✅ Timeout qo'shish
async function withTimeout(promise, timeout) {
    const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout')), timeout)
    );
    
    return Promise.race([promise, timeoutPromise]);
}

// ✅ Error handling
async function robustFunction() {
    try {
        const data = await fetchData();
        return processData(data);
    } catch (xato) {
        if (xato.name === 'NetworkError') {
            return fallbackData();
        }
        throw xato;
    }
}
```

### ❌ Qilmaslik kerak

```javascript
// ❌ Async funksiyada await'siz Promise
async function wrong() {
    const promise = fetch('/api/data');
    console.log(promise); // Promise object, natija emas
}

// ❌ Try/catch'siz async/await
async function dangerous() {
    const data = await fetch('/api/data'); // Xato bo'lsa crash
}

// ❌ Ortiqcha nested async
async function overNested() {
    const result = await (await (await someAsyncFunction()));
}
```

---

## 🧠 Xulosa jadvali

| Usul        | Afzalliklari                        | Kamchiliklari                        |
| ----------- | ----------------------------------- | ------------------------------------ |
| Callback    | Eng oddiy, brauzerda mavjud         | Callback Hell, no'qonuniy o'qish     |
| Promise     | Chain qilish, xatolarni tutish oson | Ko'proq kod yozish talab qilinadi    |
| Async/Await | O'qilishi oson, toza kod            | Faqat `async` funksiyalarda ishlaydi |

---

## 📌 Real hayotda qayerda ishlatiladi?

* **Ma'lumotlarni serverdan olish** (`fetch`, `axios`)
* **API'lar bilan ishlash** (REST, GraphQL)
* **Fayllarni yuklab olish** va saqlash
* **Vaqtli kutish** (`setTimeout`, loaderlar)
* **LocalStorage** bilan ishlashdan keyin sahifa yangilash
* **WebSocket** real-time ma'lumotlar
* **Database** operatsiyalari

---

# 10 ta Asynchronous JavaScript Challenge

---

## ✅ 1. **Kechikish bilan salom berish**

**Daraja:** oson
**Tushuntirish:**
`setTimeout` yordamida 2 soniyadan so‘ng `alert("Salom, dunyo!")` chiqishini ta’minlang.
**Maqsad:** Callback va setTimeout’ni tushunish.

---

## ✅ 2. **3 marta ketma-ket yozuv chiqarish (callback hell)**

**Daraja:** o‘rtacha
**Tushuntirish:**
Quyidagi chiqishni yaratish kerak:

```
1-soniya: Yuklanmoqda...
2-soniya: Tekshirilmoqda...
3-soniya: Tayyor!
```

Har bir yozuv `setTimeout` orqali bosqichma-bosqich chiqsin.
**Maqsad:** Callback hellni his qilish.

---

## ✅ 3. **Berilgan sonni 2 barobar qiluvchi Promise**

**Daraja:** oson
**Tushuntirish:**
Berilgan sondan Promise yaratib, uni 2 barobar qilib `.then()` orqali natijani konsolga chiqaring.
**Misol:** `kirit: 5 → chiq: 10`
**Maqsad:** Promise qanday ishlashini amalda ko‘rish.

---

## ✅ 4. **Ikkita ketma-ket Promise chaining**

**Daraja:** o‘rtacha
**Tushuntirish:**
Avval birinchi Promise sonni 10 ga ko‘paytirsin, ikkinchi Promise unga 100 ni qo‘shsin. Chaining orqali yakuniy natijani chiqaring.
**Maqsad:** `.then().then()` zanjirini tushunish.

---

## ✅ 5. **Fetch o‘rniga soxta API**

**Daraja:** o‘rtacha
**Tushuntirish:**
`getUser()` nomli funksiya yarating. Bu funksiya 1.5 sekunddan so‘ng Promise orqali `{ name: "Ali", age: 25 }` obyektini qaytarsin. `async/await` orqali chaqirib, konsolga chiqaring.
**Maqsad:** Promise → async/await o‘tishini tushunish.

---

## ✅ 6. **Yuklash indikatorini simulyatsiya qilish**

**Daraja:** o‘rtacha
**Tushuntirish:**
`console.log("Yuklanmoqda...")` deb chiqsin. 2 sekunddan so‘ng "Ma’lumot tayyor!" chiqsin.
Ammo bu jarayon `async function` ichida `await` orqali bo‘lishi kerak.
**Maqsad:** `await`ni kutish mexanizmini amalda qo‘llash.

---

## ✅ 7. **Xato holatini tuting**

**Daraja:** o‘rtacha
**Tushuntirish:**
`Promise.reject("Server xatosi!")` orqali xatolik yuboring va `.catch()` bilan xatoni konsolga chiqaring.
**Maqsad:** `catch` bilan error handling.

---

## ✅ 8. **Foydalanuvchi nomini kiritish va kechikib ko‘rsatish**

**Daraja:** murakkab
**Tushuntirish:**

* `prompt` orqali ism oling
* 3 sekunddan keyin `console.log("Salom, <ism>")` chiqsin
* `async/await` bilan yozilsin
  **Maqsad:** `prompt + await` birgalikda ishlatilishi

---

## ✅ 9. **Tasodifiy raqamlar generatori (Promise bilan)**

**Daraja:** murakkab
**Tushuntirish:**
`randomNumber()` nomli Promise funksiyani yozing. U 1 sekunddan so‘ng 0 dan 10 gacha tasodifiy son qaytarsin.
3 marta ketma-ket chaqirib, har bir natijani chiqaring.
**Maqsad:** Chaining + random generation.

---

## ✅ 10. **Ma’lumotlarni ketma-ket yuklash simulyatsiyasi**

**Daraja:** murakkab
**Tushuntirish:**
3 ta `async` funksiya bo‘lsin:

* `getUser()` → 1s → `{ id: 1 }`
* `getPosts(userId)` → 1.5s → `[post1, post2]`
* `getComments(postId)` → 1s → `[comment1, comment2]`

Ketma-ket chaqirib, oxirgi natijani konsolga chiqaring.
**Maqsad:** Real hayotdagi async zanjirni ko‘rsatish.

---

</details>

<details>
<summary>
    Working with APIs (fetch)
</summary>
---

# Working with APIs (fetch)

---

## 🔍 API nima?

**API (Application Programming Interface)** — bu ilovalar o‘zaro “gaplashish”i uchun yaratilgan “ko‘prik”.

Agar siz internetdagi serverdan ma’lumot olishni xohlasangiz (masalan, ob-havo, yangiliklar, foydalanuvchi ro‘yxati va hokazo), **API orqali** so‘rov (request) yuborasiz va **javob (response)** olasiz.

---

## 📡 HTTP So‘rov turlari:

* `GET` – ma’lumotni olish
* `POST` – yangi ma’lumot yuborish
* `PUT/PATCH` – ma’lumotni yangilash
* `DELETE` – ma’lumotni o‘chirish

Biz bu darsda **GET** va **POST** so‘rovlarini o‘rganamiz.

---

## 🔧 `fetch()` — JavaScriptda API bilan ishlash

`fetch()` — bu JavaScript’da API so‘rovi yuborish uchun ishlatiladigan funksiyadir. U **Promise** qaytaradi, shuning uchun `.then()` yoki `async/await` bilan ishlatiladi.

---

## 1️⃣ `GET` — ma’lumot olish (fetch + then)

### ✅ Misol: JSON ma’lumotini olish

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json()) // JSON formatga o‘girish
  .then(data => {
    console.log("Foydalanuvchilar:", data);
  })
  .catch(error => {
    console.log("Xato:", error);
  });
```

### 🧠 Tushuntirish:

* `fetch(url)` – URL’ga so‘rov yuboradi
* `response.json()` – qaytgan javobni JS obyektga aylantiradi
* `.then(data => ...)` – natijani ishlatish
* `.catch()` – xatolik bo‘lsa tutadi

---

## 2️⃣ `POST` — ma’lumot yuborish (fetch + method + body)

### ✅ Misol: Foydalanuvchi qo‘shish

```js
const foydalanuvchi = {
  name: "Ali",
  email: "ali@example.com"
};

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(foydalanuvchi)
})
  .then(response => response.json())
  .then(data => {
    console.log("Yangi foydalanuvchi:", data);
  })
  .catch(error => {
    console.log("Xatolik:", error);
  });
```

### 🧠 Tushuntirish:

* `method: "POST"` – bu POST so‘rov
* `headers` – JSON yuborayotganingizni bildiradi
* `body` – yuborilayotgan ma’lumot (avval `JSON.stringify()` qilinadi)

---

## 3️⃣ `GET` + `async/await` bilan yozish (zamonaviy usul)

```js
async function foydalanuvchilarniYuklash() {
  try {
    const javob = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await javob.json();
    console.log("Foydalanuvchilar:", data);
  } catch (xato) {
    console.log("Xatolik:", xato);
  }
}

foydalanuvchilarniYuklash();
```

---

## 4️⃣ `POST` + `async/await` bilan yozish

```js
async function yangiFoydalanuvchiYubor() {
  const foydalanuvchi = {
    name: "Gulnoza",
    email: "gulnoza@mail.com"
  };

  try {
    const javob = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(foydalanuvchi)
    });

    const data = await javob.json();
    console.log("Yuborilgan foydalanuvchi:", data);
  } catch (xato) {
    console.log("Xatolik:", xato);
  }
}

yangiFoydalanuvchiYubor();
```

---

## 🔒 Error catching — qanday xatoliklar bo‘lishi mumkin?

* Internet yo‘q
* API manzili noto‘g‘ri
* Server xatoligi (status code 500, 404)
* `response.ok` ni tekshirish foydali

```js
const res = await fetch(...);
if (!res.ok) {
  throw new Error("Ma’lumot olinmadi");
}
```

---

## 📌 Haqiqiy hayotda ishlatiladigan misollar

* Ob-havo ilovasi (weather API)
* Chat ilovasi (xabar yuborish va olish)
* Contact formni backendga yuborish
* Ro‘yxatdan o‘tish / kirish tizimlari
* Foydalanuvchi ro‘yxatini yuklab olish

---

## 🧪 Amaliyot uchun tavsiyalar

1. `https://jsonplaceholder.typicode.com/` saytida barcha GET/POST resurslarni mashq qiling.
2. Har bir foydalanuvchini `console.log()` o‘rniga `document.createElement()` bilan sahifada chiqaring.
3. `async/await` va `try/catch` bilan yozishga odatlaning.

---


</details>

<details>
<summary>
  Local Storage va Session Storage
</summary>

---

# 🗄️ Local Storage va Session Storage

---

## 🔍 Bu nima?

JavaScript’da siz ma’lumotlarni foydalanuvchining brauzerida saqlab qo‘yishingiz mumkin. Buning uchun ikkita asosiy imkoniyat mavjud:

| Xususiyat         | Local Storage                       | Session Storage                   |
| ----------------- | ----------------------------------- | --------------------------------- |
| Saqlanish muddati | Brauzer yopilgandan keyin ham       | Faqatgina sahifa ochiq turganda   |
| Hajm limiti       | \~5MB                               | \~5MB                             |
| Kirish            | `localStorage`                      | `sessionStorage`                  |
| Qo‘llanishi       | Avtorizatsiya, sozlamalar, savatcha | Vaqtinchalik holatlar (form step) |

---

## 🧪 Foydalanish sintaksisi

### 📝 CRUD degani nima?

* **C** – Create (Yaratish)
* **R** – Read (O‘qish)
* **U** – Update (Yangilash)
* **D** – Delete (O‘chirish)

---

## 🧱 Local Storage bilan ishlash

### 🔹 1. Create / Set (ma’lumot yozish)

```js
localStorage.setItem("ism", "Ali");
```

---

### 🔹 2. Read (o‘qish)

```js
let ism = localStorage.getItem("ism");
console.log(ism); // "Ali"
```

---

### 🔹 3. Update (o‘zgartirish)

```js
localStorage.setItem("ism", "Vali"); // eski ustiga yoziladi
```

---

### 🔹 4. Delete (bitta elementni o‘chirish)

```js
localStorage.removeItem("ism");
```

---

### 🔹 5. Clear (hammasini o‘chirish)

```js
localStorage.clear();
```

---

## 🔢 Raqamlar va obyektlar bilan ishlash

### ❌ Xatolik misoli:

```js
localStorage.setItem("yosh", 25);
let natija = localStorage.getItem("yosh");
console.log(typeof natija); // string! ❌
```

### ✅ To‘g‘ri usul:

```js
localStorage.setItem("yosh", JSON.stringify(25));
let yosh = JSON.parse(localStorage.getItem("yosh"));
console.log(typeof yosh); // number ✅
```

---

### ✅ Obyekt saqlash va olish:

```js
const user = {
  name: "Gulnoza",
  age: 22
};

// Saqlash
localStorage.setItem("user", JSON.stringify(user));

// Olish
const saqlangan = JSON.parse(localStorage.getItem("user"));
console.log(saqlangan.name); // "Gulnoza"
```

---

## 📦 Session Storage bilan ishlash

**Aynan localStorage bilan bir xil ishlaydi**, faqat nomi `sessionStorage` bo‘ladi:

```js
sessionStorage.setItem("token", "123abc");
let token = sessionStorage.getItem("token");
console.log(token);
```

### Eslatma:

* Brauzerni yopish bilan **sessionStorage yo‘qoladi**
* Foydalanuvchi ma’lumotlarini vaqtincha saqlash uchun yaxshi

---

## 🧰 Real hayotda qayerda ishlatiladi?

| Holat                               | Saqlash turi     |
| ----------------------------------- | ---------------- |
| Foydalanuvchi sozlamalari           | `localStorage`   |
| Savatchadagi mahsulotlar (cart)     | `localStorage`   |
| Formani vaqtincha to‘ldirish holati | `sessionStorage` |
| Token, login ma’lumotlari           | `sessionStorage` |
| Tanishuv oynasi 1 martalik          | `localStorage`   |

---

## 🔄 Local Storage bilan to‘liq misol

### 🎯 Mini misol: Ismni saqlovchi forma

```html
<input type="text" id="nameInput" placeholder="Ismingizni kiriting" />
<button onclick="saveName()">Saqlash</button>
<button onclick="loadName()">Ko‘rish</button>
<p id="output"></p>
```

```js
function saveName() {
  const ism = document.getElementById("nameInput").value;
  localStorage.setItem("myName", ism);
}

function loadName() {
  const ism = localStorage.getItem("myName");
  document.getElementById("output").innerText = `Salom, ${ism}!`;
}
```

---

## 🛑 E'tiborli jihatlar

* Faqat **string** saqlanadi → shuning uchun obyekt/array’ni `JSON.stringify` qilish kerak
* LocalStorage **foydalanuvchiga bog‘liq**: boshqa kompyuterlarda yoki inkognito rejimda yo‘q
* Juda katta hajm uchun emas (\~5MB limit)

---

## 📘 Yakuniy eslatma

* **localStorage** → uzoq muddatli ma’lumotlar uchun
* **sessionStorage** → vaqtincha, sahifa bilan cheklangan ma’lumotlar uchun
* JSON metodlarini unutmaslik kerak
* CRUD operatsiyalarini real loyihalarda sinab ko‘rish juda foydali

---

</details>


<details>
<summary>
  JavaScript Modules — `import` / `export`
</summary>

---

# JavaScript Modules — `import` / `export`

---

## 🔍 Module nima?

Modullar — bu katta JavaScript loyihasini kichik bo‘laklarga ajratish usulidir.

✅ Bu nima uchun kerak?

* Kodni **tartibli** saqlash
* Har bir fayl o‘z funksiyasiga ega bo‘ladi
* **Kodlar qayta ishlatiladi** (reusability)
* Loyihani **yaxshi boshqarish** osonlashadi

---

## 🧱 Oddiy qilib aytganda:

### Avval:

Barcha kod **bitta faylga** yozilar edi → chalkash, o‘qish qiyin.

### Endi:

Kodlar `modul1.js`, `modul2.js`, `main.js` kabi fayllarga **bo‘linadi**.

---

## 🔧 `export` va `import` sintaksisi

---

### ✅ 1. `export` — Nimadirni tashqariga chiqarish

#### a) O‘zgaruvchini chiqarish:

```js
// fayl: math.js
export const PI = 3.14;
```

#### b) Funksiyani chiqarish:

```js
export function kvadrat(x) {
  return x * x;
}
```

---

### ✅ 2. `import` — Boshqa fayldan chaqirish

```js
// fayl: main.js
import { PI, kvadrat } from "./math.js";

console.log(PI); // 3.14
console.log(kvadrat(5)); // 25
```

> ⚠️ Eslatma: **fayl nomi boshida `./` yozilishi kerak** va `.js` kengaytmasi ham bo‘lishi kerak.

---

## 🔹 `type="module"` — HTML’da modul bilan ishlash

Brauzer `import/export`ni tanishi uchun HTML faylda skript quyidagicha yozilishi shart:

```html
<script type="module" src="main.js"></script>
```

Bu yozilmasa, `import` ishlamaydi va xatolik beradi.

---

## ⚠️ Brauzerga oid cheklovlar

Modullar ishlashi uchun:

1. Fayllar **local server** orqali chaqirilishi kerak (VS Code’da `Live Server` orqali oching)
2. Fayllar **bir xil domen** yoki yo‘ldan bo‘lishi kerak
3. Fayl kengaytmasi `.js` bo‘lishi majburiy

---

## 🔄 Default export

Agar bitta asosiy funksiyani eksport qilmoqchi bo‘lsangiz:

### ➤ Export qilish:

```js
// fayl: salom.js
export default function salomBer(ism) {
  console.log("Salom, " + ism);
}
```

### ➤ Import qilish:

```js
import salomBer from "./salom.js";

salomBer("Ali"); // Salom, Ali
```

> ❗ `default` export faqat **bitta marta** bo‘ladi.

---

## 🔁 Mix — named va default export birgalikda:

```js
// fayl: helpers.js
export const yosh = 25;
export default function salom() {
  console.log("Assalomu alaykum");
}
```

```js
// fayl: main.js
import salom, { yosh } from "./helpers.js";

salom();           // Assalomu alaykum
console.log(yosh); // 25
```

---

## 🧪 Real hayotda modullar qayerda ishlatiladi?

| Holat                              | Modullar bilan yechim                                              |
| ---------------------------------- | ------------------------------------------------------------------ |
| Loyiha juda katta                  | Har bo‘lim alohida faylga ajratiladi (components, utils, services) |
| Foydali funksiyalar                | `utils.js` ichiga jamlab, kerakli joyda chaqiriladi                |
| React, Vue, va boshqa frameworklar | Har bir komponent modul sifatida yoziladi                          |
| Kodni test qilish                  | Har modul mustaqil sinov qilinadi                                  |

---

## 📂 Misol tuzilma (folder structure)

```
project/
│
├── main.js
├── math.js
├── user.js
└── index.html
```

### ➤ math.js

```js
export const PI = 3.14;
export function kvadrat(x) {
  return x * x;
}
```

### ➤ user.js

```js
export default function user(name) {
  console.log("Foydalanuvchi:", name);
}
```

### ➤ main.js

```js
import { PI, kvadrat } from "./math.js";
import user from "./user.js";

console.log(PI);           // 3.14
console.log(kvadrat(4));   // 16
user("Dilnoza");           // Foydalanuvchi: Dilnoza
```

---

## ✅ Yakuniy eslatmalar:

* HTML faylda doimo `type="module"` yozilsin
* Import qilishda `.js` kengaytmasi bo‘lishi kerak
* Fayllar bir xil papkada yoki yo‘li aniq ko‘rsatilgan bo‘lsin
* Default export va named export’larni farqlang
* VS Code’da `Live Server` orqali ishga tushiring

---

</details>


<details>
<summary>
  Object-Oriented Programming (OOP) in JavaScript — ES6 Class Syntax
</summary>
---

# Object-Oriented Programming (OOP) in JavaScript — ES6 Class Syntax

---

## 🧠 OOP nima?

**Object-Oriented Programming (Obyektga yo‘naltirilgan dasturlash)** — bu kodni **obyektlar va classlar** asosida yozish usulidir.

* Har bir **obyekt** – ma’lumot (property) va xatti-harakat (method) ga ega.
* OOP yordami bilan kod:

  * **tartibli**
  * **qayta foydalanish mumkin**
  * **kengaytiriladigan** bo‘ladi.

---

## 📦 Class — shablon (template)

Class — bu obyekt yaratish uchun **qolip** (shablon). Class yordamida bir xil turdagi ko‘p obyektlar yaratish mumkin.

---

## 🔧 1. `class`, `constructor`, `this`

```js
class Foydalanuvchi {
  constructor(ism, yosh) {
    this.ism = ism;
    this.yosh = yosh;
  }

  salomBer() {
    console.log(`Salom, mening ismim ${this.ism}, yoshim ${this.yosh}`);
  }
}

const user1 = new Foydalanuvchi("Ali", 25);
user1.salomBer(); // Salom, mening ismim Ali, yoshim 25
```

### 🧠 Tushuntirish:

| Narsa         | Vazifasi                                   |
| ------------- | ------------------------------------------ |
| `class`       | Yangi obyektlar uchun qolip                |
| `constructor` | Obyekt yaratilganda ishlovchi maxsus metod |
| `this`        | Hozirgi obyektga murojaat qiladi           |

---

## 📑 2. Methodlar

Class ichida yozilgan funksiyalar **method** deb ataladi.

```js
class Bank {
  constructor(name, balans) {
    this.name = name;
    this.balans = balans;
  }

  balansniKorish() {
    console.log(`${this.name} balans: ${this.balans} so'm`);
  }

  pulQoshish(summasi) {
    this.balans += summasi;
  }
}

const client = new Bank("Ozod", 100000);
client.pulQoshish(50000);
client.balansniKorish(); // Ozod balans: 150000 so'm
```

---

## 👨‍👩‍👧‍👦 3. Inheritance — Meros olish

Bir class’dan boshqa class **meros olish** orqali undan barcha method va property’larni o‘zlashtiradi.

```js
class Hayvon {
  constructor(nomi) {
    this.nomi = nomi;
  }

  tovush() {
    console.log(`${this.nomi} ovoz chiqaryapti`);
  }
}

class It extends Hayvon {
  tovush() {
    console.log(`${this.nomi} — Vov vov!`);
  }
}

const dog = new It("Rex");
dog.tovush(); // Rex — Vov vov!
```

### 🧠 Tushuntirish:

* `extends` — boshqa class’dan meros olish
* `super()` — parent (ota) class’ning `constructor` metodini chaqiradi

---

## 🔼 4. `super()` bilan ishlash

```js
class Hayvon {
  constructor(nomi) {
    this.nomi = nomi;
  }
}

class Mushuk extends Hayvon {
  constructor(nomi, rangi) {
    super(nomi); // Hayvon class constructor'ini chaqiradi
    this.rangi = rangi;
  }

  info() {
    console.log(`${this.rangi} rangli mushuk: ${this.nomi}`);
  }
}

const m = new Mushuk("Murka", "oq");
m.info(); // oq rangli mushuk: Murka
```

---

## 🔒 5. Private fields (xususiy maydonlar)

ES6’dan boshlab siz class ichida faqat o‘sha class ichida ko‘rinadigan **private field** yaratishingiz mumkin: `#` belgisi bilan.

```js
class Sirli {
  #maxfiy = "Bu maxfiy ma’lumot";

  korsat() {
    console.log(this.#maxfiy);
  }
}

const s = new Sirli();
s.korsat(); // Bu maxfiy ma’lumot
// console.log(s.#maxfiy); ❌ Xatolik: private field
```

---

## ⚙️ 6. Static Methods — class’ga tegishli, obyektga emas

```js
class Matematika {
  static kvadrat(x) {
    return x * x;
  }
}

console.log(Matematika.kvadrat(4)); // 16

const m = new Matematika();
// m.kvadrat(4); ❌ Xato, static method obyektga emas, class’ga tegishli
```

---

## 📘 Yakuniy misol — Foydalanuvchi tizimi

```js
class User {
  #password;

  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }

  login(input) {
    if (input === this.#password) {
      console.log("Tizimga muvaffaqiyatli kirdingiz!");
    } else {
      console.log("Parol noto‘g‘ri!");
    }
  }

  static xushKelibsiz() {
    console.log("Xush kelibsiz!");
  }
}

const u = new User("Ali", "1234");
u.login("1234"); // Tizimga muvaffaqiyatli kirdingiz!
User.xushKelibsiz(); // Xush kelibsiz!
```

---

## ✅ Esda tuting:

| Tushuncha            | Ma’nosi                                          |
| -------------------- | ------------------------------------------------ |
| `class`              | Obyekt shabloni                                  |
| `constructor`        | Obyekt yaratilganda ishlaydi                     |
| `this`               | Hozirgi obyektga murojaat                        |
| `extends`, `super()` | Meros olish va ota class’ga murojaat             |
| `#field`             | Maxfiy property (private)                        |
| `static`             | Class darajasida method (obyektga tegishli emas) |

---


</details>


<details>
<summary>
  Functional Programming Basics (JavaScript’da)
</summary>

---

# 🔁 20. Functional Programming Basics (JavaScript’da)

---

## 🎓 Functional Programming nima?

**Functional Programming (FP)** — bu kod yozish usuli bo‘lib, u:

* funksiyalarni asosiy blok sifatida ishlatadi
* ma’lumotlar o‘zgarmasligini (immutability) qo‘llab-quvvatlaydi
* yon effektlardan qochishga harakat qiladi

FP orqali siz:
✅ aniq,
✅ ishonchli,
✅ test qilish oson,
✅ prediktiv kod yozishingiz mumkin.

---

## 🔹 1. Pure Function (Sof Funksiya)

**Pure function** — bu:

* doimo bir xil inputga **bir xil natija** beradi
* hech qanday **tashqi o‘zgaruvchini o‘zgartirmaydi**

### ❌ Not pure:

```js
let son = 5;

function qo‘sh(x) {
  return x + son; // tashqi o‘zgaruvchi ishlatilgan
}
```

### ✅ Pure:

```js
function qo‘sh(x, y) {
  return x + y; // faqat parametrlarga tayangan
}
```

---

## 📌 2. Immutability — o‘zgarmaslik

Immutability bu — **biror o‘zgaruvchi yoki obyektni o‘zgartirmaslik**, balki **yangi nusxa** yaratish demakdir.

### ❌ Mutatsiya (o‘zgartirish):

```js
let user = { ism: "Ali", yosh: 25 };
user.yosh = 30; // Obyekt o‘zgartirildi
```

### ✅ Immutability (nusxa yaratish):

```js
let user = { ism: "Ali", yosh: 25 };
let yangiUser = { ...user, yosh: 30 };

console.log(user.yosh);      // 25
console.log(yangiUser.yosh); // 30
```

### Array misol:

```js
let arr = [1, 2, 3];
let yangiArr = [...arr, 4]; // arr'ga 4 qo‘shildi, lekin original o‘zgarmadi
```

---

## 🔁 3. Function Composition

Bu — bir nechta funksiyalarni **birlashtirib**, yangi funksiya hosil qilish degani.

```js
function kvadrat(x) {
  return x * x;
}

function yarimla(x) {
  return x / 2;
}

// Composition: bir funksiyani boshqasiga berish
const result = yarimla(kvadrat(6)); // (6 * 6) = 36, 36 / 2 = 18

console.log(result); // 18
```

> Bunday uslubda siz funksiyalarni kichik bo‘laklarga bo‘lasiz va keyin ularni zanjir kabi ulab ketasiz.

---

## 🧼 4. Yon effekt (side effects) dan qochish

**Side effect** — bu funksiya ichida:

* tashqi ma’lumotga ta’sir qilish (localStorage, DOM, API)
* `console.log()`, `alert()`
* global o‘zgaruvchini o‘zgartirish

### ❌ Yon effekt bor:

```js
let total = 0;

function add(x) {
  total += x; // global holatga ta’sir qilyapti
}
```

### ✅ Side-effect yo‘q (pure):

```js
function add(x, y) {
  return x + y;
}
```

---

## ✅ Real Hayotda Qayerda Ishlatiladi?

| Holat                      | Functional yondashuv bilan     |
| -------------------------- | ------------------------------ |
| React’da `useState` holati | O‘zgartirish emas, yangi holat |
| Array transformatsiyasi    | `map`, `filter`, `reduce`      |
| Redux (state boshqaruvi)   | Immutability asosida ishlaydi  |
| Unit testlar               | Pure funksiyalar sinash oson   |
| API response ishlov berish | Ketma-ket transformatsiyalar   |

---

## 🧪 Amaliy misollar

### Misol 1: Pure function bilan narx hisoblash

```js
function umumiyNarx(price, quantity) {
  return price * quantity;
}

console.log(umumiyNarx(10000, 3)); // 30000
```

---

### Misol 2: Arrayni filter qilish (immutably)

```js
const mahsulotlar = ["non", "sut", "go‘sht", "shakar"];

const filtr = mahsulotlar.filter(item => item !== "shakar");

console.log(mahsulotlar); // ["non", "sut", "go‘sht", "shakar"]
console.log(filtr);       // ["non", "sut", "go‘sht"]
```

---

### Misol 3: Function composition (manual)

```js
function orttir(x) {
  return x + 1;
}

function ikkiBarobar(x) {
  return x * 2;
}

const yakuniy = ikkiBarobar(orttir(4)); // (4 + 1) * 2 = 10
console.log(yakuniy);
```

---

## 🔚 Yakuniy eslatmalar

| Asosiy Tushuncha  | Izoh                                                                      |
| ----------------- | ------------------------------------------------------------------------- |
| **Pure function** | Faqat inputga qarab natija chiqaradi, tashqi dunyoga ta’sir qilmaydi      |
| **Immutability**  | Ma’lumotlarni o‘zgartirmasdan yangi nusxa yaratish                        |
| **Composition**   | Funksiyalarni birlashtirib zanjirli operatsiya qilish                     |
| **Side effect**   | DOM, alert, global variable kabi tashqi ta’sir — FP’da tavsiya qilinmaydi |

---


</details>

<details>
<summary>

</summary>



</details>

<details>