var cityInput = document.getElementById('cityInput'); // Input field for city name
var searchButton = document.getElementById('btn'); // Button to trigger the weather search
var weatherInfoDiv = document.getElementById('weather-info'); // Div to display weather information

// OpenWeatherMap API key
var apiKey = '9b6ec03bd86274910a36c1301cb27dd8';

// Adding an event listener to the button
searchButton.addEventListener('click', function() {
    // Getting the value from the input field
    var cityName = cityInput.value.trim();

    // Check if the input is empty
    if (!cityName) {
        alert('Please enter a city name');
        return;
    }
 
    var weatherApiUrl = new XMLHttpRequest();
    ourRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`' + city + '&units=metric&appid=' + apiKey);


//     // Fetching weather data from the API
//     fetch(weatherApiUrl)
//         .then(function(response) {
//             if (!response) {
//                 throw new Error(' Error! Status: ' + response.status);
//             }
//             return response.json();
//         })
//         .then(function(data) {
//             // Displaying the weather information
//             updateWeatherInfo(data);
//         })
//         .catch(function(error) {
//             console.error('Error fetching weather data:', error);
//             weatherInfoDiv.textContent = 'Failed to retrieve weather information. Please try again.';
//         });
// });

// // Function to update the weather information in the DOM
// function updateWeatherInfo(data) {
//     var weatherDescription = data.weather[0].description;
//     var mainTemperature = data.main.temp;
//     var windSpeed = data.wind.speed;

//     // Update the DOM elements with the weather data
//     weatherInfoDiv.innerHTML = '<h2>Weather Details for ' + data.name + '</h2>' +
//         '<p><strong>Description:</strong> ' + weatherDescription + '</p>' +
//         '<p><strong>Temperature:</strong> ' + mainTemperature + ' °C</p>' +
//         '<p><strong>Wind Speed:</strong> ' + windSpeed + ' m/s</p>';
// }

});