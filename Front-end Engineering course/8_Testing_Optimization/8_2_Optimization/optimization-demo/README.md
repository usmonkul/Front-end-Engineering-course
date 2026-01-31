# React Optimizatsiya Demo

Bu loyiha `React_optimization.md` darsligidagi muammolar va yechimlarni amaliy ko‘rsatish uchun yaratilgan.

## O‘rnatish

```bash
npm install
```

## Ishga tushirish

```bash
npm run dev
```

Brauzerda http://localhost:5173 oching.

## Qanday ishlatish

1. **Brauzer konsolini oching** (F12 yoki Cmd+Option+I).
2. Har bir bo‘limda **chap** — muammo, **o‘ng** — yechim.
3. Tugmalarni bosing va konsolda re-render xabarlarini kuzating:
   - 🔴 Muammo — keraksiz re-renderlar
   - 🟢 Yechim — optimizatsiya ishlaydi

## Bo‘limlar

| Bo‘lim      | Muammo                          | Yechim        |
|-------------|----------------------------------|---------------|
| React.memo  | Bola har ota re-render da chiziladi | React.memo    |
| useMemo     | Filter har re-render da qayta ishlaydi | useMemo       |
| useCallback | Yangi funksiya → memo ishlamaydi  | useCallback   |
