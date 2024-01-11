var currentDate = new Date();
var currentYear = currentDate.getFullYear();

var copyrightParagraph = document.getElementById("copyright");
copyrightParagraph.textContent += `${currentYear} 💕 Ravy Lim 💕 Cambodia`;
var lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;

