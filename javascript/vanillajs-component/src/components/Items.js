import Component from "../core/Component.js";

class Items extends Component {
  setup() {
    this.$state = { items: ["item1", "item2", "item3", "item4", "item5"] };
  }
  template() {
    const { items } = this.$state;
    return `
      <button id="append">Add</button>
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `;
  }
  setEvent() {
    this.$target.querySelector("#append").addEventListener("click", () => {
      const { items } = this.$state;
      this.setState({ items: [...items, `Good${items.length + 1}`] });
    });
  }
}

export default Items;
