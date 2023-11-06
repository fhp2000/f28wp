// Selecting elements from the DOM
const cityInput = document.getElementById('cityInput'); // Input field for city name
const searchButton = document.getElementById('btn'); // Button to trigger the weather search
const weatherInfoDiv = document.getElementById('weather-info'); // Div to display weather information

// Your OpenWeatherMap API key
const apiKey = 'c94791d28653fc7cb4acc8f9364a80ed';

// Adding click event listener to the button
searchButton.addEventListener('click', async () => {
    // Getting the value from the input field
    const cityName = cityInput.value.trim();

    // Check if the input is empty
    if (!cityName) {
        alert('Please enter a city name');
        return;
    }

    // Constructing the URL for the API request
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&units=metric&appid=${apiKey}`;

    // Fetching weather data from the API
    try {
        const response = await fetch(weatherApiUrl);

        // If the HTTP response is not ok, throw an error
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Displaying the weather information
        updateWeatherInfo(data);

    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfoDiv.textContent = 'Failed to retrieve weather information. Please try again.';
    }
});

// Function to update the weather information in the DOM
function updateWeatherInfo(data) {
    const weatherDescription = data.weather[0].description;
    const mainTemperature = data.main.temp;
    const windSpeed = data.wind.speed;

    // Update the DOM elements with the weather data
    weatherInfoDiv.innerHTML = `
        <h2>Weather Details for ${data.name}</h2>
        <p><strong>Description:</strong> ${weatherDescription}</p>
        <p><strong>Temperature:</strong> ${mainTemperature} °C</p>
        <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
    `;
}
