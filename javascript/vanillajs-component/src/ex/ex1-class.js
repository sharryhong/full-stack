class Component {
  $target;
  $state;
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
  }
  setup() {}
  template() {}
  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
  setEvent() {}
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}

class App extends Component {
  setup() {
    this.$state = { items: ["item1", "item2", "item3", "item4", "item5"] };
  }
  template() {
    const { items } = this.$state;
    return `
      <button id="append">ADD</button>
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `;
  }
  setEvent() {
    document.querySelector("#append").addEventListener("click", () => {
      const { items } = this.$state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
  }
}

new App(document.querySelector("#app"));
