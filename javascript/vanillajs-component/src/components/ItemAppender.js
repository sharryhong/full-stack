import Component from "../core/Component.js";

class ItemAppender extends Component {
  template() {
    return `
      <input type="text" class="todo-input" placeholder="input todos" />
      <button class="add-btn">입력</button>
    `;
  }
  setEvent() {
    const { addItem } = this.$props;
    const inputRef = this.$target.querySelector(".todo-input");

    this.addEvent("keyup", ".todo-input", (event) => {
      if (event.key !== "Enter") return;
      const contents = event.target.value;
      contents && addItem(contents);
    });

    this.addEvent("click", ".add-btn", (event) => {
      const contents = inputRef.value;
      contents && addItem(contents);
    });
  }
}

export default ItemAppender;
