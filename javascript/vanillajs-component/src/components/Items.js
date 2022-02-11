import Component from "../core/Component.js";

class Items extends Component {
  template() {
    const { filteredItems } = this.$props;

    return `
      <ul>
       ${filteredItems
         .map(
           (item) => `
            <li data-id="${item.id}">
              ${item.contents}
              <button class="toggle-btn" style="color: ${
                item.active ? "#09f" : "#f09"
              }">
                ${item.active ? "활성" : "비활성"}
              </button>
              <button class="delete-btn">삭제</button>
            </li>`
         )
         .join("")}
      </ul>
    `;
  }
  setEvent() {
    const { toggleItem, deleteItem } = this.$props;

    this.addEvent("click", ".toggle-btn", (event) => {
      const id = Number(event.target.closest("[data-id]").dataset.id);
      toggleItem(id);
    });
    this.addEvent("click", ".delete-btn", (event) => {
      const id = Number(event.target.closest("[data-id]").dataset.id);
      deleteItem(id);
    });
  }
}

export default Items;
