// Create current year, name and country
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

// let copyrightParagraph = document.querySelector("#copyright");
let copyrightParagraph = document.getElementById("copyright");

/* we can also do: copyrightParagraph.innerHTML = `&copy;${currentYear} 💕 Ravy Lim 💕 Cambodia`
Because &copy; is the HTML unity, so we use .innerHTMl instead of .textContent */
copyrightParagraph.textContent += `${currentYear} 💕 Ravy Lim 💕 Cambodia`;

//Create lastModified by using lastModified property in JS
const lastModified = document.lastModified;
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = `Last Modified: ${lastModified}`;
