# Hooklar — chuqurroq ko‘rish

> **Hooklar** — React 16.8 dan beri funksional komponentlarda state va boshqa imkoniyatlardan foydalanish uchun ishlatiladigan funksiyalar. `useState` bilan tanishsiz. Bu modulda `useEffect`, `useContext`, `useRef`, `useMemo`, `useCallback` va custom hooklar haqida batafsil so‘z boradi.

---

## useEffect — side effects

**Side effect** — komponentdan tashqariga ta'sir qiladigan kod: API chaqiruv, DOM o‘zgartirish, interval, subscription. React da render qatorda (return ichida) to‘g‘ridan-to‘g‘ri side effect yozilmaydi. Buning uchun `useEffect` ishlatiladi.

### Asosiy sintaksis

```jsx
import { useEffect } from 'react';

useEffect(() => {
  // Side effect bu yerda
  return () => {
    // Cleanup (ixtiyoriy)
  };
}, [dependency1, dependency2]);
```

`useEffect` uchta qismdan iborat:
1. **Effect funksiyasi** — bajariladigan kod
2. **Cleanup funksiyasi** — ixtiyoriy, effect qayta ishlashdan oldin yoki komponent unmount bo‘lganda
3. **Dependency array** — qaysi o‘zgarishlarda effect qayta ishlashi

### Dependency array — qachon effect ishlaydi

**Bo‘sh massiv `[]`** — faqat birinchi render da:

```jsx
useEffect(() => {
  console.log('Komponent mount bo‘ldi');
  fetch('/api/data').then(/* ... */);
}, []);
```

**Massiv bo‘lmasa** — har render da:

```jsx
useEffect(() => {
  console.log('Har render da');
});
```

**Massivda bog‘liqliklar** — shu bog‘liqliklar o‘zgarganda:

```jsx
useEffect(() => {
  document.title = `${count} ta element`;
}, [count]);
```

`count` o‘zgarganda effect qayta ishlaydi.

### API dan ma'lumot olish

```jsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Yuklanmoqda...</p>;
  return <ul>{users.map((u) => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

### Cleanup — tozalash

Effect ichida interval, subscription, event listener ochilsa, ularni yopish kerak. Cleanup funksiyasi qaytariladi:

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log('Har soniya');
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);
```

Cleanup qachon ishlaydi:
- Effect qayta ishlashdan oldin (bog‘liqlik o‘zgarganda)
- Komponent unmount bo‘lganda (sahifadan chiqganda)

```jsx
useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```

### ID parametrli API chaqiruv

```jsx
function UserDetail({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setUser(data);
      });

    return () => {
      cancelled = true;
    };
  }, [userId]);

  return user ? <div>{user.name}</div> : <p>Yuklanmoqda...</p>;
}
```

`userId` o‘zgarganda yangi request yuboriladi. Eski request javob kelsa, `cancelled` true bo‘lgani uchun state yangilanmaydi — bu "race condition" dan oldini oladi.

---

## useContext — prop drilling siz state ulashish

**Prop drilling** — state ni chuqur joylashgan bola komponentga uzatish uchun oraliq komponentlardan o‘tkazish. Bu ko‘p qatlamda noqulay.

### Context yaratish

```jsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function ThemeProvider({ children, value }) {
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme ThemeProvider ichida ishlatilishi kerak');
  }
  return context;
}
```

### Provider va ishlatish

```jsx
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Main />
    </ThemeContext.Provider>
  );
}

function Header() {
  const { theme } = useContext(ThemeContext);
  return <header className={theme}>Header</header>;
}

function Main() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <main>
      <p>Mavzu: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Tema almashtirish
      </button>
    </main>
  );
}
```

`Header` va `Main` orasidagi komponentlar props olmaydi — ular to‘g‘ridan-to‘g‘ri context dan o‘qiydi.

### Context + useState

Context da faqat qiymat emas, state va setter ham bo‘lishi mumkin:

```jsx
const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}
```

### Default qiymat

`createContext('light')` — Provider bo‘lmasa `useContext` `'light'` qaytaradi. Provider bo‘lmasa xato berish uchun:

```jsx
const ThemeContext = createContext(null);

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme ThemeProvider ichida ishlatilishi kerak');
  }
  return context;
}
```

### Context qachon ishlatish

- **Mavzu:** light/dark
- **Til:** i18n
- **Auth:** foydalanuvchi, login/logout
- **Dizayn tizimi:** ranglar, bo‘shliqlar

Context juda ko‘p o‘zgarganda barcha consumer qayta render bo‘ladi. Buni kamaytirish uchun context ni bo‘lishingiz yoki Zustand kabi boshqa state management yechimlarini qo‘llashingiz mumkin.

---

## useRef — DOM refs va o‘zgaruvchan qiymatlar

**useRef** — ikkita asosiy vazifa uchun: DOM elementga havola va renderlar orasida o‘zgaruvchan qiymat saqlash (qayta render qilmasdan).

### DOM refs

Input elementiga fokus berish, scroll pozitsiyasi, video elementini boshqarish:

```jsx
import { useRef } from 'react';

function SearchInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Qidirish..." />
      <button onClick={focusInput}>Inputga fokus</button>
    </div>
  );
}
```

`ref={inputRef}` — React render qilgandan keyin `inputRef.current` DOM elementga teng bo‘ladi.

### O‘zgaruvchan qiymat (render qilmasdan)

`useRef` qiymati o‘zgarganda komponent qayta render qilinmaydi. Oldingi qiymatni saqlash, interval ID, timeout ID uchun:

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(null);

  useEffect(() => {
    prevCountRef.current = count;
  });

  const prevCount = prevCountRef.current;
  return (
    <div>
      <p>Hozir: {count}, Oldingi: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

### useRef vs useState

| | useRef | useState |
|---|--------|----------|
| O‘zgarishda render | Yo‘q | Ha |
| Qiymatga kirish | `.current` | To‘g‘ridan-to‘g‘ri |
| DOM havola | Ha | Yo‘q |
| Oldingi qiymat, ID saqlash | Ha | Yaroqsiz |

---

## useMemo va useCallback — qachon va nima uchun

**useMemo** — hisoblangan qiymatni keshlaydi. **useCallback** — funksiyani keshlaydi. Ikkalasi ham **optimizatsiya** uchun. Keraksiz joyda ishlatish ortiqcha va kodni murakkablashtiradi.

### useMemo

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

### useMemo — qachon kerak

- Katta massivni filter/sort qilish
- Murakkab hisob-kitob
- Bola komponentga obyekt uzatish va `React.memo` ishlatilganda (referens o‘zgarishini oldini olish)

### useCallback

Funksiya har render da yangi yaratiladi. Bola komponentga funksiya uzatilsa va `React.memo` ishlatilsa, `useCallback` bilan funksiyani bir xil qoldirish mumkin:

```jsx
import { useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Bosildi');
  }, []);

  return <Child onClick={handleClick} />;
}

const Child = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Bosing</button>;
});
```

`handleClick` har render da bir xil referens — `Child` keraksiz qayta render bo‘lmaydi.

### useCallback — bog‘liqliklar

Funksiya tashqaridagi o‘zgaruvchilardan foydalansa, ular dependency arrayga qo‘shiladi:

```jsx
const handleSubmit = useCallback((e) => {
  e.preventDefault();
  submitForm(formData);
}, [formData]);
```

### Eslatma

`useMemo` va `useCallback` har doim kerak emas. Avval oddiy kod yozing. Profil qiling, sekin joy bo‘lsa, shu joyda ishlating. Ortiqcha ishlatish xotira va murakkablikni oshiradi.

---

## Custom hooks — qayta ishlatiladigan mantiq

**Custom hook** — `use` bilan boshlanadigan funksiya, ichida boshqa hooklar ishlatiladi. Bir xil mantiqni bir nechta komponentda qayta ishlatish uchun.

### Oddiy custom hook

```jsx
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

function Counter() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

### useLocalStorage

```jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="light">Yorug‘</option>
      <option value="dark">Qorong‘u</option>
    </select>
  );
}
```

### useFetch

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

function UserList() {
  const { data: users, loading, error } = useFetch('/api/users');

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xato: {error.message}</p>;
  return <ul>{users.map((u) => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

### useDebounce

```jsx
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

function SearchInput() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      fetch(`/api/search?q=${debouncedQuery}`).then(/* ... */);
    }
  }, [debouncedQuery]);

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}
```

### Custom hook qoidalari

1. Nom `use` bilan boshlanadi
2. Faqat funksiyalar ichida (komponent yoki boshqa custom hook)
3. Hook ichida boshqa hooklar chaqiriladi
4. Hooklar har bir render da bir xil tartibda chaqirilishi kerak (shart, tsikil ichida chaqirish mumkin emas)

---

## Xulosa

- **useEffect** — side effect uchun. Dependency array: `[]` (bir marta), `[a, b]` (o‘zgarganda), bo‘sh (har render). Cleanup — interval, listener, subscription uchun.
- **useContext** — prop drilling siz state ulashish. Provider va consumer. Mavzu, auth, til uchun.
- **useRef** — DOM ref va renderlar orasida o‘zgaruvchan qiymat. Re-render qilmaydi.
- **useMemo** — hisoblangan qiymatni keshlash. **useCallback** — funksiyani keshlash. Faqat optimizatsiya kerak bo‘lishida.
- **Custom hook** — `use` bilan boshlanadi, ichida hooklar, qayta ishlatiladigan mantiq uchun.
