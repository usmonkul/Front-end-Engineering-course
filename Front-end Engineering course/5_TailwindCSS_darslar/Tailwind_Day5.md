# Tailwind CSS — Kun 5: React Setup va Component'lar

**Maqsad**: React + Vite loyihasida Tailwind sozlash, JSX da `className` ishlatish, component'larda stillar va list/conditional rendering.

---

## 5.1 Dars: React + Vite loyihasida Tailwind

### CDN dan Vite'ga o'tish

Part 1 da barcha narsa CDN orqali ishladi — build yo'q edi. React da esa:

- Component'lar, import/export, JSX → **bundler** kerak
- Vite — zamonaviy, tez bundler; React uchun tavsiya etiladi
- Tailwind ham Vite uchun rasmiy plugin bilan ishlaydi

### Loyiha yaratish

**1-qadam.** Yangi React loyihasi:

```bash
npm create vite@latest my-app -- --template react
cd my-app
```

**2-qadam.** Tailwind o'rnatish:

```bash
npm install tailwindcss @tailwindcss/vite
```

### Vite config

`vite.config.js` faylini oching va Tailwind plugin qo'shing:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### CSS fayl

Asosiy CSS fayilda (odatda `src/index.css` yoki `src/main.css`) faqat bitta import bo'ladi:

```css
@import "tailwindcss";
```

Eski `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;` yozish **kerak emas** — bitta `@import "tailwindcss"` yetadi.

### Tekshirish

`App.jsx` ichiga Tailwind class qo'shing:

```jsx
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Tailwind + React</h1>
    </div>
  )
}
```

`npm run dev` ni ishga tushiring va brauzerda natijani ko'ring.

### Loyiha tuzilishi (qisqacha)

```
my-app/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   └── index.css    ← @import "tailwindcss" shu yerda
```

### Practice

Loyihani yarating, Tailwind o'rnating va `App.jsx` da oddiy card yoki tugma yarating — stillar qo'llanganligini tekshiring.

---

## 5.2 Dars: JSX da utility class'lar

### `className` — `class` emas

HTML da `class` atributi bor, lekin JavaScript da `class` — maxsus kalit so'z. Shuning uchun React (JSX) da `className` ishlatiladi.

```jsx
<!-- HTML -->
<div class="p-4 bg-blue-500">...</div>

<!-- JSX -->
<div className="p-4 bg-blue-500">...</div>
```

### Static class'lar

Oddiy qator sifatida:

```jsx
<button className="px-6 py-2 bg-blue-500 text-white rounded-lg">
  Yuborish
</button>
```

### Dynamic class'lar — template literal

O'zgaruvchiga bog'lab:

```jsx
const size = 'lg'
const buttonClass = `px-6 py-2 rounded-lg ${size === 'lg' ? 'text-lg' : 'text-base'}`
return <button className={buttonClass}>Tugma</button>
```

Yoki to'g'ridan-to'g'ri:

```jsx
<button className={`px-6 py-2 rounded-lg ${isLarge ? 'text-lg' : 'text-base'}`}>
  Tugma
</button>
```

### Conditional class'lar — ternary

Shart bo'yicha:

```jsx
<button
  className={isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}
>
  Tab
</button>
```

### Bir nechta shart

Bir nechta class ni birlashtirish:

```jsx
<div
  className={[
    'p-4 rounded-lg',
    isSelected && 'ring-2 ring-blue-500',
    isDisabled && 'opacity-50 cursor-not-allowed'
  ].filter(Boolean).join(' ')}
>
  ...
</div>
```

`filter(Boolean)` — `false`, `undefined` ni olib tashlaydi.

### `clsx` yoki `classnames` kutubxonasi

Ko'p shart bo'lsa, `clsx` qulay:

```bash
npm install clsx
```

```jsx
import clsx from 'clsx'

<button
  className={clsx(
    'px-6 py-2 rounded-lg font-medium',
    variant === 'primary' && 'bg-blue-500 text-white',
    variant === 'secondary' && 'bg-gray-200 text-gray-800',
    size === 'lg' && 'text-lg px-8 py-3'
  )}
>
  Tugma
</button>
```

### Button component — variant bilan

```jsx
function Button({ children, variant = 'primary', disabled }) {
  const baseClass = 'px-6 py-2 rounded-lg font-medium transition'
  const variantClass = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600'
  }
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : ''

  return (
    <button
      className={`${baseClass} ${variantClass[variant]} ${disabledClass}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

// Ishlatish
<Button variant="primary">Saqlash</Button>
<Button variant="secondary">Bekor qilish</Button>
<Button variant="danger" disabled>O'chirish</Button>
```

### Practice

`Button` component yarating. `variant` prop: `"primary"`, `"secondary"`, `"outline"`. `size` prop: `"sm"`, `"md"`, `"lg"`. Har bir variant va size uchun tegishli Tailwind class'larni qo'llang.

---

## 5.3 Dars: Component-based styling

### Nima uchun component'larga ajratish?

- Bir xil layout va stillar qayta-qayta ishlatiladi
- O'zgarish bitta joyda bo'ladi — barcha joyda yangilanadi
- Kod tartibli va o'qilishi oson bo'ladi

### Layout va stillarni component'ga olish

**Card component:**

```jsx
function Card({ title, children, variant = 'default', padding = 'normal' }) {
  const paddingClass = {
    none: 'p-0',
    small: 'p-4',
    normal: 'p-6',
    large: 'p-8'
  }
  const variantClass = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-lg',
    outlined: 'border-2 border-blue-500'
  }

  return (
    <div
      className={`
        rounded-xl
        ${paddingClass[padding]}
        ${variantClass[variant]}
      `}
    >
      {title && (
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      )}
      {children}
    </div>
  )
}

// Ishlatish
<Card title="Sarlavha" variant="elevated" padding="normal">
  <p>Bodiy matn...</p>
</Card>
```

### Props bilan variant'larni boshqarish

| Yondashuv      | Misol                                           |
|----------------|--------------------------------------------------|
| Object mapping | `variantClass[variant]`                          |
| Ternary        | `variant === 'primary' ? 'bg-blue-500' : '...'`  |
| clsx           | `clsx(variant === 'primary' && 'bg-blue-500')`   |

### Base class + variant

Har doim qo'llanadigan stillar va faqat variant uchun:

```jsx
function Card({ children, className = '', ...props }) {
  const baseClass = 'rounded-xl border border-gray-200'
  return (
    <div className={`${baseClass} ${className}`} {...props}>
      {children}
    </div>
  )
}
```

`className` prop orqali tashqaridan qo'shimcha class berish mumkin.

### Practice

`Card` component yarating. Prop'lar: `title`, `variant` (`"default"`, `"elevated"`, `"outlined"`), `padding` (`"small"`, `"normal"`, `"large"`). Har bir variant uchun mos Tailwind class'larni qo'llang.

---

## 5.4 Dars: List'lar va conditional rendering

### `.map()` bilan ro'yxat

Massivdan elementlar yaratish:

```jsx
const items = ['Bir', 'Ikki', 'Uch']

return (
  <ul className="space-y-2">
    {items.map((item, index) => (
      <li
        key={index}
        className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
      >
        {item}
      </li>
    ))}
  </ul>
)
```

**Muhim:** Har bir element uchun `key` prop berish kerak. Odatda `index` o'rniga id ishlatiladi.

### Object'lar bilan

```jsx
const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Telefon', price: 699 },
  { id: 3, name: 'Planshet', price: 399 }
]

return (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {products.map((product) => (
      <div
        key={product.id}
        className="p-6 bg-white rounded-xl shadow-md border border-gray-200"
      >
        <h3 className="font-bold text-gray-800">{product.name}</h3>
        <p className="text-blue-600 font-medium mt-1">${product.price}</p>
      </div>
    ))}
  </div>
)
```

### Conditional rendering — loading va empty state

**Loading:**

```jsx
if (isLoading) {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <p className="text-gray-500">Yuklanmoqda...</p>
    </div>
  )
}
```

**Empty state (bo'sh ro'yxat):**

```jsx
if (items.length === 0) {
  return (
    <div className="text-center py-12 text-gray-500">
      Hech narsa topilmadi.
    </div>
  )
}
```

### Inline conditional

Ternary yoki `&&`:

```jsx
return (
  <div>
    {isLoading && (
      <div className="animate-pulse bg-gray-200 h-8 rounded w-1/2"></div>
    )}
    {!isLoading && data && (
      <div className="space-y-2">{/* Ma'lumot */}</div>
    )}
  </div>
)
```

### Card list — to'liq misol

```jsx
const cards = [
  { id: 1, title: 'Card 1', description: 'Birinchi card tavsifi' },
  { id: 2, title: 'Card 2', description: 'Ikkinchi card tavsifi' },
  { id: 3, title: 'Card 3', description: 'Uchinchi card tavsifi' }
]

function CardList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
          <p className="text-gray-600">{card.description}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Batafsil
          </button>
        </div>
      ))}
    </div>
  )
}
```

### Practice

Mock data (masalan, 4–5 ta mahsulot yoki xizmat) yarating. Har bir element uchun card component (yoki inline stillar) ishlatib, grid'da chiqaring. Ixtiyoriy: `items.length === 0` bo'lsa "Hech narsa yo'q" deb ko'rsating.

---

## Kun 5 Xulosa

Siz o'rganasiz:

1. **React + Vite + Tailwind** — `@tailwindcss/vite` plugin, `@import "tailwindcss"`, config va asosiy CSS.
2. **JSX da class'lar** — `className`, template literal, ternary, `clsx` bilan conditional class'lar.
3. **Component-based styling** — variant va size prop'lari, object mapping, `Card` va `Button` kabi qayta foydalaniladigan component'lar.
4. **List va conditional rendering** — `.map()` bilan ro'yxat, `key`, loading va empty state'lar Tailwind stillari bilan.
