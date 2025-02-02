console.log("JavaScript code running...");

// Get the current year
let currentYear = new Date().getFullYear();
console.log("Current year:", currentYear);

// Get the last modified date
let lastModifiedDate = document.lastModified;
console.log("Last modified date:", lastModifiedDate);

// Output the copyright year in the footer's first paragraph
let currentYearElement = document.getElementById("currentyear");
console.log("Current year element:", currentYearElement);
currentYearElement.textContent = currentYear;

// Output the last modified date in the second paragraph
let lastModifiedElement = document.getElementById("lastModified");
console.log("Last modified element:", lastModifiedElement);
lastModifiedElement.textContent = lastModifiedDate;