# Tailwind CSS — Kun 3: Responsive va Interaktiv

**Maqsad**: Ekran o'lchamiga mos layout, hover/focus/active holatlari, dark mode va borders, shadows kabi effektlar.

---

## 3.1 Dars: Responsive Design

### Breakpoints — ekran o'lchamiga qarab stillar

Tailwind **mobile-first** yondashuvda ishlaydi: default stillar kichik ekran uchun, kattaroq ekran uchun prefix orqali qo'shiladi.

| Prefix  | Min-width | Odatda qo'llash          |
|---------|-----------|---------------------------|
| (yoki)  | 0px       | Mobil (default)           |
| `sm:`   | 640px     | Katta mobil / kichik tablet |
| `md:`   | 768px     | Tablet                    |
| `lg:`   | 1024px    | Laptop / kichik desktop   |
| `xl:`   | 1280px    | Desktop                   |
| `2xl:`  | 1536px    | Katta monitor             |

**Qoida**: `md:bg-blue-500` degani — 768px dan kattaroq ekranlarda fon ko'k.

### Responsive layout — layoutni o'zgartirish

Eng keng tarqalgan pattern: mobil da ustun (`flex-col`), desktop'da qator (`flex-row`).

```html
<div class="flex flex-col md:flex-row gap-4 p-4">
  <div class="flex-1 p-4 bg-blue-100 rounded">Blok 1</div>
  <div class="flex-1 p-4 bg-blue-200 rounded">Blok 2</div>
</div>
```

- **Mobil**: Ikkala blok ustma-ust.
- **768px+**: Ikkala blok yonma-yon.

**Grid uchun:**

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

- Mobil: 1 ustun  
- 640px+: 2 ustun  
- 1024px+: 3 ustun  

### Hide / Show — ekran o'lchamiga qarab yashirish yoki ko'rsatish

| Class          | Mobil  | sm (640px+) | md (768px+) | lg (1024px+) |
|----------------|--------|-------------|-------------|--------------|
| `hidden`       | Yashirilgan | Yashirilgan | Yashirilgan | Yashirilgan |
| `block`        | Ko'rinadi | Ko'rinadi  | Ko'rinadi  | Ko'rinadi   |
| `hidden md:block` | Yashirilgan | Yashirilgan | Ko'rinadi | Ko'rinadi  |
| `block md:hidden` | Ko'rinadi | Ko'rinadi  | Yashirilgan | Yashirilgan |

**Misol — mobil menyu va desktop menyu:**

```html
<!-- Mobil da: hamburger yoki oddiy linklar -->
<nav class="md:hidden p-4 bg-gray-100">Mobil menyu</nav>

<!-- Desktop da: to'liq navbar -->
<nav class="hidden md:flex gap-6 p-4 bg-gray-100">
  <a href="#">Bosh sahifa</a>
  <a href="#">Haqimizda</a>
  <a href="#">Bog'lanish</a>
</nav>
```

### Responsive spacing va typography

Padding, margin, font size va boshqa xususiyatlarni ham breakpoint bo'yicha o'zgartirish mumkin:

```html
<div class="p-4 md:p-6 lg:p-8">
  <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold">
    Responsive sarlavha
  </h1>
</div>
```

### Practice

**Navbar**: Mobil da linklar ustma-ust (`flex flex-col`), desktop'da yonma-yon (`md:flex-row`). Yoki mobil da `hidden`, desktop'da `flex` — ikki xil menyu variantini sinab ko'ring.

---

## 3.2 Dars: Hover, Focus va Active holatlari

### Hover — sichqoncha ustiga kelganda

Har bir utility'ga `hover:` prefix qo'shsangiz, foydalanuvchi element ustiga kelganda stil o'zgaradi.

| Class               | Hover holatida                |
|---------------------|-------------------------------|
| `hover:bg-blue-600` | Fon ko'kroq                   |
| `hover:text-white`  | Matn oq                       |
| `hover:scale-105`   | 5% kattalashtiradi            |
| `hover:scale-95`    | 5% kichiklashtiradi           |
| `hover:underline`   | Pastki chiziq paydo bo'ladi   |
| `hover:shadow-lg`   | Katta soya                    |
| `hover:opacity-80`  | 80% shaffoflik                |
| `hover:translate-y-1` | Pastga 4px siljiydi        |

**Misol — interaktiv tugma:**

```html
<button class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:scale-105 transition">
  Boshlash
</button>
```

`transition` — o'zgarishni silliq qiladi (keyingi bo'limda batafsil).

### Focus — fokus (klaviatura yoki tab orqali)

Form elementlari va linklarda `focus:` stil muhim — accessibility uchun.

| Class                   | Vokus holatida           |
|-------------------------|--------------------------|
| `focus:outline-none`    | Default outline olib tashlanadi |
| `focus:ring-2`          | Halqa (ring) 2px         |
| `focus:ring-blue-500`   | Halqa rangi ko'k         |
| `focus:ring-offset-2`   | Halqa va element orasidagi bo'shliq |
| `focus:bg-blue-100`     | Fokusda fon rangi        |
| `focus-within:`         | Ichida fokusli bolasi bor bo'lsa (masalan input wrapper) |

**Misol — input va tugma uchun focus ring:**

```html
<input
  type="text"
  class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
  placeholder="Email"
/>

<button class="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Yuborish
</button>
```

### Active — bosilganda

Tugma bosilgan vaqtda qisqa vizual feedback uchun:

| Class            | Bosilganda           |
|------------------|----------------------|
| `active:scale-95`| Biroz kichiklashtiradi |
| `active:bg-blue-700` | Fon qorong'iroq   |

### Disabled — o'chirilgan holat

Tugma yoki input o'chirilgan bo'lsa:

| Class                   | Disabled holatida       |
|-------------------------|--------------------------|
| `disabled:opacity-50`   | 50% shaffof             |
| `disabled:cursor-not-allowed` | Kursor "not allowed" |
| `disabled:pointer-events-none` | Klik ishlamaydi   |

**Misol:**

```html
<button
  disabled
  class="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
>
  Yuklanmoqda...
</button>
```

### Practice

1. **Tugma**: `hover:bg-blue-600`, `active:scale-95`, `focus:ring-2 focus:ring-blue-500` qo'shing.
2. **Link**: `hover:underline` yoki `hover:text-blue-700` bilan stil qiling.
3. **Card**: Hover da `shadow-lg` va `translate-y-1` bilan ko'tarilish effekti yarating.

---

## 3.3 Dars: Dark Mode

### Qanday ishlaydi?

Tailwind'da dark mode **default** holda tizim sozlamasiga qarab ishlaydi: foydalanuvchi OS'da dark mode yoqsa, `dark:` stillar qo'llanadi. Hech qanday JavaScript yoki qo'shimcha sozlash kerak emas.

### Dark variant — `dark:` prefix

Har bir utility'ga `dark:` qo'shsangiz, dark mode'da shu stil qo'llanadi.

| Class                  | Light mode   | Dark mode       |
|------------------------|--------------|------------------|
| `bg-white`             | Oq fon       | Oq fon           |
| `dark:bg-gray-900`     | —            | Qorong'u fon    |
| `text-gray-900`        | Qorong'u matn | Qorong'u matn   |
| `dark:text-gray-100`   | —            | Och matn        |
| `border-gray-200`      | Och chegara  | Och chegara     |
| `dark:border-gray-700` | —            | O'rta chegara   |

**Misol — card dark mode bilan:**

```html
<div class="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
  <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100">Card sarlavhasi</h3>
  <p class="text-gray-600 dark:text-gray-300 mt-2">
    Matn ham dark mode'da o'zgaradi.
  </p>
</div>
```

### Qachon dark variant qo'shish kerak?

- **Fon**: `bg-white` → `dark:bg-gray-900` yoki `dark:bg-gray-800`
- **Matn**: `text-gray-800` → `dark:text-gray-100` yoki `dark:text-gray-200`
- **Chegaralar**: `border-gray-200` → `dark:border-gray-700`
- **Soyalar**: dark mode'da `shadow` kamroq ko'rinishi mumkin — kerak bo'lsa `dark:shadow-none` yoki ranglarni moslashtiring
- **Tugmalar va linklar**: ranglari dark fon ustida yaxshi ko'rinsin

### Tizim sozlamasini tekshirish

Brauzerda: Developer Tools → Rendering → "Emulate CSS media feature prefers-color-scheme" → `dark` tanlang. Yoki macOS/Windows'da tizimni dark mode'ga o'tkazing.

### Practice

Bitta card'ga dark mode qo'shing: fon `dark:bg-gray-800`, matn `dark:text-gray-100` va `dark:text-gray-300`, chegara `dark:border-gray-700`. Tizimni dark mode'ga o'tkazib natijani ko'ring.

---

## 3.4 Dars: Borders, Shadows va Effektlar

### Border radius — burchak yumaloqligi

| Class         | Natija                   |
|---------------|--------------------------|
| `rounded-none`| Yumaloqlik yo'q          |
| `rounded-sm`  | 2px                      |
| `rounded`     | 4px — default            |
| `rounded-md`  | 6px                      |
| `rounded-lg`  | 8px                      |
| `rounded-xl`  | 12px                     |
| `rounded-2xl` | 16px                     |
| `rounded-3xl` | 24px                     |
| `rounded-full`| 50% — aylana (tugma, avatar) |

**Faqat ma'lum burchaklar:**

| Class               | Vazifa                    |
|---------------------|---------------------------|
| `rounded-t-lg`      | Faqat yuqori burchaklar   |
| `rounded-b-lg`      | Faqat pastki burchaklar   |
| `rounded-l-lg`      | Chap burchaklar           |
| `rounded-r-lg`      | O'ng burchaklar           |
| `rounded-tl-xl`     | Yuqori chap burchak       |
| `rounded-tr-xl`     | Yuqori o'ng burchak       |

### Box shadow — soyali effektlar

| Class        | Tavsif                  |
|--------------|-------------------------|
| `shadow-sm`  | Juda yengil soya        |
| `shadow`     | Oddiy soya              |
| `shadow-md`  | O'rta soya              |
| `shadow-lg`  | Katta soya              |
| `shadow-xl`  | Juda katta soya         |
| `shadow-2xl` | Eng katta soya          |
| `shadow-inner` | Ichki soya (chuqurlik taassuroti) |
| `shadow-none`| Soyasiz                 |

### Opacity — shaffoflik (alohida)

Spacing yoki rang ichida emas, balki element butunlay:

| Class        | Shaffoflik |
|--------------|------------|
| `opacity-0`  | 0%         |
| `opacity-50` | 50%        |
| `opacity-75` | 75%        |
| `opacity-100`| 100% — default |

### Blend modes — aralashuv rejimlari

Rasmlar yoki ranglar ustma-ust qo'yilganda qanday aralashishini boshqaradi:

| Class                 | Natija           |
|-----------------------|------------------|
| `mix-blend-multiply`  | Multiply         |
| `mix-blend-screen`    | Screen           |
| `mix-blend-overlay`  | Overlay          |
| `bg-blend-multiply`  | Fon blend        |
| `bg-blend-darken`    | Fon qorong'ilashtiradi |

**Misol — gradient ustida matn:**

```html
<div class="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl overflow-hidden">
  <div class="absolute inset-0 bg-black/30"></div>
  <div class="relative p-6 text-white">
    <h2>Banner sarlavhasi</h2>
  </div>
</div>
```

### Transition — silliq o'tish (oldindan ko'rinish)

Hover, focus va boshqa holatlar o'rtasida silliq o'tish uchun `transition` kerak:

| Class                  | Qaysi xususiyat | Davomiylik  |
|------------------------|-----------------|-------------|
| `transition`           | Barchasi       | 150ms       |
| `transition-colors`   | Ranglar        | 150ms       |
| `transition-transform`| Transform      | 150ms       |
| `duration-300`         | —              | 300ms       |
| `duration-500`         | —              | 500ms       |
| `ease-in-out`         | —              | Ease-in-out |

**Misol — silliq hover:**

```html
<button class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:scale-105 active:scale-95 transition duration-200">
  Tugma
</button>
```

### Card ni yaxshilash — amaliy misol

```html
<div class="max-w-sm rounded-xl shadow-md hover:shadow-xl border border-gray-200 overflow-hidden transition-shadow duration-300">
  <div class="h-32 bg-gradient-to-br from-blue-400 to-blue-600"></div>
  <div class="p-6 bg-white">
    <h3 class="text-xl font-bold text-gray-800">Card sarlavhasi</h3>
    <p class="text-gray-600 text-sm mt-2 leading-relaxed">
      Yengil soya, hover da kattaroq soya — chiroyli va zamonaviy ko'rinish.
    </p>
    <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
      Batafsil
    </button>
  </div>
</div>
```

### Practice

Kun 1 yoki Kun 2 dagi card'ni yangilang: `rounded-xl`, `shadow-md`, `hover:shadow-xl`, `transition-shadow`, `border border-gray-200` va tugmada `transition-colors` qo'shing.

---

## Kun 3 Xulosa

Siz o'rganasiz:

1. **Responsive design** — `sm:`, `md:`, `lg:` breakpoint'lar, `flex-col md:flex-row`, `hidden md:block`, responsive padding va typography.
2. **Interaktiv holatlar** — `hover:`, `focus:`, `active:`, `disabled:`; ring, scale, translate bilan tugma va link stillari.
3. **Dark mode** — `dark:` prefix, tizim sozlamasiga qarab avtomatik qo'llanadi.
4. **Borders, shadows va effektlar** — `rounded-*`, `shadow-*`, `opacity-*`, `transition`, blend mode'lar; card va tugmalarni silliq va chiroyli qilish.
