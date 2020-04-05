import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  let weather = store.State.weather
  console.log("THE WEATHER MAN SAYS:", weather)
  document.getElementById("weather").innerHTML = /*html*/ `
  <p>${weather.farenheit}&#176F in ${weather.city}</p>
  `
  // < img src = "http://openweathermap.org/img/w/${weather.icon}.png" alt = "Weather Icon" >
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }
}
