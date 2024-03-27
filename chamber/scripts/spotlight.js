const url = "./data/members.json";

async function getSpotlight() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displaySpotlight(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displaySpotlight(data) {
  const spotlightAds = document.querySelector(".spotlightAds");

  // Filter companies with membership level Gold or Silver
  const eligibleCompanies = data.companies.filter(
    (company) =>
      company.membership_level === "Gold" ||
      company.membership_level === "Silver"
  );

  // Shuffle the eligible companies array
  shuffle(eligibleCompanies);

  // Select the first three companies
  const selectedCompanies = eligibleCompanies.slice(0, 3);

  // Create and append elements for each selected company
  selectedCompanies.forEach((company) => {
    const section = document.createElement("section");
    section.classList.add('company-section');
    const image = document.createElement("img");
    image.setAttribute("src", company.image.hyperlink);
    image.setAttribute("alt", company.image.filename);

    const name = document.createElement("h4");
    name.textContent = company.name;

    const address = document.createElement("p");
    address.textContent = company.address;

    const phone = document.createElement("p");
    phone.textContent = company.phone;

    const membershipLevel = document.createElement("p");
    membershipLevel.textContent =
      "Membership Level: " + company.membership_level;

    const websiteUrl = document.createElement("a");
    websiteUrl.setAttribute("href", company.website);
    websiteUrl.textContent = company.website;

    section.appendChild(image);
    section.appendChild(membershipLevel);
    section.appendChild(name);
    section.appendChild(address);
    section.appendChild(phone);
    section.appendChild(websiteUrl);

    spotlightAds.appendChild(section);
  });
}

// Shuffle function to randomly shuffle array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

getSpotlight();
