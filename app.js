const menuContainer = document.getElementById('menu-container');

// لیست آیتم‌های منو
const menuItems = [
    {
        id: 1,
        category: "hot",
        name: "کافه لاته ویژه",
        price: "۸۵,۰۰۰ تومان",
        description: "ترکیبی بی‌نظیر از اسپرسو تازه و شیر بخاردهی شده با فوم ابریشمی.",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
        model: "Astronaut.glb"
    },
    {
        id: 2,
        category: "hot",
        name: "اسپرسو دبل",
        price: "۶۵,۰۰۰ تومان",
        description: "قهوه خالص، غلیظ و پرانرژی با کرمای غنی و طعمی ماندگار.",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80",
        model: "Astronaut.glb"
    },
    {
        id: 3,
        category: "cold",
        name: "آیس لاته",
        price: "۹۰,۰۰۰ تومان",
        description: "ترکیب خنک و دلپذیر اسپرسو، شیر سرد و یخ، ایده‌آل برای روزهای گرم.",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
        model: "Astronaut.glb"
    },
    {
        id: 4,
        category: "dessert",
        name: "کیک شکلاتی مخصوص",
        price: "۱۱۰,۰۰۰ تومان",
        description: "کیک اسفنجی شکلاتی با لایه‌های گاناش و بافتی بسیار نرم و لذیذ.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        model: "Astronaut.glb"
    }
];

function renderMenu(filter = 'all') {
    menuContainer.innerHTML = '';

    let htmlContent = `
        <div class="filter-buttons">
            <button class="filter-btn ${filter === 'all' ? 'active' : ''}" onclick="filterCategory('all')">همه</button>
            <button class="filter-btn ${filter === 'hot' ? 'active' : ''}" onclick="filterCategory('hot')">☕ گرم</button>
            <button class="filter-btn ${filter === 'cold' ? 'active' : ''}" onclick="filterCategory('cold')">🧊 سرد</button>
            <button class="filter-btn ${filter === 'dessert' ? 'active' : ''}" onclick="filterCategory('dessert')">🍰 دسر</button>
        </div>
        <div class="items-grid">
    `;

    const filteredItems = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);

    filteredItems.forEach(item => {
        htmlContent += `
            <div class="menu-card">
                <div class="card-image-box">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="model-box">
                    <model-viewer 
                        src="${item.model}" 
                        ar 
                        ar-modes="webxr scene-viewer quick-look" 
                        camera-controls 
                        auto-rotate 
                        shadow-intensity="1">
                        <button slot="ar-button" class="custom-ar-button">
                            🚀 نمایش در محیط شما (AR)
                        </button>
                    </model-viewer>
                </div>
                <div class="card-info">
                    <h2>${item.name}</h2>
                    <div class="price">${item.price}</div>
                    <p class="desc">${item.description}</p>
                </div>
            </div>
        `;
    });

    htmlContent += `</div>`;

    htmlContent += `
        <footer class="cafe-footer">
            <div class="footer-content">
                <h3>☕ کافه لومیر | Lumiere Cafe</h3>
                <p>محیطی آرام، دنج و مدرن برای لحظات خاطر‌ه‌انگیز شما</p>
                <div class="footer-info">
                    <p>📍 آدرس: تهران، خیابان ولیعصر، نرسیده به میدان ونک</p>
                    <p>📞 تلفن سفارش و رزرو: ۰۲۱-۸۸۸۸۸۸۸۸</p>
                    <p>⏰ ساعت کاری: همه روزه از ساعت ۸:۰۰ صبح الی ۲۳:۳۰</p>
                </div>
            </div>
            <div class="footer-copy">
                <p>تمامی حقوق محفوظ است © منوی هوشمند واقعیت افزوده</p>
            </div>
        </footer>
    `;

    menuContainer.innerHTML = htmlContent;
}

window.filterCategory = function(category) {
    renderMenu(category);
};

renderMenu('all');
