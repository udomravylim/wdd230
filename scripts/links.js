const baseURL = "https://udomravylim.github.io/wdd230/";
const linksURL = "https://udomravylim.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displayLinks(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getLinks();
function displayLinks(weeks) {
    let weekList = document.querySelector(".week-list");
    weeks.weeks.forEach((week) => {
        
        let listItem = document.createElement("li");
        let weekTitle = document.createElement("span");
        weekTitle.textContent = `${week.week}: `;
        listItem.appendChild(weekTitle);

        week.links.forEach((link) => {
            let linkElement = document.createElement("a");
            linkElement.textContent = link.title;
            linkElement.href = link.url;
            listItem.appendChild(linkElement);

            let separator = document.createTextNode(" | ");
            listItem.appendChild(separator);
        });

        weekList.appendChild(listItem);
    });
};
