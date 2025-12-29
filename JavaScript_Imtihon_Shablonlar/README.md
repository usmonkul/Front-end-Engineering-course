# 🎓 JavaScript Imtihon Shablonlari

Bu papka **JavaScript bilimlarini tekshirish** uchun mo'ljallangan 4 ta challenge ning to'liq HTML/CSS shablonlarini o'z ichiga oladi.

## 📁 Papka tuzilishi

```
JavaScript_Imtihon_Shablonlar/
├── challenge1/          # O'quvchilar natijalari
│   ├── index.html
│   ├── style.css
│   └── script.js
├── challenge2/          # Array Methods
│   ├── index.html
│   ├── style.css
│   └── script.js
├── challenge3/          # DOM va Import/Export
│   ├── index.html
│   ├── style.css
│   ├── main.js
│   └── data.js
├── challenge4/          # Fetch API
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md
```

## 🎯 Har bir Challenge haqida

### 1️⃣ Challenge 1: O'quvchilar natijalari
**Mavzular:** `if/else`, `Array`, `Function`, `Object`
- **Fayl:** `challenge1/script.js`
- **Vazifa:** checkResult funksiyasi, array bilan ishlash
- **Vaqt:** 20 daqiqa

### 2️⃣ Challenge 2: Array Methods 
**Mavzular:** `map`, `filter`, `reduce`
- **Fayl:** `challenge2/script.js`
- **Vazifa:** Mahsulotlar bilan ishlash, array methodlari
- **Vaqt:** 20 daqiqa

### 3️⃣ Challenge 3: DOM va Import/Export
**Mavzular:** `DOM manipulation`, `import/export`, `Event handlers`
- **Fayllar:** `challenge3/main.js` (import qilish), `challenge3/data.js` (o'zgartirmaslik!)
- **Vazifa:** Sayohat kartalari, dinamik DOM
- **Vaqt:** 35 daqiqa

### 4️⃣ Challenge 4: Fetch API
**Mavzular:** `Fetch API`, `async/await`, `JSON`, `Error handling`
- **Fayl:** `challenge4/script.js`
- **Vazifa:** Real API dan ma'lumot olish
- **Vaqt:** 35 daqiqa

## 🚀 O'qituvchi uchun ko'rsatmalar

### Imtihon oldin:
1. **Nusxalash:** Har bir talaba uchun alohida papka yarating
2. **Tekshirish:** Barcha fayllar to'g'ri ishlab turganiga ishonch hosil qiling
3. **API test:** `https://dummyjson.com/products` ishlab turganini tekshiring
4. **Browser:** Live Server yoki boshqa lokal server tayyorlang

### Imtihon paytida:
1. **Vaqt nazorati:** Har challenge uchun aniq vaqt belgilang
2. **Yordam:** Faqat HTML/CSS o'zgartirish taqiqlangan
3. **Console:** F12 Developer Tools dan foydalanishga ruxsat bering
4. **Internet:** MDN, Google qidiruv ruxsat etilgan

### Baholash:
- **Challenge 1:** 20 ball
- **Challenge 2:** 25 ball  
- **Challenge 3:** 25 ball
- **Challenge 4:** 25 ball
- **Bonus:** 5 ball

## 📚 Talabalar uchun qo'llanma

### Boshlash:
1. **Papkani oching:** VS Code da challenge papkasini oching
2. **Live Server:** HTML faylni Live Server bilan ishga tushiring
3. **Console:** F12 ni bosib Console tabini oching
4. **Kodlash:** Faqat JavaScript fayllarini tahrirlang

### Kodlash qoidalari:
- ✅ **JavaScript fayllarini o'zgartirish** - ruxsat etilgan
- ❌ **HTML/CSS o'zgartirish** - taqiqlangan
- ✅ **Console.log ishlatish** - tavsiya etiladi
- ✅ **Comments yozish** - (o'zbek tilida)

### Har bir challenge uchun:
1. **O'qing:** Vazifani diqqat bilan o'qing
2. **Rejalashtiring:** Qadamlarni belgilang
3. **Kodlang:** Bosqichma-bosqich yozing
4. **Test qiling:** Har funksiyani sinab ko'ring
5. **Console:** Natijalarni tekshiring

## 🔧 Texnik talablar

### Browser:
- Chrome, Firefox, Safari, Edge (2022+)
- JavaScript ES6+ qo'llab-quvvatlashi

### Editor:
- VS Code (tavsiya etiladi)
- Live Server extension
- Auto Rename Tag extension

### Bilim darajasi:
- HTML/CSS asoslari
- JavaScript fundamentals
- ES6 syntax (arrow functions, destructuring)
- DOM manipulation
- Fetch API

## 💡 Foydali maslahatlar

### Challenge 1:
```javascript
// Misol:
function checkResult(score) {
    if (score >= 60) {
        return "O'tdi";
    } else {
        return "Yiqildi";  
    }
}
```

### Challenge 2:
```javascript
// Misol:
const expensiveProducts = orders.filter(product => product.price > 500);
console.log(expensiveProducts);
```

### Challenge 3:
```javascript
// Misol:
import { trips } from './data.js';

function createTripCard(trip) {
    return `
        <div class="trip-card">
            <h3>${trip.city}</h3>
            <p>${trip.country}</p>
        </div>
    `;
}
```

### Challenge 4:
```javascript
// Misol:
async function fetchProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Xatolik:', error);
    }
}
```

## ⚠️ Muhim eslatmalar

1. **Vaqt:** Har challenge uchun aniq vaqt chegarasi bor
2. **Koding:** Faqat JavaScript fayllarni tahrirlang
3. **Console:** Har qadamda console.log() qiling
4. **Test:** Funksiyalarni darhol sinab ko'ring
5. **Error:** Xatoliklarni console da tekshiring

## 🎊 Muvaffaqiyat uchun yo'riqnoma

### Vaqtni taqsimlash:
- **5 daqiqa:** Vazifani o'qish va tushunish
- **25 daqiqa:** Kodlash va test qilish  
- **5 daqiqa:** Tekshirish va tuzatish

### Prioritet:
1. **Asosiy vazifalar** - 80% ball
2. **Bonus vazifalar** - 20% ball
3. **Kod sifati** - qo'shimcha ball

### Xatoliklardan qochish:
- Variables nomlarini to'g'ri yozing
- Syntax xatoliklariga e'tibor bering
- Console da xatoliklarni darhol tuzating
- Funktsialarni chaqirishni unutmang

---

## 📞 Qo'llab-quvvatlash

Agar shablonlarda muammo bo'lsa:
1. Console da xatoliklarni tekshiring
2. Network tabida API so'rovlarni ko'ring  
3. O'qituvchidan yordam so'rang

**Omad tilaymiz!** 🚀

---

*Bu shablonlar talabalarning JavaScript bilimini professional darajada baholash uchun yaratilgan.*