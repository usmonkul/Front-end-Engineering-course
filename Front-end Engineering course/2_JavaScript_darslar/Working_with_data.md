
# HTML `data-*` attribute + JavaScript

## 1) `data-*` attribute nima?

HTML’da elementga qo‘shimcha ma’lumot (metadata) biriktirish uchun `data-*` attributelardan foydalaniladi.

Masalan, tugmada mahsulotning `id`si yoki narxi bo‘lishi mumkin:

```html
<button class="buy" data-product-id="42" data-price="199">Sotib olish</button>
```

Bu ma’lumotlar:

- HTML’da ko‘rinib turadi (debug qilish oson)
- JavaScript’da oson o‘qiladi
- UI elementlarni “bog‘lash” (button → product) uchun juda qulay

## 2) Qoidalar (nomlash)

- `data-` bilan boshlanadi.
- Keyingi qism odatda **kebab-case** bo‘ladi: `data-user-id`, `data-product-name`.
- JavaScript’da `dataset` orqali o‘qiganda u **camelCase** ga o‘tadi:
  - `data-user-id` → `element.dataset.userId`
  - `data-product-name` → `element.dataset.productName`

## 3) JavaScript’da o‘qish: `dataset`

### 3.1. Oddiy o‘qish

```html
<div id="card" data-role="admin" data-user-id="7"></div>
```

```js
const card = document.querySelector('#card');

console.log(card.dataset.role);   // "admin"
console.log(card.dataset.userId); // "7"
```

**Muhim:** `dataset` har doim **string** qaytaradi.

### 3.2. Son (number) kerak bo‘lsa: convert qilish

```html
<button id="btn" data-count="3"></button>
```

```js
const btn = document.querySelector('#btn');
const count = Number(btn.dataset.count);

console.log(count);        // 3
console.log(typeof count); // "number"
```

## 4) JavaScript’da yozish: `dataset`

```html
<div id="box" data-state="closed"></div>
```

```js
const box = document.querySelector('#box');

box.dataset.state = 'open';
// HTML endi: data-state="open"
```

Data’ni olib tashlash (delete):

```js
delete box.dataset.state;
```

## 5) `getAttribute` / `setAttribute` bilan ishlash

`dataset` qulay, lekin ba’zan attribute’ni aynan string sifatida o‘qish/yozish kerak bo‘ladi.

```html
<div id="el" data-theme="dark"></div>
```

```js
const el = document.querySelector('#el');

console.log(el.getAttribute('data-theme')); // "dark"

el.setAttribute('data-theme', 'light');
```

Qachon qaysi biri?

- `dataset` — tez, o‘qilishi oson (ko‘p ishlatiladi)
- `getAttribute/setAttribute` — attribute nomini dinamik yasash kerak bo‘lsa, yoki raw string bilan ishlash kerak bo‘lsa

## 6) Amaliy pattern: bitta list, ko‘p button (Event Delegation bilan)

Quyidagi usul front-end’da juda ko‘p ishlatiladi: ro‘yxat ichidagi elementlar ko‘p bo‘lsa, har biriga alohida listener qo‘ymasdan, parent’ga bitta listener qo‘yiladi.

### HTML

```html
<ul id="products">
  <li>
    Olma
    <button class="buy" data-product-id="101" data-price="5000">Buy</button>
  </li>
  <li>
    Banan
    <button class="buy" data-product-id="102" data-price="7000">Buy</button>
  </li>
</ul>
```

### JavaScript

```js
const list = document.querySelector('#products');

list.addEventListener('click', (event) => {
  const btn = event.target.closest('.buy');
  if (!btn) return;

  const productId = btn.dataset.productId;      // string
  const price = Number(btn.dataset.price);      // number

  console.log('Buy clicked:', { productId, price });
});
```

Bu yerda:

- `closest('.buy')` bosilgan element button bo‘lmasa ham (masalan ichidagi icon) eng yaqin `.buy` ni topadi.
- `dataset` orqali data o‘qiladi.

## 7) Amaliy pattern: Modal ochish (data orqali target berish)

### HTML

```html
<button class="open-modal" data-target="#loginModal">Login</button>

<div id="loginModal" hidden>
  <h2>Login</h2>
  <button class="close">Close</button>
</div>
```

### JavaScript

```js
document.addEventListener('click', (event) => {
  const openBtn = event.target.closest('.open-modal');
  if (openBtn) {
    const selector = openBtn.dataset.target;
    const modal = document.querySelector(selector);
    if (modal) modal.hidden = false;
    return;
  }

  const closeBtn = event.target.closest('.close');
  if (closeBtn) {
    const modal = closeBtn.closest('div');
    if (modal) modal.hidden = true;
  }
});
```

## 8) Ko‘p uchraydigan xatolar

### 8.1. `dataset` hammasini string qiladi

`"false"` ham string.

```html
<div id="x" data-active="false"></div>
```

```js
const x = document.querySelector('#x');

console.log(x.dataset.active);        // "false"
console.log(Boolean(x.dataset.active)); // true (chunki bo‘sh bo‘lmagan string)
```

To‘g‘risi:

```js
const isActive = x.dataset.active === 'true';
```

### 8.2. Nomi camelCase bo‘lib ketadi

```html
<div id="u" data-user-id="1"></div>
```

```js
u.dataset.userId;  // to‘g‘ri
u.dataset.user-id; // noto‘g‘ri
```

## 9) Mini mashq (mustaqil)

### Vazifa

1) HTML’da 5 ta button yarating:
   - `data-color` (masalan: `red`, `green`, `blue`)
   - `data-bg` (masalan: `#111`, `#eee`)
2) Har safar button bosilganda, `body` ning:
   - `style.color` va `style.backgroundColor` ni shu data orqali o‘zgartiring.
3) `console.log` ga bosilgan button’ning `data-color` va `data-bg` qiymatlarini chiqaring.

### Tekshirish

- Bosilganda ranglar o‘zgarishi kerak.
- `dataset`dan o‘qish ishlashi kerak.

