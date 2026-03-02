# Tailwind CSS React da

> **Tailwind CSS** — utility-first CSS framework. Har bir klass bitta CSS xususiyatini boshqaradi. Oddiy CSS yoki SCSS o‘rniga `className` da klasslarni yozasiz. React da Tailwind tez va qulay ishlaydi.

---

## Vite bilan Tailwind o‘rnatish

### Yangi loyiha

Vite + React loyihasi yaratishda Tailwind ni qo‘shish:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

`tailwind.config.js` va `postcss.config.js` yaratiladi.

### Tailwind konfiguratsiyasi

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

`content` — Tailwind qaysi fayllarni skaner qilishi. Faqat shu fayllardagi klasslar final CSS ga kiritiladi.

### Global CSS

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`main.jsx` da import qiling: `import './index.css'`

---

## Utility klasslar va responsive dizayn

### Asosiy klasslar

Tailwind da har bir CSS xususiyati alohida klass:

```jsx
<div className="p-4 bg-blue-500 text-white rounded-lg shadow-md">
  Matn
</div>
```

| Klass | Natija |
|-------|--------|
| `p-4` | padding: 1rem |
| `bg-blue-500` | background: #3b82f6 |
| `text-white` | color: white |
| `rounded-lg` | border-radius: 0.5rem |
| `shadow-md` | box-shadow |

### Spacing

`p` — padding, `m` — margin. Yo‘nalish: `t` (top), `r` (right), `b` (bottom), `l` (left), `x` (horizontal), `y` (vertical).

```
p-4    padding: 1rem
pt-2   padding-top: 0.5rem
px-6   padding-left va padding-right
m-auto margin: auto
gap-4  gap: 1rem (flex/grid)
```

### Ranglar

`bg-*` — fon, `text-*` — matn, `border-*` — chegara. Raqam — ochiq-qorong‘ulik (50–950).

```
bg-slate-100, bg-slate-900
text-blue-600
border-gray-300
```

### Responsive — breakpointlar

Tailwind da responsive klasslar prefiks bilan: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`.

```jsx
<div className="w-full md:w-1/2 lg:w-1/3 p-4 md:p-6 lg:p-8">
  Responsive element
</div>
```

| Prefiks | Min-width |
|---------|-----------|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

**Mobile-first:** Klasssiz — kichik ekran. `md:` — 768px dan katta. `lg:` — 1024px dan katta.

```jsx
<div className="text-sm md:text-base lg:text-lg">
  Kichik ekranda kichik, katta ekranda katta shrift
</div>
```

### Flexbox va Grid

```jsx
{/* Flex */}
<div className="flex flex-col md:flex-row gap-4 items-center justify-between">
  <span>1</span>
  <span>2</span>
</div>

{/* Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Karta 1</div>
  <div>Karta 2</div>
  <div>Karta 3</div>
</div>
```

### Hover, focus, dark

```jsx
<button className="bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 active:scale-95 transition">
  Tugma
</button>

<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Dark mode qo‘llab-quvvatlanadi
</div>
```

---

## Komponent patternlari Tailwind bilan

### @apply — komponent klasslari

Takrorlanadigan stilni bitta klassga yig‘ish:

```css
/* index.css */
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition;
  }

  .card {
    @apply p-6 bg-white rounded-xl shadow-lg border border-gray-100;
  }
}
```

```jsx
<button className="btn-primary">Yuborish</button>
<div className="card">Karta mazmuni</div>
```

### clsx yoki cn — shartli klasslar

Bir nechta klassni shartga qarab birlashtirish:

```bash
npm install clsx
```

```jsx
import clsx from 'clsx';

function Button({ variant, disabled, className, ...props }) {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded-lg transition',
        variant === 'primary' && 'bg-blue-500 text-white hover:bg-blue-600',
        variant === 'secondary' && 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
}
```

### Tailwind + clsx — cn funksiyasi

`tailwind-merge` — bir xil turdagi klasslar to‘qnashganda oxirgisi qoladi:

```bash
npm install clsx tailwind-merge
```

```jsx
// lib/utils.js
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Ishlatish
<button className={cn('px-4 py-2', isActive && 'bg-blue-500', className)} />
```

---

## Komponent kutubxonalari

### shadcn/ui

**shadcn/ui** — nusxa ko‘chirib qo‘yiladigan komponentlar. O‘zingizning kod bazangizda, Tailwind va Radix UI asosida.

O‘rnatish:

```bash
npx shadcn@latest init
```

So‘rovlar: style (default/new-york), base color, CSS variables. Keyin komponent qo‘shish:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

Komponentlar `components/ui/` ga yoziladi. O‘zgartirish bepul.

```jsx
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

<Button variant="default">Bosing</Button>
<Button variant="outline" size="sm">Kichik</Button>

<Card>
  <CardHeader>
    <CardTitle>Sarlavha</CardTitle>
  </CardHeader>
  <CardContent>
    Mazmun
  </CardContent>
</Card>
```

### Radix UI

**Radix UI** — headless komponentlar. Stil yo‘q, faqat mantiq va accessibility. Tailwind bilan o‘zingiz stil qo‘shasiz.

```bash
npm install @radix-ui/react-dialog
```

```jsx
import * as Dialog from '@radix-ui/react-dialog';

<Dialog.Root>
  <Dialog.Trigger asChild>
    <button className="px-4 py-2 bg-blue-500 text-white rounded">Ochish</button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 bg-black/50" />
    <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl">
      <Dialog.Title>Sarlavha</Dialog.Title>
      <Dialog.Description>Ta'rif</Dialog.Description>
      <Dialog.Close asChild>
        <button className="mt-4 px-4 py-2 bg-gray-200 rounded">Yopish</button>
      </Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
```

### Headless UI

**Headless UI** — Tailwind Labs tomonidan. Radix ga o‘xshash, lekin Tailwind bilan birga ishlashga mo‘ljallangan.

```bash
npm install @headlessui/react
```

```jsx
import { Dialog } from '@headlessui/react';

<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
  <div className="fixed inset-0 bg-black/30" />
  <div className="fixed inset-0 flex items-center justify-center p-4">
    <Dialog.Panel className="mx-auto max-w-sm rounded-lg bg-white p-6 shadow-xl">
      <Dialog.Title>Modal sarlavha</Dialog.Title>
      <p>Modal mazmuni</p>
      <button onClick={() => setIsOpen(false)}>Yopish</button>
    </Dialog.Panel>
  </div>
</Dialog>
```

### Qaysi birini tanlash?

| Kutubxona | Xususiyat | Qachon ishlatish |
|-----------|-----------|-------------------|
| shadcn/ui | Tayyor stil, o‘zgartirish oson | Tez UI, dizayn tizimi kerak |
| Radix UI | Headless, accessibility | O‘z stilingiz, murakkab komponentlar |
| Headless UI | Headless, Tailwind bilan | Tailwind loyihasi, oddiy komponentlar |

---

## Framer Motion — animatsiyalar (kirish)

**Framer Motion** — React uchun animatsiya kutubxonasi. Oddiy va kuchli animatsiyalar yaratish uchun.

O‘rnatish: `npm install framer-motion`

### motion va animate

```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Animatsiya bilan paydo bo‘ladi
</motion.div>
```

`initial` — boshlang‘ich holat. `animate` — yakuniy holat. `transition` — davomiylik va easing.

### Hover va tap

```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
>
  Tugma
</motion.button>
```

### Variants — qayta ishlatiladigan animatsiyalar

```jsx
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

<motion.div
  variants={fadeIn}
  initial="hidden"
  animate="visible"
  exit="exit"
>
  Kontent
</motion.div>
```

### AnimatePresence — chiqish animatsiyasi

Komponent DOM dan chiqayotganda animatsiya:

```jsx
import { AnimatePresence, motion } from 'framer-motion';

<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Modal yoki xabar
    </motion.div>
  )}
</AnimatePresence>
```

### Stagger — ketma-ket animatsiya

Bolalar ketma-ket animatsiya qilishi:

```jsx
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

<motion.ul variants={container} initial="hidden" animate="visible">
  {items.map((i) => (
    <motion.li key={i} variants={item}>
      {i}
    </motion.li>
  ))}
</motion.ul>
```

---

## Amaliy misol — karta va animatsiya

```jsx
import { motion } from 'framer-motion';

function ProductCard({ title, price }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -4, boxShadow: '0 10px 40px -10px rgba(0,0,0,0.2)' }}
      className="p-6 bg-white rounded-xl shadow-md border border-gray-100"
    >
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-blue-600 font-medium">{price} so‘m</p>
      <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Savatga
      </button>
    </motion.div>
  );
}

function ProductGrid({ products }) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.05 } },
      }}
    >
      {products.map((p, i) => (
        <motion.div
          key={p.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <ProductCard title={p.title} price={p.price} />
        </motion.div>
      ))}
    </motion.div>
  );
}
```

---

## Xulosa

- **Tailwind + Vite** — `tailwindcss`, `postcss`, `autoprefixer`, `content` sozlash, `@tailwind` direktivalari.
- **Utility klasslar** — spacing, rang, flex, grid. **Responsive** — `sm:`, `md:`, `lg:` (mobile-first).
- **Komponent patternlari** — `@apply`, `clsx`, `cn` (tailwind-merge).
- **shadcn/ui** — tayyor komponentlar, o‘zgartirish oson. **Radix UI** va **Headless UI** — headless, o‘z stilingiz.
- **Framer Motion** — `motion`, `initial`/`animate`, `whileHover`/`whileTap`, `AnimatePresence`, `variants`, `stagger`.
