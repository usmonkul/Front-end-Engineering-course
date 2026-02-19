# 2-dars — Few-shot, workflow va xavfsizlik  
## Front-end dasturchilar uchun

**Oldingi darsni o‘qigan deb hisoblanadi.** Agar 1-darsni (aniqlik, rol, kontekst, struktura, cheklovlar) o‘qimagan bo‘lsangiz, avval `Course..md` ni ko‘ring.

**Ushbu darsda:** Few-shot misollar, iteratsiya, front-end prompt patternlari, file-aware promptlar, workflow, xavfsizlik va qayta ishlatiladigan promptlar kutubxonasi.

---

# 1-qism — Few-shot va iteratsiya

## Zero-shot vs few-shot

**Zero-shot** — misolsiz so‘rov. AI umumiy bilimiga tayanadi. Natija yaxshi bo‘lishi mumkin, lekin loyiha uslubiga mos kelmasligi mumkin.

**Few-shot** — prompt ichida 1–2 ta **namuna** ko‘rsatish. AI ushbu namunalar uslubi va tuzilmasiga mos javob beradi. Loyihadagi komponentlar bir xil pattern da bo‘ladi.

**Qachon few-shot:** Loyihada allaqachon komponentlar bor, yangi komponent ular bilan uyg‘un bo‘lishi kerak bo‘lsa.

---

## Few-shot misollar

### Yomon (misolsiz)

```
Badge komponenti yoz. Ranglar: success, warning, error.
```
*EN: Write a Badge component. Colors: success, warning, error.*

AI o‘ziga xos uslubda yozadi — boshqa komponentlar bilan uyg‘un bo‘lmasligi mumkin.

### Yaxshi (few-shot bilan)

```
Bizda Button komponenti shunday ishlatiladi:

<Button variant="primary" size="md" onClick={handleClick}>Saqlash</Button>
<Button variant="ghost" size="sm">Bekor</Button>

Xuddi shu uslubda Badge komponenti yoz: variant (success, warning, error), size (sm, md). React + TypeScript. Props interface va ishlatish misolini ham yoz.
```
*EN: Our Button component is used like this: [examples]. Write a Badge component in the same style: variant (success, warning, error), size (sm, md). React + TypeScript. Include Props interface and usage example.*
AI Button dagi pattern (variant, size, children) ni ko‘rib, Badge ni shu uslubda beradi.

### Boshqa few-shot misollari

**API formati:**
```
Bizda API javoblari shunday:
{ "data": [...], "total": 100, "page": 1 }

Endi products API uchun TypeScript type va fetch funksiyasini yoz, shu formatda.
```
*EN: Our API responses look like: { "data": [...], "total": 100, "page": 1 }. Write TypeScript type and fetch function for products API in this format.*

**CSS konvensiya (BEM):**
```
Loyihada class nomlar BEM: .card, .card__title, .card--highlighted.
Shu qoidaga mos, ProductCard uchun CSS (yoki Tailwind class nomlari) yoz.
```
*EN: We use BEM for class names: .card, .card__title, .card--highlighted. Write CSS (or Tailwind classes) for ProductCard following this convention.*

**Xulosa:** 1–2 ta qisqa namuna — AI "qanday ko‘rinish" kerakligini aniq tushunadi.

---

## Iteratsiya: birinchi javob — qoralama

AI ning **birinchi javobi** ko‘pincha qoralama. Qisqa **keyingi so‘rovlar** (follow-up) bilan aniqlashtiring.

**Yomon:**
```
To‘liq dashboard yoz: sidebar, header, 4 ta chart, jadval, dark mode, responsiv, animatsiyalar, loading, error boundary.
```
*EN: Write a full dashboard: sidebar, header, 4 charts, table, dark mode, responsive, animations, loading, error boundary.*

Bir marta juda ko‘p talab — AI biror narsani yutqazishi mumkin.

**Yaxshi (qadam va iteratsiya):**

1. *"React + Tailwind da dashboard layout yoz: Sidebar chapda, Header yuqorida, Main o‘ngda. Faqat bo‘sh layout."*  
   *EN: Write dashboard layout in React + Tailwind: Sidebar left, Header top, Main right. Empty layout only.*

2. *"Main ichiga 4 ta stat card qo‘sh. Card: \<Card title=\"...\" value={123} />."*  
   *EN: Add 4 stat cards to Main. Card: \<Card title=\"...\" value={123} />.*

3. *"Har bir card ga loading skeleton qo‘sh."*  
   *EN: Add loading skeleton to each card.*

**Iteratsiya iboralari:**

| Maqsad | Ibora (UZ) | Ibora (EN) |
|--------|------------|------------|
| O‘zgartirish | "Button o‘rniga bizning Button dan foydalan", "Rangni primary qil" | "Use our Button instead", "Make color primary" |
| Qo‘shish | "Loading state qo‘sh", "Error handling qo‘sh", "Responsiv qil" | "Add loading state", "Add error handling", "Make it responsive" |
| Olib tashlash | "Inline style larni olib tashla", "Console.log larni olib tashla" | "Remove inline styles", "Remove console.logs" |
| Format | "Buni TypeScript ga o‘gir", "Buni custom hook ga ajrat" | "Convert to TypeScript", "Extract to custom hook" |

---

## Front-end da prompt patternlari

Uchta asosiy pattern: **spec → kod**, **kod → yaxshilash**, **kod + xato → debug**.

### Spec → kod

Avval **tavsif**, keyin "kod yoz".

```
Login forma. Maydonlar: email (required, email format), parol (required, min 8). Submit da API ga POST. Xato bo‘lsa maydon ostida qizil xabar. React + TypeScript + Tailwind. Kod yoz.
```
*EN: Login form. Fields: email (required, email format), password (required, min 8). On submit POST to API. On error show red message below field. React + TypeScript + Tailwind. Write the code.*

### Kod → yaxshilash

Mavjud kodni paste qilasiz, **nima** yaxshilash kerakligini ayting.

```
Quyidagi komponentni accessibility (a11y) uchun yaxshila: focus visible, ARIA atributlar, keyboard navigatsiya. Kodni to‘liq qayta yozib ber.
```
*EN: Improve the following component for accessibility (a11y): focus visible, ARIA attributes, keyboard navigation. Rewrite the full code.*

### Kod + xato → debug

```
Quyidagi React komponentda xato bor. Xato xabari: "Cannot read properties of undefined (reading 'map')". Kod pastda. Nima noto‘g‘ri va qanday tuzatish — ayting va to‘g‘ri kodni yozing.
```
*EN: The following React component has an error. Error: "Cannot read properties of undefined (reading 'map')". Code below. Explain what's wrong and how to fix it, then write the corrected code.*

---

# 2-qism — Workflow va AI bilan kodlash

## File-aware promptlar

AI loyihangiz fayllarini **o‘zi ko‘rmaydi**. Siz **qaysi fayl** ekanini matn orqali aytasiz. Cursor/Copilot da **@fayl** orqali faylni kontekstga qo‘shish mumkin.

**Yomon:**
```
Button ga loading qo‘sh.
```
*EN: Add loading to the Button.*

**Yaxshi:**
```
Loyiha: React + TypeScript. src/components/ui/Button.tsx da Button bor. Unga loading prop qo‘sh: true bo‘lsa ichida spinner, tugma disabled. Mavjud variant va size saqlansin.
```
*EN: Project: React + TypeScript. Button is in src/components/ui/Button.tsx. Add loading prop: when true, show spinner inside and disable button. Keep existing variant and size.*

**Cursor da @-mention:**
```
@Button.tsx Ushbu komponentga loading state qo‘sh. Spinner va disabled.
```
*EN: @Button.tsx Add loading state to this component. Spinner and disabled.*

---

## Kontekst chegaralari

AI da **kontekst limiti** bor — juda uzoq prompt yoki katta fayl kesilishi mumkin.

**Maslahat:** Juda katta faylni to‘liq paste qilish o‘rniga:
- Muhim qismlarni tanlab yuboring.
- Yoki qisqacha tavsif bering: "Button da variant va size proplar bor, onClick qabul qiladi."
- Yoki vazifani kichikroq qismlarga bo‘ling.

---

## Kichik qadamlar (incremental)

**Katta bitta so‘rov** o‘rniga **kichik ketma-ket so‘rovlar**.

1. "Mahsulotlar uchun grid layout yoz, 4 ustun, Card komponentidan foydalan."  
   *EN: Write grid layout for products, 4 columns, use Card component.*

2. "Filter qo‘sh: kategoriya (dropdown) va qidiruv (input)."  
   *EN: Add filter: category (dropdown) and search (input).*

3. "Pagination qo‘sh, 10 ta element sahifada."  
   *EN: Add pagination, 10 items per page.*

4. "Card bosilganda modal ochilsin."  
   *EN: When card is clicked, open modal.*

Har bir qadam mustaqil tekshiriladi.

---

## Qachon AI dan foydalanish, qachon ehtiyot bo‘lish

| AI dan foydalanish ma’qul | Ehtiyot bo‘ling |
|---------------------------|-----------------|
| Yangi komponent, UI prototip | Parol, token, API kalit — hech qachon promptga yozma |
| Boilerplate, takroriy kod | Auth, to‘lov, xavfsizlik mantiqi — o‘zingiz tekshiring |
| Refaktor, qayta tashkilash | Kritik biznes mantiqi — test va code review |
| Dokumentatsiya, izohlar | Performance (katta list, animatsiya) — o‘lchang |
| Test, misol kod | PII — promptga paste qilma |

**Qoida:** AI kodni tez yozadi, lekin xavfsizlik va kritik qismlar uchun siz javobgarsiz.

---

## Tekshirish odati (review habit)

AI bergan kodni **o‘qing**, **run qiling**, **test qiling**.

**Checklist:**
- **Ishlayaptimi?** — Asosiy scenario ni tekshiring.
- **TypeScript / lint** — Xato yo‘qmi?
- **Accessibility** — Label, ARIA, keyboard. Kod to‘g‘ri bo‘lsa ham **brauzerda va screen reader da sinab ko‘ring** — a11y har doim tekshirish kerak.
- **Responsive** — Mobil/planchet da ko‘ring.
- **Loyiha uslubi** — Boshqa komponentlar bilan uyg‘unmi?

**Yomon:** Copy-paste qilib darhol commit.  
**Yaxshi:** O‘qish → run → kerak bo‘lsa iteratsiya so‘rov → keyin commit.

---

## Amaliyot

**Eslatma:** Murabbiy sizga namuna kod beradi yoki quyidagi minimal kodlardan foydalanasiz.

**1-vazifa (a11y):** Quyidagi oddiy formani accessibility uchun yaxshilash uchun prompt yozing. Javobni checklist bo‘yicha tekshiring va brauzerda sinab ko‘ring.

```tsx
// Namuna — murabbiy beradi yoki o‘zingiz yozasiz
function SimpleForm() {
  return (
    <form>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Parol" />
      <button>Yuborish</button>
    </form>
  );
}
```

**2-vazifa (error handling):** Fetch qiladigan komponent uchun loading va error state qo‘shish uchun prompt yozing. Javobni run qilib tekshiring.

---

# 3-qism — Xavfsizlik va kurs xulosasi

## Xavfsizlik va maxfiylik

**Promptga yozmang:**
- Parollar, API kalitlar, tokenlar.
- Shaxsiy ma’lumotlar (PII): passport, telefon, to‘liq ism.
- Kompaniya sirlari yoki maxfiy biznes mantiqi.

**Qilish mumkin:**
- Umumiy kod, sintaksis, arxitektura savollari.
- Maxfiy bo‘lmagan kodni (kalitlarsiz) paste qilish.
- Lokal/sandbox muhitda ishlash.

**Qoida:** AI ga yuborilgan matn saqlanadi yoki train uchun ishlatilishi mumkin. **Hech qachon** maxfiy yoki shaxsiy ma’lumotlarni promptga qo‘ymang.

---

## Tekshirish: qachon ishonish, qachon shubha qilish

**Ishonishingiz mumkin (lekin baribir tekshiring):**
- Sintaksis, oddiy API lar, umumiy patternlar.
- Dokumentatsiya, izohlar.
- Boilerplate, takroriy UI.

**Albatta tekshiring:**
- Auth (login, session, token).
- To‘lov, moliyaviy mantiq.
- SQL/NoSQL so‘rovlar (injection xavfi).
- Performance (katta list, memo, lazy load).
- **Accessibility** — ARIA, focus. Kod mantiqan to‘g‘ri bo‘lsa ham, brauzerda va screen reader da sinab ko‘ring.

**Tekshirish checklist:**
1. Kod ishlayaptimi?
2. Type/lint xatolari bormi?
3. Secret, parol, PII yo‘qmi?
4. Maqsadga mosmi?

---

## Qayta ishlatiladigan promptlar (kutubxona)

O‘zingiz uchun **qisqa promptlar kutubxonasi** yig‘ing. Loyihaga qarab **adaptatsiya** qilasiz.

**Komponent:**
```
React + TypeScript + Tailwind da [KOMPONENT NOMI] yoz. [TAVSIF]. Format: izoh, kod, ishlatish misoli. Inline style yo‘q, a11y hisobga oling.
```
*EN: Write [COMPONENT NAME] in React + TypeScript + Tailwind. [DESCRIPTION]. Format: description, code, usage example. No inline styles, consider a11y.*

**Forma:**
```
React + TypeScript da [FORMA NOMI] forma. Maydonlar: [RO‘YXAT]. Validatsiya: [QOIDALAR]. Submit da [NIMA QILISH]. Tailwind. Xato maydon ostida.
```
*EN: Write [FORM NAME] form in React + TypeScript. Fields: [LIST]. Validation: [RULES]. On submit: [ACTION]. Tailwind. Errors below each field.*

**Refaktor (a11y):**
```
Quyidagi komponentni accessibility uchun yaxshila: label, ARIA, keyboard. Kodni to‘liq qayta yoz. React.
```
*EN: Improve the following component for accessibility: labels, ARIA, keyboard. Rewrite the full code. React.*

**Debug:**
```
Quyidagi kodda xato: [XATO XABARI]. Nima noto‘g‘ri va qanday tuzatish — tushuntiring va to‘g‘ri kodni yozing.
```
*EN: This code has an error: [ERROR MESSAGE]. Explain what's wrong and how to fix it, then write the corrected code.*

Stack (Vue, Svelte, CSS modul) ni ham o‘zgartirish mumkin.

---

## Kurs xulosasi (1–2 dars)

| Dars | Asosiy fikr |
|------|-------------|
| 1 | Aniqlik + rol + kontekst + struktura + cheklovlar. Asboblar farqi (Cursor vs ChatGPT). |
| 2 | Few-shot, iteratsiya, patternlar (spec→kod, kod→yaxshilash, kod+xato→debug). File-aware, kontekst limiti, workflow, xavfsizlik, kutubxona. |

**Formula:**  
**Aniqlik** + **rol** + **kontekst** + **struktura** + **cheklovlar** + **namuna** (kerak bo‘lsa) + **iteratsiya** + **xavfsizlik** = samarali prompt engineering.

---

## Keyingi qadamlar

- Bir kichik UI (forma, kartochkalar ro‘yxati) ni **faqat AI yordamida** promptlar orqali yozib ko‘ring.
- 3–5 ta promptni kutubxona qilib saqlang va keyingi loyihada ishlatib ko‘ring.
- Jamoadoshlaringiz bilan yaxshi/yomon prompt misollarini almashing.

— **Kurs tugadi.** Muvaffaqiyatli promptlar va yaxshi kodlar!
