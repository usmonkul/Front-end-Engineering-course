# State va Events

> **State (holat)** — komponent ichida o‘zgarishi mumkin bo‘lgan ma'lumot. **Events (hodisalar)** — foydalanuvchi harakati (bosish, yozish, yuborish). React da state va events birga ishlaydi — hodisa state ni o‘zgartiradi, state esa UI ni yangilaydi.

---

## useState — lokal holat

**useState** — React hook. Komponent ichida o‘zgaruvchi holat (state) saqlash va yangilash uchun ishlatiladi. State o‘zgarganda komponent qayta render qilinadi va ekrandagi UI yangilanadi.

### Asosiy ishlatish

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Hisob: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

`useState(0)` — boshlang‘ich qiymat 0. Hook ikki narsa qaytaradi:
- `count` — joriy qiymat
- `setCount` — qiymatni o‘zgartirish funksiyasi

State ni to‘g‘ridan-to‘g‘ri o‘zgartirib bo‘lmaydi (`count = 5` — xato). Faqat `setCount` orqali yangilash kerak.

### Bir nechta state

Har bir state uchun alohida `useState` chaqirishingiz mumkin:

```jsx
function Form() {
  const [ism, setIsm] = useState('');
  const [yosh, setYosh] = useState(0);
  const [faol, setFaol] = useState(false);

  return (
    <div>
      <input value={ism} onChange={(e) => setIsm(e.target.value)} />
      <input type="number" value={yosh} onChange={(e) => setYosh(Number(e.target.value))} />
      <input type="checkbox" checked={faol} onChange={(e) => setFaol(e.target.checked)} />
    </div>
  );
}
```

### Obyekt state

Bog‘liq ma'lumotlarni bitta obyektda saqlash mumkin:

```jsx
const [user, setUser] = useState({
  ism: '',
  email: '',
  yosh: 0
});

// Yangilash — eski obyektni kengaytirib, o‘zgartirilgan qismni yozish
setUser({ ...user, ism: 'Aziz' });
setUser({ ...user, email: 'aziz@example.com' });
```

**Muhim:** Obyekt yoki massiv state ni yangilashda eski narsani o‘zgartirmaslik kerak. Yangi nusxa yaratib, `setState` ga berish kerak. `user.ism = 'Aziz'` va keyin `setUser(user)` — noto‘g‘ri, chunki obyekt o‘zgarishsiz qoladi va React yangilanishni sezmasligi mumkin.

### Funksiya orqali yangilash

Agar yangi qiymat avvalgi qiymatga bog‘liq bo‘lsa, `setState` ga funksiya berish yaxshiroq:

```jsx
// Noto‘g‘ri — bir nechta tez chaqiruvda qiymat eski bo‘lib qolishi mumkin
setCount(count + 1);

// To‘g‘ri — har doim oxirgi qiymatdan hisoblanadi
setCount((prev) => prev + 1);
```

Bu ayniqsa hodisa ichida bir nechta marta `setCount` chaqirilsa muhim.

---

## Hodisalarni boshqarish (Events)

React da hodisalar camelCase da yoziladi: `onClick`, `onChange`, `onSubmit`. Handler ga funksiya beriladi — chaqiruv emas.

### onClick

Tugma yoki boshqa element bosilganda:

```jsx
function Button() {
  const handleClick = () => {
    alert('Bosildi!');
  };

  return (
    <div>
      <button onClick={handleClick}>Bosing</button>
      <button onClick={() => console.log('Inline')}>Inline</button>
    </div>
  );
}
```

**Xato:** `onClick={handleClick()}` — qavs bor, funksiya darhol chaqiriladi. `onClick={handleClick}` — funksiya beriladi, bosilganda chaqiriladi.

### Hodisa obyekti (event object)

Handler birinchi argument sifatida **synthetic event** oladi. Brauzer hodisasiga o‘xshash, lekin barcha brauzerlarda bir xil ishlaydi:

```jsx
function Input() {
  const handleChange = (e) => {
    console.log(e.target.value);   // input qiymati
    console.log(e.target.name);    // input name atributi
  };

  return <input onChange={handleChange} />;
}
```

### onChange

Input, select, textarea o‘zgarganda:

```jsx
function SearchInput() {
  const [qidiruv, setQidiruv] = useState('');

  return (
    <input
      value={qidiruv}
      onChange={(e) => setQidiruv(e.target.value)}
      placeholder="Qidirish..."
    />
  );
}
```

### onSubmit

Form yuborilganda. Sukunat (default) harakati — sahifani yangilash — to‘xtatilishi kerak:

```jsx
function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();  // Sahifani yangilashni to‘xtatish
    console.log('Form yuborildi');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Kirish</button>
    </form>
  );
}
```

`e.preventDefault()` — brauzerning form yuborishda sahifani yangilashini oldini oladi.

### Boshqa tez-tez ishlatiladigan hodisalar

| Hodisa | Vazifa |
|--------|--------|
| `onClick` | Bosish |
| `onChange` | Qiymat o‘zgarishi (input, select) |
| `onSubmit` | Form yuborish |
| `onFocus` | Element fokus olganda |
| `onBlur` | Element fokusdan chiqqanda |
| `onKeyDown` | Tugma bosilganda |
| `onDoubleClick` | Ikki marta bosish |

---

## Controlled va uncontrolled input

### Controlled input

Input qiymati state da saqlanadi. Har bir `onChange` da state yangilanadi, input esa state dan qiymat oladi. React to‘liq boshqaradi:

```jsx
function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

**Afzalliklari:** Har bir o‘zgarishni boshqarish mumkin, validatsiya oson, qiymatni boshqa joyda ham ishlatish mumkin.

### Uncontrolled input

Input qiymati React da saqlanmaydi. DOM o‘zida qiymatni ushlab turadi. Qiymat kerak bo‘lganda `useRef` bilan olinadi:

```jsx
import { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" defaultValue="Boshlang'ich" />
      <button type="submit">Yuborish</button>
    </form>
  );
}
```

`defaultValue` — boshlang‘ich qiymat (controlled da `value` ishlatiladi). `ref` — DOM elementga havola.

### Qachon qaysi birini ishlatish?

| Situatsiya | Tavsiya |
|------------|---------|
| Form validatsiya, har bir belgi ustida nazorat | Controlled |
| Oddiy form, faqat yuborishda qiymat kerak | Uncontrolled |
| Fayl tanlash (file input) | Uncontrolled |
| Dinamik default qiymat, real-time o‘zgarish | Controlled |

Ko‘p hollarda **controlled** afzal — React barcha ma'lumotni boshqaradi, kod tushunarliroq.

---

## Formalar va form boshqaruvi

### Oddiy controlled form

```jsx
function ContactForm() {
  const [formData, setFormData] = useState({
    ism: '',
    email: '',
    xabar: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Yuborildi:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="ism"
        value={formData.ism}
        onChange={handleChange}
        placeholder="Ismingiz"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        name="xabar"
        value={formData.xabar}
        onChange={handleChange}
        placeholder="Xabaringiz"
      />
      <button type="submit">Yuborish</button>
    </form>
  );
}
```

Barcha inputlarda `name` — formData kalitiga mos. `handleChange` bitta funksiya, `name` orqali qaysi maydon o‘zgarganini aniqlaydi.

### Select va checkbox

```jsx
// Select
<select value={shahar} onChange={(e) => setShahar(e.target.value)}>
  <option value="">Tanlang</option>
  <option value="toshkent">Toshkent</option>
  <option value="samarqand">Samarqand</option>
</select>

// Checkbox
<input
  type="checkbox"
  checked={rozilik}
  onChange={(e) => setRozilik(e.target.checked)}
/>

// Radio
<input
  type="radio"
  name="jins"
  value="erkak"
  checked={jins === 'erkak'}
  onChange={(e) => setJins(e.target.value)}
/>
```

### Form tozalash

Yuborishdan keyin state ni boshlang‘ich holatga qaytarish:

```jsx
const initialState = { ism: '', email: '', xabar: '' };

function Form() {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialState);  // Tozalash
  };

  // ...
}
```

---

## Lifting state up

**Lifting state up** — state ni eng pastki umumiy ota komponentga ko‘tarish. Ikki yoki undan ortiq bola komponent bir xil ma'lumotdan foydalanishi yoki bir-biriga ta'sir qilishi kerak bo‘lsa, state ularning otasida bo‘lishi kerak.

### Muammo — state pastda

`TemperatureInput` o‘zida state saqlaydi. Ikki alohida input bir-biriga ta'sir qilmaydi:

```jsx
function TemperatureInput() {
  const [temp, setTemp] = useState('');
  return (
    <input
      value={temp}
      onChange={(e) => setTemp(e.target.value)}
    />
  );
}

function Calculator() {
  return (
    <div>
      <TemperatureInput />  {/* Har biri o‘z state ga ega */}
      <TemperatureInput />
    </div>
  );
}
```

### Yechim — state ni yuqoriga ko‘tarish

State ni `Calculator` da saqlab, ikkala input ga props orqali uzatamiz:

```jsx
function TemperatureInput({ scale, value, onChange }) {
  return (
    <fieldset>
      <legend>Harorat ({scale})</legend>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </fieldset>
  );
}

function Calculator() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (value) => {
    setCelsius(value);
    setFahrenheit(value === '' ? '' : (parseFloat(value) * 9/5 + 32).toFixed(2));
  };

  const handleFahrenheitChange = (value) => {
    setFahrenheit(value);
    setCelsius(value === '' ? '' : ((parseFloat(value) - 32) * 5/9).toFixed(2));
  };

  return (
    <div>
      <TemperatureInput scale="C" value={celsius} onChange={handleCelsiusChange} />
      <TemperatureInput scale="F" value={fahrenheit} onChange={handleFahrenheitChange} />
    </div>
  );
}
```

State `Calculator` da. Inputlar faqat qiymatni ko‘rsatadi va o‘zgarishni yuqoriga yuboradi. Bir input o‘zgarsa, ikkinchisi ham yangilanadi.

### Umumiy qoida

State qayerda bo‘lishi kerak?

1. Faqat bitta komponent ishlatsa — shu komponentda.
2. Bir nechta bola komponent ishlatsa — eng yaqin umumiy otada.
3. Yoki global state (Context, Zustand va hokazo) — ko‘p joyda kerak bo‘lsa.

### Lifting state — qadamlar

1. State ni eng pastki umumiy ota komponentga ko‘chiring.
2. Ota komponentda `useState` yozing.
3. Bolalarga `value` va `onChange` (yoki boshqa handler) props sifatida uzating.
4. Bolalar controlled komponentga aylanadi — qiymat va o‘zgarish otadan keladi.

---

## Amaliy misol — ro‘yxat va qo‘shish

```jsx
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([...todos, { id: Date.now(), text: inputValue }]);
    setInputValue('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Yangi vazifa"
        />
        <button type="submit">Qo‘shish</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>O‘chirish</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

Bu yerda: controlled input, form submit, state yangilash (massivga qo‘shish, o‘chirish), `key` prop.

---

## Xulosa

- **useState** — lokal state, `[value, setValue] = useState(initial)`. Yangilash faqat setter orqali.
- **Events** — `onClick`, `onChange`, `onSubmit` va boshqalar. Handler — funksiya, `e.preventDefault()` form uchun.
- **Controlled input** — `value` + `onChange`, React boshqaradi. **Uncontrolled** — `ref` va `defaultValue`.
- **Form** — controlled yondashuv, `name` va umumiy `handleChange`, yuborishda `e.preventDefault()`.
- **Lifting state up** — state ni bir nechta bola ishlatsa, eng yaqin umumiy otaga ko‘tarish.
