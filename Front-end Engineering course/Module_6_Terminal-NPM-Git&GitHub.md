<details>
<summary>
💻 Terminalda ishlash - Professional Qo'llanma
</summary>

---

# 💻 Terminalda ishlash

**Command Line Interface (CLI) bilan ishlash bo'yicha to'liq qo'llanma**

Zamonaviy dasturlashda terminal bilimi muhim ko'nikma hisoblanadi. Bu qo'llanma sizga terminal bilan ishlashni o'rgatadi.

---

## 📚 O'rganish Maqsadlari

Ushbu darslik tugagandan so'ng siz quyidagilarni tushunasiz:

1. **Terminal Asoslari** - Nima va nima uchun muhim
2. **Asosiy Buyruqlar** - Fayllar va papkalar bilan ishlash
3. **Navigatsiya** - Tizimda harakatlanish
4. **Fayl Boshqaruvi** - Yaratish, o'zgartirish, o'chirish
5. **Tizim Ma'lumotlari** - Tizim haqida ma'lumot olish
6. **Amaliy Misollar** - Haqiqiy loyihalarda qo'llash

---

## 🧠 Terminal nima?

**Terminal** (yoki Command Line Interface - CLI) — bu kompyuter bilan matn orqali o'zaro ta'sir qilish usuli. Bu grafik interfeys (GUI) dan farqli ravishda, buyruqlarni yozish orqali ishlaydi.

### 🎯 Nima uchun terminal muhim?

- **Tezlik** - GUI dan tezroq
- **Avtomatlashtirish** - Skriptlar yozish
- **Server boshqaruvi** - Serverlarda GUI yo'q
- **Dasturlash** - Ko'p dasturlash vositalari terminal orqali
- **Kuch** - Kuchli va moslashuvchan

### 💻 Terminal turlari

**Windows:**
- Command Prompt (cmd)
- PowerShell
- Windows Terminal

**macOS/Linux:**
- Terminal
- iTerm2 (macOS)
- Konsole (Linux)

---

## 1️⃣ Asosiy Buyruqlar

### 📁 Papkalar bilan ishlash

#### `pwd` - Hozirgi papka yo'lini ko'rsatish

```bash
pwd
# Natija: /Users/foydalanuvchi/Documents
```

#### `ls` - Papka tarkibini ko'rsatish

```bash
ls                    # Oddiy ro'yxat
ls -la               # Batafsil ro'yxat (yashirin fayllar bilan)
ls -lh               # O'lchamlar bilan
ls *.txt             # Faqat .txt fayllarini ko'rsatish
```

#### `cd` - Papka o'zgartirish

```bash
cd Documents         # Documents papkasiga o'tish
cd ..                # Yuqori papkaga qaytish
cd ~                 # Uy papkasiga qaytish
cd /                 # Tizim ildiz papkasiga o'tish
cd -                 # Avvalgi papkaga qaytish
```

### 📄 Fayllar bilan ishlash

#### `touch` - Yangi fayl yaratish

```bash
touch yangi_fayl.txt
touch fayl1.txt fayl2.txt fayl3.txt
```

#### `mkdir` - Yangi papka yaratish

```bash
mkdir yangi_papka
mkdir -p papka1/papka2/papka3    # Ichma-ich papkalar bilan
```

#### `cp` - Fayl yoki papkani nusxalash

```bash
cp manba.txt nusxa.txt
cp -r papka/ yangi_papka/        # Papkani nusxalash
cp *.txt papka/                  # Barcha .txt fayllarni nusxalash
```

#### `mv` - Fayl yoki papkani ko'chirish

```bash
mv eski_nom.txt yangi_nom.txt
mv fayl.txt papka/
mv papka1/ papka2/
```

#### `rm` - Fayl yoki papkani o'chirish

```bash
rm fayl.txt
rm -r papka/                     # Papkani o'chirish
rm -f fayl.txt                   # Tasdiqlashsiz o'chirish
rm -rf papka/                    # Xavfsizliksiz o'chirish (ehtiyot!)
```

---

## 2️⃣ Fayl Tarkibini Ko'rish va Tahrirlash

### `cat` - Fayl tarkibini ko'rsatish

```bash
cat fayl.txt
cat fayl1.txt fayl2.txt          # Bir nechta fayllarni birlashtirish
cat > yangi_fayl.txt             # Yangi fayl yaratish va yozish
```

### `less` - Katta fayllarni ko'rish

```bash
less katta_fayl.txt
# Navigatsiya:
# Space - keyingi sahifa
# b - oldingi sahifa
# q - chiqish
# /matn - qidirish
```

### `head` - Fayl boshidan ko'rish

```bash
head fayl.txt                    # Dastlabki 10 qator
head -n 5 fayl.txt               # Dastlabki 5 qator
```

### `tail` - Fayl oxiridan ko'rish

```bash
tail fayl.txt                    # Oxirgi 10 qator
tail -n 5 fayl.txt               # Oxirgi 5 qator
tail -f log.txt                  # Fayl o'zgarishini kuzatish
```

### `nano` - Oddiy matn tahrirlovchi

```bash
nano fayl.txt
# Asosiy buyruqlar:
# Ctrl + O - Saqlash
# Ctrl + X - Chiqish
# Ctrl + K - Qatorni kesish
# Ctrl + U - Qatorni yopishtirish
```

### `vim` - Kuchli matn tahrirlovchi

```bash
vim fayl.txt
# Rejimlar:
# i - Yozish rejimi
# Esc - Buyruq rejimi
# :w - Saqlash
# :q - Chiqish
# :wq - Saqlash va chiqish
# :q! - Saqlashsiz chiqish
```

---

## 3️⃣ Tizim Ma'lumotlari

### `whoami` - Hozirgi foydalanuvchi

```bash
whoami
# Natija: foydalanuvchi_nomi
```

### `uname` - Tizim ma'lumotlari

```bash
uname -a                         # Barcha ma'lumotlar
uname -s                         # Tizim nomi
uname -r                         # Versiya
```

### `df` - Disk hajmi

```bash
df -h                            # O'qilishi oson formatda
df -h /                          # Ildiz papkasi uchun
```

### `du` - Papka hajmi

```bash
du -h papka/                     # Papka hajmi
du -sh papka/                    # Jami hajm
du -h --max-depth=2 papka/       # 2 darajagacha
```

### `top` - Tizim yuklamasi

```bash
top
# Chiqish: q
# Yangilash: r
# Jarayonlarni o'chirish: k
```

### `ps` - Jarayonlar ro'yxati

```bash
ps aux                           # Barcha jarayonlar
ps aux | grep chrome             # Chrome jarayonlari
```

---

## 4️⃣ Qidirish va Filtrlash

### `find` - Fayllarni qidirish

```bash
find . -name "*.txt"             # Hozirgi papkada .txt fayllar
find / -name "fayl.txt"          # Butun tizimda qidirish
find . -type f -name "*.js"      # Faqat fayllar
find . -type d -name "node*"     # Faqat papkalar
find . -size +100M               # 100MB dan katta fayllar
```

### `grep` - Matn qidirish

```bash
grep "qidirilayotgan_matn" fayl.txt
grep -i "matn" fayl.txt          # Katta-kichik harflarni hisobga olmaslik
grep -r "matn" papka/            # Papkada qidirish
grep -n "matn" fayl.txt          # Qator raqami bilan
grep -v "matn" fayl.txt          # Teskari qidirish
```

### `awk` - Matn qayta ishlash

```bash
awk '{print $1}' fayl.txt        # Birinchi ustun
awk -F',' '{print $2}' fayl.txt  # Vergul bilan ajratilgan
awk '$3 > 100' fayl.txt          # Shartli qidirish
```

### `sed` - Matn o'zgartirish

```bash
sed 's/eski/yangi/g' fayl.txt    # Almashtirish
sed '1,5d' fayl.txt              # 1-5 qatorlarni o'chirish
sed -i 's/eski/yangi/g' fayl.txt # Faylga saqlash
```

---

## 5️⃣ Tarmoq Buyruqlari

### `ping` - Tarmoq ulanishini tekshirish

```bash
ping google.com
ping -c 4 google.com             # 4 marta ping
```

### `curl` - URL dan ma'lumot olish

```bash
curl https://api.example.com
curl -o fayl.txt https://example.com/fayl.txt
curl -H "Content-Type: application/json" -d '{"key":"value"}' https://api.example.com
```

### `wget` - Fayllarni yuklab olish

```bash
wget https://example.com/fayl.zip
wget -c https://example.com/fayl.zip    # Davom ettirish
wget -r https://example.com             # Rekursiv yuklash
```

### `ssh` - Masofaviy ulanish

```bash
ssh foydalanuvchi@server.com
ssh -p 2222 foydalanuvchi@server.com   # Boshqa port
```

### `scp` - Masofaviy fayl ko'chirish

```bash
scp fayl.txt foydalanuvchi@server.com:/papka/
scp -r papka/ foydalanuvchi@server.com:/papka/
```

---

## 6️⃣ Paket Boshqaruvi

### Ubuntu/Debian (apt)

```bash
sudo apt update                   # Paketlar ro'yxatini yangilash
sudo apt upgrade                  # Paketlarni yangilash
sudo apt install paket_nomi       # Paket o'rnatish
sudo apt remove paket_nomi        # Paket o'chirish
sudo apt search paket_nomi        # Paket qidirish
```

### CentOS/RHEL (yum/dnf)

```bash
sudo yum update                   # Yangilash
sudo yum install paket_nomi       # O'rnatish
sudo yum remove paket_nomi        # O'chirish
sudo yum search paket_nomi        # Qidirish
```

### macOS (Homebrew)

```bash
brew update                       # Yangilash
brew install paket_nomi           # O'rnatish
brew uninstall paket_nomi         # O'chirish
brew search paket_nomi            # Qidirish
```

---

## 7️⃣ Amaliy Misollar

### 📁 Loyiha papkasini yaratish

```bash
# Yangi loyiha yaratish
mkdir my_project
cd my_project
mkdir src css js images
touch index.html
touch src/main.js
touch css/style.css
touch README.md

# Natija:
my_project/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
```

### 🔍 Fayllarni qidirish va tahrirlash

```bash
# Barcha .js fayllarni topish
find . -name "*.js"

# Fayllarda "function" so'zini qidirish
grep -r "function" .

# Barcha .txt fayllarda "error" so'zini "xato" ga almashtirish
find . -name "*.txt" -exec sed -i 's/error/xato/g' {} \;
```

### 📊 Tizim ma'lumotlarini olish

```bash
# Disk hajmi
df -h

# Eng ko'p joy egallagan papkalar
du -h --max-depth=1 /home | sort -hr

# Eng ko'p xotira sarflayotgan jarayonlar
ps aux --sort=-%mem | head -10
```

### 🌐 Tarmoq diagnostikasi

```bash
# DNS tekshirish
nslookup google.com

# Port ochiqligini tekshirish
telnet google.com 80

# Tarmoq interfeyslari
ifconfig
# yoki
ip addr
```

---

## 8️⃣ Best Practices

### ✅ Qilish kerak

```bash
# ✅ Papka nomlarida bo'shliq o'rniga _ ishlatish
mkdir my_project_folder

# ✅ Fayl nomlarida kichik harflar
touch myfile.txt

# ✅ Muntazam backup olish
cp -r important_folder/ backup_$(date +%Y%m%d)/

# ✅ Buyruqlarni tekshirish
ls -la papka/ 2>/dev/null || echo "Papka mavjud emas"

# ✅ Xavfsizlik uchun sudo ishlatish
sudo apt update
```

### ❌ Qilmaslik kerak

```bash
# ❌ Root foydalanuvchi sifatida ishlash
sudo su

# ❌ Xavfsizliksiz o'chirish
rm -rf /

# ❌ Parolni buyruqda ko'rsatish
mysql -u user -ppassword

# ❌ Noma'lum fayllarni yuklab olish
wget http://shady-site.com/script.sh && bash script.sh
```

### 🔧 Foydali Aliaslar

```bash
# .bashrc yoki .zshrc fayliga qo'shish
alias ll='ls -la'
alias la='ls -A'
alias l='ls -CF'
alias ..='cd ..'
alias ...='cd ../..'
alias grep='grep --color=auto'
alias df='df -h'
alias du='du -h'
```

---

## 9️⃣ Skript Yozish

### Bash skript asoslari

```bash
#!/bin/bash
# Bu birinchi qator shebang deyiladi

# O'zgaruvchilar
NAME="Foydalanuvchi"
echo "Salom, $NAME!"

# Shartlar
if [ -f "fayl.txt" ]; then
    echo "Fayl mavjud"
else
    echo "Fayl mavjud emas"
fi

# Tsikllar
for i in {1..5}; do
    echo "Raqam: $i"
done

# Funksiyalar
function salom() {
    echo "Salom, $1!"
}

salom "Dunyo"
```

### Amaliy skript misoli

```bash
#!/bin/bash
# Fayllarni backup qilish skripti

BACKUP_DIR="/backup/$(date +%Y%m%d)"
SOURCE_DIR="/home/foydalanuvchi/documents"

# Backup papkasini yaratish
mkdir -p "$BACKUP_DIR"

# Fayllarni nusxalash
cp -r "$SOURCE_DIR" "$BACKUP_DIR"

# Eski backup'larni o'chirish (7 kundan eski)
find /backup -type d -mtime +7 -exec rm -rf {} \;

echo "Backup tugadi: $BACKUP_DIR"
```

---

## 🧠 Xulosa jadvali

| Kategoriya | Asosiy buyruqlar | Maqsadi |
|------------|------------------|---------|
| Navigatsiya | `pwd`, `ls`, `cd` | Papkalarda harakatlanish |
| Fayl boshqaruvi | `touch`, `mkdir`, `cp`, `mv`, `rm` | Fayllar bilan ishlash |
| Ko'rish | `cat`, `less`, `head`, `tail` | Fayl tarkibini ko'rish |
| Tahrirlash | `nano`, `vim` | Fayllarni tahrirlash |
| Qidirish | `find`, `grep` | Fayl va matn qidirish |
| Tizim | `top`, `ps`, `df`, `du` | Tizim ma'lumotlari |
| Tarmoq | `ping`, `curl`, `ssh` | Tarmoq bilan ishlash |

---

## 📌 Real hayotda qayerda ishlatiladi?

* **Server boshqaruvi** - Linux serverlarda ishlash
* **Dasturlash** - Git, npm, yarn, docker
* **DevOps** - Deployment, monitoring, automation
* **Tizim ma'muriyati** - Backup, monitoring, security
* **Ma'lumotlar tahlili** - Log fayllarini tahlil qilish
* **Avtomatlashtirish** - Skriptlar yozish

---

## 🚀 Keyingi qadamlar

1. **Amaliyot** - Har kuni terminalda ishlash
2. **Tadqiq qilish** - Shell skriptlari yozish
3. **O'zlashtirish** - Linux tizim ma'muriyati
4. **Qo'llash** - DevOps va automation

---

## 📚 Qo'shimcha manbalar

* **Linux man pages** - `man buyruq_nomi`
* **Online qo'llanmalar** - tldr.sh, explain.shell
* **Praktika** - OverTheWire Bandit
* **Kitoblar** - "The Linux Command Line"

---

</details>



<details>
<summary>
📦 NPM va Yarn bilan ishlash - Front-end Developerlar uchun
</summary>

---

# 📦 NPM va Yarn bilan ishlash

**JavaScript paket boshqaruvi vositalari bo'yicha to'liq qo'llanma**

Zamonaviy front-end dasturlashda paket boshqaruvi muhim ko'nikma hisoblanadi. Bu qo'llanma sizga NPM va Yarn bilan ishlashni o'rgatadi.

---

## 📚 O'rganish Maqsadlari

Ushbu darslik tugagandan so'ng siz quyidagilarni tushunasiz:

1. **Paket Boshqaruvi Asoslari** - Nima va nima uchun muhim
2. **NPM (Node Package Manager)** - Asosiy paket boshqaruvchi
3. **Yarn** - Tez va xavfsiz alternativ
4. **package.json** - Loyiha konfiguratsiyasi
5. **Dependencies** - Bog'liqliklar boshqaruvi
6. **Amaliy Misollar** - Haqiqiy loyihalarda qo'llash

---

## 🧠 Paket Boshqaruvi nima?

**Paket Boshqaruvi** — bu dasturlash loyihalarida tashqi kutubxonalar va vositalarni boshqarish tizimi. Bu sizga boshqa dasturchilar yaratgan kodlardan foydalanish imkonini beradi.

### 🎯 Nima uchun paket boshqaruvi muhim?

- **Qayta ishlatish** - Boshqalar yaratgan kodlardan foydalanish
- **Vaqt tejash** - Har narsani qaytadan yozish shart emas
- **Xavfsizlik** - Tekshirilgan va ishonchli kodlar
- **Yangilanishlar** - Avtomatik yangilanishlar
- **Bog'liqliklar** - Avtomatik bog'liqliklar boshqaruvi

### 📦 Paket boshqaruvchilar

**NPM (Node Package Manager):**
- Node.js bilan birga keladi
- Eng keng tarqalgan
- Katta paketlar bazasi

**Yarn:**
- Facebook tomonidan yaratilgan
- Tezroq o'rnatish
- Xavfsizroq

---

## 1️⃣ NPM (Node Package Manager)

### 🔧 O'rnatish va sozlash

#### Node.js o'rnatish

```bash
# Windows uchun nodejs.org dan yuklab olish
# macOS uchun Homebrew
brew install node

# Linux uchun
sudo apt update
sudo apt install nodejs npm
```

#### NPM versiyasini tekshirish

```bash
node --version
npm --version
```

### 📦 Asosiy NPM buyruqlari

#### `npm init` - Yangi loyiha yaratish

```bash
npm init                    # Interaktiv rejimda
npm init -y                 # Standart sozlamalar bilan
npm init --yes              # Xuddi shunday
```

#### `npm install` - Paketlarni o'rnatish

```bash
npm install lodash          # Paket o'rnatish
npm i lodash               # Qisqartma
npm install lodash --save   # dependencies ga qo'shish (eski usul)
npm install lodash --save-dev # devDependencies ga qo'shish
npm install -g package-name # Global o'rnatish
```

#### `npm uninstall` - Paketlarni o'chirish

```bash
npm uninstall lodash        # Paket o'chirish
npm un lodash              # Qisqartma
npm uninstall -g package-name # Global o'chirish
```

#### `npm update` - Paketlarni yangilash

```bash
npm update                  # Barcha paketlarni yangilash
npm update lodash          # Ma'lum paketni yangilash
npm outdated               # Eski paketlarni ko'rsatish
```

#### `npm list` - O'rnatilgan paketlarni ko'rsatish

```bash
npm list                    # Barcha paketlar
npm list --depth=0         # Faqat asosiy paketlar
npm list -g                # Global paketlar
```

---

## 2️⃣ Yarn

### 🔧 O'rnatish

```bash
# NPM orqali o'rnatish
npm install -g yarn

# macOS uchun Homebrew
brew install yarn

# Linux uchun
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn
```

### 📦 Asosiy Yarn buyruqlari

#### `yarn init` - Yangi loyiha yaratish

```bash
yarn init                   # Interaktiv rejimda
yarn init -y                # Standart sozlamalar bilan
```

#### `yarn add` - Paketlarni o'rnatish

```bash
yarn add lodash             # dependencies ga qo'shish
yarn add lodash --dev       # devDependencies ga qo'shish
yarn global add package-name # Global o'rnatish
```

#### `yarn remove` - Paketlarni o'chirish

```bash
yarn remove lodash          # Paket o'chirish
yarn global remove package-name # Global o'chirish
```

#### `yarn upgrade` - Paketlarni yangilash

```bash
yarn upgrade                # Barcha paketlarni yangilash
yarn upgrade lodash         # Ma'lum paketni yangilash
yarn outdated               # Eski paketlarni ko'rsatish
```

#### `yarn list` - O'rnatilgan paketlarni ko'rsatish

```bash
yarn list                   # Barcha paketlar
yarn list --depth=0        # Faqat asosiy paketlar
yarn global list           # Global paketlar
```

---

## 3️⃣ package.json fayli

### 📄 Asosiy struktura

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "Mening loyiham haqida",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build": "webpack --mode production",
    "test": "jest"
  },
  "keywords": ["javascript", "nodejs"],
  "author": "Sizning ismingiz",
  "license": "MIT",
  "dependencies": {
    "lodash": "^4.17.21",
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.22",
    "jest": "^29.5.0"
  }
}
```

### 🎯 Muhim maydonlar

#### `scripts` - Buyruqlar

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "webpack --mode production",
    "test": "jest",
    "lint": "eslint src/",
    "format": "prettier --write src/"
  }
}
```

**Ishlatish:**
```bash
npm run start
npm run dev
npm run build
npm test
npm run lint
```

#### `dependencies` vs `devDependencies`

**dependencies:**
- Loyiha ishlashi uchun zarur
- Production'da ishlatiladi
- `npm install --save` yoki `yarn add`

**devDependencies:**
- Faqat development uchun
- Production'da ishlatilmaydi
- `npm install --save-dev` yoki `yarn add --dev`

---

## 4️⃣ Versiya Boshqaruvi

### 📌 Semantik versiyalash (SemVer)

**Format:** `MAJOR.MINOR.PATCH`

- **MAJOR** - Katta o'zgarishlar, orqaga moslik yo'q
- **MINOR** - Yangi funksiyalar, orqaga moslik bor
- **PATCH** - Xatolarni tuzatish

### 🔢 Versiya belgilari

```json
{
  "dependencies": {
    "lodash": "^4.17.21",    // 4.17.21 va undan yuqori, 5.0.0 dan past
    "express": "~4.18.2",    // 4.18.2 va undan yuqori, 4.19.0 dan past
    "react": "18.2.0",       // Aniq versiya
    "vue": "*",              // Har qanday versiya
    "angular": ">=16.0.0"    // 16.0.0 va undan yuqori
  }
}
```

### 📋 Versiya belgilari jadvali

| Belgi | Ma'nosi | Misol |
|-------|---------|-------|
| `^` | Major versiyadan past | `^1.2.3` = `>=1.2.3 <2.0.0` |
| `~` | Minor versiyadan past | `~1.2.3` = `>=1.2.3 <1.3.0` |
| `*` | Har qanday versiya | `*` = `>=0.0.0` |
| `>=` | Katta yoki teng | `>=1.2.3` |
| `<=` | Kichik yoki teng | `<=1.2.3` |

---

## 5️⃣ package-lock.json va yarn.lock

### 🔒 Nima uchun kerak?

- **Aniq versiyalar** - Har doim bir xil versiyalar
- **Xavfsizlik** - Paketlar o'zgarishini oldini olish
- **Tezlik** - O'rnatish jarayonini tezlashtirish

### 📄 package-lock.json (NPM)

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "name": "my-project",
      "version": "1.0.0",
      "dependencies": {
        "lodash": "^4.17.21"
      }
    },
    "node_modules/lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-..."
    }
  }
}
```

### 📄 yarn.lock (Yarn)

```yaml
# THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
# yarn lockfile v1

lodash@^4.17.21:
  version "4.17.21"
  resolved "https://registry.yarnpkg.com/lodash/-/lodash-4.17.21.tgz#..."
  integrity sha512-...
```

---

## 6️⃣ Amaliy Misollar

### 🚀 React loyihasi yaratish

```bash
# Create React App bilan
npx create-react-app my-app
cd my-app
npm start

# Vite bilan
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

### 📦 Keng tarqalgan paketlarni o'rnatish

```bash
# Front-end framework'lar
npm install react react-dom
npm install vue
npm install angular

# CSS framework'lar
npm install bootstrap
npm install tailwindcss
npm install @mui/material @emotion/react @emotion/styled

# Utility kutubxonalar
npm install lodash
npm install moment
npm install axios

# Development vositalar
npm install --save-dev webpack webpack-cli
npm install --save-dev babel-loader @babel/core
npm install --save-dev eslint prettier
```

### 🔧 package.json misoli

```json
{
  "name": "my-react-app",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "axios": "^1.3.0",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@vitejs/plugin-react": "^3.1.0",
    "vite": "^4.1.0",
    "eslint": "^8.34.0",
    "prettier": "^2.8.4"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext js,jsx,ts,tsx",
    "format": "prettier --write src/"
  }
}
```

### 🌐 API bilan ishlash

```bash
# HTTP client
npm install axios

# GraphQL client
npm install @apollo/client graphql

# State management
npm install redux @reduxjs/toolkit react-redux
npm install zustand
npm install jotai
```

---

## 7️⃣ Best Practices

### ✅ Qilish kerak

```bash
# ✅ package-lock.json va yarn.lock ni commit qilish
git add package-lock.json
git commit -m "Add package-lock.json"

# ✅ node_modules ni .gitignore ga qo'shish
echo "node_modules/" >> .gitignore

# ✅ Versiyalarni aniq belgilash
npm install lodash@4.17.21

# ✅ Security tekshirish
npm audit
npm audit fix

# ✅ Eski paketlarni tozalash
npm prune
```

### ❌ Qilmaslik kerak

```bash
# ❌ Global paketlarni ortiqcha o'rnatish
npm install -g create-react-app

# ❌ package-lock.json ni o'chirish
rm package-lock.json

# ❌ node_modules ni commit qilish
git add node_modules/

# ❌ Versiyalarni * bilan belgilash
"lodash": "*"
```

### 🔧 Foydali buyruqlar

```bash
# Paket haqida ma'lumot
npm info lodash
npm view lodash

# Paket o'rnatish sababini ko'rsatish
npm ls lodash

# Paketni qayerdan o'rnatish
npm config get registry

# Cache tozalash
npm cache clean --force
yarn cache clean
```

---

## 8️⃣ Xavfsizlik

### 🔍 Xavfsizlik tekshirish

```bash
# NPM audit
npm audit
npm audit fix
npm audit fix --force

# Yarn audit
yarn audit
yarn audit --level moderate

# Snyk bilan tekshirish
npm install -g snyk
snyk test
```

### 🛡️ Xavfsizlik maslahatlari

- **Muntazam yangilash** - `npm update` yoki `yarn upgrade`
- **Audit tekshirish** - `npm audit` yoki `yarn audit`
- **Ishonchli paketlar** - Ko'p yuklab olingan paketlar
- **Versiya belgilash** - Aniq versiyalarni ishlatish

---

## 9️⃣ NPM vs Yarn taqqoslash

### 📊 Taqqoslash jadvali

| Xususiyat | NPM | Yarn |
|-----------|-----|------|
| O'rnatish tezligi | Sekinroq | Tezroq |
| Xavfsizlik | Yaxshi | Yaxshiroq |
| Offline ishlash | Cheklangan | Yaxshi |
| Parallel o'rnatish | Yo'q | Bor |
| Lock fayl | package-lock.json | yarn.lock |
| Workspaces | Bor | Yaxshiroq |

### 🎯 Qaysi birini tanlash?

**NPM tanlang agar:**
- Node.js bilan birga keladi
- Oddiy loyihalar
- Katta jamiyat

**Yarn tanlang agar:**
- Tezlik muhim
- Katta loyihalar
- Monorepo ishlatish

---

## 🧠 Xulosa jadvali

| Buyruq | NPM | Yarn | Maqsadi |
|--------|-----|------|---------|
| Loyiha yaratish | `npm init` | `yarn init` | Yangi loyiha |
| Paket o'rnatish | `npm install` | `yarn add` | Paket qo'shish |
| Paket o'chirish | `npm uninstall` | `yarn remove` | Paket olib tashlash |
| Yangilash | `npm update` | `yarn upgrade` | Paketlarni yangilash |
| Script ishga tushirish | `npm run` | `yarn` | Buyruqlarni bajarish |
| Xavfsizlik | `npm audit` | `yarn audit` | Xavfsizlik tekshirish |

---

## 📌 Real hayotda qayerda ishlatiladi?

* **Front-end framework'lar** - React, Vue, Angular
* **Build vositalar** - Webpack, Vite, Rollup
* **Testing** - Jest, Cypress, Playwright
* **Linting va formatting** - ESLint, Prettier
* **CSS framework'lar** - Bootstrap, Tailwind CSS
* **State management** - Redux, Zustand, Jotai

---

## 🚀 Keyingi qadamlar

1. **Amaliyot** - Turli loyihalarda paket boshqaruvi
2. **Tadqiq qilish** - Monorepo va workspaces
3. **O'zlashtirish** - Custom paketlar yaratish
4. **Qo'llash** - CI/CD va deployment

---

## 📚 Qo'shimcha manbalar

* **NPM rasmiy hujjati** - docs.npmjs.com
* **Yarn rasmiy hujjati** - yarnpkg.com
* **Semantic Versioning** - semver.org
* **Node.js rasmiy sayti** - nodejs.org

---

</details>


<details>
<summary>
🔧 Git va GitHub - Professional Qo'llanma
</summary>

---

# 🔧 Git va GitHub

**Versiya boshqaruvi va hamkorlik bo'yicha to'liq qo'llanma**

Zamonaviy dasturlashda versiya boshqaruvi va hamkorlik muhim ko'nikma hisoblanadi. Bu qo'llanma sizga Git va GitHub bilan ishlashni o'rgatadi.

---

## 📚 O'rganish Maqsadlari

Ushbu darslik tugagandan so'ng siz quyidagilarni tushunasiz:

1. **Versiya Boshqaruvi Asoslari** - Nima va nima uchun muhim
2. **Git Asoslari** - Lokal versiya boshqaruvi
3. **GitHub** - Bulutli repository va hamkorlik
4. **Branch va Merge** - Parallel ishlash
5. **Pull Request** - Kod review va birlashtirish
6. **Amaliy Misollar** - Haqiqiy loyihalarda qo'llash

---

## 🧠 Versiya Boshqaruvi nima?

**Versiya Boshqaruvi** — bu dasturlash loyihalarida kod o'zgarishlarini kuzatish va boshqarish tizimi. Bu sizga kod tarixini saqlash va boshqalar bilan hamkorlik qilish imkonini beradi.

### 🎯 Nima uchun versiya boshqaruvi muhim?

- **Xavfsizlik** - Kod o'zgarishlarini saqlash
- **Hamkorlik** - Bir nechta dasturchilar bilan ishlash
- **Tarix** - O'zgarishlar tarixini kuzatish
- **Qaytish** - Oldingi versiyalarga qaytish
- **Eksperiment** - Xavfsiz tajribalar o'tkazish

### 🔧 Git va GitHub farqi

**Git:**
- Lokal versiya boshqaruvi tizimi
- Kompyuteringizda ishlaydi
- Barcha tarix saqlanadi

**GitHub:**
- Bulutli repository xizmati
- Git repository'larni saqlaydi
- Hamkorlik va social features

---

## 1️⃣ Git O'rnatish va Sozlash

### 🔧 O'rnatish

```bash
# Windows uchun git-scm.com dan yuklab olish
# macOS uchun Homebrew
brew install git

# Linux uchun
sudo apt update
sudo apt install git
```

#### Git versiyasini tekshirish

```bash
git --version
```

### ⚙️ Birinchi sozlash

```bash
# Foydalanuvchi ma'lumotlarini sozlash
git config --global user.name "Sizning Ismingiz"
git config --global user.email "sizning@email.com"

# Sozlamalarni tekshirish
git config --list
```

### 🎨 Git sozlamalari

```bash
# Default editor o'zgartirish
git config --global core.editor "code --wait"

# Default branch nomi
git config --global init.defaultBranch main

# Credential helper (Windows)
git config --global credential.helper wincred

# Credential helper (macOS)
git config --global credential.helper osxkeychain
```

---

## 2️⃣ Git Asoslari

### 📁 Repository yaratish

```bash
# Yangi repository yaratish
git init

# Mavjud repository'ni klonlash
git clone https://github.com/foydalanuvchi/loyiha.git
git clone https://github.com/foydalanuvchi/loyiha.git yangi-nom
```

### 📊 Status va holat

```bash
# Repository holatini ko'rsatish
git status

# Qisqartma holat
git status -s
git status --short
```

### ➕ Fayllarni qo'shish

```bash
# Barcha fayllarni qo'shish
git add .

# Ma'lum faylni qo'shish
git add fayl.txt

# Ma'lum turdagi fayllarni qo'shish
git add *.js
git add src/

# Interaktiv qo'shish
git add -i
```

### 💾 Commit yaratish

```bash
# Oddiy commit
git commit -m "Yangi funksiya qo'shildi"

# Barcha o'zgarishlarni qo'shish va commit
git commit -am "Xatolarni tuzatish"

# Commit xabarini tahrirlovchida yozish
git commit
```

### 📝 Commit xabarlari yozish

```bash
# Yaxshi commit xabarlari
git commit -m "feat: yangi login funksiyasi qo'shildi"
git commit -m "fix: xatolik tuzatildi"
git commit -m "docs: README yangilandi"
git commit -m "style: kod formatlanishi"
git commit -m "refactor: kod qayta yozildi"
git commit -m "test: yangi testlar qo'shildi"
```

---

## 3️⃣ Tarix va Log

### 📋 Tarixni ko'rish

```bash
# Oddiy tarix
git log

# Qisqartma tarix
git log --oneline

# Grafik tarix
git log --graph --oneline --all

# Ma'lum foydalanuvchi tarixi
git log --author="Ism"

# Ma'lum vaqt oralig'i
git log --since="2023-01-01" --until="2023-12-31"

# Ma'lum fayl tarixi
git log -- fayl.txt
```

### 🔍 O'zgarishlarni ko'rish

```bash
# Oxirgi commit o'zgarishlari
git show

# Ma'lum commit o'zgarishlari
git show abc1234

# Fayl o'zgarishlari
git diff

# Staging area o'zgarishlari
git diff --staged

# Ikki commit o'rtasidagi farq
git diff abc1234..def5678
```

---

## 4️⃣ Branch va Merge

### 🌿 Branch bilan ishlash

```bash
# Barcha branch'larni ko'rsatish
git branch

# Yangi branch yaratish
git branch yangi-branch

# Branch'ga o'tish
git checkout yangi-branch

# Yangi branch yaratish va o'tish
git checkout -b yangi-branch

# Branch'ni o'chirish
git branch -d yangi-branch
git branch -D yangi-branch  # Majburiy o'chirish
```

### 🔄 Merge

```bash
# Branch'ni birlashtirish
git merge yangi-branch

# Fast-forward merge
git merge --ff-only yangi-branch

# No-ff merge (merge commit yaratish)
git merge --no-ff yangi-branch

# Merge'ni bekor qilish
git merge --abort
```

### 🔀 Rebase

```bash
# Branch'ni rebase qilish
git rebase main

# Interaktiv rebase
git rebase -i HEAD~3

# Rebase'ni bekor qilish
git rebase --abort
```

---

## 5️⃣ Remote Repository

### 🌐 Remote qo'shish

```bash
# Remote repository qo'shish
git remote add origin https://github.com/foydalanuvchi/loyiha.git

# Remote'larni ko'rsatish
git remote -v

# Remote nomini o'zgartirish
git remote rename origin yangi-nom

# Remote'ni o'chirish
git remote remove origin
```

### 📤 Push va Pull

```bash
# O'zgarishlarni yuborish
git push origin main

# Branch'ni yuborish
git push origin yangi-branch

# O'zgarishlarni olish
git pull origin main

# Faqat olish (merge qilmaslik)
git fetch origin
```

### 🔄 Upstream sozlash

```bash
# Upstream branch sozlash
git push -u origin main

# Keyingi push'lar uchun
git push
git pull
```

---

## 6️⃣ GitHub

### 🔐 GitHub hisob yaratish

1. github.com ga o'ting
2. "Sign up" tugmasini bosing
3. Ma'lumotlarni to'ldiring
4. Email'ni tasdiqlang

### 📁 Repository yaratish

1. GitHub'da "New repository" tugmasini bosing
2. Repository nomini kiriting
3. Tavsif yozing
4. Public yoki Private tanlang
5. README, .gitignore, license qo'shish

### 🔑 SSH kalit sozlash

```bash
# SSH kalit yaratish
ssh-keygen -t ed25519 -C "sizning@email.com"

# SSH agent'ga qo'shish
ssh-add ~/.ssh/id_ed25519

# Kalitni ko'rsatish (GitHub'ga qo'shish uchun)
cat ~/.ssh/id_ed25519.pub
```

### 🌐 GitHub CLI

```bash
# GitHub CLI o'rnatish
# macOS
brew install gh

# Linux
sudo apt install gh

# GitHub'ga kirish
gh auth login

# Repository yaratish
gh repo create yangi-loyiha --public
gh repo create yangi-loyiha --private
```

---

## 7️⃣ Pull Request

### 🔄 Pull Request yaratish

1. **Branch yarating:**
```bash
git checkout -b yangi-funksiya
```

2. **O'zgarishlar qiling:**
```bash
# Fayllarni o'zgartiring
git add .
git commit -m "Yangi funksiya qo'shildi"
```

3. **Push qiling:**
```bash
git push origin yangi-funksiya
```

4. **GitHub'da Pull Request yarating:**
- GitHub repository sahifasiga o'ting
- "Compare & pull request" tugmasini bosing
- Tavsif yozing
- "Create pull request" tugmasini bosing

### 📝 Pull Request yaxshilash

```markdown
## Tavsif
Bu PR qanday muammoni hal qiladi?

## O'zgarishlar
- [ ] Yangi funksiya qo'shildi
- [ ] Xatolik tuzatildi
- [ ] Hujjat yangilandi

## Test qilingan
- [ ] Lokal testlar o'tdi
- [ ] Browser testlar o'tdi

## Screenshot
Agar UI o'zgarishlari bo'lsa, screenshot qo'shing
```

### ✅ Code Review

```bash
# Pull Request'ni local'ga olish
git fetch origin
git checkout -b review-branch origin/yangi-funksiya

# O'zgarishlarni ko'rish
git diff main..review-branch

# Comment qo'shish
# GitHub'da fayl ustiga comment yozing
```

---

## 8️⃣ Amaliy Misollar

### 🚀 Yangi loyiha boshlash

```bash
# 1. Yangi papka yarating
mkdir my-project
cd my-project

# 2. Git repository yarating
git init

# 3. GitHub'da repository yarating
gh repo create my-project --public

# 4. Remote qo'shing
git remote add origin https://github.com/foydalanuvchi/my-project.git

# 5. Birinchi fayllarni yarating
echo "# My Project" > README.md
touch index.html
touch style.css
touch script.js

# 6. Commit va push
git add .
git commit -m "Initial commit"
git push -u origin main
```

### 🔧 Xatolik tuzatish

```bash
# 1. Yangi branch yarating
git checkout -b bug-fix

# 2. Xatolikni tuzating
# Fayllarni o'zgartiring

# 3. O'zgarishlarni commit qiling
git add .
git commit -m "fix: login xatoligi tuzatildi"

# 4. Push qiling
git push origin bug-fix

# 5. Pull Request yarating
# GitHub'da "Compare & pull request"
```

### 🔄 Feature branch workflow

```bash
# 1. Yangi feature uchun branch
git checkout -b feature/yangi-funksiya

# 2. Ishlash
# Kod yozing, test qiling

# 3. Commit'lar
git add .
git commit -m "feat: yangi funksiya qo'shildi"
git commit -m "test: testlar qo'shildi"
git commit -m "docs: hujjat yangilandi"

# 4. Main branch'ni yangilang
git checkout main
git pull origin main

# 5. Rebase qiling
git checkout feature/yangi-funksiya
git rebase main

# 6. Push va Pull Request
git push origin feature/yangi-funksiya
```

### 🏷️ Release yaratish

```bash
# 1. Version tag yarating
git tag -a v1.0.0 -m "Version 1.0.0"

# 2. Tag'ni push qiling
git push origin v1.0.0

# 3. GitHub'da Release yarating
# GitHub repository sahifasida "Releases" > "Create a new release"
```

---

## 9️⃣ Best Practices

### ✅ Qilish kerak

```bash
# ✅ Kichik va tez-tez commit qiling
git commit -m "feat: login funksiyasi qo'shildi"

# ✅ Tushunarli commit xabarlari yozing
git commit -m "fix: null pointer xatoligi tuzatildi"

# ✅ Branch nomlarini aniq belgilang
git checkout -b feature/user-authentication
git checkout -b bugfix/login-error
git checkout -b hotfix/security-patch

# ✅ Pull Request'da tavsif yozing
# GitHub'da batafsil tavsif yozing

# ✅ Code review qiling
# Boshqalar kodini tekshiring
```

### ❌ Qilmaslik kerak

```bash
# ❌ Katta commit'lar
git commit -m "Loyiha tugadi"

# ❌ Aniq bo'lmagan commit xabarlari
git commit -m "O'zgarishlar"

# ❌ Main branch'da to'g'ridan-to'g'ri ishlash
git checkout main
# O'zgarishlar qilish...

# ❌ Sensitive ma'lumotlarni commit qilish
echo "PASSWORD=123456" >> .env
git add .env
git commit -m "Config qo'shildi"
```

### 🔧 Foydali buyruqlar

```bash
# Stash (vaqtincha saqlash)
git stash
git stash pop
git stash list

# Reset (commit'ni bekor qilish)
git reset --soft HEAD~1    # O'zgarishlarni saqlaydi
git reset --mixed HEAD~1   # Staging area'ni tozalaydi
git reset --hard HEAD~1    # Barcha o'zgarishlarni o'chiradi

# Cherry-pick (ma'lum commit'ni olish)
git cherry-pick abc1234

# Reflog (barcha harakatlar tarixi)
git reflog
```

---

## 🔧 Git Ignore

### 📄 .gitignore fayli

```gitignore
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build outputs
dist/
build/
*.min.js
*.min.css

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Logs
logs/
*.log

# Runtime data
pids/
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# Temporary folders
tmp/
temp/
```

---

## 🧠 Xulosa jadvali

| Buyruq | Maqsadi | Misol |
|--------|---------|-------|
| `git init` | Repository yaratish | `git init` |
| `git clone` | Repository klonlash | `git clone url` |
| `git add` | Fayllarni qo'shish | `git add .` |
| `git commit` | Commit yaratish | `git commit -m "xabar"` |
| `git push` | O'zgarishlarni yuborish | `git push origin main` |
| `git pull` | O'zgarishlarni olish | `git pull origin main` |
| `git branch` | Branch bilan ishlash | `git branch yangi` |
| `git merge` | Branch'larni birlashtirish | `git merge yangi` |
| `git log` | Tarixni ko'rish | `git log --oneline` |
| `git status` | Holatni ko'rish | `git status` |

---

## 📌 Real hayotda qayerda ishlatiladi?

* **Dasturlash loyihalari** - Kod versiya boshqaruvi
* **Hamkorlik** - Jamoa bilan ishlash
* **Code Review** - Kod tekshirish
* **CI/CD** - Avtomatik deployment
* **Open Source** - Ochiq manba loyihalar
* **Portfolio** - Ish namunalarini ko'rsatish

---

## 🚀 Keyingi qadamlar

1. **Amaliyot** - Turli loyihalarda Git ishlatish
2. **Tadqiq qilish** - Git hooks va automation
3. **O'zlashtirish** - Git workflow'lar
4. **Qo'llash** - CI/CD va deployment

---

## 📚 Qo'shimcha manbalar

* **Git rasmiy hujjati** - git-scm.com
* **GitHub rasmiy hujjati** - docs.github.com
* **GitHub Learning Lab** - lab.github.com
* **Git Cheat Sheet** - git-scm.com/doc

---

</details>