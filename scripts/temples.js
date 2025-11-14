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

// Close menu when pressing Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.focus();
        }
    }
});

// Close menu when clicking outside of it
document.addEventListener('click', (e) => {
    if (!nav.classList.contains('open')) return;
    // If the click target is not inside the nav, close
    if (!nav.contains(e.target)) {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    }
});

// Get the current year and update the copyright notice
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date and update the footer
const lastModifiedDate = new Date(document.lastModified);
document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate.toLocaleString()}`;
