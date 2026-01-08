# Supabase darslari
<details>
   <summary>Part 1 — Supabase Project yaratish va Table (jadval) yaratish</summary>
---

# Part 1 — Supabase Project yaratish va Table (jadval) yaratish

Ushbu bo‘limda biz Supabase’da:

- yangi project ochamiz
- database uchun jadval yaratamiz
- test ma’lumot (row) qo‘shib tekshiramiz
- keyingi darslar uchun kerak bo‘ladigan eng muhim security tushunchalarini ko‘rib chiqamiz (RLS, Policy)

> Eslatma: Supabase — bu Postgres asosidagi Backend platforma. Biz React’da ishlatamiz, lekin hozircha faqat Supabase dashboard’ida tayyorlab olamiz.

## 1) Supabase account va yangi Project yaratish

1) Supabase saytiga kiring:

- https://supabase.com/

2) Account yarating yoki login qiling.

3) Dashboard’da:

- **New project** tugmasini bosing

4) Project sozlamalari:

- **Name**: masalan `react-supabase-course`
- **Database Password**: kuchli parol kiriting va xavfsiz joyda saqlang
- **Region**: sizga yaqin region tanlang (latency kam bo‘ladi)
- **Pricing plan**: Free plan yetarli

5) **Create new project** tugmasini bosing.

Project tayyor bo‘lishi 1-2 daqiqa vaqt olishi mumkin.

## 2) Project ichida “Table” (jadval) yaratish

Biz dars davomida ko‘p ishlatadigan oddiy misol sifatida `todos` jadvalini yaratamiz.

### Variant A: Table Editor orqali (eng oson)

1) Chap menyudan:

- **Table Editor** (yoki ba’zan “Database” → “Tables”) ga o‘ting

2) **New table** tugmasini bosing.

3) Table nomi:

- **Name**: `todos`

4) Ustunlar (columns) ni quyidagicha kiriting:

- `id`
  - Type: `uuid`
  - Default: `gen_random_uuid()`
  - Primary key: ON
- `title`
  - Type: `text`
  - Nullable: OFF (ixtiyoriy)
- `is_completed`
  - Type: `bool`
  - Default: `false`
- `created_at`
  - Type: `timestamptz`
  - Default: `now()`

> `created_at` va `id` default’lari keyinchalik front-end’da ishni ancha oson qiladi.

5) **Save** / **Create table** ni bosing.

### Variant B: SQL Editor orqali (pro’roq, lekin foydali)

1) Chap menyudan **SQL Editor** ga o‘ting.
2) Quyidagi SQL’ni run qiling:

```sql
create table if not exists public.todos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  is_completed boolean not null default false,
  created_at timestamptz not null default now()
);
```

## 3) Test data (row) qo‘shib tekshirish

1) **Table Editor** → `todos` jadvalini oching.
2) **Insert row** tugmasini bosing.
3) `title` ga masalan:

- `"React o‘rganish"`

4) `is_completed` ni hozircha `false` qoldiring.
5) Save.

Endi siz jadvalda yangi row ko‘rinishini ko‘rasiz.

## 4) Eng muhim security: API keys, RLS va Policies (fundamental)

React bilan ulanishdan oldin buni tushunib olish juda muhim.

### 4.1. Supabase keys qayerda?

Project’da:

- **Project Settings** → **API**

Bu yerda odatda 2 ta asosiy narsa bo‘ladi:

- **Project URL** (masalan `https://xxxx.supabase.co`)
- **anon public key** (front-end’da ishlatiladi)

> Front-end’da (React’da) faqat `anon public key` ishlatiladi. **Service role key** ni front-end’ga qo‘ymang.

### 4.2. RLS (Row Level Security) nima?

RLS — jadvaldagi qaysi qatorlarni kim o‘qishi/yozishini nazorat qiladi.

- RLS yoqilgan bo‘lsa, policy yozilmaguncha ko‘p query’lar bloklanadi.
- Bu xavfsizlik uchun yaxshi.

### 4.3. Hozircha (darsning 1-qismi uchun) nimani tanlaymiz?

Bu kursda keyin authentication ham bo‘ladi. Shuning uchun tavsiya:

- Jadval yaratgandan keyin **RLS**ni yoqib qo‘yish.

> Lekin hozircha React bilan ulanish qilmayapmiz. Keyingi part’da (Connecting database to front-end) policy’larni minimal ko‘rinishda yozamiz.

RLS’ni yoqish yo‘li (dashboard’da):

1) **Table Editor** → `todos` → (o‘ng tomonda) **RLS** / **Enable RLS**
2) Enable.

## 5) Tekshiruv checklist (Part 1 yakuni)

- Project yaratildi
- `todos` table yaratildi
- Kamida 1 ta test row qo‘shildi
- `Project URL` va `anon public key` topildi
- (ixtiyoriy, tavsiya) `todos` jadvali uchun RLS enable qilindi

Keyingi part’da React’dan Supabase’ga ulanishni qilamiz.

---

# Part 2 — Vite + React’ga Supabase’ni ulash

Bu bo‘limda biz:

- `@supabase/supabase-js` o‘rnatamiz
- Vite `.env` variable’larini to‘g‘ri sozlaymiz
- `supabase` client yaratamiz
- `todos` jadvaliga ulanish tekshiruvini qilamiz

## 1) React (Vite) loyiha tayyor bo‘lishi kerak

Agar loyihangiz yo‘q bo‘lsa, Vite bilan yaratish (eslatma):

```bash
npm create vite@latest
```

Keyin:

```bash
npm install
npm run dev
```

> Agar sizda loyiha allaqachon bo‘lsa — shu qadamlarni o‘tkazib yuboring.

## 2) Supabase package o‘rnatish

Vite loyihangizda:

```bash
npm install @supabase/supabase-js
```

## 3) `.env` sozlash (Vite qoidasi)

Vite’da env variable’lar **`VITE_`** bilan boshlanishi shart.

Project root’da `.env` fayl yarating:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_ANON_KEY
```

Bu qiymatlarni Supabase dashboard’dan oling:

- **Project Settings** → **API** → `Project URL`
- **Project Settings** → **API** → `anon public`

> `VITE_SUPABASE_ANON_KEY` public bo‘lishi mumkin, lekin baribir RLS/Policy bilan himoya qilinishi shart.

## 4) Supabase client yaratish

Vite React’da ko‘p ishlatiladigan struktura:

- `src/lib/supabaseClient.js`

```js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

## 5) Minimal tekshiruv (Console’da)

`App.jsx` ichida vaqtincha tekshiruv:

```js
import { useEffect } from 'react';
import { supabase } from './lib/supabaseClient';

export default function App() {
  useEffect(() => {
    async function test() {
      const { data, error } = await supabase.from('todos').select('*').limit(1);
      console.log({ data, error });
    }
    test();
  }, []);

  return <div>Supabase test</div>;
}
```

### Agar `error` chiqsa (ko‘p uchraydigan sabab)

- RLS yoqilgan, lekin policy yo‘q → `permission denied` bo‘lishi mumkin.

Keyingi bo‘limda (Part 3) biz o‘qish (select) uchun minimal policy yozamiz.

---

# Part 3 — Supabase’dan data fetch qilish (Query)

Bu bo‘limda biz `todos` ni React’da chiqaramiz:

- loading
- error
- success

## 1) Minimal RLS policy (development uchun)

> Diqqat: bu policy’lar **demo/learning** uchun. Auth qo‘shilganda policy’ni kuchaytiramiz.

1) Supabase dashboard → **Table Editor** → `todos`
2) RLS yoqilgan bo‘lsa, **Authentication** bo‘lmagan holatda ham o‘qish uchun policy kerak.
3) **Policies** bo‘limidan `todos` uchun `SELECT` policy yarating:

- Policy name: `Public read todos`
- Operation: `SELECT`
- Target roles: `anon`, `authenticated`
- Using expression:

```sql
true
```

Bu “hamma o‘qiy oladi” degani.

## 2) `useEffect` bilan `todos`ni olish

`src/App.jsx` misol:

```jsx
import { useEffect, useState } from 'react';
import { supabase } from './lib/supabaseClient';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTodos() {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('todos')
        .select('id,title,is_completed,created_at')
        .order('created_at', { ascending: false });

      if (error) {
        setError(error.message);
        setTodos([]);
      } else {
        setTodos(data ?? []);
      }

      setLoading(false);
    }

    fetchTodos();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: 'crimson' }}>Error: {error}</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Todos</h1>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.title} {t.is_completed ? '✅' : '⬜️'}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## 3) Filter misoli (ixtiyoriy)

Faqat tugallanmaganlarni olish:

```js
supabase.from('todos').select('*').eq('is_completed', false);
```

---

# Part 4 — Realtime database subscription

Bu bo‘limda `todos` jadvalida o‘zgarish bo‘lsa (insert/update/delete), UI avtomatik yangilanadi.

## 1) Realtime yoqilganligini tekshirish

Supabase’da Realtime odatda yoqilgan bo‘ladi. Agar ishlamasa:

- **Database** → **Replication** (yoki Realtime settings)
- `todos` table realtimeda kuzatilayotganini tekshiring

## 2) React’da subscription qo‘shish

Quyidagi misolda:

- avval `fetchTodos()` bilan initial data olamiz
- keyin `postgres_changes` bilan o‘zgarishlarni kuzatamiz
- component unmount bo‘lganda `unsubscribe` qilamiz

```jsx
useEffect(() => {
  let isMounted = true;

  async function fetchTodos() {
    const { data } = await supabase
      .from('todos')
      .select('id,title,is_completed,created_at')
      .order('created_at', { ascending: false });

    if (isMounted) setTodos(data ?? []);
  }

  fetchTodos();

  const channel = supabase
    .channel('todos-changes')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'todos' },
      () => {
        fetchTodos();
      }
    )
    .subscribe();

  return () => {
    isMounted = false;
    supabase.removeChannel(channel);
  };
}, []);
```

> Bu usul oddiy va ishonchli: har o‘zgarishda qayta fetch qiladi. Keyinroq optimallashtirish (local update)ni ham o‘rganamiz.

---

# Part 5 — React form orqali data insert qilish

Bu bo‘limda `todo` qo‘shish form qilamiz.

## 1) INSERT uchun minimal policy

RLS yoqilgan bo‘lsa, insert ham policy talab qiladi.

`todos` uchun `INSERT` policy yarating:

- Policy name: `Public insert todos`
- Operation: `INSERT`
- Target roles: `anon`, `authenticated`
- With check expression:

```sql
true
```

> Bu ham demo uchun. Auth qo‘shilganda “faqat login bo‘lgan user insert qilsin” qilib o‘zgartiramiz.

## 2) Form + insert example

```jsx
import { useState } from 'react';
import { supabase } from './lib/supabaseClient';

export function AddTodoForm({ onAdded }) {
  const [title, setTitle] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;

    setSaving(true);
    setError(null);

    const { error } = await supabase.from('todos').insert({ title: trimmed });

    if (error) {
      setError(error.message);
    } else {
      setTitle('');
      onAdded?.();
    }

    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New todo"
      />
      <button disabled={saving}>{saving ? 'Saving...' : 'Add'}</button>
      {error ? <span style={{ color: 'crimson' }}>{error}</span> : null}
    </form>
  );
}
```

`App.jsx` ichida ishlatish:

```jsx
<AddTodoForm onAdded={fetchTodos} />
```

> Agar siz Part 4 realtime qo‘shgan bo‘lsangiz, `onAdded` shart emas — realtime o‘zi fetch’ni trigger qiladi.

## 3) Yakuniy checklist (Part 2–5)

- Vite `.env` sozlandi (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`)
- `supabaseClient` yaratildi
- `SELECT` policy (demo) qo‘shildi va `todos` fetch qilindi
- Realtime subscription ishladi (dashboard’dan row qo‘shsangiz, UI yangilandi)
- `INSERT` policy (demo) qo‘shildi va form orqali todo qo‘shildi


</details>

<hr/>

<details>
   <summary>Part 6 — Supabase Authentication (Vite + React)</summary>
---

# Supabase Authentication (Vite + React)

Bu bo‘limda biz Supabase Auth’ni React’da to‘g‘ri yo‘lga qo‘yamiz:

- Router (public/protected route)
- Auth context (global state)
- Session listening (refresh + login/logout holatlarini ushlash)
- JWT nima va Supabase uni qanday ishlatadi
- Sign up / Sign in / Sign out

## 0) Supabase Dashboard sozlamalari (Auth)

Supabase project’da:

1) **Authentication** → **Providers**
2) **Email** provider yoqilganligini tekshiring.

Email confirmation haqida:

- Dars/test uchun confirmation’ni vaqtincha o‘chirib qo‘yish mumkin (qulayroq)
- Production’da yoqib qo‘yish tavsiya

## 1) Router va Auth Context setup

### 1.1. `react-router-dom` o‘rnatish

```bash
npm install react-router-dom
```

### 1.2. Minimal fayl strukturasi

- `src/lib/supabaseClient.js` (oldingi bo‘limdan)
- `src/context/AuthContext.jsx`
- `src/pages/LoginPage.jsx`
- `src/pages/SignupPage.jsx`
- `src/pages/DashboardPage.jsx`
- `src/components/ProtectedRoute.jsx`
- `src/App.jsx`
- `src/main.jsx`

### 1.3. AuthContext (session + user)

`src/context/AuthContext.jsx`:

```jsx
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function init() {
      const { data } = await supabase.auth.getSession();
      if (!mounted) return;

      setSession(data.session ?? null);
      setUser(data.session?.user ?? null);
      setLoading(false);
    }

    init();

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
        setUser(newSession?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      mounted = false;
      subscription?.subscription?.unsubscribe();
    };
  }, []);

  const value = useMemo(
    () => ({ session, user, loading }),
    [session, user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
```

> Bu context sizga butun app bo‘ylab `user` va `session` ni ishlatish imkonini beradi.

### 1.4. Router’ni ulash

`src/main.jsx`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
```

## 2) Protected Route (login bo‘lmasa o‘tkazmaslik)

`src/components/ProtectedRoute.jsx`:

```jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading session...</div>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
}
```

## 3) App routes

`src/App.jsx`:

```jsx
import { Route, Routes, Link } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { DashboardPage } from './pages/DashboardPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuth } from './context/AuthContext';
import { supabase } from './lib/supabaseClient';

export default function App() {
  const { user } = useAuth();

  async function handleLogout() {
    await supabase.auth.signOut();
  }

  return (
    <div style={{ padding: 20 }}>
      <nav style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        {!user ? <Link to="/login">Login</Link> : null}
        {!user ? <Link to="/signup">Signup</Link> : null}
        {user ? <button onClick={handleLogout}>Logout</button> : null}
      </nav>

      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
```

## 4) Session listening (nega kerak?)

Supabase Auth token’lar (access token) vaqt o‘tishi bilan yangilanadi.
Shuning uchun:

- app refresh bo‘lganda `getSession()` bilan sessionni tiklash
- login/logout bo‘lganda `onAuthStateChange` bilan UI’ni yangilash

Biz buni `AuthProvider` ichida qildik.

## 5) JWT’lar haqida (qisqa va tushunarli)

JWT — bu login bo‘lgandan keyin server beradigan token bo‘lib, u odatda 3 qismdan iborat:

- header
- payload
- signature

Supabase’da:

- `access_token` — API so‘rovlarida kim ekaningizni isbotlaydi
- `refresh_token` — access token tugaganda yangisini olishga yordam beradi

Frontend’da biz tokenni qo‘lda header’ga qo‘shmaymiz — `supabase-js` buni avtomatik boshqaradi.

## 6) Sign up / Sign in

### 6.1. Signup page

`src/pages/SignupPage.jsx`:

```jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate('/dashboard');
    }

    setLoading(false);
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, maxWidth: 320 }}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
        <button disabled={loading}>{loading ? 'Loading...' : 'Create account'}</button>
        {error ? <div style={{ color: 'crimson' }}>{error}</div> : null}
      </form>
    </div>
  );
}
```

### 6.2. Login page

`src/pages/LoginPage.jsx`:

```jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate('/dashboard');
    }

    setLoading(false);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, maxWidth: 320 }}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
        <button disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
        {error ? <div style={{ color: 'crimson' }}>{error}</div> : null}
      </form>
    </div>
  );
}
```

## 7) Dashboard page (user ko‘rsatish)

`src/pages/DashboardPage.jsx`:

```jsx
import { useAuth } from '../context/AuthContext';

export function DashboardPage() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Logged in as: {user?.email}</p>
    </div>
  );
}
```

</details>

<hr/>

<details>
   <summary>Part 8 — Auth + RLS (keyingi muhim qadam)</summary>

## 8) Auth + RLS (keyingi muhim qadam)

Hozir biz `todos` uchun demo policy’larda `true` ishlatgan edik (public read/insert).
Auth qo‘shilgandan keyin odatda quyidagiga o‘tiladi:

- faqat login bo‘lgan user o‘qisin
- faqat o‘zi yozgan row’larni ko‘rsin

Buning uchun `todos` jadvaliga `user_id uuid` column qo‘shiladi va policy’larda `auth.uid()` ishlatiladi.

> Agar xohlasangiz, keyingi darsda shuni ham to‘liq yozib beraman: schema update + policy update.


</details>

Have to know
1. SQL basics (Order by, Group by, Limit, aggregate sum());