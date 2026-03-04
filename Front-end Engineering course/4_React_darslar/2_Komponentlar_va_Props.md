# Komponentlar va Props

> **Props** — komponentga tashqaridan uzatiladigan ma'lumotlar. Komponentlar props orqali bir-biriga ma'lumot beradi, shu bilan qayta ishlatiladigan va modulli UI yaratadi.

---

## Funksional komponentlar

React da komponent ikki usulda yoziladi: **class** va **funksiya**. Zamonaviy React da funksional komponentlar asosiy usul hisoblanadi — oddiy, qisqa va zamonaviy hooklar bilan ishlash uchun qulay.

### Funksional komponent — asosiy ko‘rinish

Funksional komponent — oddiy JavaScript funksiyasi. U `props` obyektini argument sifatida oladi va JSX qaytaradi. Komponent nomi har doim **katta harf** bilan boshlanadi:

```jsx
function Button(props) {
  return <button>{props.label}</button>;
}
```

Yoki arrow function bilan:

```jsx
const Button = (props) => {
  return <button>{props.label}</button>;
};
```

**Nima uchun katta harf?** React kichik harf bilan boshlanadigan teglarni oddiy HTML element deb, katta harf bilan boshlanadiganlarini komponent deb tushunadi. `<button>` — HTML, `<Button>` — React komponenti.

### Qisqa `return`

Agar komponent faqat bitta element qaytarsa, qavslarsiz yozish mumkin:

```jsx
const Title = (props) => <h1>{props.text}</h1>;
```

---

## Props — ma'lumot uzatish

**Props (properties)** — ota komponentdan bola komponentga uzatiladigan ma'lumotlar. Props faqat yuqoridan pastga oqadi (one-way data flow). Komponent o‘z props larini o‘zgartira olmaydi — ular faqat o‘qiladi.

### Ma'lumot uzatish

Props ni HTML atributlariga o‘xshab uzatasiz. Matn, raqam, mantiqiy qiymat, massiv, obyekt — hammasi mumkin:

```jsx
function UserCard(props) {
  return (
    <div>
      <h2>{props.ism}</h2>
      <p>Yoshi: {props.yosh}</p>
      <p>Faol: {props.faol ? 'Ha' : 'Yo‘q'}</p>
    </div>
  );
}

// Ishlatish
<UserCard ism="Aziz" yosh={25} faol={true} />
```

**Eslatma:** Matn `"Aziz"` qavs ichida, raqam va mantiqiy qiymat `{25}` va `{true}` — JSX da dinamik qiymatlar `{ }` ichida.

### Destructuring — qulay yozuv

`props.ism`, `props.yosh` o‘rniga destructuring bilan to‘g‘ridan-to‘g‘ri o‘zgaruvchilarni olish mumkin:

```jsx
function UserCard({ ism, yosh, faol }) {
  return (
    <div>
      <h2>{ism}</h2>
      <p>Yoshi: {yosh}</p>
      <p>Faol: {faol ? 'Ha' : 'Yo‘q'}</p>
    </div>
  );
}
```

Kod qisqaroq va o‘qilishi oson. Ko‘p komponentda shu usul ishlatiladi.

### Default qiymatlar

Ba‘zi props uzatilmasa, default qiymat berish mumkin. Ikkita usul:

**1. Destructuring da default:**

```jsx
function Button({ label, type = "button" }) {
  return <button type={type}>{label}</button>;
}

<Button label="Yuborish" />           // type = "button"
<Button label="Bekor" type="submit" /> // type = "submit"
```

**2. `defaultProps` (eski usul, hozir kam ishlatiladi):**

```jsx
function Button({ label, type }) {
  return <button type={type}>{label}</button>;
}
Button.defaultProps = {
  type: "button"
};
```

Destructuring da default berish zamonaviy va qulayroq.

### Obyekt va massiv uzatish

Props orqali murakkab ma'lumot ham uzatish mumkin:

```jsx
function ProductCard({ mahsulot }) {
  return (
    <div>
      <h3>{mahsulot.nom}</h3>
      <p>{mahsulot.narx} so‘m</p>
    </div>
  );
}

const mahsulot = { nom: "Telefon", narx: 5000000 };
<ProductCard mahsulot={mahsulot} />
```

Yoki to‘g‘ridan-to‘g‘ri:

```jsx
<ProductCard mahsulot={{ nom: "Telefon", narx: 5000000 }} />
```

Massiv uchun ham xuddi shunday:

```jsx
function TagList({ tags }) {
  return (
    <ul>
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

<TagList tags={["React", "JavaScript", "Vite"]} />
```

---

## Composition — children va komponentlarni birlashtirish

**Composition** — kichik komponentlarni yirik komponentlar yaratish uchun birlashtirish. Bu React da UI yaratishning asosiy usuli.

### `children` — ichki mazmun

Komponent ochuvchi va yopuvchi teg orasidagi mazmun `children` prop sifatida keladi:

```jsx
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// Ishlatish
<Card>
  <h2>Sarlavha</h2>
  <p>Bu paragraf Card ichida ko‘rsatiladi.</p>
</Card>
```

`children` — maxsus prop. U komponentga qo‘yilgan barcha narsani o‘z ichiga oladi: bitta element, bir nechta element, matn, yoki boshqa komponentlar.

### Bir nechta "slot" — composition pattern

Ba‘zan bir komponentda bir nechta joyga tashqaridan mazmun berish kerak bo‘ladi. Buning uchun alohida props ishlatiladi:

```jsx
function Layout({ header, sidebar, content }) {
  return (
    <div className="layout">
      <header>{header}</header>
      <aside>{sidebar}</aside>
      <main>{content}</main>
    </div>
  );
}

// Ishlatish
<Layout
  header={<h1>Sayt sarlavhasi</h1>}
  sidebar={<nav>Menyu</nav>}
  content={<p>Asosiy mazmun</p>}
/>
```

Bu pattern — **slot** yoki **render prop** ga o‘xshash. Har bir "oyna" alohida prop orqali to‘ldiriladi.

### Komponentlarni birlashtirish

Katta UI ni kichik komponentlarga bo‘lib, ularni birlashtirasiz:

```jsx
function Page() {
  return (
    <div>
      <Header />
      <Main>
        <Article />
        <Sidebar />
      </Main>
      <Footer />
    </div>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}
```

Har bir komponent o‘z vazifasini bajaradi. `Page` ularni tartibga keltiradi. O‘zgartirish kerak bo‘lsa, faqat tegishli komponentni o‘zgartirasiz.

### "Containment" vs "Specialization"

**Containment** — komponent ichiga nima qo‘yilishini bilmaydi, faqat `children` ni ko‘rsatadi (masalan, `Card`, `Modal`).

**Specialization** — ma'lum bir komponentning maxsus ko‘rinishi (masalan, `WelcomeDialog` — `Dialog` ning bir turi). Bunda kichik komponent kattasini chaqirib, kerakli props beradi:

```jsx
function Dialog({ title, children }) {
  return (
    <div className="dialog">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <Dialog title="Xush kelibsiz!">
      <p>Ilovamizga xush kelibsiz.</p>
    </Dialog>
  );
}
```

---

## Komponent tuzilishi va fayl tashkiloti

Yaxshi tashkilot — katta loyihalarda kodni topish va saqlashni osonlashtiradi.

### Komponent fayl tuzilishi

Har bir komponent odatda alohida faylda. Fayl nomi komponent nomi bilan mos keladi (PascalCase):

```
src/
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Header.jsx
│   └── UserCard.jsx
├── App.jsx
└── main.jsx
```

### Komponent fayli — standart tartib

Fayl ichida odatda quyidagi tartib qo‘llanadi:

```jsx
// 1. Importlar (tashqi kutubxonalar, keyin ichki)
import { useState } from 'react';
import './Button.css';

// 2. Komponent
function Button({ label, onClick, variant = 'primary' }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}

// 3. Export
export default Button;
```

Importlar yuqorida, komponent o‘rtada, export pastda.

### Papka tashkiloti — turli yondashuvlar

**1. Komponentlar bitta papkada (kichik loyihalar):**

```
src/
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   └── Header.jsx
├── App.jsx
└── main.jsx
```

**2. Feature bo‘yicha (o‘rta va katta loyihalar):**

```
src/
├── features/
│   ├── auth/
│   │   ├── LoginForm.jsx
│   │   └── RegisterForm.jsx
│   └── products/
│       ├── ProductList.jsx
│       └── ProductCard.jsx
├── components/     # Umumiy komponentlar
│   ├── Button.jsx
│   └── Modal.jsx
├── App.jsx
└── main.jsx
```

**3. Komponent + stillar + test birga:**

```
components/
├── Button/
│   ├── Button.jsx
│   ├── Button.css
│   └── Button.test.jsx
└── Card/
    ├── Card.jsx
    ├── Card.css
    └── Card.test.jsx
```

### Import yo‘llari

`index.js` faylidan re-export qilsangiz, import qisqaroq bo‘ladi:

```jsx
// components/Button/index.js
export { default } from './Button';

// Boshqa faylda
import Button from './components/Button';
```

Yoki to‘g‘ridan-to‘g‘ri:

```jsx
import Button from './components/Button.jsx';
```

### Nomlash qoidalari

| Narsa | Qoida | Misol |
|-------|-------|-------|
| Komponent | PascalCase | `UserCard`, `ProductList` |
| Fayl (komponent) | PascalCase | `UserCard.jsx` |
| Fayl (utility) | camelCase | `formatDate.js` |
| Papka | kebab-case yoki camelCase | `user-profile`, `userProfile` |

---

## Amaliy misol

Quyidagi misolda props, children va tuzilish birlashtirilgan:

```jsx
// components/Card.jsx
function Card({ title, children }) {
  return (
    <div className="card">
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}
export default Card;

// components/UserCard.jsx
function UserCard({ user }) {
  return (
    <Card title={user.ism}>
      <p>Email: {user.email}</p>
      <p>Yosh: {user.yosh}</p>
    </Card>
  );
}
export default UserCard;

// App.jsx
import UserCard from './components/UserCard';

function App() {
  const user = {
    ism: "Dilnoza",
    email: "dilnoza@example.com",
    yosh: 24
  };

  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
```

`Card` — umumiy konteyner (`children` bilan). `UserCard` — maxsus komponent, `Card` dan foydalanadi va `user` props orqali ma'lumot oladi.

---

## Xulosa

- **Funksional komponent** — funksiya, props oladi, JSX qaytaradi. Nom katta harf bilan.
- **Props** — tashqaridan uzatiladi, faqat o‘qiladi. Destructuring va default qiymatlar qulay.
- **children** — teg orasidagi mazmun. Bir nechta "slot" uchun alohida props.
- **Composition** — kichik komponentlarni birlashtirib katta UI yaratish.
- **Tashkilot** — komponent = fayl, importlar yuqorida, nomlar izchil, papkalar feature yoki komponent bo‘yicha.
