// Zodiac Signs Data
const zodiacSigns = [
  { name: "Меша", sanskrit: "Овен", symbol: "♈", image: "https://vedicastrology.store/wp-content/uploads/2023/02/Main-home-aries-png.png", dates: "21 марта – 19 апреля" },
  { name: "Вришабха", sanskrit: "Телец", symbol: "♉", image: "https://vedicastrology.store/wp-content/uploads/2023/02/Main-home-taurus-png.png", dates: "20 апреля – 20 мая" },
  { name: "Митхуна", sanskrit: "Близнецы", symbol: "♊", image: "https://vedicastrology.store/wp-content/uploads/2023/02/Main-home-gemini-png.png", dates: "21 мая – 20 июня" },
  { name: "Карка", sanskrit: "Рак", symbol: "♋", image: "https://vedicastrology.store/wp-content/uploads/2023/02/Main-home-cancer-png.png", dates: "21 июня – 22 июля" },
  { name: "Симха", sanskrit: "Лев", symbol: "♌", image: "https://vedicastrology.store/wp-content/uploads/2023/02/Main-home-leo-png.png", dates: "23 июля – 22 августа" },
  { name: "Канья", sanskrit: "Дева", symbol: "♍", image: "https://vedicastrology.store/wp-content/uploads/2023/02/Main-home-virgo-png.png", dates: "23 августа – 22 сентября" },
  { name: "Тула", sanskrit: "Весы", symbol: "♎", image: "https://vedicastrology.store/wp-content/uploads/2023/02/Main-home-libra-png.png", dates: "23 сентября – 22 октября" },
  { name: "Вришчика", sanskrit: "Скорпион", symbol: "♏", image: "https://vedicastrology.store/wp-content/uploads/2023/02/Main-home-scorpio-png.png", dates: "23 октября – 22 ноября" },
  { name: "Дхану", sanskrit: "Стрелец", symbol: "♐", image: "https://vedicastrology.store/wp-content/uploads/2023/02/Main-home-sagitarius-png.png", dates: "23 ноября – 21 декабря" },
  { name: "Макара", sanskrit: "Козерог", symbol: "♑", image: "https://vedicastrology.store/wp-content/uploads/2023/02/Main-home-capricorn-png.png", dates: "22 декабря – 19 января" },
  { name: "Кумбха", sanskrit: "Водолей", symbol: "♒", image: "https://vedicastrology.store/wp-content/uploads/2023/02/Main-home-aquarius-png.png", dates: "20 января – 18 февраля" },
  { name: "Мина", sanskrit: "Рыбы", symbol: "♓", image: "https://vedicastrology.store/wp-content/uploads/2023/02/Main-home-pisces-png.png", dates: "19 февраля – 20 марта" }
];


// Planets Data with SVG icons
const planets = [
    { 
        name: "Сурья", 
        translation: "Солнце", 
        description: "Душа, эго, отец",
        icon: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'
    },
    { 
        name: "Чандра", 
        translation: "Луна", 
        description: "Ум, эмоции, мать",
        icon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
    },
    { 
        name: "Мангала", 
        translation: "Марс", 
        description: "Энергия, действие, воля",
        icon: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>'
    },
    { 
        name: "Буддха", 
        translation: "Меркурий", 
        description: "Интеллект, общение",
        icon: '<path d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364"/>'
    },
    { 
        name: "Брихаспати (Гуру)", 
        translation: "Юпитер", 
        description: "Мудрость, удача, учитель",
        icon: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'
    },
    { 
        name: "Шукра", 
        translation: "Венера", 
        description: "Любовь, красота, искусство",
        icon: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>'
    },
    { 
        name: "Шани", 
        translation: "Сатурн", 
        description: "Карма, дисциплина, время",
        icon: '<circle cx="12" cy="12" r="10"/>'
    },
    { 
        name: "Раху", 
        translation: "Северный узел", 
        description: "Желания, иллюзии",
        icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
    },
    { 
        name: "Кету", 
        translation: "Южный узел", 
        description: "Освобождение, духовность",
        icon: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'
    },
    { 
        name: "Нептун", 
        translation: "Нептун", 
        description: "Духовность, интуиция, сострадание",
        icon: '<path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/><path d="M12 12v8"/><path d="M8 14l4-2 4 2"/>'
    },
    { 
        name: "Уран", 
        translation: "Уран", 
        description: "Внезапность, свобода, новаторство",
        icon: '<circle cx="12" cy="12" r="9" stroke-width="1.5"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/><circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M12 3 L15 8 L9 8 Z" fill="currentColor"/><path d="M21 12 L16 15 L16 9 Z" fill="currentColor"/><path d="M12 21 L9 16 L15 16 Z" fill="currentColor"/><path d="M3 12 L8 9 L8 15 Z" fill="currentColor"/>'
    },
    { 
        name: "Плутон", 
        translation: "Плутон", 
        description: "Трансформация, разрушение, власть",
        icon: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/><path d="M12 6v6l4 2"/>'
    }
];

// Services Data
const services = [
    {
        title: "Натальная карта",
        description: "Полный анализ вашей натальной карты с подробными предсказаниями и рекомендациями",
        icon: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'
    },
    {
        title: "Совместимость",
        description: "Анализ совместимости партнёров для гармоничных отношений",
        icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
    },
    {
        title: "Мухурта",
        description: "Выбор благоприятного времени для важных событий и начинаний",
        icon: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'
    },
    {
        title: "Прогнозы",
        description: "Периодические прогнозы и транзиты планет для планирования будущего",
        icon: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'
    }
];

// Mock cities data
const mockCities = [
    { name: "Москва", country: "Россия", display: "Москва, Москва, Россия" },
    { name: "Санкт-Петербург", country: "Россия", display: "Санкт-Петербург, Россия" },
    { name: "Новосибирск", country: "Россия", display: "Новосибирск, Новосибирская область, Россия" },
    { name: "Екатеринбург", country: "Россия", display: "Екатеринбург, Свердловская область, Россия" },
    { name: "Казань", country: "Россия", display: "Казань, Республика Татарстан, Россия" },
    { name: "Киев", country: "Украина", display: "Киев, Украина" },
    { name: "Минск", country: "Беларусь", display: "Минск, Беларусь" },
    { name: "Алматы", country: "Казахстан", display: "Алматы, Казахстан" }
];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initStars();
    initZodiacGrid();
    initPlanetsGrid();
    // initServicesGrid(); // Услуги теперь статично в HTML
    initBirthCalculator();
});

// Create animated stars
function initStars() {
    const starsContainers = document.querySelectorAll('.stars-container');
    const starCount = 50; // Меньше звезд на каждую секцию

    starsContainers.forEach(container => {
        // Create regular stars
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 3}s`;
            star.style.animationDuration = `${2 + Math.random() * 3}s`;
            container.appendChild(star);
        }
    });
}

// Initialize Zodiac Grid
function initZodiacGrid() {
    const zodiacGrid = document.getElementById('zodiacGrid');
    
    zodiacSigns.forEach(sign => {
        const card = document.createElement('div');
        card.className = 'zodiac-card';
        card.innerHTML = `
            <div class="zodiac-image-wrapper">
                <img src="${sign.image}" alt="${sign.sanskrit}" class="zodiac-image">
            </div>
            <div class="zodiac-info">
                <h3 class="zodiac-name">${sign.sanskrit.toUpperCase()} <span class="zodiac-sanskrit">(${sign.name.toUpperCase()})</span></h3>
                <p class="zodiac-dates">${sign.dates}</p>
            </div>
        `;
        zodiacGrid.appendChild(card);
    });
}

// Initialize Planets Grid
function initPlanetsGrid() {
    const planetsGrid = document.getElementById('planetsGrid');
    
    planets.forEach(planet => {
        const card = document.createElement('div');
        card.className = 'planet-card';
        card.innerHTML = `
            <div class="planet-icon-wrapper">
                <div class="planet-icon-glow"></div>
                <div class="planet-icon-circle">
                    <svg class="planet-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        ${planet.icon}
                    </svg>
                </div>
            </div>
            <div>
                <h3 class="planet-name">${planet.name}</h3>
                <p class="planet-translation">${planet.translation}</p>
                <p class="planet-description">${planet.description}</p>
            </div>
        `;
        planetsGrid.appendChild(card);
    });
}

// Initialize Services Grid
function initServicesGrid() {
    const servicesGrid = document.getElementById('servicesGrid');
    
    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <div class="service-icon-wrapper">
                <div class="service-icon-glow"></div>
                <div class="service-icon-circle">
                    <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        ${service.icon}
                    </svg>
                </div>
            </div>
            <div class="service-content">
                <h3 class="service-title">${service.title}</h3>
                <p class="service-description">${service.description}</p>
            </div>
        `;
        servicesGrid.appendChild(card);
    });
}

// Initialize Birth Calculator
function initBirthCalculator() {
    const birthDay = document.getElementById('birthDay');
    const birthMonth = document.getElementById('birthMonth');
    const birthYear = document.getElementById('birthYear');
    const birthHour = document.getElementById('birthHour');
    const birthMinute = document.getElementById('birthMinute');
    
    // Month names in Russian
    const months = [
        'Январь (1)', 'Февраль (2)', 'Март (3)', 'Апрель (4)', 'Май (5)', 'Июнь (6)',
        'Июль (7)', 'Август (8)', 'Сентябрь (9)', 'Октябрь (10)', 'Ноябрь (11)', 'Декабрь (12)'
    ];
    
    // Function to get days in month
    function getDaysInMonth(month, year) {
        if (!month || !year) return 31;
        return new Date(year, month, 0).getDate();
    }
    
    // Populate months
    months.forEach((monthName, index) => {
        const option = document.createElement('option');
        option.value = index + 1;
        option.textContent = monthName;
        if (index === 8) { // September (index 8)
            option.selected = true;
        }
        birthMonth.appendChild(option);
    });
    
    // Populate years (from 1900 to 2025)
    for (let i = 2025; i >= 1900; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        if (i === 2025) {
            option.selected = true;
        }
        birthYear.appendChild(option);
    }
    
    // Function to populate days based on selected month and year
    function populateDays() {
        const selectedMonth = parseInt(birthMonth.value) || 9; // Default September
        const selectedYear = parseInt(birthYear.value) || 2025;
        const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
        const currentDay = birthDay.value;
        
        // Add days
        for (let i = 1; i <= daysInMonth; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            if (i === 10) {
                option.selected = true;
            }
            birthDay.appendChild(option);
        }
        
        // Restore previous selection if still valid
        if (currentDay && currentDay <= daysInMonth) {
            birthDay.value = currentDay;
        }
    }
    
    // Initialize days with default values
    populateDays();
    
    // Update days when month or year changes
    birthMonth.addEventListener('change', populateDays);
    birthYear.addEventListener('change', populateDays);

    // Populate hour select
    for (let i = 0; i < 24; i++) {
        const option = document.createElement('option');
        option.value = i.toString().padStart(2, '0');
        option.textContent = i.toString().padStart(2, '0');
        birthHour.appendChild(option);
    }

    // Populate minute select
    for (let i = 0; i < 60; i++) {
        const option = document.createElement('option');
        option.value = i.toString().padStart(2, '0');
        option.textContent = i.toString().padStart(2, '0');
        birthMinute.appendChild(option);
    }

    // Time unknown button
    const timeUnknownBtn = document.getElementById('timeUnknownBtn');
    const timeInputsContainer = document.querySelector('.time-inputs');
    let timeUnknown = false;

    timeUnknownBtn.addEventListener('click', function() {
        timeUnknown = !timeUnknown;
        this.classList.toggle('active');
        
        if (timeUnknown) {
            timeInputsContainer.classList.add('disabled');
            birthHour.value = '';
            birthMinute.value = '';
        } else {
            timeInputsContainer.classList.remove('disabled');
        }
    });

    // Auto-deactivate "Не знаю" when user clicks on disabled time fields
    timeInputsContainer.addEventListener('click', function(e) {
        if (timeUnknown) {
            timeUnknown = false;
            timeUnknownBtn.classList.remove('active');
            timeInputsContainer.classList.remove('disabled');
            
            // If clicked on a select, open it
            if (e.target === birthHour || e.target === birthMinute) {
                setTimeout(() => {
                    e.target.focus();
                }, 10);
            }
        }
    });

    // City search with global API
    const birthPlace = document.getElementById('birthPlace');
    const cityResults = document.getElementById('cityResults');
    let searchTimeout;

    birthPlace.addEventListener('input', function() {
        const query = this.value.trim();
        
        // Clear previous timeout
        clearTimeout(searchTimeout);
        
        if (query.length < 2) {
            cityResults.classList.add('hidden');
            cityResults.innerHTML = '';
            return;
        }

        // Show loading state
        cityResults.innerHTML = '<div class="city-loading">Поиск городов...</div>';
        cityResults.classList.remove('hidden');

        // Debounce API call
        searchTimeout = setTimeout(() => {
            searchCities(query);
        }, 500);
    });

    async function searchCities(query) {
        try {
            // Using OpenStreetMap Nominatim API for geocoding
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?` +
                `q=${encodeURIComponent(query)}&` +
                `format=json&` +
                `addressdetails=1&` +
                `limit=10`,
                {
                    headers: {
                        'Accept-Language': 'ru'
                    }
                }
            );
            
            if (!response.ok) throw new Error('Search failed');
            
            const data = await response.json();
            
            if (data.length === 0) {
                cityResults.innerHTML = '<div class="city-no-results">Города не найдены</div>';
                return;
            }

            cityResults.innerHTML = '';
            
            data.forEach(place => {
                const item = document.createElement('button');
                item.type = 'button';
                item.className = 'city-result-item';
                
                // Format display name
                const address = place.address;
                let displayName = '';
                
                if (address.city) {
                    displayName = address.city;
                } else if (address.town) {
                    displayName = address.town;
                } else if (address.village) {
                    displayName = address.village;
                } else {
                    displayName = place.display_name.split(',')[0];
                }
                
                // Add region/country
                const parts = [];
                if (address.state) parts.push(address.state);
                if (address.country) parts.push(address.country);
                
                if (parts.length > 0) {
                    displayName += ', ' + parts.join(', ');
                }
                
                item.innerHTML = `
                    <svg class="city-result-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>${displayName}</span>
                `;
                
                item.addEventListener('click', function() {
                    birthPlace.value = displayName;
                    birthPlace.dataset.lat = place.lat;
                    birthPlace.dataset.lon = place.lon;
                    cityResults.classList.add('hidden');
                    cityResults.innerHTML = '';
                });
                
                cityResults.appendChild(item);
            });
            
        } catch (error) {
            console.error('City search error:', error);
            cityResults.innerHTML = '<div class="city-error">Ошибка поиска. Попробуйте снова.</div>';
        }
    }

    // Close city results when clicking outside
    document.addEventListener('click', function(e) {
        if (!birthPlace.contains(e.target) && !cityResults.contains(e.target)) {
            cityResults.classList.add('hidden');
        }
    });

    // Form submission
    const birthForm = document.getElementById('birthForm');
    const calculateBtn = document.getElementById('calculateBtn');

    birthForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const birthDay = document.getElementById('birthDay').value;
        const birthMonth = document.getElementById('birthMonth').value;
        const birthYear = document.getElementById('birthYear').value;
        const birthHourValue = birthHour.value;
        const birthMinuteValue = birthMinute.value;
        const birthPlaceValue = birthPlace.value;

        if (!birthDay || !birthMonth || !birthYear || !birthPlaceValue) {
            alert('Пожалуйста, заполните все обязательные поля');
            return;
        }

        // Disable button and show loading state
        calculateBtn.disabled = true;
        calculateBtn.innerHTML = `
            <span class="btn-content">
                <div class="spinner"></div>
                Расчёт...
            </span>
        `;

        // Prepare data for PHP backend
        const formData = {
            day: birthDay,
            month: birthMonth,
            year: birthYear,
            hour: timeUnknown ? null : birthHourValue,
            minute: timeUnknown ? null : birthMinuteValue,
            place: birthPlaceValue,
            timeUnknown: timeUnknown
        };

        // Send to PHP backend
        fetch('calculate.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            // Reset button
            calculateBtn.disabled = false;
            calculateBtn.innerHTML = `
                <span class="btn-content">
                    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364"/>
                    </svg>
                    Рассчитать натальную карту
                </span>
            `;

            if (data.success) {
                alert('Натальная карта рассчитана!\n\n' + JSON.stringify(data.result, null, 2));
            } else {
                alert('Ошибка: ' + data.message);
            }
        })
        .catch(error => {
            // Reset button
            calculateBtn.disabled = false;
            calculateBtn.innerHTML = `
                <span class="btn-content">
                    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364"/>
                    </svg>
                    Рассчитать натальную карту
                </span>
            `;
            alert('Произошла ошибка при отправке данных: ' + error.message);
        });
    });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Info Popup Handler
document.querySelectorAll('.info-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const popupId = this.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close popup handlers
document.querySelectorAll('.info-popup').forEach(popup => {
    // Close button
    const closeBtn = popup.querySelector('.info-popup-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            popup.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Overlay click
    const overlay = popup.querySelector('.info-popup-overlay');
    if (overlay) {
        overlay.addEventListener('click', function() {
            popup.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
});

// Close popup on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.info-popup.active').forEach(popup => {
            popup.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
});

