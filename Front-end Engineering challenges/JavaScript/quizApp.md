<details>
<summary>
Quiz App
</summary>
---

# 🧠 Mini Project: Quiz App

---

## 🎯 Maqsad

* Savollarni ko‘rsatish
* Variantlarni chiqarish
* Foydalanuvchi tanlagan javobni tekshirish
* Natijani hisoblash
* Bosqichma-bosqich savollarni almashtirish

---

## 📦 Qurilayotgan texnologiyalar

* HTML (strukturani yaratish)
* CSS (asosiy ko‘rinish)
* JavaScript (butun mantiq)

---

## 1️⃣ HTML Strukturasi

```html
<div id="quiz-container">
  <h2 id="savol">Savol shu yerda chiqadi</h2>
  <div id="variantlar">
    <!-- Variantlar JS orqali keladi -->
  </div>
  <button id="keyingi">Keyingi</button>
</div>
<p id="natija"></p>
```

---

## 2️⃣ CSS (ixtiyoriy, qisqacha)

```css
#quiz-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
}

button {
  margin-top: 10px;
  padding: 8px 12px;
}
```

---

## 3️⃣ JavaScript Mantiq

```js
const savollar = [
  {
    savol: "JavaScript qaysi tilga tegishli?",
    variantlar: ["Frontend", "Backend", "Ikkalasi ham", "Hech biri"],
    togri: "Ikkalasi ham"
  },
  {
    savol: "const bilan e’lon qilingan o‘zgaruvchi ...?",
    variantlar: ["O‘zgartiriladi", "Bir marta qiymat oladi", "Yo‘q qilinadi", "Global bo‘ladi"],
    togri: "Bir marta qiymat oladi"
  },
  {
    savol: "HTML nima uchun kerak?",
    variantlar: ["Styling", "Interaktivlik", "Tuzilma", "Yuklab olish"],
    togri: "Tuzilma"
  }
];

let index = 0;
let ball = 0;

const savolEl = document.getElementById("savol");
const variantlarEl = document.getElementById("variantlar");
const natijaEl = document.getElementById("natija");
const keyingiBtn = document.getElementById("keyingi");

function savolniChiqar() {
  let h = savollar[index];
  savolEl.textContent = h.savol;
  variantlarEl.innerHTML = "";

  h.variantlar.forEach(variant => {
    let btn = document.createElement("button");
    btn.textContent = variant;
    btn.addEventListener("click", function () {
      tekshir(variant);
    });
    variantlarEl.appendChild(btn);
  });
}

function tekshir(tanlov) {
  let h = savollar[index];
  if (tanlov === h.togri) {
    ball++;
  }
  keyingiBtn.style.display = "inline";
}

keyingiBtn.addEventListener("click", function () {
  index++;
  if (index < savollar.length) {
    savolniChiqar();
    keyingiBtn.style.display = "none";
  } else {
    tugat();
  }
});

function tugat() {
  savolEl.style.display = "none";
  variantlarEl.style.display = "none";
  keyingiBtn.style.display = "none";
  natijaEl.textContent = `Sizning ballingiz: ${ball}/${savollar.length}`;
}

savolniChiqar();
```

---

## 💡 Vazifalar (o‘quvchilar uchun)

1. Yana 3 ta savol qo‘shing (variantlar bilan).
2. Har tugmani bosganda noto‘g‘ri tanlansa, qizil rangda ko‘rsating.
3. Natijaga qarab baho chiqaring:

   * 100% — “Zo‘r!”
   * 60% — “Yaxshi!”
   * Pastroq — “Ko‘proq mashq qiling!”

---


</details>