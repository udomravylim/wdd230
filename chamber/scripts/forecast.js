forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=43.82347938052611&lon=-111.79487867479025&appid=b6fb2e7380b728f8b6fe1c8def0c406e&units=imperial';
const forecastTemp = document.querySelector('.weather-forecast');

async function forecastFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {
    // Clear any existing content in the forecast element
    // forecastTemp.innerHTML = '';

    // Initialize today's date
    const today = new Date();

    // Initialize an array to store the forecasts for the next three days
    const forecastsForNextThreeDays = [];

    // Array of weekday names
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Iterate through the forecasts
    data.list.forEach(forecast => {
        // Extract date from the forecast
        const forecastDate = new Date(forecast.dt_txt);

        // Check if the forecast date is within the next three days and it's a new day
        if (forecastDate >= today && forecastDate <= new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000) && forecastsForNextThreeDays.every(f => new Date(f).getDate() !== forecastDate.getDate())) {
            // Add the forecast date to the array
            forecastsForNextThreeDays.push(forecast.dt_txt);

            // Extract relevant information
            const month = forecastDate.toLocaleDateString('en-US', { month: 'short' });
            const weekday = weekdays[forecastDate.getDay()];
            const day = forecastDate.getDate();
            const year = forecastDate.getFullYear();

            // Create elements to display the forecast
            const forecastItem = document.createElement('div');
            forecastItem.classList.add('forecast-item');

            const dateTimeElement = document.createElement('p');
            dateTimeElement.textContent = `Date:  ${weekday}-${day}-${month}-${year}`;

            const temperatureElement = document.createElement('p');
            temperatureElement.textContent = `Temperature: ${forecast.main.temp}°F`;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = `Description: ${forecast.weather[0].description}`;

            const iconElement = document.createElement('img');
            const iconCode = forecast.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
            iconElement.src = iconUrl;
            iconElement.alt = forecast.weather[0].description;

            // Append elements to the forecast item
            forecastItem.appendChild(dateTimeElement);
            forecastItem.appendChild(temperatureElement);
            forecastItem.appendChild(descriptionElement);
            forecastItem.appendChild(iconElement);
           

            // Append forecast item to the forecast container
            forecastTemp.appendChild(forecastItem);
        }
    });
}

// Call forecastFetch function to fetch and display the forecast
forecastFetch();
