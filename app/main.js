import WeatherController from "./controllers/weather-controller.js";
import TodoController from "./controllers/todo-controller.js";
import QuoteController from "./controllers/quote-controller.js";
import ImageController from "./controllers/image-controller.js";

class App {
  constructor() {
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
    this.quoteController = new QuoteController();
    this.imageController = new ImageController();
  }
}

window["app"] = new App();