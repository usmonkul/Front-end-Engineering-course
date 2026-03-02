# Ma'lumot olish (Data Fetching)

> **Data fetching** — serverdan (API) ma'lumot olish va UI da ko‘rsatish. React da buni `fetch`, `axios` yoki React Query (TanStack Query) bilan amalga oshirasiz. Yuklanish, xato holatlari va keshlashni to‘g‘ri boshqarish muhim.

---

## fetch va axios

### fetch — brauzer API

`fetch` — brauzerda o‘rnatilgan, qo‘shimcha kutubxona kerak emas. Promise qaytaradi:

```jsx
fetch('https://api.example.com/users')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**Muhim:** `fetch` 404, 500 kabi HTTP xatolarda `catch` ga tushmaydi. `response.ok` ni tekshirish kerak:

```jsx
fetch('https://api.example.com/users')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP xato: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**POST so‘rov:**

```jsx
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'Aziz', email: 'aziz@example.com' }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### axios — qulay HTTP klient

Axios — tashqi kutubxona. O‘rnatish: `npm install axios`

```jsx
import axios from 'axios';

// GET
axios.get('https://api.example.com/users')
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));

// POST
axios.post('https://api.example.com/users', {
  name: 'Aziz',
  email: 'aziz@example.com',
})
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

**fetch va axios farqi:**

| | fetch | axios |
|---|-------|-------|
| O‘rnatish | Kerak emas | `npm install axios` |
| JSON | `response.json()` chaqirish kerak | `response.data` tayyor |
| HTTP xato | `response.ok` tekshirish kerak | 4xx, 5xx da avtomatik reject |
| So‘rov bekor qilish | AbortController | CancelToken / AbortController |
| Base URL, interceptor | Qo‘lda | O‘rnatilgan |

---

## Loading va error holatlari

API chaqiruvda uchta asosiy holat bor: **loading**, **success**, **error**. Hammasini boshqarish kerak.

### Oddiy yondashuv

```jsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch('https://api.example.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Ma\'lumot olishda xato');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xato: {error}</p>;
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
```

### Qayta urinish (retry)

Xato bo‘lsa qayta urinish:

```jsx
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.statusText);
      return await res.json();
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
    }
  }
}
```

### Loading skeleton

Foydalanuvchi uchun yaxshiroq — skeleton yoki spinner:

```jsx
if (loading) {
  return (
    <div className="skeleton-list">
      {[1, 2, 3].map((i) => (
        <div key={i} className="skeleton-item" />
      ))}
    </div>
  );
}
```

---

## React Query (TanStack Query)

**TanStack Query** (eski nomi React Query) — server ma'lumotini boshqarish uchun kutubxona. Keshlash, avtomatik refetch, loading va error holatlarini o‘zi boshqaradi.

O‘rnatish: `npm install @tanstack/react-query`

### QueryClient va Provider

```jsx
// main.jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

### useQuery — ma'lumot olish

```jsx
import { useQuery } from '@tanstack/react-query';

function UserList() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: () =>
      fetch('https://api.example.com/users').then((res) => {
        if (!res.ok) throw new Error('Xato');
        return res.json();
      }),
  });

  if (isLoading) return <p>Yuklanmoqda...</p>;
  if (isError) return <p>Xato: {error.message}</p>;

  return (
    <ul>
      {data.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
```

**queryKey** — keshlash kaliti. Bir xil key — bir xil ma'lumot. **queryFn** — ma'lumot olish funksiyasi, Promise qaytarishi kerak.

### Parametrli so‘rov

```jsx
function UserDetail({ userId }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['user', userId],
    queryFn: () =>
      fetch(`https://api.example.com/users/${userId}`).then((res) => res.json()),
    enabled: !!userId,
  });

  if (isLoading) return <p>Yuklanmoqda...</p>;
  if (isError) return <p>Xato</p>;
  return <div>{data.name}</div>;
}
```

`enabled: !!userId` — `userId` bo‘lganda gina so‘rov yuboriladi.

### Keshlash va refetch

React Query avtomatik keshlaydi. Bir xil `queryKey` bo‘lgan so‘rov qayta chaqirilsa, avval keshlangan ma'lumot ko‘rsatiladi, keyin background da refetch qilinadi.

**Sozlamalar:**

```jsx
useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
  staleTime: 5 * 60 * 1000,      // 5 daqiqa "yangilangan" hisoblanadi
  gcTime: 10 * 60 * 1000,        // 10 daqiqadan keyin keshladan o‘chiriladi (v4 da cacheTime)
  refetchOnWindowFocus: true,   // Oyna fokus olganda refetch
  retry: 3,                     // Xato bo‘lsa 3 marta qayta urinish
});
```

`staleTime` — ma'lumot qancha vaqt "yangilangan" hisoblanadi. Shu vaqt ichida avtomatik refetch bo‘lmaydi.

### useMutation — o‘zgartirish (POST, PUT, DELETE)

Ma'lumot yuborish, o‘chirish, yangilash uchun `useMutation`:

```jsx
import { useMutation, useQueryClient } from '@tanstack/react-query';

function AddUserForm() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newUser) =>
      fetch('https://api.example.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ name: 'Aziz', email: 'aziz@example.com' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Yuborilmoqda...' : 'Qo‘shish'}
      </button>
      {mutation.isError && <p>Xato: {mutation.error.message}</p>}
    </form>
  );
}
```

`invalidateQueries` — users ro‘yxati eskirgan deb belgilanadi, avtomatik refetch bo‘ladi.

### Mutation — optimistic update

Foydalanuvchi tezroq javob ko‘rishi uchun, server javobini kutmasdan UI ni yangilash:

```jsx
const mutation = useMutation({
  mutationFn: (newData) =>
    fetch(`/api/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData),
    }).then((res) => res.json()),
  onMutate: async (newData) => {
    await queryClient.cancelQueries({ queryKey: ['user', userId] });
    const oldData = queryClient.getQueryData(['user', userId]);
    queryClient.setQueryData(['user', userId], { ...oldData, ...newData });
    return { oldData };
  },
  onError: (err, newData, context) => {
    queryClient.setQueryData(['user', userId], context.oldData);
  },
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ['user', userId] });
  },
});
```

---

## API xatolarini boshqarish

### fetch da xato boshqaruvi

```jsx
async function fetchUsers() {
  const res = await fetch('https://api.example.com/users');

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP ${res.status}`);
  }

  return res.json();
}
```

### Axios da xato boshqaruvi

Axios 4xx, 5xx da avtomatik `catch` ga tushadi:

```jsx
axios.get('/api/users').catch((error) => {
  if (error.response) {
    // Server javob berdi (4xx, 5xx)
    console.log(error.response.status);
    console.log(error.response.data);
  } else if (error.request) {
    // So‘rov yuborildi, javob yo‘q (tarmoq xatosi)
    console.log('Tarmoq xatosi');
  } else {
    console.log(error.message);
  }
});
```

### Global xato ko‘rsatish

Xato bo‘lsa foydalanuvchiga xabar:

```jsx
function UserList() {
  const [error, setError] = useState(null);

  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    retry: 2,
    onError: (err) => setError(err.message),
  });

  return (
    <div>
      {error && (
        <div className="alert alert-error">
          {error}
          <button onClick={() => setError(null)}>Yopish</button>
        </div>
      )}
      {/* ... */}
    </div>
  );
}
```

### Xato turlari

| Xato | Sabab | Yechim |
|------|-------|--------|
| 400 | Noto‘g‘ri so‘rov | So‘rov parametrlarini tekshirish |
| 401 | Autentifikatsiya yo‘q | Login sahifasiga yo‘naltirish |
| 403 | Ruxsat yo‘q | "Ruxsat yo‘q" xabari |
| 404 | Topilmadi | 404 sahifa yoki xabar |
| 500 | Server xatosi | "Server xatosi, keyinroq urinib ko‘ring" |
| Tarmoq xatosi | Internet yo‘q | "Internet ulanishini tekshiring" |

---

## Amaliy misol — to‘liq CRUD

```jsx
// api.js
const API_URL = 'https://api.example.com';

export async function getUsers() {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) throw new Error('Ma\'lumot olishda xato');
  return res.json();
}

export async function createUser(user) {
  const res = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error('Qo‘shishda xato');
  return res.json();
}

// UserList.jsx
import { useQuery } from '@tanstack/react-query';
import { getUsers } from './api';

function UserList() {
  const { data: users, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  if (isLoading) return <div className="skeleton" />;
  if (isError) return <div className="error">Xato: {error.message}</div>;

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

// AddUserForm.jsx
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser } from './api';

function AddUserForm() {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({ name: '', email: '' });

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      setFormData({ name: '', email: '' });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Ism"
      />
      <input
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email"
      />
      <button type="submit" disabled={mutation.isPending}>
        Qo‘shish
      </button>
      {mutation.isError && <p>{mutation.error.message}</p>}
    </form>
  );
}
```

---

## Xulosa

- **fetch** — brauzer API, `response.ok` tekshirish kerak. **axios** — qulayroq, xatolarni avtomatik qaytaradi.
- **Loading va error** — har bir so‘rovda uchta holat: loading, success, error. Skeleton yoki spinner ishlatish.
- **React Query** — `useQuery` (o‘qish), `useMutation` (o‘zgartirish), avtomatik keshlash, refetch, `invalidateQueries`.
- **API xatolari** — status kod, xabar, foydalanuvchiga tushunarli xabar. 401, 404, 500 uchun alohida qarshilash.
