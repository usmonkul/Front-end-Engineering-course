# Front-end Engineering Course

<details>
<summary>Front-end Kursiga Kirish va Semantik HTML</summary>
---

# Front-end Kursiga Kirish va Semantik HTML

---

## Kurs haqida umumiy ma’lumot

Bu kurs orqali siz front-end dasturlashni chuqur o‘rganasiz. Kurs davomida quyidagi bilim va ko‘nikmalarni egallaysiz:

- Mukammal HTML5, CSS3 va JavaScript bilimlari
- ReactJS va TailwindCSS asosida zamonaviy web ilovalar yaratish
- GitHub, API bilan ishlash, Testlash, Deployment ko‘nikmalari
- Real loyihalar yaratib, portfoliongizni shakllantirasiz

Kurs 7 oy davom etadi. Haftasiga 3 ta dars bo‘ladi. Har darsda nazariya va amaliy mashg‘ulotlar o‘tkaziladi.

---

## Semantik HTML nima?

Semantik HTML — bu HTML elementlarini ularning ma’nosiga ko‘ra to‘g‘ri ishlatish demakdir.  
Bu nafaqat sahifaning ko‘rinishini, balki uning **mazmunini** ham aniqlab beradi.

**Nima uchun Semantik HTML kerak?**

- Nogironlar uchun: Ekran o‘quvchilari (Screen Reader) uchun sahifani tushunarli qiladi.
- SEO uchun: Google kabi qidiruv tizimlari sahifani to‘g‘ri tushunadi va indekslaydi.
- Kodingizni boshqa dasturchilar uchun osonroq o‘qiladigan qiladi.
- Loyihangizni barqaror va kelajakda oson rivojlantiriladigan qiladi.

---

## Asosiy Semantik Teglar va Ularning Vazifalari

| Teg | Vazifasi |
|:--|:--|
| `<header>` | Sahifaning yoki bo‘limning sarlavhasi |
| `<nav>` | Navigatsiya (menyu) bloklari |
| `<main>` | Sahifaning asosiy mazmuni |
| `<section>` | Alohida mavzuga oid kontent guruhi |
| `<article>` | Mustaqil maqola yoki blog posti |
| `<aside>` | Yon bo‘lim (reklama, bog‘liq maqolalar) |
| `<footer>` | Pastki qism (mualliflik huquqi, havolalar) |
| `<figure>` va `<figcaption>` | Rasm va uning taglavhasi |
| `<mark>` | Matnda muhim joylarni ajratish |
| `<time>` | Sana va vaqt ko‘rsatkichlari |

---

## Oddiy Semantik HTML Tuzilishi

Quyidagi kod sahifaning semantik tuzilishini ko‘rsatadi:

```html
<body>
  <header>
    <h1>Mening Saytim</h1>
    <nav>
      <ul>
        <li><a href="#">Bosh sahifa</a></li>
        <li><a href="#">Biz haqimizda</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section>
      <h2>Xush kelibsiz!</h2>
      <p>Bu sahifaning asosiy mazmuni.</p>
    </section>

    <article>
      <h2>Blog Post Sarlavhasi</h2>
      <p>Blog postining asosiy matni...</p>
    </article>
  </main>

  <aside>
    <h3>Qo‘shimcha Havolalar</h3>
    <ul>
      <li><a href="#">Boshqa maqola</a></li>
    </ul>
  </aside>

  <footer>
    <p>&copy; 2025 Mening Saytim</p>
  </footer>
</body>
```

---

## Semantik HTML yozish bo‘yicha maslahatlar

- Har doim **ma’noli** teglar tanlang (`<div>` emas, kerakli `<section>`, `<article>` kabi taglardan foydalaning).
- `<main>` tegi faqat **1 marta** sahifada ishlatilishi kerak.
- `<header>`, `<footer>`, `<nav>` kabi teglar har bir sahifa yoki bo‘lim uchun ishlatilishi mumkin.
- `<h1>` dan `<h6>` gacha bo‘lgan sarlavhalar **ketma-ketlik** bilan ishlatiladi (h2 dan oldin h1 bo‘lishi kerak).
- `<section>` har doim ichida sarlavha (`<h2>`, `<h3>`) bilan kelishi kerak.

---

## Amaliy Mashg‘ulot

O‘zingiz kichik sahifa yarating:

- `<header>` — sayt nomi va menyu
- `<nav>` — 3 ta navigatsion link
- `<main>` — bir `<section>` va bir `<article>`
- `<aside>` — "Boshqa maqolalar" ro‘yxati
- `<footer>` — pastki ma’lumotlar

Oddiy, ammo to‘g‘ri semantik tuzilish bo‘lishi kerak.

---

## Uyga Vazifa

- Mashhur biror web-saytni tanlang (masalan, wikipedia.org).
- Uning tuzilishini tahlil qiling: qaysi qismda qaysi semantik teg ishlatilgan bo‘lishi kerak?
- O‘zingiz kichik veb-sahifa yarating va unda barcha semantik teglarni to‘g‘ri ishlating.

---
</details>


<details>
<summary>Formalar va Validatsiya — Kengaytirilgan HTML Formalari </summary>

---

# Formalar va Validatsiya — Kengaytirilgan HTML Formalari

---

## Nima uchun forma muhim?

Formalar — foydalanuvchilardan ma'lumot olish uchun ishlatiladigan asosiy vositadir.  
Masalan: ro'yxatdan o'tish, kirish (login), izlash, sharh qoldirish va hokazo.

Yaxshi forma:
- Foydalanuvchi uchun qulay
- Ma’lumotlarni to‘g‘ri tekshiradi (validatsiya)
- Semantik jihatdan to‘g‘ri yoziladi
- Accessibility uchun tayyorlangan bo‘ladi

---

## HTML Formalar Asosiy Strukturasi

Formaning asosiy tuzilishi:

```html
<form action="/submit" method="POST">
  <label for="name">Ismingiz:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Yuborish</button>
</form>
```

### Muhim atributlar:
- `action` — formadagi ma’lumotlar yuboriladigan manzil (server URL)
- `method` — yuborish usuli (`GET` yoki `POST`)
- `required` — foydalanuvchi bu maydonni to‘ldirishi shart
- `for` va `id` — `<label>` va `<input>` ni bog‘lab, accessibilityni yaxshilaydi

---

## Input turlari (input types)

Formalarda ishlatiladigan eng ko‘p input turlari:

| Input turi | Maqsadi |
|:--|:--|
| `text` | Matnli ma'lumot |
| `email` | Email adres |
| `password` | Parol kiritish |
| `number` | Faqat raqamlar |
| `date` | Sana tanlash |
| `checkbox` | Bir yoki ko‘p variant belgilash |
| `radio` | Faqat bitta variant tanlash |
| `file` | Fayl yuklash |
| `url` | URL manzil kiritish |
| `tel` | Telefon raqami kiritish |

---

### Misol: Turli input turlari bilan forma

```html
<form>
  <label for="username">Foydalanuvchi nomi:</label>
  <input type="text" id="username" name="username" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="password">Parol:</label>
  <input type="password" id="password" name="password" minlength="6" required>

  <label for="birthdate">Tug‘ilgan sana:</label>
  <input type="date" id="birthdate" name="birthdate">

  <label>Jinsingiz:</label>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Erkak</label>

  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Ayol</label>

  <label for="hobby">Sevimli mashg‘ulotlaringiz:</label>
  <input type="checkbox" id="reading" name="hobby" value="reading">
  <label for="reading">Kitob o‘qish</label>

  <input type="checkbox" id="travel" name="hobby" value="travel">
  <label for="travel">Sayohat qilish</label>

  <br><br>
  <button type="submit">Yuborish</button>
</form>
```

---

## Validatsiya (tekshirish)

HTML5 formalar ko‘plab avtomatik validatsiya imkoniyatlariga ega:

### 1. `required`
Maydon to‘ldirilmagan bo‘lsa, forma yuborilmaydi.

```html
<input type="text" name="name" required>
```

### 2. `minlength` va `maxlength`
Matn uzunligini cheklash.

```html
<input type="text" name="username" minlength="3" maxlength="15">
```

### 3. `pattern`
Maxsus regex (muntazam ifoda) orqali tekshiradi.

```html
<input type="text" name="zipcode" pattern="\d{5}" title="5 ta raqam kiriting">
```

Bu input faqat **5 raqamdan iborat** bo‘lishi kerak.

### 4. `type=email`, `type=number`, `type=url`
Tegishli ma’lumot turini avtomatik tekshiradi.

---

## `fieldset` va `legend` bilan formani guruhlash

Katta formalarni yanada tushunarli qilish uchun `fieldset` va `legend` ishlatiladi.

```html
<form>
  <fieldset>
    <legend>Shaxsiy Ma’lumotlar</legend>

    <label for="fname">Ism:</label>
    <input type="text" id="fname" name="fname">

    <label for="lname">Familiya:</label>
    <input type="text" id="lname" name="lname">
  </fieldset>

  <fieldset>
    <legend>Kontakt Ma’lumotlari</legend>

    <label for="phone">Telefon:</label>
    <input type="tel" id="phone" name="phone">

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
  </fieldset>

  <button type="submit">Yuborish</button>
</form>
```

---

## Yaxshi Forma Yaratish bo‘yicha Maslahatlar

- **Label** ni har doim input bilan bog‘lang (`for` atributi orqali).
- Har bir input uchun aniq va qisqa tavsif bering.
- **Error xabarlarini** foydalanuvchiga aniq ko‘rsating.
- Kichik formalar uchun avtomatik validatsiyaga ishonish mumkin. Murakkab holatlarda JavaScript orqali qo‘shimcha tekshiruv qiling.
- **Tab index** va **accessibility** qoidalariga amal qiling.

---

## Amaliy Mashg‘ulot

Kichik loyiha: "Ro‘yxatdan o‘tish Formasi" tuzing:
- Ism, Familiya, Email, Parol, Tug‘ilgan Sana, Jins, Sevimli mashg‘ulotlar
- Hammasi `required`
- Email, Telefon va Parol uchun validatsiya shartlari
- `fieldset` va `legend` bilan guruhlash

---

## Uyga Vazifa

- O‘z web-saytingiz uchun oddiy “Kontakt” sahifasi yarating.
- Unda:
  - Foydalanuvchi ismi, emaili, xabar maydoni bo‘lsin.
  - Hammasi to‘g‘ri validatsiyalangan bo‘lsin.
- `action="#"` qilib qoldiring (backend kerak emas).
- Bonus: Har bir input uchun foydalanuvchi xatolik qilganda HTML5 error xabari chiqsin.

---

</details>



<details>
<summary>Accessibility (Kirish Imkoniyatlari) Asoslari, ARIA va Klaviatura Navigatsiyasi</summary>

---

# Accessibility (Kirish Imkoniyatlari) Asoslari, ARIA va Klaviatura Navigatsiyasi

---

## Accessibility (A11Y) nima?

Accessibility (A11Y) — bu web-saytlar va ilovalarni **har qanday foydalanuvchi**, shu jumladan:

- Nogironligi bor odamlar (ko‘rish, eshitish, jismoniy cheklovlar)
- Qurilmalar yoki brauzer cheklovlari bo‘lganlar
- Kattaroq yoshdagi yoki ko‘rish qobiliyati past foydalanuvchilar

uchun ham **to‘liq foydalanishga yaroqli** qilishni anglatadi.

Yaxshi accessibility — yaxshi foydalanuvchi tajribasi, SEO va qonuniy talablarni ham qondiradi.

---

## Nima uchun Accessibility muhim?

- 1 milliarddan ortiq odam dunyoda nogironlik bilan yashaydi.
- Google qidiruvi ham sahifani "ekran o‘quvchi" kabi o‘qiydi.
- Ba’zi mamlakatlarda (masalan, AQSh ADA, Yevropada EN 301 549) qonuniy talablar mavjud.

Qolaversa, hammaga qulay sayt yaratish — professionallik belgisi.

---

## Accessibility uchun HTML asoslari

### 1. Semantik HTML ishlatish
To‘g‘ri `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` va `<footer>` ishlatish avtomatik ravishda accessibilityni yaxshilaydi.

### 2. `alt` atributi bilan tasvirlar
Har bir rasmga ma’lumot beruvchi `alt` yozing.

```html
<img src="team.jpg" alt="Bizning jamoamiz rasmi">
```

Agar rasm faqat dekoratsiya uchun bo‘lsa:

```html
<img src="pattern.png" alt="">
```

(`alt` bo‘sh qoldiriladi, ekran o‘quvchi uni e'tiborsiz qoldiradi.)

### 3. Formalar uchun `label`
Har bir input elementi uchun `label` bilan bog‘lanish kerak:

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

Bu ko‘rish cheklovi bo‘lgan foydalanuvchilar uchun inputning vazifasini aniq ko‘rsatadi.

### 4. To‘g‘ri sarlavhalar (Headings)
Sarlavhalarni tartibli (hierarchik) ishlating:

- `<h1>` sahifa uchun asosiy sarlavha
- `<h2>` asosiy bo‘limlar
- `<h3>` kichik bo‘limlar

Hech qachon `<h2>` dan to‘g‘ri `<h4>` ga sakrab o‘tmaydi.

---

## ARIA: Accessible Rich Internet Applications

### ARIA nima?

ARIA atributlari web sahifaga qo‘shimcha ma’nolar beradi, ayniqsa, JavaScript bilan dinamik yaratilgan kontent uchun.

**Misollar:**

- Elementga roll berish (`role`)
- Holat yoki xususiyat belgilash (`aria-*` atributlari)

### Asosiy ARIA rollari

| Role | Ma'nosi |
|:--|:--|
| `role="button"` | Element tugma sifatida ishlaydi |
| `role="navigation"` | Navigatsiya paneli |
| `role="dialog"` | Modal oynani bildiradi |
| `role="alert"` | Muhim xabar (darhol o‘qiladi) |
| `role="checkbox"` | Belgilash qutisi sifatida ko‘rinadi |

**Misol: JavaScript yaratgan custom button**

```html
<div role="button" tabindex="0" onclick="alert('Clicked')">
  Bosing
</div>
```

Bu `div` ekranni o‘quvchilarga "tugma" sifatida ko‘rinadi va klaviaturada ham ishlaydi (`tabindex="0"` bilan).

---

## ARIA xususiyatlari (`aria-*` atributlar)

- `aria-label`: Elementning maxsus tavsifi
- `aria-hidden="true"`: Ekran o‘quvchilardan yashirish
- `aria-expanded="true/false"`: Ochilgan yoki yopilgan holatni belgilash
- `aria-checked="true/false/mixed"`: Checkbox holati

**Misol:**

```html
<button aria-expanded="false" aria-controls="menu">
  Menuni ochish
</button>

<ul id="menu" hidden>
  <li>Asosiy</li>
  <li>Yangiliklar</li>
</ul>
```

Agar foydalanuvchi tugmani bosganda menyu ochilsa, `aria-expanded` qiymatini yangilash kerak.

---

## Klaviatura Navigatsiyasi

Saytni **faqat klaviatura** yordamida ko‘rish imkoniyatini yaratish kerak:

### 1. `tabindex` atributi

- `tabindex="0"`: Oddiy tab tartibida elementga kiritiladi.
- `tabindex="-1"`: Tab bilan o‘tib bo‘lmaydi, faqat JavaScript orqali fokuslanadi.

```html
<div tabindex="0">Bu div fokus oladi</div>
```

### 2. Tugma va Havolalarni to‘g‘ri ishlatish

- Havolalar uchun `<a>` tegi
- Tugmalar uchun `<button>` tegi
- Hech qachon `div` yoki `span` ni tugma yoki link sifatida ishlatmang, agar ishlatsangiz ARIA va tabindex bilan to‘ldiring.

### 3. Keyboard shortcults va focus management

Masalan, modal ochilganda fokus modal ichiga o‘tishi va yopilganda oldingi fokusga qaytishi kerak.

---

## Amaliy Misollar

### To‘g‘ri Modal Dialog tuzilishi:

```html
<div role="dialog" aria-modal="true" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Ro‘yxatdan o‘tish</h2>
  <form>
    <label for="email">Email:</label>
    <input id="email" type="email">
    <button type="submit">Jo‘natish</button>
  </form>
</div>
```

- `role="dialog"` sahifa kontekstidan ajratilgan modal oynani ko‘rsatadi.
- `aria-modal="true"` tashqi sahifa interaktiv emasligini bildiradi.

---

## Yaxshi Accessibility uchun Amaliy Maslahatlar

- Har doim sahifani faqat klaviatura bilan sinab ko‘ring (Tab, Enter, Space, Escape tugmalar).
- Ekran o‘quvchilar yordamida sahifani test qiling (masalan, ChromeVox, NVDA).
- Keraksiz `div` va `span` lar o‘rniga semantik taglar ishlating.
- Matn kontrastini tekshirib chiqing (WCAG standartlari).
- Formada noto‘g‘ri input kiritilganda aniq va to‘liq xato xabar ko‘rsating.

---

## Uyga Vazifa

- Oddiy bir sahifa yarating:  
  - `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`
  - Navigatsiyada `aria-current="page"` ishlating.
  - Modal oynani yaratib, `role="dialog"`, `aria-labelledby` va `tabindex` funksiyasini to‘g‘ri qo‘llang.
  - Faqat klaviatura yordamida barcha interaktiv elementlarga kirish mumkinligini tekshiring.

---

</details>




<details>
<summary>SEO Asoslari va Front-end Dasturchilar uchun Muhim SEO Qoidalari</summary>

---

# SEO Asoslari va Front-end Dasturchilar uchun Muhim SEO Qoidalari

---

## SEO nima?

SEO (Search Engine Optimization) — web-saytning qidiruv tizimlarida (Google, Bing) yaxshiroq ko‘rinishi uchun optimallashtirilishidir.

Yaxshi SEO natijasi:
- Web-saytingiz ko‘proq foydalanuvchilar tomonidan topiladi
- Saytingiz trafik ortadi
- Brendingiz kuchayadi

**Front-end dasturchilar** SEO uchun saytning tuzilmasi, tezligi va ma'lumotning to‘g‘ri ko‘rsatishni ta’minlashi kerak.

---

## Front-end darajasida SEO uchun nimalarga e’tibor qaratish kerak?

### 1. Semantik HTML ishlatish

- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` kabi semantik taglar Google uchun sahifa strukturasi va ma’nosini aniq ko‘rsatadi.
- Sahifaning sarlavhalari `<h1>` dan `<h6>` gacha to‘g‘ri ishlatilgan bo‘lishi kerak.

Misol:

```html
<h1>Mahsulotlarimiz</h1>
<section>
  <h2>Telefonlar</h2>
  <p>Turli xil telefon modellari mavjud...</p>
</section>
```

---

### 2. To‘g‘ri `<title>` va `<meta>` teglari

Har bir sahifaning `<head>` qismida to‘g‘ri title va meta ma'lumotlari bo‘lishi shart.

```html
<head>
  <title>iPhone 15 narxlari va sharhlari - MyShop</title>
  <meta name="description" content="MyShopda iPhone 15 smartfonlarini eng yaxshi narxlarda va batafsil sharhlar bilan toping. Tez yetkazib berish va kafolat!">
</head>
```

- `<title>` — sahifaning asosiy mavzusini bildiradi.
- `<meta name="description">` — qidiruv tizimlarida chiqadigan qisqa tavsif.

---

### 3. Alt atributi bilan tasvirlarni optimallashtirish

- Har bir `<img>` elementi uchun `alt` atributini to‘g‘ri yozing.
- `alt` tavsifi tasvirni ko‘rsata olmagan foydalanuvchi uchun ma’lumot beradi va Google tasvirlarni indekslashda yordam beradi.

```html
<img src="iphone15.jpg" alt="iPhone 15 qora rangdagi modeli">
```

---

### 4. URL Strukturasi va Toza Havolalar

- URL’lar qisqa, oson va ma’noli bo‘lishi kerak.
- Har bir sahifada kerakli `<a href="">` teglari ishlatiladi.
- Havolalarning `rel` atributlaridan to‘g‘ri foydalanish kerak (`rel="noopener noreferrer"` tashqi havolalar uchun).

Yaxshi URL:
```
https://myshop.uz/iphone-15-narxlari
```

Yomon URL:
```
https://myshop.uz/page?id=78945
```

---

### 5. OpenGraph va Twitter Cards

Ijtimoiy tarmoqlarda sahifangiz to‘g‘ri ko‘rinishi uchun `<meta>` teglaridan foydalaning.

```html
<meta property="og:title" content="iPhone 15 narxlari - MyShop">
<meta property="og:description" content="iPhone 15 modellarini arzon narxlarda MyShopdan oling.">
<meta property="og:image" content="https://myshop.uz/images/iphone15.jpg">
<meta property="og:url" content="https://myshop.uz/iphone-15-narxlari">
<meta name="twitter:card" content="summary_large_image">
```

Bu teglar sahifani Facebook, Twitter kabi tarmoqlarda ko‘rsatishda professional ko‘rsatadi.

---

### 6. Sahifa yuklanish tezligi

Google sahifa yuklanish tezligini (Page Speed) SEO uchun baholaydi.

Frontend dasturchi sifatida e'tibor berish kerak:

- Rasmlarni siqish (optimized images)
- CSS va JS fayllarni minimallashtirish (minify)
- Keraksiz kodlardan qochish
- Lazy loading (`loading="lazy"` atributi bilan tasvirlar kechiktirib yuklash)

```html
<img src="rasm.jpg" loading="lazy" alt="Mahsulot rasmi">
```

---

### 7. Mobile-First Dizayn

- Sayt mobil qurilmalarda mukammal ko‘rinishi kerak.
- Responsive dizayn — barcha ekran o‘lchamlariga moslashish.
- Media queries yordamida mobilga moslashtirish.

```css
@media (max-width: 768px) {
  nav ul {
    display: none;
  }
}
```

Google mobile-friendly saytlarni ustun ko‘radi.

---

### 8. Sitemap.xml va Robots.txt

Bu backend tomonga ko‘proq tegishli, lekin front-end dasturchilar ham bilishi kerak:

- `sitemap.xml` — sahifadagi barcha URL’larning xaritasi
- `robots.txt` — qaysi sahifalar qidiruv tizimlari uchun ochiq yoki yopiq ekanini ko‘rsatadi.

---

### 9. Schema.org strukturalangan ma'lumotlar

Schema yordamida sahifadagi ma'lumotlarni boyitish mumkin (masalan, sharhlar, narxlar, tadbirlar).

Misol: Mahsulot uchun JSON-LD formatida struktura qo‘shish:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "iPhone 15",
  "image": "https://myshop.uz/images/iphone15.jpg",
  "description": "iPhone 15 yangi avlod smartfoni.",
  "brand": {
    "@type": "Brand",
    "name": "Apple"
  }
}
</script>
```

Bu Google’ga mahsulot haqida ko‘proq ma'lumot beradi va sahifani boy natijalar bilan ko‘rsatadi (rich results).

---

## Amaliy Mashg‘ulot

- O‘z HTML sahifangizda:
  - `<title>` va `<meta description>` yozing
  - `alt` atributlari bilan rasm qo‘shing
  - Semantik HTML teglar ishlating
  - OpenGraph va Twitter meta teglarini yozib chiqing
  - Sahifani mobilga mos qilish uchun kichik CSS media query qo‘shing

---

## Uyga Vazifa

- O‘z loyihangizni SEO nuqtayi nazaridan tekshirib chiqing.
- Har bir sahifa uchun:
  - To‘g‘ri `<title>`, `<meta description>`, `<h1>` va `<h2>` strukturasini tuzing
  - Rasmlarga `alt` atributini qo‘shing
  - Responsiveness va yuklanish tezligini baholang
- Bonus: Schema.org’dan foydalanib mahsulot yoki maqola uchun JSON-LD struktura yozib chiqing.

---

</details>



<details>
<summary>Microdata va Metadata Asoslari</summary>

---

# Microdata va Metadata Asoslari

---

## Metadata nima?

**Metadata** — bu sahifa haqidagi **ma’lumotlar** bo‘lib, foydalanuvchiga bevosita ko‘rinmaydi, lekin qidiruv tizimlari va brauzerlarga sahifa haqida ma’lumot beradi.

Metadata asosan `<head>` tegi ichida yoziladi.

### Muhim metadata teglari:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Mening yangi blogim haqida qisqacha tavsif.">
  <meta name="author" content="Ism Familiya">
  <meta name="keywords" content="blog, dasturlash, front-end, HTML, CSS, JavaScript">
  <title>Mening Blogim</title>
</head>
```

**Tushuntirish:**
- `charset="UTF-8"` — sahifadagi matn kodlash uslubini belgilaydi.
- `viewport` — mobil qurilmalarda to‘g‘ri ko‘rinish uchun kerak.
- `description` — qidiruv tizimida chiqadigan sahifa tavsifi.
- `author` — sahifa muallifi haqida ma’lumot.
- `keywords` — sahifa mazmuni haqida kalit so‘zlar (hozir ko‘pchilik qidiruv tizimlar bu atributga kamroq ahamiyat beradi, lekin hali ham foydali bo‘lishi mumkin).
- `title` — sahifaning brauzer oynasida ko‘rinadigan nomi.

---

## OpenGraph va Twitter Cards (Metadata kengaytmalari)

Bu metadata sahifangiz ijtimoiy tarmoqlarda chiroyli va professional ko‘rinishini ta’minlaydi.

**OpenGraph Misol:**

```html
<meta property="og:title" content="Mening Blogim">
<meta property="og:description" content="Frontend va dasturlash bo‘yicha foydali maqolalar.">
<meta property="og:image" content="https://mysite.com/images/blog.jpg">
<meta property="og:url" content="https://mysite.com/blog">
```

**Twitter Cards Misol:**

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Mening Blogim">
<meta name="twitter:description" content="Dasturlash va texnologiyalar haqida maqolalar.">
<meta name="twitter:image" content="https://mysite.com/images/blog.jpg">
```

---

## Microdata nima?

**Microdata** — HTML elementlariga **qo‘shimcha atributlar** qo‘shish orqali sahifadagi ma’lumotlarning ma’nosini aniqlashtiradigan texnologiya.

Microdata yordamida:
- Google, Bing kabi qidiruv tizimlari sahifadagi ma’lumotni yaxshiroq tushunadi
- Sahifani **Rich Snippet** (boy ko‘rinish) sifatida ko‘rsatish imkoniyati oshadi

Microdata ko‘pincha **Schema.org** standarti asosida ishlatiladi.

---

## Microdata asosiy atributlari

| Atribut | Vazifasi |
|:--|:--|
| `itemscope` | Ob’ekt boshlanishini belgilaydi |
| `itemtype` | Ob’ektning turini aniqlaydi (schema URL orqali) |
| `itemprop` | Ob’ektning xususiyatlarini belgilaydi |

---

## Oddiy Microdata misoli

Saytda oddiy maqola ko‘rsatish:

```html
<article itemscope itemtype="https://schema.org/Article">
  <h1 itemprop="headline">Semantik HTML haqida to‘liq qo‘llanma</h1>
  <p itemprop="author">Muallif: Jasurbek</p>
  <p itemprop="datePublished" content="2025-04-28">28 Aprel, 2025</p>
  <p itemprop="articleBody">
    Semantik HTML — sahifani to‘g‘ri tuzish uchun juda muhim texnikadir...
  </p>
</article>
```

**Tushuntirish:**
- `itemscope` — bu HTML elementi alohida ob’ekt ekanligini bildiradi.
- `itemtype` — bu ob’ekt turi "maqola" (`Article`) ekanligini ko‘rsatadi.
- `itemprop` — turli ma’lumotlarni belgilaydi: sarlavha, muallif, sana, matn va hokazo.

---

## Mahsulot Microdata misoli

E-commerce sayt uchun mahsulotni aniqlashtirish:

```html
<div itemscope itemtype="https://schema.org/Product">
  <h2 itemprop="name">Samsung Galaxy S23</h2>
  <img src="galaxy-s23.jpg" alt="Samsung Galaxy S23" itemprop="image">
  <p itemprop="description">Eng so‘nggi modeldagi Samsung smartfoni.</p>
  <span itemprop="brand">Samsung</span>
  <span itemprop="offers" itemscope itemtype="https://schema.org/Offer">
    <span itemprop="priceCurrency" content="USD">$</span>
    <span itemprop="price" content="799.99">799.99</span>
    <link itemprop="availability" href="https://schema.org/InStock">Mavjud</link>
  </span>
</div>
```

Bu orqali Google mahsulot nomi, narxi, mavjudligi kabi ma’lumotlarni aniqlab oladi va qidiruv natijalarida boy ko‘rinishda (rich snippets) ko‘rsatishi mumkin.

---

## Microdata va JSON-LD farqi

- **Microdata** — HTML ichida atributlar sifatida yoziladi.
- **JSON-LD** — sahifaning `<head>` qismida alohida `<script>` blok sifatida yoziladi.

Hozirgi vaqtda Google va boshqa qidiruv tizimlari **JSON-LD** formatini ko‘proq afzal ko‘radi, chunki bu HTMLni ifloslantirmaydi va osonroq boshqariladi.

Misol:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Semantik HTML haqida to‘liq qo‘llanma",
  "author": {
    "@type": "Person",
    "name": "Jasurbek"
  },
  "datePublished": "2025-04-28"
}
</script>
```

---

## Amaliy Mashg‘ulot

- Bir sahifa yarating:
  - Blog post (`Article`) formatida Microdata yoki JSON-LD qo‘shing.
  - Rasmga `itemprop="image"`, muallifga `itemprop="author"`, sarlavhaga `itemprop="headline"` belgilang.
- Mahsulot (Product) sahifasi uchun ham Microdata qo‘shib ko‘ring.

---

## Uyga Vazifa

- O‘z loyihangizdagi har bir sahifaga:
  - To‘g‘ri `<meta>` teglari kiriting.
  - Microdata yordamida kamida bitta ob’ekt (maqola yoki mahsulot) belgilab chiqing.
- Bonus: JSON-LD formatida bog‘liq sahifalarga metadata qo‘shing.

---

</details>


<details>
<summary>Mini Loyihа: Semantik Blog Landing Page Yaratish</summary>

---

# Mini Loyihа: Semantik Blog Landing Page Yaratish

---

## Loyiha maqsadi

Bu loyiha orqali siz quyidagilarni mashq qilasiz:
- Semantik HTML taglarini to‘g‘ri ishlatish
- Foydalanuvchilar uchun tushunarli va yaxshi strukturalangan sahifa qurish
- Accessibility va SEO asoslariga rioya qilish

---

## Vazifa

Oddiy, chiroyli, to‘liq **Semantik Blog Landing Page** yarating, unda quyidagilar bo‘lishi kerak:

- **Header**: Sayt nomi va navigatsiya
- **Main Content**:  
  - Bir nechta maqola (`<article>`)  
  - Har bir maqolada rasm, sarlavha, muallif va qisqa matn
- **Aside**: Yon panelda boshqa maqolalarga havolalar
- **Footer**: Mualliflik huquqi va aloqa ma’lumotlari

---

## Tuzilma (Skeleton)

```html
<body>
  <header>...</header>
  <nav>...</nav>
  <main>
    <section>...</section>
    <article>...</article>
    <article>...</article>
  </main>
  <aside>...</aside>
  <footer>...</footer>
</body>
```

---

## 1. Header va Navigatsiya

```html
<header>
  <h1>Mening Blogim</h1>
  <nav>
    <ul>
      <li><a href="#home">Bosh sahifa</a></li>
      <li><a href="#posts">Maqolalar</a></li>
      <li><a href="#contact">Aloqa</a></li>
    </ul>
  </nav>
</header>
```

- `<h1>` faqat bir marta ishlatiladi.
- Navigatsiya `<nav>` tagi ichida `<ul>` va `<li>` orqali tuziladi.

---

## 2. Main Content — Maqolalar

Har bir maqola `<article>` tegi ichida bo‘ladi va quyidagi elementlardan iborat:

```html
<main>
  <section id="posts">
    <h2>Oxirgi maqolalar</h2>

    <article itemscope itemtype="https://schema.org/Article">
      <h3 itemprop="headline">HTML Semantik Tuzilmasi</h3>
      <p>Muallif: <span itemprop="author">Jasurbek</span> - <time itemprop="datePublished" datetime="2025-04-28">28 Aprel 2025</time></p>
      <img src="html-semantics.jpg" alt="HTML semantik tuzilma diagrammasi" itemprop="image">
      <p itemprop="articleBody">
        Semantik HTML sahifa tuzilishini yaxshilaydi va accessibilityni oshiradi. Bu maqolada biz...
      </p>
      <a href="#">Batafsil o‘qish</a>
    </article>

    <article itemscope itemtype="https://schema.org/Article">
      <h3 itemprop="headline">CSS Grid bilan Layout tuzish</h3>
      <p>Muallif: <span itemprop="author">Zarina</span> - <time itemprop="datePublished" datetime="2025-04-27">27 Aprel 2025</time></p>
      <img src="css-grid.jpg" alt="CSS grid layout namunasining rasmi" itemprop="image">
      <p itemprop="articleBody">
        CSS Grid yordamida sahifalarning dinamik va moslashuvchan layoutlarini oson yaratish mumkin...
      </p>
      <a href="#">Batafsil o‘qish</a>
    </article>

  </section>
</main>
```

**E’tibor bering:**
- Har bir maqola `<article>` ichida va `itemscope`, `itemtype`, `itemprop` bilan boyitilgan.
- Sarlavhalar `<h2>`, `<h3>` shaklida tartib bilan ketmoqda.

---

## 3. Aside — Yon Panel

```html
<aside>
  <h2>Boshqa maqolalar</h2>
  <ul>
    <li><a href="#">JavaScript Event Delegation</a></li>
    <li><a href="#">Responsive Dizayn Asoslari</a></li>
    <li><a href="#">Web Performance Optimallashtirish</a></li>
  </ul>
</aside>
```

**Aside** sahifa asosiy oqimidan mustaqil, lekin bog‘liq ma'lumotlarni ko‘rsatish uchun ishlatiladi.

---

## 4. Footer

```html
<footer>
  <p>&copy; 2025 Mening Blogim. Barcha huquqlar himoyalangan.</p>
  <p>Aloqa uchun: <a href="mailto:info@meningblogim.uz">info@meningblogim.uz</a></p>
</footer>
```

- Footer sahifaning oxirida umumiy ma’lumot va aloqa imkoniyatlarini beradi.

---

## Muhim jihatlar

- **Semantik HTML** qoidalariga qat’iy amal qilingan.
- **Microdata** (`itemscope`, `itemtype`, `itemprop`) bilan boyitilgan.
- **Alt atributlari** har bir rasmda to‘g‘ri berilgan.
- **Headings** tartib bilan qo‘llangan (`h1`, `h2`, `h3`).
- **Accessible Navigation** (`nav` ichida `ul` bilan) tashkil etilgan.

---

## Mini Loyiha Topshiriqlari

- Foydalanuvchi uchun qulay va toza struktura tuzing.
- Har bir maqola uchun alohida `<article>` va ichida to‘liq metadata qo‘shing.
- Rasm, sarlavha, muallif, sanani ko‘rsatish shart.
- Yon panel va footer albatta bo‘lsin.
- Kodingizni validatsiya qiling (W3C validator orqali tekshiring).

---

## Uyga Vazifa

- Saytingiz uchun yana 2 ta yangi maqola qo‘shing.
- OpenGraph va Twitter metadata `<head>` bo‘limiga qo‘shing.
- Sahifani mobil qurilmalar uchun responsiv qiling (`viewport` va kichik media query bilan).

---


</details>