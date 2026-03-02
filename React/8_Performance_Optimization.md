# Performance va optimizatsiya

> **Performance** — ilovaning tez ishlashi va foydalanuvchi tajribasi. React da keraksiz renderlar, katta bundle hajmi, uzoq ro‘yxatlar muammo keltirishi mumkin. Bu modulda profil qilish, code splitting, memoization, virtualizatsiya va bundle tahlilini ko‘ramiz.

---

## React DevTools — profil qilish

**React DevTools** — brauzer kengaytmasi. Komponentlar daraxti, props, state va **Profiler** orqali render vaqtini o‘lchash mumkin.

### O‘rnatish

Chrome yoki Firefox da "React Developer Tools" qidiring va o‘rnating. Ilova React da ishlaganda DevTools da "Components" va "Profiler" tablari paydo bo‘ladi.

### Profiler — render vaqtini o‘lchash

1. DevTools da **Profiler** tabini oching
2. **Record** tugmasini bosing
3. Ilovada harakat qiling (sahifa o‘zgartirish, tugma bosish)
4. **Stop** bosing

Natijada ko‘rasiz:
- Qaysi komponentlar qayta render bo‘ldi
- Har birining render vaqti (ms)
- Nima uchun render bo‘ldi (props/state o‘zgarishi)

**Flamegraph** — komponentlar vaqt taqsimoti. Qizil — sekin. **Ranked** — eng sekin komponentlar yuqorida.

### Nima qidirish kerak

- Bir xil props bilan tez-tez qayta render bo‘layotgan komponentlar — `React.memo` yoki memoization
- Katta komponentlar — code splitting
- Uzoq ro‘yxatlar — virtualizatsiya

---

## Code splitting — React.lazy va Suspense

**Code splitting** — bundle ni bo‘laklarga ajratish. Sahifa yoki komponent kerak bo‘lganda yuklanadi. Dastlabki yuklanish tezlashadi.

### React.lazy

Komponentni dinamik import qilish — alohida chunk yaratiladi:

```jsx
import { lazy } from 'react';

// Oddiy import — barchasi bitta bundle da
// import Dashboard from './pages/Dashboard';

// lazy — Dashboard alohida chunk da, kerak bo‘lganda yuklanadi
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));
```

### Suspense

`lazy` komponent yuklanayotganda fallback ko‘rsatish uchun `Suspense`:

```jsx
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={<div>Yuklanmoqda...</div>}>
      <Dashboard />
    </Suspense>
  );
}
```

Yuklanish davomida `fallback` ko‘rsatiladi. Komponent yuklangach, asosiy mazmun chiqadi.

### Route-based code splitting

Har bir sahifa alohida chunk — eng keng tarqalgan usul:

```jsx
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <p>Yuklanmoqda...</p>
      </div>
    }>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}
```

`/dashboard` ga o‘tganda Dashboard chunk yuklanadi. Bosh sahifa tezroq ochiladi.

### Named export bilan lazy

Agar komponent default export bo‘lmasa:

```jsx
const Settings = lazy(() =>
  import('./pages/Settings').then((module) => ({ default: module.Settings }))
);
```

---

## Memoization — React.memo, useMemo, useCallback

**Memoization** — hisoblangan natijani saqlash. Qayta hisoblash kerak bo‘lmasa, saqlangan qiymat qaytariladi. Keraksiz renderlarni kamaytiradi.

### React.memo

Komponent props o‘zgarmaguncha qayta render bo‘lmasin:

```jsx
import { memo } from 'react';

const ExpensiveChild = memo(function ExpensiveChild({ name, onClick }) {
  console.log('ExpensiveChild render');
  return <div onClick={onClick}>{name}</div>;
});
```

Ota komponent qayta render bo‘lsa ham, `name` va `onClick` bir xil bo‘lsa, `ExpensiveChild` qayta render bo‘lmaydi.

**Eslatma:** `onClick` har render da yangi funksiya bo‘lsa, referens o‘zgaradi va memo ishlamaydi. `useCallback` ishlatish kerak:

```jsx
function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <ExpensiveChild name="Test" onClick={handleClick} />
    </div>
  );
}
```

### useMemo — qiymatni keshlash

Qimmat hisob-kitob har render da qayta bajarilmasin:

```jsx
import { useMemo } from 'react';

function ProductList({ products, filter }) {
  const filteredProducts = useMemo(() => {
    return products.filter((p) => p.category === filter);
  }, [products, filter]);

  return (
    <ul>
      {filteredProducts.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}
```

`products` yoki `filter` o‘zgarmaguncha `filteredProducts` qayta hisoblanmaydi.

### useCallback — funksiyani keshlash

Funksiya har render da yangi yaratiladi. Bola komponentga uzatilsa va `React.memo` ishlatilsa, `useCallback` referensni barqaror qiladi:

```jsx
import { useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return <Child onSubmit={handleSubmit} />;
}

const Child = memo(({ onSubmit }) => {
  return <form onSubmit={/* ... */}>...</form>;
});
```

### Qachon ishlatish

| Vaziyat | Yechim |
|---------|--------|
| Komponent tez-tez render, props o‘zgarmaydi | `React.memo` |
| Qimmat hisob-kitob (filter, sort) | `useMemo` |
| Bola komponentga funksiya uzatiladi, memo ishlatiladi | `useCallback` |

**Ortiqcha ishlatmaslik.** Avval oddiy kod yozing. Profil qiling. Muammo bo‘lsa, shu joyda optimizatsiya qiling.

---

## Virtualizatsiya — uzoq ro‘yxatlar (react-window)

**Virtualizatsiya** — faqat ko‘rinadigan elementlarni render qilish. 10 000 ta element o‘rniga 20–30 ta. DOM yengil, scroll tez.

### react-window

O‘rnatish: `npm install react-window`

```jsx
import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>{items[index].name}</div>
  );

  return (
    <FixedSizeList
      height={400}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}
```

`height` — ro‘yxat balandligi. `itemSize` — har bir qator balandligi. `itemCount` — jami elementlar soni. Faqat ekranda ko‘rinadigan qatorlar render qilinadi.

### O‘zgaruvchan balandlik

`VariableSizeList` — har bir element balandligi boshqacha bo‘lsa:

```jsx
import { VariableSizeList } from 'react-window';

function VariableList({ items }) {
  const getItemSize = (index) => items[index].height || 50;

  const Row = ({ index, style }) => (
    <div style={style}>{items[index].content}</div>
  );

  return (
    <VariableSizeList
      height={400}
      itemCount={items.length}
      itemSize={getItemSize}
      width="100%"
    >
      {Row}
    </VariableSizeList>
  );
}
```

### react-virtualized

`react-virtualized` — kengroq imkoniyatlar (grid, jadval). `react-window` — yengilroq va oddiyroq. Ko‘p hollarda `react-window` yetadi.

---

## Bundle tahlili (analysis)

**Bundle** — barcha JavaScript fayllar birlashtirilgan natija. Katta bundle — sekin yuklanish. Qaysi paketlar hajmini oshiryapti — tahlil qilish kerak.

### Vite — rollup-plugin-visualizer

O‘rnatish: `npm install -D rollup-plugin-visualizer`

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true, gzipSize: true }),
  ],
});
```

`npm run build` dan keyin `stats.html` ochiladi — paketlar hajmi diagrammada.

### Vite build — asosiy ma'lumot

Oddiy build ham chunk hajmini ko‘rsatadi:

```bash
npm run build
```

Chiqishda:
```
dist/assets/index-abc123.js   150.00 kB
dist/assets/Dashboard-xyz.js  45.00 kB
```

Katta chunk lar — code splitting yoki tree-shaking tekshirish uchun nomzod.

### Nima qilish

- Katta third-party kutubxonalar — kerak bo‘lgan qismini import qilish (`import { X } from 'lib'` o‘rniga `import X from 'lib/x'`)
- Duplicate paketlar — `npm dedupe` yoki bitta versiyaga birlashtirish
- Code splitting — katta sahifalar yoki komponentlarni lazy qilish

---

## Amaliy misol — optimizatsiya qadamlar

```jsx
// 1. Route-based code splitting
const ProductList = lazy(() => import('./pages/ProductList'));

// 2. Memo — qimmat bola komponent
const ProductCard = memo(function ProductCard({ product, onAdd }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={() => onAdd(product)}>Savatga</button>
    </div>
  );
});

// 3. useCallback — onAdd referensi barqaror
function ProductList({ products }) {
  const [cart, setCart] = useState([]);
  const handleAdd = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  return (
    <FixedSizeList
      height={600}
      itemCount={products.length}
      itemSize={120}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          <ProductCard product={products[index]} onAdd={handleAdd} />
        </div>
      )}
    </FixedSizeList>
  );
}
```

---

## Xulosa

- **React DevTools Profiler** — qaysi komponent sekin, nima uchun tez-tez render.
- **Code splitting** — `React.lazy` + `Suspense`, route-based, dastlabki yuklanish tezlashadi.
- **Memoization** — `React.memo` (komponent), `useMemo` (qiymat), `useCallback` (funksiya). Profil qilib, kerak joyda ishlatish.
- **Virtualizatsiya** — `react-window` uzoq ro‘yxatlar uchun, faqat ko‘rinadigan elementlar render.
- **Bundle tahlil** — `rollup-plugin-visualizer`, katta paketlarni topish, code splitting va tree-shaking.
