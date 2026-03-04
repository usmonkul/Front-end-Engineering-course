# Tailwind CSS — Kun 1: Setup va Asoslar

**Maqsad**: Tailwind CSS bilan tanishish, loyihani CDN orqali sozlash va birinchi utility class'larni qo'llash.

---

## 1.1 Dars: Tailwind CSS nima?

### Utility-first CSS tushunchasi

Tailwind CSS — bu **utility-first** yondashuvga asoslangan CSS framework. Bu deganda har bir class bitta yoki bir nechta o'xshash stilni boshqaradi. Masalan, `p-4` — padding, `text-center` — matnni markazga tekislaydi.

**An'anaviy CSS**da siz `custom CSS` fayllar yozasiz va class'larga nom berasiz:

```css
.card {
  padding: 1rem;
  background-color: #3b82f6;
  border-radius: 0.5rem;
}
```

**Tailwind**da esa tayyor utility class'larni HTML'ga qo'shasiz:

```html
<div class="p-4 bg-blue-500 rounded-lg">...</div>
```

### Nima uchun utility class'lar?

1. **Kontekstdan voz kechish** — CSS va HTML o'rtasida almashish kerak emas, hammasi bir joyda.
2. **Qayta foydalanish** — bir xil stil har joyda bir xil class bilan.
3. **Design system** — barcha qiymatlar (spacing, colors) bir xil shkalada.
4. **Tez ishlash** — yozishda tez, autocomplete yordamida.

### Qachon Tailwind, qachon oddiy CSS?

- **Tailwind yaxshi**: layout, spacing, typography, ranglar, responsive design, komponent yig'ish.
- **Oddiy CSS mantiqliroq**: murakkab animatsiyalar, juda maxsus effektlar, legacy loyihalar.

### Mental model

Tailwind class'larni **qurilish bloklari** deb tasavvur qiling: har biri bitta vazifani bajaradi, siz ularni birlashtirib kerakli dizaynni yaratasiz.

---

## 1.2 Dars: CDN orqali loyiha sozlash (Build yo'q)

### Nimaga CDN?

Birinchi kunlarda build tool (npm, Vite) kerak emas — barcha narsa brauzerda ishlaydi. Bitta HTML fayl yozasiz va darhol natijani ko'rasiz.

### Qadamlar

**1-qadam.** Yangi papka yarating va ichida `index.html` fayl yarating.

**2-qadam.** `index.html` ichiga quyidagi kodni kiriting:

```html
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tailwind — Birinchi loyiha</title>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body>
  <h1>Salom, Tailwind!</h1>
</body>
</html>
```

**3-qadam.** Script qatoriga e'tibor bering:

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

Bu script Tailwind'ning **Play CDN** versiyasi. Brauzerda Tailwind klasslarini skanerlab, kerakli CSS'ni yaratadi. Hech qanday `npm install` yoki build qilish shart emas.

**4-qadam.** `index.html` faylni brauzerda oching (ikkilamchi marta ochishga qisqacharoq yo'l: `index.html` faylga ikki marta bosish yoki o'ng tugma → "Open with" → brauzer).

### Muhim eslatma

CDN **faqat o'rganish va prototip** uchun. Haqiqiy production loyihalarda build tool (Vite, webpack va boshqalar) ishlatiladi — fayl hajmi kichikroq va tezroq yuklanadi.

### Practice

`<h1>` tagiga bir nechta Tailwind class qo'shing va natijani tekshiring:

```html
<h1 class="text-3xl font-bold text-blue-600">Salom, Tailwind!</h1>
```

Brauzerda sahifa yangilansa, sarlavha katta, qora va ko'k rangda bo'lishi kerak.

---

## 1.3 Dars: Birinchi utility class'lar

### Spacing (padding va margin)

| Class   | Vazifa                    | Misol     |
|---------|---------------------------|-----------|
| `p-4`   | Barcha tomondan padding   | 1rem      |
| `m-2`   | Barcha tomondan margin    | 0.5rem    |
| `px-6`  | Chap-o'ng padding         | 1.5rem    |
| `py-3`  | Yuqori-past padding      | 0.75rem   |
| `mt-4`  | Yuqoridan margin         | 1rem      |
| `mb-8`  | Pastdan margin           | 2rem      |
| `gap-4` | Flex/Grid elementlar orasidagi bo'shliq | 1rem |

**Misol:**

```html
<div class="p-4 bg-gray-100">
  <p class="mb-2">Birinchi qator</p>
  <p class="mb-2">Ikkinchi qator</p>
</div>
```

### Ranglar (colors)

| Class           | Vazifa                     |
|-----------------|----------------------------|
| `bg-blue-500`   | Fon rangi — ko'k           |
| `text-white`    | Matn rangi — oq            |
| `text-gray-700` | Matn rangi — kulrang       |
| `border-gray-200` | Chegara rangi            |

Tailwind'da har bir rang uchun 50, 100, 200 … 900, 950 shkalasi mavjud. `500` odatda "asosiy" ton.

### Typography

| Class         | Vazifa               |
|---------------|----------------------|
| `text-lg`     | Katta matn           |
| `text-sm`     | Kichik matn          |
| `font-bold`   | Qalin shrift         |
| `font-medium` | O'rtacha qalinlik    |
| `text-center` | Matnni markazga tekislash |
| `underline`   | Pastki chiziq        |

### Sizing (o'lchamlar)

| Class      | Vazifa                    |
|------------|---------------------------|
| `w-full`   | Kenglik 100%              |
| `h-screen` | Balandlik — ekran balandligi |
| `max-w-xl` | Maksimal kenglik (36rem)  |
| `min-h-[200px]` | Minimal balandlik (arbitrary value) |

### Rounded (burchaklarni yumaloqlash)

| Class        | Natija                |
|--------------|------------------------|
| `rounded`    | Ozgina yumaloq         |
| `rounded-lg` | Kattaroq yumaloqlik    |
| `rounded-xl` | Juda yumaloq           |
| `rounded-full` | To'liq aylana (tugma, avatar uchun) |

### Amaliy mashq

Quyidagi **card** komponentini yarating:

```html
<div class="max-w-sm p-6 bg-white rounded-xl shadow-lg border border-gray-200">
  <h2 class="text-xl font-bold text-gray-800 mb-2">Card sarlavhasi</h2>
  <p class="text-gray-600 mb-4">Bu yerda qisqacha tavsif yoziladi.</p>
  <button class="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium">
    Batafsil
  </button>
</div>
```

O'zingiz ranglar, padding va border qiymatlarini o'zgartirib ko'ring.

---

## 1.4 Dars: Tailwind class nomlash tamoyili

### Format: `property-modifier-value`

Ko'pgina class'lar quyidagi strukturada:

```
prefix  -  modifier  -  value
```

**Misollar:**

| Class         | property | modifier | value |
|---------------|----------|----------|-------|
| `text-sm`     | text     | —        | sm (font size) |
| `bg-blue-500` | bg       | blue     | 500 (rang toni) |
| `p-4`         | p        | —        | 4 (spacing) |
| `rounded-lg`  | rounded  | —        | lg |

### Keng tarqalgan prefix'lar

| Prefix  | Ma'nosi              | Misol            |
|---------|----------------------|------------------|
| `bg-`   | Background           | `bg-red-500`     |
| `text-` | Matn rangi / o'lchami | `text-lg`        |
| `border-` | Chegara             | `border-2`       |
| `p-`    | Padding              | `p-4`            |
| `m-`    | Margin               | `m-2`            |
| `w-`    | Width                | `w-full`         |
| `h-`    | Height               | `h-12`           |
| `flex-` | Flex xususiyatlari   | `flex-1`         |

### Raqamli shkalalar

- **Spacing**: 0, 0.5, 1, 2, 3 … 96 (1 = 0.25rem, 4 = 1rem)
- **Ranglar**: 50, 100, 200 … 900, 950

### Arbitrary values (o'zingiz kiritilgan qiymatlar)

Ba'zan Tailwind'da tayyor bo'lmagan qiymat kerak bo'ladi. Buning uchun qavs ichida yozasiz:

```html
<div class="w-[327px] h-[200px] text-[#1a2b3c]">
  ...
</div>
```

- `w-[327px]` — kenglik aniq 327px
- `text-[#1a2b3c]` — hex rang

### Qayerdan qidirish?

- **Rasmiy hujjatlar**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **IDE autocomplete**: VS Code'da Tailwind CSS IntelliSense extension o'rnatilsa, class yozishda tavsiyalar chiqadi.

---

## Kun 1 Xulosa

Siz o'rganishingiz kerak bo'lgan asosiy narsalar:

1. **Tailwind** — utility-first framework, har bir class bitta yoki bir nechta stilni boshqaradi.
2. **CDN** — `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>` orqali build'siz ishlatish mumkin.
3. **Birinchi utility class'lar** — `p-4`, `m-2`, `bg-blue-500`, `text-white`, `rounded-lg`, `max-w-xl` va hokazo.
4. **Nomlash qoidasi** — `property-modifier-value`, arbitrary value uchun `[qiymat]`.

