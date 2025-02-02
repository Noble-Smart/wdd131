// Get the current year
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

// Get the last modified date
const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = lastModified;

// Calculate wind chill
const temperature = 28; // °C
const windSpeed = 15; // km/h

function calculateWindChill(temperature, windSpeed) {
    // Wind chill formula for temperatures <= 10°C and wind speeds > 4.8 km/h
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windchill-value").textContent = `${windChill.toFixed(2)}°C`;
} else {
    document.getElementById("windchill-value").textContent = "N/A";
}