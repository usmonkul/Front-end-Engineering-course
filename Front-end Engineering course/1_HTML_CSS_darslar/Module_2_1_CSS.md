# CSS darslari

<details>
    <summary>CSS Selektorlar va Specificity (Aniqlik darajasi)</summary>
---

# CSS Selektorlar va Specificity (Aniqlik darajasi)

---

## Selektorlar nima?

**CSS selektorlar** — HTML elementlarini tanlab, ular uchun stil qo‘llash imkonini beradigan vositadir.  
Selektorlar qaysi element(lar)ga qaysi qoidalar taalluqli ekanligini aniqlaydi.

Misol:

```css
p {
  color: blue;
}
```
Bu qoidalar sahifadagi barcha `<p>` teglari uchun ishlaydi.

---

## Selektorlar turlari

### 1. Element (Type) Selektor

HTML tegi asosida elementni tanlaydi.

```css
h1 {
  font-size: 32px;
}
p {
  line-height: 1.5;
}
```

### 2. Class Selektor

`class` atributiga ega elementlarni tanlaydi. `.` belgisi bilan yoziladi.

```css
.title {
  font-weight: bold;
}
```

HTML:

```html
<h2 class="title">Yangiliklar</h2>
```

### 3. ID Selektor

`id` atributiga ega elementni tanlaydi. `#` belgisi bilan yoziladi.

```css
#main-content {
  background-color: #f0f0f0;
}
```

HTML:

```html
<div id="main-content">Asosiy ma’lumotlar...</div>
```

**Eslatma:** Sahifada bir ID faqat **bitta elementga** berilishi kerak.

### 4. Universal Selektor

Hamma elementlarni tanlaydi.

```css
* {
  margin: 0;
  padding: 0;
}
```

### 5. Guruhlangan Selektorlar

Bir nechta elementlarga bir xil stil berish.

```css
h1, h2, h3 {
  font-family: Arial, sans-serif;
}
```

### 6. Kengaytirilgan Selektorlar

#### a) Avlod (Descendant) Selektor

Ichidagi elementlarni tanlaydi.

```css
article p {
  color: gray;
}
```
Bu faqat `<article>` ichidagi `<p>` teglariga ta’sir qiladi.

#### b) Farzand (Child) Selektor (`>`)

Faqat **birinchi darajali** bolalarni tanlaydi.

```css
ul > li {
  list-style-type: square;
}
```

#### c) Qo‘shni Aka-uka (Adjacent Sibling) Selektor (`+`)

Bir elementdan **darhol keyingi** elementni tanlaydi.

```css
h2 + p {
  margin-top: 0;
}
```

#### d) Barcha Aka-uka (General Sibling) Selektor (`~`)

Bir elementdan keyingi **hamma** aka-uka elementlarni tanlaydi.

```css
h2 ~ p {
  color: darkgreen;
}
```

---

## Pseudo-class va Pseudo-elementlar

### Pseudo-classlar (`:` bilan)

Holat yoki maxsus sharoitdagi elementlarga stil berish.

```css
a:hover {
  text-decoration: underline;
}
input:focus {
  border-color: blue;
}
li:first-child {
  color: red;
}
```

### Pseudo-elementlar (`::` bilan)

Elementning ma'lum qismini tanlab stil berish.

```css
p::first-line {
  font-weight: bold;
}
h1::after {
  content: " 🔥";
}
```

---

## Specificity (Aniqlik darajasi)

Specificity — agar bir elementga bir nechta stil qoidalari taalluqli bo‘lsa, **qaysi stil ishlashini aniqlash tartibi**.

### Specificity hisoblash

Har bir selektor uchun specificity quyidagicha baholanadi:

| Selektor turi | Bahosi |
|:--|:--|
| Inline style (`style=""`) | 1000 |
| ID selektor | 100 |
| Class, Attribute, Pseudo-class | 10 |
| Element, Pseudo-element | 1 |

**Misollar:**

```css
/* Specificity: 1 */
p {
  color: blue;
}

/* Specificity: 10 */
.title {
  color: green;
}

/* Specificity: 100 */
#main {
  color: red;
}
```

Agar bir `<p>` elementi `class="title"` va `id="main"` ga ega bo‘lsa, `#main` qoidasi ishlaydi, chunki uning specificity ko‘proq.

---

### Specificity amaliy misol

HTML:

```html
<p id="info" class="highlight">Xush kelibsiz!</p>
```

CSS:

```css
p {
  color: blue; /* Specificity = 1 */
}
.highlight {
  color: green; /* Specificity = 10 */
}
#info {
  color: red; /* Specificity = 100 */
}
```

**Natija:** Matn **qizil** bo‘lib chiqadi (`#info` specificity eng yuqori).

---

## !important haqida

Agar kerak bo‘lsa, specificity qoidalarini **zo‘rlab buzish** uchun `!important` ishlatiladi.

```css
p {
  color: green !important;
}
```

Bu har qanday boshqa qoidalardan ustun bo‘ladi, lekin **foydalanishni minimumga tushirish tavsiya etiladi**, chunki kodni murakkablashtiradi.

---

## Eng yaxshi amaliyotlar (Best Practices)

- ID selektorlardan kam foydalaning. Ular specificity muammolarini oshiradi.
- Class selektorlar asosida dizayn quring (class-based architecture).
- Kodingizni o‘qiladigan va boshqariladigan qiling.
- `!important` faqat majburiy holatlarda ishlating.
- Specificity qoidalarini tushunib, tartibli yozing.

---

## Amaliy Mashg‘ulot

- HTML sahifa yarating:  
  - Bir nechta `<section>`, `<article>`, `<p>` va `<a>` teglari bilan.
- Ularga turli class va id qo‘shing.
- CSS orqali ularni:
  - Rangi, shrift o‘lchami va oraliqlarini o‘zgartiring.
  - Hover effektlar qo‘shing.
  - Specificityni o‘zaro solishtirib ko‘ring.

---

## Uyga Vazifa

- O‘zingiz mustaqil ravishda kichik blog sahifasi yarating:
  - Har bir bo‘limga alohida class va id bering.
  - Specificityni hisoblab, qaysi stil ustun bo‘lishini bilib oling.
  - Kamida 3 ta pseudo-class (`:hover`, `:focus`, `:first-child`) va 2 ta pseudo-element (`::before`, `::after`) ishlating.

---

</details>

<details>
    <summary>CSS Box Model va Layout Texnikalari</summary>

---

# CSS Box Model va Layout Texnikalari

---

## Box Model nima?

**Box Model** — HTML sahifadagi **har bir element** aslida bir **quti (box)** sifatida tasvirlanishini anglatadi.  
Bu quti quyidagi qismlardan iborat:

- **Content** — Asosiy matn yoki rasm joylashgan ichki qism
- **Padding** — Content atrofidagi ichki bo‘sh joy
- **Border** — Padding va Content atrofidagi chiziq
- **Margin** — Elementning tashqi bo‘sh joyi, boshqa elementlardan masofa

---

### Box Model Strukturasi (ko‘rinishi):

```
+---------------------------+
|        Margin             |
|  +---------------------+  |
|  |      Border          |  |
|  |  +---------------+   |  |
|  |  |   Padding      |   |  |
|  |  |  +---------+   |   |  |
|  |  |  | Content |   |   |  |
|  |  |  +---------+   |   |  |
|  |  +---------------+   |  |
|  +---------------------+  |
+---------------------------+
```

---

## Box Model atributlari

### 1. Content

Bu yerda matn, rasm yoki boshqa elementlar joylashadi.

```css
p {
  font-size: 16px;
}
```

---

### 2. Padding

Content va Border o‘rtasidagi bo‘shliqni belgilaydi.

```css
p {
  padding: 20px;
}
```

**Tartibi:**
- `padding-top`
- `padding-right`
- `padding-bottom`
- `padding-left`

Qisqacha yozish ham mumkin:

```css
p {
  padding: 10px 15px 20px 25px; /* Tepadan, o‘ngdan, pastdan, chapdan */
}
```

---

### 3. Border

Element atrofidagi chiziq.

```css
div {
  border: 2px solid black;
}
```

Borderning kengligi, uslubi va rangi bo‘ladi:

| Border uslubi | Ta'rifi |
|:--|:--|
| solid | To‘g‘ri chiziq |
| dashed | Uzilgan chiziq |
| dotted | Nuqtali chiziq |
| double | Ikki chiziq |
| none | Chiziq yo‘q |

---

### 4. Margin

Elementni tashqi tomonidan bo‘sh joy beradi.

```css
h1 {
  margin: 20px;
}
```

Tartibi padding bilan bir xil:

```css
h1 {
  margin: 10px 15px 20px 25px;
}
```

**Margin Collapsing:**  
Ikki vertikal margin birlashib, faqat eng katta qiymat amal qiladi.

Misol:

```html
<h1 style="margin-bottom: 30px;">Sarlavha</h1>
<p style="margin-top: 20px;">Paragraf</p>
```

Bu yerda 30px emas, faqat **30px** bo‘ladi (30 + 20 emas).

---

## `box-sizing` xossasi

Standartda `width` va `height` **content** qismiga tegishli.  
Agar `padding` va `border` qo‘shilsa, umumiy o‘lcham oshib ketadi.

Buni boshqarish uchun:

```css
* {
  box-sizing: border-box;
}
```

Bu sozlama bilan:

- `width` ichiga padding va border ham kiradi
- Layout nazorat qilish ancha osonlashadi

**Misol:**

```css
div {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: border-box;
}
```

Elementning umumiy o‘lchami **300px** bo‘lib qoladi, oshib ketmaydi.

---

## Layout Techniques — CSS orqali sahifa tuzish uslublari

---

### 1. Block va Inline elementlar

| Tur | Tavsif |
|:--|:--|
| Block elements | To‘liq kenglik egallaydi (`div`, `p`, `section`) |
| Inline elements | Faqat kerakli joyni egallaydi (`span`, `a`, `img`) |

---

### 2. Display xossalari

- `block`
- `inline`
- `inline-block`
- `none`
- `flex`
- `grid`

**Misollar:**

```css
nav ul {
  display: flex;
}
```

```css
img {
  display: inline-block;
}
```

---

### 3. Max-width va Responsiveness

Sahifaning ekran o‘lchamiga moslashishi uchun:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Bu rasmni ekranga moslab siqib beradi.

---

### 4. Center qilish

Elementni sahifa markaziga joylashtirish:

#### a) Text uchun:

```css
h1 {
  text-align: center;
}
```

#### b) Block element uchun:

```css
div {
  margin: 0 auto;
  width: 50%;
}
```

#### c) Flexbox orqali to‘liq markazlash:

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

---

## Amaliy Mashg‘ulot

- HTML sahifa yarating:
  - Bir `<div>` yarating va unga text va rasm joylashtiring.
  - Padding, Border va Margin qo‘shing.
  - `box-sizing: border-box` bilan o‘lchamni boshqaring.
- 2 ta `div` ni yonma-yon joylashtiring (`flex` ishlatib).

---

## Uyga Vazifa

- Kichik Layout yarating:
  - Header, Asosiy qism va Footer
  - Har bir qismda Box Model qismlarini ko‘rsating (ranglar bilan)
  - Max-width bilan sahifani responsiv qiling
- Bonus: Bitta rasmni markazga joylashtiring (`flex` yordamida).

---

</details>


<details>
    <summary>CSS Variables va Custom Properties</summary>

---

# CSS Variables va Custom Properties

---

## CSS Variables (Custom Properties) nima?

**CSS Variables** — bu CSS ichida **o‘zgaruvchilar** yaratish imkonini beradi, ya'ni bir qiymatni bir necha joyda qayta-qayta ishlatish va uni oson boshqarish imkoniyatini beradi.

Custom Properties quyidagicha e'lon qilinadi:

```css
:root {
  --main-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size-large: 24px;
}
```

- O‘zgaruvchilar har doim `--` belgisi bilan boshlanadi.
- `:root` selektori orqali barcha sahifada global qo‘llash mumkin.

---

## CSS Variables’ni qanday ishlatamiz?

Custom Property ishlatilayotganda `var()` funksiyasi orqali chaqiriladi.

```css
h1 {
  color: var(--main-color);
  font-size: var(--font-size-large);
}
```

Bu usul:
- Kodni **takrorlanishini kamaytiradi**
- **Stylingni boshqarishni osonlashtiradi**
- **Temalarni** dinamik o‘zgartirishga imkon beradi

---

## Local va Global Variables

- **Global Variable** — `:root` ichida e'lon qilingan va butun sahifada ishlatiladi.
- **Local Variable** — faqat ma'lum bir element yoki container ichida ishlatiladi.

**Misol:**

```css
:root {
  --main-bg: white;
}

.card {
  --card-bg: #f8f8f8;
  background-color: var(--card-bg);
}
```

Yuqorida `--main-bg` butun sahifa uchun, `--card-bg` esa faqat `.card` elementlari uchun amal qiladi.

---

## Variables bilan Dynamic Styling

Foydalanuvchi interaktsiyasi bo'yicha styling o‘zgartirish mumkin.

**Misol: Hoverda rang o‘zgartirish**

```css
:root {
  --btn-bg: #007bff;
  --btn-bg-hover: #0056b3;
}

button {
  background-color: var(--btn-bg);
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: var(--btn-bg-hover);
}
```

---

## Fallback qiymatlar

Agar biror o‘zgaruvchi mavjud bo‘lmasa, `var()` funksiyasiga ikkinchi qiymat (fallback) berish mumkin.

```css
p {
  color: var(--text-color, black);
}
```
Agar `--text-color` topilmasa, matn rangi **qora** bo‘ladi.

---

## CSS Variables bilan Theme yaratish

Custom Properties yordamida sayt uchun oson **Theme Switching (Mavzuni o‘zgartirish)** qilish mumkin.

**Misol: Light va Dark Theme**

```css
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
}

[data-theme="dark"] {
  --bg-color: #1e1e1e;
  --text-color: #f1f1f1;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

JavaScript bilan tema o‘zgartirish:

```javascript
function toggleTheme() {
  const body = document.body;
  if (body.getAttribute('data-theme') === 'dark') {
    body.setAttribute('data-theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
  }
}
```

HTML:

```html
<button onclick="toggleTheme()">Temani o‘zgartirish</button>
```

**Natija:** Tugmani bosganingizda sahifa Light yoki Dark rejimga o‘tadi.

---

## CSS Variables va SCSS Variables farqi

| CSS Variables | SCSS Variables |
|:--|:--|
| Brauzer tomonidan bajariladi | Kompilyatsiya paytida almashtiriladi |
| Dinamik ravishda o‘zgaradi | Dinamik emas |
| DOM ichida mavjud bo‘ladi | Faqat kod yozish vaqtida ishlatiladi |

Agar siz theme switching yoki JavaScript bilan stilni boshqarishni xohlasangiz, **CSS Variables** kerak.

---

## Amaliy Mashg‘ulot

- O‘z sahifangizda:
  - Rasmiy ranglar (`primary`, `secondary`, `background`, `text`) uchun variables yarating.
  - Heading va buttonlarga shu variables asosida ranglar berib chiqing.
- Bonus: Light/Dark rejim qo‘shing.

---

## Uyga Vazifa

- Blog Landing Page’ni oldingi mini loyihaga:
  - CSS Variables orqali ranglar va shrift o‘lchamlarini boshqarish funksiyasini qo‘shing.
  - Har bir rang va font o‘lchamini o‘zgaruvchi qilib belgilang.
- Bonus: Button orqali sahifa temalarini Light va Dark rejimga o‘tkazadigan kod yozing.

---

</details>


<details>
    <summary>CSS Positioning: Relative, Absolute, Fixed</summary>

---

# CSS Positioning: Relative, Absolute, Fixed, Sticky

---

## Position nima?

CSS’da **position** xossasi elementni sahifadagi joylashuvini aniqlash uchun ishlatiladi.

`position` yordamida elementlar o‘z oqimidan mustaqil harakatlantirilishi yoki sahifaga nisbatan aniq joylashtirilishi mumkin.

---

## CSS Position turlari

| Tur | Tavsifi | Document flow |
|:--|:--|:--|
| static | Standart holat, oqimga mos (default) | Oqimda qoladi |
| relative | O‘z joyiga nisbatan siljiydi | Oqimda qoladi (joyni saqlaydi) |
| absolute | Eng yaqin **containing block**ga nisbatan joylashadi | Oqimdan chiqadi |
| fixed | Brauzer oynasiga (viewport) nisbatan joylashadi | Oqimdan chiqadi |
| sticky | Scroll chegarasida fixed bo‘lib qoladi | Oqimda, keyin fixed |

---

## 1. Static (default)

Elementlar odatiy oqimda, hech qanday o‘zgarishsiz joylashadi.

```css
div {
  position: static;
}
```
**Hech qanday `top`, `left`, `right`, `bottom` xossalari ishlamaydi.**

---

## 2. Relative

Element o‘zining odatiy joyidan **nisbatan** ko‘chiriladi.

```css
.box {
  position: relative;
  top: 20px;
  left: 30px;
}
```

**Muhim:** Relative element hali ham **document flow**da qoladi — ya'ni `top`/`left` berilsa ham uning joyi bo‘sh qolmaydi. Boshqa elementlar uning "asl joyi"ni egallaydi, faqat ko‘rinishi siljiydi.

**Tushuntirish:**
- Element asl joyida **joy olgani** saqlanadi (bo‘sh qolmaydi).
- `top`, `left`, `right`, `bottom` orqali **vizual** jihatdan siljiydi.
- Boshqa elementlarga joylashuv ta'sir qilmaydi.

**Ko‘rish uchun diagramma:**
```
[ Element 1 ]  [ Box: relative, top:20px ]  [ Element 2 ]
                     ↓ siljidi
              [ Box ko‘rinishi ]
```

**Amaliy misol:**

```html
<div class="box" style="position: relative; top: 10px; left: 15px; background: lightblue;">
  Men nisbatan ko‘chirildim
</div>
```

**Qayerda ishlatiladi:** Badge, ikonka joylashishi, z-index uchun "ota" yaratish (absolute bola uchun).

---

## 3. Absolute

Element **document flowdan chiqariladi** — boshqa elementlar uning joyini egallamasligini hisobga olmaydi, lekin u ular bilan ustma-ust tushishi mumkin.

**Containing block (o‘ram blok):** `absolute` element eng yaqin **positioned ancestor** (ota-element) ga nisbatan joylashadi — ya'ni `position: relative`, `absolute`, `fixed` yoki `sticky` bo‘lgan element.

> ⚠️ **Eslatma:** `transform`, `filter` yoki `perspective` qo‘llangan ota-element ham yangi containing block yaratadi — bu ko‘pincha kutilmagan natija beradi.

```
┌─────────────────────────────┐
│  Ota (position: relative)  │
│  ┌───────────────────────┐  │
│  │ absolute child        │  │  ← top, left ga nisbatan
│  └───────────────────────┘  │
└─────────────────────────────┘
```

**Amaliy misol — yuqori chap burchakdagi badge:**

```html
<div class="card" style="position: relative;">
  <span class="badge" style="position: absolute; top: 10px; right: 10px;">Yangi</span>
  Mahsulot kartochkasi
</div>
```

### Absolute orqali markazlashtirish (modal, overlay)

Bu eng keng qo‘llanadigan pattern — elementni ota-element ichida markazga joylashtirish:

```css
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

`top: 50%` va `left: 50%` — elementning yuqori chap burchagini markazga olib keladi.  
`transform: translate(-50%, -50%)` — o‘z o‘lchamining yarmiga ortga siljitib, haqiqiy markazga qo‘yadi.

### `left` + `right` va `top` + `bottom` birgalikda

Ikkalasini ham bersangiz, element **cho‘ziladi** — bu to‘liq overlay uchun qulay:

```css
.overlay {
  position: absolute;
  inset: 0;  /* top: 0; right: 0; bottom: 0; left: 0; */
}
```

Element ota-elementni to‘liq qoplaydi.

---

## 4. Fixed

Element **brauzer oynasiga** (viewport) nisbatan joylashadi va scroll qilganda ham o‘z joyini o‘zgartirmaydi.

```css
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #333;
  color: white;
}
```

**Amaliy misol:**

```html
<nav style="position: fixed; top: 0; left: 0; right: 0; background: black; color: white; padding: 10px;">
  Navigatsiya paneli
</nav>
```

- Har doim ekranning yuqorisida ko‘rinib turadi.
- Sahifa pastga scroll qilganda ham navigatsiya yo‘qolmaydi.

> ⚠️ **Gotcha:** Agar ota-elementda `transform`, `filter` yoki `perspective` bo‘lsa, `fixed` element viewportga emas, shu ota-elementga nisbatan joylashadi — `absolute` kabi ishlaydi.

**Qayerda ishlatiladi:** Fixed header/footer, "yuqoriga" tugmasi, modal, cookie banner.

---

## 5. Sticky

Element avval **oqimda** joylashadi, scroll ma’lum chegaraga yetganda **fixed** bo‘lib qoladi.

```css
.sticky-header {
  position: sticky;
  top: 0;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

**Qanday ishlaydi:**
- `top: 0` — element viewport tepasiga yetganda joylashadi.
- O‘z ota-elementi (masalan, `<section>`) ekrandan chiqib ketguncha sticky bo‘lib turadi.
- Ota-element scroll dan chiqsa, element ham birga ketadi.

**Qayerda ishlatiladi:** Jadval sarlavhalari, sticky sidebar, sticky filter paneli.

---

## Top, Left, Right, Bottom

Position berilgandan so‘ng ushbu xossalar bilan elementni harakatlantiramiz:

- `top: 20px` — tepadan 20px pastga tushadi
- `left: 50px` — chapdan 50px o‘ngga siljiydi
- `right: 10px` — o‘ngdan 10px chapga suriladi
- `bottom: 30px` — pastdan 30px tepaga ko‘tariladi

**Pro tip:** `left` va `right` **ikkalasini** bersangiz, element gorizontal cho‘ziladi. `top` va `bottom` — vertikal. `inset: 0` — hammasi nol (to‘liq overlay).

---

## z-index — ustma-ust joylashuv

`position: absolute`, `fixed` yoki `sticky` berilganda **z-index** elementlarning ustma-ust tartibini belgilaydi. Raqam kattaroq bo‘lsa, element yuqorida ko‘rinadi.

```css
.modal {
  position: fixed;
  z-index: 1000;
}
```

> ⚠️ **Muhim:** `z-index` faqat `position` static **bo‘lmagan** elementlarda ishlaydi. `position: static` (default) da z-index hech narsa qilmaydi.

---

## Real loyihalarda qo‘llanilishi

| Vaziyat | Position |
|:--|:--|
| Kartochka ustidagi "Yangi" badge | `relative` (ota) + `absolute` (badge) |
| Dropdown menyu | `relative` (tugma) + `absolute` (menyu) |
| Modal, overlay | `fixed` + `z-index` |
| Yuqoriga qotib turadigan header | `sticky` |
| Yuqoriga scroll tugmasi | `fixed` |
| Cookie banner | `fixed` |

---

## Troubleshooting — "nima uchun ishlamayapti?"

| Muammo | Sabab | Yechim |
|:--|:--|:--|
| Absolute element sahifaga nisbatan joylashyapti | Ota-elementda positioning yo‘q | Ota-elementga `position: relative` qo‘shing |
| z-index ishlamayapti | Element `position: static` | `position: relative` yoki boshqa positioned qiymat bering |
| Fixed scroll bilan birga harakatlanadi | Ota-elementda `transform`/`filter` bor | Transformni boshqa elementga ko‘chiring yoki fixed ni boshqa joyda ishlating |

---

## Amaliy Mashg‘ulot

1. **Relative + Absolute:** Mahsulot kartochkasi yarating — ota divga `position: relative`, ichida yuqori o‘ng burchakda "Yangi" badge (`position: absolute; top: 10px; right: 10px`).
2. **Fixed:** `<nav>` qo‘shing va `position: fixed; top: 0; left: 0; right: 0` bilan yuqoriga joylashtiring — scroll qilganda ham ko‘rinsin.
3. **Centering:** Modal oyna yarating — `position: fixed` + `inset: 0` overlay, ichida `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)` bilan markazda matn.

---

## Uyga Vazifa

**Mini loyiha (faqat HTML + CSS):**

- **Fixed** navigatsiya — yuqorida, scrollda ham qotib turadi.
- **Asosiy qism** — kamida 2 ta kartochka, har birida `relative` ota va `absolute` badge (masalan, "Chegirma", "Yangi").
- **Modal** — biror tugma bosilganda (yoki boshlang‘ichda) overlay + markazdagi oyna. `z-index` bilan boshqa elementlardan yuqorida ko‘rinsin.

---

</details>


<details>
    <summary>Flexbox Masterclass — Mukammal Layoutlar uchun Flexbox</summary>

---

# Flexbox Masterclass — Mukammal Layoutlar uchun Flexbox

---

## Flexbox nima?

**Flexbox (Flexible Box Layout)** — bu CSS’ning zamonaviy tizimi bo‘lib, elementlarni **qator** (row) yoki **ustun** (column) bo‘yicha oson va moslashuvchan (responsive) joylashtirish imkonini beradi.

Flexbox yordamida:
- Markazga joylashtirish
- Bo‘shliqlarni avtomatik taqsimlash
- Elementlarning tartibini oson boshqarish
- Moslashuvchan layoutlar yaratish mumkin

---

## Flexbox’ni qanday yoqamiz?

Elementni `flex-container` qilish uchun `display: flex` beriladi.

```css
.container {
  display: flex;
}
```

Sof HTML misol:

```html
<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>
```

---

## Flexbox Asosiy O‘zgaruvchilari

### 1. Flex Container (otasining sozlamalari)

| Xossa | Tavsifi |
|:--|:--|
| `flex-direction` | Asosiy o‘qni belgilaydi (qator yoki ustun) |
| `justify-content` | Asosiy o‘q bo‘ylab joylashtirish |
| `align-items` | Kesishma o‘q (cross axis) bo‘yicha tekislash |
| `align-content` | Bir nechta qatorda joylashgan elementlarni boshqarish |
| `flex-wrap` | Elementlarning o‘ralishi (wrap bo‘lishi) |

---

### 2. Flex Items (ichki elementlarning sozlamalari)

| Xossa | Tavsifi |
|:--|:--|
| `order` | Elementlarning tartibini o‘zgartiradi |
| `flex-grow` | Bo‘sh joyni to‘ldirish darajasi |
| `flex-shrink` | Kichraytirish darajasi |
| `flex-basis` | Asosiy o‘lcham (dastlabki o‘lcham) |
| `align-self` | Faqat bitta elementni kesishma o‘q bo‘yicha joylashtirish |

---

## Flex Container xossalari tafsilotlari

### `flex-direction`

Asosiy o‘qni belgilaydi:

- `row` — chapdan o‘ngga (default)
- `row-reverse` — o‘ngdan chapga
- `column` — yuqoridan pastga
- `column-reverse` — pastdan yuqoriga

Misol:

```css
.container {
  display: flex;
  flex-direction: row;
}
```

---

### `justify-content`

Elementlarni asosiy o‘q bo‘ylab joylashtirish:

| Qiymat | Tavsifi |
|:--|:--|
| `flex-start` | Boshidan boshlaydi |
| `flex-end` | Oxiridan boshlaydi |
| `center` | Markazda |
| `space-between` | O‘rtada bo‘shliq bilan |
| `space-around` | Har ikki tomonda bo‘shliq |
| `space-evenly` | Teng oraliqda |

Misol:

```css
.container {
  display: flex;
  justify-content: center;
}
```

---

### `align-items`

Elementlarni kesishma o‘q (cross axis) bo‘yicha tekislash:

| Qiymat | Tavsifi |
|:--|:--|
| `stretch` | Elementlar balandlikni to‘ldiradi (default) |
| `flex-start` | Tepadan |
| `flex-end` | Pastdan |
| `center` | Vertikal markazda |
| `baseline` | Matnning asosiy chizig‘iga tekislanadi |

Misol:

```css
.container {
  display: flex;
  align-items: center;
}
```

---

### `flex-wrap`

Elementlar konteynerdan oshsa, yangi qatorga o‘tish:

- `nowrap` — (default) Hammasi bitta qator
- `wrap` — Oshsa, keyingi qatorga tushadi
- `wrap-reverse` — Teskari o‘raladi

```css
.container {
  flex-wrap: wrap;
}
```

---

## Flex Items xossalari tafsilotlari

### `flex-grow`

Bo‘sh joyni qancha ko‘p egallash kerakligini belgilaydi.

```css
.box {
  flex-grow: 1;
}
```

Barcha `box` lar teng bo‘linadi.

Agar bittasiga `flex-grow: 2` berilsa, u boshqalariga nisbatan ikki barobar ko‘proq joy oladi.

---

### `flex-shrink`

Kichraytirish darajasi.

```css
.box {
  flex-shrink: 1;
}
```

Odatda default qiymat 1. `0` bersangiz, kichraymaydi.

---

### `flex-basis`

Elementning boshlang‘ich o‘lchamini belgilaydi.

```css
.box {
  flex-basis: 200px;
}
```

Elementning asosiy o‘qi bo‘ylab boshlang‘ich eni yoki balandligi (directionga qarab).

---

### `order`

Elementlarning tartibini o‘zgartirish:

```css
.box1 {
  order: 2;
}
.box2 {
  order: 1;
}
```

Katta `order` qiymatiga ega elementlar keyinroq ko‘rsatiladi.

---

### `align-self`

Faqat bitta elementni kesishma o‘q bo‘yicha alohida tekislash.

```css
.box-special {
  align-self: flex-end;
}
```

---

## Amaliy Layout Misoli

```html
<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.box {
  background-color: #3498db;
  color: white;
  padding: 20px;
  margin: 10px;
  flex-basis: 30%;
  text-align: center;
}
```

Natija:
- 3 ta box yonma-yon turadi
- Ekran kichrayganda wrap qiladi
- Elementlar markazga tekislangan

---

## Flexbox afzalliklari

- Responsive dizayn yaratish oson.
- Markazlashtirish muammosiz bajariladi.
- Tartib va joylashuv ustidan to‘liq nazorat.
- Murakkab media queries kamroq talab etiladi.

---

## Amaliy Mashg‘ulot

- 3 ta quti (`box`) yaratib:
  - Ularni markazlashtiring
  - `flex-grow` va `flex-basis` bilan o‘lchamlarini nazorat qiling
  - `order` o‘zgartirib, ularning ketma-ketligini almashtiring

---

## Uyga Vazifa

- Bosh sahifa uchun **header**, **main content** va **footer** layoutini Flexbox yordamida tuzing.
- `justify-content`, `align-items`, `flex-wrap` va `order` imkoniyatlarini ishlating.
- Ekran o‘lchami kichrayganda layout moslasha olishi kerak.

---

</details>


<details>
    <summary>CSS Grid Layout Deep Dive — To‘liq Qo‘llanma</summary>

---

# CSS Grid Layout Deep Dive — To‘liq Qo‘llanma

---

## CSS Grid nima?

**CSS Grid** — sahifadagi elementlarni **ikkala o‘q** (gorizontal va vertikal) bo‘yicha joylashtirish uchun ishlatiladigan kuchli layout tizimi.  
Flexbox faqat bitta o‘qda ishlasa, Grid esa ikki o‘qni birgalikda boshqaradi.

---

## Grid qanday yoqiladi?

Elementni grid container qilish uchun:

```css
.container {
  display: grid;
}
```

HTML:

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

---

## Asosiy Grid xossalari

### 1. `grid-template-columns` va `grid-template-rows`

- Qancha ustun (column) va qator (row) bo‘lishini belgilaydi.

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px; /* 3 ta ustun */
  grid-template-rows: 100px 100px; /* 2 ta qator */
}
```

**Natija:** 3 ta ustun, 2 ta qator.

---

### 2. Fr units (`fr`)

Fraksiya (`fr`) birliklari mavjud bo‘lib, mavjud bo‘sh joyni taqsimlash uchun ishlatiladi.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
```
- Birinchi ustun 1 ulush
- Ikkinchi ustun 2 ulush joy egallaydi

---

### 3. Auto-fit va Auto-fill

Responsive layout yaratishda ishlatiladi.

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

- **auto-fit**: Ekran kengayganda/yig‘ilganda maksimal qatorlarni to‘ldiradi.
- **minmax(200px, 1fr)**: Ustun 200px dan kichik bo‘lmaydi va kerak bo‘lsa kengayadi.

---

## Elementlarni joylashtirish (Placing Items)

### 1. `grid-column` va `grid-row`

Grid ichidagi elementlarni qaysi ustun/qatorga joylashtirish.

```css
.item1 {
  grid-column: 1 / 3; /* 1-ustundan 3-ustungacha cho‘ziladi */
}
```

```css
.item2 {
  grid-row: 1 / 3; /* 1-qatordan 3-qatorgacha cho‘ziladi */
}
```

---

### 2. `grid-area`

Elementni nomlab, uni layoutda joylashtirish.

HTML:

```html
<div class="container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main</div>
  <div class="footer">Footer</div>
</div>
```

CSS:

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
}

.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.main {
  grid-area: main;
}
.footer {
  grid-area: footer;
}
```

**Natija:** Tizimli va oson o'qiladigan sahifa struktura.

---

### 3. `justify-items` va `align-items`

Barcha grid elementlarni o‘z qutisi ichida gorizontal va vertikal tekislaydi.

```css
.container {
  justify-items: center;
  align-items: center;
}
```

- `start`, `end`, `center`, `stretch` qiymatlari qabul qiladi.

---

### 4. `justify-content` va `align-content`

Butun grid’ni konteyner ichida boshqarish:

```css
.container {
  justify-content: space-around;
  align-content: center;
}
```

- `space-between`, `space-around`, `center`, `start`, `end` va `stretch` imkoniyatlari mavjud.

---

## Responsive Grid Layout

Kichik ekranlar uchun moslashuvchan grid tuzish:

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

- `gap` — ustunlar va qatorlar orasidagi masofa belgilaydi.
- Elementlar ekran kichrayganda avtomatik yangi qatorga tushadi.

---

## Amaliy Layout Misoli

HTML:

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

CSS:

```css
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.item {
  background-color: #3498db;
  color: white;
  font-size: 20px;
  text-align: center;
  padding: 40px 0;
}
```

Natija:
- 2 ustunli grid
- 10px bo‘shliq
- Responsive dizayn uchun oddiy tuzilma

---

## Grid va Flexbox farqlari

| Flexbox | Grid |
|:--|:--|
| Bitta o‘q (row yoki column) bo‘yicha ishlaydi | Ikkala o‘q (row va column) bo‘yicha ishlaydi |
| Elementlar oqimga qarab joylashadi | Oldindan aniqlangan kataklarga joylashadi |
| Dynamic elementlar uchun yaxshi | Tizimli layoutlar uchun ajoyib |

Frontend master bo‘lish uchun **Flexbox** va **Grid** ikkalasini ham chuqur bilish shart!

---

## Amaliy Mashg‘ulot

- HTML sahifa yarating:
  - Header, Sidebar, Main Content va Footer qismidan iborat sahifa yarating.
  - Grid tizimidan foydalaning.
  - `grid-template-areas` bilan joylashtiring.

---

## Uyga Vazifa

- Portfolio sahifangiz uchun:
  - Grid asosida Responsive Gallery yarating.
  - Rasm va matnlarni grid bilan to‘g‘ri va chiroyli tartibda joylashtiring.
- Bonus: `auto-fit` va `minmax` kombinatsiyasidan foydalanib, ekran o‘lchamiga moslashtiring.

---

</details>


<details>
    <summary>Responsive Web Design (Media Queries)</summary>

---

# Responsive Web Design (Media Queries)

---

## Responsive Web Design nima?

**Responsive Web Design** — bu web-sayt yoki web-ilovaning **turli ekran o‘lchamlarida (mobil, planshet, kompyuter)** mos va chiroyli ko‘rinishini ta’minlash usulidir.

**Asosiy maqsad:**  
- Bir nechta qurilmalarda sayt mukammal ko‘rinsin.
- Foydalanuvchi tajribasi (UX) doimo yuqori bo‘lsin.

---

## Media Query nima?

**Media Queries** — CSS orqali **ekran o‘lchamiga yoki qurilmaning xususiyatlariga qarab** maxsus uslublarni (style) qo‘llash imkonini beradi.

Yozilishi:

```css
@media (query) {
  /* CSS kodlar */
}
```

**Eng ko‘p ishlatiladigan query:** `max-width` va `min-width`.

---

## Media Query Asosiy Sintaksisi

```css
@media (max-width: 768px) {
  body {
    background-color: lightgray;
  }
}
```
**Tushuntirish:**  
Ekran kengligi **768px yoki undan kichik** bo‘lsa, sahifa orqa foni kulrang bo‘ladi.

---

## Media Query Turli Misollar

### Mobil uchun (kichik ekranlar)

```css
@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
```
- Ekran kichik bo‘lsa, flex qatori ustunga (column) o‘zgaradi.

### Planshet uchun (o‘rta ekranlar)

```css
@media (min-width: 601px) and (max-width: 992px) {
  .container {
    padding: 20px;
  }
}
```

### Desktop uchun (katta ekranlar)

```css
@media (min-width: 993px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

---

## Media Queryda `min-width` va `max-width` farqi

- `min-width`: **Mobile First** dizayn uchun tavsiya qilinadi. (kichik ekranda boshlaysiz, keyin kattalashtirasiz)
- `max-width`: Desktop dizaynidan kichraytirish kerak bo‘lsa ishlatiladi.

**Tavsiya:** Har doim **Mobile-First Approach** ishlating!

---

## Responsive dizaynda ishlatiladigan keng tarqalgan breakpointlar

| Qurilma turi | Breakpoint |
|:--|:--|
| Kichik telefonlar | max-width: 480px |
| Oddiy telefonlar | max-width: 600px |
| Planshetlar | max-width: 768px |
| Kichik noutbuklar | max-width: 992px |
| Katta noutbuklar/desktops | max-width: 1200px |

Bu qiymatlar kompaniya yoki loyiha talabiga qarab o‘zgarishi mumkin.

---

## Media Queryda `orientation` ishlatish

Agar qurilma gorizontal yoki vertikal holatda bo‘lsa, turli stil qo‘llash:

```css
@media (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```

- `portrait` — vertikal
- `landscape` — gorizontal

---

## Media Queries bilan Responsive Layout Misoli

HTML:

```html
<div class="grid">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

CSS:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

**Natija:**
- Katta ekranda 3 ta ustun
- O‘rta ekranda 2 ta ustun
- Telefonlarda 1 ta ustun

---

## Eng Yaxshi Amaliyotlar (Best Practices)

- **Mobile-First Approach** bilan kod yozing (`min-width`).
- **Kichikdan katta** o‘lchamlarga o‘tishni nazorat qiling.
- `em` yoki `rem` birliklaridan foydalaning (piksel o‘rniga) → oson moslashuvchanlik uchun.
- `max-width: 100%` va `height: auto` bilan rasm va videolarni moslashuvchan qiling.
- Har bir breakpointda sinov qiling: telefon, planshet, desktop qurilmalarda.

---

## Amaliy Mashg‘ulot

- HTML sahifa yarating:
  - 3 ta kartochka (`card`) yarating.
  - Katta ekranda yonma-yon (row) holatida turing.
  - Planshetlarda 2 ta qatorga, telefonlarda esa 1 ta qatorga tushiring.

---

## Uyga Vazifa

- Avvalgi mini proyektingizni (Blog Landing Page) to‘liq responsiv qiling:
  - Navigatsiya kichik ekranda to‘g‘ri ko‘rinsin.
  - Maqolalar gridini media query orqali moslang.
- Bonus: Rasm va matn o‘lchamlarini kichik ekranda kichraytiring.

---

</details>


<details>
    <summary>Mobile-First Design Approach</summary>

---

# Mobile-First Design Approach

---

## Mobile-First nima?

**Mobile-First Design** — web-sayt yaratishda **avvalo kichik ekranlar** (telefonlar) uchun dizayn tuzish, keyin esa katta ekranlarga moslashtirib kengaytirish usulidir.

**Yadro g'oya:**  
> Avval eng muhim va asosiy kontentni mobil foydalanuvchiga qulay tarzda taqdim etish.

---

## Nima uchun Mobile-First muhim?

- Bugungi kunda **foydalanuvchilarning 70% dan ortig‘i** internetga telefon orqali ulanadi.
- Google **Mobile-First Indexing** siyosatini qabul qilgan (mobil versiya asosiy ko‘riladi).
- Mobil uchun optimallashtirilgan saytlar tezroq yuklanadi va foydalanuvchi tajribasi (UX) yuqorilaydi.

---

## Mobile-First va Desktop-First farqi

| Xususiyat | Mobile-First | Desktop-First |
|:--|:--|:--|
| Dizayn boshlanishi | Telefonlar uchun | Kompyuterlar uchun |
| CSS Media Queries | `min-width` ishlatiladi | `max-width` ishlatiladi |
| Prioritet | Tezlik, soddalik, asosiy ma’lumot | Ko‘plab vizual elementlar, murakkab struktur |
| Moslashuv | Kichikdan katta | Kattadan kichik |

**Tavsiya:** Har doim **Mobile-First** yondashuvi bilan ishlang.

---

## Mobile-First Media Queries Sintaksisi

**Mobile-First** uslubida avvalo asosiy (default) CSS yoziladi, keyin katta ekranlarga moslashish uchun media querylar qo‘shiladi.

```css
/* Avvalo telefonlar uchun stil */
.container {
  display: flex;
  flex-direction: column;
}

/* Planshetlar va undan katta ekranlar uchun */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}

/* Katta noutbuklar uchun */
@media (min-width: 1200px) {
  .container {
    padding: 40px;
  }
}
```

**Tushuntirish:**
- Dastlab mobil uchun minimal stil yozildi.
- Keyin `min-width` yordamida ekran kengayganda stil o‘zgartirildi.

---

## Mobile-First Dizayn Bosqichlari

### 1. Muhim kontentni aniqlang

- Eng zarur kontent birinchi o‘rinda turishi kerak.
- Masalan, header, asosiy navigatsiya, asosiy matn.

### 2. Soddalashtirilgan layout yarating

- Telefon ekranlari kichik: ortiqcha animatsiyalar, katta rasmlar va murakkab strukturadan qochish.

### 3. Eng kam stil bilan boshlang

- Minimal CSS.
- Faqat kerakli narsalar: fontlar, ranglar, asosiy joylashuv.

### 4. Progressive Enhancement qiling

- Keyinchalik katta ekranlar uchun layoutni kengaytiring.
- Qo‘shimcha bezaklar (rasmlar, animatsiyalar) faqat desktop versiyada qo‘shiladi.

---

## Real Hayotiy Misol: Header Layout

HTML:

```html
<header class="header">
  <div class="logo">MySite</div>
  <nav class="nav">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
</header>
```

CSS:

```css
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.nav a {
  display: block;
  margin: 5px 0;
}

/* Planshet va katta ekranlar uchun */
@media (min-width: 768px) {
  .header {
    flex-direction: row;
    justify-content: space-between;
  }

  .nav a {
    display: inline-block;
    margin: 0 10px;
  }
}
```

**Natija:**
- Telefon ekranida menyu vertikal ko‘rinadi.
- Planshet va katta ekranlarda menyu gorizontal bo‘lib joylashadi.

---

## Mobile-First Dizayn uchun Eng yaxshi amaliyotlar

- Rasm va videolarni moslashuvchan (`max-width: 100%`) qiling.
- Matnlar oson o‘qiladigan (`16px` va undan katta) bo‘lsin.
- Tugmalar va interaktiv elementlar mobil qurilmalarda bosish uchun yetarli (`min-height: 44px`) bo‘lsin.
- "Hamburger menu" kabi mobil navigatsiya usullaridan foydalaning.
- Har bir ekran o‘lchamida foydalanuvchi uchun eng muhim funksiyalar qulay bo‘lishini ta'minlang.

---

## Amaliy Mashg‘ulot

- O‘z sahifangiz uchun:
  - Dastlab mobil uchun soddalashtirilgan layout yarating.
  - Keyinchalik `min-width` media querylar orqali planshet va desktop versiyalarini qo‘shing.
- Header, Content va Footer qismlarini Mobile-First prinsipi asosida responsive qiling.

---

## Uyga Vazifa

- Mini loyiha:  
  - Blog Landing Page’ni Mobile-First prinsipi asosida to‘liq qayta yozing.
  - Mobilda asosiy kontentni yuqoriga qo‘ying, kamroq muhim kontentni pastga suring.
  - Katta ekranlar uchun navigatsiyani va layoutni kengaytiring.

---

</details>


<details>
    <summary>CSS Animations — Transitions va Keyframes</summary>
---

# CSS Animations — Transitions va Keyframes

---

## CSS Animatsiyalar nima?

**CSS Animatsiyalar** — HTML elementlarning o‘zgarishini **silliq** va **ko‘zga yoqimli** tarzda amalga oshirish imkonini beruvchi texnikadir.  
Bu foydalanuvchiga web-sahifa bilan yaxshiroq aloqada bo‘lish tajribasini yaratadi.

CSS’da ikki asosiy turdagi animatsiya mavjud:

1. **Transitions** — Bitta holatdan ikkinchi holatga silliq o‘tish
2. **Keyframes Animations** — Ko‘p bosqichli murakkab animatsiyalar

---

# 1. CSS Transitions

**Transition** yordamida elementning uslub o‘zgarishlarini silliqlashtirish mumkin.

---

## Transition Sintaksisi

```css
.element {
  transition: property duration timing-function delay;
}
```

| Qism | Tavsifi |
|:--|:--|
| property | Qaysi CSS xossasi animatsiyalanadi (`color`, `background-color`, `transform`, va h.k.) |
| duration | Animatsiya davomiyligi (`0.5s`, `1s`) |
| timing-function | Animatsiya tezligining o‘zgarish tarzi |
| delay | Animatsiyani boshlash uchun kutish vaqti |

---

## Oddiy Transition Misoli

HTML:

```html
<button class="btn">Bosing</button>
```

CSS:

```css
.btn {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: darkblue;
}
```

**Natija:** Tugmaga sichqoncha olib borganingizda rang silliq o‘zgaradi.

---

## Transition Timing Functions

| Function | Tavsifi |
|:--|:--|
| `ease` | Tez boshlanadi, sekin tugaydi |
| `linear` | Bir xil tezlikda |
| `ease-in` | Sekin boshlanadi |
| `ease-out` | Sekin tugaydi |
| `ease-in-out` | Sekin boshlanadi va sekin tugaydi |

Misol:

```css
transition: all 0.5s ease-in-out;
```

---

# 2. CSS Keyframes

**Keyframes** yordamida ko‘p bosqichli animatsiyalar yaratamiz.

---

## Keyframes Sintaksisi

```css
@keyframes animation-name {
  0% {
    /* Boshlang‘ich holat */
  }
  50% {
    /* O‘rtadagi holat */
  }
  100% {
    /* Yakuniy holat */
  }
}
```

Keyframes yaratgandan so‘ng, elementga quyidagicha qo‘llaniladi:

```css
.element {
  animation: animation-name duration timing-function delay iteration-count direction;
}
```

---

## Oddiy Keyframes Misoli

HTML:

```html
<div class="box"></div>
```

CSS:

```css
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  animation: moveBox 2s linear infinite;
}

@keyframes moveBox {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(0);
  }
}
```

**Natija:** Quti chapdan o‘ngga harakat qiladi va doimiy ravishda takrorlanadi.

---

## Animation Xossalari

| Xossa | Tavsifi |
|:--|:--|
| `animation-name` | Keyframes nomi |
| `animation-duration` | Necha sekund davom etadi |
| `animation-timing-function` | Harakat tezligi |
| `animation-delay` | Qancha vaqt kutib boshlaydi |
| `animation-iteration-count` | Necha marta takrorlanadi (`infinite` — cheksiz) |
| `animation-direction` | `normal`, `reverse`, `alternate`, `alternate-reverse` |

**Misol:**

```css
animation: moveBox 3s ease-in-out 0s infinite alternate;
```

- 3 sekund
- Sezilarli tezlanish va sekinlashish
- Cheksiz takrorlanadi
- Har safar teskari yo‘nalishda

---

## Bir nechta Animation’ni birlashtirish

Bir elementga bir vaqtning o‘zida bir nechta animatsiya berish mumkin.

```css
.element {
  animation: bounce 2s infinite, fade 4s infinite;
}
```

Bu element bir vaqtda sakraydi va sekin xiralashadi.

---

# Amaliy Mashg‘ulot

- HTML sahifa yarating:
  - 1 ta tugma (`button`) uchun `background-color` transition yozing.
  - 1 ta kvadrat (`div`) uchun `@keyframes` orqali harakat animatsiyasi yarating.
- Tugmaga hover qilinganida silliq rang o‘zgarishi ko‘rinsin.
- Kvadrat esa ekranda chapdan o‘ngga harakat qilsin.

---

# Uyga Vazifa

- Blog Landing Page loyihangizda:
  - Tugmalarga `hover` animatsiyalar qo‘shing (`transition` bilan).
  - Bitta element (`article` yoki `section`) sahifaga chiqqanda (`@keyframes`) sekin paydo bo‘ladigan effekt qo‘shing.
- Bonus: `infinite` va `alternate` animatsiyalarni kichik banner uchun yarating.

---

</details>