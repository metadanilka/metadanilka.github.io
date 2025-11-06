<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Get POST data
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate input
if (!$data || !isset($data['day']) || !isset($data['month']) || !isset($data['year']) || !isset($data['place'])) {
    echo json_encode([
        'success' => false,
        'message' => 'Недостаточно данных для расчёта'
    ]);
    exit;
}

// Extract birth data
$birthDay = intval($data['day']);
$birthMonth = intval($data['month']);
$birthYear = intval($data['year']);
$birthHour = isset($data['hour']) && $data['hour'] !== null ? intval($data['hour']) : 12;
$birthMinute = isset($data['minute']) && $data['minute'] !== null ? intval($data['minute']) : 0;
$birthPlace = $data['place'];
$timeUnknown = isset($data['timeUnknown']) ? $data['timeUnknown'] : false;

// Validate date
if (!checkdate($birthMonth, $birthDay, $birthYear)) {
    echo json_encode([
        'success' => false,
        'message' => 'Неверная дата рождения'
    ]);
    exit;
}

// Create DateTime object
try {
    $birthDateTime = new DateTime("$birthYear-$birthMonth-$birthDay $birthHour:$birthMinute:00");
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Ошибка при обработке даты: ' . $e->getMessage()
    ]);
    exit;
}

// Calculate basic astrological data
$result = calculateVedicChart($birthDateTime, $birthPlace, $timeUnknown);

echo json_encode([
    'success' => true,
    'result' => $result
]);

/**
 * Calculate Vedic Astrological Chart
 * This is a simplified version - in production, you would use proper astronomical calculations
 * or integrate with a professional astrology API
 */
function calculateVedicChart($birthDateTime, $birthPlace, $timeUnknown) {
    // Get Julian Day Number for astronomical calculations
    $timestamp = $birthDateTime->getTimestamp();
    $julianDay = ($timestamp / 86400) + 2440587.5;
    
    // Calculate Sun position (simplified)
    $sunLongitude = calculateSunPosition($julianDay);
    
    // Calculate Moon position (simplified)
    $moonLongitude = calculateMoonPosition($julianDay);
    
    // Calculate Ascendant (Lagna) if time is known
    $ascendant = $timeUnknown ? null : calculateAscendant($julianDay, $birthPlace);
    
    // Determine zodiac signs
    $sunSign = getZodiacSign($sunLongitude);
    $moonSign = getZodiacSign($moonLongitude);
    $ascendantSign = $ascendant ? getZodiacSign($ascendant) : null;
    
    // Calculate Nakshatra (Lunar Mansion)
    $nakshatra = calculateNakshatra($moonLongitude);
    
    // Calculate planetary positions (simplified)
    $planets = calculatePlanetaryPositions($julianDay);
    
    return [
        'birthDate' => $birthDateTime->format('d.m.Y'),
        'birthTime' => $timeUnknown ? 'Неизвестно' : $birthDateTime->format('H:i'),
        'birthPlace' => $birthPlace,
        'sunSign' => $sunSign,
        'moonSign' => $moonSign,
        'ascendant' => $ascendantSign,
        'nakshatra' => $nakshatra,
        'planets' => $planets,
        'julianDay' => $julianDay
    ];
}

/**
 * Calculate Sun's position (simplified formula)
 * In production, use Swiss Ephemeris or similar astronomical library
 */
function calculateSunPosition($julianDay) {
    $T = ($julianDay - 2451545.0) / 36525.0;
    $L0 = 280.46646 + 36000.76983 * $T + 0.0003032 * $T * $T;
    $M = 357.52911 + 35999.05029 * $T - 0.0001537 * $T * $T;
    
    $C = (1.914602 - 0.004817 * $T - 0.000014 * $T * $T) * sin(deg2rad($M));
    $C += (0.019993 - 0.000101 * $T) * sin(deg2rad(2 * $M));
    $C += 0.000289 * sin(deg2rad(3 * $M));
    
    $sunLongitude = $L0 + $C;
    
    // Apply Ayanamsa (precession correction for Vedic astrology)
    $ayanamsa = 24.1; // Lahiri Ayanamsa for 2025 (approximate)
    $sunLongitude -= $ayanamsa;
    
    // Normalize to 0-360
    while ($sunLongitude < 0) $sunLongitude += 360;
    while ($sunLongitude >= 360) $sunLongitude -= 360;
    
    return $sunLongitude;
}

/**
 * Calculate Moon's position (simplified formula)
 */
function calculateMoonPosition($julianDay) {
    $T = ($julianDay - 2451545.0) / 36525.0;
    $L0 = 218.3164477 + 481267.88123421 * $T;
    $D = 297.8501921 + 445267.1114034 * $T;
    $M = 357.5291092 + 35999.0502909 * $T;
    $Mp = 134.9633964 + 477198.8675055 * $T;
    $F = 93.2720950 + 483202.0175233 * $T;
    
    $moonLongitude = $L0 + 6.288774 * sin(deg2rad($Mp));
    $moonLongitude += 1.274027 * sin(deg2rad(2*$D - $Mp));
    $moonLongitude += 0.658314 * sin(deg2rad(2*$D));
    
    // Apply Ayanamsa
    $ayanamsa = 24.1;
    $moonLongitude -= $ayanamsa;
    
    // Normalize
    while ($moonLongitude < 0) $moonLongitude += 360;
    while ($moonLongitude >= 360) $moonLongitude -= 360;
    
    return $moonLongitude;
}

/**
 * Calculate Ascendant (Lagna) - simplified
 * In production, this requires precise geographic coordinates and time
 */
function calculateAscendant($julianDay, $birthPlace) {
    // This is a placeholder - proper calculation requires:
    // 1. Precise geographic coordinates (latitude, longitude)
    // 2. Local Sidereal Time calculation
    // 3. House system calculations (Placidus, Equal House, etc.)
    
    // For now, return a mock value
    $T = ($julianDay - 2451545.0) / 36525.0;
    $ascendant = fmod(180.0 + 360.0 * $T, 360.0);
    
    return $ascendant;
}

/**
 * Get zodiac sign name from celestial longitude
 */
function getZodiacSign($longitude) {
    $signs = [
        'Меша (Овен)',
        'Вришабха (Телец)',
        'Митхуна (Близнецы)',
        'Карката (Рак)',
        'Симха (Лев)',
        'Канья (Дева)',
        'Тула (Весы)',
        'Вришчика (Скорпион)',
        'Дхану (Стрелец)',
        'Макара (Козерог)',
        'Кумбха (Водолей)',
        'Мина (Рыбы)'
    ];
    
    $index = floor($longitude / 30);
    return $signs[$index % 12];
}

/**
 * Calculate Nakshatra (Lunar Mansion)
 */
function calculateNakshatra($moonLongitude) {
    $nakshatras = [
        'Ашвини', 'Бхарани', 'Криттика', 'Рохини',
        'Мригашира', 'Ардра', 'Пунарвасу', 'Пушья',
        'Ашлеша', 'Магха', 'Пурва Пхалгуни', 'Уттара Пхалгуни',
        'Хаста', 'Читра', 'Свати', 'Вишакха',
        'Анурадха', 'Джьештха', 'Мула', 'Пурва Ашадха',
        'Уттара Ашадха', 'Шравана', 'Дханишта', 'Шатабхиша',
        'Пурва Бхадрапада', 'Уттара Бхадрапада', 'Ревати'
    ];
    
    // Each nakshatra spans 13°20' (13.333°)
    $index = floor($moonLongitude / 13.333333);
    return $nakshatras[$index % 27];
}

/**
 * Calculate positions of all planets (simplified)
 */
function calculatePlanetaryPositions($julianDay) {
    // This is highly simplified - in production use Swiss Ephemeris
    $T = ($julianDay - 2451545.0) / 36525.0;
    
    return [
        'Сурья (Солнце)' => getZodiacSign(calculateSunPosition($julianDay)),
        'Чандра (Луна)' => getZodiacSign(calculateMoonPosition($julianDay)),
        'Мангала (Марс)' => getZodiacSign(fmod(19.3 + 191.4 * $T, 360)),
        'Буддха (Меркурий)' => getZodiacSign(fmod(48.3 + 149.6 * $T, 360)),
        'Гуру (Юпитер)' => getZodiacSign(fmod(100.5 + 30.3 * $T, 360)),
        'Шукра (Венера)' => getZodiacSign(fmod(181.9 + 162.5 * $T, 360)),
        'Шани (Сатурн)' => getZodiacSign(fmod(320.3 + 12.2 * $T, 360))
    ];
}
?>
