<details>
<summary>SCSS</summary>
---

> 💡 SCSS (Sassy CSS) is a **CSS preprocessor** that adds powerful features to plain CSS: variables, nesting, functions, mixins, loops, conditions, and more.

---

## 1. What is SCSS & Why Use It

**SCSS** is one of the two syntaxes for **Sass** (Syntactically Awesome Stylesheets), and it extends CSS with superpowers like:

✅ Variables
✅ Nesting
✅ Reusable blocks (Mixins)
✅ Logic & functions
✅ Modular structure

SCSS is 100% CSS-compatible, so you can write regular CSS and add advanced features gradually.

---

## 2. SCSS Setup & Compilation

### 🔧 Prerequisites:

* [Node.js](https://nodejs.org)
* Text editor like **VS Code**

### 🧪 Install SCSS globally:

```bash
npm install -g sass
```

### 🔄 Compile SCSS to CSS

```bash
sass style.scss style.css
```

Or watch mode (auto-recompile on changes):

```bash
sass --watch style.scss:style.css
```

---

## 3. SCSS Syntax Basics

SCSS syntax is **CSS + features**.

```scss
$primary: #1e90ff;

body {
  background-color: $primary;

  h1 {
    font-size: 2rem;
    color: white;
  }
}
```

Compiles to:

```css
body {
  background-color: #1e90ff;
}
body h1 {
  font-size: 2rem;
  color: white;
}
```

---

## 4. Variables

Define reusable values.

```scss
$font-stack: 'Segoe UI', sans-serif;
$main-color: #333;

body {
  font-family: $font-stack;
  color: $main-color;
}
```

---

## 5. Nesting

SCSS supports **selector nesting** like HTML hierarchy.

```scss
nav {
  ul {
    list-style: none;

    li {
      display: inline-block;

      a {
        text-decoration: none;
      }
    }
  }
}
```

⚠️ Don’t over-nest (no more than 3 levels recommended).

---

## 6. Partials and Imports (Legacy)

Split SCSS into smaller files and use `@import` to combine them.

```scss
// _variables.scss
$bg-color: #f0f0f0;

// main.scss
@import 'variables';

body {
  background: $bg-color;
}
```

✅ Use `_filename.scss` for partials.

❗ **Note:** `@import` is deprecated. Use `@use` (see section 13).

---

## 7. Mixins

Reusable code blocks with optional parameters.

```scss
@mixin flex-center($gap: 10px) {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $gap;
}

.header {
  @include flex-center(20px);
}
```

---

## 8. Functions

Functions return values — use for calculations.

```scss
@function px-to-rem($px) {
  @return $px / 16 * 1rem;
}

h1 {
  font-size: px-to-rem(24);
}
```

---

## 9. Extend/Inheritance

Avoid duplication by inheriting base styles.

```scss
%btn {
  padding: 12px 20px;
  border-radius: 6px;
  font-weight: bold;
}

.btn-primary {
  @extend %btn;
  background: blue;
  color: white;
}
```

---

## 10. Conditions & Loops

### 🎯 Conditions

```scss
$theme: light;

body {
  @if $theme == light {
    background: #fff;
  } @else {
    background: #000;
  }
}
```

### 🔁 Loops

```scss
@for $i from 1 through 3 {
  .m-#{$i} {
    margin: #{$i}rem;
  }
}
```

---

## 11. Organizing SCSS Project Structure

Recommended folder structure (7–1 Pattern):

```
scss/
├── abstracts/   // variables, functions, mixins
├── base/        // reset, typography
├── components/  // buttons, cards, forms
├── layout/      // header, footer, grid
├── pages/       // page-specific styles
├── themes/      // theme-specific
├── vendors/     // third-party CSS
└── main.scss    // imports all
```

---

## 12. Real Project: SCSS Button System

```scss
// _variables.scss
$radius: 8px;
$primary: #007bff;

// _mixins.scss
@mixin btn($bg, $color) {
  background: $bg;
  color: $color;
  padding: 10px 20px;
  border: none;
  border-radius: $radius;
  cursor: pointer;
}

// _buttons.scss
.btn {
  @include btn($primary, #fff);

  &:hover {
    opacity: 0.9;
  }
}

// main.scss
@use 'variables';
@use 'mixins';
@use 'buttons';
```

---

## 13. Advanced: @use and @forward

`@use` replaces `@import`. It loads a file once and namespaced.

```scss
// _colors.scss
$red: #ff0000;
$blue: #0000ff;

// main.scss
@use 'colors';

h1 {
  color: colors.$red;
}
```

---

## 14. SCSS Best Practices

✅ Use `@use`, not `@import`
✅ Keep nesting shallow (2–3 levels max)
✅ Abstract variables and mixins
✅ Use partials and organize by component
✅ Avoid duplication – use `@extend` and mixins
✅ Add comments and consistent formatting

---
</details>



<details>
<summary>SCSS in Uzbek</summary>
## 1. SCSS nima va nima uchun kerak?

**SCSS (Sassy CSS)** — bu CSS’ni kengaytiruvchi **preprocessor** bo‘lib, u quyidagi imkoniyatlarni qo‘shadi:

✅ O‘zgaruvchilar
✅ Ichma-ich yozuv (nesting)
✅ Mixinlar (qayta ishlatiladigan kodlar)
✅ Funksiyalar
✅ Takrorlash, shartlar
✅ Modulli tuzilma

Bu orqali kodlar **tartibli**, **tekrar yozilmaydigan**, va **oson boshqariladigan** bo‘ladi.

---

## 2. SCSS o‘rnatish va kompilyatsiya qilish

### 💻 Talab qilinadi:

* [Node.js](https://nodejs.org/) o‘rnatilgan bo‘lishi
* VS Code yoki boshqa editor

### 📦 SCSS’ni o‘rnatish:

```bash
npm install -g sass
```

### 🔄 SCSS faylni CSS ga aylantirish:

```bash
sass style.scss style.css
```

Yoki kuzatish rejimi (har safar o‘zgarganda avtomatik yangilanadi):

```bash
sass --watch style.scss:style.css
```

---

## 3. SCSS sintaksisi – asoslar

```scss
$asosiy-rang: #1e90ff;

body {
  background-color: $asosiy-rang;

  h1 {
    font-size: 2rem;
    color: white;
  }
}
```

---

## 4. O‘zgaruvchilar (Variables)

```scss
$font: 'Arial', sans-serif;
$rang: #333;

body {
  font-family: $font;
  color: $rang;
}
```

---

## 5. Ichma-ich yozuv (Nesting)

```scss
nav {
  ul {
    list-style: none;

    li {
      display: inline-block;

      a {
        text-decoration: none;
      }
    }
  }
}
```

📌 Tavsiya: ichma-ich yozuvni 3 darajadan oshirmang.

---

## 6. Fayllarni ajratish va `@import`

### ➕ Fayl: `_variables.scss`

```scss
$bg: #f8f8f8;
```

### ➕ Fayl: `main.scss`

```scss
@import 'variables';

body {
  background: $bg;
}
```

❗ Eslatma: `@import` eski usul. Yangi usul — `@use` va `@forward`.

---

## 7. Mixinlar (Qayta ishlatiladigan kodlar)

```scss
@mixin center($gap: 10px) {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $gap;
}

.navbar {
  @include center(20px);
}
```

---

## 8. Funksiyalar

```scss
@function rem($px) {
  @return $px / 16 * 1rem;
}

p {
  font-size: rem(18);
}
```

---

## 9. Meros olish – `@extend`

```scss
%button {
  padding: 10px 20px;
  border-radius: 6px;
}

.btn-primary {
  @extend %button;
  background: blue;
  color: white;
}
```

---

## 10. Shartlar va Takrorlash

### 🔹 `@if`

```scss
$tema: dark;

body {
  @if $tema == dark {
    background: #000;
    color: #fff;
  } @else {
    background: #fff;
    color: #000;
  }
}
```

### 🔹 `@for`

```scss
@for $i from 1 through 3 {
  .m-#{$i} {
    margin: #{$i}rem;
  }
}
```

---

## 11. Loyihani tashkil qilish – SCSS tuzilmasi (7-1 pattern)

```
scss/
├── abstracts/   // mixin, function, variable
├── base/        // normalize, base styles
├── components/  // button, card, form
├── layout/      // header, footer, grid
├── pages/       // sahifalarga xos style
├── themes/      // ranglar, night/day
├── vendors/     // Bootstrap, FontAwesome
└── main.scss    // asosiy fayl
```

---

## 12. Amaliy loyiha: Tugmalar tizimi

```scss
// _variables.scss
$btn-radius: 6px;
$primary: #007bff;

// _mixins.scss
@mixin button($bg, $color) {
  background: $bg;
  color: $color;
  padding: 10px 20px;
  border-radius: $btn-radius;
  border: none;
}

// _buttons.scss
.btn {
  @include button($primary, #fff);

  &:hover {
    opacity: 0.85;
  }
}
```

---

## 13. Yangi metod: `@use` va `@forward`

### 🔹 Fayl: `_colors.scss`

```scss
$red: #ff0000;
$blue: #0000ff;
```

### 🔹 `main.scss`

```scss
@use 'colors';

h1 {
  color: colors.$red;
}
```

---

## 14. SCSS bo‘yicha eng yaxshi amaliyotlar

✅ Har doim `@use` ishlating
✅ Fayllarni modullarga bo‘ling
✅ Nesting chuqurligini cheklang
✅ O‘zgaruvchi va mixinlarni qayta ishlating
✅ Kodni tartibli va izchil yozing

---
</details>



<details>
<summary>SCSS funksiyalar</summary>

---

## 🔝 5 ta eng ko‘p ishlatiladigan SCSS funksiyalar

---

### 1️⃣ `lighten(color, amount)`

> Rangni ochroq qilish uchun ishlatiladi.

```scss
$main-color: #007bff;

.button {
  background-color: lighten($main-color, 20%);
}
```

🔹 Natija: `$main-color` 20% ga **ochroq** rangga aylantiriladi.

---

### 2️⃣ `darken(color, amount)`

> Rangni quyuqlashtirish uchun ishlatiladi.

```scss
$primary: #15a273;

.card {
  border-color: darken($primary, 15%);
}
```

🔹 Natija: `$primary` 15% ga **quyuqlashtiriladi**.

---

### 3️⃣ `rgba(color, alpha)`

> Ranggа **shaffoflik** qo‘shadi (`alpha` qiymati: 0–1 oralig‘ida)

```scss
$black: #000;

.overlay {
  background-color: rgba($black, 0.5); // 50% shaffof qora
}
```

---

### 4️⃣ `mix(color1, color2, weight)`

> Ikki rangni **aralashtiradi**, `weight` – birinchi rang necha foiz bo‘lishi kerakligi.

```scss
$blue: #007bff;
$red: #ff0000;

.alert {
  background-color: mix($blue, $red, 50%);
}
```

🔹 Natija: ko‘k va qizil teng foizda aralashtiriladi.

---

### 5️⃣ `percentage(value)`

> Decimal qiymatni **foizga aylantiradi** (masalan, `0.25` → `25%`)

```scss
$ratio: 0.4;

.bar {
  width: percentage($ratio); // 40%
}
```

---

### 6 `px-to-rem($px, $base: 16)`

> `px` ni `rem` ga avtomatik aylantiradi (odatda `1rem = 16px`)

```scss
@function px-to-rem($px, $base: 16) {
  @return $px / $base * 1rem;
}

h1 {
  font-size: px-to-rem(24); // 1.5rem
}
```

---

</details>


<details>
<summary>BEM</summary>

---

**BEM** — bu **CSS klass nomlarini** tartibli, o‘qilishi oson va kengaytiriladigan shaklda yozish uchun ishlab chiqilgan metodologiyadir.

BEM 3 ta asosiy tarkibdan iborat:

1. **Block** (blok)
2. **Element** (element)
3. **Modifier** (modifikator)

---

## ✅ 1. Block (Blok) — mustaqil komponent

Blok — bu mustaqil UI komponenti: **menu**, **card**, **button**, **header** va hokazo.

```html
<div class="card"></div>
```

Bu yerda `.card` — blok.

---

## ✅ 2. Element — blok ichidagi qismlar

Element — bu **blokga bog‘liq** bo‘lgan ichki qismlar. Ular **ikkita pastki chiziq `__`** bilan yoziladi.

```html
<div class="card">
  <h2 class="card__title">Mahsulot nomi</h2>
  <p class="card__desc">Mahsulot tavsifi</p>
</div>
```

* `card__title` — bu `.card` blokining elementi
* `card__desc` — ham `.card` ichidagi yana bir element

❗ Element **faqat** o‘z blokiga tegishli bo‘ladi. Ya’ni `.menu__item` faqat `.menu` blokida bo‘ladi.

---

## ✅ 3. Modifier — holat yoki ko‘rinishdagi o‘zgarish

Modifier — bu blok yoki elementning **xatti-harakati yoki turini** ko‘rsatadi. U **ikki pastki chiziq va bitta tire `--`** bilan yoziladi.

```html
<button class="button button--primary">Yuborish</button>
<button class="button button--danger">O‘chirish</button>
```

Yoki elementga modifier:

```html
<div class="card__title card__title--big">Sarlavha</div>
```

---

## 🎯 Amaliy misol

HTML:

```html
<div class="form">
  <label class="form__label" for="email">Email</label>
  <input class="form__input" type="email" id="email" />
  <button class="form__button form__button--disabled">Yuborish</button>
</div>
```

SCSS:

```scss
.form {
  padding: 16px;

  &__label {
    font-weight: bold;
  }

  &__input {
    padding: 8px;
    border: 1px solid #ccc;
  }

  &__button {
    padding: 10px 20px;
    background-color: blue;
    color: white;

    &--disabled {
      background-color: gray;
      cursor: not-allowed;
    }
  }
}
```

---

## 💡 Nega BEM foydali?

1. **Katta loyihalarda tartibni saqlaydi**
2. **Kodlar modulli va qayta ishlatiladigan bo‘ladi**
3. **Yaxshi jamoa ishlashi uchun mos**
4. **SCSS bilan ideal ishlaydi (nesting)**
5. **CSS chalkashib ketmaydi**

---

## 😎 BEM bo‘yicha maslahatlar

* Hech qachon elementni o‘zi alohida ishlatmang: `__title` emas, `card__title`
* Modifier — holat, tip, rang, status kabi o‘zgaruvchilar uchun ishlatiladi
* Block ichida boshqa block’ni joylashtirish — **boshqa blok** deb qaraladi

Misol:

```html
<div class="modal">
  <div class="modal__content">
    <button class="button button--secondary">Yopish</button>
  </div>
</div>
```

Bu yerda `.button` boshqa blok, `modal` ichida ishlatilmoqda — bu to‘g‘ri.

---

## ❌ BEMda noto‘g‘ri usullar

**Yomon:**

```html
<div class="card-title"></div>
<div class="card__desc__bold"></div>
```

**To‘g‘ri:**

```html
<div class="card__title card__title--bold"></div>
```

---

## 🧠 Yakuniy tavsiyalar

* **Element (`__`) faqat blokga bog‘liq bo‘ladi**
* **Modifier (`--`) holat yoki variant**
* **Katta jamoaviy loyihalarda BEM shart**
* **SCSSda nesting bilan birga ideal natija beradi**

---

</details>