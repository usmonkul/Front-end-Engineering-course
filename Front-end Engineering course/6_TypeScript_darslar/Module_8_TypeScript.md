<details>
<summary><h2>Module 1: TypeScript bilan ishlashni boshlash</h2></summary>

## Module 1: TypeScript bilan ishlashni boshlash

### TypeScript nima va nima uchun kerak?

TypeScript - bu Microsoft tomonidan yaratilgan JavaScript ning kengaytirilgan versiyasi. TypeScript JavaScript kodiga statik tipizatsiya qo'shadi, ya'ni kod yozish paytida o'zgaruvchilar, funksiyalar va obyektlar uchun ma'lumot turlarini belgilash imkoniyatini beradi.

**TypeScript nima uchun kerak?**

1. **Xatolarni erta aniqlash**: TypeScript kodni ishga tushirishdan oldin xatolarni topadi
2. **Kod sifatini yaxshilash**: Kod yanada tushunarli va saqlash oson bo'ladi
3. **IntelliSense qo'llab-quvvatlash**: Kod yozishda IDE sizga yaxshiroq yordam beradi
4. **Refactoring osonlashadi**: Kodni qayta yozishda xavf kamayadi
5. **Katta loyihalar uchun mos**: Jamoaviy ishlashda kodni tushunish osonlashadi

### TypeScript vs JavaScript

**JavaScript:**
- Dinamik tipizatsiya (runtime da tip aniqlanadi)
- Xatolar faqat kod ishga tushganda aniqlanadi
- Kod yozish tezroq, lekin xavfli

**TypeScript:**
- Statik tipizatsiya (compile time da tip aniqlanadi)
- Xatolar kod yozish paytida aniqlanadi
- Kod yozish biroz sekinroq, lekin xavfsizroq
- JavaScript kodiga compile qilinadi

**Muhim**: TypeScript kod JavaScript kodiga aylantiriladi va barcha JavaScript kodlar TypeScript da ham ishlaydi.

### TypeScript ni o'rnatish

TypeScript ni global ravishda o'rnatish uchun quyidagi buyruqni bajaring:

```bash
npm install -g typescript
```

O'rnatilganligini tekshirish:

```bash
tsc --version
```

Agar versiya ko'rsatilsa, TypeScript muvaffaqiyatli o'rnatildi.

**Loyiha ichida o'rnatish** (tavsiya etiladi):

```bash
npm init -y
npm install --save-dev typescript
```

### Birinchi TypeScript loyihasini yaratish

1. **Yangi papka yarating**:

```bash
mkdir my-first-typescript-project
cd my-first-typescript-project
```

2. **TypeScript fayl yarating**:

`greeting.ts` nomli yangi fayl yarating va quyidagi kodni kiriting:

```typescript
function greet(name: string): string {
    return `Salom, ${name}!`;
}

const message = greet("Dunyo");
console.log(message);
```

3. **Kodni compile qiling**:

```bash
tsc greeting.ts
```

Bu `greeting.js` nomli JavaScript fayl yaratadi.

4. **JavaScript kodini ishga tushiring**:

```bash
node greeting.js
```

Natija: `Salom, Dunyo!`

### TypeScript kompilyatori (tsc) haqida

`tsc` (TypeScript Compiler) - bu TypeScript kodini JavaScript kodiga aylantiradigan asosiy vosita.

**Asosiy buyruqlar**:

```bash
# Bitta faylni compile qilish
tsc file.ts

# Barcha .ts fayllarni compile qilish
tsc

# Watch mode (o'zgarishlarni kuzatib turish)
tsc --watch

# Muayyan versiya uchun compile qilish
tsc --target ES2020 file.ts

# Faylni compile qilish va natijani ko'rsatish
tsc --listFiles file.ts
```

**Kompilyatsiya jarayoni**:
1. TypeScript fayl o'qiladi
2. Tip tekshiruvi amalga oshiriladi
3. Agar xatolar bo'lmasa, JavaScript kodi yaratiladi
4. Agar xatolar bo'lsa, ular ko'rsatiladi va JavaScript kodi yaratilmaydi

### TypeScript konfiguratsiyasi (tsconfig.json)

`tsconfig.json` - bu TypeScript loyihasi uchun konfiguratsiya fayli. U kompilyatorga qanday ishlashni aytadi.

**tsconfig.json yaratish**:

```bash
tsc --init
```

Bu buyruq loyihangizda `tsconfig.json` faylini yaratadi.

**Asosiy konfiguratsiya parametrlari**:

```json
{
  "compilerOptions": {
    // JavaScript versiyasi
    "target": "ES2020",
    
    // Modul tizimi
    "module": "commonjs",
    
    // Fayllarni qayerdan topish
    "rootDir": "./src",
    
    // Natijaviy fayllarni qayerga joylashtirish
    "outDir": "./dist",
    
    // Qat'iy tipizatsiya
    "strict": true,
    
    // Modullarni qanday topish
    "moduleResolution": "node",
    
    // ES6 modullarini qo'llab-quvvatlash
    "esModuleInterop": true,
    
    // Skip lib check (tezroq compile qilish)
    "skipLibCheck": true,
    
    // Force consistent casing in file names
    "forceConsistentCasingInFileNames": true
  },
  // Qaysi fayllarni include qilish
  "include": ["src/**/*"],
  
  // Qaysi fayllarni exclude qilish
  "exclude": ["node_modules", "dist"]
}
```

**Muhim parametrlar tushuntirishi**:

- **target**: Qaysi JavaScript versiyasiga compile qilish (ES5, ES6, ES2020, va hokazo)
- **module**: Qanday modul tizimidan foydalanish (commonjs, ES6, va hokazo)
- **strict**: Qat'iy tipizatsiya rejimini yoqish (tavsiya etiladi)
- **rootDir**: Manba kodlar joylashgan papka
- **outDir**: Natijaviy JavaScript fayllar joylashgan papka

**tsconfig.json dan foydalanish**:

Konfiguratsiya fayli mavjud bo'lganda, shunchaki quyidagi buyruqni bajaring:

```bash
tsc
```

Barcha TypeScript fayllar avtomatik ravishda compile qilinadi.

### Amaliy misol

Keling, to'liq loyiha yaratamiz:

1. **Loyiha strukturasini yarating**:

```
my-project/
├── src/
│   └── index.ts
├── dist/
├── tsconfig.json
└── package.json
```

2. **tsconfig.json**:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

3. **src/index.ts**:

```typescript
// Birinchi TypeScript dasturimiz
function calculateSum(a: number, b: number): number {
    return a + b;
}

const result = calculateSum(5, 3);
console.log(`Natija: ${result}`);
```

4. **Compile qilish**:

```bash
tsc
```

5. **Ishga tushirish**:

```bash
node dist/index.js
```

### Xulosa

Bu modulda siz:
- TypeScript nima ekanligini va nima uchun kerakligini o'rgandingiz
- TypeScript va JavaScript farqini tushundingiz
- TypeScript ni qanday o'rnatishni bilasiz
- Birinchi TypeScript loyihangizni yaratdingiz
- TypeScript kompilyatori (tsc) bilan tanishdingiz
- tsconfig.json fayli bilan ishlashni o'rgandingiz

</details>

<hr>

<details>
<summary><h2>Module 2: Asosiy ma'lumot turlari</h2></summary>

## Module 2: Asosiy ma'lumot turlari

### Primitive turlar (string, number, boolean)

TypeScript da eng asosiy ma'lumot turlari - bu primitive turlar. Ular JavaScript dagi asosiy turlar bilan bir xil.

#### String (Matn)

String - bu matnli ma'lumotlar uchun ishlatiladi.

```typescript
let firstName: string = "Ali";
let lastName: string = 'Valiyev';
let fullName: string = `Salom, ${firstName} ${lastName}!`; // Template literal

console.log(fullName); // Salom, Ali Valiyev!
```

**String metodlari**:
```typescript
let text: string = "TypeScript";

text.length;        // 10
text.toUpperCase(); // "TYPESCRIPT"
text.toLowerCase(); // "typescript"
text.charAt(0);     // "T"
```

#### Number (Raqam)

Number - bu raqamli ma'lumotlar uchun ishlatiladi. Butun sonlar va o'nlik sonlar ham number turiga kiradi.

```typescript
let age: number = 25;
let price: number = 99.99;
let temperature: number = -10;
let binary: number = 0b1010; // Binary: 10
let hex: number = 0xff;      // Hexadecimal: 255
let octal: number = 0o744;   // Octal: 484

console.log(age + price); // 124.99
```

**Number operatsiyalari**:
```typescript
let a: number = 10;
let b: number = 3;

a + b;  // 13
a - b;  // 7
a * b;  // 30
a / b;  // 3.333...
a % b;  // 1 (qoldiq)
```

#### Boolean (Mantiqiy)

Boolean - bu `true` yoki `false` qiymatlarini qabul qiladi.

```typescript
let isActive: boolean = true;
let isCompleted: boolean = false;
let hasPermission: boolean = true;

console.log(isActive && hasPermission); // true
console.log(isActive || isCompleted);   // true
console.log(!isCompleted);              // true
```

**Boolean operatsiyalari**:
```typescript
let x: boolean = true;
let y: boolean = false;

x && y;  // false (AND)
x || y;  // true  (OR)
!x;      // false (NOT)
```

### Type annotations (Tip annotatsiyalari)

Type annotation - bu o'zgaruvchi yoki funksiya uchun tipni aniq belgilash.

**O'zgaruvchilar uchun**:
```typescript
let name: string = "Ali";
let age: number = 25;
let isStudent: boolean = true;
```

**Funksiyalar uchun**:
```typescript
function greet(name: string): string {
    return `Salom, ${name}!`;
}

function add(a: number, b: number): number {
    return a + b;
}

function isAdult(age: number): boolean {
    return age >= 18;
}
```

**Parametrlar va return tiplari**:
```typescript
// Parametrlar uchun tip
function multiply(x: number, y: number): number {
    return x * y;
}

// Return tipi void (hech narsa qaytarmaydi)
function logMessage(message: string): void {
    console.log(message);
}

// Return tipi yo'q (undefined qaytaradi)
function doNothing(): void {
    // hech narsa qaytarmaydi
}
```

### Type inference (Tip aniqlash)

TypeScript avtomatik ravishda tipni aniqlay olishi mumkin. Bu xususiyat **type inference** deb ataladi.

```typescript
// TypeScript avtomatik ravishda tipni aniqlaydi
let name = "Ali";        // string
let age = 25;            // number
let isActive = true;     // boolean

// Tipni aniq belgilash shart emas
let city = "Toshkent";   // TypeScript buni string deb biladi
```

**Qachon tipni aniq belgilash kerak?**

1. **O'zgaruvchi dastlabki qiymatga ega bo'lmaganda**:
```typescript
let value: number; // Tipni aniq belgilash kerak
value = 10;
```

2. **Funksiya parametrlari uchun** (tavsiya etiladi):
```typescript
function calculate(x: number, y: number): number {
    return x + y;
}
```

3. **Aniqlik uchun**:
```typescript
// Aniq tip belgilash kodni tushunarliroq qiladi
let count: number = 0;
```

### Arrays (Massivlar)

Array - bu bir nechta elementlarni saqlash uchun ishlatiladi.

**Array yaratish**:
```typescript
// Usul 1: Tip[] sintaksisi
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Ali", "Vali", "Hasan"];

// Usul 2: Array<Type> sintaksisi
let ages: Array<number> = [20, 25, 30];
let cities: Array<string> = ["Toshkent", "Samarqand", "Buxoro"];

// Bo'sh array
let emptyArray: number[] = [];
```

**Array metodlari**:
```typescript
let fruits: string[] = ["olma", "banan", "anor"];

fruits.length;              // 3
fruits.push("uzum");        // ["olma", "banan", "anor", "uzum"]
fruits.pop();               // "uzum" ni olib tashlaydi
fruits[0];                  // "olma"
fruits.indexOf("banan");    // 1
fruits.includes("olma");    // true
```

**Array bilan ishlash**:
```typescript
let numbers: number[] = [1, 2, 3, 4, 5];

// Har bir elementni ko'paytirish
let doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// Faqat juft sonlarni olish
let evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// Barcha sonlarni yig'indisi
let sum = numbers.reduce((a, b) => a + b, 0); // 15
```

**Ko'p o'lchamli massivlar**:
```typescript
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][1]); // 2
```

### Tuples (Tuplar)

Tuple - bu aniq uzunlikdagi va har bir pozitsiyada aniq tipga ega bo'lgan massiv.

```typescript
// Tuple: birinchi element string, ikkinchi element number
let person: [string, number] = ["Ali", 25];

console.log(person[0]); // "Ali"
console.log(person[1]); // 25
```

**Tuple misollari**:
```typescript
// Koordinatalar
let coordinates: [number, number] = [40.7128, -74.0060];

// User ma'lumotlari
let user: [string, number, boolean] = ["Ali", 25, true];

// RGB ranglar
let color: [number, number, number] = [255, 0, 0];
```

**Tuple metodlari**:
```typescript
let tuple: [string, number] = ["TypeScript", 2024];

tuple[0] = "JavaScript"; // ✅ To'g'ri
tuple[1] = 2023;        // ✅ To'g'ri
// tuple[2] = "extra";  // ❌ Xato: tuple faqat 2 elementga ega
```

**Optional tuple elementlar**:
```typescript
// Uchinchi element ixtiyoriy
let optionalTuple: [string, number, boolean?] = ["Ali", 25];
let fullTuple: [string, number, boolean?] = ["Ali", 25, true];
```

**Rest elementlar bilan tuple**:
```typescript
// Birinchi 2 ta element aniq, qolganlari string
let tupleWithRest: [number, string, ...string[]] = [1, "bir", "ikki", "uch"];
```

### Enums (Enumlar)

Enum - bu nomlangan konstantalar to'plami.

**Numeric enum**:
```typescript
enum Direction {
    Up,      // 0
    Down,    // 1
    Left,    // 2
    Right    // 3
}

let direction: Direction = Direction.Up;
console.log(direction); // 0
console.log(Direction[0]); // "Up"
```

**Aniq qiymatlar bilan enum**:
```typescript
enum Status {
    Pending = 1,
    Approved = 2,
    Rejected = 3
}

let status: Status = Status.Approved;
console.log(status); // 2
```

**String enum**:
```typescript
enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue"
}

let color: Color = Color.Red;
console.log(color); // "red"
```

**Heterogeneous enum** (aralash):
```typescript
enum Mixed {
    No = 0,
    Yes = "yes"
}
```

**Enum dan foydalanish**:
```typescript
enum UserRole {
    Admin = "admin",
    User = "user",
    Guest = "guest"
}

function checkAccess(role: UserRole): boolean {
    return role === UserRole.Admin;
}

checkAccess(UserRole.Admin); // true
checkAccess(UserRole.User);  // false
```

### Any va unknown turlar

#### Any

`any` - bu har qanday tipga ruxsat beradi. TypeScript tip tekshiruvini o'chirib qo'yadi.

```typescript
let value: any = 42;
value = "salom";        // ✅ To'g'ri
value = true;            // ✅ To'g'ri
value = [1, 2, 3];       // ✅ To'g'ri
value.foo.bar.baz();     // ✅ Xato bo'lishi mumkin, lekin TypeScript tekshirmaydi
```

**Any dan foydalanish** (tavsiya etilmaydi):
```typescript
// Any dan foydalanish xavfli
let data: any = getDataFromAPI();
data.someProperty; // TypeScript xatoni ko'rsatmaydi, lekin runtime da xato bo'lishi mumkin
```

**Qachon any ishlatish kerak?**
- Eski JavaScript kodini TypeScript ga o'tkazishda
- Tashqi kutubxonalar bilan ishlashda
- Tipni aniqlash qiyin bo'lganda (lekin unknown yaxshiroq)

#### Unknown

`unknown` - bu `any` ga o'xshash, lekin xavfsizroq. `unknown` tipidagi o'zgaruvchini ishlatishdan oldin tipni tekshirish kerak.

```typescript
let value: unknown = 42;

// value.toFixed(); // ❌ Xato: unknown tipida metod chaqirib bo'lmaydi

// Tipni tekshirishdan keyin ishlatish mumkin
if (typeof value === "number") {
    value.toFixed(2); // ✅ To'g'ri
}

if (typeof value === "string") {
    value.toUpperCase(); // ✅ To'g'ri
}
```

**Unknown vs Any**:
```typescript
// Any - xavfsiz emas
let anyValue: any = "salom";
anyValue.foo.bar(); // ❌ Runtime da xato, lekin TypeScript tekshirmaydi

// Unknown - xavfsiz
let unknownValue: unknown = "salom";
// unknownValue.foo.bar(); // ❌ TypeScript xatoni ko'rsatadi
if (typeof unknownValue === "string") {
    unknownValue.toUpperCase(); // ✅ To'g'ri
}
```

**Unknown dan foydalanish**:
```typescript
function processValue(value: unknown): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    if (typeof value === "number") {
        return value.toString();
    }
    return "Noma'lum tip";
}

processValue("salom");  // "SALOM"
processValue(42);       // "42"
processValue(true);     // "Noma'lum tip"
```

### Null va undefined

#### Null

`null` - bu qasddan bo'sh qiymatni bildiradi.

```typescript
let value: null = null;
let name: string | null = null; // String yoki null

name = "Ali";  // ✅ To'g'ri
name = null;   // ✅ To'g'ri
```

#### Undefined

`undefined` - bu o'zgaruvchi qiymatga ega emasligini bildiradi.

```typescript
let value: undefined = undefined;
let age: number | undefined; // Number yoki undefined

age = 25;        // ✅ To'g'ri
age = undefined; // ✅ To'g'ri
```

**Null va undefined farqi**:
```typescript
let a: null = null;           // Qasddan bo'sh
let b: undefined = undefined; // Qiymat berilmagan

// Null check
if (a === null) {
    console.log("a null");
}

// Undefined check
if (b === undefined) {
    console.log("b undefined");
}
```

**Nullish coalescing operator (??)**:
```typescript
let value: string | null | undefined = null;
let result = value ?? "default"; // Agar value null yoki undefined bo'lsa, "default" ishlatiladi

console.log(result); // "default"

value = "qiymat";
result = value ?? "default";
console.log(result); // "qiymat"
```

**Optional chaining (?.)**:
```typescript
interface User {
    name: string;
    address?: {
        city: string;
    };
}

let user: User | null = null;
let city = user?.address?.city; // undefined (xato bermaydi)

user = { name: "Ali", address: { city: "Toshkent" } };
city = user?.address?.city; // "Toshkent"
```

**Null va undefined bilan ishlash**:
```typescript
function greet(name: string | null | undefined): string {
    if (name === null || name === undefined) {
        return "Salom, mehmon!";
    }
    return `Salom, ${name}!`;
}

greet("Ali");     // "Salom, Ali!"
greet(null);      // "Salom, mehmon!"
greet(undefined); // "Salom, mehmon!"

// Yoki qisqa sintaksis
function greetShort(name: string | null | undefined): string {
    return `Salom, ${name ?? "mehmon"}!`;
}
```

### Amaliy misol

Keling, barcha o'rganganlarimizni birlashtiramiz:

```typescript
// Primitive turlar
let userName: string = "Ali";
let userAge: number = 25;
let isActive: boolean = true;

// Arrays
let hobbies: string[] = ["kitob o'qish", "futbol", "dasturlash"];
let scores: number[] = [95, 87, 92, 88];

// Tuple
let userInfo: [string, number, boolean] = [userName, userAge, isActive];

// Enum
enum UserStatus {
    Active = "active",
    Inactive = "inactive",
    Banned = "banned"
}

let status: UserStatus = UserStatus.Active;

// Null va undefined
let email: string | null = null;
let phone: string | undefined = undefined;

// Unknown (API dan kelgan ma'lumot)
let apiData: unknown = {
    name: "Ali",
    age: 25
};

// Tipni tekshirish
if (typeof apiData === "object" && apiData !== null) {
    const data = apiData as { name: string; age: number };
    console.log(data.name); // "Ali"
}

// Funksiya
function displayUser(
    name: string,
    age: number,
    hobbies: string[],
    status: UserStatus
): void {
    console.log(`Ism: ${name}`);
    console.log(`Yosh: ${age}`);
    console.log(`Qiziqishlar: ${hobbies.join(", ")}`);
    console.log(`Holat: ${status}`);
}

displayUser(userName, userAge, hobbies, status);
```

### Xulosa

Bu modulda siz:
- Primitive turlar (string, number, boolean) bilan tanishdingiz
- Type annotations va type inference ni o'rgandingiz
- Arrays va Tuples bilan ishlashni o'rgandingiz
- Enums dan foydalanishni bilasiz
- Any va unknown turlarining farqini tushundingiz
- Null va undefined bilan ishlashni o'rgandingiz

Keyingi modulda siz funksiyalar bilan ishlashni o'rganasiz.

</details>

<hr>

<details>
<summary><h2>Module 3: Funksiyalar</h2></summary>

## Module 3: Funksiyalar

### Function type annotations (Funksiya tip annotatsiyalari)

Funksiyalar uchun tip annotatsiyalari parametrlar va return tipini belgilashga yordam beradi.

**Asosiy sintaksis**:
```typescript
function functionName(param1: type1, param2: type2): returnType {
    // funksiya tanasi
}
```

**Misol**:
```typescript
function greet(name: string): string {
    return `Salom, ${name}!`;
}

let message = greet("Ali");
console.log(message); // "Salom, Ali!"
```

**Har xil return tiplar**:
```typescript
// String qaytaradi
function getName(): string {
    return "Ali";
}

// Number qaytaradi
function getAge(): number {
    return 25;
}

// Boolean qaytaradi
function isAdult(): boolean {
    return true;
}

// Hech narsa qaytarmaydi (void)
function logMessage(message: string): void {
    console.log(message);
}

// Undefined qaytaradi
function doNothing(): undefined {
    return undefined;
}
```

### Function parameters and return types (Funksiya parametrlari va return tiplari)

#### Parametrlar

Funksiya parametrlariga tip belgilash majburiydir (strict mode da).

```typescript
// Har bir parametr uchun tip belgilash
function add(a: number, b: number): number {
    return a + b;
}

function concatenate(str1: string, str2: string): string {
    return str1 + str2;
}

function checkAge(age: number): boolean {
    return age >= 18;
}
```

**Bir nechta parametrlar**:
```typescript
function createUser(
    name: string,
    age: number,
    email: string,
    isActive: boolean
): void {
    console.log(`Foydalanuvchi: ${name}, ${age} yosh, ${email}, Faol: ${isActive}`);
}

createUser("Ali", 25, "ali@example.com", true);
```

#### Return tiplari

Return tipi funksiyaning qanday qiymat qaytarishini belgilaydi.

**Aniq return tipi**:
```typescript
function multiply(x: number, y: number): number {
    return x * y;
}

function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}
```

**Void return tipi**:
```typescript
function printInfo(name: string, age: number): void {
    console.log(`Ism: ${name}, Yosh: ${age}`);
    // void funksiyalar return qilmaydi yoki return; yoziladi
}

function showMessage(): void {
    console.log("Xabar");
    return; // ixtiyoriy
}
```

**Never return tipi**:
```typescript
// Never - funksiya hech qachon tugamaydi
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // cheksiz tsikl
    }
}
```

**Return tipini o'tkazib yuborish**:
```typescript
// TypeScript avtomatik ravishda return tipini aniqlaydi
function subtract(a: number, b: number) {
    return a - b; // TypeScript buni number deb aniqlaydi
}
```

### Optional parameters (Ixtiyoriy parametrlar)

Ixtiyoriy parametrlar `?` belgisi bilan belgilanadi. Ular chaqirilganda berilishi shart emas.

```typescript
function greet(name: string, title?: string): string {
    if (title) {
        return `Salom, ${title} ${name}!`;
    }
    return `Salom, ${name}!`;
}

greet("Ali");              // "Salom, Ali!"
greet("Ali", "Janob");     // "Salom, Janob Ali!"
```

**Ixtiyoriy parametrlar oxirida bo'lishi kerak**:
```typescript
// ✅ To'g'ri: ixtiyoriy parametr oxirida
function createUser(name: string, age?: number): void {
    console.log(name, age);
}

// ❌ Xato: ixtiyoriy parametr majburiy parametrdan oldin
// function createUser(age?: number, name: string): void { }
```

**Bir nechta ixtiyoriy parametrlar**:
```typescript
function buildUrl(
    domain: string,
    path?: string,
    protocol?: string
): string {
    const protocolPart = protocol || "https";
    const pathPart = path || "";
    return `${protocolPart}://${domain}${pathPart}`;
}

buildUrl("example.com");                    // "https://example.com"
buildUrl("example.com", "/api");            // "https://example.com/api"
buildUrl("example.com", "/api", "http");    // "http://example.com/api"
```

**Ixtiyoriy parametrlarni tekshirish**:
```typescript
function calculateArea(width: number, height?: number): number {
    if (height === undefined) {
        // Kvadrat
        return width * width;
    }
    // To'rtburchak
    return width * height;
}

calculateArea(5);      // 25 (kvadrat)
calculateArea(5, 3);   // 15 (to'rtburchak)
```

### Default parameters (Standart parametrlar)

Standart parametrlar funksiya chaqirilganda qiymat berilmasa, avtomatik ravishda standart qiymatni oladi.

```typescript
function greet(name: string, greeting: string = "Salom"): string {
    return `${greeting}, ${name}!`;
}

greet("Ali");                    // "Salom, Ali!"
greet("Ali", "Assalomu alaykum"); // "Assalomu alaykum, Ali!"
```

**Standart parametrlar bilan ishlash**:
```typescript
function createUser(
    name: string,
    age: number = 18,
    isActive: boolean = true
): void {
    console.log(`Ism: ${name}, Yosh: ${age}, Faol: ${isActive}`);
}

createUser("Ali");                    // Ism: Ali, Yosh: 18, Faol: true
createUser("Vali", 25);               // Ism: Vali, Yosh: 25, Faol: true
createUser("Hasan", 30, false);       // Ism: Hasan, Yosh: 30, Faol: false
```

**Standart parametrlar va ixtiyoriy parametrlar**:
```typescript
function sendEmail(
    to: string,
    subject: string = "Xabar yo'q",
    body?: string
): void {
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    if (body) {
        console.log(`Body: ${body}`);
    }
}

sendEmail("ali@example.com");
sendEmail("ali@example.com", "Muhim xabar");
sendEmail("ali@example.com", "Muhim xabar", "Xabar matni");
```

**Standart parametrlar funksiya parametrlarida**:
```typescript
function multiply(a: number, b: number = 1): number {
    return a * b;
}

multiply(5);    // 5
multiply(5, 3); // 15
```

### Rest parameters (Qolgan parametrlar)

Rest parametrlar funksiyaga cheksiz miqdordagi argumentlarni uzatishga imkon beradi.

```typescript
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3);           // 6
sum(1, 2, 3, 4, 5);     // 15
sum();                   // 0
```

**Rest parametrlar har doim oxirida bo'lishi kerak**:
```typescript
// ✅ To'g'ri: rest parametr oxirida
function introduce(name: string, ...hobbies: string[]): void {
    console.log(`${name} quyidagi qiziqishlarga ega: ${hobbies.join(", ")}`);
}

introduce("Ali", "kitob o'qish", "futbol", "dasturlash");
// Ali quyidagi qiziqishlarga ega: kitob o'qish, futbol, dasturlash
```

**Rest parametrlar bilan boshqa parametrlar**:
```typescript
function createList(title: string, ...items: string[]): void {
    console.log(`Ro'yxat: ${title}`);
    items.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}

createList("Bozor ro'yxati", "non", "sut", "tuxum");
// Ro'yxat: Bozor ro'yxati
// 1. non
// 2. sut
// 3. tuxum
```

**Rest parametrlar va array**:
```typescript
function multiplyAll(multiplier: number, ...numbers: number[]): number[] {
    return numbers.map(num => num * multiplier);
}

multiplyAll(2, 1, 2, 3, 4); // [2, 4, 6, 8]
```

**Rest parametrlar va tip tekshiruvi**:
```typescript
function logAll(...args: (string | number)[]): void {
    args.forEach(arg => console.log(arg));
}

logAll("salom", 42, "dunyo", 100);
```

### Arrow functions (O'q funksiyalar)

Arrow funksiyalar - bu qisqa sintaksisli funksiyalar. Ular oddiy funksiyalar kabi tip annotatsiyalarni qo'llab-quvvatlaydi.

**Asosiy sintaksis**:
```typescript
const functionName = (param: type): returnType => {
    // funksiya tanasi
};
```

**Oddiy arrow funksiya**:
```typescript
const greet = (name: string): string => {
    return `Salom, ${name}!`;
};

console.log(greet("Ali")); // "Salom, Ali!"
```

**Qisqa sintaksis (bitta ifoda)**:
```typescript
// Return kalit so'zi va jingalak qavslar kerak emas
const add = (a: number, b: number): number => a + b;
const multiply = (x: number, y: number): number => x * y;

console.log(add(5, 3));      // 8
console.log(multiply(4, 7));  // 28
```

**Parametrlar bilan**:
```typescript
// Bitta parametr - qavslar ixtiyoriy
const square = (x: number): number => x * x;

// Bir nechta parametrlar - qavslar majburiy
const add = (a: number, b: number): number => a + b;

// Parametrlar yo'q - bo'sh qavslar
const getMessage = (): string => "Salom!";
```

**Void return tipi**:
```typescript
const logMessage = (message: string): void => {
    console.log(message);
};

logMessage("Xabar");
```

**Arrow funksiyalar va array metodlar**:
```typescript
const numbers = [1, 2, 3, 4, 5];

// Map
const doubled = numbers.map((num: number): number => num * 2);
// [2, 4, 6, 8, 10]

// Filter
const evens = numbers.filter((num: number): boolean => num % 2 === 0);
// [2, 4]

// Reduce
const sum = numbers.reduce((acc: number, num: number): number => acc + num, 0);
// 15
```

**Arrow funksiyalar va ixtiyoriy parametrlar**:
```typescript
const greet = (name: string, title?: string): string => {
    return title ? `Salom, ${title} ${name}!` : `Salom, ${name}!`;
};

greet("Ali");
greet("Ali", "Janob");
```

**Arrow funksiyalar va standart parametrlar**:
```typescript
const createUser = (name: string, age: number = 18): void => {
    console.log(`Ism: ${name}, Yosh: ${age}`);
};

createUser("Ali");
createUser("Vali", 25);
```

**Arrow funksiyalar va rest parametrlar**:
```typescript
const sum = (...numbers: number[]): number => {
    return numbers.reduce((total, num) => total + num, 0);
};

sum(1, 2, 3, 4, 5); // 15
```

### Function types (Funksiya turlari)

Funksiya turlari - bu o'zgaruvchilar yoki parametrlar uchun funksiya tipini belgilash.

**Funksiya tipini belgilash**:
```typescript
// Funksiya tipi sintaksisi
let myFunction: (param1: type1, param2: type2) => returnType;

// Misol
let add: (a: number, b: number) => number;

add = function(x: number, y: number): number {
    return x + y;
};

console.log(add(5, 3)); // 8
```

**Funksiya tipini to'g'ridan-to'g'ri belgilash**:
```typescript
let greet: (name: string) => string;

greet = (name: string): string => {
    return `Salom, ${name}!`;
};

console.log(greet("Ali")); // "Salom, Ali!"
```

**Funksiya tipini parametr sifatida**:
```typescript
function calculate(
    a: number,
    b: number,
    operation: (x: number, y: number) => number
): number {
    return operation(a, b);
}

const add = (x: number, y: number): number => x + y;
const multiply = (x: number, y: number): number => x * y;

console.log(calculate(5, 3, add));        // 8
console.log(calculate(5, 3, multiply));    // 15
```

**Funksiya tipini return sifatida**:
```typescript
function createAdder(x: number): (y: number) => number {
    return (y: number): number => {
        return x + y;
    };
}

const addFive = createAdder(5);
console.log(addFive(3)); // 8
console.log(addFive(10)); // 15
```

**Type alias bilan funksiya turlari**:
```typescript
// Funksiya tipini type alias sifatida
type MathOperation = (a: number, b: number) => number;

let add: MathOperation = (a, b) => a + b;
let subtract: MathOperation = (a, b) => a - b;
let multiply: MathOperation = (a, b) => a * b;

function performOperation(
    a: number,
    b: number,
    op: MathOperation
): number {
    return op(a, b);
}

console.log(performOperation(10, 5, add));      // 15
console.log(performOperation(10, 5, subtract)); // 5
console.log(performOperation(10, 5, multiply)); // 50
```

**Interface bilan funksiya turlari**:
```typescript
interface Calculator {
    (a: number, b: number): number;
}

const add: Calculator = (a, b) => a + b;
const multiply: Calculator = (a, b) => a * b;

console.log(add(5, 3));        // 8
console.log(multiply(5, 3));   // 15
```

**Void funksiya turlari**:
```typescript
type EventHandler = (event: string) => void;

const logEvent: EventHandler = (event: string): void => {
    console.log(`Tadbirlar: ${event}`);
};

logEvent("Foydalanuvchi kirildi");
```

**Funksiya turlari va ixtiyoriy parametrlar**:
```typescript
type GreetFunction = (name: string, title?: string) => string;

const greet: GreetFunction = (name, title) => {
    return title ? `Salom, ${title} ${name}!` : `Salom, ${name}!`;
};

greet("Ali");
greet("Ali", "Janob");
```

### Amaliy misol

Keling, barcha o'rganganlarimizni birlashtiramiz:

```typescript
// Funksiya tipini belgilash
type MathFunction = (a: number, b: number) => number;
type StringProcessor = (str: string) => string;

// Oddiy funksiyalar
function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

// Arrow funksiyalar
const multiply: MathFunction = (a, b) => a * b;
const divide: MathFunction = (a, b) => a / b;

// Ixtiyoriy va standart parametrlar
function createUser(
    name: string,
    age: number = 18,
    email?: string
): void {
    console.log(`Ism: ${name}`);
    console.log(`Yosh: ${age}`);
    if (email) {
        console.log(`Email: ${email}`);
    }
}

// Rest parametrlar
function calculateSum(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Funksiya tipini parametr sifatida
function performOperation(
    a: number,
    b: number,
    operation: MathFunction
): number {
    return operation(a, b);
}

// String processor funksiyalar
const toUpperCase: StringProcessor = (str) => str.toUpperCase();
const toLowerCase: StringProcessor = (str) => str.toLowerCase();

// Funksiyalarni chaqirish
createUser("Ali", 25, "ali@example.com");
createUser("Vali"); // standart parametrlar bilan

console.log(calculateSum(1, 2, 3, 4, 5)); // 15

console.log(performOperation(10, 5, add));      // 15
console.log(performOperation(10, 5, subtract));  // 5
console.log(performOperation(10, 5, multiply));  // 50
console.log(performOperation(10, 5, divide));   // 2

console.log(toUpperCase("salom"));  // "SALOM"
console.log(toLowerCase("SALOM"));  // "salom"
```

### Xulosa

Bu modulda siz:
- Funksiya tip annotatsiyalari bilan tanishdingiz
- Funksiya parametrlari va return tiplarini o'rgandingiz
- Ixtiyoriy parametrlar bilan ishlashni bilasiz
- Standart parametrlar bilan ishlashni o'rgandingiz
- Rest parametrlar bilan ishlashni bilasiz
- Arrow funksiyalar bilan tanishdingiz
- Funksiya turlarini o'rgandingiz

Keyingi modulda siz obyektlar va massivlar bilan ishlashni o'rganasiz.

</details>

<hr>

<details>
<summary><h2>Module 4: Obyektlar va massivlar</h2></summary>

## Module 4: Obyektlar va massivlar

### Object type annotations (Obyekt tip annotatsiyalari)

Obyektlar uchun tip annotatsiyalari obyektning qanday xususiyatlarga ega bo'lishini belgilaydi.

**Asosiy sintaksis**:
```typescript
let objectName: {
    property1: type1;
    property2: type2;
} = {
    property1: value1,
    property2: value2
};
```

**Oddiy misol**:
```typescript
let user: {
    name: string;
    age: number;
    email: string;
} = {
    name: "Ali",
    age: 25,
    email: "ali@example.com"
};
```

**Obyektni alohida belgilash**:
```typescript
let person: {
    firstName: string;
    lastName: string;
    age: number;
};

person = {
    firstName: "Ali",
    lastName: "Valiyev",
    age: 25
};
```

### Object properties (Obyekt xususiyatlari)

Obyekt xususiyatlari obyektning ichidagi ma'lumotlardir.

**Xususiyatlarni o'qish**:
```typescript
let user: {
    name: string;
    age: number;
} = {
    name: "Ali",
    age: 25
};

console.log(user.name); // "Ali"
console.log(user.age);  // 25
```

**Xususiyatlarni o'zgartirish**:
```typescript
let user: {
    name: string;
    age: number;
} = {
    name: "Ali",
    age: 25
};

user.name = "Vali";
user.age = 30;

console.log(user); // { name: "Vali", age: 30 }
```

**Turli xil tipdagi xususiyatlar**:
```typescript
let product: {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    tags: string[];
} = {
    id: 1,
    name: "Laptop",
    price: 999.99,
    inStock: true,
    tags: ["elektronika", "texnika"]
};
```

### Optional properties (Ixtiyoriy xususiyatlar)

Ixtiyoriy xususiyatlar `?` belgisi bilan belgilanadi. Ular obyektda bo'lishi shart emas.

```typescript
let user: {
    name: string;
    age: number;
    email?: string;  // Ixtiyoriy
    phone?: string; // Ixtiyoriy
} = {
    name: "Ali",
    age: 25
    // email va phone berilmaydi
};

// Email bilan
let userWithEmail: {
    name: string;
    age: number;
    email?: string;
} = {
    name: "Vali",
    age: 30,
    email: "vali@example.com"
};
```

**Ixtiyoriy xususiyatlarni tekshirish**:
```typescript
let user: {
    name: string;
    email?: string;
} = {
    name: "Ali"
};

if (user.email) {
    console.log(`Email: ${user.email}`);
} else {
    console.log("Email berilmagan");
}
```

**Bir nechta ixtiyoriy xususiyatlar**:
```typescript
let profile: {
    name: string;
    age: number;
    city?: string;
    country?: string;
    bio?: string;
} = {
    name: "Ali",
    age: 25,
    city: "Toshkent"
    // country va bio ixtiyoriy
};
```

### Readonly properties (O'zgarmas xususiyatlar)

Readonly xususiyatlar `readonly` kalit so'zi bilan belgilanadi. Ular o'zgartirilmaydi.

```typescript
let user: {
    readonly id: number;
    name: string;
    age: number;
} = {
    id: 1,
    name: "Ali",
    age: 25
};

user.name = "Vali";  // ✅ To'g'ri
user.age = 30;       // ✅ To'g'ri
// user.id = 2;      // ❌ Xato: readonly xususiyatni o'zgartirib bo'lmaydi
```

**Readonly va ixtiyoriy xususiyatlar**:
```typescript
let config: {
    readonly apiKey: string;
    readonly version: string;
    timeout?: number;
} = {
    apiKey: "abc123",
    version: "1.0.0",
    timeout: 5000
};

// config.apiKey = "xyz"; // ❌ Xato
config.timeout = 3000;    // ✅ To'g'ri
```

**Readonly xususiyatlar bilan obyektlar**:
```typescript
let point: {
    readonly x: number;
    readonly y: number;
} = {
    x: 10,
    y: 20
};

// point.x = 15; // ❌ Xato
```

### Array types (Massiv turlari)

Massivlar bir nechta elementlarni saqlash uchun ishlatiladi.

**Massiv tipini belgilash**:
```typescript
// Usul 1: Type[]
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Ali", "Vali", "Hasan"];

// Usul 2: Array<Type>
let ages: Array<number> = [20, 25, 30];
let cities: Array<string> = ["Toshkent", "Samarqand"];
```

**Turli xil tipdagi massivlar**:
```typescript
let numbers: number[] = [1, 2, 3];
let strings: string[] = ["a", "b", "c"];
let booleans: boolean[] = [true, false, true];
```

**Bo'sh massivlar**:
```typescript
let emptyNumbers: number[] = [];
let emptyStrings: string[] = [];
```

**Massiv elementlariga kirish**:
```typescript
let fruits: string[] = ["olma", "banan", "anor"];

console.log(fruits[0]); // "olma"
console.log(fruits[1]); // "banan"
console.log(fruits.length); // 3
```

### Array methods (Massiv metodlari)

Massivlar bilan ishlash uchun ko'plab metodlar mavjud.

**push() va pop()**:
```typescript
let fruits: string[] = ["olma", "banan"];

fruits.push("anor");     // Oxiriga qo'shadi
console.log(fruits);     // ["olma", "banan", "anor"]

fruits.pop();            // Oxiridan oladi
console.log(fruits);     // ["olma", "banan"]
```

**map()**:
```typescript
let numbers: number[] = [1, 2, 3, 4, 5];

let doubled: number[] = numbers.map((num: number): number => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

**filter()**:
```typescript
let numbers: number[] = [1, 2, 3, 4, 5, 6];

let evens: number[] = numbers.filter((num: number): boolean => num % 2 === 0);
console.log(evens); // [2, 4, 6]
```

**find()**:
```typescript
let users: { name: string; age: number }[] = [
    { name: "Ali", age: 25 },
    { name: "Vali", age: 30 }
];

let user = users.find((u: { name: string; age: number }): boolean => u.age > 25);
console.log(user); // { name: "Vali", age: 30 }
```

**forEach()**:
```typescript
let fruits: string[] = ["olma", "banan", "anor"];

fruits.forEach((fruit: string): void => {
    console.log(fruit);
});
// olma
// banan
// anor
```

**reduce()**:
```typescript
let numbers: number[] = [1, 2, 3, 4, 5];

let sum: number = numbers.reduce((acc: number, num: number): number => acc + num, 0);
console.log(sum); // 15
```

**includes()**:
```typescript
let fruits: string[] = ["olma", "banan", "anor"];

console.log(fruits.includes("olma"));  // true
console.log(fruits.includes("uzum"));   // false
```

**indexOf()**:
```typescript
let fruits: string[] = ["olma", "banan", "anor"];

console.log(fruits.indexOf("banan")); // 1
console.log(fruits.indexOf("uzum"));  // -1
```

### Destructuring with types (Tip bilan destrukturizatsiya)

Destructuring - bu obyekt yoki massivdan qiymatlarni olishning qisqa usuli.

**Obyekt destrukturizatsiyasi**:
```typescript
let user: {
    name: string;
    age: number;
    email: string;
} = {
    name: "Ali",
    age: 25,
    email: "ali@example.com"
};

// Destructuring
let { name, age }: { name: string; age: number } = user;

console.log(name); // "Ali"
console.log(age);  // 25
```

**Obyekt destrukturizatsiyasi va yangi nomlar**:
```typescript
let user: {
    name: string;
    age: number;
} = {
    name: "Ali",
    age: 25
};

let { name: userName, age: userAge }: { name: string; age: number } = user;

console.log(userName); // "Ali"
console.log(userAge);  // 25
```

**Obyekt destrukturizatsiyasi va standart qiymatlar**:
```typescript
let user: {
    name: string;
    age?: number;
} = {
    name: "Ali"
};

let { name, age = 18 }: { name: string; age?: number } = user;

console.log(name); // "Ali"
console.log(age);  // 18 (standart qiymat)
```

**Massiv destrukturizatsiyasi**:
```typescript
let numbers: number[] = [1, 2, 3];

let [first, second, third]: number[] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3
```

**Massiv destrukturizatsiyasi va qolgan elementlar**:
```typescript
let numbers: number[] = [1, 2, 3, 4, 5];

let [first, second, ...rest]: [number, number, ...number[]] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest);  // [3, 4, 5]
```

**Funksiya parametrlarida destrukturizatsiya**:
```typescript
function displayUser({ name, age }: { name: string; age: number }): void {
    console.log(`Ism: ${name}, Yosh: ${age}`);
}

let user: {
    name: string;
    age: number;
} = {
    name: "Ali",
    age: 25
};

displayUser(user); // Ism: Ali, Yosh: 25
```

**Funksiya parametrlarida destrukturizatsiya va standart qiymatlar**:
```typescript
function greet({ name, greeting = "Salom" }: { name: string; greeting?: string }): void {
    console.log(`${greeting}, ${name}!`);
}

greet({ name: "Ali" });                    // Salom, Ali!
greet({ name: "Vali", greeting: "Assalomu alaykum" }); // Assalomu alaykum, Vali!
```

### Amaliy misol

Keling, barcha o'rganganlarimizni birlashtiramiz:

```typescript
// Obyekt tipi
let product: {
    readonly id: number;
    name: string;
    price: number;
    inStock: boolean;
    tags?: string[];
} = {
    id: 1,
    name: "Laptop",
    price: 999.99,
    inStock: true,
    tags: ["elektronika", "texnika"]
};

// Obyekt xususiyatlarini o'zgartirish
product.name = "Gaming Laptop";
product.price = 1299.99;
// product.id = 2; // ❌ Xato: readonly

// Massivlar
let products: {
    id: number;
    name: string;
    price: number;
}[] = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Mouse", price: 29.99 },
    { id: 3, name: "Keyboard", price: 79.99 }
];

// Massiv metodlari
let expensiveProducts = products.filter((p: { id: number; name: string; price: number }): boolean => p.price > 100);
console.log(expensiveProducts);

let productNames: string[] = products.map((p: { id: number; name: string; price: number }): string => p.name);
console.log(productNames); // ["Laptop", "Mouse", "Keyboard"]

let totalPrice: number = products.reduce((sum: number, p: { id: number; name: string; price: number }): number => sum + p.price, 0);
console.log(totalPrice); // 1109.97

// Destructuring
let { name, price }: { name: string; price: number } = product;
console.log(name, price); // Gaming Laptop 1299.99

let [firstProduct, ...otherProducts] = products;
console.log(firstProduct); // { id: 1, name: "Laptop", price: 999.99 }
console.log(otherProducts.length); // 2
```

### Xulosa

Bu modulda siz:
- Obyekt tip annotatsiyalari bilan tanishdingiz
- Obyekt xususiyatlari bilan ishlashni o'rgandingiz
- Ixtiyoriy xususiyatlar bilan ishlashni bilasiz
- Readonly xususiyatlar bilan ishlashni o'rgandingiz
- Massiv turlari bilan tanishdingiz
- Massiv metodlari bilan ishlashni o'rgandingiz
- Tip bilan destrukturizatsiya bilan tanishdingiz

Keyingi modulda siz type aliases va interfaces bilan tanishasiz.

</details>

<hr>

<details>
<summary><h2>Module 5: Type Aliases va Interfaces</h2></summary>

## Module 5: Type Aliases va Interfaces

### Type aliases (Tip sinonimlari)

Type alias - bu mavjud tipga yangi nom berish. Bu kodni qayta ishlatish va tushunarli qilish uchun foydalidir.

**Asosiy sintaksis**:
```typescript
type NewTypeName = ExistingType;
```

**Oddiy misol**:
```typescript
type Name = string;
type Age = number;

let userName: Name = "Ali";
let userAge: Age = 25;
```

**Obyektlar uchun type alias**:
```typescript
type User = {
    name: string;
    age: number;
    email: string;
};

let user: User = {
    name: "Ali",
    age: 25,
    email: "ali@example.com"
};
```

**Funksiyalar uchun type alias**:
```typescript
type MathOperation = (a: number, b: number) => number;

let add: MathOperation = (a, b) => a + b;
let multiply: MathOperation = (a, b) => a * b;
```

**Union turlar bilan**:
```typescript
type ID = string | number;

let userId: ID = "abc123";
let productId: ID = 456;
```

**Massivlar uchun**:
```typescript
type StringArray = string[];

let names: StringArray = ["Ali", "Vali", "Hasan"];
```

### Interfaces introduction (Interfaces kirish)

Interface - bu obyekt strukturasini belgilash uchun ishlatiladi. U obyektning qanday xususiyatlarga ega bo'lishini tavsiflaydi.

**Asosiy sintaksis**:
```typescript
interface InterfaceName {
    property1: type1;
    property2: type2;
}
```

**Oddiy misol**:
```typescript
interface User {
    name: string;
    age: number;
    email: string;
}

let user: User = {
    name: "Ali",
    age: 25,
    email: "ali@example.com"
};
```

**Interface dan foydalanish**:
```typescript
interface Product {
    id: number;
    name: string;
    price: number;
}

let product: Product = {
    id: 1,
    name: "Laptop",
    price: 999.99
};
```

### Interface properties (Interface xususiyatlari)

Interface xususiyatlari obyektning qanday ma'lumotlarga ega bo'lishini belgilaydi.

**Majburiy xususiyatlar**:
```typescript
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

let person: Person = {
    firstName: "Ali",
    lastName: "Valiyev",
    age: 25
};
```

**Turli xil tipdagi xususiyatlar**:
```typescript
interface Student {
    name: string;
    age: number;
    isActive: boolean;
    grades: number[];
    address: {
        city: string;
        country: string;
    };
}

let student: Student = {
    name: "Ali",
    age: 20,
    isActive: true,
    grades: [85, 90, 88],
    address: {
        city: "Toshkent",
        country: "O'zbekiston"
    }
};
```

**Funksiya xususiyatlari**:
```typescript
interface Calculator {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
}

let calc: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};
```

### Optional and readonly properties (Ixtiyoriy va readonly xususiyatlar)

#### Optional properties (Ixtiyoriy xususiyatlar)

Interface da ixtiyoriy xususiyatlar `?` belgisi bilan belgilanadi.

```typescript
interface User {
    name: string;
    age: number;
    email?: string;  // Ixtiyoriy
    phone?: string; // Ixtiyoriy
}

let user1: User = {
    name: "Ali",
    age: 25
    // email va phone berilmaydi
};

let user2: User = {
    name: "Vali",
    age: 30,
    email: "vali@example.com"
};
```

**Ixtiyoriy xususiyatlarni tekshirish**:
```typescript
interface Profile {
    name: string;
    bio?: string;
}

function displayProfile(profile: Profile): void {
    console.log(`Ism: ${profile.name}`);
    if (profile.bio) {
        console.log(`Bio: ${profile.bio}`);
    }
}
```

#### Readonly properties (O'zgarmas xususiyatlar)

Readonly xususiyatlar `readonly` kalit so'zi bilan belgilanadi.

```typescript
interface User {
    readonly id: number;
    name: string;
    age: number;
}

let user: User = {
    id: 1,
    name: "Ali",
    age: 25
};

user.name = "Vali";  // ✅ To'g'ri
user.age = 30;       // ✅ To'g'ri
// user.id = 2;      // ❌ Xato: readonly xususiyatni o'zgartirib bo'lmaydi
```

**Readonly va ixtiyoriy birga**:
```typescript
interface Config {
    readonly apiKey: string;
    readonly version: string;
    timeout?: number;
}

let config: Config = {
    apiKey: "abc123",
    version: "1.0.0",
    timeout: 5000
};
```

### Interface vs type alias (Interface va type alias farqi)

**O'xshashliklar**:
- Ikkalasi ham obyekt strukturasini belgilash uchun ishlatiladi
- Ikkalasi ham ixtiyoriy va readonly xususiyatlarni qo'llab-quvvatlaydi

**Farqlar**:

**1. Type alias - union turlar bilan**:
```typescript
// Type alias union turlar bilan ishlaydi
type ID = string | number;

// Interface union turlar bilan ishlamaydi
// interface ID = string | number; // ❌ Xato
```

**2. Interface - declaration merging**:
```typescript
// Interface declaration merging qo'llab-quvvatlaydi
interface User {
    name: string;
}

interface User {
    age: number;
}

// Endi User ikkala xususiyatga ham ega
let user: User = {
    name: "Ali",
    age: 25
};

// Type alias bunday qilmaydi
type Person = {
    name: string;
};

// type Person = { age: number; }; // ❌ Xato
```

**3. Type alias - boshqa turlar bilan**:
```typescript
// Type alias primitiv turlar bilan ishlaydi
type Name = string;
type Age = number;

// Interface faqat obyektlar bilan ishlaydi
// interface Name = string; // ❌ Xato
```

**4. Sintaksis farqi**:
```typescript
// Type alias
type User = {
    name: string;
    age: number;
};

// Interface
interface User {
    name: string;
    age: number;
}
```

### Extending interfaces (Interface larni kengaytirish)

Interface larni `extends` kalit so'zi bilan kengaytirish mumkin.

**Bitta interface ni kengaytirish**:
```typescript
interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
    department: string;
}

let employee: Employee = {
    name: "Ali",
    age: 25,
    employeeId: 123,
    department: "IT"
};
```

**Bir nechta interface larni kengaytirish**:
```typescript
interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

interface Duck extends Flyable, Swimmable {
    name: string;
}

let duck: Duck = {
    name: "O'rdak",
    fly: () => console.log("Uchmoqda"),
    swim: () => console.log("Suzmoqda")
};
```

**Xususiyatlarni qayta belgilash**:
```typescript
interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
    age: number; // Qayta belgilash mumkin
}

let dog: Dog = {
    name: "Rex",
    age: 3,
    breed: "Labrador"
};
```

**Xususiyatlarni o'zgartirish**:
```typescript
interface Base {
    readonly id: number;
    name: string;
}

interface Extended extends Base {
    name: string; // Qayta belgilash mumkin
    // readonly id: string; // ❌ Xato: readonly ni o'zgartirib bo'lmaydi
}
```

### When to use interfaces vs type aliases (Qachon interface, qachon type alias)

**Interface dan foydalanish tavsiya etiladi**:
- Obyekt strukturasini belgilashda
- Declaration merging kerak bo'lganda
- Class larda implement qilishda
- Kengaytirish (extends) kerak bo'lganda

**Misol**:
```typescript
interface User {
    name: string;
    age: number;
}

class Admin implements User {
    name: string;
    age: number;
    role: string;
}
```

**Type alias dan foydalanish tavsiya etiladi**:
- Union yoki intersection turlar bilan ishlashda
- Primitiv turlarga nom berishda
- Funksiya turlarini belgilashda
- Mapped types yoki boshqa murakkab turlar bilan ishlashda

**Misol**:
```typescript
type ID = string | number;
type Status = "active" | "inactive" | "pending";
type MathOperation = (a: number, b: number) => number;
```

**Umumiy qoida**:
- Obyekt strukturalari uchun → **Interface**
- Boshqa hollarda → **Type alias**

**Amaliy misol**:
```typescript
// Interface - obyekt strukturalari uchun
interface User {
    name: string;
    email: string;
}

interface Admin extends User {
    role: string;
}

// Type alias - union turlar va boshqalar uchun
type UserID = string | number;
type UserStatus = "active" | "inactive";

function getUser(id: UserID, status: UserStatus): User {
    return {
        name: "Ali",
        email: "ali@example.com"
    };
}
```

### Amaliy misol

Keling, barcha o'rganganlarimizni birlashtiramiz:

```typescript
// Type alias - union turlar uchun
type ID = string | number;
type Status = "active" | "inactive";

// Interface - obyekt strukturalari uchun
interface BaseUser {
    readonly id: ID;
    name: string;
    email: string;
    status: Status;
    phone?: string; // Ixtiyoriy
}

// Interface ni kengaytirish
interface Admin extends BaseUser {
    role: string;
    permissions: string[];
}

// Type alias - funksiya turlari uchun
type UserValidator = (user: BaseUser) => boolean;

// Funksiyalar
const validateUser: UserValidator = (user) => {
    return user.name.length > 0 && user.email.includes("@");
};

// Obyektlar
let user: BaseUser = {
    id: "user-123",
    name: "Ali",
    email: "ali@example.com",
    status: "active"
};

let admin: Admin = {
    id: "admin-456",
    name: "Vali",
    email: "vali@example.com",
    status: "active",
    role: "super-admin",
    permissions: ["read", "write", "delete"]
};

// Tekshirish
console.log(validateUser(user)); // true
console.log(admin.role); // "super-admin"
```

### Xulosa

Bu modulda siz:
- Type aliases bilan tanishdingiz
- Interfaces bilan tanishdingiz
- Interface xususiyatlari bilan ishlashni o'rgandingiz
- Ixtiyoriy va readonly xususiyatlar bilan ishlashni bilasiz
- Interface va type alias farqini tushundingiz
- Interface larni kengaytirishni o'rgandingiz
- Qachon interface, qachon type alias ishlatishni bilasiz

Keyingi modulda siz union va intersection turlar bilan tanishasiz.

</details>

<hr>

<details>
<summary><h2>Module 6: Union va Intersection turlar</h2></summary>

## Module 6: Union va Intersection turlar

### Union types (|) (Union turlar)

Union type - bu bir nechta tipdan birini qabul qiladigan tip. `|` belgisi bilan belgilanadi.

**Asosiy sintaksis**:
```typescript
type UnionType = Type1 | Type2 | Type3;
```

**Oddiy misol**:
```typescript
let value: string | number;

value = "salom";  // ✅ To'g'ri
value = 42;       // ✅ To'g'ri
// value = true;  // ❌ Xato: boolean union ga kirmaydi
```

**Bir nechta tip bilan**:
```typescript
let id: string | number | boolean;

id = "abc123";  // ✅ To'g'ri
id = 456;       // ✅ To'g'ri
id = true;      // ✅ To'g'ri
```

**Funksiyalar bilan**:
```typescript
function displayValue(value: string | number): void {
    console.log(value);
}

displayValue("salom"); // "salom"
displayValue(42);      // 42
```

**Union turlar va type alias**:
```typescript
type ID = string | number;
type Status = "active" | "inactive" | "pending";

let userId: ID = "user-123";
let userStatus: Status = "active";
```

**Obyektlar bilan union**:
```typescript
type Square = {
    kind: "square";
    size: number;
};

type Circle = {
    kind: "circle";
    radius: number;
};

type Shape = Square | Circle;

let shape: Shape = {
    kind: "square",
    size: 10
};
```

### Intersection types (&) (Intersection turlar)

Intersection type - bu barcha tiplarning xususiyatlarini birlashtiradigan tip. `&` belgisi bilan belgilanadi.

**Asosiy sintaksis**:
```typescript
type IntersectionType = Type1 & Type2 & Type3;
```

**Oddiy misol**:
```typescript
type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    department: string;
};

type EmployeePerson = Person & Employee;

let employee: EmployeePerson = {
    name: "Ali",
    age: 25,
    employeeId: 123,
    department: "IT"
};
```

**Bir nechta tip bilan**:
```typescript
type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type ABC = A & B & C;

let value: ABC = {
    a: "salom",
    b: 42,
    c: true
};
```

**Funksiyalar bilan**:
```typescript
type Greet = {
    greet: () => void;
};

type Log = {
    log: (message: string) => void;
};

type Logger = Greet & Log;

let logger: Logger = {
    greet: () => console.log("Salom!"),
    log: (message) => console.log(message)
};
```

**Union va intersection birga**:
```typescript
type StringOrNumber = string | number;
type HasId = { id: number };

type Identified = StringOrNumber & HasId; // Bu xato bo'ladi, chunki string & { id: number } mumkin emas

// To'g'ri usul:
type IdentifiedValue = (string | number) & { id: number };
```

### Type narrowing (Tip toraytirish)

Type narrowing - bu union tipdan aniq tipga o'tish jarayoni. TypeScript kodni tahlil qilib, tipni toraytiradi.

**Asosiy tushuncha**:
```typescript
function displayValue(value: string | number): void {
    if (typeof value === "string") {
        // Bu yerda value faqat string
        console.log(value.toUpperCase());
    } else {
        // Bu yerda value faqat number
        console.log(value.toFixed(2));
    }
}
```

**Obyektlar bilan narrowing**:
```typescript
type Square = {
    kind: "square";
    size: number;
};

type Circle = {
    kind: "circle";
    radius: number;
};

type Shape = Square | Circle;

function getArea(shape: Shape): number {
    if (shape.kind === "square") {
        // Bu yerda shape Square tipida
        return shape.size * shape.size;
    } else {
        // Bu yerda shape Circle tipida
        return Math.PI * shape.radius * shape.radius;
    }
}
```

**Eslatma**: Type narrowing ning batafsil usullari (typeof, instanceof, in operator va boshqalar) Module 10 da yoritilgan.

### Type guards (Tip qo'riqchilari)

Type guard - bu tipni tekshiruvchi funksiyalar. Ular `boolean` qaytaradi va TypeScript ga tip haqida ma'lumot beradi.

**Asosiy tushuncha**:
```typescript
function isString(value: string | number): value is string {
    return typeof value === "string";
}

function process(value: string | number): void {
    if (isString(value)) {
        // Bu yerda value string
        console.log(value.toUpperCase());
    } else {
        // Bu yerda value number
        console.log(value.toFixed(2));
    }
}
```

**Eslatma**: Type guards ning batafsil turlari va qo'llash usullari Module 10 da yoritilgan.

### Practical examples (Amaliy misollar)

Keling, union va intersection turlarni amaliy qo'llashni ko'ramiz:

```typescript
// Union turlar
type ID = string | number;
type Status = "active" | "inactive" | "pending";

// Intersection turlar
type Timestamped = {
    createdAt: Date;
    updatedAt: Date;
};

type Identifiable = {
    id: ID;
};

type User = Identifiable & Timestamped & {
    name: string;
    email: string;
    status: Status;
};

// Union va intersection birga
let user: User = {
    id: "user-123",
    name: "Ali",
    email: "ali@example.com",
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date()
};

// Union tip bilan ishlash
function processID(id: ID): string {
    if (typeof id === "string") {
        return id.toUpperCase();
    } else {
        return id.toString();
    }
}

console.log(processID("abc123")); // "ABC123"
console.log(processID(456));      // "456"
```

**API javoblarida union turlar**:
```typescript
type SuccessResponse = {
    status: "success";
    data: {
        id: number;
        name: string;
    };
};

type ErrorResponse = {
    status: "error";
    message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse): void {
    if (response.status === "success") {
        // TypeScript response ni SuccessResponse deb biladi
        console.log(`Ma'lumot: ${response.data.name}`);
    } else {
        // TypeScript response ni ErrorResponse deb biladi
        console.log(`Xato: ${response.message}`);
    }
}
```

### Xulosa

Bu modulda siz:
- Union turlar (|) bilan tanishdingiz
- Intersection turlar (&) bilan tanishdingiz
- Type narrowing ning asosiy tushunchasini o'rgandingiz
- Type guards ning asosiy tushunchasini bilasiz
- Union va intersection turlarni amaliy qo'llashni o'rgandingiz

**Eslatma**: Type narrowing va type guards ning batafsil usullari va qo'llash naqshlari Module 10 da yoritilgan.

Keyingi modulda siz generics bilan tanishasiz.

</details>

<hr>

<details>
<summary><h2>Module 7: Generics asoslari</h2></summary>

## Module 7: Generics asoslari

### What are generics? (Generics nima?)

Generics - bu turli xil tiplar bilan ishlash imkoniyatini beradigan TypeScript xususiyati. Ular kodni qayta ishlatish va tip xavfsizligini saqlashga yordam beradi.

**Muammo generics siz**:
```typescript
// Har bir tip uchun alohida funksiya yozish kerak
function getString(value: string): string {
    return value;
}

function getNumber(value: number): number {
    return value;
}

function getBoolean(value: boolean): boolean {
    return value;
}
```

**Generics bilan yechim**:
```typescript
// Bitta funksiya barcha tiplar uchun
function getValue<T>(value: T): T {
    return value;
}

getValue<string>("salom");  // string
getValue<number>(42);       // number
getValue<boolean>(true);     // boolean
```

**Generics afzalliklari**:
- Kodni qayta ishlatish
- Tip xavfsizligi
- Kodning qisqarishi
- Moslashuvchanlik

### Generic functions (Generic funksiyalar)

Generic funksiyalar - bu turli xil tiplar bilan ishlaydigan funksiyalar.

**Asosiy sintaksis**:
```typescript
function functionName<T>(param: T): T {
    // funksiya tanasi
}
```

**Oddiy misol**:
```typescript
function identity<T>(value: T): T {
    return value;
}

let stringValue = identity<string>("salom");  // string
let numberValue = identity<number>(42);        // number
```

**Type inference bilan**:
```typescript
function identity<T>(value: T): T {
    return value;
}

// TypeScript avtomatik ravishda tipni aniqlaydi
let stringValue = identity("salom");  // string
let numberValue = identity(42);       // number
```

**Bir nechta parametrlar bilan**:
```typescript
function getFirst<T>(items: T[]): T | undefined {
    return items[0];
}

let firstString = getFirst<string>(["a", "b", "c"]);  // "a"
let firstNumber = getFirst<number>([1, 2, 3]);       // 1
```

**Return tipi boshqa bo'lganda**:
```typescript
function getLength<T>(value: T): number {
    if (typeof value === "string" || Array.isArray(value)) {
        return value.length;
    }
    return 0;
}

getLength("salom");      // 5
getLength([1, 2, 3]);    // 3
```

### Generic arrays (Generic massivlar)

Generic massivlar - bu turli xil tipdagi elementlarni saqlaydigan massivlar.

**Massiv parametrlari**:
```typescript
function getFirst<T>(items: T[]): T | undefined {
    return items.length > 0 ? items[0] : undefined;
}

let numbers = getFirst<number>([1, 2, 3]);        // 1
let strings = getFirst<string>(["a", "b"]);    // "a"
```

**Massiv qaytarish**:
```typescript
function duplicate<T>(item: T): T[] {
    return [item, item];
}

duplicate<string>("salom");  // ["salom", "salom"]
duplicate<number>(42);       // [42, 42]
```

**Massiv metodlari bilan**:
```typescript
function mapArray<T, U>(items: T[], mapper: (item: T) => U): U[] {
    return items.map(mapper);
}

let numbers = [1, 2, 3];
let strings = mapArray(numbers, (n) => n.toString()); // ["1", "2", "3"]
```

**Filter bilan**:
```typescript
function filterArray<T>(items: T[], predicate: (item: T) => boolean): T[] {
    return items.filter(predicate);
}

let numbers = [1, 2, 3, 4, 5];
let evens = filterArray(numbers, (n) => n % 2 === 0); // [2, 4]
```

### Generic interfaces (Generic interface lar)

Generic interface lar - bu turli xil tiplar bilan ishlaydigan interface lar.

**Asosiy sintaksis**:
```typescript
interface InterfaceName<T> {
    property: T;
}
```

**Oddiy misol**:
```typescript
interface Box<T> {
    value: T;
}

let stringBox: Box<string> = {
    value: "salom"
};

let numberBox: Box<number> = {
    value: 42
};
```

**Funksiyalar bilan**:
```typescript
interface Repository<T> {
    findById(id: number): T | undefined;
    save(item: T): void;
    getAll(): T[];
}

class UserRepository implements Repository<User> {
    findById(id: number): User | undefined {
        // implementatsiya
        return undefined;
    }
    
    save(item: User): void {
        // implementatsiya
    }
    
    getAll(): User[] {
        return [];
    }
}
```

**Bir nechta generic parametrlar**:
```typescript
interface Pair<T, U> {
    first: T;
    second: U;
}

let pair: Pair<string, number> = {
    first: "age",
    second: 25
};
```

**Generic interface va funksiyalar**:
```typescript
interface Transformer<T, U> {
    transform(input: T): U;
}

let stringToNumber: Transformer<string, number> = {
    transform: (input) => parseInt(input)
};
```

### Generic constraints (Generic cheklovlar)

Generic constraints - bu generic tipga qandaydir shartlar qo'yish.

**Asosiy sintaksis**:
```typescript
function functionName<T extends ConstraintType>(param: T): T {
    // funksiya tanasi
}
```

**extends bilan**:
```typescript
interface HasLength {
    length: number;
}

function getLength<T extends HasLength>(item: T): number {
    return item.length;
}

getLength("salom");      // 5
getLength([1, 2, 3]);    // 3
// getLength(42);        // ❌ Xato: number da length yo'q
```

**Keyof bilan**:
```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

let user = {
    name: "Ali",
    age: 25
};

getProperty(user, "name"); // "Ali"
getProperty(user, "age");  // 25
// getProperty(user, "email"); // ❌ Xato: email mavjud emas
```

**Bir nechta constraints**:
```typescript
interface Printable {
    print(): void;
}

interface Serializable {
    serialize(): string;
}

function process<T extends Printable & Serializable>(item: T): void {
    item.print();
    item.serialize();
}
```

**Standart tip bilan**:
```typescript
interface HasId {
    id: number;
}

function findById<T extends HasId>(items: T[], id: number): T | undefined {
    return items.find(item => item.id === id);
}
```

### Multiple type parameters (Bir nechta tip parametrlari)

Bir nechta generic parametrlar bir funksiya yoki interface da ishlatilishi mumkin.

**Ikki parametr bilan**:
```typescript
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

let result = pair<string, number>("age", 25); // [string, number]
```

**Uch parametr bilan**:
```typescript
function createTuple<T, U, V>(first: T, second: U, third: V): [T, U, V] {
    return [first, second, third];
}

let tuple = createTuple<string, number, boolean>("Ali", 25, true);
```

**Funksiyalar bilan**:
```typescript
function map<T, U>(items: T[], mapper: (item: T) => U): U[] {
    return items.map(mapper);
}

let numbers = [1, 2, 3];
let strings = map<number, string>(numbers, (n) => n.toString());
```

**Interface lar bilan**:
```typescript
interface Dictionary<TKey, TValue> {
    get(key: TKey): TValue | undefined;
    set(key: TKey, value: TValue): void;
}

let dict: Dictionary<string, number> = {
    get: (key) => undefined,
    set: (key, value) => {}
};
```

**Constraints bilan birga**:
```typescript
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

let merged = merge({ name: "Ali" }, { age: 25 });
// { name: "Ali", age: 25 }
```

### Practical examples (Amaliy misollar)

Keling, barcha o'rganganlarimizni birlashtiramiz:

```typescript
// Generic funksiya - massivdan element olish
function getFirst<T>(items: T[]): T | undefined {
    return items.length > 0 ? items[0] : undefined;
}

// Generic funksiya - massivni filter qilish
function filter<T>(items: T[], predicate: (item: T) => boolean): T[] {
    return items.filter(predicate);
}

// Generic funksiya - massivni map qilish
function map<T, U>(items: T[], mapper: (item: T) => U): U[] {
    return items.map(mapper);
}

// Generic interface - Repository pattern
interface Repository<T> {
    findById(id: number): T | undefined;
    save(item: T): void;
    delete(id: number): boolean;
    getAll(): T[];
}

// Generic interface - Cache
interface Cache<T> {
    get(key: string): T | undefined;
    set(key: string, value: T): void;
    clear(): void;
}

// Generic constraints - obyekt xususiyatlarini olish
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Generic constraints - uzunlikka ega bo'lgan narsalar
interface HasLength {
    length: number;
}

function getLength<T extends HasLength>(item: T): number {
    return item.length;
}

// Amaliy qo'llash
let numbers = [1, 2, 3, 4, 5];
let strings = ["a", "b", "c"];

// Funksiyalarni chaqirish
let firstNumber = getFirst(numbers);           // 1
let firstString = getFirst(strings);           // "a"

let evens = filter(numbers, (n) => n % 2 === 0); // [2, 4]
let doubled = map(numbers, (n) => n * 2);       // [2, 4, 6, 8, 10]

// Obyektlar bilan
let user = {
    name: "Ali",
    age: 25,
    email: "ali@example.com"
};

let name = getProperty(user, "name");  // "Ali"
let age = getProperty(user, "age");    // 25

// Uzunlik bilan
let textLength = getLength("salom");      // 5
let arrayLength = getLength([1, 2, 3]);  // 3
```

**API wrapper misoli**:
```typescript
interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

function createResponse<T>(data: T, status: number = 200, message: string = "Success"): ApiResponse<T> {
    return {
        data,
        status,
        message
    };
}

let userResponse = createResponse({ name: "Ali", age: 25 });
let productResponse = createResponse({ id: 1, name: "Laptop", price: 999.99 });
```

**Stack data structure**:
```typescript
interface Stack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
}

class ArrayStack<T> implements Stack<T> {
    private items: T[] = [];
    
    push(item: T): void {
        this.items.push(item);
    }
    
    pop(): T | undefined {
        return this.items.pop();
    }
    
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
    
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

let numberStack = new ArrayStack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

console.log(numberStack.pop()); // 3
```

### Xulosa

Bu modulda siz:
- Generics nima ekanligini tushundingiz
- Generic funksiyalar bilan ishlashni o'rgandingiz
- Generic massivlar bilan ishlashni bilasiz
- Generic interface lar bilan tanishdingiz
- Generic constraints bilan ishlashni o'rgandingiz
- Bir nechta tip parametrlari bilan ishlashni bilasiz
- Amaliy misollar bilan tanishdingiz

Keyingi modulda siz umumiy utility turlar bilan tanishasiz.

</details>

<hr>

<details>
<summary><h2>Module 8: Umumiy utility turlar</h2></summary>

## Module 8: Umumiy utility turlar

Utility turlar - bu mavjud tiplarni o'zgartirish yoki yangi tiplar yaratish uchun ishlatiladigan TypeScript ning o'rnatilgan turlari.

### Partial<T>

`Partial<T>` - bu obyektning barcha xususiyatlarini ixtiyoriy qiladi.

**Asosiy sintaksis**:
```typescript
type Partial<T> = {
    [P in keyof T]?: T[P];
}
```

**Misol**:
```typescript
interface User {
    name: string;
    age: number;
    email: string;
}

// Partial bilan barcha xususiyatlar ixtiyoriy bo'ladi
type PartialUser = Partial<User>;

let partialUser: PartialUser = {
    name: "Ali"
    // age va email berilmaydi
};

let anotherPartial: PartialUser = {
    name: "Vali",
    age: 25
    // email berilmaydi
};
```

**Amaliy qo'llash**:
```typescript
interface UpdateUserDto {
    name?: string;
    age?: number;
    email?: string;
}

// Partial dan foydalanish
type UpdateUserDto = Partial<User>;

function updateUser(id: number, updates: Partial<User>): void {
    // Faqat berilgan xususiyatlarni yangilaydi
    console.log(`Foydalanuvchi ${id} yangilanmoqda:`, updates);
}

updateUser(1, { name: "Yangi ism" });
updateUser(1, { age: 30, email: "yangi@example.com" });
```

### Required<T>

`Required<T>` - bu obyektning barcha xususiyatlarini majburiy qiladi.

**Asosiy sintaksis**:
```typescript
type Required<T> = {
    [P in keyof T]-?: T[P];
}
```

**Misol**:
```typescript
interface User {
    name: string;
    age?: number;
    email?: string;
}

// Required bilan barcha xususiyatlar majburiy bo'ladi
type RequiredUser = Required<User>;

let requiredUser: RequiredUser = {
    name: "Ali",
    age: 25,      // Endi majburiy
    email: "ali@example.com" // Endi majburiy
};
```

**Amaliy qo'llash**:
```typescript
interface Config {
    apiKey?: string;
    timeout?: number;
    retries?: number;
}

// Barcha xususiyatlar majburiy bo'lishi kerak
function initializeApp(config: Required<Config>): void {
    console.log(`API Key: ${config.apiKey}`);
    console.log(`Timeout: ${config.timeout}`);
    console.log(`Retries: ${config.retries}`);
}

initializeApp({
    apiKey: "abc123",
    timeout: 5000,
    retries: 3
});
```

### Readonly<T>

`Readonly<T>` - bu obyektning barcha xususiyatlarini o'zgarmas qiladi.

**Asosiy sintaksis**:
```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}
```

**Misol**:
```typescript
interface User {
    name: string;
    age: number;
}

// Readonly bilan barcha xususiyatlar o'zgarmas bo'ladi
type ReadonlyUser = Readonly<User>;

let readonlyUser: ReadonlyUser = {
    name: "Ali",
    age: 25
};

// readonlyUser.name = "Vali"; // ❌ Xato: o'zgartirib bo'lmaydi
// readonlyUser.age = 30;     // ❌ Xato: o'zgartirib bo'lmaydi
```

**Amaliy qo'llash**:
```typescript
interface Config {
    apiUrl: string;
    version: string;
}

// Konfiguratsiya o'zgarmas bo'lishi kerak
const appConfig: Readonly<Config> = {
    apiUrl: "https://api.example.com",
    version: "1.0.0"
};

// appConfig.apiUrl = "https://new-api.com"; // ❌ Xato
```

### Pick<T, K>

`Pick<T, K>` - bu obyektdan faqat tanlangan xususiyatlarni oladi.

**Asosiy sintaksis**:
```typescript
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
}
```

**Misol**:
```typescript
interface User {
    name: string;
    age: number;
    email: string;
    phone: string;
}

// Faqat name va email ni oladi
type UserContact = Pick<User, "name" | "email">;

let contact: UserContact = {
    name: "Ali",
    email: "ali@example.com"
    // age va phone yo'q
};
```

**Amaliy qo'llash**:
```typescript
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
}

// Faqat ko'rsatish uchun kerakli xususiyatlar
type ProductPreview = Pick<Product, "id" | "name" | "price">;

function displayProduct(product: ProductPreview): void {
    console.log(`${product.name} - $${product.price}`);
}

let product: Product = {
    id: 1,
    name: "Laptop",
    price: 999.99,
    description: "Gaming laptop",
    category: "Electronics"
};

displayProduct(product); // Faqat kerakli xususiyatlar uzatiladi
```

### Omit<T, K>

`Omit<T, K>` - bu obyektdan tanlangan xususiyatlarni olib tashlaydi.

**Asosiy sintaksis**:
```typescript
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
```

**Misol**:
```typescript
interface User {
    name: string;
    age: number;
    email: string;
    password: string;
}

// password ni olib tashlaydi
type PublicUser = Omit<User, "password">;

let publicUser: PublicUser = {
    name: "Ali",
    age: 25,
    email: "ali@example.com"
    // password yo'q
};
```

**Amaliy qo'llash**:
```typescript
interface CreateUserDto {
    name: string;
    email: string;
    password: string;
    age: number;
}

// Password ni olib tashlash
type UserResponse = Omit<CreateUserDto, "password">;

function createUser(data: CreateUserDto): UserResponse {
    // Parolni saqlash
    // ...
    
    // Parolsiz javob qaytarish
    return {
        name: data.name,
        email: data.email,
        age: data.age
    };
}
```

**Bir nechta xususiyatlarni olib tashlash**:
```typescript
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

// id, password, createdAt, updatedAt ni olib tashlash
type UserProfile = Omit<User, "id" | "password" | "createdAt" | "updatedAt">;

let profile: UserProfile = {
    name: "Ali",
    email: "ali@example.com"
};
```

### Record<K, T>

`Record<K, T>` - bu kalitlar va qiymatlar tipini belgilaydigan obyekt yaratadi.

**Asosiy sintaksis**:
```typescript
type Record<K extends keyof any, T> = {
    [P in K]: T;
}
```

**Misol**:
```typescript
// String kalitlar va number qiymatlar
type UserScores = Record<string, number>;

let scores: UserScores = {
    math: 95,
    science: 87,
    english: 92
};
```

**Aniq kalitlar bilan**:
```typescript
type Status = "active" | "inactive" | "pending";

type StatusConfig = Record<Status, string>;

let config: StatusConfig = {
    active: "Faol",
    inactive: "Nofaol",
    pending: "Kutilmoqda"
};
```

**Amaliy qo'llash**:
```typescript
// Foydalanuvchi ID va User obyektlari
type UserMap = Record<number, User>;

let users: UserMap = {
    1: { name: "Ali", age: 25, email: "ali@example.com" },
    2: { name: "Vali", age: 30, email: "vali@example.com" }
};

// Kalitlar va qiymatlar
type ErrorMessages = Record<string, string>;

let errors: ErrorMessages = {
    required: "Majburiy maydon",
    email: "Noto'g'ri email formati",
    minLength: "Minimal uzunlik 8"
};
```

**Enum bilan**:
```typescript
enum UserRole {
    Admin = "admin",
    User = "user",
    Guest = "guest"
}

type RolePermissions = Record<UserRole, string[]>;

let permissions: RolePermissions = {
    [UserRole.Admin]: ["read", "write", "delete"],
    [UserRole.User]: ["read", "write"],
    [UserRole.Guest]: ["read"]
};
```

### When to use utility types (Qachon utility turlardan foydalanish)

**Partial<T>** - qachon ishlatiladi:
- Yangilash (update) operatsiyalari uchun
- Obyektning bir qismini yaratishda
- Ixtiyoriy parametrlar bilan ishlashda

```typescript
// Yangilash funksiyasi
function updateUser(id: number, updates: Partial<User>): void {
    // Faqat berilgan xususiyatlarni yangilaydi
}
```

**Required<T>** - qachon ishlatiladi:
- Barcha xususiyatlar majburiy bo'lishi kerak bo'lganda
- Konfiguratsiya obyektlarida
- API javoblarida

```typescript
// To'liq konfiguratsiya talab qilinganda
function setupApp(config: Required<AppConfig>): void {
    // Barcha xususiyatlar mavjudligiga ishonch hosil qilish
}
```

**Readonly<T>** - qachon ishlatiladi:
- O'zgarmas ma'lumotlar uchun
- Konfiguratsiya obyektlarida
- Konstantalar uchun

```typescript
// O'zgarmas konfiguratsiya
const appConfig: Readonly<Config> = {
    apiUrl: "https://api.example.com"
};
```

**Pick<T, K>** - qachon ishlatiladi:
- Faqat kerakli xususiyatlarni tanlashda
- API javoblarini kamaytirishda
- Ko'rsatish uchun ma'lumotlarni tanlashda

```typescript
// Faqat kerakli xususiyatlar
type ProductCard = Pick<Product, "id" | "name" | "price">;
```

**Omit<T, K>** - qachon ishlatiladi:
- Xavfsizlik ma'lumotlarini olib tashlashda (parollar, tokenlar)
- API javoblarida
- Ma'lumotlarni filtrlashda

```typescript
// Parolni olib tashlash
type SafeUser = Omit<User, "password" | "token">;
```

**Record<K, T>** - qachon ishlatiladi:
- Kalit-qiymat juftliklarida
- Mapping obyektlarida
- Konfiguratsiya obyektlarida
- Enum lar bilan ishlashda

```typescript
// Kalit-qiymat mapping
type StatusMap = Record<Status, string>;
```

### Amaliy misol

Keling, barcha o'rganganlarimizni birlashtiramiz:

```typescript
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    age: number;
    createdAt: Date;
    updatedAt: Date;
}

// 1. Partial - yangilash uchun
type UpdateUserDto = Partial<Pick<User, "name" | "email" | "age">>;

function updateUser(id: number, updates: UpdateUserDto): void {
    console.log(`Foydalanuvchi ${id} yangilanmoqda:`, updates);
}

// 2. Required - to'liq ma'lumot talab qilinganda
type CreateUserDto = Required<Pick<User, "name" | "email" | "password" | "age">>;

function createUser(data: CreateUserDto): void {
    console.log("Yangi foydalanuvchi yaratilmoqda:", data);
}

// 3. Readonly - o'zgarmas ma'lumotlar
type UserConfig = Readonly<Pick<User, "id" | "name" | "email">>;

const userConfig: UserConfig = {
    id: 1,
    name: "Ali",
    email: "ali@example.com"
};

// 4. Pick - faqat kerakli xususiyatlar
type UserPreview = Pick<User, "id" | "name" | "email">;

function displayUser(user: UserPreview): void {
    console.log(`${user.name} (${user.email})`);
}

// 5. Omit - xavfsizlik ma'lumotlarini olib tashlash
type SafeUser = Omit<User, "password" | "createdAt" | "updatedAt">;

function getUserSafe(user: User): SafeUser {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        age: user.age
    };
}

// 6. Record - kalit-qiymat mapping
type UserStatus = "active" | "inactive" | "pending";
type StatusLabels = Record<UserStatus, string>;

const statusLabels: StatusLabels = {
    active: "Faol",
    inactive: "Nofaol",
    pending: "Kutilmoqda"
};

// Amaliy qo'llash
let user: User = {
    id: 1,
    name: "Ali",
    email: "ali@example.com",
    password: "secret123",
    age: 25,
    createdAt: new Date(),
    updatedAt: new Date()
};

// Yangilash
updateUser(1, { name: "Yangi ism" });

// Yaratish
createUser({
    name: "Vali",
    email: "vali@example.com",
    password: "password123",
    age: 30
});

// Xavfsiz ko'rsatish
let safeUser = getUserSafe(user);
displayUser(safeUser);

// Status label
console.log(statusLabels["active"]); // "Faol"
```

### Xulosa

Bu modulda siz:
- Partial<T> bilan tanishdingiz
- Required<T> bilan tanishdingiz
- Readonly<T> bilan tanishdingiz
- Pick<T, K> bilan tanishdingiz
- Omit<T, K> bilan tanishdingiz
- Record<K, T> bilan tanishdingiz
- Qachon qaysi utility turdan foydalanishni bilasiz

Keyingi modulda siz modullar va importlar bilan tanishasiz.

</details>

<hr>

<details>
<summary><h2>Module 9: Modullar va importlar</h2></summary>

## Module 9: Modullar va importlar

### ES6 modules with TypeScript (TypeScript bilan ES6 modullar)

ES6 modullar - bu kodni alohida fayllarga bo'lish va ularni bir-biriga ulash imkoniyatini beradi.

**Asosiy tushuncha**:
- Har bir fayl alohida modul
- `export` - ma'lumotlarni eksport qilish
- `import` - ma'lumotlarni import qilish

**Fayl strukturasiga misol**:
```
src/
├── utils.ts
├── types.ts
├── user.ts
└── index.ts
```

**tsconfig.json sozlamalari**:
```json
{
  "compilerOptions": {
    "module": "ES2020",
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}
```

### Import and export types (Tip import va eksport)

TypeScript da tiplarni ham import va export qilish mumkin.

**Tip eksport qilish**:
```typescript
// types.ts
export interface User {
    name: string;
    age: number;
    email: string;
}

export type Status = "active" | "inactive";

export interface Product {
    id: number;
    name: string;
    price: number;
}
```

**Tip import qilish**:
```typescript
// user.ts
import { User, Status } from "./types";

function createUser(user: User): void {
    console.log(`Foydalanuvchi yaratildi: ${user.name}`);
}

let status: Status = "active";
```

**Barcha tiplarni import qilish**:
```typescript
// Barcha tiplarni import qilish
import * as Types from "./types";

let user: Types.User = {
    name: "Ali",
    age: 25,
    email: "ali@example.com"
};
```

### Default exports (Standart eksport)

Default export - bu moduldan bitta asosiy narsani eksport qilish.

**Default export sintaksis**:
```typescript
// user.ts
export default interface User {
    name: string;
    age: number;
}

// Yoki
interface User {
    name: string;
    age: number;
}

export default User;
```

**Default export funksiyalar**:
```typescript
// utils.ts
export default function greet(name: string): string {
    return `Salom, ${name}!`;
}
```

**Default export class lar**:
```typescript
// User.ts
export default class User {
    constructor(public name: string, public age: number) {}
}
```

**Default export import qilish**:
```typescript
// index.ts
import User from "./user";
import greet from "./utils";
import UserClass from "./User";

let user: User = {
    name: "Ali",
    age: 25
};

console.log(greet("Ali"));

let userInstance = new UserClass("Vali", 30);
```

**Default export va named export birga**:
```typescript
// user.ts
export interface User {
    name: string;
    age: number;
}

export default function createUser(name: string, age: number): User {
    return { name, age };
}
```

```typescript
// index.ts
import createUser, { User } from "./user";

let user: User = createUser("Ali", 25);
```

### Named exports (Nomlangan eksport)

Named export - bu bir moduldan bir nechta narsalarni nom bilan eksport qilish.

**Named export sintaksis**:
```typescript
// utils.ts
export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}
```

**Alohida export qilish**:
```typescript
// utils.ts
function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

export { add, subtract };
```

**Nomni o'zgartirish bilan export**:
```typescript
// utils.ts
function add(a: number, b: number): number {
    return a + b;
}

export { add as sum };
```

**Named export import qilish**:
```typescript
// index.ts
import { add, subtract, multiply } from "./utils";

console.log(add(5, 3));        // 8
console.log(subtract(10, 4));  // 6
console.log(multiply(2, 7));   // 14
```

**Nomni o'zgartirish bilan import**:
```typescript
// index.ts
import { add as sum, subtract as diff } from "./utils";

console.log(sum(5, 3));  // 8
console.log(diff(10, 4)); // 6
```

**Barcha named export larni import qilish**:
```typescript
// index.ts
import * as Utils from "./utils";

console.log(Utils.add(5, 3));        // 8
console.log(Utils.subtract(10, 4));  // 6
console.log(Utils.multiply(2, 7));   // 14
```

**Default va named export birga**:
```typescript
// math.ts
export default function divide(a: number, b: number): number {
    return a / b;
}

export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}
```

```typescript
// index.ts
import divide, { add, subtract } from "./math";

console.log(divide(10, 2));   // 5
console.log(add(5, 3));       // 8
console.log(subtract(10, 4)); // 6
```

### Type-only imports (Faqat tip import)

Type-only import - bu faqat tiplarni import qilish, runtime kodini import qilmaslik.

**`import type` sintaksis**:
```typescript
// types.ts
export interface User {
    name: string;
    age: number;
}

export type Status = "active" | "inactive";
```

```typescript
// user.ts
import type { User, Status } from "./types";

function processUser(user: User): Status {
    // ...
    return "active";
}
```

**Faqat tip import afzalliklari**:
- Runtime kodiga ta'sir qilmaydi
- Tree-shaking uchun yaxshi
- Kod hajmini kamaytiradi

**Oddiy import va type import farqi**:
```typescript
// Oddiy import - runtime da ham mavjud
import { User } from "./types";

// Type-only import - faqat compile time da
import type { User } from "./types";
```

**Bir nechta tip import**:
```typescript
import type {
    User,
    Product,
    Order,
    Status
} from "./types";
```

**Type import va oddiy import birga**:
```typescript
// types.ts
export interface User {
    name: string;
}

export function createUser(name: string): User {
    return { name };
}
```

```typescript
// index.ts
import type { User } from "./types";
import { createUser } from "./types";

let user: User = createUser("Ali");
```

### Organizing your code (Kodingizni tashkil etish)

Kodni tashkil etish - bu loyihani tushunarli va saqlash oson qilish.

**Papka strukturasiga misol**:
```
src/
├── types/
│   ├── user.ts
│   ├── product.ts
│   └── index.ts
├── utils/
│   ├── math.ts
│   ├── string.ts
│   └── index.ts
├── services/
│   ├── userService.ts
│   └── apiService.ts
└── index.ts
```

**Types papkasi**:
```typescript
// types/user.ts
export interface User {
    id: number;
    name: string;
    email: string;
}

export type UserRole = "admin" | "user" | "guest";
```

```typescript
// types/product.ts
export interface Product {
    id: number;
    name: string;
    price: number;
}
```

```typescript
// types/index.ts - barcha tiplarni eksport qilish
export * from "./user";
export * from "./product";
```

**Utils papkasi**:
```typescript
// utils/math.ts
export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}
```

```typescript
// utils/string.ts
export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverse(str: string): string {
    return str.split("").reverse().join("");
}
```

```typescript
// utils/index.ts
export * from "./math";
export * from "./string";
```

**Services papkasi**:
```typescript
// services/userService.ts
import type { User } from "../types";

export function getUser(id: number): User | undefined {
    // API chaqiruvi
    return undefined;
}

export function createUser(user: User): User {
    // API chaqiruvi
    return user;
}
```

**Asosiy index.ts**:
```typescript
// index.ts
import type { User, Product } from "./types";
import { add, capitalize } from "./utils";
import { getUser } from "./services/userService";

// Kod yozish
```

**Barrel export pattern**:
```typescript
// utils/index.ts - barrel file
export { add, subtract } from "./math";
export { capitalize, reverse } from "./string";
```

```typescript
// index.ts
import { add, capitalize } from "./utils";
// Barcha utils dan import qilish oson
```

**Modullarni guruhlash**:
```typescript
// services/index.ts
export * from "./userService";
export * from "./apiService";
```

```typescript
// index.ts
import { getUser, createUser } from "./services";
```

**Best practices (Yaxshi amaliyotlar)**:
1. Har bir modul bitta vazifani bajarishi kerak
2. Barrel fayllaridan foydalanish (index.ts)
3. Tip va kodni ajratish
4. Mantiqiy papka strukturasidan foydalanish
5. Nomlarni aniq va tushunarli qilish

### Amaliy misol

Keling, to'liq misol yaratamiz:

```typescript
// types/user.ts
export interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

export type UserStatus = "active" | "inactive";

// types/product.ts
export interface Product {
    id: number;
    name: string;
    price: number;
}

// types/index.ts
export * from "./user";
export * from "./product";

// utils/helpers.ts
export function formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
}

export function formatName(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// utils/index.ts
export * from "./helpers";

// services/userService.ts
import type { User, UserStatus } from "../types";

export function getUser(id: number): User | undefined {
    // API chaqiruvi
    return {
        id,
        name: "Ali",
        email: "ali@example.com",
        age: 25
    };
}

export function updateUserStatus(id: number, status: UserStatus): void {
    console.log(`Foydalanuvchi ${id} holati ${status} ga o'zgardi`);
}

// services/index.ts
export * from "./userService";

// index.ts
import type { User, Product } from "./types";
import { formatPrice, formatName } from "./utils";
import { getUser, updateUserStatus } from "./services";

// Kod yozish
let user = getUser(1);
if (user) {
    console.log(formatName(user.name));
    updateUserStatus(user.id, "active");
}
```

### Xulosa

Bu modulda siz:
- ES6 modullar bilan TypeScript da ishlashni o'rgandingiz
- Tip import va eksport bilan tanishdingiz
- Default eksport bilan ishlashni bilasiz
- Named eksport bilan ishlashni o'rgandingiz
- Type-only import bilan tanishdingiz
- Kodingizni tashkil etishni o'rgandingiz

Keyingi modulda siz type narrowing va type guards bilan tanishasiz.

</details>

<hr>

<details>
<summary><h2>Module 10: Type Narrowing va Type Guards</h2></summary>

## Module 10: Type Narrowing va Type Guards

Bu modulda siz type narrowing va type guards ning batafsil usullari va qo'llash naqshlari bilan tanishasiz. Bu mavzularning asosiy tushunchalari Module 6 da yoritilgan.

### Type narrowing techniques (Type narrowing usullari)

Type narrowing - bu TypeScript ning union tipdan aniq tipga o'tish jarayoni. TypeScript kodni tahlil qilib, tipni toraytiradi.

**typeof bilan narrowing**:
```typescript
function processValue(value: string | number): void {
    if (typeof value === "string") {
        // Bu yerda value faqat string
        console.log(value.toUpperCase());
    } else {
        // Bu yerda value faqat number
        console.log(value.toFixed(2));
    }
}
```

**instanceof bilan narrowing**:
```typescript
class Dog {
    bark(): void {
        console.log("Woof!");
    }
}

class Cat {
    meow(): void {
        console.log("Meow!");
    }
}

function makeSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        // Bu yerda animal Dog tipida
        animal.bark();
    } else {
        // Bu yerda animal Cat tipida
        animal.meow();
    }
}
```

**Null check bilan narrowing**:
```typescript
function process(value: string | null): void {
    if (value === null) {
        console.log("Qiymat null");
        return;
    }
    // Bu yerda value faqat string
    console.log(value.toUpperCase());
}
```

**Truthiness check**:
```typescript
function process(value: string | undefined): void {
    if (value) {
        // Bu yerda value string va undefined emas
        console.log(value.toUpperCase());
    }
}
```

**Array tekshiruvi**:
```typescript
function process(value: string | string[]): void {
    if (Array.isArray(value)) {
        // Bu yerda value string[]
        console.log(value.join(", "));
    } else {
        // Bu yerda value string
        console.log(value);
    }
}
```

**Property check**:
```typescript
type Square = {
    kind: "square";
    size: number;
};

type Circle = {
    kind: "circle";
    radius: number;
};

type Shape = Square | Circle;

function getArea(shape: Shape): number {
    if (shape.kind === "square") {
        // Bu yerda shape Square tipida
        return shape.size * shape.size;
    } else {
        // Bu yerda shape Circle tipida
        return Math.PI * shape.radius * shape.radius;
    }
}
```

### Type guards (Tip qo'riqchilari)

Type guard - bu tipni tekshiruvchi funksiyalar. Ular `boolean` qaytaradi va TypeScript ga tip haqida ma'lumot beradi.

**Asosiy sintaksis**:
```typescript
function isType(value: unknown): value is Type {
    // tekshiruv
    return boolean;
}
```

**Oddiy type guard**:
```typescript
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function process(value: string | number): void {
    if (isString(value)) {
        // Bu yerda value string
        console.log(value.toUpperCase());
    } else {
        // Bu yerda value number
        console.log(value.toFixed(2));
    }
}
```

**Number type guard**:
```typescript
function isNumber(value: unknown): value is number {
    return typeof value === "number" && !isNaN(value);
}

function add(a: unknown, b: unknown): number {
    if (isNumber(a) && isNumber(b)) {
        return a + b; // TypeScript a va b ni number deb biladi
    }
    throw new Error("Raqamlar kerak");
}
```

**Array type guard**:
```typescript
function isStringArray(value: unknown): value is string[] {
    return Array.isArray(value) && value.every(item => typeof item === "string");
}

function processStrings(value: unknown): void {
    if (isStringArray(value)) {
        // Bu yerda value string[]
        console.log(value.join(", "));
    }
}
```

**Obyekt type guard**:
```typescript
interface User {
    name: string;
    age: number;
}

function isUser(value: unknown): value is User {
    return (
        typeof value === "object" &&
        value !== null &&
        "name" in value &&
        "age" in value &&
        typeof (value as any).name === "string" &&
        typeof (value as any).age === "number"
    );
}

function processUser(value: unknown): void {
    if (isUser(value)) {
        // Bu yerda value User tipida
        console.log(`${value.name} - ${value.age} yosh`);
    }
}
```

**Custom type guard**:
```typescript
type Admin = {
    role: "admin";
    permissions: string[];
};

type User = {
    role: "user";
    name: string;
};

type Account = Admin | User;

function isAdmin(account: Account): account is Admin {
    return account.role === "admin";
}

function checkAccess(account: Account): void {
    if (isAdmin(account)) {
        // Bu yerda account Admin tipida
        console.log(`Ruxsatlar: ${account.permissions.join(", ")}`);
    } else {
        // Bu yerda account User tipida
        console.log(`Foydalanuvchi: ${account.name}`);
    }
}
```

### Discriminated unions (Diskriminatsiya qilingan unionlar)

Discriminated union - bu umumiy xususiyatga ega bo'lgan union tiplar. Bu xususiyat tipni aniqlash uchun ishlatiladi.

**Asosiy tushuncha**:
```typescript
type Success = {
    status: "success";
    data: string;
};

type Error = {
    status: "error";
    message: string;
};

type Result = Success | Error;
```

**Discriminated union bilan ishlash**:
```typescript
function handleResult(result: Result): void {
    if (result.status === "success") {
        // Bu yerda result Success tipida
        console.log(`Ma'lumot: ${result.data}`);
    } else {
        // Bu yerda result Error tipida
        console.log(`Xato: ${result.message}`);
    }
}
```

**Bir nechta variantlar**:
```typescript
type Loading = {
    status: "loading";
};

type Success = {
    status: "success";
    data: any;
};

type Error = {
    status: "error";
    message: string;
};

type State = Loading | Success | Error;

function handleState(state: State): void {
    switch (state.status) {
        case "loading":
            console.log("Yuklanmoqda...");
            break;
        case "success":
            console.log(`Ma'lumot: ${state.data}`);
            break;
        case "error":
            console.log(`Xato: ${state.message}`);
            break;
    }
}
```

**Obyektlar bilan**:
```typescript
type Square = {
    kind: "square";
    size: number;
};

type Rectangle = {
    kind: "rectangle";
    width: number;
    height: number;
};

type Circle = {
    kind: "circle";
    radius: number;
};

type Shape = Square | Rectangle | Circle;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "square":
            return shape.size * shape.size;
        case "rectangle":
            return shape.width * shape.height;
        case "circle":
            return Math.PI * shape.radius * shape.radius;
    }
}
```

**API javoblarida**:
```typescript
type ApiResponse<T> =
    | { status: "success"; data: T }
    | { status: "error"; error: string }
    | { status: "loading" };

function handleResponse<T>(response: ApiResponse<T>): void {
    if (response.status === "success") {
        console.log(response.data);
    } else if (response.status === "error") {
        console.log(response.error);
    } else {
        console.log("Yuklanmoqda...");
    }
}
```

### Exhaustiveness checking (To'liqlik tekshiruvi)

Exhaustiveness checking - bu barcha variantlar qamrab olinganligini tekshirish.

**Switch case bilan**:
```typescript
type Status = "active" | "inactive" | "pending";

function handleStatus(status: Status): string {
    switch (status) {
        case "active":
            return "Faol";
        case "inactive":
            return "Nofaol";
        case "pending":
            return "Kutilmoqda";
        default:
            // Bu yerda TypeScript xatoni ko'rsatadi agar yangi variant qo'shilsa
            const _exhaustive: never = status;
            return _exhaustive;
    }
}
```

**Never tipi bilan**:
```typescript
type Square = {
    kind: "square";
    size: number;
};

type Circle = {
    kind: "circle";
    radius: number;
};

type Shape = Square | Circle;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "square":
            return shape.size * shape.size;
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        default:
            // Agar yangi shape qo'shilsa, TypeScript xatoni ko'rsatadi
            const _exhaustive: never = shape;
            throw new Error(`Kutilmagan shape: ${_exhaustive}`);
    }
}
```

**If-else bilan**:
```typescript
type Result = 
    | { type: "success"; data: string }
    | { type: "error"; message: string };

function processResult(result: Result): void {
    if (result.type === "success") {
        console.log(result.data);
    } else if (result.type === "error") {
        console.log(result.message);
    } else {
        // Exhaustiveness check
        const _exhaustive: never = result;
        return _exhaustive;
    }
}
```

**Yangi variant qo'shilganda**:
```typescript
// Agar yangi variant qo'shilsa:
type Shape = Square | Circle | Triangle; // Yangi variant

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "square":
            return shape.size * shape.size;
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        default:
            // TypeScript bu yerda xatoni ko'rsatadi
            const _exhaustive: never = shape;
            return _exhaustive;
    }
}
```

### Practical type safety patterns (Amaliy tip xavfsizlik naqshlari)

**API javoblarini qayta ishlash**:
```typescript
type ApiResponse<T> =
    | { success: true; data: T }
    | { success: false; error: string };

function handleApiResponse<T>(response: ApiResponse<T>): T {
    if (response.success) {
        return response.data;
    } else {
        throw new Error(response.error);
    }
}
```

**Form validatsiyasi**:
```typescript
type ValidationResult =
    | { valid: true; value: string }
    | { valid: false; errors: string[] };

function validateEmail(email: string): ValidationResult {
    if (email.includes("@")) {
        return { valid: true, value: email };
    } else {
        return { valid: false, errors: ["Email noto'g'ri"] };
    }
}

function processEmail(email: string): void {
    const result = validateEmail(email);
    if (result.valid) {
        console.log(`Email qabul qilindi: ${result.value}`);
    } else {
        console.log(`Xatolar: ${result.errors.join(", ")}`);
    }
}
```

**Option type pattern**:
```typescript
type Option<T> =
    | { some: true; value: T }
    | { some: false };

function getFirst<T>(items: T[]): Option<T> {
    return items.length > 0
        ? { some: true, value: items[0] }
        : { some: false };
}

function processOption<T>(option: Option<T>): void {
    if (option.some) {
        console.log(`Qiymat: ${option.value}`);
    } else {
        console.log("Qiymat yo'q");
    }
}
```

**Result type pattern**:
```typescript
type Result<T, E> =
    | { ok: true; value: T }
    | { ok: false; error: E };

function divide(a: number, b: number): Result<number, string> {
    if (b === 0) {
        return { ok: false, error: "Nolga bo'lish mumkin emas" };
    }
    return { ok: true, value: a / b };
}

function processDivision(a: number, b: number): void {
    const result = divide(a, b);
    if (result.ok) {
        console.log(`Natija: ${result.value}`);
    } else {
        console.log(`Xato: ${result.error}`);
    }
}
```

**State management pattern**:
```typescript
type LoadingState = { status: "loading" };
type SuccessState<T> = { status: "success"; data: T };
type ErrorState = { status: "error"; error: string };

type AsyncState<T> = LoadingState | SuccessState<T> | ErrorState;

function handleAsyncState<T>(state: AsyncState<T>): void {
    switch (state.status) {
        case "loading":
            console.log("Yuklanmoqda...");
            break;
        case "success":
            console.log(`Ma'lumot: ${state.data}`);
            break;
        case "error":
            console.log(`Xato: ${state.error}`);
            break;
        default:
            const _exhaustive: never = state;
            return _exhaustive;
    }
}
```

**Type guard pattern**:
```typescript
function isDefined<T>(value: T | undefined): value is T {
    return value !== undefined;
}

function processValues(values: (string | undefined)[]): void {
    const definedValues = values.filter(isDefined);
    // definedValues endi string[] tipida
    console.log(definedValues.join(", "));
}
```

### Amaliy misol

Keling, barcha o'rganganlarimizni birlashtiramiz:

```typescript
// Type guards
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function isNumber(value: unknown): value is number {
    return typeof value === "number";
}

// Discriminated union
type ApiResponse<T> =
    | { status: "success"; data: T }
    | { status: "error"; error: string }
    | { status: "loading" };

// Type narrowing funksiyasi
function processValue(value: string | number | null): void {
    if (value === null) {
        console.log("Qiymat null");
        return;
    }
    
    if (isString(value)) {
        console.log(`Matn: ${value.toUpperCase()}`);
    } else if (isNumber(value)) {
        console.log(`Raqam: ${value.toFixed(2)}`);
    }
}

// Discriminated union bilan ishlash
function handleApiResponse<T>(response: ApiResponse<T>): void {
    switch (response.status) {
        case "success":
            console.log(`Ma'lumot: ${response.data}`);
            break;
        case "error":
            console.log(`Xato: ${response.error}`);
            break;
        case "loading":
            console.log("Yuklanmoqda...");
            break;
        default:
            const _exhaustive: never = response;
            return _exhaustive;
    }
}

// Amaliy qo'llash
processValue("salom");     // Matn: SALOM
processValue(42);          // Raqam: 42.00
processValue(null);         // Qiymat null

handleApiResponse({ status: "success", data: "Ma'lumot" });
handleApiResponse({ status: "error", error: "Xato yuz berdi" });
handleApiResponse({ status: "loading" });
```

### Xulosa

Bu modulda siz:
- Type narrowing usullari bilan tanishdingiz
- Type guards bilan ishlashni o'rgandingiz
- Discriminated unions bilan tanishdingiz
- Exhaustiveness checking ni o'rgandingiz
- Amaliy tip xavfsizlik naqshlari bilan tanishdingiz

Bu TypeScript fundamentals qismining oxirgi moduli. Endi siz TypeScript ning asosiy tushunchalarini bilasiz va React da TypeScript dan foydalanishga tayyorsiz!

</details>

<hr>
