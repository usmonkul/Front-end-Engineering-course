# Tailwind CSS — Kun 6: Ilg'or React Pattern'lar

**Maqsad**: Form stillari, layout component'lar, responsive component'lar va animatsiyalar/transition'lar bilan React + Tailwind loyihasini yakunlash.

---

## 6.1 Dars: Form stillari

### Input, label va error message

Form elementlarini Tailwind bilan chiroyli qilish — padding, border, focus ring va xato holati stillari muhim.

**Asosiy input + label:**

```jsx
<div className="space-y-1">
  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
    Email
  </label>
  <input
    id="email"
    type="email"
    placeholder="email@example.com"
    className="
      w-full px-4 py-2
      border border-gray-300 rounded-lg
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:border-transparent
      placeholder:text-gray-400
      disabled:bg-gray-100 disabled:cursor-not-allowed
    "
  />
</div>
```

**Error message** — validation xato bo'lsa:

```jsx
<div className="space-y-1">
  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
    Email
  </label>
  <input
    id="email"
    type="email"
    className={`
      w-full px-4 py-2 rounded-lg
      border ${hasError ? 'border-red-500' : 'border-gray-300'}
      focus:outline-none focus:ring-2 focus:ring-offset-1
      ${hasError ? 'focus:ring-red-500' : 'focus:ring-blue-500'}
      placeholder:text-gray-400
    `}
  />
  {hasError && (
    <p className="text-sm text-red-600">Email noto'g'ri formatda</p>
  )}
</div>
```

### Validation state — invalid stillar

| Holat    | Border            | Focus ring      | Error matn  |
|----------|-------------------|-----------------|-------------|
| Normal   | `border-gray-300` | `focus:ring-blue-500` | —     |
| Invalid  | `border-red-500`  | `focus:ring-red-500`  | `text-red-600` |
| Disabled | `disabled:bg-gray-100` | —           | —     |

### Textarea

```jsx
<label className="block text-sm font-medium text-gray-700 mb-1">
  Xabar
</label>
<textarea
  rows={4}
  placeholder="Xabaringizni yozing..."
  className="
    w-full px-4 py-2 rounded-lg
    border border-gray-300
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
    placeholder:text-gray-400
    resize-none
  "
/>
```

`resize-none` — textarea kengaytirilmasin.

### Checkbox va Radio

**Checkbox:**

```jsx
<div className="flex items-center gap-2">
  <input
    type="checkbox"
    id="agree"
    className="
      w-4 h-4 rounded
      border-gray-300 text-blue-600
    focus:ring-2 focus:ring-blue-500 focus:ring-offset-0
  "
  />
  <label htmlFor="agree" className="text-sm text-gray-700">
    Shartlarga roziman
  </label>
</div>
```

**Radio guruh:**

```jsx
<div className="space-y-2">
  {['Variant A', 'Variant B', 'Variant C'].map((option) => (
    <label key={option} className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name="choice"
        value={option}
        className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
      />
      <span className="text-sm text-gray-700">{option}</span>
    </label>
  ))}
</div>
```

### Select (dropdown)

```jsx
<select
  className="
    w-full px-4 py-2 rounded-lg
    border border-gray-300
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
    bg-white
  "
>
  <option value="">Tanlang...</option>
  <option value="1">Birinchisi</option>
  <option value="2">Ikkinchisi</option>
</select>
```

### Contact form — to'liq misol

```jsx
import { useState } from 'react'

function ContactForm() {
  const [errors, setErrors] = useState({})

  return (
    <form className="max-w-md space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Ism</label>
        <input
          type="text"
          className={`
            w-full px-4 py-2 rounded-lg border
            ${errors.name ? 'border-red-500' : 'border-gray-300'}
            focus:outline-none focus:ring-2 focus:ring-offset-1
            ${errors.name ? 'focus:ring-red-500' : 'focus:ring-blue-500'}
          `}
        />
        {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          className={`
            w-full px-4 py-2 rounded-lg border
            ${errors.email ? 'border-red-500' : 'border-gray-300'}
            focus:outline-none focus:ring-2 focus:ring-offset-1
            ${errors.email ? 'focus:ring-red-500' : 'focus:ring-blue-500'}
          `}
        />
        {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Xabar</label>
        <textarea
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Yuborish
      </button>
    </form>
  )
}
```

### Practice

Contact form yarating: ism, email, xabar maydonlari, validation stillari (`border-red-500`, `text-red-600` xato matn). Ixtiyoriy: checkbox "Shartlarga roziman" va select "Mavzu".

---

## 6.2 Dars: Layout component'lar

### Page layout — header, main, footer

Semantik struktur: `header`, `main`, `footer` va ularni flex yoki grid bilan joylashtirish.

```jsx
function PageLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 bg-white border-b border-gray-200">
        <nav className="flex items-center justify-between">
          <span className="font-bold text-xl">Logo</span>
          <div className="flex gap-4">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
          </div>
        </nav>
      </header>

      <main className="flex-1 p-6">
        {children}
      </main>

      <footer className="p-6 bg-gray-100 border-t border-gray-200 text-center text-gray-600">
        © 2025 Loyiha
      </footer>
    </div>
  )
}
```

`flex-1` — main qolgan joyni egallaydi, footer pastda qoladi.

### Sticky header

Sahifa scroll qilinsa ham header yuqorida qolishi uchun `sticky`:

```jsx
<header className="sticky top-0 z-10 p-4 bg-white/95 backdrop-blur-sm border-b border-gray-200">
  <nav>...</nav>
</header>
```

- `sticky top-0` — yuqoriga yopishadi
- `z-10` — boshqa elementlardan ustda
- `bg-white/95 backdrop-blur-sm` — orqa fon biroz shaffof va blur

### Sidebar layout

Flex yoki grid bilan sidebar va asosiy kontent:

**Flex yondashuvi:**

```jsx
<div className="flex min-h-screen">
  <aside className="w-64 flex-shrink-0 p-6 bg-gray-100 border-r border-gray-200">
    <nav className="space-y-2">
      <a href="#" className="block p-2 rounded hover:bg-gray-200">Dashboard</a>
      <a href="#" className="block p-2 rounded hover:bg-gray-200">Sozlamalar</a>
      <a href="#" className="block p-2 rounded hover:bg-gray-200">Chiqish</a>
    </nav>
  </aside>
  <main className="flex-1 p-6 overflow-auto">
    {children}
  </main>
</div>
```

**Grid yondashuvi:**

```jsx
<div className="grid grid-cols-[240px_1fr] min-h-screen">
  <aside className="p-6 bg-gray-100 border-r border-gray-200">...</aside>
  <main className="p-6 overflow-auto">{children}</main>
</div>
```

`grid-cols-[240px_1fr]` — birinchi ustun 240px, ikkinchisi qolgan joyni egallaydi.

### Dashboard layout — to'liq misol

```jsx
function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 flex-shrink-0 p-6 bg-gray-900 text-white">
        <h2 className="text-lg font-bold mb-6">Dashboard</h2>
        <nav className="space-y-1">
          <a href="#" className="block px-4 py-2 rounded bg-gray-800">Bosh sahifa</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">Statistika</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">Sozlamalar</a>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-10 p-4 bg-white border-b flex items-center justify-between">
          <h1>Sarlavha</h1>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Chiqish</button>
        </header>
        <main className="flex-1 p-6 bg-gray-50">{children}</main>
      </div>
    </div>
  )
}
```

### Practice

Dashboard layout yarating: sidebar (chapda), sticky header (yuqorida) va asosiy kontent maydoni. Sidebar'da 3–4 ta nav link, header'da sarlavha va tugma.

---

## 6.3 Dars: Responsive component'lar

### Breakpoint bo'yicha yashirish/ko'rsatish

| Class              | Mobil | Tablet (768px+) | Desktop (1024px+) |
|--------------------|-------|----------------|-------------------|
| `hidden md:block`  | Yashirilgan | Ko'rinadi | Ko'rinadi |
| `block md:hidden`  | Ko'rinadi | Yashirilgan | Yashirilgan |
| `hidden lg:flex`   | Yashirilgan | Yashirilgan | Flex (ko'rinadi) |

### Responsive navbar — hamburger mobil, to'liq nav desktop

**Oddiy variant** — ikkita nav: biri mobil, ikkinchisi desktop:

```jsx
function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white border-b">
      <span className="font-bold text-xl">Logo</span>

      {/* Desktop: 768px dan kattaroq ekranlarda */}
      <div className="hidden md:flex gap-6">
        <a href="#" className="text-gray-700 hover:text-blue-600">Bosh sahifa</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Haqimizda</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Bog'lanish</a>
      </div>

      {/* Mobil: 768px dan kichik ekranlarda */}
      <button className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded">
        ☰
      </button>
    </nav>
  )
}
```

### Hamburger menyu — state bilan

Hamburger bosilganda mobil menyu ochiladi/yopiladi:

```jsx
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative">
      <div className="flex items-center justify-between p-4 bg-white border-b">
        <span className="font-bold">Logo</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded"
        >
          {isOpen ? '✕' : '☰'}
        </button>
        <div className="hidden md:flex gap-6">
          <a href="#">Bosh sahifa</a>
          <a href="#">Haqimizda</a>
          <a href="#">Bog'lanish</a>
        </div>
      </div>

      {/* Mobil dropdown menyu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg">
          <div className="flex flex-col p-4 gap-2">
            <a href="#" className="p-2 hover:bg-gray-100 rounded">Bosh sahifa</a>
            <a href="#" className="p-2 hover:bg-gray-100 rounded">Haqimizda</a>
            <a href="#" className="p-2 hover:bg-gray-100 rounded">Bog'lanish</a>
          </div>
        </div>
      )}
    </nav>
  )
}
```

### Responsive sidebar

Desktop'da sidebar ko'rinadi, mobil'da yashiriladi yoki drawer sifatida ochiladi:

```jsx
<aside className="
  hidden md:block w-64 p-6 bg-gray-100
  fixed md:relative inset-y-0 left-0 z-20
">
  ...
</aside>
```

### Practice

Responsive navbar yarating: mobil da hamburger tugma, bosilganda pastga tushadigan menyu. Desktop da to'liq linklar yonma-yon. `hidden md:flex` va `md:hidden` dan foydalaning.

---

## 6.4 Dars: Animatsiyalar va transition'lar

### Transition — silliq o'tish

Hover, focus va boshqa holatlar o'rtasida o'zgarish silliq bo'lishi uchun `transition`:

| Class                  | Qaysi xususiyat | Default davomiylik |
|------------------------|-----------------|--------------------|
| `transition`           | Barchasi       | 150ms              |
| `transition-colors`    | Ranglar        | 150ms              |
| `transition-transform`| Scale, translate, rotate | 150ms   |
| `transition-opacity`   | Opacity        | 150ms              |
| `transition-shadow`   | Shadow         | 150ms              |

### Duration va easing

| Class           | Davomiylik |
|-----------------|------------|
| `duration-75`   | 75ms       |
| `duration-150` | 150ms      |
| `duration-200` | 200ms      |
| `duration-300` | 300ms      |
| `duration-500` | 500ms      |
| `duration-700` | 700ms      |

| Class          | Easing         |
|----------------|----------------|
| `ease-linear` | Linear         |
| `ease-in`     | Boshlanishi sekin |
| `ease-out`    | Tugashi sekin  |
| `ease-in-out` | Ikkala tomonda sekin |

### Hover transform — scale va translate

```jsx
<button className="
  px-6 py-2 bg-blue-500 text-white rounded-lg
  hover:scale-105 active:scale-95
  transition-transform duration-200
">
  Tugma
</button>
```

**Card hover da biroz ko'tarilishi:**

```jsx
<div className="
  p-6 bg-white rounded-xl shadow-md
  hover:shadow-xl hover:-translate-y-1
  transition-all duration-300
">
  ...
</div>
```

- `hover:-translate-y-1` — 4px yuqoriga
- `hover:translate-y-1` — 4px pastga (agar kerak bo'lsa)

### Tailwind da tayyor animatsiyalar — `animate-*`

| Class            | Tavsif              |
|------------------|---------------------|
| `animate-spin`   | Aylana harakat      |
| `animate-ping`   | Kengayib yo'qolish  |
| `animate-pulse`  | Yengil pulsatsiya   |
| `animate-bounce` | Sakrash             |
| `animate-fade-in`| Fade in (agar mavjud bo'lsa) |

**Loading spinner:**

```jsx
<div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
```

**Skeleton loading:**

```jsx
<div className="animate-pulse space-y-2">
  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
</div>
```

### Tugma va card — silliq effektlar

**Tugma:**

```jsx
<button className="
  px-6 py-2.5 bg-blue-500 text-white rounded-lg font-medium
  hover:bg-blue-600 hover:scale-105
  active:scale-95
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
  transition-all duration-200
">
  Boshlash
</button>
```

**Card:**

```jsx
<div className="
  p-6 bg-white rounded-xl shadow-md border border-gray-200
  hover:shadow-xl hover:-translate-y-0.5
  transition-shadow transition-transform duration-300
">
  <h3 className="text-xl font-bold mb-2">Card sarlavhasi</h3>
  <p className="text-gray-600">Bodiy matn.</p>
</div>
```

### Practice

Avvalgi tugma va card component'laringizga silliq transition qo'shing: `transition-colors`, `transition-transform`, `duration-300`. Hover da `scale-105` yoki `-translate-y-1`, active da `scale-95`. Ixtiyoriy: loading holatida `animate-pulse` skeleton yarating.

---

## Kun 6 Xulosa

Siz o'rganasiz:

1. **Form stillari** — input, label, error message, validation (`border-red-500`), checkbox, radio, select, textarea; contact form.
2. **Layout component'lar** — header, main, footer, sticky header (`sticky top-0 z-10`), sidebar layout (flex yoki grid), dashboard layout.
3. **Responsive component'lar** — `hidden md:block`, `block md:hidden`, mobil hamburger menyu, desktop to'liq nav.
4. **Animatsiyalar va transition** — `transition`, `transition-colors`, `transition-transform`, `duration-*`, `hover:scale-105`, `animate-spin`, `animate-pulse`.

Tailwind CSS kursi (Part 1 + Part 2) shu bilan yakunlanadi.
