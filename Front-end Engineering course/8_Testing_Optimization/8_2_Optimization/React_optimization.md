# React optimizatsiyasi — oddiy qo‘llanma

Bu qo‘llanmada React ilovasini tezroq qilish uchun kerak bo‘ladigan asosiy tushunchalar va vositalarni o‘rganamiz. 

---

## 1. Asosiy tushunchalar

### 1.1 Re-render nima?

**Re-render** — React komponentni qayta chizishi (ekranda yangilashi).

Oddiy qilib aytganda: komponent bir marta chiziladi. Keyin **state** yoki **props** o‘zgasa, React komponentni **qayta** chizadi. Ana shu qayta chizish **re-render** deyiladi.

**Misol:**

```jsx
function Counter() {
  const [count, setCount] = useState(0);  // state

  return (
    <div>
      <p>Hisob: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

Bu yerda `setCount` chaqirilganda **state** o‘zgaradi → React `Counter` ni **qayta chizadi**. Bu re-render.

**Qachon re-render bo‘ladi?**

- Komponentning **o‘z state** i o‘zgaganda.
- **Props** yangi qiymat olganda (ota komponent qayta chizilganda, bolaga yangi props ketadi).

---

### 1.2 Nima muammo: juda ko‘p re-render

Agar bir sahifada **juda ko‘p** komponent bo‘lsa yoki har bir re-render **og‘ir** hisob-kitob qilsa, ilova **sekinlashadi** yoki **lag** bo‘ladi (harakat kechikadi).

**Misol muammo:**

- Ota komponentda state o‘zgardi → barcha bolalar qayta chiziladi, garchi ularning ko‘pchiligi o‘zgarmagan bo‘lsa ham.
- Har re-render da qimmat hisob-kitob qayta bajariladi.

Shuning uchun **kerakli joyda** re-renderlarni kamaytirishimiz kerak — buning uchun React **memo**, **useMemo**, **useCallback** kabi vositalarni beradi.

---

### 1.3 O‘lchash: qayerda sekin ekanini bilish

Optimizatsiya qilishdan oldin **qayerda** muammo borligini bilish kerak. Ikki asosiy vositangiz:

#### A) React DevTools — Profiler

1. Brauzerda React ilovangizni oching.
2. React DevTools kengaytmasini oching (Chrome/Firefox da "Components" va "Profiler" tablar bor).
3. **Profiler** tabga o‘ting.
4. Qizil **Record** tugmasini bosing.
5. Ilovada bir oz harakat qiling (masalan, tugmani bir necha marta bosing).
6. Record ni to‘xtating.

Natijada qaysi komponentlar qancha vaqtda re-render bo‘lganini ko‘rasiz. Ko‘p vaqt oladigan komponentlar — optimizatsiya uchun birinchi nomzodlar.

#### B) Brauzer Performance tab

1. Brauzerda **F12** bosing (Developer Tools).
2. **Performance** (yoki "Ishlash") tabni oching.
3. **Record** bosing, ilovada harakat qiling, keyin to‘xtating.
4. Qaysi funksiyalar ko‘p vaqt olganini ko‘ring.

Bu ikki usul sizga "qayerda sekin?" savoliga javob beradi. Keyin quyidagi vositalar bilan shu joylarni yaxshilaysiz.

---

## 2. React da asosiy vositalar

### 2.1 React.memo — komponentni "o‘zgarmasa qayta chizilmasin" deb qilish

**Nima qiladi?** Komponent **o‘z props** i o‘zgarmaguncha qayta chizilmaydi. Ya’ni ota qayta chizilsa ham, agar bola komponentga berilgan props bir xil bo‘lsa, React bolani qayta chizmaydi.

**Qachon ishlatamiz?** Ota tez-tez re-render bo‘ladi, lekin bolaga beriladigan props deyarli o‘zgarmaydi. Masalan: ro‘yxatdagi har bir element.

**Qachon ishlatmaymiz?** Props har re-render da yangi (masalan, har safar yangi obyekt yoki funksiya). Yoki komponent oddiy va tez — memo kerak emas.

**Misol — memosiz (bola keraksiz re-render bo‘ladi):**

```jsx
function Ota() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Hisob: {count}</button>
      <Bola title="Salom" />   {/* title har doim "Salom", o‘zgarmaydi */}
    </div>
  );
}

function Bola({ title }) {
  console.log("Bola chizildi");
  return <p>{title}</p>;
}
```

Bu yerda tugma bosilganda **Ota** re-render bo‘ladi. **Bola** ga `title="Salom"` berilgan va u o‘zgarmaydi, lekin React baribir **Bolani** qayta chizadi. Konsolda har bosishda "Bola chizildi" chiqadi.

**Misol — React.memo bilan:**

```jsx
const Bola = React.memo(function Bola({ title }) {
  console.log("Bola chizildi");
  return <p>{title}</p>;
});
```

Endi **Ota** re-render bo‘lganda, **Bola** ga berilgan `title` avvalgidek "Salom" bo‘lgani uchun React **Bolani** qayta chizmaydi. Konsolda faqat birinchi chizilganda "Bola chizildi" chiqadi.

**Qisqa qoida:** Bola og‘ir komponent yoki juda ko‘p marta chizilsa — `React.memo` sinab ko‘ring. Oddiy va tez komponentda kerak emas.

---

### 2.2 useMemo — qimmat hisob-kitobni saqlab qolish

**Nima qiladi?** Ichida **qimmat hisob-kitob** bor bo‘lsa, uni faqat kerakli **dependency** lar o‘zgaganda qayta hisoblaydi. Boshqa re-render larda eski natijani qaytaradi.

**Qachon ishlatamiz?** Har re-render da bajariladigan og‘ir hisob-kitob (masalan, katta ro‘yxatni filter/sort qilish). Natija **dependency** lar o‘zgaganda saja o‘zgaradi.

**Qachon ishlatmaymiz?** Hisob-kitob oddiy va tez. Yoki dependency lar har safar yangi (masalan, har render da yangi obyekt) — useMemo foyda bermaydi.

**Misol — useMemo siz (har re-render da qayta hisoblanadi):**

```jsx
function Royxat({ items, filterText }) {
  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );
  return (
    <ul>
      {filtered.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

`items` yoki `filterText` o‘zgaganda `filtered` o‘zgarishi kerak. Lekin **har re-render** da (masalan, boshqa state o‘zgaganda ham) filter qayta ishlaydi. Agar ro‘yxat juda katta bo‘lsa, bu sekinlashish sabab bo‘ladi.

**Misol — useMemo bilan:**

```jsx
function Royxat({ items, filterText }) {
  const filtered = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [items, filterText]);   // faqat items yoki filterText o‘zgaganda qayta hisobla

  return (
    <ul>
      {filtered.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

Endi `filtered` faqat **items** yoki **filterText** o‘zgaganda qayta hisoblanadi. Boshqa re-render larda eski qiymat ishlatiladi.

**Qisqa qoida:** Dependency array `[items, filterText]` — "bular o‘zgasa, qayta hisobla". Boshqa narsalar o‘zgasa, hisob-kitob qaytalamaymiz.

---

### 2.3 useCallback — funksiyani barqaror reference qilish

**Nima qiladi?** Funksiyani **xotira**da saqlab, faqat **dependency** lar o‘zgaganda yangi funksiya yaratadi. Boshqa re-render larda **eski** funksiya reference qaytariladi.

**Nima uchun kerak?** Agar funksiyani **bola komponent**ga prop sifatida bersak, har re-render da **yangi** funksiya yaratiladi. React.memo ishlatgan bolada "props o‘zgardi" deb hisoblanadi va bola qayta chiziladi. useCallback bilan funksiya reference barqaror bo‘ladi — props "o‘zmagan" bo‘lib qoladi va memo ishlaydi.

**Qachon ishlatamiz?** Funksiyani bola komponentga beramiz va bola React.memo da. Yoki useEffect / boshqa hook dependency si sifatida funksiya ishlatamiz.

**Qachon ishlatmaymiz?** Bola memo emas yoki funksiya hech qachon dependency bo‘lmasa — kerak emas.

**Misol — useCallback siz (har re-render da yangi funksiya):**

```jsx
function Ota() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("bosildi");
  };
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Hisob: {count}</button>
      <Bola onClick={handleClick} />   {/* har re-render da handleClick yangi */}
    </div>
  );
}

const Bola = React.memo(function Bola({ onClick }) {
  console.log("Bola chizildi");
  return <button onClick={onClick}>Bolaning tugmasi</button>;
});
```

Bu yerda **Ota** re-render bo‘lganda `handleClick` **yangi** funksiya bo‘ladi. React.memo "props o‘zgardi" deb hisoblaydi va **Bolani** qayta chizadi. Ya’ni memo foyda bermaydi.

**Misol — useCallback bilan:**

```jsx
function Ota() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("bosildi");
  }, []);   // bo‘sh array = funksiya hech qachon o‘zgarmaydi

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Hisob: {count}</button>
      <Bola onClick={handleClick} />
    </div>
  );
}

const Bola = React.memo(function Bola({ onClick }) {
  console.log("Bola chizildi");
  return <button onClick={onClick}>Bolaning tugmasi</button>;
});
```

Endi `handleClick` har re-render da **bir xil** reference. **Bola** memo tufayli qayta chizilmaydi (onClick "o‘zmagan").

**Agar funksiya ichida state ishlatsak:**

```jsx
const handleClick = useCallback(() => {
  setCount((c) => c + 1);   // yangi qiymat funksiya ichida olinadi
}, []);   // count ni dependency qo‘shish shart emas
```

Yoki parametr kiritamiz:

```jsx
const handleDelete = useCallback((id) => {
  deleteItem(id);
}, [deleteItem]);
```

**Qisqa qoida:** Dependency array da funksiya ichida ishlatiladigan **tashqi** o‘zgaruvchilar (props, state) bo‘lsa, ularni yozamiz. Bo‘sh `[]` — funksiya hech narsaga bog‘liq emas.

---

## 3. Qisqacha jadval

| Vositа        | Nima qiladi                          | Qachon ishlatamiz                          |
|---------------|--------------------------------------|--------------------------------------------|
| **React.memo**   | Komponentni props o‘zgaguncha qayta chizmaydi | Ota tez-tez re-render, bola props barqaror |
| **useMemo**      | Qimmat hisob-kitobni dependency ga bog‘laydi | Og‘ir hisob-kitob, kam dependency          |
| **useCallback**  | Funksiya reference ni barqaror qiladi        | Funksiyani bola yoki hook ga berish        |

**Esda tuting:** Avval **o‘lchang** (Profiler, Performance), keyin **kerakli joyda** shu vositalarni qo‘llang. Hammaga memo/useMemo/useCallback qo‘yish kerak emas — faqat muammo bo‘lgan joyda.
