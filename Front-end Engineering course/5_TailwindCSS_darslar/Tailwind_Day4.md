# Tailwind CSS — Kun 4: Customization va Best Practices

**Maqsad**: `@theme` bilan dizayn token'larini sozlash, qayta foydalaniladigan class'lar yaratish, HTML ni tartibli yozish va umumiy UI pattern'larni qo'llash.

---

## 4.1 Dars: `@theme` bilan customization

### Nima uchun `@theme`?

Loyihada o'zingizning ranglaringiz, spacing'laringiz va font'laringiz bo'lishi mumkin — brend bo'yicha qoidalar. Tailwind'da buni `@theme` orqali berasiz. Token'lar qo'yilgach, ular avtomatik utility class'larga aylanadi.

### CDN da qanday qo'shiladi?

`<style type="text/tailwindcss">` ichida yozasiz — oddiy CSS emas, Tailwind ushbu blokni o'zi qayta ishlaydi.

**Asosiy struktura:**

```html
<head>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <style type="text/tailwindcss">
    @theme {
      /* O'zingizning token'laringiz */
    }
  </style>
</head>
```

### Custom ranglar

`--color-` prefix'i orqali yangi rang qo'shsangiz, Tailwind `bg-*`, `text-*`, `border-*` va boshqa rang utility'lari yaratadi.

```css
@theme {
  --color-brand: #3b82f6;
  --color-brand-dark: #1d4ed8;
  --color-accent: #f59e0b;
}
```

**HTML da ishlatish:**

```html
<div class="bg-brand text-white">Brand fon</div>
<button class="bg-accent text-white">Accent tugma</button>
<p class="text-brand-dark">Qorong'iroq brand matn</p>
```

### Custom spacing

`--spacing-` prefix'i orqali:

```css
@theme {
  --spacing-18: 4.5rem;
  --spacing-22: 5.5rem;
}
```

**Ishlatish:** `p-18`, `m-22`, `gap-18` va hokazo.

### Custom font'lar

`--font-` prefix'i:

```css
@theme {
  --font-display: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

**Ishlatish:** `font-display`, `font-mono`.

**Eslatma**: Font'ni yuklash uchun `<link>` yoki `@import` kerak:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

### Custom shadow

```css
@theme {
  --shadow-soft: 0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04);
}
```

**Ishlatish:** `shadow-soft`.

### Barchasini birlashtirish — brand theme

```html
<style type="text/tailwindcss">
  @theme {
    /* Ranglar */
    --color-brand: #2563eb;
    --color-brand-light: #3b82f6;
    --color-brand-dark: #1d4ed8;
    --color-accent: #f59e0b;

    /* Spacing */
    --spacing-18: 4.5rem;

    /* Font */
    --font-display: 'Inter', sans-serif;

    /* Shadow */
    --shadow-card: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  }
</style>
```

### Practice

`<style type="text/tailwindcss">` bloki qo'shing va kichik brand theme yarating: 2–3 ta rang, 1 ta spacing, 1 ta shadow. Keyin HTML da `bg-brand`, `text-accent` kabi class'larni sinab ko'ring.

---

## 4.2 Dars: `@utility` va reusable class'lar

### Qachon reusable class yaratish kerak?

- Bir xil class kombinatsiyasi 5+ marta takrorlansa
- Tugma, card, input kabi komponent stillari bir nechta joyda kerak bo'lsa
- Loyiha bo'yicha bir xil qoidalar bo'lishi kerak bo'lsa

**Default yondashuv**: ko'p hollarda oddiy utility'larni HTML da birga qo'yish kifoya. Faqat aniq takrorlanish bo'lsa, custom class mantiqli.

### `@utility` nima?

`@utility` — Tailwind'da o'zingizning utility class'ingizni aniqlash uchun. Ichida `@apply` yoki boshqa stillar bo'ladi.

**CDN da — `type="text/tailwindcss"` ichida:**

```css
@utility btn-primary {
  @apply px-6 py-2 bg-brand text-white rounded-lg font-medium;
  @apply hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2;
}

@utility btn-secondary {
  @apply px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium;
  @apply hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2;
}
```

**HTML da:**

```html
<button class="btn-primary">Asosiy tugma</button>
<button class="btn-secondary">Ikkinchi tugma</button>
```

### `@apply` qoidalari

- `@apply` faqat Tailwind utility class'lariga qo'llanadi
- Bir nechta qator bo'lishi mumkin
- `@theme` da berilgan token'lar (`bg-brand` kabi) ishlaydi

### Kam foydalanish — utility composition ustun

Tailwind'ning asosiy qadriyati — utility'larni to'g'ridan-to'g'ri HTML da birlashtirish. Custom class'lar faqat aniq takrorlanishda kerak. O'rta darajadan oshmasligi ma'qul.

### Alternative — theme token'lardan foydalanish

Agar `@utility` yoki `@apply` muammo bersa, oddiy CSS bilan ham qilish mumkin:

```css
.btn-primary {
  padding: 0.5rem 1.5rem;
  background-color: var(--color-brand);
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
}
```

Lekin `@theme` dan keyin `--color-brand` mavjud bo'ladi. Tailwind v4 da `@utility` + `@apply` tavsiya etiladi.

### Practice

`btn-primary` va `btn-secondary` yarating. Birinchisi `bg-brand`, ikkinchisi `bg-gray-200`. Hover va focus stillarini qo'shing. Bir nechta tugma yaratib sinab ko'ring.

---

## 4.3 Dars: HTML ni tartibli yozish

### Class list'ni o'qilishi oson qilish

Uzun class ro'yxati chalkash bo'lib ketmasligi uchun:

**1. Ko'p qatorga ajrating**

```html
<!-- Yomon -->
<div class="flex flex-col md:flex-row gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition">

<!-- Yaxshi -->
<div class="
  flex flex-col md:flex-row gap-4 p-6
  bg-white rounded-xl shadow-lg border border-gray-200
  hover:shadow-xl transition
">
```

**2. Mantiqiy guruhlash**

Guruhlash misoli: layout → spacing → rang/border → effektlar → variant'lar

```html
<button class="
  px-6 py-2
  bg-blue-500 text-white
  rounded-lg font-medium
  hover:bg-blue-600 focus:ring-2 focus:ring-blue-500
  disabled:opacity-50
">
  Yuborish
</button>
```

**3. Izohlar (murakkab layout'larda)**

```html
<!-- Navbar: logo chapda, linklar o'ngda -->
<nav class="flex items-center justify-between p-4">
  <div class="font-bold">Logo</div>
  <div class="flex gap-6">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
  </div>
</nav>
```

### Nomlash va tuzilish

- **Semantik HTML**: `header`, `nav`, `main`, `article`, `footer` — SEO va accessibility uchun
- **Mazmunli qismlarga bo'lish**: navbar, hero, features, footer — alohida `section` yoki `div`
- **Class nomlari**: Tailwind utility'larda nomlash sizda emas, lekin custom class'lar aniq va qisqa bo'lsin — `btn-primary`, `card`, `input-field`

### Murakkab layout'da tartib

1. Layout (flex, grid)
2. Spacing (padding, margin, gap)
3. Sizing (width, height)
4. Rang va fon
5. Typography
6. Border, shadow
7. State variant'lar (hover, focus, dark)

### Practice

Avvalgi kunlardagi bitta mashqni refactor qiling: class'lar ko'p qatorga, guruhlangan va kerak joyda izohlar qo'shilgan bo'lsin.

---

## 4.4 Dars: Umumiy UI pattern'lar

### Card pattern

Card uchun odatiy elementlar:

- Padding
- Rounded burchaklar
- Shadow (va hover da kattaroq)
- Border (ixtiyoriy)
- Hover da biroz ko'tarilish (ixtiyoriy)

```html
<div class="
  p-6 rounded-xl shadow-md hover:shadow-lg
  border border-gray-200
  transition-shadow duration-300
">
  <h3 class="text-xl font-bold text-gray-800 mb-2">Sarlavha</h3>
  <p class="text-gray-600">Bodiy matn.</p>
</div>
```

### Button pattern'lar

**Primary (asosiy):**

```html
<button class="
  px-6 py-2.5
  bg-blue-500 text-white
  rounded-lg font-medium
  hover:bg-blue-600 active:scale-95
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
  transition
">
  Asosiy tugma
</button>
```

**Secondary (ikkilamchi):**

```html
<button class="
  px-6 py-2.5
  bg-gray-200 text-gray-800
  rounded-lg font-medium
  hover:bg-gray-300
  focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2
  transition
">
  Ikkinchi tugma
</button>
```

**Outline:**

```html
<button class="
  px-6 py-2.5
  border-2 border-blue-500 text-blue-500
  rounded-lg font-medium
  hover:bg-blue-500 hover:text-white
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
  transition
">
  Outline tugma
</button>
```

### Input field pattern

```html
<div class="space-y-1">
  <label class="block text-sm font-medium text-gray-700">Email</label>
  <input
    type="email"
    placeholder="email@example.com"
    class="
      w-full px-4 py-2
      border border-gray-300 rounded-lg
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:border-transparent
      placeholder:text-gray-400
    "
  />
</div>
```

**Muhim:** `focus:outline-none focus:ring-2 focus:ring-*` — accessibility uchun focus ko'rinishi.

### Badge / tag pattern

Kichik label, status yoki kategoriya uchun:

```html
<span class="
  inline-block px-3 py-1
  text-sm font-medium
  bg-blue-100 text-blue-800
  rounded-full
">
  Yangi
</span>

<span class="
  inline-block px-3 py-1
  text-sm font-medium
  bg-gray-100 text-gray-700
  rounded-full
">
  Arxiv
</span>
```

`rounded-full` — pill shakl. Ranglarni o'zgartirib turli status'lar yaratish mumkin.

### UI kit — barchasini birlashtirish

Bitta sahifada quyidagilarni yig'ing:

1. **Card** — sarlavha, matn, tugma bilan
2. **Primary button** va **secondary button**
3. **Input** — label bilan
4. **2 ta badge** — turli ranglar bilan

Hammasi bir xil rang palitrasi va spacing'dan foydalansin — kichik UI kit bo'ladi.

### Practice

Kichik UI kit yarating: 1 ta card, 2 xil tugma (primary va secondary), 1 ta input, 2 ta badge. Layout tartibli, class'lar guruhlangan bo'lsin.

---

## Kun 4 Xulosa

Siz o'rganasiz:

1. **@theme** — rang, spacing, font, shadow kabi token'lar; `--color-brand` → `bg-brand`, `text-brand`.
2. **@utility** — takrorlanuvchi pattern'lar uchun custom class; `btn-primary`, `btn-secondary` kabi.
3. **HTML tartibi** — class'larni ko'p qatorga yozish, guruhlash, izohlar — o'qilishi oson kod.
4. **UI pattern'lar** — card, tugma (primary, secondary, outline), input, badge — umumiy komponent stillari.

Part 1 (HTML + CSS) shu yerda tugaydi. Keyingi qismda React bilan ishlashni boshlaymiz.
