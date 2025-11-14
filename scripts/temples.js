// Get the navigation toggle button
const navToggle = document.getElementById('nav-toggle');

// Get the navigation menu
const navMenu = document.getElementById('nav-menu');

// Add an event listener to the navigation toggle button
navToggle.addEventListener('click', () => {
    // Toggle the display of the navigation menu
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
});

// Get the current year and update the copyright notice
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date and update the footer
const lastModifiedDate = new Date(document.lastModified);
document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate.toLocaleString()}`;
