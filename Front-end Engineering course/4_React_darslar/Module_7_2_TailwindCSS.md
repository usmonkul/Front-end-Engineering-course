# TailwindCSS Professional Qo'llanma - React bilan birgalikda

TailwindCSS - bu utility-first CSS framework bo'lib, tez va oson interfeys yaratish uchun mo'ljallangan. Bu qo'llanma TailwindCSS ning eng so'nggi versiyasi (v3.4+) asosida yozilgan va React loyihalari bilan birgalikda foydalanish uchun mo'ljallangan.

---

<details>
<summary>Dars 1: TailwindCSS bilan tanishuv va o'rnatish</summary>

## 1.1 TailwindCSS nima?

TailwindCSS - bu utility-first CSS framework bo'lib, u oddiy CSS klasslar orqali tez va professional veb interfeyslari yaratishga imkon beradi. An'anaviy CSS framework'lardan farqli o'laroq, TailwindCSS tayyor komponentlar bermaydi, balki kichik utility klasslari beradi.

### TailwindCSS'ning afzalliklari:

1. **Utility-First yondashuv**: Har bir klass bitta vazifani bajaradi
2. **Responsive dizayn**: Barcha ekran o'lchamlari uchun moslashuvchan
3. **Customization**: To'liq sozlanishi mumkin
4. **Performance**: Faqat ishlatilgan klasslar final bundle'ga kiradi
5. **Developer Experience**: IntelliSense qo'llab-quvvatlash

### TailwindCSS vs An'anaviy CSS:

```css
/* An'anaviy CSS */
.button {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
}

.button:hover {
  background-color: #2563eb;
}
```

```jsx
/* TailwindCSS bilan */
<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
  Tugma
</button>
```

## 1.2 React loyihasida TailwindCSS o'rnatish

### Create React App bilan:

```bash
# Yangi React loyihasi yaratish
npx create-react-app my-tailwind-app
cd my-tailwind-app

# TailwindCSS o'rnatish
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Vite + React bilan:

```bash
# Yangi Vite + React loyihasi yaratish
npm create vite@latest my-tailwind-app -- --template react
cd my-tailwind-app
npm install

# TailwindCSS o'rnatish
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Next.js bilan:

```bash
# Yangi Next.js loyihasi yaratish
npx create-next-app@latest my-tailwind-app
cd my-tailwind-app

# TailwindCSS o'rnatish
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 1.3 TailwindCSS konfiguratsiyasi

### tailwind.config.js fayli:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### CSS faylini sozlash:

`src/index.css` yoki `src/App.css` fayliga quyidagi qatorlarni qo'shing:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom CSS */
@layer base {
  html {
    font-family: 'Inter', sans-serif;
  }
}

@layer components {
  .btn-primary {
    @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors;
  }
}
```

## 1.4 Asosiy Utility Klasslar

### Spacing (Bo'shliq):
- **Padding**: `p-4` (padding: 1rem), `px-2` (padding-left/right: 0.5rem)
- **Margin**: `m-4` (margin: 1rem), `mt-2` (margin-top: 0.5rem)

### Colors (Ranglar):
- **Background**: `bg-red-500`, `bg-blue-100`, `bg-gray-900`
- **Text**: `text-red-500`, `text-white`, `text-gray-700`
- **Border**: `border-red-500`, `border-2`

### Typography (Matn):
- **Size**: `text-sm`, `text-lg`, `text-xl`, `text-2xl`
- **Weight**: `font-light`, `font-normal`, `font-bold`, `font-black`
- **Alignment**: `text-left`, `text-center`, `text-right`

### Layout:
- **Display**: `block`, `inline-block`, `flex`, `grid`, `hidden`
- **Flexbox**: `flex`, `justify-center`, `items-center`, `flex-col`
- **Grid**: `grid`, `grid-cols-3`, `gap-4`

## 1.5 Birinchi React komponenti

```jsx
// src/components/Card.jsx
import React from 'react';

function Card({ title, description, image }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <img 
        className="w-full h-48 object-cover" 
        src={image} 
        alt={title} 
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-900">
          {title}
        </h2>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
          Batafsil
        </button>
      </div>
    </div>
  );
}

export default Card;
```

```jsx
// src/App.jsx
import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          TailwindCSS bilan React
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            title="Web Development"
            description="Zamonaviy veb dasturlash texnologiyalari bilan tanishing"
            image="https://via.placeholder.com/300x200"
          />
          <Card 
            title="Mobile Apps"
            description="React Native yordamida mobil ilovalar yarating"
            image="https://via.placeholder.com/300x200"
          />
          <Card 
            title="UI/UX Design"
            description="Foydalanuvchi interfeysi va tajriba dizayni"
            image="https://via.placeholder.com/300x200"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
```

## 1.6 Responsive Design

TailwindCSS responsive dizayn uchun quyidagi breakpoint'larni ishlatadi:

- `sm`: 640px va undan katta
- `md`: 768px va undan katta  
- `lg`: 1024px va undan katta
- `xl`: 1280px va undan katta
- `2xl`: 1536px va undan katta

```jsx
// Responsive misol
<div className="
  w-full 
  sm:w-1/2 
  md:w-1/3 
  lg:w-1/4 
  xl:w-1/6
  p-4
  text-center
  sm:text-left
  md:text-center
">
  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
    Responsive matn
  </h2>
</div>
```

## 1.7 Amaliy mashq

1. Yangi React loyihasi yarating
2. TailwindCSS o'rnating va sozlang
3. Quyidagi komponentlarni yarating:
   - Header (navigation bilan)
   - Hero section
   - Card komponenti
   - Footer

Bu darsda siz TailwindCSS bilan tanishdingiz va uni React loyihasiga qo'shishni o'rgandingiz. Keyingi darsda biz responsive dizayn, komponentlar yaratish va ilg'or texnikalar bilan ishlashni o'rganamiz.

</details>

---

<details>
<summary>Dars 2: Responsive dizayn va komponentlar yaratish</summary>

## 2.1 Flexbox bilan ishlash

TailwindCSS Flexbox uchun keng imkoniyatlar taqdim etadi:

### Asosiy Flexbox klasslar:

```jsx
// Container
<div className="flex">           // display: flex
<div className="inline-flex">    // display: inline-flex

// Direction
<div className="flex-row">       // flex-direction: row (default)
<div className="flex-col">       // flex-direction: column
<div className="flex-row-reverse"> // flex-direction: row-reverse
<div className="flex-col-reverse"> // flex-direction: column-reverse

// Wrap
<div className="flex-wrap">      // flex-wrap: wrap
<div className="flex-nowrap">    // flex-wrap: nowrap
<div className="flex-wrap-reverse"> // flex-wrap: wrap-reverse
```

### Justify Content (Gorizontal joylashish):

```jsx
<div className="flex justify-start">     // justify-content: flex-start
<div className="flex justify-center">    // justify-content: center
<div className="flex justify-end">       // justify-content: flex-end
<div className="flex justify-between">   // justify-content: space-between
<div className="flex justify-around">    // justify-content: space-around
<div className="flex justify-evenly">    // justify-content: space-evenly
```

### Align Items (Vertikal joylashish):

```jsx
<div className="flex items-start">      // align-items: flex-start
<div className="flex items-center">     // align-items: center
<div className="flex items-end">        // align-items: flex-end
<div className="flex items-stretch">    // align-items: stretch
<div className="flex items-baseline">   // align-items: baseline
```

### Amaliy Flexbox misoli:

```jsx
// src/components/Navigation.jsx
import React, { useState } from 'react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img className="h-8 w-8 mr-2" src="/logo.svg" alt="Logo" />
            <span className="font-bold text-xl text-gray-900">Brand</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Bosh sahifa
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Xizmatlar
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Portfolio
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Aloqa
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Bog'lanish
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2 transition-colors">
                Bosh sahifa
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2 transition-colors">
                Xizmatlar
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2 transition-colors">
                Portfolio
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2 transition-colors">
                Aloqa
              </a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mt-2 transition-colors">
                Bog'lanish
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
```

## 2.2 Grid Layout tizimi

TailwindCSS CSS Grid uchun kuchli qo'llab-quvvatlash taqdim etadi:

### Asosiy Grid klasslar:

```jsx
// Grid container
<div className="grid">                   // display: grid

// Grid columns
<div className="grid-cols-1">           // grid-template-columns: repeat(1, minmax(0, 1fr))
<div className="grid-cols-2">           // grid-template-columns: repeat(2, minmax(0, 1fr))
<div className="grid-cols-3">           // grid-template-columns: repeat(3, minmax(0, 1fr))
<div className="grid-cols-12">          // grid-template-columns: repeat(12, minmax(0, 1fr))

// Grid rows
<div className="grid-rows-1">           // grid-template-rows: repeat(1, minmax(0, 1fr))
<div className="grid-rows-4">           // grid-template-rows: repeat(4, minmax(0, 1fr))

// Gap
<div className="gap-4">                 // gap: 1rem
<div className="gap-x-4 gap-y-2">      // column-gap: 1rem; row-gap: 0.5rem
```

### Grid item joylashish:

```jsx
// Column span
<div className="col-span-2">            // grid-column: span 2 / span 2
<div className="col-span-full">         // grid-column: 1 / -1

// Row span
<div className="row-span-2">            // grid-row: span 2 / span 2

// Start/End positions
<div className="col-start-2 col-end-4"> // grid-column-start: 2; grid-column-end: 4
<div className="row-start-1 row-end-3"> // grid-row-start: 1; grid-row-end: 3
```

Bu darsda siz Flexbox va Grid bilan ishlashni o'rgandingiz. Keyingi qismda forms va murakkab komponentlar yaratishni ko'rib chiqamiz.

</details>

---

<details>
<summary>Dars 3: Ilg'or texnikalar va komponentlar kutubxonasi</summary>

## 3.1 Forms va Input komponentlari

TailwindCSS form elementlari uchun ajoyib qo'llab-quvvatlash taqdim etadi:

```jsx
// src/components/ContactForm.jsx
import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Ism kiritish majburiy';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email kiritish majburiy';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Yaroqsiz email format';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Xabar kiritish majburiy';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Xabar muvaffaqiyatli yuborildi!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Biz bilan bog'laning
          </h2>
          <p className="text-xl text-gray-600">
            Savollaringiz bormi? Biz sizga yordam berishga tayyormiz!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Ismingiz *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`
                  w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all
                  ${errors.name 
                    ? 'border-red-500 bg-red-50' 
                    : 'border-gray-300 focus:border-blue-500'
                  }
                `}
                placeholder="Ismingizni kiriting"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email manzilingiz *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`
                  w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all
                  ${errors.email 
                    ? 'border-red-500 bg-red-50' 
                    : 'border-gray-300 focus:border-blue-500'
                  }
                `}
                placeholder="email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Xabaringiz *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className={`
                w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none
                ${errors.message 
                  ? 'border-red-500 bg-red-50' 
                  : 'border-gray-300 focus:border-blue-500'
                }
              `}
              placeholder="Xabaringizni yozing..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105
                ${isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'
                }
              `}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Yuborilmoqda...
                </div>
              ) : (
                'Xabar yuborish'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
```

## 3.2 Dark Mode qo'llab-quvvatlash

### Konfiguratsiya:

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class', // 'media' yoki 'class' variant
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#0f172a'
        },
        foreground: {
          DEFAULT: '#0f172a',
          dark: '#f8fafc'
        }
      }
    }
  },
  plugins: []
}
```

### Theme Provider:

```jsx
// src/contexts/ThemeContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    setTheme(savedTheme || systemTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

## 3.3 Animations va Transitions

```jsx
// Transition klasslar
<div className="transition-all duration-300 ease-in-out">
<div className="transition-colors duration-200">
<div className="transition-transform duration-500">

// Transform klasslar
<div className="transform hover:scale-105">
<div className="transform hover:rotate-3">
<div className="transform hover:-translate-y-2">

// Animation klasslar
<div className="animate-spin">      // Aylantirish
<div className="animate-ping">      // Ping effekti
<div className="animate-pulse">     // Pulse effekti
<div className="animate-bounce">    // Sakrash effekti
```

## 3.4 Performance Optimizatsiyasi

### PurgeCSS sozlamasi:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
```

## 3.5 Amaliy mashqlar

1. **Contact Form**: Validation va animatsiyalar bilan
2. **Dark Mode**: To'liq dark mode qo'llab-quvvatlash
3. **Dashboard**: Admin panel yaratish
4. **Performance**: Bundle o'lchamini optimizatsiya qilish

## 3.6 Qo'shimcha resurslar

- **TailwindCSS rasmi sayt**: https://tailwindcss.com
- **Tailwind UI**: https://tailwindui.com
- **Headless UI**: https://headlessui.com
- **Heroicons**: https://heroicons.com

## 3.7 Xulosa

Bu qo'llanmada siz TailwindCSS ning barcha asosiy va ilg'or imkoniyatlari bilan tanishdingiz:

1. **Asoslar**: O'rnatish, konfiguratsiya, utility klasslar
2. **Layout**: Flexbox, Grid, responsive dizayn
3. **Komponentlar**: Forms, navigatsiya, kartalar
4. **Ilg'or**: Dark mode, animatsiyalar, optimizatsiya

TailwindCSS bilan professional va zamonaviy veb interfeyslari yaratishga tayyorsiz! Amaliyotda ko'proq mashq qiling va loyihalaringizda qo'llang.

Har bir darsdan keyin amaliy mashqlar bajarib, o'rgangan bilimlaringizni mustahkamlang. TailwindCSS - bu kuchli vosita bo'lib, to'g'ri foydalanilganda ajoyib natijalar beradi.

</details>