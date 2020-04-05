export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.celcius = Math.floor(this.kelvin - 273)
    this.farenheit = Math.floor((this.celcius * 1.8) + 32)
    // this.icon = data.weather["0"].icon ? data.weather["0"].icon : '04d'
    // this.weather = data.weather.forEach(info =>)
  }
}