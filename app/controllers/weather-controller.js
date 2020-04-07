import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function _drawFaren() {
  let weather = store.State.weather
  console.log("THE WEATHER MAN SAYS:", weather)
  document.getElementById("weather").innerHTML = /*html*/ `
  <p onclick="app.weatherController.drawCelc()">${weather.farenheit}&#176F in ${weather.city}</p>
  `
  // < img src = "http://openweathermap.org/img/w/${weather.icon}.png" alt = "Weather Icon" >
}
function _drawCelc() {
  let weather = store.State.weather
  console.log("THE WEATHER MAN SAYS:", weather)
  document.getElementById("weather").innerHTML = /*html*/ `
  <p onclick="app.weatherController.drawFaren()">${weather.celcius}&#176C in ${weather.city}</p>
  `
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", _drawFaren);
    WeatherService.getWeather();
  }

  drawCelc() {
    _drawCelc()
  }
  drawFaren() {
    _drawFaren()
  }
}
