# SCSS — Asosiy kurs (O‘zbekcha)

> **SCSS (Sassy CSS)** — CSS preprocessor. Oddiy CSS ga o‘zgaruvchilar, nesting, mixinlar, funksiyalar va modulli tuzilma qo‘shadi. Katta loyihalarda kodni tartibli va qayta ishlatiladigan qilish uchun ishlatiladi.

---

## 1. SCSS nima va nima uchun kerak?

**SCSS** — Sass ning sintaksisi; CSS bilan to‘liq mos. Siz oddiy CSS yozasiz, lekin qo‘shimcha imkoniyatlardan foydalanasiz.

**Nima uchun ishlatamiz?**

| Sabab | Izoh |
|-------|------|
| **O‘zgaruvchilar** | Rang, shrift, o‘lchamlar bitta joyda — o‘zgartirsangiz, hamma joy yangilanadi |
| **Nesting** | Selektorlarni HTML ierarxiyasiga o‘xshash ichma-ich yozish — kod o‘qilishi oson |
| **Mixinlar** | Bir xil CSS bloklarini qayta ishlatish (flex, grid, media query) |
| **Funksiyalar** | Hisob-kitoblar (px→rem, ranglarni o‘zgartirish) |
| **Modullar** | Fayllarni bo‘lib, `@use` bilan boshqarish — katta loyihalarda zarur |

**Qayerda ishlatiladi?**  
React, Vue, Angular loyihalari, Bootstrap 5 (Sass da yozilgan), dizayn tizimlari (Design Systems), korporativ saytlar.

---

## 2. O‘rnatish va kompilyatsiya

**Talab:** [Node.js](https://nodejs.org/) o‘rnatilgan bo‘lishi.

```bash
npm install -g sass
```

**Bir martalik kompilyatsiya:**
```bash
sass style.scss style.css
```

**Kuzatish rejimi** (fayl o‘zgarganda avtomatik CSS yaratadi):
```bash
sass --watch style.scss:style.css
```

Yoki butun papkani kuzatish:
```bash
sass --watch scss:css
```

**Nima uchun kerak?** Brauzer faqat CSS ni tushunadi; SCSS ni avval CSS ga aylantirish shart.

---

## 3. O‘zgaruvchilar (Variables)

**Nima:** Bir marta qiymat berasiz, keyin loyiha bo‘ylab ishlatasiz.

**Nima uchun:** Rang, shrift, bo‘shliq, border-radius kabi qiymatlar bitta joyda bo‘lsa, dizyni o‘zgartirish oson; xatolik kamayadi.

**Qayerda:** Dizayn tizimlari, tema (light/dark), brend ranglari.

```scss
$primary: #007bff;
$font-family: 'Inter', sans-serif;
$spacing: 8px;
$radius: 8px;

.button {
  background: $primary;
  font-family: $font-family;
  padding: $spacing * 2;
  border-radius: $radius;
}

.card {
  border-radius: $radius;
  padding: $spacing * 3;
}
```

Agar `$primary` ni o‘zgartirsangiz, barcha tugmalar va linklar yangilanadi.

---

## 4. Nesting (Ichma-ich yozuv)

**Nima:** Selektorlarni HTML tuzilmasiga o‘xshab ichma-ich yozish.

**Nima uchun:** Kod qisqaroq va o‘qilishi oson; komponentga tegishli barcha stillar bir joyda.

**Qayerda:** Navbar, kartochkalar, formlar — har qanday blokda.

```scss
.nav {
  display: flex;
  gap: 1rem;

  &__link {
    color: #333;
    text-decoration: none;

    &:hover {
      color: $primary;
    }

    &--active {
      font-weight: bold;
    }
  }
}
```

**Chiqadigan CSS:**
- `.nav`
- `.nav__link`
- `.nav__link:hover`
- `.nav__link--active`

**Muhim:** Nesting 2–3 darajadan oshmasin; chuqur nesting CSS ni ortiqcha og‘ir qiladi.

---

## 5. Mixinlar (Qayta ishlatiladigan bloklar)

**Nima:** Parametrli yoki parametrsiz kod bloki; `@include` bilan chaqiriladi.

**Nima uchun:** Bir xil kodni takrorlamaslik (DRY). Flex center, truncate, media query kabi patternlar bir marta yoziladi.

**Qayerda:** Layout (flex, grid), responsive breakpointlar, tugma/kartochka variantlari.

```scss
@mixin flex-center($gap: 0) {
  display: flex;
  align-items: center;
  justify-content: center;
  @if $gap != 0 {
    gap: $gap;
  }
}

@mixin truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.header {
  @include flex-center(1rem);
}

.card__title {
  @include truncate;
}
```

**Responsive misol:**
```scss
@mixin mobile {
  @media (max-width: 767px) {
    @content;
  }
}

.sidebar {
  width: 300px;

  @include mobile {
    width: 100%;
  }
}
```

---

## 6. Funksiyalar

**Nima:** Qiymat qaytaradigan hisob-kitoblar; stillarda ishlatiladi.

**Nima uchun:** px→rem aylantirish, ranglarni o‘zgartirish (lighten/darken) — qo‘lda hisoblamaslik.

**Qayerda:** Tipografiya (rem), rang palitrasi, o‘lchovlar.

**O‘zingiz yozadigan funksiya:**
```scss
@function rem($px, $base: 16) {
  @return $px / $base * 1rem;
}

h1 { font-size: rem(24); }  /* 1.5rem */
p  { font-size: rem(16); }  /* 1rem */
```

**Sass ning o‘zi qo‘shgan rang funksiyalari:**
```scss
$primary: #007bff;

.button {
  background: $primary;

  &:hover {
    background: darken($primary, 10%);
  }
}

.overlay {
  background: rgba(#000, 0.5);
}

.badge {
  background: lighten($primary, 35%);
  color: darken($primary, 20%);
}
```

| Funksiya | Vazifasi |
|----------|----------|
| `lighten(rang, %)` | Rangni ochroq qilish |
| `darken(rang, %)` | Rangni quyuqlashtirish |
| `rgba(rang, 0–1)` | Shaffoflik (alpha) |
| `mix(rang1, rang2, %)` | Ikki rangni aralashtirish |

---

## 7. @extend va placeholder (%)

**Nima:** Bir selektor boshqa selektorning stillarini "meros" qilib oladi. `%placeholder` — faqat extend qilish uchun, o‘zi CSS da chiqmaydi.

**Nima uchun:** Umumiy stillar (tugma bazasi, kartochka bazasi) bir joyda; variantlar faqat farq qiladigan qismlarni qo‘shadi.

**Qayerda:** Tugma tizimlari, kartochkalar, form elementlari.

```scss
%btn-base {
  padding: 10px 20px;
  border-radius: $radius;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.btn-primary {
  @extend %btn-base;
  background: $primary;
  color: #fff;
}

.btn-secondary {
  @extend %btn-base;
  background: #6c757d;
  color: #fff;
}
```

**Eslatma:** Juda ko‘p joyda `@extend` ishlatilsa, CSS katta bo‘lishi mumkin. Kichik komponentlar uchun mixin ham yaxshi variant.

---

## 8. @use va @forward (modullar)

**Nima:** `@import` o‘rniga ishlatiladigan zamonaviy usul. Har bir fayl bir marta yuklanadi, o‘zgaruvchilar/mixinlar namespace orqali mavjud.

**Nima uchun:** `@import` global — barcha o‘zgaruvchilar bir joyda, nomlar to‘qnashishi mumkin. `@use` modulli va xavfsiz.

**Qayerda:** Har qanday 2+ faylli SCSS loyihasi.

```scss
// _variables.scss
$primary: #007bff;
$radius: 8px;

// _mixins.scss
@use 'variables' as v;

@mixin card {
  padding: 1rem;
  border-radius: v.$radius;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

// main.scss
@use 'variables' as v;
@use 'mixins';

.button {
  background: v.$primary;
  border-radius: v.$radius;
}

.card {
  @include mixins.card;
}
```

**@forward** — boshqa fayllarni "re-export" qilish (masalan, barcha abstractlarni bitta `_index.scss` orqali ulash):

```scss
// abstracts/_index.scss
@forward 'variables';
@forward 'mixins';
@forward 'functions';

// main.scss
@use 'abstracts';
```

---

## 9. Loyiha tuzilmasi (7-1 pattern)

**Nima:** SCSS fayllarini vazifaga qarab papkalarga bo‘lish; bitta `main.scss` hammasini birlashtiradi.

**Nima uchun:** Katta loyihada faylni topish oson, jamoa bir qoidalarga amal qiladi.

**Qayerda:** 5+ sahifali saytlar, SPA, dizayn tizimlari.

```
scss/
├── abstracts/     # variables, mixins, functions (hech narsa chiqarmaydi)
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── _index.scss
├── base/          # reset, typography, global
│   ├── _reset.scss
│   └── _typography.scss
├── components/    # button, card, form, input
│   ├── _button.scss
│   └── _card.scss
├── layout/        # header, footer, grid
│   ├── _header.scss
│   └── _footer.scss
├── pages/         # sahifaga xos (ixtiyoriy)
├── themes/        # light/dark (ixtiyoriy)
├── vendors/       # uchinchi tomon (Bootstrap va hokazo)
└── main.scss      # barcha @use chaqiruqlar
```

**main.scss misoli:**
```scss
@use 'abstracts';
@use 'base/reset';
@use 'base/typography';
@use 'components/button';
@use 'components/card';
@use 'layout/header';
@use 'layout/footer';
```

---

## 10. Amaliy misol: Tugma tizimi

**Maqsad:** Bitta baza stil, primary/secondary/danger kabi variantlar; hover holati.

```scss
// _variables.scss
$primary: #007bff;
$secondary: #6c757d;
$danger: #dc3545;
$radius: 8px;

// _mixins.scss
@use 'variables' as v;

@mixin btn($bg, $color: #fff) {
  display: inline-block;
  padding: 10px 20px;
  border-radius: v.$radius;
  border: none;
  background: $bg;
  color: $color;
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
}

// _button.scss
@use 'variables' as v;
@use 'mixins';

.btn {
  @include mixins.btn(v.$primary);

  &--secondary {
    @include mixins.btn(v.$secondary);
  }

  &--danger {
    @include mixins.btn(v.$danger);
  }
}
```

**Natija:** `.btn`, `.btn--secondary`, `.btn--danger` — bitta mixin va o‘zgaruvchilar orqali boshqariladigan tugma tizimi.

---

## 11. Shartlar va tsikllar (qisqacha)

**@if** — tema, muhit yoki o‘zgaruvchiga qarab stil tanlash.

```scss
$theme: dark;

.page {
  @if $theme == dark {
    background: #1a1a1a;
    color: #eee;
  } @else {
    background: #fff;
    color: #333;
  }
}
```

**@for** — margin/padding klasslari yoki grid ustunlari yaratish.

```scss
@for $i from 1 through 4 {
  .mt-#{$i} {
    margin-top: #{$i}rem;
  }
}
```

Katta loyihalarda bunday klasslar ko‘pincha utility (Tailwind yoki o‘zingizning utility faylingiz) orqali boshqariladi; kerak bo‘lsagina ishlating.

---

## 12. Eng muhim SCSS funksiyalari (qisqa jadval)

| Funksiya | Vazifasi | Misol |
|----------|----------|--------|
| `lighten(rang, %)` | Rangni ochroq qilish | hover/background |
| `darken(rang, %)` | Rangni quyuq qilish | border, hover |
| `rgba(rang, alpha)` | Shaffoflik | overlay, shadow |
| `mix(rang1, rang2, %)` | Ranglarni aralashtirish | gradient, alert |
| `percentage(0.25)` | 0.25 → 25% | progress bar |
| `rem($px)` (o‘zingiz yozasiz) | px → rem | tipografiya |

---

## 13. Yaxshi amaliyotlar

| Qoida | Sabab |
|-------|--------|
| `@use` ishlating, `@import` dan voz keching | Modullik va namespace |
| Nesting 2–3 darajada qoling | Selector vazni va fayl hajmi |
| O‘zgaruvchilarni `abstracts` da saqlang | Bir joydan boshqarish |
| Mixin — takrorlanuvchi *kod* uchun, @extend — umumiy *stil* uchun | To‘g‘ri tanlash |
| BEM bilan birga ishlating | Klass nomlari va nesting bir-biriga mos |
| Izoh va nomlashni izchil qiling | Jamoa va kelajakdagi o‘zingiz uchun |

---

## 14. BEM va SCSS

**BEM** — Block, Element, Modifier. Klass nomlari: `block__element`, `block--modifier`.

**SCSS da** `&` bilan qisqaroq yoziladi:

```scss
.card {
  padding: 1rem;
  border-radius: $radius;

  &__title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  &__desc {
    color: #666;
  }

  &--featured {
    border: 2px solid $primary;
  }
}
```

Bu `.card`, `.card__title`, `.card__desc`, `.card--featured` beradi. BEM + SCSS — katta loyihalarda tartib va qayta foydalanish uchun juda qulay.

---

**Xulosa:** SCSS ning eng kerakli qismlari — **o‘zgaruvchilar**, **nesting**, **mixinlar**, **funksiyalar** va **@use/modullar**. Ularni yaxshi o‘rganib, loyiha tuzilmasini 7-1 ga o‘xshatsangiz, professional darajadagi SCSS dan foydalana olasiz.
