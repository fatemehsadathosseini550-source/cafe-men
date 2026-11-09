const menuItems = [
    {
        id: 1,
        category: "hot",
        name: "کافه لاته ویژه",
        price: "۸۵,۰۰۰ تومان",
        description: "ترکیبی بی‌نظیر از دبل شات اسپرسو و شیر مخملی شده با طراحی ویژه باریستا.",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb"
    },
    {
        id: 2,
        category: "hot",
        name: "اسپرسو دوبل",
        price: "۶۵,۰۰۰ تومان",
        description: "عصاره‌گیری استاندارد با کرمای غلیظ فندقی و طعم‌یاد شکلات تلخ.",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb"
    },
    {
        id: 3,
        category: "cold",
        name: "آیس کارامل ماکیاتو",
        price: "۹۰,۰۰۰ تومان",
        description: "لایه‌های شیر خنک، وانیل و اسپرسو همراه با سس کارامل دست‌ساز.",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb"
    },
    {
        id: 4,
        category: "dessert",
        name: "کیک فاج شکلاتی",
        price: "۱۱۰,۰۰۰ تومان",
        description: "کیک اسفنجی خیس شکلاتی با لایه‌های متراکم گاناش ۷۰٪ تلخ.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb"
    }
];

function renderMenu(filter = 'all') {
    const container = document.getElementById('menuContainer');
    container.innerHTML = '';

    const filtered = filter === 'all' ? menuItems : menuItems.filter(i => i.category === filter);

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-img">
            <div class="menu-info">
                <h3>${item.name}</h3>
                <p class="price">${item.price}</p>
                <p class="desc">${item.description}</p>
                <model-viewer src="${item.model}" ar ar-modes="webxr scene-viewer quick-look" camera-controls auto-rotate shadow-intensity="1" style="width: 100%; height: 180px; margin-top: 10px;"></model-viewer>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterMenu(category) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    renderMenu(category);
}

// لاول اولیه منو
renderMenu('all');
