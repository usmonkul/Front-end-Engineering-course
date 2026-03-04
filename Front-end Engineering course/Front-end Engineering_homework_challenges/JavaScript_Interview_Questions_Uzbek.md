# 🎯 JavaScript Intervyu Savollari va Javoblari (50 ta)

## 📋 Ma'lumot Turlari va O'zgaruvchilar

### 1. **JavaScript'da qanday ma'lumot turlari mavjud?**
**Javob:** Primitive (String, Number, Boolean, Null, Undefined, Symbol, BigInt) va Reference (Object, Array, Function) turlari.

### 2. **`var`, `let`, va `const` o'rtasidagi farq nima?**
**Javob:** `var` - function-scoped, hoisting; `let` - block-scoped, qayta tayinlash mumkin; `const` - block-scoped, qayta tayinlash mumkin emas.

### 3. **`typeof null` nima qaytaradi?**
**Javob:** `"object"` - bu JavaScript'dagi tarixiy xato.

### 4. **`undefined` va `null` o'rtasidagi farq nima?**
**Javob:** `undefined` - o'zgaruvchi e'lon qilingan lekin qiymat berilmagan; `null` - maqsadli ravishda bo'sh qiymat.

### 5. **String concatenation qanday ishlaydi?**
**Javob:** `+` operatori yoki template literal `` `${ism}` `` orqali.

## 🔢 Operatorlar va Shartlar

### 6. **`==` va `===` o'rtasidagi farq nima?**
**Javob:** `==` - tip konversiyasi bilan taqqoslash; `===` - qat'iy taqqoslash (tip va qiymat).

### 7. **Ternary operator sintaksisi qanday?**
**Javob:** `shart ? trueQiymat : falseQiymat`

### 8. **Logical operatorlar nimalar?**
**Javob:** `&&` (AND), `||` (OR), `!` (NOT)

### 9. **`if/else if/else` qanday ishlaydi?**
**Javob:** Birinchi to'g'ri shart bajariladi, keyingilari o'tkazib yuboriladi.

### 10. **Truthy va falsy qiymatlar nimalar?**
**Javob:** Falsy: `false`, `0`, `""`, `null`, `undefined`, `NaN`. Qolganlari truthy.

## 🔄 Loops (Sikllar)

### 11. **`for`, `while`, va `do...while` o'rtasidagi farq nima?**
**Javob:** `for` - aniq takrorlar soni; `while` - shart to'g'ri bo'lsa; `do...while` - kamida bir marta bajariladi.

### 12. **`break` va `continue` nima uchun ishlatiladi?**
**Javob:** `break` - siklni to'xtatadi; `continue` - joriy aylanishni o'tkazib yuboradi.

### 13. **`for...in` va `for...of` o'rtasidagi farq nima?**
**Javob:** `for...in` - kalitlar bo'ylab; `for...of` - qiymatlar bo'ylab.

### 14. **Infinite loop nima va qanday oldini olish mumkin?**
**Javob:** Cheksiz takrorlanadigan sikil. Shartni to'g'ri yozish orqali oldini olish mumkin.

### 15. **Nested loop nima?**
**Javob:** Bir sikil ichida boshqa sikil - 2D massivlar bilan ishlashda ishlatiladi.

## 🎯 Funksiyalar

### 16. **Function declaration va function expression o'rtasidagi farq nima?**
**Javob:** Declaration - hoisting mavjud; Expression - hoisting yo'q, o'zgaruvchiga tayinlanadi.

### 17. **Arrow function nima va qanday yoziladi?**
**Javob:** ES6'da kiritilgan qisqa sintaksis: `(param) => expression`

### 18. **`this` nima va qanday ishlaydi?**
**Javob:** Joriy kontekstni ko'rsatadi. Arrow function'da tashqi scope'dan meros oladi.

### 19. **Callback function nima?**
**Javob:** Boshqa funksiyaga parametr sifatida uzatiladigan funksiya.

### 20. **Closure nima?**
**Javob:** Funksiya o'z yaratilgan muhitdagi o'zgaruvchilarni eslab qolishi.

## 📦 Arrays (Massivlar)

### 21. **Array metodlari: `push`, `pop`, `shift`, `unshift` nima qiladi?**
**Javob:** `push` - oxiriga qo'shadi; `pop` - oxiridan oladi; `shift` - boshidan oladi; `unshift` - boshiga qo'shadi.

### 22. **`map()`, `filter()`, `reduce()` o'rtasidagi farq nima?**
**Javob:** `map` - har elementni o'zgartiradi; `filter` - shartga mos elementlarni tanlaydi; `reduce` - bitta qiymatga keltiradi.

### 23. **`slice()` va `splice()` o'rtasidagi farq nima?**
**Javob:** `slice` - nusxa oladi; `splice` - o'zgartiradi yoki o'chiradi.

### 24. **Array'da element qidirish qanday?**
**Javob:** `indexOf()`, `includes()`, `find()`, `findIndex()` metodlari orqali.

### 25. **Array'ni saralash qanday?**
**Javob:** `sort()` metodi - default string bo'ylab, sonlar uchun callback kerak.

## 🏗️ Objects (Obyektlar)

### 26. **Object'da qiymatni olish qanday?**
**Javob:** Dot notation (`obj.key`) yoki bracket notation (`obj["key"]`).

### 27. **Object metodlari: `keys()`, `values()`, `entries()` nima qiladi?**
**Javob:** `keys` - kalitlar ro'yxati; `values` - qiymatlar ro'yxati; `entries` - kalit-qiymat juftlari.

### 28. **Object'da method qanday yoziladi?**
**Javob:** `methodName: function() {}` yoki `methodName() {}` (ES6).

### 29. **Destructuring nima?**
**Javob:** Object yoki array'dan qiymatlarni alohida o'zgaruvchilarga ajratish.

### 30. **Spread operator (`...`) nima uchun ishlatiladi?**
**Javob:** Object yoki array'ni kopyalash, birlashtirish uchun.

## 🌐 DOM (Document Object Model)

### 31. **DOM nima?**
**Javob:** HTML hujjatini JavaScript orqali boshqarish imkonini beradigan obyektlar to'plami.

### 32. **Element tanlash usullari qanday?**
**Javob:** `getElementById()`, `querySelector()`, `querySelectorAll()`, `getElementsByClassName()`.

### 33. **`textContent`, `innerText`, `innerHTML` o'rtasidagi farq nima?**
**Javob:** `textContent` - faqat matn; `innerText` - ko'rinadigan matn; `innerHTML` - HTML tuzilmasi.

### 34. **Event listener qanday qo'shiladi?**
**Javob:** `addEventListener(eventType, callback)` orqali.

### 35. **Yangi element qanday yaratiladi va qo'shiladi?**
**Javob:** `createElement()` yaratadi, `appendChild()` qo'shadi.

## 🔧 Scope va Hoisting

### 36. **Scope turlari qanday?**
**Javob:** Global, Function, Block scope turlari mavjud.

### 37. **Hoisting nima?**
**Javob:** Funksiyalar va `var` o'zgaruvchilar kod bajarilishidan oldin yuqoriga "ko'tariladi".

### 38. **Temporal Dead Zone (TDZ) nima?**
**Javob:** `let` va `const` o'zgaruvchilar e'lon qilinmaguncha ishlatib bo'lmaydigan hudud.

### 39. **`var` va `let/const` hoisting'da qanday farq qiladi?**
**Javob:** `var` - undefined bilan hoisting; `let/const` - TDZ bilan hoisting.

### 40. **Closure scope'da qanday ishlaydi?**
**Javob:** Ichki funksiya tashqi scope'dagi o'zgaruvchilarga kirish huquqiga ega.