// ✈️ Challenge 3: DOM manipulation va Import/Export
// Talabalar bu faylda o'z kodlarini yozishlari kerak

// 🎯 VAZIFA 1: data.js faylidan trips ma'lumotlarini import qiling
// import { trips } from './data.js';

// 🎯 VAZIFA 2: Har bir sayohat uchun kartochka yaratish funksiyasi
// function createTripCard(trip) {
//     // Bu yerda kartochka yaratish kodini yozing
// }

// 🎯 VAZIFA 3: Barcha sayohatlarni DOMga qo'shish funksiyasi
// function displayTrips(tripsArray) {
//     // Bu yerda barcha kartochkalarni ko'rsatish kodini yozing
// }

// 🎯 VAZIFA 4: Arzon sayohatlarni filtrlash (1000$ dan past)
// function showCheapTrips() {
//     // Bu yerda filtrlash kodini yozing
// }

// 🎯 VAZIFA 5: Eng mashhur sayohatlar (rating 4.7+)
// function showPopularTrips() {
//     // Bu yerda rating bo'yicha filtrlash kodini yozing
// }

// 🎯 BONUS VAZIFA 1: Narx bo'yicha saralash
// function sortByPrice() {
//     // Bu yerda saralash kodini yozing
// }

// 🎯 BONUS VAZIFA 2: Eng arzon sayohatni alert orqali ko'rsatish
// function showCheapest() {
//     // Bu yerda eng arzon sayohatni topish kodini yozing
// }

// 🔧 YORDAMCHI FUNKSIYALAR (o'zgartirmaslik!)
function updateStats(tripsArray) {
    const totalTrips = tripsArray.length;
    const cheapTrips = tripsArray.filter(trip => trip.price < 1000).length;
    const avgPrice = Math.round(tripsArray.reduce((sum, trip) => sum + trip.price, 0) / totalTrips);
    const bestRating = Math.max(...tripsArray.map(trip => trip.rating));
    
    document.getElementById('total-trips').textContent = totalTrips;
    document.getElementById('cheap-count').textContent = cheapTrips;
    document.getElementById('avg-price').textContent = `$${avgPrice}`;
    document.getElementById('best-rating').textContent = bestRating;
}

function setActiveButton(activeBtn) {
    document.querySelectorAll('.control-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
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

// Error handling uchun
const originalError = console.error;
console.error = function(...args) {
    originalError.apply(console, args);
    addToConsole('❌ ' + args.join(' '), 'error');
};

// Tugmalar uchun event listenerlar
document.addEventListener('DOMContentLoaded', function() {
    addToConsole('🚀 Challenge 3 boshlandi!', 'success');
    addToConsole('📁 data.js dan ma\'lumotlarni import qiling', 'info');
    
    // Tugmalar uchun event listenerlar
    document.getElementById('all-btn').addEventListener('click', function() {
        setActiveButton(this);
        if (typeof trips !== 'undefined' && typeof displayTrips === 'function') {
            displayTrips(trips);
            updateStats(trips);
            addToConsole('🌍 Barcha sayohatlar ko\'rsatildi', 'success');
        } else {
            addToConsole('⚠️ trips import qilinmagan yoki displayTrips funksiyasi yaratilmagan', 'warning');
        }
    });
    
    document.getElementById('cheap-btn').addEventListener('click', function() {
        setActiveButton(this);
        if (typeof showCheapTrips === 'function') {
            showCheapTrips();
            addToConsole('💰 Arzon sayohatlar ko\'rsatildi', 'success');
        } else {
            addToConsole('⚠️ showCheapTrips funksiyasi yaratilmagan', 'warning');
        }
    });
    
    document.getElementById('popular-btn').addEventListener('click', function() {
        setActiveButton(this);
        if (typeof showPopularTrips === 'function') {
            showPopularTrips();
            addToConsole('⭐ Mashhur sayohatlar ko\'rsatildi', 'success');
        } else {
            addToConsole('⚠️ showPopularTrips funksiyasi yaratilmagan', 'warning');
        }
    });
    
    document.getElementById('sort-price-btn').addEventListener('click', function() {
        setActiveButton(this);
        if (typeof sortByPrice === 'function') {
            sortByPrice();
            addToConsole('📊 Narx bo\'yicha saralandi', 'success');
        } else {
            addToConsole('⚠️ sortByPrice funksiyasi yaratilmagan', 'warning');
        }
    });
    
    document.getElementById('cheapest-btn').addEventListener('click', function() {
        if (typeof showCheapest === 'function') {
            showCheapest();
            addToConsole('🏆 Eng arzon sayohat ko\'rsatildi', 'success');
        } else {
            addToConsole('⚠️ showCheapest funksiyasi yaratilmagan', 'warning');
        }
    });
    
    addToConsole('💡 Maslahat: import qilish uchun - import { trips } from \'./data.js\'', 'info');
    addToConsole('💡 Maslahat: createTripCard funksiyasida HTML yarating', 'info');
    addToConsole('💡 Maslahat: DOM elementlarga classList.add() bilan klasslar qo\'shing', 'info');
    
    // Boshlang'ich holat - agar ma'lumotlar import qilingan bo'lsa
    setTimeout(() => {
        if (typeof trips !== 'undefined') {
            if (typeof displayTrips === 'function') {
                displayTrips(trips);
                updateStats(trips);
                addToConsole('✅ Ma\'lumotlar muvaffaqiyatli yuklandi!', 'success');
            }
        } else {
            addToConsole('❌ data.js dan import qilishni unutmang!', 'error');
        }
    }, 1000);
});

// 💡 ESLATMA:
// 1. import { trips } from './data.js' ni yozing
// 2. createTripCard(trip) funksiyasini yarating
// 3. displayTrips(tripsArray) funksiyasini yarating  
// 4. Har bir kartochka uchun trip.price < 1000 bo'lsa 'cheap' klassi qo'shing
// 5. trip.rating >= 4.7 bo'lsa 'popular' klassi qo'shing
// 6. Tugmalar ishlashi uchun barcha funksiyalarni yarating