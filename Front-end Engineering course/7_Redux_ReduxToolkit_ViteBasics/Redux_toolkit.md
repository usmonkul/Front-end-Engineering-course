
# Redux Toolkit (RTK) — Vite + React uchun to‘liq darslik (Uzbek)

Bu darslikning maqsadi: siz Redux Toolkit’ni **o‘son**, lekin **professional darajada** tushunib, real loyihada ishlata olishingiz.

## Kimlar uchun?

- React’ni biladigan (component, props, state, `useEffect`, `useState`)
- API’dan data olishni biladigan

## Nima o‘rganasiz?

1) Redux konseptlari (qisqa, fundamentals)
2) Redux Toolkit bilan store setup
3) `createSlice` orqali state + reducer + action
4) `useSelector` va `useDispatch` bilan UI ulash
5) Async: `createAsyncThunk` + `extraReducers`
6) Strukturani to‘g‘ri qilish (folder structure, best practice)
7) Mini loyiha va uy vazifalar

---

# 1) Redux fundamentals (qisqa, lekin kerakli)

Redux’ni tushunish uchun 4 ta asosiy tushuncha yetarli:

## 1.1. Store

**Store** — ilovaning global state’ini saqlaydigan bitta joy.

## 1.2. Action

**Action** — “nima bo‘ldi?” degan signal.
Masalan: `todoAdded`, `userLoggedIn`, `cartItemRemoved`.

## 1.3. Reducer

**Reducer** — action kelganda state qanday o‘zgarishini aytadigan funksiya.

## 1.4. One-way data flow

UI (component) → `dispatch(action)` → reducer state’ni yangilaydi → UI yangilanadi.

> Eslatma: classic Redux’da action type, action creator, switch-case ko‘p bo‘ladi. Redux Toolkit bularni soddalashtiradi.

---

# 2) Redux Toolkit’ni o‘rnatish (Vite + React)

## 2.1. Kerakli paketlar

```bash
npm install @reduxjs/toolkit react-redux
```

Nima uchun 2 ta?

- `@reduxjs/toolkit` — reducer, store, thunk, slice yaratish uchun
- `react-redux` — React componentlarini store bilan ulash uchun (`Provider`, `useSelector`, `useDispatch`)

## 2.2. Tavsiya etilgan minimal struktura

```text
src/
  app/
    store.js
  features/
    counter/
      counterSlice.js
  main.jsx
  App.jsx
```

Keyinroq `features` ichida `todos`, `auth`, `products` kabi bo‘limlar bo‘ladi.

---

# 3) Store yaratish: `configureStore`

`src/app/store.js`:

```js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

Bu yerda:

- `reducer` obyekt bo‘lib, har bir `feature` o‘z reducer’ini beradi.
- `counter` — state’ning bo‘lim nomi bo‘ladi (keyin `state.counter` deb o‘qiymiz).

---

# 4) React app’ga Redux’ni ulash: `Provider`

`src/main.jsx`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

`Provider` — store’ni butun app’ga “tarqatadi”. Endi istalgan component `useSelector` va `useDispatch` ishlata oladi.

---

# 5) `createSlice`: state + reducers + actions (bitta joyda)

`src/features/counter/counterSlice.js`:

```js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
    reset(state) {
      state.value = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer;
```

### Muhim tushuncha: “nega state’ni mutate qilyapmiz?”

Bu kodda `state.value += 1` “mutatsiya”ga o‘xshaydi. Lekin RTK ichida **Immer** ishlaydi.

- Siz “mutate” qilib yozasiz
- Immer ichkarida immutable update qilib beradi

Bu beginnerlar uchun juda qulay.

---

# 6) UI bilan ulash: `useSelector` va `useDispatch`

`src/App.jsx`:

```jsx
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';

export default function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);

  const [amount, setAmount] = useState('');

  return (
    <div style={{ padding: 20 }}>
      <h1>Redux Toolkit Counter</h1>

      <p>Value: {value}</p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <button
          onClick={() => {
            const n = Number(amount);
            if (Number.isNaN(n)) return;
            dispatch(incrementByAmount(n));
            setAmount('');
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
```

### Qoidani yodda tuting

- `useSelector` — store’dan data o‘qish
- `useDispatch` — action yuborish
- `dispatch(increment())` — action ishlatish

---

# 7) Real-life pattern: “feature slice” (Todos misoli)

Counter juda sodda. Endi real app’ga yaqin misol: `todos`.

## 7.1. `todosSlice` (sync)

`src/features/todos/todosSlice.js`:

```js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        };
      },
    },
    todoToggled(state, action) {
      const id = action.payload;
      const todo = state.items.find((t) => t.id === id);
      if (todo) todo.completed = !todo.completed;
    },
    todoRemoved(state, action) {
      const id = action.payload;
      state.items = state.items.filter((t) => t.id !== id);
    },
  },
});

export const { todoAdded, todoToggled, todoRemoved } = todosSlice.actions;
export default todosSlice.reducer;
```

> `prepare()` — action payload’ni “oldindan tayyorlab berish” uchun ishlatiladi (id generatsiya, default qiymatlar).

## 7.2. Store’ga ulash

`src/app/store.js` ichida `todos` ni qo‘shasiz:

```js
import todosReducer from '../features/todos/todosSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});
```

## 7.3. UI’da ishlatish (soddalashtirilgan)

`useSelector((s) => s.todos.items)` orqali listni olasiz.

---

# 8) Async ishlash: `createAsyncThunk`

Real loyihada ko‘pincha API’dan data olamiz. Redux Toolkit’da async uchun eng ko‘p ishlatiladigani:

- `createAsyncThunk`
- `extraReducers` orqali `pending/fulfilled/rejected` state

Biz test API sifatida JSONPlaceholder’dan foydalanamiz:

- `https://jsonplaceholder.typicode.com/todos?_limit=5`

## 8.1. Thunk yozish

`src/features/todos/todosThunks.js`:

```js
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, thunkApi) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
      if (!res.ok) throw new Error('Request failed');
      const data = await res.json();

      return data.map((t) => ({
        id: String(t.id),
        title: t.title,
        completed: t.completed,
      }));
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
```

## 8.2. Slice’da `extraReducers` bilan state boshqarish

`todosSlice.js` ni kengaytiramiz:

```js
import { fetchTodos } from './todosThunks';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // ... todoAdded, todoToggled, todoRemoved
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? action.error.message;
      });
  },
});
```

## 8.3. UI’da fetch qilish

Component’da `useEffect` ichida `dispatch(fetchTodos())` qilinadi.

```jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './features/todos/todosThunks';

export function TodosPage() {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.todos.items);
  const status = useSelector((s) => s.todos.status);
  const error = useSelector((s) => s.todos.error);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchTodos());
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading todos...</div>;
  if (status === 'failed') return <div style={{ color: 'crimson' }}>Error: {error}</div>;

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {items.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

# 9) Best practices (studentlar uchun juda muhim)

## 9.1. “Feature-based” struktura

Tavsiya etilgan structure:

```text
src/
  app/
    store.js
  features/
    todos/
      todosSlice.js
      todosThunks.js
      TodosPage.jsx
    auth/
      authSlice.js
      LoginPage.jsx
  components/
    Navbar.jsx
```

## 9.2. State’ni qachon Redux’ga qo‘yish kerak?

Redux global state uchun.

- kerak: `auth user`, `cart`, `todos`, `products`, `theme` (agar ko‘p joyda ishlatilsa)
- kerak emas: faqat bitta component ichida ishlaydigan input qiymati

## 9.3. Selector’larni ajratish (toza kod)

`todosSlice.js` oxirida selector export qilish odat:

```js
export const selectTodos = (state) => state.todos.items;
export const selectTodosStatus = (state) => state.todos.status;
export const selectTodosError = (state) => state.todos.error;
```

UI’da:

```js
const items = useSelector(selectTodos);
```

## 9.4. Async pattern: 3 ta state

Har async call’da minimum:

- `status`: `idle | loading | succeeded | failed`
- `error`: `null | string`

Bu pattern real loyihalarda standard.

---

# 10) Mini loyiha (kurs uchun ideal)

## Loyiha nomi: “Todo Manager + API”

### Talablar (scope)

1) Todo list ko‘rsatish
2) Todo qo‘shish
3) Todo toggle (done/undone)
4) Todo delete
5) API’dan initial todos fetch (`createAsyncThunk`)
6) UI’da loading/error ko‘rsatish

### Tavsiya: UI komponentlar

- `TodoForm`
- `TodoList`
- `TodoItem`

Redux’da:

- `todosSlice` (items, status, error)
- `fetchTodos` thunk

---

# 11) Uy vazifalar (Part-by-part)

## Uy vazifa 1 (fundamentals)

1) `counterSlice` yarating
2) `increment`, `decrement`, `reset`, `incrementByAmount` bo‘lsin
3) UI’da `input`dan qiymat olib `incrementByAmount` qiling

Topshirish:

- screenshot yoki github link

## Uy vazifa 2 (todos sync)

1) `todosSlice` yarating
2) `todoAdded` (prepare bilan id), `todoToggled`, `todoRemoved`
3) UI’da todo qo‘shish form qiling
4) listni chiqaring

## Uy vazifa 3 (async)

1) `fetchTodos` thunk yozing (JSONPlaceholder)
2) `status/error` state qo‘shing
3) `pending/fulfilled/rejected` ni `extraReducers` bilan boshqaring
4) UI’da:
   - loading bo‘lsa “Loading...”
   - error bo‘lsa “Error: ...”

## Uy vazifa 4 (best practices)

1) `selectors`larni slice’dan export qiling
2) Component ichida `state.todos.items` o‘rniga selector ishlating
3) Loyiha strukturasini `features/` formatiga keltiring

---

# 12) Yakuniy checklist (student o‘zini tekshirishi uchun)

- `Provider` bor
- `store.js` bor va `configureStore` ishlatilgan
- Kamida 1 ta `slice` bor (`createSlice`)
- UI `useSelector` bilan state o‘qiydi
- UI `useDispatch` bilan action yuboradi
- Async uchun `createAsyncThunk` ishlatilgan
- `pending/fulfilled/rejected` holatlar bor
- `loading/error` UI’da ko‘rsatiladi

