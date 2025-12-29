// 🛍️ Challenge 4: Fetch API bilan Real Products API
// Talabalar bu faylda o'z kodlarini yozishlari kerak

// 📊 Global o'zgaruvchilar
let allProducts = [];
let displayedProducts = [];
let currentLimit = 12;

// 🎯 VAZIFA 1: Fetch API bilan ma'lumot olish
// async function fetchProducts() {
//     try {
//         // Bu yerda fetch kodini yozing
//         // URL: https://dummyjson.com/products
//     } catch (error) {
//         console.error('Xatolik:', error);
//     }
// }

// 🎯 VAZIFA 2: Mahsulot kartochkasi yaratish
// function createProductCard(product) {
//     // Bu yerda mahsulot kartochkasi HTML kodini yozing
// }

// 🎯 VAZIFA 3: Mahsulotlarni DOMga qo'shish (birinchi 12 ta)
// function displayProducts(products, limit = 12) {
//     // Bu yerda mahsulotlarni ko'rsatish kodini yozing
// }

// 🎯 VAZIFA 4: Premium mahsulotlarni filtrlash (50$ dan yuqori)
// function filterPremiumProducts() {
//     // Bu yerda premium mahsulotlarni filtrlash kodini yozing
// }

// 🎯 VAZIFA 5: Ko'proq yuklash funksiyasi
// function loadMoreProducts() {
//     // Bu yerda qo'shimcha mahsulotlarni yuklash kodini yozing
// }

// 🏆 BONUS 1: Kategoriya bo'yicha filtrlash
// function filterByCategory(category) {
//     // Bu yerda kategoriya bo'yicha filtrlash kodini yozing
// }

// 🏆 BONUS 2: Modal oyna bilan to'liq ma'lumot
// function showProductModal(product) {
//     // Bu yerda modal oynani ko'rsatish kodini yozing
// }

// 🔧 YORDAMCHI FUNKSIYALAR (o'zgartirmaslik!)
function hideLoading() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('controls').style.display = 'flex';
    document.getElementById('stats').style.display = 'grid';
}

function showLoading() {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('controls').style.display = 'none';
    document.getElementById('stats').style.display = 'none';
}

function updateStats(products) {
    const totalProducts = allProducts.length;
    const displayedCount = products.length;
    const premiumCount = products.filter(p => p.price > 50).length;
    const avgPrice = Math.round(products.reduce((sum, p) => sum + p.price, 0) / products.length);
    
    document.getElementById('total-products').textContent = totalProducts;
    document.getElementById('displayed-products').textContent = displayedCount;
    document.getElementById('premium-count').textContent = premiumCount;
    document.getElementById('avg-price').textContent = `$${avgPrice}`;
}

function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (displayedProducts.length >= allProducts.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

function clearProducts() {
    document.getElementById('products-container').innerHTML = '';
}

// Console.log ni DOM da ko'rsatish uchun
function addToConsole(message, type = 'info') {
    const consoleDiv = document.getElementById('console-log');
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    entry.textContent = message;
    consoleDiv.appendChild(entry);
    
    // Auto scroll to bottom
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
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

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    addToConsole('🚀 Challenge 4 boshlandi!', 'success');
    addToConsole('🌐 DummyJSON API dan real mahsulotlar yuklanmoqda...', 'info');
    
    // Ma'lumot yuklash tugmasi
    document.getElementById('load-btn').addEventListener('click', function() {
        if (typeof fetchProducts === 'function') {
            showLoading();
            fetchProducts();
            addToConsole('📥 Ma\'lumotlar yuklash boshlandi', 'info');
        } else {
            addToConsole('⚠️ fetchProducts funksiyasi yaratilmagan', 'warning');
        }
    });
    
    // Premium mahsulotlar filtri
    document.getElementById('filter-premium-btn').addEventListener('click', function() {
        if (typeof filterPremiumProducts === 'function') {
            filterPremiumProducts();
            addToConsole('👑 Premium mahsulotlar ko\'rsatildi', 'success');
        } else {
            addToConsole('⚠️ filterPremiumProducts funksiyasi yaratilmagan', 'warning');
        }
    });
    
    // Go'zallik kategoriyasi
    document.getElementById('filter-beauty-btn').addEventListener('click', function() {
        if (typeof filterByCategory === 'function') {
            filterByCategory('beauty');
            addToConsole('💄 Go\'zallik mahsulotlari ko\'rsatildi', 'success');
        } else {
            addToConsole('⚠️ filterByCategory funksiyasi yaratilmagan', 'warning');
        }
    });
    
    // Elektronika kategoriyasi  
    document.getElementById('filter-electronics-btn').addEventListener('click', function() {
        if (typeof filterByCategory === 'function') {
            filterByCategory('laptops');
            addToConsole('📱 Laptop mahsulotlari ko\'rsatildi', 'success');
        } else {
            addToConsole('⚠️ filterByCategory funksiyasi yaratilmagan', 'warning');
        }
    });
    
    // Ko'proq yuklash
    document.getElementById('load-more-btn').addEventListener('click', function() {
        if (typeof loadMoreProducts === 'function') {
            loadMoreProducts();
            addToConsole('➕ Ko\'proq mahsulotlar yuklandi', 'success');
        } else {
            addToConsole('⚠️ loadMoreProducts funksiyasi yaratilmagan', 'warning');
        }
    });
    
    // Qayta tiklash
    document.getElementById('reset-btn').addEventListener('click', function() {
        if (allProducts.length > 0) {
            if (typeof displayProducts === 'function') {
                displayProducts(allProducts, 12);
                currentLimit = 12;
                addToConsole('🔄 Barcha mahsulotlar qayta tiklandi', 'success');
            }
        } else {
            addToConsole('⚠️ Avval ma\'lumotlarni yuklang', 'warning');
        }
    });
    
    // Modal yopish
    document.getElementById('close-modal').addEventListener('click', function() {
        document.getElementById('product-modal').style.display = 'none';
    });
    
    // Modal tashqarisiga bosish orqali yopish
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('product-modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    addToConsole('💡 Maslahat: fetchProducts() funksiyasini yarating', 'info');
    addToConsole('💡 Maslahat: async/await yoki .then() ishlatishingiz mumkin', 'info');
    addToConsole('💡 Maslahat: API manzili - https://dummyjson.com/products', 'info');
    addToConsole('💡 Maslahat: Ma\'lumot yuklash tugmasini bosing!', 'warning');
    
    // Auto-load if function exists
    setTimeout(() => {
        if (typeof fetchProducts === 'function') {
            addToConsole('🔄 Avtomatik yuklash...', 'info');
            fetchProducts();
        }
    }, 2000);
});

// 💡 ESLATMA:
// 1. fetchProducts() - async function yarating
// 2. try/catch bilan error handling qiling  
// 3. createProductCard() - HTML string qaytarsin
// 4. displayProducts() - DOMga qo'shsin
// 5. Premium mahsulotlar uchun .premium klassi qo'shing
// 6. Modal uchun showProductModal() funksiyasini yarating
// 7. Har bir kartochkaga click event qo'shing