// Widget Controllers for Interactive Elements

// ===== BRAKING DISTANCE CALCULATOR =====
function initBrakingCalculator() {
    return `
        <div class="widget" id="brakingWidget">
            <div class="widget-title">Calculadora de Distancia de Frenado</div>
            <div class="calculator-input">
                <label for="speedInput">Velocidad (km/h):</label>
                <input type="number" id="speedInput" min="0" max="200" value="60" step="5">
            </div>
            <div class="calculator-result" id="calculatorResult">
                <!-- Results will be injected here -->
            </div>
        </div>
    `;
}

function calculateBraking() {
    const speed = parseFloat(document.getElementById('speedInput').value) || 0;
    const speedMs = speed / 3.6; // Convert km/h to m/s

    // Human reaction time: ~1.5 seconds (conservative)
    const reactionTime = 1.5;
    const reactionDistance = speedMs * reactionTime;

    // Braking distance formula: d = v² / (2 * μ * g)
    // μ (friction coefficient) ≈ 0.7 for dry asphalt
    // g = 9.8 m/s²
    const mu = 0.7;
    const g = 9.8;
    const brakingDistance = (speedMs * speedMs) / (2 * mu * g);

    const totalDistance = reactionDistance + brakingDistance;

    const resultHTML = `
        <div class="result-item">
            <span>Distancia de Reacción:</span>
            <strong>${reactionDistance.toFixed(1)} metros</strong>
        </div>
        <div class="result-item">
            <span>Distancia de Frenado:</span>
            <strong>${brakingDistance.toFixed(1)} metros</strong>
        </div>
        <div class="result-item">
            <span>DISTANCIA TOTAL:</span>
            <strong>${totalDistance.toFixed(1)} metros</strong>
        </div>
    `;

    document.getElementById('calculatorResult').innerHTML = resultHTML;
}

// ===== BLIND SPOTS MAP =====
function initBlindSpots() {
    return `
        <div class="widget" id="blindSpotsWidget">
            <div class="widget-title">Zonas No Visibles del Camión</div>
            <p style="margin-bottom: 20px;">Haz clic en cada zona roja para ver información detallada.</p>
            <div class="truck-container">
                <svg viewBox="0 0 600 400" style="width: 100%; max-width: 600px; margin: 0 auto; display: block;">
                    <!-- Truck body -->
                    <rect x="200" y="150" width="200" height="100" fill="#444" stroke="#FFD700" stroke-width="3"/>
                    <text x="300" y="205" text-anchor="middle" fill="#FFD700" font-size="20" font-weight="bold">CAMIÓN</text>
                    
                    <!-- Blind spot zones -->
                    <!-- Front zone -->
                    <rect class="blind-zone" data-zone="front" x="130" y="150" width="70" height="100" fill="rgba(255,68,68,0.4)" stroke="#FF4444" stroke-width="2"/>
                    
                    <!-- Right zone -->
                    <rect class="blind-zone" data-zone="right" x="400" y="120" width="80" height="160" fill="rgba(255,68,68,0.4)" stroke="#FF4444" stroke-width="2"/>
                    
                    <!-- Left zone -->
                    <rect class="blind-zone" data-zone="left" x="120" y="120" width="80" height="30" fill="rgba(255,68,68,0.4)" stroke="#FF4444" stroke-width="2"/>
                    <rect class="blind-zone" data-zone="left-2" x="120" y="250" width="80" height="30" fill="rgba(255,68,68,0.4)" stroke="#FF4444" stroke-width="2"/>
                    
                    <!-- Rear zone -->
                    <rect class="blind-zone" data-zone="rear" x="400" y="150" width="100" height="100" fill="rgba(255,68,68,0.4)" stroke="#FF4444" stroke-width="2"/>
                    
                    <!-- Zone labels -->
                    <text x="165" y="200" text-anchor="middle" fill="#FFF" font-size="12">FRENTE</text>
                    <text x="440" y="135" text-anchor="middle" fill="#FFF" font-size="12">DERECHA</text>
                    <text x="160" y="138" text-anchor="middle" fill="#FFF" font-size="12">IZQ</text>
                    <text x="450" y="205" text-anchor="middle" fill="#FFF" font-size="12">ATRÁS</text>
                </svg>
            </div>
            <div id="zoneInfo" class="alert alert-warning" style="margin-top: 20px; display: none;">
                <!-- Zone info will appear here -->
            </div>
        </div>
    `;
}

function setupBlindSpotsInteraction() {
    const zones = document.querySelectorAll('.blind-zone');
    const zoneInfo = document.getElementById('zoneInfo');

    const zoneData = {
        front: {
            title: 'Zona Frontal',
            description: 'El conductor no puede ver hasta 6 metros adelante. Nunca te detengas pegado al frente de un camión.'
        },
        right: {
            title: 'Zona Lateral Derecha',
            description: 'La zona más peligrosa. El conductor NO te ve en todo el lateral derecho. Peligro crítico en giros a la derecha (Off-Tracking).'
        },
        left: {
            title: 'Zona Lateral Izquierda',
            description: 'Banda ciega del lado del conductor. Aunque hay espejo, hay ángulos que no se ven.'
        },
        'left-2': {
            title: 'Zona Lateral Izquierda',
            description: 'Banda ciega del lado del conductor. Aunque hay espejo, hay ángulos que no se ven.'
        },
        rear: {
            title: 'Zona Trasera',
            description: 'Hasta 30 metros detrás del camión son invisibles. El conductor solo ve con espejos retrovisores externos.'
        }
    };

    zones.forEach(zone => {
        zone.style.cursor = 'pointer';
        zone.addEventListener('click', function () {
            const zoneName = this.getAttribute('data-zone');
            const data = zoneData[zoneName];

            zoneInfo.innerHTML = `<strong>${data.title}</strong><br>${data.description}`;
            zoneInfo.style.display = 'block';

            // Highlight selected zone
            zones.forEach(z => z.style.opacity = '0.4');
            this.style.opacity = '1';
        });
    });
}

// ===== IMPACT SLIDER =====
function initImpactSlider() {
    return `
        <div class="widget" id="impactWidget">
            <div class="widget-title">Comparador de Energía de Impacto</div>
            <div class="impact-slider">
                <label for="impactSpeed">Velocidad: <strong><span id="speedDisplay">60</span> km/h</strong></label>
                <input type="range" id="impactSpeed" class="slider" min="0" max="120" value="60" step="5">
            </div>
            <div class="impact-display" id="impactDisplay">
                <!-- Impact data will be displayed here -->
            </div>
        </div>
    `;
}

function calculateImpact() {
    const speed = parseFloat(document.getElementById('impactSpeed').value);
    document.getElementById('speedDisplay').textContent = speed;

    // Energy is proportional to v²
    const energyMultiplier = (speed / 10) * (speed / 10);

    // Equivalent fall height (approximate): E = mgh -> h = v²/(2g)
    const speedMs = speed / 3.6;
    const g = 9.8;
    const fallHeight = (speedMs * speedMs) / (2 * g);
    const floors = Math.round(fallHeight / 3); // Approx 3m per floor

    let damageLevel = '';
    let damageColor = '';

    if (speed < 20) {
        damageLevel = 'Lesiones Leves';
        damageColor = '#00CC66';
    } else if (speed < 40) {
        damageLevel = 'Lesiones Moderadas';
        damageColor = '#FFCC00';
    } else if (speed < 60) {
        damageLevel = 'Lesiones Graves';
        damageColor = '#FF8800';
    } else {
        damageLevel = 'Riesgo Mortal';
        damageColor = '#FF4444';
    }

    const displayHTML = `
        <div class="impact-stat">
            <span class="impact-stat-value">${energyMultiplier.toFixed(1)}x</span>
            <span class="impact-stat-label">Energía Relativa</span>
        </div>
        <div class="impact-stat">
            <span class="impact-stat-value">${floors}</span>
            <span class="impact-stat-label">Pisos de Altura</span>
        </div>
        <div class="alert" style="background-color: ${damageColor}22; border-left-color: ${damageColor}; margin-top: 20px;">
            <strong style="color: ${damageColor};">PRECAUCIÓN: ${damageLevel}</strong><br>
            Un impacto a ${speed} km/h equivale a caer desde ${fallHeight.toFixed(1)} metros (aprox. ${floors} pisos).
        </div>
    `;

    document.getElementById('impactDisplay').innerHTML = displayHTML;
}

// ===== BRAKE SYSTEM COMPARISON =====
function initBrakeComparison() {
    return `
        <div class="widget" id="brakeWidget">
            <div class="widget-title">Comparativa: ABS vs CBS</div>
            <div class="brake-toggle">
                <div class="brake-option active" data-system="abs">
                    <strong>ABS</strong><br>
                    <small>Antibloqueo</small>
                </div>
                <div class="brake-option" data-system="cbs">
                    <strong>CBS</strong><br>
                    <small>Combinado</small>
                </div>
            </div>
            <div class="brake-info" id="brakeInfo">
                <!-- System info will be displayed here -->
            </div>
        </div>
    `;
}

function setupBrakeComparison() {
    const options = document.querySelectorAll('.brake-option');
    const brakeInfo = document.getElementById('brakeInfo');

    const systemData = {
        abs: {
            title: 'ABS (Sistema Antibloqueo de Frenos)',
            description: `
                <p><strong>Funcionamiento:</strong> Sensores detectan cuando una rueda está a punto de bloquearse. El sistema libera y aplica el freno rápidamente (hasta 15 veces por segundo), evitando el deslizamiento.</p>
                <p><strong>✅ Ventajas:</strong></p>
                <ul>
                    <li>Mantienes el control direccional durante frenado de emergencia</li>
                    <li>Puedes frenar Y esquivar simultáneamente</li>
                    <li>Reduce riesgo de caída por bloqueo de rueda delantera</li>
                </ul>
                <p><strong>❌ Limitaciones:</strong></p>
                <ul>
                    <li>Distancia de frenado puede ser mayor en superficies sueltas (arena, ripio)</li>
                    <li>No funciona a velocidades muy bajas (&lt;10 km/h)</li>
                </ul>
            `
        },
        cbs: {
            title: 'CBS (Sistema de Frenado Combinado)',
            description: `
                <p><strong>Funcionamiento:</strong> Al accionar uno de los frenos (delantero o trasero), el sistema distribuye automáticamente la fuerza de frenado a ambas ruedas.</p>
                <p><strong>✅ Ventajas:</strong></p>
                <ul>
                    <li>Frenado equilibrado sin necesidad de técnica avanzada</li>
                    <li>Reduce riesgo de volcado por frenado trasero excesivo</li>
                    <li>Ideal para conductores principiantes</li>
                </ul>
                <p><strong>❌ Limitaciones:</strong></p>
                <ul>
                    <li>Menor sensibilidad para maniobras técnicas (off-road, conducción deportiva)</li>
                    <li>No evita el bloqueo de ruedas (a menos que tenga ABS integrado)</li>
                </ul>
            `
        }
    };

    options.forEach(option => {
        option.addEventListener('click', function () {
            options.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');

            const system = this.getAttribute('data-system');
            const data = systemData[system];

            brakeInfo.innerHTML = `<h4 style="color: #FFCC00; margin-bottom: 10px;">${data.title}</h4>${data.description}`;
        });
    });

    // Initialize with ABS
    brakeInfo.innerHTML = `<h4 style="color: #FFCC00; margin-bottom: 10px;">${systemData.abs.title}</h4>${systemData.abs.description}`;
}

// ===== WEATHER CAROUSEL =====
function initWeatherCarousel() {
    const weatherConditions = [
        {
            icon: '🌧️',
            title: 'Lluvia',
            tips: [
                'Reduce velocidad 20-30%',
                'Aumenta distancia de seguridad al doble',
                'Evita charcos (aquaplaning)',
                'No frenes ni gires sobre pintura blanca mojada'
            ]
        },
        {
            icon: '💨',
            title: 'Viento Fuerte',
            tips: [
                'Sujeta firmemente el manubrio',
                'Anticipa el efecto Venturi cerca de camiones',
                'Reduce velocidad en puentes y zonas abiertas',
                'Inclina el cuerpo contra el viento'
            ]
        },
        {
            icon: '🌃',
            title: 'Noche',
            tips: [
                'Usa luces bajas en ciudad, altas en ruta',
                'Reduce velocidad (campo visual limitado)',
                'Si te encandilan, mira al borde derecho',
                'Verifica que tus luces funcionen antes de salir'
            ]
        },
        {
            icon: '🌫️',
            title: 'Niebla',
            tips: [
                'Usa luces bajas (las altas rebotan y enceguecen)',
                'Reduce velocidad drásticamente',
                'Usa referencias laterales (líneas demarcatorias)',
                'Si no ves nada, detente fuera de la calzada'
            ]
        },
        {
            icon: '❄️',
            title: 'Frío Extremo',
            tips: [
                'Viste en capas (sistema "cebolla")',
                'Calienta las manos antes de salir',
                'Atenció a placas de hielo en puentes',
                'Considera reprogramar viaje si hay riesgo de hipotermia'
            ]
        }
    ];

    const carouselHTML = weatherConditions.map((condition, index) => `
        <div class="carousel-item" style="${index === 0 ? '' : 'display: none;'}">
            <h3 style="color: #FFCC00; text-align: center; margin-bottom: 20px;">${condition.title}</h3>
            <ul style="font-size: 1.125rem;">
                ${condition.tips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    return `
        <div class="widget" id="weatherWidget">
            <div class="widget-title">Consejos por Condición Climática</div>
            <div class="weather-carousel" id="weatherCarousel">
                ${carouselHTML}
            </div>
            <div class="carousel-controls">
                <button class="carousel-btn" id="prevWeather">◀ Anterior</button>
                <span id="weatherCounter" style="color: #FFCC00; font-weight: 600;">1 / ${weatherConditions.length}</span>
                <button class="carousel-btn" id="nextWeather">Siguiente ▶</button>
            </div>
        </div>
    `;
}

function setupWeatherCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prevWeather');
    const nextBtn = document.getElementById('nextWeather');
    const counter = document.getElementById('weatherCounter');

    let currentIndex = 0;

    function showSlide(index) {
        items.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });
        counter.textContent = `${index + 1} / ${items.length}`;

        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === items.length - 1;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showSlide(currentIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            showSlide(currentIndex);
        }
    });

    showSlide(0);
}

// ===== WIDGET MANAGER =====
window.WIDGETS = {
    brakingCalculator: {
        init: initBrakingCalculator,
        setup: () => {
            document.getElementById('speedInput').addEventListener('input', calculateBraking);
            calculateBraking(); // Initial calculation
        }
    },
    blindSpots: {
        init: initBlindSpots,
        setup: setupBlindSpotsInteraction
    },
    impactSlider: {
        init: initImpactSlider,
        setup: () => {
            document.getElementById('impactSpeed').addEventListener('input', calculateImpact);
            calculateImpact(); // Initial calculation
        }
    },
    brakeComparison: {
        init: initBrakeComparison,
        setup: setupBrakeComparison
    },
    weatherCarousel: {
        init: initWeatherCarousel,
        setup: setupWeatherCarousel
    }
};
