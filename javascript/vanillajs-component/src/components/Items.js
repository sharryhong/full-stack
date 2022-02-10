import Component from "../core/Component.js";

class Items extends Component {
  setup() {
    this.$state = { items: ["item1", "item2", "item3", "item4", "item5"] };
  }
  template() {
    const { items } = this.$state;
    return `
      <button class="add-btn">Add</button>
      <ul>
        ${items
          .map(
            (item, index) => `
          <li>
            ${item}
            <button class="delete-btn" data-index="${index}">삭제</button>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  }
  setEvent() {
    this.addEvent("click", ".add-btn", (event) => {
      const { items } = this.$state;
      this.setState({ items: [...items, `Good${items.length + 1}`] });
    });

    this.addEvent("click", ".delete-btn", (event) => {
      const { items } = this.$state;
      items.splice(event.target.dataset.index, 1);
      this.setState({ items });
    });
  }
}

export default Items;
