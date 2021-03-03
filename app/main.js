import ValuesController from "./Controllers/ValuesController.js";
import ApiPokiController from "./Controllers/ApiPokiController.js"

class App {
  apiPokiController = new ApiPokiController
  valuesController = new ValuesController();
}

window["app"] = new App();
