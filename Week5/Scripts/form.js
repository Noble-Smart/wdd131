document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
        { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 },
        { id: "el-3000", name: "Electric Hoverboard", averagerating: 4.8 },
        { id: "gt-2024", name: "Gravity Boots", averagerating: 4.6 },
        { id: "sh-2077", name: "Smart Helmet", averagerating: 4.2 },
        { id: "vt-2099", name: "Virtual Time Machine", averagerating: 4.9 },
        { id: "ae-2100", name: "AI-Powered Exosuit", averagerating: 4.3 }
    ];

    const productSelect = document.getElementById("product");

    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }
});


// Update review counter
const reviewCount = localStorage.getItem("reviewCount") || 0;
document.getElementById("review-counter").textContent = `Reviews Submitted: ${reviewCount}`;

document.getElementById("review-form").addEventListener("submit", (event) => {
    event.preventDefault();
    let count = parseInt(localStorage.getItem("reviewCount")) || 0;
    localStorage.setItem("reviewCount", count + 1);
    window.location.href = "review.html";
});

// Ensure the page has fully loaded before updating the footer
document.addEventListener("DOMContentLoaded", function () {
    // Get the current year and update the copyright notice
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Get the last modified date and update the footer
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last modified: ${new Date(lastModified).toLocaleString()}`;
});



