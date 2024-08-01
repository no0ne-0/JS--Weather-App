console.log("hello");

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "72cbbf8ecdfd5450738b567a6b84608f";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorElement = document.querySelector(".error");
const weatherElement = document.querySelector(".weather");
const input = document.querySelector(".inputField");

async function checkWeather(city) {
 
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status === 404) {
      errorElement.style.display = "block";
      return;
    }

    const data = await response.json();
    weatherElement.style.display = "block";
    errorElement.style.display = "none";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    
    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    
   
    
  } catch (error) {
    console.log(error);
    
    
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
input.addEventListener('keydown',(event)=>{
    if (event.key === 'Enter'){
        event.preventDefault();
        checkWeather(searchBox.value);
    }
})