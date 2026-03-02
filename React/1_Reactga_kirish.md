# React ga kirish

> **React** — Facebook (Meta) tomonidan yaratilgan JavaScript kutubxonasi. Foydalanuvchi interfeysi (UI) yaratish uchun ishlatiladi. Komponent asosida ishlaydi, Virtual DOM orqali tez va samarali yangilanishlarni ta'minlaydi.

---

## React nima va nima uchun kerak?

**React** — brauzerda sahifani qismlarga bo‘lib, har bir qismni mustaqil komponent sifatida boshqarish imkonini beradi. Oddiy HTML/CSS/JS bilan ham UI yaratish mumkin, lekin React katta va murakkab ilovalarda kodni tartibli, qayta ishlatiladigan va oson boshqariladigan qiladi.

**Asosiy tushunchalar:**

| Tushuncha | Izoh |
|-----------|------|
| **Virtual DOM** | React haqiqiy DOM o‘rniga xotira ichida DOM ning nusxasini saqlaydi. O‘zgarishlar avval Virtual DOM da bo‘ladi, keyin faqat o‘zgargan qismlar haqiqiy DOM ga yoziladi. Bu tezroq va samaraliroq ishlashni ta'minlaydi. |
| **Komponent asosidagi UI** | UI ni kichik, qayta ishlatiladigan qismlarga (komponentlarga) bo‘lasiz. Har bir komponent o‘z mantiqi, ko‘rinishi va holatiga ega. |
| **Deklarativ yondashuv** | Siz "nima ko‘rsatish kerak"ni yozasiz, "qanday ko‘rsatish"ni emas. React o‘zgarishlarni avtomatik boshqaradi. |

**Qayerda ishlatiladi?**  
Facebook, Instagram, Netflix, Airbnb, WhatsApp Web va minglab boshqa sayt va ilovalar React dan foydalanadi.

---

## Vite bilan loyiha yaratish

**Vite** — zamonaviy, tez ishlaydigan build asbobi. Create React App dan tezroq va yengil. TypeScript ishlatmasdan oddiy JavaScript loyihasi yaratish uchun quyidagi buyruqni ishlating:

```bash
npm create vite@latest my-react-app -- --template react
```

`my-react-app` — loyiha nomi. O‘zingiz xohlagan nom bering.

**Loyiha yaratilgandan keyin:**

```bash
cd my-react-app
npm install
npm run dev
```

Brauzerda `http://localhost:5173` manzilini oching — React ilovangiz ishlayapti.

**Loyiha tuzilishi:**

```
my-react-app/
├── index.html          # Kirish nuqtasi
├── package.json        # Loyiha va bog‘liqliklar
├── vite.config.js      # Vite sozlamalari
└── src/
    ├── main.jsx        # React ilovasi shu yerda boshlanadi
    ├── App.jsx         # Asosiy komponent
    ├── App.css
    └── index.css       # Global stillar
```

---

## JSX — sintaksis va qoidalar

**JSX (JavaScript XML)** — JavaScript ichida HTML ga o‘xshash kod yozish imkonini beradi. Brauzer JSX ni to‘g‘ridan-to‘g‘ri tushunmaydi; Vite (yoki Babel) uni oddiy JavaScript ga o‘giradi. React komponentlari odatda `.jsx` yoki `.tsx` kengaytmalarida yoziladi.

### JSX nima va nima uchun?

Oddiy JavaScript da DOM element yaratish murakkab:

```javascript
const element = document.createElement('h1');
element.className = 'title';
element.textContent = 'Salom, dunyo!';
```

JSX da esa HTML ga o‘xshash, o‘qilishi oson:

```jsx
const element = <h1 className="title">Salom, dunyo!</h1>;
```

### Asosiy sintaksis

JSX da HTML teglarini to‘g‘ridan-to‘g‘ri JavaScript da ishlatish mumkin. Bu HTML emas — JavaScript ning kengaytmasi. Shuning uchun `return` ichida, o‘zgaruvchiga berishda yoki funksiyadan qaytarishda ishlatishingiz mumkin:

```jsx
const element = <h1>Salom, dunyo!</h1>;

function Header() {
  return <h1>Salom, dunyo!</h1>;
}
```

### JavaScript ifodalarini ishlatish — `{ }`

JSX ichida `{ }` (figurali qavs) ichiga har qanday JavaScript **ifodasini** yozishingiz mumkin. Ifoda — qiymat qaytaradigan kod (o‘zgaruvchi, hisob-kitob, funksiya chaqiruvi):

```jsx
const ism = "Aziz";
const element = <h1>Salom, {ism}!</h1>;
// Natija: Salom, Aziz!

const yosh = 25;
const matn = <p>Yoshingiz: {yosh} da</p>;

// Hisob-kitob ham mumkin
const narx = 10000;
const chegirma = <p>Jami: {narx * 0.9} so‘m</p>;

// Funksiya chaqiruvi
const sana = new Date().toLocaleDateString();
const footer = <footer>Bugun: {sana}</footer>;
```

**Muhim:** `{ }` ichida faqat ifoda bo‘lishi kerak. `if`, `for`, `switch` kabi operatorlar ifoda emas — ularni to‘g‘ridan-to‘g‘ri `{ }` ichiga yozib bo‘lmaydi. Shartli mantiq uchun ternary yoki o‘zgaruvchi ishlatiladi.

### Atributlar — camelCase va maxsus nomlar

JSX da HTML atributlari JavaScript qoidalariga mos kelishi kerak. `class` va `for` — JavaScript da band so‘zlar, shuning uchun boshqa nomlar ishlatiladi:

| HTML | JSX |
|------|-----|
| `class` | `className` |
| `for` | `htmlFor` |
| `tabindex` | `tabIndex` |
| `onclick` | `onClick` |
| `onchange` | `onChange` |

```jsx
<div className="container">
  <label htmlFor="email">Email</label>
  <input id="email" type="text" tabIndex={1} />
</div>
```

Raqamli qiymatlar `{ }` ichida yoziladi: `tabIndex={1}`. Matn uchun `"1"` yoki `{1}` — ikkalasi ham ishlaydi, lekin raqam bo‘lsa `{ }` aniqroq.

### Bo‘sh qiymatlar: `null`, `undefined`, `false`

JSX da `null`, `undefined`, `false` hech narsa ko‘rsatmaydi. Ularni shartli ko‘rsatish uchun ishlatishingiz mumkin:

```jsx
<div>
  {false}
  {null}
  {undefined}
  {/* Yuqoridagilar ekranda ko‘rinmaydi */}
</div>
```

### Shartli ko‘rsatish (conditional rendering)

**1. Ternary operator (`? :`):**

```jsx
const isLoggedIn = true;

return (
  <div>
    {isLoggedIn ? <p>Xush kelibsiz!</p> : <p>Iltimos, kiring</p>}
  </div>
);
```

**2. `&&` operatori (faqat bitta variant):**

```jsx
const xabar = "Yangi xabar bor";

return (
  <div>
    {xabar && <p>{xabar}</p>}
  </div>
);
```

`&&` da chap qism `false`, `0`, `""`, `null`, `undefined` bo‘lsa, o‘ng qism hisoblanmaydi va hech narsa ko‘rsatilmaydi. `0` dan ehtiyot bo‘ling — `{count && <p>{count}</p>}` da `count` 0 bo‘lsa, 0 chiqadi. Buning o‘rniga `{count > 0 && ...}` ishlating.

**3. O‘zgaruvchi orqali:**

```jsx
let korish;
if (loading) {
  korish = <p>Yuklanmoqda...</p>;
} else if (xato) {
  korish = <p>Xato: {xato}</p>;
} else {
  korish = <p>Ma'lumotlar tayyor</p>;
}

return <div>{korish}</div>;
```

### Ko‘p element qaytarish — Fragment

Komponent bir nechta element qaytarishi kerak bo‘lsa, ularni bitta ota element ichiga olishingiz shart. Qo‘shimcha `<div>` kerak bo‘lmasa, **Fragment** ishlating:

```jsx
return (
  <>
    <h1>Sarlavha</h1>
    <p>Paragraf</p>
  </>
);
```

`<>...</>` — qisqacha yozuv. To‘liq ko‘rinishi: `<React.Fragment>...</React.Fragment>`. Fragment DOM da qo‘shimcha element yaratmaydi, faqat guruhlash uchun.

### Xulosa — JSX qoidalari

- JSX — JavaScript kengaytmasi, HTML ga o‘xshash lekin qoidalari boshqa.
- `{ }` ichida faqat ifoda (o‘zgaruvchi, hisob-kitob, funksiya chaqiruvi).
- `class` → `className`, `for` → `htmlFor`.
- `null`, `undefined`, `false` ekranda ko‘rinmaydi.
- Ko‘p element qaytarish uchun ota element yoki `<>...</>` Fragment.

---

## Birinchi komponentingiz

**Komponent** — qayta ishlatiladigan UI qismi. Funksiya yoki class bo‘lishi mumkin. Zamonaviy React da funksiyalar ko‘p ishlatiladi. Komponent funksiya bo‘lib, JSX qaytaradi.

### Oddiy komponent

`src` papkasida `Greeting.jsx` faylini yarating:

```jsx
function Greeting() {
  return (
    <div>
      <h1>Salom, React!</h1>
      <p>Birinchi komponentingiz muvaffaqiyatli ishlayapti.</p>
    </div>
  );
}

export default Greeting;
```

### Export — default va named

JavaScript da fayldan boshqa faylga narsa "eksport" qilish uchun `export` ishlatiladi. Ikkita asosiy usul bor:

**Default export** — fayldan bitta asosiy narsa chiqarish. Import qilganda istalgan nom berish mumkin:

```jsx
// Greeting.jsx
function Greeting() {
  return <h1>Salom!</h1>;
}
export default Greeting;

// App.jsx — import qilish
import Greeting from './Greeting';      // to‘g‘ri
import Salomlashuv from './Greeting';   // ham to‘g‘ri — nom ixtiyoriy
```

**Named export** — bir nechta narsa chiqarish. Import qilganda aniq nom ishlatish kerak:

```jsx
// utils.js
export function formatDate(date) { /* ... */ }
export function formatPrice(price) { /* ... */ }

// Boshqa faylda import
import { formatDate, formatPrice } from './utils';
```

Bir faylda `export default` faqat bitta bo‘lishi mumkin. `export default` va `export` ni birga ishlatish mumkin:

```jsx
export default function App() { /* ... */ }
export function Helper() { /* ... */ }
```

React komponentlari odatda `export default` bilan eksport qilinadi — har bir komponent o‘z faylida, va import qilganda qisqa yozish uchun.

### Komponentni ishlatish

`App.jsx` faylini oching va `Greeting` ni import qiling. Komponentni HTML tegiga o‘xshab ishlating — `<Greeting />`:

```jsx
import Greeting from './Greeting'
import './App.css'

function App() {
  return (
    <div className="App">
      <Greeting />
    </div>
  );
}

export default App;
```

Import yo‘li `'./Greeting'` — joriy papkadagi `Greeting.jsx` faylini anglatadi. `.jsx` kengaytmasi yozilmasa ham, Vite uni topadi.

---

## Xulosa

- **React** — komponent asosidagi UI kutubxonasi, Virtual DOM orqali tez ishlaydi.
- **Vite** — `npm create vite@latest my-app -- --template react` bilan loyiha yaratish.
- **JSX** — `{ }` ichida JavaScript ifodalari, `className` HTML atributlari uchun, shartli ko‘rsatish uchun ternary yoki `&&`, ko‘p element uchun Fragment.
- **Komponent** — funksiya, `return` da JSX qaytaradi.
- **Export** — `export default` bitta asosiy narsa uchun, `export` bir nechta narsa uchun (named).
