const url = './data/members.json';

async function getDirectory() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayDirectory(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getDirectory()

function displayDirectory(data){
    const article = document.querySelector('.grid');

    for (const company of data.companies) {
        const section = document.createElement('section');
        
        const image = document.createElement('img');
        image.setAttribute('src', company.image.hyperlink);
        image.setAttribute('alt', company.image.filename);

        const name = document.createElement('h4');
        name.textContent = company.name;

        const address = document.createElement('p');
        address.textContent = company.address;

        const phone = document.createElement('p');
        phone.textContent = company.phone;

        const websiteUrl = document.createElement('a');
        websiteUrl.setAttribute('href', company.website);
        websiteUrl.textContent = company.website;

        // const membershipLevel = document.createElement('p');
        // membershipLevel.textContent = company.membership_level;

        section.appendChild(image);
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(websiteUrl);
        // section.appendChild(membershipLevel);
        article.appendChild(section);
}
}