const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.82347938052611&lon=-111.79487867479025&appid=b6fb2e7380b728f8b6fe1c8def0c406e&units=imperial';
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}



function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp} &deg;F`;
    const icon = data.weather[0].icon;
    const iconsrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'weather icon');
    const desc = data.weather[0].description;
    captionDesc.textContent = `${desc}`;
    console.log(data);

}
apiFetch();