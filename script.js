// ============================================
// Phone Specs - قاعدة بيانات محلية
// ============================================

// 📱 قاعدة بيانات الهواتف
const PHONES_DATABASE = [
    {
        name: "iPhone 14 Pro Max",
        brand: "Apple",
        release_date: "2022",
        display_size: "6.7 بوصة",
        display_type: "Super Retina XDR OLED",
        display_resolution: "1290 × 2796 بكسل",
        rear_camera: "48 + 12 + 12 ميجابكسل",
        front_camera: "12 ميجابكسل",
        ram: "6 جيجابايت",
        storage: "128GB / 256GB / 512GB / 1TB",
        battery_capacity: "4323 mAh",
        os: "iOS 16",
        weight: "240 جرام",
        chipset: "Apple A16 Bionic",
        cpu: "Hexa-core",
        gpu: "Apple GPU (5-core)",
        colors: "أسود، فضي، ذهبي، بنفسجي",
        price: "حوالي 1100 دولار"
    },
    {
        name: "iPhone 14",
        brand: "Apple",
        release_date: "2022",
        display_size: "6.1 بوصة",
        display_type: "Super Retina XDR OLED",
        display_resolution: "1170 × 2532 بكسل",
        rear_camera: "12 + 12 ميجابكسل",
        front_camera: "12 ميجابكسل",
        ram: "6 جيجابايت",
        storage: "128GB / 256GB / 512GB",
        battery_capacity: "3279 mAh",
        os: "iOS 16",
        weight: "172 جرام",
        chipset: "Apple A15 Bionic",
        cpu: "Hexa-core",
        gpu: "Apple GPU (5-core)",
        colors: "أزرق، بنفسجي، أصفر، أسود، أبيض، أحمر",
        price: "حوالي 800 دولار"
    },
    {
        name: "iPhone 13",
        brand: "Apple",
        release_date: "2021",
        display_size: "6.1 بوصة",
        display_type: "Super Retina XDR OLED",
        display_resolution: "1170 × 2532 بكسل",
        rear_camera: "12 + 12 ميجابكسل",
        front_camera: "12 ميجابكسل",
        ram: "4 جيجابايت",
        storage: "128GB / 256GB / 512GB",
        battery_capacity: "3240 mAh",
        os: "iOS 15",
        weight: "174 جرام",
        chipset: "Apple A15 Bionic",
        cpu: "Hexa-core",
        gpu: "Apple GPU (4-core)",
        colors: "أزرق، وردي، أحمر، أسود، أبيض",
        price: "حوالي 700 دولار"
    },
    {
        name: "Samsung Galaxy S23 Ultra",
        brand: "Samsung",
        release_date: "2023",
        display_size: "6.8 بوصة",
        display_type: "Dynamic AMOLED 2X",
        display_resolution: "1440 × 3088 بكسل",
        rear_camera: "200 + 12 + 10 + 10 ميجابكسل",
        front_camera: "12 ميجابكسل",
        ram: "8GB / 12GB",
        storage: "256GB / 512GB / 1TB",
        battery_capacity: "5000 mAh",
        os: "Android 13",
        weight: "234 جرام",
        chipset: "Snapdragon 8 Gen 2",
        cpu: "Octa-core",
        gpu: "Adreno 740",
        colors: "أسود، كريمي، أخضر، بنفسجي",
        price: "حوالي 1200 دولار"
    },
    {
        name: "Samsung Galaxy S23",
        brand: "Samsung",
        release_date: "2023",
        display_size: "6.1 بوصة",
        display_type: "Dynamic AMOLED 2X",
        display_resolution: "1080 × 2340 بكسل",
        rear_camera: "50 + 12 + 10 ميجابكسل",
        front_camera: "12 ميجابكسل",
        ram: "8 جيجابايت",
        storage: "128GB / 256GB",
        battery_capacity: "3900 mAh",
        os: "Android 13",
        weight: "168 جرام",
        chipset: "Snapdragon 8 Gen 2",
        cpu: "Octa-core",
        gpu: "Adreno 740",
        colors: "أسود، كريمي، أخضر، بنفسجي",
        price: "حوالي 800 دولار"
    },
    {
        name: "Samsung Galaxy A54",
        brand: "Samsung",
        release_date: "2023",
        display_size: "6.4 بوصة",
        display_type: "Super AMOLED",
        display_resolution: "1080 × 2340 بكسل",
        rear_camera: "50 + 12 + 5 ميجابكسل",
        front_camera: "32 ميجابكسل",
        ram: "6GB / 8GB",
        storage: "128GB / 256GB",
        battery_capacity: "5000 mAh",
        os: "Android 13",
        weight: "202 جرام",
        chipset: "Exynos 1380",
        cpu: "Octa-core",
        gpu: "Mali-G68",
        colors: "أسود، أبيض، بنفسجي، أخضر",
        price: "حوالي 450 دولار"
    },
    {
        name: "Google Pixel 7 Pro",
        brand: "Google",
        release_date: "2022",
        display_size: "6.7 بوصة",
        display_type: "LTPO AMOLED",
        display_resolution: "1440 × 3120 بكسل",
        rear_camera: "50 + 12 + 48 ميجابكسل",
        front_camera: "10.8 ميجابكسل",
        ram: "12 جيجابايت",
        storage: "128GB / 256GB / 512GB",
        battery_capacity: "5000 mAh",
        os: "Android 13",
        weight: "212 جرام",
        chipset: "Google Tensor G2",
        cpu: "Octa-core",
        gpu: "Mali-G710",
        colors: "أسود، أبيض، أخضر",
        price: "حوالي 900 دولار"
    },
    {
        name: "Google Pixel 7",
        brand: "Google",
        release_date: "2022",
        display_size: "6.3 بوصة",
        display_type: "AMOLED",
        display_resolution: "1080 × 2400 بكسل",
        rear_camera: "50 + 12 ميجابكسل",
        front_camera: "10.8 ميجابكسل",
        ram: "8 جيجابايت",
        storage: "128GB / 256GB",
        battery_capacity: "4355 mAh",
        os: "Android 13",
        weight: "197 جرام",
        chipset: "Google Tensor G2",
        cpu: "Octa-core",
        gpu: "Mali-G710",
        colors: "أسود، أبيض، أخضر",
        price: "حوالي 600 دولار"
    },
    {
        name: "OnePlus 11",
        brand: "OnePlus",
        release_date: "2023",
        display_size: "6.7 بوصة",
        display_type: "LTPO3 AMOLED",
        display_resolution: "1440 × 3216 بكسل",
        rear_camera: "50 + 32 + 48 ميجابكسل",
        front_camera: "16 ميجابكسل",
        ram: "8GB / 12GB / 16GB",
        storage: "128GB / 256GB / 512GB",
        battery_capacity: "5000 mAh",
        os: "Android 13",
        weight: "205 جرام",
        chipset: "Snapdragon 8 Gen 2",
        cpu: "Octa-core",
        gpu: "Adreno 740",
        colors: "أسود، أخضر",
        price: "حوالي 700 دولار"
    },
    {
        name: "Xiaomi 13 Pro",
        brand: "Xiaomi",
        release_date: "2023",
        display_size: "6.73 بوصة",
        display_type: "LTPO AMOLED",
        display_resolution: "1440 × 3200 بكسل",
        rear_camera: "50 + 50 + 50 ميجابكسل",
        front_camera: "32 ميجابكسل",
        ram: "8GB / 12GB",
        storage: "128GB / 256GB / 512GB",
        battery_capacity: "4820 mAh",
        os: "Android 13",
        weight: "229 جرام",
        chipset: "Snapdragon 8 Gen 2",
        cpu: "Octa-core",
        gpu: "Adreno 740",
        colors: "أسود، أبيض، أزرق",
        price: "حوالي 900 دولار"
    },
    {
        name: "Huawei P60 Pro",
        brand: "Huawei",
        release_date: "2023",
        display_size: "6.67 بوصة",
        display_type: "LTPO OLED",
        display_resolution: "1220 × 2700 بكسل",
        rear_camera: "48 + 13 + 48 ميجابكسل",
        front_camera: "13 ميجابكسل",
        ram: "8GB / 12GB",
        storage: "256GB / 512GB",
        battery_capacity: "4815 mAh",
        os: "HarmonyOS 3.1",
        weight: "200 جرام",
        chipset: "Snapdragon 8+ Gen 1",
        cpu: "Octa-core",
        gpu: "Adreno 730",
        colors: "أسود، أبيض، ذهبي",
        price: "حوالي 1000 دولار"
    },
    {
        name: "Nokia G50",
        brand: "Nokia",
        release_date: "2021",
        display_size: "6.82 بوصة",
        display_type: "IPS LCD",
        display_resolution: "720 × 1560 بكسل",
        rear_camera: "48 + 5 + 2 ميجابكسل",
        front_camera: "8 ميجابكسل",
        ram: "4GB / 6GB",
        storage: "64GB / 128GB",
        battery_capacity: "5000 mAh",
        os: "Android 11",
        weight: "220 جرام",
        chipset: "Snapdragon 480 5G",
        cpu: "Octa-core",
        gpu: "Adreno 619",
        colors: "أزرق، بنفسجي",
        price: "حوالي 250 دولار"
    }
];

// ============================================
// عناصر الصفحة
// ============================================
const phoneInput = document.getElementById("phoneInput");
const searchBtn = document.getElementById("searchBtn");
const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");
const resultsEl = document.getElementById("results");

// ============================================
// قائمة المواصفات التي سنعرضها
// ============================================
const SPECS_LABELS = {
    brand: "🏢 الشركة",
    release_date: "📅 سنة الإصدار",
    display_size: "📺 حجم الشاشة",
    display_resolution: "🖼️ دقة الشاشة",
    display_type: "🎨 نوع الشاشة",
    rear_camera: "📷 الكاميرا الخلفية",
    front_camera: "🤳 الكاميرا الأمامية",
    ram: "🧠 الذاكرة العشوائية",
    storage: "💾 التخزين",
    battery_capacity: "🔋 سعة البطارية",
    os: "💻 نظام التشغيل",
    weight: "⚖️ الوزن",
    chipset: "⚙️ المعالج",
    cpu: "🖥️ المعالج المركزي",
    gpu: "🎮 كرت الرسوميات",
    colors: "🎨 الألوان المتاحة",
    price: "💰 السعر التقريبي"
};

// ============================================
// دالة البحث الرئيسية
// ============================================
function searchPhone() {
    const query = phoneInput.value.trim().toLowerCase();

    if (!query) {
        showError("⚠️ الرجاء إدخال اسم الهاتف أولاً");
        return;
    }

    hideError();
    hideResults();
    showLoading();
    searchBtn.disabled = true;

    // محاكاة تأخير بسيط (لتجربة أفضل)
    setTimeout(() => {
        // البحث في قاعدة البيانات
        const results = PHONES_DATABASE.filter(phone => {
            return phone.name.toLowerCase().includes(query) ||
                   phone.brand.toLowerCase().includes(query);
        });

        hideLoading();
        searchBtn.disabled = false;

        if (results.length === 0) {
            showError(`❌ لم يتم العثور على "${query}". جرّب: iPhone، Samsung، Google، Xiaomi...`);
            return;
        }

        displayResults(results);
    }, 300);
}

// ============================================
// عرض النتائج
// ============================================
function displayResults(phones) {
    resultsEl.innerHTML = "";

    phones.forEach((phone, index) => {
        // اسم الهاتف
        const nameEl = document.createElement("h2");
        nameEl.className = "phone-name";
        nameEl.textContent = phone.name;
        
        if (index > 0) {
            nameEl.style.marginTop = "30px";
            nameEl.style.paddingTop = "20px";
            nameEl.style.borderTop = "2px dashed #ddd";
        }
        
        resultsEl.appendChild(nameEl);

        // شبكة المواصفات
        const gridEl = document.createElement("div");
        gridEl.className = "specs-grid";

        for (const [key, label] of Object.entries(SPECS_LABELS)) {
            const value = phone[key];
            
            if (value === undefined || value === null || value === "") continue;

            const item = document.createElement("div");
            item.className = "spec-item";

            const labelEl = document.createElement("span");
            labelEl.className = "spec-label";
            labelEl.textContent = label;

            const valueEl = document.createElement("span");
            valueEl.className = "spec-value";
            valueEl.textContent = Array.isArray(value) ? value.join(", ") : value;

            item.appendChild(labelEl);
            item.appendChild(valueEl);
            gridEl.appendChild(item);
        }

        resultsEl.appendChild(gridEl);
    });

    resultsEl.classList.remove("hidden");
}

// ============================================
// دوال مساعدة
// ============================================
function showLoading() {
    loadingEl.classList.remove("hidden");
}

function hideLoading() {
    loadingEl.classList.add("hidden");
}

function showError(message) {
    errorEl.textContent = message;
    errorEl.classList.remove("hidden");
}

function hideError() {
    errorEl.classList.add("hidden");
}

function hideResults() {
    resultsEl.classList.add("hidden");
    resultsEl.innerHTML = "";
}

// ============================================
// ربط الأحداث
// ============================================
searchBtn.addEventListener("click", searchPhone);

phoneInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchPhone();
    }
});

window.addEventListener("load", () => {
    phoneInput.focus();
});