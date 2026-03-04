# State Management

> **State management** — ilova bo‘ylab holatni (ma'lumot, foydalanuvchi, tema va hokazo) boshqarish. React da `useState` lokal holat uchun yetadi. Global yoki chuqur joylashgan komponentlar uchun Context, Zustand yoki Redux Toolkit ishlatiladi.

---

## Context yoki tashqi kutubxona — qachon qaysi biri?

### Context — qachon yetadi

**Context** — React da o‘rnatilgan. Prop drilling dan qochish, mavzu, til, auth kabi unchalik murakkab bo‘lmagan holat uchun yaxshi.

**Afzalliklari:**
- Qo‘shimcha kutubxona yo‘q
- Oddiy, React bilan birga
- Kichik va o‘rta loyihalar uchun yetadi

**Kamchiliklari:**
- Context qiymati o‘zgarganda barcha consumer lar qayta render bo‘ladi
- Ko‘p context — murakkab, har birini bo‘lish kerak
- Murakkab mantiq (middleware, DevTools, time-travel) yo‘q

### Tashqi kutubxona — qachon kerak

Zustand, Redux Toolkit va boshqalar:

**Afzalliklari:**
- Faqat o‘zgargan qismdan foydalanadigan komponentlar qayta render
- DevTools, middleware, kengaytirish imkoniyati
- Katta loyihalar uchun qulay

**Qachon tanlash:**
- Ko‘p global state, tez-tez o‘zgaruvchi
- Murakkab biznes mantiq
- Jamoa Redux/Zustand dan xabardor

### Qisqacha qoida

| Vaziyat | Tavsiya |
|---------|---------|
| Mavzu, til, auth (oddiy) | Context |
| Savat, filtrlar, bir nechta global state | Zustand |
| Katta loyiha, murakkab mantiq, Redux tajribasi | Redux Toolkit |

---

## Zustand — oddiy global state

**Zustand** — yengil, oddiy. Redux ga o‘xshash lekin kam kod. O‘rnatish: `npm install zustand`

### Asosiy store

```jsx
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

function Counter() {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

`create` — store yaratadi. `set` — state ni yangilash. Faqat ishlatiladigan qismlar o‘zgarganda komponent qayta render bo‘ladi.

### Tanlangan state — optimizatsiya

Butun store o‘rniga faqat kerakli qismni olish:

```jsx
function Counter() {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}
```

`count` o‘zgarganda gina bu komponent qayta render bo‘ladi. Boshqa state o‘zgarsa — yo‘q.

### Obyekt state

```jsx
const useAuthStore = create((set) => ({
  user: null,
  isLoggedIn: false,

  login: (userData) => set({
    user: userData,
    isLoggedIn: true,
  }),

  logout: () => set({
    user: null,
    isLoggedIn: false,
  }),
}));

function Header() {
  const { user, logout } = useAuthStore();

  return (
    <header>
      {user ? (
        <>
          <span>{user.name}</span>
          <button onClick={logout}>Chiqish</button>
        </>
      ) : (
        <Link to="/login">Kirish</Link>
      )}
    </header>
  );
}
```

### Bir nechta store

Har bir mavzu uchun alohida store:

```jsx
// stores/authStore.js
export const useAuthStore = create((set) => ({ /* ... */ }));

// stores/cartStore.js
export const useCartStore = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) => set((state) => ({
    items: state.items.filter((i) => i.id !== id),
  })),
}));
```

### Persist — localStorage da saqlash

`zustand/middleware` orqali state ni localStorage ga yozish:

```bash
npm install zustand
```

```jsx
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => set((state) => ({ items: [...state.items, item] })),
    }),
    { name: 'cart-storage' }
  )
);
```

`cart-storage` — localStorage kaliti. Sahifa yangilanganda ham state saqlanadi.

---

## Redux Toolkit — katta loyihalar uchun

**Redux Toolkit (RTK)** — Redux ni soddalashtirgan rasmiy yondashuv. Slice, thunk, RTK Query bilan ishlash oson.

O‘rnatish: `npm install @reduxjs/toolkit react-redux`

### Store va Provider

```jsx
// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// main.jsx
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### Slice — reducer va actions

```jsx
// features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

Immer tufayli `state` ni to‘g‘ridan-to‘g‘ri o‘zgartirish mumkin — immutable yozish shart emas.

### useSelector va useDispatch

```jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
```

### Async thunk — API chaqiruv

```jsx
// features/usersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const res = await fetch('https://api.example.com/users');
    return res.json();
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
```

```jsx
function UserList() {
  const { items, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xato: {error}</p>;
  return <ul>{items.map((u) => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

### RTK Query — API va keshlash

RTK Query — API so‘rovlari, keshlash, loading/error uchun tayyor yechim.

```jsx
// api/usersApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;
```

```jsx
// store.js
import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from './api/usersApi';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
```

```jsx
function UserList() {
  const { data, isLoading, error } = useGetUsersQuery();

  if (isLoading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xato</p>;
  return <ul>{data.map((u) => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

Keshlash, refetch, loading, error avtomatik boshqariladi.

---

## Qaysi vosita — qisqacha qo‘llanma

| Vaziyat | Tavsiya |
|---------|---------|
| Mavzu, til, oddiy auth | Context |
| Savat, filtrlar, bir nechta global state, tez o‘rganish | Zustand |
| Katta loyiha, murakkab mantiq, jamoa Redux biladi | Redux Toolkit |
| API + state birlashgan, keshlash muhim | RTK Query yoki TanStack Query |

### O‘xshashlik va farq

| | Context | Zustand | Redux Toolkit |
|---|---------|---------|---------------|
| O‘rnatish | Yo‘q | `npm install zustand` | `npm install @reduxjs/toolkit react-redux` |
| Kod hajmi | Kam | O‘rta | Ko‘p |
| O‘rganish | Oson | Oson | O‘rta |
| DevTools | Yo‘q | Ha (qo‘shimcha) | Ha |
| Async | Qo‘lda | Qo‘lda | Thunk, RTK Query |

---

## Amaliy misol — savat (Zustand)

```jsx
// stores/cartStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === product.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === product.id
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }
          return { items: [...state.items, { ...product, quantity: 1 }] };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
      clearCart: () => set({ items: [] }),
    }),
    { name: 'cart' }
  )
);

// CartButton.jsx
function CartButton() {
  const items = useCartStore((state) => state.items);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <button>
      Savat ({count})
    </button>
  );
}

// CartPage.jsx
function CartPage() {
  const { items, removeItem } = useCartStore();

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} x{item.quantity}
          <button onClick={() => removeItem(item.id)}>O‘chirish</button>
        </li>
      ))}
    </ul>
  );
}
```

---

## Xulosa

- **Context** — oddiy global holat (mavzu, auth). Prop drilling dan qochish.
- **Zustand** — oddiy, yengil. Store, tanlangan state, persist. O‘rta loyihalar uchun.
- **Redux Toolkit** — slice, thunk, RTK Query. Katta loyihalar va murakkab mantiq uchun.
- **Tanlash** — loyiha hajmi, murakkablik va jamoa tajribasiga qarab qaror qiling.
