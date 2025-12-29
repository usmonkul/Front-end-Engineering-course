# ⚡ TEZKOR BOSHLASH

## 🎯 O'qituvchi uchun (5 daqiqa)

### 1. Talabalar uchun nusxalash:
```bash
# Har bir talaba uchun alohida papka yarating
cp -r JavaScript_Imtihon_Shablonlar/ Student_1_Name/
cp -r JavaScript_Imtihon_Shablonlar/ Student_2_Name/
# va hokazo...
```

### 2. Test qilish:
- `challenge1/index.html` - ochib ko'ring
- `challenge4/index.html` - API ishlab turganini tekshiring
- Barcha console output'lar ko'rinishi kerak

### 3. Vaqt rejimi:
- **20 min** - Challenge 1 
- **20 min** - Challenge 2
- **35 min** - Challenge 3  
- **35 min** - Challenge 4
- **10 min** - Ko'rib chiqish

---

## 👨‍💻 Talaba uchun (2 daqiqa)

### 1. Papkani oching:
```
VS Code da "JavaScript_Imtihon_Shablonlar" papkasini oching
```

### 2. Boshlash tartibi:
1. **Challenge 1** → `challenge1/script.js` ni oching
2. Live Server bilan `index.html` ni ishga tushiring  
3. F12 ni bosib Console ni oching
4. Kodlashni boshlang!

### 3. Har challenge uchun:
- HTML/CSS ni **O'ZGARTIRMASLIK** ❌
- Faqat JS fayllarni tahrirlash ✅
- Console.log() har qadamda ✅

---

## 📋 Tezkor Tekshirish (O'qituvchi)

### Challenge 1 ✅:
- [ ] `checkResult()` funksiya yaratilgan
- [ ] Har talaba uchun console da natija
- [ ] O'tgan talabalar massivi yaratilgan

### Challenge 2 ✅:  
- [ ] `filter` - 500$ dan qimmat
- [ ] `map` - katta harflar
- [ ] `reduce` - umumiy narx
- [ ] Apple brendlari soni

### Challenge 3 ✅:
- [ ] `import { trips }` qilingan
- [ ] Kartochkalar yaratilgan
- [ ] Arzon sayohatlar yashil
- [ ] Rating yuqori oranlar oltin

### Challenge 4 ✅:
- [ ] `fetch()` ishlaydi
- [ ] 12 ta mahsulot ko'rinadi
- [ ] Premium belgisi (50$+)
- [ ] "Ko'proq yuklash" tugmasi

---

## 🔥 Eng tez-tez uchraydigan xatoliklar

### ❌ Challenge 1:
```javascript
// NOTO'G'RI:
function checkResult() {
    // parameter yo'q
}

// TO'G'RI:
function checkResult(score) {
    return score >= 60 ? "O'tdi" : "Yiqildi";
}
```

### ❌ Challenge 3:
```javascript
// NOTO'G'RI:
// import qilishni unutish

// TO'G'RI:
import { trips } from './data.js';
```

### ❌ Challenge 4:
```javascript
// NOTO'G'RI:
fetch('url').then(console.log); // data.json() ni unutish

// TO'G'RI:
fetch('url').then(res => res.json()).then(console.log);
```

---

## 🏆 Ball taqsimoti (tezkor)

| Challenge | Ball | Asosiy vazifalar |
|-----------|------|------------------|
| 1 | 20 | checkResult + array + filter |
| 2 | 25 | map + filter + reduce + counts |  
| 3 | 25 | import + DOM + styling + events |
| 4 | 25 | fetch + display + pagination |
| Bonus | 5 | Creative + error handling |

**Jami: 100 ball**

---

**OMAD!** 🎊