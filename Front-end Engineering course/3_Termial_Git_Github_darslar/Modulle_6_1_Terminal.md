# Command Line Darslari

<details>
<summary>Part 1 — Command Line Fundamentals</summary>

## 0) Kirish: Terminal nima va nima uchun kerak?

Terminal (yoki Command Line) — bu kompyuter bilan **matn orqali** ishlash oynasi. Front-end muhandisi sifatida siz Terminaldan:
- loyihaga kirish, fayl/papkalarni boshqarish,
- git buyruqlari,
- npm paketlar,
- server ishga tushirish

kabi ishlar uchun ko‘p foydalanasiz.

## 1) Muhim tushunchalar (fundamentals)

- **Papkа (directory/folder)**: ichida fayllar va boshqa papkalar bo‘ladi.
- **Fayl (file)**: masalan `index.html`, `style.css`, `app.js`.
- **Path (yo‘l)**: fayl/papkaga boradigan manzil.  
  - **Absolute path**: ildizdan boshlab (masalan `/Users/ali/projects`).
  - **Relative path**: hozirgi joydan boshlab (masalan `src/components`).
- **Working directory**: hozir turgan papkangiz (Terminal “qayerdasiz?” degan savolga javob).

## 2) Buyruq yozish qoidalari

- Buyruq yozib bo‘lgach **Enter** bosing.
- Buyruq va argument orasida **bo‘sh joy** bo‘ladi:
  - `cd Projects`
- Papka/fayl nomida probel bo‘lsa, qo‘shtirnoq ishlating:
  - `cd "Front-end Engineering course"`

## 3) Terminal prompt nima? (qisqacha)

Terminalda siz har doim shunga o‘xshash yozuvni ko‘rasiz:

```bash
ali@MacBook-Pro ~ $
```

- Bu qator **prompt** deyiladi.
- `~` odatda **home** papkani bildiradi.
- `$` oddiy foydalanuvchi (user) ekaningizni bildiradi. Ba’zi tizimlarda `#` bo‘lsa, bu admin/root bo‘lishi mumkin.

## 4) Eng ko‘p uchraydigan xatolar (va sabablari)

- **`command not found`**
  - buyruq nomini xato yozgansiz yoki u tizimda yo‘q.
- **`No such file or directory`**
  - siz yozgan path yoki fayl/papka nomi topilmadi.
- **Katta-kichik harf muhim (Linux/macOS)**
  - `Desktop` va `desktop` — ikki xil nom.

## 5) Terminalni tozalash

Ba’zan ekranni tozalab olish qulay:

- Linux/macOS: `clear` yoki `Ctrl + L`
- Windows (Command Prompt): `cls`

---

# 1. `pwd` — qayerda turganingizni ko‘rsatadi

## Vazifasi
`pwd` (print working directory) — hozirgi papkangizning **to‘liq manzilini** chiqaradi.

## Misol (Linux/macOS)
```bash
pwd
```

Natija misoli:
```bash
/Users/ali/Desktop
```

## Windows (Command Prompt) eslatma
- O‘xshash: `cd` (argumentlarsiz)
```bat
cd
```

---

# 2. `whoami` — hozirgi foydalanuvchi kimligini ko‘rsatadi

## Vazifasi
`whoami` — tizimga kirgan user nomini chiqaradi.

## Misol (Linux/macOS)
```bash
whoami
```

Natija misoli:
```bash
ali
```

## Windows (Command Prompt) eslatma
```bat
whoami
```
(Command Prompt’da ko‘pincha ishlaydi.)

---

# 3. `cd` — papkalar orasida yurish (change directory)

## Vazifasi
`cd` — papkaga kirish yoki yuqoriga qaytish uchun ishlatiladi.

## Misollar (Linux/macOS)

### 3.1. Papkaga kirish
```bash
cd Desktop
```

### 3.2. Yuqori papkaga chiqish: `..`
`..` — “parent directory”, ya’ni bitta yuqoridagi papka.

```bash
cd ..
```

### 3.3. Hozirgi papka: `.`
`.` — “current directory”, ya’ni hozirgi papka. Ko‘pincha buyruqlarda yo‘l sifatida ishlatiladi.

```bash
cd .
```
Amalda joy o‘zgarmaydi (o‘sha papkada qoladi), lekin tushuncha muhim.

### 3.4. Home papkaga qaytish (eng ko‘p ishlatiladi)
```bash
cd
```
yoki
```bash
cd ~
```

### 3.5. Ildiz (root) papkaga borish: `/`
`/` — Linux/macOS’da eng yuqori (root) daraja.

```bash
cd /
```

### 3.6. Absolute va relative path (amaliy misol)

Absolute path (to‘liq manzil) misoli:

```bash
cd ~/Desktop
```

Relative path (hozir turgan joyingizdan boshlab) misoli:

```bash
ls ./terminal-practice
```

## Windows (Command Prompt) eslatma
- Home’ga o‘xshash: `cd %USERPROFILE%`
- Disklar: `C:` yoki `D:` deb diskni tanlab, keyin `cd` qiling.

---

# 4. `ls` — papkadagi fayl/papkalarni ko‘rish

## Vazifasi
`ls` — hozirgi (yoki berilgan) papka ichidagi fayl va papkalarni ko‘rsatadi.

## Misol (Linux/macOS)
```bash
ls
```

## Foydali ko‘rinishlar (fundamental darajada)
- `ls -l` — batafsil ro‘yxat (ruxsatlar, o‘lcham, sana)
- `ls -a` — yashirin fayllarni ham ko‘rsatadi (masalan `.git`)

```bash
ls -l
ls -a
```

## Windows (Command Prompt) eslatma
- O‘xshash: `dir`
```bat
dir
```

---

# 5. `touch` — fayl yaratish (bo‘sh fayl)

## Vazifasi
`touch` fayl yo‘q bo‘lsa yaratadi, bo‘lsa “modified time”ni yangilaydi.

## Misol (Linux/macOS)
```bash
touch index.html
touch app.js style.css
```

## Windows (Command Prompt) eslatma
Command Prompt’da `touch` standart emas. O‘rniga:
- bo‘sh fayl yaratish:
```bat
type nul > index.html
```

---

# 6. `mkdir` — papka yaratish

## Vazifasi
`mkdir` yangi papka yaratadi.

## Misol (Linux/macOS)
```bash
mkdir projects
```

Ichma-ich papkalar kerak bo‘lsa:
```bash
mkdir -p src/components
```

## Windows (Command Prompt) eslatma
```bat
mkdir projects
```
yoki qisqasi:
```bat
md projects
```

---

# 7. `rm` — faylni o‘chirish (ehtiyot bo‘ling)

## Vazifasi
`rm` fayl(lar)ni o‘chiradi.

## Juda muhim ogohlantirish
`rm` odatda **Trash/Recycle Bin**ga tashlamaydi, **darhol o‘chiradi**. Noto‘g‘ri ishlatsangiz ma’lumot yo‘qoladi.

Shuningdek, fundamentals bosqichida **papkani `rm` bilan o‘chirishga urinmang** (buni keyinroq alohida o‘rganamiz). Hozircha `rm`ni asosan fayllar uchun ishlating.

## Misol (Linux/macOS)
```bash
rm notes.txt
rm app.js style.css
```

Agar tizim tasdiq so‘ramasa ham o‘chirishi mumkin. Ehtiyot bo‘lish uchun:
```bash
rm -i notes.txt
```
(`-i` — o‘chirishdan oldin tasdiq so‘raydi.)

## Windows (Command Prompt) eslatma
- Fayl o‘chirish: `del`
```bat
del notes.txt
```

---

# 8. `rmdir` — bo‘sh papkani o‘chirish

## Vazifasi
`rmdir` faqat **ichida hech narsa yo‘q** (empty) papkani o‘chiradi.

## Misol (Linux/macOS)
```bash
rmdir empty-folder
```

Agar papka bo‘sh bo‘lmasa, error beradi. (Fundamentals bosqichida shu yetarli.)

## Windows (Command Prompt) eslatma
```bat
rmdir empty-folder
```
yoki:
```bat
rd empty-folder
```

---

# 9. `echo` — matn chiqarish (va faylga yozish)

## Vazifasi
`echo` terminalga matn chiqaradi.

## 9.1. Oddiy chiqarish
```bash
echo Salom
echo "Bugun terminal o‘rganamiz"
```

## 9.2. `>` va `>>` bilan ishlatish (preview)
`echo` ko‘pincha `>` yoki `>>` bilan birga ishlatiladi:
- `>` — faylga yozadi (bor bo‘lsa **ustidan yozib yuboradi**)
- `>>` — faylga **qo‘shib yozadi** (append)

Misol:
```bash
echo "Hello" > file.txt
echo "World" >> file.txt
```

## Windows (Command Prompt) eslatma
`echo`, `>` va `>>` ishlaydi:
```bat
echo Hello > file.txt
echo World >> file.txt
```

---

# 10. `cat` — fayl ichini ko‘rish

## Vazifasi
`cat` fayl kontentini terminalda chiqaradi.

## Misol (Linux/macOS)
```bash
cat file.txt
```

Natija misoli:
```text
Hello
World
```

Bir nechta faylni ketma-ket ko‘rish:
```bash
cat a.txt b.txt
```

## Windows (Command Prompt) eslatma
- O‘xshash: `type`
```bat
type file.txt
```

---

# 11. Redirecting & Appending: `>` va `>>`

Bu Terminal fundamentals’ning eng muhim mavzularidan biri: buyruq natijasini faylga yo‘naltirish.

## 11.1. `>` — redirect (ustidan yozadi)
`>` — output’ni ekranga emas, faylga yozadi. Fayl bor bo‘lsa, ichini **tozalab**, qaytadan yozadi.

```bash
echo "Line 1" > notes.txt
```

Tekshirish:
```bash
cat notes.txt
```

## 11.2. `>>` — append (oxiriga qo‘shadi)
`>>` — fayl oxiriga yangi kontent qo‘shadi, eski kontent saqlanadi.

```bash
echo "Line 2" >> notes.txt
cat notes.txt
```

## 11.3. Kichik mashq (mustaqil)
1) `mkdir terminal-practice`  
2) `cd terminal-practice`  
3) `touch about.txt`  
4) `echo "Mening ismim ..." > about.txt`  
5) `echo "Men Front-end o‘rganayapman." >> about.txt`  
6) `cat about.txt`  
7) `pwd` va qayerda turganingizni tekshiring

---

## Qisqa cheat-sheet (Linux/macOS)
- `pwd` — qayerdaman?
- `whoami` — kimman?
- `cd <folder>` — papkaga kirish
- `cd ..` — yuqoriga
- `cd /` — root
- `ls` — ro‘yxat
- `touch file` — fayl yaratish
- `mkdir folder` — papka yaratish
- `rm file` — fayl o‘chirish (**ehtiyot**)
- `rmdir folder` — bo‘sh papkani o‘chirish
- `echo "text"` — matn chiqarish
- `cat file` — fayl ichini ko‘rish
- `>` / `>>` — faylga yozish / qo‘shib yozish
- `clear` — terminalni tozalash

---
</details>


<details>
<summary>Part 2 — Command Line Power Tools</summary>

## 1) Linux vs Shell vs CLI (oddiy tushuntirish)

- **CLI (Command Line Interface)** — bu kompyuterni buyruqlar orqali boshqarish usuli (Terminal oynasi orqali).
- **Shell** — siz yozgan buyruqlarni o‘qib, tizimga “tarjima” qiladigan dastur. Eng ko‘p uchraydiganlari:
  - `bash`, `zsh` (macOS’da ko‘p ishlatiladi), `sh`.
- **Linux** — operatsion tizim oilasi (Ubuntu, Debian, Fedora va hokazo). Linux’ning o‘zida ham turli shell’lar bo‘lishi mumkin.

Qisqacha:

- Linux — tizim.
- Shell — buyruqlarni bajaruvchi dastur.
- CLI — buyruqlar orqali ishlash usuli.

## 2) Aside: Options (flag) nima?

Ko‘p buyruqlarda **option/flag** bo‘ladi — bu buyruqning ishlash uslubini o‘zgartiradi.

Misollar:

```bash
ls -a
rm -i file.txt
grep -n "CEO" team.txt
```

- `-a`, `-i`, `-n` — bular option’lar.
- Ba’zan option’lar bir nechta bo‘lishi mumkin: `grep -n -r "text" .`

## 3) `find` — fayl/papkani qidirish

### Sintaksis

```bash
find [path] [option] [expression]
```

### Eng ko‘p ishlatiladigan misollar

#### 3.1. Nomi bo‘yicha qidirish: `-name`

```bash
find . -name 'forest*'
```

Bu buyruq hozirgi papkadan (`.`) boshlab nomi `forest` bilan boshlanadigan hamma narsani topadi.

#### 3.2. Katta-kichik harfni e’tiborsiz: `-iname`

```bash
find . -iname 'forest*'
```

#### 3.3. Faqat fayl yoki faqat papka: `-type`

- **Faqat fayl**:

```bash
find . -type f -iname 'forest*'
```

- **Faqat papka**:

```bash
find . -type d -iname 'forest*'
```

#### 3.4. Yuqori papkadan qidirish

```bash
find .. -type f -iname 'large*'
```

Bu yerda `..` — parent papka.

### Windows (Command Prompt) eslatma
Command Prompt’da `find` bu darajada ishlamaydi (u boshqa ma’noda ishlatiladi). Windows’da bunday qidiruv uchun ko‘proq **PowerShell** ishlatiladi.

## 4) Path: relative vs absolute, `.`, `..`, `~`, `/`

- **`.`** — hozirgi papka.
- **`..`** — bitta yuqori (parent) papka.
- **`~`** — home papka (Linux/macOS).
- **`/`** — root (Linux/macOS’dagi eng yuqori daraja).

### Qisqa misollar

```bash
pwd
cd ~
cd ..
ls .
cd /
```

## 5) Aside: Process’ni to‘xtatish — `Ctrl + C`

Ba’zi buyruqlar uzoq vaqt ishlashi yoki “osilib” qolishi mumkin. Shunda:

- **`Ctrl + C`** — hozir ketayotgan jarayonni to‘xtatadi.

Bu **bekor qilish** (cancel/interrupt) kabi ishlaydi.

## 6) Rename, move, copy: `mv` va `cp`

### Sintaksis

```bash
mv [old_name] [new_name]
mv [name] [new_location]
cp [original_name] [copy_name]
cp -r [folder] [copy_folder]
```

### 6.1. `mv` — rename (nomini o‘zgartirish)

```bash
mv oldFile.txt newFile.txt
```

### 6.2. `mv` — faylni boshqa joyga ko‘chirish

```bash
mv capitals.txt geography_game/cities
```

Bu yerda `capitals.txt` fayli `geography_game/cities` ichiga ko‘chadi.

### 6.3. `cp` — nusxa ko‘chirish

```bash
cp team.txt copy_team.txt
```

### 6.4. Papkani nusxalash: `cp -r`

```bash
cp -r cities cities_backup
```

### Windows (Command Prompt) eslatma
- Ko‘chirish: `move`
- Nusxa: `copy`
- Papka nusxasi: `xcopy` yoki `robocopy` (bu keyinroq chuqurroq mavzu)

## 7) `grep` — matn ichidan qidirish

### Sintaksis

```bash
grep [pattern] [file(s)]
grep [option] [pattern] [file(s)]
grep -r [pattern] [directory]
```

### Misollar

#### 7.1. Oddiy qidirish

```bash
grep 'CEO' team.txt
```

#### 7.2. Option bilan: line raqamini ko‘rsatish `-n`

```bash
grep -n ',' team*
```

Bu `team` bilan boshlanadigan fayllarda vergul (`,`) bor joylarni, satr raqami bilan chiqaradi.

#### 7.3. Ko‘p ishlatiladigan option’lar

- `-n` — satr raqamini ko‘rsatadi
- `-r` — papka ichidan rekursiv qidiradi
- `-i` — katta-kichik harfni e’tiborsiz qidiradi
- `-I` — binary fayllarni e’tiborsiz qoldiradi (matn bo‘lmagan fayllarni “skip” qiladi)

#### 7.4. Papka ichidan qidirish: `-r`

```bash
grep -r ',' .
```

### Windows (Command Prompt) eslatma
Command Prompt’da o‘xshash vosita: `findstr`.

## 8) `sed` — matnni almashtirish (replace)

`sed` ko‘pincha fayl kontentini o‘zgartirmasdan turib, **chiqarilayotgan natijada** almashtirish qiladi.

### Sintaksis

```bash
sed 's/pattern/replacement/' [filename]
```

Option qo‘shiladigan ko‘rinishi:

```bash
sed 's/pattern/replacement/[options]' [file]
```

### Misollar

#### 8.1. Vergulni ikki nuqtaga almashtirish

```bash
sed 's/,/:/' team*
```

Bu har bir satrda faqat **birinchi uchragan** vergulni almashtiradi.

#### 8.2. Option bilan (eng mashhuri): `g` — hammasini almashtirish

```bash
sed 's/a/z/g' team*
```

Option’lar bilan yozilishi misoli:

```bash
sed 's/a/z/gI' team*
```

Eslatma: option’lar mavzusini keyinroq kengaytiramiz. Hozircha `g` — satrdagi barcha mos keladigan joylarni almashtiradi, deb eslab qolish yetarli. Ba’zi `sed` versiyalarida `I` flag’i case-insensitive (katta-kichik harfni e’tiborsiz) almashtirish uchun ishlaydi.

## 9) `wc` — counts (qator/so‘z/bayt)

### Sintaksis

```bash
wc [filename]
wc [option] [filename]
```

```bash
wc team.txt
```

Ko‘p ishlatiladigan option’lar:

- `wc -l` — qatorlar soni
- `wc -w` — so‘zlar soni
- `wc -c` — baytlar soni
- `wc -m` — belgilar (character) soni

## 10) `sort` — tartiblash

### Sintaksis

```bash
sort [filename]
sort [option] [filename]
```

```bash
sort team.txt
```

Option bilan:

- `-n` — raqam sifatida tartiblash

Ba’zi muhitlarda:

- `-z` — satr ajratgichini `\0` (null) deb qabul qiladi (odatda maxsus holatlar uchun)

```bash
sort -n numbers.txt
```

## 11) `uniq` — takrorlarni olib tashlash

### Sintaksis

```bash
uniq [filename]
```

`uniq` faqat **yonma-yon** kelgan takrorlarni olib tashlaydi. Shu sababli ko‘pincha `sort` bilan birga ishlatiladi.

```bash
uniq team.txt
```

## 12) Pipe `|` — buyruqlarni ulash

Pipe (`|`) birinchi buyruqning output’ini ikkinchi buyruqqa input qilib beradi.

### Sintaksis

```bash
[cmd1] | [cmd2]
```

### Misollar

#### 12.1. `sort` + `uniq`

```bash
sort team.txt | uniq
```

#### 12.2. Natijani faylga yozish

```bash
sort team.txt | uniq > sorted_team.txt
```

Bu yerda:

- `|` — buyruqlarni ulaydi
- `>` — yakuniy natijani faylga yozadi

---

## Kichik mashq (mustaqil)

1) `mkdir power-tools && cd power-tools`
2) `echo "CEO,Ali" > team.txt`
3) `echo "CTO,Vali" >> team.txt`
4) `echo "CEO,Ali" >> team.txt`
5) `cat team.txt`
6) `grep -n 'CEO' team.txt`
7) `sort team.txt | uniq > unique_team.txt`
8) `cat unique_team.txt`

</details>


<details>
<summary>Part 1 - Uy ishi</summary>

## Maqsad

Part 1’dagi buyruqlarni (`pwd`, `whoami`, `cd`, `ls`, `touch`, `mkdir`, `rm`, `rmdir`, `echo`, `cat`, `>`, `>>`) amalda ishlatib ko‘rish.

## 1) Tayyorlov

1) Terminalni oching.
2) `pwd` bilan qayerda turganingizni tekshiring.
3) `whoami` bilan foydalanuvchi nomingizni tekshiring.

## 2) Papka tuzilmasini yarating

Quyidagi tuzilmani yarating:

- `terminal_hw/`
  - `notes/`
  - `projects/`
  - `temp/`

Ko‘rsatma:

1) Home papkaga o‘ting: `cd ~`
2) `mkdir terminal_hw`
3) `cd terminal_hw`
4) `mkdir notes projects temp`
5) `ls` bilan tekshiring.

## 3) Fayl yaratish va ichiga yozish

1) `notes` papkasiga o‘ting: `cd notes`
2) 2 ta fayl yarating:

```bash
touch about_me.txt goals.txt
```

3) `about_me.txt` ichiga 1 qator yozing (`>` ishlating):

```bash
echo "Ismim: YOUR_NAME" > about_me.txt
```

4) `about_me.txt` ga yana 2 qator qo‘shing (`>>` ishlating):

```bash
echo "Kurs: Front-end Engineering" >> about_me.txt
echo "Maqsad: Junior Front-end" >> about_me.txt
```

5) Natijani tekshiring:

```bash
cat about_me.txt
```

## 4) Navigation mashqi (`cd`, `.`, `..`)

1) `pwd` chiqishi bo‘yicha qayerda ekaningizni ayting.
2) `cd ..` bilan `terminal_hw` ga qayting.
3) `cd ./projects` bilan `projects` papkasiga kiring.
4) `cd ../temp` bilan `temp` papkasiga o‘ting.
5) `cd ~` bilan home’ga qayting.

## 5) O‘chirish mashqi (xavfsiz)

1) `cd ~/terminal_hw/temp`
2) Bo‘sh fayl yarating: `touch delete_me.txt`
3) Faylni o‘chiring (tasdiq bilan):

```bash
rm -i delete_me.txt
```

4) Bo‘sh papka yarating: `mkdir empty_one`
5) Bo‘sh papkani o‘chiring:

```bash
rmdir empty_one
```

## 6) Yakuniy tekshiruv (topshirish)

1) `ls -a` bilan `terminal_hw` ichini ko‘rsating.
2) `cat ~/terminal_hw/notes/about_me.txt` natijasining screenshot’ini oling.

</details>

<details>
<summary>Part 2 - Uy ishi</summary>

## Maqsad

Part 2’dagi “power tools” buyruqlarini (`find`, `mv`, `cp`, `grep`, `sed`, `wc`, `sort`, `uniq`, `|`, `Ctrl + C`) bir zanjir (pipeline) qilib ishlata olish.

## 1) Workspace tayyorlash

1) Home papkaga o‘ting:

```bash
cd ~
```

2) Papka yarating va ichiga kiring:

```bash
mkdir power_tools_hw
cd power_tools_hw
```

3) Quyidagi papkalarni yarating:

```bash
mkdir data backup logs
```

## 2) `mv` va `cp` amaliyoti

1) `data` ichida fayl yarating:

```bash
echo "CEO,Ali" > data/team.txt
echo "CTO,Vali" >> data/team.txt
echo "CEO,Ali" >> data/team.txt
echo "Dev,Hasan" >> data/team.txt
```

2) Faylni rename qiling:

```bash
mv data/team.txt data/team_list.txt
```

3) Faylning nusxasini oling:

```bash
cp data/team_list.txt data/team_list_copy.txt
```

4) `data` papkasini backup qiling:

```bash
cp -r data backup/data_backup
```

## 3) `grep` amaliyoti

1) `CEO` so‘zini qidiring:

```bash
grep 'CEO' data/team_list.txt
```

2) Line raqam bilan qidiring:

```bash
grep -n ',' data/team_list.txt
```

3) Rekursiv qidiruv (`data` ichidan):

```bash
grep -r 'CEO' data
```

## 4) `sed` amaliyoti

1) Vergullarni ikki nuqtaga almashtirib ko‘ring (faqat output’da):

```bash
sed 's/,/:/' data/team_list.txt
```

2) Natijani faylga yozing:

```bash
sed 's/,/:/g' data/team_list.txt > data/team_colon.txt
```

## 5) `wc`, `sort`, `uniq` va pipe `|`

1) Qatorlar sonini tekshiring:

```bash
wc -l data/team_list.txt
```

2) Takrorlarni olib tashlab, toza ro‘yxat yarating:

```bash
sort data/team_list.txt | uniq > data/team_unique.txt
```

3) Natijani tekshiring:

```bash
cat data/team_unique.txt
```

## 6) `find` amaliyoti

1) `team*` bilan boshlanadigan fayllarni toping:

```bash
find . -type f -iname 'team*'
```

2) `backup` ichidagi papkalarni toping:

```bash
find backup -type d
```

## 7) Ctrl + C mashqi

1) Quyidagi buyruqni ishga tushiring (1-2 soniya kuting):

```bash
grep -r 'CEO' .
```

2) Hozirgi jarayonni to‘xtating: **`Ctrl + C`**.

## 8) Topshirish (deliverables)

Quyidagi buyruqlar natijasining screenshot’ini yuboring:

1) `find . -type f -iname 'team*'`
2) `cat data/team_unique.txt`
3) `wc -l data/team_list.txt`


</details>