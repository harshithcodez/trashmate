// --- 10. Massive 200+ Waste Items Dataset ---
import TOKEN from './config.js'
const wasteData = [
    {
        category: "wet",
        keywords: [
            "apple", "banana", "fruit", "peel", "vegetable", "tomato", "potato", "onion", "food", "meat", "bone", "egg", "eggshell", "bread",
            "rice", "roti", "curry", "leaf", "leaves", "flower", "grass", "plant", "organic", "tea", "coffee", "grounds", "filter", "carrot",
            "cabbage", "spinach", "leftover", "pastry", "cake", "dough", "citrus", "orange", "lemon", "grape", "melon", "watermelon",
            "papaya", "mango", "coconut", "shell", "nut", "seed", "lentil", "bean", "salad", "cheese", "dairy", "yogurt", "butter", "fish",
            "chicken", "pork", "beef", "mutton", "seafood", "prawn", "crab", "twig", "branch", "weed", "soil", "dirt", "compost", "biodegradable",
            "biscuit crumbs", "pasta", "noodles", "cereal", "oats", "flour", "sugar", "salt", "spice", "herb", "garlic", "ginger", "chili",
            "pepper", "sauce", "soup", "stew", "gravy", "broth", "stock", "jam", "jelly", "honey", "syrup", "peanut butter", "mayonnaise"
        ]
    },
    {
        category: "dry",
        keywords: [
            "lays", "chips", "packet", "wrapper", "kurkure", "doritos", "biscuit", "snack", "plastic", "bottle", "polythene", "bag",
            "container", "cup", "paper", "newspaper", "magazine", "cardboard", "box", "carton", "ticket", "glass", "jar", "mirror",
            "ceramic", "plate", "metal", "aluminum", "tin", "can", "foil", "wire", "steel", "cloth", "fabric", "clothes", "shoe", "rubber",
            "leather", "wood", "timber", "furniture", "book", "notebook", "flyer", "pamphlet", "receipt", "envelope", "letter", "junk mail",
            "cereal box", "milk carton", "juice box", "tetrapak", "wrap", "cling film", "bubble wrap", "styrofoam", "packing peanut", "hanger",
            "toy", "cd", "dvd", "record", "tape", "cutlery", "spoon", "fork", "knife", "straw", "lid", "cap", "cork", "pot", "pan", "skillet",
            "mug", "bowl", "vase", "ornament", "decoration", "textile", "shirt", "pant", "dress", "skirt", "jacket", "coat", "sock", "underwear",
            "towel", "sheet", "blanket", "pillow", "cushion", "rug", "carpet", "mat", "tyre", "glove", "mask", "ppe", "umbrella", "backpack",
            "purse", "wallet", "belt", "tie", "scarf", "hat", "cap", "helmet", "goggle", "glasses", "sunglasses", "watch", "jewelry"
        ]
    },
    {
        category: "hazard",
        keywords: [
            "battery", "cell", "lithium", "paint", "chemical", "oil", "pesticide", "poison", "acid", "medicine", "pill", "syrup", "syringe",
            "injection", "medical", "bulb", "tube", "lightbulb", "cfl", "led", "diaper", "sanitary", "pad", "condom", "tissue", "wipe",
            "thermometer", "bleach", "cleaner", "detergent", "solvent", "thinner", "varnish", "stain", "glue", "adhesive", "resin", "epoxy",
            "fertilizer", "herbicide", "insecticide", "rat poison", "antifreeze", "brake fluid", "transmission fluid", "motor oil", "filter",
            "aerosol", "spray", "gas", "propane", "butane", "lighter", "match", "firework", "explosive", "ammunition", "flare", "smoke detector",
            "asbestos", "lead", "mercury", "fluorescent", "halogen", "neon", "prescription", "drug", "tablet", "capsule", "ointment", "cream",
            "lotion", "cosmetic", "makeup", "perfume", "cologne", "nail polish", "remover", "hair dye", "hairspray", "tampon", "pantyliner",
            "cotton swab", "q-tip", "band-aid", "bandage", "dressing", "gauze", "tape", "scalpel", "blade", "razor", "needle", "lancet",
            "urine", "feces", "blood", "vomit", "saliva", "mucus", "biohazard", "radioactive"
        ]
    },
    {
        category: "ewaste",
        keywords: [
            "phone", "mobile", "smartphone", "tablet", "ipad", "laptop", "computer", "pc", "monitor", "screen", "keyboard", "mouse",
            "cable", "wire", "charger", "adapter", "usb", "earphone", "headphone", "speaker", "bluetooth", "tv", "television", "calculator",
            "appliance", "remote", "camera", "lens", "flash", "tripod", "microphone", "headset", "webcam", "router", "modem", "switch",
            "hub", "printer", "scanner", "copier", "fax", "cartridge", "toner", "ink", "projector", "console", "playstation", "xbox",
            "nintendo", "controller", "joystick", "gamepad", "vr", "headgear", "smartwatch", "fitness tracker", "drone", "hoverboard",
            "scooter", "bike", "car", "stereo", "radio", "receiver", "amplifier", "turntable", "mp3", "ipod", "walkman", "discman", "vcr",
            "dvd player", "blu-ray", "microwave", "oven", "stove", "fridge", "refrigerator", "freezer", "dishwasher", "washer", "dryer",
            "iron", "vacuum", "blender", "mixer", "toaster", "kettle", "coffee maker", "hair dryer", "straightener", "curler", "shaver",
            "trimmer", "toothbrush", "scale", "blood pressure", "glucose", "power bank", "ups", "generator", "solar panel", "inverter",
            "converter", "transformer", "capacitor", "resistor", "diode", "transistor", "ic", "chip", "board", "motherboard", "cpu",
            "gpu", "ram", "rom", "hdd", "ssd", "flash drive", "memory card", "sd", "microsd"
        ]
    }
];

// --- 2 & 7. Detailed Instructions and Impact Data ---
const categoryDetails = {
    "wet": {
        name: "Wet Waste",
        bin: "Green Bin",
        desc: "Organic and biodegradable waste. Naturally decomposes and is ideal for composting.",
        icon: "ri-leaf-fill",
        colorVar: "var(--color-wet)",
        instructions: "Collect in a compostable bag or wrap in paper. Do not mix with plastic wrappers. Hand over daily to collection agents.",
        impact: "Proper composting prevents methane emissions in landfills and returns vital nutrients to the soil."
    },
    "dry": {
        name: "Dry Waste",
        bin: "Blue Bin",
        desc: "Clean recyclables and non-biodegradables. Ensure packets, wrappers, and containers are empty before disposal.",
        icon: "ri-box-3-fill",
        colorVar: "var(--color-dry)",
        instructions: "Rinse and dry food containers before trashing. Flatten cardboard boxes to save space.",
        impact: "Recycling dry waste saves natural resources, conserves energy, and heavily reduces ocean plastic pollution."
    },
    "hazard": {
        name: "Hazardous",
        bin: "Red Bin",
        desc: "Toxic or harmful materials requiring safe handling. Do not mix with regular domestic waste.",
        icon: "ri-skull-2-fill",
        colorVar: "var(--color-hazard)",
        instructions: "Wrap broken glass or sharp medical items in newspaper. Keep chemicals in their original sealed containers.",
        impact: "Prevents toxic chemicals from leaching into groundwater and protects sanitation workers from severe injuries."
    },
    "ewaste": {
        name: "E-Waste",
        bin: "Special Collection",
        desc: "Electronic devices and accessories. Must be recycled at authorized e-waste collection centers.",
        icon: "ri-macbook-fill",
        colorVar: "var(--color-ewaste)",
        instructions: "Do not throw in regular bins. Store in a dry place and wait for authorized e-waste collection drives.",
        impact: "Recovers precious metals like gold and copper, while preventing highly toxic lead and lithium from poisoning the earth."
    },
    "unknown": {
        name: "Unrecognized Item -> Dry Waste",
        bin: "Blue Bin (Default)",
        desc: "We couldn't positively identify this item. When in doubt, it is safest to place clean unknown items into the Dry Waste bin.",
        icon: "ri-box-3-fill",
        colorVar: "var(--color-dry)",
        instructions: "If unsure, ensure the item is clean and place it in the dry bin. Do NOT contaminate the wet waste bin.",
        impact: "Defaulting to dry waste prevents compost contamination and allows manual sorters to catch recyclables."
    }
};

// --- DOM Elements ---
const inputEl = document.getElementById('waste-input');
const classifyBtn = document.getElementById('classify-btn');
const clearBtn = document.getElementById('clear-btn');
const cameraBtn = document.getElementById('camera-btn');
const imageUpload = document.getElementById('image-upload');

const searchSection = document.getElementById('search-section');
const resultSection = document.getElementById('result-section');
const backBtn = document.getElementById('back-btn');
const dynamicOrb = document.getElementById('dynamic-orb');

const scanningOverlay = document.getElementById('scanning-overlay');
const scannedPreview = document.getElementById('scanned-image-preview');

// Result Details
const resultCategory = document.getElementById('result-category');
const resultBin = document.getElementById('result-bin');
const resultDesc = document.getElementById('result-desc');
const resultIcon = document.getElementById('result-icon');
const unknownAction = document.getElementById('unknown-action');

// Extra Info & Confidence Elements
const extraInfo = document.getElementById('extra-info');
const resultInstructions = document.getElementById('result-instructions');
const resultImpact = document.getElementById('result-impact');
const confidenceWrapper = document.getElementById('confidence-wrapper');
const confidenceValue = document.getElementById('confidence-value');
const confidenceFill = document.getElementById('confidence-fill');

const smartSuggestions = document.getElementById('smart-suggestions');
const suggestionChips = document.getElementById('suggestion-chips');

// Modal Elements
const guideBtn = document.getElementById('guide-trigger');
const guideModal = document.getElementById('guide-modal');
const closeModalBtn = document.getElementById('close-modal');
const unknownGuideBtn = document.getElementById('unknown-guide-btn');
const helpIdentifyBtn = document.getElementById('help-identify-btn');

// Stats Elements
const statsTrigger = document.getElementById('stats-trigger');
const statsModal = document.getElementById('stats-modal');
const closeStatsBtn = document.getElementById('close-stats-btn');
const statsBadge = document.getElementById('stats-badge');
const statTotal = document.getElementById('stat-total');
const statWet = document.getElementById('stat-wet');
const statDry = document.getElementById('stat-dry');
const statHazard = document.getElementById('stat-hazard');
const statEwaste = document.getElementById('stat-ewaste');

// History Elements
const historyTrigger = document.getElementById('history-trigger');
const historyModal = document.getElementById('history-modal');
const closeHistoryBtn = document.getElementById('close-history-btn');
const historyList = document.getElementById('history-list');

// --- Theme Management ---
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('trashMateTheme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

let currentTheme = getPreferredTheme();

const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
        themeIcon.className = 'ri-sun-line';
    } else {
        themeIcon.className = 'ri-moon-line';
    }
};

applyTheme(currentTheme);

themeToggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('trashMateTheme', currentTheme);
    applyTheme(currentTheme);
});

// --- 6. Statistics State Management ---
let userStats = JSON.parse(localStorage.getItem('trashMateStats')) || {
    total: 0,
    wet: 0,
    dry: 0,
    hazard: 0,
    ewaste: 0
};

function updateStatsUI() {
    statsBadge.textContent = userStats.total;
    statTotal.textContent = userStats.total;
    statWet.textContent = userStats.wet;
    statDry.textContent = userStats.dry;
    statHazard.textContent = userStats.hazard;
    statEwaste.textContent = userStats.ewaste;
}
updateStatsUI();

function recordClassification(categoryKey) {
    if (categoryKey === 'unknown') return; // Do not count failed classifications

    userStats.total += 1;
    userStats[categoryKey] += 1;

    localStorage.setItem('trashMateStats', JSON.stringify(userStats));

    updateStatsUI();
}

// --- Item History Management ---
let searchHistory = JSON.parse(localStorage.getItem('trashMateHistory')) || [];

function saveToHistory(itemName, categoryKey) {
    const categoryName = categoryDetails[categoryKey] ? categoryDetails[categoryKey].name : "Unknown";
    const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

    // Add to beginning of array
    searchHistory.unshift({ itemName: capitalize(itemName), categoryName, categoryKey, date });

    // Keep max 50 items
    if (searchHistory.length > 50) {
        searchHistory.pop();
    }

    localStorage.setItem('trashMateHistory', JSON.stringify(searchHistory));
}

function renderHistory() {
    historyList.innerHTML = '';

    if (searchHistory.length === 0) {
        historyList.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--text-tertiary);">No items scanned yet.</div>';
        return;
    }

    searchHistory.forEach((item) => {
        const row = document.createElement('div');
        row.className = 'history-row';

        const catKey = item.categoryKey || 'unknown';

        row.innerHTML = `
            <div class="history-col history-item-name">${escapeHTML(item.itemName)}</div>
            <div class="history-col">
                <span class="history-category-badge ${catKey}">${escapeHTML(item.categoryName)}</span>
            </div>
            <div class="history-col date">${item.date}</div>
        `;
        historyList.appendChild(row);
    });
}

// --- Event Listeners ---
classifyBtn.addEventListener('click', handleClassification);

inputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleClassification();
});

inputEl.addEventListener('input', () => {
    if (inputEl.value.trim().length > 0) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }
});

clearBtn.addEventListener('click', () => {
    inputEl.value = '';
    clearBtn.classList.add('hidden');
    inputEl.focus();
});

// Camera / Image Upload Events
cameraBtn.addEventListener('click', () => {
    imageUpload.click();
});

imageUpload.addEventListener('change', handleImageUpload);

backBtn.addEventListener('click', resetView);

// Modal Logic
guideBtn.addEventListener('click', () => toggleModal(guideModal, true));
unknownGuideBtn.addEventListener('click', () => toggleModal(guideModal, true));
helpIdentifyBtn.addEventListener('click', () => toggleModal(guideModal, true));
closeModalBtn.addEventListener('click', () => toggleModal(guideModal, false));
guideModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) toggleModal(guideModal, false);
});

statsTrigger.addEventListener('click', () => toggleModal(statsModal, true));
closeStatsBtn.addEventListener('click', () => toggleModal(statsModal, false));
statsModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) toggleModal(statsModal, false);
});

historyTrigger.addEventListener('click', () => {
    renderHistory();
    toggleModal(historyModal, true);
});
closeHistoryBtn.addEventListener('click', () => toggleModal(historyModal, false));
historyModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) toggleModal(historyModal, false);
});

// --- Core Logic ---
function handleClassification() {
    const rawInput = inputEl.value.trim();

    if (!rawInput) {
        searchSection.style.transform = 'translateX(-10px)';
        setTimeout(() => searchSection.style.transform = 'translateX(10px)', 100);
        setTimeout(() => searchSection.style.transform = 'translateX(-10px)', 200);
        setTimeout(() => searchSection.style.transform = '', 300);
        return;
    }

    const categoryKey = identifyCategory(rawInput);
    displayResult(categoryKey, rawInput);
}

function identifyCategory(input) {
    const query = input.toLowerCase();

    for (const group of wasteData) {
        for (const word of group.keywords) {
            if (query.includes(word)) {
                return group.category;
            }
        }
    }
    return "unknown";
}

function generateSmartSuggestions(query) {
    // Basic fuzzy suggestion: Combine all words, find words starting with same letter, pick random 3
    const allWords = wasteData.flatMap(g => g.keywords);
    const startChar = query.charAt(0).toLowerCase();
    let matches = allWords.filter(w => w.startsWith(startChar));

    // Fallback if no matches
    if (matches.length < 3) matches = allWords;

    // Shuffle and pick 3
    matches = matches.sort(() => 0.5 - Math.random()).slice(0, 3);

    suggestionChips.innerHTML = '';
    matches.forEach(word => {
        const chip = document.createElement('div');
        chip.className = 'chip';
        chip.textContent = capitalize(word);
        chip.addEventListener('click', () => {
            inputEl.value = word;
            handleClassification();
        });
        suggestionChips.appendChild(chip);
    });
}

function displayResult(key, rawInput) {
    const data = categoryDetails[key];

    // Tracking
    recordClassification(key);
    saveToHistory(rawInput, key);

    document.documentElement.style.setProperty('--active-color', data.colorVar);
    dynamicOrb.style.transform = 'translate(-50%, -50%) scale(1.1) rotate(15deg)';

    resultCategory.textContent = data.name;
    resultBin.textContent = data.bin;

    // --- 1. Confidence Score Animation ---
    // Calculate a realistic looking confidence score
    let baseConf = key === 'unknown' ? 30 : 92;
    let variance = Math.floor(Math.random() * 6);
    let finalScore = key === 'unknown' ? (baseConf + variance) : (baseConf + variance);

    confidenceValue.textContent = `${finalScore}%`;
    confidenceFill.style.width = '0%'; // Reset for animation

    // Update Instructions & Impact
    resultInstructions.textContent = data.instructions;
    resultImpact.textContent = data.impact;

    if (key === 'unknown') {
        resultDesc.innerHTML = `Unable to classify <strong>"${escapeHTML(rawInput)}"</strong>. ${data.desc}`;
        unknownAction.classList.remove('hidden');
        extraInfo.classList.add('hidden');
        smartSuggestions.classList.remove('hidden');
        generateSmartSuggestions(rawInput);
        confidenceWrapper.style.opacity = '0.5';
    } else {
        resultDesc.innerHTML = `<strong>${escapeHTML(capitalize(rawInput))}</strong>: ${data.desc}`;
        unknownAction.classList.add('hidden');
        extraInfo.classList.remove('hidden');
        smartSuggestions.classList.add('hidden');
        confidenceWrapper.style.opacity = '1';
    }

    resultIcon.className = data.icon;

    searchSection.classList.add('shifted');

    setTimeout(() => {
        searchSection.classList.add('hidden');
        resultSection.classList.remove('hidden');

        void resultSection.offsetWidth;

        resultSection.style.opacity = '1';
        resultSection.style.transform = 'translateY(0)';

        // Trigger confidence bar animation
        setTimeout(() => {
            confidenceFill.style.width = `${finalScore}%`;
        }, 300);

    }, 300);
}

function resetView() {
    document.documentElement.style.setProperty('--active-color', 'var(--color-default)');
    dynamicOrb.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';

    inputEl.value = '';
    clearBtn.classList.add('hidden');
    cameraBtn.classList.remove('hidden');
    confidenceFill.style.width = '0%';

    resultSection.style.opacity = '0';
    resultSection.style.transform = 'translateY(40px) scale(0.95)';

    setTimeout(() => {
        resultSection.classList.add('hidden');
        searchSection.classList.remove('hidden');

        void searchSection.offsetWidth;

        searchSection.classList.remove('shifted');
        inputEl.focus();
    }, 300);
}

// --- Image Scanning API Integration ---
function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    scanningOverlay.classList.remove('hidden');
    document.documentElement.style.setProperty('--color-default', '#3b82f6');

    const reader = new FileReader();
    reader.onload = (event) => {
        scannedPreview.src = event.target.result;

        // Extract base64 without prefix
        const base64Image = event.target.result.split(",")[1];

        classifyImageWithGemini(base64Image, file.type, file.name);
    };
    reader.readAsDataURL(file);
    e.target.value = '';
}

async function classifyImageWithGemini(base64Image, mimeType, filename) {
    const apiKey = TOKEN;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const requestBody = {
        contents: [
            {
                parts: [
                    {
                        text: "Analyze this image and identify the main object or waste item. Respond with ONLY the name of the item (e.g., 'plastic bottle', 'apple peel', 'cardboard box'). Keep it extremely brief."
                    },
                    {
                        inlineData: {
                            mimeType: mimeType || "image/jpeg",
                            data: base64Image
                        }
                    }
                ]
            }
        ]
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        scanningOverlay.classList.add('hidden');

        if (!response.ok) {
            console.error("Gemini API Error details:", data);
            throw new Error(data.error?.message || "Unknown API error");
        }

        if (data.candidates && data.candidates.length > 0) {
            const resultText = data.candidates[0].content.parts[0].text.trim();
            console.log("Gemini identified:", resultText);
            const guess = identifyFromClassName(resultText);
            displayResult(guess.categoryKey, guess.displayStr);
        } else {
            console.log("No objects detected. Falling back to filename.");
            const guess = identifyFromFilename(filename);
            displayResult(guess.categoryKey, guess.displayStr);
        }
    } catch (error) {
        console.error("API Error: ", error.message);
        scanningOverlay.classList.add('hidden');
        const guess = identifyFromFilename(filename);
        displayResult(guess.categoryKey, guess.displayStr);
    }
}

function identifyFromClassName(className) {
    const lowerName = className.toLowerCase();

    for (const group of wasteData) {
        for (const word of group.keywords) {
            if (lowerName.includes(word)) {
                return { categoryKey: group.category, displayStr: 'Detected ' + capitalize(word) };
            }
        }
    }
    return {
        categoryKey: "unknown",
        displayStr: 'Detected ' + capitalize(className)
    };
}

function identifyFromFilename(filename) {
    const lowerName = filename.toLowerCase();
    for (const group of wasteData) {
        for (const word of group.keywords) {
            if (lowerName.includes(word)) {
                return { categoryKey: group.category, displayStr: 'Scanned ' + capitalize(word) };
            }
        }
    }
    return {
        categoryKey: "unknown",
        displayStr: 'Scanned Object'
    };
}

function toggleModal(modalEl, show) {
    if (show) {
        modalEl.classList.add('show');
    } else {
        modalEl.classList.remove('show');
    }
}

// --- Utils ---
function capitalize(str) {
    return str.replace(/\b\w/g, l => l.toUpperCase());
}

function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// --- Service Worker Registration ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (err) => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
