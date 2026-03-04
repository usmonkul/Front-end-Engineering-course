# JavaScript Intermediate Test

**Vaqt:** 60 daqiqa  
**Savollar soni:** 30 ta  
**Maqsad:** JavaScript Intermediate modulidagi bilimlarni tekshirish

---

## 📝 Test Savollari

### 1. Quyidagi kodda nima chiqadi?

```javascript
console.log(x);
var x = 10;
```

**A)** 10  
**B)** undefined  
**C)** ReferenceError  
**D)** null

---

### 2. `let` bilan e'lon qilingan o'zgaruvchi hoisting bo'ladimi?

```javascript
console.log(y);
let y = 5;
```

**A)** Ha, va qiymati undefined bo'ladi  
**B)** Yo'q, hech qachon hoist qilinmaydi  
**C)** Ha, lekin TDZ ichida ishlatib bo'lmaydi  
**D)** Faqat globalda ishlaydi

---

### 3. Quyidagi kodda qaysi `ism` chaqiriladi?

```javascript
let ism = "Ali";

function salom() {
  let ism = "Karim";
  console.log(ism);
}

salom();
```

**A)** "Ali"  
**B)** "Karim"  
**C)** undefined  
**D)** ReferenceError

---

### 4. Closure nima?

```javascript
function tashqi() {
  let son = 5;
  return function ichki() {
    console.log(son);
  };
}
```

**A)** Ichki funksiyaning tashqi o'zgaruvchilarga kirish qobiliyati  
**B)** Global o'zgaruvchilar  
**C)** Scope bilan bog'liq emas  
**D)** Faqat object metodlari

---

### 5. Quyidagi kodda nima xato chiqadi?

```javascript
const yosh;
yosh = 25;
```

**A)** SyntaxError  
**B)** TypeError  
**C)** ReferenceError  
**D)** Ishlaydi

---

### 6. Quyidagi kodda nima chiqadi?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

**A)** 0, 1, 2  
**B)** 3, 3, 3  
**C)** undefined  
**D)** Error

---

### 7. `find()` metodi qanday ishlaydi?

```javascript
let sonlar = [10, 25, 40, 15];
let topilgan = sonlar.find(function(son) {
  return son > 20;
});
```

**A)** Barcha shartga mos elementlarni qaytaradi  
**B)** Birinchi mos elementni qaytaradi  
**C)** Hech narsa qaytarmaydi  
**D)** Massivni o'zgartiradi

---

### 8. `some()` metodi qanday natija qaytaradi?

```javascript
let yoshlar = [12, 18, 21, 15];
let natija = yoshlar.some(function(yosh) {
  return yosh >= 18;
});
```

**A)** true  
**B)** false  
**C)** [18, 21]  
**D)** undefined

---

### 9. `every()` metodi qachon true qaytaradi?

```javascript
let baholar = [5, 4, 5, 3];
let yaxshi = baholar.every(function(baho) {
  return baho >= 4;
});
```

**A)** Har bir element shartga mos bo'lsa  
**B)** Bitta element shartga mos bo'lsa  
**C)** Hech qanday element mos kelmasa  
**D)** Faqat birinchi element

---

### 10. `reduce()` metodi nima qiladi?

```javascript
let narxlar = [10, 15, 20];
let jami = narxlar.reduce(function(sum, qiymat) {
  return sum + qiymat;
}, 0);
```

**A)** Massivni tartiblaydi  
**B)** Massivni bitta natijaga qisqartiradi  
**C)** Massivni filtrlaydi  
**D)** Yangi massiv yaratadi

---

### 11. Destructuring qanday ishlaydi?

```javascript
let foydalanuvchi = {
  ism: "Ali",
  yosh: 25
};

let { ism, yosh } = foydalanuvchi;
```

**A)** Obyektdagi qiymatlarni alohida o'zgaruvchilarga ajratib oladi  
**B)** Obyektni klonlaydi  
**C)** Obyektni o'zgartiradi  
**D)** Funksiya yaratadi

---

### 12. Spread operator (`...`) nima qiladi?

```javascript
let raqamlar = [1, 2, 3];
let yangi = [...raqamlar, 4, 5];
```

**A)** Massivni bitta elementga aylantiradi  
**B)** Massivni yoyib, yangi massiv yaratadi  
**C)** Massivni o'zgartiradi  
**D)** Xato beradi

---

### 13. Rest operator nima uchun ishlatiladi?

```javascript
function yigindi(...raqamlar) {
  return raqamlar.reduce((a, b) => a + b, 0);
}
```

**A)** Ko'p qiymatlarni bitta arrayga yig'ish uchun  
**B)** Massivni yoyish uchun  
**C)** Funksiyani to'xtatish uchun  
**D)** Loop yaratish uchun

---

### 14. Template Literals qanday yoziladi?

```javascript
let ism = "Ali";
let yosh = 24;
```

**A)** `Mening ismim ${ism} va yoshim ${yosh}da`  
**B)** "Mening ismim " + ism + " va yoshim " + yosh + "da"  
**C)** 'Mening ismim ${ism} va yoshim ${yosh}da'  
**D)** Template literals JavaScript'da yo'q

---

### 15. Optional Chaining (`?.`) nima uchun ishlatiladi?

```javascript
let user = {
  name: "Ziyoda",
  contact: {
    email: "zi@mail.com"
  }
};

console.log(user.social?.instagram);
```

**A)** Mavjud bo'lmagan qiymatga xatolarsiz murojaat qilish uchun  
**B)** Funksiyani chaqirish uchun  
**C)** Loop yaratish uchun  
**D)** Obyektni klonlash uchun

---

### 16. `addEventListener` qanday ishlatiladi?

```javascript
const button = document.getElementById('myButton');
button.addEventListener('click', function(event) {
  console.log('Tugma bosildi!');
});
```

**A)** Inline event handler sifatida  
**B)** Professional event boshqarish uchun  
**C)** Faqat CSS uchun  
**D)** Xato usul

---

### 17. `preventDefault()` metodi nima qiladi?

```javascript
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // ...
});
```

**A)** Brauzer standart xatti-harakatini oldini oladi  
**B)** Eventni tarqatishini to'xtatadi  
**C)** Elementni o'chiradi  
**D)** Funksiyani chaqiradi

---

### 18. Event Bubbling nima?

**A)** Event targetdan ildizga yuqoriga ko'tariladi  
**B)** Event ildizdan targetga pastga tushadi  
**C)** Event hech qayerga ketmaydi  
**D)** Faqat click eventlari uchun

---

### 19. Event Delegation nima uchun foydali?

**A)** Kamroq event listener va dinamik kontent bilan ishlash uchun  
**B)** Faqat statik elementlar uchun  
**C)** CSS stil qo'shish uchun  
**D)** Funksiyalarni chaqirish uchun

---

### 20. `event.target` va `event.currentTarget` farqi nima?

```javascript
parent.addEventListener('click', (event) => {
  console.log('Target:', event.target);
  console.log('Current:', event.currentTarget);
});
```

**A)** `target` - eventni qo'zg'atgan element, `currentTarget` - listener biriktirilgan element  
**B)** Ikkalasi ham bir xil  
**C)** Faqat `target` mavjud  
**D)** Faqat `currentTarget` mavjud

---

### 21. Form validation uchun qanday event ishlatiladi?

```javascript
form.addEventListener('???', (event) => {
  event.preventDefault();
  // Validation
});
```

**A)** submit  
**B)** click  
**C)** change  
**D)** input

---

### 22. Input qiymatini qanday olish mumkin?

```javascript
let input = document.getElementById('username');
```

**A)** `input.value`  
**B)** `input.text`  
**C)** `input.innerHTML`  
**D)** `input.textContent`

---

### 23. `input` va `change` eventlarining farqi nima?

**A)** `input` - har bir harf kiritilganda, `change` - inputdan chiqilganda  
**B)** Ikkalasi ham bir xil  
**C)** Faqat `input` mavjud  
**D)** Faqat `change` mavjud

---

### 24. HTML5 `required` atributi nima qiladi?

```html
<input type="text" required />
```

**A)** Inputni majburiy to'ldirishni talab qiladi  
**B)** Inputni o'chiradi  
**C)** Inputni yashirib qo'yadi  
**D)** Hech narsa qilmaydi

---

### 25. Radio buttonlardan tanlanganini qanday olish mumkin?

```javascript
let tanlangan = document.querySelector('input[name="gender"]:checked');
```

**A)** `tanlangan.value`  
**B)** `tanlangan.text`  
**C)** `tanlangan.checked`  
**D)** `tanlangan.selected`

---

### 26. `const` bilan yaratilgan obyekt ichidagi qiymatni o'zgartirish mumkinmi?

```javascript
const user = { name: "Ali" };
user.name = "Karim";
```

**A)** Ha, mumkin  
**B)** Yo'q, TypeError chiqadi  
**C)** Faqat string qiymatlar uchun  
**D)** Faqat arraylar uchun

---

### 27. `var` va `let` ning asosiy farqi nima?

**A)** `var` block scope'ni ko'rmaydi, `let` ko'radi  
**B)** Ikkalasi ham bir xil  
**C)** Faqat `var` mavjud  
**D)** Faqat `let` mavjud

---

### 28. Temporal Dead Zone (TDZ) nima?

**A)** `let` va `const` o'zgaruvchilar e'lon qilingunga qadar ishlatilmaydi  
**B)** Global scope ichidagi zone  
**C)** Funksiya ichidagi zone  
**D)** Faqat `var` uchun

---

### 29. Closure'ning asosiy foydasi nima?

**A)** Ma'lumotni yashirish va saqlash (Data encapsulation)  
**B)** Tezlik oshirish  
**C)** Xotira tejash  
**D)** CSS stil qo'shish

---

### 30. Callback function nima?

```javascript
function bajar(callback) {
  callback();
}
```

**A)** Argument sifatida uzatiladigan funksiya  
**B)** Global funksiya  
**C)** Class metodi  
**D)** Event listener

---

