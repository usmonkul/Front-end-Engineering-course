// 🛒 Challenge 2: Array Methods (map, filter, reduce)
// Talabalar bu faylda o'z kodlarini yozishlari kerak

// 📋 Ma'lumotlar (berilgan)
const orders = [
  { id: 1, product: "MacBook Pro", price: 2500, category: "Laptop", brand: "Apple", inStock: true },
  { id: 2, product: "iPhone 15 Pro", price: 1200, category: "Telefon", brand: "Apple", inStock: true },
  { id: 3, product: "Samsung Galaxy S24", price: 900, category: "Telefon", brand: "Samsung", inStock: false },
  { id: 4, product: "Sony WH-1000XM5", price: 400, category: "Quloqchin", brand: "Sony", inStock: true },
  { id: 5, product: "Dell XPS 15", price: 1800, category: "Laptop", brand: "Dell", inStock: true },
  { id: 6, product: "AirPods Pro", price: 250, category: "Quloqchin", brand: "Apple", inStock: true },
  { id: 7, product: "Playstation 5", price: 500, category: "Gaming", brand: "Sony", inStock: false },
  { id: 8, product: "iPad Air", price: 650, category: "Planshet", brand: "Apple", inStock: true },
  { id: 9, product: "Nintendo Switch", price: 300, category: "Gaming", brand: "Nintendo", inStock: true },
  { id: 10, product: "Samsung Monitor", price: 450, category: "Monitor", brand: "Samsung", inStock: true }
];

// 🎯 VAZIFA 1: filter yordamida 500$ dan qimmat mahsulotlarni toping
// const expensiveProducts = 

// 🎯 VAZIFA 2: map bilan barcha mahsulot nomlarini katta harflarda qaytaring
// const uppercaseNames = 

// 🎯 VAZIFA 3: reduce yordamida umumiy narxni hisoblang
// const totalPrice = 

// 🎯 VAZIFA 4: filter bilan faqat stokda bor (inStock: true) mahsulotlarni ajrating
// const inStockProducts = 

// 🎯 VAZIFA 5: Apple brendidagi mahsulotlar sonini toping
// const appleProductsCount = 

// 🏆 BONUS: Eng qimmat va eng arzon mahsulotni toping
// const mostExpensive = 
// const cheapest = 

// 🔧 YORDAMCHI FUNKSIYALAR (o'zgartirmaslik!)
function displayProducts(products, containerId, highlight = '') {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        let cardClass = 'product-card';
        
        if (highlight === 'expensive' && product.price > 500) cardClass += ' expensive';
        if (highlight === 'apple' && product.brand === 'Apple') cardClass += ' apple';
        if (product.inStock) cardClass += ' in-stock';
        else cardClass += ' out-of-stock';
        
        productCard.className = cardClass;
        
        productCard.innerHTML = `
            <div class="product-name">${product.product}</div>
            <div class="product-details">
                <span class="product-price">$${product.price}</span>
                <span class="product-brand">${product.brand}</span>
            </div>
            <div class="product-category">${product.category}</div>
            <div class="stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                ${product.inStock ? '✅ Stokda bor' : '❌ Stokda yo\'q'}
            </div>
        `;
        
        container.appendChild(productCard);
    });
}

function displayProductsList(products, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    if (products && products.length > 0) {
        products.forEach(product => {
            const item = document.createElement('div');
            item.className = 'product-item';
            item.innerHTML = `${product.product} - $${product.price}`;
            container.appendChild(item);
        });
    } else {
        container.innerHTML = '<div class="product-item">Ma\'lumot topilmadi</div>';
    }
}

function displayNamesList(names, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    if (names && names.length > 0) {
        names.forEach(name => {
            const item = document.createElement('div');
            item.className = 'name-item';
            item.textContent = name;
            container.appendChild(item);
        });
    } else {
        container.innerHTML = '<div class="name-item">Ma\'lumot topilmadi</div>';
    }
}

function updateResults() {
    // Expensiveproducts ni ko'rsatish
    if (typeof expensiveProducts !== 'undefined') {
        displayProductsList(expensiveProducts, 'expensive-products');
    }
    
    // Uppercase names ni ko'rsatish
    if (typeof uppercaseNames !== 'undefined') {
        displayNamesList(uppercaseNames, 'uppercase-names');
    }
    
    // Total price ni ko'rsatish
    if (typeof totalPrice !== 'undefined') {
        document.getElementById('total-price').textContent = `$${totalPrice.toLocaleString()}`;
    }
    
    // In stock products ni ko'rsatish
    if (typeof inStockProducts !== 'undefined') {
        displayProductsList(inStockProducts, 'in-stock-products');
    }
    
    // Apple products count ni ko'rsatish
    if (typeof appleProductsCount !== 'undefined') {
        document.getElementById('apple-products').textContent = appleProductsCount;
    }
    
    // Bonus: Most expensive va cheapest
    if (typeof mostExpensive !== 'undefined') {
        document.getElementById('most-expensive').textContent = `${mostExpensive.product} - $${mostExpensive.price}`;
    }
    if (typeof cheapest !== 'undefined') {
        document.getElementById('cheapest').textContent = `${cheapest.product} - $${cheapest.price}`;
    }
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

// Sahifa yuklanganda
document.addEventListener('DOMContentLoaded', function() {
    addToConsole('🚀 Challenge 2 boshlandi!', 'success');
    addToConsole('📊 Array Methods Challenge - map, filter, reduce', 'info');
    
    // Barcha mahsulotlarni ko'rsatish
    displayProducts(orders, 'all-products');
    
    // Natijalarni yangilash (talabalar o'z kodlarini yozgandan keyin)
    // Agar o'zgaruvchilar yaratilgan bo'lsa, natijalarni ko'rsatish
    setTimeout(() => {
        updateResults();
    }, 1000);
    
    addToConsole('💡 Maslahat: Har bir vazifani bajargandan keyin console.log() qiling!', 'warning');
});

// 💡 ESLATMA:
// 1. Har bir vazifani bajargandan keyin console.log() qiling
// 2. updateResults() funksiyasini chaqiring yangi ma'lumotlarni ko'rsatish uchun
// 3. Browser Developer Tools (F12) da ham natijalarni tekshiring