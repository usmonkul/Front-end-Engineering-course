# Tailwind CSS — Kun 2: Layout va Typography

**Maqsad**: Flexbox, Grid, typography va ranglardan to'liq foydalanish — layout va matn stillarini yaratish.

---

## 2.1 Dars: Flexbox bilan ishlash

### Flex nima?

Flexbox — elementlarni qator yoki ustunda joylashtirish uchun ishlatiladigan layout usuli. Tailwind'da `flex` class'ini parent elementga qo'shsangiz, ichidagi bolalar `flex item`ga aylanadi.

### Asosiy direction va wrap

| Class        | Vazifa                    |
|--------------|----------------------------|
| `flex`       | Flexbox'ni yoqish          |
| `flex-row`   | Default — qator bo'ylab (chapdan o'ngga) |
| `flex-col`   | Ustun bo'ylab (yuqoridan pastga) |
| `flex-row-reverse` | Qator teskari tartibda |
| `flex-col-reverse`  | Ustun teskari tartibda |
| `flex-wrap`  | Joy yetmasa elementlar yangi qatorga o'tadi |
| `flex-nowrap`| Default — barchasi bir qatorda (overflow bo'lishi mumkin) |

**Misol — navbarga elementlarni yonma-yon qo'yish:**

```html
<nav class="flex gap-4 p-4 bg-gray-100">
  <a href="#" class="text-blue-600">Bosh sahifa</a>
  <a href="#" class="text-blue-600">Haqimizda</a>
  <a href="#" class="text-blue-600">Bog'lanish</a>
</nav>
```

**Misol — vertikal stack (ustun):**

```html
<div class="flex flex-col gap-2">
  <div class="p-4 bg-blue-100">Birinchi</div>
  <div class="p-4 bg-blue-200">Ikkinchi</div>
  <div class="p-4 bg-blue-300">Uchinchi</div>
</div>
```

### Alignment — joylashtirish va tekislash

**Asosiy o'q bo'ylab** (`justify-*` — elementlar orasidagi joy):

| Class              | Natija                          |
|--------------------|----------------------------------|
| `justify-start`    | Chapga tekislash                |
| `justify-center`   | Markazga tekislash             |
| `justify-end`      | O'ngga tekislash               |
| `justify-between`  | Elementlar orasida teng bo'shliq (birinchi chapda, oxirgi o'ngda) |
| `justify-around`   | Har bir element atrofida teng bo'shliq |
| `justify-evenly`   | Barcha bo'shliq bir xil taqsimlangan |

**Cross o'q bo'ylab** (`items-*` — perpendikulyar yo'nalishda):

| Class           | Natija                    |
|-----------------|---------------------------|
| `items-start`   | Yuqoriga tekislash        |
| `items-center`  | Markazga tekislash        |
| `items-end`     | Pastga tekislash         |
| `items-stretch` | Default — balandligi to'ldirish |
| `items-baseline`| Matn baseline bo'yicha    |

**Misol — hero section markazda:**

```html
<div class="flex flex-col items-center justify-center min-h-[400px] bg-gray-50">
  <h1 class="text-4xl font-bold text-gray-800 mb-2">Salom, dunyo!</h1>
  <p class="text-gray-600 mb-4">Bu markazlashtirilgan hero section</p>
  <button class="px-6 py-2 bg-blue-500 text-white rounded-lg">Boshlash</button>
</div>
```

### Gap — elementlar orasidagi masofa

| Class      | Vazifa                        |
|------------|-------------------------------|
| `gap-2`    | Barcha yo'nalishda 0.5rem     |
| `gap-4`    | 1rem                          |
| `gap-x-6`  | Faqat gorizontal (qator bo'ylab) |
| `gap-y-2`  | Faqat vertikal (ustun bo'ylab) |

### Flex bolalar — `flex-1`, `grow`, `shrink`

| Class          | Vazifa                                    |
|----------------|--------------------------------------------|
| `flex-1`       | Bo'sh joyni teng taqsimlash, shrink va grow |
| `flex-auto`    | Kontent bo'yicha, lekin grow/shrink bor    |
| `flex-initial` | Default — kerak bo'lganda kichrayadi       |
| `flex-none`    | O'lchami o'zgarmaydi                      |
| `grow`         | Bo'sh joyni egallash (flex-grow: 1)       |
| `grow-0`       | O'smaydi                                  |
| `shrink`       | Joy kam bo'lsa kichrayadi (default)       |
| `shrink-0`     | Kichraymaydi — overflow yaratishi mumkin  |

**Misol — navbar: chapda logo, o'ngda linklar:**

```html
<nav class="flex items-center justify-between p-4 bg-gray-100">
  <div class="font-bold text-xl">Logo</div>
  <div class="flex gap-6">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</nav>
```

### Practice

1. **Horizontal navbar** yarating: logo chapda, 3–4 ta link o'ngda, `justify-between` yordamida.
2. **Centered hero section** yarating: sarlavha, qisqa matn va tugma — barchasi markazda, vertikal stack.

---

## 2.2 Dars: Grid bilan ishlash

### Grid nima?

Grid — elementlarni ustun va qatorlarda joylashtirish uchun. Flexbox bir yo'nalishda (qator yoki ustun), Grid esa ikki yo'nalishda bir vaqtda boshqaradi. Card'lar, gallereya, dashboard layout uchun qulay.

### Asosiy Grid class'lari

| Class           | Vazifa                              |
|-----------------|-------------------------------------|
| `grid`          | CSS Grid'ni yoqish                  |
| `grid-cols-1`   | 1 ustun                             |
| `grid-cols-2`   | 2 ustun                             |
| `grid-cols-3`   | 3 ustun                             |
| `grid-cols-4`   | 4 ustun                             |
| `grid-rows-2`   | 2 qator                             |
| `grid-rows-3`   | 3 qator                             |

**Misol — 3 ustunli layout:**

```html
<div class="grid grid-cols-3 gap-4 p-4">
  <div class="p-4 bg-blue-100 rounded">1</div>
  <div class="p-4 bg-blue-200 rounded">2</div>
  <div class="p-4 bg-blue-300 rounded">3</div>
  <div class="p-4 bg-blue-100 rounded">4</div>
  <div class="p-4 bg-blue-200 rounded">5</div>
  <div class="p-4 bg-blue-300 rounded">6</div>
</div>
```

### Responsive Grid

Breakpoint prefix'lari: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`. Mobile-first — default kichik ekran, keyin kattaroq ekranlar uchun ustunlari oshadi.

| Class                              | Ma'nosi                                      |
|------------------------------------|-----------------------------------------------|
| `grid-cols-1 md:grid-cols-2`       | Mobil: 1 ustun, tablet+: 2 ustun             |
| `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` | Mobil: 1, tablet: 2, desktop: 3 |
| `grid-cols-2 md:grid-cols-4`       | Mobil: 2 ustun, kattaroq: 4 ustun            |

**Misol — responsive feature grid:**

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  <div class="p-6 bg-white rounded-xl shadow">Feature 1</div>
  <div class="p-6 bg-white rounded-xl shadow">Feature 2</div>
  <div class="p-6 bg-white rounded-xl shadow">Feature 3</div>
</div>
```

### Span — bir nechta ustun yoki qatorni egallash

| Class        | Vazifa                           |
|--------------|-----------------------------------|
| `col-span-2` | 2 ustunni egallash               |
| `col-span-3` | 3 ustunni egallash               |
| `col-span-full` | Barcha ustunlarni egallash    |
| `row-span-2` | 2 qatorni egallash               |
| `row-span-3` | 3 qatorni egallash               |

**Misol — katta banner + 2 ta kichik card:**

```html
<div class="grid grid-cols-2 gap-4 p-4">
  <div class="col-span-2 p-8 bg-blue-500 text-white rounded-lg">
    Katta banner — 2 ustunni egallaydi
  </div>
  <div class="p-6 bg-gray-100 rounded-lg">Card 1</div>
  <div class="p-6 bg-gray-100 rounded-lg">Card 2</div>
</div>
```

### Gap Grid'da

Grid uchun ham `gap-*` ishlatiladi — `gap-4`, `gap-x-6`, `gap-y-2` va hokazo.

### Practice

1. **Simple image gallery**: 2 yoki 3 ustunli grid, har bir katakda rasim placeholder (`bg-gray-200 h-32`) va sarlavha.
2. **Feature grid**: 3 ta feature card, mobil da 1 ustun, tablet'da 2, desktop'da 3 ustun — responsive qiling.

---

## 2.3 Dars: Typography chuqurroq

### Font family — shrift turi

| Class        | Shrift turi             |
|--------------|--------------------------|
| `font-sans`  | Sans-serif (default)     |
| `font-serif`| Serif                   |
| `font-mono`  | Monospace (kod uchun)   |

### Font size — matn o'lchami

| Class      | Taxminiy o'lcham |
|------------|-------------------|
| `text-xs`  | 0.75rem (12px)    |
| `text-sm`  | 0.875rem (14px)   |
| `text-base`| 1rem (16px) — default |
| `text-lg`  | 1.125rem (18px)   |
| `text-xl`  | 1.25rem (20px)    |
| `text-2xl` | 1.5rem (24px)     |
| `text-3xl` | 1.875rem (30px)   |
| `text-4xl` | 2.25rem (36px)    |
| `text-5xl` | 3rem (48px)       |
| ...        | ...                |
| `text-9xl` | 8rem               |

### Font weight — qalinlik

| Class         | Qiymat      |
|---------------|-------------|
| `font-thin`   | 100         |
| `font-extralight` | 200  |
| `font-light`  | 300         |
| `font-normal` | 400 — default |
| `font-medium` | 500         |
| `font-semibold`| 600        |
| `font-bold`   | 700         |
| `font-extrabold`| 800       |
| `font-black`  | 900         |

### Line height — qatorlar orasidagi masofa

| Class           | Natija          |
|-----------------|-----------------|
| `leading-none`  | 1               |
| `leading-tight` | 1.25            |
| `leading-snug`  | 1.375           |
| `leading-normal`| 1.5 — default   |
| `leading-relaxed`| 1.625          |
| `leading-loose` | 2               |

### Letter spacing — harflar orasidagi masofa

| Class           | Natija    |
|-----------------|-----------|
| `tracking-tighter`| -0.05em |
| `tracking-tight`| -0.025em  |
| `tracking-normal`| 0       |
| `tracking-wide` | 0.025em   |
| `tracking-wider`| 0.05em    |
| `tracking-widest`| 0.1em   |

### Text decoration

| Class         | Natija        |
|---------------|---------------|
| `underline`   | Pastki chiziq |
| `overline`    | Yuqori chiziq |
| `line-through`| O'rtadan chiziq (o'chirilgan ko'rinish) |
| `no-underline`| Dekoratsiyasiz |

### Text align

| Class         | Natija              |
|---------------|---------------------|
| `text-left`   | Chapga              |
| `text-center` | Markazga            |
| `text-right`  | O'ngga              |
| `text-justify`| Ikki tomonga tekislash |

### Amaliy misol — article layout

```html
<article class="max-w-2xl mx-auto p-6">
  <h1 class="text-4xl font-bold text-gray-900 mb-2 leading-tight">
    Maqola sarlavhasi
  </h1>
  <p class="text-sm text-gray-500 mb-6">Sana va muallif</p>
  <p class="text-base leading-relaxed text-gray-700 mb-4">
    Bodiy matn — o'qilishi oson, leading-relaxed. Bir nechta paragraf...
  </p>
  <p class="text-base leading-relaxed text-gray-700">
    Ikkinchi paragraf...
  </p>
  <p class="text-sm text-gray-400 mt-8">Manba yoki taglar</p>
</article>
```

### Practice

Maqola yoki blog post layout yarating: katta sarlavha (`text-4xl font-bold`), sana/caption (`text-sm text-gray-500`), bodiy matn (`text-base leading-relaxed`), tag oxirida (`text-sm text-gray-400`).

---

## 2.4 Dars: Ranglar va fonlar

### Color palette — tayyor ranglar

Tailwind'da har bir rang nomi uchun 50, 100, 200 … 900, 950 tonlari mavjud. Eng keng qo'llaniladiganlar:

- **Neutral**: slate, gray, zinc, neutral, stone
- **Ranglar**: red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose

**Misollar:** `bg-slate-100`, `text-blue-600`, `border-emerald-300`, `bg-rose-500`.

### Opacity modifier — shaffoflik

`/` orqali opacity qo'shiladi:

| Class            | Natija              |
|------------------|---------------------|
| `bg-blue-500/50` | 50% shaffof fon     |
| `text-black/80`  | 80% shaffof matn   |
| `border-gray-200/30` | 30% shaffof chegara |

### Gradient — gradient fonlar

| Class                  | Yo'nalish                          |
|------------------------|------------------------------------|
| `bg-gradient-to-r`    | Chapdan o'ngga                     |
| `bg-gradient-to-l`    | O'ngdan chapga                     |
| `bg-gradient-to-t`    | Pastdan yuqoriga                   |
| `bg-gradient-to-b`    | Yuqoridan pastga                   |
| `bg-gradient-to-br`   | Yuqori chapdan past o'ngga (diagonal) |
| `bg-gradient-to-tr`   | Past chapdan yuqori o'ngga         |

**Gradient ranglar:** `from-*`, `via-*`, `to-*` bilan:

```html
<div class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-xl">
  Gradient banner
</div>
```

`via-*` ixtiyoriy — `from-*` dan `to-*` gacha bo'sh gradient.

### Borders — chegaralar

| Class            | Vazifa                    |
|------------------|----------------------------|
| `border`         | Default 1px chegara       |
| `border-2`       | 2px chegara               |
| `border-4`       | 4px chegara               |
| `border-t`       | Faqat yuqori chegara      |
| `border-b`       | Faqat pastki chegara      |
| `border-l`       | Faqat chap chegara        |
| `border-r`       | Faqat o'ng chegara        |
| `border-blue-500`| Chegara rangi             |
| `border-gray-200`| Och kulrang chegara       |

### Shadows — soyali effektlar

| Class        | Natija                  |
|--------------|-------------------------|
| `shadow-sm`  | Juda yengil soyali      |
| `shadow`     | Odatiy soyali           |
| `shadow-md`  | O'rta soyali            |
| `shadow-lg`  | Katta soyali            |
| `shadow-xl`  | Juda katta soyali       |
| `shadow-2xl`| Eng katta soyali        |
| `shadow-none`| Soyasiz                 |

### Amaliy misol — gradient va shadow bilan card

```html
<div class="max-w-sm rounded-xl overflow-hidden shadow-lg border border-gray-200">
  <div class="h-32 bg-gradient-to-br from-blue-400 to-blue-600"></div>
  <div class="p-6 bg-white">
    <h3 class="text-xl font-bold text-gray-800 mb-2">Card sarlavhasi</h3>
    <p class="text-gray-600 text-sm leading-relaxed mb-4">
      Qisqacha tavsif — gradient va shadow bilan chiroyli card.
    </p>
    <button class="px-4 py-2 bg-blue-500/90 hover:bg-blue-600 text-white rounded-lg">
      Batafsil
    </button>
  </div>
</div>
```

### Practice

Bitta **colored card** yarating: gradient fon yoki gradient banner ustida, pastda oq fon, `shadow-lg`, `border`, yumaloq burchaklar va tugma. Ranglarni o'zgartirib turib ko'ring (`from-indigo-500 to-purple-600` va hokazo).

---

## Kun 2 Xulosa

Siz o'rganasiz:

1. **Flexbox** — `flex`, `flex-col`, `justify-*`, `items-*`, `gap-*`, `flex-1`; navbar va hero section uchun.
2. **Grid** — `grid`, `grid-cols-*`, responsive `md:grid-cols-2`, `col-span-*`; gallereya va feature grid uchun.
3. **Typography** — `font-*`, `text-*`, `leading-*`, `tracking-*`, `underline`; maqola va matn layout uchun.
4. **Colors & backgrounds** — palette, opacity `/50`, gradientlar, borders va shadows; chiroyli card va banner uchun.
