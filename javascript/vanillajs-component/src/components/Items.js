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
    this.$target.addEventListener("click", (event) => {
      const { items } = this.$state;

      if (event.target.classList.contains("add-btn")) {
        this.setState({ items: [...items, `Good${items.length + 1}`] });
      }

      if (event.target.classList.contains("delete-btn")) {
        items.splice(event.target.dataset.index, 1);
        this.setState({ items });
      }
    });
  }
}

export default Items;
