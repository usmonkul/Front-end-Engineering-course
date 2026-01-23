<details>
<summary>
NPM bilan ishlash
</summary>

---

# NPM bilan ishlash

Front-end loyihalarda paketlar va build vositalarini boshqarish uchun NPM kerak bo'ladi. Quyida junior darajadagi muhim, amalda ishlatiladigan qoidalar berilgan.

## NPM nima uchun kerak?

- Kutubxonalarni o'rnatish va yangilash
- `package.json` orqali loyiha sozlamalarini saqlash
- `scripts` orqali development/build/test ishga tushirish

## Asosiy fayllar

- `package.json` - loyiha konfiguratsiyasi va skriptlar
- `package-lock.json` - aniq versiyalar (har doim commit qilinadi)
- `node_modules/` - o'rnatilgan paketlar (gitga qo'shilmaydi)

## Minimal package.json misol

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
```

## Muhim buyruqlar

### Loyiha yaratish

```bash
npm init -y
```

### Paket o'rnatish

```bash
npm install react
npm install -D eslint
```

### Paketni olib tashlash

```bash
npm uninstall react
```

### Yangilash va tekshirish

```bash
npm outdated
npm update
```

### Skriptlarni ishga tushirish

```bash
npm run dev
npm run build
npm run preview
```

### Tezkor CLI ishga tushirish

```bash
npx create-vite@latest my-app
```

### Xavfsizlik tekshiruvi

```bash
npm audit
npm audit fix
```

## dependencies vs devDependencies

- `dependencies` - production’da kerak bo'ladigan paketlar (React, axios)
- `devDependencies` - faqat development uchun (Vite, ESLint, Prettier)

## Semver haqida qisqa

- `^1.2.3` - minor va patch yangilanishlarga ruxsat
- `~1.2.3` - faqat patch yangilanishlar
- `1.2.3` - aniq versiya

## Amaliy workflow

```bash
npm init -y
npm install react react-dom
npm install -D vite
npm run dev
```

## Kichik, lekin muhim qoidalar

- `node_modules/` ni gitga qo'shmang
- `package-lock.json` ni gitga qo'shing
- Paket versiyalarini chalkashtirmaslik uchun bir jamoada bitta package manager ishlating

---

</details>

<details>
<summary>
Git va GitHub bilan ishlash
</summary>

---

# Git va GitHub bilan ishlash

Git - kod tarixini boshqarish uchun lokal vosita. GitHub esa kodni bulutda saqlash va jamoa bilan ishlash uchun platforma.

## Git asoslari

### Repository yaratish yoki klonlash

```bash
git init
git clone https://github.com/username/repo.git
```

### Holatni ko'rish

```bash
git status
```

### O'zgarishlarni stage qilish

```bash
git add .
git add src/app.js
```

### Commit qilish

```bash
git commit -m "Add header styles"
```

### Tarix va farqlar

```bash
git log --oneline
git diff
git diff --staged
```

## Branch bilan ishlash (asosiy)

```bash
git branch
git checkout -b feature/navbar
git checkout main
```

Merge:

```bash
git merge feature/navbar
```

## Remote va GitHub

### Remote qo'shish va push qilish

```bash
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

### O'zgarishlarni olish

```bash
git pull origin main
```

## GitHub workflow (oddiy)

1. GitHub’da repository yarating
2. Lokal loyihada `git init` qiling
3. `git remote add origin ...` qiling
4. Commit va `git push` qiling
5. Branch orqali ishlang va Pull Request oching

## .gitignore minimal namunasi

```gitignore
node_modules/
dist/
.env
.DS_Store
```

## Yaxshi odatlar

- Kichik, mantiqiy commitlar qiling
- Commit xabari qisqa va aniq bo'lsin
- `main` branch’ga to'g'ridan-to'g'ri kod yozmang
- Maxfiy ma'lumotlarni (API key, parol) gitga qo'shmang

---

</details>