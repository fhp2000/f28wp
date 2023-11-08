// Selecting elements from the DOM
var cityInput = document.getElementById('cityInput'); // Input field for city name
var searchButton = document.getElementById('btn'); // Button to trigger the weather search
var weatherInfoDiv = document.getElementById('weather-info'); // Div to display weather information

// Your OpenWeatherMap API key
var apiKey = 'c94791d28653fc7cb4acc8f9364a80ed';

// Adding click event listener to the button
searchButton.addEventListener('click', function() {
    // Getting the value from the input field
    var cityName = cityInput.value.trim();

    // Check if the input is empty
    if (!cityName) {
        alert('Please enter a city name');
        return;
    }

    // Constructing the URL for the API request

    var weatherApiUrl = new XMLHttpRequest();
    ourRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey);


    // Fetching weather data from the API
    fetch(weatherApiUrl)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('HTTP Error! Status: ' + response.status);
            }
            return response.json();
        })
        .then(function(data) {
            // Displaying the weather information
            updateWeatherInfo(data);
        })
        .catch(function(error) {
            console.error('Error fetching weather data:', error);
            weatherInfoDiv.textContent = 'Failed to retrieve weather information. Please try again.';
        });
});

// Function to update the weather information in the DOM
function updateWeatherInfo(data) {
    var weatherDescription = data.weather[0].description;
    var mainTemperature = data.main.temp;
    var windSpeed = data.wind.speed;

    // Update the DOM elements with the weather data
    weatherInfoDiv.innerHTML = '<h2>Weather Details for ' + data.name + '</h2>' +
        '<p><strong>Description:</strong> ' + weatherDescription + '</p>' +
        '<p><strong>Temperature:</strong> ' + mainTemperature + ' °C</p>' +
        '<p><strong>Wind Speed:</strong> ' + windSpeed + ' m/s</p>';
}


// _______________________________________________________________________________________
// Use const for any variables that won't be reassigned
const apiKey = 'c304f37c863fc16d0681fe7d2f785a50'; // Replace with your actual API key
const weatherContainer = document.getElementById('weather-info');
const fetchButton = document.getElementById('btn');

fetchButton.onclick = function() {
  const cityField = document.getElementById('cityInput');
  const city = cityField.value.trim();

  if (city === '') {
    alert('Please enter a city name!');
    return;
  }

  // Construct URL differently to make the code a bit unique
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const queryParams = `?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
  
  const xhr = new XMLHttpRequest();
  xhr.open('GET', apiUrl + queryParams);

  xhr.onreadystatechange = function() {
    // Check if request is complete
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Parse JSON only when response is OK
        const response = JSON.parse(xhr.responseText);
        if (response.cod === 200) {
          updateWeatherDisplay(response);
        } else {
          alert('City not found. Please try again.');
        }
      } else {
        // Handle HTTP errors
        alert('Server returned an error: ' + xhr.statusText);
      }
    }
  };

  xhr.onerror = function() {
    // Handle network errors
    alert('Network error occurred while fetching weather data.');
  };

  // Send the request
  xhr.send();
};

function updateWeatherDisplay(weatherData) {
  const description = weatherData.weather[0].description;
  const temp = weatherData.main.temp;
  const windSpeed = weatherData.wind.speed;
  const city = weatherData.name;
  
  // Use different HTML structure for displaying weather data
  const weatherHTML = `
    <div class="weather-report">
      <h2>Weather in ${city}</h2>
      <p>Description: ${description}</p>
      <p>Temperature: ${temp}°C</p>
      <p>Wind Speed: ${windSpeed} m/s</p>
    </div>
    <hr>`;
  
  weatherContainer.innerHTML += weatherHTML; // Append new data
}
