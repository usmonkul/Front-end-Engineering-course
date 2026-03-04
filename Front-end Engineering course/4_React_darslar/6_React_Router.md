# React Router DOM v6

> **React Router** — React da sahifalar o‘rtasida navigatsiya (routing) uchun kutubxona. SPA (Single Page Application) da URL o‘zgarganda sahifa yangilanmaydi — faqat React komponentlari almashtiriladi. React Router DOM v6 — eng so‘nggi versiya, soddaroq API bilan.

---

## O‘rnatish va asosiy sozlash

O‘rnatish: `npm install react-router-dom`

```jsx
// main.jsx
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

`BrowserRouter` — brauzer History API dan foydalanadi. URL `https://example.com/about` ko‘rinishida bo‘ladi (hash `#` siz).

---

## SPA routing — BrowserRouter, Routes, Route

### Routes va Route

v6 da `Switch` o‘rniga `Routes` ishlatiladi. `Route` — URL va komponent o‘rtasidagi bog‘lanish:

```jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
```

| URL | Ko‘rsatiladigan komponent |
|-----|---------------------------|
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |

`path` — URL yo‘li. `element` — shu yo‘lda ko‘rsatiladigan komponent.

### Index route

`index` — ota yo‘l bilan bir xil vaqtda ko‘rsatiladi (asosan layout ichida):

```jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
  </Route>
</Routes>
```

`/` — Layout + Home. `/about` — Layout + About.

---

## Navigatsiya — Link, NavLink, useNavigate

### Link

Sahifalar o‘rtasida havola. Oddiy `<a>` dan farqi — sahifa to‘liq yangilanmaydi, faqat React komponenti almashtiriladi:

```jsx
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Bosh sahifa</Link>
      <Link to="/about">Biz haqimizda</Link>
      <Link to="/contact">Aloqa</Link>
    </nav>
  );
}
```

`to` — yo‘l. `to="/about"` — mutlaq yo‘l. `to="about"` — nisbiy yo‘l (joriy yo‘lga qo‘shiladi).

### NavLink — faol havola

Joriy sahifa havolasi uchun `NavLink`. `className` yoki `style` ga funksiya berib, faol holatni boshqarish mumkin:

```jsx
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
        Bosh sahifa
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
      >
        Biz haqimizda
      </NavLink>
    </nav>
  );
}
```

`isActive` — joriy havola shu yo‘lga to‘g‘ri kelsa `true`.

**Ending tekshirish:** `/products` va `/products/123` da ikkalasi ham faol bo‘lmasin deysiz — `end` ishlating:

```jsx
<NavLink to="/products" end>Mahsulotlar</NavLink>
```

### useNavigate — dasturiy navigatsiya

Tugma bosilganda, form yuborilganda yoki boshqa hodisada sahifaga o‘tish:

```jsx
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login mantiqi...
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... */}
      <button type="submit">Kirish</button>
    </form>
  );
}
```

**Orqaga:** `navigate(-1)` — brauzer orqaga.

**Oldinga:** `navigate(1)` — brauzer oldinga.

**Replace:** `navigate('/login', { replace: true })` — tarixda joriy sahifa qolmaydi, "Orqaga" bosganda login sahifasiga qaytmaydi.

---

## Dynamic routes — params va useParams

URL da o‘zgaruvchan qism (masalan, mahsulot ID) bo‘lishi mumkin. Buning uchun `:paramName` ishlatiladi:

```jsx
<Routes>
  <Route path="/products" element={<ProductList />} />
  <Route path="/products/:id" element={<ProductDetail />} />
  <Route path="/users/:userId/posts/:postId" element={<PostDetail />} />
</Routes>
```

### useParams

Parametr qiymatini olish uchun `useParams`:

```jsx
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  return <div>Mahsulot ID: {id}</div>;
}
```

`/products/42` — `id` = `"42"`. Raqam kerak bo‘lsa: `Number(id)` yoki `parseInt(id, 10)`.

### Bir nechta parametr

```jsx
function PostDetail() {
  const { userId, postId } = useParams();
  return (
    <div>
      Foydalanuvchi: {userId}, Post: {postId}
    </div>
  );
}
```

---

## Nested routes va layout

Nested routes — ichki yo‘llar. Layout (sarlavha, menyu, footer) bir xil, ichki mazmun o‘zgaradi.

### Outlet

Layout komponentida `Outlet` — bola route lar uchun joy. Shunda bola route shu joyda render qilinadi:

```jsx
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header>
        <nav>{/* Link lar */}</nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>© 2024</footer>
    </div>
  );
}
```

### Nested route sozlash

```jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="products" element={<ProductLayout />}>
      <Route index element={<ProductList />} />
      <Route path=":id" element={<ProductDetail />} />
    </Route>
  </Route>
</Routes>
```

URL lar: `/`, `/about`, `/products`, `/products/42`. `ProductLayout` ichida ham `Outlet` bo‘lishi kerak.

### Nested path — to‘liq yo‘l

Ichki route `path` nisbiy — otasiga qo‘shiladi. `/products` + `:id` = `/products/:id`.

---

## Protected routes — auth flow

Ba‘zi sahifalar faqat tizimga kirmagan foydalanuvchiga ochiq bo‘lmasin. Buning uchun **Protected Route** komponenti yoziladi.

### ProtectedRoute komponenti

```jsx
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children, isAuthenticated }) {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
```

`state={{ from: location }}` — login sahifasiga qayerdan kelganini yuboradi. Login muvaffaqiyatli bo‘lsa, shu sahifaga qaytarish mumkin.

### Ishlatish

```jsx
function App() {
  const [user, setUser] = useState(null);
  const isAuthenticated = !!user;

  return (
    <Routes>
      <Route path="/login" element={<LoginPage onLogin={setUser} />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Settings />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
```

### Login dan qaytish

Login sahifasida `useLocation` dan `from` ni olish va muvaffaqiyatli login dan keyin shu yo‘lga yo‘naltirish:

```jsx
function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = () => {
    onLogin({ name: 'Foydalanuvchi' });
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h1>Kirish</h1>
      <button onClick={handleLogin}>Kirish</button>
    </div>
  );
}
```

### Public route — faqat kirilmaganlarga

Masalan, login sahifasi — allaqachon kirmagan bo‘lsa, dashboard ga yo‘naltirish:

```jsx
function PublicRoute({ children, isAuthenticated }) {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
}

// Ishlatish
<Route
  path="/login"
  element={
    <PublicRoute isAuthenticated={isAuthenticated}>
      <LoginPage />
    </PublicRoute>
  }
/>
```

---

## 404 va xato boshqaruvi

### 404 — topilmadi

Barcha route lardan keyin `path="*"` — boshqa hech qanday yo‘lga to‘g‘ri kelmagan so‘rovlar uchun:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

```jsx
function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404 — Sahifa topilmadi</h1>
      <p>Uzr, so‘ralgan sahifa mavjud emas.</p>
      <button onClick={() => navigate('/')}>Bosh sahifaga</button>
    </div>
  );
}
```

### useRouteError — Error Boundary

React Router v6.4+ da `createBrowserRouter` va `RouterProvider` ishlatilsa, xato boshqaruvi o‘rnatiladi. Oddiy `BrowserRouter` da esa React `Error Boundary` qo‘lda qo‘yiladi.

**createBrowserRouter bilan:**

```jsx
import { createBrowserRouter, RouterProvider, useRouteError } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
]);

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h1>Xato yuz berdi</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
```

---

## useSearchParams — query parametrlar

URL da `?q=react&page=2` kabi query parametrlar bo‘lsa:

```jsx
import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q');
  const page = searchParams.get('page') || '1';

  const updateQuery = (newQuery) => {
    setSearchParams({ q: newQuery, page: '1' });
  };

  return (
    <div>
      <p>Qidiruv: {query}</p>
      <p>Sahifa: {page}</p>
    </div>
  );
}
```

`/search?q=react&page=2` — `query` = `"react"`, `page` = `"2"`.

---

## Amaliy misol — to‘liq routing

```jsx
// App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute isAuthenticated={!!user}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="/login" element={<Login onLogin={setUser} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// Layout.jsx
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Bosh sahifa</Link>
        <Link to="/about">Biz haqimizda</Link>
        <Link to="/products">Mahsulotlar</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

// ProductDetail.jsx
import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>Mahsulot #{id}</h1>
      <Link to="/products">Orqaga</Link>
    </div>
  );
}
```

---

## Xulosa

- **BrowserRouter** — asosiy router. **Routes**, **Route** — yo‘l va komponent bog‘lashi.
- **Link** — havola. **NavLink** — faol havola (`isActive`). **useNavigate** — dasturiy o‘tish.
- **Dynamic route** — `path="/products/:id"`. **useParams** — parametr qiymati.
- **Nested routes** — **Outlet** layout da bola route uchun joy.
- **Protected route** — auth tekshirish, `Navigate` bilan login ga yo‘naltirish.
- **404** — `path="*"`. **useSearchParams** — query parametrlar.
