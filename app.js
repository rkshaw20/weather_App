const city_input = document.querySelector(".input");
const search = document.querySelector(".btn");

const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const feels_like = document.querySelector(".feels-like");
const cloud = document.querySelector(".cloud");
const humidity = document.querySelector(".humidity");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const wind_speed = document.querySelector(".wind-speed");
const wind_degree = document.querySelector(".wind-degree");


search.addEventListener("click", Checktemp);

function Checktemp() {
  let city_name = city_input.value;
  city.innerHTML=city_name;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "565b6b2445mshf971e85e7ced1d0p1d9e8djsna6fa43441d4a",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city_name}`,
    options
  )
    .then((response) => response.json())
    // .then(response => console.log(response.temp))
    .then((response) => {
      console.log(response);
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      cloud.innerHTML = response.cloud_pct;
      humidity.innerHTML = response.humidity;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      wind_speed.innerHTML = response.wind_speed;
      wind_degree.innerHTML = response.wind_degrees;
    })
    .catch((err) => console.error(err));
}