# CSS Animatsiyalar bo‘yicha to‘liq qo‘llanma

Bu qo‘llanma CSS animatsiyalari bilan ishlashni o‘rganish uchun yozilgan. Har bir bo‘lim aniq tushuntirishlar va amaliy misollar bilan ta’minlangan.

---

## 1. Kirish: CSS animatsiyasi nima?

CSS animatsiyalari elementlarni vaqt o‘tishi bilan bir holatdan boshqasiga o‘zgartirish imkonini beradi. JavaScript yordamisiz faqat CSS orqali harakat, rang o‘zgarishi, o‘lcham o‘zgarishi va boshqa vizual effektlar yaratish mumkin.

**Asosiy afzalliklari:**
- Oddiy va oson o‘rganiladi
- Yaxshi ishlash (brauzer tomonidan optimallashtiriladi)
- JavaScript talab qilmaydi
- Responsive dizayn bilan yaxshi ishlaydi

---

## 2. @keyframes — animatsiyaning asosi

Har qanday CSS animatsiyasi `@keyframes` qoidasi bilan boshlanadi. Bu qoida animatsiya qanday boshlanishi va tugashini belgilaydi.

### Sintaksis

```css
@keyframes animatsiya-nomi {
  from {
    /* boshlang‘ich holat */
  }
  to {
    /* yakuniy holat */
  }
}
```

Yoki foizlar bilan (0% dan 100% gacha):

```css
@keyframes animatsiya-nomi {
  0% {
    /* boshlang‘ich holat */
  }
  50% {
    /* oraliq holat */
  }
  100% {
    /* yakuniy holat */
  }
}
```

### Misol: Oddiy rang o‘zgarishi

```css
@keyframes rang-o‘zgariishi {
  from {
    background-color: red;
  }
  to {
    background-color: blue;
  }
}
```

---

## 3. Animatsiyani elementga qo‘llash

`@keyframes` yaratilgandan so‘ng, uni elementga `animation` xususiyati orqali bog‘lash kerak.

### Minimal talablar

Animatsiya ishlashi uchun kamida ikkita xususiyat kerak:
- `animation-name` — animatsiya nomi
- `animation-duration` — davomiyligi (sekund yoki millisekund)

```css
.box {
  width: 100px;
  height: 100px;
  background-color: coral;
  
  animation-name: rang-o‘zgariishi;
  animation-duration: 2s;
}
```

---

## 4. Animation xususiyatlari batafsil

### 4.1 animation-name

Animatsiya nomini belgilaydi (keyframes da yozilgan nom).

```css
animation-name: mening-animatsiyam;
```

### 4.2 animation-duration

Animatsiya davomiyligini belgilaydi.

```css
animation-duration: 3s;      /* 3 sekund */
animation-duration: 500ms;    /* 500 millisekund */
animation-duration: 1.5s;    /* 1.5 sekund */
```

### 4.3 animation-timing-function

Animatsiya tezligi qanday o‘zgarishini belgilaydi.

| Qiymat | Tavsif |
|--------|--------|
| `linear` | Bir xil tezlikda |
| `ease` | Sekin boshlanadi, tezlashadi, sekin tugaydi (default) |
| `ease-in` | Sekin boshlanadi |
| `ease-out` | Sekin tugaydi |
| `ease-in-out` | Sekin boshlanadi va tugaydi |
| `cubic-bezier(n,n,n,n)` | Maxsus egri chiziq |

```css
animation-timing-function: ease-in-out;
```

### 4.4 animation-delay

Animatsiya boshlanishidan oldin qancha kutish kerakligini belgilaydi.

```css
animation-delay: 1s;    /* 1 sekund kutadi */
animation-delay: 500ms; /* 500ms kutadi */
```

### 4.5 animation-iteration-count

Animatsiya necha marta takrorlanishini belgilaydi.

```css
animation-iteration-count: 3;     /* 3 marta */
animation-iteration-count: infinite; /* cheksiz */
animation-iteration-count: 1;     /* bir marta (default) */
```

### 4.6 animation-direction

Animatsiya yo‘nalishini belgilaydi.

| Qiymat | Tavsif |
|--------|--------|
| `normal` | Oddiy tartibda (default) |
| `reverse` | Teskari tartibda |
| `alternate` | Har takrorda yo‘nalish o‘zgaradi |
| `alternate-reverse` | Alternate ning teskari versiyasi |

```css
animation-direction: alternate;
```

### 4.7 animation-fill-mode

Animatsiya boshlanishidan oldin va tugagandan keyin element qanday holatda bo‘lishini belgilaydi.

| Qiymat | Tavsif |
|--------|--------|
| `none` | Hech narsa qo‘llanmaydi (default) |
| `forwards` | Yakuniy holatda qoladi |
| `backwards` | Boshlang‘ich holatda boshlanadi |
| `both` | Forwards va backwards ikkalasi |

```css
animation-fill-mode: forwards;
```

### 4.8 animation-play-state

Animatsiyani to‘xtatish yoki davom ettirish.

```css
animation-play-state: running;  /* ishlaydi (default) */
animation-play-state: paused;   /* to‘xtatilgan */
```

---

## 5. Qisqacha yozuv (Shorthand)

Barcha xususiyatlarni bitta qatorda yozish mumkin:

```css
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
```

**Misol:**

```css
.box {
  animation: rang-o‘zgariishi 2s ease-in-out 1s infinite alternate forwards;
}
```

**Minimal qisqacha yozuv:**

```css
.box {
  animation: rang-o‘zgariishi 2s;
}
```

---

## 6. Amaliy misollar

### Misol 1: Pulsatsiya effekti (kattalashish-kichiklashish)

```css
@keyframes pulsatsiya {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.pulsatsiya-box {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  animation: pulsatsiya 1.5s ease-in-out infinite;
}
```

### Misol 2: Aylanuvchi loader

```css
@keyframes aylanish {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loader {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: aylanish 1s linear infinite;
}
```

### Misol 3: Chapdan o‘ngga harakat

```css
@keyframes chapdan-o‘ngga {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(300px);
    opacity: 1;
  }
}

.harakatlanuvchi {
  width: 80px;
  height: 80px;
  background-color: #e74c3c;
  border-radius: 8px;
  animation: chapdan-o‘ngga 2s ease-in-out 1s 2 alternate forwards;
}
```

### Misol 4: Sekin paydo bo‘lish (Fade In)

```css
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in-element {
  animation: fade-in 1s ease-in forwards;
}
```

### Misol 5: Bounce (sakrash) effekti

```css
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.bounce-button {
  padding: 12px 24px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 8px;
  animation: bounce 2s infinite;
}
```

### Misol 6: Bir nechta xususiyatni bir vaqtda o‘zgartirish

```css
@keyframes kompleks-animatsiya {
  0% {
    transform: translate(0, 0) scale(1) rotate(0deg);
    background-color: #3498db;
    border-radius: 0;
  }
  25% {
    transform: translate(100px, 0) scale(1.2) rotate(90deg);
    background-color: #e74c3c;
    border-radius: 50%;
  }
  50% {
    transform: translate(100px, 100px) scale(0.8) rotate(180deg);
    background-color: #2ecc71;
    border-radius: 10px;
  }
  75% {
    transform: translate(0, 100px) scale(1.1) rotate(270deg);
    background-color: #f39c12;
    border-radius: 50%;
  }
  100% {
    transform: translate(0, 0) scale(1) rotate(360deg);
    background-color: #3498db;
    border-radius: 0;
  }
}

.kompleks-box {
  width: 80px;
  height: 80px;
  animation: kompleks-animatsiya 4s ease-in-out infinite;
}
```

---

## 7. Bir nechta animatsiyani birlashtirish

Bir elementga bir nechta animatsiya qo‘llash mumkin — vergul bilan ajratib:

```css
@keyframes harakat {
  from { transform: translateX(0); }
  to { transform: translateX(200px); }
}

@keyframes rang {
  from { background-color: red; }
  to { background-color: blue; }
}

.multi-animation {
  animation: harakat 2s ease-in-out infinite,
             rang 4s ease-in-out infinite;
}
```

---

## 8. Hover bilan animatsiyani to‘xtatish

```css
.box {
  animation: pulsatsiya 2s infinite;
}

.box:hover {
  animation-play-state: paused;
}
```

Sichqoncha element ustiga kelganda animatsiya to‘xtaydi.

---

## 9. Brauzer mosligi va prefikslar

Eski brauzerlar uchun vendor prefikslar kerak bo‘lishi mumkin:

```css
@-webkit-keyframes mening-animatsiyam {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes mening-animatsiyam {
  from { opacity: 0; }
  to { opacity: 1; }
}

.box {
  -webkit-animation: mening-animatsiyam 1s;
  animation: mening-animatsiyam 1s;
}
```

Zamonaviy brauzerlar (Chrome, Firefox, Safari, Edge) prefikslarsiz ishlaydi.

---

## 10. Foydali maslahatlar

1. **Transform ishlating** — `transform` va `opacity` animatsiyalari eng samarali, chunki ular GPU da bajariladi va layout reflow keltirmaydi.

2. **will-change** — animatsiya qiladigan xususiyatlarni oldindan bildiring:
   ```css
   .animated {
     will-change: transform;
   }
   ```
   Lekin ortiqcha ishlatmang — faqat haqiqatan animatsiya qiladigan elementlarda.

3. **Sekin boshlang** — murakkab animatsiyalardan oldin oddiy misollar bilan mashq qiling.

4. **prefers-reduced-motion** — harakatchanlikni kamroq xohlaydigan foydalanuvchilar uchun:
   ```css
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
     }
   }
   ```

---

## 11. Xulosa

CSS animatsiyalari — bu interaktiv va jonli veb-sahifalar yaratishning kuchli vositasi. `@keyframes` va `animation` xususiyatlarini o‘rganib, turli effektlar yarata olasiz. Amaliyot orqali ko‘proq tajriba orttiring!

**Keyingi qadamlar:**
- CSS transitions bilan tanishing
- Animation va transition farqini o‘rganing
- Real loyihalarda animatsiyalardan foydalaning

---

*Muvaffaqiyatli o‘rganishlar!*
