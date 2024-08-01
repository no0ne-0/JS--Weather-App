console.log(
"hello"
);
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey="72cbbf8ecdfd5450738b567a6b84608f"
const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")
async function checkweather(city) {
  try {
    const response =await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status==400) {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }let data= await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/hr";
    if (data.weather[0].main=="Clouds") {
        weatherIcon.src="images/clouds.png";
    }else if (data.weather[0].main=="Clear") {
        weatherIcon.src="images/clear.png";
    }else if (data.weather[0].main=="Rain") {
        weatherIcon.src="images/rain.png";
    }else if (data.weather[0].main=="Drizzle") {
        weatherIcon.src="images/drizzle.png";
    }else if (data.weather[0].main=="Mist") {
        weatherIcon.src="images/mist.png";
    }
    document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
  } catch (error) {
    console.log(error);
  }
}
searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})

