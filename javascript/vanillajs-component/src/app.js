import Items from "./components/Items.js";
import Todos from "./components/Todos.js";

class App {
  constructor() {
    const $app = document.querySelector("#app");
    // new Items($app);
    new Todos($app);
  }
}

new App();
