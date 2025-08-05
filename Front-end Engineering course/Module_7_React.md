<details>
<summary>
React bilan tanishish
</summary>
# React Tutorial - 1-kun

## React bilan tanishish (1-2 kun)

### React nima va nima uchun ishlatiladi?

React - bu Facebook (hozirgi Meta) kompaniyasi tomonidan 2013-yilda yaratilgan JavaScript kutubxonasi. React foydalanuvchi interfeysi (UI) yaratish uchun ishlatiladi va hozirgi kunda eng mashhur frontend texnologiyalardan biri hisoblanadi.

#### React'ning asosiy maqsadi:
- **Dinamik web ilovalar** yaratish
- **Qayta ishlatiluvchi komponentlar** orqali kodning sifatini oshirish
- **Tez va samarali** foydalanuvchi interfeysi yaratish
- **Katta loyihalarni** boshqarishni osonlashtirish

#### React'ning asosiy xususiyatlari:

**1. Komponent asosida ishlash (Component-Based)**
```jsx
// Har bir UI qismi - alohida komponent
function Header() {
  return <h1>Sayt sarlavhasi</h1>;
}

function Sidebar() {
  return <div>Yon panel</div>;
}

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  );
}
```

**2. Deklarativ yondashuv**
- React'da siz nima qilishni xohlayotganingizni aytasiz (qanday qilishni emas)
- Oddiy HTML'ga o'xshash sintaksis (JSX)

**3. Virtual DOM**
- Real DOM'dan tezroq ishlaydi
- Avtomatik optimizatsiya
- Yaxshi performance

**4. Bir yo'nalishli ma'lumotlar oqimi**
- Ma'lumotlar yuqoridan pastga o'tadi
- Kodda xatolikni topish oson
- Debug qilish qulay

---

### React vs boshqa frameworklar

#### React vs Angular

| Xususiyat | React | Angular |
|-----------|-------|---------|
| **Tur** | Kutubxona (Library) | To'liq Framework |
| **O'rganish** | Osonroq | Qiyinroq |
| **Hajmi** | Kichikroq | Kattaroq |
| **Moslashuvchanlik** | Yuqori | Past |
| **TypeScript** | Ixtiyoriy | Majburiy |
| **Faollik** | Juda yuqori | Yuqori |

**React afzalliklari:**
- O'rganish osonroq
- Kichik loyihalardan boshlab katta loyihalargacha ishlatish mumkin
- Ko'p resurslr va kutubxonalar
- Ish o'rinlari ko'p

**Angular afzalliklari:**
- To'liq framework (hamma narsa o'rnatilgan)
- Katta korporativ loyihalar uchun yaxshi
- Qat'iy structure

#### React vs Vue

| Xususiyat | React | Vue |
|-----------|-------|-----|
| **O'rganish** | O'rtacha | Oson |
| **Performance** | Yuqori | Yuqori |
| **Hamjamiyat** | Juda katta | Katta |
| **Ish o'rinlari** | Ko'p | Kamroq |
| **Sintaksis** | JSX | Template |
| **Ekotizim** | Juda katta | Yaxshi |

**React afzalliklari:**
- Katta hamjamiyat va qo'llab-quvvatlash
- Ko'p kutubxonalar va resurslr
- Ish bozorida ko'p talab

**Vue afzalliklari:**
- O'rganish juda oson
- Yaxshi hujjatlar
- Oddiy sintaksis

#### Qachon React ishlatish kerak?

✅ **React tanlash kerak:**
- Katta loyihalar uchun
- Ko'p dasturchi jamoasi bilan ishlash
- Tez rivojlanish kerak
- Ko'p resurslarga ehtiyoj
- Ish topishda afzallik kerak

❌ **React tanlash shart emas:**
- Juda oddiy statik saytlar
- Bitta sahifali oddiy loyihalar
- Backend developer bo'lsangiz va frontend kam kerak

---

### Development muhitini sozlash

React bilan ishlash uchun kompyuteringizda bir qancha dasturlar o'rnatish kerak.

#### 1. Node.js o'rnatish

**Node.js nima?**
- JavaScript'ni brauzerdan tashqarida ishlatish imkonini beradi
- npm (Node Package Manager) bilan keladi
- React loyihalarini yaratish va boshqarish uchun kerak

**O'rnatish:**
1. [nodejs.org](https://nodejs.org) saytiga kiring
2. "LTS" versiyasini yuklab oling (masalan, 18.17.0)
3. O'rnatgandan so'ng tekshiring:

```bash
# Terminal/Command Prompt da yozing
node --version
# Javob: v18.17.0 (yoki boshqa versiya)

npm --version
# Javob: 9.6.7 (yoki boshqa versiya)
```

#### 2. Code Editor tanlash

**VS Code (tavsiya etiladi):**
- Bepul va kuchli
- Ko'p kengaytmalar (extensions)
- React uchun yaxshi qo'llab-quvvatlash

**Foydali VS Code kengaytmalari:**
- ES7+ React/Redux/React-Native snippets
- Prettier (kod formatlash)
- Auto Rename Tag
- Bracket Pair Colorizer
- GitLens

**Boshqa tanlovlar:**
- WebStorm (pullik, lekin juda kuchli)
- Sublime Text
- Atom

#### 3. Browser Developer Tools

**Chrome DevTools (tavsiya etiladi):**
- React Developer Tools kengaytmasini o'rnating
- Components ni ko'rish va debug qilish

#### 4. Git o'rnatish (ixtiyoriy)

Kodingizni saqlash va boshqarish uchun Git kerak bo'ladi.

---

### Create React App vs Vite

React loyihasi yaratish uchun 2 ta asosiy usul bor.

#### Create React App (CRA)

**Create React App nima?**
- Facebook tomonidan yaratilgan rasmiy tool
- React loyihasini tez yaratish uchun
- Barcha konfiguratsiya tayyor holatda

**Afzalliklari:**
✅ Juda oson o'rnatish va ishlatish
✅ Barcha konfiguratsiya avtomatik
✅ Rasmiy qo'llab-quvvatlash
✅ Katta hamjamiyat
✅ Yangi boshlovchilar uchun ideal

**Kamchiliklari:**
❌ Sekin ishga tushish (development)
❌ Katta bundle hajmi
❌ Konfiguratsiyani o'zgartirish qiyin
❌ Yangilanishlar sekin chiqadi

**Loyiha yaratish:**
```bash
# Terminal da yozing
npx create-react-app my-first-app
cd my-first-app
npm start

# Brauzeringizda http://localhost:3000 ochiladi
```

#### Vite

**Vite nima?**
- Zamonaviy build tool
- Vue'ning yaratuvchisi tomonidan yaratilgan
- Juda tez development server

**Afzalliklari:**
✅ Juda tez ishga tushish
✅ Hot Module Replacement (HMR)
✅ Kichik bundle hajmi
✅ Zamonaviy JavaScript xususiyatlari
✅ TypeScript'ni yaxshi qo'llab-quvvatlaydi

**Kamchiliklari:**
❌ Nisbatan yangi (kamroq resurslr)
❌ Ba'zi kutubxonalar bilan muammo bo'lishi mumkin
❌ Konfiguratsiya kerak bo'lishi mumkin

**Loyiha yaratish:**
```bash
# Terminal da yozing
npm create vite@latest my-vite-app -- --template react
cd my-vite-app
npm install
npm run dev

# Brauzeringizda http://localhost:5173 ochiladi
```

#### Qaysi birini tanlash kerak?

**Yangi boshlovchilar uchun:**
- **Create React App** tanlang
- Oson va barcha narsa tayyor
- Ko'p tutorial va resurslr

**Tajribali dasturchilar uchun:**
- **Vite** tanlang
- Tezroq development
- Zamonaviy xususiyatlar

#### Birinchi loyiha yaratamiz

Keling, birinchi React loyihamizni yarataylik:

```bash
# 1. Loyiha yaratish
npx create-react-app hello-react
cd hello-react

# 2. Loyihani ishga tushirish
npm start
```

**Nima bo'ladi:**
1. Brauzeringizda http://localhost:3000 ochiladi
2. React logotipi aylanayotganini ko'rasiz
3. Fayl o'zgartirsangiz, sahifa avtomatik yangilanadi

#### Loyiha tuzilishi

```
hello-react/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

**Muhim fayllar:**
- `src/index.js` - loyihaning boshlang'ich nuqtasi
- `src/App.js` - asosiy komponent
- `public/index.html` - HTML shablon
- `package.json` - loyiha ma'lumotlari va bog'liqliklar

---

## Amaliy mashq

1. **Node.js o'rnating** va versiyani tekshiring
2. **VS Code o'rnating** va React kengaytmalarini qo'shing
3. **Create React App** bilan yangi loyiha yarating
4. **Loyihani ishga tushiring** va brauzerda ko'ring
5. **App.js** faylini oching va matnni o'zgartiring
6. **Vite** bilan ham loyiha yaratib ko'ring va farqni his qiling



</details>

<hr>

<details>
<summary>
    JSX va Komponentlar
</summary>
# React Tutorial - 3-4 kun

## JSX va Komponentlar (Day 3-4: JSX and Components)

### JSX Fundamentals

JSX (JavaScript XML) - bu React'ning eng muhim xususiyatlaridan biri. JSX JavaScript ichida HTML'ga o'xshash kod yozish imkonini beradi.

#### JSX nima?

JSX - bu JavaScript'ning sintaksis kengaytmasi bo'lib, HTML'ga o'xshash elementlarni JavaScript kodida yozish imkonini beradi.

```jsx
// JSX yozish usuli
const element = <h1>Salom, React!</h1>;

// Oddiy JavaScript da yozish usuli (JSX'siz)
const element2 = React.createElement('h1', null, 'Salom, React!');
```

#### JSX afzalliklari:

✅ **O'qish oson** - HTML'ga o'xshaydi
✅ **Yozish tez** - kamroq kod
✅ **Xatolarni topish oson** - kompilyatsiya vaqtida
✅ **JavaScript imkoniyatlari** - to'liq JS kuchi

#### JSX qanday ishlaydi?

```jsx
// 1. JSX yozamiz
const name = "Ali";
const greeting = <h1>Salom, {name}!</h1>;

// 2. Babel uni JavaScript'ga tarjima qiladi
const greeting2 = React.createElement(
  'h1',
  null,
  'Salom, ',
  name,
  '!'
);
```

---

### JSX Syntax Rules

JSX'da yozishda bir qancha qoidalarga rioya qilish kerak.

#### 1. Bitta Parent Element

JSX da qaytariladigan elementlar bitta parent element ichida bo'lishi kerak:

```jsx
// ✅ To'g'ri - bitta parent div
function App() {
  return (
    <div>
      <h1>Sarlavha</h1>
      <p>Bu paragraf</p>
    </div>
  );
}

// ❌ Noto'g'ri - ikkita alohida element
function App() {
  return (
    <h1>Sarlavha</h1>
    <p>Bu paragraf</p>  // Xato!
  );
}
```

**React Fragment ishlatish:**
```jsx
// ✅ Fragment bilan - ortiqcha div kerak emas
function App() {
  return (
    <>
      <h1>Sarlavha</h1>
      <p>Bu paragraf</p>
    </>
  );
}

// ✅ Yoki React.Fragment
function App() {
  return (
    <React.Fragment>
      <h1>Sarlavha</h1>
      <p>Bu paragraf</p>
    </React.Fragment>
  );
}
```

#### 2. className va htmlFor

HTML'da `class` va `for` atributlari JSX'da boshqacha yoziladi:

```jsx
// ✅ To'g'ri - JSX da
function MyComponent() {
  return (
    <div className="container">
      <label htmlFor="username">Foydalanuvchi nomi:</label>
      <input id="username" type="text" />
    </div>
  );
}

// ❌ Noto'g'ri - HTML atributlari
function MyComponent() {
  return (
    <div class="container">  {/* Xato! */}
      <label for="username">Foydalanuvchi nomi:</label>  {/* Xato! */}
      <input id="username" type="text" />
    </div>
  );
}
```

#### 3. Self-closing Tags

Bo'sh elementlar self-closing bo'lishi kerak:

```jsx
// ✅ To'g'ri
function App() {
  return (
    <div>
      <img src="rasm.jpg" alt="Rasm" />
      <input type="text" />
      <br />
      <hr />
    </div>
  );
}

// ❌ Noto'g'ri
function App() {
  return (
    <div>
      <img src="rasm.jpg" alt="Rasm">  {/* Xato! */}
      <input type="text">  {/* Xato! */}
      <br>  {/* Xato! */}
    </div>
  );
}
```

#### 4. camelCase Attributes

CSS xususiyatlari va event handlerlar camelCase da yoziladi:

```jsx
// ✅ To'g'ri
function StyledComponent() {
  return (
    <div 
      style={{
        backgroundColor: 'blue',
        fontSize: '16px',
        marginTop: '10px'
      }}
      onClick={handleClick}
    >
      Matn
    </div>
  );
}

// ❌ Noto'g'ri
function StyledComponent() {
  return (
    <div 
      style={{
        'background-color': 'blue',  // Xato!
        'font-size': '16px'          // Xato!
      }}
      onclick={handleClick}          // Xato!
    >
      Matn
    </div>
  );
}
```

#### 5. Comments in JSX

JSX ichida izoh yozish:

```jsx
function App() {
  return (
    <div>
      {/* Bu JSX comment */}
      <h1>Sarlavha</h1>
      
      {/* 
        Ko'p qatorli
        comment ham
        yozish mumkin
      */}
      <p>Paragraf</p>
    </div>
  );
}
```

---

### JavaScript in JSX

JSX'ning eng kuchli tomoni - JavaScript'ni to'g'ridan-to'g'ri ishlatish imkoniyati.

#### 1. O'zgaruvchilarni ko'rsatish

JavaScript o'zgaruvchilarini `{}` ichida ishlatish:

```jsx
function Welcome() {
  const name = "Akmal";
  const age = 25;
  const city = "Toshkent";
  
  return (
    <div>
      <h1>Salom, {name}!</h1>
      <p>Siz {age} yoshdasiz</p>
      <p>Siz {city} shahrida yashaysiz</p>
      <p>10 yildan so'ng siz {age + 10} yosh bo'lasiz</p>
    </div>
  );
}
```

#### 2. JavaScript ifodalar

```jsx
function MathOperations() {
  const x = 10;
  const y = 5;
  
  return (
    <div>
      <p>{x} + {y} = {x + y}</p>
      <p>{x} * {y} = {x * y}</p>
      <p>Kattasi: {Math.max(x, y)}</p>
      <p>Hozirgi vaqt: {new Date().toLocaleString()}</p>
    </div>
  );
}
```

#### 3. Shartli ko'rsatish (Conditional Rendering)

```jsx
function UserStatus({ isLoggedIn, username }) {
  return (
    <div>
      {/* Ternary operator */}
      {isLoggedIn ? (
        <h2>Xush kelibsiz, {username}!</h2>
      ) : (
        <h2>Iltimos, tizimga kiring</h2>
      )}
      
      {/* && operatori */}
      {isLoggedIn && <button>Chiqish</button>}
      {!isLoggedIn && <button>Kirish</button>}
    </div>
  );
}

// Ishlatish
function App() {
  return (
    <div>
      <UserStatus isLoggedIn={true} username="Ali" />
      <UserStatus isLoggedIn={false} />
    </div>
  );
}
```

#### 4. Massivlarni ko'rsatish

```jsx
function StudentList() {
  const students = ['Ali', 'Vali', 'Guli', 'Nargiza'];
  
  return (
    <ul>
      {students.map((student, index) => (
        <li key={index}>{student}</li>
      ))}
    </ul>
  );
}

// Obyektlar massivi
function BookList() {
  const books = [
    { id: 1, title: "O'tkan kunlar", author: "Abdulla Qodiriy" },
    { id: 2, title: "Mehrobdan chayon", author: "Abdulla Qahhor" },
    { id: 3, title: "Dunyoning ishlari", author: "O'tkir Hoshimov" }
  ];
  
  return (
    <div>
      <h2>Kitoblar ro'yxati</h2>
      {books.map(book => (
        <div key={book.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
          <h3>{book.title}</h3>
          <p>Muallif: {book.author}</p>
        </div>
      ))}
    </div>
  );
}
```

#### 5. Event Handling

```jsx
function InteractiveButton() {
  const handleClick = () => {
    alert("Tugma bosildi!");
  };
  
  const handleMouseOver = () => {
    console.log("Sichqoncha tugma ustida");
  };
  
  return (
    <div>
      <button onClick={handleClick} onMouseOver={handleMouseOver}>
        Meni bos!
      </button>
      
      <button onClick={() => alert("Inline function")}>
        Inline function
      </button>
    </div>
  );
}
```

---

### Functional Components

Functional components - React'ning eng oddiy va zamonaviy usuli.

#### Oddiy Functional Component

```jsx
// 1. Function declaration
function Welcome() {
  return <h1>Salom, dunyo!</h1>;
}

// 2. Arrow function
const Welcome2 = () => {
  return <h1>Salom, dunyo!</h1>;
};

// 3. Bir qatorli return
const Welcome3 = () => <h1>Salom, dunyo!</h1>;

// 4. Implicit return with parentheses
const Welcome4 = () => (
  <div>
    <h1>Salom, dunyo!</h1>
    <p>Bu functional component</p>
  </div>
);
```

#### Ma'lumotlar bilan ishlash

```jsx
function UserProfile() {
  const user = {
    name: "Ali Valiyev",
    age: 28,
    email: "ali@example.com",
    hobbies: ["dasturlash", "kitob o'qish", "futbol"]
  };
  
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>Yosh: {user.age}</p>
      <p>Email: {user.email}</p>
      
      <h3>Sevimli mashg'ulotlar:</h3>
      <ul>
        {user.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
```

#### Ko'p komponentlarni birlashtirish

```jsx
function Header() {
  return (
    <header style={{ backgroundColor: 'navy', color: 'white', padding: '20px' }}>
      <h1>Mening Saytim</h1>
    </header>
  );
}

function Navigation() {
  const links = ['Bosh sahifa', 'Haqida', 'Xizmatlar', 'Aloqa'];
  
  return (
    <nav style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" style={{ textDecoration: 'none', color: 'blue' }}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Content() {
  return (
    <main style={{ padding: '20px' }}>
      <h2>Asosiy kontent</h2>
      <p>Bu saytning asosiy qismi.</p>
    </main>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '10px', textAlign: 'center' }}>
      <p>&copy; 2024 Mening Saytim. Barcha huquqlar himoyalangan.</p>
    </footer>
  );
}

// Asosiy App komponenti
function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
}
```

---

### Class Components (Legacy)

Class components - React'ning eski usuli, lekin hali ham ba'zi loyihalarda uchraydi.

#### Oddiy Class Component

```jsx
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Salom, dunyo!</h1>;
  }
}

// Export qilish
export default Welcome;
```

#### State bilan Class Component

```jsx
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: "Hisoblagich"
    };
  }
  
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  
  handleReset = () => {
    this.setState({ count: 0 });
  };
  
  render() {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>{this.state.message}</h2>
        <h3>Son: {this.state.count}</h3>
        
        <button onClick={this.handleIncrement} style={{ margin: '5px' }}>
          +1
        </button>
        <button onClick={this.handleDecrement} style={{ margin: '5px' }}>
          -1
        </button>
        <button onClick={this.handleReset} style={{ margin: '5px' }}>
          Reset
        </button>
      </div>
    );
  }
}
```

#### Murakkab Class Component

```jsx
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "Ali", age: 25, city: "Toshkent" },
        { id: 2, name: "Vali", age: 30, city: "Samarqand" },
        { id: 3, name: "Guli", age: 22, city: "Buxoro" }
      ],
      searchTerm: ""
    };
  }
  
  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  
  addUser = () => {
    const newUser = {
      id: this.state.users.length + 1,
      name: "Yangi foydalanuvchi",
      age: 20,
      city: "Toshkent"
    };
    
    this.setState({
      users: [...this.state.users, newUser]
    });
  };
  
  render() {
    const filteredUsers = this.state.users.filter(user =>
      user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
    
    return (
      <div style={{ padding: '20px' }}>
        <h2>Foydalanuvchilar ro'yxati</h2>
        
        <input
          type="text"
          placeholder="Qidirish..."
          value={this.state.searchTerm}
          onChange={this.handleSearch}
          style={{ padding: '10px', marginBottom: '10px', width: '200px' }}
        />
        
        <button onClick={this.addUser} style={{ marginLeft: '10px', padding: '10px' }}>
          Yangi foydalanuvchi qo'shish
        </button>
        
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredUsers.map(user => (
            <li key={user.id} style={{ 
              border: '1px solid #ccc', 
              padding: '10px', 
              margin: '5px 0',
              borderRadius: '5px'
            }}>
              <strong>{user.name}</strong> - {user.age} yosh, {user.city}
            </li>
          ))}
        </ul>
        
        <p>Jami: {filteredUsers.length} ta foydalanuvchi</p>
      </div>
    );
  }
}
```

#### Class vs Functional Components

| Xususiyat | Functional Components | Class Components |
|-----------|----------------------|------------------|
| **Sintaksis** | Oddiy va qisqa | Murakkab |
| **State** | useState hook bilan | this.state |
| **Lifecycle** | useEffect hook bilan | Lifecycle methods |
| **Performance** | Yaxshi | O'rtacha |
| **Zamonaviylik** | ✅ Tavsiya etiladi | ❌ Legacy |
| **Hooks** | ✅ Qo'llab-quvvatlaydi | ❌ Ishlatib bo'lmaydi |
| **Yozish** | Tezroq | Sekinroq |

#### Qachon qaysi birini ishlatish?

**Functional Components tanlang:**
- Yangi loyihalarda
- Oddiy logika
- React Hooks ishlatish kerak
- Zamonaviy yondashuv

**Class Components korishingiz mumkin:**
- Eski loyihalarda
- Legacy kod
- Ba'zi maxsus holatlar (Error Boundaries)

---

## Amaliy mashqlar

### Mashq 1: Oddiy komponent yarating
```jsx
function PersonCard() {
  const person = {
    name: "Sizning ismingiz",
    age: 25,
    profession: "Dasturchi"
  };
  
  return (
    <div>
      {/* Bu yerda person ma'lumotlarini ko'rsating */}
    </div>
  );
}
```

### Mashq 2: Ro'yxat komponenti
```jsx
function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 }
  ];
  
  return (
    <div>
      {/* Bu yerda products ro'yxatini ko'rsating */}
    </div>
  );
}
```

### Mashq 3: Shartli ko'rsatish
```jsx
function StatusMessage({ isOnline, username }) {
  return (
    <div>
      {/* isOnline ga qarab xabar ko'rsating */}
    </div>
  );
}
```



</details>

<hr>

<details>
<summary>
        Props va Komponent Asoslari 
</summary>
# React Tutorial - 5-7 kun

## Props va Komponent Asoslari (Day 5-7: Props and Component Basics)

### Props Fundamentals

Props (properties) - bu React komponentlariga ma'lumot uzatishning asosiy usuli. Props read-only (faqat o'qish uchun) bo'lib, ularni komponent ichida o'zgartirib bo'lmaydi.

#### Props nima?

Props - bu komponentga tashqaridan uzatiladigan ma'lumotlar. HTML atributlariga o'xshash tarzda ishlaydi.

```jsx
// Props'siz komponent
function SimpleGreeting() {
  return <h1>Salom!</h1>;
}

// Props bilan komponent
function Greeting(props) {
  return <h1>Salom, {props.name}!</h1>;
}

// Ishlatish
function App() {
  return (
    <div>
      <SimpleGreeting />
      <Greeting name="Ali" />
      <Greeting name="Vali" />
      <Greeting name="Guli" />
    </div>
  );
}
```

#### Props qanday ishlaydi?

```jsx
// 1. Komponent yaratamiz
function UserCard(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{props.name}</h2>
      <p>Yosh: {props.age}</p>
      <p>Kasb: {props.job}</p>
    </div>
  );
}

// 2. Props bilan ishlatamiz
function App() {
  return (
    <div>
      <UserCard name="Ali Valiyev" age={28} job="Dasturchi" />
      <UserCard name="Gul Karimova" age={24} job="Dizayner" />
      <UserCard name="Vali Toshmatov" age={30} job="Menejer" />
    </div>
  );
}
```

#### Props turlari

```jsx
function ComponentExample(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>Son: {props.count}</p>
      <p>Faol: {props.isActive ? "Ha" : "Yo'q"}</p>
      <p>Ranglar: {props.colors.join(", ")}</p>
      <p>Manzil: {props.user.city}, {props.user.country}</p>
    </div>
  );
}

function App() {
  const userData = {
    city: "Toshkent",
    country: "O'zbekiston"
  };

  return (
    <ComponentExample
      title="Mening Sahifam"           // string
      count={42}                       // number
      isActive={true}                  // boolean
      colors={["qizil", "kok", "yashil"]} // array
      user={userData}                  // object
    />
  );
}
```

---

### Passing Props

Props uzatishning turli usullari va eng yaxshi amaliyotlar.

#### 1. Oddiy Props uzatish

```jsx
function ProductCard(props) {
  return (
    <div className="product">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p className="price">${props.price}</p>
      <p>{props.description}</p>
      <button>Sotib olish</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <ProductCard
        name="Laptop"
        price={1000}
        image="/images/laptop.jpg"
        description="Yuqori sifatli laptop"
      />
    </div>
  );
}
```

#### 2. Destructuring bilan Props

```jsx
// Komponent parametrida destructuring
function UserProfile({ name, age, email, avatar }) {
  return (
    <div className="user-profile">
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>Yosh: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

// Ishlatish
function App() {
  return (
    <UserProfile
      name="Ali Valiyev"
      age={28}
      email="ali@example.com"
      avatar="/images/ali.jpg"
    />
  );
}
```

#### 3. Obyekt sifatida Props uzatish

```jsx
function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Kurs: {student.course}</p>
      <p>GPA: {student.gpa}</p>
      <p>Manzil: {student.address.city}</p>
    </div>
  );
}

function App() {
  const studentData = {
    id: 1,
    name: "Nargiza Karimova",
    course: "Informatika",
    gpa: 3.8,
    address: {
      city: "Samarqand",
      street: "Mustaqillik ko'chasi"
    }
  };

  return <StudentCard student={studentData} />;
}
```

#### 4. Spread Operator bilan

```jsx
function BookInfo({ title, author, year, pages, genre }) {
  return (
    <div className="book">
      <h2>{title}</h2>
      <p>Muallif: {author}</p>
      <p>Yil: {year}</p>
      <p>Sahifalar: {pages}</p>
      <p>Janr: {genre}</p>
    </div>
  );
}

function App() {
  const book = {
    title: "O'tkan kunlar",
    author: "Abdulla Qodiriy",
    year: 1925,
    pages: 400,
    genre: "Roman"
  };

  return (
    <div>
      {/* Spread operator bilan */}
      <BookInfo {...book} />
      
      {/* Yoki oddiy usul bilan */}
      <BookInfo
        title={book.title}
        author={book.author}
        year={book.year}
        pages={book.pages}
        genre={book.genre}
      />
    </div>
  );
}
```

#### 5. Function Props (Callback Functions)

```jsx
function Button({ text, onClick, color }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, padding: '10px 20px' }}
    >
      {text}
    </button>
  );
}

function App() {
  const handleSave = () => {
    alert("Ma'lumotlar saqlandi!");
  };

  const handleDelete = () => {
    if (confirm("Rostdan ham o'chirmoqchimisiz?")) {
      alert("O'chirildi!");
    }
  };

  const handleCancel = () => {
    alert("Bekor qilindi");
  };

  return (
    <div>
      <Button text="Saqlash" onClick={handleSave} color="green" />
      <Button text="O'chirish" onClick={handleDelete} color="red" />
      <Button text="Bekor qilish" onClick={handleCancel} color="gray" />
    </div>
  );
}
```

---

### Default Props

Komponentga props berilmaganda ishlatiluvchi standart qiymatlar.

#### 1. Function Parameters bilan Default Props

```jsx
function Greeting({ name = "Mehmon", time = "kun" }) {
  return <h1>Xayrli {time}, {name}!</h1>;
}

function App() {
  return (
    <div>
      <Greeting />                          {/* Xayrli kun, Mehmon! */}
      <Greeting name="Ali" />               {/* Xayrli kun, Ali! */}
      <Greeting name="Vali" time="tong" />  {/* Xayrli tong, Vali! */}
    </div>
  );
}
```

#### 2. defaultProps xususiyati bilan

```jsx
function Avatar({ src, alt, size }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        objectFit: 'cover'
      }}
    />
  );
}

// Default props o'rnatish
Avatar.defaultProps = {
  src: '/images/default-avatar.png',
  alt: 'Foydalanuvchi rasmi',
  size: '50px'
};

function App() {
  return (
    <div>
      <Avatar />                                    {/* Barcha default qiymatlar */}
      <Avatar src="/images/user1.jpg" />           {/* Faqat src o'zgartirildi */}
      <Avatar size="100px" alt="Katta rasm" />     {/* size va alt o'zgartirildi */}
    </div>
  );
}
```

#### 3. Murakkab Default Props

```jsx
function ProductCard({
  product = {
    name: 'Mahsulot nomi mavjud emas',
    price: 0,
    image: '/images/no-image.png',
    inStock: false
  },
  showPrice = true,
  currency = 'USD',
  onAddToCart = () => console.log('Savatga qo\'shish funksiyasi berilmagan')
}) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      
      {showPrice && (
        <p className="price">
          {product.price} {currency}
        </p>
      )}
      
      <p className={`stock ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
        {product.inStock ? 'Mavjud' : 'Tugagan'}
      </p>
      
      <button
        onClick={() => onAddToCart(product)}
        disabled={!product.inStock}
      >
        Savatga qo'shish
      </button>
    </div>
  );
}

function App() {
  const laptop = {
    name: 'MacBook Pro',
    price: 2000,
    image: '/images/macbook.jpg',
    inStock: true
  };

  return (
    <div>
      {/* Default product bilan */}
      <ProductCard />
      
      {/* Laptop ma'lumotlari bilan */}
      <ProductCard product={laptop} currency="UZS" />
      
      {/* Narxsiz ko'rsatish */}
      <ProductCard product={laptop} showPrice={false} />
    </div>
  );
}
```

---

### PropTypes

PropTypes - bu props'larning turini va majburiyligini tekshirish uchun ishlatiladi.

#### PropTypes o'rnatish

```bash
npm install prop-types
```

#### 1. Asosiy PropTypes

```jsx
import PropTypes from 'prop-types';

function UserInfo({ name, age, email, isActive, hobbies }) {
  return (
    <div className="user-info">
      <h2>{name}</h2>
      <p>Yosh: {age}</p>
      <p>Email: {email}</p>
      <p>Status: {isActive ? 'Faol' : 'Nofaol'}</p>
      
      <h3>Sevimli mashg'ulotlar:</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

// PropTypes ni belgilash
UserInfo.propTypes = {
  name: PropTypes.string.isRequired,      // Majburiy string
  age: PropTypes.number.isRequired,       // Majburiy number
  email: PropTypes.string.isRequired,     // Majburiy string
  isActive: PropTypes.bool,                // Ixtiyoriy boolean
  hobbies: PropTypes.arrayOf(PropTypes.string) // String massivi
};

// Default props
UserInfo.defaultProps = {
  isActive: false,
  hobbies: []
};
```

#### 2. Turli xil PropTypes

```jsx
import PropTypes from 'prop-types';

function ComponentExample(props) {
  return <div>Komponent misoli</div>;
}

ComponentExample.propTypes = {
  // Asosiy turlar
  stringProp: PropTypes.string,
  numberProp: PropTypes.number,
  boolProp: PropTypes.bool,
  functionProp: PropTypes.func,
  arrayProp: PropTypes.array,
  objectProp: PropTypes.object,

  // Majburiy props
  requiredString: PropTypes.string.isRequired,
  requiredNumber: PropTypes.number.isRequired,

  // Array turlari
  arrayOfNumbers: PropTypes.arrayOf(PropTypes.number),
  arrayOfStrings: PropTypes.arrayOf(PropTypes.string),

  // Obyekt shakli
  userObject: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string
  }),

  // Belgilangan qiymatlardan biri
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  // Turlardan biri
  idProp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  // React elementi
  children: PropTypes.node,
  element: PropTypes.element,

  // Custom validator
  customProp: function(props, propName, componentName) {
    if (!/^[A-Z]/.test(props[propName])) {
      return new Error(
        `${propName} in ${componentName} must start with uppercase letter`
      );
    }
  }
};
```

#### 3. Amaliy PropTypes misoli

```jsx
import PropTypes from 'prop-types';

function BlogPost({ post, onLike, onComment, currentUserId }) {
  return (
    <article className="blog-post">
      <header>
        <h1>{post.title}</h1>
        <p>Muallif: {post.author.name}</p>
        <p>Sana: {new Date(post.date).toLocaleDateString()}</p>
      </header>
      
      <div className="content">
        <p>{post.content}</p>
      </div>
      
      <footer className="post-actions">
        <button onClick={() => onLike(post.id)}>
          ❤️ {post.likes} likes
        </button>
        
        <button onClick={() => onComment(post.id)}>
          💬 {post.comments.length} comments
        </button>
        
        {post.author.id === currentUserId && (
          <button className="edit-btn">
            ✏️ Tahrirlash
          </button>
        )}
      </footer>
    </article>
  );
}

BlogPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    author: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string
    }).isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        authorId: PropTypes.number.isRequired
      })
    ).isRequired
  }).isRequired,
  onLike: PropTypes.func.isRequired,
  onComment: PropTypes.func.isRequired,
  currentUserId: PropTypes.number
};

BlogPost.defaultProps = {
  currentUserId: null
};
```

---

### Component Composition Basics

Komponent kompozitsiyasi - bu kichik, qayta ishlatiluvchi komponentlardan katta komponentlar yaratish usuli.

#### 1. Oddiy kompozitsiya

```jsx
// Kichik komponentlar
function Avatar({ src, alt, size = '40px' }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        objectFit: 'cover'
      }}
    />
  );
}

function UserName({ name, isOnline }) {
  return (
    <div className="username">
      <span>{name}</span>
      {isOnline && <span className="online-indicator"> 🟢</span>}
    </div>
  );
}

function UserStats({ postsCount, followersCount, followingCount }) {
  return (
    <div className="user-stats">
      <span>{postsCount} posts</span>
      <span>{followersCount} followers</span>
      <span>{followingCount} following</span>
    </div>
  );
}

// Katta komponent - kompozitsiya
function UserCard({ user }) {
  return (
    <div className="user-card">
      <Avatar
        src={user.avatar}
        alt={user.name}
        size="80px"
      />
      
      <UserName
        name={user.name}
        isOnline={user.isOnline}
      />
      
      <UserStats
        postsCount={user.postsCount}
        followersCount={user.followersCount}
        followingCount={user.followingCount}
      />
      
      <button className="follow-btn">
        {user.isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
}
```

#### 2. Layout Komponentlari

```jsx
function Container({ children, maxWidth = '1200px' }) {
  return (
    <div style={{
      maxWidth,
      margin: '0 auto',
      padding: '0 20px'
    }}>
      {children}
    </div>
  );
}

function Card({ children, title, footer }) {
  return (
    <div className="card">
      {title && (
        <div className="card-header">
          <h3>{title}</h3>
        </div>
      )}
      
      <div className="card-body">
        {children}
      </div>
      
      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
}

function Grid({ children, columns = 3 }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: '20px'
    }}>
      {children}
    </div>
  );
}

// Ishlatish
function App() {
  return (
    <Container>
      <h1>Mening Blogim</h1>
      
      <Grid columns={2}>
        <Card title="Birinchi post" footer={<button>O'qish</button>}>
          <p>Bu birinchi postning matni...</p>
        </Card>
        
        <Card title="Ikkinchi post" footer={<button>O'qish</button>}>
          <p>Bu ikkinchi postning matni...</p>
        </Card>
        
        <Card title="Uchinchi post">
          <p>Bu uchinchi postning matni...</p>
        </Card>
      </Grid>
    </Container>
  );
}
```

#### 3. Composite komponentlar

```jsx
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

function ModalHeader({ children }) {
  return <div className="modal-header">{children}</div>;
}

function ModalBody({ children }) {
  return <div className="modal-body">{children}</div>;
}

function ModalFooter({ children }) {
  return <div className="modal-footer">{children}</div>;
}

// Modal komponentiga sub-komponentlarni biriktirish
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

// Ishlatish
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        Modalni ochish
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>
          <h2>Tasdiqlash</h2>
        </Modal.Header>
        
        <Modal.Body>
          <p>Rostdan ham o'chirmoqchimisiz?</p>
        </Modal.Body>
        
        <Modal.Footer>
          <button onClick={() => setIsModalOpen(false)}>
            Bekor qilish
          </button>
          <button onClick={() => {
            alert("O'chirildi!");
            setIsModalOpen(false);
          }}>
            O'chirish
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
```

---

### Children Props

Children props - bu komponentning ochiluvchi va yopiluvchi teglari orasidagi kontentni qabul qilish usuli.

#### 1. Oddiy Children

```jsx
function Button({ children, color = 'blue', size = 'medium' }) {
  const styles = {
    backgroundColor: color,
    color: 'white',
    border: 'none',
    padding: size === 'large' ? '15px 30px' : '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <button style={styles}>
      {children}
    </button>
  );
}

function App() {
  return (
    <div>
      <Button color="green">Saqlash</Button>
      <Button color="red">O'chirish</Button>
      <Button size="large">Katta tugma</Button>
    </div>
  );
}
```

#### 2. Children bilan Layout

```jsx
function Page({ children, title }) {
  return (
    <div className="page">
      <header className="page-header">
        <h1>{title}</h1>
      </header>
      
      <main className="page-content">
        {children}
      </main>
      
      <footer className="page-footer">
        <p>&copy; 2024 Mening Saytim</p>
      </footer>
    </div>
  );
}

function Section({ children, title, subtitle }) {
  return (
    <section className="section">
      <div className="section-header">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}

function App() {
  return (
    <Page title="Bosh sahifa">
      <Section title="Xush kelibsiz" subtitle="Bu bizning saytimiz">
        <p>Bu yerda sayt haqida ma'lumot bor.</p>
        <p>Biz sizga eng yaxshi xizmatni taqdim etamiz.</p>
      </Section>
      
      <Section title="Xizmatlarimiz">
        <ul>
          <li>Web dizayn</li>
          <li>Dasturlash</li>
          <li>SEO optimizatsiya</li>
        </ul>
      </Section>
    </Page>
  );
}
```

#### 3. Children bilan murakkab kompozitsiya

```jsx
function Alert({ children, type = 'info', onClose, showIcon = true }) {
  const getAlertStyle = () => {
    const baseStyle = {
      padding: '15px',
      borderRadius: '5px',
      marginBottom: '10px',
      position: 'relative'
    };

    switch (type) {
      case 'success':
        return { ...baseStyle, backgroundColor: '#d4edda', color: '#155724' };
      case 'error':
        return { ...baseStyle, backgroundColor: '#f8d7da', color: '#721c24' };
      case 'warning':
        return { ...baseStyle, backgroundColor: '#fff3cd', color: '#856404' };
      default:
        return { ...baseStyle, backgroundColor: '#d1ecf1', color: '#0c5460' };
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'warning': return '⚠️';
      default: return 'ℹ️';
    }
  };

  return (
    <div style={getAlertStyle()}>
      {showIcon && <span style={{ marginRight: '10px' }}>{getIcon()}</span>}
      
      <div style={{ display: 'inline-block', flex: 1 }}>
        {children}
      </div>
      
      {onClose && (
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '5px',
            right: '10px',
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer'
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <Alert type="success">
        <strong>Muvaffaqiyat!</strong> Ma'lumotlaringiz saqlandi.
      </Alert>
      
      <Alert type="error" onClose={() => alert('Xabar yopildi')}>
        <strong>Xato!</strong> Nimadir noto'g'ri bajarildi.
        <br />
        <small>Iltimos, qaytadan urinib ko'ring.</small>
      </Alert>
      
      <Alert type="warning" showIcon={false}>
        Bu ogohlantirish xabari. Ehtiyot bo'ling!
      </Alert>
      
      <Alert>
        <h4>Ma'lumot</h4>
        <p>Bu oddiy ma'lumot xabari.</p>
        <ul>
          <li>Birinchi punkt</li>
          <li>Ikkinchi punkt</li>
        </ul>
      </Alert>
    </div>
  );
}
```

---

## Amaliy mashqlar

### Mashq 1: User Card Component

```jsx
// Ushbu komponentni to'ldiring
function UserCard({ user, onFollow, onMessage }) {
  return (
    <div className="user-card">
      {/* 
        User ma'lumotlarini ko'rsating:
        - Avatar (rasm)
        - Ism
        - Kasb
        - Joylashuv
        - Follow/Message tugmalari
      */}
    </div>
  );
}

// Test ma'lumotlari
const user = {
  id: 1,
  name: "Ali Valiyev",
  job: "Frontend Developer",
  location: "Toshkent, O'zbekiston",
  avatar: "/images/ali.jpg",
  isFollowing: false
};
```

### Mashq 2: Product List Component

```jsx
// Props va kompozitsiya ishlatib mahsulotlar ro'yxatini yarating
function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-list">
      {/* Products ni map qilib ko'rsating */}
    </div>
  );
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      {/* Product ma'lumotlarini ko'rsating */}
    </div>
  );
}

// Test ma'lumotlari
const products = [
  { id: 1, name: "Laptop", price: 1000, image: "/laptop.jpg" },
  { id: 2, name: "Phone", price: 500, image: "/phone.jpg" },
  { id: 3, name: "Headphones", price: 200, image: "/headphones.jpg" }
];
```

### Mashq 3: Modal Component

```jsx
// Children props ishlatib modal yarating
function Modal({ isOpen, onClose, children }) {
  // Modal logikasini yozing
}

function ModalHeader({ children }) {
  // Modal header
}

function ModalBody({ children }) {
  // Modal body
}

function ModalFooter({ children }) {
  // Modal footer
}

// Composite pattern
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
```


</details>

<hr>

<details>
<summary>
Component State - Komponent Holati
</summary>
# React Tutorial - Hafta 2, 1-2 kun

## Component State - Komponent Holati (Day 1-2: Component State)

### useState Hook

useState - bu React Hook bo'lib, functional komponentlarga state (holat) qo'shish imkonini beradi. State - bu komponentning o'zgaruvchan ma'lumotlari.

#### useState nima?

useState Hook yordamida komponent o'zining ichki holatini saqlashi va uni o'zgartirishi mumkin.

```jsx
import React, { useState } from 'react';

function Counter() {
  // useState Hook ishlatish
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>Hisoblagich: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}
```

#### useState sintaksis

```jsx
const [state, setState] = useState(initialValue);
```

- **state** - hozirgi qiymat
- **setState** - qiymatni o'zgartirish funksiyasi
- **initialValue** - boshlang'ich qiymat

#### Oddiy useState misollar

```jsx
// 1. Son bilan ishlash
function NumberExample() {
  const [number, setNumber] = useState(0);
  
  return (
    <div>
      <p>Son: {number}</p>
      <button onClick={() => setNumber(number + 1)}>Oshirish</button>
      <button onClick={() => setNumber(number - 1)}>Kamaytirish</button>
      <button onClick={() => setNumber(0)}>Reset</button>
    </div>
  );
}

// 2. Matn bilan ishlash
function TextExample() {
  const [text, setText] = useState('');
  
  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Matn kiriting"
      />
      <p>Siz yozdingiz: {text}</p>
    </div>
  );
}

// 3. Boolean bilan ishlash
function ToggleExample() {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Yashirish' : 'Ko\'rsatish'}
      </button>
      {isVisible && <p>Bu matn ko'rinadi!</p>}
    </div>
  );
}
```

#### Turli data turlari bilan useState

```jsx
function DataTypesExample() {
  const [name, setName] = useState('');                    // String
  const [age, setAge] = useState(0);                       // Number
  const [isStudent, setIsStudent] = useState(false);       // Boolean
  const [hobbies, setHobbies] = useState([]);              // Array
  const [user, setUser] = useState({ name: '', email: '' }); // Object
  
  return (
    <div>
      <h3>Turli data turlari</h3>
      
      {/* String */}
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        placeholder="Ism"
      />
      
      {/* Number */}
      <input 
        type="number" 
        value={age} 
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Yosh"
      />
      
      {/* Boolean */}
      <label>
        <input 
          type="checkbox" 
          checked={isStudent}
          onChange={(e) => setIsStudent(e.target.checked)}
        />
        Talabaman
      </label>
      
      <div>
        <p>Ism: {name}</p>
        <p>Yosh: {age}</p>
        <p>Talaba: {isStudent ? 'Ha' : 'Yo\'q'}</p>
      </div>
    </div>
  );
}
```

---

### State vs Props

State va Props o'rtasidagi farqni tushunish muhim.

#### Props vs State taqqoslash

| Xususiyat | Props | State |
|-----------|-------|--------|
| **Qaerdan keladi** | Ota komponentdan | Komponent ichida |
| **O'zgaruvchanlik** | Read-only | O'zgartiriladi |
| **Kimning nazorati** | Ota komponent | O'zi komponent |
| **Maqsad** | Ma'lumot uzatish | Ichki holat |
| **Re-render** | Props o'zgarsa | State o'zgarsa |

#### Props misoli

```jsx
// Ota komponent - props yuboradi
function ParentComponent() {
  return (
    <div>
      <ChildComponent name="Ali" age={25} />
      <ChildComponent name="Vali" age={30} />
    </div>
  );
}

// Bola komponent - props qabul qiladi
function ChildComponent({ name, age }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Yosh: {age}</p>
    </div>
  );
}
```

#### State misoli

```jsx
// Har bir komponent o'zining state'iga ega
function CounterComponent() {
  const [count, setCount] = useState(0); // Bu komponentning o'z state'i
  
  return (
    <div>
      <h3>Hisoblagich: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <CounterComponent /> {/* Har biri alohida state'ga ega */}
      <CounterComponent />
      <CounterComponent />
    </div>
  );
}
```

#### State va Props birga

```jsx
// Ota komponent
function UserDashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Ali', isOnline: false },
    { id: 2, name: 'Vali', isOnline: true }
  ]);
  
  const toggleUserStatus = (userId) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, isOnline: !user.isOnline }
        : user
    ));
  };
  
  return (
    <div>
      <h2>Foydalanuvchilar</h2>
      {users.map(user => (
        <UserCard 
          key={user.id}
          user={user}                    // Props sifatida
          onToggle={toggleUserStatus}    // Function props
        />
      ))}
    </div>
  );
}

// Bola komponent
function UserCard({ user, onToggle }) {
  const [showDetails, setShowDetails] = useState(false); // O'zining state'i
  
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{user.name}</h3> {/* Props dan */}
      <p>Status: {user.isOnline ? 'Online' : 'Offline'}</p> {/* Props dan */}
      
      <button onClick={() => onToggle(user.id)}>
        Status o'zgartirish
      </button>
      
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Yashirish' : 'Batafsil'} {/* O'z state'i */}
      </button>
      
      {showDetails && (
        <div>
          <p>ID: {user.id}</p>
          <p>Qo'shimcha ma'lumotlar...</p>
        </div>
      )}
    </div>
  );
}
```

---

### State Updates

State'ni to'g'ri tarzda yangilash muhim qoidalar mavjud.

#### 1. To'g'ridan-to'g'ri state'ni o'zgartirmang

```jsx
function WrongExample() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: 'Ali', age: 25 });
  const [items, setItems] = useState(['a', 'b', 'c']);
  
  // ❌ Noto'g'ri - to'g'ridan-to'g'ri o'zgartirish
  const handleWrongUpdate = () => {
    count = count + 1;           // Xato!
    user.age = 26;               // Xato!
    items.push('d');             // Xato!
  };
  
  // ✅ To'g'ri - setState ishlatish
  const handleCorrectUpdate = () => {
    setCount(count + 1);                    // To'g'ri
    setUser({ ...user, age: 26 });         // To'g'ri
    setItems([...items, 'd']);              // To'g'ri
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <p>User: {user.name}, {user.age}</p>
      <p>Items: {items.join(', ')}</p>
      
      <button onClick={handleCorrectUpdate}>
        To'g'ri yangilash
      </button>
    </div>
  );
}
```

#### 2. Functional Updates

Yangi qiymat eski qiymatga bog'liq bo'lsa, functional update ishlatish yaxshi:

```jsx
function FunctionalUpdates() {
  const [count, setCount] = useState(0);
  
  // ✅ Functional update - xavfsizroq
  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  // Ko'p marta chaqirilganda ham ishlaydi
  const incrementThreeTimes = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCounter}>+1</button>
      <button onClick={incrementThreeTimes}>+3</button>
    </div>
  );
}
```

#### 3. Obyektlar va massivlarni yangilash

```jsx
function ObjectArrayUpdates() {
  const [user, setUser] = useState({
    name: 'Ali',
    age: 25,
    address: {
      city: 'Toshkent',
      street: 'Mustaqillik'
    }
  });
  
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Uyga borish', completed: false },
    { id: 2, text: 'Kitob o\'qish', completed: true }
  ]);
  
  // Obyektni yangilash
  const updateUser = () => {
    setUser(prevUser => ({
      ...prevUser,           // Eski xususiyatlarni saqlash
      age: prevUser.age + 1,  // Yangi qiymat
      address: {
        ...prevUser.address,
        city: 'Samarqand'     // Nested obyektni yangilash
      }
    }));
  };
  
  // Massivga element qo'shish
  const addTask = () => {
    const newTask = {
      id: Date.now(),
      text: 'Yangi vazifa',
      completed: false
    };
    
    setTasks(prevTasks => [...prevTasks, newTask]);
  };
  
  // Massivdan element o'chirish
  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };
  
  // Massivdagi elementni yangilash
  const toggleTask = (taskId) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId 
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };
  
  return (
    <div>
      <div>
        <h3>User Info</h3>
        <p>{user.name}, {user.age} yosh</p>
        <p>{user.address.city}, {user.address.street}</p>
        <button onClick={updateUser}>Yosh oshirish</button>
      </div>
      
      <div>
        <h3>Vazifalar</h3>
        <button onClick={addTask}>Vazifa qo'shish</button>
        
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <span 
                style={{ 
                  textDecoration: task.completed ? 'line-through' : 'none' 
                }}
              >
                {task.text}
              </span>
              <button onClick={() => toggleTask(task.id)}>
                {task.completed ? 'Bekor qilish' : 'Bajarish'}
              </button>
              <button onClick={() => deleteTask(task.id)}>
                O'chirish
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```

---

### Multiple State Variables

Bir komponentda bir nechta state o'zgaruvchilari ishlatish mumkin.

#### 1. Alohida state'lar

```jsx
function UserProfile() {
  // Har bir ma'lumot uchun alohida state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});
  
  const handleSave = () => {
    const newErrors = {};
    
    if (!firstName) newErrors.firstName = 'Ism kiritish majburiy';
    if (!email) newErrors.email = 'Email kiritish majburiy';
    if (age < 18) newErrors.age = 'Yosh 18 dan katta bo\'lishi kerak';
    
    if (Object.keys(newErrors).length === 0) {
      setIsEditing(false);
      setErrors({});
      alert('Ma\'lumotlar saqlandi!');
    } else {
      setErrors(newErrors);
    }
  };
  
  return (
    <div>
      <h2>Foydalanuvchi profili</h2>
      
      {isEditing ? (
        <div>
          <input
            type="text"
            placeholder="Ism"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <p style={{color: 'red'}}>{errors.firstName}</p>}
          
          <input
            type="text"
            placeholder="Familiya"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
          
          <input
            type="number"
            placeholder="Yosh"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
          {errors.age && <p style={{color: 'red'}}>{errors.age}</p>}
          
          <button onClick={handleSave}>Saqlash</button>
          <button onClick={() => setIsEditing(false)}>Bekor qilish</button>
        </div>
      ) : (
        <div>
          <p><strong>Ism:</strong> {firstName} {lastName}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Yosh:</strong> {age}</p>
          <button onClick={() => setIsEditing(true)}>Tahrirlash</button>
        </div>
      )}
    </div>
  );
}
```

#### 2. Bog'liq state'lar

```jsx
function ShoppingCart() {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Headphones', price: 200 }
  ]);
  
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [discount, setDiscount] = useState(0);
  
  // Bog'liq qiymatlar (computed values)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal - discount;
  
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };
  
  const applyDiscount = () => {
    if (subtotal > 1000) {
      setDiscount(100); // 100$ chegirma
    }
  };
  
  return (
    <div>
      <h2>Do'kon</h2>
      
      <div>
        <h3>Mahsulotlar</h3>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h4>{product.name}</h4>
            <p>Narx: ${product.price}</p>
            <button onClick={() => addToCart(product)}>
              Savatga qo'shish
            </button>
          </div>
        ))}
      </div>
      
      <div>
        <button onClick={() => setShowCart(!showCart)}>
          Savat ({totalItems} ta mahsulot)
        </button>
        
        {showCart && (
          <div style={{ border: '2px solid #333', padding: '20px' }}>
            <h3>Savat</h3>
            
            {cart.length === 0 ? (
              <p>Savat bo'sh</p>
            ) : (
              <>
                {cart.map(item => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{item.name} x{item.quantity}</span>
                    <span>${item.price * item.quantity}</span>
                    <button onClick={() => removeFromCart(item.id)}>O'chirish</button>
                  </div>
                ))}
                
                <hr />
                <p>Subtotal: ${subtotal}</p>
                {discount > 0 && <p>Chegirma: -${discount}</p>}
                <p><strong>Jami: ${total}</strong></p>
                
                <button onClick={applyDiscount} disabled={subtotal <= 1000}>
                  Chegirma qo'llash (1000$ dan ko'p bo'lsa)
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
```

---

### State Best Practices

State bilan ishlashda yodda tutish kerak bo'lgan eng yaxshi amaliyotlar.

#### 1. State'ni minimallashtirig

```jsx
// ❌ Keraksiz state'lar
function BadExample() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState(''); // Keraksiz! Computed qilish mumkin
  
  return <div>{fullName}</div>;
}

// ✅ Optimal state
function GoodExample() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  // Computed value - state emas
  const fullName = `${firstName} ${lastName}`.trim();
  
  return <div>{fullName}</div>;
}
```

#### 2. Bog'liq state'larni birlashtiring

```jsx
// ❌ Bog'liq state'lar alohida
function BadForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  
  // State'lar o'zaro bog'liq, lekin alohida boshqarilmoqda
}

// ✅ Bog'liq state'larni birlashtirish
function GoodForm() {
  const [requestState, setRequestState] = useState({
    isLoading: false,
    error: null,
    data: null
  });
  
  const fetchData = async () => {
    setRequestState({ isLoading: true, error: null, data: null });
    
    try {
      const response = await fetch('/api/data');
      const result = await response.json();
      setRequestState({ isLoading: false, error: null, data: result });
    } catch (err) {
      setRequestState({ isLoading: false, error: err.message, data: null });
    }
  };
}
```

#### 3. State'ni normallashtirig

```jsx
// ❌ Nested structure - yangilash qiyin
function BadStructure() {
  const [data, setData] = useState({
    users: [
      { 
        id: 1, 
        name: 'Ali', 
        posts: [
          { id: 1, title: 'Post 1', comments: [...] }
        ] 
      }
    ]
  });
  
  // Bitta comment'ni yangilash uchun butun structure'ni qayta yozish kerak
}

// ✅ Normalized structure
function GoodStructure() {
  const [users, setUsers] = useState({ 1: { id: 1, name: 'Ali' } });
  const [posts, setPosts] = useState({ 1: { id: 1, title: 'Post 1', userId: 1 } });
  const [comments, setComments] = useState({});
  
  // Har bir entity alohida boshqariladi
}
```

#### 4. State yangilanish paternlari

```jsx
function StatePatterns() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // ✅ Batch updates
  const loadItems = async () => {
    setLoading(true);
    try {
      const data = await fetchItems();
      // React avtomatik batch qiladi
      setItems(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // Error handling
    }
  };
  
  // ✅ Optimistic updates
  const addItem = async (newItem) => {
    const tempId = Date.now();
    const optimisticItem = { ...newItem, id: tempId, pending: true };
    
    // Darhol UI'ni yangilash
    setItems(prev => [...prev, optimisticItem]);
    
    try {
      const savedItem = await saveItem(newItem);
      // Server javobini olganidan so'ng yangilash
      setItems(prev => 
        prev.map(item => 
          item.id === tempId ? savedItem : item
        )
      );
    } catch (error) {
      // Xato bo'lsa optimistic update'ni bekor qilish
      setItems(prev => prev.filter(item => item.id !== tempId));
    }
  };
  
  return (
    <div>
      {loading && <p>Loading...</p>}
      <button onClick={() => addItem({ name: 'New Item' })}>
        Add Item
      </button>
      
      {items.map(item => (
        <div key={item.id} style={{ opacity: item.pending ? 0.5 : 1 }}>
          {item.name}
        </div>
      ))}
    </div>
  );
}
```

---

## Amaliy mashqlar

### Mashq 1: Todo List

```jsx
function TodoApp() {
  // State'larni qo'shing va funksionallikni amalga oshiring
  
  return (
    <div>
      <h2>Todo List</h2>
      
      {/* Input field va Add button */}
      <div>
        <input type="text" placeholder="Yangi vazifa" />
        <button>Qo'shish</button>
      </div>
      
      {/* Todo items */}
      <ul>
        {/* Todo'larni map qiling */}
      </ul>
      
      {/* Statistics */}
      <div>
        <p>Jami: 0 ta</p>
        <p>Bajarilgan: 0 ta</p>
        <p>Qolgan: 0 ta</p>
      </div>
    </div>
  );
}
```

### Mashq 2: Form Validation

```jsx
function RegistrationForm() {
  // State'lar va validation logic qo'shing
  
  return (
    <form>
      <div>
        <input type="text" placeholder="Username" />
        {/* Error message */}
      </div>
      
      <div>
        <input type="email" placeholder="Email" />
        {/* Error message */}
      </div>
      
      <div>
        <input type="password" placeholder="Password" />
        {/* Error message */}
      </div>
      
      <div>
        <input type="password" placeholder="Confirm Password" />
        {/* Error message */}
      </div>
      
      <button type="submit">Ro'yxatdan o'tish</button>
    </form>
  );
}
```

### Mashq 3: Simple Calculator

```jsx
function Calculator() {
  // State'lar va hesablash logikasini qo'shing
  
  return (
    <div>
      <div>
        <input type="number" placeholder="Birinchi son" />
        <select>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="number" placeholder="Ikkinchi son" />
      </div>
      
      <button>Hisoblash</button>
      
      <div>
        <h3>Natija: </h3>
      </div>
    </div>
  );
}
```




</details>

<hr>

<details>
<summary>
Event Handling va Interactivity
</summary>

## Event Handling va Interactivity (Day 3-4: Event Handling and Interactivity)

### Event Handling in React

Event handling - bu foydalanuvchining harakatlari (click, type, hover, submit) ga javob berish usuli. React'da event handling JavaScript'dagi event handling'ga o'xshash, lekin ba'zi farqlar bor.

#### React Events nima?

React SyntheticEvent sistemasidan foydalanadi - bu barcha brauzerlarda bir xil ishlaydi.

```jsx
import React, { useState } from 'react';

function SimpleButton() {
  const [message, setMessage] = useState('');
  
  // Event handler function
  const handleClick = () => {
    setMessage('Tugma bosildi!');
  };
  
  return (
    <div>
      <button onClick={handleClick}>
        Meni bosing
      </button>
      <p>{message}</p>
    </div>
  );
}
```

#### Event handling usullari

```jsx
function EventMethods() {
  const [count, setCount] = useState(0);
  
  // 1. Inline function
  const InlineExample = () => (
    <button onClick={() => setCount(count + 1)}>
      Inline: {count}
    </button>
  );
  
  // 2. Function reference
  const handleIncrement = () => {
    setCount(count + 1);
  };
  
  const FunctionRefExample = () => (
    <button onClick={handleIncrement}>
      Function ref: {count}
    </button>
  );
  
  // 3. Arrow function bilan
  const ArrowExample = () => (
    <button onClick={() => {
      console.log('Button clicked');
      setCount(count + 1);
    }}>
      Arrow function: {count}
    </button>
  );
  
  return (
    <div>
      <InlineExample />
      <FunctionRefExample />
      <ArrowExample />
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

#### Turli event turlari

```jsx
function EventTypes() {
  const [events, setEvents] = useState([]);
  
  const addEvent = (eventType, message) => {
    const newEvent = {
      id: Date.now(),
      type: eventType,
      message: message,
      time: new Date().toLocaleTimeString()
    };
    setEvents(prev => [...prev, newEvent]);
  };
  
  return (
    <div style={{ padding: '20px' }}>
      <h3>Event Types</h3>
      
      {/* Click Events */}
      <button onClick={() => addEvent('click', 'Button clicked')}>
        Click me
      </button>
      
      <button 
        onDoubleClick={() => addEvent('doubleclick', 'Button double clicked')}
        style={{ marginLeft: '10px' }}
      >
        Double click me
      </button>
      
      {/* Mouse Events */}
      <div 
        onMouseEnter={() => addEvent('mouseenter', 'Mouse entered div')}
        onMouseLeave={() => addEvent('mouseleave', 'Mouse left div')}
        style={{ 
          width: '200px', 
          height: '100px', 
          backgroundColor: 'lightblue', 
          margin: '10px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        Hover over me
      </div>
      
      {/* Keyboard Events */}
      <input 
        type="text"
        placeholder="Type something..."
        onKeyDown={(e) => addEvent('keydown', `Key pressed: ${e.key}`)}
        onKeyUp={(e) => addEvent('keyup', `Key released: ${e.key}`)}
        style={{ margin: '10px 0', padding: '5px' }}
      />
      
      {/* Focus Events */}
      <input 
        type="text"
        placeholder="Focus/blur events"
        onFocus={() => addEvent('focus', 'Input focused')}
        onBlur={() => addEvent('blur', 'Input blurred')}
        style={{ margin: '10px 0', padding: '5px', display: 'block' }}
      />
      
      {/* Events ro'yxati */}
      <div style={{ marginTop: '20px' }}>
        <h4>Event History:</h4>
        <button onClick={() => setEvents([])}>Clear History</button>
        <ul style={{ maxHeight: '200px', overflowY: 'auto' }}>
          {events.map(event => (
            <li key={event.id}>
              <strong>[{event.time}]</strong> {event.type}: {event.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```

---

### Event Objects

React event object (SyntheticEvent) haqida batafsil ma'lumot.

#### Event Object xususiyatlari

```jsx
function EventObjectDetails() {
  const [eventInfo, setEventInfo] = useState(null);
  
  const handleEvent = (event) => {
    // Event object haqida ma'lumot
    const info = {
      type: event.type,                    // Event turi
      target: event.target.tagName,       // Qaysi element
      key: event.key || 'N/A',           // Keyboard events uchun
      clientX: event.clientX || 'N/A',   // Mouse X koordinatasi
      clientY: event.clientY || 'N/A',   // Mouse Y koordinatasi
      value: event.target.value || 'N/A', // Input value
      checked: event.target.checked !== undefined ? event.target.checked : 'N/A'
    };
    
    setEventInfo(info);
  };
  
  return (
    <div style={{ padding: '20px' }}>
      <h3>Event Object Ma'lumotlari</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={handleEvent}>Click Event</button>
        <button 
          onMouseMove={handleEvent}
          style={{ marginLeft: '10px' }}
        >
          Mouse Move
        </button>
        
        <input 
          type="text"
          placeholder="Type here..."
          onChange={handleEvent}
          onKeyDown={handleEvent}
          style={{ margin: '10px', padding: '5px', display: 'block' }}
        />
        
        <label style={{ display: 'block', margin: '10px 0' }}>
          <input type="checkbox" onChange={handleEvent} />
          Checkbox
        </label>
      </div>
      
      {eventInfo && (
        <div style={{ 
          background: '#f5f5f5', 
          padding: '15px', 
          borderRadius: '5px',
          fontFamily: 'monospace'
        }}>
          <h4>Oxirgi Event Ma'lumotlari:</h4>
          <p><strong>Type:</strong> {eventInfo.type}</p>
          <p><strong>Target:</strong> {eventInfo.target}</p>
          <p><strong>Key:</strong> {eventInfo.key}</p>
          <p><strong>Mouse X:</strong> {eventInfo.clientX}</p>
          <p><strong>Mouse Y:</strong> {eventInfo.clientY}</p>
          <p><strong>Value:</strong> {eventInfo.value}</p>
          <p><strong>Checked:</strong> {eventInfo.checked}</p>
        </div>
      )}
    </div>
  );
}
```

#### Event methods va preventDefault

```jsx
function EventMethods() {
  const [links, setLinks] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  // preventDefault misoli
  const handleLinkClick = (event) => {
    event.preventDefault(); // Linkni ochishni to'xtatish
    
    const newLink = {
      id: Date.now(),
      href: event.target.href,
      text: event.target.textContent,
      time: new Date().toLocaleTimeString()
    };
    
    setLinks(prev => [...prev, newLink]);
  };
  
  // Form submit preventDefault
  const handleSubmit = (event) => {
    event.preventDefault(); // Sahifani reload qilishni to'xtatish
    
    if (!formData.name || !formData.email) {
      alert('Barcha maydonlarni to\'ldiring!');
      return;
    }
    
    alert(`Form yuborildi: ${formData.name} (${formData.email})`);
    setFormData({ name: '', email: '' });
  };
  
  // stopPropagation misoli
  const handleParentClick = () => {
    console.log('Parent div clicked');
  };
  
  const handleChildClick = (event) => {
    event.stopPropagation(); // Parent click'ni to'xtatish
    console.log('Child button clicked - parent event to\'xtatildi');
  };
  
  return (
    <div style={{ padding: '20px' }}>
      <h3>Event Methods</h3>
      
      {/* preventDefault misoli */}
      <div style={{ marginBottom: '20px' }}>
        <h4>preventDefault - Link Click</h4>
        <a 
          href="https://google.com" 
          onClick={handleLinkClick}
          style={{ color: 'blue', textDecoration: 'underline' }}
        >
          Google'ga o'tish (preventDefault bilan)
        </a>
        
        <div style={{ marginTop: '10px' }}>
          <strong>Bosilgan linklar:</strong>
          <ul>
            {links.map(link => (
              <li key={link.id}>
                [{link.time}] {link.text} → {link.href}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Form preventDefault */}
      <div style={{ marginBottom: '20px' }}>
        <h4>Form preventDefault</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ism"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            style={{ margin: '5px', padding: '5px' }}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            style={{ margin: '5px', padding: '5px' }}
          />
          <button type="submit" style={{ margin: '5px', padding: '5px 10px' }}>
            Yuborish
          </button>
        </form>
      </div>
      
      {/* stopPropagation misoli */}
      <div style={{ marginBottom: '20px' }}>
        <h4>stopPropagation misoli</h4>
        <div 
          onClick={handleParentClick}
          style={{ 
            padding: '20px', 
            backgroundColor: 'lightcoral',
            cursor: 'pointer'
          }}
        >
          Parent Div (Console'ni oching)
          <button 
            onClick={handleChildClick}
            style={{ 
              margin: '10px', 
              padding: '10px',
              backgroundColor: 'lightgreen'
            }}
          >
            Child Button (stopPropagation)
          </button>
        </div>
      </div>
    </div>
  );
}
```

---

### Event Binding

React'da event binding va this konteksti (Class componentlarda).

#### Function Components'da binding

```jsx
function FunctionComponentBinding() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [inputValue, setInputValue] = useState('');
  
  // Parameter bilan event handler
  const handleDelete = (index) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };
  
  // Event va parameter ikkalasini ham olish
  const handleEdit = (event, index) => {
    const newValue = prompt('Yangi qiymat kiriting:', items[index]);
    if (newValue !== null && newValue.trim() !== '') {
      setItems(prev => prev.map((item, i) => 
        i === index ? newValue : item
      ));
    }
  };
  
  // Dinamik event handler
  const createClickHandler = (message) => {
    return () => {
      alert(message);
    };
  };
  
  const handleAdd = () => {
    if (inputValue.trim()) {
      setItems(prev => [...prev, inputValue]);
      setInputValue('');
    }
  };
  
  return (
    <div style={{ padding: '20px' }}>
      <h3>Function Component Event Binding</h3>
      
      {/* Add new item */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Yangi element..."
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <button onClick={handleAdd}>Qo'shish</button>
      </div>
      
      {/* Items list */}
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ margin: '10px 0', padding: '10px', backgroundColor: '#f0f0f0' }}>
            <span>{item}</span>
            
            {/* Parameter bilan */}
            <button 
              onClick={() => handleDelete(index)}
              style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}
            >
              O'chirish
            </button>
            
            {/* Event va parameter */}
            <button 
              onClick={(event) => handleEdit(event, index)}
              style={{ marginLeft: '5px', backgroundColor: 'blue', color: 'white' }}
            >
              Tahrirlash
            </button>
            
            {/* Dinamik handler */}
            <button 
              onClick={createClickHandler(`${item} haqida ma'lumot`)}
              style={{ marginLeft: '5px', backgroundColor: 'green', color: 'white' }}
            >
              Ma'lumot
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

#### Class Components'da binding (Legacy)

```jsx
class ClassComponentBinding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: ''
    };
    
    // Binding qilish usuli 1: constructor'da
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  
  // Binding qilish usuli 2: arrow function
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  }
  
  // Oddiy method - binding kerak
  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }
  
  // Parameter bilan
  handleSetValue = (value) => {
    this.setState({ count: value });
  }
  
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h3>Class Component Binding</h3>
        <p>Count: {this.state.count}</p>
        
        {/* Bind qilingan method */}
        <button onClick={this.handleIncrement}>
          + (Constructor bind)
        </button>
        
        {/* Arrow function method */}
        <button onClick={this.handleDecrement}>
          - (Arrow function)
        </button>
        
        {/* Inline binding */}
        <button onClick={this.handleIncrement.bind(this)}>
          + (Inline bind)
        </button>
        
        {/* Arrow function inline */}
        <button onClick={() => this.setState({ count: this.state.count + 5 })}>
          +5 (Inline arrow)
        </button>
        
        {/* Parameter bilan */}
        <button onClick={() => this.handleSetValue(0)}>
          Reset
        </button>
        
        <button onClick={() => this.handleSetValue(100)}>
          Set 100
        </button>
      </div>
    );
  }
}
```

---

### Controlled Components

Controlled components - bu React state orqali boshqariladigan form elementlari.

#### Input Controls

```jsx
function ControlledInputs() {
  const [formData, setFormData] = useState({
    text: '',
    email: '',
    password: '',
    number: 0,
    range: 50,
    date: '',
    time: '',
    color: '#ff0000',
    textarea: '',
    select: '',
    multiSelect: [],
    checkbox: false,
    radio: '',
    file: null
  });
  
  // Universal handler
  const handleChange = (field) => (event) => {
    const { type, value, checked, files } = event.target;
    
    let newValue;
    if (type === 'checkbox') {
      newValue = checked;
    } else if (type === 'file') {
      newValue = files[0];
    } else if (type === 'number' || type === 'range') {
      newValue = Number(value);
    } else {
      newValue = value;
    }
    
    setFormData(prev => ({
      ...prev,
      [field]: newValue
    }));
  };
  
  // Multi-select uchun
  const handleMultiSelect = (event) => {
    const values = Array.from(event.target.selectedOptions, option => option.value);
    setFormData(prev => ({ ...prev, multiSelect: values }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    alert('Form yuborildi! Console'ni tekshiring.');
  };
  
  const handleReset = () => {
    setFormData({
      text: '',
      email: '',
      password: '',
      number: 0,
      range: 50,
      date: '',
      time: '',
      color: '#ff0000',
      textarea: '',
      select: '',
      multiSelect: [],
      checkbox: false,
      radio: '',
      file: null
    });
  };
  
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h3>Controlled Components</h3>
      
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '15px' }}>
        {/* Text Input */}
        <div>
          <label>Text Input:</label>
          <input
            type="text"
            value={formData.text}
            onChange={handleChange('text')}
            placeholder="Matn kiriting..."
            style={{ width: '100%', padding: '5px' }}
          />
          <small>Value: {formData.text}</small>
        </div>
        
        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            placeholder="email@example.com"
            style={{ width: '100%', padding: '5px' }}
          />
        </div>
        
        {/* Password */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={formData.password}
            onChange={handleChange('password')}
            style={{ width: '100%', padding: '5px' }}
          />
          <small>Length: {formData.password.length}</small>
        </div>
        
        {/* Number */}
        <div>
          <label>Number ({formData.number}):</label>
          <input
            type="number"
            value={formData.number}
            onChange={handleChange('number')}
            min="0"
            max="100"
            style={{ width: '100%', padding: '5px' }}
          />
        </div>
        
        {/* Range */}
        <div>
          <label>Range ({formData.range}):</label>
          <input
            type="range"
            value={formData.range}
            onChange={handleChange('range')}
            min="0"
            max="100"
            style={{ width: '100%' }}
          />
        </div>
        
        {/* Date */}
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={formData.date}
            onChange={handleChange('date')}
            style={{ width: '100%', padding: '5px' }}
          />
        </div>
        
        {/* Time */}
        <div>
          <label>Time:</label>
          <input
            type="time"
            value={formData.time}
            onChange={handleChange('time')}
            style={{ width: '100%', padding: '5px' }}
          />
        </div>
        
        {/* Color */}
        <div>
          <label>Color ({formData.color}):</label>
          <input
            type="color"
            value={formData.color}
            onChange={handleChange('color')}
            style={{ width: '100%', height: '40px' }}
          />
        </div>
        
        {/* Textarea */}
        <div>
          <label>Textarea:</label>
          <textarea
            value={formData.textarea}
            onChange={handleChange('textarea')}
            placeholder="Uzun matn..."
            rows="4"
            style={{ width: '100%', padding: '5px' }}
          />
          <small>Characters: {formData.textarea.length}</small>
        </div>
        
        {/* Select */}
        <div>
          <label>Select:</label>
          <select
            value={formData.select}
            onChange={handleChange('select')}
            style={{ width: '100%', padding: '5px' }}
          >
            <option value="">Tanlang...</option>
            <option value="uzbekistan">O'zbekiston</option>
            <option value="kazakhstan">Qozog'iston</option>
            <option value="kyrgyzstan">Qirg'iziston</option>
            <option value="tajikistan">Tojikiston</option>
          </select>
        </div>
        
        {/* Multi Select */}
        <div>
          <label>Multi Select:</label>
          <select
            multiple
            value={formData.multiSelect}
            onChange={handleMultiSelect}
            style={{ width: '100%', padding: '5px', height: '100px' }}
          >
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
            <option value="svelte">Svelte</option>
            <option value="solid">Solid</option>
          </select>
          <small>Selected: {formData.multiSelect.join(', ')}</small>
        </div>
        
        {/* Checkbox */}
        <div>
          <label>
            <input
              type="checkbox"
              checked={formData.checkbox}
              onChange={handleChange('checkbox')}
            />
            Shartlarga roziman
          </label>
        </div>
        
        {/* Radio buttons */}
        <div>
          <label>Gender:</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.radio === 'male'}
                onChange={handleChange('radio')}
              />
              Erkak
            </label>
            <label style={{ marginLeft: '20px' }}>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.radio === 'female'}
                onChange={handleChange('radio')}
              />
              Ayol
            </label>
          </div>
        </div>
        
        {/* File */}
        <div>
          <label>File:</label>
          <input
            type="file"
            onChange={handleChange('file')}
            style={{ width: '100%', padding: '5px' }}
          />
          <small>
            Selected: {formData.file ? formData.file.name : 'Hech narsa tanlanmagan'}
          </small>
        </div>
        
        {/* Buttons */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit" style={{ flex: 1, padding: '10px' }}>
            Yuborish
          </button>
          <button 
            type="button" 
            onClick={handleReset}
            style={{ flex: 1, padding: '10px' }}
          >
            Tozalash
          </button>
        </div>
      </form>
      
      {/* Current state ko'rsatish */}
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f5f5f5' }}>
        <h4>Hozirgi Form State:</h4>
        <pre style={{ fontSize: '12px', overflow: 'auto' }}>
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
}
```

---

### Form Handling Basics

Form bilan ishlashning asosiy qoidalari va patterns.

#### Form Validation

```jsx
function FormValidation() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    terms: false
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case 'username':
        if (!value) return 'Username majburiy';
        if (value.length < 3) return 'Username kamida 3 ta belgi bo\'lishi kerak';
        if (!/^[a-zA-Z0-9_]+$/.test(value)) return 'Username faqat harflar, raqamlar va _ bo\'lishi mumkin';
        return '';
        
      case 'email':
        if (!value) return 'Email majburiy';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Email formati noto\'g\'ri';
        return '';
        
      case 'password':
        if (!value) return 'Password majburiy';
        if (value.length < 6) return 'Password kamida 6 ta belgi bo\'lishi kerak';
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
          return 'Password kamida bitta kichik harf, katta harf va raqam bo\'lishi kerak';
        }
        return '';
        
      case 'confirmPassword':
        if (!value) return 'Password tasdiqlash majburiy';
        if (value !== formData.password) return 'Passwordlar mos kelmaydi';
        return '';
        
      case 'age':
        if (!value) return 'Yosh majburiy';
        const ageNum = Number(value);
        if (isNaN(ageNum) || ageNum < 13 || ageNum > 120) {
          return 'Yosh 13 dan 120 gacha bo\'lishi kerak';
        }
        return '';
        
      case 'terms':
        if (!value) return 'Shartlarni qabul qilish majburiy';
        return '';
        
      default:
        return '';
    }
  };
  
  // Validate all fields
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    return newErrors;
  };
  
  // Handle field change
  const handleChange = (field) => (event) => {
    const value = event.target.type === 'checkbox' 
      ? event.target.checked 
      : event.target.value;
    
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Real-time validation
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  };
  
  // Handle field blur (touched)
  const handleBlur = (field) => () => {
    setTouched(prev => ({ ...prev, [field]: true }));
    
    const error = validateField(field, formData[field]);
    setErrors(prev => ({ ...prev, [field]: error }));
  };
  
  // Handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Mark all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach(field => {
      allTouched[field] = true;
    });
    setTouched(allTouched);
    
    // Validate
    const formErrors = validateForm();
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        alert('Ro\'yxatdan o\'tish muvaffaqiyatli!');
        
        // Reset form
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          age: '',
          terms: false
        });
        setTouched({});
        setErrors({});
        
      } catch (error) {
        alert('Xato yuz berdi!');
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  // Password strength indicator
  const getPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;
    
    const levels = ['Juda zaif', 'Zaif', 'O\'rtacha', 'Kuchli', 'Juda kuchli'];
    const colors = ['#ff4444', '#ff8800', '#ffaa00', '#88cc00', '#00aa00'];
    
    return {
      level: levels[strength - 1] || 'Zaif',
      color: colors[strength - 1] || '#ff4444',
      percent: (strength / 5) * 100
    };
  };
  
  const passwordStrength = getPasswordStrength(formData.password);
  
  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h3>Form Validation misoli</h3>
      
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
        {/* Username */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Username:
          </label>
          <input
            type="text"
            value={formData.username}
            onChange={handleChange('username')}
            onBlur={handleBlur('username')}
            style={{ 
              width: '100%', 
              padding: '10px',
              border: `2px solid ${errors.username && touched.username ? '#ff4444' : '#ddd'}`,
              borderRadius: '4px'
            }}
            placeholder="username123"
          />
          {errors.username && touched.username && (
            <div style={{ color: '#ff4444', fontSize: '14px', marginTop: '5px' }}>
              {errors.username}
            </div>
          )}
        </div>
        
        {/* Email */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Email:
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            style={{ 
              width: '100%', 
              padding: '10px',
              border: `2px solid ${errors.email && touched.email ? '#ff4444' : '#ddd'}`,
              borderRadius: '4px'
            }}
            placeholder="example@email.com"
          />
          {errors.email && touched.email && (
            <div style={{ color: '#ff4444', fontSize: '14px', marginTop: '5px' }}>
              {errors.email}
            </div>
          )}
        </div>
        
        {/* Password */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Password:
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={handleChange('password')}
            onBlur={handleBlur('password')}
            style={{ 
              width: '100%', 
              padding: '10px',
              border: `2px solid ${errors.password && touched.password ? '#ff4444' : '#ddd'}`,
              borderRadius: '4px'
            }}
            placeholder="Kuchli password"
          />
          
          {/* Password strength indicator */}
          {formData.password && (
            <div style={{ marginTop: '5px' }}>
              <div style={{ 
                height: '4px', 
                backgroundColor: '#eee', 
                borderRadius: '2px',
                overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%',
                  backgroundColor: passwordStrength.color,
                  width: `${passwordStrength.percent}%`,
                  transition: 'all 0.3s'
                }} />
              </div>
              <div style={{ 
                fontSize: '12px', 
                color: passwordStrength.color, 
                marginTop: '2px' 
              }}>
                {passwordStrength.level}
              </div>
            </div>
          )}
          
          {errors.password && touched.password && (
            <div style={{ color: '#ff4444', fontSize: '14px', marginTop: '5px' }}>
              {errors.password}
            </div>
          )}
        </div>
        
        {/* Confirm Password */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Confirm Password:
          </label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            style={{ 
              width: '100%', 
              padding: '10px',
              border: `2px solid ${errors.confirmPassword && touched.confirmPassword ? '#ff4444' : '#ddd'}`,
              borderRadius: '4px'
            }}
            placeholder="Passwordni takrorlang"
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <div style={{ color: '#ff4444', fontSize: '14px', marginTop: '5px' }}>
              {errors.confirmPassword}
            </div>
          )}
        </div>
        
        {/* Age */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Yosh:
          </label>
          <input
            type="number"
            value={formData.age}
            onChange={handleChange('age')}
            onBlur={handleBlur('age')}
            style={{ 
              width: '100%', 
              padding: '10px',
              border: `2px solid ${errors.age && touched.age ? '#ff4444' : '#ddd'}`,
              borderRadius: '4px'
            }}
            placeholder="25"
            min="13"
            max="120"
          />
          {errors.age && touched.age && (
            <div style={{ color: '#ff4444', fontSize: '14px', marginTop: '5px' }}>
              {errors.age}
            </div>
          )}
        </div>
        
        {/* Terms */}
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="checkbox"
              checked={formData.terms}
              onChange={handleChange('terms')}
              onBlur={handleBlur('terms')}
            />
            <span>Foydalanish shartlariga roziman</span>
          </label>
          {errors.terms && touched.terms && (
            <div style={{ color: '#ff4444', fontSize: '14px', marginTop: '5px' }}>
              {errors.terms}
            </div>
          )}
        </div>
        
        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: '12px',
            backgroundColor: isSubmitting ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer'
          }}
        >
          {isSubmitting ? 'Yuborilmoqda...' : 'Ro\'yxatdan o\'tish'}
        </button>
      </form>
    </div>
  );
}
```

---

## Amaliy mashqlar

### Mashq 1: Interactive Todo List

```jsx
function InteractiveTodoList() {
  // State'lar va event handlerlarni qo'shing:
  // - todos: todo itemlar ro'yxati
  // - inputValue: yangi todo uchun input
  // - filter: 'all', 'active', 'completed'
  // - editingId: qaysi todo tahrir qilinayotgani
  
  return (
    <div>
      <h2>Interactive Todo List</h2>
      
      {/* Add todo form */}
      <form>
        <input 
          type="text" 
          placeholder="Yangi vazifa qo'shing..."
        />
        <button type="submit">Qo'shish</button>
      </form>
      
      {/* Filter buttons */}
      <div>
        <button>Barchasi</button>
        <button>Faol</button>
        <button>Bajarilgan</button>
      </div>
      
      {/* Todo list */}
      <ul>
        {/* Todo itemlarni render qiling:
            - Double click bilan edit mode
            - Checkbox bilan completed toggle
            - Delete button
        */}
      </ul>
      
      {/* Statistics */}
      <div>
        <span>Jami: 0 ta | Faol: 0 ta | Bajarilgan: 0 ta</span>
        <button>Barchasini o'chirish</button>
      </div>
    </div>
  );
}
```

### Mashq 2: Dynamic Form Builder

```jsx
function DynamicFormBuilder() {
  // Dinamik form yaratish:
  // - Field types: text, email, number, select, checkbox
  // - Add/remove fields
  // - Field validation
  // - Form preview va submit
  
  return (
    <div>
      <h2>Dynamic Form Builder</h2>
      
      {/* Form builder */}
      <div>
        <h3>Form Builder</h3>
        <button>Text Field qo'shish</button>
        <button>Email Field qo'shish</button>
        <button>Number Field qo'shish</button>
        <button>Select Field qo'shish</button>
        <button>Checkbox qo'shish</button>
      </div>
      
      {/* Field list */}
      <div>
        <h3>Fields</h3>
        {/* Field'larni ko'rsating va edit qilish imkoniyati */}
      </div>
      
      {/* Form preview */}
      <div>
        <h3>Form Preview</h3>
        {/* Yaratilgan formni ko'rsating */}
      </div>
    </div>
  );
}
```

### Mashq 3: Real-time Search va Filter

```jsx
function SearchAndFilter() {
  // Real-time search va filter funksionallik:
  // - Search input
  // - Category filter
  // - Price range filter
  // - Sort options
  
  const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
    { id: 3, name: 'Book', category: 'Education', price: 20 },
    // ... more products
  ];
  
  return (
    <div>
      <h2>Product Search va Filter</h2>
      
      {/* Search */}
      <input 
        type="text" 
        placeholder="Mahsulot qidirish..."
      />
      
      {/* Filters */}
      <div>
        <select>
          <option value="">Barcha kategoriyalar</option>
          <option value="Electronics">Elektronika</option>
          <option value="Education">Ta'lim</option>
        </select>
        
        <input type="range" min="0" max="2000" />
        
        <select>
          <option value="name">Nom bo'yicha</option>
          <option value="price-low">Arzon birinchi</option>
          <option value="price-high">Qimmat birinchi</option>
        </select>
      </div>
      
      {/* Results */}
      <div>
        {/* Filtered va sorted products */}
      </div>
    </div>
  );
}
```


</details>

<hr>

<details>
<summary>
Conditional Rendering va Lists
</summary>

## Conditional Rendering va Lists (Day 5-6: Conditional Rendering and Lists)

### Conditional Rendering

Conditional rendering - bu React'da shartlarga asosan turli xil kontentni ko'rsatish usuli. Bu JavaScript'dagi if, && va ternary operatorlari yordamida amalga oshiriladi.

#### If/Else Statements

```jsx
import React, { useState } from 'react';

function UserGreeting({ isLoggedIn, user }) {
  // 1. If/else bilan
  if (isLoggedIn) {
    return (
      <div>
        <h2>Xush kelibsiz, {user.name}!</h2>
        <p>Siz muvaffaqiyatli kirdingiz.</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Iltimos, tizimga kiring</h2>
        <p>Davom etish uchun login qiling.</p>
      </div>
    );
  }
}

function LoginExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: 'Ali Valiyev', email: 'ali@example.com' });

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <UserGreeting isLoggedIn={isLoggedIn} user={user} />
      
      <div style={{ marginTop: '20px' }}>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Chiqish</button>
        ) : (
          <button onClick={handleLogin}>Kirish</button>
        )}
      </div>
    </div>
  );
}
```

#### Ternary Operator

```jsx
function WeatherWidget() {
  const [weather, setWeather] = useState({
    temperature: 25,
    isRaining: false,
    humidity: 60,
    windSpeed: 12
  });

  const [unit, setUnit] = useState('celsius'); // celsius yoki fahrenheit

  const toggleUnit = () => {
    setUnit(prev => prev === 'celsius' ? 'fahrenheit' : 'celsius');
  };

  const getTemperature = () => {
    if (unit === 'fahrenheit') {
      return (weather.temperature * 9/5) + 32;
    }
    return weather.temperature;
  };

  const toggleRain = () => {
    setWeather(prev => ({ ...prev, isRaining: !prev.isRaining }));
  };

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #ddd', 
      borderRadius: '10px',
      maxWidth: '400px',
      margin: '20px auto'
    }}>
      <h3>Ob-havo ma'lumotlari</h3>
      
      {/* Ternary operator bilan conditional rendering */}
      <div style={{ 
        fontSize: '24px', 
        color: weather.isRaining ? '#0066cc' : '#ff6600' 
      }}>
        {weather.isRaining ? '🌧️' : '☀️'} 
        {getTemperature().toFixed(1)}°{unit === 'celsius' ? 'C' : 'F'}
      </div>

      <p>
        <strong>Holat:</strong> {weather.isRaining ? 'Yomg\'ir yog\'moqda' : 'Ochiq havo'}
      </p>

      <p>
        <strong>Namlik:</strong> {weather.humidity}%
      </p>

      <p>
        <strong>Shamol:</strong> {weather.windSpeed} km/h
      </p>

      {/* Ko'p shartli ternary */}
      <div style={{ 
        padding: '10px', 
        backgroundColor: weather.temperature > 30 ? '#ffcccc' : 
                         weather.temperature > 20 ? '#ccffcc' : '#ccccff',
        borderRadius: '5px',
        marginTop: '10px'
      }}>
        <strong>Tavsiya:</strong> {
          weather.temperature > 30 ? 'Juda issiq! Soyada turing.' :
          weather.temperature > 20 ? 'Yaxshi havo, sayr qiling!' :
          'Sovuq, iliq kiyining!'
        }
      </div>

      <div style={{ marginTop: '15px' }}>
        <button onClick={toggleUnit} style={{ marginRight: '10px' }}>
          {unit === 'celsius' ? 'Fahrenheit' : 'Celsius'} ga o'tish
        </button>
        <button onClick={toggleRain}>
          {weather.isRaining ? 'Yomg\'irni to\'xtat' : 'Yomg\'ir boshlat'}
        </button>
      </div>
    </div>
  );
}
```

#### Logical AND (&&) Operator

```jsx
function NotificationCenter() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'info', message: 'Yangi xabar keldi', timestamp: Date.now() - 300000 },
    { id: 2, type: 'warning', message: 'Xotira kam qoldi', timestamp: Date.now() - 600000 },
    { id: 3, type: 'error', message: 'Xatolik yuz berdi', timestamp: Date.now() - 900000 }
  ]);

  const [showSettings, setShowSettings] = useState(false);
  const [filter, setFilter] = useState('all'); // all, info, warning, error

  const addNotification = (type, message) => {
    const newNotification = {
      id: Date.now(),
      type,
      message,
      timestamp: Date.now()
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const getFilteredNotifications = () => {
    if (filter === 'all') return notifications;
    return notifications.filter(notif => notif.type === filter);
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'info': return 'ℹ️';
      case 'warning': return '⚠️';
      case 'error': return '❌';
      default: return '📢';
    }
  };

  const getTimeAgo = (timestamp) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (hours > 0) return `${hours} soat oldin`;
    if (minutes > 0) return `${minutes} daqiqa oldin`;
    return `${seconds} soniya oldin`;
  };

  const filteredNotifications = getFilteredNotifications();

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '500px', 
      margin: '0 auto',
      border: '1px solid #ddd',
      borderRadius: '8px'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h3>Bildirishnomalar ({notifications.length})</h3>
        <button onClick={() => setShowSettings(!showSettings)}>
          ⚙️ Sozlamalar
        </button>
      </div>

      {/* Settings panel - && operator bilan */}
      {showSettings && (
        <div style={{ 
          padding: '15px', 
          backgroundColor: '#f5f5f5', 
          borderRadius: '5px',
          marginBottom: '20px'
        }}>
          <h4>Sozlamalar</h4>
          
          <div style={{ marginBottom: '10px' }}>
            <label>Filter: </label>
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              style={{ marginLeft: '10px' }}
            >
              <option value="all">Barchasi</option>
              <option value="info">Ma'lumot</option>
              <option value="warning">Ogohlantirish</option>
              <option value="error">Xatolik</option>
            </select>
          </div>

          <div>
            <button 
              onClick={() => addNotification('info', 'Test bildirishnoma')}
              style={{ margin: '5px' }}
            >
              Ma'lumot qo'sh
            </button>
            <button 
              onClick={() => addNotification('warning', 'Test ogohlantirish')}
              style={{ margin: '5px' }}
            >
              Ogohlantirish qo'sh
            </button>
            <button 
              onClick={() => addNotification('error', 'Test xatolik')}
              style={{ margin: '5px' }}
            >
              Xatolik qo'sh
            </button>
          </div>
        </div>
      )}

      {/* Empty state - && operator */}
      {notifications.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '40px',
          color: '#666'
        }}>
          <div style={{ fontSize: '48px' }}>📭</div>
          <p>Hech qanday bildirishnoma yo'q</p>
        </div>
      )}

      {/* Filtered empty state */}
      {notifications.length > 0 && filteredNotifications.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '20px',
          color: '#666'
        }}>
          <p>"{filter}" turidagi bildirishnomalar topilmadi</p>
        </div>
      )}

      {/* Clear all button - faqat bildirishnomalar bo'lsa */}
      {notifications.length > 0 && (
        <button 
          onClick={clearAll}
          style={{ 
            marginBottom: '15px',
            backgroundColor: '#ff4444',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px'
          }}
        >
          Barchasini tozala
        </button>
      )}

      {/* Notifications list */}
      {filteredNotifications.map(notification => (
        <div 
          key={notification.id}
          style={{ 
            padding: '12px',
            border: '1px solid #eee',
            borderRadius: '6px',
            marginBottom: '8px',
            backgroundColor: notification.type === 'error' ? '#ffe6e6' :
                           notification.type === 'warning' ? '#fff3cd' : '#e7f3ff'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                <span style={{ marginRight: '8px' }}>
                  {getNotificationIcon(notification.type)}
                </span>
                <strong>{notification.type.toUpperCase()}</strong>
              </div>
              <p style={{ margin: '0 0 5px 0' }}>{notification.message}</p>
              <small style={{ color: '#666' }}>
                {getTimeAgo(notification.timestamp)}
              </small>
            </div>
            <button 
              onClick={() => removeNotification(notification.id)}
              style={{ 
                background: 'none',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer',
                color: '#999'
              }}
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
```

---

### List Rendering

React'da ro'yxatlarni render qilish - bu massivlarni map() metodi orqali JSX elementlariga aylantirish.

#### Basic List Rendering

```jsx
function BasicLists() {
  const fruits = ['Olma', 'Banan', 'Apelsin', 'Uzum', 'Shaftoli'];
  
  const users = [
    { id: 1, name: 'Ali Valiyev', age: 28, city: 'Toshkent' },
    { id: 2, name: 'Gul Karimova', age: 24, city: 'Samarqand' },
    { id: 3, name: 'Vali Toshmatov', age: 30, city: 'Buxoro' },
    { id: 4, name: 'Nargiza Rahimova', age: 26, city: 'Namangan' }
  ];

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Basic List Rendering</h3>
      
      {/* Simple string array */}
      <div style={{ marginBottom: '30px' }}>
        <h4>Mevalar ro'yxati</h4>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index} style={{ margin: '5px 0' }}>
              {index + 1}. {fruit}
            </li>
          ))}
        </ul>
      </div>

      {/* Object array with complex rendering */}
      <div style={{ marginBottom: '30px' }}>
        <h4>Foydalanuvchilar ro'yxati</h4>
        <div style={{ display: 'grid', gap: '10px' }}>
          {users.map(user => (
            <div 
              key={user.id}
              onClick={() => setSelectedUser(user)}
              style={{ 
                padding: '15px',
                border: selectedUser?.id === user.id ? '2px solid #007bff' : '1px solid #ddd',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: selectedUser?.id === user.id ? '#f0f8ff' : 'white'
              }}
            >
              <h5 style={{ margin: '0 0 5px 0' }}>{user.name}</h5>
              <p style={{ margin: '0', color: '#666' }}>
                {user.age} yosh, {user.city}
              </p>
            </div>
          ))}
        </div>

        {/* Selected user details */}
        {selectedUser && (
          <div style={{ 
            marginTop: '20px',
            padding: '20px',
            backgroundColor: '#e7f3ff',
            borderRadius: '8px'
          }}>
            <h4>Tanlangan foydalanuvchi</h4>
            <p><strong>Ism:</strong> {selectedUser.name}</p>
            <p><strong>Yosh:</strong> {selectedUser.age}</p>
            <p><strong>Shahar:</strong> {selectedUser.city}</p>
            <button onClick={() => setSelectedUser(null)}>
              Tanlovni bekor qil
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
```

#### Dynamic Lists with CRUD Operations

```jsx
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'React o\'rganish', completed: false, priority: 'high', dueDate: '2024-12-31' },
    { id: 2, text: 'Loyiha yaratish', completed: false, priority: 'medium', dueDate: '2024-12-25' },
    { id: 3, text: 'Portfolio yangilash', completed: true, priority: 'low', dueDate: '2024-12-20' }
  ]);

  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed
  const [sortBy, setSortBy] = useState('id'); // id, priority, dueDate
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // Add new todo
  const addTodo = () => {
    if (newTodo.trim()) {
      const todo = {
        id: Date.now(),
        text: newTodo,
        completed: false,
        priority: 'medium',
        dueDate: new Date().toISOString().split('T')[0]
      };
      setTodos(prev => [...prev, todo]);
      setNewTodo('');
    }
  };

  // Toggle completion
  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  // Start editing
  const startEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  // Save edit
  const saveEdit = () => {
    setTodos(prev => prev.map(todo =>
      todo.id === editingId ? { ...todo, text: editText } : todo
    ));
    setEditingId(null);
    setEditText('');
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  // Update priority
  const updatePriority = (id, priority) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, priority } : todo
    ));
  };

  // Filter todos
  const getFilteredTodos = () => {
    let filtered = todos;
    
    // Apply filter
    if (filter === 'active') {
      filtered = filtered.filter(todo => !todo.completed);
    } else if (filter === 'completed') {
      filtered = filtered.filter(todo => todo.completed);
    }

    // Apply sorting
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'dueDate':
          return new Date(a.dueDate) - new Date(b.dueDate);
        default:
          return a.id - b.id;
      }
    });
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ff4444';
      case 'medium': return '#ffaa00';
      case 'low': return '#44aa44';
      default: return '#999';
    }
  };

  const filteredTodos = getFilteredTodos();
  const completedCount = todos.filter(todo => todo.completed).length;
  const activeCount = todos.length - completedCount;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Advanced Todo List</h2>

      {/* Statistics */}
      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <div><strong>Jami:</strong> {todos.length}</div>
        <div><strong>Faol:</strong> {activeCount}</div>
        <div><strong>Bajarilgan:</strong> {completedCount}</div>
        <div><strong>Foiz:</strong> {todos.length ? Math.round((completedCount / todos.length) * 100) : 0}%</div>
      </div>

      {/* Add new todo */}
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        marginBottom: '20px'
      }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Yangi vazifa qo'shing..."
          style={{ 
            flex: 1, 
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
        <button 
          onClick={addTodo}
          style={{ 
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Qo'shish
        </button>
      </div>

      {/* Filters and sorting */}
      <div style={{ 
        display: 'flex', 
        gap: '15px', 
        marginBottom: '20px',
        alignItems: 'center'
      }}>
        <div>
          <label>Filter: </label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Barchasi</option>
            <option value="active">Faol</option>
            <option value="completed">Bajarilgan</option>
          </select>
        </div>

        <div>
          <label>Saralash: </label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="id">ID bo'yicha</option>
            <option value="priority">Muhimlik bo'yicha</option>
            <option value="dueDate">Muddat bo'yicha</option>
          </select>
        </div>
      </div>

      {/* Empty state */}
      {filteredTodos.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '40px',
          color: '#666'
        }}>
          {todos.length === 0 ? 
            '📝 Hech qanday vazifa yo\'q. Yangi vazifa qo\'shing!' :
            `🔍 "${filter}" holatidagi vazifalar topilmadi.`
          }
        </div>
      )}

      {/* Todos list */}
      <div style={{ display: 'grid', gap: '10px' }}>
        {filteredTodos.map(todo => (
          <div 
            key={todo.id}
            style={{ 
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: todo.completed ? '#f8f9fa' : 'white',
              opacity: todo.completed ? 0.7 : 1
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{ transform: 'scale(1.2)' }}
              />

              {/* Todo text */}
              <div style={{ flex: 1 }}>
                {editingId === todo.id ? (
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      style={{ flex: 1, padding: '5px' }}
                      autoFocus
                    />
                    <button onClick={saveEdit} style={{ backgroundColor: '#28a745', color: 'white', border: 'none', padding: '5px 10px' }}>✓</button>
                    <button onClick={cancelEdit} style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px' }}>✕</button>
                  </div>
                ) : (
                  <span 
                    style={{ 
                      textDecoration: todo.completed ? 'line-through' : 'none',
                      cursor: 'pointer'
                    }}
                    onDoubleClick={() => startEdit(todo.id, todo.text)}
                  >
                    {todo.text}
                  </span>
                )}
              </div>

              {/* Priority indicator */}
              <div style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%',
                backgroundColor: getPriorityColor(todo.priority),
                title: `Muhimlik: ${todo.priority}`
              }} />

              {/* Priority selector */}
              <select
                value={todo.priority}
                onChange={(e) => updatePriority(todo.id, e.target.value)}
                style={{ padding: '2px' }}
              >
                <option value="low">Kam</option>
                <option value="medium">O'rta</option>
                <option value="high">Yuqori</option>
              </select>

              {/* Due date */}
              <small style={{ color: '#666', minWidth: '80px' }}>
                {new Date(todo.dueDate).toLocaleDateString()}
              </small>

              {/* Action buttons */}
              <button 
                onClick={() => startEdit(todo.id, todo.text)}
                style={{ 
                  backgroundColor: '#ffc107',
                  color: 'white',
                  border: 'none',
                  padding: '5px 8px',
                  borderRadius: '3px',
                  marginRight: '5px'
                }}
              >
                ✏️
              </button>

              <button 
                onClick={() => deleteTodo(todo.id)}
                style={{ 
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  padding: '5px 8px',
                  borderRadius: '3px'
                }}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bulk actions */}
      {todos.length > 0 && (
        <div style={{ 
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <button 
            onClick={() => setTodos(prev => prev.map(todo => ({ ...todo, completed: true })))}
            style={{ margin: '0 5px', padding: '8px 16px' }}
          >
            Barchasini belgilash
          </button>
          <button 
            onClick={() => setTodos(prev => prev.map(todo => ({ ...todo, completed: false })))}
            style={{ margin: '0 5px', padding: '8px 16px' }}
          >
            Barchasini bekor qilish
          </button>
          <button 
            onClick={() => setTodos(prev => prev.filter(todo => !todo.completed))}
            style={{ 
              margin: '0 5px', 
              padding: '8px 16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            Bajarilganlarni o'chirish
          </button>
        </div>
      )}
    </div>
  );
}
```

---

### Keys in React Lists

React'da ro'yxatlarda keys'ning ahamiyati va to'g'ri ishlatilishi.

#### Keys nima uchun muhim?

```jsx
function KeysDemo() {
  const [items, setItems] = useState([
    { id: 1, name: 'Birinchi element', value: Math.random() },
    { id: 2, name: 'Ikkinchi element', value: Math.random() },
    { id: 3, name: 'Uchinchi element', value: Math.random() }
  ]);

  const [showBadExample, setShowBadExample] = useState(false);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      name: `Element ${items.length + 1}`,
      value: Math.random()
    };
    setItems(prev => [newItem, ...prev]); // Boshiga qo'shish
  };

  const removeFirst = () => {
    setItems(prev => prev.slice(1));
  };

  const shuffleItems = () => {
    setItems(prev => [...prev].sort(() => Math.random() - 0.5));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Keys in React Lists</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={addItem} style={{ margin: '5px' }}>
          Element qo'shish
        </button>
        <button onClick={removeFirst} style={{ margin: '5px' }}>
          Birinchisini o'chirish
        </button>
        <button onClick={shuffleItems} style={{ margin: '5px' }}>
          Aralashtirish
        </button>
        <button 
          onClick={() => setShowBadExample(!showBadExample)}
          style={{ 
            margin: '5px',
            backgroundColor: showBadExample ? '#dc3545' : '#28a745',
            color: 'white',
            border: 'none',
            padding: '8px 12px'
          }}
        >
          {showBadExample ? 'Yaxshi misol' : 'Yomon misol'}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* To'g'ri usul - unique ID key */}
        <div>
          <h4 style={{ color: '#28a745' }}>✅ To'g'ri: ID key ishlatish</h4>
          <div style={{ border: '2px solid #28a745', padding: '10px', borderRadius: '5px' }}>
            {items.map(item => (
              <ItemComponent 
                key={item.id} // Unique va stable ID
                item={item}
                color="#e7f5e7"
              />
            ))}
          </div>
        </div>

        {/* Noto'g'ri usul - index key yoki key yo'q */}
        <div>
          <h4 style={{ color: '#dc3545' }}>❌ Noto'g'ri: Index key ishlatish</h4>
          <div style={{ border: '2px solid #dc3545', padding: '10px', borderRadius: '5px' }}>
            {showBadExample ? (
              items.map((item, index) => (
                <ItemComponent 
                  key={index} // Index - noto'g'ri!
                  item={item}
                  color="#ffe7e7"
                />
              ))
            ) : (
              items.map(item => (
                <ItemComponent 
                  key={item.id}
                  item={item}
                  color="#e7f5e7"
                />
              ))
            )}
          </div>
        </div>
      </div>

      <div style={{ 
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '5px'
      }}>
        <h4>Keys haqida qoidalar:</h4>
        <ul>
          <li><strong>Unique bo'lishi kerak:</strong> Bir ro'yxatda barcha key'lar unique bo'lishi zarur</li>
          <li><strong>Stable bo'lishi kerak:</strong> Re-render vaqtida o'zgarmasligi kerak</li>
          <li><strong>Index ishlatmang:</strong> Agar elementlar order o'zgarsa, performance muammolari bo'ladi</li>
          <li><strong>Random value ishlatmang:</strong> Har safar yangi key yaratiladi</li>
          <li><strong>ID yoki unique property ishlatifn:</strong> Database ID yoki unique string</li>
        </ul>
      </div>
    </div>
  );
}

// Helper component to demonstrate key behavior
function ItemComponent({ item, color }) {
  const [inputValue, setInputValue] = useState('');
  const [renderTime] = useState(new Date().toLocaleTimeString());

  return (
    <div style={{ 
      padding: '10px',
      margin: '5px 0',
      backgroundColor: color,
      borderRadius: '4px',
      border: '1px solid #ddd'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <strong>{item.name}</strong>
          <br />
          <small>Value: {item.value.toFixed(4)}</small>
          <br />
          <small>Rendered: {renderTime}</small>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Test input..."
          style={{ width: '120px', padding: '4px' }}
        />
      </div>
    </div>
  );
}
```

#### Key Patterns va Best Practices

```jsx
function KeyPatterns() {
  const [products, setProducts] = useState([
    { id: 'p1', name: 'Laptop', category: 'Electronics', stock: 5 },
    { id: 'p2', name: 'Phone', category: 'Electronics', stock: 10 },
    { id: 'p3', name: 'Book', category: 'Education', stock: 20 }
  ]);

  const [categories, setCategories] = useState(['Electronics', 'Education', 'Clothing']);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Nested lists - har bir list uchun alohida key space
  const getProductsByCategory = () => {
    if (selectedCategory === 'All') {
      return categories.map(category => ({
        category,
        products: products.filter(p => p.category === category)
      }));
    } else {
      return [{
        category: selectedCategory,
        products: products.filter(p => p.category === selectedCategory)
      }];
    }
  };

  const addProduct = (category) => {
    const newProduct = {
      id: `p${Date.now()}`, // Unique ID pattern
      name: `Yangi mahsulot ${Date.now()}`,
      category,
      stock: Math.floor(Math.random() * 20) + 1
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const removeProduct = (productId) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Key Patterns va Best Practices</h3>

      {/* Category filter */}
      <div style={{ marginBottom: '20px' }}>
        <label>Kategoriya: </label>
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">Barchasi</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Nested lists with proper keys */}
      <div>
        {getProductsByCategory().map(categoryGroup => (
          <div 
            key={categoryGroup.category} // Category level key
            style={{ 
              marginBottom: '30px',
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '8px'
            }}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '15px'
            }}>
              <h4>{categoryGroup.category} ({categoryGroup.products.length})</h4>
              <button 
                onClick={() => addProduct(categoryGroup.category)}
                style={{ 
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '4px'
                }}
              >
                Mahsulot qo'shish
              </button>
            </div>

            {categoryGroup.products.length === 0 ? (
              <p style={{ color: '#666', fontStyle: 'italic' }}>
                Bu kategoriyada mahsulot yo'q
              </p>
            ) : (
              <div style={{ display: 'grid', gap: '10px' }}>
                {categoryGroup.products.map(product => (
                  <div 
                    key={product.id} // Product level key - unique across all categories
                    style={{ 
                      padding: '12px',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '6px',
                      border: '1px solid #eee',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <strong>{product.name}</strong>
                      <br />
                      <small>Stok: {product.stock} dona</small>
                    </div>
                    <button 
                      onClick={() => removeProduct(product.id)}
                      style={{ 
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        padding: '6px 10px',
                        borderRadius: '4px'
                      }}
                    >
                      O'chirish
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Key patterns examples */}
      <div style={{ 
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h4>Key Patterns</h4>
        <div style={{ display: 'grid', gap: '10px' }}>
          <div>
            <strong>✅ Yaxshi key patterns:</strong>
            <ul>
              <li><code>key={`product-${product.id}`}</code> - Prefix bilan unique ID</li>
              <li><code>key={user.email}</code> - Natural unique identifier</li>
              <li><code>key={`${category}-${product.id}`}</code> - Composite key</li>
              <li><code>key={item.slug || item.id}</code> - Fallback key</li>
            </ul>
          </div>
          
          <div>
            <strong>❌ Yomon key patterns:</strong>
            <ul>
              <li><code>key={index}</code> - Index ishlatish (order o'zgarsa muammo)</li>
              <li><code>key={Math.random()}</code> - Random key (har safar yangi)</li>
              <li><code>key={new Date().getTime()}</code> - Time-based key</li>
              <li><code>key={JSON.stringify(item)}</code> - Object serialization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## Amaliy mashqlar

### Mashq 1: Dynamic Product Filter

```jsx
function ProductFilter() {
  // Implement a product filtering system with:
  // - Multiple filter criteria (category, price range, rating)
  // - Search functionality
  // - Sorting options
  // - Conditional rendering for empty states
  
  const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000, rating: 4.5 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 500, rating: 4.2 },
    { id: 3, name: 'Book', category: 'Education', price: 20, rating: 4.8 },
    { id: 4, name: 'Shirt', category: 'Clothing', price: 30, rating: 4.0 },
    // Add more products...
  ];

  return (
    <div>
      <h2>Product Filter</h2>
      
      {/* Filters */}
      <div>
        {/* Search input */}
        {/* Category select */}
        {/* Price range slider */}
        {/* Rating filter */}
        {/* Sort options */}
      </div>
      
      {/* Results */}
      <div>
        {/* Product grid with conditional rendering */}
        {/* Empty state */}
        {/* Loading state */}
      </div>
    </div>
  );
}
```

### Mashq 2: Comment System

```jsx
function CommentSystem() {
  // Create a nested comment system with:
  // - Add new comments
  // - Reply to comments (nested structure)
  // - Like/dislike functionality
  // - Edit/delete comments
  // - Conditional rendering for different states
  
  return (
    <div>
      <h2>Comment System</h2>
      
      {/* Add comment form */}
      <div>
        {/* Comment input */}
        {/* Submit button */}
      </div>
      
      {/* Comments list */}
      <div>
        {/* Render comments recursively */}
        {/* Handle nested replies */}
        {/* Show/hide replies */}
      </div>
    </div>
  );
}
```

### Mashq 3: Real-time Dashboard

```jsx
function Dashboard() {
  // Build a dashboard with:
  // - Multiple data widgets
  // - Conditional rendering based on user permissions
  // - Dynamic chart rendering
  // - Real-time data updates simulation
  // - Different layouts for different user types
  
  return (
    <div>
      <h2>Real-time Dashboard</h2>
      
      {/* User info and permissions */}
      <div>
        {/* User profile */}
        {/* Permission-based menu */}
      </div>
      
      {/* Widgets grid */}
      <div>
        {/* Render widgets based on user permissions */}
        {/* Conditional widget content */}
        {/* Loading and error states */}
      </div>
    </div>
  );
}
```


</details>

<hr>

<details>
<summary>

</summary>
# React Tutorial - Hafta 3, 1-2 kun

## useEffect va Side Effects (Day 1-2: useEffect and Side Effects)

### useEffect Hook nima va nima uchun kerak?

useEffect - bu React'dagi eng muhim Hook'lardan biri bo'lib, functional komponentlarda **side effects** (yon ta'sirlar) ni boshqarish uchun ishlatiladi. Side effects deb quyidagi amaliyotlarga aytiladi:

- **API'dan ma'lumot olish** (data fetching)
- **DOM'ni to'g'ridan-to'g'ri o'zgartirish** (document title, focus management)
- **Timer'lar va interval'lar** o'rnatish va tozalash
- **Event listener'lar** qo'shish va olib tashlash
- **Subscription'lar** (WebSocket, external libraries)
- **Local storage** ga ma'lumot saqlash

Oddiy qilib aytganda, useEffect komponentning **lifecycle** (hayot davri) ni boshqarish imkonini beradi. Class komponentlardagi `componentDidMount`, `componentDidUpdate`, va `componentWillUnmount` metodlarining kombinatsiyasi deb qarash mumkin.

#### useEffect ishlatmasdan oldin

```jsx
// ❌ Bu noto'g'ri - functional komponentda to'g'ridan-to'g'ri side effect
function BadExample() {
  const [count, setCount] = useState(0);
  
  // Bu kod har render'da ishlaydi - bu xato!
  document.title = `Count: ${count}`;
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

Bu kod muammo tug'diradi chunki `document.title = ...` har safar komponent render bo'lganda ishlaydi. Bu performance muammolariga olib kelishi mumkin.

#### useEffect bilan to'g'ri usul

```jsx
import React, { useState, useEffect } from 'react';

// ✅ Bu to'g'ri - useEffect ichida side effect
function GoodExample() {
  const [count, setCount] = useState(0);
  
  // useEffect hook
  useEffect(() => {
    // Side effect - document title'ni o'zgartirish
    document.title = `Count: ${count}`;
  }, [count]); // Dependency array
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

---

### useEffect sintaksisi va asosiy tushunchalar

useEffect ikkita asosiy parametr oladi:

```jsx
useEffect(effect, dependencies)
```

1. **effect** - ishlatilishi kerak bo'lgan funksiya (callback)
2. **dependencies** - dependency array (ixtiyoriy)

#### 1. Asosiy sintaksis

```jsx
function ExampleComponent() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    console.log('Effect ishladi!');
    // Bu yerda side effect kodlari yoziladi
  });
  
  return <div>Component content</div>;
}
```

#### 2. Dependency array bilan

```jsx
function ExampleComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  // Faqat count o'zgarsa ishlaydi
  useEffect(() => {
    console.log('Count o\'zgardi:', count);
  }, [count]);
  
  // Faqat name o'zgarsa ishlaydi
  useEffect(() => {
    console.log('Name o\'zgardi:', name);
  }, [name]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button onClick={() => setCount(count + 1)}>Count++</button>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Ismingizni kiriting"
      />
    </div>
  );
}
```

#### 3. Cleanup funksiyasi bilan

```jsx
function TimerComponent() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    console.log('Timer boshlandi');
    
    // Timer o'rnatish
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    
    // Cleanup funksiyasi - komponent unmount bo'lganda yoki effect qayta ishlaganda
    return () => {
      console.log('Timer tozalandi');
      clearInterval(interval);
    };
  }, []); // Bo'sh dependency array - faqat mount/unmount da
  
  return <div>Seconds: {seconds}</div>;
}
```

---

### useEffect turlariga batafsil qarash

useEffect uch xil tarzda ishlatilishi mumkin va har birining o'ziga xos vazifasi bor.

#### 1. Dependency array'siz useEffect (har render'da ishlaydi)

```jsx
function EveryRenderEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  // Bu effect har render'da ishlaydi
  useEffect(() => {
    console.log('Component render bo\'ldi');
    console.log('Count:', count, 'Name:', name);
  }); // Dependency array yo'q
  
  return (
    <div style={{ padding: '20px' }}>
      <h3>Har Render'da Ishlaydigan Effect</h3>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      
      <button onClick={() => setCount(count + 1)}>
        Count Oshir
      </button>
      
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ism kiriting"
        style={{ marginLeft: '10px', padding: '5px' }}
      />
      
      <div style={{ 
        marginTop: '10px', 
        padding: '10px', 
        backgroundColor: '#ffe6e6',
        borderRadius: '5px'
      }}>
        <strong>Diqqat:</strong> Bu effect har safar komponent render bo'lganda ishlaydi. 
        Bu performance muammolariga olib kelishi mumkin!
      </div>
    </div>
  );
}
```

**Qachon ishlatiladi:** Juda kam hollarda, odatda debugging uchun. Production kodda ishlatmaslik tavsiya etiladi.

#### 2. Bo'sh dependency array bilan useEffect (faqat mount/unmount da)

```jsx
function MountUnmountEffect() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Bu effect faqat komponent mount bo'lganda ishlaydi
  useEffect(() => {
    console.log('Komponent mount bo\'ldi - ma\'lumot yuklanmoqda...');
    
    // Data fetching simulation
    setLoading(true);
    setError(null);
    
    // Fake API call
    const fetchData = async () => {
      try {
        // 2 soniya kutish (server response simulation)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Fake data
        const fakeData = {
          users: [
            { id: 1, name: 'Ali Valiyev', email: 'ali@example.com' },
            { id: 2, name: 'Gul Karimova', email: 'gul@example.com' },
            { id: 3, name: 'Vali Toshmatov', email: 'vali@example.com' }
          ],
          timestamp: new Date().toLocaleString()
        };
        
        setData(fakeData);
        setLoading(false);
        console.log('Ma\'lumot muvaffaqiyatli yuklandi!');
      } catch (err) {
        setError('Ma\'lumot yuklanishda xatolik yuz berdi');
        setLoading(false);
        console.error('Xatolik:', err);
      }
    };
    
    fetchData();
    
    // Cleanup funksiyasi - komponent unmount bo'lganda
    return () => {
      console.log('Komponent unmount bo\'ldi - tozalash...');
      // Bu yerda cleanup qilish kerak bo'lgan resurslar bo'lsa
      setLoading(false);
    };
  }, []); // Bo'sh dependency array
  
  return (
    <div style={{ padding: '20px' }}>
      <h3>Mount/Unmount Effect (Data Fetching)</h3>
      
      {loading && (
        <div style={{ 
          padding: '20px', 
          textAlign: 'center', 
          backgroundColor: '#e7f3ff',
          borderRadius: '5px'
        }}>
          <div>📡 Ma'lumot yuklanmoqda...</div>
          <div style={{ marginTop: '10px' }}>Iltimos, kuting...</div>
        </div>
      )}
      
      {error && (
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#ffe6e6',
          color: '#d00',
          borderRadius: '5px'
        }}>
          ❌ {error}
        </div>
      )}
      
      {data && !loading && (
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#e8f5e8',
          borderRadius: '5px'
        }}>
          <h4>📊 Yuklangan ma'lumotlar:</h4>
          <p><strong>Yuklangan vaqt:</strong> {data.timestamp}</p>
          
          <h5>👥 Foydalanuvchilar:</h5>
          <ul>
            {data.users.map(user => (
              <li key={user.id}>
                <strong>{user.name}</strong> - {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: '#f0f8ff',
        borderRadius: '5px'
      }}>
        <strong>Tushuntirish:</strong> Bu effect faqat komponent birinchi marta render bo'lganda (mount) ishlaydi. 
        Bu API'dan ma'lumot olish uchun juda mos keladi.
      </div>
    </div>
  );
}
```

**Qachon ishlatiladi:** 
- API'dan ma'lumot olish
- Event listener'lar o'rnatish
- Timer/interval boshlash
- Third-party library'larni initialize qilish

#### 3. Dependency array bilan useEffect (faqat ma'lum qiymatlar o'zgarsa)

```jsx
function DependencyEffect() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  
  // Faqat searchTerm yoki category o'zgarsa ishlaydi
  useEffect(() => {
    // Bo'sh qidiruv so'zi bo'lsa hech narsa qilmaymiz
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }
    
    console.log(`Qidiruv boshlandi: "${searchTerm}" kategoriasida "${category}"`);
    setIsSearching(true);
    
    // Fake search function
    const performSearch = async () => {
      try {
        // Qidiruv simulatsiyasi
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Fake data based on search
        const allProducts = [
          { id: 1, name: 'iPhone 14', category: 'electronics', price: 999 },
          { id: 2, name: 'Samsung Galaxy', category: 'electronics', price: 899 },
          { id: 3, name: 'MacBook Pro', category: 'electronics', price: 1999 },
          { id: 4, name: 'React Kitob', category: 'books', price: 29 },
          { id: 5, name: 'JavaScript Darsligi', category: 'books', price: 39 },
          { id: 6, name: 'Sport Kiyim', category: 'clothing', price: 59 },
          { id: 7, name: 'Casual Shirt', category: 'clothing', price: 25 }
        ];
        
        // Filter by category
        let filteredProducts = category === 'all' 
          ? allProducts 
          : allProducts.filter(product => product.category === category);
        
        // Filter by search term
        filteredProducts = filteredProducts.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        setResults(filteredProducts);
        setIsSearching(false);
        
        // Add to search history
        const searchEntry = {
          id: Date.now(),
          term: searchTerm,
          category: category,
          resultCount: filteredProducts.length,
          timestamp: new Date().toLocaleTimeString()
        };
        
        setSearchHistory(prev => [searchEntry, ...prev.slice(0, 4)]); // Keep only last 5
        
        console.log(`Qidiruv tugadi: ${filteredProducts.length} ta natija topildi`);
        
      } catch (error) {
        console.error('Qidiruv xatosi:', error);
        setIsSearching(false);
      }
    };
    
    performSearch();
    
  }, [searchTerm, category]); // searchTerm yoki category o'zgarsa ishlaydi
  
  // Search history uchun alohida effect (faqat searchHistory o'zgarsa)
  useEffect(() => {
    if (searchHistory.length > 0) {
      console.log('Qidiruv tarixi yangilandi:', searchHistory.length, 'ta yozuv');
      
      // Local storage ga saqlash
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }
  }, [searchHistory]);
  
  // Component mount bo'lganda local storage'dan history'ni olish
  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      try {
        const parsedHistory = JSON.parse(savedHistory);
        setSearchHistory(parsedHistory);
        console.log('Qidiruv tarixi local storage\'dan yuklandi');
      } catch (error) {
        console.error('Local storage\'dan ma\'lumot olishda xatolik:', error);
      }
    }
  }, []);
  
  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };
  
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h3>🔍 Dependency Effect - Qidiruv Tizimi</h3>
      
      {/* Search inputs */}
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Mahsulot qidiring..."
          style={{ 
            flex: 1, 
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            fontSize: '16px'
          }}
        />
        
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ 
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            fontSize: '16px'
          }}
        >
          <option value="all">Barcha kategoriyalar</option>
          <option value="electronics">Elektronika</option>
          <option value="books">Kitoblar</option>
          <option value="clothing">Kiyim</option>
        </select>
      </div>
      
      {/* Search status */}
      {isSearching && (
        <div style={{ 
          padding: '15px', 
          backgroundColor: '#e7f3ff',
          borderRadius: '5px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          🔍 Qidirilmoqda... "{searchTerm}" ({category})
        </div>
      )}
      
      {/* Search results */}
      {!isSearching && searchTerm && (
        <div style={{ marginBottom: '20px' }}>
          <h4>📊 Qidiruv natijalari ({results.length} ta):</h4>
          
          {results.length === 0 ? (
            <div style={{ 
              padding: '20px', 
              textAlign: 'center',
              backgroundColor: '#fff3cd',
              borderRadius: '5px'
            }}>
              🤷‍♂️ "{searchTerm}" uchun hech narsa topilmadi
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '10px' }}>
              {results.map(product => (
                <div 
                  key={product.id}
                  style={{ 
                    padding: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <h5 style={{ margin: '0 0 5px 0' }}>{product.name}</h5>
                    <small style={{ color: '#666', textTransform: 'capitalize' }}>
                      {product.category}
                    </small>
                  </div>
                  <div style={{ 
                    fontSize: '18px', 
                    fontWeight: 'bold',
                    color: '#28a745'
                  }}>
                    ${product.price}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      
      {/* Search history */}
      {searchHistory.length > 0 && (
        <div style={{ 
          padding: '15px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '10px'
          }}>
            <h4 style={{ margin: 0 }}>📚 Qidiruv tarixi</h4>
            <button 
              onClick={clearHistory}
              style={{ 
                padding: '5px 10px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                fontSize: '12px'
              }}
            >
              Tozalash
            </button>
          </div>
          
          <div style={{ display: 'grid', gap: '5px' }}>
            {searchHistory.map(entry => (
              <div 
                key={entry.id}
                style={{ 
                  padding: '8px',
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  fontSize: '14px',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <span>
                  "{entry.term}" dalam {entry.category} 
                  ({entry.resultCount} natija)
                </span>
                <span style={{ color: '#666' }}>{entry.timestamp}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: '#e8f5e8',
        borderRadius: '5px'
      }}>
        <strong>💡 Tushuntirish:</strong> Bu komponentda uchta useEffect ishlatilgan:
        <ul style={{ marginTop: '10px', marginBottom: 0 }}>
          <li><strong>Birinchisi:</strong> searchTerm yoki category o'zgarsa qidiruv amalga oshiradi</li>
          <li><strong>Ikkinchisi:</strong> searchHistory o'zgarsa local storage'ga saqlaydi</li>
          <li><strong>Uchinchisi:</strong> Component mount bo'lganda tarikhni yuklaydi</li>
        </ul>
      </div>
    </div>
  );
}
```

**Qachon ishlatiladi:**
- Ma'lum state o'zgarishiga javob berish
- Computed values ni hisoblash
- API so'rovlarini filter parametrlar bilan yuborish

---

### Cleanup funksiyalari batafsil

Cleanup funksiyalari React'da memory leak'larni oldini olish va resurslarni to'g'ri boshqarish uchun juda muhim.

#### Memory leak'lar va ularning oldini olish

```jsx
function LeakPreventionDemo() {
  const [activeTab, setActiveTab] = useState('timer');
  const [showComponent, setShowComponent] = useState(true);
  
  return (
    <div style={{ padding: '20px' }}>
      <h3>🛡️ Memory Leak Prevention</h3>
      
      {/* Component visibility toggle */}
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setShowComponent(!showComponent)}
          style={{ 
            padding: '10px 20px',
            backgroundColor: showComponent ? '#dc3545' : '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          {showComponent ? 'Komponentni Yashirish' : 'Komponentni Ko\'rsatish'}
        </button>
      </div>
      
      {/* Tab navigation */}
      <div style={{ marginBottom: '20px' }}>
        {['timer', 'api', 'events', 'websocket'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '8px 16px',
              margin: '0 5px',
              backgroundColor: activeTab === tab ? '#007bff' : '#e9ecef',
              color: activeTab === tab ? 'white' : '#495057',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>
      
      {showComponent && (
        <div>
          {activeTab === 'timer' && <TimerLeakExample />}
          {activeTab === 'api' && <APILeakExample />}
          {activeTab === 'events' && <EventLeakExample />}
          {activeTab === 'websocket' && <WebSocketLeakExample />}
        </div>
      )}
    </div>
  );
}

// 1. Timer leak prevention
function TimerLeakExample() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let interval = null;
    
    if (isRunning) {
      console.log('⏱️ Timer boshlandi');
      interval = setInterval(() => {
        setCount(prevCount => {
          const newCount = prevCount + 1;
          console.log('Timer tick:', newCount);
          return newCount;
        });
      }, 1000);
    }
    
    // Cleanup function - juda muhim!
    return () => {
      if (interval) {
        console.log('🧹 Timer tozalandi');
        clearInterval(interval);
      }
    };
  }, [isRunning]);
  
  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #17a2b8',
      borderRadius: '8px',
      backgroundColor: '#e7f8ff'
    }}>
      <h4>⏱️ Timer Management</h4>
      
      <div style={{ fontSize: '24px', margin: '10px 0' }}>
        Count: {count}
      </div>
      
      <button 
        onClick={() => setIsRunning(!isRunning)}
        style={{ 
          padding: '10px 20px',
          backgroundColor: isRunning ? '#dc3545' : '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          marginRight: '10px'
        }}
      >
        {isRunning ? 'To\'xtatish' : 'Boshlash'}
      </button>
      
      <button 
        onClick={() => setCount(0)}
        style={{ 
          padding: '10px 20px',
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Reset
      </button>
      
      <div style={{ 
        marginTop: '15px', 
        padding: '10px',
        backgroundColor: '#fff3cd',
        borderRadius: '5px',
        fontSize: '14px'
      }}>
        <strong>💡 Nima bo'ladi:</strong>
        <ul style={{ margin: '5px 0' }}>
          <li>Timer boshlanganda setInterval o'rnatiladi</li>
          <li>Component unmount bo'lganda yoki isRunning false bo'lganda clearInterval chaqiriladi</li>
          <li>Bu memory leak'ning oldini oladi</li>
        </ul>
      </div>
    </div>
  );
}

// 2. API call cleanup
function APILeakExample() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState(null);
  
  const fetchUsers = async () => {
    // Previous request'ni bekor qilish
    if (controller) {
      controller.abort();
    }
    
    // Yangi AbortController yaratish
    const newController = new AbortController();
    setController(newController);
    
    setLoading(true);
    setUsers([]);
    
    try {
      console.log('🌐 API so\'rovi boshlandi');
      
      // Fake API call with AbortController
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        signal: newController.signal
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      
      // Component hali ham mount bo'lganiga ishonch hosil qilish
      if (!newController.signal.aborted) {
        setUsers(data.slice(0, 5)); // Faqat birinchi 5 ta user
        console.log('✅ API so\'rovi muvaffaqiyatli tugadi');
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('🚫 API so\'rovi bekor qilindi');
      } else {
        console.error('❌ API xatosi:', error);
      }
    } finally {
      if (!newController.signal.aborted) {
        setLoading(false);
      }
    }
  };
  
  useEffect(() => {
    // Component mount bo'lganda ma'lumot olish
    fetchUsers();
    
    // Cleanup function
    return () => {
      if (controller) {
        console.log('🧹 API so\'rovi bekor qilindi (cleanup)');
        controller.abort();
      }
    };
  }, []); // Bo'sh dependency array
  
  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #28a745',
      borderRadius: '8px',
      backgroundColor: '#e8f5e8'
    }}>
      <h4>🌐 API Call Management</h4>
      
      <button 
        onClick={fetchUsers}
        disabled={loading}
        style={{ 
          padding: '10px 20px',
          backgroundColor: loading ? '#6c757d' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          marginBottom: '15px'
        }}
      >
        {loading ? 'Yuklanmoqda...' : 'Foydalanuvchilarni Yuklash'}
      </button>
      
      {loading && (
        <div style={{ 
          padding: '10px',
          backgroundColor: '#e7f3ff',
          borderRadius: '5px',
          marginBottom: '15px'
        }}>
          📡 Ma'lumot yuklanmoqda...
        </div>
      )}
      
      {users.length > 0 && (
        <div>
          <h5>👥 Foydalanuvchilar:</h5>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <strong>{user.name}</strong> ({user.email})
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div style={{ 
        marginTop: '15px', 
        padding: '10px',
        backgroundColor: '#fff3cd',
        borderRadius: '5px',
        fontSize: '14px'
      }}>
        <strong>💡 AbortController qanday ishlaydi:</strong>
        <ul style={{ margin: '5px 0' }}>
          <li>Har bir API so'rovi uchun yangi AbortController yaratiladi</li>
          <li>Component unmount bo'lganda yoki yangi so'rov boshlaganda eski so'rov bekor qilinadi</li>
          <li>Bu orphaned API call'larning oldini oladi</li>
        </ul>
      </div>
    </div>
  );
}

// 3. Event listener cleanup
function EventLeakExample() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [keyPressed, setKeyPressed] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  
  useEffect(() => {
    if (!isTracking) return;
    
    console.log('🖱️ Event listener'lar qo\'shildi');
    
    // Mouse move handler
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    
    // Keyboard handler
    const handleKeyPress = (event) => {
      setKeyPressed(event.key);
      // 2 soniyadan keyin kalitni tozalash
      setTimeout(() => setKeyPressed(''), 2000);
    };
    
    // Resize handler
    const handleResize = () => {
      console.log('📐 Window size:', window.innerWidth, 'x', window.innerHeight);
    };
    
    // Event listener'larni qo'shish
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('keydown', handleKeyPress);
    window.addEventListener('resize', handleResize);
    
    // Cleanup function - muhim!
    return () => {
      console.log('🧹 Event listener\'lar olib tashlandi');
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('resize', handleResize);
    };
  }, [isTracking]);
  
  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #fd7e14',
      borderRadius: '8px',
      backgroundColor: '#fff8e1'
    }}>
      <h4>🖱️ Event Listener Management</h4>
      
      <button 
        onClick={() => setIsTracking(!isTracking)}
        style={{ 
          padding: '10px 20px',
          backgroundColor: isTracking ? '#dc3545' : '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          marginBottom: '15px'
        }}
      >
        {isTracking ? 'Kuzatuvni To\'xtatish' : 'Kuzatuvni Boshlash'}
      </button>
      
      {isTracking && (
        <div style={{ 
          padding: '15px',
          backgroundColor: '#e7f3ff',
          borderRadius: '5px'
        }}>
          <div style={{ marginBottom: '10px' }}>
            <strong>🖱️ Mouse pozitsiyasi:</strong> X: {mousePosition.x}, Y: {mousePosition.y}
          </div>
          
          {keyPressed && (
            <div style={{ marginBottom: '10px' }}>
              <strong>⌨️ Bosilgan kalit:</strong> "{keyPressed}"
            </div>
          )}
          
          <div style={{ fontSize: '14px', color: '#666' }}>
            Sichqonchani harakatlantiring yoki biror kalitni bosing...
          </div>
        </div>
      )}
      
      <div style={{ 
        marginTop: '15px', 
        padding: '10px',
        backgroundColor: '#fff3cd',
        borderRadius: '5px',
        fontSize: '14px'
      }}>
        <strong>💡 Event cleanup'ning ahamiyati:</strong>
        <ul style={{ margin: '5px 0' }}>
          <li>Document va window'ga qo'shilgan listener'lar komponent unmount bo'lganda ham qoladi</li>
          <li>Cleanup qilinmasa memory leak va unexpected behavior bo'lishi mumkin</li>
          <li>removeEventListener addEventListener bilan bir xil funksiya olishi kerak</li>
        </ul>
      </div>
    </div>
  );
}

// 4. WebSocket connection cleanup
function WebSocketLeakExample() {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('disconnected');
  
  useEffect(() => {
    if (!isConnected) return;
    
    console.log('🔌 WebSocket ulanishi boshlandi');
    setConnectionStatus('connecting');
    
    // WebSocket simulation (real WebSocket'ga o'xshash)
    let ws = null;
    let heartbeatInterval = null;
    
    const connect = () => {
      try {
        // Real loyihada: ws = new WebSocket('wss://your-websocket-url');
        
        // Simulation
        setTimeout(() => {
          setConnectionStatus('connected');
          console.log('✅ WebSocket ulandi');
          
          // Simulate incoming messages
          heartbeatInterval = setInterval(() => {
            const message = {
              id: Date.now(),
              text: `Server xabari ${new Date().toLocaleTimeString()}`,
              timestamp: new Date().toLocaleTimeString()
            };
            
            setMessages(prev => [message, ...prev.slice(0, 9)]); // Keep only 10 messages
            console.log('📨 Yangi xabar:', message.text);
          }, 3000);
          
        }, 1000);
        
      } catch (error) {
        console.error('❌ WebSocket ulanish xatosi:', error);
        setConnectionStatus('error');
      }
    };
    
    connect();
    
    // Cleanup function - juda muhim!
    return () => {
      console.log('🧹 WebSocket ulanishi yopilmoqda');
      
      if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
      }
      
      if (ws) {
        ws.close();
      }
      
      setConnectionStatus('disconnected');
      setMessages([]);
    };
  }, [isConnected]);
  
  const getStatusColor = () => {
    switch (connectionStatus) {
      case 'connected': return '#28a745';
      case 'connecting': return '#ffc107';
      case 'error': return '#dc3545';
      default: return '#6c757d';
    }
  };
  
  const getStatusIcon = () => {
    switch (connectionStatus) {
      case 'connected': return '🟢';
      case 'connecting': return '🟡';
      case 'error': return '🔴';
      default: return '⚫';
    }
  };
  
  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #6f42c1',
      borderRadius: '8px',
      backgroundColor: '#f8f0ff'
    }}>
      <h4>🔌 WebSocket Connection Management</h4>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '15px',
        marginBottom: '15px'
      }}>
        <button 
          onClick={() => setIsConnected(!isConnected)}
          style={{ 
            padding: '10px 20px',
            backgroundColor: isConnected ? '#dc3545' : '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          {isConnected ? 'Ulanishni Uzish' : 'Ulanishni Boshlash'}
        </button>
        
        <div style={{ 
          padding: '8px 15px',
          backgroundColor: getStatusColor(),
          color: 'white',
          borderRadius: '20px',
          fontSize: '14px'
        }}>
          {getStatusIcon()} {connectionStatus.toUpperCase()}
        </div>
      </div>
      
      {connectionStatus === 'connecting' && (
        <div style={{ 
          padding: '10px',
          backgroundColor: '#fff3cd',
          borderRadius: '5px',
          marginBottom: '15px'
        }}>
          ⏳ Server'ga ulanmoqda...
        </div>
      )}
      
      {connectionStatus === 'connected' && messages.length > 0 && (
        <div style={{ 
          maxHeight: '200px',
          overflowY: 'auto',
          border: '1px solid #ddd',
          borderRadius: '5px',
          backgroundColor: 'white'
        }}>
          <div style={{ 
            padding: '10px',
            backgroundColor: '#e7f3ff',
            borderBottom: '1px solid #ddd',
            fontWeight: 'bold'
          }}>
            📨 Real-time xabarlar
          </div>
          
          {messages.map(message => (
            <div 
              key={message.id}
              style={{ 
                padding: '10px',
                borderBottom: '1px solid #eee'
              }}
            >
              <div style={{ fontSize: '14px' }}>{message.text}</div>
              <div style={{ fontSize: '12px', color: '#666' }}>
                {message.timestamp}
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div style={{ 
        marginTop: '15px', 
        padding: '10px',
        backgroundColor: '#fff3cd',
        borderRadius: '5px',
        fontSize: '14px'
      }}>
        <strong>💡 WebSocket cleanup'ning ahamiyati:</strong>
        <ul style={{ margin: '5px 0' }}>
          <li>WebSocket connection'lar server'da ham resource'larni band qiladi</li>
          <li>Cleanup qilinmasa server'da orphaned connection'lar qoladi</li>
          <li>Interval'lar va event listener'lar ham tozalanishi kerak</li>
        </ul>
      </div>
    </div>
  );
}
```

---

### Data Fetching va API Integration

useEffect'ning eng keng qo'llaniladigan joylaridan biri - bu API'dan ma'lumot olish (data fetching).

#### Real API bilan ishlash patterns

```jsx
function DataFetchingMaster() {
  const [activeExample, setActiveExample] = useState('basic');
  
  const examples = [
    { id: 'basic', name: 'Asosiy Fetching', icon: '📊' },
    { id: 'loading', name: 'Loading States', icon: '⏳' },
    { id: 'error', name: 'Error Handling', icon: '⚠️' },
    { id: 'pagination', name: 'Pagination', icon: '📄' },
    { id: 'search', name: 'Search & Filter', icon: '🔍' },
    { id: 'cache', name: 'Caching Strategy', icon: '💾' }
  ];
  
  return (
    <div style={{ padding: '20px' }}>
      <h3>🌐 Data Fetching va API Integration</h3>
      
      {/* Example selector */}
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        marginBottom: '30px',
        flexWrap: 'wrap'
      }}>
        {examples.map(example => (
          <button
            key={example.id}
            onClick={() => setActiveExample(example.id)}
            style={{
              padding: '10px 15px',
              backgroundColor: activeExample === example.id ? '#007bff' : '#e9ecef',
              color: activeExample === example.id ? 'white' : '#495057',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            {example.icon} {example.name}
          </button>
        ))}
      </div>
      
      {/* Example components */}
      {activeExample === 'basic' && <BasicDataFetching />}
      {activeExample === 'loading' && <LoadingStatesExample />}
      {activeExample === 'error' && <ErrorHandlingExample />}
      {activeExample === 'pagination' && <PaginationExample />}
      {activeExample === 'search' && <SearchFilterExample />}
      {activeExample === 'cache' && <CachingExample />}
    </div>
  );
}

// 1. Basic data fetching
function BasicDataFetching() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    console.log('📡 Basic API call boshlandi');
    
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setPosts(data);
        console.log('✅ Ma\'lumot muvaffaqiyatli yuklandi:', data.length, 'ta post');
      } catch (error) {
        console.error('❌ API xatosi:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []); // Bo'sh dependency array - faqat mount da
  
  if (loading) {
    return (
      <div style={{ 
        padding: '40px', 
        textAlign: 'center',
        backgroundColor: '#e7f3ff',
        borderRadius: '8px'
      }}>
        <div style={{ fontSize: '24px' }}>⏳</div>
        <div>Ma'lumot yuklanmoqda...</div>
      </div>
    );
  }
  
  return (
    <div style={{ 
      border: '2px solid #007bff',
      borderRadius: '8px',
      padding: '20px',
      backgroundColor: '#f8f9ff'
    }}>
      <h4>📊 Asosiy Data Fetching</h4>
      
      <div style={{ marginBottom: '15px' }}>
        <strong>Yuklangan postlar soni:</strong> {posts.length}
      </div>
      
      <div style={{ display: 'grid', gap: '15px' }}>
        {posts.map(post => (
          <div 
            key={post.id}
            style={{ 
              padding: '15px',
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #ddd'
            }}
          >
            <h5 style={{ margin: '0 0 10px 0', color: '#007bff' }}>
              {post.id}. {post.title}
            </h5>
            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
              {post.body.substring(0, 100)}...
            </p>
          </div>
        ))}
      </div>
      
      <div style={{ 
        marginTop: '20px', 
        padding: '15px',
        backgroundColor: '#e8f5e8',
        borderRadius: '5px'
      }}>
        <strong>💡 Basic Pattern:</strong>
        <ul style={{ margin: '10px 0 0 0' }}>
          <li>useEffect bo'sh dependency array bilan ishlatiladi</li>
          <li>async/await pattern bilan API call</li>
          <li>try/catch error handling</li>
          <li>finally block'da loading false qilinadi</li>
        </ul>
      </div>
    </div>
  );
}

// 2. Advanced loading states
function LoadingStatesExample() {
  const [users, setUsers] = useState([]);
  const [loadingState, setLoadingState] = useState('idle'); // idle, loading, success, error
  const [progress, setProgress] = useState(0);
  
  const fetchUsers = async () => {
    setLoadingState('loading');
    setProgress(0);
    setUsers([]);
    
    try {
      console.log('👥 Foydalanuvchilar yuklanmoqda...');
      
      // Progress simulation
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 10;
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 200);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!response.ok) {
        throw new Error(`API xatosi: ${response.status}`);
      }
      
      const data = await response.json();
      
      clearInterval(progressInterval);
      setProgress(100);
      
      setTimeout(() => {
        setUsers(data);
        setLoadingState('success');
        console.log('✅ Foydalanuvchilar muvaffaqiyatli yuklandi');
      }, 500);
      
    } catch (error) {
      setLoadingState('error');
      setProgress(0);
      console.error('❌ Xatolik:', error);
    }
  };
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
  const renderContent = () => {
    switch (loadingState) {
      case 'loading':
        return (
          <div style={{ 
            padding: '30px', 
            textAlign: 'center',
            backgroundColor: '#e7f3ff',
            borderRadius: '8px'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '15px' }}>📡</div>
            <div style={{ fontSize: '18px', marginBottom: '20px' }}>
              Ma'lumot yuklanmoqda...
            </div>
            
            {/* Progress bar */}
            <div style={{ 
              width: '100%',
              height: '10px',
              backgroundColor: '#e9ecef',
              borderRadius: '5px',
              overflow: 'hidden',
              marginBottom: '10px'
            }}>
              <div style={{
                width: `${progress}%`,
                height: '100%',
                backgroundColor: '#007bff',
                transition: 'width 0.3s ease'
              }} />
            </div>
            
            <div style={{ fontSize: '14px', color: '#666' }}>
              {progress}% tugallandi
            </div>
          </div>
        );
        
      case 'error':
        return (
          <div style={{ 
            padding: '30px', 
            textAlign: 'center',
            backgroundColor: '#ffe6e6',
            borderRadius: '8px'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '15px' }}>⚠️</div>
            <div style={{ fontSize: '18px', marginBottom: '15px', color: '#d00' }}>
              Ma'lumot yuklashda xatolik!
            </div>
            <button 
              onClick={fetchUsers}
              style={{ 
                padding: '10px 20px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '5px'
              }}
            >
              Qayta urinish
            </button>
          </div>
        );
        
      case 'success':
        return (
          <div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <h4 style={{ margin: 0 }}>
                👥 Foydalanuvchilar ({users.length})
              </h4>
              <button 
                onClick={fetchUsers}
                style={{ 
                  padding: '8px 16px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px'
                }}
              >
                🔄 Yangilash
              </button>
            </div>
            
            <div style={{ display: 'grid', gap: '10px' }}>
              {users.map(user => (
                <div 
                  key={user.id}
                  style={{ 
                    padding: '15px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 'bold' }}>{user.name}</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>
                      {user.email}
                    </div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    {user.company.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div style={{ 
      border: '2px solid #28a745',
      borderRadius: '8px',
      padding: '20px',
      backgroundColor: '#f8fff8'
    }}>
      <h4>⏳ Advanced Loading States</h4>
      
      {renderContent()}
      
      <div style={{ 
        marginTop: '20px', 
        padding: '15px',
        backgroundColor: '#e8f5e8',
        borderRadius: '5px'
      }}>
        <strong>💡 Loading States Pattern:</strong>
        <ul style={{ margin: '10px 0 0 0' }}>
          <li><strong>idle:</strong> Hech narsa yuklanmagan</li>
          <li><strong>loading:</strong> Ma'lumot yuklanmoqda (progress bar bilan)</li>
          <li><strong>success:</strong> Ma'lumot muvaffaqiyatli yuklandi</li>
          <li><strong>error:</strong> Xatolik yuz berdi (retry button bilan)</li>
        </ul>
      </div>
    </div>
  );
}

// 3. Error handling strategies
function ErrorHandlingExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [apiEndpoint, setApiEndpoint] = useState('users');
  
  const apiEndpoints = {
    users: 'https://jsonplaceholder.typicode.com/users',
    posts: 'https://jsonplaceholder.typicode.com/posts?_limit=5',
    invalid: 'https://jsonplaceholder.typicode.com/invalid-endpoint',
    timeout: 'https://httpstat.us/200?sleep=10000' // 10 second delay
  };
  
  const fetchData = async (endpoint, retries = 3) => {
    setLoading(true);
    setError(null);
    setData(null);
    
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        console.log(`🔄 Urinish ${attempt}/${retries}: ${endpoint}`);
        
        // Timeout controller
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
        
        const response = await fetch(apiEndpoints[endpoint], {
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const result = await response.json();
        
        setData(result);
        setLoading(false);
        setRetryCount(attempt - 1);
        console.log('✅ Ma\'lumot muvaffaqiyatli yuklandi');
        return; // Success, exit the retry loop
        
      } catch (err) {
        console.error(`❌ Urinish ${attempt} muvaffaqiyatsiz:`, err.message);
        
        if (attempt === retries) {
          // Final attempt failed
          setError({
            message: err.message,
            attempts: attempt,
            timestamp: new Date().toLocaleString()
          });
          setRetryCount(attempt - 1);
        } else {
          // Wait before retry (exponential backoff)
          const waitTime = Math.pow(2, attempt) * 1000; // 2s, 4s, 8s...
          console.log(`⏳ ${waitTime/1000} soniya kutish...`);
          await new Promise(resolve => setTimeout(resolve, waitTime));
        }
      }
    }
    
    setLoading(false);
  };
  
  useEffect(() => {
    fetchData(apiEndpoint);
  }, [apiEndpoint]);
  
  const getErrorType = (errorMessage) => {
    if (errorMessage.includes('aborted')) return { icon: '⏰', type: 'Timeout' };
    if (errorMessage.includes('404')) return { icon: '🔍', type: 'Not Found' };
    if (errorMessage.includes('500')) return { icon: '🛠️', type: 'Server Error' };
    if (errorMessage.includes('Failed to fetch')) return { icon: '🌐', type: 'Network Error' };
    return { icon: '❌', type: 'Unknown Error' };
  };
  
  return (
    <div style={{ 
      border: '2px solid #dc3545',
      borderRadius: '8px',
      padding: '20px',
      backgroundColor: '#fff8f8'
    }}>
      <h4>⚠️ Error Handling Strategies</h4>
      
      {/* API endpoint selector */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
          Test API Endpoint:
        </label>
        <select 
          value={apiEndpoint}
          onChange={(e) => setApiEndpoint(e.target.value)}
          style={{ 
            padding: '8px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            marginRight: '10px'
          }}
        >
          <option value="users">✅ Valid Users API</option>
          <option value="posts">✅ Valid Posts API</option>
          <option value="invalid">❌ Invalid Endpoint (404)</option>
          <option value="timeout">⏰ Timeout Test (10s delay)</option>
        </select>
        
        <button 
          onClick={() => fetchData(apiEndpoint)}
          disabled={loading}
          style={{ 
            padding: '8px 16px',
            backgroundColor: loading ? '#6c757d' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          {loading ? 'Yuklanmoqda...' : 'Qayta yuklash'}
        </button>
      </div>
      
      {/* Loading state */}
      {loading && (
        <div style={{ 
          padding: '20px', 
          textAlign: 'center',
          backgroundColor: '#e7f3ff',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '10px' }}>⏳</div>
          <div>API'dan ma'lumot olinmoqda...</div>
          {retryCount > 0 && (
            <div style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>
              Qayta urinishlar: {retryCount}
            </div>
          )}
        </div>
      )}
      
      {/* Error state */}
      {error && (
        <div style={{ 
          padding: '20px',
          backgroundColor: '#ffe6e6',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '15px'
          }}>
            <span style={{ fontSize: '24px', marginRight: '10px' }}>
              {getErrorType(error.message).icon}
            </span>
            <div>
              <div style={{ fontWeight: 'bold', color: '#d00' }}>
                {getErrorType(error.message).type}
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>
                {error.message}
              </div>
            </div>
          </div>
          
          <div style={{ 
            fontSize: '12px', 
            color: '#666',
            marginBottom: '15px'
          }}>
            <div>Urinishlar soni: {error.attempts}</div>
            <div>Vaqt: {error.timestamp}</div>
          </div>
          
          <button 
            onClick={() => fetchData(apiEndpoint)}
            style={{ 
              padding: '8px 16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            🔄 Qayta urinish
          </button>
        </div>
      )}
      
      {/* Success state */}
      {data && !loading && !error && (
        <div style={{ 
          padding: '20px',
          backgroundColor: '#e8f5e8',
          borderRadius: '8px'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '15px'
          }}>
            <span style={{ fontSize: '24px', marginRight: '10px' }}>✅</span>
            <div>
              <div style={{ fontWeight: 'bold', color: '#28a745' }}>
                Ma'lumot muvaffaqiyatli yuklandi
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>
                {Array.isArray(data) ? `${data.length} ta yozuv` : 'Obyekt ma\'lumoti'}
              </div>
            </div>
          </div>
          
          <div style={{ 
            maxHeight: '200px',
            overflowY: 'auto',
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ddd'
          }}>
            <pre style={{ fontSize: '12px', margin: 0 }}>
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        </div>
      )}
      
      <div style={{ 
        marginTop: '20px', 
        padding: '15px',
        backgroundColor: '#fff3cd',
        borderRadius: '5px'
      }}>
        <strong>💡 Error Handling Best Practices:</strong>
        <ul style={{ margin: '10px 0 0 0' }}>
          <li><strong>Retry Logic:</strong> Exponential backoff bilan qayta urinish</li>
          <li><strong>Timeout:</strong> Uzoq kutishning oldini olish</li>
          <li><strong>User Feedback:</strong> Aniq xato xabarlari</li>
          <li><strong>Graceful Degradation:</strong> Fallback content ko'rsatish</li>
        </ul>
      </div>
    </div>
  );
}

// Pagination example va boshqa complex patterns keyingi qismda davom etadi...
```



</details>

<hr>

<details>
<summary>
        Advanced useEffect
</summary>
# React Tutorial - Hafta 3, 3-4 kun

## Advanced useEffect (Day 3-4: Advanced useEffect)

### API calls bilan ishlashning professional usullari

API call'lar - bu zamonaviy React ilovalarining markaziy qismi. useEffect orqali API'lar bilan to'g'ri ishlash, xatolarni boshqarish va foydalanuvchi tajribasini yaxshilash juda muhim ko'nikmalardir.

#### API call'larning asosiy muammolari

Real loyihalarda API call'lar quyidagi muammolarga duch kelishi mumkin:

1. **Network latency** - Internetning sekinligi
2. **Server errors** - 500, 404, 503 kabi xatolar
3. **Rate limiting** - Juda ko'p so'rov yuborish
4. **Component unmounting** - API javob kelguncha komponent yo'q bo'lib ketishi
5. **Concurrent requests** - Bir nechta so'rov bir vaqtda
6. **Cache invalidation** - Eski ma'lumotlar muammosi

#### Professional API call pattern'i

```jsx
import React, { useState, useEffect, useCallback } from 'react';

function ProfessionalApiPattern() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  
  // API call funksiyasi - useCallback bilan optimized
  const fetchData = useCallback(async (url, options = {}) => {
    const {
      retries = 3,
      timeout = 10000,
      retryDelay = 1000
    } = options;
    
    setLoading(true);
    setError(null);
    
    // AbortController har bir so'rov uchun
    const controller = new AbortController();
    
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        console.log(`🔄 API so'rov, urinish ${attempt}/${retries}`);
        
        // Timeout promise
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Request timeout')), timeout)
        );
        
        // Fetch promise
        const fetchPromise = fetch(url, {
          ...options,
          signal: controller.signal,
          headers: {
            'Content-Type': 'application/json',
            ...options.headers
          }
        });
        
        // Race between fetch and timeout
        const response = await Promise.race([fetchPromise, timeoutPromise]);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const result = await response.json();
        
        setData(result);
        setRetryCount(attempt - 1);
        setLoading(false);
        console.log('✅ API so\'rov muvaffaqiyatli');
        
        return result; // Success
        
      } catch (err) {
        console.error(`❌ Urinish ${attempt} muvaffaqiyatsiz:`, err.message);
        
        if (err.name === 'AbortError') {
          console.log('🚫 So\'rov bekor qilindi');
          return null;
        }
        
        if (attempt === retries) {
          // Final attempt failed
          setError({
            message: err.message,
            attempts: attempt,
            timestamp: new Date().toLocaleString(),
            canRetry: !err.message.includes('404')
          });
          setRetryCount(attempt - 1);
        } else {
          // Wait before retry (exponential backoff)
          const waitTime = retryDelay * Math.pow(2, attempt - 1);
          console.log(`⏳ ${waitTime/1000} soniya kutish...`);
          await new Promise(resolve => setTimeout(resolve, waitTime));
        }
      }
    }
    
    setLoading(false);
    
    // Cleanup function return qilish
    return () => {
      controller.abort();
    };
  }, []);
  
  // Component mount bo'lganda API call
  useEffect(() => {
    const cleanup = fetchData('https://jsonplaceholder.typicode.com/posts?_limit=8');
    
    // Cleanup function
    return () => {
      if (typeof cleanup === 'function') {
        cleanup();
      }
    };
  }, [fetchData]);
  
  const handleRetry = () => {
    fetchData('https://jsonplaceholder.typicode.com/posts?_limit=8');
  };
  
  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h3>🚀 Professional API Call Pattern</h3>
      
      {/* Loading state */}
      {loading && (
        <div style={{ 
          padding: '30px', 
          textAlign: 'center',
          backgroundColor: '#e7f3ff',
          borderRadius: '12px',
          marginBottom: '20px',
          border: '2px solid #007bff'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '15px' }}>⏳</div>
          <div style={{ fontSize: '20px', marginBottom: '10px', fontWeight: 'bold' }}>
            Ma'lumot yuklanmoqda...
          </div>
          {retryCount > 0 && (
            <div style={{ fontSize: '14px', color: '#666' }}>
              Qayta urinishlar: {retryCount}
            </div>
          )}
          <div style={{ 
            marginTop: '15px',
            fontSize: '14px',
            color: '#007bff'
          }}>
            🔄 Exponential backoff strategy ishlamoqda
          </div>
        </div>
      )}
      
      {/* Error state */}
      {error && (
        <div style={{ 
          padding: '25px',
          backgroundColor: '#ffe6e6',
          borderRadius: '12px',
          marginBottom: '20px',
          border: '2px solid #dc3545'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            marginBottom: '15px'
          }}>
            <span style={{ fontSize: '32px', marginRight: '15px' }}>⚠️</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold', color: '#d00', fontSize: '18px' }}>
                API Xatolik
              </div>
              <div style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>
                {error.message}
              </div>
            </div>
          </div>
          
          <div style={{ 
            fontSize: '12px', 
            color: '#666',
            marginBottom: '15px',
            backgroundColor: '#fff',
            padding: '10px',
            borderRadius: '5px'
          }}>
            <div>📊 Urinishlar: {error.attempts}</div>
            <div>⏰ Vaqt: {error.timestamp}</div>
            <div>🔄 Qayta urinish mumkin: {error.canRetry ? 'Ha' : 'Yo\'q'}</div>
          </div>
          
          {error.canRetry && (
            <button 
              onClick={handleRetry}
              style={{ 
                padding: '12px 24px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              🔄 Qayta urinish
            </button>
          )}
        </div>
      )}
      
      {/* Success state */}
      {data && !loading && !error && (
        <div style={{ 
          padding: '25px',
          backgroundColor: '#e8f5e8',
          borderRadius: '12px',
          border: '2px solid #28a745'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '32px' }}>✅</span>
              <div>
                <div style={{ fontWeight: 'bold', color: '#28a745', fontSize: '18px' }}>
                  Ma'lumot muvaffaqiyatli yuklandi
                </div>
                <div style={{ fontSize: '14px', color: '#666' }}>
                  {Array.isArray(data) ? `${data.length} ta post` : 'Data ready'}
                </div>
              </div>
            </div>
            
            <button 
              onClick={handleRetry}
              style={{ 
                padding: '8px 16px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              🔄 Yangilash
            </button>
          </div>
          
          <div style={{ display: 'grid', gap: '15px' }}>
            {Array.isArray(data) && data.slice(0, 4).map(post => (
              <div 
                key={post.id}
                style={{ 
                  padding: '15px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                <h5 style={{ margin: '0 0 8px 0', color: '#007bff' }}>
                  {post.id}. {post.title}
                </h5>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                  {post.body.substring(0, 120)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div style={{ 
        marginTop: '25px', 
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #ddd'
      }}>
        <strong>🎯 Professional Pattern Features:</strong>
        <ul style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>
          <li><strong>Exponential Backoff:</strong> Har urinishda kutish vaqti oshadi</li>
          <li><strong>AbortController:</strong> So'rovlarni bekor qilish imkoniyati</li>
          <li><strong>Timeout Handling:</strong> Uzoq kutishni cheklash</li>
          <li><strong>Error Classification:</strong> Qayta urinish mumkinligini aniqlash</li>
          <li><strong>Detailed Logging:</strong> Debug qilish uchun to'liq ma'lumot</li>
        </ul>
      </div>
    </div>
  );
}
```

---

### Loading States - Professional Approach

Loading states foydalanuvchi tajribasining muhim qismidir. Faqat "yuklanmoqda..." ko'rsatish kifoya emas.

#### Advanced Loading States

```jsx
function AdvancedLoadingStates() {
  const [loadingState, setLoadingState] = useState('idle');
  const [progress, setProgress] = useState(0);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [estimatedTime, setEstimatedTime] = useState(null);
  
  // Loading states enum
  const LOADING_STATES = {
    IDLE: 'idle',
    INITIALIZING: 'initializing',
    FETCHING: 'fetching',
    PROCESSING: 'processing',
    FINALIZING: 'finalizing',
    SUCCESS: 'success',
    ERROR: 'error'
  };
  
  const fetchWithDetailedProgress = async () => {
    const startTime = Date.now();
    setError(null);
    setData(null);
    setProgress(0);
    
    try {
      // Phase 1: Initializing
      setLoadingState(LOADING_STATES.INITIALIZING);
      setEstimatedTime(5);
      await simulateDelay(800);
      setProgress(20);
      
      // Phase 2: Fetching
      setLoadingState(LOADING_STATES.FETCHING);
      setEstimatedTime(4);
      
      // Simulate chunked data fetching
      for (let i = 20; i < 60; i += 10) {
        await simulateDelay(300);
        setProgress(i);
        const remainingTime = Math.max(1, 5 - Math.floor((Date.now() - startTime) / 1000));
        setEstimatedTime(remainingTime);
      }
      
      // Actual API call
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Failed to fetch');
      const users = await response.json();
      
      // Phase 3: Processing
      setLoadingState(LOADING_STATES.PROCESSING);
      setProgress(70);
      setEstimatedTime(2);
      
      // Simulate data processing
      await simulateDelay(1000);
      setProgress(90);
      
      // Phase 4: Finalizing
      setLoadingState(LOADING_STATES.FINALIZING);
      setEstimatedTime(1);
      await simulateDelay(500);
      setProgress(100);
      
      // Success
      setData(users);
      setLoadingState(LOADING_STATES.SUCCESS);
      setEstimatedTime(null);
      
    } catch (err) {
      setError(err.message);
      setLoadingState(LOADING_STATES.ERROR);
      setProgress(0);
      setEstimatedTime(null);
    }
  };
  
  const simulateDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  const getLoadingMessage = () => {
    switch (loadingState) {
      case LOADING_STATES.INITIALIZING:
        return '🔧 Tizim tayyorlanmoqda...';
      case LOADING_STATES.FETCHING:
        return '📡 Server bilan bog\'lanmoqda...';
      case LOADING_STATES.PROCESSING:
        return '⚙️ Ma\'lumotlar qayta ishlanmoqda...';
      case LOADING_STATES.FINALIZING:
        return '✨ Yakunlanmoqda...';
      default:
        return '⏳ Yuklanmoqda...';
    }
  };
  
  const getProgressColor = () => {
    if (progress < 30) return '#ff6b6b';
    if (progress < 70) return '#ffa502';
    return '#26de81';
  };
  
  useEffect(() => {
    fetchWithDetailedProgress();
  }, []);
  
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h3>📊 Advanced Loading States</h3>
      
      {/* Loading UI */}
      {(loadingState !== LOADING_STATES.SUCCESS && loadingState !== LOADING_STATES.ERROR) && (
        <div style={{ 
          padding: '30px',
          backgroundColor: '#f8f9fa',
          borderRadius: '15px',
          textAlign: 'center',
          marginBottom: '20px',
          border: '2px solid #e9ecef'
        }}>
          {/* Animated loading icon */}
          <div style={{ 
            fontSize: '48px', 
            marginBottom: '20px',
            animation: 'pulse 2s infinite'
          }}>
            {loadingState === LOADING_STATES.INITIALIZING && '🔧'}
            {loadingState === LOADING_STATES.FETCHING && '📡'}
            {loadingState === LOADING_STATES.PROCESSING && '⚙️'}
            {loadingState === LOADING_STATES.FINALIZING && '✨'}
          </div>
          
          {/* Loading message */}
          <div style={{ 
            fontSize: '18px', 
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#495057'
          }}>
            {getLoadingMessage()}
          </div>
          
          {/* Progress bar */}
          <div style={{ 
            width: '100%',
            height: '8px',
            backgroundColor: '#e9ecef',
            borderRadius: '4px',
            overflow: 'hidden',
            marginBottom: '15px'
          }}>
            <div style={{
              width: `${progress}%`,
              height: '100%',
              backgroundColor: getProgressColor(),
              transition: 'all 0.3s ease',
              borderRadius: '4px'
            }} />
          </div>
          
          {/* Progress percentage */}
          <div style={{ 
            fontSize: '16px',
            color: '#6c757d',
            marginBottom: '10px'
          }}>
            {progress}% tugallandi
          </div>
          
          {/* Estimated time */}
          {estimatedTime && (
            <div style={{ 
              fontSize: '14px',
              color: '#868e96'
            }}>
              Taxminan {estimatedTime} soniya qoldi
            </div>
          )}
          
          {/* Loading phases indicator */}
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            gap: '10px'
          }}>
            {Object.values(LOADING_STATES).slice(1, -2).map((state, index) => (
              <div
                key={state}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: loadingState === state ? '#007bff' : 
                                 Object.values(LOADING_STATES).indexOf(loadingState) > index + 1 ? '#28a745' : '#dee2e6',
                  border: '2px solid white',
                  boxShadow: '0 0 0 1px #dee2e6'
                }}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Success state */}
      {loadingState === LOADING_STATES.SUCCESS && data && (
        <div style={{ 
          padding: '25px',
          backgroundColor: '#d4edda',
          borderRadius: '12px',
          border: '2px solid #28a745'
        }}>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <span style={{ fontSize: '32px', marginRight: '15px' }}>🎉</span>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#155724' }}>
                Muvaffaqiyatli yuklandi!
              </div>
              <div style={{ fontSize: '14px', color: '#6c757d' }}>
                {data.length} ta foydalanuvchi ma'lumoti olindi
              </div>
            </div>
          </div>
          
          <div style={{ display: 'grid', gap: '12px' }}>
            {data.slice(0, 3).map(user => (
              <div 
                key={user.id}
                style={{ 
                  padding: '15px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: '1px solid #c3e6cb'
                }}
              >
                <div style={{ fontWeight: 'bold' }}>{user.name}</div>
                <div style={{ fontSize: '14px', color: '#6c757d' }}>
                  {user.email} • {user.company.name}
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => setLoadingState(LOADING_STATES.IDLE)}
            style={{ 
              marginTop: '15px',
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            🔄 Qayta yuklash
          </button>
        </div>
      )}
      
      {/* Error state */}
      {loadingState === LOADING_STATES.ERROR && (
        <div style={{ 
          padding: '25px',
          backgroundColor: '#f8d7da',
          borderRadius: '12px',
          border: '2px solid #dc3545'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <span style={{ fontSize: '32px', marginRight: '15px' }}>💥</span>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#721c24' }}>
                Xatolik yuz berdi
              </div>
              <div style={{ fontSize: '14px', color: '#6c757d' }}>
                {error}
              </div>
            </div>
          </div>
          
          <button 
            onClick={fetchWithDetailedProgress}
            style={{ 
              padding: '12px 24px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            🔄 Qayta urinish
          </button>
        </div>
      )}
      
      <div style={{ 
        marginTop: '25px', 
        padding: '20px',
        backgroundColor: '#e7f3ff',
        borderRadius: '8px'
      }}>
        <strong>💡 Advanced Loading Features:</strong>
        <ul style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>
          <li><strong>Multi-phase Loading:</strong> Har xil bosqichlar ko'rsatish</li>
          <li><strong>Progress Visualization:</strong> Aniq progress bar</li>
          <li><strong>Time Estimation:</strong> Qolgan vaqtni hisoblash</li>
          <li><strong>Visual Feedback:</strong> Animatsiya va ranglar</li>
          <li><strong>Phase Indicators:</strong> Qaysi bosqichda ekanligini ko'rsatish</li>
        </ul>
      </div>
    </div>
  );
}
```

---

### Error Handling - Comprehensive Strategy

Xatolarni to'g'ri boshqarish professional ilovaning belgisidir.

#### Error Boundary va Error Classification

```jsx
// Error types classification
const ERROR_TYPES = {
  NETWORK: 'network',
  TIMEOUT: 'timeout', 
  SERVER: 'server',
  CLIENT: 'client',
  VALIDATION: 'validation',
  PERMISSION: 'permission',
  RATE_LIMIT: 'rate_limit',
  UNKNOWN: 'unknown'
};

// Error classifier utility
const classifyError = (error, response) => {
  if (!navigator.onLine) {
    return {
      type: ERROR_TYPES.NETWORK,
      message: 'Internet aloqasi yo\'q',
      icon: '🌐',
      color: '#6c757d',
      retryable: true,
      autoRetry: false
    };
  }
  
  if (error.name === 'AbortError') {
    return {
      type: ERROR_TYPES.TIMEOUT,
      message: 'So\'rov vaqti tugadi',
      icon: '⏰',
      color: '#ffc107',
      retryable: true,
      autoRetry: true
    };
  }
  
  if (response) {
    const status = response.status;
    
    if (status >= 400 && status < 500) {
      return {
        type: ERROR_TYPES.CLIENT,
        message: status === 401 ? 'Avtorizatsiya talab qilinadi' :
                status === 403 ? 'Ruxsat yo\'q' :
                status === 404 ? 'Ma\'lumot topilmadi' :
                status === 429 ? 'Juda ko\'p so\'rov yuborildi' :
                'Noto\'g\'ri so\'rov',
        icon: status === 401 || status === 403 ? '🔒' :
              status === 404 ? '🔍' :
              status === 429 ? '🚦' : '❌',
        color: '#dc3545',
        retryable: status === 429,
        autoRetry: status === 429
      };
    }
    
    if (status >= 500) {
      return {
        type: ERROR_TYPES.SERVER,
        message: 'Server xatoligi, biroz kuting',
        icon: '🛠️',
        color: '#fd7e14',
        retryable: true,
        autoRetry: true
      };
    }
  }
  
  return {
    type: ERROR_TYPES.UNKNOWN,
    message: error.message || 'Noma\'lum xatolik',
    icon: '❌',
    color: '#dc3545',
    retryable: true,
    autoRetry: false
  };
};

function ComprehensiveErrorHandling() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorInfo, setErrorInfo] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [autoRetryCountdown, setAutoRetryCountdown] = useState(0);
  const [selectedEndpoint, setSelectedEndpoint] = useState('success');
  
  // Test endpoints for different error scenarios
  const endpoints = {
    success: {
      url: 'https://jsonplaceholder.typicode.com/users',
      name: '✅ Muvaffaqiyatli so\'rov'
    },
    notFound: {
      url: 'https://jsonplaceholder.typicode.com/nonexistent',
      name: '🔍 404 - Topilmadi'
    },
    serverError: {
      url: 'https://httpstat.us/500',
      name: '🛠️ 500 - Server xatoligi'
    },
    timeout: {
      url: 'https://httpstat.us/200?sleep=15000',
      name: '⏰ Timeout testi'
    },
    networkError: {
      url: 'https://nonexistent-domain-12345.com/api',
      name: '🌐 Network xatoligi'
    }
  };
  
  const fetchWithErrorHandling = async (endpoint, manualRetry = false) => {
    if (!manualRetry) {
      setRetryCount(0);
    }
    
    setLoading(true);
    setErrorInfo(null);
    setData(null);
    setAutoRetryCountdown(0);
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    
    try {
      console.log(`🔄 API so'rov: ${endpoints[endpoint].name}`);
      
      const response = await fetch(endpoints[endpoint].url, {
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        const errorDetails = classifyError(null, response);
        throw Object.assign(new Error(errorDetails.message), { 
          response,
          errorDetails 
        });
      }
      
      const result = await response.json();
      setData(result);
      setLoading(false);
      console.log('✅ So\'rov muvaffaqiyatli');
      
    } catch (error) {
      clearTimeout(timeoutId);
      setLoading(false);
      
      const errorDetails = error.errorDetails || classifyError(error, error.response);
      
      setErrorInfo({
        ...errorDetails,
        timestamp: new Date().toLocaleString(),
        endpoint: endpoints[endpoint].name,
        retryCount: retryCount + 1
      });
      
      console.error('❌ API xatoligi:', errorDetails);
      
      // Auto retry logic
      if (errorDetails.autoRetry && retryCount < 2) {
        const retryDelay = Math.pow(2, retryCount) * 2000; // 2s, 4s, 8s
        setAutoRetryCountdown(retryDelay / 1000);
        
        const countdownInterval = setInterval(() => {
          setAutoRetryCountdown(prev => {
            if (prev <= 1) {
              clearInterval(countdownInterval);
              setRetryCount(prev => prev + 1);
              fetchWithErrorHandling(endpoint, true);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
    }
  };
  
  const handleManualRetry = () => {
    setRetryCount(prev => prev + 1);
    fetchWithErrorHandling(selectedEndpoint, true);
  };
  
  const handleEndpointChange = (endpoint) => {
    setSelectedEndpoint(endpoint);
    setRetryCount(0);
    fetchWithErrorHandling(endpoint);
  };
  
  useEffect(() => {
    fetchWithErrorHandling(selectedEndpoint);
  }, []);
  
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h3>🛡️ Comprehensive Error Handling</h3>
      
      {/* Endpoint selector */}
      <div style={{ 
        marginBottom: '25px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px'
      }}>
        <h5>Test Endpoints:</h5>
        <div style={{ display: 'grid', gap: '10px' }}>
          {Object.entries(endpoints).map(([key, endpoint]) => (
            <button
              key={key}
              onClick={() => handleEndpointChange(key)}
              style={{
                padding: '12px 16px',
                backgroundColor: selectedEndpoint === key ? '#007bff' : 'white',
                color: selectedEndpoint === key ? 'white' : '#495057',
                border: '2px solid #007bff',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '14px'
              }}
            >
              {endpoint.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Loading state */}
      {loading && (
        <div style={{ 
          padding: '25px',
          backgroundColor: '#e7f3ff',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '15px' }}>⏳</div>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
            So'rov yuborilmoqda...
          </div>
          {retryCount > 0 && (
            <div style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
              Qayta urinish #{retryCount}
            </div>
          )}
        </div>
      )}
      
      {/* Error state */}
      {errorInfo && (
        <div style={{ 
          padding: '25px',
          backgroundColor: '#fff3cd',
          borderRadius: '12px',
          border: `3px solid ${errorInfo.color}`,
          marginBottom: '20px'
        }}>
          <div style={{ 
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '20px'
          }}>
            <span style={{ fontSize: '48px', marginRight: '15px' }}>
              {errorInfo.icon}
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ 
                fontSize: '20px', 
                fontWeight: 'bold', 
                color: errorInfo.color,
                marginBottom: '8px'
              }}>
                {errorInfo.message}
              </div>
              <div style={{ fontSize: '14px', color: '#6c757d' }}>
                Endpoint: {errorInfo.endpoint}
              </div>
            </div>
          </div>
          
          {/* Error details */}
          <div style={{ 
            backgroundColor: 'rgba(255,255,255,0.7)',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <div style={{ fontSize: '12px', color: '#6c757d' }}>
              <div><strong>Xatolik turi:</strong> {errorInfo.type}</div>
              <div><strong>Vaqt:</strong> {errorInfo.timestamp}</div>
              <div><strong>Urinishlar:</strong> {errorInfo.retryCount}</div>
              <div><strong>Avtomatik qayta urinish:</strong> {errorInfo.autoRetry ? 'Ha' : 'Yo\'q'}</div>
            </div>
          </div>
          
          {/* Auto retry countdown */}
          {autoRetryCountdown > 0 && (
            <div style={{ 
              padding: '15px',
              backgroundColor: '#d1ecf1',
              borderRadius: '8px',
              marginBottom: '15px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#0c5460' }}>
                🔄 Avtomatik qayta urinish
              </div>
              <div style={{ fontSize: '24px', color: '#0c5460', marginTop: '5px' }}>
                {autoRetryCountdown} soniya
              </div>
            </div>
          )}
          
          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {errorInfo.retryable && (
              <button 
                onClick={handleManualRetry}
                disabled={autoRetryCountdown > 0}
                style={{ 
                  padding: '12px 20px',
                  backgroundColor: autoRetryCountdown > 0 ? '#6c757d' : errorInfo.color,
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: autoRetryCountdown > 0 ? 'not-allowed' : 'pointer',
                  fontSize: '14px'
                }}
              >
                🔄 Qayta urinish
              </button>
            )}
            
            <button 
              onClick={() => handleEndpointChange('success')}
              style={{ 
                padding: '12px 20px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              ✅ Ishlaydigan endpoint
            </button>
            
            <button 
              onClick={() => setErrorInfo(null)}
              style={{ 
                padding: '12px 20px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              ✖️ Yopish
            </button>
          </div>
          
          {/* Error prevention tips */}
          <div style={{ 
            marginTop: '20px',
            padding: '15px',
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderRadius: '8px',
            border: '1px solid #dee2e6'
          }}>
            <strong>💡 Xatolik oldini olish:</strong>
            <ul style={{ margin: '8px 0 0 0', fontSize: '14px' }}>
              {errorInfo.type === ERROR_TYPES.NETWORK && (
                <>
                  <li>Internet aloqangizni tekshiring</li>
                  <li>VPN yoqilgan bo'lsa, o'chirib ko'ring</li>
                  <li>Brauzerning cache'ini tozalang</li>
                </>
              )}
              {errorInfo.type === ERROR_TYPES.TIMEOUT && (
                <>
                  <li>Internetning tezligini tekshiring</li>
                  <li>Server yuklanishi kam vaqtda qayta urinib ko'ring</li>
                  <li>Kichikroq ma'lumot so'rab ko'ring</li>
                </>
              )}
              {errorInfo.type === ERROR_TYPES.SERVER && (
                <>
                  <li>Bu vaqtinchalik muammo bo'lishi mumkin</li>
                  <li>Bir necha daqiqadan keyin qayta urinib ko'ring</li>
                  <li>Server administratoriga xabar bering</li>
                </>
              )}
              {errorInfo.type === ERROR_TYPES.CLIENT && (
                <>
                  <li>So'rov parametrlarini tekshiring</li>
                  <li>Avtorizatsiya token'larni yangilang</li>
                  <li>Ruxsatlaringizni tekshiring</li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
      
      {/* Success state */}
      {data && !loading && !errorInfo && (
        <div style={{ 
          padding: '25px',
          backgroundColor: '#d4edda',
          borderRadius: '12px',
          border: '3px solid #28a745'
        }}>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <span style={{ fontSize: '48px', marginRight: '15px' }}>🎉</span>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#155724' }}>
                Ma'lumot muvaffaqiyatli yuklandi!
              </div>
              <div style={{ fontSize: '14px', color: '#6c757d' }}>
                {Array.isArray(data) ? `${data.length} ta yozuv` : 'Muvaffaqiyatli javob'}
              </div>
            </div>
          </div>
          
          {Array.isArray(data) && (
            <div style={{ display: 'grid', gap: '10px' }}>
              {data.slice(0, 3).map((item, index) => (
                <div 
                  key={index}
                  style={{ 
                    padding: '12px',
                    backgroundColor: 'white',
                    borderRadius: '6px',
                    border: '1px solid #c3e6cb'
                  }}
                >
                  <pre style={{ fontSize: '12px', margin: 0 }}>
                    {JSON.stringify(item, null, 2).substring(0, 200)}...
                  </pre>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      
      <div style={{ 
        marginTop: '25px', 
        padding: '20px',
        backgroundColor: '#e7f3ff',
        borderRadius: '8px'
      }}>
        <strong>🎯 Error Handling Features:</strong>
        <ul style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>
          <li><strong>Error Classification:</strong> Har xil xatolik turlarini aniqlash</li>
          <li><strong>Auto Retry:</strong> Avtomatik qayta urinish logikasi</li>
          <li><strong>User Guidance:</strong> Foydalanuvchiga yordam ko'rsatish</li>
          <li><strong>Graceful Degradation:</strong> Xatolikka qaramay ishlashda davom etish</li>
          <li><strong>Comprehensive Logging:</strong> Debug qilish uchun to'liq ma'lumot</li>
        </ul>
      </div>
    </div>
  );
}
```

---

### Request Cleanup - Memory va Performance Optimization

Request cleanup xotira oqimi (memory leaks) va keraksiz network so'rovlarini oldini olish uchun juda muhim.

#### Advanced Request Cleanup Strategy

```jsx
function RequestCleanupDemo() {
  const [activeRequests, setActiveRequests] = useState(new Map());
  const [requestHistory, setRequestHistory] = useState([]);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState({});
  const [errors, setErrors] = useState({});
  
  // Request manager class
  class RequestManager {
    constructor() {
      this.requests = new Map();
      this.requestCount = 0;
    }
    
    async makeRequest(key, url, options = {}) {
      // Cancel existing request with same key
      if (this.requests.has(key)) {
        this.requests.get(key).controller.abort();
        console.log(`🚫 Cancelled existing request: ${key}`);
      }
      
      const controller = new AbortController();
      const requestId = ++this.requestCount;
      
      const requestInfo = {
        id: requestId,
        key,
        url,
        controller,
        startTime: Date.now(),
        status: 'pending'
      };
      
      this.requests.set(key, requestInfo);
      
      try {
        console.log(`🚀 Starting request ${requestId}: ${key}`);
        
        const response = await fetch(url, {
          ...options,
          signal: controller.signal,
          headers: {
            'Content-Type': 'application/json',
            ...options.headers
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const result = await response.json();
        
        requestInfo.status = 'completed';
        requestInfo.endTime = Date.now();
        requestInfo.duration = requestInfo.endTime - requestInfo.startTime;
        
        console.log(`✅ Completed request ${requestId}: ${key} (${requestInfo.duration}ms)`);
        
        return result;
        
      } catch (error) {
        requestInfo.status = error.name === 'AbortError' ? 'cancelled' : 'failed';
        requestInfo.endTime = Date.now();
        requestInfo.duration = requestInfo.endTime - requestInfo.startTime;
        requestInfo.error = error.message;
        
        if (error.name === 'AbortError') {
          console.log(`🚫 Request ${requestId} was cancelled: ${key}`);
        } else {
          console.error(`❌ Request ${requestId} failed: ${key}`, error);
        }
        
        throw error;
      } finally {
        this.requests.delete(key);
      }
    }
    
    cancelRequest(key) {
      if (this.requests.has(key)) {
        this.requests.get(key).controller.abort();
        this.requests.delete(key);
        return true;
      }
      return false;
    }
    
    cancelAllRequests() {
      const count = this.requests.size;
      this.requests.forEach((requestInfo) => {
        requestInfo.controller.abort();
      });
      this.requests.clear();
      console.log(`🧹 Cancelled ${count} active requests`);
      return count;
    }
    
    getActiveRequests() {
      return Array.from(this.requests.values());
    }
  }
  
  const requestManager = useRef(new RequestManager()).current;
  
  // Update active requests display
  useEffect(() => {
    const updateActiveRequests = () => {
      setActiveRequests(new Map(requestManager.requests));
    };
    
    const interval = setInterval(updateActiveRequests, 100);
    return () => clearInterval(interval);
  }, [requestManager]);
  
  const makeApiCall = async (endpoint, delay = 0) => {
    const key = `api-${endpoint}`;
    const url = `https://jsonplaceholder.typicode.com/${endpoint}${delay ? `?_delay=${delay}` : ''}`;
    
    setLoading(prev => ({ ...prev, [key]: true }));
    setErrors(prev => ({ ...prev, [key]: null }));
    
    const startTime = Date.now();
    
    try {
      const result = await requestManager.makeRequest(key, url);
      
      setData(prev => ({ ...prev, [key]: result }));
      
      // Add to request history
      setRequestHistory(prev => [...prev, {
        id: Date.now(),
        key,
        status: 'success',
        duration: Date.now() - startTime,
        timestamp: new Date().toLocaleTimeString(),
        dataSize: JSON.stringify(result).length
      }].slice(-10)); // Keep last 10 requests
      
    } catch (error) {
      if (error.name !== 'AbortError') {
        setErrors(prev => ({ ...prev, [key]: error.message }));
        
        // Add to request history
        setRequestHistory(prev => [...prev, {
          id: Date.now(),
          key,
          status: 'error',
          duration: Date.now() - startTime,
          timestamp: new Date().toLocaleTimeString(),
          error: error.message
        }].slice(-10));
      }
    } finally {
      setLoading(prev => ({ ...prev, [key]: false }));
    }
  };
  
  const cancelSpecificRequest = (key) => {
    const cancelled = requestManager.cancelRequest(key);
    if (cancelled) {
      setLoading(prev => ({ ...prev, [key]: false }));
      
      // Add to request history
      setRequestHistory(prev => [...prev, {
        id: Date.now(),
        key,
        status: 'cancelled',
        duration: 0,
        timestamp: new Date().toLocaleTimeString()
      }].slice(-10));
    }
  };
  
  const cancelAllRequests = () => {
    const cancelledCount = requestManager.cancelAllRequests();
    
    // Clear all loading states
    setLoading({});
    
    if (cancelledCount > 0) {
      // Add to request history
      setRequestHistory(prev => [...prev, {
        id: Date.now(),
        key: 'bulk-cancel',
        status: 'cancelled',
        duration: 0,
        timestamp: new Date().toLocaleTimeString(),
        note: `${cancelledCount} requests cancelled`
      }].slice(-10));
    }
  };
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      requestManager.cancelAllRequests();
    };
  }, [requestManager]);
  
  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return '⏳';
      case 'completed': return '✅';
      case 'cancelled': return '🚫';
      case 'failed': return '❌';
      case 'success': return '✅';
      case 'error': return '❌';
      default: return '❓';
    }
  };
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#ffc107';
      case 'completed':
      case 'success': return '#28a745';
      case 'cancelled': return '#6c757d';
      case 'failed':
      case 'error': return '#dc3545';
      default: return '#17a2b8';
    }
  };
  
  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h3>🧹 Request Cleanup & Management</h3>
      
      {/* Request controls */}
      <div style={{ 
        marginBottom: '25px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px'
      }}>
        <h5>So'rov boshqaruvi:</h5>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
          <button
            onClick={() => makeApiCall('users')}
            disabled={loading['api-users']}
            style={{
              padding: '12px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: loading['api-users'] ? 'not-allowed' : 'pointer',
              opacity: loading['api-users'] ? 0.6 : 1
            }}
          >
            👥 Foydalanuvchilar
          </button>
          
          <button
            onClick={() => makeApiCall('posts')}
            disabled={loading['api-posts']}
            style={{
              padding: '12px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: loading['api-posts'] ? 'not-allowed' : 'pointer',
              opacity: loading['api-posts'] ? 0.6 : 1
            }}
          >
            📝 Postlar
          </button>
          
          <button
            onClick={() => makeApiCall('comments', 5000)}
            disabled={loading['api-comments']}
            style={{
              padding: '12px',
              backgroundColor: '#17a2b8',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: loading['api-comments'] ? 'not-allowed' : 'pointer',
              opacity: loading['api-comments'] ? 0.6 : 1
            }}
          >
            💬 Sekin so'rov (5s)
          </button>
          
          <button
            onClick={cancelAllRequests}
            style={{
              padding: '12px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            🛑 Barchasini bekor qil
          </button>
        </div>
      </div>
      
      {/* Active requests monitor */}
      <div style={{ 
        marginBottom: '25px',
        padding: '20px',
        backgroundColor: '#e7f3ff',
        borderRadius: '10px'
      }}>
        <h5>📊 Faol so'rovlar ({activeRequests.size}):</h5>
        
        {activeRequests.size === 0 ? (
          <div style={{ color: '#6c757d', fontStyle: 'italic' }}>
            Hozirda faol so'rov yo'q
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '10px' }}>
            {Array.from(activeRequests.values()).map((request) => (
              <div 
                key={request.id}
                style={{ 
                  padding: '15px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: '2px solid #007bff',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>{getStatusIcon(request.status)}</span>
                    <span>So'rov #{request.id}: {request.key}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#6c757d' }}>
                    Boshlangan: {new Date(request.startTime).toLocaleTimeString()}
                  </div>
                  <div style={{ fontSize: '12px', color: '#6c757d' }}>
                    Davomiyligi: {Date.now() - request.startTime}ms
                  </div>
                </div>
                
                <button
                  onClick={() => cancelSpecificRequest(request.key)}
                  style={{
                    padding: '8px 12px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  🚫 Bekor qilish
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Request history */}
      <div style={{ 
        marginBottom: '25px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px'
      }}>
        <h5>📋 So'rovlar tarixi (oxirgi 10 ta):</h5>
        
        {requestHistory.length === 0 ? (
          <div style={{ color: '#6c757d', fontStyle: 'italic' }}>
            Hali hech qanday so'rov bajarilmagan
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '8px' }}>
            {requestHistory.slice().reverse().map((record) => (
              <div 
                key={record.id}
                style={{ 
                  padding: '12px',
                  backgroundColor: 'white',
                  borderRadius: '6px',
                  border: `2px solid ${getStatusColor(record.status)}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '20px' }}>
                    {getStatusIcon(record.status)}
                  </span>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                      {record.key}
                    </div>
                    <div style={{ fontSize: '12px', color: '#6c757d' }}>
                      {record.timestamp} • {record.duration}ms
                      {record.dataSize && ` • ${record.dataSize} bytes`}
                      {record.error && ` • ${record.error}`}
                      {record.note && ` • ${record.note}`}
                    </div>
                  </div>
                </div>
                
                <div style={{ 
                  padding: '4px 8px',
                  backgroundColor: getStatusColor(record.status),
                  color: 'white',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {record.status.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Data display */}
      <div style={{ 
        padding: '20px',
        backgroundColor: '#e8f5e8',
        borderRadius: '10px'
      }}>
        <h5>📦 Yuklangan ma'lumotlar:</h5>
        
        {Object.keys(data).length === 0 ? (
          <div style={{ color: '#6c757d', fontStyle: 'italic' }}>
            Hali ma'lumot yuklanmagan
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '15px' }}>
            {Object.entries(data).map(([key, value]) => (
              <div 
                key={key}
                style={{ 
                  padding: '15px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: '1px solid #c3e6cb'
                }}
              >
                <h6 style={{ margin: '0 0 10px 0' }}>{key}</h6>
                <div style={{ 
                  maxHeight: '150px',
                  overflowY: 'auto',
                  fontSize: '12px'
                }}>
                  <pre style={{ margin: 0 }}>
                    {JSON.stringify(Array.isArray(value) ? value.slice(0, 2) : value, null, 2)}
                  </pre>
                  {Array.isArray(value) && value.length > 2 && (
                    <div style={{ color: '#6c757d', marginTop: '5px' }}>
                      ... va yana {value.length - 2} ta element
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div style={{ 
        marginTop: '25px', 
        padding: '20px',
        backgroundColor: '#fff3cd',
        borderRadius: '8px'
      }}>
        <strong>🎯 Request Cleanup Benefits:</strong>
        <ul style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>
          <li><strong>Memory Leak Prevention:</strong> Xotira oqimini oldini olish</li>
          <li><strong>Network Optimization:</strong> Keraksiz so'rovlarni bekor qilish</li>
          <li><strong>User Experience:</strong> Tez javob va to'g'ri feedback</li>
          <li><strong>Resource Management:</strong> Tizim resurslarini tejash</li>
          <li><strong>Request Monitoring:</strong> So'rovlarni kuzatish va debug qilish</li>
        </ul>
      </div>
    </div>
  );
}
```

---

### Custom Loading Hooks - Reusable Solutions

Custom hooks orqali loading logic'ni qayta ishlatish va koddi tozalash.

#### useFetch - Universal Data Fetching Hook

```jsx
import { useState, useEffect, useRef, useCallback } from 'react';

// Custom fetch hook with comprehensive features
function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [retryCount, setRetryCount] = useState(0);
  
  const abortControllerRef = useRef(null);
  const mountedRef = useRef(true);
  
  const {
    immediate = true,
    retries = 3,
    retryDelay = 1000,
    timeout = 10000,
    onSuccess,
    onError,
    transform,
    cache = false,
    dependencies = []
  } = options;
  
  // Cache implementation
  const cacheRef = useRef(new Map());
  
  const fetchData = useCallback(async (fetchUrl = url, fetchOptions = {}) => {
    if (!fetchUrl) return;
    
    // Check cache first
    const cacheKey = `${fetchUrl}${JSON.stringify(fetchOptions)}`;
    if (cache && cacheRef.current.has(cacheKey)) {
      const cachedData = cacheRef.current.get(cacheKey);
      setData(cachedData);
      if (onSuccess) onSuccess(cachedData);
      return cachedData;
    }
    
    // Cancel previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    
    abortControllerRef.current = new AbortController();
    
    setLoading(true);
    setError(null);
    setProgress(0);
    
    let attempt = 0;
    
    while (attempt < retries && mountedRef.current) {
      try {
        attempt++;
        setRetryCount(attempt - 1);
        
        console.log(`🔄 Fetch attempt ${attempt}/${retries}: ${fetchUrl}`);
        
        // Progress simulation for better UX
        const progressInterval = setInterval(() => {
          setProgress(prev => Math.min(prev + 10, 90));
        }, 200);
        
        // Create timeout promise
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Request timeout')), timeout)
        );
        
        // Create fetch promise
        const fetchPromise = fetch(fetchUrl, {
          signal: abortControllerRef.current.signal,
          headers: {
            'Content-Type': 'application/json'
          },
          ...fetchOptions
        });
        
        // Race between fetch and timeout
        const response = await Promise.race([fetchPromise, timeoutPromise]);
        
        clearInterval(progressInterval);
        setProgress(100);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const result = await response.json();
        
        // Transform data if transform function provided
        const finalData = transform ? transform(result) : result;
        
        if (mountedRef.current) {
          setData(finalData);
          setLoading(false);
          setProgress(0);
          
          // Cache the result
          if (cache) {
            cacheRef.current.set(cacheKey, finalData);
          }
          
          if (onSuccess) onSuccess(finalData);
        }
        
        console.log('✅ Fetch successful');
        return finalData;
        
      } catch (err) {
        clearInterval(progressInterval);
        
        if (err.name === 'AbortError') {
          console.log('🚫 Fetch aborted');
          return null;
        }
        
        console.error(`❌ Fetch attempt ${attempt} failed:`, err.message);
        
        if (attempt === retries) {
          // Final attempt failed
          if (mountedRef.current) {
            setError({
              message: err.message,
              attempts: attempt,
              timestamp: new Date().toLocaleString(),
              url: fetchUrl
            });
            setLoading(false);
            setProgress(0);
            
            if (onError) onError(err);
          }
        } else if (mountedRef.current) {
          // Wait before retry
          const waitTime = retryDelay * Math.pow(2, attempt - 1);
          console.log(`⏳ Waiting ${waitTime}ms before retry...`);
          await new Promise(resolve => setTimeout(resolve, waitTime));
        }
      }
    }
  }, [url, retries, retryDelay, timeout, onSuccess, onError, transform, cache]);
  
  // Refetch function
  const refetch = useCallback(() => {
    return fetchData();
  }, [fetchData]);
  
  // Cancel function
  const cancel = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setLoading(false);
    setProgress(0);
  }, []);
  
  // Clear cache function
  const clearCache = useCallback(() => {
    cacheRef.current.clear();
  }, []);
  
  // Auto fetch on mount or dependency change
  useEffect(() => {
    if (immediate) {
      fetchData();
    }
    
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [immediate, fetchData, ...dependencies]);
  
  // Cleanup on unmount
  useEffect(() => {
    mountedRef.current = true;
    
    return () => {
      mountedRef.current = false;
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);
  
  return {
    data,
    loading,
    error,
    progress,
    retryCount,
    refetch,
    cancel,
    clearCache
  };
}

// useAsyncOperation - For complex async operations
function useAsyncOperation() {
  const [operations, setOperations] = useState({});
  
  const execute = useCallback(async (key, asyncFn, options = {}) => {
    const { onStart, onSuccess, onError, timeout = 10000 } = options;
    
    // Set initial state
    setOperations(prev => ({
      ...prev,
      [key]: {
        loading: true,
        error: null,
        data: null,
        progress: 0,
        startTime: Date.now()
      }
    }));
    
    if (onStart) onStart();
    
    try {
      // Progress simulation
      const progressInterval = setInterval(() => {
        setOperations(prev => ({
          ...prev,
          [key]: {
            ...prev[key],
            progress: Math.min((prev[key]?.progress || 0) + 5, 90)
          }
        }));
      }, 100);
      
      // Execute with timeout
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Operation timeout')), timeout)
      );
      
      const result = await Promise.race([asyncFn(), timeoutPromise]);
      
      clearInterval(progressInterval);
      
      setOperations(prev => ({
        ...prev,
        [key]: {
          ...prev[key],
          loading: false,
          data: result,
          progress: 100,
          endTime: Date.now()
        }
      }));
      
      if (onSuccess) onSuccess(result);
      return result;
      
    } catch (error) {
      clearInterval(progressInterval);
      
      setOperations(prev => ({
        ...prev,
        [key]: {
          ...prev[key],
          loading: false,
          error: error.message,
          progress: 0,
          endTime: Date.now()
        }
      }));
      
      if (onError) onError(error);
      throw error;
    }
  }, []);
  
  const getOperation = useCallback((key) => {
    return operations[key] || {
      loading: false,
      error: null,
      data: null,
      progress: 0
    };
  }, [operations]);
  
  const clearOperation = useCallback((key) => {
    setOperations(prev => {
      const newOps = { ...prev };
      delete newOps[key];
      return newOps;
    });
  }, []);
  
  return {
    execute,
    getOperation,
    clearOperation,
    operations
  };
}

// Custom hooks demonstration component
function CustomHooksDemo() {
  const [selectedDemo, setSelectedDemo] = useState('basic-fetch');
  const [fetchUrl, setFetchUrl] = useState('users');
  
  // useFetch demonstration
  const {
    data: fetchData,
    loading: fetchLoading,
    error: fetchError,
    progress: fetchProgress,
    retryCount,
    refetch,
    cancel,
    clearCache
  } = useFetch(
    `https://jsonplaceholder.typicode.com/${fetchUrl}`,
    {
      immediate: selectedDemo === 'basic-fetch',
      retries: 3,
      cache: true,
      transform: (data) => Array.isArray(data) ? data.slice(0, 5) : data,
      onSuccess: (data) => console.log('✅ useFetch success:', data),
      onError: (error) => console.error('❌ useFetch error:', error)
    }
  );
  
  // useAsyncOperation demonstration
  const { execute, getOperation, clearOperation } = useAsyncOperation();
  
  const simulateComplexOperation = async (operationType) => {
    await execute(operationType, async () => {
      // Simulate complex operation
      const steps = ['initializing', 'processing', 'validating', 'finalizing'];
      
      for (let i = 0; i < steps.length; i++) {
        console.log(`📋 ${operationType}: ${steps[i]}...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      return {
        operation: operationType,
        timestamp: new Date().toLocaleString(),
        result: `${operationType} completed successfully`,
        steps: steps.length
      };
    }, {
      timeout: 15000,
      onStart: () => console.log(`🚀 Starting ${operationType}`),
      onSuccess: (result) => console.log(`✅ ${operationType} completed:`, result),
      onError: (error) => console.error(`❌ ${operationType} failed:`, error)
    });
  };
  
  const uploadOperation = getOperation('file-upload');
  const processOperation = getOperation('data-processing');
  const syncOperation = getOperation('sync-operation');
  
  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h3>🎣 Custom Loading Hooks</h3>
      
      {/* Demo selector */}
      <div style={{ 
        marginBottom: '25px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px'
      }}>
        <h5>Demo tanlang:</h5>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setSelectedDemo('basic-fetch')}
            style={{
              padding: '10px 15px',
              backgroundColor: selectedDemo === 'basic-fetch' ? '#007bff' : 'white',
              color: selectedDemo === 'basic-fetch' ? 'white' : '#495057',
              border: '2px solid #007bff',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            🎣 useFetch Hook
          </button>
          
          <button
            onClick={() => setSelectedDemo('async-operations')}
            style={{
              padding: '10px 15px',
              backgroundColor: selectedDemo === 'async-operations' ? '#28a745' : 'white',
              color: selectedDemo === 'async-operations' ? 'white' : '#495057',
              border: '2px solid #28a745',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            ⚙️ useAsyncOperation Hook
          </button>
        </div>
      </div>
      
      {/* useFetch Demo */}
      {selectedDemo === 'basic-fetch' && (
        <div style={{ 
          padding: '25px',
          backgroundColor: '#e7f3ff',
          borderRadius: '12px',
          marginBottom: '25px'
        }}>
          <h4>🎣 useFetch Hook Demo</h4>
          
          {/* URL selector */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
              API Endpoint:
            </label>
            <select 
              value={fetchUrl}
              onChange={(e) => setFetchUrl(e.target.value)}
              style={{ 
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #ddd',
                marginRight: '10px'
              }}
            >
              <option value="users">👥 Users</option>
              <option value="posts">📝 Posts</option>
              <option value="comments">💬 Comments</option>
              <option value="albums">📸 Albums</option>
            </select>
            
            <button 
              onClick={refetch}
              disabled={fetchLoading}
              style={{ 
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: fetchLoading ? 'not-allowed' : 'pointer',
                marginRight: '10px'
              }}
            >
              🔄 Refetch
            </button>
            
            <button 
              onClick={cancel}
              disabled={!fetchLoading}
              style={{ 
                padding: '8px 16px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: !fetchLoading ? 'not-allowed' : 'pointer',
                marginRight: '10px'
              }}
            >
              🛑 Cancel
            </button>
            
            <button 
              onClick={clearCache}
              style={{ 
                padding: '8px 16px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              🗑️ Clear Cache
            </button>
          </div>
          
          {/* Loading state */}
          {fetchLoading && (
            <div style={{ 
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              marginBottom: '15px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>⏳</div>
              <div style={{ marginBottom: '15px' }}>
                Ma'lumot yuklanmoqda... (Urinish #{retryCount + 1})
              </div>
              
              {/* Progress bar */}
              <div style={{ 
                width: '100%',
                height: '8px',
                backgroundColor: '#e9ecef',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom: '10px'
              }}>
                <div style={{
                  width: `${fetchProgress}%`,
                  height: '100%',
                  backgroundColor: '#007bff',
                  transition: 'width 0.3s ease'
                }} />
              </div>
              
              <div style={{ fontSize: '14px', color: '#6c757d' }}>
                {fetchProgress}% tugallandi
              </div>
            </div>
          )}
          
          {/* Error state */}
          {fetchError && (
            <div style={{ 
              padding: '20px',
              backgroundColor: '#f8d7da',
              borderRadius: '8px',
              marginBottom: '15px'
            }}>
              <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#721c24' }}>
                ❌ Xatolik yuz berdi
              </div>
              <div style={{ fontSize: '14px', color: '#6c757d', marginTop: '5px' }}>
                {fetchError.message} ({fetchError.attempts} urinish)
              </div>
            </div>
          )}
          
          {/* Success state */}
          {fetchData && !fetchLoading && (
            <div style={{ 
              padding: '20px',
              backgroundColor: '#d4edda',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#155724', marginBottom: '15px' }}>
                ✅ Ma'lumot muvaffaqiyatli yuklandi
              </div>
              
              <div style={{ 
                maxHeight: '300px',
                overflowY: 'auto',
                backgroundColor: 'white',
                padding: '15px',
                borderRadius: '6px',
                border: '1px solid #c3e6cb'
              }}>
                <pre style={{ fontSize: '12px', margin: 0 }}>
                  {JSON.stringify(fetchData, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* useAsyncOperation Demo */}
      {selectedDemo === 'async-operations' && (
        <div style={{ 
          padding: '25px',
          backgroundColor: '#e8f5e8',
          borderRadius: '12px'
        }}>
          <h4>⚙️ useAsyncOperation Hook Demo</h4>
          
          {/* Operation controls */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px',
            marginBottom: '25px'
          }}>
            <button
              onClick={() => simulateComplexOperation('file-upload')}
              disabled={uploadOperation.loading}
              style={{
                padding: '15px',
                backgroundColor: uploadOperation.loading ? '#6c757d' : '#17a2b8',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: uploadOperation.loading ? 'not-allowed' : 'pointer'
              }}
            >
              📤 File Upload
              {uploadOperation.loading && ` (${uploadOperation.progress}%)`}
            </button>
            
            <button
              onClick={() => simulateComplexOperation('data-processing')}
              disabled={processOperation.loading}
              style={{
                padding: '15px',
                backgroundColor: processOperation.loading ? '#6c757d' : '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: processOperation.loading ? 'not-allowed' : 'pointer'
              }}
            >
              ⚙️ Data Processing
              {processOperation.loading && ` (${processOperation.progress}%)`}
            </button>
            
            <button
              onClick={() => simulateComplexOperation('sync-operation')}
              disabled={syncOperation.loading}
              style={{
                padding: '15px',
                backgroundColor: syncOperation.loading ? '#6c757d' : '#ffc107',
                color: syncOperation.loading ? 'white' : '#212529',
                border: 'none',
                borderRadius: '8px',
                cursor: syncOperation.loading ? 'not-allowed' : 'pointer'
              }}
            >
              🔄 Sync Operation
              {syncOperation.loading && ` (${syncOperation.progress}%)`}
            </button>
          </div>
          
          {/* Operations status */}
          <div style={{ display: 'grid', gap: '15px' }}>
            {[
              { key: 'file-upload', operation: uploadOperation, name: '📤 File Upload' },
              { key: 'data-processing', operation: processOperation, name: '⚙️ Data Processing' },
              { key: 'sync-operation', operation: syncOperation, name: '🔄 Sync Operation' }
            ].map(({ key, operation, name }) => (
              <div 
                key={key}
                style={{ 
                  padding: '20px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: '2px solid #c3e6cb'
                }}
              >
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <h6 style={{ margin: 0 }}>{name}</h6>
                  
                  <button
                    onClick={() => clearOperation(key)}
                    style={{
                      padding: '6px 12px',
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}
                  >
                    🗑️ Clear
                  </button>
                </div>
                
                {operation.loading && (
                  <div>
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '10px'
                    }}>
                      <span>⏳ Bajarilmoqda...</span>
                      <span>{operation.progress}%</span>
                    </div>
                    
                    <div style={{ 
                      width: '100%',
                      height: '6px',
                      backgroundColor: '#e9ecef',
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${operation.progress}%`,
                        height: '100%',
                        backgroundColor: '#28a745',
                        transition: 'width 0.3s ease'
                      }} />
                    </div>
                  </div>
                )}
                
                {operation.error && (
                  <div style={{ 
                    padding: '10px',
                    backgroundColor: '#f8d7da',
                    borderRadius: '4px',
                    color: '#721c24'
                  }}>
                    ❌ {operation.error}
                  </div>
                )}
                
                {operation.data && (
                  <div style={{ 
                    padding: '10px',
                    backgroundColor: '#d1ecf1',
                    borderRadius: '4px'
                  }}>
                    <div style={{ fontWeight: 'bold', color: '#0c5460' }}>
                      ✅ Muvaffaqiyatli tugallandi
                    </div>
                    <div style={{ fontSize: '12px', color: '#6c757d', marginTop: '5px' }}>
                      Davomiyligi: {operation.endTime - operation.startTime}ms
                    </div>
                    <pre style={{ fontSize: '11px', margin: '8px 0 0 0' }}>
                      {JSON.stringify(operation.data, null, 2)}
                    </pre>
                  </div>
                )}
                
                {!operation.loading && !operation.error && !operation.data && (
                  <div style={{ color: '#6c757d', fontStyle: 'italic' }}>
                    Operatsiya hali boshlanmagan
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div style={{ 
        marginTop: '25px', 
        padding: '20px',
        backgroundColor: '#fff3cd',
        borderRadius: '8px'
      }}>
        <strong>🎯 Custom Hooks Benefits:</strong>
        <ul style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>
          <li><strong>Reusability:</strong> Bir marta yozib, ko'p joyda ishlatish</li>
          <li><strong>Separation of Concerns:</strong> Logic va UI'ni ajratish</li>
          <li><strong>Testing:</strong> Hook'larni alohida test qilish imkoniyati</li>
          <li><strong>Performance:</strong> Optimized va cacheable solutions</li>
          <li><strong>Maintainability:</strong> Kod maintain qilish osonlashadi</li>
        </ul>
      </div>
    </div>
  );
}
```

---

## Amaliy mashqlar

### Mashq 1: E-commerce Product Loader

```jsx
function ECommerceProductLoader() {
  // Implement comprehensive product loading system with:
  // - Pagination with infinite scroll
  // - Real-time search with debouncing  
  // - Category filtering
  // - Sort options (price, rating, date)
  // - Advanced error handling with retry
  // - Loading states for different operations
  // - Request cleanup on component unmount
  // - Cache management for better performance
  
  return (
    <div>
      <h2>🛒 E-commerce Product Loader</h2>
      
      {/* Search and filters */}
      <div>
        {/* Search input with debouncing */}
        {/* Category filter dropdown */}
        {/* Sort options */}
        {/* Price range slider */}
      </div>
      
      {/* Products grid */}
      <div>
        {/* Product cards with loading skeletons */}
        {/* Infinite scroll loading indicator */}
        {/* Empty state component */}
        {/* Error boundary with retry options */}
      </div>
      
      {/* Loading analytics */}
      <div>
        {/* Request performance metrics */}
        {/* Cache hit/miss statistics */}
        {/* Network usage indicators */}
      </div>
    </div>
  );
}
```

### Mashq 2: Real-time Dashboard

```jsx
function RealTimeDashboard() {
  // Build a real-time dashboard with:
  // - Multiple data sources (APIs, WebSocket)
  // - Staggered loading for better UX
  // - Auto-refresh with exponential backoff
  // - Error recovery strategies
  // - Connection status monitoring
  // - Data synchronization between tabs
  // - Offline support with queue management
  
  return (
    <div>
      <h2>📊 Real-time Dashboard</h2>
      
      {/* Status indicators */}
      <div>
        {/* Connection status */}
        {/* Last updated timestamp */}
        {/* Data freshness indicators */}
      </div>
      
      {/* Widgets grid */}
      <div>
        {/* Revenue widget */}
        {/* User activity widget */}
        {/* Performance metrics widget */}
        {/* Error logs widget */}
      </div>
      
      {/* Control panel */}
      <div>
        {/* Refresh controls */}
        {/* Data source toggles */}
        {/* Export functionality */}
      </div>
    </div>
  );
}
```


</details>


<hr>

<details>
<summary>
useRef va DOM Interaction
</summary>

## useRef va DOM Interaction (Day 5-7: useRef and DOM Interaction)

### useRef Hook nima va qanday ishlaydi?

useRef - bu React'dagi juda kuchli Hook bo'lib, DOM elementlariga to'g'ridan-to'g'ri murojaat qilish va mutable (o'zgaruvchan) qiymatlarni saqlash imkonini beradi. useState'dan farqli o'laroq, useRef o'zgarishi komponentni qayta render qilmaydi.

#### useRef'ning asosiy vazifaları:

1. **DOM elementlariga murojaat** - Input'larga focus berish, scroll position boshqarish
2. **Mutable qiymatlar saqlash** - Timer ID, previous values, counters
3. **Performance optimization** - Re-render'ni oldini olish
4. **Component lifecycle'da qiymatlarni saqlash** - Mount/unmount orasida ma'lumotni saqlab qolish

#### useRef vs useState farqi

```jsx
import React, { useState, useRef, useEffect } from 'react';

function UseRefVsUseState() {
  // useState - komponentni qayta render qiladi
  const [stateCount, setStateCount] = useState(0);
  
  // useRef - komponentni qayta render qilmaydi
  const refCount = useRef(0);
  const renderCount = useRef(0);
  
  // Har render'da oshadi
  useEffect(() => {
    renderCount.current += 1;
  });
  
  const incrementState = () => {
    setStateCount(prev => prev + 1);
    console.log('State increment - komponent qayta render bo\'ldi');
  };
  
  const incrementRef = () => {
    refCount.current += 1;
    console.log('Ref increment - komponent render bo\'lmadi, qiymat:', refCount.current);
  };
  
  const showRefValue = () => {
    alert(`Ref qiymati: ${refCount.current}`);
  };
  
  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '600px', 
      margin: '0 auto',
      border: '2px solid #e9ecef',
      borderRadius: '12px'
    }}>
      <h3>🆚 useRef vs useState Comparison</h3>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '20px',
        marginBottom: '20px'
      }}>
        {/* useState section */}
        <div style={{ 
          padding: '15px',
          backgroundColor: '#e7f3ff',
          borderRadius: '8px',
          border: '2px solid #007bff'
        }}>
          <h4 style={{ color: '#007bff', margin: '0 0 15px 0' }}>
            📊 useState (Reactive)
          </h4>
          
          <div style={{ fontSize: '24px', marginBottom: '10px' }}>
            State Count: {stateCount}
          </div>
          
          <button 
            onClick={incrementState}
            style={{ 
              padding: '10px 15px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            State++ (Re-render)
          </button>
          
          <div style={{ 
            fontSize: '12px', 
            color: '#666',
            marginTop: '10px',
            fontStyle: 'italic'
          }}>
            ✅ UI avtomatik yangilanadi<br/>
            ❌ Har o'zgarishda re-render
          </div>
        </div>
        
        {/* useRef section */}
        <div style={{ 
          padding: '15px',
          backgroundColor: '#fff3cd',
          borderRadius: '8px',
          border: '2px solid #ffc107'
        }}>
          <h4 style={{ color: '#856404', margin: '0 0 15px 0' }}>
            🔗 useRef (Non-reactive)
          </h4>
          
          <div style={{ fontSize: '24px', marginBottom: '10px' }}>
            Ref Count: {refCount.current}
          </div>
          
          <div style={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
            <button 
              onClick={incrementRef}
              style={{ 
                padding: '8px 12px',
                backgroundColor: '#ffc107',
                color: '#212529',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Ref++ (No re-render)
            </button>
            
            <button 
              onClick={showRefValue}
              style={{ 
                padding: '8px 12px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Show Ref Value
            </button>
          </div>
          
          <div style={{ 
            fontSize: '12px', 
            color: '#666',
            marginTop: '10px',
            fontStyle: 'italic'
          }}>
            ❌ UI avtomatik yangilanmaydi<br/>
            ✅ Re-render bo'lmaydi
          </div>
        </div>
      </div>
      
      {/* Render statistics */}
      <div style={{ 
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <strong>📈 Render Statistics:</strong>
        <div style={{ fontSize: '18px', marginTop: '5px' }}>
          Bu komponent {renderCount.current} marta render bo'lgan
        </div>
        <div style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>
          Faqat useState o'zgarishida render oshadi, useRef emas
        </div>
      </div>
      
      <div style={{ 
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#e8f5e8',
        borderRadius: '8px'
      }}>
        <strong>💡 Qachon qaysi birini ishlatish:</strong>
        <ul style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>
          <li><strong>useState:</strong> UI'da ko'rinadigan va o'zgarishi kerak bo'lgan ma'lumotlar uchun</li>
          <li><strong>useRef:</strong> DOM manipulation, timer ID, previous values va boshqa mutable ma'lumotlar uchun</li>
        </ul>
      </div>
    </div>
  );
}
```

---

### DOM Manipulation - Real-world Misollar

useRef'ning eng keng tarqalgan ishlatilishi - DOM elementlari bilan to'g'ridan-to'g'ri ishlash.

#### 1. Basic DOM References

```jsx
function BasicDOMReferences() {
  const titleRef = useRef(null);
  const inputRef = useRef(null);
  const divRef = useRef(null);
  const [logs, setLogs] = useState([]);
  
  const addLog = (message) => {
    setLogs(prev => [...prev, {
      id: Date.now(),
      message,
      time: new Date().toLocaleTimeString()
    }]);
  };
  
  const manipulateTitle = () => {
    if (titleRef.current) {
      const title = titleRef.current;
      
      // Style o'zgartirish
      title.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
      title.style.transform = 'scale(1.1)';
      title.style.transition = 'all 0.3s ease';
      
      addLog(`Title rangi va o'lchami o'zgartirildi`);
      
      // 1 soniyadan keyin qaytarish
      setTimeout(() => {
        title.style.transform = 'scale(1)';
      }, 300);
    }
  };
  
  const manipulateInput = () => {
    if (inputRef.current) {
      const input = inputRef.current;
      
      // Focus berish
      input.focus();
      
      // Value o'rnatish
      const randomText = `Random text ${Math.floor(Math.random() * 1000)}`;
      input.value = randomText;
      
      // Select qilish
      input.select();
      
      addLog(`Input'ga focus berildi va matn o'rnatildi: "${randomText}"`);
    }
  };
  
  const manipulateDiv = () => {
    if (divRef.current) {
      const div = divRef.current;
      
      // Class qo'shish/olib tashlash
      div.classList.toggle('highlighted');
      
      // Attribute o'rnatish
      const randomId = `dynamic-${Math.floor(Math.random() * 1000)}`;
      div.setAttribute('data-id', randomId);
      
      // Content o'zgartirish
      const now = new Date().toLocaleString();
      div.innerHTML = `
        <strong>🎯 Dinamik kontent</strong><br/>
        <small>Yangilangan: ${now}</small><br/>
        <small>ID: ${randomId}</small>
      `;
      
      addLog(`Div kontent va attributlari yangilandi`);
    }
  };
  
  const measureElements = () => {
    const measurements = [];
    
    if (titleRef.current) {
      const rect = titleRef.current.getBoundingClientRect();
      measurements.push(`Title: ${Math.round(rect.width)}x${Math.round(rect.height)}px`);
    }
    
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      measurements.push(`Input: ${Math.round(rect.width)}x${Math.round(rect.height)}px`);
    }
    
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      measurements.push(`Div: ${Math.round(rect.width)}x${Math.round(rect.height)}px`);
    }
    
    addLog(`Element o'lchamlari: ${measurements.join(', ')}`);
  };
  
  const clearLogs = () => {
    setLogs([]);
  };
  
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <style>{`
        .highlighted {
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4) !important;
          color: white !important;
          animation: pulse 1s ease-in-out;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
      
      <h3>🎛️ DOM Manipulation with useRef</h3>
      
      {/* Target elements */}
      <div style={{ 
        marginBottom: '25px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px'
      }}>
        <h1 
          ref={titleRef}
          style={{ 
            margin: '0 0 15px 0',
            textAlign: 'center',
            transition: 'all 0.3s ease'
          }}
        >
          🎯 Manipulated Title
        </h1>
        
        <input 
          ref={inputRef}
          type="text"
          placeholder="Bu input manipulate qilinadi..."
          style={{ 
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            border: '2px solid #ddd',
            borderRadius: '8px',
            fontSize: '16px'
          }}
        />
        
        <div 
          ref={divRef}
          style={{ 
            padding: '15px',
            backgroundColor: '#e7f3ff',
            borderRadius: '8px',
            border: '2px solid #007bff',
            textAlign: 'center',
            transition: 'all 0.3s ease'
          }}
        >
          <strong>🎯 Dinamik Div</strong><br/>
          <small>Bu div kontent va stillarini o'zgartiradi</small>
        </div>
      </div>
      
      {/* Control buttons */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '10px',
        marginBottom: '25px'
      }}>
        <button 
          onClick={manipulateTitle}
          style={{ 
            padding: '12px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          🎨 Title'ni O'zgartir
        </button>
        
        <button 
          onClick={manipulateInput}
          style={{ 
            padding: '12px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          📝 Input'ni Manipulate Qil
        </button>
        
        <button 
          onClick={manipulateDiv}
          style={{ 
            padding: '12px',
            backgroundColor: '#17a2b8',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          🔄 Div'ni Yangilash
        </button>
        
        <button 
          onClick={measureElements}
          style={{ 
            padding: '12px',
            backgroundColor: '#ffc107',
            color: '#212529',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          📏 O'lchamlarni Ko'rish
        </button>
      </div>
      
      {/* Activity logs */}
      <div style={{ 
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px'
      }}>
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '15px'
        }}>
          <h4 style={{ margin: 0 }}>📋 Activity Logs</h4>
          <button 
            onClick={clearLogs}
            style={{ 
              padding: '8px 16px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Clear Logs
          </button>
        </div>
        
        <div style={{ 
          maxHeight: '200px',
          overflowY: 'auto',
          border: '1px solid #ddd',
          borderRadius: '5px',
          backgroundColor: 'white'
        }}>
          {logs.length === 0 ? (
            <div style={{ 
              padding: '20px',
              textAlign: 'center',
              color: '#666',
              fontStyle: 'italic'
            }}>
              Hali hech qanday manipulatsiya bajarilmagan...
            </div>
          ) : (
            logs.map(log => (
              <div 
                key={log.id}
                style={{ 
                  padding: '10px',
                  borderBottom: '1px solid #eee',
                  fontSize: '14px'
                }}
              >
                <span style={{ color: '#666' }}>[{log.time}]</span> {log.message}
              </div>
            ))
          )}
        </div>
      </div>
      
      <div style={{ 
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#e8f5e8',
        borderRadius: '8px'
      }}>
        <strong>💡 DOM Manipulation Benefits:</strong>
        <ul style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>
          <li><strong>Direct Access:</strong> DOM elementlariga to'g'ridan-to'g'ri murojaat</li>
          <li><strong>Performance:</strong> State o'zgarishisiz DOM bilan ishlash</li>
          <li><strong>Third-party Integration:</strong> jQuery, D3.js kabi kutubxonalar bilan integratsiya</li>
          <li><strong>Advanced Operations:</strong> getBoundingClientRect, scrollIntoView va boshqalar</li>
        </ul>
      </div>
    </div>
  );
}
```

---

### Focus Management - Professional Approach

Focus management - bu accessibility va UX uchun juda muhim. useRef orqali fokusni professional darajada boshqarish mumkin.

#### Advanced Focus Management System

```jsx
function AdvancedFocusManagement() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [focusHistory, setFocusHistory] = useState([]);
  
  // Har bir input uchun ref
  const fieldRefs = {
    firstName: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    message: useRef(null)
  };
  
  const submitButtonRef = useRef(null);
  const modalRef = useRef(null);
  const trapRef = useRef(null);
  
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});
  
  // Form steps
  const steps = [
    { fields: ['firstName', 'lastName'], title: 'Shaxsiy ma\'lumotlar' },
    { fields: ['email', 'phone'], title: 'Aloqa ma\'lumotlari' },
    { fields: ['message'], title: 'Xabar' }
  ];
  
  const addFocusLog = (field, action) => {
    setFocusHistory(prev => [...prev, {
      id: Date.now(),
      field,
      action,
      time: new Date().toLocaleTimeString(),
      step: currentStep + 1
    }].slice(-10)); // Keep last 10 logs
  };
  
  // Focus trap for modal
  const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
  
  const trapFocus = (e) => {
    if (!trapRef.current) return;
    
    const focusableElements = trapRef.current.querySelectorAll(focusableElementsString);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
    
    if (e.key === 'Escape') {
      closeModal();
    }
  };
  
  const focusField = (fieldName) => {
    if (fieldRefs[fieldName]?.current) {
      fieldRefs[fieldName].current.focus();
      addFocusLog(fieldName, 'Programmatic focus');
    }
  };
  
  const focusFirstErrorField = () => {
    const errorFields = Object.keys(errors);
    if (errorFields.length > 0) {
      const firstErrorField = errorFields[0];
      focusField(firstErrorField);
      addFocusLog(firstErrorField, 'Error field auto-focus');
    }
  };
  
  const nextStep = () => {
    const currentFields = steps[currentStep].fields;
    const newErrors = {};
    
    // Validation
    currentFields.forEach(field => {
      if (!formData[field]?.trim()) {
        newErrors[field] = 'Bu maydon to\'ldirilishi shart';
      }
      
      if (field === 'email' && formData[field] && !/\S+@\S+\.\S+/.test(formData[field])) {
        newErrors[field] = 'Email formati noto\'g\'ri';
      }
      
      if (field === 'phone' && formData[field] && !/^\+?[\d\s\-\(\)]{10,}$/.test(formData[field])) {
        newErrors[field] = 'Telefon formati noto\'g\'ri';
      }
    });
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      setTimeout(focusFirstErrorField, 100);
      return;
    }
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
      // Next step'ning birinchi field'iga focus
      setTimeout(() => {
        const nextFields = steps[currentStep + 1].fields;
        focusField(nextFields[0]);
      }, 100);
    } else {
      // Submit
      submitButtonRef.current?.focus();
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setTimeout(() => {
        const prevFields = steps[currentStep - 1].fields;
        focusField(prevFields[0]);
      }, 100);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    // Modal ochilganda fokusni modal'ga o'tkazish
    setTimeout(() => {
      modalRef.current?.focus();
    }, 100);
  };
  
  const closeModal = () => {
    setShowModal(false);
    // Modal yopilganda fokusni submit button'ga qaytarish
    setTimeout(() => {
      submitButtonRef.current?.focus();
    }, 100);
  };
  
  const handleKeyNavigation = (e, fieldName) => {
    if (e.key === 'Enter' && fieldName !== 'message') {
      e.preventDefault();
      nextStep();
    }
    
    if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
      const currentFields = steps[currentStep].fields;
      const currentIndex = currentFields.indexOf(fieldName);
      if (currentIndex < currentFields.length - 1) {
        const nextField = currentFields[currentIndex + 1];
        setTimeout(() => focusField(nextField), 0);
      }
    }
    
    if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
      const currentFields = steps[currentStep].fields;
      const currentIndex = currentFields.indexOf(fieldName);
      if (currentIndex > 0) {
        const prevField = currentFields[currentIndex - 1];
        setTimeout(() => focusField(prevField), 0);
      }
    }
  };
  
  const handleFocus = (fieldName) => {
    addFocusLog(fieldName, 'User focus');
    // Clear error when field is focused
    if (errors[fieldName]) {
      setErrors(prev => ({ ...prev, [fieldName]: null }));
    }
  };
  
  const handleBlur = (fieldName) => {
    addFocusLog(fieldName, 'Blur');
  };
  
  // Auto-focus first field on mount
  useEffect(() => {
    const firstField = steps[0].fields[0];
    setTimeout(() => focusField(firstField), 100);
  }, []);
  
  // Focus trap setup for modal
  useEffect(() => {
    if (showModal) {
      document.addEventListener('keydown', trapFocus);
      return () => document.removeEventListener('keydown', trapFocus);
    }
  }, [showModal]);
  
  const renderField = (fieldName, label, type = 'text', placeholder) => {
    const isTextarea = type === 'textarea';
    const Component = isTextarea ? 'textarea' : 'input';
    
    return (
      <div style={{ marginBottom: '20px' }}>
        <label 
          htmlFor={fieldName}
          style={{ 
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
            color: errors[fieldName] ? '#dc3545' : '#495057'
          }}
        >
          {label} {errors[fieldName] && '❌'}
        </label>
        
        <Component
          ref={fieldRefs[fieldName]}
          id={fieldName}
          type={isTextarea ? undefined : type}
          value={formData[fieldName]}
          onChange={(e) => setFormData(prev => ({ ...prev, [fieldName]: e.target.value }))}
          onFocus={() => handleFocus(fieldName)}
          onBlur={() => handleBlur(fieldName)}
          onKeyDown={(e) => handleKeyNavigation(e, fieldName)}
          placeholder={placeholder}
          style={{
            width: '100%',
            padding: '12px',
            border: `2px solid ${errors[fieldName] ? '#dc3545' : '#ddd'}`,
            borderRadius: '8px',
            fontSize: '16px',
            backgroundColor: errors[fieldName] ? '#ffe6e6' : 'white',
            transition: 'all 0.3s ease',
            minHeight: isTextarea ? '100px' : 'auto',
            resize: isTextarea ? 'vertical' : 'none'
          }}
          {...(isTextarea && { rows: 4 })}
        />
        
        {errors[fieldName] && (
          <div style={{ 
            color: '#dc3545',
            fontSize: '14px',
            marginTop: '5px'
          }}>
            {errors[fieldName]}
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h3>🎯 Advanced Focus Management</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        {/* Form */}
        <div>
          {/* Progress indicator */}
          <div style={{ 
            marginBottom: '25px',
            padding: '15px',
            backgroundColor: '#f8f9fa',
            borderRadius: '10px'
          }}>
            <div style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '15px'
            }}>
              <h4 style={{ margin: 0 }}>
                {steps[currentStep].title} ({currentStep + 1}/{steps.length})
              </h4>
              <span style={{ fontSize: '24px' }}>
                {currentStep === 0 ? '👤' : currentStep === 1 ? '📞' : '💬'}
              </span>
            </div>
            
            {/* Progress bar */}
            <div style={{ 
              width: '100%',
              height: '6px',
              backgroundColor: '#e9ecef',
              borderRadius: '3px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${((currentStep + 1) / steps.length) * 100}%`,
                height: '100%',
                backgroundColor: '#007bff',
                transition: 'width 0.3s ease'
              }} />
            </div>
          </div>
          
          {/* Form fields */}
          <form onSubmit={handleSubmit}>
            <div style={{ 
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '10px',
              border: '2px solid #e9ecef',
              marginBottom: '20px'
            }}>
              {steps[currentStep].fields.map(fieldName => {
                const fieldConfigs = {
                  firstName: { label: 'Ism', placeholder: 'Ismingizni kiriting' },
                  lastName: { label: 'Familiya', placeholder: 'Familiyangizni kiriting' },
                  email: { label: 'Email', type: 'email', placeholder: 'email@example.com' },
                  phone: { label: 'Telefon', type: 'tel', placeholder: '+998 90 123 45 67' },
                  message: { label: 'Xabar', type: 'textarea', placeholder: 'Xabaringizni yozing...' }
                };
                
                const config = fieldConfigs[fieldName];
                return renderField(fieldName, config.label, config.type, config.placeholder);
              })}
            </div>
            
            {/* Navigation buttons */}
            <div style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              gap: '10px'
            }}>
              <button 
                type="button"
                onClick={prevStep}
                disabled={currentStep === 0}
                style={{ 
                  padding: '12px 24px',
                  backgroundColor: currentStep === 0 ? '#6c757d' : '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: currentStep === 0 ? 'not-allowed' : 'pointer'
                }}
              >
                ← Orqaga
              </button>
              
              {currentStep < steps.length - 1 ? (
                <button 
                  type="button"
                  onClick={nextStep}
                  style={{ 
                    padding: '12px 24px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Keyingi →
                </button>
              ) : (
                <button 
                  ref={submitButtonRef}
                  type="submit"
                  style={{ 
                    padding: '12px 24px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  ✅ Yuborish
                </button>
              )}
            </div>
          </form>
        </div>
        
        {/* Focus tracking panel */}
        <div>
          <div style={{ 
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            position: 'sticky',
            top: '20px'
          }}>
            <h4>🎯 Focus Tracking</h4>
            
            {/* Quick focus buttons */}
            <div style={{ marginBottom: '20px' }}>
              <h5>Quick Focus:</h5>
              <div style={{ display: 'grid', gap: '5px' }}>
                {Object.keys(fieldRefs).map(fieldName => (
                  <button
                    key={fieldName}
                    onClick={() => focusField(fieldName)}
                    style={{
                      padding: '6px 10px',
                      backgroundColor: '#007bff',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}
                  >
                    Focus {fieldName}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Focus history */}
            <div>
              <h5>Focus History:</h5>
              <div style={{ 
                maxHeight: '200px',
                overflowY: 'auto',
                fontSize: '12px'
              }}>
                {focusHistory.length === 0 ? (
                  <div style={{ color: '#666', fontStyle: 'italic' }}>
                    Hali focus hodisalari yo'q...
                  </div>
                ) : (
                  focusHistory.slice().reverse().map(log => (
                    <div 
                      key={log.id}
                      style={{ 
                        padding: '5px',
                        marginBottom: '5px',
                        backgroundColor: 'white',
                        borderRadius: '4px',
                        border: '1px solid #ddd'
                      }}
                    >
                      <div><strong>{log.field}</strong></div>
                      <div style={{ color: '#666' }}>
                        {log.action} | Step {log.step} | {log.time}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal with focus trap */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div 
            ref={trapRef}
            style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '12px',
              maxWidth: '500px',
              width: '90%',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}
          >
            <h2 
              ref={modalRef}
              tabIndex={-1}
              style={{ 
                margin: '0 0 20px 0',
                outline: 'none'
              }}
            >
              🎉 Muvaffaqiyatli yuborildi!
            </h2>
            
            <p>Sizning ma'lumotlaringiz qabul qilindi va tez orada javob beramiz.</p>
            
            <div style={{ 
              display: 'flex',
              gap: '10px',
              justifyContent: 'flex-end',
              marginTop: '20px'
            }}>
              <button 
                onClick={closeModal}
                style={{ 
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Yopish
              </button>
              
              <button 
                onClick={() => {
                  closeModal();
                  // Reset form
                  setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                  });
                  setCurrentStep(0);
                  setErrors({});
                  setFocusHistory([]);
                }}
                style={{ 
                  padding: '10px 20px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Yangi forma
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div style={{ 
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#e8f5e8',
        borderRadius: '8px'
      }}>
        <strong>💡 Focus Management Best Practices:</strong>
        <ul style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>
          <li><strong>Accessibility:</strong> Screen reader va keyboard navigation uchun muhim</li>
          <li><strong>UX Enhancement:</strong> Foydalanuvchi tajribasini yaxshilash</li>
          <li><strong>Error Handling:</strong> Xatolik bo'lganda tegishli field'ga fokus berish</li>
          <li><strong>Focus Trap:</strong> Modal'larda fokusni ichkarida saqlash</li>
          <li><strong>Logical Flow:</strong> Tab order va keyboard navigation</li>
        </ul>
      </div>
    </div>
  );
}
```

---

### Uncontrolled Components - When and How

Ba'zan React'ning controlled component pattern'i haddan tashqari bo'lishi mumkin. Uncontrolled components useRef orqali DOM'dan to'g'ridan-to'g'ri qiymat olishga imkon beradi.

#### Controlled vs Uncontrolled Comparison

```jsx
function ControlledVsUncontrolled() {
  // Controlled component states
  const [controlledValues, setControlledValues] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Uncontrolled component refs
  const uncontrolledRefs = {
    name: useRef(null),
    email: useRef(null),
    message: useRef(null)
  };
  
  const [submissions, setSubmissions] = useState([]);
  const [renderCount, setRenderCount] = useState(0);
  
  // Track renders
  useEffect(() => {
    setRenderCount(prev => prev + 1);
  });
  
  const handleControlledSubmit = (e) => {
    e.preventDefault();
    
    const submission = {
      id: Date.now(),
      type: 'Controlled',
      values: { ...controlledValues },
      timestamp: new Date().toLocaleTimeString(),
      renderCount: renderCount
    };
    
    setSubmissions(prev => [submission, ...prev.slice(0, 4)]);
    
    // Reset form
    setControlledValues({
      name: '',
      email: '',
      message: ''
    });
  };
  
  const handleUncontrolledSubmit = (e) => {
    e.preventDefault();
    
    // Get values directly from DOM
    const values = {
      name: uncontrolledRefs.name.current?.value || '',
      email: uncontrolledRefs.email.current?.value || '',
      message: uncontrolledRefs.message.current?.value || ''
    };
    
    const submission = {
      id: Date.now(),
      type: 'Uncontrolled',
      values,
      timestamp: new Date().toLocaleTimeString(),
      renderCount: renderCount
    };
    
    setSubmissions(prev => [submission, ...prev.slice(0, 4)]);
    
    // Reset form - manual DOM manipulation
    Object.values(uncontrolledRefs).forEach(ref => {
      if (ref.current) {
        ref.current.value = '';
      }
    });
  };
  
  const fillRandomData = (type) => {
    const randomData = {
      name: `User ${Math.floor(Math.random() * 1000)}`,
      email: `user${Math.floor(Math.random() * 1000)}@example.com`,
      message: `Random message ${Math.floor(Math.random() * 1000)}`
    };
    
    if (type === 'controlled') {
      setControlledValues(randomData);
    } else {
      // Fill uncontrolled inputs directly
      Object.keys(randomData).forEach(key => {
        if (uncontrolledRefs[key]?.current) {
          uncontrolledRefs[key].current.value = randomData[key];
        }
      });
    }
  };
  
  const getCurrentValues = (type) => {
    if (type === 'controlled') {
      alert(`Controlled values: ${JSON.stringify(controlledValues, null, 2)}`);
    } else {
      const values = {};
      Object.keys(uncontrolledRefs).forEach(key => {
        values[key] = uncontrolledRefs[key].current?.value || '';
      });
      alert(`Uncontrolled values: ${JSON.stringify(values, null, 2)}`);
    }
  };
  
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h3>⚖️ Controlled vs Uncontrolled Components</h3>
      
      {/* Render counter */}
      <div style={{ 
        textAlign: 'center',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <strong>📊 Component Render Count: {renderCount}</strong>
        <div style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>
          Controlled inputlarda har harf terganingizda render oshadi, Uncontrolled'da emas
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        {/* Controlled Form */}
        <div style={{ 
          padding: '20px',
          backgroundColor: '#e7f3ff',
          borderRadius: '12px',
          border: '3px solid #007bff'
        }}>
          <h4 style={{ color: '#007bff', margin: '0 0 20px 0' }}>
            📊 Controlled Components
          </h4>
          
          <form onSubmit={handleControlledSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Name:
              </label>
              <input 
                type="text"
                value={controlledValues.name}
                onChange={(e) => setControlledValues(prev => ({ ...prev, name: e.target.value }))}
                style={{ 
                  width: '100%',
                  padding: '10px',
                  border: '2px solid #007bff',
                  borderRadius: '6px'
                }}
                placeholder="Real-time state update"
              />
              <div style={{ fontSize: '12px', color: '#666', marginTop: '3px' }}>
                Length: {controlledValues.name.length} characters
              </div>
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Email:
              </label>
              <input 
                type="email"
                value={controlledValues.email}
                onChange={(e) => setControlledValues(prev => ({ ...prev, email: e.target.value }))}
                style={{ 
                  width: '100%',
                  padding: '10px',
                  border: '2px solid #007bff',
                  borderRadius: '6px'
                }}
                placeholder="State-controlled value"
              />
              <div style={{ fontSize: '12px', color: '#666', marginTop: '3px' }}>
                Valid: {/\S+@\S+\.\S+/.test(controlledValues.email) ? '✅' : '❌'}
              </div>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Message:
              </label>
              <textarea 
                value={controlledValues.message}
                onChange={(e) => setControlledValues(prev => ({ ...prev, message: e.target.value }))}
                rows={3}
                style={{ 
                  width: '100%',
                  padding: '10px',
                  border: '2px solid #007bff',
                  borderRadius: '6px',
                  resize: 'vertical'
                }}
                placeholder="Controlled textarea"
              />
              <div style={{ fontSize: '12px', color: '#666', marginTop: '3px' }}>
                Words: {controlledValues.message.split(' ').filter(w => w.length > 0).length}
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
              <button 
                type="button"
                onClick={() => fillRandomData('controlled')}
                style={{ 
                  padding: '8px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                🎲 Random Data
              </button>
              
              <button 
                type="button"
                onClick={() => getCurrentValues('controlled')}
                style={{ 
                  padding: '8px',
                  backgroundColor: '#ffc107',
                  color: '#212529',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                👁️ Show Values
              </button>
            </div>
            
            <button 
              type="submit"
              style={{ 
                width: '100%',
                padding: '12px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Submit Controlled
            </button>
          </form>
          
          <div style={{ 
            marginTop: '15px',
            padding: '10px',
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderRadius: '5px',
            fontSize: '12px'
          }}>
            <strong>✅ Pros:</strong>
            <ul style={{ margin: '5px 0', paddingLeft: '15px' }}>
              <li>Real-time validation</li>
              <li>Dynamic UI updates</li>
              <li>Easy to manage</li>
              <li>Predictable state</li>
            </ul>
            <strong>❌ Cons:</strong>
            <ul style={{ margin: '5px 0', paddingLeft: '15px' }}>
              <li>Every keystroke triggers render</li>
              <li>More memory usage</li>
              <li>Slower for large forms</li>
            </ul>
          </div>
        </div>
        
        {/* Uncontrolled Form */}
        <div style={{ 
          padding: '20px',
          backgroundColor: '#fff3cd',
          borderRadius: '12px',
          border: '3px solid #ffc107'
        }}>
          <h4 style={{ color: '#856404', margin: '0 0 20px 0' }}>
            🔗 Uncontrolled Components
          </h4>
          
          <form onSubmit={handleUncontrolledSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Name:
              </label>
              <input 
                ref={uncontrolledRefs.name}
                type="text"
                defaultValue=""
                style={{ 
                  width: '100%',
                  padding: '10px',
                  border: '2px solid #ffc107',
                  borderRadius: '6px'
                }}
                placeholder="No state tracking"
              />
              <div style={{ fontSize: '12px', color: '#666', marginTop: '3px' }}>
                Value tracked by DOM, not React state
              </div>
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Email:
              </label>
              <input 
                ref={uncontrolledRefs.email}
                type="email"
                defaultValue=""
                style={{ 
                  width: '100%',
                  padding: '10px',
                  border: '2px solid #ffc107',
                  borderRadius: '6px'
                }}
                placeholder="DOM-controlled value"
              />
              <div style={{ fontSize: '12px', color: '#666', marginTop: '3px' }}>
                No re-render on typing
              </div>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Message:
              </label>
              <textarea 
                ref={uncontrolledRefs.message}
                defaultValue=""
                rows={3}
                style={{ 
                  width: '100%',
                  padding: '10px',
                  border: '2px solid #ffc107',
                  borderRadius: '6px',
                  resize: 'vertical'
                }}
                placeholder="Uncontrolled textarea"
              />
              <div style={{ fontSize: '12px', color: '#666', marginTop: '3px' }}>
                Performance optimized
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
              <button 
                type="button"
                onClick={() => fillRandomData('uncontrolled')}
                style={{ 
                  padding: '8px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                🎲 Random Data
              </button>
              
              <button 
                type="button"
                onClick={() => getCurrentValues('uncontrolled')}
                style={{ 
                  padding: '8px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                👁️ Show Values
              </button>
            </div>
            
            <button 
              type="submit"
              style={{ 
                width: '100%',
                padding: '12px',
                backgroundColor: '#ffc107',
                color: '#212529',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Submit Uncontrolled
            </button>
          </form>
          
          <div style={{ 
            marginTop: '15px',
            padding: '10px',
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderRadius: '5px',
            fontSize: '12px'
          }}>
            <strong>✅ Pros:</strong>
            <ul style={{ margin: '5px 0', paddingLeft: '15px' }}>
              <li>Better performance</li>
              <li>Less re-renders</li>
              <li>Simple for basic forms</li>
              <li>Less memory usage</li>
            </ul>
            <strong>❌ Cons:</strong>
            <ul style={{ margin: '5px 0', paddingLeft: '15px' }}>
              <li>No real-time validation</li>
              <li>Manual DOM access needed</li>
              <li>Less React-like</li>
              <li>Harder to test</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Submissions History */}
      <div style={{ 
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px'
      }}>
        <h4>📋 Submissions History (Last 5)</h4>
        
        {submissions.length === 0 ? (
          <div style={{ 
            textAlign: 'center',
            color: '#666',
            fontStyle: 'italic',
            padding: '20px'
          }}>
            Hali hech qanday form submit qilinmagan...
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '10px' }}>
            {submissions.map(submission => (
              <div 
                key={submission.id}
                style={{ 
                  padding: '15px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: `2px solid ${submission.type === 'Controlled' ? '#007bff' : '#ffc107'}`
                }}
              >
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '10px'
                }}>
                  <strong style={{ 
                    color: submission.type === 'Controlled' ? '#007bff' : '#856404'
                  }}>
                    {submission.type === 'Controlled' ? '📊' : '🔗'} {submission.type} Form
                  </strong>
                  <span style={{ fontSize: '12px', color: '#666' }}>
                    {submission.timestamp} | Render #{submission.renderCount}
                  </span>
                </div>
                
                <div style={{ fontSize: '14px' }}>
                  <div><strong>Name:</strong> {submission.values.name || '(empty)'}</div>
                  <div><strong>Email:</strong> {submission.values.email || '(empty)'}</div>
                  <div><strong>Message:</strong> {submission.values.message || '(empty)'}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div style={{ 
        marginTop: '25px',
        padding: '20px',
        backgroundColor: '#e8f5e8',
        borderRadius: '8px'
      }}>
        <strong>🎯 Qachon qaysi birini ishlatish:</strong>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
          <div>
            <strong style={{ color: '#007bff' }}>📊 Controlled Components:</strong>
            <ul style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>
              <li>Real-time validation kerak bo'lganda</li>
              <li>Dynamic UI updates uchun</li>
              <li>Complex form logic bilan</li>
              <li>State management bilan integratsiya</li>
            </ul>
          </div>
          
          <div>
            <strong style={{ color: '#856404' }}>🔗 Uncontrolled Components:</strong>
            <ul style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>
              <li>Simple formlar uchun</li>
              <li>Performance muhim bo'lganda</li>
              <li>File input'lar (har doim uncontrolled)</li>
              <li>Third-party library integration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

### Advanced useRef Patterns

useRef'ning ilg'or ishlatilish usullari va professional patterns.

#### useRef ning kuchli imkoniyatlari

```jsx
function AdvancedUseRefPatterns() {
  // Previous values tracking
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const prevCountRef = useRef();
  const prevNameRef = useRef();
  
  // Mutable values that don't trigger re-renders
  const renderCountRef = useRef(0);
  const timerIdRef = useRef(null);
  const callbackRef = useRef(null);
  
  // DOM measurements
  const containerRef = useRef(null);
  const [measurements, setMeasurements] = useState(null);
  
  // Performance monitoring
  const renderTimesRef = useRef([]);
  const componentMountTime = useRef(Date.now());
  
  // Intersection Observer
  const [isVisible, setIsVisible] = useState(false);
  const observerTargetRef = useRef(null);
  const observerRef = useRef(null);
  
  // Custom hook simulation with useRef
  const intervalRef = useRef(null);
  const [time, setTime] = useState(new Date());
  const [isClockRunning, setIsClockRunning] = useState(false);
  
  // Store previous values
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  
  useEffect(() => {
    prevNameRef.current = name;
  }, [name]);
  
  // Track render performance
  useEffect(() => {
    renderCountRef.current += 1;
    const renderTime = Date.now();
    renderTimesRef.current.push(renderTime);
    
    // Keep only last 10 render times
    if (renderTimesRef.current.length > 10) {
      renderTimesRef.current.shift();
    }
  });
  
  // Intersection Observer setup
  useEffect(() => {
    if (!observerTargetRef.current) return;
    
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    observerRef.current.observe(observerTargetRef.current);
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  // Clock functionality
  useEffect(() => {
    if (isClockRunning) {
      intervalRef.current = setInterval(() => {
        setTime(new Date());
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isClockRunning]);
  
  // Measure container dimensions
  const measureContainer = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(containerRef.current);
      
      setMeasurements({
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
        padding: {
          top: parseInt(computedStyle.paddingTop),
          right: parseInt(computedStyle.paddingRight),
          bottom: parseInt(computedStyle.paddingBottom),
          left: parseInt(computedStyle.paddingLeft)
        },
        margin: {
          top: parseInt(computedStyle.marginTop),
          right: parseInt(computedStyle.marginRight),
          bottom: parseInt(computedStyle.marginBottom),
          left: parseInt(computedStyle.marginLeft)
        }
      });
    }
  };
  
  // Debounced callback
  const createDebouncedCallback = (callback, delay) => {
    return (...args) => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
      
      timerIdRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };
  
  const debouncedLog = createDebouncedCallback((value) => {
    console.log('Debounced value:', value);
    callbackRef.current = `Last debounced: ${value} at ${new Date().toLocaleTimeString()}`;
  }, 1000);
  
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    debouncedLog(value);
  };
  
  const scrollToTarget = () => {
    if (observerTargetRef.current) {
      observerTargetRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };
  
  const getAverageRenderTime = () => {
    if (renderTimesRef.current.length < 2) return 0;
    
    const intervals = [];
    for (let i = 1; i < renderTimesRef.current.length; i++) {
      intervals.push(renderTimesRef.current[i] - renderTimesRef.current[i - 1]);
    }
    
    return intervals.reduce((a, b) => a + b, 0) / intervals.length;
  };
  
  const resetAllTimers = () => {
    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current);
      timerIdRef.current = null;
    }
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    setIsClockRunning(false);
  };
  
  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h3>🚀 Advanced useRef Patterns</h3>
      
      <div style={{ display: 'grid', gap: '25px' }}>
        {/* Previous Values Tracking */}
        <div 
          ref={containerRef}
          style={{ 
            padding: '20px',
            backgroundColor: '#e7f3ff',
            borderRadius: '12px',
            border: '2px solid #007bff'
          }}
        >
          <h4>📊 Previous Values Tracking</h4>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '20px'
          }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Counter:
              </label>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <button 
                  onClick={() => setCount(prev => prev - 1)}
                  style={{ 
                    padding: '8px 12px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px'
                  }}
                >
                  -
                </button>
                <span style={{ 
                  padding: '8px 15px',
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  minWidth: '50px',
                  textAlign: 'center'
                }}>
                  {count}
                </span>
                <button 
                  onClick={() => setCount(prev => prev + 1)}
                  style={{ 
                    padding: '8px 12px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px'
                  }}
                >
                  +
                </button>
              </div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                Previous: {prevCountRef.current ?? 'N/A'}
                {prevCountRef.current !== undefined && (
                  <span style={{ marginLeft: '10px' }}>
                    Change: {count - (prevCountRef.current || 0) > 0 ? '📈' : count - (prevCountRef.current || 0) < 0 ? '📉' : '➡️'}
                  </span>
                )}
              </div>
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Name (with debounce):
              </label>
              <input 
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Type to see previous value..."
                style={{ 
                  width: '100%',
                  padding: '8px 12px',
                  border: '2px solid #007bff',
                  borderRadius: '5px'
                }}
              />
              <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                Previous: "{prevNameRef.current || 'N/A'}"
              </div>
              {callbackRef.current && (
                <div style={{ fontSize: '12px', color: '#28a745', marginTop: '5px' }}>
                  {callbackRef.current}
                </div>
              )}
            </div>
          </div>
          
          <button 
            onClick={measureContainer}
            style={{ 
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            📏 Measure This Container
          </button>
          
          {measurements && (
            <div style={{ 
              marginTop: '15px',
              padding: '15px',
              backgroundColor: 'rgba(255,255,255,0.8)',
              borderRadius: '8px',
              fontSize: '14px'
            }}>
              <strong>Container measurements:</strong>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '8px' }}>
                <div>
                  <div>📐 Size: {Math.round(measurements.width)}×{Math.round(measurements.height)}px</div>
                  <div>📍 Position: ({Math.round(measurements.left)}, {Math.round(measurements.top)})</div>
                </div>
                <div>
                  <div>📦 Padding: {measurements.padding.top}px {measurements.padding.right}px {measurements.padding.bottom}px {measurements.padding.left}px</div>
                  <div>🎯 Margin: {measurements.margin.top}px {measurements.margin.right}px {measurements.margin.bottom}px {measurements.margin.left}px</div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Performance Monitoring */}
        <div style={{ 
          padding: '20px',
          backgroundColor: '#fff3cd',
          borderRadius: '12px',
          border: '2px solid #ffc107'
        }}>
          <h4>⚡ Performance Monitoring</h4>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px',
            marginBottom: '20px'
          }}>
            <div style={{ 
              padding: '15px',
              backgroundColor: 'white',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>
                {renderCountRef.current}
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>Total Renders</div>
            </div>
            
            <div style={{ 
              padding: '15px',
              backgroundColor: 'white',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#28a745' }}>
                {Math.round(Date.now() - componentMountTime.current)}ms
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>Component Age</div>
            </div>
            
            <div style={{ 
              padding: '15px',
              backgroundColor: 'white',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#dc3545' }}>
                {Math.round(getAverageRenderTime())}ms
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>Avg Render Interval</div>
            </div>
          </div>
          
          {/* Clock functionality */}
          <div style={{ 
            padding: '15px',
            backgroundColor: 'white',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>
              🕐 {time.toLocaleTimeString()}
            </div>
            
            <button 
              onClick={() => setIsClockRunning(!isClockRunning)}
              style={{ 
                padding: '8px 16px',
                backgroundColor: isClockRunning ? '#dc3545' : '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              {isClockRunning ? '⏸️ Stop' : '▶️ Start'} Clock
            </button>
            
            <button 
              onClick={resetAllTimers}
              style={{ 
                padding: '8px 16px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              🔄 Reset All Timers
            </button>
          </div>
        </div>
        
        {/* Intersection Observer */}
        <div style={{ 
          padding: '20px',
          backgroundColor: '#e8f5e8',
          borderRadius: '12px',
          border: '2px solid #28a745'
        }}>
          <h4>👁️ Intersection Observer Pattern</h4>
          
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                Target visibility: {isVisible ? '✅ Visible' : '❌ Hidden'}
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>
                Scroll down to see the target element
              </div>
            </div>
            
            <button 
              onClick={scrollToTarget}
              style={{ 
                padding: '10px 20px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              📍 Scroll to Target
            </button>
          </div>
          
          {/* Spacer to demonstrate scrolling */}
          <div style={{ height: '150vh', position: 'relative' }}>
            <div style={{ 
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '16px',
              color: '#666',
              textAlign: 'center'
            }}>
              ⬇️ Scroll down to find the target ⬇️
            </div>
          </div>
          
          {/* Target element for intersection observer */}
          <div 
            ref={observerTargetRef}
            style={{ 
              padding: '30px',
              backgroundColor: isVisible ? '#d4edda' : '#f8d7da',
              border: `3px solid ${isVisible ? '#28a745' : '#dc3545'}`,
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>
              🎯 Intersection Target
            </div>
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
              {isVisible ? '👀 I am visible!' : '🙈 I am hidden!'}
            </div>
            <div style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
              This element changes color when it comes into view
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ 
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <strong>🎯 Advanced useRef Use Cases:</strong>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginTop: '15px'
        }}>
          <div>
            <strong>📊 Performance Tracking:</strong>
            <ul style={{ margin: '8px 0 0 0', lineHeight: '1.5' }}>
              <li>Render count monitoring</li>
              <li>Component lifecycle tracking</li>
              <li>Performance metrics collection</li>
            </ul>
          </div>
          
          <div>
            <strong>🔄 Previous State Tracking:</strong>
            <ul style={{ margin: '8px 0 0 0', lineHeight: '1.5' }}>
              <li>Compare current vs previous values</li>
              <li>Undo/redo functionality</li>
              <li>Change detection</li>
            </ul>
          </div>
          
          <div>
            <strong>⏱️ Timer Management:</strong>
            <ul style={{ margin: '8px 0 0 0', lineHeight: '1.5' }}>
              <li>Interval va timeout IDs</li>
              <li>Debouncing va throttling</li>
              <li>Animation frame requests</li>
            </ul>
          </div>
          
          <div>
            <strong>👁️ Observer Patterns:</strong>
            <ul style={{ margin: '8px 0 0 0', lineHeight: '1.5' }}>
              <li>Intersection Observer</li>
              <li>Resize Observer</li>
              <li>Mutation Observer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---


</details>


<hr>

<details>
<summary>
React Context
</summary>

## React Context (Day 1-2: React Context)

### Context API Fundamentals - Global State Management

React Context API - bu komponentlar darajasida ma'lumotlarni prop drilling'siz global tarzda ulashish imkonini beruvchi kuchli vosita. Context yordamida siz bir marta ma'lumot yaratib, uni ilovaning istalgan joyida ishlatishingiz mumkin.

#### Context API nima va nima uchun kerak?

Context API'ning asosiy maqsadi - **prop drilling** muammosini hal qilish. Prop drilling - bu ma'lumotni ota komponentdan bola komponentga, keyin nabiraga va hokazo uzatish jarayoni.

```jsx
import React, { useState, createContext, useContext } from 'react';

// Problem: Prop Drilling
function AppWithPropDrilling() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    theme: 'dark',
    language: 'uz'
  });

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>🔄 Prop Drilling Muammosi</h2>
      
      {/* Ma'lumot har bir darajada uzatilishi kerak */}
      <Header user={user} />
      <MainContent user={user} />
      <Footer user={user} />
      
      <div style={{ 
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#ffe6e6',
        borderRadius: '8px',
        border: '2px solid #dc3545'
      }}>
        <h4 style={{ color: '#dc3545', margin: '0 0 10px 0' }}>
          ❌ Prop Drilling muammolari:
        </h4>
        <ul style={{ margin: 0, lineHeight: '1.6' }}>
          <li>Har bir komponentdan props o'tkazish kerak</li>
          <li>O'rta komponentlar keraksiz props oladi</li>
          <li>Ma'lumot oqimi murakkablashadi</li>
          <li>Refactoring qiyin bo'ladi</li>
          <li>Komponentlar bir-biriga bog'lanib qoladi</li>
        </ul>
      </div>
    </div>
  );
}

function Header({ user }) {
  return (
    <header style={{ 
      padding: '15px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      marginBottom: '15px'
    }}>
      <UserInfo user={user} />
    </header>
  );
}

function MainContent({ user }) {
  return (
    <main style={{ 
      padding: '15px',
      backgroundColor: '#e7f3ff',
      borderRadius: '8px',
      marginBottom: '15px'
    }}>
      <UserProfile user={user} />
      <UserSettings user={user} />
    </main>
  );
}

function Footer({ user }) {
  return (
    <footer style={{ 
      padding: '15px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <UserStatus user={user} />
    </footer>
  );
}

// Bu komponentlar faqat ma'lumotni ko'rsatish uchun
function UserInfo({ user }) {
  return (
    <div>
      <h3>👤 {user.name}</h3>
      <p>📧 {user.email}</p>
    </div>
  );
}

function UserProfile({ user }) {
  return (
    <div style={{ marginBottom: '15px' }}>
      <h4>📋 Profil ma'lumotlari</h4>
      <p>Ism: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

function UserSettings({ user }) {
  return (
    <div>
      <h4>⚙️ Sozlamalar</h4>
      <p>Tema: {user.theme}</p>
      <p>Til: {user.language}</p>
    </div>
  );
}

function UserStatus({ user }) {
  return (
    <div>
      <p>👤 {user.name} faol</p>
    </div>
  );
}
```

---

### Creating Context - Context yaratish

Context yaratish uchun `createContext` funksiyasidan foydalaniladi. Context o'zida default qiymat va Provider/Consumer komponentlarini saqlaydi.

#### Basic Context yaratish

```jsx
// 1. Context yaratish
const UserContext = createContext();

// 2. Context bilan ishlash uchun custom hook
const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};

// 3. Provider komponenti
function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    theme: 'light',
    language: 'uz',
    isLoggedIn: true
  });

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  // User ma'lumotlarini yangilash
  const updateUser = (updates) => {
    setUser(prev => ({ ...prev, ...updates }));
    addNotification(`Profil yangilandi: ${Object.keys(updates).join(', ')}`);
  };

  // Login/Logout
  const login = (userData) => {
    setLoading(true);
    setTimeout(() => {
      setUser({ ...userData, isLoggedIn: true });
      setLoading(false);
      addNotification('Muvaffaqiyatli kirildi');
    }, 1500);
  };

  const logout = () => {
    setUser(prev => ({ ...prev, isLoggedIn: false }));
    addNotification('Tizimdan chiqildi');
  };

  // Notifications
  const addNotification = (message) => {
    const newNotification = {
      id: Date.now(),
      message,
      timestamp: new Date().toLocaleTimeString()
    };
    setNotifications(prev => [newNotification, ...prev.slice(0, 4)]);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  // Context value
  const value = {
    // State
    user,
    notifications,
    loading,
    
    // Actions
    updateUser,
    login,
    logout,
    addNotification,
    clearNotifications
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

// 4. Context ishlatuvchi komponentlar
function ContextBasicsDemo() {
  return (
    <UserProvider>
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2>✨ Context API Basics</h2>
        
        <div style={{ 
          display: 'grid', 
          gap: '20px',
          marginBottom: '25px'
        }}>
          <UserHeader />
          <UserDashboard />
          <UserFooter />
        </div>
        
        <div style={{ 
          padding: '20px',
          backgroundColor: '#e8f5e8',
          borderRadius: '8px',
          border: '2px solid #28a745'
        }}>
          <h4 style={{ color: '#28a745', margin: '0 0 15px 0' }}>
            ✅ Context API afzalliklari:
          </h4>
          <ul style={{ margin: 0, lineHeight: '1.6' }}>
            <li>Prop drilling'dan qutulish</li>
            <li>Global state management</li>
            <li>Komponentlar mustaqilligi</li>
            <li>Clean va tushunarli kod</li>
            <li>Performance optimization imkoniyati</li>
          </ul>
        </div>
      </div>
    </UserProvider>
  );
}

function UserHeader() {
  const { user, notifications, clearNotifications } = useUser();
  
  return (
    <header style={{ 
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      border: '2px solid #e9ecef'
    }}>
      <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px'
      }}>
        <div>
          <h3 style={{ margin: '0 0 5px 0' }}>
            👤 {user.name}
          </h3>
          <p style={{ margin: 0, color: '#666' }}>
            📧 {user.email}
          </p>
        </div>
        
        <div style={{ 
          padding: '8px 12px',
          backgroundColor: user.isLoggedIn ? '#d4edda' : '#f8d7da',
          color: user.isLoggedIn ? '#155724' : '#721c24',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: 'bold'
        }}>
          {user.isLoggedIn ? '🟢 Online' : '🔴 Offline'}
        </div>
      </div>
      
      {/* Notifications */}
      {notifications.length > 0 && (
        <div style={{ 
          padding: '15px',
          backgroundColor: '#e7f3ff',
          borderRadius: '8px',
          border: '2px solid #007bff'
        }}>
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px'
          }}>
            <h5 style={{ margin: 0 }}>
              🔔 Bildirishnomalar ({notifications.length})
            </h5>
            <button
              onClick={clearNotifications}
              style={{
                padding: '4px 8px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              Tozalash
            </button>
          </div>
          
          <div style={{ display: 'grid', gap: '8px' }}>
            {notifications.map(notification => (
              <div 
                key={notification.id}
                style={{ 
                  padding: '8px 12px',
                  backgroundColor: 'white',
                  borderRadius: '6px',
                  fontSize: '14px',
                  border: '1px solid #dee2e6'
                }}
              >
                <strong>{notification.message}</strong>
                <span style={{ color: '#666', marginLeft: '10px' }}>
                  {notification.timestamp}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function UserDashboard() {
  const { user, updateUser, login, logout, loading } = useUser();
  
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    theme: user.theme,
    language: user.language
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
  };

  const handleLogin = () => {
    login({
      name: 'Alice Smith',
      email: 'alice@example.com',
      theme: 'dark',
      language: 'en'
    });
  };

  if (loading) {
    return (
      <div style={{ 
        padding: '40px',
        textAlign: 'center',
        backgroundColor: '#fff3cd',
        borderRadius: '12px',
        border: '2px solid #ffc107'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '15px' }}>⏳</div>
        <h3>Kuting...</h3>
        <p>Ma'lumotlar yuklanmoqda</p>
      </div>
    );
  }

  return (
    <main style={{ 
      padding: '20px',
      backgroundColor: '#e7f3ff',
      borderRadius: '12px',
      border: '2px solid #007bff'
    }}>
      <h3>⚙️ User Dashboard</h3>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px'
      }}>
        {/* User Profile */}
        <div>
          <h4>📋 Profil ma'lumotlari</h4>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Ism:
              </label>
              <input 
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                style={{ 
                  width: '100%',
                  padding: '8px 12px',
                  border: '2px solid #ddd',
                  borderRadius: '6px'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Email:
              </label>
              <input 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                style={{ 
                  width: '100%',
                  padding: '8px 12px',
                  border: '2px solid #ddd',
                  borderRadius: '6px'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Tema:
              </label>
              <select 
                value={formData.theme}
                onChange={(e) => setFormData(prev => ({ ...prev, theme: e.target.value }))}
                style={{ 
                  width: '100%',
                  padding: '8px 12px',
                  border: '2px solid #ddd',
                  borderRadius: '6px'
                }}
              >
                <option value="light">☀️ Light</option>
                <option value="dark">🌙 Dark</option>
                <option value="auto">🔄 Auto</option>
              </select>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Til:
              </label>
              <select 
                value={formData.language}
                onChange={(e) => setFormData(prev => ({ ...prev, language: e.target.value }))}
                style={{ 
                  width: '100%',
                  padding: '8px 12px',
                  border: '2px solid #ddd',
                  borderRadius: '6px'
                }}
              >
                <option value="uz">🇺🇿 O'zbek</option>
                <option value="en">🇺🇸 English</option>
                <option value="ru">🇷🇺 Русский</option>
              </select>
            </div>
            
            <button 
              type="submit"
              style={{ 
                width: '100%',
                padding: '12px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              💾 Saqlash
            </button>
          </form>
        </div>
        
        {/* Actions */}
        <div>
          <h4>🔧 Amallar</h4>
          
          <div style={{ display: 'grid', gap: '10px' }}>
            {user.isLoggedIn ? (
              <button 
                onClick={logout}
                style={{ 
                  padding: '12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                🚪 Chiqish
              </button>
            ) : (
              <button 
                onClick={handleLogin}
                style={{ 
                  padding: '12px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                🚪 Kirish
              </button>
            )}
            
            <div style={{ 
              padding: '15px',
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #dee2e6'
            }}>
              <h5>📊 Joriy sozlamalar:</h5>
              <ul style={{ margin: '5px 0 0 0', lineHeight: '1.6' }}>
                <li>Tema: {user.theme}</li>
                <li>Til: {user.language}</li>
                <li>Status: {user.isLoggedIn ? 'Faol' : 'Nofaol'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function UserFooter() {
  const { user } = useUser();
  
  return (
    <footer style={{ 
      padding: '15px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      border: '1px solid #dee2e6',
      textAlign: 'center'
    }}>
      <p style={{ margin: 0, color: '#666' }}>
        👤 {user.name} | 🌐 {user.language} | 
        {user.theme === 'light' ? ' ☀️' : user.theme === 'dark' ? ' 🌙' : ' 🔄'} | 
        {user.isLoggedIn ? ' 🟢 Online' : ' 🔴 Offline'}
      </p>
    </footer>
  );
}
```

---

### Provider and Consumer Pattern

Context'ni ishlatishning ikki usuli bor: Provider/Consumer pattern va useContext hook. Provider ma'lumotni taqdim etadi, Consumer esa uni iste'mol qiladi.

#### Provider va Consumer bilan ishlash

```jsx
// Multiple Context yaratish
const ThemeContext = createContext();
const UserContext = createContext();
const NotificationContext = createContext();

// Theme Provider
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [customColors, setCustomColors] = useState({
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545'
  });

  const themes = {
    light: {
      background: '#ffffff',
      color: '#212529',
      cardBg: '#f8f9fa',
      border: '#dee2e6'
    },
    dark: {
      background: '#212529',
      color: '#ffffff',
      cardBg: '#343a40',
      border: '#495057'
    },
    blue: {
      background: '#e7f3ff',
      color: '#0056b3',
      cardBg: '#cce7ff',
      border: '#007bff'
    }
  };

  const currentTheme = themes[theme] || themes.light;

  const toggleTheme = () => {
    const themeList = Object.keys(themes);
    const currentIndex = themeList.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeList.length;
    setTheme(themeList[nextIndex]);
  };

  const updateCustomColor = (colorName, value) => {
    setCustomColors(prev => ({
      ...prev,
      [colorName]: value
    }));
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      currentTheme,
      customColors,
      themes,
      setTheme,
      toggleTheme,
      updateCustomColor
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Notification Provider
function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  const [settings, setSettings] = useState({
    sound: true,
    desktop: false,
    email: true,
    autoHide: true,
    duration: 5000
  });

  const addNotification = (message, type = 'info') => {
    const notification = {
      id: Date.now() + Math.random(),
      message,
      type,
      timestamp: new Date().toLocaleTimeString(),
      read: false
    };

    setNotifications(prev => [notification, ...prev]);

    // Auto hide
    if (settings.autoHide) {
      setTimeout(() => {
        removeNotification(notification.id);
      }, settings.duration);
    }

    // Sound effect simulation
    if (settings.sound) {
      console.log('🔔 Notification sound played');
    }
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(n => 
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const updateSettings = (newSettings) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <NotificationContext.Provider value={{
      notifications,
      settings,
      addNotification,
      removeNotification,
      markAsRead,
      clearAll,
      updateSettings
    }}>
      {children}
    </NotificationContext.Provider>
  );
}

// Multiple Provider wrapper
function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>
          {children}
        </UserProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
}

// Consumer Pattern Demo
function ConsumerPatternDemo() {
  return (
    <AppProviders>
      <div style={{ minHeight: '100vh' }}>
        {/* Theme Consumer */}
        <ThemeContext.Consumer>
          {({ currentTheme }) => (
            <div style={{
              backgroundColor: currentTheme.background,
              color: currentTheme.color,
              minHeight: '100vh',
              padding: '20px',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h2>🎨 Provider and Consumer Pattern</h2>
                
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '20px',
                  marginBottom: '25px'
                }}>
                  <ThemeController />
                  <NotificationController />
                  <UserStatus />
                </div>
                
                <NotificationDisplay />
              </div>
            </div>
          )}
        </ThemeContext.Consumer>
      </div>
    </AppProviders>
  );
}

function ThemeController() {
  return (
    <ThemeContext.Consumer>
      {({ theme, themes, currentTheme, customColors, setTheme, toggleTheme, updateCustomColor }) => (
        <div style={{
          padding: '20px',
          backgroundColor: currentTheme.cardBg,
          borderRadius: '12px',
          border: `2px solid ${currentTheme.border}`
        }}>
          <h3>🎨 Theme Controller</h3>
          
          <div style={{ marginBottom: '20px' }}>
            <p><strong>Joriy tema:</strong> {theme}</p>
            
            <div style={{ display: 'grid', gap: '10px', marginBottom: '15px' }}>
              {Object.keys(themes).map(themeName => (
                <button
                  key={themeName}
                  onClick={() => setTheme(themeName)}
                  style={{
                    padding: '8px 12px',
                    backgroundColor: theme === themeName ? customColors.primary : 'transparent',
                    color: theme === themeName ? 'white' : currentTheme.color,
                    border: `2px solid ${customColors.primary}`,
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {themeName === 'light' ? '☀️' : themeName === 'dark' ? '🌙' : '💙'} {themeName}
                </button>
              ))}
            </div>
            
            <button
              onClick={toggleTheme}
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: customColors.secondary,
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              🔄 Temani almashtirish
            </button>
          </div>
          
          {/* Custom Colors */}
          <div>
            <h4>🎨 Ranglarni sozlash:</h4>
            {Object.entries(customColors).map(([colorName, colorValue]) => (
              <div key={colorName} style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>
                  {colorName}:
                </label>
                <input
                  type="color"
                  value={colorValue}
                  onChange={(e) => updateCustomColor(colorName, e.target.value)}
                  style={{
                    width: '100%',
                    height: '35px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

function NotificationController() {
  const [message, setMessage] = useState('');

  return (
    <NotificationContext.Consumer>
      {({ notifications, settings, addNotification, clearAll, updateSettings }) => (
        <ThemeContext.Consumer>
          {({ currentTheme, customColors }) => (
            <div style={{
              padding: '20px',
              backgroundColor: currentTheme.cardBg,
              borderRadius: '12px',
              border: `2px solid ${currentTheme.border}`
            }}>
              <h3>🔔 Notification Controller</h3>
              
              <div style={{ marginBottom: '20px' }}>
                <p><strong>Bildirishnomalar:</strong> {notifications.length}</p>
                
                <div style={{ marginBottom: '15px' }}>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Bildirishnoma matni..."
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      border: `2px solid ${currentTheme.border}`,
                      borderRadius: '6px',
                      backgroundColor: currentTheme.background,
                      color: currentTheme.color,
                      marginBottom: '10px'
                    }}
                  />
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px' }}>
                    <button
                      onClick={() => {
                        if (message.trim()) {
                          addNotification(message, 'success');
                          setMessage('');
                        }
                      }}
                      style={{
                        padding: '8px',
                        backgroundColor: customColors.success,
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}
                    >
                      ✅ Success
                    </button>
                    
                    <button
                      onClick={() => {
                        if (message.trim()) {
                          addNotification(message, 'error');
                          setMessage('');
                        }
                      }}
                      style={{
                        padding: '8px',
                        backgroundColor: customColors.danger,
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}
                    >
                      ❌ Error
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={clearAll}
                  disabled={notifications.length === 0}
                  style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: notifications.length === 0 ? '#6c757d' : customColors.danger,
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: notifications.length === 0 ? 'not-allowed' : 'pointer'
                  }}
                >
                  🗑️ Barchasini o'chirish
                </button>
              </div>
              
              {/* Settings */}
              <div>
                <h4>⚙️ Sozlamalar:</h4>
                {Object.entries(settings).map(([key, value]) => (
                  <label 
                    key={key}
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '8px',
                      fontSize: '14px'
                    }}
                  >
                    <input
                      type={typeof value === 'boolean' ? 'checkbox' : 'number'}
                      checked={typeof value === 'boolean' ? value : undefined}
                      value={typeof value === 'number' ? value : undefined}
                      onChange={(e) => {
                        const newValue = typeof value === 'boolean' 
                          ? e.target.checked 
                          : parseInt(e.target.value);
                        updateSettings({ [key]: newValue });
                      }}
                      style={{ marginRight: '8px' }}
                    />
                    {key}: {typeof value === 'boolean' ? (value ? 'Yoqilgan' : 'O\'chirilgan') : value}
                  </label>
                ))}
              </div>
            </div>
          )}
        </ThemeContext.Consumer>
      )}
    </NotificationContext.Consumer>
  );
}

function UserStatus() {
  return (
    <UserContext.Consumer>
      {({ user, loading }) => (
        <ThemeContext.Consumer>
          {({ currentTheme }) => (
            <div style={{
              padding: '20px',
              backgroundColor: currentTheme.cardBg,
              borderRadius: '12px',
              border: `2px solid ${currentTheme.border}`
            }}>
              <h3>👤 User Status</h3>
              
              {loading ? (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ fontSize: '32px', marginBottom: '10px' }}>⏳</div>
                  <p>Loading...</p>
                </div>
              ) : (
                <div>
                  <div style={{ marginBottom: '15px' }}>
                    <h4 style={{ margin: '0 0 10px 0' }}>{user.name}</h4>
                    <p style={{ margin: '0 0 5px 0', fontSize: '14px' }}>📧 {user.email}</p>
                    <p style={{ margin: '0 0 5px 0', fontSize: '14px' }}>🌐 {user.language}</p>
                    <p style={{ margin: '0', fontSize: '14px' }}>
                      {user.theme === 'light' ? '☀️' : user.theme === 'dark' ? '🌙' : '🔄'} {user.theme}
                    </p>
                  </div>
                  
                  <div style={{
                    padding: '10px',
                    backgroundColor: user.isLoggedIn ? '#d4edda' : '#f8d7da',
                    color: user.isLoggedIn ? '#155724' : '#721c24',
                    borderRadius: '6px',
                    textAlign: 'center',
                    fontWeight: 'bold'
                  }}>
                    {user.isLoggedIn ? '🟢 Online' : '🔴 Offline'}
                  </div>
                </div>
              )}
            </div>
          )}
        </ThemeContext.Consumer>
      )}
    </UserContext.Consumer>
  );
}

function NotificationDisplay() {
  return (
    <NotificationContext.Consumer>
      {({ notifications, removeNotification, markAsRead }) => (
        <ThemeContext.Consumer>
          {({ currentTheme, customColors }) => (
            <div style={{
              padding: '20px',
              backgroundColor: currentTheme.cardBg,
              borderRadius: '12px',
              border: `2px solid ${currentTheme.border}`
            }}>
              <h3>📬 Bildirishnomalar</h3>
              
              {notifications.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
                  Hali bildirishnomalar yo'q
                </p>
              ) : (
                <div style={{ display: 'grid', gap: '10px' }}>
                  {notifications.map(notification => (
                    <div
                      key={notification.id}
                      style={{
                        padding: '15px',
                        backgroundColor: currentTheme.background,
                        borderRadius: '8px',
                        border: `2px solid ${
                          notification.type === 'success' ? customColors.success :
                          notification.type === 'error' ? customColors.danger :
                          customColors.primary
                        }`,
                        opacity: notification.read ? 0.6 : 1,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div style={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                      }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ marginBottom: '5px' }}>
                            <strong>
                              {notification.type === 'success' ? '✅' :
                               notification.type === 'error' ? '❌' : 'ℹ️'} 
                              {notification.message}
                            </strong>
                          </div>
                          <div style={{ fontSize: '12px', color: '#666' }}>
                            {notification.timestamp}
                          </div>
                        </div>
                        
                        <div style={{ display: 'flex', gap: '5px' }}>
                          {!notification.read && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              style={{
                                padding: '4px 8px',
                                backgroundColor: customColors.primary,
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px'
                              }}
                            >
                              ✓
                            </button>
                          )}
                          
                          <button
                            onClick={() => removeNotification(notification.id)}
                            style={{
                              padding: '4px 8px',
                              backgroundColor: customColors.danger,
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '12px'
                            }}
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </ThemeContext.Consumer>
      )}
    </NotificationContext.Consumer>
  );
}
```

---

### useContext Hook - Modern Approach

useContext hook - bu Context'ni ishlatishning eng modern va qulay usuli. Bu Consumer pattern'ga qaraganda ancha sodda va tushunarli.

#### useContext bilan professional patterns

```jsx
// Custom hooks for better organization
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within NotificationProvider');
  }
  return context;
};

// Advanced Context with useReducer
const ShoppingCartContext = createContext();

// Actions
const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  APPLY_DISCOUNT: 'APPLY_DISCOUNT',
  SET_SHIPPING: 'SET_SHIPPING'
};

// Reducer
function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM:
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    case CART_ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    case CART_ACTIONS.UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        ).filter(item => item.quantity > 0)
      };

    case CART_ACTIONS.CLEAR_CART:
      return {
        ...state,
        items: []
      };

    case CART_ACTIONS.APPLY_DISCOUNT:
      return {
        ...state,
        discount: action.payload
      };

    case CART_ACTIONS.SET_SHIPPING:
      return {
        ...state,
        shipping: action.payload
      };

    default:
      return state;
  }
}

// Shopping Cart Provider
function ShoppingCartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    discount: 0,
    shipping: 0
  });

  const { addNotification } = useNotifications();

  // Computed values
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const discountAmount = subtotal * (state.discount / 100);
  const total = subtotal - discountAmount + state.shipping;

  // Actions
  const addItem = (product, quantity = 1) => {
    dispatch({
      type: CART_ACTIONS.ADD_ITEM,
      payload: { ...product, quantity }
    });
    addNotification(`${product.name} savatchaga qo'shildi`, 'success');
  };

  const removeItem = (productId) => {
    const item = state.items.find(item => item.id === productId);
    dispatch({
      type: CART_ACTIONS.REMOVE_ITEM,
      payload: productId
    });
    if (item) {
      addNotification(`${item.name} savatchadan o'chirildi`, 'info');
    }
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: CART_ACTIONS.UPDATE_QUANTITY,
      payload: { id: productId, quantity }
    });
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
    addNotification('Savatcha tozalandi', 'info');
  };

  const applyDiscount = (percentage) => {
    dispatch({
      type: CART_ACTIONS.APPLY_DISCOUNT,
      payload: percentage
    });
    addNotification(`${percentage}% chegirma qo'llanildi`, 'success');
  };

  const setShipping = (cost) => {
    dispatch({
      type: CART_ACTIONS.SET_SHIPPING,
      payload: cost
    });
  };

  const value = {
    // State
    items: state.items,
    discount: state.discount,
    shipping: state.shipping,
    
    // Computed
    itemCount,
    subtotal,
    discountAmount,
    total,
    
    // Actions
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    applyDiscount,
    setShipping
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

// Custom hook
const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within ShoppingCartProvider');
  }
  return context;
};

// useContext Demo Component
function UseContextDemo() {
  return (
    <AppProviders>
      <ShoppingCartProvider>
        <UseContextApp />
      </ShoppingCartProvider>
    </AppProviders>
  );
}

function UseContextApp() {
  const { currentTheme } = useTheme();

  return (
    <div style={{
      backgroundColor: currentTheme.background,
      color: currentTheme.color,
      minHeight: '100vh',
      padding: '20px',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2>🛒 useContext Hook Demo</h2>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '20px',
          marginBottom: '25px'
        }}>
          <ProductCatalog />
          <ShoppingCartDisplay />
        </div>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          <CartSummary />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}

function ProductCatalog() {
  const { currentTheme } = useTheme();
  const { addItem } = useShoppingCart();

  const products = [
    { id: 1, name: 'Laptop', price: 1200, category: 'Electronics', image: '💻' },
    { id: 2, name: 'Phone', price: 800, category: 'Electronics', image: '📱' },
    { id: 3, name: 'Headphones', price: 150, category: 'Audio', image: '🎧' },
    { id: 4, name: 'Book', price: 25, category: 'Education', image: '📚' },
    { id: 5, name: 'Coffee', price: 5, category: 'Food', image: '☕' },
    { id: 6, name: 'T-shirt', price: 30, category: 'Clothing', image: '👕' }
  ];

  return (
    <div style={{
      padding: '20px',
      backgroundColor: currentTheme.cardBg,
      borderRadius: '12px',
      border: `2px solid ${currentTheme.border}`
    }}>
      <h3>🛍️ Mahsulot katalogi</h3>
      
      <div style={{ display: 'grid', gap: '15px' }}>
        {products.map(product => (
          <div
            key={product.id}
            style={{
              padding: '15px',
              backgroundColor: currentTheme.background,
              borderRadius: '8px',
              border: `1px solid ${currentTheme.border}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ fontSize: '32px' }}>{product.image}</div>
              <div>
                <h4 style={{ margin: '0 0 5px 0' }}>{product.name}</h4>
                <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
                  {product.category}
                </p>
                <p style={{ margin: '5px 0 0 0', fontSize: '18px', fontWeight: 'bold' }}>
                  ${product.price}
                </p>
              </div>
            </div>
            
            <button
              onClick={() => addItem(product)}
              style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              ➕ Qo'shish
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShoppingCartDisplay() {
  const { currentTheme } = useTheme();
  const { items, removeItem, updateQuantity } = useShoppingCart();

  return (
    <div style={{
      padding: '20px',
      backgroundColor: currentTheme.cardBg,
      borderRadius: '12px',
      border: `2px solid ${currentTheme.border}`
    }}>
      <h3>🛒 Savatcha</h3>
      
      {items.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic', padding: '40px' }}>
          Savatcha bo'sh
        </p>
      ) : (
        <div style={{ display: 'grid', gap: '10px' }}>
          {items.map(item => (
            <div
              key={item.id}
              style={{
                padding: '15px',
                backgroundColor: currentTheme.background,
                borderRadius: '8px',
                border: `1px solid ${currentTheme.border}`
              }}
            >
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '24px' }}>{item.image}</span>
                  <div>
                    <h5 style={{ margin: '0 0 5px 0' }}>{item.name}</h5>
                    <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                      ${item.price} × {item.quantity} = ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={() => removeItem(item.id)}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  🗑️
                </button>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  -
                </button>
                
                <span style={{ 
                  padding: '4px 12px',
                  backgroundColor: currentTheme.cardBg,
                  borderRadius: '4px',
                  minWidth: '40px',
                  textAlign: 'center'
                }}>
                  {item.quantity}
                </span>
                
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CartSummary() {
  const { currentTheme } = useTheme();
  const { itemCount, subtotal, discountAmount, shipping, total, discount } = useShoppingCart();

  return (
    <div style={{
      padding: '20px',
      backgroundColor: currentTheme.cardBg,
      borderRadius: '12px',
      border: `2px solid ${currentTheme.border}`
    }}>
      <h3>📊 Xulosa</h3>
      
      <div style={{ display: 'grid', gap: '10px' }}>
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          padding: '8px 0',
          borderBottom: `1px solid ${currentTheme.border}`
        }}>
          <span>Mahsulotlar soni:</span>
          <strong>{itemCount}</strong>
        </div>
        
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          padding: '8px 0',
          borderBottom: `1px solid ${currentTheme.border}`
        }}>
          <span>Subtotal:</span>
          <strong>${subtotal.toFixed(2)}</strong>
        </div>
        
        {discount > 0 && (
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 0',
            borderBottom: `1px solid ${currentTheme.border}`,
            color: '#28a745'
          }}>
            <span>Chegirma ({discount}%):</span>
            <strong>-${discountAmount.toFixed(2)}</strong>
          </div>
        )}
        
        {shipping > 0 && (
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 0',
            borderBottom: `1px solid ${currentTheme.border}`
          }}>
            <span>Yetkazib berish:</span>
            <strong>${shipping.toFixed(2)}</strong>
          </div>
        )}
        
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          padding: '12px 0',
          fontSize: '18px',
          fontWeight: 'bold',
          borderTop: `2px solid ${currentTheme.border}`
        }}>
          <span>Jami:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      
      <button
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '16px',
          marginTop: '15px'
        }}
        disabled={itemCount === 0}
      >
        💳 To'lash ({itemCount} mahsulot)
      </button>
    </div>
  );
}

function QuickActions() {
  const { currentTheme } = useTheme();
  const { clearCart, applyDiscount, setShipping, itemCount } = useShoppingCart();
  const [discountInput, setDiscountInput] = useState('');

  const handleApplyDiscount = () => {
    const percentage = parseInt(discountInput);
    if (percentage > 0 && percentage <= 50) {
      applyDiscount(percentage);
      setDiscountInput('');
    }
  };

  return (
    <div style={{
      padding: '20px',
      backgroundColor: currentTheme.cardBg,
      borderRadius: '12px',
      border: `2px solid ${currentTheme.border}`
    }}>
      <h3>⚡ Tez amallar</h3>
      
      <div style={{ display: 'grid', gap: '15px' }}>
        {/* Discount */}
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Chegirma (%):
          </label>
          <div style={{ display: 'flex', gap: '5px' }}>
            <input
              type="number"
              value={discountInput}
              onChange={(e) => setDiscountInput(e.target.value)}
              placeholder="0-50"
              min="0"
              max="50"
              style={{
                flex: 1,
                padding: '8px',
                border: `2px solid ${currentTheme.border}`,
                borderRadius: '4px',
                backgroundColor: currentTheme.background,
                color: currentTheme.color
              }}
            />
            <button
              onClick={handleApplyDiscount}
              disabled={!discountInput || parseInt(discountInput) <= 0}
              style={{
                padding: '8px 12px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              ✅
            </button>
          </div>
        </div>
        
        {/* Shipping */}
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Yetkazib berish:
          </label>
          <div style={{ display: 'grid', gap: '5px' }}>
            <button
              onClick={() => setShipping(0)}
              style={{
                padding: '8px',
                backgroundColor: '#17a2b8',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              🆓 Bepul (0$)
            </button>
            <button
              onClick={() => setShipping(10)}
              style={{
                padding: '8px',
                backgroundColor: '#ffc107',
                color: '#212529',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              🚚 Standart (10$)
            </button>
            <button
              onClick={() => setShipping(25)}
              style={{
                padding: '8px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              ⚡ Tez (25$)
            </button>
          </div>
        </div>
        
        {/* Clear cart */}
        <button
          onClick={clearCart}
          disabled={itemCount === 0}
          style={{
            padding: '12px',
            backgroundColor: itemCount === 0 ? '#6c757d' : '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: itemCount === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          🗑️ Savatchani tozalash
        </button>
      </div>
    </div>
  );
}
```

---

### Context Best Practices - Professional Tips

Context API'dan to'g'ri foydalanish uchun bir qancha muhim tamoyillar mavjud.

#### Performance Optimization va Best Practices

```jsx
// 1. Context Split Pattern - Performance optimization
const UserStateContext = createContext();
const UserActionsContext = createContext();

function OptimizedUserProvider({ children }) {
  const [user, setUser] = useState({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    preferences: {
      theme: 'light',
      language: 'uz',
      notifications: true
    }
  });

  const [profile, setProfile] = useState({
    avatar: '👤',
    bio: 'React developer',
    location: 'Tashkent, Uzbekistan',
    website: 'https://example.com'
  });

  // Memoize actions to prevent unnecessary re-renders
  const actions = useMemo(() => ({
    updateUser: (updates) => {
      setUser(prev => ({ ...prev, ...updates }));
    },
    
    updatePreferences: (preferences) => {
      setUser(prev => ({
        ...prev,
        preferences: { ...prev.preferences, ...preferences }
      }));
    },
    
    updateProfile: (profileUpdates) => {
      setProfile(prev => ({ ...prev, ...profileUpdates }));
    },
    
    resetUser: () => {
      setUser({
        id: null,
        name: '',
        email: '',
        preferences: {
          theme: 'light',
          language: 'uz',
          notifications: true
        }
      });
      setProfile({
        avatar: '👤',
        bio: '',
        location: '',
        website: ''
      });
    }
  }), []);

  // Memoize state to prevent unnecessary re-renders
  const state = useMemo(() => ({
    user,
    profile
  }), [user, profile]);

  return (
    <UserStateContext.Provider value={state}>
      <UserActionsContext.Provider value={actions}>
        {children}
      </UserActionsContext.Provider>
    </UserStateContext.Provider>
  );
}

// Separate hooks for state and actions
const useUserState = () => {
  const context = useContext(UserStateContext);
  if (!context) {
    throw new Error('useUserState must be used within OptimizedUserProvider');
  }
  return context;
};

const useUserActions = () => {
  const context = useContext(UserActionsContext);
  if (!context) {
    throw new Error('useUserActions must be used within OptimizedUserProvider');
  }
  return context;
};

// 2. Context Composition Pattern
function AppContextProvider({ children }) {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <NotificationProvider>
          <OptimizedUserProvider>
            <ShoppingCartProvider>
              {children}
            </ShoppingCartProvider>
          </OptimizedUserProvider>
        </NotificationProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

// 3. Error Boundary for Context
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Context Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px',
          textAlign: 'center',
          backgroundColor: '#f8d7da',
          borderRadius: '12px',
          margin: '20px'
        }}>
          <h2>🚨 Context Error</h2>
          <p>Something went wrong with the application context.</p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              padding: '10px 20px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            🔄 Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// 4. Context Performance Demo
function ContextBestPracticesDemo() {
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount(prev => prev + 1);
  });

  return (
    <AppContextProvider>
      <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2>⚡ Context Best Practices</h2>
        
        <div style={{
          padding: '15px',
          backgroundColor: '#e7f3ff',
          borderRadius: '8px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          <strong>📊 App Render Count: {renderCount}</strong>
          <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#666' }}>
            Optimized context prevents unnecessary re-renders
          </p>
        </div>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '25px'
        }}>
          <OptimizedUserCard />
          <UserPreferences />
          <UserProfile />
        </div>
        
        <PerformanceMonitor />
        <BestPracticesGuide />
      </div>
    </AppContextProvider>
  );
}

// Components using optimized context
function OptimizedUserCard() {
  const { user } = useUserState();
  const { currentTheme } = useTheme();
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount(prev => prev + 1);
  });

  return (
    <div style={{
      padding: '20px',
      backgroundColor: currentTheme.cardBg,
      borderRadius: '12px',
      border: `2px solid ${currentTheme.border}`
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <h3>👤 User Card</h3>
        <span style={{ fontSize: '12px', color: '#666' }}>
          Renders: {renderCount}
        </span>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 10px 0' }}>{user.name}</h4>
        <p style={{ margin: '0 0 5px 0' }}>📧 {user.email}</p>
        <p style={{ margin: '0 0 5px 0' }}>🆔 ID: {user.id}</p>
        <div style={{
          padding: '10px',
          backgroundColor: currentTheme.background,
          borderRadius: '6px',
          marginTop: '10px'
        }}>
          <strong>Preferences:</strong>
          <ul style={{ margin: '5px 0 0 0', paddingLeft: '20px' }}>
            <li>Theme: {user.preferences.theme}</li>
            <li>Language: {user.preferences.language}</li>
            <li>Notifications: {user.preferences.notifications ? 'On' : 'Off'}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function UserPreferences() {
  const { user } = useUserState();
  const { updatePreferences } = useUserActions();
  const { currentTheme } = useTheme();
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount(prev => prev + 1);
  });

  return (
    <div style={{
      padding: '20px',
      backgroundColor: currentTheme.cardBg,
      borderRadius: '12px',
      border: `2px solid ${currentTheme.border}`
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <h3>⚙️ Preferences</h3>
        <span style={{ fontSize: '12px', color: '#666' }}>
          Renders: {renderCount}
        </span>
      </div>
      
      <div style={{ display: 'grid', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Theme:
          </label>
          <select
            value={user.preferences.theme}
            onChange={(e) => updatePreferences({ theme: e.target.value })}
            style={{
              width: '100%',
              padding: '8px',
              border: `2px solid ${currentTheme.border}`,
              borderRadius: '6px',
              backgroundColor: currentTheme.background,
              color: currentTheme.color
            }}
          >
            <option value="light">☀️ Light</option>
            <option value="dark">🌙 Dark</option>
            <option value="auto">🔄 Auto</option>
          </select>
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Language:
          </label>
          <select
            value={user.preferences.language}
            onChange={(e) => updatePreferences({ language: e.target.value })}
            style={{
              width: '100%',
              padding: '8px',
              border: `2px solid ${currentTheme.border}`,
              borderRadius: '6px',
              backgroundColor: currentTheme.background,
              color: currentTheme.color
            }}
          >
            <option value="uz">🇺🇿 O'zbek</option>
            <option value="en">🇺🇸 English</option>
            <option value="ru">🇷🇺 Русский</option>
          </select>
        </div>
        
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="checkbox"
            checked={user.preferences.notifications}
            onChange={(e) => updatePreferences({ notifications: e.target.checked })}
          />
          <span>🔔 Enable notifications</span>
        </label>
      </div>
    </div>
  );
}

function UserProfile() {
  const { profile } = useUserState();
  const { updateProfile } = useUserActions();
  const { currentTheme } = useTheme();
  const [renderCount, setRenderCount] = useState(0);
  const [formData, setFormData] = useState(profile);

  useEffect(() => {
    setRenderCount(prev => prev + 1);
  });

  useEffect(() => {
    setFormData(profile);
  }, [profile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
  };

  return (
    <div style={{
      padding: '20px',
      backgroundColor: currentTheme.cardBg,
      borderRadius: '12px',
      border: `2px solid ${currentTheme.border}`
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <h3>📋 Profile</h3>
        <span style={{ fontSize: '12px', color: '#666' }}>
          Renders: {renderCount}
        </span>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Avatar:
            </label>
            <input
              type="text"
              value={formData.avatar}
              onChange={(e) => setFormData(prev => ({ ...prev, avatar: e.target.value }))}
              style={{
                width: '100%',
                padding: '8px',
                border: `2px solid ${currentTheme.border}`,
                borderRadius: '6px',
                backgroundColor: currentTheme.background,
                color: currentTheme.color
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Bio:
            </label>
            <textarea
              value={formData.bio}
              onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
              rows={3}
              style={{
                width: '100%',
                padding: '8px',
                border: `2px solid ${currentTheme.border}`,
                borderRadius: '6px',
                backgroundColor: currentTheme.background,
                color: currentTheme.color,
                resize: 'vertical'
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Location:
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              style={{
                width: '100%',
                padding: '8px',
                border: `2px solid ${currentTheme.border}`,
                borderRadius: '6px',
                backgroundColor: currentTheme.background,
                color: currentTheme.color
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Website:
            </label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
              style={{
                width: '100%',
                padding: '8px',
                border: `2px solid ${currentTheme.border}`,
                borderRadius: '6px',
                backgroundColor: currentTheme.background,
                color: currentTheme.color
              }}
            />
          </div>
          
          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            💾 Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}

function PerformanceMonitor() {
  const { currentTheme } = useTheme();
  const [performanceData, setPerformanceData] = useState({
    renderCount: 0,
    lastRenderTime: Date.now(),
    averageRenderTime: 0,
    renderTimes: []
  });

  useEffect(() => {
    const startTime = Date.now();
    
    setPerformanceData(prev => {
      const endTime = Date.now();
      const renderTime = endTime - prev.lastRenderTime;
      const newRenderTimes = [...prev.renderTimes, renderTime].slice(-10);
      const averageRenderTime = newRenderTimes.reduce((a, b) => a + b, 0) / newRenderTimes.length;
      
      return {
        renderCount: prev.renderCount + 1,
        lastRenderTime: endTime,
        averageRenderTime: Math.round(averageRenderTime),
        renderTimes: newRenderTimes
      };
    });
  });

  return (
    <div style={{
      padding: '20px',
      backgroundColor: currentTheme.cardBg,
      borderRadius: '12px',
      border: `2px solid ${currentTheme.border}`,
      marginBottom: '20px'
    }}>
      <h3>📊 Performance Monitor</h3>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px'
      }}>
        <div style={{
          padding: '15px',
          backgroundColor: currentTheme.background,
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>
            {performanceData.renderCount}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Total Renders</div>
        </div>
        
        <div style={{
          padding: '15px',
          backgroundColor: currentTheme.background,
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#28a745' }}>
            {performanceData.averageRenderTime}ms
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Avg Render Time</div>
        </div>
        
        <div style={{
          padding: '15px',
          backgroundColor: currentTheme.background,
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffc107' }}>
            {performanceData.renderTimes.length}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Recent Renders</div>
        </div>
      </div>
    </div>
  );
}

function BestPracticesGuide() {
  const { currentTheme } = useTheme();

  const bestPractices = [
    {
      title: "🎯 Context Split Pattern",
      description: "State va actions'larni alohida context'larga ajratish",
      example: "UserStateContext + UserActionsContext"
    },
    {
      title: "🚀 useMemo for Performance",
      description: "Context value'larni memoize qilish",
      example: "useMemo(() => ({ user, actions }), [user])"
    },
    {
      title: "🏗️ Context Composition",
      description: "Kichik context'larni birlashtirib katta provider yaratish",
      example: "AppProvider wraps multiple providers"
    },
    {
      title: "🛡️ Error Boundaries",
      description: "Context error'larini catch qilish",
      example: "ErrorBoundary wraps providers"
    },
    {
      title: "🔧 Custom Hooks",
      description: "Context'ni ishlatish uchun custom hook'lar",
      example: "useUser(), useTheme(), useNotifications()"
    },
    {
      title: "⚡ Selective Subscriptions",
      description: "Faqat kerakli ma'lumotlarga subscribe bo'lish",
      example: "Separate contexts for different data"
    }
  ];

  return (
    <div style={{
      padding: '20px',
      backgroundColor: currentTheme.cardBg,
      borderRadius: '12px',
      border: `2px solid ${currentTheme.border}`
    }}>
      <h3>📚 Context Best Practices</h3>
      
      <div style={{ display: 'grid', gap: '15px' }}>
        {bestPractices.map((practice, index) => (
          <div
            key={index}
            style={{
              padding: '15px',
              backgroundColor: currentTheme.background,
              borderRadius: '8px',
              border: `1px solid ${currentTheme.border}`
            }}
          >
            <h4 style={{ margin: '0 0 8px 0', color: '#007bff' }}>
              {practice.title}
            </h4>
            <p style={{ margin: '0 0 8px 0', lineHeight: '1.5' }}>
              {practice.description}
            </p>
            <code style={{
              padding: '4px 8px',
              backgroundColor: '#f8f9fa',
              borderRadius: '4px',
              fontSize: '12px',
              color: '#e83e8c'
            }}>
              {practice.example}
            </code>
          </div>
        ))}
      </div>
      
      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#fff3cd',
        borderRadius: '8px',
        border: '2px solid #ffc107'
      }}>
        <h4 style={{ color: '#856404', margin: '0 0 10px 0' }}>
          ⚠️ Context Anti-patterns:
        </h4>
        <ul style={{ margin: 0, lineHeight: '1.6' }}>
          <li>Barcha ma'lumotni bitta context'ga joylashtirish</li>
          <li>Juda ko'p re-render'larga sabab bo'lish</li>
          <li>Context'ni prop drilling'ga alternativa sifatida har doim ishlatish</li>
          <li>Context provider'larni deep nesting qilish</li>
          <li>Context value'larni memoize qilmaslik</li>
        </ul>
      </div>
    </div>
  );
}
```



</details>


<hr>

<details>
<summary>
Props vs Context
</summary>

### When to use Props - Local Data Flow

Props - bu React'da komponentlar orasida ma'lumot uzatishning eng asosiy va tabiiy usuli. Props local data flow uchun idealdir va komponentlarni reusable va predictable qiladi.

#### Props'ning optimal ishlatilish holatlari

```jsx
import React, { useState } from 'react';

// 1. Direct Parent-Child Communication
function ProductCard({ product, onAddToCart, showDetails = true }) {
  return (
    <div style={{ 
      border: '2px solid #e9ecef',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '15px',
      backgroundColor: '#fff'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div style={{ fontSize: '48px' }}>{product.emoji}</div>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: '0 0 8px 0' }}>{product.name}</h3>
          <p style={{ margin: '0 0 8px 0', color: '#666' }}>{product.category}</p>
          <p style={{ margin: '0', fontSize: '20px', fontWeight: 'bold', color: '#007bff' }}>
            ${product.price}
          </p>
          {showDetails && product.description && (
            <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#666' }}>
              {product.description}
            </p>
          )}
        </div>
        <button
          onClick={() => onAddToCart(product)}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
}

// 2. Configuration through Props
function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false,
  onClick,
  icon,
  fullWidth = false
}) {
  const variants = {
    primary: { backgroundColor: '#007bff', color: 'white' },
    secondary: { backgroundColor: '#6c757d', color: 'white' },
    success: { backgroundColor: '#28a745', color: 'white' },
    danger: { backgroundColor: '#dc3545', color: 'white' }
  };

  const sizes = {
    small: { padding: '6px 12px', fontSize: '14px' },
    medium: { padding: '10px 20px', fontSize: '16px' },
    large: { padding: '14px 28px', fontSize: '18px' }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...variants[variant],
        ...sizes[size],
        border: 'none',
        borderRadius: '6px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        width: fullWidth ? '100%' : 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: icon ? '8px' : '0'
      }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}

// Props Demo Component
function PropsDemo() {
  const [cart, setCart] = useState([]);

  const products = [
    { 
      id: 1, 
      name: 'MacBook Pro', 
      price: 2499, 
      category: 'Electronics',
      emoji: '💻',
      description: 'High-performance laptop for professionals'
    },
    { 
      id: 2, 
      name: 'iPhone 15', 
      price: 999, 
      category: 'Electronics',
      emoji: '📱',
      description: 'Latest smartphone with advanced features'
    },
    { 
      id: 3, 
      name: 'AirPods Pro', 
      price: 249, 
      category: 'Audio',
      emoji: '🎧',
      description: 'Wireless noise-cancelling earbuds'
    }
  ];

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>📋 Props - Local Data Flow</h2>
      
      {/* Props benefits */}
      <div style={{ 
        padding: '20px',
        backgroundColor: '#e8f5e8',
        borderRadius: '12px',
        border: '2px solid #28a745',
        marginBottom: '25px'
      }}>
        <h3 style={{ color: '#28a745', margin: '0 0 15px 0' }}>
          ✅ Props'ning afzalliklari:
        </h3>
        <ul style={{ margin: 0, lineHeight: '1.6' }}>
          <li><strong>Explicit data flow:</strong> Ma'lumot oqimi aniq va tushunarli</li>
          <li><strong>Component reusability:</strong> Komponentlarni qayta ishlatish oson</li>
          <li><strong>Type safety:</strong> PropTypes yoki TypeScript bilan type checking</li>
          <li><strong>Testing:</strong> Test yozish va debug qilish oson</li>
          <li><strong>Performance:</strong> Faqat zarur props o'zgarganda re-render</li>
        </ul>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '25px', marginBottom: '25px' }}>
        {/* Product List */}
        <div>
          <h3>🛍️ Products (Props for data passing)</h3>
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              showDetails={true}
            />
          ))}
        </div>

        {/* Cart */}
        <div style={{ 
          padding: '20px',
          backgroundColor: '#fff3cd',
          borderRadius: '12px',
          border: '2px solid #ffc107',
          height: 'fit-content'
        }}>
          <h3>🛒 Shopping Cart ({totalItems} items)</h3>
          
          {cart.length === 0 ? (
            <p style={{ color: '#666', fontStyle: 'italic' }}>Cart is empty</p>
          ) : (
            <div>
              {cart.map(item => (
                <div key={item.id} style={{ 
                  padding: '10px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  marginBottom: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <span>{item.emoji} {item.name}</span>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                      ${item.price} × {item.quantity}
                    </div>
                  </div>
                  <strong>${item.price * item.quantity}</strong>
                </div>
              ))}
              
              <div style={{ 
                marginTop: '15px',
                padding: '15px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <strong>Total: ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)}</strong>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Button Examples */}
      <div style={{ marginBottom: '25px' }}>
        <h3>🔘 Buttons (Props for configuration)</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '15px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '12px'
        }}>
          <Button variant="primary" icon="🚀">Primary Button</Button>
          <Button variant="secondary" size="large">Secondary Large</Button>
          <Button variant="success" icon="✅">Success</Button>
          <Button variant="danger" size="small">Small Danger</Button>
          <Button disabled>Disabled Button</Button>
          <Button variant="primary" fullWidth icon="💾">Full Width Save</Button>
        </div>
      </div>
    </div>
  );
}
```

---

### When to use Context - Global State Management

Context API global state management uchun ishlatiladi, ya'ni bir nechta komponentlarda bir xil ma'lumotga muhtoj bo'lganda yoki chuqur nested komponentlarga ma'lumot uzatish kerak bo'lganda.

#### Context'ning optimal ishlatilish holatlari

```jsx
import React, { createContext, useContext, useState, useMemo } from 'react';

// 1. Theme Management (Global UI State)
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [customizations, setCustomizations] = useState({
    fontSize: 16,
    animations: true
  });

  const themes = {
    light: {
      background: '#ffffff',
      text: '#212529',
      primary: '#007bff',
      secondary: '#f8f9fa',
      border: '#dee2e6'
    },
    dark: {
      background: '#212529',
      text: '#ffffff',
      primary: '#0d6efd',
      secondary: '#495057',
      border: '#6c757d'
    },
    contrast: {
      background: '#000000',
      text: '#ffffff',
      primary: '#ffff00',
      secondary: '#333333',
      border: '#ffffff'
    }
  };

  const value = useMemo(() => ({
    currentTheme,
    themeData: themes[currentTheme],
    customizations,
    setCurrentTheme,
    setCustomizations,
    availableThemes: Object.keys(themes)
  }), [currentTheme, customizations]);

  return (
    <ThemeContext.Provider value={value}>
      <div style={{
        backgroundColor: themes[currentTheme].background,
        color: themes[currentTheme].text,
        fontSize: `${customizations.fontSize}px`,
        minHeight: '100vh',
        transition: customizations.animations ? 'all 0.3s ease' : 'none'
      }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

// 2. User Authentication (Global User State)
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (credentials) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const userData = {
        id: Date.now(),
        name: credentials.username,
        email: `${credentials.username}@company.com`,
        role: credentials.username === 'admin' ? 'admin' : 'user',
        loginTime: new Date().toISOString()
      };
      
      setUser(userData);
    } catch (error) {
      throw new Error('Login failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value = useMemo(() => ({
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user
  }), [user, loading]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

// Context Demo Components
function ContextDemo() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ContextApp />
      </AuthProvider>
    </ThemeProvider>
  );
}

function ContextApp() {
  const { themeData } = useTheme();

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>🌐 Context - Global State Management</h2>

      {/* Context benefits */}
      <div style={{ 
        padding: '20px',
        backgroundColor: '#e7f3ff',
        borderRadius: '12px',
        border: '2px solid #007bff',
        marginBottom: '25px'
      }}>
        <h3 style={{ color: '#007bff', margin: '0 0 15px 0' }}>
          ✅ Context'ning afzalliklari:
        </h3>
        <ul style={{ margin: 0, lineHeight: '1.6' }}>
          <li><strong>Global state:</strong> Barcha komponentlar uchun mavjud</li>
          <li><strong>No prop drilling:</strong> Chuqur nested komponentlarga direct access</li>
          <li><strong>Centralized logic:</strong> Business logic bir joyda</li>
          <li><strong>Theme & Auth:</strong> Global UI state va user management</li>
          <li><strong>Cross-cutting concerns:</strong> Logging, analytics, i18n</li>
        </ul>
      </div>

      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '20px',
        marginBottom: '25px'
      }}>
        <AuthComponent />
        <ThemeComponent />
      </div>

      <NestedComponent />
    </div>
  );
}

function AuthComponent() {
  const { user, loading, login, logout, isAuthenticated } = useAuth();
  const { themeData } = useTheme();
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <div style={{
      padding: '20px',
      backgroundColor: themeData.secondary,
      borderRadius: '12px',
      border: `2px solid ${themeData.border}`
    }}>
      <h3>🔐 Authentication (Global User State)</h3>

      {!isAuthenticated ? (
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              placeholder="Username (try: admin or user)"
              value={credentials.username}
              onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
              style={{
                width: '100%',
                padding: '10px',
                border: `2px solid ${themeData.border}`,
                borderRadius: '6px',
                backgroundColor: themeData.background,
                color: themeData.text
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
              style={{
                width: '100%',
                padding: '10px',
                border: `2px solid ${themeData.border}`,
                borderRadius: '6px',
                backgroundColor: themeData.background,
                color: themeData.text
              }}
            />
          </div>
          <button
            type="submit"
            disabled={loading || !credentials.username}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: themeData.primary,
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1
            }}
          >
            {loading ? '🔄 Logging in...' : '🚪 Login'}
          </button>
        </form>
      ) : (
        <div>
          <div style={{ 
            padding: '15px',
            backgroundColor: themeData.background,
            borderRadius: '8px',
            marginBottom: '15px'
          }}>
            <h4>👤 {user.name}</h4>
            <p style={{ margin: '5px 0', fontSize: '14px' }}>
              {user.email}
            </p>
            <p style={{ margin: '5px 0', fontSize: '14px' }}>
              Role: {user.role}
            </p>
          </div>

          <button
            onClick={logout}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            🚪 Logout
          </button>
        </div>
      )}
    </div>
  );
}

function ThemeComponent() {
  const { 
    currentTheme, 
    themeData, 
    customizations, 
    setCurrentTheme, 
    setCustomizations, 
    availableThemes 
  } = useTheme();

  return (
    <div style={{
      padding: '20px',
      backgroundColor: themeData.secondary,
      borderRadius: '12px',
      border: `2px solid ${themeData.border}`
    }}>
      <h3>🎨 Theme (Global UI State)</h3>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
          Theme:
        </label>
        <select
          value={currentTheme}
          onChange={(e) => setCurrentTheme(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            border: `2px solid ${themeData.border}`,
            borderRadius: '6px',
            backgroundColor: themeData.background,
            color: themeData.text
          }}
        >
          {availableThemes.map(theme => (
            <option key={theme} value={theme}>
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
          Font Size: {customizations.fontSize}px
        </label>
        <input
          type="range"
          min="12"
          max="24"
          value={customizations.fontSize}
          onChange={(e) => setCustomizations(prev => ({ 
            ...prev, 
            fontSize: parseInt(e.target.value) 
          }))}
          style={{ width: '100%' }}
        />
      </div>

      <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <input
          type="checkbox"
          checked={customizations.animations}
          onChange={(e) => setCustomizations(prev => ({ 
            ...prev, 
            animations: e.target.checked 
          }))}
        />
        <span>Enable animations</span>
      </label>
    </div>
  );
}

// Nested component to demonstrate context accessibility
function NestedComponent() {
  return (
    <div>
      <h3>🏗️ Nested Components (No Prop Drilling)</h3>
      <Level1 />
    </div>
  );
}

function Level1() {
  const { themeData } = useTheme();
  
  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: themeData.secondary,
      borderRadius: '12px',
      border: `2px solid ${themeData.border}`,
      marginBottom: '15px'
    }}>
      <h4>📁 Level 1 Component</h4>
      <p>Bu komponent Level 2'ni chaqiradi, lekin hech qanday props uzatmaydi</p>
      <Level2 />
    </div>
  );
}

function Level2() {
  const { themeData } = useTheme();
  
  return (
    <div style={{ 
      padding: '15px',
      backgroundColor: themeData.background,
      borderRadius: '8px',
      marginTop: '10px'
    }}>
      <h5>📂 Level 2 Component</h5>
      <p>Bu komponent ham Level 3'ni chaqiradi, props uzatmasdan</p>
      <Level3 />
    </div>
  );
}

function Level3() {
  const { user, isAuthenticated } = useAuth();
  const { themeData, currentTheme } = useTheme();
  
  return (
    <div style={{ 
      padding: '15px',
      backgroundColor: themeData.secondary,
      borderRadius: '8px',
      marginTop: '10px'
    }}>
      <h6>📄 Level 3 Component</h6>
      <p>Bu eng chuqur komponent, lekin barcha global state'larga direct access bor:</p>
      
      <ul style={{ margin: '10px 0', paddingLeft: '20px', fontSize: '14px' }}>
        <li><strong>User:</strong> {isAuthenticated ? user.name : 'Not logged in'}</li>
        <li><strong>Theme:</strong> {currentTheme}</li>
      </ul>
      
      <p style={{ fontSize: '12px', color: themeData.text, opacity: 0.7 }}>
        ✨ Context sayesida prop drilling kerak emas!
      </p>
    </div>
  );
}
```

---

### Prop Drilling Problem - Deep Component Trees

Prop drilling - bu ma'lumotni ota komponentdan juda chuqur joylashgan bola komponentgacha uzatish jarayoni. Bu holda o'rta komponentlar ma'lumotni faqat uzatish uchun props oladi.

#### Prop Drilling muammosining real misoli

```jsx
// ❌ PROP DRILLING PROBLEM
function AppWithPropDrilling() {
  const [user, setUser] = useState({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    preferences: {
      theme: 'dark',
      language: 'uz',
      notifications: true
    }
  });

  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    const notification = {
      id: Date.now(),
      message,
      timestamp: new Date().toLocaleTimeString()
    };
    setNotifications(prev => [notification, ...prev.slice(0, 4)]);
  };

  const updateUserPreferences = (preferences) => {
    setUser(prev => ({ ...prev, preferences: { ...prev.preferences, ...preferences } }));
    addNotification('Preferences updated successfully');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2>❌ Prop Drilling Problem</h2>
      
      <div style={{ 
        padding: '15px',
        backgroundColor: '#f8d7da',
        borderRadius: '8px',
        border: '2px solid #dc3545',
        marginBottom: '20px'
      }}>
        <h3 style={{ color: '#721c24', margin: '0 0 10px 0' }}>
          🚨 Prop Drilling muammolari:
        </h3>
        <ul style={{ margin: 0, lineHeight: '1.6' }}>
          <li>Har bir komponent keraksiz props oladi</li>
          <li>Komponentlar o'rtasida yopiq bog'lanish</li>
          <li>Refactoring qiyin va xatolikka moyil</li>
          <li>Komponentlar qayta ishlatish qiyin</li>
          <li>Props interface'i murakkablashadi</li>
        </ul>
      </div>

      {/* Props har bir darajada uzatilishi kerak */}
      <Header 
        user={user}
        notifications={notifications}
        onUpdatePreferences={updateUserPreferences}
      />
      
      <MainLayout
        user={user}
        onUpdatePreferences={updateUserPreferences}
        onAddNotification={addNotification}
      />
      
      <Footer user={user} />
    </div>
  );
}

// O'rta komponentlar faqat props uzatish uchun mavjud
function Header({ user, notifications, onUpdatePreferences }) {
  return (
    <header style={{ 
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <Navigation user={user} onUpdatePreferences={onUpdatePreferences} />
      <NotificationBell notifications={notifications} />
    </header>
  );
}

function Navigation({ user, onUpdatePreferences }) {
  return (
    <nav style={{ marginBottom: '15px' }}>
      <UserMenu user={user} onUpdatePreferences={onUpdatePreferences} />
    </nav>
  );
}

function UserMenu({ user, onUpdatePreferences }) {
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h3>👤 {user.name}</h3>
      <ThemeToggle 
        currentTheme={user.preferences.theme}
        onThemeChange={(theme) => onUpdatePreferences({ theme })}
      />
    </div>
  );
}

function ThemeToggle({ currentTheme, onThemeChange }) {
  return (
    <button
      onClick={() => onThemeChange(currentTheme === 'light' ? 'dark' : 'light')}
      style={{
        padding: '8px 16px',
        backgroundColor: currentTheme === 'light' ? '#212529' : '#f8f9fa',
        color: currentTheme === 'light' ? '#f8f9fa' : '#212529',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}
    >
      {currentTheme === 'light' ? '🌙' : '☀️'} 
      {currentTheme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}

function NotificationBell({ notifications }) {
  return (
    <div style={{ 
      padding: '10px',
      backgroundColor: '#e7f3ff',
      borderRadius: '6px'
    }}>
      🔔 Notifications ({notifications.length})
      {notifications.slice(0, 3).map(notification => (
        <div key={notification.id} style={{ fontSize: '12px', marginTop: '5px' }}>
          {notification.message} - {notification.timestamp}
        </div>
      ))}
    </div>
  );
}

function MainLayout({ user, onUpdatePreferences, onAddNotification }) {
  return (
    <main style={{ 
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: '20px',
      marginBottom: '20px'
    }}>
      <Sidebar user={user} onUpdatePreferences={onUpdatePreferences} />
      <Content user={user} onAddNotification={onAddNotification} />
    </main>
  );
}

function Sidebar({ user, onUpdatePreferences }) {
  return (
    <aside style={{ 
      padding: '20px',
      backgroundColor: '#e9ecef',
      borderRadius: '8px'
    }}>
      <UserProfile user={user} />
      <QuickSettings user={user} onUpdatePreferences={onUpdatePreferences} />
    </aside>
  );
}

function UserProfile({ user }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h4>Profile</h4>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Theme: {user.preferences.theme}</p>
      <p>Language: {user.preferences.language}</p>
    </div>
  );
}

function QuickSettings({ user, onUpdatePreferences }) {
  return (
    <div>
      <h4>Quick Settings</h4>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        <input
          type="checkbox"
          checked={user.preferences.notifications}
          onChange={(e) => onUpdatePreferences({ notifications: e.target.checked })}
        />
        <span style={{ marginLeft: '8px' }}>Enable notifications</span>
      </label>
      
      <select
        value={user.preferences.language}
        onChange={(e) => onUpdatePreferences({ language: e.target.value })}
        style={{ width: '100%', padding: '5px' }}
      >
        <option value="uz">O'zbek</option>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
}

function Content({ user, onAddNotification }) {
  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <ProductGrid 
        userPreferences={user.preferences}
        onAddNotification={onAddNotification}
      />
    </div>
  );
}

function ProductGrid({ userPreferences, onAddNotification }) {
  const products = [
    { id: 1, name: 'Laptop', price: 1200, inStock: 5 },
    { id: 2, name: 'Phone', price: 800, inStock: 0 },
    { id: 3, name: 'Headphones', price: 150, inStock: 10 }
  ];

  const filteredProducts = products.filter(product => {
    if (userPreferences.theme === 'dark') {
      return product.inStock > 0;
    }
    return true;
  });

  return (
    <div>
      <h4>Products ({filteredProducts.length})</h4>
      <div style={{ display: 'grid', gap: '15px' }}>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddNotification={onAddNotification}
          />
        ))}
      </div>
    </div>
  );
}

function Footer({ user }) {
  return (
    <footer style={{ 
      padding: '15px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <p>© 2024 - Logged in as {user.name} ({user.preferences.language})</p>
    </footer>
  );
}
```

---

### Context Solutions - Eliminating Prop Drilling

Context API prop drilling muammosini hal qilishning eng samarali usuli. Bir marta context yaratib, uni istalgan chuqurlikdagi komponentda ishlatish mumkin.

#### Context bilan yechim

```jsx
// ✅ CONTEXT SOLUTION
const AppStateContext = createContext();

function AppStateProvider({ children }) {
  const [user, setUser] = useState({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    preferences: {
      theme: 'dark',
      language: 'uz',
      notifications: true
    }
  });

  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    const notification = {
      id: Date.now(),
      message,
      timestamp: new Date().toLocaleTimeString()
    };
    setNotifications(prev => [notification, ...prev.slice(0, 4)]);
  };

  const updateUserPreferences = (preferences) => {
    setUser(prev => ({ ...prev, preferences: { ...prev.preferences, ...preferences } }));
    addNotification('Preferences updated successfully');
  };

  const value = useMemo(() => ({
    user,
    notifications,
    addNotification,
    updateUserPreferences
  }), [user, notifications]);

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within AppStateProvider');
  }
  return context;
};

function AppWithContext() {
  return (
    <AppStateProvider>
      <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2>✅ Context Solution</h2>
        
        <div style={{ 
          padding: '15px',
          backgroundColor: '#d4edda',
          borderRadius: '8px',
          border: '2px solid #28a745',
          marginBottom: '20px'
        }}>
          <h3 style={{ color: '#155724', margin: '0 0 10px 0' }}>
            🎉 Context'ning yechimi:
          </h3>
          <ul style={{ margin: 0, lineHeight: '1.6' }}>
            <li>Prop drilling yo'q - to'g'ridan-to'g'ri access</li>
            <li>Komponentlar mustaqil va qayta ishlatilishi mumkin</li>
            <li>Oson refactoring va maintenance</li>
            <li>Clean va tushunarli komponent interface'lari</li>
            <li>Markazlashtirilgan state management</li>
          </ul>
        </div>

        {/* Hech qanday props uzatmasdan */}
        <HeaderClean />
        <MainLayoutClean />
        <FooterClean />
      </div>
    </AppStateProvider>
  );
}

// Komponentlar props olmaydi, to'g'ridan-to'g'ri context'dan oladi
function HeaderClean() {
  return (
    <header style={{ 
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <NavigationClean />
      <NotificationBellClean />
    </header>
  );
}

function NavigationClean() {
  return (
    <nav style={{ marginBottom: '15px' }}>
      <UserMenuClean />
    </nav>
  );
}

function UserMenuClean() {
  const { user } = useAppState();
  
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h3>👤 {user.name}</h3>
      <ThemeToggleClean />
    </div>
  );
}

function ThemeToggleClean() {
  const { user, updateUserPreferences } = useAppState();
  
  return (
    <button
      onClick={() => updateUserPreferences({ 
        theme: user.preferences.theme === 'light' ? 'dark' : 'light' 
      })}
      style={{
        padding: '8px 16px',
        backgroundColor: user.preferences.theme === 'light' ? '#212529' : '#f8f9fa',
        color: user.preferences.theme === 'light' ? '#f8f9fa' : '#212529',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}
    >
      {user.preferences.theme === 'light' ? '🌙' : '☀️'} 
      {user.preferences.theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}

function NotificationBellClean() {
  const { notifications } = useAppState();
  
  return (
    <div style={{ 
      padding: '10px',
      backgroundColor: '#e7f3ff',
      borderRadius: '6px'
    }}>
      🔔 Notifications ({notifications.length})
      {notifications.slice(0, 3).map(notification => (
        <div key={notification.id} style={{ fontSize: '12px', marginTop: '5px' }}>
          {notification.message} - {notification.timestamp}
        </div>
      ))}
    </div>
  );
}

function MainLayoutClean() {
  return (
    <main style={{ 
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: '20px',
      marginBottom: '20px'
    }}>
      <SidebarClean />
      <ContentClean />
    </main>
  );
}

function SidebarClean() {
  return (
    <aside style={{ 
      padding: '20px',
      backgroundColor: '#e9ecef',
      borderRadius: '8px'
    }}>
      <UserProfileClean />
      <QuickSettingsClean />
    </aside>
  );
}

function UserProfileClean() {
  const { user } = useAppState();
  
  return (
    <div style={{ marginBottom: '20px' }}>
      <h4>Profile</h4>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Theme: {user.preferences.theme}</p>
      <p>Language: {user.preferences.language}</p>
    </div>
  );
}

function QuickSettingsClean() {
  const { user, updateUserPreferences } = useAppState();
  
  return (
    <div>
      <h4>Quick Settings</h4>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        <input
          type="checkbox"
          checked={user.preferences.notifications}
          onChange={(e) => updateUserPreferences({ notifications: e.target.checked })}
        />
        <span style={{ marginLeft: '8px' }}>Enable notifications</span>
      </label>
      
      <select
        value={user.preferences.language}
        onChange={(e) => updateUserPreferences({ language: e.target.value })}
        style={{ width: '100%', padding: '5px' }}
      >
        <option value="uz">O'zbek</option>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
}

function ContentClean() {
  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <ProductGridClean />
    </div>
  );
}

function ProductGridClean() {
  const { user, addNotification } = useAppState();
  
  const products = [
    { id: 1, name: 'Laptop', price: 1200, inStock: 5 },
    { id: 2, name: 'Phone', price: 800, inStock: 0 },
    { id: 3, name: 'Headphones', price: 150, inStock: 10 }
  ];

  const filteredProducts = products.filter(product => {
    if (user.preferences.theme === 'dark') {
      return product.inStock > 0;
    }
    return true;
  });

  const handlePurchase = (product) => {
    if (product.inStock > 0) {
      addNotification(`${product.name} purchased successfully!`);
    } else {
      addNotification(`${product.name} is out of stock!`);
    }
  };

  return (
    <div>
      <h4>Products ({filteredProducts.length})</h4>
      <div style={{ display: 'grid', gap: '15px' }}>
        {filteredProducts.map(product => (
          <div
            key={product.id}
            style={{ 
              padding: '15px',
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #dee2e6',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <h5 style={{ margin: '0 0 5px 0' }}>{product.name}</h5>
              <p style={{ margin: '0', color: '#666' }}>
                ${product.price} - Stock: {product.inStock}
              </p>
            </div>
            <button
              onClick={() => handlePurchase(product)}
              disabled={product.inStock === 0}
              style={{
                padding: '8px 16px',
                backgroundColor: product.inStock > 0 ? '#28a745' : '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: product.inStock > 0 ? 'pointer' : 'not-allowed'
              }}
            >
              {product.inStock > 0 ? 'Buy' : 'Out of Stock'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function FooterClean() {
  const { user } = useAppState();
  
  return (
    <footer style={{ 
      padding: '15px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <p>© 2024 - Logged in as {user.name} ({user.preferences.language})</p>
    </footer>
  );
}
```

---

### Performance Considerations - Smart Context Usage

Context'ni ishlatish performance ta'sir qilishi mumkin. Shuning uchun to'g'ri patterns va optimization techniques'larini bilish muhim.

#### Performance Optimization Strategies

```jsx
// Context Splitting for Performance
const UserDataContext = createContext();
const UserActionsContext = createContext();

function PerformanceOptimizedProvider({ children }) {
  // User data - kam o'zgaradi
  const [userData, setUserData] = useState({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin'
  });

  // Actions - hech qachon o'zgarmaydi
  const actions = useMemo(() => ({
    updateUser: (updates) => {
      setUserData(prev => ({ ...prev, ...updates }));
    }
  }), []);

  // Memoize contexts for performance
  const userDataValue = useMemo(() => userData, [userData]);

  return (
    <UserDataContext.Provider value={userDataValue}>
      <UserActionsContext.Provider value={actions}>
        {children}
      </UserActionsContext.Provider>
    </UserDataContext.Provider>
  );
}

function PerformanceComparison() {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>⚡ Performance Considerations</h2>
      
      <div style={{ 
        padding: '20px',
        backgroundColor: '#fff3cd',
        borderRadius: '12px',
        border: '2px solid #ffc107',
        marginBottom: '25px'
      }}>
        <h3 style={{ color: '#856404', margin: '0 0 15px 0' }}>
          ⚠️ Performance Best Practices:
        </h3>
        <ul style={{ margin: 0, lineHeight: '1.6' }}>
          <li><strong>Context Splitting:</strong> Alohida context'lar turli xil ma'lumotlar uchun</li>
          <li><strong>Memoization:</strong> useMemo va useCallback ishlatish</li>
          <li><strong>Selective Subscriptions:</strong> Faqat kerakli ma'lumotlarga subscribe</li>
          <li><strong>Component Optimization:</strong> React.memo va lazy loading</li>
          <li><strong>State Normalization:</strong> Flat structure va minimal state</li>
        </ul>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Non-optimized approach */}
        <div style={{
          padding: '15px',
          backgroundColor: '#f8d7da',
          borderRadius: '8px',
          border: '2px solid #dc3545'
        }}>
          <h4 style={{ color: '#721c24', margin: '0 0 15px 0' }}>
            ❌ Non-optimized Context
          </h4>
          
          <p style={{ fontSize: '14px', marginBottom: '15px' }}>
            Barcha state bir context'da, har o'zgarishda barcha komponentlar re-render bo'ladi
          </p>
          
          <ul style={{ margin: 0, fontSize: '12px', lineHeight: '1.5' }}>
            <li>Bir context barcha state uchun</li>
            <li>Har o'zgarishda hamma re-render</li>
            <li>Performance bottleneck</li>
            <li>Keraksiz yangilanishlar</li>
          </ul>
        </div>

        {/* Optimized approach */}
        <div style={{
          padding: '15px',
          backgroundColor: '#d4edda',
          borderRadius: '8px',
          border: '2px solid #28a745'
        }}>
          <h4 style={{ color: '#155724', margin: '0 0 15px 0' }}>
            ✅ Optimized Context
          </h4>
          
          <p style={{ fontSize: '14px', marginBottom: '15px' }}>
            Split context'lar, faqat tegishli komponentlar yangilanadi
          </p>
          
          <ul style={{ margin: 0, fontSize: '12px', lineHeight: '1.5' }}>
            <li>Split context'lar</li>
            <li>Selective subscriptions</li>
            <li>Memoization ishlatilgan</li>
            <li>Optimal performance</li>
          </ul>
        </div>
      </div>
      
      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#e7f3ff',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <strong>📏 Performance Impact:</strong>
        <p style={{ margin: '10px 0 0 0', fontSize: '14px' }}>
          Optimized approach ~70% kam re-render, ~50% tez ishlash, 
          ~30% kam memory usage
        </p>
      </div>
    </div>
  );
}
```

---

### Decision Matrix: Props vs Context

Qachon props, qachon context ishlatishni hal qilish uchun professional decision matrix.

```jsx
function DecisionMatrix() {
  const scenarios = [
    {
      scenario: "Parent-Child ma'lumot uzatish",
      propsScore: 10,
      contextScore: 2,
      recommendation: "Props",
      reason: "Simple, explicit, optimal performance"
    },
    {
      scenario: "2-3 darajali component nesting",
      propsScore: 8,
      contextScore: 4,
      recommendation: "Props",
      reason: "Hali ham manageable, props aniqroq"
    },
    {
      scenario: "5+ darajali deep nesting",
      propsScore: 3,
      contextScore: 9,
      recommendation: "Context",
      reason: "Prop drilling muammosi, context yaxshiroq"
    },
    {
      scenario: "Global theme/auth state",
      propsScore: 1,
      contextScore: 10,
      recommendation: "Context",
      reason: "Global state, har joyda kerak"
    },
    {
      scenario: "Component configuration",
      propsScore: 9,
      contextScore: 3,
      recommendation: "Props",
      reason: "Reusability, explicit API"
    },
    {
      scenario: "Cross-cutting concerns (i18n, logging)",
      propsScore: 2,
      contextScore: 9,
      recommendation: "Context",
      reason: "Har joyda kerak, prop drilling impractical"
    }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2>🎯 Decision Matrix: Props vs Context</h2>
      
      <div style={{
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '12px',
        border: '2px solid #e9ecef',
        marginBottom: '25px'
      }}>
        <h3>📋 Decision Criteria</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h4 style={{ color: '#28a745' }}>✅ Use Props when:</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li>Parent-child communication</li>
              <li>Component configuration</li>
              <li>Reusable components</li>
              <li>Simple data flow</li>
              <li>Performance critical</li>
              <li>Testing important</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: '#007bff' }}>🌐 Use Context when:</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li>Deep component nesting</li>
              <li>Global state (theme, auth)</li>
              <li>Cross-cutting concerns</li>
              <li>Shared business logic</li>
              <li>Multiple consumers</li>
              <li>Centralized management</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '2px solid #e9ecef',
        overflow: 'hidden',
        marginBottom: '25px'
      }}>
        <div style={{
          padding: '15px',
          backgroundColor: '#007bff',
          color: 'white',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr 2fr',
          gap: '10px',
          fontWeight: 'bold'
        }}>
          <div>Scenario</div>
          <div>Props Score</div>
          <div>Context Score</div>
          <div>Best Choice</div>
          <div>Reason</div>
        </div>
        
        {scenarios.map((item, index) => (
          <div
            key={index}
            style={{
              padding: '15px',
              backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white',
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr 1fr 2fr',
              gap: '10px',
              alignItems: 'center',
              borderBottom: index === scenarios.length - 1 ? 'none' : '1px solid #e9ecef'
            }}
          >
            <div style={{ fontWeight: 'bold' }}>{item.scenario}</div>
            
            <div style={{ textAlign: 'center' }}>
              <span style={{
                padding: '4px 8px',
                borderRadius: '4px',
                backgroundColor: item.propsScore >= 7 ? '#28a745' : item.propsScore >= 4 ? '#ffc107' : '#dc3545',
                color: 'white',
                fontSize: '12px'
              }}>
                {item.propsScore}/10
              </span>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <span style={{
                padding: '4px 8px',
                borderRadius: '4px',
                backgroundColor: item.contextScore >= 7 ? '#28a745' : item.contextScore >= 4 ? '#ffc107' : '#dc3545',
                color: 'white',
                fontSize: '12px'
              }}>
                {item.contextScore}/10
              </span>
            </div>
            
            <div style={{ 
              textAlign: 'center',
              fontWeight: 'bold',
              color: item.recommendation === 'Props' ? '#28a745' : '#007bff'
            }}>
              {item.recommendation === 'Props' ? '📋' : '🌐'} {item.recommendation}
            </div>
            
            <div style={{ fontSize: '14px', color: '#666' }}>
              {item.reason}
            </div>
          </div>
        ))}
      </div>
      
      <div style={{
        padding: '20px',
        backgroundColor: '#e8f5e8',
        borderRadius: '12px',
        border: '2px solid #28a745'
      }}>
        <h3 style={{ color: '#155724', margin: '0 0 15px 0' }}>
          🎯 Final Recommendations:
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h4>📊 Props - Default Choice</h4>
            <p style={{ margin: '10px 0', lineHeight: '1.6' }}>
              Props React'ning default pattern'i. Agar aniq sabab bo'lmasa, 
              props'dan foydalaning. Bu predictable, testable va reusable komponentlar yaratadi.
            </p>
          </div>
          
          <div>
            <h4>🌍 Context - Strategic Use</h4>
            <p style={{ margin: '10px 0', lineHeight: '1.6' }}>
              Context'ni faqat global state yoki prop drilling muammosi bo'lganda ishlating. 
              Performance va complexity'ni hisobga oling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```


</details>

<hr>

<details>
<summary>
React komponentlarni kompozitsiya qilish
</summary>
# 5-7-kun: React komponentlarni kompozitsiya qilish

## Mundarija
- Advanced component composition
- Render props pattern
- Component patterns
- Reusable components
- Component libraries
1. [Komponent Kompozitsiyasi Nima?](#komponent-kompozitsiyasi-nima)
2. [Ilg'or Komponent Kompozitsiyasi](#ilgor-komponent-kompozitsiyasi)
3. [Render Props Pattern](#render-props-pattern)
4. [Komponent Pattern'lari](#komponent-patternlari)
5. [Qayta Ishlatish Mumkin Bo'lgan Komponentlar](#qayta-ishlatish-mumkin-bolgan-komponentlar)
6. [Komponent Kutubxonalari](#komponent-kutubxonalari)

---

## Komponent Kompozitsiyasi Nima?

**Komponent kompozitsiyasi** - bu React ilovasida kichik, sodda komponentlarni birlashtirish orqali murakkab va kuchli interfeys elementlarini yaratish usuli. Bu yondashuv kod qayta ishlatish (reusability), saqlash osonligi (maintainability) va komponentlar orasidagi bog'lanishni kamaytirish (loose coupling) kabi afzalliklarni beradi.

### Asosiy Prinsiplar:

1. **Bitta mas'uliyat prinsipi** - Har bir komponent faqat bitta vazifani bajarishi kerak
2. **Qayta ishlatish** - Komponentlar turli joylarda ishlatilishi mumkin bo'lishi kerak
3. **Tarkib qilish** - Kichik komponentlardan kattaroq komponentlar yaratish
4. **Moslashuvchanlik** - Props orqali komponentlarni sozlash imkoni

### Nima uchun Muhim?

```jsx
// ❌ Yomon yondashuv - hamma narsa bitta komponentda
function UserDashboard() {
  return (
    <div>
      <div className="header">
        <img src="logo.png" alt="Logo" />
        <nav>
          <a href="/home">Bosh sahifa</a>
          <a href="/profile">Profil</a>
        </nav>
        <button>Chiqish</button>
      </div>
      <div className="sidebar">
        <ul>
          <li>Asosiy</li>
          <li>Sozlamalar</li>
        </ul>
      </div>
      <div className="content">
        <h1>Foydalanuvchi paneli</h1>
        <p>Ma'lumotlar...</p>
      </div>
    </div>
  );
}

// ✅ Yaxshi yondashuv - kompozitsiya
function UserDashboard() {
  return (
    <Layout>
      <Header />
      <Sidebar />
      <MainContent />
    </Layout>
  );
}
```

---

## Ilg'or Komponent Kompozitsiyasi

### 1. Higher-Order Components (HOCs) - Yuqori Darajali Komponentlar

**HOC nima?** - Bu komponentni qabul qilib, yangi komponent qaytaradigan funksiya. HOC komponentga qo'shimcha funksionallik qo'shish uchun ishlatiladi.

#### HOC'ning Asosiy Tamoyillari:

1. **Asl komponentni o'zgartirmaydi** - Yangi komponent yaratadi
2. **Props'ni o'tkazadi** - Asl komponentga barcha propsni uzatadi
3. **Funktsionallik qo'shadi** - Autentifikatsiya, logging, kash va boshqalar

```jsx
// Misol 1: Autentifikatsiya HOC'i
function withAuth(WrappedComponent) {
  return function EnhancedComponent(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      // Foydalanuvchi tizimga kirganligini tekshirish
      const checkAuth = async () => {
        try {
          const token = localStorage.getItem('authToken');
          if (token) {
            // Token'ni server bilan tekshirish
            const response = await fetch('/api/verify-token', {
              headers: { Authorization: `Bearer ${token}` }
            });
            setIsAuthenticated(response.ok);
          }
        } catch (error) {
          setIsAuthenticated(false);
        } finally {
          setLoading(false);
        }
      };
      
      checkAuth();
    }, []);
    
    if (loading) {
      return <div className="loading">Yuklanmoqda...</div>;
    }
    
    if (!isAuthenticated) {
      return (
        <div className="auth-required">
          <h2>Kirish talab qilinadi</h2>
          <p>Ushbu sahifani ko'rish uchun tizimga kirishingiz kerak.</p>
          <button onClick={() => window.location.href = '/login'}>
            Kirish
          </button>
        </div>
      );
    }
    
    // Agar autentifikatsiya qilingan bo'lsa, asl komponentni qaytarish
    return <WrappedComponent {...props} />;
  };
}

// Foydalanish:
const UserProfile = () => <div>Foydalanuvchi profili</div>;
const ProtectedProfile = withAuth(UserProfile);

const AdminPanel = () => <div>Admin paneli</div>;
const ProtectedAdminPanel = withAuth(AdminPanel);
```

#### Keng Tarqalgan HOC Pattern'lari:

```jsx
// Misol 2: Ma'lumotlarni olish HOC'i
function withData(url) {
  return function(WrappedComponent) {
    return function DataEnhancedComponent(props) {
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      
      useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
            const response = await fetch(url);
            if (!response.ok) throw new Error('Ma\'lumot olishda xatolik');
            const result = await response.json();
            setData(result);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
        
        fetchData();
      }, [url]);
      
      return (
        <WrappedComponent 
          {...props}
          data={data}
          loading={loading}
          error={error}
        />
      );
    };
  };
}

// Foydalanish:
const UserList = ({ data, loading, error }) => {
  if (loading) return <div>Yuklanmoqda...</div>;
  if (error) return <div>Xato: {error}</div>;
  
  return (
    <ul>
      {data?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

const UsersWithData = withData('/api/users')(UserList);
```

### 2. Compound Components - Murakkab Komponentlar

**Compound Components nima?** - Bu bir-biri bilan bog'liq bo'lgan komponentlar to'plami bo'lib, ular birgalikda to'liq funksionallik beradi. Masalan, HTML'dagi `<select>` va `<option>` elementlari kabi.

#### Compound Components'ning Afzalliklari:

1. **Moslashuvchanlik** - Foydalanuvchi kerakli qismlarni tanlay oladi
2. **Tushunarlilik** - API aniq va tushunarli
3. **Kengaytirilish** - Yangi qismlar osongina qo'shiladi

```jsx
// Misol: Accordion komponenti
const AccordionContext = createContext();

function Accordion({ children, allowMultiple = false }) {
  const [openItems, setOpenItems] = useState(new Set());
  
  const toggleItem = (itemId) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(itemId);
      }
      return newSet;
    });
  };
  
  const value = {
    openItems,
    toggleItem
  };
  
  return (
    <AccordionContext.Provider value={value}>
      <div className="accordion">
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

// Accordion Item komponenti
Accordion.Item = function AccordionItem({ children, id }) {
  return (
    <div className="accordion-item" data-item-id={id}>
      {children}
    </div>
  );
};

// Accordion Header komponenti
Accordion.Header = function AccordionHeader({ children, itemId }) {
  const { openItems, toggleItem } = useContext(AccordionContext);
  const isOpen = openItems.has(itemId);
  
  return (
    <button 
      className={`accordion-header ${isOpen ? 'open' : ''}`}
      onClick={() => toggleItem(itemId)}
      aria-expanded={isOpen}
    >
      <span>{children}</span>
      <span className="accordion-icon">
        {isOpen ? '−' : '+'}
      </span>
    </button>
  );
};

// Accordion Content komponenti
Accordion.Content = function AccordionContent({ children, itemId }) {
  const { openItems } = useContext(AccordionContext);
  const isOpen = openItems.has(itemId);
  
  return (
    <div className={`accordion-content ${isOpen ? 'open' : 'closed'}`}>
      {isOpen && (
        <div className="accordion-content-inner">
          {children}
        </div>
      )}
    </div>
  );
};

// Foydalanish:
function FAQ() {
  return (
    <Accordion allowMultiple={false}>
      <Accordion.Item id="item1">
        <Accordion.Header itemId="item1">
          React nima?
        </Accordion.Header>
        <Accordion.Content itemId="item1">
          React - bu Facebook tomonidan yaratilgan JavaScript kutubxonasi.
        </Accordion.Content>
      </Accordion.Item>
      
      <Accordion.Item id="item2">
        <Accordion.Header itemId="item2">
          Komponent nima?
        </Accordion.Header>
        <Accordion.Content itemId="item2">
          Komponent - bu qayta ishlatish mumkin bo'lgan UI elementi.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
```

---

## Render Props Pattern

**Render Props nima?** - Bu komponentlar orasida mantiqni almashish uchun ishlatilادیgan pattern bo'lib, prop sifatida funksiya uzatiladi va bu funksiya komponent ichidagi ma'lumotlarni qaytaradi.

### Render Props'ning Asosiy Kontseptsiyasi:

```jsx
// Asosiy struktura
function DataProvider({ render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Ma'lumotlarni olish mantiqи
  useEffect(() => {
    fetchData().then(result => {
      setData(result);
      setLoading(false);
    });
  }, []);
  
  // Render funksiyasini chaqirish
  return render({ data, loading });
}

// Foydalanish
<DataProvider 
  render={({ data, loading }) => (
    loading ? <div>Loading...</div> : <div>{data}</div>
  )}
/>
```

### Kengaytirilgan Misol - Sichqoncha Pozitsiyasini Kuzatish:

```jsx
function MouseTracker({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
  
  const handleMouseEnter = () => setIsInside(true);
  const handleMouseLeave = () => setIsInside(false);
  
  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: '100%', height: '300px', border: '1px solid #ccc' }}
    >
      {children({ position, isInside })}
    </div>
  );
}

// Foydalanish:
function MouseDemo() {
  return (
    <MouseTracker>
      {({ position, isInside }) => (
        <div>
          <h3>Sichqoncha holati:</h3>
          <p>X: {position.x}, Y: {position.y}</p>
          <p>Ichkarida: {isInside ? 'Ha' : 'Yo\'q'}</p>
          {isInside && (
            <div 
              style={{
                position: 'absolute',
                left: position.x - 10,
                top: position.y - 10,
                width: 20,
                height: 20,
                backgroundColor: 'red',
                borderRadius: '50%',
                pointerEvents: 'none'
              }}
            />
          )}
        </div>
      )}
    </MouseTracker>
  );
}
```

### Render Props vs Custom Hooks

Zamonaviy React'da render props o'rniga custom hook'lar ko'proq ishlatiladi:

```jsx
// Render Props versiyasi
function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData);
    setLoading(false);
  }, [url]);
  
  return render({ data, loading });
}

// Custom Hook versiyasi - Zamonaviy yondashuv
function useData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Xatolik yuz berdi');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

// Foydalanish - ancha sodda!
function UserProfile() {
  const { data: user, loading, error } = useData('/api/user/profile');
  
  if (loading) return <div>Yuklanmoqda...</div>;
  if (error) return <div>Xato: {error}</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

---

## Komponent Pattern'lari

### 1. Container va Presentational Components

Bu pattern mantiq (logic) va ko'rish (presentation) qismlarini ajratadi:

```jsx
// Presentational Component - faqat ko'rsatish uchun
function UserCard({ user, onEdit, onDelete }) {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.role}</p>
      <div className="actions">
        <button onClick={() => onEdit(user.id)}>
          Tahrirlash
        </button>
        <button onClick={() => onDelete(user.id)}>
          O'chirish
        </button>
      </div>
    </div>
  );
}

// Container Component - mantiq va ma'lumotlar
function UserCardContainer({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUser(userId).then(userData => {
      setUser(userData);
      setLoading(false);
    });
  }, [userId]);
  
  const handleEdit = (id) => {
    // Tahrirlash mantiqи
    navigate(`/users/${id}/edit`);
  };
  
  const handleDelete = async (id) => {
    if (confirm('Rostdan ham o\'chirmoqchimisiz?')) {
      await deleteUser(id);
      // Sahifani yangilash yoki yo'naltirish
    }
  };
  
  if (loading) return <div>Yuklanmoqda...</div>;
  
  return (
    <UserCard 
      user={user}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}
```

### 2. Provider Pattern - Context API bilan

Chuqur joylashgan komponentlarga ma'lumot berish uchun:

```jsx
// Theme Provider misoli
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // LocalStorage'dan mavjud theme'ni olish
    return localStorage.getItem('theme') || 'light';
  });
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  const themeConfig = {
    light: {
      background: '#ffffff',
      color: '#000000',
      primary: '#007bff'
    },
    dark: {
      background: '#1a1a1a',
      color: '#ffffff',
      primary: '#0d6efd'
    }
  };
  
  const value = {
    theme,
    toggleTheme,
    colors: themeConfig[theme]
  };
  
  useEffect(() => {
    document.body.style.backgroundColor = themeConfig[theme].background;
    document.body.style.color = themeConfig[theme].color;
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme ThemeProvider ichida ishlatilishi kerak');
  }
  return context;
}

// Foydalanish
function Header() {
  const { theme, toggleTheme, colors } = useTheme();
  
  return (
    <header style={{ backgroundColor: colors.primary }}>
      <h1>Mening Ilovam</h1>
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'} 
        {theme === 'light' ? 'Qorong\'i' : 'Yorug\''}
      </button>
    </header>
  );
}
```

---

## Qayta Ishlatish Mumkin Bo'lgan Komponentlar

### Moslashuvchan Button Komponenti

```jsx
import PropTypes from 'prop-types';

const Button = React.forwardRef(({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  children,
  onClick,
  type = 'button',
  className = '',
  ...props
}, ref) => {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    danger: 'btn-danger',
    warning: 'btn-warning',
    info: 'btn-info'
  };
  
  const sizeClasses = {
    small: 'btn-sm',
    medium: 'btn-md',
    large: 'btn-lg'
  };
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'btn-full-width',
    loading && 'btn-loading',
    className
  ].filter(Boolean).join(' ');
  
  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && <span className="spinner" />}
      <span>{children}</span>
    </button>
  );
});

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string
};

// Foydalanish misollari
function Examples() {
  return (
    <div>
      <Button variant="primary" size="large">
        Asosiy tugma
      </Button>
      <Button variant="danger" loading>
        O'chirilmoqda...
      </Button>
      <Button variant="secondary" fullWidth>
        To'liq kenglik
      </Button>
    </div>
  );
}
```

---

## Komponent Kutubxonalari

### Design System yaratish

```jsx
// 1. Design tokens
export const tokens = {
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      500: '#3b82f6',
      600: '#2563eb',
      900: '#1e3a8a'
    },
    semantic: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#06b6d4'
    }
  },
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem'     // 48px
  },
  typography: {
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem'
    },
    fontWeights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    }
  }
};

// 2. Base Component - Card
export function Card({ 
  children, 
  padding = 'md', 
  shadow = 'sm',
  rounded = 'md',
  className = '',
  ...props 
}) {
  const paddingMap = {
    sm: tokens.spacing.sm,
    md: tokens.spacing.md,
    lg: tokens.spacing.lg
  };
  
  const shadowMap = {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  };
  
  const style = {
    padding: paddingMap[padding],
    boxShadow: shadowMap[shadow],
    borderRadius: tokens.spacing[rounded],
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb'
  };
  
  return (
    <div 
      className={`card ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}
```

## Xulosa va Eng Yaxshi Amaliyotlar

### Asosiy Tamoyillar:
1. **SOLID prinsiплари** - Har bir komponent bitta vazifani bajarishi
2. **DRY (Don't Repeat Yourself)** - Kod takrorlanmaslik
3. **Kompozitsiya > Merosxo'rlik** - Kichik qismlardan katta tuzish
4. **Props-driven** - Props orqali boshqarish

### Performance Optimizatsiyasi:
```jsx
// React.memo bilan optimizatsiya
const ExpensiveComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => {
    return expensiveCalculation(data);
  }, [data]);
  
  return <div>{processedData}</div>;
});

// useCallback bilan event handler'larni optimizatsiya
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);
  
  return <ChildComponent onClick={handleClick} />;
};
```

### Test Qilish:
```jsx
import { render, screen, fireEvent } from '@testing-library/react';

test('Button component ishlashi', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Test</Button>);
  
  const button = screen.getByRole('button');
  fireEvent.click(button);
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```


</details>
