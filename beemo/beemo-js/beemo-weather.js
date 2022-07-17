const API_KEY = "2f4e822eb806a0af19d5ff58bbff54ef";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperature = document.querySelector(".weather__temp");
      const weather = document.querySelector(
        ".weather__location span:last-child"
      );
      const humidity = document.querySelector(
        ".weather__details span:first-child"
      );
      const wind = document.querySelector(".weather__details span:last-child");
      const city = document.querySelector(
        ".weather__location span:first-child"
      );
      const icon = document.querySelector(".weather__info img");

      temperature.innerText = `${data.main.temp}℃`;
      weather.innerText = data.weather[0].description;
      humidity.innerText = `Humidity ${data.main.humidity}%`;
      wind.innerText = `Wind ${data.wind.speed}m/s`;
      city.innerText = `${data.name} `;
      icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
