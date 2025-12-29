// 📚 Challenge 1: O'quvchilar natijalari
// Talabalar bu faylda o'z kodlarini yozishlari kerak

// 📋 Ma'lumotlar (berilgan)
const students = [
  { name: "Ali", score: 85 },
  { name: "Laylo", score: 55 },
  { name: "Javohir", score: 72 },
  { name: "Madina", score: 40 },
  { name: "Bobur", score: 91 },
  { name: "Zarina", score: 45 },
  { name: "Sardor", score: 78 },
  { name: "Nilufar", score: 62 }
];

// 🎯 VAZIFA 1: checkResult funksiyasini yarating
// function checkResult(score) {
//     // Bu yerda kodingizni yozing
// }

// 🎯 VAZIFA 2: Har bir o'quvchi uchun natijani ko'rsatish
// Bu yerda kodingizni yozing

// 🎯 VAZIFA 3: Faqat o'tgan o'quvchilarni alohida massivga saqlash
// Bu yerda kodingizni yozing

// 🔧 YORDAMCHI FUNKSIYALAR (o'zgartirmaslik!)
// DOM elementlariga ma'lumot qo'shish uchun
function displayStudents(studentsArray, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    studentsArray.forEach(student => {
        const result = checkResult ? checkResult(student.score) : 'Funksiya yaratilmagan';
        const isPassed = student.score >= 60;
        
        const studentCard = document.createElement('div');
        studentCard.className = `student-card ${isPassed ? 'passed' : 'failed'}`;
        
        studentCard.innerHTML = `
            <div class="student-name">${student.name}</div>
            <div class="student-score">${student.score}</div>
            <div class="student-result">${result}</div>
        `;
        
        container.appendChild(studentCard);
    });
}

// Console.log ni DOM da ko'rsatish uchun
function addToConsole(message, type = 'info') {
    const consoleDiv = document.getElementById('console-log');
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    entry.textContent = message;
    consoleDiv.appendChild(entry);
}

// Console.log ni override qilish
const originalLog = console.log;
console.log = function(...args) {
    originalLog.apply(console, args);
    addToConsole(args.join(' '), 'info');
};

// Sahifa yuklanganda boshlang'ich ma'lumotlarni ko'rsatish
document.addEventListener('DOMContentLoaded', function() {
    addToConsole('🚀 Challenge 1 boshlandi!', 'success');
    addToConsole('📝 Talabalar ma\'lumotlari yuklandi', 'info');
    
    // Boshlang'ich holatda barcha talabalarni ko'rsatish (funksiya yaratilmagan holatda)
    displayStudents(students, 'all-students');
    
    // checkResult funksiyasi yaratilgandan keyin bu qatorni ishga tushiring:
    // displayStudents(students, 'all-students');
    // displayStudents(passedStudents, 'passed-students'); // passedStudents massivini yaratganingizdan keyin
});

// 💡 ESLATMA:
// 1. checkResult funksiyasini yarating
// 2. Har bir talaba uchun console.log() qiling
// 3. O'tgan talabalar massivini yarating
// 4. displayStudents() funksiyasini chaqiring yangi ma'lumotlar bilan