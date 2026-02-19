# 1-dars — Prompt engineering asoslari  
## Front-end dasturchilar uchun

**Ushbu darsda:** Prompt engineering nima, nima uchun muhim, aniqlik, rol, kontekst, struktura va cheklovlar. Dars oxirida siz aniq va samarali promptlar yozish asoslarini egallaysiz.

---

# 1-qism — Kirish va mental model

## Prompt engineering nima?

**Prompt** — AI ga yuborayotgan so‘rovingiz (matn).  
**Prompt engineering** — so‘rovlarni shunday yozishki, AI foydali va kutilgan javob bersin.

**Oddiy qoida:** Qanday so‘rasangiz, shunday javob olasiz. So‘zlaming o‘zi natijani o‘zgartiradi.

- **Noaniq** prompt → noto‘g‘ri yoki chala kod.
- **Aniq** prompt → tayyor ishlatish mumkin bo‘lgan kod.

---

## Front-end uchun nima uchun muhim?

Front-end da ko‘p takroriy ishlar bor: komponentlar, formalar, stillar, responsiv dizayn. AI bilan:

- **Tezroq** prototip va UI yaratasiz.
- **Yaxshiroq** kod takliflari (sintaksis, best practice).
- **Kamroq** ortga-oldinga so‘rov — bir marta to‘g‘ri so‘rasangiz, javob ham to‘g‘ri.

### Yomon vs yaxshi prompt

**Yomon:**
```
Tugma yoz.
```
*EN: Write a button.*

AI qayerda, qanday til, qanday dizayn — bilmaydi. Natija: tasodifiy (masalan oddiy HTML), stack ingizga mos kelmasligi mumkin.

**Yaxshi:**
```
React 18, TypeScript ishlatib, primary rangdagi, rounded burchakli "Saqlash" tugmasi komponenti yoz. Tailwind CSS bilan stillang.
```
*EN: Write a "Save" button component in React 18 and TypeScript. Primary color, rounded corners. Style with Tailwind CSS.*
Stack, til va dizayn aniq — natija loyihangizga yaqin.

**Sabab:** Ikkinchi promptda **kontekst** (React, TypeScript, Tailwind) va **talab** (primary, rounded, "Saqlash") bor.

---

## Mental model: AI — xotirasiz jamoadosh

AI **oldingi xabarlarni** eslasa ham, **loyihangiz**, **konvensiyalaringiz** va **maqsadingiz** haqida o‘zi bilmaydi. Siz har safar kerakli ma’lumotni **prompt orqali** berasiz.

Shuning uchun:

1. **Rol** — "Sen senior React dasturchisisan."
2. **Kontekst** — qaysi loyiha, qaysi texnologiyalar.
3. **Cheklovlar** — nima qilish kerak, nima qilish kerak emas.

**Esda tuting:** Siz boshqaruvisiz, AI yordamchi.

---

## Asboblar: farq va qo‘llash

**Cursor, Copilot** — loyiha fayllarini ko‘radi; `@fayl` orqali kontekstga qo‘shasiz. IDE ichida inline takliflar.

**ChatGPT, Claude** — fayllarni ko‘rmaydi; kontekstni **matn orqali** berasiz (stack, fayl yo‘li, kod nusxasi).

**Qoida:** Qaysi asbob bo‘lmasin, aniq va tuzilgan promptlar yozish foydangizga. Cursor/Copilot da fayl konteksti qo‘shilsa, prompt qisqaroq bo‘lishi mumkin; ChatGPT da esa stack va talablarni to‘liq yozishingiz kerak.

---

# 2-qism — Aniqlik, rol va kontekst

## Aniqlik va maxsus talablar

**Qoida:** Qancha aniq so‘rasangiz, shuncha yaxshi javob. Stack, fayl nomlari, "qil" / "qilma" ni ayting.

### Yomon promptlar

| Prompt (UZ) | EN | Nima yetishmayapti? |
|-------------|-----|---------------------|
| `Forma yoz.` | Write a form. | Qanday til? Maydonlar? Validatsiya? Dizayn? |
| `Buni yaxshila.` | Improve this. | "Buni" nima? "Yaxshila" — performans, xavfsizlik, a11y? |
| `Navbar qil.` | Make a navbar. | Framework? Mobil menyu? Stil (Tailwind, CSS modul)? |

### Yaxshi promptlar

**Forma:**
```
React 18 va TypeScript da login forma yoz. Maydonlar: email (required), parol (required, min 8 ta belgi). Submit da console.log qil. Tailwind CSS ishlat. Shadcn/ui Input va Button komponentlari bor, ularni ishlat.
```
*EN: Write a login form in React 18 and TypeScript. Fields: email (required), password (required, min 8 chars). On submit, console.log. Use Tailwind CSS. We have Shadcn/ui Input and Button components — use them.*

**Yaxshilash:**
```
Quyidagi React komponentida accessibility (a11y) ni yaxshila: keyboard navigatsiya va ARIA atributlarni qo‘sh. Kodni o‘zgartirib, faqat o‘zgarishlarni ko‘rsat.
```
*EN: Improve the following React component for accessibility (a11y): add keyboard navigation and ARIA attributes. Show only the changes, not the full code.*

**Navbar:**
```
Next.js 14 (App Router), Tailwind va TypeScript da navbar komponenti yoz. Logo chapda, 3 ta link o‘rta, "Kirish" tugmasi o‘ngda. Mobilda hamburger menyu. Fayl: src/components/Navbar.tsx
```
*EN: Write a navbar component in Next.js 14 (App Router), Tailwind and TypeScript. Logo left, 3 links center, "Login" button right. Hamburger menu on mobile. File: src/components/Navbar.tsx*

**Xulosa:** Har bir yaxshi promptda **kim uchun** (stack), **nima** (vazifa) va **qanday** (qoidalar) bor.

---

## Rol va persona

AI ga **kim** sifatida javob berishini aytishingiz mumkin. Bu uslub, daraja va takliflarni o‘zgartiradi.

**Yomon (rolsiz):**
```
useEffect da fetch qanday qilaman?
```
*EN: How do I fetch in useEffect?*

Javob umumiy bo‘lishi mumkin.

**Yaxshi (rol bilan):**
```
Sen senior React dasturchisisan. useEffect da API dan ma’lumot olishni error handling va loading state bilan qanday yozish kerak? Custom hook yoki oddiy useEffect — qaysi biri yaxshi va nima uchun?
```
*EN: You are a senior React developer. How should I fetch data from an API in useEffect with error handling and loading state? Custom hook or plain useEffect — which is better and why?*

**Boshqa rol misollari:**
- *"Sen Vue 3 va Composition API bo‘yicha tajribali dasturchisisan."* — *EN: You are an experienced Vue 3 and Composition API developer.*
- *"Sen front-end va accessibility (a11y) mutaxassisisan."* — *EN: You are a front-end and accessibility (a11y) specialist.*
- *"Sen TypeScript va strict type safety tarafdorisisan."* — *EN: You advocate for TypeScript and strict type safety.*

---

## Kontekst

**Kontekst** — loyiha, fayl, konvensiyalar haqida qisqa ma’lumot. AI loyihangizni ko‘rmaydi; siz matn orqali berasiz.

**Nima qo‘shish mumkin:**
- **Loyiha:** "Next.js 14 e-commerce, Tailwind va Shadcn/ui."
- **Fayl:** "Komponent `src/components/Button.tsx` da."
- **Konvensiyalar:** "CSS modullar ishlatiladi, inline style yo‘q."
- **Mavjud kod:** Kerak bo‘lsa, kodning muhim qismini nusxa qiling.

**Yomon:**
```
Button komponentiga loading holatini qo‘sh.
```
*EN: Add loading state to the Button component.*

**Yaxshi:**
```
Loyiha: React 18, TypeScript, Tailwind. src/components/ui/Button.tsx da Button bor. Unga loading prop qo‘sh: true bo‘lsa ichida spinner, tugma disabled. Mavjud variantlar (primary, secondary) saqlansin.
```
*EN: Project: React 18, TypeScript, Tailwind. Button is in src/components/ui/Button.tsx. Add a loading prop: when true, show spinner inside and disable the button. Keep existing variants (primary, secondary).*

---

# 3-qism — Struktura, format va cheklovlar

## Strukturalangan javob (format)

Javobni **qanday ko‘rinishda** xohlayotganingizni aytishingiz mumkin.

**Yomon:**
```
Tugma komponenti yoz.
```
*EN: Write a button component.*

Kod bormi, qaysi til, izoh bormi — noma’lum.

**Yaxshi:**
```
React + TypeScript da Button komponenti yoz. Javobni quyidagi formatda ber:
1. Qisqa izoh (2-3 qator) — komponent nima qiladi.
2. Kod — to‘liq komponent, kod blokida.
3. Ishlatish misoli — 1 ta qisqa misol.
```
*EN: Write a Button component in React + TypeScript. Respond in this format: 1) Brief description (2–3 lines) — what the component does. 2) Code — full component in a code block. 3) Usage example — one short example.*

**Format misollari:**
- *"Kodni faqat code block ichida ber, izohsiz."* — *EN: Give code only in a code block, no explanation.*
- *"Avval 3 ta variant (A, B, C) yoz, keyin tanlangan uchun kod."* — *EN: First write 3 options (A, B, C), then code for the chosen one.*
- *"Qadam-baqadam: 1) … 2) … 3) …"* — *EN: Step by step: 1) … 2) … 3) …*

---

## Qadam-baqadam (zanjirlash)

Murakkab vazifani **bosqichlarga** bo‘lib so‘rasangiz, natija aniqroq bo‘ladi.

**Yomon:**
```
Barcha sahifani yoz: header, sidebar, kontent, 3 ta kartochka, footer, responsiv, dark mode.
```
*EN: Write the whole page: header, sidebar, content, 3 cards, footer, responsive, dark mode.*

Bir marta juda ko‘p talab — AI biror narsani yutqazishi mumkin.

**Yaxshi:**
```
Birinchi qadam: Layout — Header, Sidebar, Main, Footer. React + Tailwind, faqat div va semantik teglar, hali stillar yozma.
```
*EN: Step 1: Layout — Header, Sidebar, Main, Footer. React + Tailwind, divs and semantic tags only, no styles yet.*

Keyin:
```
Ikkinchi qadam: Header ga logo va navigatsiya qo‘sh. Mobil da hamburger menyu.
```
*EN: Step 2: Add logo and nav to Header. Hamburger menu on mobile.*

Keyin:
```
Uchinchi qadam: Main ichiga 3 ta Card komponenti qo‘y, grid layout da.
```
*EN: Step 3: Put 3 Card components in Main, grid layout.*

**Xulosa:** Katta vazifani "avval struktura, keyin detallar" deb bo‘lib so‘rang.

---

## Cheklovlar (guardrails)

**Cheklovlar** — nima **qilish kerak** va nima **qilish kerak emas**ligini aniq aytish.

**Yomon:**
```
Forma yoz.
```
*EN: Write a form.*

Inline style, a11y — hammasi tasodifiy.

**Yaxshi:**
```
Login forma yoz. React, TypeScript, Tailwind. Qoidalar:
- Inline style yo‘q, faqat Tailwind class.
- Input larda label va aria-label (a11y).
- Bitta Form.tsx, 100 qatordan oshmasin.
- Xato xabarlarini forma ostida ko‘rsat, alert ishlatma.
```
*EN: Write a login form. React, TypeScript, Tailwind. Rules: No inline styles, Tailwind classes only. Labels and aria-label on inputs (a11y). Single Form.tsx, under 100 lines. Show errors below form, no alert().*

**Front-end da tez-tez ishlatiladigan cheklovlar:**

| Turi | Misol (UZ) | EN |
|------|------------|-----|
| Stil | "Faqat Tailwind", "inline style yo‘q" | Tailwind only, no inline styles |
| Dizayn | "Design token: primary #3B82F6" | Design token: primary #3B82F6 |
| Accessibility | "WCAG AA", "ARIA qo‘sh", "keyboard navigatsiya" | WCAG AA, add ARIA, keyboard nav |
| Kod hajmi | "50 qatordan oshmasin", "bitta fayl" | Under 50 lines, single file |
| Versiya | "React 18 hook", "Vue 3 Composition API" | React 18 hooks, Vue 3 Composition API |
| Til | "Faqat TypeScript", "any ishlatma" | TypeScript only, no any |

---

## To‘liq misollar

**Komponent:**
```
React + TypeScript + Tailwind da ProductCard komponenti yoz.
Format: 1) Qisqa izoh, 2) To‘liq kod (code block), 3) Ishlatish misoli.
Qoidalar: rasm ustida, sarlavha, narx, "Savatga" tugmasi; inline style yo‘q; rasm alt matni bo‘lsin (a11y).
```
*EN: Write a ProductCard component in React + TypeScript + Tailwind. Format: 1) Brief description, 2) Full code (code block), 3) Usage example. Rules: image on top, title, price, "Add to cart" button; no inline styles; image alt text (a11y).*

**Refaktor:**
```
Quyidagi komponentni refaktor qil. Talablar:
- Custom hook ga ajrat: useUserData (fetch, loading, error).
- UI faqat render qilsin, mantiq hook da.
- Javobni "oldingi kod" / "yangi kod" deb 2 ta code block da ber.
```
*EN: Refactor the following component. Requirements: Extract to custom hook useUserData (fetch, loading, error). UI only renders, logic in hook. Respond with 2 code blocks: "before" / "after".*

**Yechim tanlash:**
```
Forma 5 ta maydonli. State boshqarish uchun 2 ta variant: A) useState har maydon uchun, B) useReducer. Har birining + va - lari. Keyin qaysi biri ma’qul — ayting va shu variant uchun namuna kod yozing. React + TypeScript.
```
*EN: Form has 5 fields. Suggest 2 options for state: A) useState per field, B) useReducer. Pros and cons of each. Then recommend which fits and write sample code for it. React + TypeScript.*

---

## Amaliyot

**Vazifa 1:** "Card yoz." — bitta gap. Keyin xuddi shu vazifa uchun aniq prompt yozing: stack, Card nima uchun, qanday maydonlar, dizayn.

**Vazifa 2:** "Buni yaxshila va zamonaviy qil." — buni front-end vazifasiga moslab qayta yozing. Nima yaxshilash (refaktor, a11y, responsiv)? Qanday format? Qanday cheklovlar?

Ikkalasini AI da sinab ko‘ring; farqni kuzating.

---

# 1-dars xulosasi

| Asosiy fikr |
|-------------|
| Prompt engineering — so‘rovlarni maqsadga qaratib yozish; AI ga rol, kontekst va cheklovlar bering. |
| Aniqlik + rol + kontekst: stack, fayl va qoidalarni har safar ayting. |
| Format, qadam-baqadam va cheklovlar — javobni siz xohlagan ko‘rinishda va qoidalar doirasida oling. |

**Keyingi darsda:** Few-shot misollar, iteratsiya, file-aware promptlar, workflow, xavfsizlik va qayta ishlatiladigan promptlar kutubxonasi.
