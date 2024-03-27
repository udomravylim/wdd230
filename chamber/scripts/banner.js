const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date();
let today = days[date.getDay()];

function displayBanner() {
    const banner = document.querySelector(".banner");
    if (today === "Monday" || today === "Tuesday" || today === "Wednesday") {
        const bannerContent = document.createElement("div");
        bannerContent.classList.add("bannerContent");

        const bannerText = document.createElement("div");
        bannerText.classList.add("bannerText");
        bannerText.textContent = "Join us for the Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.! 🤝";

        const bannerClose = document.createElement("button");
        bannerClose.classList.add("bannerClose");
        bannerClose.type = "button";
        
        const bannerCloseIcon = document.createElement("span");
        bannerCloseIcon.classList.add("material-icons");
        bannerCloseIcon.textContent = "close";

        bannerClose.addEventListener("click", function() {
            banner.style.display = "none";
        });
        bannerClose.appendChild(bannerCloseIcon);
        bannerContent.appendChild(bannerText);
        bannerContent.appendChild(bannerClose);
        
        
        banner.appendChild(bannerContent);
    } else {
        banner.style.display = "none";
    }
}

// Call the function to display the banner
displayBanner();
