---

## **📝 JavaScript Imtihon (2 soat)**

---

### **1️⃣ Challenge: Shart operatorlari (if/else), Array, Function, Object**

**Vazifa:**
Talabalarga quyidagi **ma’lumotlar bazasi** beriladi:

```js
const students = [
  { name: "Ali", score: 85 },
  { name: "Laylo", score: 55 },
  { name: "Javohir", score: 72 },
  { name: "Madina", score: 40 },
  { name: "Bobur", score: 91 },
  { name: "Zarina", score: 45 },
  { name: "Sardor", score: 78 },
  { name: "Nilufar", score: 62 }
];

```

**Topshiriq:**

1. `checkResult` nomli funksiya yarating. U o‘quvchining `score` qiymatiga qarab:

   * 60 va undan yuqori → "O‘tdi"
   * 60 dan past → "Yiqildi"
     deb qaytarsin.
2. Har bir o‘quvchi uchun natijani konsolda ko‘rsating: `"Ali – O‘tdi"`
3. Yangi massiv yarating va faqat o‘tgan o‘quvchilarni saqlang.

⏱️ **Vaqt:** \~20 daqiqa

---

### **2️⃣ Challenge: Array Methods (map, filter, reduce) bilan ishlash**

**Vazifa:**
Quyidagi **buyurtmalar ro‘yxati** berilgan:

```js
const orders = [
  { id: 1, product: "MacBook Pro", price: 2500, category: "Laptop", brand: "Apple", inStock: true },
  { id: 2, product: "iPhone 15 Pro", price: 1200, category: "Telefon", brand: "Apple", inStock: true },
  { id: 3, product: "Samsung Galaxy S24", price: 900, category: "Telefon", brand: "Samsung", inStock: false },
  { id: 4, product: "Sony WH-1000XM5", price: 400, category: "Quloqchin", brand: "Sony", inStock: true },
  { id: 5, product: "Dell XPS 15", price: 1800, category: "Laptop", brand: "Dell", inStock: true },
  { id: 6, product: "AirPods Pro", price: 250, category: "Quloqchin", brand: "Apple", inStock: true },
  { id: 7, product: "Playstation 5", price: 500, category: "Gaming", brand: "Sony", inStock: false },
  { id: 8, product: "iPad Air", price: 650, category: "Planshet", brand: "Apple", inStock: true },
  { id: 9, product: "Nintendo Switch", price: 300, category: "Gaming", brand: "Nintendo", inStock: true },
  { id: 10, product: "Samsung Monitor", price: 450, category: "Monitor", brand: "Samsung", inStock: true }
];
```

**Topshiriq:**

1. `filter` yordamida 500 dan qimmat mahsulotlarni toping.
2. `map` bilan barcha mahsulot nomlarini katta harflarda qaytaring.
3. `reduce` yordamida umumiy narxni hisoblang.
4. `filter` bilan faqat stokda bor (`inStock: true`) mahsulotlarni ajrating.
5. Apple brendidagi mahsulotlar sonini toping.
6. Natijalarni konsolda ko'rsating.

📌 **Bonus:** Eng qimmat va eng arzon mahsulotni console.log qiling.

⏱️ **Vaqt:** \~20 daqiqa

---

### **3️⃣ DOM Challenge: Array of Objects bilan ma’lumotni ekranga chiqarish**

*(mini loyihacha – import/export mavzusini ham qamrab oladi)*

**Vazifa:**
Quyidagi **sayohat kartalari** ma’lumotlari beriladi (alohida `data.js` faylida):

```js
export const trips = [
  { 
    id: 1, 
    city: "Parij", 
    country: "Fransiya", 
    price: 1200, 
    duration: "7 kun",
    image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop",
    rating: 4.8,
    description: "Sevgi va romantika shahri"
  },
  { 
    id: 2, 
    city: "Tokio", 
    country: "Yaponiya", 
    price: 1500, 
    duration: "10 kun",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
    rating: 4.9,
    description: "Zamonaviy texnologiya va an'analar uyg'unligi"
  },
  { 
    id: 3, 
    city: "Dubai", 
    country: "BAA", 
    price: 1000, 
    duration: "5 kun",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
    rating: 4.7,
    description: "Hashamatli shahzoda shahri"
  },
  { 
    id: 4, 
    city: "Istambul", 
    country: "Turkiya", 
    price: 800, 
    duration: "6 kun",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400&h=300&fit=crop",
    rating: 4.6,
    description: "Ikki qit'ani birlashtiruvchi ajoyib shahar"
  },
  { 
    id: 5, 
    city: "Nyu-York", 
    country: "AQSH", 
    price: 1400, 
    duration: "8 kun",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop",
    rating: 4.5,
    description: "Hech qachon uxlamaydigan shahar"
  },
  { 
    id: 6, 
    city: "London", 
    country: "Angliya", 
    price: 1100, 
    duration: "7 kun",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
    rating: 4.4,
    description: "Qirollik an'analari va zamonaviylik"
  },
  { 
    id: 7, 
    city: "Rim", 
    country: "Italiya", 
    price: 950, 
    duration: "6 kun",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop",
    rating: 4.7,
    description: "Abadiy shahar va buyuk tarix"
  },
  { 
    id: 8, 
    city: "Samarqand", 
    country: "O'zbekiston", 
    price: 400, 
    duration: "4 kun",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    rating: 4.9,
    description: "Sharq durdonasi va Amir Temur maqbarasi"
  }
];
```

**Topshiriq:**

1. `main.js` faylida ushbu ma'lumotlarni import qiling.
2. HTML va CSS yordamida har bir sayohat uchun kartochka yarating:
   - Rasm (`image`)
   - Shahar va mamlakat (`city`, `country`)
   - Narx va muddat (`price`, `duration`)
   - Rating va tavsif (`rating`, `description`)
3. Narxi 1000 dan past bo'lgan kartochkalarni yashil fon bilan ajrating.
4. Rating 4.7 dan yuqori bo'lgan sayohatlarni oltin ramka bilan ajrating.
5. Natijani dinamik ravishda DOMga qo'shing.

📌 **Bonus:** 
- "Arzon sayohatlar" tugmasi → 1000$ dan arzon sayohatlarni filtrlash
- "Eng mashhur" tugmasi → eng yuqori rating bo'yicha saralash

⏱️ **Vaqt:** \~35 daqiqa

---

### **4️⃣ Fetch API Challenge: Real mahsulotlar ma'lumotbasidan ma'lumot olish**

**Vazifa:**
`https://dummyjson.com/products` API manzilidan real mahsulotlar ma'lumotini oling.

**API haqida:** DummyJSON - bu 194 ta real mahsulot ma'lumotini o'z ichiga olgan API. Har bir mahsulotda rasm, narx, tavsif, rating va boshqa ma'lumotlar bor.

**Topshiriq:**

1. Ma'lumotni `fetch` bilan olib keling va `console.log` qiling.
2. HTMLda har bir mahsulot uchun kartochka yarating:
   - Mahsulot rasmi (`thumbnail`)
   - Nomi va tavsifi (`title`, `description`)
   - Narxi va chegirma (`price`, `discountPercentage`)
   - Rating va brend (`rating`, `brand`)
3. Faqat birinchi 12 ta mahsulotni ko'rsating.
4. "Ko'proq yuklash" tugmasi bilan qolgan mahsulotlarni ham chiqarish imkonini yarating.
5. Narxi 50$ dan yuqori bo'lgan mahsulotlar uchun "Premium" belgisini qo'shing.

📌 **Bonus:** 
- Mahsulot kartochkasiga bosilganda modal oyna ochib, to'liq ma'lumotlarni ko'rsatish
- Kategoriya bo'yicha filtrlash tugmalari qo'shish (beauty, fragrances, furniture, groceries)

⏱️ **Vaqt:** \~35 daqiqa

---

### **📊 Baholash mezoni:**

**Jami: 100 ball**

#### **1️⃣ Birinchi Challenge (20 ball)**
- `checkResult` funksiyasi to'g'ri ishlash - 8 ball
- Array bilan ishlash (har bir o'quvchi uchun natija) - 7 ball  
- Yangi massiv yaratish (o'tgan o'quvchilar) - 5 ball

#### **2️⃣ Ikkinchi Challenge (25 ball)**
- `filter` metodini to'g'ri ishlatish - 6 ball
- `map` metodini to'g'ri ishlatish - 6 ball
- `reduce` metodini to'g'ri ishlatish - 8 ball
- Qo'shimcha filter va Apple brendi topish - 5 ball

#### **3️⃣ Uchinchi Challenge (25 ball)**
- Ma'lumotlarni to'g'ri import qilish - 5 ball
- DOM da kartochkalar yaratish - 10 ball
- CSS styling va shartli dizayn - 7 ball
- Bonus tugmalar (filtrlash, saralash) - 3 ball

#### **4️⃣ To'rtinchi Challenge (25 ball)**
- Fetch API dan to'g'ri foydalanish - 8 ball
- Ma'lumotlarni DOM da ko'rsatish - 10 ball
- Pagination ("Ko'proq yuklash") - 5 ball
- Premium belgi va bonus funktsiyalar - 2 ball

#### **Qo'shimcha bonus (5 ball)**
- Kod toza va tushunarliligi
- Creative yondoshuvlar
- Error handling qo'shish

---

### **🎯 Talabalar uchun qo'shimcha ko'rsatmalar:**

1. **Kod tuzilishi:** Har bir challenge uchun alohida fayl yarating
2. **Console.log:** Har bir qadamda natijani console ga chiqaring
3. **Kommentlar:** Kodingizga izohlar qo'shing (o'zbek tilida)
4. **Test qilish:** Har bir funksiyani alohida sinab ko'ring

---

### **⚠️ Imtihon qoidalari:**

- ✅ Console da xatoliklarni tekshirish **majburiy**
- ❌ Boshqa talabalar bilan kod almashish **man etilgan**
- ❌ ChatGPT, AI yordamchilari **man etilgan**
- ⏰ Vaqt: **aniq 2 soat** (120 daqiqa)

---


