// Get the navigation toggle button and nav container
const navToggle = document.getElementById('nav-toggle');
const nav = document.querySelector('header nav');
const navMenu = document.getElementById('nav-menu');

// Add an event listener to the navigation toggle button
navToggle.addEventListener('click', () => {
    // Toggle a class on the nav to show/hide the menu (CSS handles visibility)
    const isOpen = nav.classList.toggle('open');
    // Update the accessible state
    navToggle.setAttribute('aria-expanded', isOpen);
});

// Get the current year and update the copyright notice
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date and update the footer
const lastModifiedDate = new Date(document.lastModified);
document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate.toLocaleString()}`;
