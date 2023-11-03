const apiKey = '0ffe8467fcd40d89e96ba7cb38406e02';

const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const weatherInfo = document.getElementById('weather-info');

searchButton.addEventListener('click', () => {
  const cityName = cityInput.value.trim();
  if (cityName === '') {
    alert('Please enter a city name.');
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const weatherDescription = data.weather[0].description;
      const mainTemperature = data.main.temp;
      const windSpeed = data.wind.speed;

      weatherInfo.innerHTML = `
        <p>Weather Description: ${weatherDescription}</p>
        <p>Temperature: ${mainTemperature} K</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
      `;
    })
    .catch((error) => {
      weatherInfo.innerHTML = `Error: ${error.message}`;
    });
});
